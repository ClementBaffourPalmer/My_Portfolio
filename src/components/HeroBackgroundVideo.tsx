import React, { useState } from 'react';

interface HeroBackgroundVideoProps {
  darkMode: boolean;
}

export const HeroBackgroundVideo: React.FC<HeroBackgroundVideoProps> = ({ darkMode }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Video Element (Autoplay, Muted, Loop, Playsinline) */}
      {!videoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-video-poster.jpg"
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? (darkMode ? 'opacity-30' : 'opacity-15') : 'opacity-0'
          }`}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Static Fallback Poster when video is pending, errored, or loading */}
      {(!videoLoaded || videoError) && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: 'url(/images/hero-video-poster.jpg)',
            opacity: darkMode ? 0.35 : 0.12,
          }}
        />
      )}

      {/* Subtle architectural animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Theme-aware contrast overlay guaranteeing 100% text readability */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          darkMode
            ? 'bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70'
            : 'bg-gradient-to-r from-light-bg via-light-bg/95 to-light-bg/85'
        }`}
      />

      {/* Subtle Electric Blue ambient glow in background right quadrant */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
