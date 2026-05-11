"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PopupModal } from "react-calendly";
import { services } from "./servicesData";
import { DoodleDrop, DoodleShield, DoodleLock } from "../components/Doodles";

const cards = [
  {
    label: "The Essential",
    bg: "bg-[#fff8ea]",
    borderColor: "border-blue-200",
    Doodle: DoodleDrop,
  },
  {
    label: "The Upgrade",
    bg: "bg-blue-50",
    borderColor: "border-blue-200",
    Doodle: DoodleShield,
  },
  {
    label: "The Full Package",
    bg: "bg-[#fce8e3]",
    borderColor: "border-[#C8553D]/30",
    Doodle: DoodleLock,
  },
];

export default function ServicesPage() {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  return (
    <>
    <main className="min-h-screen bg-[#fdf9f0]">

      {/* Page header */}
      <div className="text-center px-4 sm:px-6 py-14 sm:py-20 pb-12 sm:pb-16 bg-[rgb(219,234,254)]">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-6"
          style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
        >
          ★ &nbsp; what we offer
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-blue-900"
          style={{ fontFamily: 'var(--font-titan)' }}
        >
          Our Services
        </h1>
        <p className="mt-4 text-blue-700/70 max-w-lg mx-auto text-lg sm:text-xl" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>
          Everything you need to protect your online presence ✦
        </p>
      </div>

      {/* Script bridge heading */}
      <div className="text-center py-10 sm:py-12 bg-[#fdf9f0]">
        <p
          className="text-2xl sm:text-3xl md:text-4xl text-blue-400/60"
          style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
        >
          ways to work with us ✦
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const card = cards[i];
            return (
              <div
                key={svc.slug}
                className={`${card.bg} border-2 border-dashed ${card.borderColor} rounded-3xl p-5 flex flex-col gap-4 relative w-full max-w-md mx-auto md:max-w-none`}
              >
                {/* Doodle illustration */}
                <div className="flex items-end justify-center mb-2 h-20">
                  <card.Doodle />
                </div>

                {/* Label tag */}
                <span
                  className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-400"
                  style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
                >
                  {card.label}
                </span>

                {/* Service name */}
                <h2
                  className="text-3xl text-blue-900 leading-tight whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-titan)' }}
                >
                  {svc.name}
                </h2>

                {/* Price */}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'var(--font-titan)' }}>
                    {svc.price}
                  </span>
                  <span className="text-xs text-blue-400" style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}>
                    {svc.priceNote}
                  </span>
                </div>

                {/* Tagline */}
                <p
                  className="text-lg"
                  style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic', color: '#C8553D' }}
                >
                  &ldquo;{svc.tagline}&rdquo;
                </p>

                {/* Divider */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-[2px] bg-blue-200 rounded-full" />
                  <span className="text-blue-200 text-xs">★</span>
                </div>

                {/* Description */}
                <p className="text-sm text-blue-700/60 leading-relaxed flex-grow">
                  {svc.description.trim()}
                </p>

                {/* CTA */}
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 self-start bg-blue-900 text-[#fff8ea] px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all mt-2"
                  style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
                >
                  Get Started ★
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center px-4 sm:px-6 py-14 sm:py-20 bg-[rgb(219,234,254)]">
        <p
          className="text-3xl sm:text-4xl md:text-5xl text-blue-900 mb-4"
          style={{ fontFamily: 'var(--font-titan)' }}
        >
          Not sure where to start?
        </p>
        <p className="text-lg sm:text-xl text-blue-700/70 mb-8" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>
          Book a free 15-min call and we&apos;ll figure it out together ✦
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-all shadow-md"
          style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
        >
          Book a Free Call ★
        </button>
      </div>

    </main>

    {mounted && (
      <PopupModal
        url="https://calendly.com/bridget-locketsecurity/30min"
        onModalClose={() => setShowModal(false)}
        open={showModal}
        rootElement={document.body}
      />
    )}
    </>
  );
}
