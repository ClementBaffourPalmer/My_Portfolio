import React from 'react';
import { Music, Activity, ShieldAlert, Sparkles } from 'lucide-react';
import { personalInterests } from '../data/portfolioData';

interface PersonalInterestsProps {
  darkMode: boolean;
}

export const PersonalInterests: React.FC<PersonalInterestsProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Music':
        return <Music className="w-5 h-5 text-electric" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-electric" />;
    }
  };

  return (
    <section id="interests" className="py-20 lg:py-28 relative border-t subtle-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase text-electric bg-electric/10 mb-3 border border-electric/20">
            <Sparkles size={13} />
            <span>06 // OUTSIDE THE TERMINAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-charcoal'}>
              Beyond Technology: Personal Dimensions
            </span>
          </h2>
            <p className={`mt-3 text-base max-w-2xl leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
              Software engineering defines my technical craft, but creative musicianship, physical conditioning, and an insatiable curiosity about security anchor my perspective, mental stamina, and creative problem-solving.
            </p>
            <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Interests Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {personalInterests.map((interest) => (
            <div
              key={interest.title}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:border-neutral-500 flex flex-col justify-between group shadow-sm hover:shadow-elevated transform hover:-translate-y-1 ${darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
                }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-electric/10 transition-transform group-hover:scale-110">
                    {getIcon(interest.iconName)}
                  </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${darkMode ? 'text-neutral-400 border-panel-border/50' : 'text-neutral-600 border-light-border'
                      }`}>
                      {interest.category}
                    </span>
                </div>

                <h3 className={`text-xl font-bold tracking-tight mb-3 ${darkMode ? 'text-white' : 'text-charcoal'
                  }`}>
                  {interest.title}
                </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                    {interest.description}
                  </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-panel-border/40">
                <div className="flex flex-wrap gap-1.5">
                  {interest.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${darkMode
                          ? 'bg-charcoal border-panel-border text-neutral-300'
                          : 'bg-light-subtle border-light-border text-neutral-700'
                        }`}
                    >
                      {tag}
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
