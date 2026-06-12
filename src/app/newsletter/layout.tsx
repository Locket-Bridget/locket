import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Security tips, breach alerts, and account-takeover news for content creators, straight from Locket Security.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "Newsletter | Locket Security",
    description:
      "Security tips, breach alerts, and account-takeover news for content creators, straight from Locket Security.",
    url: "https://www.locketsecurity.com/newsletter",
  },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
