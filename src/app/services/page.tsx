import Link from "next/link";
import { services } from "./servicesData";
import StripeDivider from "../components/StripeDivider";

const blocks = [
  {
    bg: "#fff8ea",
    textColor: "#1E3A8A",
    accentColor: "#C8553D",
    number: "/01",
    tilt: "-rotate-1",
  },
  {
    bg: "#1E3A8A",
    textColor: "#fff8ea",
    accentColor: "#93c5fd",
    number: "/02",
    tilt: "rotate-0",
  },
  {
    bg: "#C8553D",
    textColor: "#fff8ea",
    accentColor: "#fff8ea",
    number: "/03",
    tilt: "rotate-1",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[rgb(219,234,254)]">

      {/* Page header */}
      <div className="text-center px-6 py-20 pb-12">
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
        <p className="mt-4 text-blue-700/70 max-w-lg mx-auto text-xl leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
          Everything you need to protect your online presence. ✦
        </p>
      </div>

      <StripeDivider />

      {/* Color block grid — Feel Fits style */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((svc, i) => {
          const block = blocks[i];
          return (
            <div
              key={svc.slug}
              className={`relative flex flex-col justify-between px-10 py-14 min-h-[480px] overflow-hidden group`}
              style={{ backgroundColor: block.bg }}
            >
              {/* Big background number */}
              <span
                className="absolute top-6 right-8 text-8xl font-bold opacity-10 select-none"
                style={{ fontFamily: 'var(--font-titan)', color: block.textColor }}
              >
                {i + 1}
              </span>

              <div>
                {/* /0X number */}
                <p
                  className="text-sm font-bold tracking-widest mb-6 opacity-60"
                  style={{ fontFamily: 'var(--font-playfair)', color: block.textColor }}
                >
                  {block.number}
                </p>

                {/* Service name */}
                <h2
                  className="text-4xl md:text-5xl leading-tight mb-4"
                  style={{ fontFamily: 'var(--font-titan)', color: block.textColor }}
                >
                  {svc.name}
                </h2>

                {/* Tagline */}
                <p
                  className="text-xl mb-6 opacity-80"
                  style={{ fontFamily: 'var(--font-caveat)', color: block.accentColor }}
                >
                  "{svc.tagline}"
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed opacity-70"
                  style={{ color: block.textColor }}
                >
                  {svc.description.trim()}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={`/services/${svc.slug}`}
                className="inline-flex items-center gap-2 mt-10 text-sm font-bold tracking-wide uppercase hover:gap-4 transition-all duration-200"
                style={{ fontFamily: 'var(--font-fredoka)', color: block.accentColor }}
              >
                Get Started →
              </Link>

              {/* Hover border overlay */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-current opacity-10 transition-all duration-300 pointer-events-none" style={{ borderColor: block.textColor }} />
            </div>
          );
        })}
      </div>

      <StripeDivider />

      {/* Bottom CTA */}
      <div className="text-center px-6 py-20">
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
