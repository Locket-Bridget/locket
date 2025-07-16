// app/layout.tsx or src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-100 text-blue-800 min-h-screen flex flex-col`}
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
