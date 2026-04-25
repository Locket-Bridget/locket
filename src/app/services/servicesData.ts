export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  priceNote: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "cyber-cleanse",
    name: "Cyber Cleanse",
    tagline: "The essential glow-up for your digital life.",
    description: "A one-time deep dive into your entire digital presence. We audit every account, flag every vulnerability, and hand you a personalized action plan — so you know exactly where you stand and what to fix.",
    price: "$97",
    priceNote: "one-time",
    includes: [
      "Full audit of all social accounts (IG, TikTok, YouTube, X)",
      "Two-factor authentication review & setup guide",
      "Connected third-party app review — revoke what shouldn't be there",
      "Privacy settings check across all platforms",
      "Email security check + dark web scan for your addresses",
      "Branded PDF report with your personalized action plan",
    ],
  },
  {
    slug: "digital-detox",
    name: "Digital Detox",
    tagline: "Stay protected while you stay posting.",
    description: "Ongoing monthly monitoring so threats get caught before they become crises. You get the Cyber Cleanse audit to start, then we watch your accounts, track the dark web, and send you a monthly intel report — all handled for you.",
    price: "$197",
    priceNote: "per month",
    includes: [
      "Everything in Cyber Cleanse (included in first month)",
      "Continuous dark web monitoring for your emails, usernames & phone number",
      "Breach alerts — you hear about it before anyone else does",
      "Monthly personalized threat intel report",
      "Platform security update alerts (new TikTok/IG policy changes that affect you)",
      "Email support for any security questions",
    ],
  },
  {
    slug: "protected-princess",
    name: "Protected Princess",
    tagline: "The full glam treatment — always on, always protected.",
    description: "Our white-glove tier for influencers whose brand is their business. Everything in Digital Detox, plus active monitoring for fake accounts and impersonators, and direct access to Bridget if something goes wrong.",
    price: "$497",
    priceNote: "per month",
    includes: [
      "Everything in Digital Detox",
      "Fake account & impersonation monitoring across all platforms",
      "Brand name & handle monitoring — catch copycats fast",
      "Priority incident response — if you get hacked, we respond same day",
      "Direct access to Bridget via text/Slack",
      "Quarterly full re-audit as your presence grows",
    ],
  },
];

export const servicesStripeData: Record<string, { priceId: string }> = {
  "cyber-cleanse": { priceId: "price_1Rl01jQPDzKERhHjEfAk4Ypf" },
  "digital-detox": { priceId: "price_YYYYYYYYYYYYYYYY" },
  "protected-princess": { priceId: "price_ZZZZZZZZZZZZZZZZ" },
};
