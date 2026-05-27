import type { Guide } from "./types";
import { BRIDGET, LOCKET_TEAM } from "./authors";

const PUBLISHED = "2026-05-27";
const MODIFIED = "2026-05-27";

export const passwordSecurityGuides: Guide[] = [
  {
    slug: "best-password-manager-creators",
    cluster: "password-security",
    category: "Password Security",
    title: "What's the best password manager for creators?",
    metaTitle: "Best Password Manager for Creators (2026 Guide)",
    metaDescription:
      "How creators should choose a password manager: what features matter, how to share logins with a team safely, and how to migrate without losing access.",
    excerpt:
      "A password manager is the foundation of creator security — it makes unique passwords effortless and lets you share logins with a team without handing over the keys.",
    tldr:
      "The best password manager for a creator is a reputable, cross-platform one with secure sharing and breach monitoring — 1Password, Bitwarden, and Dashlane are all strong choices. The “best” pick matters less than actually using one: it generates unique passwords for every account and lets you share logins with a manager or editor without exposing the raw password.",
    sections: [
      {
        id: "why-creators-need-password-manager",
        question: "Why does a creator need a password manager?",
        answer:
          "Creators juggle dozens of monetized logins — platforms, email, banking, brand portals — and reusing passwords across them means one breach unlocks everything. A password manager generates and stores a unique password for each account, so a single leak stays contained. It's the cheapest, highest-impact security upgrade you can make.",
      },
      {
        id: "what-features-matter",
        question: "What features should I look for?",
        answer:
          "Prioritize cross-platform apps (phone, browser, desktop), secure password sharing for your team, built-in 2FA/authenticator support, breach and dark-web monitoring, and a clear security track record. Avoid storing passwords in your browser alone — a dedicated manager is more secure and far easier to share from safely.",
      },
      {
        id: "share-logins-with-team",
        question: "How do I share logins with my team safely?",
        answer:
          "Use the password manager's sharing feature instead of texting passwords. It lets an editor or manager log in without ever seeing the actual password, and you can revoke access instantly when someone leaves. This avoids the most common creator leak: a shared password sitting in old DMs or a notes app.",
      },
    ],
    faqs: [
      {
        q: "Is it safe to keep all my passwords in one app?",
        a: "Yes — reputable password managers encrypt your vault so even the company can't read it, and you unlock it with one strong master password plus 2FA. The risk of reusing weak passwords everywhere is far greater than the risk of a well-secured vault.",
      },
      {
        q: "Free or paid password manager?",
        a: "Free tiers (like Bitwarden's) are genuinely secure and fine to start with. Paid plans add team sharing, more 2FA options, and breach monitoring — worth it once you're monetized and sharing access.",
      },
    ],
    relatedSlugs: ["create-strong-password", "stop-reusing-passwords", "team-access-shared-logins"],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "teacup",
  },

  {
    slug: "create-strong-password",
    cluster: "password-security",
    category: "Password Security",
    title: "How do I create a strong password?",
    metaTitle: "How to Create a Strong Password (2026)",
    metaDescription:
      "A strong password is long, unique, and random. Learn the passphrase method, why length beats complexity, and how to never have to remember them all.",
    excerpt:
      "Strong passwords aren't about cramming in symbols — they're about length and uniqueness. Here's the method that actually works.",
    tldr:
      "A strong password is long (at least 16 characters), unique to one account, and random. The easiest way to hit that is a password manager that generates random strings for you. If you must memorize one — like your master password — use a passphrase of four or more unrelated words, which is both long and easy to recall.",
    sections: [
      {
        id: "what-makes-password-strong",
        question: "What actually makes a password strong?",
        answer:
          "Length and unpredictability matter most — a 16+ character password is exponentially harder to crack than a short one, even a complex short one. Uniqueness is just as important: a strong password reused on a breached site is no longer strong. Randomness beats clever substitutions like “P@ssw0rd,” which attackers expect.",
      },
      {
        id: "passphrase-method",
        question: "How does the passphrase method work?",
        answer:
          "Pick four or more random, unrelated words — like “copper-violin-meadow-trophy” — and you get a password that's long, memorable, and very hard to guess. It's ideal for the few passwords you must type from memory, such as your password-manager master password or your laptop login.",
      },
      {
        id: "remember-all-passwords",
        question: "How do I remember a unique password for every account?",
        answer:
          "You don't — that's the password manager's job. It generates and stores a random password per account, so you only memorize one strong master passphrase. This removes the temptation to reuse or weaken passwords just so you can recall them.",
      },
    ],
    faqs: [
      {
        q: "Do I still need to change passwords every 90 days?",
        a: "No. Modern guidance says forced rotation leads to weaker, predictable passwords. Change a password only when it's strong, unique, and either reused or possibly exposed in a breach.",
      },
    ],
    relatedSlugs: ["best-password-manager-creators", "stop-reusing-passwords", "passkeys-explained"],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "drop",
  },

  {
    slug: "stop-reusing-passwords",
    cluster: "password-security",
    category: "Password Security",
    title: "Why is reusing passwords dangerous?",
    metaTitle: "Why Reusing Passwords Is Dangerous (Credential Stuffing)",
    metaDescription:
      "Reusing one password across accounts lets a single breach unlock all of them through credential stuffing. Here's how the attack works and how to fix it fast.",
    excerpt:
      "One reused password is the most common reason creators get hacked. Here's the attack behind it — credential stuffing — and how to break the habit.",
    tldr:
      "Reusing passwords is dangerous because of credential stuffing: when one site is breached, attackers take the leaked email-and-password pairs and try them on Instagram, TikTok, email, and banking, automatically. One reuse can unlock your whole digital life. The fix is a unique password per account, made effortless by a password manager.",
    sections: [
      {
        id: "what-is-credential-stuffing",
        question: "What is credential stuffing?",
        answer:
          "Credential stuffing is an automated attack where hackers take username-and-password pairs leaked from one breach and test them across hundreds of other sites. Because so many people reuse passwords, a meaningful share of those attempts succeed — which is why a single old breach can lead to your Instagram being taken over today.",
      },
      {
        id: "check-if-exposed",
        question: "How do I check if my passwords have been exposed?",
        answer:
          "Use a breach-check tool like Have I Been Pwned, or your password manager's built-in breach monitoring, which flags accounts whose credentials appeared in known leaks. Dark-web monitoring services go further and alert you when your details surface in newly traded breach data.",
      },
      {
        id: "fix-reused-passwords",
        question: "How do I fix reused passwords without it being overwhelming?",
        answer:
          "Start with your highest-value accounts — email first, then social platforms and banking. Change each to a unique, manager-generated password and enable 2FA. Then work through the rest over a week. Your password manager's security audit will rank which accounts still share a password so you know where to go next.",
      },
    ],
    faqs: [
      {
        q: "I only reuse one password on “unimportant” sites — is that fine?",
        a: "It's risky, because an unimportant site is often the one that gets breached, and its login may match your email or a recovery address. Unique passwords everywhere is the only reliable rule, and a password manager makes it free of effort.",
      },
    ],
    relatedSlugs: [
      "best-password-manager-creators",
      "what-is-dark-web-monitoring",
      "recover-locked-out-email",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "lock",
  },

  {
    slug: "passkeys-explained",
    cluster: "password-security",
    category: "Password Security",
    title: "What are passkeys and should creators use them?",
    metaTitle: "What Are Passkeys? A Creator's Guide (2026)",
    metaDescription:
      "Passkeys replace passwords with a phishing-resistant login tied to your device. Learn how they work, where to use them, and why creators should turn them on.",
    excerpt:
      "Passkeys are the password's replacement — phishing-resistant, nothing to type, nothing to leak. Here's what they are and where to start.",
    tldr:
      "A passkey is a passwordless login tied to your device (phone, laptop, or security key) and unlocked with your face, fingerprint, or PIN. Because there's no password to phish or reuse, passkeys resist the most common attacks. Creators should turn them on wherever offered — Google, Apple, and major platforms now support them.",
    sections: [
      {
        id: "how-passkeys-work",
        question: "How do passkeys work?",
        answer:
          "A passkey creates a cryptographic key pair: a private key stays locked on your device and a public key sits with the service. You log in by unlocking the device with your face, fingerprint, or PIN — nothing secret is typed or transmitted. There's no password to steal, guess, reuse, or phish.",
      },
      {
        id: "why-passkeys-safer",
        question: "Why are passkeys safer than passwords plus 2FA?",
        answer:
          "Passkeys are phishing-resistant by design — they only work on the real site they were created for, so a fake login page can't capture anything usable. They also can't be leaked in a database breach. For high-value creator accounts, that closes the gaps that passwords and even SMS 2FA leave open.",
      },
      {
        id: "where-to-use-passkeys",
        question: "Where should I start using passkeys?",
        answer:
          "Begin with your most critical accounts that support them: your Google or Apple account, then platforms like Instagram and your password manager. You can keep a password as a backup during the transition. Syncing passkeys through your password manager or platform account lets you use them across all your devices.",
      },
    ],
    faqs: [
      {
        q: "What happens to my passkey if I lose my phone?",
        a: "If your passkeys sync through your Google, Apple, or password-manager account, they're available on your other signed-in devices. Keep a backup sign-in method and recovery options set up so a lost device never locks you out.",
      },
    ],
    relatedSlugs: [
      "authenticator-app-vs-sms-2fa",
      "set-up-2fa-youtube-google",
      "create-strong-password",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "shield",
  },
];
