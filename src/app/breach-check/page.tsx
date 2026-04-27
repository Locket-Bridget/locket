"use client";

import { useState } from "react";

type Breach = {
  Name: string;
  Domain: string;
  BreachDate: string;
  PwnCount: number;
  DataClasses: string[];
  Description: string;
};

type Result = {
  email: string;
  breaches: Breach[];
};

export default function BreachCheckPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");

    const res = await fetch(`/api/breach-check?email=${encodeURIComponent(email)}`);
    const data = await res.json();
    setLoading(false);

    if (data.error) {
      setError(data.error);
      return;
    }

    setResult({ email, breaches: data.breaches });
  }

  return (
    <main className="min-h-screen bg-[#fdf9f0] px-6 py-20">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full shadow-md mb-6"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            ★ &nbsp; internal tool
          </span>
          <h1 className="text-5xl text-blue-900 mb-3" style={{ fontFamily: 'var(--font-titan)' }}>
            Breach Check
          </h1>
          <p className="text-blue-700/60 text-lg" style={{ fontFamily: 'var(--font-caveat)' }}>
            Check any email against Have I Been Pwned. For pitch meetings only. ✦
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleCheck} className="flex gap-3 mb-10">
          <input
            type="email"
            required
            placeholder="email@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full border-2 border-blue-100 text-blue-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-blue-200"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-7 py-3 bg-blue-900 text-[#fff8ea] rounded-full text-sm font-semibold hover:scale-105 transition-all disabled:opacity-60"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            {loading ? "Checking…" : "Check ★"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-6">{error}</p>
        )}

        {/* Results */}
        {result && (
          <div>
            {result.breaches.length === 0 ? (
              <div className="bg-[#fff8ea] rounded-3xl p-8 text-center border-2 border-dashed border-blue-200">
                <p className="text-4xl mb-3">✅</p>
                <p className="text-blue-900 font-semibold text-lg" style={{ fontFamily: 'var(--font-fredoka)' }}>
                  No breaches found
                </p>
                <p className="text-blue-400 text-sm mt-1" style={{ fontFamily: 'var(--font-caveat)' }}>
                  {result.email} does not appear in any known data breaches.
                </p>
              </div>
            ) : (
              <div>
                <div className="bg-[#fce8e3] border-2 border-dashed border-[#C8553D]/30 rounded-3xl p-6 mb-6 text-center">
                  <p className="text-[#C8553D] font-bold text-3xl mb-1" style={{ fontFamily: 'var(--font-titan)' }}>
                    {result.breaches.length} breach{result.breaches.length !== 1 ? "es" : ""} found
                  </p>
                  <p className="text-blue-700/60 text-sm" style={{ fontFamily: 'var(--font-caveat)' }}>
                    {result.email} has appeared in {result.breaches.length} data breach{result.breaches.length !== 1 ? "es" : ""}.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {result.breaches.map((breach) => (
                    <div
                      key={breach.Name}
                      className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <p className="font-bold text-blue-900" style={{ fontFamily: 'var(--font-fredoka)' }}>
                            {breach.Name}
                          </p>
                          <p className="text-xs text-blue-400">{breach.Domain} · {breach.BreachDate}</p>
                        </div>
                        <span className="text-xs bg-[#fce8e3] text-[#C8553D] px-3 py-1 rounded-full font-semibold shrink-0" style={{ fontFamily: 'var(--font-fredoka)' }}>
                          {breach.PwnCount.toLocaleString()} accounts
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {breach.DataClasses.map((dc) => (
                          <span key={dc} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                            {dc}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}
