import React, { useState, useRef } from 'react';
import { Github, ArrowUpRight, Lock, Play, Volume2, VolumeX } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  darkMode: boolean;
}

interface VideoCardProps {
  project: Project;
  darkMode: boolean;
  onOpenModal: (project: Project) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ project, darkMode, onOpenModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const handleVideoEnded = () => setPlaying(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 hover:border-neutral-500 overflow-hidden shadow-sm hover:shadow-elevated flex flex-col justify-between ${
        darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
      }`}
    >
      {/* Video Player */}
      <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: '960/570' }}>
        <video
          ref={videoRef}
          src={project.demoVideo}
          poster={project.image}
          onEnded={handleVideoEnded}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          preload="metadata"
          controls={playing}
          playsInline
          className="w-full h-full object-cover"
          aria-label={`${project.title} demo recording`}
        />

        {/* Overlay shown before play */}
        {!playing && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/40"
            onClick={handlePlay}
            role="button"
            aria-label="Play demo video"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
          >
            <div className="w-16 h-16 rounded-full bg-electric/90 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play size={28} className="text-white ml-1" fill="white" />
            </div>
            <span className="mt-3 text-white text-sm font-medium font-mono drop-shadow">
              Watch Demo
            </span>
          </div>
        )}

        {/* Category pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-charcoal/90 text-white border border-neutral-700/80 backdrop-blur-md font-semibold">
            {project.category}
          </span>
        </div>

        {/* Mute toggle — only visible while playing */}
        {playing && (
          <button
            onClick={handleMute}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-charcoal/80 text-white hover:bg-charcoal transition-colors backdrop-blur-sm"
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        )}
      </div>

      {/* Caption */}
      <p className={`text-[11px] font-mono text-center py-1.5 border-b ${
        darkMode ? 'text-neutral-500 border-panel-border/50' : 'text-neutral-500 border-light-border/60'
      }`}>
        Mantra EQ — macOS testing in GarageBand
      </p>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="mb-2">
            <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-charcoal'}`}>
              {project.title}
            </h3>
          </div>
          <p className="text-xs font-mono text-electric font-semibold mb-3">{project.tagline}</p>
          <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {project.description}
          </p>
          {/* Technology Tags */}
          <div className={`flex flex-wrap gap-1.5 pt-3 border-t ${darkMode ? 'border-panel-border/30' : 'border-light-border/60'}`}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                  darkMode
                    ? 'bg-charcoal/70 border-panel-border text-neutral-300'
                    : 'bg-light-subtle border-light-border text-neutral-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action bar */}
        <div className={`mt-5 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
          darkMode ? 'border-panel-border' : 'border-light-border'
        }`}>
          <span className={`inline-flex items-center space-x-1.5 text-xs font-mono ${
            darkMode ? 'text-neutral-400' : 'text-neutral-600 font-medium'
          }`}>
            <Lock size={12} className="text-amber-400" />
            <span>Code on Request</span>
          </span>
          <button
            onClick={() => onOpenModal(project)}
            className={`inline-flex items-center space-x-1 text-xs font-mono transition-colors ${
              darkMode ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-charcoal'
            }`}
          >
            <span>Case Study</span>
            <ArrowUpRight size={13} className="text-electric" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t subtle-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-left mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-electric font-semibold mb-2">
            PROJECTS
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-charcoal'
          }`}>
            Featured Work
          </h2>
          <p className={`mt-2 text-sm sm:text-base max-w-xl ${
            darkMode ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            Practical software projects I have built to solve real problems in booking, accessibility, library management and personal productivity.
          </p>
          <div className="w-12 h-1 bg-electric mt-3 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) =>
            project.demoVideo ? (
              <VideoCard
                key={project.id}
                project={project}
                darkMode={darkMode}
                onOpenModal={setSelectedProject}
              />
            ) : (
              <div
                key={project.id}
                className={`rounded-2xl border transition-all duration-300 hover:border-neutral-500 overflow-hidden shadow-sm hover:shadow-elevated flex flex-col justify-between group ${
                  darkMode ? 'bg-panel border-panel-border' : 'bg-white border-light-border'
                }`}
              >
                <div>
                  {/* Project Image Preview */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-panel-border/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />
                    {/* Category Pill */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-charcoal/90 text-white border border-neutral-700/80 backdrop-blur-md font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className={`text-2xl font-bold tracking-tight ${
                        darkMode ? 'text-white' : 'text-charcoal'
                      }`}>
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs font-mono text-electric font-semibold mb-3">
                      {project.tagline}
                    </p>
                    <p className={`text-sm leading-relaxed mb-6 ${
                      darkMode ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                      {project.description}
                    </p>
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-panel-border/30">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                            darkMode
                              ? 'bg-charcoal/70 border-panel-border text-neutral-300'
                              : 'bg-light-subtle border-light-border text-neutral-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links Bar */}
                <div className={`px-6 py-4 border-t flex items-center justify-between text-xs font-semibold ${
                  darkMode ? 'bg-charcoal/40 border-panel-border' : 'bg-light-subtle/50 border-light-border'
                }`}>
                  <div>
                    {project.codeAvailableOnRequest ? (
                      <span className={`inline-flex items-center space-x-1.5 text-xs font-mono ${
                        darkMode ? 'text-neutral-400' : 'text-neutral-600 font-medium'
                      }`}>
                        <Lock size={12} className="text-amber-400" />
                        <span>Code on Request</span>
                      </span>
                    ) : (
                      project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-electric hover:underline font-mono"
                        >
                          <Github size={14} />
                          <span>Repository</span>
                        </a>
                      )
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`inline-flex items-center space-x-1 text-xs font-mono transition-colors ${
                      darkMode ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-charcoal'
                    }`}
                  >
                    <span>Case Study</span>
                    <ArrowUpRight size={13} className="text-electric" />
                  </button>
                </div>
              </div>
            )
          )}
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
