"use client";

const TYPEFORM_ID = "YOUR_TYPEFORM_ID"; // Replace with your Typeform form ID (e.g. "abc123")

export default function SurveyPage() {
  return (
    <main className="min-h-screen bg-[#fdf9f0]">

      {/* Header */}
      <div className="text-center px-4 sm:px-6 py-14 sm:py-20 pb-10 bg-[rgb(219,234,254)]">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-6"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          ★ &nbsp; for creators
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-blue-900 mb-4"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          We&apos;re building this for you.
        </h1>
        <p
          className="text-blue-700/80 max-w-xl mx-auto text-lg sm:text-xl leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          Take 2 minutes to tell us about your digital safety concerns — and help us build the protection you actually need. ✦
        </p>
      </div>

      {/* Intro copy */}
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <p
          className="text-gray-600 text-base leading-relaxed mb-2"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          Hey! We&apos;re Locket — a cybersecurity company built specifically for influencers and creators. Your accounts, your income, and your identity deserve protection that actually fits your life.
        </p>
        <p
          className="text-gray-500 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          We&apos;re gathering early feedback to make sure we build the right thing. No spam, no pressure — just honest questions from two girls who want to make cyber care feel like self care.
        </p>
      </div>

      {/* Typeform embed */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-blue-100 bg-white" style={{ height: "600px" }}>
          {TYPEFORM_ID === "YOUR_TYPEFORM_ID" ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8 gap-4">
              <div className="text-5xl">📋</div>
              <p
                className="text-blue-900 font-bold text-xl"
                style={{ fontFamily: "var(--font-titan)" }}
              >
                Survey coming soon
              </p>
              <p
                className="text-gray-400 text-sm max-w-sm"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                To activate: create your Typeform, then replace <code className="bg-gray-100 px-1 rounded">YOUR_TYPEFORM_ID</code> in <code className="bg-gray-100 px-1 rounded">src/app/survey/page.tsx</code> with your real form ID.
              </p>
            </div>
          ) : (
            <iframe
              src={`https://form.typeform.com/to/${TYPEFORM_ID}?typeform-embed=embed-widget&embed-hide-footer=true&embed-hide-headers=true`}
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Locket Security Survey"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          )}
        </div>
      </div>

    </main>
  );
}
