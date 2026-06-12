// app/layout.tsx or src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Playfair_Display, Fredoka, Titan_One } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import ScrollWrapper from "./components/ScrollWrapper";
import Footer from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { organizationSchema, websiteSchema } from "./lib/schema";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  style: ["normal", "italic"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["600"],
});

const titanOne = Titan_One({
  variable: "--font-titan",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.locketsecurity.com"),
  title: {
    default: "Locket Security: Cybersecurity & Brand Protection for Content Creators",
    template: "%s | Locket Security",
  },
  description:
    "Personal cybersecurity built for creators. Account recovery, dark web monitoring, and brand protection for influencers serious about their online presence.",
  applicationName: "Locket Security",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Locket Security: Cybersecurity & Brand Protection for Content Creators",
    description:
      "Personal cybersecurity built for creators. Account recovery, dark web monitoring, and brand protection for influencers serious about their online presence.",
    url: "https://www.locketsecurity.com",
    siteName: "Locket Security",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Locket Security: Cyber care is self care.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locket Security: Cybersecurity & Brand Protection for Content Creators",
    description:
      "Personal cybersecurity built for creators. Account recovery, dark web monitoring, and brand protection.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  category: "cybersecurity",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1E3A8A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${fredoka.variable} ${titanOne.variable} antialiased bg-blue-100 text-blue-800 min-h-screen flex flex-col`}
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        <ScrollWrapper>
          <main className="flex-grow">{children}</main>
        </ScrollWrapper>
        <Footer />
      </body>
    </html>
  );
}
