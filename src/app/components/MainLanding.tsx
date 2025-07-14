import Button from "./Button";

const word = "LOCKET";

export default function MainLanding() {
  return (
    <main className="h-screen w-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 w-full max-w-4xl text-center border-4 border-blue-800">
        <h1 className="font-locket splash-text" aria-label="LOCKET">
          {word.split("").map((letter, i) => (
            <span
              key={i}
              className="splash-letter"
              aria-hidden="true"
              style={{ "--spark-delay": i, "--spark-delay2": i + 1 } as React.CSSProperties}
            >
              {letter}
              <span className="sparkle1" />
              <span className="sparkle2" />
            </span>
          ))}
        </h1>
        <p className="mt-1 text-xl font-medium">For when you don’t want to share.</p>
        <div className="mt-15 flex gap-6 justify-center">
          <Button href="/services">Services</Button>
          <Button href="/newsletter">Newsletter</Button>
          <Button href="/toolkit">Toolkit</Button>
          <Button href="/about">About</Button>
        </div>
      </div>
    </main>
  );
}
