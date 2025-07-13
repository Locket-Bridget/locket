'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Hide navbar on the landing page
  if (pathname === '/') return null;

  return (
    <nav className="bg-blue-800 text-white px-6 py-4 shadow-md w-full">
      <div className="w-full flex justify-between items-center">
        {/* LEFT: Brand */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
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
