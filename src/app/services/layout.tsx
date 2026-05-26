import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Compare Locket Security's creator cybersecurity plans — Cyber Cleanse ($99 one-time), Digital Detox ($199/month), and Protected Princess ($499/month). Account recovery, dark web monitoring, and brand protection.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Plans & Pricing | Locket Security",
    description:
      "Compare creator cybersecurity plans — Cyber Cleanse ($99 one-time), Digital Detox ($199/month), and Protected Princess ($499/month).",
    url: "https://www.locketsecurity.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
