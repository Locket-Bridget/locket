'use client';

import { useRouter } from 'next/navigation';
import LocketIcon from './LocketIcon';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, href, onClick, className }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) router.push(href);
    else if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1 bg-blue-900 text-[#fff8ea] px-7 py-3 rounded-full text-base font-semibold tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-200 ${className ?? ''}`}
      style={{ fontFamily: 'var(--font-fredoka)' }}
    >
      {children}
      <LocketIcon className="h-4 w-4 ml-1 translate-y-[1px]" heartColor="#1e3a8a" />
    </button>
  );
}
