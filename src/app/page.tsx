import Button from "./components/Button";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 w-full max-w-4xl text-center border-4 border-blue-800">
        <h1 className="text-[6rem] font-black tracking-wide text-blue-800 drop-shadow-sm">
          LOCKET
        </h1>
        <p className="mt-2 text-xl font-medium">
          For when you don’t want to share.
        </p>
        <div className="mt-10 flex gap-6 justify-center">
          <Button href="/services">Services</Button>
          <Button href="/newsletter">Newsletter</Button>
          <Button href="/toolkit">Toolkit</Button>
          <Button href="/about">About</Button>
        </div>
      </div>
    </main>
  );
}
