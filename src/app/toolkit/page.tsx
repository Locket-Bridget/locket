import Link from "next/link";
import { JsonLd } from "../components/JsonLd";
import { breadcrumbSchema, faqSchema, guideListSchema } from "../lib/schema";
import { lookbook } from "../products/lookbookData";
import { guides, flagshipGuides } from "./guidesData";
import { libraryFaqs } from "./guidesTaxonomy";
import { GuideHubGrid } from "./components/GuideHubGrid";
import { ToolkitTipsBand } from "./components/ToolkitTipsBand";
import { ToolkitEmailCapture } from "./components/ToolkitEmailCapture";
import { GuideFaqAccordion } from "./components/GuideFaqAccordion";
import { GuideCard } from "./components/GuideCard";
import { ToolkitToc } from "./components/ToolkitToc";

export default function ToolkitPage() {
  const schemaBlocks = [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Toolkit", url: "/toolkit" },
    ]),
    guideListSchema(guides.map((g) => ({ title: g.title, slug: g.slug }))),
    faqSchema(libraryFaqs),
  ];

  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-4 sm:px-6 py-14 sm:py-20">
      <JsonLd data={schemaBlocks} />

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-6"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ★ &nbsp; creator security toolkit
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 leading-tight"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Your Cyber
          <br />
          <span className="whitespace-nowrap">Self-Care</span>
          <br />
          <span style={{ fontFamily: "var(--font-titan)" }}>Toolkit.</span>
        </h1>
        <p
          className="mt-4 text-lg sm:text-xl md:text-2xl text-blue-700/70"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          Free, plain-English guides to outsmart scammers, rescue hacked accounts, and protect everything you&apos;ve built ✦
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>
      </div>

      {/* Quick self-care tips (brand band) */}
      <ToolkitTipsBand />

      {/* Jump links to each cluster section */}
      <ToolkitToc />

      {/* Flagship "start here" rail */}
      {flagshipGuides.length > 0 && (
        <div className="max-w-5xl mx-auto mb-16">
          <h2
            className="text-center text-2xl sm:text-3xl font-bold text-blue-900 mb-6"
            style={{ fontFamily: "var(--font-titan)" }}
          >
            The Essentials
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {flagshipGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </div>
      )}

      {/* Full library grouped by cluster */}
      <GuideHubGrid />

      {/* Library FAQ */}
      <div className="max-w-3xl mx-auto mt-20">
        <GuideFaqAccordion faqs={libraryFaqs} heading="Creator security FAQ" />
        <p className="text-center text-sm text-blue-700/60 mt-4">
          New to the terms?{" "}
          <Link href="/glossary" className="underline hover:text-blue-900">
            Browse the creator security glossary →
          </Link>
        </p>
      </div>

      {/* Paid lookbook CTA */}
      <div className="max-w-xl mx-auto mt-20 mb-8 bg-[#fff8ea] rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden border-2 border-dashed border-blue-200 -rotate-1">
        <span className="absolute top-4 left-5 text-blue-200 text-lg select-none">★</span>
        <span className="absolute top-4 right-5 text-blue-200 text-lg select-none">★</span>
        <span
          className="inline-block bg-[#C8553D] text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full shadow-md mb-4"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ★ &nbsp; want the full routine?
        </span>
        <p
          className="text-2xl sm:text-3xl text-blue-900"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          {lookbook.name}
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          {lookbook.subtitle}
        </h2>
        <p className="text-blue-700/70 text-sm leading-relaxed mb-5 max-w-md mx-auto">
          12 chapters, the curated tool stack, and the playbooks we run with our clients.{" "}
          {lookbook.pageCountLabel}, instant download.
        </p>
        <Link
          href="/lookbook"
          className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          Get the Lookbook: {lookbook.price} ★
        </Link>
      </div>

      {/* Email capture */}
      <ToolkitEmailCapture />
    </main>
  );
}
