// Shared types for the Locket Security creator guide library.
// One typed Guide object drives both the rendered page and every JSON-LD block.

export type ClusterId =
  | "account-recovery"
  | "two-factor-auth"
  | "password-security"
  | "scams-impersonation"
  | "platform-hardening"
  | "privacy-opsec";

export type Severity = "High" | "Medium" | "Low";

// The doodle used for the guide's illustration — maps to components in Doodles.tsx
export type Illustration =
  | "lock"
  | "shield"
  | "drop"
  | "mirror"
  | "lipstick"
  | "teacup";

// One answer-first, question-led section.
//   id     = anchor slug (e.g. "how-do-i-know-im-hacked")
//   question = the H2, phrased the way a creator would type it
//   answer = a 40–60 word direct answer, liftable verbatim by an AI engine
//   body   = optional 1–2 supporting paragraphs
export type GuideSection = {
  id: string;
  question: string;
  answer: string;
  body?: string[];
};

export type HowToStep = {
  name: string;
  text: string;
  anchor?: string; // links the step to a section #id on the page
};

export type HowTo = {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, e.g. "PT45M"
  steps: HowToStep[];
};

export type GuideFaq = { q: string; a: string };

export type Person = {
  name: string;
  role: string;
  url?: string;
};

export type GuideSource = { label: string; url: string };

export type Guide = {
  // identity & taxonomy
  slug: string;
  cluster: ClusterId;
  category: string; // human label, e.g. "Account Recovery"
  flagship?: boolean;

  // titles & SEO
  title: string; // on-page H1, question form preferred
  metaTitle: string; // <title>
  metaDescription: string; // meta description
  excerpt: string; // hub card blurb

  // answer-first body
  tldr: string; // 40–60 word top-of-page direct answer (the prime liftable chunk)
  sections: GuideSection[];
  howTo?: HowTo;
  faqs: GuideFaq[];

  // relationships & E-E-A-T
  relatedSlugs: string[];
  sources?: GuideSource[];
  author: Person;
  reviewer?: Person;
  datePublished: string; // ISO date
  dateModified: string; // ISO date

  // presentation
  severity: Severity;
  illustration: Illustration;
};
