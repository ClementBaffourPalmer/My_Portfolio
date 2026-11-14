import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { getRecentArticles } from '../utils/blog';
import { BlogCard } from './blog/BlogCard';

interface HomeBlogSectionProps {
  darkMode: boolean;
}

export const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({ darkMode }) => {
  const recentArticles = getRecentArticles(3);

  return (
    <section id="journal" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase text-electric bg-electric/10 mb-3 border border-electric/20">
              <BookOpen size={13} />
              <span>07 // JOURNAL // ESSAYS & REFLECTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className={darkMode ? 'text-white' : 'text-charcoal'}>
                Notes From My Journey
              </span>
            </h2>
            <p className={`mt-3 text-base max-w-2xl leading-relaxed ${
              darkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              Occasional thoughts, lessons and experiences from my journey through technology, engineering and personal growth.
            </p>
            <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
          </div>

          <div>
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-electric hover:bg-electric-hover text-white transition-all shadow-sm hover:shadow-blue-glow group"
            >
              <span>Explore All Articles</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
