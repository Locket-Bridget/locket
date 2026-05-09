"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DoodleDrop,
  DoodleLipstick,
  DoodleMirror,
  DoodleShield,
  DoodleTeacup,
  DoodleLock,
} from "../components/Doodles";
import { lookbook } from "../products/lookbookData";

const chapterDoodles = [
  DoodleDrop,
  DoodleLipstick,
  DoodleMirror,
  DoodleShield,
  DoodleTeacup,
  DoodleLock,
];

const chapterBgs = ["bg-[#fff8ea]", "bg-blue-50", "bg-[#fce8e3]"];
const chapterTilts = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];

export default function LookbookPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productType: "lookbook" }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Could not start checkout");
      }
      window.location.href = data.url as string;
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-4 sm:px-6 py-14 sm:py-20">
      {/* Hero */}
      <div className="text-center mb-14 sm:mb-20 max-w-2xl mx-auto">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full -rotate-1 shadow-md mb-6"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ★ &nbsp; new — the full lookbook
        </span>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 leading-tight"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          {lookbook.name}
          <br />
          <span
            className="text-3xl sm:text-4xl md:text-5xl text-blue-700/80"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            {lookbook.subtitle}
          </span>
        </h1>

        <p
          className="mt-5 text-lg sm:text-xl md:text-2xl text-blue-700/70"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          {lookbook.tagline} ✦
        </p>

        <div className="flex items-center justify-center gap-4 mt-6 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>

        <p className="mt-6 text-blue-700/60 text-base leading-relaxed">
          {lookbook.description}
        </p>
      </div>

      {/* Buy card */}
      <div className="max-w-xl mx-auto bg-[#fff8ea] rounded-3xl shadow-[0_8px_40px_rgba(30,58,138,0.10)] p-6 sm:p-10 relative overflow-hidden mb-16 sm:mb-24">
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl pointer-events-none" />
        <span className="absolute top-4 left-5 text-blue-200 text-xl select-none">★</span>
        <span className="absolute top-4 right-5 text-blue-200 text-xl select-none">★</span>

        <div className="text-center mb-6">
          <span
            className="text-5xl sm:text-6xl font-bold text-blue-900"
            style={{ fontFamily: "var(--font-titan)" }}
          >
            {lookbook.price}
          </span>
          <span
            className="text-blue-400 text-sm ml-2"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
          >
            {lookbook.priceLabel}
          </span>
          <p
            className="mt-2 text-blue-500 text-sm"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            {lookbook.pageCountLabel} · instant download
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-[2px] bg-blue-200 rounded-full" />
          <span className="text-blue-200 text-xs">★</span>
          <div className="w-8 h-[2px] bg-blue-200 rounded-full" />
        </div>

        <ul className="flex flex-col gap-3 mb-8">
          {lookbook.highlights.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-blue-700/80"
            >
              <span className="text-[#C8553D] mt-0.5">★</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleBuy}
          disabled={status === "loading"}
          className="w-full px-8 py-4 bg-blue-900 text-[#fff8ea] rounded-full text-sm font-semibold hover:scale-105 transition-all disabled:opacity-60"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          {status === "loading"
            ? "Sending you to checkout…"
            : `Get the Lookbook — ${lookbook.price} ★`}
        </button>
        {error && (
          <p className="mt-3 text-center text-xs text-[#C8553D]">{error}</p>
        )}
        <p className="mt-3 text-center text-xs text-blue-400">
          Secure checkout via Stripe · 14-day refund if it isn&apos;t for you
        </p>
      </div>

      {/* What's inside */}
      <div className="max-w-3xl mx-auto mb-16 sm:mb-24">
        <div className="text-center mb-10">
          <p
            className="text-2xl sm:text-3xl text-blue-400/80"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            what&apos;s inside ✦
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-blue-900 mt-2"
            style={{ fontFamily: "var(--font-titan)" }}
          >
            12 chapters. One full routine.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {lookbook.chapters.map((chapter, i) => {
            const Doodle = chapterDoodles[i % chapterDoodles.length];
            const bg = chapterBgs[i % chapterBgs.length];
            const tilt = chapterTilts[i % chapterTilts.length];
            return (
              <div
                key={chapter.number}
                className={`${bg} ${tilt} rounded-2xl shadow-[0_6px_24px_rgba(30,58,138,0.08)] p-5 sm:p-6 relative overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <span
                      className="text-3xl font-bold text-blue-200 leading-none"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontStyle: "italic",
                      }}
                    >
                      {chapter.number}
                    </span>
                    <Doodle className="mt-1 scale-75" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold text-blue-900 mb-1 leading-snug"
                      style={{
                        fontFamily: "var(--font-fredoka)",
                        fontWeight: 600,
                      }}
                    >
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-blue-700/70 leading-relaxed">
                      {chapter.blurb}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="text-center mb-10">
          <p
            className="text-2xl sm:text-3xl text-blue-400/80"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            the fine print ✦
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {lookbook.faq.map((item, i) => (
            <details
              key={i}
              className="bg-[#fff8ea] rounded-2xl px-5 py-4 group"
            >
              <summary
                className="cursor-pointer list-none flex items-center justify-between text-blue-900 font-semibold"
                style={{
                  fontFamily: "var(--font-fredoka)",
                  fontWeight: 600,
                }}
              >
                <span>{item.q}</span>
                <span className="text-blue-300 group-open:rotate-45 transition-transform">
                  ＋
                </span>
              </summary>
              <p className="mt-3 text-sm text-blue-700/70 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Back link */}
      <div className="text-center">
        <Link
          href="/toolkit"
          className="inline-flex items-center gap-2 text-blue-700/70 text-sm hover:text-blue-900"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ← back to the free toolkit
        </Link>
      </div>
    </main>
  );
}
