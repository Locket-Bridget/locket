import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { verifyLookbookToken } from "../../lib/lookbookToken";

export const runtime = "nodejs";

// PDF lives outside /public so it's not statically served. Path is resolved
// relative to the project root at request time. Replace with Vercel Blob /
// S3 + presigned URL when the file is too large to bundle, or when we need
// per-purchase download counts (requires KV, see plan).
const PDF_RELATIVE_PATH = "private/lookbook.pdf";
const FILE_NAME = "bridgets-picks-lookbook.pdf";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const result = verifyLookbookToken(token);
  if (!result.ok) {
    const status = result.reason === "expired" ? 410 : 403;
    return NextResponse.json({ error: result.reason }, { status });
  }

  const filePath = path.join(process.cwd(), PDF_RELATIVE_PATH);
  let pdf: Buffer;
  try {
    pdf = await readFile(filePath);
  } catch (err) {
    console.error("Lookbook PDF missing at", filePath, err);
    return NextResponse.json(
      { error: "Lookbook is being prepared. Try again in a few minutes." },
      { status: 503 }
    );
  }

  const body = new Uint8Array(pdf);
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${FILE_NAME}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
