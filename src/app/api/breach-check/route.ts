import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const apiKey = process.env.HIBP_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "HIBP API key not configured" }, { status: 500 });
  }

  const res = await fetch(
    `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`,
    {
      headers: {
        "hibp-api-key": apiKey,
        "user-agent": "Locket-Security-Internal",
      },
    }
  );

  if (res.status === 404) {
    return NextResponse.json({ breaches: [] });
  }

  if (!res.ok) {
    return NextResponse.json({ error: "HIBP request failed" }, { status: res.status });
  }

  const breaches = await res.json();
  return NextResponse.json({ breaches });
}
