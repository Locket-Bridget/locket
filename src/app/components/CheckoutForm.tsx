"use client";

import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

export default function CheckoutForm({
  priceId,
  onClose,
}: {
  priceId: string;
  onClose: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    // 1. Create Checkout Session via your backend
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });

    const { sessionId } = await res.json();

    // 2. Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) setError(error.message || "Something went wrong");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="p-4 border rounded mb-4" />

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={!stripe || loading}
          className="flex-1 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Processing…" : "Pay"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-4 py-2 border border-blue-800 text-blue-800 rounded hover:bg-blue-100 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
