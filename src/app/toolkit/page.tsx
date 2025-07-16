"use client";

import { useState } from "react";

export default function Toolkitpage() {
  const [hasAccess, setHasAccess] = useState(false);

  // Simulated purchase function
  const handleUnlock = () => {
    alert("Thank you for your purchase! Access unlocked.");
    setHasAccess(true);
  };

  return (
    <main className="h-screen w-screen flex flex-col items-center px-8 py-14 flex flex-col">
      <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 max-w-3xl w-full border-4 border-blue-800 text-center">
        <h1 className="text-4xl font-bold mb-6">Your Cyber Self-Care Toolkit</h1>
        <p className="text-lg mb-8">
          Unlock my top tips and resources for protecting yourself from cyber threats — curated just for influencers who want a digital glow-up.
        </p>

        {!hasAccess ? (
          <>
            <p className="mb-6 text-blue-700 font-semibold">
              This toolkit is behind a paywall. Purchase access to download the file.
            </p>
            <button
              onClick={handleUnlock}
              className="px-8 py-3 bg-blue-800 text-white rounded hover:bg-blue-700 transition"
            >
              Purchase Access
            </button>
          </>
        ) : (
          <>
            <p className="mb-6 text-green-700 font-semibold">
              Access granted! Click below to download your toolkit.
            </p>
            <a
              href="/path-to-your-toolkit.pdf" // Update this with your actual file URL
              download
              className="inline-block px-8 py-3 bg-green-600 text-white rounded hover:bg-green-500 transition"
            >
              Download Toolkit
            </a>
          </>
        )}
      </div>
    </main>
  );
}
