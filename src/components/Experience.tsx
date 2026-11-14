import React from 'react';
import { Briefcase, BookOpen, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
            EXPERIENCE
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-charcoal'
          }`}>
            Engineering & Teaching
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${
            darkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            Software development combined with technical pedagogy across educational institutions.
          </p>
          <div className="w-12 h-1 bg-electric mt-3 rounded-full" />
        </div>

        {/* Compact Experience Timeline */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 sm:before:left-6 before:w-0.5 before:bg-panel-border/70">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-14 group">
              
              {/* Timeline Node Icon */}
              <div className="absolute left-0 sm:left-3.5 top-2 w-5 h-5 rounded-full bg-panel border-2 border-electric flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xs">
                {exp.type === 'teaching' ? (
                  <BookOpen size={10} className="text-electric" />
                ) : (
                  <Briefcase size={10} className="text-electric" />
                )}
              </div>

              {/* Compact Card */}
              <div
                className={`p-5 sm:p-6 rounded-xl border transition-all duration-200 hover:border-neutral-500 shadow-xs ${
                  darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <h3 className={`text-lg font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-charcoal'
                    }`}>
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-electric">
                      {exp.organization}
                    </p>
                  </div>

                  <div className={`text-left sm:text-right text-xs font-mono flex items-center space-x-3 sm:space-x-4 ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    <span className="inline-flex items-center space-x-1">
                      <Calendar size={12} className="text-electric" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 text-neutral-500">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${
                  darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {exp.summary}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
