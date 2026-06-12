import Link from "next/link";
import { flagshipGuides } from "../toolkit/guidesData";
import { GuideCard } from "../toolkit/components/GuideCard";

// Surfaces the flagship guides on the homepage: internal links that build
// topical authority toward the Creator Security Toolkit.
export function HomepageGuidesTeaser() {
  if (!flagshipGuides.length) return null;

  return (
    <section
      aria-labelledby="home-guides-heading"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24"
    >
      <div className="mb-10 text-center">
        <p
          className="mb-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-blue-500"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ✦ &nbsp; free creator security guides &nbsp; ✦
        </p>
        <h2
          id="home-guides-heading"
          className="text-3xl sm:text-4xl md:text-5xl text-blue-800"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Hacked? Start here.
        </h2>
        <p className="mt-3 text-blue-700/70 text-base sm:text-lg max-w-xl mx-auto">
          Plain-English playbooks for recovering accounts and locking down your digital life. Free, no login.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {flagshipGuides.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/toolkit"
          className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          Browse all guides ★
        </Link>
      </div>
    </section>
  );
}
