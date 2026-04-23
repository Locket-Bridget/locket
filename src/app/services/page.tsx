import Link from "next/link";
import { services } from "./servicesData";
import { DoodleDrop, DoodleShield, DoodleLock } from "../components/Doodles";

const cards = [
  {
    label: "The Essential",
    bg: "bg-[#fff8ea]",
    borderColor: "border-blue-200",
    Doodle: DoodleDrop,
  },
  {
    label: "The Upgrade",
    bg: "bg-blue-50",
    borderColor: "border-blue-200",
    Doodle: DoodleShield,
  },
  {
    label: "The Full Package",
    bg: "bg-[#fce8e3]",
    borderColor: "border-[#C8553D]/30",
    Doodle: DoodleLock,
  },
];

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

      {/* Script bridge heading */}
      <div className="text-center py-12 bg-[#fdf9f0]">
        <p
          className="text-3xl md:text-4xl text-blue-400/60"
          style={{ fontFamily: 'var(--font-caveat)' }}
        >
          ways to work with us ✦
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const card = cards[i];
            return (
              <div
                key={svc.slug}
                className={`${card.bg} border-2 border-dashed ${card.borderColor} rounded-3xl p-8 flex flex-col gap-4 relative`}
              >
                {/* Doodle illustration */}
                <div className="flex justify-center mb-2">
                  <card.Doodle />
                </div>

                {/* Label tag */}
                <span
                  className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-400"
                  style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                  {card.label}
                </span>

                {/* Service name */}
                <h2
                  className="text-3xl text-blue-900 leading-tight"
                  style={{ fontFamily: 'var(--font-titan)' }}
                >
                  {svc.name}
                </h2>

                {/* Tagline */}
                <p
                  className="text-lg"
                  style={{ fontFamily: 'var(--font-caveat)', color: '#C8553D' }}
                >
                  "{svc.tagline}"
                </p>

                {/* Divider */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-[2px] bg-blue-200 rounded-full" />
                  <span className="text-blue-200 text-xs">★</span>
                </div>

                {/* Description */}
                <p className="text-sm text-blue-700/60 leading-relaxed flex-grow">
                  {svc.description.trim()}
                </p>

                {/* CTA */}
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 self-start bg-blue-900 text-[#fff8ea] px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all mt-2"
                  style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                  Get Started ★
                </Link>
              </div>
            );
          })}
        </div>
      </div>

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
