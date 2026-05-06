import React from "react";

interface SparkleTextProps {
  text: string;
  className?: string;
}

const PER_CHAR_DELAY_S = 0.06;

type Archetype = { bg: string; glow: string; size: string; off: string };
type Slot = { top: string; side: "left" | "right" };

// Four sparkle archetypes — each is a (color, glow, size, offset-from-letter)
// bundle that travels together when it rotates between slots.
const archetypes: Archetype[] = [
  { bg: "#f9a8d4", glow: "#f472b6", size: "0.5em", off: "0.55em" }, // big pink
  { bg: "#c084fc", glow: "#a78bfa", size: "0.3em", off: "0.32em" }, // small purple
  { bg: "#60a5fa", glow: "#3b82f6", size: "0.5em", off: "0.55em" }, // big blue
  { bg: "#a5b4fc", glow: "#818cf8", size: "0.3em", off: "0.32em" }, // small soft-blue
];

// Four fixed slots around each letter — top-left, lower-mid-left,
// bottom-right, upper-mid-right. Each letter cycles which archetype
// occupies each slot, so colors don't form horizontal tracks.
const slots: Slot[] = [
  { top: "5%",  side: "left"  },
  { top: "55%", side: "left"  },
  { top: "80%", side: "right" },
  { top: "30%", side: "right" },
];

function variantStyle(i: number): React.CSSProperties {
  const v = i % archetypes.length;
  const out: Record<string, string> = {};
  for (let s = 0; s < slots.length; s++) {
    const arch = archetypes[(s + v) % archetypes.length];
    const slot = slots[s];
    const n = s + 1;
    out[`--sp${n}-bg`] = arch.bg;
    out[`--sp${n}-glow`] = arch.glow;
    out[`--sp${n}-size`] = arch.size;
    out[`--sp${n}-top`] = slot.top;
    out[`--sp${n}-left`] = slot.side === "left" ? `-${arch.off}` : "auto";
    out[`--sp${n}-right`] = slot.side === "right" ? `-${arch.off}` : "auto";
  }
  return out as React.CSSProperties;
}

export default function SparkleText({ text, className = "" }: SparkleTextProps) {
  const chars = Array.from(text);
  return (
    <p
      className={`sparkle-text text-lg sm:text-xl md:text-2xl text-blue-700/70 ${className}`}
      style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      aria-label={text}
    >
      {chars.map((c, i) => {
        if (c === " ") {
          return (
            <span key={i} aria-hidden="true">
              &nbsp;
            </span>
          );
        }
        const baseDelay = (i * PER_CHAR_DELAY_S).toFixed(2);
        return (
          <span
            key={i}
            aria-hidden="true"
            className="sparkle-char"
            style={
              {
                ["--spark-delay" as string]: baseDelay,
                ...variantStyle(i),
              } as React.CSSProperties
            }
          >
            {c}
            <span className="sparkle1" />
            <span className="sparkle2" />
          </span>
        );
      })}
    </p>
  );
}
