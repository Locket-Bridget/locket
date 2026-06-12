"use client";

import { useState } from "react";
import type { GuideFaq } from "../guidesData";

// Presentation-only FAQ accordion. The FAQPage JSON-LD is emitted once at the
// page level, so this component intentionally does NOT render schema.
export function GuideFaqAccordion({
  faqs,
  heading = "Frequently asked",
}: {
  faqs: GuideFaq[];
  heading?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs.length) return null;

  return (
    <section aria-labelledby="guide-faq-heading" className="my-12">
      <h2
        id="guide-faq-heading"
        className="text-2xl sm:text-3xl font-bold text-blue-900 mb-5"
        style={{ fontFamily: "var(--font-titan)" }}
      >
        {heading}
      </h2>
      <dl className="space-y-3">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.q}
              className="rounded-2xl border border-blue-300/60 bg-[#fff8ea]/70 backdrop-blur-sm transition-colors"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`guide-faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base md:text-lg text-blue-800"
                  style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
                >
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-2xl text-blue-500 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                id={`guide-faq-panel-${i}`}
                hidden={!isOpen}
                className="px-5 pb-5 text-sm md:text-base text-blue-700/70 leading-relaxed"
              >
                {item.a}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
