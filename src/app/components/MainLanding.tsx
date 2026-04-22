"use client";

import React from "react";
import Button from "./Button";
import LocketIcon from "./LocketIcon";
import TypingText from "./TypingText";
import MainScrollIndicator from "./MainScrollIndicator";

const word = "LOCKET";

export default function MainLanding() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-[rgb(219,234,254)] px-4 py-14">
      {/* Scattered deco stars */}
      <span className="absolute top-16 left-10 text-blue-300 text-2xl select-none opacity-60">✦</span>
      <span className="absolute top-32 right-16 text-blue-200 text-lg select-none opacity-50">★</span>
      <span className="absolute bottom-24 left-20 text-blue-200 text-sm select-none opacity-40">✦</span>
      <span className="absolute bottom-16 right-12 text-blue-300 text-xl select-none opacity-50">★</span>

      <div className="bg-[#fff8ea] rounded-3xl shadow-[0_8px_40px_rgba(30,58,138,0.10)] px-12 py-16 w-full max-w-4xl text-center relative overflow-hidden">
        {/* Corner star decorations inside box */}
        <span className="absolute top-4 left-5 text-blue-200 text-xl select-none">★</span>
        <span className="absolute top-4 right-5 text-blue-200 text-xl select-none">★</span>
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
