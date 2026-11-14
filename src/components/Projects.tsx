import React, { useState } from 'react';
import { Github, ArrowUpRight, FileText, CheckCircle2, Lock } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'Full-stack Web Application',
    'Accessible Application',
    'Academic Software Project',
    'Python Application / Desktop Utility',
    'Python / Console-Based Application',
    'Educational Platform'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const getCleanCategoryName = (cat: string) => {
    return cat
      .replace(' Application / Desktop Utility', ' Desktop Utility')
      .replace(' / Console-Based Application', ' CLI')
      .replace(' Application', '')
      .replace(' Project', '');
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
              03 // SELECTED WORK
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              <span className={darkMode ? 'text-white' : 'text-charcoal'}>
                Featured Software Systems
              </span>
            </h2>
            <p className={`mt-3 text-base max-w-2xl leading-relaxed ${
              darkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              Real codebases addressing genuine operational needs. Featuring full-stack service marketplaces, accessible task tools, biometric computer vision attendance systems, and Python desktop & CLI utilities.
            </p>
            <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-electric text-white shadow-xs font-semibold'
                    : darkMode
                    ? 'bg-panel border border-panel-border text-neutral-300 hover:text-white hover:border-neutral-500'
                    : 'bg-light-subtle border border-light-border text-neutral-700 hover:text-charcoal font-medium'
                }`}
              >
                {cat === 'All' ? 'All Systems' : getCleanCategoryName(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 hover:border-neutral-500 overflow-hidden shadow-sm hover:shadow-elevated transform hover:-translate-y-0.5 ${
                darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual / Architectural Mockup Container (5 Cols) */}
                <div className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r ${
                  darkMode ? 'bg-charcoal/50 border-panel-border' : 'bg-light-subtle/50 border-light-border'
                }`}>
                  <div>
                    {/* Badge & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-electric/10 text-electric border border-electric/20 font-semibold">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-neutral-600/50 text-neutral-400">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <h3 className={`text-2xl font-bold tracking-tight mb-2 ${
                      darkMode ? 'text-white' : 'text-charcoal'
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-electric mb-6 font-semibold">
                      {project.tagline}
                    </p>

                    {/* Architectural Blueprint Box */}
                    <div className={`p-4 rounded-xl border text-xs font-mono space-y-2 mb-6 ${
                      darkMode ? 'bg-charcoal border-panel-border text-neutral-300' : 'bg-white border-light-border text-neutral-700 shadow-xs'
                    }`}>
                      <div className="flex items-center justify-between text-[11px] text-muted border-b border-panel-border/50 pb-1.5">
                        <span>SYSTEM ARCHITECTURE</span>
                        <span className="text-electric">MODULAR</span>
                      </div>
                      <p className={`text-[11px] leading-relaxed font-sans ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-700 font-medium'
                      }`}>
                        {project.architecture.overview}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet Summary */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs">
                        <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700 font-medium'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Narrative Details, Tech Stack & Action Links (7 Cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                      {project.description}
                    </p>

                    {/* Challenges Snapshot */}
                    <div className={`p-4 rounded-xl border text-xs ${
                      darkMode ? 'bg-charcoal/40 border-panel-border' : 'bg-light-subtle border-light-border'
                    }`}>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-electric font-semibold block mb-1">
                        Primary Engineering Challenge:
                      </span>
                      <p className={`text-xs leading-relaxed ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-800'
                      }`}>
                        {project.challenges[0]}
                      </p>
                    </div>

                    {/* Technology Stack Tags */}
                    <div>
                      <p className={`text-[11px] font-mono uppercase tracking-wider mb-2 font-semibold ${
                        darkMode ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        Core Technologies:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 rounded-md text-xs font-mono border ${
                              darkMode
                                ? 'bg-charcoal border-panel-border text-neutral-300'
                                : 'bg-light-subtle border-light-border text-neutral-800 font-medium'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link Toolbar */}
                  <div className="pt-6 border-t border-panel-border/50 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold bg-electric hover:bg-electric-hover text-white transition-all shadow-xs hover:shadow-blue-glow transform hover:-translate-y-0.5"
                    >
                      <FileText size={14} />
                      <span>View Architecture & Case Study</span>
                    </button>

                    <div className="flex items-center space-x-3">
                      {project.codeAvailableOnRequest && (
                        <span className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border ${
                          darkMode
                            ? 'border-panel-border bg-charcoal text-neutral-300'
                            : 'border-light-border bg-white text-neutral-700 shadow-xs'
                        }`}>
                          <Lock size={12} className="text-electric" />
                          <span>Code on Request</span>
                        </span>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all transform hover:-translate-y-0.5 ${
                            darkMode
                              ? 'border-panel-border bg-charcoal text-neutral-300 hover:text-white hover:border-neutral-500'
                              : 'border-light-border bg-white text-neutral-700 hover:text-charcoal hover:border-neutral-400 shadow-xs'
                          }`}
                        >
                          <Github size={14} />
                          <span>Code Repository</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-electric hover:underline"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
};
