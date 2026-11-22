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
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    // Respect user's reduced-motion preference
    const mediaQuery = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;

    if (mediaQuery && mediaQuery.matches) {
      video.pause();
      setVideoLoaded(true);
    } else {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch(() => {
            // Autoplay blocked by browser policy, fallback poster stays active
          });
      }
    }

    if (mediaQuery && mediaQuery.addEventListener) {
      const handleMotionChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          video.pause();
        } else {
          video.play().catch(() => { });
        }
      };
      mediaQuery.addEventListener('change', handleMotionChange);
      return () => mediaQuery.removeEventListener('change', handleMotionChange);
    }
  }, []);

  const handleVideoReady = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Video Element (Autoplay, Muted, Loop, Playsinline)
          Preserves identical natural richness, saturation, visual contrast and prominence in both themes */}
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
          className={`absolute inset-0 w-full h-full object-cover hero-video-surface ${videoLoaded ? '' : 'opacity-0'
            }`}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Static Fallback Poster when video is pending, errored, or loading */}
      {(!videoLoaded || videoError) && (
        <div
          className="absolute inset-0 bg-cover bg-center hero-poster-surface"
          style={{
            backgroundImage: 'url(/images/hero-video-poster.jpg)',
          }}
        />
      )}

      {/* Subtle architectural grid overlay */}
      <div
        className="absolute inset-0 hero-grid-surface"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Dark Mode Overlay: Deep charcoal scrim on the left, fading to preserve glowing video nodes on right */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(to right, rgba(17, 19, 24, 0.88) 0%, rgba(17, 19, 24, 0.60) 45%, rgba(17, 19, 24, 0.15) 80%, rgba(17, 19, 24, 0.10) 100%)',
          opacity: darkMode ? 1 : 0,
        }}
      />

      {/* Light Mode Localized Text Protection (Desktop):
          Warm ivory gradient protecting the text on the left, transitioning to 0% transparency on the right
          so the video shines with 100% natural richness, depth, and clarity */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(to right, rgba(245, 244, 239, 0.94) 0%, rgba(245, 244, 239, 0.82) 42%, rgba(245, 244, 239, 0.35) 62%, rgba(245, 244, 239, 0) 80%, rgba(245, 244, 239, 0) 100%)',
          opacity: darkMode ? 0 : 1,
        }}
      />

      {/* Light Mode Localized Text Protection (Mobile / Tablet):
          Warm ivory vertical gradient protecting top-aligned text while leaving bottom photo & video vibrant */}
      <div
        className="block lg:hidden absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(to bottom, rgba(245, 244, 239, 0.95) 0%, rgba(245, 244, 239, 0.86) 50%, rgba(245, 244, 239, 0.30) 72%, rgba(245, 244, 239, 0) 90%)',
          opacity: darkMode ? 0 : 1,
        }}
      />

      {/* Soft bottom transition vignette: Dark mode into About section */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(to top, rgba(17, 19, 24, 1) 0%, rgba(17, 19, 24, 0.50) 50%, transparent 100%)',
          opacity: darkMode ? 1 : 0,
        }}
      />

      {/* Soft bottom transition vignette: Light mode into warm off-white About section */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{
          background: 'linear-gradient(to top, rgba(245, 244, 239, 1) 0%, rgba(245, 244, 239, 0.60) 50%, transparent 100%)',
          opacity: darkMode ? 0 : 1,
        }}
      />

      {/* Subtle Electric Blue ambient glow in background right quadrant */}
      <div
        className="absolute right-0 top-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{
          backgroundColor: '#2878FF',
          opacity: darkMode ? 0.15 : 0.12,
        }}
      />
    </div>
  );
};
