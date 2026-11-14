import React from 'react';
import { Briefcase, BookOpen, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
            04 // CAREER TRAJECTORY
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-charcoal'}>
              Professional Experience & Practice
            </span>
          </h2>
          <p className="mt-3 text-base text-muted max-w-2xl">
            A track record combining rigorous technical education, classroom pedagogy, and hands-on independent software engineering.
          </p>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-8 before:w-0.5 before:bg-panel-border">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-16 group">
              
              {/* Timeline Node Icon */}
              <div className="absolute left-0 sm:left-5 top-1.5 w-6 h-6 rounded-full bg-panel border-2 border-electric flex items-center justify-center transform -translate-x-1/2 z-10 shadow-sm">
                {exp.type === 'teaching' ? (
                  <BookOpen size={11} className="text-electric" />
                ) : (
                  <Briefcase size={11} className="text-electric" />
                )}
              </div>

              {/* Experience Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 hover:border-neutral-500 shadow-sm ${
                  darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-electric/10 text-electric border border-electric/20 font-semibold inline-block mb-1">
                      {exp.type === 'teaching' ? 'Technical Pedagogy' : 'Systems Engineering'}
                    </span>
                    <h3 className={`text-xl font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-charcoal'
                    }`}>
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-electric">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="text-left sm:text-right text-xs font-mono text-muted space-y-1">
                    <div className="flex items-center sm:justify-end space-x-1">
                      <Calendar size={13} className="text-electric" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end space-x-1">
                      <MapPin size={13} className="text-neutral-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 dark:text-neutral-300 leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs">
                      <CheckCircle2 size={14} className="text-electric mt-0.5 shrink-0" />
                      <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills Gained Tags */}
                <div className="pt-4 border-t border-panel-border/50 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono uppercase text-muted mr-2">
                    Key Competencies:
                  </span>
                  {exp.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[11px] px-2.5 py-1 rounded-md border font-mono ${
                        darkMode
                          ? 'bg-charcoal border-panel-border text-neutral-300'
                          : 'bg-light-subtle border-light-border text-neutral-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
