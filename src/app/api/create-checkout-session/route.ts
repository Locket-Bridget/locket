import { NextResponse } from "next/server";
import Stripe from "stripe";

type ProductType = "service" | "lookbook";

function siteUrl(req: Request): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  return new URL(req.url).origin;
}

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const body = (await req.json()) as { priceId?: string; productType?: ProductType };
    const productType: ProductType = body.productType ?? "service";

    let priceId: string | undefined;
    let successPath: string;
    let cancelPath: string;
    const metadata: Record<string, string> = { productType };

    if (productType === "lookbook") {
      priceId = process.env.STRIPE_LOOKBOOK_PRICE_ID;
      if (!priceId) {
        return NextResponse.json(
          { error: "Lookbook price not configured" },
          { status: 500 }
        );
      }
      successPath = "/lookbook/success?session_id={CHECKOUT_SESSION_ID}";
      cancelPath = "/lookbook";
    } else {
      priceId = body.priceId;
      if (!priceId) {
        return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
      }
      successPath = "/success";
      cancelPath = "/cancel";
    }

    const origin = siteUrl(req);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}${successPath}`,
      cancel_url: `${origin}${cancelPath}`,
      metadata,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
