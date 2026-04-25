"use client";

import React from "react";
import Button from "./Button";
import LocketIcon from "./LocketIcon";
import TypingText from "./TypingText";
import MainScrollIndicator from "./MainScrollIndicator";

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

// Hand-tuned irregular positions — clustered along edges so they remain
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
  // Mid (edges only — center is hidden by card)
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
];

export default function MainLanding() {
  return (
    <main className="relative h-screen w-screen flex flex-col items-center justify-center bg-[rgb(219,234,254)] px-4 py-14 overflow-hidden">
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
            aria-hidden="true"
            className={`absolute select-none pointer-events-none${s.twinkle ? " twinkle" : ""}`}
            style={{ ...baseStyle, ...twinkleStyle }}
          >
            {s.char}
          </span>
        );
      })}

      <div className="bg-[#fff8ea] rounded-3xl shadow-[0_8px_40px_rgba(30,58,138,0.10)] px-12 py-16 w-full max-w-4xl text-center relative overflow-hidden">
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

          <LocketIcon className="h-10 w-10 translate-y-[15px] -ml-[2px]" />
        </h1>

        {/* Typing animation tagline */}
        <TypingText text="For when you don’t want to share." speed={100} />

        {/* Navigation buttons */}
        <div className="mt-15 flex gap-6 justify-center flex-wrap">
          <Button href="/services">Services</Button>
          <Button href="/newsletter">Newsletter</Button>
          <Button href="/toolkit">Toolkit</Button>
          <Button href="/about">About</Button>
        </div>
      </div>

      {/* Scroll down arrow below the box, spaced nicely */}
      <div className="mt-8">
        <MainScrollIndicator />
      </div>
    </main>
  );
}
