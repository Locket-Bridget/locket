// Single source of truth for the Locket Security creator guide library.
// Each Guide object drives both its rendered page and all of its JSON-LD.
import type { ClusterId, Guide } from "./guides/types";
import { accountRecoveryGuides } from "./guides/account-recovery";
import { twoFactorGuides } from "./guides/two-factor-auth";
import { passwordSecurityGuides } from "./guides/password-security";
import { scamsImpersonationGuides } from "./guides/scams-impersonation";
import { platformHardeningGuides } from "./guides/platform-hardening";
import { privacyOpsecGuides } from "./guides/privacy-opsec";

export type {
  Guide,
  GuideSection,
  GuideFaq,
  HowTo,
  HowToStep,
  ClusterId,
  Severity,
  Illustration,
  Person,
} from "./guides/types";

export const guides: Guide[] = [
  ...accountRecoveryGuides,
  ...twoFactorGuides,
  ...passwordSecurityGuides,
  ...scamsImpersonationGuides,
  ...platformHardeningGuides,
  ...privacyOpsecGuides,
];

export const guideSlugs: string[] = guides.map((g) => g.slug);

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function guidesByCluster(cluster: ClusterId): Guide[] {
  return guides.filter((g) => g.cluster === cluster);
}

export function getRelatedGuides(guide: Guide): Guide[] {
  return guide.relatedSlugs
    .map((slug) => getGuide(slug))
    .filter((g): g is Guide => Boolean(g));
}

export const flagshipGuides: Guide[] = guides.filter((g) => g.flagship);

// --- Dev-only integrity guards ---
// Surface broken cross-links and duplicate slugs at build/dev time rather than
// shipping dead "related guide" cards.
if (process.env.NODE_ENV !== "production") {
  const slugSet = new Set(guideSlugs);
  if (slugSet.size !== guideSlugs.length) {
    console.warn("[guidesData] Duplicate guide slug detected.");
  }
  for (const guide of guides) {
    for (const related of guide.relatedSlugs) {
      if (!slugSet.has(related)) {
        console.warn(
          `[guidesData] Guide "${guide.slug}" links to missing related slug "${related}".`,
        );
      }
    }
  }
}
