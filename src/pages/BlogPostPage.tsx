import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles, getAdjacentArticles } from '../utils/blog';
import { MarkdownRenderer } from '../components/blog/MarkdownRenderer';
import { ShareButtons } from '../components/blog/ShareButtons';
import { BlogCard } from '../components/blog/BlogCard';
import { personalInfo } from '../data/portfolioData';

interface BlogPostPageProps {
  darkMode: boolean;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ darkMode }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const article = useMemo(() => {
    return slug ? getArticleBySlug(slug) : undefined;
  }, [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return getRelatedArticles(article.slug, article.category, 2);
  }, [article]);

  const { previous, next } = useMemo(() => {
    if (!article) return {};
    return getAdjacentArticles(article.slug);
  }, [article]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} — Clement Palmer Journal`;

      // Update meta description dynamically
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt);
      }
    }
  }, [article]);

  if (!article) {
    return (
      <div className="pt-36 pb-28 text-center max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-4">Article Not Found</h1>
        <p className="text-sm text-muted mb-8">
          The requested essay could not be located or may be a private draft.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-electric text-white hover:bg-electric-hover transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Journal Home</span>
        </button>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch {
      return dateString;
    }
  };

  return (
    <article className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-electric transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Journal</span>
          </Link>

          <span className="text-[11px] font-mono uppercase text-muted">
            CLEMENT PALMER // JOURNAL
          </span>
        </div>

        {/* Article Header Area */}
        <header className="border-b pb-10 mb-10 subtle-border">
          
          {/* Category & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase px-3 py-1 rounded bg-electric/10 text-electric border border-electric/20 font-semibold">
              {article.category}
            </span>
            <span className="text-xs font-mono text-muted flex items-center space-x-1">
              <Clock size={13} />
              <span>{article.readingTime}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4 ${
            darkMode ? 'text-white' : 'text-charcoal'
          }`}>
            {article.title}
          </h1>

          {/* Subtitle / Intro */}
          {article.subtitle && (
            <p className="text-lg sm:text-xl font-medium text-electric mb-6 leading-relaxed">
              {article.subtitle}
            </p>
          )}

          {/* Author Byline & Date Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-panel-border/50 text-xs text-muted font-mono">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-electric shrink-0">
                <img
                  src={personalInfo.headshotImage}
                  alt={personalInfo.displayName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-charcoal'}`}>
                  {personalInfo.displayName}
                </p>
                <p className="text-[11px] text-muted">
                  Full-Stack Developer & Educator
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-0.5">
              <p className="flex items-center space-x-1.5">
                <Calendar size={13} className="text-electric" />
                <span>Published: {formatDate(article.publishedAt)}</span>
              </p>
              {article.updatedAt && (
                <p className="text-[10px] text-muted">
                  Updated: {formatDate(article.updatedAt)}
                </p>
              )}
            </div>
          </div>
        </header>

        {/* Featured Image if available */}
        {article.featuredImage && article.category === 'Software Engineering' && (
          <div className="mb-10 rounded-2xl overflow-hidden border subtle-border shadow-md">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
          </div>
        )}

        {/* Article Body Content */}
        <div className="max-w-3xl mx-auto mb-12">
          <MarkdownRenderer content={article.content} darkMode={darkMode} />
        </div>

        {/* Article Tags */}
        <div className="max-w-3xl mx-auto pt-6 pb-8 border-t subtle-border">
          <p className="text-xs font-mono uppercase text-muted mb-3 font-semibold">
            Topic Tags:
          </p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center space-x-1 text-xs font-mono px-3 py-1 rounded-md border ${
                  darkMode
                    ? 'bg-panel border-panel-border text-neutral-300'
                    : 'bg-light-subtle border-light-border text-neutral-700'
                }`}
              >
                <Tag size={12} className="text-electric" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Social Sharing Toolbar */}
        <div className="max-w-3xl mx-auto mb-12">
          <ShareButtons title={article.title} darkMode={darkMode} />
        </div>

        {/* Author Footnote Dossier */}
        <div className={`max-w-3xl mx-auto p-6 rounded-2xl border mb-16 flex items-start space-x-4 ${
          darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
        }`}>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-electric shrink-0 shadow-sm">
            <img
              src={personalInfo.headshotImage}
              alt={personalInfo.displayName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className={`text-base font-bold tracking-tight mb-1 ${
              darkMode ? 'text-white' : 'text-charcoal'
            }`}>
              About {personalInfo.displayName}
            </h3>
            <p className="text-xs leading-relaxed text-muted mb-3">
              Full-Stack Developer, Software Engineer, and ICT Educator with a B.Sc. in ICT Education from UEW. Writing on software architecture, practical engineering, cybersecurity, and personal growth.
            </p>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <Link to="/#about" className="text-electric hover:underline">
                View Full Biography &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Previous / Next Article Navigation Cards */}
        <div className="max-w-3xl mx-auto mb-16 pt-8 border-t subtle-border">
          <div className="grid sm:grid-cols-2 gap-4">
            {previous ? (
              <Link
                to={`/blog/${previous.slug}`}
                className={`p-4 rounded-xl border transition-all hover:border-electric group text-left ${
                  darkMode ? 'bg-panel/50 border-panel-border' : 'bg-white border-light-border'
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-muted block mb-1">
                  &larr; Older Essay
                </span>
                <p className={`text-xs sm:text-sm font-semibold line-clamp-2 group-hover:text-electric transition-colors ${
                  darkMode ? 'text-white' : 'text-charcoal'
                }`}>
                  {previous.title}
                </p>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className={`p-4 rounded-xl border transition-all hover:border-electric group text-right ${
                  darkMode ? 'bg-panel/50 border-panel-border' : 'bg-white border-light-border'
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-muted block mb-1">
                  Newer Essay &rarr;
                </span>
                <p className={`text-xs sm:text-sm font-semibold line-clamp-2 group-hover:text-electric transition-colors ${
                  darkMode ? 'text-white' : 'text-charcoal'
                }`}>
                  {next.title}
                </p>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="border-t pt-12 subtle-border">
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-charcoal'
              }`}>
                Related Perspectives & Notes
              </h3>
              <Link to="/blog" className="text-xs font-mono text-electric hover:underline">
                View All Articles &rarr;
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <BlogCard
                  key={rel.slug}
                  article={rel}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};
