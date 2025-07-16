// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white py-10 border-t border-blue-800">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
        {/* Branding / Copyright */}
        <div className="text-sm sm:text-left">
          © {new Date().getFullYear()} Locket. All rights reserved.
        </div>

        {/* Navigation links */}
        <nav className="flex gap-6 text-sm justify-center sm:justify-end">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </nav>

        {/* Socials (placeholder icons or real ones) */}
        <div className="flex gap-4 justify-center sm:justify-end">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:opacity-80">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="..." /></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="..." /></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="..." /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
