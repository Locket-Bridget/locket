// src/servicesData.ts

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "cyber-cleanse",
    name: "Cyber Cleanse",
    tagline: "The essential glow‑up for your digital life.",
    description: `
      A one‑off security tune‑up: device scan, password hygiene check,
      and personalized privacy settings. Perfect for influencers who
      haven't done a security spring‑clean in a while.
    `,
  },
  {
    slug: "digital-detox",
    name: "Digital Detox",
    tagline: "Level up your security glow.",
    description: `
      A 30‑day program that hardens accounts, removes data exhaust,
      and teaches you how to spot shady collabs & phishing DMs.
    `,
  },
  {
    slug: "protected-princess",
    name: "Protected Princess",
    tagline: "The full glam cyber self‑care VIP treatment.",
    description: `
      Our white‑glove, always‑on concierge security. Dedicated analyst,
      24/7 device monitoring, reputation defense, and breach response.
    `,
  },
];

// Map service slugs to Stripe Price IDs used for checkout.
// Replace the placeholder priceIds with your real IDs from Stripe Dashboard.
//
// To find Price IDs:
// 1. Log into Stripe Dashboard > Products.
// 2. Select your product > Pricing section.
// 3. Copy the Price ID starting with "price_".
//
// Make sure slugs here match those in the `services` array.

export const servicesStripeData: Record<
  string,
  { priceId: string }
> = {
  "cyber-cleanse": { priceId: "price_1Rl01jQPDzKERhHjEfAk4Ypf" }, // Replace with real ID
  "digital-detox": { priceId: "price_YYYYYYYYYYYYYYYY" },         // Replace with real ID
  "protected-princess": { priceId: "price_ZZZZZZZZZZZZZZZZ" },    // Replace with real ID
};


