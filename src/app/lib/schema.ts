import type { Guide } from "../toolkit/guidesData";
import type { GlossaryTerm } from "../toolkit/guidesTaxonomy";

const SITE_URL = "https://www.locketsecurity.com";
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const guideUrl = (slug: string) => `${SITE_URL}/toolkit/${slug}`;
const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Locket Security",
    alternateName: "Locket",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description:
      "Personal cybersecurity and brand protection built for content creators — account recovery, dark web monitoring, threat detection, and security education designed for the way creators actually live online.",
    email: "hello@locketsecurity.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: ["https://www.instagram.com/locketsecurity/"],
    knowsAbout: [
      "Personal cybersecurity for content creators",
      "Account recovery for hacked social media",
      "Dark web monitoring for influencers",
      "Brand protection for creators",
      "Two-factor authentication setup",
      "Phishing prevention for creators",
      "Impersonation account takedowns",
    ],
    slogan: "Cyber care is self care.",
    foundingDate: "2026",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: "Locket Security",
    alternateName: "Locket",
    url: SITE_URL,
    description:
      "Personal cybersecurity and brand protection for content creators.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

type ServiceTier = {
  name: string;
  description: string;
  price: string;
  recurring: boolean;
  url?: string;
};

export function serviceSchema(tier: ServiceTier) {
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    price: tier.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: tier.url ?? `${SITE_URL}/services`,
  };

  if (tier.recurring) {
    offer.priceSpecification = {
      "@type": "UnitPriceSpecification",
      price: tier.price,
      priceCurrency: "USD",
      billingDuration: "P1M",
      billingIncrement: 1,
      unitText: "MONTH",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: tier.name,
    description: tier.description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "Personal cybersecurity for content creators",
    offers: offer,
  };
}

export function allServiceSchemas() {
  return [
    serviceSchema({
      name: "Cyber Cleanse",
      description:
        "One-time audit of a creator's entire digital footprint — every monetized account, email, password, and data-broker exposure — with a prioritized fix list. Delivered in 5 business days.",
      price: "99",
      recurring: false,
    }),
    serviceSchema({
      name: "Digital Detox",
      description:
        "Continuous account monitoring and dark web surveillance with proactive threat detection for monetized creators. Includes monthly check-ins and immediate alerts when credentials surface in breaches.",
      price: "199",
      recurring: true,
    }),
    serviceSchema({
      name: "Protected Princess",
      description:
        "Premium white-glove protection with priority response, direct crisis-management access, and full account-takeover recovery support for top-tier creators with significant brand revenue.",
      price: "499",
      recurring: true,
    }),
  ];
}

type FaqItem = { q: string; a: string };

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// --- Guide library schema (Article / HowTo / Breadcrumb / ItemList / Glossary) ---

export function articleSchema(guide: Guide) {
  const url = guideUrl(guide.slug);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.excerpt,
    mainEntityOfPage: url,
    image: `${SITE_URL}/og-image.png`,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: {
      "@type": "Person",
      name: guide.author.name,
      ...(guide.author.url ? { url: abs(guide.author.url) } : {}),
    },
    ...(guide.reviewer
      ? { reviewedBy: { "@type": "Person", name: guide.reviewer.name } }
      : {}),
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
    ...(guide.sources?.length
      ? { citation: guide.sources.map((s) => s.url) }
      : {}),
  };
}

export function howToSchema(guide: Guide) {
  if (!guide.howTo) return null;
  const url = guideUrl(guide.slug);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.howTo.name,
    description: guide.howTo.description,
    ...(guide.howTo.totalTime ? { totalTime: guide.howTo.totalTime } : {}),
    step: guide.howTo.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.anchor ? { url: `${url}#${s.anchor}` } : {}),
    })),
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.url),
    })),
  };
}

export function guideListSchema(items: { title: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.title,
      url: guideUrl(g.slug),
    })),
  };
}

export function glossarySchema(terms: GlossaryTerm[]) {
  const setId = `${SITE_URL}/glossary#termset`;
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": setId,
    name: "Creator Security Glossary",
    url: `${SITE_URL}/glossary`,
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/glossary#${t.slug}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: setId,
    })),
  };
}

export const homepageFaqs: FaqItem[] = [
  {
    q: "How much does cybersecurity for content creators cost?",
    a: "Creator cybersecurity services in the US range from one-time audits ($99–$299) to monthly monitoring ($150–$500/month). At Locket Security, plans start at $99 for a one-time Cyber Cleanse, $199/month for ongoing Digital Detox monitoring, and $499/month for white-glove Protected Princess service. Pricing varies based on follower count, number of monetized platforms, and threat history.",
  },
  {
    q: "How do creators get their hacked Instagram accounts back?",
    a: "Recovery starts within the first 24 hours: secure any still-accessible email, file Instagram's hacked-account form, lock connected accounts (TikTok, YouTube, Gmail), and document everything for platform support. 61% of self-recovery attempts fail. Specialist services like Locket Security recover most creator accounts within 48–72 hours by working directly with platform trust-and-safety contacts.",
  },
  {
    q: "What does a creator cybersecurity audit actually include?",
    a: "A Locket Security audit reviews every account a creator monetizes (Instagram, TikTok, YouTube, email, banking, brand-deal logins), checks for password reuse, dark web exposure, 2FA gaps, and impersonator accounts, and produces a prioritized fix list. The Cyber Cleanse audit takes 5 business days and is $99 one-time.",
  },
  {
    q: "Who is Locket Security for?",
    a: "Locket Security is built for content creators and influencers with growing audiences and monetized accounts — typically 10K+ followers across Instagram, TikTok, or YouTube. Plans scale from emerging creators (Cyber Cleanse, $99 one-time) to monetized full-time creators (Digital Detox, $199/month) to top-tier creators with significant brand revenue (Protected Princess, $499/month).",
  },
  {
    q: "Is dark web monitoring worth it for creators?",
    a: "Yes, especially for monetized creators. A single 2024 breach exposed 49 million influencer records — emails, phone numbers, and home addresses are actively traded on data broker sites. Locket Security's Digital Detox plan ($199/month) monitors the dark web continuously and alerts within 24 hours if your credentials appear, giving you time to rotate passwords before an account takeover happens.",
  },
];
