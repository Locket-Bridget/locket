export default function ServicesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 w-full max-w-6xl text-center border-4 border-blue-800">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white rounded-lg shadow-md p-8 border border-blue-800 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Cyber Cleanse</h2>
              <p>The essential glow-up for your digital life.</p>
            </div>
            <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-8 border border-blue-800 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Digital Detox</h2>
              <p>Level up your security glow.</p>
            </div>
            <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-8 border border-blue-800 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4"> Protected Princess</h2>
              <p>The full glam cyber self-care VIP treatment.</p>
            </div>
            <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

