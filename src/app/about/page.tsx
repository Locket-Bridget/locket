export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-6 py-20">

      {/* Page header */}
      <div className="text-center mb-16">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full -rotate-1 shadow-md mb-6"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          ★ &nbsp; the founders
        </span>
        <h1
          className="text-5xl md:text-6xl font-bold text-blue-900"
          style={{ fontFamily: 'var(--font-pacifico)' }}
        >
          About Us
        </h1>
        <p className="mt-4 text-blue-700/70 max-w-lg mx-auto text-xl leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
          We built this for you, babe. ✦
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Polaroid image */}
        <div className="md:w-1/2 flex justify-center relative">
          <span className="absolute -top-4 -right-4 text-5xl text-blue-200 select-none">★</span>
          <div className="bg-white p-3 pb-12 shadow-2xl -rotate-2">
            <img
              src="/images/founders.jpg"
              alt="Bridget and Skander"
              className="w-72 h-80 object-cover block"
            />
          </div>
          <span className="absolute -bottom-3 -left-2 text-2xl text-blue-200 select-none">✦</span>
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-blue-800">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3" style={{ fontFamily: 'var(--font-fredoka)' }}>
            ✦ &nbsp; our story
          </p>
          <h2
            className="text-3xl font-bold text-blue-900 mb-6 leading-snug"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            Welcome to{' '}
            <span className="italic wavy-underline" style={{ fontFamily: 'var(--font-playfair)' }}>
              Locket.
            </span>
          </h2>
          <p className="text-base leading-relaxed mb-4 text-blue-700/80">
            Created by <strong>Bridget and Skander</strong>, Locket is personal brand protection built for the girls. We're a cybersecurity company that actually gets it — your online presence is your livelihood, and it deserves to be protected.
          </p>
          <p className="text-base leading-relaxed mb-8 text-blue-700/80">
            We believe cyber care is self care. So we made it girly, fun, and approachable — because security shouldn't feel boring or scary.
          </p>

          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-[2px] bg-blue-300 rounded-full" />
            <span className="text-blue-200 text-xs">★</span>
          </div>

          <a
            href="https://instagram.com/locketsecurity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            Follow us @locketsecurity <span className="text-blue-300">★</span>
          </a>
        </div>
      </div>
    </main>
  );
}
