"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { services } from "../servicesData";

/* ---------- ⚠️ Stripe imports/commented ----------
   Skander:  if you want to turn Stripe back on, first create a
   `.env.local` file in the project root with your test keys:

     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
     STRIPE_SECRET_KEY=sk_test_...

   Then uncomment everything in this block and the handler below.
---------------------------------------------------- */
// import { useState } from "react";
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

  if (!service) {
    return (
      <p className="text-center mt-10 text-red-600">
        Service not found.
      </p>
    );
  }

  /* ---------- ⚠️ Stripe checkout handler commented ----------
  const [loading, setLoading] = useState(false);
  const priceId = servicesStripeData[slug]?.priceId;

  const handleCheckout = async () => {
    if (!priceId) return alert("Price not configured.");

    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceName: service.name, priceId }),
      });
      const { sessionId } = await res.json();
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId });
    } catch {
      alert("Checkout error.");
    } finally {
      setLoading(false);
    }
  };
  ------------------------------------------------------------ */

  return (
    <main className="min-h-screen bg-blue-100 flex flex-col items-center justify-center px-8 py-12">
      <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 max-w-4xl w-full border-4 border-blue-800 text-center">
        <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
        <p className="mb-8 text-lg whitespace-pre-line">{service.description}</p>

        <div className="flex gap-4 justify-center">
          {/* Stripe button disabled in dev */}
          <button
            /* onClick={handleCheckout} */
            className="px-8 py-3 bg-gray-400 text-white rounded cursor-not-allowed"
            title="Checkout disabled in dev"
          >
            Checkout Coming Soon
          </button>

          <Link
            href="mailto:admin@locketsecurity.com?subject=Consultation%20Request"
            className="px-8 py-3 border border-blue-800 text-blue-800 rounded hover:bg-blue-100 transition"
          >
            Request Consultation
          </Link>

          <Link
            href="/services"
            className="px-8 py-3 border border-blue-800 text-blue-800 rounded hover:bg-blue-100 transition"
          >
            Return to Services
          </Link>
        </div>
      </div>
    </main>
  );
}
