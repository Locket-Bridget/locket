import ArticleCard from "../components/ArticleCard";

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-[#fff8ea] text-blue-800 rounded-xl shadow-lg px-12 py-16 w-full max-w-4xl border-4 border-blue-800">
        <header className="mb-10">
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
    </main>
  );
}
