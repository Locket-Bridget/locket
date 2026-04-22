export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-[#fff8ea]">

      {/* Big tagline strip */}
      <div className="border-b border-blue-700 py-12 text-center px-6">
        <p className="text-xs tracking-[0.25em] uppercase text-blue-400 mb-3" style={{ fontFamily: 'var(--font-fredoka)' }}>
          ★ &nbsp; personal brand protection &nbsp; ★
        </p>
        <h2
          className="text-4xl md:text-6xl font-bold text-[#fff8ea] leading-tight"
          style={{ fontFamily: 'var(--font-pacifico)' }}
        >
          Cyber Care Is Self Care.
        </h2>
        <p className="mt-4 text-blue-300 text-xl" style={{ fontFamily: 'var(--font-caveat)' }}>
          Protecting your digital presence, so you don't have to worry about it ✦
        </p>
      </div>

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-300">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-[#fff8ea] font-semibold" style={{ fontFamily: 'var(--font-fredoka)' }}>LOCKET</span>
          <span>·</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Nav links with star separators */}
        <nav className="flex items-center gap-3">
          {['About', 'Services', 'Newsletter', 'Toolkit'].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-3">
              <a href={`/${item.toLowerCase()}`} className="hover:text-[#fff8ea] transition-colors">
                {item}
              </a>
              {i < arr.length - 1 && <span className="text-blue-600">★</span>}
            </span>
          ))}
        </nav>

        {/* Instagram */}
        <a
          href="https://instagram.com/locketsecurity"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#fff8ea] transition-colors flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm7.5 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
          </svg>
          @locketsecurity
        </a>
      </div>
    </footer>
  );
}
