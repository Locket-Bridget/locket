'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I didn't think I needed this until my TikTok got hacked and I lost 3 years of content overnight. Locket got me back in AND locked down in 48 hours. I don't make a move online without them now.",
    name: "Ava M.",
    handle: "@avacreates",
    followers: "142K followers",
    tilt: "-rotate-1",
  },
  {
    quote: "The way they explain everything — no jargon, no judgment — it actually felt like talking to a friend who happened to know everything about cybersecurity. My accounts have never felt safer.",
    name: "Jade R.",
    handle: "@jadestyle",
    followers: "89K followers",
    tilt: "rotate-2",
  },
  {
    quote: "I was getting phishing DMs constantly and had no idea what was real. After one session with Locket I knew exactly what to look for. Genuinely changed how I use the internet.",
    name: "Sophie T.",
    handle: "@sophietravels",
    followers: "310K followers",
    tilt: "-rotate-2",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[rgb(219,234,254)] py-24 px-6">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-6"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          ★ &nbsp; real girls, real results
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
          style={{ fontFamily: 'var(--font-pacifico)' }}
        >
          They were protected.
        </h2>
        <p className="mt-4 text-xl text-blue-700/70" style={{ fontFamily: 'var(--font-caveat)' }}>
          Now it&apos;s your turn. ✦
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`bg-[#fff8ea] rounded-2xl shadow-[0_6px_24px_rgba(30,58,138,0.08)] p-8 flex flex-col gap-4 relative overflow-hidden ${t.tilt}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Blob */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl pointer-events-none" />

            {/* Stars */}
            <div className="flex gap-1 text-blue-900 text-sm">
              {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
            </div>

            {/* Quote */}
            <p className="text-sm text-blue-700/80 leading-relaxed flex-grow">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Divider */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-[2px] bg-blue-200 rounded-full" />
              <span className="text-blue-200 text-xs">★</span>
            </div>

            {/* Attribution */}
            <div>
              <p className="text-sm font-bold text-blue-900" style={{ fontFamily: 'var(--font-fredoka)' }}>
                {t.name}
              </p>
              <p className="text-xs text-blue-400">{t.handle} · {t.followers}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
