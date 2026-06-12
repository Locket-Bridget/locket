import type { Guide } from "./types";
import { BRIDGET, LOCKET_TEAM } from "./authors";

const PUBLISHED = "2026-05-27";
const MODIFIED = "2026-05-27";

export const accountRecoveryGuides: Guide[] = [
  {
    slug: "recover-hacked-instagram-account",
    cluster: "account-recovery",
    category: "Get Your Accounts Back",
    flagship: true,
    title: "How do I recover a hacked Instagram account?",
    metaTitle: "How to Recover a Hacked Instagram Account (2026)",
    metaDescription:
      "Step-by-step recovery for a hacked Instagram account: secure your email, file Instagram's report form, verify with a video selfie, and lock everything back down.",
    excerpt:
      "A creator's step-by-step plan to get a hacked Instagram account back: what to do in the first hour, the exact forms to file, and how to lock down everything attached to it.",
    tldr:
      "To recover a hacked Instagram account, first secure the email tied to it and change that password. Then use Instagram's “My account was hacked” flow from the login screen to request a recovery link or verify your identity with a video selfie. Lock connected apps and turn on 2FA the moment you regain access.",
    sections: [
      {
        id: "how-do-i-know-my-instagram-is-hacked",
        question: "How do I know my Instagram account was hacked?",
        answer:
          "You've likely been hacked if you get a login or email-change alert you didn't request, your password suddenly stops working, or friends report DMs and posts you never sent. Instagram emails every security change to your original address, so check that inbox before assuming you're fully locked out.",
        body: [
          "Act on the “your email was changed” notice fast: it contains a “revert this change” link that's only valid for a short window. Clicking it can undo the takeover before the attacker finishes locking you out.",
        ],
      },
      {
        id: "what-do-i-do-first",
        question: "What should I do in the first hour after being hacked?",
        answer:
          "In the first hour, secure the email address connected to Instagram: change its password and turn on 2FA there first. Then attempt Instagram's recovery flow. Securing the email matters most: if the attacker still controls it, they can reset your Instagram password again the moment you regain access.",
      },
      {
        id: "instagram-recovery-form",
        question: "How do I use Instagram's hacked-account recovery form?",
        answer:
          "From the login screen, tap “Forgot password?” then “Need more help?” to reach “My account was hacked.” Instagram emails a recovery link or asks for a video selfie to confirm your identity. Submit from a device and Wi-Fi network you've used with the account before. It speeds approval.",
        body: [
          "If you have a verified or business account, you may also have access to Meta's dedicated support channels. For business accounts, check whether the account is linked to a Meta Business Suite or Facebook Page, because recovery sometimes runs through there.",
        ],
      },
      {
        id: "relock-after-recovery",
        question: "How do I lock the account back down after recovery?",
        answer:
          "Once you're back in: reset the password to something unique, switch 2FA to an authenticator app (not SMS), review and remove unknown logged-in devices and connected third-party apps, and confirm the email and phone number on file are yours. Save new backup codes somewhere offline.",
      },
    ],
    howTo: {
      name: "Recover a hacked Instagram account",
      description:
        "Secure the linked email, file Instagram's hacked-account report, verify your identity, and re-lock the account.",
      totalTime: "PT45M",
      steps: [
        {
          name: "Secure your email",
          text: "Change the password on the email tied to Instagram and turn on 2FA there before anything else.",
          anchor: "what-do-i-do-first",
        },
        {
          name: "Open Instagram's recovery flow",
          text: "On the login screen tap Forgot password → Need more help → My account was hacked.",
          anchor: "instagram-recovery-form",
        },
        {
          name: "Verify your identity",
          text: "Submit a video selfie or recovery code when prompted, from a device you've used with the account.",
          anchor: "instagram-recovery-form",
        },
        {
          name: "Re-lock the account",
          text: "Reset the password, enable authenticator-app 2FA, and remove unknown devices and linked apps.",
          anchor: "relock-after-recovery",
        },
      ],
    },
    faqs: [
      {
        q: "Can a hacker permanently delete my Instagram account?",
        a: "An attacker can request deletion, but Instagram holds accounts for 30 days before permanent removal. Filing a recovery request within that window can reverse the deletion, so act quickly rather than assuming the account is gone.",
      },
      {
        q: "How long does Instagram account recovery take?",
        a: "Self-service recovery usually takes 1–3 days. Complex takeovers where the email and 2FA were both changed can take longer; specialist help can shorten it to roughly 48–72 hours by working through verified support paths.",
      },
      {
        q: "Instagram support isn't responding. What now?",
        a: "Resubmit the form from a known device, keep every confirmation email, and avoid creating duplicate reports (they reset your place in the queue). If your account is monetized, a service like Locket Security can escalate through trust-and-safety contacts.",
      },
    ],
    relatedSlugs: [
      "set-up-2fa-instagram",
      "recover-hacked-tiktok-account",
      "what-to-do-instagram-impersonator",
      "secure-instagram-account-checklist",
    ],
    sources: [
      { label: "Instagram Help: Hacked Accounts", url: "https://help.instagram.com/" },
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "lock",
  },

  {
    slug: "recover-hacked-tiktok-account",
    cluster: "account-recovery",
    category: "Get Your Accounts Back",
    flagship: true,
    title: "How do I recover a hacked TikTok account?",
    metaTitle: "How to Recover a Hacked TikTok Account (2026)",
    metaDescription:
      "Recover a hacked TikTok account step by step: use the login-issue report, verify your identity, secure the linked email and phone, and re-enable two-step verification.",
    excerpt:
      "What to do when you lose access to your TikTok: the exact in-app report path, how to verify ownership, and how to keep the attacker from coming back.",
    tldr:
      "To recover a hacked TikTok account, use “Report a login issue” in the app or TikTok's web feedback form to prove ownership with your linked email, phone number, or previous username. Secure the connected email first, then reset your password and turn on two-step verification once you're back in.",
    sections: [
      {
        id: "signs-tiktok-hacked",
        question: "How do I know my TikTok account was hacked?",
        answer:
          "Signs include being logged out unexpectedly, your password no longer working, the email or phone on the account changing, or videos and DMs you didn't post. TikTok sends a security alert to your registered email whenever login details change, so check there first for a reversal link.",
      },
      {
        id: "report-tiktok-login-issue",
        question: "How do I report a hacked TikTok account?",
        answer:
          "Open TikTok and tap Profile → Menu → Settings and privacy → Report a problem, or use TikTok's online “Report a login issue” / feedback form if you're locked out entirely. Choose the account-access option and supply your username, linked email, and phone so TikTok can verify you own the account.",
        body: [
          "If your account is verified or part of TikTok's Creator program, you may have a faster support path. Check for a dedicated creator support email or your TikTok Shop / business contact.",
        ],
      },
      {
        id: "verify-tiktok-ownership",
        question: "How do I prove I own the TikTok account?",
        answer:
          "TikTok may ask for the email or phone originally used to sign up, a previous password, the account creation date, or a screenshot of a confirmation email. Provide as much accurate detail as possible and respond from the same device and network you normally use, because mismatched information slows or blocks recovery.",
      },
      {
        id: "secure-tiktok-after",
        question: "How do I secure TikTok after getting it back?",
        answer:
          "Reset your password to a unique one, enable two-step verification (authenticator app or email over SMS), check Security → Manage devices and log out anything unfamiliar, and review connected apps. Confirm the email and phone on file are yours, since attackers often swap these to keep a foothold.",
      },
    ],
    howTo: {
      name: "Recover a hacked TikTok account",
      description:
        "Secure the linked email, file TikTok's login-issue report, verify ownership, and re-secure the account.",
      totalTime: "PT40M",
      steps: [
        { name: "Secure the linked email", text: "Change the password on the email tied to TikTok and enable 2FA there.", anchor: "signs-tiktok-hacked" },
        { name: "Report the login issue", text: "Use TikTok's Report a login issue / feedback form and choose the account-access option.", anchor: "report-tiktok-login-issue" },
        { name: "Verify ownership", text: "Provide the original email, phone, or previous password TikTok requests.", anchor: "verify-tiktok-ownership" },
        { name: "Re-secure the account", text: "Reset the password, enable two-step verification, and remove unknown devices.", anchor: "secure-tiktok-after" },
      ],
    },
    faqs: [
      {
        q: "Can I recover a TikTok account if the hacker changed the email and phone?",
        a: "Yes, but it's harder. Use the login-issue form and provide every original detail you remember: creation date, old username, previous email. TikTok can still verify ownership through account history even when current contact details were changed.",
      },
      {
        q: "How long does TikTok take to recover an account?",
        a: "Simple cases resolve in a few days; harder takeovers can take one to two weeks. Submitting accurate ownership details the first time and not spamming duplicate reports gives you the fastest result.",
      },
    ],
    relatedSlugs: [
      "set-up-2fa-tiktok",
      "recover-hacked-instagram-account",
      "secure-tiktok-account-checklist",
    ],
    sources: [{ label: "TikTok Support", url: "https://support.tiktok.com/" }],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "drop",
  },

  {
    slug: "recover-hacked-youtube-account",
    cluster: "account-recovery",
    category: "Get Your Accounts Back",
    flagship: true,
    title: "How do I recover a hacked YouTube channel?",
    metaTitle: "How to Recover a Hacked YouTube Channel (2026)",
    metaDescription:
      "Recover a hijacked YouTube channel: secure the Google account behind it, use Google's account-recovery flow, and report a stolen channel to YouTube's Creator support.",
    excerpt:
      "YouTube channels live inside your Google account. Here's how to recover both, report a hijack, and undo crypto-livestream takeovers creators are targeted with.",
    tldr:
      "A YouTube channel is controlled by its Google account, so recovery starts at google.com/accounts/recovery. Reset that password, kick out unknown sessions, and re-enable 2-Step Verification. If the channel was rebranded for a crypto-scam livestream, report it through YouTube's Creator support so they can restore and lock it.",
    sections: [
      {
        id: "youtube-google-relationship",
        question: "Why do I recover my Google account to get my YouTube channel back?",
        answer:
          "Your YouTube channel is part of your Google account, so whoever controls the Google login controls the channel. That means recovery happens at Google's account-recovery page, not inside YouTube. Restore and secure the Google account first, and the channel comes back with it.",
      },
      {
        id: "google-account-recovery",
        question: "How do I use Google's account recovery for a stolen channel?",
        answer:
          "Go to google.com/accounts/recovery and follow the prompts: confirm a recovery email or phone, answer security questions, or verify a device you've used before. Answer from a familiar location and device. Once in, open Security → Your devices, sign out unknown sessions, and reset your password immediately.",
      },
      {
        id: "report-youtube-hijack",
        question: "How do I report a hijacked or crypto-scam YouTube channel?",
        answer:
          "If your channel was renamed and used for a fake crypto livestream, contact YouTube Creator support (via the Help menu or the @TeamYouTube channel) and report it as a compromised channel. Provide your channel ID and proof of ownership. YouTube can restore branding, remove the scam content, and re-secure the channel.",
      },
      {
        id: "youtube-relock",
        question: "How do I secure my channel after recovery?",
        answer:
          "Turn on 2-Step Verification, ideally with a passkey or security key, which blocks the session-token theft used to hijack channels. Remove unknown channel managers under Settings → Permissions, revoke suspicious third-party app access in your Google account, and check that no forwarding rules were added to your Gmail.",
      },
    ],
    howTo: {
      name: "Recover a hacked YouTube channel",
      description:
        "Recover the underlying Google account, report the hijack to YouTube, and re-secure both.",
      totalTime: "PT50M",
      steps: [
        { name: "Recover the Google account", text: "Use google.com/accounts/recovery to regain the account that owns the channel.", anchor: "google-account-recovery" },
        { name: "Sign out intruders", text: "In Security → Your devices, sign out unknown sessions and reset the password.", anchor: "google-account-recovery" },
        { name: "Report the hijack", text: "Tell YouTube Creator support / @TeamYouTube and provide your channel ID and ownership proof.", anchor: "report-youtube-hijack" },
        { name: "Lock it down", text: "Enable a passkey or security key, remove unknown managers, and revoke suspicious app access.", anchor: "youtube-relock" },
      ],
    },
    faqs: [
      {
        q: "Hackers used my channel for a crypto livestream. Will YouTube restore it?",
        a: "Yes. YouTube routinely restores channels hijacked for crypto-scam streams. Report it as a compromised channel with proof of ownership; they can revert the name, banner, and content and re-secure the account.",
      },
      {
        q: "How do channels get hijacked without my password?",
        a: "Most creator hijacks use session-token (cookie) theft from malware in a fake sponsorship file, which bypasses your password and even 2FA. A passkey or hardware security key is the strongest defense because stolen cookies stop working when the session is revoked.",
      },
    ],
    relatedSlugs: [
      "set-up-2fa-youtube-google",
      "session-token-theft-explained",
      "brand-deal-phishing-scams",
    ],
    sources: [
      { label: "Google Account Recovery", url: "https://accounts.google.com/signin/recovery" },
      { label: "YouTube Help: Compromised channels", url: "https://support.google.com/youtube/" },
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "shield",
  },

  {
    slug: "recover-hacked-facebook-account",
    cluster: "account-recovery",
    category: "Get Your Accounts Back",
    title: "How do I get my hacked Facebook account back?",
    metaTitle: "How to Recover a Hacked Facebook Account (2026)",
    metaDescription:
      "Recover a hacked Facebook account using facebook.com/hacked, secure your email, and protect any linked Instagram or Business Page from the same takeover.",
    excerpt:
      "Facebook is often the key to your Instagram and ad accounts. Here's how to recover it and stop a takeover from spreading across Meta.",
    tldr:
      "To recover a hacked Facebook account, go to facebook.com/hacked and follow the guided recovery to reset your password and review recent activity. Secure the linked email first. If your Facebook is connected to Instagram or a Business Page, lock those too, because attackers pivot across Meta accounts quickly.",
    sections: [
      {
        id: "facebook-hacked-flow",
        question: "What is the fastest way to recover a hacked Facebook account?",
        answer:
          "Go to facebook.com/hacked and start the guided recovery. Facebook walks you through resetting your password, reviewing recent logins and changes, and reversing actions the attacker took. If you can still log in, do this immediately before the attacker changes your recovery email or phone.",
      },
      {
        id: "facebook-cant-log-in",
        question: "What if I can't log in to Facebook at all?",
        answer:
          "Use the “Forgot password” flow and try to recover via a trusted email, phone, or a friend-based verification if you set it up. If the attacker changed your contact details, look for Facebook's “Identify your account” and identity-verification options, which let you submit ID to prove ownership.",
      },
      {
        id: "protect-linked-meta",
        question: "How do I protect my Instagram and Business Page after a Facebook hack?",
        answer:
          "Because Meta accounts are linked, check Instagram immediately for unknown logins and remove Facebook as a login method if it's compromised. For a Business Page or ad account, review Business Suite roles, remove unknown admins, and check that no new payment methods or ad campaigns were added.",
      },
    ],
    faqs: [
      {
        q: "Hackers are running ads on my Business account. What do I do?",
        a: "Pause the ad account if you still have access, remove unknown admins in Meta Business Suite, report the unauthorized spend to Meta, and contact your bank about the charges. Then secure the personal Facebook account that controls the business assets.",
      },
      {
        q: "Should I make a new account instead of recovering?",
        a: "Only as a last resort. A recovered account keeps your history, Pages, and connections; a new one starts from zero and the old account stays in the attacker's hands. Exhaust facebook.com/hacked and identity verification first.",
      },
    ],
    relatedSlugs: [
      "recover-hacked-instagram-account",
      "meta-business-suite-takeover",
      "secure-creator-email-account",
    ],
    sources: [{ label: "Facebook: Hacked Accounts", url: "https://www.facebook.com/hacked" }],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "shield",
  },

  {
    slug: "recover-account-no-2fa-access",
    cluster: "account-recovery",
    category: "Get Your Accounts Back",
    title: "What if I lost access to my 2FA codes?",
    metaTitle: "Locked Out: How to Recover an Account Without 2FA (2026)",
    metaDescription:
      "Lost your phone or authenticator app and can't get 2FA codes? Use backup codes, account-recovery flows, and identity verification to regain access safely.",
    excerpt:
      "Losing your authenticator device feels like being locked out for good, but backup codes and recovery flows usually get you back in. Here's the order to try them.",
    tldr:
      "If you lost access to your 2FA codes, first use your saved backup codes. Most services issue them when you enable 2FA. No backup codes? Use the service's “try another way” or account-recovery option, which can verify you by email, a trusted device, or ID. Re-enroll 2FA and save fresh backup codes once you're in.",
    sections: [
      {
        id: "use-backup-codes",
        question: "How do backup codes get me back in?",
        answer:
          "When you turn on 2FA, most platforms give you a set of one-time backup codes. On the 2FA prompt, choose “Use a backup code” or “try another way” and enter one. Each code works once. If you saved them in your password manager or printed them, this is the fastest route back in.",
      },
      {
        id: "no-backup-codes",
        question: "What if I never saved backup codes?",
        answer:
          "Use the platform's account-recovery flow. Depending on the service, it can verify you through a secondary email, a phone number, a device you're already signed in on, or by submitting ID. Recovery can take a few days because the platform deliberately slows down to keep attackers out.",
      },
      {
        id: "moving-authenticator",
        question: "How do I avoid losing 2FA access when I get a new phone?",
        answer:
          "Before switching phones, move your authenticator first: apps like Google Authenticator, Authy, and 1Password can transfer or sync codes to the new device. Always store backup codes in your password manager, and consider adding a second method (a passkey or hardware key) so one lost device never locks you out.",
      },
    ],
    faqs: [
      {
        q: "I lost my phone and my authenticator wasn't backed up. Am I locked out forever?",
        a: "Usually not. Backup codes are the quickest fix; without them, the platform's identity-verification recovery flow can still restore access. It just takes longer, often several days, because the system slows recovery to block impostors.",
      },
      {
        q: "Are SMS codes safer because I can't lose them?",
        a: "No. SMS is convenient but vulnerable to SIM-swap attacks. The safer pattern is an authenticator app or passkey plus saved backup codes, so you keep both strong security and a reliable fallback.",
      },
    ],
    relatedSlugs: [
      "2fa-backup-codes-guide",
      "authenticator-app-vs-sms-2fa",
      "set-up-2fa-instagram",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "mirror",
  },

  {
    slug: "recover-locked-out-email",
    cluster: "account-recovery",
    category: "Get Your Accounts Back",
    title: "How do I recover a hacked email account?",
    metaTitle: "How to Recover a Hacked Email Account (2026)",
    metaDescription:
      "Your email is the master key to every account. Recover a hacked Gmail or Outlook, remove malicious forwarding rules, and stop the attacker from resetting everything else.",
    excerpt:
      "Email is the master key to every other account you own. If it's compromised, recover it first. Here's how, plus the hidden settings attackers leave behind.",
    tldr:
      "Recover a hacked email account first, before anything else. It controls password resets for every other account. Use your provider's recovery page (Gmail, Outlook), reset the password, then check for malicious forwarding rules, filters, and recovery-address changes the attacker may have added to keep reading your mail.",
    sections: [
      {
        id: "why-email-first",
        question: "Why should I recover my email before my social accounts?",
        answer:
          "Your email is the reset point for nearly every other account. As long as an attacker controls it, they can trigger “forgot password” on your Instagram, bank, and more, then intercept the codes. Locking down email first cuts off their ability to walk back into everything else.",
      },
      {
        id: "recover-email-account",
        question: "How do I recover a hacked Gmail or Outlook account?",
        answer:
          "Use the provider's recovery page: google.com/accounts/recovery for Gmail or account.live.com/acsr for Outlook. Verify with a recovery phone, secondary email, or a trusted device, then reset the password. Do this from a device you normally use so the system recognizes you and approves recovery faster.",
      },
      {
        id: "remove-forwarding-rules",
        question: "What hidden settings do email hackers leave behind?",
        answer:
          "After resetting the password, check for traps: auto-forwarding rules sending copies of your mail elsewhere, filters that auto-delete security alerts, a changed recovery email or phone, and added app passwords or connected apps. Attackers use these to keep reading your inbox even after you change the password.",
      },
    ],
    howTo: {
      name: "Recover and clean a hacked email account",
      description:
        "Recover the account, reset the password, and remove the forwarding rules and filters attackers leave behind.",
      totalTime: "PT35M",
      steps: [
        { name: "Open provider recovery", text: "Use Google or Microsoft's account-recovery page from a familiar device.", anchor: "recover-email-account" },
        { name: "Reset the password", text: "Set a unique password and sign out all other sessions.", anchor: "recover-email-account" },
        { name: "Remove forwarding & filters", text: "Delete unknown forwarding rules, filters, and app passwords.", anchor: "remove-forwarding-rules" },
        { name: "Fix recovery details", text: "Confirm the recovery email and phone are yours, then enable 2FA.", anchor: "remove-forwarding-rules" },
      ],
    },
    faqs: [
      {
        q: "How did the hacker get into my email if I never shared my password?",
        a: "Most often through a password reused on another site that was breached, or a phishing page that captured your login. A password manager (unique passwords everywhere) plus 2FA on email closes both doors.",
      },
    ],
    relatedSlugs: [
      "secure-creator-email-account",
      "stop-reusing-passwords",
      "best-password-manager-creators",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "lock",
  },
];
