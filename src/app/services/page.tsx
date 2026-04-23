import Link from "next/link";
import { services } from "./servicesData";
import StripeDivider from "../components/StripeDivider";

const numbers = ["/01", "/02", "/03"];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fdf9f0]">

      {/* Page header */}
      <div className="text-center px-6 py-20 pb-16 bg-[rgb(219,234,254)]">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-6"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          ★ &nbsp; what we offer
        </span>
        <h1
          className="text-5xl md:text-7xl font-bold text-blue-900"
          style={{ fontFamily: 'var(--font-titan)' }}
        >
          Our Services
        </h1>
        <p className="mt-4 text-blue-700/70 max-w-lg mx-auto text-xl" style={{ fontFamily: 'var(--font-caveat)' }}>
          Everything you need to protect your online presence. ✦
        </p>
      </div>

      <StripeDivider />

      {/* Service list — Rove-style editorial */}
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col">
        {services.map((svc, i) => (
          <div key={svc.slug}>
            <div className="flex flex-col md:flex-row md:items-start gap-6 py-14">

              {/* Number */}
              <span
                className="text-5xl font-bold text-blue-200 leading-none flex-shrink-0 w-24"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {numbers[i]}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h2
                  className="text-4xl md:text-5xl text-blue-900 leading-tight mb-3"
                  style={{ fontFamily: 'var(--font-titan)' }}
                >
                  {svc.name}
                </h2>
                <p
                  className="text-xl mb-4"
                  style={{ fontFamily: 'var(--font-caveat)', color: '#C8553D' }}
                >
                  "{svc.tagline}"
                </p>
                <p className="text-base text-blue-700/60 leading-relaxed max-w-lg mb-6">
                  {svc.description.trim()}
                </p>
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-7 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all"
                  style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                  Get Started ★
                </Link>
              </div>
            </div>

            {/* Divider between items (not after last) */}
            {i < services.length - 1 && (
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-blue-100" />
                <span className="text-blue-200 text-xs">★</span>
                <div className="flex-1 h-px bg-blue-100" />
              </div>
            )}
          </div>
        ))}
      </div>

      <StripeDivider />

      {/* Bottom CTA */}
      <div className="text-center px-6 py-20 bg-[rgb(219,234,254)]">
        <p
          className="text-4xl md:text-5xl text-blue-900 mb-4"
          style={{ fontFamily: 'var(--font-titan)' }}
        >
          Not sure where to start?
        </p>
        <p className="text-xl text-blue-700/70 mb-8" style={{ fontFamily: 'var(--font-caveat)' }}>
          Book a free 15-min call and we'll figure it out together. ✦
        </p>
        <a
          href="https://calendly.com/admin-locketsecurity/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-all shadow-md"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          Book a Free Call ★
        </a>
      </div>

    </main>
  );
}
