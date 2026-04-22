// app/layout.tsx or src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Fredoka, Caveat, Pacifico } from "next/font/google";
import localFont from "next/font/local";          
import "./globals.css";

import Navbar from "./components/Navbar";
import ScrollWrapper from "./components/ScrollWrapper";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${fredoka.variable} ${caveat.variable} ${pacifico.variable} antialiased bg-blue-100 text-blue-800 min-h-screen flex flex-col`}
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
