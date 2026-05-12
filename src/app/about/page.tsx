import LocketIcon from '../components/LocketIcon';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[rgb(219,234,254)] px-4 sm:px-6 py-6 sm:py-8">

      {/* Page header */}
      <div className="text-center mb-6 sm:mb-8">
        <span
          className="inline-block bg-blue-900 text-[#fff8ea] text-xs font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full -rotate-1 shadow-md mb-3"
          style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
        >
          ★ &nbsp; our story
        </span>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900"
          style={{ fontFamily: 'var(--font-titan)' }}
        >
          About Us
        </h1>
        <p className="mt-2 text-blue-700/70 max-w-lg mx-auto text-lg sm:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>
          We built this for you, babe ✦
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 text-blue-300">
          <div className="h-px w-16 bg-blue-200" />
          <span>★</span>
          <span className="text-sm">★</span>
          <span>★</span>
          <div className="h-px w-16 bg-blue-200" />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">

        {/* Locket symbol */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end relative md:pr-4">
          <div className="relative md:-translate-y-6 lg:-translate-y-8">
            <span className="absolute -top-4 -right-4 text-5xl text-blue-200 select-none">★</span>
            <LocketIcon
              className="text-blue-900 w-48 h-48 sm:w-60 sm:h-60"
              heartColor="#dbeafe"
            />
            <span className="absolute -bottom-3 -left-2 text-2xl text-blue-200 select-none">✦</span>
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-3/5 text-blue-800">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-2" style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}>
            ✦ &nbsp; our story
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 leading-snug"
            style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
          >
            Welcome to{' '}
            <span className="italic" style={{ fontFamily: 'var(--font-playfair)' }}>
              Locket.
            </span>
          </h2>
          <p className="text-base leading-relaxed mb-4 text-blue-700/80">
            Locket is personal brand protection built for the girls, by the girls. We&apos;re a cybersecurity company that actually gets it: your online presence is your livelihood, and it deserves to be protected.
          </p>
          <p className="text-base leading-relaxed mb-4 text-blue-700/80">
            We believe cyber care is self care. We made it fun and approachable, because security shouldn&apos;t feel boring or scary. It&apos;s our goal to make sure that your cyber care is tailored to you, so you can feel safe operating your personal brand.
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-blue-300 rounded-full" />
            <span className="text-blue-200 text-xs">★</span>
          </div>

          <a
            href="https://instagram.com/locketsecurity"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 text-[#fff8ea] px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-all"
            style={{ fontFamily: 'var(--font-fredoka)', fontWeight: 600 }}
          >
            Follow us @locketsecurity <span className="text-blue-300">★</span>
          </a>
        </div>
      </div>
    </main>
  );
}
