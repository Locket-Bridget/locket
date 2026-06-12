import { DoodleDrop, DoodleLipstick, DoodleMirror, DoodleShield, DoodleTeacup } from "../../components/Doodles";

const tips = [
  {
    number: "01",
    Doodle: DoodleDrop,
    headline: "Cleanse Your Passwords",
    metaphor: "Wash away your dull passwords",
    description:
      "We are all complicated and unique, and our passwords should reflect that. Long, messy, full of symbols. Think of it like your skincare routine: the more steps, the better protected you are.",
    tag: "Password Hygiene",
    tilt: "-rotate-1",
    bg: "bg-[#fff8ea]",
  },
  {
    number: "02",
    Doodle: DoodleLipstick,
    headline: "It's Time for a Makeover",
    metaphor: "Out with the old, in with the new… version",
    description:
      "That update you've been avoiding? It's basically your apps asking for a fresh start. Outdated software = open doors for hackers. Keep everything updated and stay ahead of vulnerabilities.",
    tag: "Software Updates",
    tilt: "rotate-1",
    bg: "bg-blue-50",
  },
  {
    number: "03",
    Doodle: DoodleMirror,
    headline: "Some Things Are For Your Eyes Only",
    metaphor: "Keep it between you and your mirror",
    description:
      "Not everything needs to be posted, clicked, or shared. The more you put out there, the more you become a target. Before you post, ask yourself if you'd be okay with a stranger seeing it.",
    tag: "Safe Posting",
    tilt: "-rotate-2",
    bg: "bg-[#fff8ea]",
  },
  {
    number: "04",
    Doodle: DoodleShield,
    headline: "Encryption Is the New Sunscreen",
    metaphor: "Always use protection… on your data",
    description:
      "Just like SPF protects your skin, encryption protects your data. Back up regularly, encrypt sensitive files, and let us help you figure out what needs covering, because prevention beats recovery every time.",
    tag: "Data Protection",
    tilt: "rotate-1",
    bg: "bg-blue-50",
  },
  {
    number: "05",
    Doodle: DoodleTeacup,
    headline: "Immunity Boost for Your Laptop",
    metaphor: "Ward away the bad online germs",
    description:
      "We all try to stay healthy. Let's keep our online selves healthy too. Antivirus software wards off nasty online germs, and we're here to help you set it up, maintain it, and make sure it's actually working.",
    tag: "Antivirus & Protection",
    tilt: "-rotate-1",
    bg: "bg-[#fff8ea]",
  },
];

// The original playful "cyber self-care" tips. Leads the toolkit page ahead
// of the guide library.
export function ToolkitTipsBand() {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div className="text-center mb-10">
        <p
          className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-blue-500 mb-3"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
        >
          ✦ &nbsp; quick self-care tips &nbsp; ✦
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-blue-900"
          style={{ fontFamily: "var(--font-titan)" }}
        >
          Your selfcare routine
        </h2>
        <p className="mt-3 text-blue-700/60 text-base leading-relaxed">
          5 tips for making sure your online self is squeaky clean: easy, effective, and actually cute.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {tips.map((tip) => (
          <div
            key={tip.number}
            className={`${tip.bg} ${tip.tilt} rounded-2xl shadow-[0_6px_24px_rgba(30,58,138,0.08)] p-5 sm:p-8 relative overflow-hidden`}
          >
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-100 rounded-full opacity-30 blur-xl pointer-events-none" />
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <span
                  className="text-5xl font-bold text-blue-200 leading-none"
                  style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                >
                  {tip.number}
                </span>
                <tip.Doodle className="mt-1" />
              </div>
              <div className="flex-1">
                <span
                  className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3"
                  style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
                >
                  {tip.tag}
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold text-blue-900 mb-1 leading-snug"
                  style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
                >
                  {tip.headline}
                </h3>
                <p
                  className="text-lg text-blue-500 mb-3"
                  style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                >
                  &ldquo;{tip.metaphor}&rdquo;
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-[2px] bg-blue-200 rounded-full" />
                  <span className="text-blue-200 text-xs">★</span>
                </div>
                <p className="text-sm text-blue-700/70 leading-relaxed">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
