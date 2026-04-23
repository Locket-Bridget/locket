type ArticleCardProps = {
  category: string;
  categoryColor: string;
  headline: string;
  excerpt: string;
  date: string;
  severity: 'High' | 'Medium' | 'Low';
  source: string;
  link: string;
};

const severityStyles = {
  High: 'bg-[#fce8e3] text-[#C8553D]',
  Medium: 'bg-amber-100 text-amber-700',
  Low: 'bg-blue-100 text-blue-700',
};

export default function ArticleCard({ category, categoryColor, headline, excerpt, date, severity, source, link }: ArticleCardProps) {
  return (
    <article className="bg-[#fff8ea] rounded-2xl shadow-[0_4px_20px_rgba(30,58,138,0.07)] p-6 flex flex-col gap-3 hover:shadow-[0_8px_30px_rgba(30,58,138,0.12)] transition-all duration-300 group relative overflow-hidden">
      {/* Blob decoration */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-30 blur-xl pointer-events-none" />

      {/* Top row: category + severity + date */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className={`text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${categoryColor}`} style={{ fontFamily: 'var(--font-fredoka)' }}>
          {category}
        </span>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${severityStyles[severity]}`}>
            {severity} Risk
          </span>
          <span className="text-xs text-blue-400">{date}</span>
        </div>
      </div>

      {/* Headline */}
      <h3 className="text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors" style={{ fontFamily: 'var(--font-fredoka)' }}>
        {headline}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-blue-700/70 leading-relaxed flex-grow">
        {excerpt}
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between pt-2 border-t border-blue-100">
        <span className="text-xs text-blue-400 italic">via {source}</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-blue-800 hover:text-blue-600 transition-colors flex items-center gap-1"
          style={{ fontFamily: 'var(--font-fredoka)' }}
        >
          Read More →
        </a>
      </div>
    </article>
  );
}
