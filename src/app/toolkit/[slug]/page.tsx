import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/JsonLd";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
} from "../../lib/schema";
import { getGuide, guideSlugs } from "../guidesData";
import { getCluster } from "../guidesTaxonomy";
import { GuideDoodle } from "../components/illustrationMap";
import { GuideToc } from "../components/GuideToc";
import { GuideSection } from "../components/GuideSection";
import { GuideHowTo } from "../components/GuideHowTo";
import { GuideFaqAccordion } from "../components/GuideFaqAccordion";
import { RelatedGuides } from "../components/RelatedGuides";

const SITE_URL = "https://www.locketsecurity.com";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const url = `${SITE_URL}/toolkit/${slug}`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/toolkit/${slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      type: "article",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const cluster = getCluster(guide.cluster);

  const schemaBlocks = [
    articleSchema(guide),
    howToSchema(guide),
    faqSchema(guide.faqs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Toolkit", url: "/toolkit" },
      { name: cluster.label, url: `/toolkit#${guide.cluster}` },
      { name: guide.title, url: `/toolkit/${guide.slug}` },
    ]),
  ].filter(Boolean) as object[];

  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-4 sm:px-6 py-12 sm:py-16">
      <JsonLd data={schemaBlocks} />

      <article className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-blue-700/60">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-blue-900">Home</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/toolkit" className="hover:text-blue-900">Toolkit</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href={`/toolkit#${guide.cluster}`} className="hover:text-blue-900">
                {cluster.label}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <GuideDoodle illustration={guide.illustration} className="flex-shrink-0" />
            <span
              className={`inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${cluster.categoryColor}`}
              style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
            >
              {guide.category}
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
            style={{ fontFamily: "var(--font-titan)" }}
          >
            {guide.title}
          </h1>
          <p className="mt-4 text-sm text-blue-700/60">
            By{" "}
            {guide.author.url ? (
              <Link href={guide.author.url} className="underline hover:text-blue-900">
                {guide.author.name}
              </Link>
            ) : (
              guide.author.name
            )}
            {" · "}Updated {formatDate(guide.dateModified)}
            {guide.reviewer ? ` · Reviewed by ${guide.reviewer.name}` : ""}
          </p>
        </header>

        {/* TL;DR — the prime liftable answer */}
        <div className="mb-10 rounded-3xl bg-[#fff8ea] p-6 sm:p-7 relative overflow-hidden shadow-[0_4px_20px_rgba(30,58,138,0.07)]">
          <span className="absolute top-4 right-5 text-blue-200 text-lg select-none">★</span>
          <p
            className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C8553D] mb-2"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
          >
            ★ &nbsp; the short answer
          </p>
          <p className="text-base sm:text-lg text-blue-900/90 leading-relaxed">{guide.tldr}</p>
        </div>

        {/* Table of contents */}
        <GuideToc sections={guide.sections} />

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {guide.sections.map((section) => (
            <GuideSection key={section.id} section={section} />
          ))}
        </div>

        {/* How-to steps */}
        {guide.howTo && <GuideHowTo howTo={guide.howTo} />}

        {/* FAQ */}
        <GuideFaqAccordion faqs={guide.faqs} />

        {/* Sources */}
        {guide.sources?.length ? (
          <section className="mt-10 text-sm text-blue-700/60">
            <p className="font-semibold mb-2" style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}>
              Sources
            </p>
            <ul className="flex flex-col gap-1">
              {guide.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-900"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* CTA */}
        <section className="mt-12 rounded-3xl bg-[#1E3A8A] p-7 sm:p-9 text-center relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-700 rounded-full opacity-30 blur-2xl pointer-events-none" />
          <p
            className="text-xl sm:text-2xl text-[#fff8ea] mb-2"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Want a human in your corner?
          </p>
          <p className="text-blue-300 text-sm mb-6 max-w-md mx-auto">
            Locket Security helps creators recover, lock down, and protect every account they
            monetize — without the enterprise jargon.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#fff8ea] text-blue-900 px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
          >
            See how Locket helps ★
          </Link>
        </section>

        {/* Related */}
        <RelatedGuides guide={guide} />
      </article>
    </main>
  );
}
