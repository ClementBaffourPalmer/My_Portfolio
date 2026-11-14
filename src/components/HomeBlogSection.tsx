import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getRecentArticles } from '../utils/blog';
import { BlogCard } from './blog/BlogCard';

interface HomeBlogSectionProps {
  darkMode: boolean;
}

export const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({ darkMode }) => {
  const recentArticles = getRecentArticles(3);

  return (
    <section id="blog-preview" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
              JOURNAL
            </p>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-charcoal'
            }`}>
              From the Journal
            </h2>
            <p className={`mt-2 text-sm sm:text-base max-w-xl ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Occasional thoughts, engineering discoveries, and reflections on technology and growth.
            </p>
            <div className="w-12 h-1 bg-electric mt-3 rounded-full" />
          </div>

          <div>
            <Link
              to="/blog"
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-electric hover:underline"
            >
              <span>View all articles</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* 3 Most Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <BlogCard
              key={article.slug}
              article={article}
              darkMode={darkMode}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
