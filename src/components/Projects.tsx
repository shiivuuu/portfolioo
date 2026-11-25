import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  Database, 
  ShieldCheck, 
  Smartphone, 
  X, 
  ArrowUpRight,
  Server,
  TerminalSquare
} from 'lucide-react';
import { portfolioData, type Project } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full-Stack', label: 'Full-Stack & Systems' },
    { id: 'AI / ML', label: 'AI & Machine Learning' },
    { id: 'Web', label: 'Web Applications' }
  ];

  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers': return Layers;
      case 'Cpu': return Cpu;
      default: return Code2;
    }
  };

  const handleOpenArchitecture = (project: Project) => {
    soundManager.playPop();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flagship <span className="text-gradient-cyan">Projects</span> & Systems
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real-world systems spanning enterprise Java microservices, native multi-platform 
            client/admin applications, and generative AI document intelligence platforms.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundManager.playClick();
                  setFilter(cat.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = getIcon(project.iconName);
            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-3xl border border-white/10 flex flex-col justify-between overflow-hidden group relative"
              >
                {/* Header Gradient Banner */}
                <div className={`h-2.5 w-full bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Meta info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {project.featured && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    {/* Project Titles */}
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/90 mt-1 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights bullets */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Key Engineering Highlights:
                      </div>
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-lg text-[11px] font-mono bg-slate-900 border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bottom Bar */}
                  <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                    {project.architecture && (
                      <button
                        onClick={() => handleOpenArchitecture(project)}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-mono transition-all hover:bg-cyan-500/10"
                      >
                        <Server className="w-3.5 h-3.5" />
                        <span>System Architecture Breakdown</span>
                      </button>
                    )}

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => soundManager.playClick()}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 font-medium transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code Repo</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => soundManager.playClick()}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 border border-cyan-500/40 text-xs text-cyan-300 font-medium transition-all"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                          <span>Preview Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-3xl glass-panel bg-[#0b1220] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 relative shadow-2xl shadow-cyan-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
                  <TerminalSquare className="w-3 h-3" />
                  <span>Architecture Specification</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-cyan-300 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close architecture breakdown modal"
                className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Architecture Matrix Details */}
            {selectedProject.architecture && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Subsystem Architecture & Technology Choices
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.architecture.backend && (
                    <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                        <Server className="w-4 h-4" />
                        <span>Backend & Microservices</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        {selectedProject.architecture.backend}
                      </p>
                    </div>
                  )}

                  {selectedProject.architecture.database && (
                    <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                        <Database className="w-4 h-4" />
                        <span>Database Persistence</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        {selectedProject.architecture.database}
                      </p>
                    </div>
                  )}

                  {selectedProject.architecture.desktopMobile && (
                    <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                        <Smartphone className="w-4 h-4" />
                        <span>Mobile & Desktop Native</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        {selectedProject.architecture.desktopMobile}
                      </p>
                    </div>
                  )}

                  {selectedProject.architecture.aiMl && (
                    <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                        <Cpu className="w-4 h-4" />
                        <span>AI & Machine Learning Engine</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        {selectedProject.architecture.aiMl}
                      </p>
                    </div>
                  )}

                  {selectedProject.architecture.devops && (
                    <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 sm:col-span-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                        <ShieldCheck className="w-4 h-4" />
                        <span>DevOps, CI/CD & Infrastructure</span>
                      </div>
                      <p className="text-xs text-slate-200">
                        {selectedProject.architecture.devops}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Complete Highlights List */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Full Technical Deliverables & Specifications
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-white/5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {selectedProject.metrics && (
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
                <div className="text-xs font-mono text-cyan-300 font-semibold mb-2">
                  System Benchmarks & Key Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProject.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-lg bg-slate-900/70 border border-white/5 text-[11px] text-slate-300">
                      • {m}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-all"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
