'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // // Hide navbar on the landing page
  // if (pathname === '/') return null;

  return (
    <nav className="sticky top-0 bg-[#1e3a8a] text-white px-6 py-4 shadow-md w-full z-50">
      <div className="w-full flex justify-between items-center">
        {/* LEFT: Brand */}
        <Link href="/" className="font-locket-header">
          LOCKET
        </Link>

        {/* RIGHT: Nav Links */}
        <div className="flex gap-6 text-lg">
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/newsletter" className="hover:underline">
            Newsletter
          </Link>
          <Link href="/toolkit" className="hover:underline">
            Toolkit
          </Link>
        </div>
      </div>
    </nav>
  );
}
