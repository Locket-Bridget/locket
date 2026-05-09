import Link from "next/link";

export default function LookbookSuccessPage() {
  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-4 sm:px-6 py-14 sm:py-20 flex items-center">
      <div className="max-w-xl mx-auto bg-[#fff8ea] rounded-3xl shadow-[0_8px_40px_rgba(30,58,138,0.10)] p-6 sm:p-12 relative overflow-hidden text-center">
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl pointer-events-none" />
        <span className="absolute top-4 left-5 text-blue-200 text-xl select-none">★</span>
        <span className="absolute top-4 right-5 text-blue-200 text-xl select-none">★</span>

        <p
          className="text-2xl sm:text-3xl text-blue-400/80 mb-2"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          you&apos;re in ✦
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Check your inbox.
        </h1>
        <p
          className="mt-5 text-blue-700/70 text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
        >
          We just sent your lookbook download link to the email you used at
          checkout. The link is good for 7 days — save the PDF somewhere safe.
        </p>

        <div className="flex items-center justify-center gap-2 my-8">
          <div className="w-8 h-[2px] bg-blue-200 rounded-full" />
          <span className="text-blue-200 text-xs">★</span>
          <div className="w-8 h-[2px] bg-blue-200 rounded-full" />
        </div>

        <p className="text-sm text-blue-700/60 mb-6">
          Don&apos;t see it in 5 minutes? Check your promotions or spam folder,
          or email{" "}
          <a
            href="mailto:hello@locketsecurity.com"
            className="underline text-blue-700"
          >
            hello@locketsecurity.com
          </a>{" "}
          and we&apos;ll resend it.
        </p>

        <Link
          href="/toolkit"
          className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          Back to the toolkit ★
        </Link>
      </div>
    </main>
  );
}
