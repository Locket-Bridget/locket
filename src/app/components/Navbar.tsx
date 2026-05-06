//Not to be obvious but this is where the nav bar is worked on

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/toolkit', label: 'Toolkit' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile drawer is open.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (pathname === "/preview") return null;

  const linkFontStyle = { fontFamily: 'var(--font-fredoka)', fontWeight: 600 } as const;

  return (
    <nav className="sticky top-0 bg-[#1E3A8A] text-white px-4 sm:px-6 py-3 sm:py-4 shadow-md w-full z-50">
      <div className="w-full flex justify-between items-center gap-4">

        {/* LEFT: Brand */}
        <Link
          href="/"
          className="font-locket-header text-xl md:text-2xl shrink-0"
          onClick={() => setOpen(false)}
        >
          LOCKET
        </Link>

        {/* DESKTOP: Nav Links + Instagram Icon */}
        <div
          className="hidden md:flex items-center gap-6 text-base"
          style={linkFontStyle}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-semibold tracking-wide transition-colors ${
                pathname === href
                  ? 'text-[#fff8ea] underline underline-offset-4 decoration-blue-400'
                  : 'text-blue-200 hover:text-[#fff8ea]'
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="https://www.instagram.com/locketsecurity/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="relative group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 transition-colors duration-300"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm7.5 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
            </svg>
            <span
              className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-70 bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* MOBILE: Hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-blue-100 hover:text-[#fff8ea] hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE: Drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className="flex flex-col gap-1 pb-2"
          style={linkFontStyle}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-3 rounded-md text-base tracking-wide transition-colors ${
                pathname === href
                  ? 'text-[#fff8ea] bg-white/10'
                  : 'text-blue-200 hover:text-[#fff8ea] hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="https://www.instagram.com/locketsecurity/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-3 rounded-md text-blue-200 hover:text-[#fff8ea] hover:bg-white/5 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm7.5 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
            </svg>
            <span>@locketsecurity</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
