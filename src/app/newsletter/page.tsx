"use client";

import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

export default function NewsletterPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 100) {
        setShowPopup(true);
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      // Add your subscription logic here
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setShowPopup(false), 2500); // auto close popup after 2.5 sec
    }
  }

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-start px-6 py-14">
      <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 w-full max-w-4xl border-4 border-blue-800">
        <header className="mb-10 text-center">
          <h1 className="text-blue-800 text-4xl font-bold">Newsletter</h1>
          <p className="text-blue-700 text-xl mt-2 inline-block border-b-4 border-blue-600 pb-1">
            The Latest Cyber Tea
          </p>
        </header>

        <ArticleCard
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=128&q=80"
          summary="Researchers have discovered a new Rowhammer variant called GPUHammer that targets GPUs to exploit hardware vulnerabilities — a worrying evolution in attack techniques that can compromise device security in new ways."
          link="https://thehackernews.com/2025/07/gpuhammer-new-rowhammer-attack-variant.html"
        />
      </div>

      {/* Popup & overlay */}
      {showPopup && (
        <>
          {/* Very light transparent gray overlay */}
          <div className="fixed inset-0 bg-[rgba(128,128,128,0.05)] backdrop-blur-sm z-40 pointer-events-none" />

          {/* Centered popup */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 text-white px-6 py-6 rounded-lg shadow-lg max-w-sm w-full z-50">
            {submitted ? (
              <p className="text-center text-lg">Thanks for signing up! ☕️</p>
            ) : (
              <>
                <p className="mb-4 text-center text-lg font-semibold">
                  Sign up to get the latest cyber tea ☕️
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded text-blue-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="bg-white text-blue-800 font-semibold py-2 rounded hover:bg-gray-100 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </main>
  );
}


