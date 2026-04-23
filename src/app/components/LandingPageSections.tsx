import StatSection from "../components/StatSection";

const TICKER_PHRASE = "CYBER CARE IS SELF CARE";
const TICKER_REPEATS = 10;

export default function LandingPageSections() {
  const stats = [
    {
      stat: "1 in 4",
      title: "accounts are hacked.",
      text: "Social media breaches are skyrocketing. More than 25% of users experience an account takeover — often without even knowing it happened.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    },
    {
      stat: "$3.2B",
      title: "lost to social media scams every year.",
      text: "Phishing, impersonation, and ransomware cost individuals and businesses billions annually. Most victims never see their money again.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      stat: "61%",
      title: "of victims never recover their accounts.",
      text: "Most people don't know where to start after a breach. Recovery is slow, stressful, and often impossible without expert help.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    }
  ];

  const tickerText = Array.from({ length: TICKER_REPEATS }, (_, i) => (
    <span key={i} className="flex items-center gap-8 whitespace-nowrap">
      <span className="text-base md:text-lg font-semibold tracking-[0.12em] uppercase text-[#fff8ea]" style={{ fontFamily: 'var(--font-fredoka)' }}>
        {TICKER_PHRASE}
      </span>
      <span className="text-[#fff8ea]/50 text-lg">★</span>
    </span>
  ));

  return (
    <>
      {/* Ticker strip */}
      <div className="bg-[#1E3A8A] py-3 overflow-hidden w-full">
        <div className="animate-marquee gap-0">
          {tickerText}
          {tickerText}
        </div>
      </div>

      {/* Stats section */}
      <section id="landing-page-sections" className="bg-[#fdf9f0] py-24">

        {/* Editorial section intro */}
        <div className="text-center max-w-2xl mx-auto px-6 mb-20">

          {/* Sticker pill label */}
          <span
            className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full mb-6 -rotate-1 shadow-md"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            ★ &nbsp; the reality
          </span>

          <h2 className="text-4xl md:text-5xl leading-tight" style={{ fontFamily: 'var(--font-titan)' }}>
            <span className="text-blue-900">Your </span>
            <span style={{ color: '#C8553D' }}>online </span>
            <span className="text-blue-900">presence</span>
            <br />
            <span className="italic" style={{ fontFamily: 'var(--font-playfair)', color: '#1E3A8A' }}>deserves protection.</span>
          </h2>

          <p className="mt-5 text-blue-700/70 text-xl leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
            The threats are real. The stats are alarming.<br />Most people don't even know it's happening. →
          </p>

          {/* Star divider */}
          <div className="flex items-center justify-center gap-4 mt-8 text-blue-300">
            <div className="h-px w-16 bg-blue-200" />
            <span className="text-lg">★</span>
            <span className="text-sm">★</span>
            <span className="text-lg">★</span>
            <div className="h-px w-16 bg-blue-200" />
          </div>
        </div>

        {stats.map((stat, index) => (
          <StatSection
            key={index}
            stat={stat.stat}
            title={stat.title}
            text={stat.text}
            image={stat.image}
            reverse={index % 2 === 1}
            index={index}
          />
        ))}
      </section>
    </>
  );
}
