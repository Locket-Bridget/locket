import type { GuideSection } from "../guidesData";

// Question-led table of contents — mirrors how creators phrase the query,
// and gives AI engines a clean map of the answers on the page.
export function GuideToc({ sections }: { sections: GuideSection[] }) {
  if (sections.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-blue-200 bg-white/60 p-5 sm:p-6 mb-10"
    >
      <p
        className="text-xs font-semibold tracking-[0.14em] uppercase text-blue-500 mb-3"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
      >
        ✦ &nbsp; On this page
      </p>
      <ul className="flex flex-col gap-2">
        {sections.map((s) => (
          <li key={s.id} className="flex items-start gap-2 text-sm">
            <span className="text-blue-300 mt-0.5">★</span>
            <a
              href={`#${s.id}`}
              className="text-blue-700/80 hover:text-blue-900 transition-colors leading-snug"
            >
              {s.question}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
