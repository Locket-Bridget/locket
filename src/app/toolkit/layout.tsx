import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toolkit & Cyber Self-Care Lookbook",
  description:
    "Free creator security resources plus the Cyber Self-Care Lookbook — a 40+ page guide to protecting your accounts, data, and brand online.",
  alternates: { canonical: "/toolkit" },
  openGraph: {
    title: "Toolkit & Cyber Self-Care Lookbook | Locket Security",
    description:
      "Free creator security resources plus the Cyber Self-Care Lookbook — a 40+ page guide to protecting your accounts, data, and brand.",
    url: "https://www.locketsecurity.com/toolkit",
  },
};

export default function ToolkitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
