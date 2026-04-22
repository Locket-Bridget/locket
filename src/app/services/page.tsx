import Link from "next/link";
import { services } from "./servicesData";

const numbers = ["/01", "/02", "/03"];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-6 py-20">

      {/* Page header */}
      <div className="text-center mb-16">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-6"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          ★ &nbsp; what we offer
        </span>
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900"
          style={{ fontFamily: 'var(--font-pacifico)' }}
        >
          Our Services
        </h1>
        <p className="mt-4 text-blue-700/70 max-w-lg mx-auto text-xl leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
          Everything you need to protect your online presence. ✦
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 justify-center">
        {services.map((svc, i) => (
          <div
            key={svc.slug}
            className="bg-[#fff8ea] rounded-3xl shadow-[0_8px_30px_rgba(30,58,138,0.08)] p-8 flex-1 min-w-[260px] max-w-sm flex flex-col gap-4 relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(30,58,138,0.14)] transition-all duration-300"
          >
            {/* Blob decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-40 blur-2xl pointer-events-none" />

            {/* Number */}
            <span
              className="text-5xl font-bold text-blue-200 leading-none"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {numbers[i]}
            </span>

            {/* Name */}
            <h2
              className="text-2xl font-bold text-blue-900 leading-tight"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              {svc.name}
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-blue-300 rounded-full" />
              <span className="text-blue-200 text-xs">★</span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-blue-700/70 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
              "{svc.tagline}"
            </p>

            {/* Description */}
            <p className="text-sm text-blue-700/60 leading-relaxed flex-grow">
              {svc.description.trim()}
            </p>

            {/* CTA */}
            <Link
              href={`/services/${svc.slug}`}
              className="inline-flex items-center gap-1 self-start bg-blue-900 text-[#fff8ea] px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all mt-2"
              style={{ fontFamily: 'var(--font-fredoka)' }}
            >
              Get Started <span className="text-blue-300">★</span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
