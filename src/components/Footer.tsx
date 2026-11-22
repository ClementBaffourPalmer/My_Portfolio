import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t transition-colors ${
        darkMode ? 'bg-charcoal border-panel-border text-neutral-400' : 'bg-white border-light-border text-neutral-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Identity & Mission (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-panel border border-panel-border flex items-center justify-center font-bold text-sm tracking-tight shadow-xs">
                <span className={darkMode ? 'text-white' : 'text-charcoal'}>C</span>
                <span className="text-electric">P</span>
                <span className="text-electric text-xs -ml-0.5">.</span>
              </div>
              <span className={`text-base font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-charcoal'
              }`}>
                {personalInfo.displayName}
              </span>
            </div>

            <p className={`text-xs max-w-sm leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600 font-medium'
            }`}>
              Full-Stack Developer, Software Engineer & Aspiring Cybersecurity Specialist. Documenting thoughts, technology discoveries, and growth in the Journal.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border transition-all transform hover:scale-105 ${
                  darkMode ? 'border-panel-border hover:text-electric' : 'border-light-border text-neutral-700 hover:text-electric shadow-xs'
                }`}
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border transition-all transform hover:scale-105 ${
                  darkMode ? 'border-panel-border hover:text-electric' : 'border-light-border text-neutral-700 hover:text-electric shadow-xs'
                }`}
                aria-label="LinkedIn Profile (Kwesi Baffour Palmer)"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2 rounded-lg border transition-all transform hover:scale-105 ${
                  darkMode ? 'border-panel-border hover:text-electric' : 'border-light-border text-neutral-700 hover:text-electric shadow-xs'
                }`}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className={`text-xs font-mono uppercase tracking-wider font-semibold ${
              darkMode ? 'text-white' : 'text-charcoal'
            }`}>
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>
                <Link to="/" className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-electric' : 'text-neutral-700 hover:text-electric font-medium'}`}>Home</Link>
              </li>
              <li>
                <Link to="/#about" className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-electric' : 'text-neutral-700 hover:text-electric font-medium'}`}>About</Link>
              </li>
              <li>
                <Link to="/#projects" className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-electric' : 'text-neutral-700 hover:text-electric font-medium'}`}>Projects</Link>
              </li>
              <li>
                <Link to="/#experience" className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-electric' : 'text-neutral-700 hover:text-electric font-medium'}`}>Experience</Link>
              </li>
              <li>
                <Link to="/blog" className="text-electric font-semibold hover:underline font-mono">Journal</Link>
              </li>
              <li>
                <Link to="/#contact" className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-electric' : 'text-neutral-700 hover:text-electric font-medium'}`}>Contact</Link>
              </li>
              <li>
                <a href={personalInfo.cvPath} download className={`font-mono transition-colors ${darkMode ? 'text-neutral-400 hover:text-electric' : 'text-neutral-700 hover:text-electric font-medium'}`}>CV (PDF)</a>
              </li>
            </ul>
          </div>

          {/* Back to Top (3 Cols) */}
          <div className="md:col-span-3 md:text-right">
            <button
              onClick={scrollToTop}
              className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-mono border transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
                darkMode
                  ? 'border-panel-border bg-panel text-white hover:border-neutral-500'
                  : 'border-light-border bg-white text-charcoal hover:border-neutral-400 shadow-xs'
              }`}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="text-electric" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`mt-10 pt-5 border-t border-panel-border/40 text-center text-[11px] font-mono ${
          darkMode ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
