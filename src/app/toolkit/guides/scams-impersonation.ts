import type { Guide } from "./types";
import { BRIDGET, LOCKET_TEAM } from "./authors";

const PUBLISHED = "2026-05-27";
const MODIFIED = "2026-05-27";

export const scamsImpersonationGuides: Guide[] = [
  {
    slug: "what-to-do-instagram-impersonator",
    cluster: "scams-impersonation",
    category: "Scams & Impersonation",
    flagship: true,
    title: "Someone is impersonating me on Instagram — what do I do?",
    metaTitle: "Someone Is Impersonating Me on Instagram: What to Do",
    metaDescription:
      "Report and remove an Instagram impersonator step by step, warn your followers, and protect your brand. A creator-focused playbook for fake-account takedowns.",
    excerpt:
      "Impersonator accounts scam your followers and damage your brand. Here's how to report one, get it removed, and warn your audience fast.",
    tldr:
      "If someone is impersonating you on Instagram, report the fake account directly through its profile (••• → Report → Pretending to be someone → Me), then file Instagram's dedicated impersonation form with a photo of your ID. Warn your real followers in a story so no one falls for DMs from the clone while it's being removed.",
    sections: [
      {
        id: "report-impersonator-profile",
        question: "How do I report an Instagram account pretending to be me?",
        answer:
          "Open the fake profile, tap the ••• menu → Report → “Report account” → “It's pretending to be someone else” → “Me.” This is the fastest path. If you don't have an account or are locked out, use Instagram's impersonation report form on the web, which lets non-users report a fake of themselves.",
      },
      {
        id: "impersonation-id-form",
        question: "Why does Instagram ask for my ID, and is it safe?",
        answer:
          "For impersonation claims, Instagram asks for a government ID photo to confirm you're the real person being copied. It's a standard verification step and a legitimate part of the takedown process. Submitting it speeds removal — Instagram can't act on “that's not me” without confirming who you actually are.",
      },
      {
        id: "warn-followers",
        question: "How do I protect my followers while the clone is up?",
        answer:
          "Post a story and a pinned note telling followers about the fake account, what your only real handle is, and that you'll never DM them asking for money, gift cards, or login links. Most impersonator damage comes from scam DMs to your audience — a quick warning cuts off the scam before takedown completes.",
      },
      {
        id: "prevent-future-impersonation",
        question: "How do I make myself harder to impersonate?",
        answer:
          "Apply for verification if eligible, keep your profile photo and bio consistent across platforms so fakes are obvious, and have a few followers help report clones (multiple reports speed review). Watermarking key content and reserving your handle on other platforms also reduces how convincing a copy can look.",
      },
    ],
    howTo: {
      name: "Report and remove an Instagram impersonator",
      description:
        "Report the fake account, verify your identity, warn your followers, and harden against future clones.",
      totalTime: "PT20M",
      steps: [
        { name: "Report from the fake profile", text: "••• → Report → pretending to be someone → Me.", anchor: "report-impersonator-profile" },
        { name: "File the impersonation form", text: "Submit Instagram's impersonation report with a photo of your ID.", anchor: "impersonation-id-form" },
        { name: "Warn your followers", text: "Post a story naming your only real handle and the scam to watch for.", anchor: "warn-followers" },
        { name: "Harden your profile", text: "Seek verification and keep your identity consistent across platforms.", anchor: "prevent-future-impersonation" },
      ],
    },
    faqs: [
      {
        q: "The impersonator is DMing my followers asking for money — what now?",
        a: "Warn your audience immediately via story and pinned post, report the account for impersonation and scam activity, and encourage affected followers to report it too. Multiple reports plus your ID verification get clones removed fastest.",
      },
      {
        q: "How long does Instagram take to remove a fake account?",
        a: "It varies from a day to a couple of weeks. Verified accounts and well-documented reports move faster. For high-stakes brand impersonation, a service like Locket Security can escalate the takedown.",
      },
    ],
    relatedSlugs: ["report-fake-account", "recover-hacked-instagram-account", "prevent-doxxing-creators"],
    sources: [{ label: "Instagram Help — Impersonation", url: "https://help.instagram.com/" }],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "mirror",
  },

  {
    slug: "report-fake-account",
    cluster: "scams-impersonation",
    category: "Scams & Impersonation",
    title: "How do I report and remove a fake account?",
    metaTitle: "How to Report and Remove a Fake Account (Any Platform)",
    metaDescription:
      "A cross-platform guide to reporting fake or impersonating accounts on Instagram, TikTok, YouTube, and Facebook — what evidence to submit and how to speed removal.",
    excerpt:
      "Every platform handles fake-account takedowns differently. Here's the report path for each, plus the evidence that gets clones removed faster.",
    tldr:
      "To remove a fake account, report it directly from the impostor's profile on each platform and, where offered, file the platform's dedicated impersonation form with proof of identity. Document everything with screenshots, gather a few witnesses to report it too, and avoid engaging with the account — multiple verified reports remove clones fastest.",
    sections: [
      {
        id: "report-by-platform",
        question: "Where do I report a fake account on each platform?",
        answer:
          "Instagram: profile ••• → Report → pretending to be someone. TikTok: profile → Share/menu → Report → impersonation. YouTube: About tab → flag → impersonation, or the impersonation web form. Facebook: profile ••• → Find support or report → impersonation. Each also has a web form for people who can't log in.",
      },
      {
        id: "what-evidence",
        question: "What evidence should I include?",
        answer:
          "Provide a government ID if asked, links to your authentic account, and screenshots showing the fake copying your photos, bio, or content. The clearer the side-by-side proof that you're the original and they're the copy, the faster a reviewer can act. Keep copies of any scam messages the fake sent.",
      },
      {
        id: "speed-removal",
        question: "How do I get the account removed faster?",
        answer:
          "Submit one well-documented report rather than many duplicates, which can reset the queue. Ask a handful of followers to report the fake too — coordinated, legitimate reports raise its priority. If you're verified, mention it. For brand-damaging cases, an escalation service can reach trust-and-safety teams directly.",
      },
    ],
    faqs: [
      {
        q: "The platform rejected my report — can I appeal?",
        a: "Yes. Resubmit with clearer evidence (ID plus side-by-side screenshots), and use the platform's appeal or “request another review” option. Persistence with strong documentation usually succeeds.",
      },
    ],
    relatedSlugs: [
      "what-to-do-instagram-impersonator",
      "crypto-giveaway-scams",
      "prevent-doxxing-creators",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "mirror",
  },

  {
    slug: "brand-deal-phishing-scams",
    cluster: "scams-impersonation",
    category: "Scams & Impersonation",
    title: "How do I spot a fake brand-deal email?",
    metaTitle: "How to Spot a Fake Brand-Deal Email (Creator Scams)",
    metaDescription:
      "Fake sponsorship emails are the #1 way creators get hacked. Learn the red flags, the malware-in-a-file trick, and how to vet a brand deal safely.",
    excerpt:
      "Fake sponsorship offers are the leading way creators get hacked — often through a “media kit” or “contract” file that's actually malware. Here's how to spot them.",
    tldr:
      "Spot a fake brand-deal email by checking the sender's real domain, hovering links before clicking, and refusing to download or open any attachment or “contract” you weren't expecting. The classic creator hack is malware hidden in a fake media kit or PDF that steals your session cookies — bypassing your password and 2FA entirely.",
    sections: [
      {
        id: "brand-deal-red-flags",
        question: "What are the red flags of a fake brand-deal email?",
        answer:
          "Watch for a sender address that doesn't match the real company domain, urgency or pressure to act fast, requests to download a file or click a shortened link, slightly-off logos and grammar, and offers that are too generous for your size. Real brands rarely require you to open an executable or a password-protected archive.",
      },
      {
        id: "malware-in-file",
        question: "How does a sponsorship email actually hack me?",
        answer:
          "Many creator hacks come from malware in a fake “contract,” “media kit,” or “product sample” file. Opening it installs an infostealer that grabs your browser session cookies — letting the attacker log into YouTube or Instagram as you, sidestepping your password and 2FA. That's why never opening unexpected files matters so much.",
      },
      {
        id: "vet-brand-deal",
        question: "How do I vet a brand deal safely?",
        answer:
          "Verify the company independently: visit their official site and contact a known address, rather than replying to the email. Look up the employee on LinkedIn. View documents in your browser (Google Docs preview) instead of downloading. When in doubt, ask for a video call — scammers usually won't.",
      },
    ],
    faqs: [
      {
        q: "They sent a DocuSign / Google Drive link — is that safe?",
        a: "Not automatically. Scammers fake these too. Don't log in through a link in the email; open DocuSign or Drive yourself and check your account, or preview the file without entering any credentials.",
      },
      {
        q: "I already downloaded the file — what should I do?",
        a: "Disconnect from the internet, run a malware scan, change your key passwords from a different clean device, and sign out all sessions on your accounts to invalidate any stolen cookies. Then enable a passkey or security key.",
      },
    ],
    relatedSlugs: [
      "session-token-theft-explained",
      "recover-hacked-youtube-account",
      "copyright-strike-phishing",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "lipstick",
  },

  {
    slug: "copyright-strike-phishing",
    cluster: "scams-impersonation",
    category: "Scams & Impersonation",
    title: "Is this copyright-strike DM a scam?",
    metaTitle: "Copyright-Strike Phishing: Is That DM a Scam? (2026)",
    metaDescription:
      "Fake copyright-strike and community-guidelines warnings scare creators into clicking phishing links. Learn how to tell a real platform notice from a scam.",
    excerpt:
      "“Your account violated copyright — appeal within 24 hours” is a classic scare scam. Here's how to tell a fake strike from a real platform notice.",
    tldr:
      "A copyright-strike DM is almost always a scam. Real platforms notify you inside the app and through official email, not via DMs or random links with countdown timers. These messages create panic to make you click a phishing “appeal” link and enter your login. Never click — check your account status directly in the app instead.",
    sections: [
      {
        id: "how-strike-scam-works",
        question: "How does the copyright-strike scam work?",
        answer:
          "You get a DM or email claiming your account violated copyright or community guidelines and will be deleted unless you “appeal” within 24–48 hours. The link leads to a convincing fake login page that captures your password and 2FA code in real time. The urgency is the whole trick — it stops you from checking.",
      },
      {
        id: "real-vs-fake-strike",
        question: "How do I tell a real strike from a fake one?",
        answer:
          "Real notices appear inside the platform itself — your YouTube Studio dashboard, Instagram's account-status page, or TikTok's notifications — and from verified official email domains. Fakes come via DM, use off-platform links, threaten immediate deletion, and often have small grammar or branding errors. When unsure, ignore the message and open the app yourself.",
      },
      {
        id: "if-you-clicked",
        question: "What if I already entered my login on the fake page?",
        answer:
          "Act fast: from a different, clean device, change that account's password and the password of any account sharing it, sign out all active sessions to kill stolen tokens, and confirm your email and 2FA settings weren't changed. Then upgrade to an authenticator app or passkey.",
      },
    ],
    faqs: [
      {
        q: "The message came from an account with a verified-looking badge — is it real?",
        a: "Badges and names can be faked or spoofed. Verification inside a DM proves nothing. Trust only the status shown inside the official app, reached by opening it yourself rather than tapping a link.",
      },
    ],
    relatedSlugs: [
      "brand-deal-phishing-scams",
      "recover-hacked-instagram-account",
      "set-up-2fa-instagram",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "lipstick",
  },

  {
    slug: "crypto-giveaway-scams",
    cluster: "scams-impersonation",
    category: "Scams & Impersonation",
    title: "How do scammers use my account for crypto giveaways?",
    metaTitle: "Crypto Giveaway Scams: How They Hijack Creator Accounts",
    metaDescription:
      "Hijacked creator accounts are rebranded for fake crypto giveaways and livestreams. Learn how the scam works, how to recover, and how to prevent it.",
    excerpt:
      "Hijacked YouTube and Instagram accounts get rebranded into fake crypto giveaways that scam your audience. Here's the playbook to recover and prevent it.",
    tldr:
      "Scammers hijack creator accounts — usually via session-token theft from a fake sponsorship file — then rebrand them to impersonate a crypto figure and run a fake “send 1 ETH, get 2 back” giveaway or livestream to your audience. Recover by restoring the underlying account, reporting the hijack to the platform, and adding a passkey to block re-entry.",
    sections: [
      {
        id: "how-crypto-hijack-works",
        question: "How does the crypto-giveaway hijack happen?",
        answer:
          "An attacker steals your session — often through malware in a fake brand deal — and logs in without your password. They rename the channel or account, post a crypto figure's branding, and stream a looping “giveaway” that tells viewers to send crypto to “double” it. Your audience's trust in you is the bait.",
      },
      {
        id: "recover-from-crypto-hijack",
        question: "How do I recover an account used for a crypto scam?",
        answer:
          "Recover the underlying account (your Google account for YouTube, the login for Instagram), sign out all sessions, and reset the password. Then report it to the platform as a compromised account used for a scam — YouTube and Meta routinely restore the original branding and remove the fraudulent content.",
      },
      {
        id: "prevent-crypto-hijack",
        question: "How do I prevent this from happening?",
        answer:
          "Never open unexpected files from “sponsors,” add a passkey or hardware security key so stolen cookies are useless, sign out idle sessions periodically, and keep your devices patched and scanned for infostealer malware. These steps target the session-token theft that powers almost every crypto hijack.",
      },
    ],
    faqs: [
      {
        q: "My followers sent crypto to the scam — can it be reversed?",
        a: "Crypto transactions usually can't be reversed, which is why warning your audience fast matters most. Report the scam wallet to the platform and exchanges, and post a clear notice so no one else sends funds.",
      },
    ],
    relatedSlugs: [
      "recover-hacked-youtube-account",
      "session-token-theft-explained",
      "brand-deal-phishing-scams",
    ],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "lipstick",
  },
];
