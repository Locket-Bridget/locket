/* MainLanding.tsx */
import Button from "./Button";
import LocketIcon from "./LocketIcon";

const word = "LOCKET";

export default function MainLanding() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-[rgb(219,234,254)] px-4 py-8">
      {/* Container with column layout and gap */}
      <div className="bg-[#fff8ea] rounded-xl shadow-lg px-12 py-12 w-full max-w-5xl text-center border-4 border-blue-800 flex flex-col items-center">
        {/* Wordmark + icon */}
        <h1
          className="font-locket text-[160px] splash-text flex items-center justify-center gap-1 text-blue-900"
          aria-label="LOCKET"
        >
          {word.split("").map((letter, i) => (
            <span
              key={i}
              className="splash-letter"
              aria-hidden="true"
              // Removed sparkle styles since no sparkles
              style={{}} 
            >
              {letter}
            </span>
          ))}
          <LocketIcon className="h-10 w-10 translate-y-[15px] -ml-[2px]" />
        </h1>

        {/* Tagline */}
        <p
          className="mt-2 text-xl font-medium text-blue-800 animate-fadeInUp"
          style={{ animationDelay: "1.5s" }}
        >
          For when you don’t want to share.
        </p>

        {/* Navigation buttons */}
        <div className="mt-12 flex gap-6 justify-center flex-wrap">
          <Button href="/services" className="btn-hover-scale">Services</Button>
          <Button href="/newsletter" className="btn-hover-scale">Newsletter</Button>
          <Button href="/toolkit" className="btn-hover-scale">Toolkit</Button>
          <Button href="/about" className="btn-hover-scale">About</Button>
        </div>
      </div>

      {/* Scroll Indicator just below box with margin */}
      <div className="mt-6 animate-bounce">
        <svg
          className="w-6 h-6 text-[#1E3A8A]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </main>
  );
}
