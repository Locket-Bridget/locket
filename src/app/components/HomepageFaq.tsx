"use client";

import { useState } from "react";
import { JsonLd } from "./JsonLd";
import { faqSchema, homepageFaqs } from "../lib/schema";

export function HomepageFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24"
    >
      <JsonLd data={faqSchema(homepageFaqs)} />

      <div className="mb-10 sm:mb-12 text-center">
        <p
          className="mb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-blue-500"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ✦ &nbsp; frequently asked &nbsp; ✦
        </p>
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl md:text-5xl text-blue-800"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Questions creators actually ask
        </h2>
      </div>

      <dl className="space-y-3">
        {homepageFaqs.map((item, i) => {
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
                  aria-controls={`faq-panel-${i}`}
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
                id={`faq-panel-${i}`}
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
