import type { Guide } from "./types";
import { BRIDGET, LOCKET_TEAM } from "./authors";

const PUBLISHED = "2026-05-27";
const MODIFIED = "2026-05-27";

export const privacyOpsecGuides: Guide[] = [
  {
    slug: "hide-home-address-online",
    cluster: "privacy-opsec",
    category: "Your Digital Footprint",
    title: "How do I remove my home address from the internet?",
    metaTitle: "How to Remove Your Home Address From the Internet (2026)",
    metaDescription:
      "Creators' home addresses leak through data brokers, domain records, and tagged posts. Learn how to find and remove your address and reduce future exposure.",
    excerpt:
      "Your home address is more exposed than you think: through data brokers, old domain records, and tagged posts. Here's how to find and scrub it.",
    tldr:
      "To remove your home address from the internet, opt out of the major people-search and data-broker sites that list it, fix exposures like public domain (WHOIS) records and business filings, and stop tagging your location in real time. Brokers re-list data over time, so removal is an ongoing process, not a one-time fix.",
    sections: [
      {
        id: "where-address-leaks",
        question: "Where does my home address actually leak from?",
        answer:
          "Common sources are people-search and data-broker sites (which compile public and purchased records), domain WHOIS records if you registered a site without privacy, business registrations, package and tagged-photo metadata, and old posts. Searching your own name plus your city often reveals which sites are listing you.",
      },
      {
        id: "opt-out-data-brokers",
        question: "How do I get my address off people-search sites?",
        answer:
          "Each major broker (such as Whitepages, Spokeo, and BeenVerified) has an opt-out process: you locate your listing and submit a removal request, sometimes with email confirmation. It's repetitive but effective. Because brokers re-acquire data, plan to recheck periodically; some people use a paid removal service to automate the ongoing work.",
      },
      {
        id: "reduce-future-exposure",
        question: "How do I keep my address from leaking again?",
        answer:
          "Use domain privacy on any sites you register, a PO box or business address for public-facing needs, and a separate shipping address for fan mail. Turn off real-time location tags, and avoid posting photos that reveal your street, building, or mail. Reducing what you publish slows how fast brokers can rebuild a profile.",
      },
    ],
    faqs: [
      {
        q: "Will removing my address from one site fix the problem?",
        a: "No. Your address is usually listed on dozens of broker sites, and they re-share each other's data. Effective removal means opting out broadly and rechecking over time, which is why many creators automate it.",
      },
    ],
    relatedSlugs: ["remove-info-from-data-brokers", "prevent-doxxing-creators", "what-is-dark-web-monitoring"],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "mirror",
  },

  {
    slug: "remove-info-from-data-brokers",
    cluster: "privacy-opsec",
    category: "Your Digital Footprint",
    title: "How do I get my info off data-broker sites?",
    metaTitle: "How to Remove Your Info From Data-Broker Sites (2026)",
    metaDescription:
      "Data brokers sell your name, address, phone, and relatives. Learn how broker opt-outs work, why removals don't stick, and how to keep your profile minimized.",
    excerpt:
      "Data brokers quietly package and sell your personal details. Here's how their opt-outs work, why your info keeps coming back, and how to stay ahead of it.",
    tldr:
      "To remove your info from data brokers, submit opt-out requests to each major people-search site, which involves finding your profile and confirming removal, often by email. Because brokers continuously re-collect data from public records, removals fade and need rechecking. Doing it broadly and repeatedly, or via an automated service, is what keeps your exposure low.",
    sections: [
      {
        id: "what-data-brokers-have",
        question: "What information do data brokers have on me?",
        answer:
          "Brokers compile your full name, current and past addresses, phone numbers, email addresses, age, relatives, and sometimes income or property records, assembled from public records, purchases, and other sources. They sell this in searchable profiles, which is what makes a creator easy to locate, spam, or doxx.",
      },
      {
        id: "how-broker-opt-outs-work",
        question: "How do data-broker opt-outs work?",
        answer:
          "You find your listing on each broker, submit their opt-out request, and confirm it (often via an email link). Each site has its own form and timeline. There are many brokers, so a thorough opt-out takes time. Keeping a checklist of which sites you've cleared helps you track and repeat the process.",
      },
      {
        id: "why-info-comes-back",
        question: "Why does my information reappear after I remove it?",
        answer:
          "Brokers continuously re-acquire data from public records and each other, so a profile you removed can be rebuilt within months. That's why removal is ongoing maintenance, not a one-time task. Periodic rechecks, or an automated removal service that re-submits opt-outs for you, keep your exposure suppressed over time.",
      },
    ],
    faqs: [
      {
        q: "Are paid data-removal services worth it?",
        a: "They can save significant time by automating opt-outs across many brokers and re-submitting when data reappears. Whether it's worth the cost depends on how exposed and how high-profile you are; the manual route is free but labor-intensive.",
      },
    ],
    relatedSlugs: ["hide-home-address-online", "prevent-doxxing-creators", "what-is-dark-web-monitoring"],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "mirror",
  },

  {
    slug: "prevent-doxxing-creators",
    cluster: "privacy-opsec",
    category: "Your Digital Footprint",
    title: "How do I protect myself from doxxing?",
    metaTitle: "How to Protect Yourself From Doxxing (Creator Guide)",
    metaDescription:
      "Doxxing exposes a creator's private details to harassers. Learn how to reduce your exposure, lock down accounts, and respond if you've been doxxed.",
    excerpt:
      "Doxxing, publishing your private details to harass you, is a real risk for visible creators. Here's how to shrink your exposure and respond if it happens.",
    tldr:
      "To protect yourself from doxxing, minimize the personal details available about you: remove your address from data brokers, lock down account privacy, scrub location and identifying clues from posts, and separate your personal and public identities. If you're doxxed, document everything, report it to the platforms, and consider law enforcement for credible threats.",
    sections: [
      {
        id: "what-is-doxxing",
        question: "What is doxxing and why are creators targeted?",
        answer:
          "Doxxing is publishing someone's private information (home address, phone, real name, workplace) to enable harassment. Creators are targeted because they're visible and their content leaks clues. The goal is intimidation, so reducing what's findable about you both lowers the risk and limits the damage if it happens.",
      },
      {
        id: "reduce-doxxing-risk",
        question: "How do I reduce my doxxing risk?",
        answer:
          "Remove your address from data brokers, use a PO box for public mail, and keep your real name and location off public profiles where possible. Scrub geotags and identifying background details (street signs, mail, storefronts) from posts, separate personal accounts from your creator identity, and lock down who can see your friends and tags.",
      },
      {
        id: "respond-to-doxxing",
        question: "What should I do if I've been doxxed?",
        answer:
          "Document everything with screenshots and links before it's deleted, report the content to each platform (most ban sharing private info), and ask sites to remove it. Tighten your account security in case the doxx came from a breach. For threats of violence, contact law enforcement and provide your documentation.",
      },
    ],
    faqs: [
      {
        q: "Should I go private after being doxxed?",
        a: "Temporarily limiting who can contact or tag you, and pausing location posts, can reduce immediate harassment. You don't have to disappear. Combine tighter privacy settings with documentation and platform reports.",
      },
    ],
    relatedSlugs: ["hide-home-address-online", "remove-info-from-data-brokers", "what-to-do-instagram-impersonator"],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "High",
    illustration: "shield",
  },

  {
    slug: "safe-public-wifi-travel",
    cluster: "privacy-opsec",
    category: "Your Digital Footprint",
    title: "How do I stay secure on public Wi-Fi while traveling?",
    metaTitle: "How to Stay Secure on Public Wi-Fi (Creator Travel Guide)",
    metaDescription:
      "Public Wi-Fi at airports, hotels, and cafes exposes creators to interception and fake hotspots. Learn the simple habits that keep your accounts safe on the go.",
    excerpt:
      "Airport, hotel, and cafe Wi-Fi are convenient and risky. Here's how creators stay safe online while traveling and shooting on the road.",
    tldr:
      "To stay secure on public Wi-Fi, use your phone's cellular hotspot or a reputable VPN instead of open networks, make sure sites show HTTPS, avoid logging into sensitive accounts on untrusted connections, and turn off auto-connect so your device doesn't silently join fake hotspots. Keep 2FA on so a single intercepted login isn't enough.",
    sections: [
      {
        id: "public-wifi-risks",
        question: "What's actually risky about public Wi-Fi?",
        answer:
          "On open networks, others may snoop traffic or set up a fake hotspot named like the real one to intercept what you send. The danger is logging into accounts or sending sensitive data over a connection you don't control. Most modern sites use HTTPS encryption, which helps, but untrusted networks still warrant caution.",
      },
      {
        id: "safer-connection",
        question: "What's the safest way to get online while traveling?",
        answer:
          "Prefer your phone's cellular data or personal hotspot, which is far harder to intercept than open Wi-Fi. If you must use public Wi-Fi, run a reputable VPN to encrypt your traffic, confirm the network name with staff, and check that sites show HTTPS. Turn off auto-connect and Wi-Fi when you're not using it.",
      },
      {
        id: "travel-account-safety",
        question: "How do I protect my accounts on the road?",
        answer:
          "Keep 2FA, ideally a passkey or authenticator app, on all key accounts so an intercepted password alone is useless. Avoid logging into banking or platform admin tools on public networks, keep devices updated, and lock your screen. Carry your backup codes in your password manager in case you need to re-verify while traveling.",
      },
    ],
    faqs: [
      {
        q: "Do I really need a VPN, or is HTTPS enough?",
        a: "HTTPS protects the contents of most site traffic, so a VPN isn't strictly required for casual browsing. But a reputable VPN adds protection against fake hotspots and metadata snooping, which is worth it when you frequently work from untrusted networks.",
      },
    ],
    relatedSlugs: ["set-up-2fa-instagram", "passkeys-explained", "secure-creator-email-account"],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Low",
    illustration: "teacup",
  },

  {
    slug: "what-is-dark-web-monitoring",
    cluster: "privacy-opsec",
    category: "Your Digital Footprint",
    title: "What is dark web monitoring and do I need it?",
    metaTitle: "What Is Dark Web Monitoring? Do Creators Need It? (2026)",
    metaDescription:
      "Dark web monitoring alerts you when your email, passwords, or personal data show up in breaches and leak markets. Learn how it works and when it's worth it.",
    excerpt:
      "Dark web monitoring watches breach data and leak markets for your details, so you can react before a takeover. Here's how it works and who needs it.",
    tldr:
      "Dark web monitoring is a service that scans breach dumps and underground marketplaces for your email, passwords, phone, or other personal data, and alerts you when they appear. It doesn't remove the data, but it gives you time to change exposed passwords before attackers use them, which is valuable for creators whose details are widely circulated.",
    sections: [
      {
        id: "how-dark-web-monitoring-works",
        question: "How does dark web monitoring work?",
        answer:
          "The service continuously scans known breach databases, paste sites, and dark-web marketplaces for identifiers you register: your emails, phone numbers, and sometimes passwords. When a match appears in newly leaked or traded data, it alerts you so you can rotate the affected password and secure the account before the credentials are abused.",
      },
      {
        id: "what-monitoring-cant-do",
        question: "What can't dark web monitoring do?",
        answer:
          "It doesn't remove your data from the dark web (once leaked, it can't be recalled) and it can't prevent the original breach. Think of it as an early-warning system, not a shield. Its value is the time it buys you to act: changing passwords and enabling 2FA before stolen credentials are weaponized.",
      },
      {
        id: "do-creators-need-monitoring",
        question: "Do creators actually need it?",
        answer:
          "It's most worthwhile for monetized creators, whose emails and personal details are widely exposed and actively targeted. Large breaches have leaked tens of millions of influencer records. If your accounts represent real income, the early warning is worth it, paired with unique passwords and strong 2FA, which limit what a leak can unlock.",
      },
    ],
    faqs: [
      {
        q: "Is a free breach checker as good as paid monitoring?",
        a: "A free tool like Have I Been Pwned lets you check known breaches on demand, which is great for spot checks. Paid monitoring adds continuous, automatic alerts across more sources, which is useful if you want to be notified the moment new data appears rather than remembering to check.",
      },
    ],
    relatedSlugs: ["stop-reusing-passwords", "remove-info-from-data-brokers", "best-password-manager-creators"],
    author: BRIDGET,
    reviewer: LOCKET_TEAM,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    severity: "Medium",
    illustration: "drop",
  },
];
