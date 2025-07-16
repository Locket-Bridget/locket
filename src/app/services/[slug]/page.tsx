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

  // Controls whether the Calendly popup/modal is open
  const [showModal, setShowModal] = useState(false);

  // Track whether component is mounted client-side to safely access document.body
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!service) {
    return (
      <p className="text-center mt-10 text-red-600">
        Service not found.
      </p>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-rgb(219 234 254) flex items-center justify-center px-6 py-12">
        <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 max-w-4xl w-full border-4 border-blue-800 text-center">
          <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
          <p className="mb-8 text-lg whitespace-pre-line">{service.description}</p>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-800 px-8 py-3 border border-blue-800 text-white rounded hover:bg-blue-100 transition"
            >
              Request Consultation
            </button>

            {/* Example: If you want to keep the old modal form, you can do that here or remove */}
            {/* Or replace that with Calendly popup only */}
          </div>

          {/* ---------- Stripe button placeholder ----------
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-8 px-8 py-3 bg-blue-800 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Redirecting…" : "Buy Now"}
          </button>
          -------------------------------------------------- */}

          <div className="mt-8">
            <Link
              href="/services"
              className="bg-blue-800 px-8 py-3 border border-blue-800 text-white rounded hover:bg-blue-100 transition"
            >
              Return to Services
            </Link>
          </div>
        </div>
      </main>

      {/* Calendly PopupModal rendered only on client */}
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

