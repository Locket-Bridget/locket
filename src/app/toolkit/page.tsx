"use client";

import { DoodleDrop, DoodleLipstick, DoodleMirror, DoodleShield, DoodleTeacup } from "../components/Doodles";
import { useSubscribe } from "../hooks/useSubscribe";

const tips = [
  {
    number: "01",
    Doodle: DoodleDrop,
    headline: "Cleanse Your Passwords",
    metaphor: "Wash away your dull passwords",
    description: "We are all complicated and unique — and our passwords should reflect that. Long, messy, full of symbols. Think of it like your skincare routine: the more steps, the better protected you are.",
    tag: "Password Hygiene",
    tilt: "-rotate-1",
    bg: "bg-[#fff8ea]",
  },
  {
    number: "02",
    Doodle: DoodleLipstick,
    headline: "It's Time for a Makeover",
    metaphor: "Out with the old, in with the new… version",
    description: "That update you've been avoiding? It's basically your apps asking for a fresh start. Outdated software = open doors for hackers. Keep everything updated and stay ahead of vulnerabilities.",
    tag: "Software Updates",
    tilt: "rotate-1",
    bg: "bg-blue-50",
  },
  {
    number: "03",
    Doodle: DoodleMirror,
    headline: "Some Things Are For Your Eyes Only",
    metaphor: "Keep it between you and your mirror",
    description: "Not everything needs to be posted, clicked, or shared. The more you put out there, the more you become a target. Before you post — ask yourself if you'd be okay with a stranger seeing it.",
    tag: "Safe Posting",
    tilt: "-rotate-2",
    bg: "bg-[#fff8ea]",
  },
  {
    number: "04",
    Doodle: DoodleShield,
    headline: "Encryption Is the New Sunscreen",
    metaphor: "Always use protection… on your data",
    description: "Just like SPF protects your skin, encryption protects your data. Back up regularly, encrypt sensitive files, and let us help you figure out what needs covering — because prevention beats recovery every time.",
    tag: "Data Protection",
    tilt: "rotate-1",
    bg: "bg-blue-50",
  },
  {
    number: "05",
    Doodle: DoodleTeacup,
    headline: "Immunity Boost for Your Laptop",
    metaphor: "Ward away the bad online germs",
    description: "We all try to stay healthy — let's keep our online selves healthy too. Antivirus software wards off nasty online germs, and we're here to help you set it up, maintain it, and make sure it's actually working.",
    tag: "Antivirus & Protection",
    tilt: "-rotate-1",
    bg: "bg-[#fff8ea]",
  },
];

export default function ToolkitPage() {
  const { email, setEmail, status, handleSubmit } = useSubscribe();

  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-6"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          ★ &nbsp; digital self care
        </span>

        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight"
          style={{ fontFamily: 'var(--font-pacifico)' }}
        >
          Your Cyber Self-Care
          <br />
          <span className="italic" style={{ fontFamily: 'var(--font-playfair)' }}>Toolkit.</span>
        </h1>

        <p
          className="mt-4 text-2xl text-blue-700/70"
          style={{ fontFamily: 'var(--font-caveat)' }}
        >
          Pssst… this secret is safe to share. ✦
        </p>

        <div className="flex items-center justify-center gap-4 mt-6 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>

        <p className="mt-6 text-blue-700/60 text-base leading-relaxed">
          5 tips for making sure your online self is squeaky clean. Think of it as your digital skincare routine — easy, effective, and actually cute.
        </p>
      </div>

      {/* Tips */}
      <div className="max-w-2xl mx-auto flex flex-col gap-6 mb-20">
        {tips.map((tip) => (
          <div
            key={tip.number}
            className={`${tip.bg} ${tip.tilt} rounded-2xl shadow-[0_6px_24px_rgba(30,58,138,0.08)] p-8 relative overflow-hidden`}
          >
            {/* Blob */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-100 rounded-full opacity-30 blur-xl pointer-events-none" />

            <div className="flex items-start gap-6">
              {/* Number + doodle */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <span
                  className="text-5xl font-bold text-blue-200 leading-none"
                  style={{ fontFamily: 'var(--font-caveat)' }}
                >
                  {tip.number}
                </span>
                <tip.Doodle className="mt-1" />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Tag */}
                <span
                  className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3"
                  style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                  {tip.tag}
                </span>

                {/* Headline */}
                <h2
                  className="text-2xl font-bold text-blue-900 mb-1 leading-snug"
                  style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                  {tip.headline}
                </h2>

                {/* Metaphor */}
                <p
                  className="text-lg text-blue-500 mb-3"
                  style={{ fontFamily: 'var(--font-caveat)' }}
                >
                  &ldquo;{tip.metaphor}&rdquo;
                </p>

                {/* Divider */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-[2px] bg-blue-200 rounded-full" />
                  <span className="text-blue-200 text-xs">★</span>
                </div>

                {/* Description */}
                <p className="text-sm text-blue-700/70 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Download CTA */}
      <div className="max-w-xl mx-auto bg-[#1E3A8A] rounded-3xl p-10 text-center relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-700 rounded-full opacity-30 blur-2xl pointer-events-none" />
        <span className="absolute top-4 left-5 text-blue-500 text-lg select-none">★</span>
        <span className="absolute top-4 right-5 text-blue-500 text-lg select-none">★</span>

        <p
          className="text-3xl text-[#fff8ea] mb-2"
          style={{ fontFamily: 'var(--font-caveat)' }}
        >
          The full guide is coming soon.
        </p>
        <h2
          className="text-2xl font-bold text-[#fff8ea] mb-3"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          Be the first to get it.
        </h2>
        <p className="text-blue-300 text-sm mb-6">
          Drop your email and we&apos;ll let you know the moment it drops.
        </p>
        {status === "success" ? (
          <p className="text-[#fff8ea] font-semibold text-lg" style={{ fontFamily: 'var(--font-fredoka)' }}>
            You&apos;re on the list ★ We&apos;ll let you know!
          </p>
        ) : (
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
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
              {status === "loading" ? "Sending…" : "Notify Me ★"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-300 text-xs mt-3">Something went wrong — try again.</p>
        )}
      </div>

    </main>
  );
}
