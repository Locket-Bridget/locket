import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { breadcrumbSchema, glossarySchema } from "../lib/schema";
import { glossary } from "../toolkit/guidesTaxonomy";

export const metadata: Metadata = {
  title: "Creator Security Glossary",
  description:
    "Plain-English definitions of creator security terms — 2FA, phishing, session tokens, SIM swaps, data brokers, doxxing, passkeys, and more.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "Creator Security Glossary | Locket Security",
    description:
      "Plain-English definitions of the security terms every creator should know.",
    url: "https://www.locketsecurity.com/glossary",
  },
};

export default function GlossaryPage() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-4 sm:px-6 py-14 sm:py-20">
      <JsonLd
        data={[
          glossarySchema(glossary),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Toolkit", url: "/toolkit" },
            { name: "Glossary", url: "/glossary" },
          ]),
        ]}
      />

      <div className="text-center mb-12 max-w-2xl mx-auto">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full -rotate-1 shadow-md mb-6"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ★ &nbsp; security glossary
        </span>
        <h1
          className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Creator Security Glossary
        </h1>
        <p className="mt-4 text-blue-700/70 text-base leading-relaxed">
          The security terms every creator should know — no jargon, just clear definitions.
        </p>
      </div>

      <dl className="max-w-2xl mx-auto flex flex-col gap-4">
        {sorted.map((t) => (
          <div
            key={t.slug}
            id={t.slug}
            className="scroll-mt-24 rounded-2xl bg-[#fff8ea] p-5 sm:p-6 shadow-[0_4px_20px_rgba(30,58,138,0.07)]"
          >
            <dt
              className="text-lg font-bold text-blue-900 mb-1"
              style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
            >
              {t.term}
            </dt>
            <dd className="text-sm text-blue-700/80 leading-relaxed">
              {t.definition}
              {t.relatedSlug && (
                <>
                  {" "}
                  <Link
                    href={`/toolkit/${t.relatedSlug}`}
                    className="text-blue-700 underline hover:text-blue-900 whitespace-nowrap"
                  >
                    Read the guide →
                  </Link>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="text-center mt-12">
        <Link
          href="/toolkit"
          className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ← Back to the Creator Security Hub
        </Link>
      </div>
    </main>
  );
}
