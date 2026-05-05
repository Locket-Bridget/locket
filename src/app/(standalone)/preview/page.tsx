"use client";

import { useState } from "react";

const SURVEY_URL = "https://form.typeform.com/to/YOUR_TYPEFORM_ID"; // swap in your Typeform link

export default function PreviewPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
      style={{ background: "#fdf9f0" }}
    >
      {/* Background deco blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Card */}
      <div className="relative z-10 max-w-lg w-full text-center">

        {/* Eyebrow */}
        <span
          className="inline-block bg-[#1E3A8A] text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-8"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          ★ &nbsp; something&apos;s coming
        </span>

        {/* Big logo / wordmark */}
        <p
          className="text-[56px] md:text-[72px] font-bold text-[#1E3A8A] leading-none mb-3 tracking-tight"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Locket
        </p>

        <p
          className="text-lg md:text-xl text-[#1E3A8A]/70 mb-2 leading-snug"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          Cyber care is self care.
        </p>

        {/* Divider dashes */}
        <div className="flex items-center justify-center gap-2 my-6 text-blue-200 text-sm tracking-widest">
          ✦ ✦ ✦
        </div>

        {/* Teaser copy */}
        <p
          className="text-gray-500 text-base leading-relaxed mb-10 max-w-sm mx-auto"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          Your accounts. Your brand. Your identity. Protected. ✦
        </p>

        {/* Email capture */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-6">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
              style={{ fontFamily: "var(--font-fredoka)" }}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#1E3A8A] text-white rounded-xl text-sm font-semibold hover:bg-blue-800 transition-all whitespace-nowrap"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Notify me ✦
            </button>
          </form>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl px-6 py-4 mb-6 max-w-sm mx-auto">
            <p className="text-[#1E3A8A] font-semibold text-sm" style={{ fontFamily: "var(--font-fredoka)" }}>
              You&apos;re on the list! ✨ We&apos;ll be in touch.
            </p>
          </div>
        )}

        {/* Survey CTA */}
        {SURVEY_URL !== "https://form.typeform.com/to/YOUR_TYPEFORM_ID" && (
          <a
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-blue-400 hover:text-blue-600 underline underline-offset-4 transition-colors"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Want to help shape what we build? Take our 2-min survey →
          </a>
        )}

        {/* Footer micro */}
        <p className="mt-12 text-gray-300 text-xs" style={{ fontFamily: "var(--font-fredoka)" }}>
          locketsecurity.com &nbsp;·&nbsp; bridget@locketsecurity.com
        </p>
      </div>
    </main>
  );
}
