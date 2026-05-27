import Link from "next/link";
import type { Guide } from "../guidesData";
import { getCluster } from "../guidesTaxonomy";

const severityStyles: Record<Guide["severity"], string> = {
  High: "bg-[#fce8e3] text-[#C8553D]",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-blue-100 text-blue-700",
};

// Internal-link card for the hub grid and related-guides rail.
// Adapted from ArticleCard, but links internally to /toolkit/[slug].
export function GuideCard({ guide }: { guide: Guide }) {
  const cluster = getCluster(guide.cluster);

  return (
    <Link
      href={`/toolkit/${guide.slug}`}
      className="group block bg-[#fff8ea] rounded-2xl shadow-[0_4px_20px_rgba(30,58,138,0.07)] p-6 hover:shadow-[0_8px_30px_rgba(30,58,138,0.12)] transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl pointer-events-none" />

      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
        <span
          className={`text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${cluster.categoryColor}`}
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          {guide.category}
        </span>
        {guide.flagship && (
          <span className="text-xs font-semibold text-[#C8553D]">★ Start here</span>
        )}
      </div>

      <h3
        className="text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors mb-2"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
      >
        {guide.title}
      </h3>

      <p className="text-sm text-blue-700/70 leading-relaxed mb-4">{guide.excerpt}</p>

      <div className="flex items-center justify-between pt-2 border-t border-blue-100">
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${severityStyles[guide.severity]}`}>
          {guide.severity} priority
        </span>
        <span
          className="text-xs font-semibold text-blue-800 group-hover:text-blue-600 transition-colors"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          Read guide →
        </span>
      </div>
    </Link>
  );
}
