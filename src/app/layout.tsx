// app/layout.tsx or src/app/layout.tsx

import type { Metadata } from "next";
import { Playfair_Display, Fredoka, Titan_One } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import ScrollWrapper from "./components/ScrollWrapper";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
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
  title: "Locket Security",
  description: "",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
        <Navbar />
        <ScrollWrapper>
          <main className="flex-grow">{children}</main>
        </ScrollWrapper>
        <Footer />
      </body>
    </html>
  );
}
