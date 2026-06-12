import Link from "next/link";
import type { Guide } from "../guidesData";

// Internal-link card for the hub grid and related-guides rail.
// Adapted from ArticleCard, but links internally to /toolkit/[slug].
export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/toolkit/${guide.slug}`}
      className="group block bg-[#fff8ea] rounded-2xl shadow-[0_4px_20px_rgba(30,58,138,0.07)] p-6 hover:shadow-[0_12px_32px_rgba(30,58,138,0.16)] hover:-translate-y-1.5 hover:-rotate-1 transition-all duration-300 ease-out relative overflow-hidden"
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl pointer-events-none" />

      <h3
        className="text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors mb-2"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
      >
        {guide.title}
      </h3>

      <p className="text-sm text-blue-700/70 leading-relaxed mb-4">{guide.excerpt}</p>

      <div className="flex items-center justify-end pt-2 border-t border-blue-100">
        <span
          className="text-xs font-semibold text-blue-800 group-hover:text-blue-600 transition-colors"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          Read guide{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
