import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  article: BlogPost;
  darkMode: boolean;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ article, darkMode, featured = false }) => {
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch {
      return dateString;
    }
  };

  return (
    <article
      className={`group rounded-2xl border transition-all duration-300 hover:border-neutral-500 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-elevated ${
        darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
      } ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
    >
      <div className="p-6 sm:p-8">
        {/* Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-electric/10 text-electric border border-electric/20 font-semibold">
            {article.category}
          </span>

          <div className="flex items-center space-x-3 text-xs font-mono text-muted">
            <span className="inline-flex items-center space-x-1">
              <Calendar size={13} className="text-electric" />
              <span>{formatDate(article.publishedAt)}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center space-x-1">
              <Clock size={13} className="text-muted" />
              <span>{article.readingTime}</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${article.slug}`} className="block group">
          <h3
            className={`font-bold tracking-tight mb-3 transition-colors group-hover:text-electric ${
              featured ? 'text-2xl sm:text-3xl' : 'text-xl'
            } ${darkMode ? 'text-white' : 'text-charcoal'}`}
          >
            {article.title}
          </h3>
        </Link>

        {/* Subtitle / Excerpt */}
        <p className="text-sm leading-relaxed text-muted line-clamp-3 mb-6">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded border ${
                darkMode
                  ? 'bg-charcoal/80 border-panel-border text-neutral-400'
                  : 'bg-light-subtle border-light-border text-neutral-600'
              }`}
            >
              <Tag size={10} className="text-electric" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Link */}
      <div
        className={`px-6 sm:px-8 py-4 border-t flex items-center justify-between text-xs font-mono transition-colors ${
          darkMode ? 'bg-charcoal/40 border-panel-border text-neutral-300' : 'bg-light-subtle/50 border-light-border text-neutral-700'
        }`}
      >
        <span className="text-muted text-[11px]">CLEMENT PALMER // ESSAY</span>
        <Link
          to={`/blog/${article.slug}`}
          className="inline-flex items-center space-x-1.5 font-semibold text-electric group-hover:underline"
        >
          <span>Read Article</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
