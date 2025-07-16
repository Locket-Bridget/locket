'use client'
import React from 'react';

const MainScrollIndicator: React.FC = () => {
  const handleScroll = () => {
    const target = document.getElementById('landing-page-sections');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="mt-6 animate-bounce focus:outline-none"
      aria-label="Scroll down"
      type="button"
    >
      <svg
        className="w-6 h-6 text-[#1E3A8A]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export default MainScrollIndicator;
