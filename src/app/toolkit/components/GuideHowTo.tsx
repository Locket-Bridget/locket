import type { HowTo } from "../guidesData";

// Numbered HowTo steps. Mirrors the HowTo JSON-LD emitted on the page.
export function GuideHowTo({ howTo }: { howTo: HowTo }) {
  return (
    <section
      aria-labelledby="how-to-heading"
      className="my-12 rounded-3xl bg-[#fff8ea] border-2 border-dashed border-blue-200 p-6 sm:p-8 relative overflow-hidden"
    >
      <span className="absolute top-4 right-5 text-blue-200 text-lg select-none">★</span>
      <p
        className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C8553D] mb-1"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
      >
        ★ &nbsp; quick steps
      </p>
      <h2
        id="how-to-heading"
        className="text-2xl font-bold text-blue-900 mb-5"
        style={{ fontFamily: "var(--font-titan)" }}
      >
        {howTo.name}
      </h2>
      <ol className="flex flex-col gap-4">
        {howTo.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-4">
            <span
              className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-[#fff8ea] flex items-center justify-center text-sm font-bold"
              style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
            >
              {i + 1}
            </span>
            <div>
              <p
                className="text-blue-900 font-semibold leading-snug"
                style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
              >
                {step.anchor ? (
                  <a href={`#${step.anchor}`} className="hover:text-blue-700 transition-colors">
                    {step.name}
                  </a>
                ) : (
                  step.name
                )}
              </p>
              <p className="text-sm text-blue-700/70 leading-relaxed mt-0.5">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
