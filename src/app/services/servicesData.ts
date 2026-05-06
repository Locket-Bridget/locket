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
      "Email support anytime you have a question or something feels off",
    ],
  },
  {
    slug: "protected-princess",
    name: "Protected Princess",
    tagline: "The full glam treatment — always on, always protected.",
    description: "You have a real audience, real revenue, and real stakes. One hacked account, one leaked DM, one impersonator running a scam on your followers — and it's a PR crisis. This is white-glove, always-on protection with Bridget in your corner when it matters most.",
    price: "$499",
    priceNote: "per month",
    includes: [
      "Everything in The Main Character",
      "Active impersonation monitoring across all platforms + Google",
      "Brand name, handle & trademark monitoring — catch copycats the second they show up",
      "Link-in-bio & website security checks — we make sure what you're sending followers to is safe",
      "Same-day incident response — if something goes wrong, we respond immediately",
      "Direct access to Bridget via text or Slack (not a ticket system, not a chatbot)",
      "Quarterly full re-audit as your presence and revenue grow",
      "Crisis communication support if you need to address a breach publicly",
    ],
  },
];

export const servicesStripeData: Record<string, { priceId: string }> = {
  "cyber-cleanse": { priceId: "price_1Rl01jQPDzKERhHjEfAk4Ypf" },
  "digital-detox": { priceId: "price_YYYYYYYYYYYYYYYY" },
  "protected-princess": { priceId: "price_ZZZZZZZZZZZZZZZZ" },
};
