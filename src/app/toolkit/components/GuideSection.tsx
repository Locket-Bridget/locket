import type { GuideSection as Section } from "../guidesData";

// One answer-first chunk: question H2 → bolded ~60-word direct answer → supporting paragraphs.
export function GuideSection({ section }: { section: Section }) {
  return (
    <section className="scroll-mt-24" aria-labelledby={section.id}>
      <h2
        id={section.id}
        className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 leading-snug"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
      >
        {section.question}
      </h2>
      <p className="text-base sm:text-lg text-blue-900/90 font-medium leading-relaxed mb-4">
        {section.answer}
      </p>
      {section.body?.map((para, i) => (
        <p key={i} className="text-base text-blue-700/70 leading-relaxed mb-4">
          {para}
        </p>
      ))}
    </section>
  );
}
