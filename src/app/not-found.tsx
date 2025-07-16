import Link from "next/link";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fff8ea] text-blue-900 px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </main>
  );
}
