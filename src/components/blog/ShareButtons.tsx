import React, { useState } from 'react';
import { Share2, Check, Copy, Twitter, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
  darkMode: boolean;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, darkMode }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${
      darkMode ? 'bg-panel/50 border-panel-border' : 'bg-light-subtle/80 border-light-border'
    }`}>
      <div className="flex items-center space-x-2 text-xs font-mono uppercase text-muted">
        <Share2 size={15} className="text-electric" />
        <span>Share This Article</span>
      </div>

      <div className="flex items-center space-x-2">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg border transition-colors ${
            darkMode
              ? 'border-panel-border bg-charcoal text-neutral-300 hover:text-white hover:border-neutral-500'
              : 'border-light-border bg-white text-neutral-700 hover:text-charcoal hover:border-neutral-400'
          }`}
          aria-label="Share on X / Twitter"
          title="Share on X"
        >
          <Twitter size={15} />
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg border transition-colors ${
            darkMode
              ? 'border-panel-border bg-charcoal text-neutral-300 hover:text-white hover:border-neutral-500'
              : 'border-light-border bg-white text-neutral-700 hover:text-charcoal hover:border-neutral-400'
          }`}
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <Linkedin size={15} />
        </a>

        <button
          onClick={handleCopy}
          className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
            copied
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : darkMode
              ? 'border-panel-border bg-charcoal text-neutral-300 hover:text-white hover:border-neutral-500'
              : 'border-light-border bg-white text-neutral-700 hover:text-charcoal hover:border-neutral-400'
          }`}
          title="Copy Link"
        >
          {copied ? (
            <>
              <Check size={14} className="text-emerald-400" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} className="text-electric" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
