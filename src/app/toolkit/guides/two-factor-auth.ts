import type { Guide } from "./types";
import { BRIDGET, LOCKET_TEAM } from "./authors";

const PUBLISHED = "2026-05-27";
const MODIFIED = "2026-05-27";

export const twoFactorGuides: Guide[] = [
  {
    slug: "set-up-2fa-instagram",
    cluster: "two-factor-auth",
    category: "Two-Factor Authentication",
    flagship: true,
    title: "How do I turn on 2FA for Instagram?",
    metaTitle: "How to Turn On Two-Factor Authentication for Instagram",
    metaDescription:
      "Set up two-factor authentication on Instagram in minutes: use an authenticator app instead of SMS, save backup codes, and keep your creator account from being taken over.",
    excerpt:
      "Two-factor authentication is the single biggest thing standing between a creator and an account takeover. Here's the exact path to switch it on the right way.",
    tldr:
      "To turn on 2FA for Instagram, go to Settings → Accounts Center → Password and security → Two-factor authentication, pick your account, and choose Authentication app (safer than SMS). Scan the code with an authenticator app, confirm the 6-digit code, and save your backup codes somewhere offline.",
    sections: [
      {
        id: "where-is-instagram-2fa",
        question: "Where is the two-factor authentication setting on Instagram?",
        answer:
          "In the Instagram app, tap your profile → the menu (☰) → Settings and privacy → Accounts Center → Password and security → Two-factor authentication. Instagram now manages this through Meta's Accounts Center, so the setting may sit alongside your linked Facebook account.",
      },
      {
        id: "which-2fa-method-instagram",
        question: "Which 2FA method should I choose on Instagram?",
        answer:
          "Choose Authentication app over SMS. An authenticator app generates codes on your device and can't be intercepted by a SIM-swap attack the way text messages can. WhatsApp and SMS are offered as fallbacks, but an app like Google Authenticator, Authy, or your password manager is the most secure option.",
      },
      {
        id: "save-instagram-backup-codes",
        question: "How do I save my Instagram backup codes?",
        answer:
          "After enabling 2FA, Instagram shows a list of one-time backup codes. Screenshot or copy them into your password manager, or print them. These let you log in if you ever lose your phone. Without them, losing your authenticator device can mean a slow identity-verification recovery.",
      },
    ],
    howTo: {
      name: "Turn on two-factor authentication for Instagram",
      description:
        "Enable authenticator-app 2FA on Instagram through Meta's Accounts Center and save backup codes.",
      totalTime: "PT5M",
      steps: [
        { name: "Open the security settings", text: "Profile → menu → Settings and privacy → Accounts Center → Password and security → Two-factor authentication.", anchor: "where-is-instagram-2fa" },
        { name: "Choose Authentication app", text: "Select the authenticator-app method rather than SMS.", anchor: "which-2fa-method-instagram" },
        { name: "Link your authenticator", text: "Scan the QR code with your authenticator app and enter the 6-digit code to confirm.", anchor: "which-2fa-method-instagram" },
        { name: "Save backup codes", text: "Copy the backup codes into your password manager or print them.", anchor: "save-instagram-backup-codes" },
      ],
    },
    faqs: [
      {
        q: "Is text-message 2FA good enough for Instagram?",
        a: "It's far better than nothing, but an authenticator app is safer. SMS codes can be stolen through SIM-swap attacks, where a scammer ports your number. If you can, use an authenticator app and keep SMS only as a backup.",
      },
      {
        q: "Will 2FA stop my Instagram from being hacked?",
        a: "It blocks the most common attack: someone logging in with a stolen or guessed password. It doesn't stop session-token theft from malware, so pair 2FA with cautious link-clicking and a password manager.",
      },
    ],
    relatedSlugs: [
      "recover-hacked-instagram-account",
      "authenticator-app-vs-sms-2fa",
      "secure-instagram-account-checklist",
    ],
    sources: [{ label: "Instagram Help: Two-factor authentication", url: "https://help.instagram.com/" }],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "shield",
  },

  {
    slug: "set-up-2fa-tiktok",
    cluster: "two-factor-auth",
    category: "Two-Factor Authentication",
    title: "How do I turn on 2FA for TikTok?",
    metaTitle: "How to Turn On Two-Step Verification for TikTok",
    metaDescription:
      "Enable two-step verification on TikTok the secure way: use an authenticator app, add it to a business account, and keep your videos and DMs protected.",
    excerpt:
      "TikTok calls it two-step verification. Here's where to find it, which method to pick, and how to protect a Creator or business account.",
    tldr:
      "To turn on 2FA for TikTok, go to Profile → Settings and privacy → Security & permissions → 2-step verification, then choose at least two methods. Pick the authenticator app option over SMS where available, and confirm with the code. Save any recovery details in your password manager.",
    sections: [
      {
        id: "where-is-tiktok-2fa",
        question: "Where is two-step verification on TikTok?",
        answer:
          "Tap Profile → the menu (☰) → Settings and privacy → Security & permissions (or Security) → 2-step verification. TikTok asks you to select verification methods such as authenticator app, email, and SMS. Choosing more than one gives you a reliable fallback if you lose a device.",
      },
      {
        id: "tiktok-2fa-method",
        question: "Which TikTok verification method is safest?",
        answer:
          "Where TikTok offers an authenticator-app option, choose it, because app-generated codes resist the SIM-swap attacks that defeat SMS. Email verification is a reasonable second method. Enabling two methods means a lost phone or changed number won't fully lock you out of the account.",
      },
      {
        id: "tiktok-business-2fa",
        question: "Does a TikTok business or Creator account need extra protection?",
        answer:
          "Yes. Monetized accounts are bigger targets, so enable 2-step verification, use a unique password, and limit who has the login. If your team posts on your behalf, avoid sharing the raw password. Use TikTok's account-access tools or a password manager's secure sharing instead.",
      },
    ],
    faqs: [
      {
        q: "TikTok keeps asking for a code every login. Can I stop that?",
        a: "You can usually mark a device as trusted so it won't prompt every time on that phone. Keep the prompt active for new or shared devices. That's exactly where it stops an intruder.",
      },
    ],
    relatedSlugs: [
      "recover-hacked-tiktok-account",
      "authenticator-app-vs-sms-2fa",
      "secure-tiktok-account-checklist",
    ],
    sources: [{ label: "TikTok Support: Account security", url: "https://support.tiktok.com/" }],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "drop",
  },

  {
    slug: "set-up-2fa-youtube-google",
    cluster: "two-factor-auth",
    category: "Two-Factor Authentication",
    title: "How do I set up 2FA for YouTube and Google?",
    metaTitle: "How to Set Up 2-Step Verification for YouTube & Google",
    metaDescription:
      "Protect your YouTube channel by securing the Google account behind it. Turn on 2-Step Verification, add a passkey or security key, and block channel-hijacking attacks.",
    excerpt:
      "Because YouTube lives inside Google, you secure your channel by securing your Google account. Passkeys and security keys are the gold standard here.",
    tldr:
      "To protect your YouTube channel, enable 2-Step Verification on its Google account at myaccount.google.com/security. For the strongest protection against the session-token theft used to hijack channels, add a passkey or a hardware security key. These resist the malware attacks that bypass passwords and ordinary 2FA.",
    sections: [
      {
        id: "google-2sv-setup",
        question: "How do I turn on 2-Step Verification for my Google account?",
        answer:
          "Go to myaccount.google.com/security, find “2-Step Verification,” and follow the setup. Google offers prompts, authenticator codes, and security keys. Add backup codes and a backup phone so you're never fully locked out. Securing this account is what actually protects your YouTube channel.",
      },
      {
        id: "passkey-security-key-youtube",
        question: "Why do creators use a passkey or security key for YouTube?",
        answer:
          "Channel hijacks usually rely on stolen session cookies, which can sidestep passwords and even app-based 2FA. A passkey or hardware security key ties login to your physical device, so stolen credentials and cookies are useless to an attacker. For monetized channels, this is the single strongest upgrade.",
      },
      {
        id: "youtube-manager-permissions",
        question: "How do I limit who can access my channel?",
        answer:
          "In YouTube Studio → Settings → Permissions, review every person with access and remove anyone unfamiliar. Use the lowest role each collaborator actually needs. For brand channels, use Google's delegated access rather than sharing the main account password, so you can revoke access cleanly.",
      },
    ],
    faqs: [
      {
        q: "Does 2-Step Verification stop channel hijacking?",
        a: "It stops password-based attacks but not session-token theft from malware. Adding a passkey or hardware security key closes that gap, which is why serious creators use them.",
      },
    ],
    relatedSlugs: [
      "recover-hacked-youtube-account",
      "passkeys-explained",
      "session-token-theft-explained",
    ],
    sources: [{ label: "Google: 2-Step Verification", url: "https://myaccount.google.com/security" }],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "shield",
  },

  {
    slug: "authenticator-app-vs-sms-2fa",
    cluster: "two-factor-auth",
    category: "Two-Factor Authentication",
    title: "Is an authenticator app safer than SMS codes?",
    metaTitle: "Authenticator App vs SMS 2FA: Which Is Safer? (2026)",
    metaDescription:
      "Authenticator apps beat SMS codes for two-factor authentication because they resist SIM-swap attacks. Here's the difference and how to switch your accounts over.",
    excerpt:
      "SMS 2FA is better than nothing, but it has a real weakness: SIM swaps. Here's why an authenticator app or passkey is the safer choice.",
    tldr:
      "Yes. An authenticator app is safer than SMS 2FA. Authenticator apps generate codes locally on your device, so they can't be intercepted by a SIM-swap attack, where a scammer ports your phone number to steal incoming texts. Use an authenticator app or passkey as your main method and keep SMS only as a backup.",
    sections: [
      {
        id: "why-sms-2fa-weak",
        question: "Why is SMS-based 2FA less secure?",
        answer:
          "SMS codes travel over the phone network, so they can be stolen through a SIM-swap attack: a scammer convinces your carrier to move your number to their SIM, then receives your codes. SMS can also be intercepted or phished in real time. It still beats no 2FA, but it's the weakest option.",
      },
      {
        id: "how-authenticator-apps-work",
        question: "How do authenticator apps work?",
        answer:
          "An authenticator app stores a secret shared with the service and uses it to generate a fresh 6-digit code every 30 seconds, entirely on your device. Nothing is sent over the network, so there's no text to intercept or SIM to hijack. Google Authenticator, Authy, and most password managers offer this.",
      },
      {
        id: "switch-to-authenticator",
        question: "How do I switch my accounts from SMS to an authenticator app?",
        answer:
          "In each account's security settings, add an authenticator app as a new 2FA method, scan the QR code, and confirm. Then remove SMS as the primary method (you can keep it as a backup). Do this for your email and highest-value accounts first, and save backup codes as you go.",
      },
    ],
    faqs: [
      {
        q: "What's even safer than an authenticator app?",
        a: "A passkey or hardware security key. These bind login to a physical device and resist phishing entirely, which is why they're recommended for high-value creator accounts.",
      },
    ],
    relatedSlugs: ["set-up-2fa-instagram", "2fa-backup-codes-guide", "passkeys-explained"],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "mirror",
  },

  {
    slug: "2fa-backup-codes-guide",
    cluster: "two-factor-auth",
    category: "Two-Factor Authentication",
    title: "What are 2FA backup codes and how do I save them?",
    metaTitle: "2FA Backup Codes: What They Are & How to Save Them",
    metaDescription:
      "2FA backup codes are one-time logins for when you lose your phone. Learn where to find them on each platform and the safest way to store them.",
    excerpt:
      "Backup codes are the safety net that keeps a lost phone from becoming a permanent lockout. Here's how to find and store them properly.",
    tldr:
      "2FA backup codes are one-time-use codes that log you in when you can't get your normal second factor (for example, if you lose your phone). Most platforms give you a set when you enable 2FA. Save them in your password manager or print them; never store them only on the same phone that runs your authenticator.",
    sections: [
      {
        id: "what-are-backup-codes",
        question: "What exactly are 2FA backup codes?",
        answer:
          "Backup codes are a short list of single-use codes a service generates when you turn on two-factor authentication. Each one can replace your usual 2FA prompt once. They exist so a lost, stolen, or wiped phone doesn't lock you out of your own account permanently.",
      },
      {
        id: "where-to-find-backup-codes",
        question: "Where do I find my backup codes?",
        answer:
          "They're shown during 2FA setup and can be regenerated later in the same security settings (for example, Google's 2-Step Verification page or Instagram's two-factor authentication screen). If you didn't save them, regenerate a fresh set, which invalidates the old ones, and store them immediately.",
      },
      {
        id: "store-backup-codes-safely",
        question: "What's the safest way to store backup codes?",
        answer:
          "Save them in your password manager's secure notes, print them and keep them somewhere private, or store them in an encrypted file. The key rule: don't keep them only on the same device that holds your authenticator app. If that phone is lost, you lose both at once.",
      },
    ],
    faqs: [
      {
        q: "I used some backup codes. Do I need new ones?",
        a: "Each code works once, so used ones are spent. When you're running low, regenerate a fresh set in the account's security settings and save them; regenerating invalidates the old list.",
      },
    ],
    relatedSlugs: [
      "recover-account-no-2fa-access",
      "best-password-manager-creators",
      "set-up-2fa-instagram",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "teacup",
  },
];
