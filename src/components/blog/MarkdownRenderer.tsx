import React, { useMemo } from 'react';
import { marked } from 'marked';

interface MarkdownRendererProps {
  content: string;
  darkMode: boolean;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, darkMode }) => {
  const htmlContent = useMemo(() => {
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
    return marked.parse(content);
  }, [content]);

  return (
    <div
      className={`prose max-w-none space-y-6 text-base sm:text-lg leading-relaxed ${
        darkMode ? 'text-neutral-300' : 'text-neutral-800'
      }`}
    >
      <style>{`
        .blog-prose h2 {
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: ${darkMode ? '#FFFFFF' : '#111318'};
          border-bottom: 1px solid ${darkMode ? '#2D3340' : '#E4E7EC'};
          padding-bottom: 0.5rem;
        }
        .blog-prose h3 {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: ${darkMode ? '#F4F5F7' : '#181B22'};
        }
        .blog-prose p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }
        .blog-prose blockquote {
          border-left: 3px solid #2878FF;
          padding: 1rem 1.25rem;
          margin: 1.75rem 0;
          font-style: italic;
          background: ${darkMode ? 'rgba(40, 120, 255, 0.05)' : 'rgba(40, 120, 255, 0.04)'};
          border-radius: 0 0.5rem 0.5rem 0;
          color: ${darkMode ? '#E2E5EA' : '#1F2937'};
        }
        .blog-prose blockquote p {
          margin-bottom: 0;
        }
        .blog-prose code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85em;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          background: ${darkMode ? '#20242D' : '#EEF1F5'};
          color: #2878FF;
        }
        .blog-prose pre {
          background: ${darkMode ? '#0B0D11' : '#181B22'};
          color: #F4F5F7;
          padding: 1.25rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.75rem 0;
          border: 1px solid ${darkMode ? '#20242D' : '#2D3340'};
        }
        .blog-prose pre code {
          background: transparent;
          color: inherit;
          padding: 0;
          font-size: 0.9em;
        }
        .blog-prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
          space-y: 0.5rem;
        }
        .blog-prose ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-prose li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        .blog-prose hr {
          border-color: ${darkMode ? '#20242D' : '#E4E7EC'};
          margin: 2.5rem 0;
        }
        .blog-prose a {
          color: #2878FF;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .blog-prose strong {
          color: ${darkMode ? '#FFFFFF' : '#111318'};
          font-weight: 700;
        }
      `}</style>
      <div
        className="blog-prose"
        dangerouslySetInnerHTML={{ __html: htmlContent as string }}
      />
    </div>
  );
};
