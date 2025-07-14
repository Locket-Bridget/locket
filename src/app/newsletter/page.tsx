export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-blue-100 px-4 py-12">
      <header className="max-w-4xl mx-auto mb-10 px-4">
        <h1 className="text-blue-800 text-4xl font-bold">Newsletter</h1>
        <p className="text-blue-700 text-xl mt-2 inline-block border-b-4 border-blue-600 pb-1">
          The Latest Cyber Tea
        </p>
      </header>

      <article className="max-w-4xl mx-auto flex bg-white rounded-lg shadow-md p-6">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=128&q=80"
          alt="Computer chip close-up"
          className="w-32 h-32 object-cover rounded-md flex-shrink-0"
        />
        <div className="ml-6 flex flex-col justify-between">
          <p className="text-blue-900 text-lg mb-4">
            Researchers have discovered a new Rowhammer variant called GPUHammer that targets GPUs to exploit hardware vulnerabilities — a worrying evolution in attack techniques that can compromise device security in new ways.
          </p>
          <a
            href="https://thehackernews.com/2025/07/gpuhammer-new-rowhammer-attack-variant.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 underline font-semibold"
          >
            Read the full article
          </a>
        </div>
      </article>
    </main>
  );
}

