"use client";

import React, { useLayoutEffect, useRef } from "react";
import Button from "./Button";
import LocketIcon from "./LocketIcon";
import SparkleText from "./SparkleText";
import MainScrollIndicator from "./MainScrollIndicator";

// Padding around the card that stars must keep clear of.
const STAR_BUFFER_PX = 12;

const word = "LOCKET";

type DecoStar = {
  top: string;
  left: string;
  size: string;
  color: string;
  opacity: number;
  char: string;
  twinkle?: { delay: string; duration: string };
};

// Hand-tuned irregular positions, clustered along edges so they remain
// visible around the centered card. Sizes/colors/glyphs/timings all vary
// to avoid any visible grid pattern.
const decoStars: DecoStar[] = [
  // Top band
  { top: "5%",  left: "7%",  size: "2.1rem",  color: "#93C5FD", opacity: 0.6,  char: "✦", twinkle: { delay: "0.2s", duration: "3.4s" } },
  { top: "11%", left: "19%", size: "1.05rem", color: "#BFDBFE", opacity: 0.55, char: "★" },
  { top: "4%",  left: "33%", size: "0.85rem", color: "#DBEAFE", opacity: 0.5,  char: "·" },
  { top: "14%", left: "46%", size: "1.2rem",  color: "#93C5FD", opacity: 0.55, char: "✧", twinkle: { delay: "1.1s", duration: "4.2s" } },
  { top: "7%",  left: "58%", size: "1.55rem", color: "#BFDBFE", opacity: 0.55, char: "✦" },
  { top: "17%", left: "71%", size: "2.25rem", color: "#D4A23C", opacity: 0.6,  char: "★", twinkle: { delay: "0.7s", duration: "3.8s" } },
  { top: "5%",  left: "83%", size: "1.25rem", color: "#93C5FD", opacity: 0.55, char: "✶" },
  { top: "12%", left: "92%", size: "1.85rem", color: "#BFDBFE", opacity: 0.55, char: "✦", twinkle: { delay: "2.1s", duration: "3.6s" } },
  { top: "21%", left: "12%", size: "1rem",    color: "#BFDBFE", opacity: 0.45, char: "·" },
  { top: "24%", left: "88%", size: "1.1rem",  color: "#93C5FD", opacity: 0.5,  char: "★" },
  // Mid (edges only, since center is hidden by card)
  { top: "32%", left: "4%",  size: "1.7rem",  color: "#BFDBFE", opacity: 0.55, char: "✦", twinkle: { delay: "0.4s", duration: "3.1s" } },
  { top: "38%", left: "15%", size: "1rem",    color: "#93C5FD", opacity: 0.45, char: "✧" },
  { top: "46%", left: "6%",  size: "1.25rem", color: "#BFDBFE", opacity: 0.55, char: "✶" },
  { top: "54%", left: "13%", size: "0.85rem", color: "#93C5FD", opacity: 0.4,  char: "·" },
  { top: "62%", left: "4%",  size: "2rem",    color: "#D4A23C", opacity: 0.55, char: "✦", twinkle: { delay: "1.6s", duration: "4.4s" } },
  { top: "34%", left: "93%", size: "1.55rem", color: "#93C5FD", opacity: 0.55, char: "★", twinkle: { delay: "1.4s", duration: "3.9s" } },
  { top: "42%", left: "86%", size: "0.9rem",  color: "#BFDBFE", opacity: 0.45, char: "·" },
  { top: "50%", left: "95%", size: "1.2rem",  color: "#93C5FD", opacity: 0.5,  char: "✦" },
  { top: "58%", left: "90%", size: "1.4rem",  color: "#BFDBFE", opacity: 0.55, char: "✧", twinkle: { delay: "0.9s", duration: "3.3s" } },
  { top: "66%", left: "96%", size: "1rem",    color: "#93C5FD", opacity: 0.45, char: "★" },
  // Bottom band
  { top: "74%", left: "8%",  size: "1.7rem",  color: "#BFDBFE", opacity: 0.55, char: "✦" },
  { top: "82%", left: "18%", size: "1.05rem", color: "#93C5FD", opacity: 0.5,  char: "✶" },
  { top: "88%", left: "29%", size: "2.1rem",  color: "#93C5FD", opacity: 0.6,  char: "✦", twinkle: { delay: "0.3s", duration: "3.6s" } },
  { top: "83%", left: "42%", size: "0.9rem",  color: "#BFDBFE", opacity: 0.45, char: "·" },
  { top: "90%", left: "54%", size: "1.2rem",  color: "#93C5FD", opacity: 0.55, char: "✧" },
  { top: "85%", left: "67%", size: "1.55rem", color: "#BFDBFE", opacity: 0.55, char: "★", twinkle: { delay: "1.8s", duration: "4.1s" } },
  { top: "92%", left: "78%", size: "1rem",    color: "#93C5FD", opacity: 0.45, char: "·" },
  { top: "80%", left: "89%", size: "2rem",    color: "#D4A23C", opacity: 0.6,  char: "✦", twinkle: { delay: "0.6s", duration: "3.7s" } },
  { top: "74%", left: "94%", size: "1.1rem",  color: "#BFDBFE", opacity: 0.55, char: "★" },
  // Extra left-side density
  { top: "9%",  left: "3%",  size: "1.4rem",  color: "#BFDBFE", opacity: 0.55, char: "✧", twinkle: { delay: "0.5s", duration: "3.7s" } },
  { top: "16%", left: "9%",  size: "1.85rem", color: "#D4A23C", opacity: 0.55, char: "✦", twinkle: { delay: "1.0s", duration: "4.0s" } },
  { top: "27%", left: "20%", size: "1.25rem", color: "#93C5FD", opacity: 0.5,  char: "★" },
  { top: "41%", left: "21%", size: "1.55rem", color: "#BFDBFE", opacity: 0.55, char: "✦", twinkle: { delay: "1.7s", duration: "3.5s" } },
  { top: "55%", left: "3%",  size: "1.2rem",  color: "#93C5FD", opacity: 0.5,  char: "✶" },
  { top: "67%", left: "20%", size: "1.7rem",  color: "#D4A23C", opacity: 0.55, char: "★", twinkle: { delay: "0.8s", duration: "4.3s" } },
  { top: "78%", left: "13%", size: "1.05rem", color: "#93C5FD", opacity: 0.5,  char: "✦" },
  { top: "94%", left: "12%", size: "1.4rem",  color: "#BFDBFE", opacity: 0.55, char: "✧", twinkle: { delay: "1.3s", duration: "3.8s" } },
  // Dark blue accents, sprinkled across all bands to add depth
  { top: "1%",  left: "41%", size: "1.3rem",  color: "#1E3A8A", opacity: 0.55, char: "✦", twinkle: { delay: "0.5s", duration: "3.6s" } },
  { top: "3%",  left: "51%", size: "1.05rem", color: "#1E40AF", opacity: 0.5,  char: "★" },
  { top: "2%",  left: "65%", size: "1.45rem", color: "#1E3A8A", opacity: 0.55, char: "✶", twinkle: { delay: "1.2s", duration: "4.0s" } },
  { top: "19%", left: "63%", size: "1.6rem",  color: "#1E40AF", opacity: 0.6,  char: "★" },
  { top: "29%", left: "8%",  size: "1.15rem", color: "#1E3A8A", opacity: 0.5,  char: "✶", twinkle: { delay: "0.6s", duration: "3.5s" } },
  { top: "44%", left: "91%", size: "1.45rem", color: "#1E40AF", opacity: 0.55, char: "✦" },
  { top: "57%", left: "22%", size: "1.25rem", color: "#1D4ED8", opacity: 0.5,  char: "✧", twinkle: { delay: "1.9s", duration: "4.2s" } },
  { top: "71%", left: "87%", size: "1.7rem",  color: "#1E3A8A", opacity: 0.6,  char: "★", twinkle: { delay: "0.4s", duration: "3.7s" } },
  { top: "86%", left: "36%", size: "1.3rem",  color: "#1E40AF", opacity: 0.55, char: "✦" },
  { top: "77%", left: "61%", size: "1.5rem",  color: "#1E3A8A", opacity: 0.55, char: "✶", twinkle: { delay: "2.0s", duration: "3.9s" } },
];

export default function MainLanding() {
  const cardRef = useRef<HTMLDivElement>(null);
  const starRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Hide any decorative star whose bounding box overlaps the card so
  // they never visually touch it. Re-runs on viewport / card resize.
  useLayoutEffect(() => {
    const update = () => {
      const card = cardRef.current;
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      starRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const overlaps =
          r.right + STAR_BUFFER_PX > cardRect.left &&
          r.left - STAR_BUFFER_PX < cardRect.right &&
          r.bottom + STAR_BUFFER_PX > cardRect.top &&
          r.top - STAR_BUFFER_PX < cardRect.bottom;
        el.style.visibility = overlaps ? "hidden" : "visible";
      });
    };
    update();
    const ro = new ResizeObserver(update);
    if (cardRef.current) ro.observe(cardRef.current);
    ro.observe(document.body);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main className="relative lg:min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-start lg:justify-center bg-[rgb(219,234,254)] px-4 pt-6 pb-8 lg:py-6 overflow-hidden">
      {decoStars.map((s, i) => {
        const baseStyle: React.CSSProperties = {
          top: s.top,
          left: s.left,
          fontSize: s.size,
          color: s.color,
          opacity: s.opacity,
        };
        const twinkleStyle = s.twinkle
          ? ({
              "--twinkle-delay": s.twinkle.delay,
              "--twinkle-duration": s.twinkle.duration,
              "--twinkle-min": Math.max(0, s.opacity - 0.25).toFixed(2),
              "--twinkle-max": Math.min(1, s.opacity + 0.15).toFixed(2),
            } as React.CSSProperties)
          : {};
        return (
          <span
            key={i}
            ref={(el) => {
              starRefs.current[i] = el;
            }}
            aria-hidden="true"
            className={`absolute select-none pointer-events-none${s.twinkle ? " twinkle" : ""}`}
            style={{ ...baseStyle, ...twinkleStyle }}
          >
            {s.char}
          </span>
        );
      })}

      <div ref={cardRef} className="bg-[#fff8ea] rounded-3xl shadow-[0_8px_40px_rgba(30,58,138,0.10)] px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 w-full max-w-4xl text-center relative overflow-hidden">
        {/* Soft blob in background */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100 rounded-full opacity-30 blur-2xl pointer-events-none" />

        {/* Wordmark + icon */}
        <h1
          className="font-locket splash-text flex items-center justify-center gap-1 text-blue-900"
          aria-label="LOCKET"
        >
          {word.split("").map((letter, i) => (
            <span
              key={i}
              className="splash-letter"
              aria-hidden="true"
              style={{ "--spark-delay": i, "--spark-delay2": i + 1 } as React.CSSProperties}
            >
              {letter}
              <span className="sparkle1" />
              <span className="sparkle2" />
            </span>
          ))}

          <LocketIcon className="splash-icon" />
        </h1>

        <SparkleText
          text="For when you don’t want to share."
          className="mt-4 sm:mt-6"
        />

        {/* Navigation buttons */}
        <div className="mt-8 sm:mt-12 md:mt-15 flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap">
          <Button href="/services">Services</Button>
          <Button href="/newsletter">Newsletter</Button>
          <Button href="/toolkit">Toolkit</Button>
          <Button href="/about">About</Button>
        </div>
      </div>

      <MainScrollIndicator />
    </main>
  );
}
