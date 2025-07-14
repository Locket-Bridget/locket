type ArticleCardProps = {
  image: string;
  summary: string;
  link: string;
};

export default function ArticleCard({ image, summary, link }: ArticleCardProps) {
  return (
    <article className="flex bg-white rounded-lg shadow-md p-6">
      <img
        src={image}
        alt="Article thumbnail"
        className="w-32 h-32 object-cover rounded-md flex-shrink-0"
      />
      <div className="ml-6 flex flex-col justify-between">
        <p className="text-blue-900 text-lg mb-4">{summary}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 underline font-semibold"
        >
          Read the full article
        </a>
      </div>
    </article>
  );
}
