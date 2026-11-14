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
        <div className="text-left mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
            SKILLS
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-charcoal'
          }`}>
            Technical Capabilities
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${
            darkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            Technologies and tools applied across practical applications, backend architectures, and database design.
          </p>
          <div className="w-12 h-1 bg-electric mt-3 rounded-full" />
        </div>

        {/* 5-Category Clean Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className={`p-5 rounded-xl border transition-all duration-200 hover:border-neutral-500 flex flex-col justify-between shadow-xs ${
                darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-electric/10">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className={`text-base font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-charcoal'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs font-mono px-2.5 py-1 rounded-md border font-medium ${
                        darkMode
                          ? 'bg-charcoal border-panel-border text-neutral-200'
                          : 'bg-light-subtle border-light-border text-neutral-800'
                      }`}
                    >
                      {skill.name}
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
