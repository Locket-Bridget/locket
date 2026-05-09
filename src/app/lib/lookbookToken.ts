import { createHmac, timingSafeEqual } from "crypto";

export type LookbookTokenPayload = {
  purchaseId: string;
  email: string;
  exp: number;
};

function getSecret(): string {
  const secret = process.env.LOOKBOOK_DOWNLOAD_SECRET;
  if (!secret) throw new Error("LOOKBOOK_DOWNLOAD_SECRET is not set");
  return secret;
}

function b64url(buf: Buffer): string {
  return buf.toString("base64url");
}

export function signLookbookToken(payload: LookbookTokenPayload): string {
  const body = b64url(Buffer.from(JSON.stringify(payload)));
  const sig = b64url(createHmac("sha256", getSecret()).update(body).digest());
  return `${body}.${sig}`;
}

export function verifyLookbookToken(
  token: string
): { ok: true; payload: LookbookTokenPayload } | { ok: false; reason: string } {
  const parts = token.split(".");
  if (parts.length !== 2) return { ok: false, reason: "malformed" };
  const [body, sig] = parts;

  const expected = b64url(createHmac("sha256", getSecret()).update(body).digest());
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, reason: "bad-signature" };
  }

  let payload: LookbookTokenPayload;
  try {
    payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    return { ok: false, reason: "bad-payload" };
  }

  if (typeof payload.exp !== "number" || Date.now() > payload.exp) {
    return { ok: false, reason: "expired" };
  }

  return { ok: true, payload };
}
