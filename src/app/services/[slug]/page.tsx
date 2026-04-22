"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { services } from "../servicesData";
import { PopupModal } from "react-calendly";

/* ---------- ⚠️ Stripe imports/commented ----------
   Skander:  if you want to turn Stripe back on, first create a
   `.env.local` file in the project root with your test keys:

     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
     STRIPE_SECRET_KEY=sk_test_...

   Then uncomment everything in this block and the handler below.
---------------------------------------------------- */
// import { loadStripe } from "@stripe/stripe-js";
// import { servicesStripeData } from "../servicesData";
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );
/* ----------------------------------------------- */

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const service = services.find((s) => s.slug === slug);

  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!service) {
    return (
      <main className="min-h-screen bg-[rgb(219,234,254)] flex items-center justify-center px-6">
        <p className="text-blue-700" style={{ fontFamily: 'var(--font-fredoka)' }}>
          Service not found.
        </p>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[rgb(219,234,254)] px-6 py-20">

        {/* Page header */}
        <div className="text-center mb-16">
          <span
            className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full -rotate-1 shadow-md mb-6"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            ★ &nbsp; our services
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-blue-900"
            style={{ fontFamily: 'var(--font-pacifico)' }}
          >
            {service.name}
          </h1>
          <p className="mt-4 text-blue-700/70 max-w-lg mx-auto text-xl leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
            {service.tagline} ✦
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-blue-300">
            <div className="h-px w-16 bg-blue-200" />
            <span>★</span>
            <span className="text-sm">★</span>
            <span>★</span>
            <div className="h-px w-16 bg-blue-200" />
          </div>
        </div>

        {/* Detail card */}
        <div className="max-w-2xl mx-auto bg-[#fff8ea] rounded-3xl shadow-[0_8px_40px_rgba(30,58,138,0.10)] p-10 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl pointer-events-none" />
          <span className="absolute top-4 left-5 text-blue-200 text-xl select-none">★</span>
          <span className="absolute top-4 right-5 text-blue-200 text-xl select-none">★</span>

          {/* Tagline */}
          <p
            className="text-2xl text-blue-500 mb-6 text-center"
            style={{ fontFamily: 'var(--font-caveat)' }}
          >
            "{service.tagline}"
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-[2px] bg-blue-200 rounded-full" />
            <span className="text-blue-200 text-xs">★</span>
            <div className="w-8 h-[2px] bg-blue-200 rounded-full" />
          </div>

          {/* Description */}
          <p className="text-base text-blue-700/70 leading-relaxed text-center mb-10 whitespace-pre-line">
            {service.description.trim()}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-blue-900 text-[#fff8ea] rounded-full text-sm font-semibold hover:scale-105 transition-all"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              Book a Consultation ★
            </button>
            <Link
              href="/services"
              className="px-8 py-3 bg-white text-blue-900 border border-blue-200 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all text-center"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              ← All Services
            </Link>
          </div>
        </div>

      </main>

      {mounted && (
        <PopupModal
          url="https://calendly.com/admin-locketsecurity/30min"
          onModalClose={() => setShowModal(false)}
          open={showModal}
          rootElement={document.body}
        />
      )}
    </>
  );
}
