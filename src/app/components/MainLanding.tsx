"use client";

import React from "react";
import Button from "./Button";
import LocketIcon from "./LocketIcon";
import TypingText from "./TypingText";
import MainScrollIndicator from "./MainScrollIndicator"; // import it

const word = "LOCKET";

export default function MainLanding() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-[rgb(219,234,254)] px-4 py-14">
      <div className="bg-[#fff8ea] rounded-xl shadow-lg px-12 py-16 w-full max-w-4xl text-center border-4 border-blue-800">
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
