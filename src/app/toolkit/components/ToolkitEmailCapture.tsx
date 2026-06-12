"use client";

import { useSubscribe } from "../../hooks/useSubscribe";

// Email capture for the "full guide" drop. Client child so the server hub page
// can stay statically rendered.
export function ToolkitEmailCapture() {
  const { email, setEmail, status, handleSubmit } = useSubscribe();

  return (
    <div className="max-w-xl mx-auto mt-8 bg-[#1E3A8A] rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-700 rounded-full opacity-30 blur-2xl pointer-events-none" />
      <span className="absolute top-4 left-5 text-blue-500 text-lg select-none">★</span>
      <span className="absolute top-4 right-5 text-blue-500 text-lg select-none">★</span>

      <p
        className="text-2xl sm:text-3xl text-[#fff8ea] mb-2"
        style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
      >
        New guides drop often.
      </p>
      <h2
        className="text-2xl font-bold text-[#fff8ea] mb-3"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
      >
        Be the first to read them.
      </h2>
      <p className="text-blue-300 text-sm mb-6">
        Drop your email and we&apos;ll send new creator-security guides the moment they go live.
      </p>
      {status === "success" ? (
        <p
          className="text-[#fff8ea] font-semibold text-lg"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          You&apos;re on the list ★ We&apos;ll be in touch!
        </p>
      ) : (
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full text-blue-900 bg-[#fff8ea] text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-[#fff8ea] text-blue-900 rounded-full text-sm font-semibold hover:scale-105 transition-all disabled:opacity-60"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
          >
            {status === "loading" ? "Sending…" : "Notify Me ★"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-300 text-xs mt-3">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
