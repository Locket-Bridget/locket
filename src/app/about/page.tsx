export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-[rgb(219,234,254)]">
      <div className="bg-[#fff8ea] border-4 border-blue-800 rounded-xl shadow-lg p-8 md:p-12 max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Block */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/founders.jpg" // Replace with your actual image path
            alt="Bridget and Skander"
            className="rounded-lg border-2 border-blue-800 shadow-md max-w-xs w-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left text-blue-800">
          <h1 className="text-4xl font-locket-header mb-4 text-blue-900">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to <strong>Locket</strong> — your cozy digital vault.
          </p>
          <p className="text-lg mb-8">
            Created by Bridget and Skander, Locket is built for people who care deeply about their digital spaces and want to protect them — while keeping it cute.
          </p>

          {/* Follow Us Block */}
          <div className="mt-6 text-blue-900 font-semibold text-lg">
            <span>Follow us on Instagram: </span>
            <a
              href="https://instagram.com/your_instagram_handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline ml-1"
            >
              @your_instagram_handle
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}


