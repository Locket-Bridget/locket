import { guidesByCluster } from "../guidesData";
import { clusters } from "../guidesTaxonomy";
import { GuideCard } from "./GuideCard";

// Renders the full library grouped by cluster. Each cluster is an anchored
// section so breadcrumb links like /toolkit#account-recovery land correctly.
export function GuideHubGrid() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-16">
      {clusters.map((cluster) => {
        const clusterGuides = guidesByCluster(cluster.id);
        if (!clusterGuides.length) return null;

        return (
          <section
            key={cluster.id}
            id={cluster.id}
            aria-labelledby={`${cluster.id}-heading`}
            className="scroll-mt-24"
          >
            <div className="mb-6">
              <h2
                id={`${cluster.id}-heading`}
                className="text-2xl sm:text-3xl font-bold text-blue-900"
                style={{ fontFamily: "var(--font-titan)" }}
              >
                {cluster.label}
              </h2>
              <p
                className="mt-2 text-blue-700/70"
                style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
              >
                {cluster.blurb}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {clusterGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
