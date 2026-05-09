export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceNote: string;
  includes: string[];
  scope?: {
    notIncluded: string[];
  };
};

export const services: Service[] = [
  {
    slug: "cyber-cleanse",
    name: "Cyber Cleanse",
    tagline: "The essential glow-up for your digital life.",
    description: "You're building something real — your following is growing, brand deals are coming in, and your online presence actually matters now. This is a one-time deep dive into your entire digital footprint so you know exactly where you're exposed before someone else finds out first.",
    price: "$99",
    priceNote: "one-time",
    includes: [
      "Full security audit of all your social accounts (IG, TikTok, YouTube, X, Pinterest)",
      "Dark web scan — find out if your email or passwords are already out there",
      "Two-factor authentication setup across every platform",
      "Review of every third-party app connected to your accounts (and a hit list of what to cut)",
      "Privacy settings check — we tighten everything TikTok and IG quietly loosened",
      "Personalized PDF report with your exact next steps",
    ],
  },
  {
    slug: "digital-detox",
    name: "Digital Detox",
    tagline: "Stay protected while you stay posting.",
    description: "You're monetized, you have a management team or brand deals in the pipeline, and losing access to your accounts would cost you real money. This is ongoing protection — we watch your accounts, monitor the dark web, and catch threats before they become headlines.",
    price: "$199",
    priceNote: "per month",
    includes: [
      "Everything in The Starter Pack (included your first month)",
      "24/7 dark web monitoring for your emails, usernames, phone number & payment info",
      "Breach alerts the moment your data shows up anywhere it shouldn't",
      "Fake account detection — we find people impersonating you before your followers do",
      "Monthly threat report tailored to you (written in plain English, not tech speak)",
      "Platform policy alerts — we tell you when TikTok or IG changes something that affects your privacy",
      "Email support with replies within 1 business day, Mon–Fri",
    ],
  },
  {
    slug: "protected-princess",
    name: "Protected Princess",
    tagline: "The full glam treatment — top-priority support and proactive monitoring.",
    description: "You have a real audience, real revenue, and real stakes. One hacked account, one leaked DM, one impersonator running a scam on your followers — and it's a PR crisis. This is white-glove protection with Bridget personally in your corner — proactive monitoring plus priority access when something happens.",
    price: "$499",
    priceNote: "per month",
    includes: [
      "Everything in The Main Character",
      "Active impersonation monitoring across all platforms + Google",
      "Brand name, handle & trademark monitoring — catch copycats the second they show up",
      "Link-in-bio & website security checks — we make sure what you're sending followers to is safe",
      "Priority incident support — best-effort response within 4 business hours (Mon–Fri, 9am–7pm PT)",
      "Direct line to Bridget via Slack during support hours — real human, no ticket queue",
      "Quarterly full re-audit as your presence and revenue grow",
      "Guidance on next steps if something happens — including who to escalate to (lawyer, platform contact, PR)",
    ],
    scope: {
      notIncluded: [
        "We monitor, advise, and guide. We don't guarantee account recovery, perform legal takedowns, or provide legal advice.",
        "Support hours are Mon–Fri, 9am–7pm PT. We are not a 24/7 emergency service.",
        "If a situation requires a lawyer or law enforcement, we'll help you find the right one — that work isn't performed by Locket.",
      ],
    },
  },
];

export const servicesStripeData: Record<string, { priceId: string }> = {
  "cyber-cleanse": { priceId: "price_1Rl01jQPDzKERhHjEfAk4Ypf" },
  "digital-detox": { priceId: "price_YYYYYYYYYYYYYYYY" },
  "protected-princess": { priceId: "price_ZZZZZZZZZZZZZZZZ" },
};
