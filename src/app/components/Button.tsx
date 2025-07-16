//Our buttons on the main div for the landing page

'use client';

import { useRouter } from 'next/navigation';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string; // add optional className prop
};

export default function Button({ children, href, onClick, className }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-white border-2 border-blue-800 text-blue-800 px-6 py-2 rounded-full text-lg font-bold hover:bg-blue-50 transition-all ${className ?? ''}`}
    >
      {children}
    </button>
  );
}
