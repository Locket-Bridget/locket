import { NextResponse } from "next/server";

// Domain-owned redirect router. PDF copy links to locketsecurity.com/r/<slug>
// instead of vendor URLs directly, so we can swap destinations (e.g. add
// affiliate IDs) without reissuing the lookbook to existing buyers.
//
// Phase 1: empty / direct vendor URLs.
// Phase 2: replace destinations with affiliate-tagged URLs once eligible.
const REDIRECTS: Record<string, string> = {
  "1password": "https://1password.com",
  bitwarden: "https://bitwarden.com",
  proton: "https://proton.me",
  nordvpn: "https://nordvpn.com",
  aura: "https://aura.com",
  yubikey: "https://www.yubico.com",
};

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const dest = REDIRECTS[slug.toLowerCase()];
  if (!dest) {
    return NextResponse.json({ error: "Unknown destination" }, { status: 404 });
  }
  return NextResponse.redirect(dest, 302);
}
