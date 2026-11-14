import React, { useState, useEffect, useRef } from 'react';

interface HeroBackgroundVideoProps {
  darkMode: boolean;
}

export const HeroBackgroundVideo: React.FC<HeroBackgroundVideoProps> = ({ darkMode }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch(() => {
            // Autoplay blocked by browser policy, keep fallback
          });
      }
    }
  }, []);

  const handleVideoReady = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Video Element (Autoplay, Muted, Loop, Playsinline) */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-video-poster.jpg"
          onLoadedData={handleVideoReady}
          onCanPlay={handleVideoReady}
          onPlaying={handleVideoReady}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? (darkMode ? 'opacity-70' : 'opacity-40') : 'opacity-0'
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
            opacity: darkMode ? 0.60 : 0.35,
          }}
        />
      )}

      {/* Subtle architectural grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Theme-aware contrast overlay guaranteeing 100% text readability */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${darkMode
            ? 'bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/35'
            : 'bg-gradient-to-r from-light-bg via-light-bg/85 to-light-bg/40'
          }`}
      />

      {/* Soft bottom transition vignette into subsequent section */}
      <div
        className={`absolute bottom-0 inset-x-0 h-32 pointer-events-none ${darkMode
            ? 'bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent'
            : 'bg-gradient-to-t from-light-bg via-light-bg/50 to-transparent'
          }`}
      />

      {/* Subtle Electric Blue ambient glow in background right quadrant */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-electric/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
