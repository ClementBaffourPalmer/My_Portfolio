import React from 'react';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-electric" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-electric" />;
      case 'Server':
        return <Server className="w-5 h-5 text-electric" />;
      case 'Database':
        return <Database className="w-5 h-5 text-electric" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-electric" />;
      default:
        return <Code2 className="w-5 h-5 text-electric" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
            02 // TECHNICAL ARSENAL
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-charcoal'}>
              Core Competencies & Tooling
            </span>
          </h2>
          <p className={`mt-3 text-base max-w-2xl leading-relaxed ${
            darkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            A comprehensive, verified inventory of technologies applied across production codebases, academic systems, and architectural projects. No arbitrary percentages — just proven development tools and frameworks.
          </p>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl border transition-all duration-300 hover:border-neutral-500 flex flex-col justify-between shadow-xs hover:shadow-elevated transform hover:-translate-y-1 ${
                darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
              } ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-electric/10">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className={`text-base font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-charcoal'
                    }`}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className={`text-xs mb-6 leading-relaxed ${
                  darkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {category.description}
                </p>

                {/* Skills Chips / Grid */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-2.5 rounded-lg border transition-colors flex items-center justify-between ${
                        darkMode
                          ? 'bg-charcoal/70 border-panel-border hover:border-neutral-600'
                          : 'bg-light-subtle/80 border-light-border hover:border-neutral-300'
                      }`}
                    >
                      <span className={`text-xs font-semibold ${
                        darkMode ? 'text-neutral-200' : 'text-neutral-900'
                      }`}>
                        {skill.name}
                      </span>
                      {skill.context && (
                        <span className={`text-[10px] font-mono tracking-tight max-w-[55%] text-right truncate ${
                          darkMode ? 'text-neutral-400' : 'text-neutral-600 font-medium'
                        }`}>
                          {skill.context}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className={`pt-4 mt-6 border-t border-panel-border/40 text-[10px] font-mono flex items-center justify-between ${
                darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                <span>VERIFIED STACK</span>
                <span className="text-electric font-semibold">{category.skills.length} MODULES</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
