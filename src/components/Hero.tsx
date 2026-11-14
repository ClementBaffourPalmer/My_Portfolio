import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
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
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Subtle Cinematic Background Video */}
      <HeroBackgroundVideo darkMode={darkMode} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Identity, Headline & Call-to-Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Typewriter Rotating Roles */}
            <div className="flex items-center space-x-2 text-sm sm:text-base font-mono uppercase tracking-widest text-electric font-semibold h-7">
              <span className="text-neutral-500">//</span>
              <Typewriter words={typewriterRoles} className="text-electric font-bold" />
            </div>

            {/* Display Name */}
            <div>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
                darkMode ? 'text-white' : 'text-charcoal'
              }`}>
                {personalInfo.displayName}
              </h1>
              
              <p className={`mt-2 text-xl sm:text-2xl font-semibold tracking-tight ${
                darkMode ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                {personalInfo.headline}
              </p>
            </div>

            {/* Concise 2-Sentence Introduction */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-xl ${
              darkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              {personalInfo.intro}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold bg-electric hover:bg-electric-hover text-white transition-all duration-200 shadow-sm hover:shadow-blue-glow transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
              >
                <span>View Projects</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Clement_Palmer_CV.pdf"
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold border transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-electric ${
                  darkMode
                    ? 'border-panel-border bg-panel text-white hover:border-neutral-500'
                    : 'border-light-border bg-white text-charcoal hover:border-neutral-400 shadow-xs'
                }`}
              >
                <Download size={15} className="text-electric" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Verified Social Channels */}
            <div className="pt-4 flex items-center space-x-3">
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
                title="GitHub"
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
                aria-label="LinkedIn Profile"
                title="LinkedIn"
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
                aria-label="Email Clement Palmer"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* RIGHT: Professional Photograph (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className={`relative rounded-2xl overflow-hidden border shadow-xl ${
                darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
              }`}>
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                  <img
                    src={personalInfo.profileImage}
                    alt="Clement Palmer - Full-Stack Developer & Software Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.0]"
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Subtle dark bottom scrim for clean integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
