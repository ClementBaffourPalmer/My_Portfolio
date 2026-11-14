import React from 'react';
import { ShieldAlert, KeyRound, Lock, SearchCode, ShieldCheck, Terminal, AlertTriangle } from 'lucide-react';
import { cybersecurityFocus } from '../data/portfolioData';

interface CybersecurityProps {
  darkMode: boolean;
}

export const Cybersecurity: React.FC<CybersecurityProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-electric" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-electric" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-electric" />;
      case 'SearchCode':
        return <SearchCode className="w-5 h-5 text-electric" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-electric" />;
    }
  };

  return (
    <section id="security" className="py-20 lg:py-28 relative border-t subtle-border overflow-hidden">
      
      {/* Subtle background radar/grid element */}
      <div className="absolute right-10 top-20 w-80 h-80 rounded-full border border-electric/10 pointer-events-none" />
      <div className="absolute right-24 top-36 w-52 h-52 rounded-full border border-electric/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase text-electric bg-electric/10 mb-3 border border-electric/20">
            <ShieldCheck size={13} />
            <span>05 // CYBERSECURITY & DEFENSIVE ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-charcoal'}>
              Cybersecurity & Secure Software Engineering
            </span>
          </h2>
          <p className={`mt-3 text-base max-w-3xl leading-relaxed ${
            darkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            Software engineering is incomplete without defensibility. I actively integrate defensive security principles, OWASP guidelines, and secure API architecture directly into my development lifecycle — bridging the gap between functional code and robust protection.
          </p>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Security Areas Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cybersecurityFocus.map((area) => (
            <div
              key={area.title}
              className={`p-6 rounded-xl border transition-all duration-300 hover:border-neutral-500 flex flex-col justify-between shadow-xs hover:shadow-elevated transform hover:-translate-y-0.5 ${
                darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-electric/10">
                      {getIcon(area.icon)}
                    </div>
                    <div>
                      <h3 className={`text-base font-bold tracking-tight ${
                        darkMode ? 'text-white' : 'text-charcoal'
                      }`}>
                        {area.title}
                      </h3>
                      <p className="text-xs font-mono text-electric font-semibold">
                        {area.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className={`text-xs mb-5 leading-relaxed ${
                  darkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {area.description}
                </p>

                {/* Practical Focus Points */}
                <ul className="space-y-2">
                  {area.focusPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric mt-1.5 shrink-0" />
                      <span className={darkMode ? 'text-neutral-300' : 'text-neutral-800 font-medium'}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mt-6 pt-4 border-t border-panel-border/40 text-[10px] font-mono flex items-center justify-between ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                <span>APPLICATION VECTORS</span>
                <span className="text-electric font-semibold">ACTIVE LEARNING & AUDIT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Specialization Notice Card */}
        <div className={`p-5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
          darkMode ? 'bg-panel/40 border-panel-border' : 'bg-light-subtle border-light-border'
        }`}>
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
              <AlertTriangle size={18} />
            </div>
            <div>
              <h4 className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                darkMode ? 'text-white' : 'text-charcoal'
              }`}>
                Engineering Transparency & Continuing Specialization
              </h4>
              <p className={`text-xs mt-1 leading-relaxed max-w-2xl ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                I do not market myself as a veteran pen-tester with unearned credentials. Instead, I position myself as a disciplined software engineer committed to rigorous, security-first system development and actively pursuing advanced knowledge in web and network application security.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center space-x-2 text-xs font-mono text-electric font-semibold">
            <Terminal size={14} />
            <span>DEV_SEC_OPS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
