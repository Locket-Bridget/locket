import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Security Hub — Free Guides & Toolkit",
  description:
    "Free, plain-English security guides for creators: recover hacked Instagram, TikTok & YouTube accounts, set up 2FA, stop scams and impersonators, and lock down every account you monetize.",
  alternates: { canonical: "/toolkit" },
  openGraph: {
    title: "Creator Security Hub | Locket Security",
    description:
      "Free guides for creators — hacked-account recovery, 2FA, scam detection, and account hardening. Plus the Cyber Self-Care Lookbook.",
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
