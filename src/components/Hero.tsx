import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { personalInfo, typewriterRoles } from '../data/portfolioData';
import { Typewriter } from './Typewriter';
import { HeroBackgroundVideo } from './HeroBackgroundVideo';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Cinematic Hero Background Video & Fallback */}
      <HeroBackgroundVideo darkMode={darkMode} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Narrative & Call-to-Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge with subtle pulse */}
            <div className={`inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border text-xs font-medium tracking-wide transition-colors ${
              darkMode
                ? 'bg-panel/80 border-panel-border text-neutral-300'
                : 'bg-white/90 border-light-border text-neutral-800 shadow-xs'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Display Name & Rotating Typewriter Positioning */}
            <div>
              {/* Typewriter Rotating Roles */}
              <div className="flex items-center space-x-2 text-sm sm:text-base font-mono uppercase tracking-widest text-electric font-semibold mb-2 h-7">
                <span className="text-neutral-500">//</span>
                <Typewriter words={typewriterRoles} className="text-electric font-bold" />
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <span className={darkMode ? 'text-white' : 'text-charcoal'}>
                  {personalInfo.displayName}
                </span>
              </h1>
            </div>

            {/* Strong Headline */}
            <p className={`text-xl sm:text-2xl font-semibold tracking-tight ${
              darkMode ? 'text-neutral-200' : 'text-neutral-800'
            }`}>
              {personalInfo.headline}
            </p>

            {/* Introduction paragraph with WCAG AA compliant contrast */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              darkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              {personalInfo.intro}
            </p>

            {/* Primary & Secondary Buttons with enhanced hover micro-interactions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold bg-electric hover:bg-electric-hover text-white transition-all duration-200 shadow-md hover:shadow-blue-glow transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              >
                <span>Explore My Work</span>
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Clement_Palmer_CV.pdf"
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold border transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-electric ${
                  darkMode
                    ? 'border-panel-border bg-panel/80 text-white hover:bg-panel hover:border-neutral-500'
                    : 'border-light-border bg-white text-charcoal hover:bg-light-subtle hover:border-neutral-400 shadow-xs'
                }`}
              >
                <Download size={16} className="text-electric" />
                <span>Download My CV</span>
              </a>
            </div>

            {/* Verified Links & Technical Credential Badges */}
            <div className="pt-4 border-t border-panel-border/60 dark:border-panel-border/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg border transition-all transform hover:-translate-y-0.5 ${
                    darkMode
                      ? 'border-panel-border bg-panel text-neutral-300 hover:text-white hover:border-neutral-500'
                      : 'border-light-border bg-white text-neutral-700 hover:text-charcoal hover:border-neutral-400 shadow-xs'
                  }`}
                  aria-label="GitHub Profile"
                  title="View GitHub Repositories"
                >
                  <Github size={18} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg border transition-all transform hover:-translate-y-0.5 ${
                    darkMode
                      ? 'border-panel-border bg-panel text-neutral-300 hover:text-white hover:border-neutral-500'
                      : 'border-light-border bg-white text-neutral-700 hover:text-charcoal hover:border-neutral-400 shadow-xs'
                  }`}
                  aria-label="LinkedIn Profile (Kwesi Baffour Palmer)"
                  title="Connect on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`p-2.5 rounded-lg border transition-all transform hover:-translate-y-0.5 ${
                    darkMode
                      ? 'border-panel-border bg-panel text-neutral-300 hover:text-white hover:border-neutral-500'
                      : 'border-light-border bg-white text-neutral-700 hover:text-charcoal hover:border-neutral-400 shadow-xs'
                  }`}
                  aria-label="Send Direct Email"
                  title={`Email ${personalInfo.email}`}
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* Core architectural pillars */}
              <div className={`flex items-center space-x-4 text-xs font-mono ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                <span className="inline-flex items-center space-x-1">
                  <Terminal size={13} className="text-electric" />
                  <span>Django / Python</span>
                </span>
                <span className="inline-flex items-center space-x-1">
                  <Layers size={13} className="text-electric" />
                  <span>React / TS</span>
                </span>
                <span className="inline-flex items-center space-x-1">
                  <ShieldCheck size={13} className="text-electric" />
                  <span>AppSec</span>
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Dominant Suit Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none group">
              
              {/* Architectural Frame Glow */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-b from-electric/25 via-panel-border to-transparent opacity-60 blur-xs transition duration-500 group-hover:opacity-100" />
              
              {/* Corner tech notches */}
              <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-electric z-20" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-electric z-20" />
              <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-electric z-20" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-electric z-20" />

              {/* Main Image Container */}
              <div className={`relative z-10 rounded-xl overflow-hidden border shadow-elevated ${
                darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
              }`}>
                
                {/* Frame Header Bar */}
                <div className={`px-4 py-2 border-b flex items-center justify-between text-[11px] font-mono ${
                  darkMode ? 'bg-charcoal border-panel-border text-neutral-400' : 'bg-light-subtle border-light-border text-neutral-600 font-medium'
                }`}>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="tracking-wider uppercase text-[10px]">CLEMENT_PALMER_PORTRAIT.RAW</span>
                </div>

                {/* Photograph Display: 1:1 Aspect Ratio preserved, dominant visual element */}
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                  <img
                    src={personalInfo.profileImage}
                    alt="Clement Palmer - Full-Stack Developer and Software Engineer in brown suit and white shirt"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.0] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Subtle vignette for contrast integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Identity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-charcoal/90 backdrop-blur-md border border-neutral-700/60 text-white text-left shadow-lg">
                    <p className="text-xs font-semibold tracking-wide text-white flex items-center justify-between">
                      <span>Clement Palmer</span>
                      <span className="text-[10px] font-mono text-electric font-normal">Accra, GH</span>
                    </p>
                    <p className="text-[11px] text-neutral-300 font-mono tracking-tight mt-0.5">
                      Full-Stack & Systems Architecture
                    </p>
                  </div>
                </div>

                {/* Sub-bar architectural annotation */}
                <div className={`px-4 py-2 text-[10px] font-mono border-t flex items-center justify-between ${
                  darkMode ? 'bg-charcoal/60 border-panel-border text-neutral-400' : 'bg-light-subtle border-light-border text-neutral-600'
                }`}>
                  <span>STATUS: READY_FOR_DEPLOYMENT</span>
                  <span className="text-electric font-semibold">SECURE // VERIFIED</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
