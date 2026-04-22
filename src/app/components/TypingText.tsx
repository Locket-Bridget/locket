"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export default function TypingText({
  text,
  speed = 60,
  onComplete,
  className = "",
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <p
      className={`text-2xl text-blue-700 opacity-80 ${className}`}
      style={{ fontFamily: 'var(--font-caveat)' }}
    >
      {displayed}
      <span className="blinking-cursor">|</span>
    </p>
  );
}
