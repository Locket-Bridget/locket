import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { signLookbookToken } from "../../lib/lookbookToken";

export const runtime = "nodejs";

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const FROM_ADDRESS =
  process.env.RESEND_FROM_ADDRESS ||
  "Locket Security <onboarding@resend.dev>";

function siteUrl(req: Request): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  return new URL(req.url).origin;
}

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers.get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  const rawBody = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : "bad signature";
    return NextResponse.json({ error: `Webhook Error: ${msg}` }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const productType = session.metadata?.productType;
  if (productType !== "lookbook") {
    return NextResponse.json({ received: true });
  }

  const email = session.customer_details?.email || session.customer_email;
  if (!email) {
    console.error("Lookbook checkout completed without email", session.id);
    return NextResponse.json({ error: "No email on session" }, { status: 200 });
  }

  const token = signLookbookToken({
    purchaseId: session.id,
    email,
    exp: Date.now() + SEVEN_DAYS_MS,
  });

  const downloadUrl = `${siteUrl(req)}/api/lookbook-download?token=${encodeURIComponent(token)}`;

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY not set; cannot send fulfillment email", session.id);
    return NextResponse.json({ received: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "Your Cyber Self-Care Lookbook ★",
      text:
`Hi gorgeous,

Thank you for grabbing Bridget's Picks: The Cyber Self-Care Lookbook ✦

Your download is ready here (link is good for 7 days — save the PDF somewhere safe):
${downloadUrl}

If anything ever feels off, reply to this email and we'll sort it out.

xx,
The Locket Team`,
      html:
`<div style="font-family:Georgia,serif;color:#1E3A8A;max-width:540px;margin:0 auto;padding:24px;">
  <p style="font-size:18px;font-style:italic;">Hi gorgeous,</p>
  <p>Thank you for grabbing <strong>Bridget's Picks: The Cyber Self-Care Lookbook</strong> ✦</p>
  <p>Your download is ready (link is good for 7 days — save the PDF somewhere safe):</p>
  <p style="text-align:center;margin:32px 0;">
    <a href="${downloadUrl}"
       style="background:#1E3A8A;color:#fff8ea;padding:14px 28px;border-radius:9999px;text-decoration:none;font-weight:600;">
      Download the Lookbook ★
    </a>
  </p>
  <p style="font-size:13px;color:#1E3A8A99;">If the button doesn't work, paste this into your browser:<br><span style="word-break:break-all;">${downloadUrl}</span></p>
  <p style="font-size:13px;color:#1E3A8A99;">If anything ever feels off, reply to this email and we'll sort it out.</p>
  <p style="font-style:italic;">xx, the Locket team</p>
</div>`,
    });
  } catch (err) {
    console.error("Failed to send lookbook email", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
