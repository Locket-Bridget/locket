import type { Guide } from "./types";
import { BRIDGET, LOCKET_TEAM } from "./authors";

const PUBLISHED = "2026-05-27";
const MODIFIED = "2026-05-27";

export const platformHardeningGuides: Guide[] = [
  {
    slug: "secure-instagram-account-checklist",
    cluster: "platform-hardening",
    category: "Lock It All Down",
    title: "How do I lock down my Instagram account?",
    metaTitle: "How to Lock Down Your Instagram Account: Checklist (2026)",
    metaDescription:
      "A creator's Instagram security checklist: 2FA, login alerts, connected-app cleanup, recovery details, and the settings that stop most account takeovers.",
    excerpt:
      "A run-through of every Instagram security setting that matters for creators. Do these once and you've closed the doors most takeovers walk through.",
    tldr:
      "To lock down Instagram, enable authenticator-app 2FA, turn on login alerts, set a unique password, confirm your email and phone are correct, review “Where you're logged in” and remove unknown sessions, and audit connected third-party apps. Save backup codes offline. These settings, done once, block the vast majority of creator takeovers.",
    sections: [
      {
        id: "instagram-core-settings",
        question: "What are the must-do Instagram security settings?",
        answer:
          "Turn on two-factor authentication with an authenticator app, enable login alerts so you're warned of new sign-ins, set a unique password, and verify the email and phone number on file are yours. These four together stop the most common takeover paths: guessed passwords and silent logins.",
      },
      {
        id: "instagram-sessions-apps",
        question: "How do I check who's logged into my Instagram?",
        answer:
          "Go to Accounts Center → Password and security → Where you're logged in. Review every active session and log out anything you don't recognize. In the same area, check “Apps and websites” and remove any third-party app you no longer use. Old connected apps are a common backdoor.",
      },
      {
        id: "instagram-recovery-readiness",
        question: "How do I make recovery easier if I'm ever locked out?",
        answer:
          "Keep your recovery email and phone current, save your 2FA backup codes in your password manager, and add a second 2FA method or passkey. If you're eligible, get verified, because it speeds support. Doing this now means a future hack is a quick recovery instead of a drawn-out battle.",
      },
    ],
    faqs: [
      {
        q: "How often should I do this checklist?",
        a: "Run the full check when you set up the account, then a quick session-and-connected-apps review every few months or any time you get an unexpected login alert.",
      },
    ],
    relatedSlugs: [
      "set-up-2fa-instagram",
      "remove-connected-third-party-apps",
      "recover-hacked-instagram-account",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "shield",
  },

  {
    slug: "secure-tiktok-account-checklist",
    cluster: "platform-hardening",
    category: "Lock It All Down",
    title: "How do I lock down my TikTok account?",
    metaTitle: "How to Lock Down Your TikTok Account: Checklist (2026)",
    metaDescription:
      "Secure your TikTok with this creator checklist: two-step verification, device management, connected-app review, and safe settings for business accounts.",
    excerpt:
      "The TikTok settings every creator should set once: two-step verification, device cleanup, and the right safeguards for a monetized account.",
    tldr:
      "To lock down TikTok, enable 2-step verification with two methods, set a unique password, review Security → Manage devices and remove unknown ones, check connected apps, and confirm your linked email and phone. For business or Creator accounts, limit who has the login and use secure sharing rather than handing out the password.",
    sections: [
      {
        id: "tiktok-core-settings",
        question: "What are the essential TikTok security settings?",
        answer:
          "Turn on 2-step verification with at least two methods, use a unique password, and confirm the email and phone tied to the account are yours. In Settings → Security, enable security alerts so you're notified of unusual logins. These basics stop the most common credential-based takeovers.",
      },
      {
        id: "tiktok-device-management",
        question: "How do I check which devices are logged into TikTok?",
        answer:
          "Open Settings and privacy → Security & permissions → Manage devices. Review every device with an active session and remove any you don't recognize. Do the same for any connected third-party apps. Unknown devices left logged in are how attackers keep posting even after you change your password.",
      },
      {
        id: "tiktok-business-safety",
        question: "How should I secure a TikTok business or Shop account?",
        answer:
          "Monetized accounts carry more risk: enable 2-step verification, keep the login limited to as few people as possible, and share access through a password manager rather than the raw password. Review team permissions regularly and remove access the moment a collaborator's role ends.",
      },
    ],
    faqs: [
      {
        q: "Does a private account make me more secure?",
        a: "Privacy controls who sees your content, not who can log in. You still need 2-step verification and a unique password. Security and privacy are separate settings, and creators need both.",
      },
    ],
    relatedSlugs: [
      "set-up-2fa-tiktok",
      "team-access-shared-logins",
      "recover-hacked-tiktok-account",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "drop",
  },

  {
    slug: "remove-connected-third-party-apps",
    cluster: "platform-hardening",
    category: "Lock It All Down",
    title: "How do I remove apps connected to my accounts?",
    metaTitle: "How to Remove Connected Third-Party Apps (Creator Guide)",
    metaDescription:
      "Old connected apps and “link in bio” tools keep access to your accounts long after you stop using them. Learn how to audit and revoke third-party access.",
    excerpt:
      "Every analytics tool, scheduler, and giveaway app you ever connected still has a key to your account. Here's how to find and revoke the ones you don't use.",
    tldr:
      "Third-party apps you've connected (schedulers, analytics tools, giveaway apps) keep access to your accounts until you revoke it. Audit them in each platform's “Apps and websites” or “Connected apps” settings (and in your Google account), and remove anything you don't actively use. A forgotten app with broad permissions is an easy backdoor.",
    sections: [
      {
        id: "why-revoke-apps",
        question: "Why are old connected apps a security risk?",
        answer:
          "When you connect a tool, you grant it ongoing access, sometimes to post, read DMs, or manage your account. If that company is later breached or turns malicious, the access still works. Revoking apps you no longer use shrinks your attack surface to only the tools you actually trust and need.",
      },
      {
        id: "where-to-audit-apps",
        question: "Where do I find connected apps on each platform?",
        answer:
          "Instagram/Facebook: Accounts Center → Apps and websites. TikTok: Settings → Security & permissions → connected apps. Google/YouTube: myaccount.google.com → Security → “Your connections to third-party apps.” X and others have similar “Connected apps” pages. Review each and remove anything unfamiliar or unused.",
      },
      {
        id: "safe-app-habits",
        question: "How do I connect new apps more safely?",
        answer:
          "Before connecting a tool, check it's reputable and read the permissions it requests. Be wary of apps wanting full control when they only need analytics. Prefer official platform integrations, and re-audit your connected apps every few months so the list never grows stale.",
      },
    ],
    faqs: [
      {
        q: "Will removing a connected app log me out or break my account?",
        a: "No. Revoking an app only cuts that tool's access, not your own login. If you still use the app, you can reconnect it; if you don't, removing it simply closes a door you weren't using.",
      },
    ],
    relatedSlugs: [
      "secure-instagram-account-checklist",
      "secure-creator-email-account",
      "session-token-theft-explained",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "teacup",
  },

  {
    slug: "secure-creator-email-account",
    cluster: "platform-hardening",
    category: "Lock It All Down",
    title: "How do I secure the email behind my accounts?",
    metaTitle: "How to Secure the Email Behind Your Creator Accounts",
    metaDescription:
      "Your email is the master key to every account. Lock it down with strong 2FA, a separate business address, and protection against forwarding-rule attacks.",
    excerpt:
      "Your email controls password resets for everything else, which makes it the most important account you own. Here's how to make it the hardest to crack.",
    tldr:
      "Secure your email first. It controls password resets for every other account. Protect it with a unique password and the strongest 2FA available (passkey or authenticator app, not SMS), use a separate dedicated address for monetized accounts, and periodically check for unauthorized forwarding rules and connected apps that attackers use to spy on you.",
    sections: [
      {
        id: "email-is-master-key",
        question: "Why is my email the most important account to secure?",
        answer:
          "Almost every other account uses email to reset passwords and send security codes. If someone controls your email, they can take over your social, banking, and brand accounts in sequence. Hardening email is the highest-leverage security move a creator can make, so protect it before anything else.",
      },
      {
        id: "harden-email",
        question: "What's the strongest way to secure my email?",
        answer:
          "Set a long, unique password, and add a passkey or authenticator-app 2FA rather than SMS. Keep recovery details current and review them regularly. Turn on login alerts. For Gmail and Outlook, consider their enhanced “Advanced Protection” programs, which add hardware-key requirements for high-risk users.",
      },
      {
        id: "separate-business-email",
        question: "Should creators use a separate email for business?",
        answer:
          "Yes. Keep a dedicated address for brand deals, platform logins, and contracts, separate from your personal mail. It limits exposure if one is breached, makes phishing easier to spot, and keeps your high-value platform accounts off an address you've handed out widely.",
      },
    ],
    faqs: [
      {
        q: "How do I know if someone's secretly reading my email?",
        a: "Check your mail settings for forwarding rules and filters you didn't create, review recently active sessions and connected apps, and look for app passwords you don't recognize. Attackers add these to keep reading mail even after a password change.",
      },
    ],
    relatedSlugs: [
      "recover-locked-out-email",
      "set-up-2fa-youtube-google",
      "passkeys-explained",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "lock",
  },

  {
    slug: "team-access-shared-logins",
    cluster: "platform-hardening",
    category: "Lock It All Down",
    title: "How do I safely share account access with my team?",
    metaTitle: "How to Safely Share Account Access With Your Team",
    metaDescription:
      "Sharing logins with a manager, editor, or VA is a top creator security risk. Learn to use platform roles and password-manager sharing instead of passwords.",
    excerpt:
      "As you grow, editors, managers, and VAs need access, but a shared password in old DMs is a breach waiting to happen. Here's the safe way to delegate.",
    tldr:
      "Share account access through built-in platform roles (YouTube permissions, Meta Business Suite roles) or a password manager's secure sharing, never by sending the raw password. These methods let collaborators work without seeing the password and let you revoke access instantly when someone leaves, which a shared password can't.",
    sections: [
      {
        id: "why-shared-passwords-risky",
        question: "Why is sharing the actual password so risky?",
        answer:
          "A password texted or DM'd lives forever in chat history, can't be revoked without changing it for everyone, and spreads with each new hire. If any team member is phished or their device is compromised, the whole account is exposed. Shared raw passwords are one of the most common ways creator accounts leak.",
      },
      {
        id: "use-platform-roles",
        question: "How do I use built-in roles instead of sharing a password?",
        answer:
          "Many platforms support delegated access: YouTube Studio permissions, Meta Business Suite roles, and Google's account delegation. Assign each person the lowest role they need, so an editor can post without admin control. When their work ends, remove the role. No password change required.",
      },
      {
        id: "password-manager-sharing",
        question: "What if a platform has no role system?",
        answer:
          "Use your password manager's secure sharing. It grants a teammate login access without revealing the password text, supports time-limited or revocable sharing, and keeps an audit trail. Pair it with 2FA on the account, and update sharing immediately whenever someone leaves the team.",
      },
    ],
    faqs: [
      {
        q: "A team member just left. What should I do?",
        a: "Revoke their platform role or password-manager share immediately, change the password if it was ever shared directly, sign out all sessions, and confirm 2FA and recovery details are still yours. Do this the same day, not later.",
      },
    ],
    relatedSlugs: [
      "best-password-manager-creators",
      "meta-business-suite-takeover",
      "secure-tiktok-account-checklist",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "teacup",
  },

  {
    slug: "session-token-theft-explained",
    cluster: "platform-hardening",
    category: "Lock It All Down",
    title: "What is session-token theft and how do I stop it?",
    metaTitle: "Session-Token Theft Explained (And How to Stop It)",
    metaDescription:
      "Session-token theft lets hackers log in as you without your password or 2FA by stealing your browser cookies. Learn how it works and how creators block it.",
    excerpt:
      "The scary part of modern creator hacks: attackers don't need your password or 2FA. They steal your session cookie. Here's how that works and how to stop it.",
    tldr:
      "Session-token theft is when malware steals the login cookie your browser uses to stay signed in, letting an attacker resume your session without your password or 2FA. It's the technique behind most YouTube and Instagram hijacks. You stop it by never opening unexpected files, signing out idle sessions, and using passkeys or security keys.",
    sections: [
      {
        id: "what-is-session-token",
        question: "What is a session token?",
        answer:
          "When you log in and check “remember me,” the site stores a session token (a cookie) in your browser so you don't re-enter your password each visit. That token proves you're already authenticated. If someone copies it, they can paste it into their own browser and be logged in as you, no password or 2FA needed.",
      },
      {
        id: "how-tokens-stolen",
        question: "How do attackers steal session tokens?",
        answer:
          "Usually through infostealer malware delivered in a fake brand-deal file, cracked software, or a malicious browser extension. Once it runs, it scrapes cookies from your browser and sends them to the attacker. This is why “I had 2FA on but still got hacked” happens: the token bypasses both your password and your second factor.",
      },
      {
        id: "stop-token-theft",
        question: "How do creators stop session-token theft?",
        answer:
          "Never open unexpected attachments or run untrusted software; keep your OS, browser, and antivirus updated; and remove sketchy browser extensions. Sign out of idle sessions so old tokens expire, and use passkeys or hardware security keys. They bind the session to your device so a stolen cookie alone stops working.",
      },
    ],
    faqs: [
      {
        q: "I have 2FA, so why did I still get hacked?",
        a: "Because session-token theft skips the login screen entirely. The attacker reuses your already-authenticated cookie, so it never asks for your password or 2FA code. Passkeys, security keys, and signing out idle sessions are the defenses that actually counter it.",
      },
    ],
    relatedSlugs: [
      "brand-deal-phishing-scams",
      "recover-hacked-youtube-account",
      "passkeys-explained",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "shield",
  },

  {
    slug: "meta-business-suite-takeover",
    cluster: "platform-hardening",
    category: "Lock It All Down",
    title: "How do I protect my Meta Business Suite from takeover?",
    metaTitle: "Protect Meta Business Suite From Account Takeover (2026)",
    metaDescription:
      "Meta Business Suite controls your Pages and ad spend, making it a prime target. Learn to lock down admin roles, ad accounts, and personal logins behind it.",
    excerpt:
      "Your Meta Business Suite controls Pages, Instagram, and ad budgets, and attackers love it for running fraudulent ads. Here's how to lock it down.",
    tldr:
      "Protect Meta Business Suite by securing the personal Facebook accounts that hold admin roles (strong 2FA, passkeys), keeping admin count minimal, reviewing roles and payment methods regularly, and setting up billing alerts. Most business takeovers start by phishing a personal admin account, then pivot to drain ad budgets, so the personal logins are the real perimeter.",
    sections: [
      {
        id: "why-business-suite-targeted",
        question: "Why is Meta Business Suite a top target?",
        answer:
          "Business Suite links your Pages, Instagram, and ad accounts with stored payment methods, so a takeover lets attackers run fraudulent ads on your dime. Because access flows through individual people's personal Facebook accounts, compromising one admin can hand over the whole business: high reward for the attacker.",
      },
      {
        id: "lock-down-business-roles",
        question: "How do I lock down admin access and ad spend?",
        answer:
          "Keep the number of admins as small as possible, give everyone else the lowest role they need, and require strong 2FA (ideally passkeys) on every admin's personal account. Review Business Settings → People and Payment methods regularly, remove unknown users, and set billing notifications so unexpected ad charges surface immediately.",
      },
      {
        id: "respond-business-takeover",
        question: "What do I do if my Business Suite is taken over?",
        answer:
          "Pause the ad account if you still can, remove unknown admins, report the compromise to Meta through the Business Help Center, and contact your bank about fraudulent charges. Then secure the personal account the attacker used to get in. Otherwise they simply walk back through the same door.",
      },
    ],
    faqs: [
      {
        q: "Should my ad account use a separate payment method?",
        a: "Many creators use a dedicated card or low-limit payment method for ad spend so a takeover can't drain a primary account, and so fraudulent charges are capped and easy to dispute.",
      },
    ],
    relatedSlugs: [
      "recover-hacked-facebook-account",
      "team-access-shared-logins",
      "secure-creator-email-account",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "lock",
  },
];
