"use client";

import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { useSubscribe } from "../hooks/useSubscribe";
import StripeDivider from "../components/StripeDivider";

const categories = ["All", "Account Takeovers", "Data Breaches", "Influencer Alerts", "Platform Updates", "Dark Web"];

const categoryColors: Record<string, string> = {
  "Account Takeovers": "bg-red-100 text-red-700",
  "Data Breaches": "bg-red-900 text-white",
  "Influencer Alerts": "bg-blue-900 text-[#fff8ea]",
  "Platform Updates": "bg-blue-100 text-blue-800",
  "Dark Web": "bg-blue-900 text-[#fff8ea]",
};

const feed = [
  {
    category: "Account Takeovers",
    headline: "AitM Phishing Targets TikTok Business Accounts Using Cloudflare Turnstile Evasion",
    excerpt: "Threat actors are hijacking TikTok for Business accounts by directing victims to lookalike pages that use Cloudflare Turnstile to block security scanners before stealing credentials. Compromised accounts are then weaponized for malware distribution and malvertising.",
    date: "Mar 27, 2026",
    severity: "High" as const,
    source: "The Hacker News",
    link: "https://thehackernews.com/2026/03/aitm-phishing-targets-tiktok-business.html",
  },
  {
    category: "Platform Updates",
    headline: "Meta to Shut Down Instagram End-to-End Encrypted Chat Support Starting May 2026",
    excerpt: "Meta is discontinuing end-to-end encryption for Instagram DMs after May 8, 2026, citing low adoption. Users who want encrypted messaging will be directed to WhatsApp instead — leaving Instagram conversations more exposed.",
    date: "Mar 13, 2026",
    severity: "Medium" as const,
    source: "The Hacker News",
    link: "https://thehackernews.com/2026/03/meta-to-shut-down-instagram-end-to-end.html",
  },
  {
    category: "Platform Updates",
    headline: "TikTok Forms U.S. Joint Venture to Continue Operations Under Executive Order",
    excerpt: "TikTok established TikTok USDS Joint Venture LLC to comply with President Trump's executive order, allowing the app to stay live in the U.S. ByteDance retains a 19.9% stake while data protections are managed through Oracle's cloud infrastructure.",
    date: "Jan 23, 2026",
    severity: "Low" as const,
    source: "The Hacker News",
    link: "https://thehackernews.com/2026/01/tiktok-forms-us-joint-venture-to.html",
  },
  {
    category: "Account Takeovers",
    headline: "15,000 Fake TikTok Shop Domains Deliver Malware and Steal Crypto",
    excerpt: "Researchers uncovered FraudOnTok — a campaign using 15,000+ lookalike domains to trick TikTok Shop users into downloading malware. The operation uses AI-generated videos and Meta ads to advertise fake discounts, targeting crypto theft and credential harvesting.",
    date: "Aug 5, 2025",
    severity: "High" as const,
    source: "The Hacker News",
    link: "https://thehackernews.com/2025/08/15000-fake-tiktok-shop-domains-deliver.html",
  },
  {
    category: "Dark Web",
    headline: "Malicious PyPI Packages Exploit Instagram and TikTok APIs to Validate Stolen Accounts",
    excerpt: "Three malicious Python packages on PyPI were found sending forged requests to TikTok and Instagram APIs to verify whether stolen email addresses have active accounts — building validated lists for credential stuffing attacks.",
    date: "May 20, 2025",
    severity: "High" as const,
    source: "The Hacker News",
    link: "https://thehackernews.com/2025/05/malicious-pypi-packages-exploit.html",
  },
  {
    category: "Platform Updates",
    headline: "TikTok Quietly Updated Its Privacy Policy to Collect Users' Biometric Data",
    excerpt: "TikTok revised its U.S. privacy policy to permit automatic collection of biometric identifiers including faceprints and voiceprints from user content — without explicit consent in most U.S. states, following a previous $92 million settlement.",
    date: "Jun 5, 2021",
    severity: "Medium" as const,
    source: "The Hacker News",
    link: "https://thehackernews.com/2021/06/tiktok-quietly-updated-its-privacy.html",
  },
];

export default function NewsletterPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { email, setEmail, status, handleSubmit } = useSubscribe();

  const filtered = activeCategory === "All"
    ? feed
    : feed.filter(a => a.category === activeCategory);

  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-6 py-20">

      {/* Page header */}
      <div className="text-center mb-12">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full -rotate-1 shadow-md mb-6"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          ★ &nbsp; weekly threat intel
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900" style={{ fontFamily: 'var(--font-pacifico)' }}>
          Locket Intel
        </h1>
        <p className="mt-4 text-blue-700/70 max-w-lg mx-auto text-xl leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
          The cyber tea you actually need.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-blue-900 text-[#fff8ea] shadow-md scale-105'
                : 'bg-white text-blue-800 hover:bg-blue-50 border border-blue-100'
            }`}
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Feed grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {filtered.map((article, i) => (
          <ArticleCard
            key={i}
            category={article.category}
            categoryColor={categoryColors[article.category]}
            headline={article.headline}
            excerpt={article.excerpt}
            date={article.date}
            severity={article.severity}
            source={article.source}
            link={article.link}
          />
        ))}
      </div>

      <div className="mt-12 mb-12">
        <StripeDivider />
      </div>

      {/* Subscribe section */}
      <div className="max-w-xl mx-auto bg-[#1E3A8A] rounded-3xl p-10 text-center relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-700 rounded-full opacity-30 blur-2xl pointer-events-none" />
        <span className="absolute top-4 left-5 text-blue-500 text-lg select-none">★</span>
        <span className="absolute top-4 right-5 text-blue-500 text-lg select-none">★</span>

        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3" style={{ fontFamily: 'var(--font-fredoka)' }}>
          ✦ &nbsp; don't miss a drop
        </p>
        <h2 className="text-3xl font-bold text-[#fff8ea] mb-2" style={{ fontFamily: 'var(--font-fredoka)' }}>
          Get the intel, weekly.
        </h2>
        <p className="text-blue-300 text-sm mb-6">
          Social media threats, influencer alerts, and dark web updates — straight to your inbox.
        </p>

        {status === "success" ? (
          <p className="text-[#fff8ea] font-semibold text-lg" style={{ fontFamily: 'var(--font-fredoka)' }}>
            You're in ★ Talk soon!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-full text-blue-900 bg-[#fff8ea] text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-[#fff8ea] text-blue-900 rounded-full text-sm font-semibold hover:scale-105 transition-all disabled:opacity-60"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              {status === "loading" ? "Sending…" : "Subscribe ★"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-300 text-xs mt-3">Something went wrong — try again or email us directly.</p>
        )}
      </div>

    </main>
  );
}
