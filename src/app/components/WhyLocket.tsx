const others = [
  "Built for enterprises, not creators",
  "A dashboard you manage yourself",
  "Tech speak and ticket systems",
  "Detects threats, then leaves you alone",
  "Generic password tools rebranded for influencers",
  "No one picks up the phone",
];

const locket = [
  "Built from scratch for influencers and creators",
  "Done for you: we handle it",
  "Plain English, real conversations",
  "We respond fast and walk you through every step",
  "Creator-specific threats: deepfakes, fake ads, impersonation",
  "Direct line to Bridget via Slack during support hours",
];

export default function WhyLocket() {
  return (
    <section className="bg-[#fdf9f0] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full rotate-1 shadow-md mb-6"
            style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
          >
            ★ &nbsp; why locket
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-blue-900 leading-tight"
            style={{ fontFamily: 'var(--font-titan)' }}
          >
            Not your IT guy&apos;s<br />
            <span style={{ color: '#C8553D' }}>cybersecurity company.</span>
          </h2>
          <p
            className="mt-4 text-blue-700/70 text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
          >
            Every other option out there was built for corporations. We built Locket for you.
          </p>
        </div>

        {/* Comparison table */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">

          {/* Everyone else */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-8">
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-5"
              style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
            >
              Everyone else
            </p>
            <ul className="flex flex-col gap-3">
              {others.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-500 text-sm sm:text-base" style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}>
                  <span className="text-gray-300 mt-0.5 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Locket */}
          <div className="bg-[#1E3A8A] border border-blue-800 rounded-2xl p-5 sm:p-8">
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-300 mb-5"
              style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
            >
              ★ Locket
            </p>
            <ul className="flex flex-col gap-3">
              {locket.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#fff8ea] text-sm sm:text-base" style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}>
                  <span className="text-blue-300 mt-0.5 shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
