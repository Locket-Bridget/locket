import type { Guide } from "../guidesData";
import { getRelatedGuides } from "../guidesData";
import { GuideCard } from "./GuideCard";

export function RelatedGuides({ guide }: { guide: Guide }) {
  const related = getRelatedGuides(guide);
  if (!related.length) return null;

  return (
    <section aria-labelledby="related-heading" className="mt-14">
      <h2
        id="related-heading"
        className="text-2xl font-bold text-blue-900 mb-5"
        style={{ fontFamily: "var(--font-titan)" }}
      >
        Keep reading
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {related.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>
    </section>
  );
}
