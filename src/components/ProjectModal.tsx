import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Layers, ShieldCheck, Database, Server, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl z-10 transition-all ${darkMode ? 'bg-charcoal border-panel-border text-white' : 'bg-white border-light-border text-charcoal'
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Sticky Header */}
        <div
          className={`sticky top-0 z-20 px-6 py-4 border-b flex items-center justify-between backdrop-blur-md ${darkMode ? 'bg-charcoal/90 border-panel-border' : 'bg-white/90 border-light-border'
            }`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-electric/10 text-electric border border-electric/20 font-semibold">
              {project.category}
            </span>
              <span className={`text-xs font-mono ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                CASE STUDY // ARCHITECTURAL DOSSIER
              </span>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg border transition-colors ${darkMode
                  ? 'border-panel-border bg-panel text-neutral-300 hover:text-white'
                  : 'border-light-border bg-light-subtle text-neutral-600 hover:text-charcoal'
            }`}
            aria-label="Close case study dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">

          {/* Title and Tagline */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {project.title}
              </h2>

              <div className="flex items-center space-x-3">
                {project.codeAvailableOnRequest ? (
                  <span
                    className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                      darkMode
                        ? 'border-panel-border bg-panel text-neutral-300'
                        : 'border-light-border bg-light-subtle text-neutral-700'
                    }`}
                  >
                    <span>Code Available on Request</span>
                  </span>
              ) : (
              <>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-electric text-white hover:bg-electric-hover transition-colors"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${darkMode ? 'border-panel-border bg-panel text-white' : 'border-light-border bg-light-subtle text-charcoal'
                      }`}
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </>
                )}
            </div>
          </div>

          <p className="text-base font-medium text-electric">
            {project.tagline}
          </p>
        </div>

        {/* Deep Architectural Summary */}
        <div className={`p-5 rounded-xl border ${darkMode ? 'bg-panel/70 border-panel-border' : 'bg-light-subtle/80 border-light-border'
          }`}>
            <h3 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
              System Purpose & Architecture Overview
            </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                {project.longDescription}
              </p>
            </div>

            {/* Architectural Breakdown Grid */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-electric font-semibold mb-4">
                Detailed Architecture Breakdown
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.architecture.frontend && (
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-panel/40 border-panel-border' : 'bg-white border-light-border'
                    }`}>
                    <div className="flex items-center space-x-2 text-xs font-bold text-electric mb-1.5">
                      <Layers size={14} />
                      <span>Frontend Layer</span>
                    </div>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                        {project.architecture.frontend}
                      </p>
                  </div>
                )}

                {project.architecture.backend && (
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-panel/40 border-panel-border' : 'bg-white border-light-border'
                    }`}>
                    <div className="flex items-center space-x-2 text-xs font-bold text-electric mb-1.5">
                      <Server size={14} />
                      <span>Backend & API Architecture</span>
                    </div>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                        {project.architecture.backend}
                      </p>
                  </div>
                )}

                {project.architecture.database && (
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-panel/40 border-panel-border' : 'bg-white border-light-border'
                    }`}>
                    <div className="flex items-center space-x-2 text-xs font-bold text-electric mb-1.5">
                      <Database size={14} />
                      <span>Database & Schema Design</span>
                    </div>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                        {project.architecture.database}
                      </p>
                  </div>
                )}

                {project.architecture.security && (
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-panel/40 border-panel-border' : 'bg-white border-light-border'
                    }`}>
                    <div className="flex items-center space-x-2 text-xs font-bold text-electric mb-1.5">
                      <ShieldCheck size={14} />
                      <span>Security & Defensibility</span>
                    </div>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                        {project.architecture.security}
                      </p>
                  </div>
                )}
              </div>
            </div>

            {/* Engineering Challenges Solved */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-electric font-semibold mb-3">
                Key Engineering Challenges Addressed
              </h3>
              <ul className="space-y-2.5">
                {project.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className={`p-3 rounded-lg border text-xs flex items-start space-x-2.5 ${darkMode ? 'bg-panel/30 border-panel-border text-neutral-300' : 'bg-light-subtle/50 border-light-border text-neutral-700'
                      }`}
                  >
                    <AlertCircle size={15} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capabilities & Highlights */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-electric font-semibold mb-3">
                System Highlights & Core Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center space-x-2 text-xs ${darkMode ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                  >
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Chips */}
            <div className="pt-4 border-t border-panel-border/50">
                <h3 className={`text-xs font-mono uppercase tracking-wider font-semibold mb-3 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                  Applied Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono border ${darkMode ? 'bg-charcoal border-panel-border text-neutral-300' : 'bg-light-subtle border-light-border text-neutral-700'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
            </div>

        </div>

        {/* Modal Footer */}
        <div
          className={`px-6 py-4 border-t flex items-center justify-between text-xs font-mono ${darkMode ? 'bg-charcoal/90 border-panel-border text-neutral-400' : 'bg-white/90 border-light-border text-neutral-600'
            }`}
        >
          <span>CLEMENT PALMER // SOFTWARE DOSSIER</span>
          <button
            onClick={onClose}
            className="hover:text-electric transition-colors underline underline-offset-4"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
