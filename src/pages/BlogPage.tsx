import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, BookOpen, Sparkles, ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogCategory } from '../types/blog';
import { getPublishedArticles, getAllCategories, filterArticles, getFeaturedArticle } from '../utils/blog';
import { BlogCard } from '../components/blog/BlogCard';

interface BlogPageProps {
  darkMode: boolean;
}

export const BlogPage: React.FC<BlogPageProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allArticles = useMemo(() => getPublishedArticles(), []);
  const featuredArticle = useMemo(() => getFeaturedArticle(), []);
  const categories = useMemo(() => ['All', ...getAllCategories()] as (BlogCategory | 'All')[], []);

  const filteredArticles = useMemo(() => {
    return filterArticles(allArticles, selectedCategory, searchQuery);
  }, [allArticles, selectedCategory, searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Journal // Beyond the Code — Clement Palmer";
  }, []);

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb back to Main Portfolio */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-electric transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Return to Portfolio</span>
          </Link>
        </div>

        {/* Blog Header & Brand Identity */}
        <div className="border-b pb-12 mb-12 subtle-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase text-electric bg-electric/10 border border-electric/20">
              <BookOpen size={13} />
              <span>CLEMENT PALMER — JOURNAL</span>
            </div>
            <p className={`text-xs font-mono tracking-wide ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600 font-medium'
            }`}>
              "Technology. Growth. Experiences. Perspectives."
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className={darkMode ? 'text-white' : 'text-charcoal'}>
              Beyond the Code.
            </span>
          </h1>

          <p className={`text-base sm:text-lg max-w-3xl leading-relaxed ${
            darkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            A collection of thoughts, experiences, lessons and ideas from my journey through technology, personal growth and everything in between.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="space-y-6 mb-12">
          
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
              <Search size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays by keyword, technology, or topic..."
              className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-electric ${
                darkMode
                  ? 'bg-panel border-panel-border text-white placeholder-neutral-500'
                  : 'bg-white border-light-border text-charcoal placeholder-neutral-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted hover:text-electric"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-electric text-white shadow-xs font-semibold'
                      : darkMode
                      ? 'bg-panel border border-panel-border text-muted hover:text-white hover:border-neutral-500'
                      : 'bg-light-subtle border border-light-border text-neutral-600 hover:text-charcoal'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Featured Article Hero (Shown when on "All" and no active search) */}
        {selectedCategory === 'All' && !searchQuery && featuredArticle && (
          <div className="mb-14">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase text-electric font-semibold mb-3">
              <Sparkles size={14} />
              <span>FEATURED ESSAY</span>
            </div>

            <div
              className={`p-6 sm:p-10 rounded-2xl border transition-all duration-300 hover:border-neutral-500 shadow-sm hover:shadow-elevated ${
                darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
              }`}
            >
              <div className="max-w-4xl space-y-4">
                <div className="flex flex-wrap items-center space-x-3 text-xs font-mono text-muted">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-electric/10 text-electric border border-electric/20 font-semibold">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Calendar size={13} className="text-electric" />
                    <span>{featuredArticle.publishedAt}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock size={13} />
                    <span>{featuredArticle.readingTime}</span>
                  </span>
                </div>

                <Link to={`/blog/${featuredArticle.slug}`}>
                  <h2
                    className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight hover:text-electric transition-colors ${
                      darkMode ? 'text-white' : 'text-charcoal'
                    }`}
                  >
                    {featuredArticle.title}
                  </h2>
                </Link>

                {featuredArticle.subtitle && (
                  <p className="text-base sm:text-lg font-medium text-electric">
                    {featuredArticle.subtitle}
                  </p>
                )}

                <p className={`text-sm sm:text-base leading-relaxed ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <Link
                    to={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-electric hover:bg-electric-hover text-white transition-all shadow-xs group"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className={`text-[11px] font-mono ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    INSPIRATION // STEPPING INTO MY JOURNEY
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Heading for Articles */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-panel-border/40">
          <h2 className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-charcoal'}`}>
            {selectedCategory === 'All' ? 'Recent Essays & Notes' : `${selectedCategory} (${filteredArticles.length})`}
          </h2>
          <span className="text-xs font-mono text-muted">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'} Found
          </span>
        </div>

        {/* Articles Grid or Empty State */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <BlogCard
                key={article.slug}
                article={article}
                darkMode={darkMode}
              />
            ))}
          </div>
        ) : (
          <div className={`p-12 text-center rounded-2xl border ${
            darkMode ? 'bg-panel/40 border-panel-border' : 'bg-light-subtle/80 border-light-border'
          }`}>
            <p className="text-base font-semibold mb-2">No articles match your search criteria.</p>
            <p className="text-xs text-muted mb-6">
              Try adjusting your keyword or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-electric text-white hover:bg-electric-hover transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
