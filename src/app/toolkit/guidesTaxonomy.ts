import type { ClusterId, GuideFaq } from "./guides/types";

export type Cluster = {
  id: ClusterId;
  label: string;
  blurb: string;
  // Tailwind classes for the category pill, matching the ArticleCard convention.
  categoryColor: string;
};

// Ordered for the hub: highest-intent recovery first, foundational hardening last.
export const clusters: Cluster[] = [
  {
    id: "account-recovery",
    label: "Account Recovery & Access",
    blurb: "Locked out or hacked? Step-by-step plans to get your accounts back.",
    categoryColor: "bg-[#fce8e3] text-[#C8553D]",
  },
  {
    id: "two-factor-auth",
    label: "Two-Factor Authentication",
    blurb: "Turn on the single best protection against account takeover.",
    categoryColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "scams-impersonation",
    label: "Scams & Impersonation",
    blurb: "Spot fake brand deals, phishing, and clones before they cost you.",
    categoryColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "platform-hardening",
    label: "Platform Hardening",
    blurb: "Lock down every account, app, and login a creator depends on.",
    categoryColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "password-security",
    label: "Password Security",
    blurb: "Unique passwords, password managers, and passkeys made simple.",
    categoryColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "privacy-opsec",
    label: "Privacy & OpSec",
    blurb: "Shrink your digital footprint and keep your private life private.",
    categoryColor: "bg-[#fce8e3] text-[#C8553D]",
  },
];

export function getCluster(id: ClusterId): Cluster {
  const cluster = clusters.find((c) => c.id === id);
  if (!cluster) throw new Error(`Unknown cluster: ${id}`);
  return cluster;
}

export type GlossaryTerm = {
  term: string;
  slug: string; // anchor id on the glossary page
  definition: string;
  relatedSlug?: string; // optional deep link to a guide
};

export const glossary: GlossaryTerm[] = [
  {
    term: "Account Takeover (ATO)",
    slug: "account-takeover",
    definition:
      "When an attacker gains control of one of your accounts and locks you out, often to scam your audience or steal data.",
    relatedSlug: "recover-hacked-instagram-account",
  },
  {
    term: "Credential Stuffing",
    slug: "credential-stuffing",
    definition:
      "An automated attack that tries email-and-password pairs leaked from one breach across many other sites, exploiting reused passwords.",
    relatedSlug: "stop-reusing-passwords",
  },
  {
    term: "Dark Web Monitoring",
    slug: "dark-web-monitoring",
    definition:
      "A service that scans breach dumps and underground markets for your data and alerts you when it appears, so you can react early.",
    relatedSlug: "what-is-dark-web-monitoring",
  },
  {
    term: "Data Broker",
    slug: "data-broker",
    definition:
      "A company that compiles and sells your personal details — name, address, phone, relatives — assembled from public records and purchases.",
    relatedSlug: "remove-info-from-data-brokers",
  },
  {
    term: "Doxxing",
    slug: "doxxing",
    definition:
      "Publishing someone's private information, like a home address or real name, to enable harassment.",
    relatedSlug: "prevent-doxxing-creators",
  },
  {
    term: "Infostealer Malware",
    slug: "infostealer",
    definition:
      "Malicious software that scrapes saved passwords and browser session cookies from an infected device and sends them to an attacker.",
    relatedSlug: "session-token-theft-explained",
  },
  {
    term: "Passkey",
    slug: "passkey",
    definition:
      "A passwordless login tied to your device and unlocked with your face, fingerprint, or PIN — phishing-resistant and nothing to leak.",
    relatedSlug: "passkeys-explained",
  },
  {
    term: "Phishing",
    slug: "phishing",
    definition:
      "A scam that tricks you into entering your login or details on a fake page or message that imitates a service you trust.",
    relatedSlug: "copyright-strike-phishing",
  },
  {
    term: "Session Token",
    slug: "session-token",
    definition:
      "A cookie your browser stores to keep you logged in. If stolen, it lets an attacker resume your session without your password or 2FA.",
    relatedSlug: "session-token-theft-explained",
  },
  {
    term: "SIM-Swap Attack",
    slug: "sim-swap",
    definition:
      "When a scammer convinces your carrier to move your phone number to their SIM, intercepting the SMS codes used for 2FA.",
    relatedSlug: "authenticator-app-vs-sms-2fa",
  },
  {
    term: "Two-Factor Authentication (2FA)",
    slug: "two-factor-authentication",
    definition:
      "A login step that requires a second proof of identity — an app code, passkey, or text — on top of your password.",
    relatedSlug: "set-up-2fa-instagram",
  },
];

export const libraryFaqs: GuideFaq[] = [
  {
    q: "What is the Locket Security creator guide library?",
    a: "It's a free, plain-English library of security how-to guides built for content creators — covering hacked-account recovery, two-factor authentication, scams and impersonation, platform hardening, and privacy. Each guide gives you direct, step-by-step answers without enterprise jargon.",
  },
  {
    q: "How do creators get hacked most often?",
    a: "The two most common ways are reused passwords (one breach unlocks many accounts via credential stuffing) and session-token theft from malware hidden in fake brand-deal files, which bypasses passwords and 2FA. Unique passwords, cautious link-clicking, and passkeys address both.",
  },
  {
    q: "Is two-factor authentication enough to protect my account?",
    a: "2FA stops the most common attack — logging in with a stolen password — but it doesn't stop session-token theft, where malware reuses your already-logged-in session. Pair 2FA with a password manager, careful file handling, and ideally a passkey for the strongest protection.",
  },
  {
    q: "Can Locket Security help if I'm already hacked?",
    a: "Yes. Beyond these free guides, Locket Security offers hands-on account-recovery and protection plans for creators. Start with the relevant recovery guide here, and reach out at hello@locketsecurity.com if you need direct help.",
  },
];
