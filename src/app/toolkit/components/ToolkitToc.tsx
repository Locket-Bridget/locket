import { guidesByCluster } from "../guidesData";
import { clusters } from "../guidesTaxonomy";

// Jump-link pill band for the hub. Server-rendered anchors only — each pill
// targets the matching cluster section id rendered by GuideHubGrid.
export function ToolkitToc() {
  return (
    <nav aria-label="Guide topics" className="max-w-3xl mx-auto -mt-6 mb-10 sm:mb-12">
      <p
        className="text-center text-xs font-semibold tracking-[0.18em] uppercase text-blue-700/60 mb-4"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
      >
        ✦ jump to a topic ✦
      </p>
      <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {clusters.map((cluster, i) => {
          const count = guidesByCluster(cluster.id).length;
          if (!count) return null;

          return (
            <li key={cluster.id}>
              <a
                href={`#${cluster.id}`}
                className={`inline-block ${cluster.categoryColor} text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:scale-105 hover:shadow-md transition-all ${
                  i % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
                style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
              >
                {cluster.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
