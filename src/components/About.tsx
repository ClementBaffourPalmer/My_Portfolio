import React from 'react';
import { GraduationCap, MapPin, CheckCircle2, ShieldCheck, Code, BookOpen, Users } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const education = educationData[0];

  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-electric" />,
      title: "Practical Systems Builder",
      description: "Developing robust software from relational database models and REST APIs to accessible, modern user interfaces."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-electric" />,
      title: "Security-Minded Engineering",
      description: "Integrating OWASP Top 10 defenses, token-based authorization schemas, and secure data handling into core workflows."
    },
    {
      icon: <Users className="w-5 h-5 text-electric" />,
      title: "Technical Pedagogy & Mentorship",
      description: "Experience delivering structured ICT curriculum, articulating complex computational ideas, and mentoring aspiring technologists."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-electric" />,
      title: "Continuous Technical Growth",
      description: "Committed to expanding deep expertise across distributed backend architectures, application security, and systems engineering."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
            01 // BACKGROUND & PHILOSOPHY
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-charcoal'}>
              About Clement Palmer
            </span>
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Two-Column Editorial Composition */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Secondary Studio Headshot & Academic Credentials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Editorial Portrait Frame */}
            <div className={`rounded-xl overflow-hidden border shadow-md p-3 ${
              darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
            }`}>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-neutral-800">
                <img
                  src={personalInfo.headshotImage}
                  alt="Clement Palmer - Professional studio close-up headshot in white shirt"
                  className="w-full h-full object-cover object-center filter contrast-[1.02]"
                  loading="lazy"
                />
                
                {/* Subtle Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-charcoal/90 backdrop-blur-md border border-neutral-700/60 text-white flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold">{personalInfo.fullName}</p>
                    <p className="text-[11px] text-muted font-mono">Software Developer & Educator</p>
                  </div>
                  <div className="flex items-center space-x-1 text-electric font-mono text-[11px]">
                    <MapPin size={12} />
                    <span>Ghana</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Background Card */}
            <div className={`p-6 rounded-xl border ${
              darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-electric/10 text-electric">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted font-mono">
                    Academic Background
                  </h3>
                  <p className={`text-base font-bold ${darkMode ? 'text-white' : 'text-charcoal'}`}>
                    {education.institution}
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-electric mb-2">
                {education.degree}
              </p>
              <p className="text-xs text-muted leading-relaxed mb-4">
                {education.description}
              </p>
              <div className="pt-3 border-t border-panel-border/50">
                <p className="text-[11px] font-mono uppercase text-muted mb-2 tracking-wider">
                  Core Foundations:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className={`text-[11px] px-2.5 py-1 rounded-md border font-mono ${
                        darkMode
                          ? 'bg-charcoal border-panel-border text-neutral-300'
                          : 'bg-light-subtle border-light-border text-neutral-700'
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Professional Narrative & Capability Highlights (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Written Narrative */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted dark:text-muted">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-neutral-300 dark:text-neutral-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competency Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl border transition-all duration-200 hover:border-electric/50 ${
                    darkMode ? 'bg-panel/70 border-panel-border' : 'bg-white border-light-border'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 mb-2">
                    {item.icon}
                    <h4 className={`text-sm font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-charcoal'
                    }`}>
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-muted dark:text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Engineering Principles List */}
            <div className={`p-6 rounded-xl border ${
              darkMode ? 'bg-panel/40 border-panel-border' : 'bg-light-subtle/80 border-light-border'
            }`}>
              <h4 className="text-xs font-mono uppercase tracking-wider text-electric font-semibold mb-3">
                Core Engineering Commitments
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-xs">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 size={16} className="text-electric shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                    Transactional integrity & clean database normalization
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 size={16} className="text-electric shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                    Type-safe, testable APIs with OpenAPI / Swagger specs
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 size={16} className="text-electric shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                    Accessible, low-friction frontend experiences
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 size={16} className="text-electric shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                    Defensive software practices & OWASP vulnerability prevention
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
