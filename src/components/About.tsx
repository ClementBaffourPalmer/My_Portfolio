import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
            ABOUT
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-charcoal'
          }`}>
            Background & Focus
          </h2>
          <div className="w-12 h-1 bg-electric mt-3 rounded-full" />
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Portrait Image (4 Cols) */}
          <div className="lg:col-span-4 max-w-sm mx-auto lg:mx-0 w-full">
            <div className={`rounded-2xl overflow-hidden border shadow-md p-2.5 transition-transform duration-300 hover:-translate-y-0.5 ${
              darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
            }`}>
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-800">
                <img
                  src={personalInfo.headshotImage}
                  alt="Clement Palmer - Software Developer"
                  className="w-full h-full object-cover object-center filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Two Short Paragraphs & Academic Credentials (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p
                  key={index}
                  className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Academic Credentials Grid */}
            <div className={`pt-6 border-t ${darkMode ? 'border-panel-border/60' : 'border-light-border/80'}`}>
              <p className={`text-[11px] font-mono uppercase tracking-wider mb-3 ${
                darkMode ? 'text-neutral-400' : 'text-neutral-500 font-semibold'
              }`}>
                Academic Background
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {educationData.map((edu) => (
                  <div
                    key={edu.institution}
                    className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-200 hover:border-neutral-500 ${
                      darkMode ? 'bg-panel/50 border-panel-border' : 'bg-white border-light-border shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-electric/10 text-electric shrink-0">
                          <GraduationCap size={16} />
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                          edu.period === 'In Progress'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : darkMode
                            ? 'bg-charcoal border-panel-border text-neutral-400'
                            : 'bg-light-subtle border-light-border text-neutral-600'
                        }`}>
                          {edu.period}
                        </span>
                      </div>

                      <h3 className={`text-sm font-bold leading-snug mb-1 ${
                        darkMode ? 'text-white' : 'text-charcoal'
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-xs font-mono mb-3 ${
                        darkMode ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 text-[11px] font-mono text-neutral-500 pt-2 border-t border-panel-border/30">
                      <MapPin size={11} className="text-electric shrink-0" />
                      <span className="truncate">{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
