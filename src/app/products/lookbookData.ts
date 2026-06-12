export type LookbookProduct = {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  price: string;
  priceLabel: string;
  pageCountLabel: string;
  chapters: { number: string; title: string; blurb: string }[];
  highlights: string[];
  faq: { q: string; a: string }[];
};

export const lookbook: LookbookProduct = {
  slug: "lookbook",
  name: "Our Picks",
  subtitle: "The Cyber Self-Care Lookbook",
  tagline: "Your full digital glow-up, between two covers.",
  description:
    "The free toolkit was a teaser. This is the whole routine. 12 chapters, the exact tools we trust, and the playbooks we run with our clients, all in one beauty-mag-worthy PDF you can keep on your phone.",
  price: "$24",
  priceLabel: "one-time",
  pageCountLabel: "40+ pages",
  chapters: [
    {
      number: "01",
      title: "Cleanse Your Passwords",
      blurb: "Vault setup, recovery codes, and how to share without sharing.",
    },
    {
      number: "02",
      title: "The Makeover",
      blurb: "Update hygiene that actually fits a creator's posting schedule.",
    },
    {
      number: "03",
      title: "For Your Eyes Only",
      blurb: "Geotag scrubbing, metadata, story hygiene: OPSEC for posting daily.",
    },
    {
      number: "04",
      title: "Encryption Is the New Sunscreen",
      blurb: "Disk, cloud, iMessage, Signal: what to encrypt and how.",
    },
    {
      number: "05",
      title: "Immunity Boost",
      blurb: "Endpoint protection that's actually worth running on a creator's machine.",
    },
    {
      number: "06",
      title: "Two-Factor Like a Pro",
      blurb: "Authenticator apps, hardware keys, and recovery flows that don't lock you out.",
    },
    {
      number: "07",
      title: "Account Recovery Playbook",
      blurb: "Meta, TikTok, IG, X: what to do in the first hour if you're locked out.",
    },
    {
      number: "08",
      title: "Brand-Deal Scam Patterns",
      blurb: "The 7 templates we see most, with screenshots and red flags.",
    },
    {
      number: "09",
      title: "SIM-Swap Defense",
      blurb: "Carrier PINs, port-out lockouts, eSIM hygiene.",
    },
    {
      number: "10",
      title: "Travel & Hotspot Security",
      blurb: "Airport WiFi, hotel networks, and AirTag sweeps before you check out.",
    },
    {
      number: "11",
      title: "Family, Team & Manager Access",
      blurb: "Delegated logins without giving up the keys to the kingdom.",
    },
    {
      number: "12",
      title: "Our Picks: The Tool Stack",
      blurb: "The full curated list: tool by tool, why each, and how to set it up.",
    },
  ],
  highlights: [
    "12 chapters: the full self-care routine, not just the highlights",
    "Our Picks: every tool we actually trust, by category",
    "Plain-English playbooks for when something goes wrong",
    "Printable Incident Response quick card",
    "Designed to feel like the magazine, not the manual",
  ],
  faq: [
    {
      q: "Is this different from the free toolkit?",
      a: "Yes. The free toolkit gives you 5 tips. The lookbook is the full 12-chapter routine, the curated tool stack, the recovery playbook, and the incident-response card. Same brand voice, much deeper.",
    },
    {
      q: "Do I need to be technical?",
      a: "No. It's written like a beauty magazine: clear, calm, and designed for people who post for a living, not pen-test for a living.",
    },
    {
      q: "How do I get it?",
      a: "After checkout, you'll get an email within a few minutes with a download link. The link is good for 7 days, so save the PDF somewhere safe.",
    },
    {
      q: "Refunds?",
      a: "If it isn't useful, email hello@locketsecurity.com within 14 days and we'll refund you. No drama.",
    },
  ],
};

export const lookbookStripeData = {
  priceIdEnvVar: "STRIPE_LOOKBOOK_PRICE_ID" as const,
};
