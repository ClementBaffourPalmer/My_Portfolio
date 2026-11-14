import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const education = educationData[0];

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

          {/* RIGHT: Two Short Paragraphs & Concise Credential (8 Cols) */}
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

            {/* Academic Credential Capsule */}
            <div className={`pt-6 border-t ${darkMode ? 'border-panel-border/60' : 'border-light-border/80'}`}>
              <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                darkMode ? 'bg-panel/50 border-panel-border' : 'bg-white border-light-border shadow-xs'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-electric/10 text-electric shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-charcoal'}`}>
                      {education.degree}
                    </h3>
                    <p className={`text-xs font-mono ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {education.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-mono text-neutral-500 pl-11 sm:pl-0">
                  <MapPin size={13} className="text-electric" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
