import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Trophy
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Milestones</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Solid foundation in Computer Science fundamentals, mathematics, and high-performance algorithms.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent">
          {portfolioData.education.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={edu.institution}
                className={`relative flex items-center justify-between md:justify-normal ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Marker */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080c14] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/20">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                </div>

                {/* Card Container */}
                <div className="w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0">
                  <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-medium">
                        {edu.period}
                      </span>
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        edu.status === 'Pursuing' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-1 mb-3">
                      <span className="font-semibold text-slate-200">{edu.institution}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Score Highlight Badge */}
                    <div className="inline-flex items-center gap-2 p-2 px-3 rounded-xl bg-slate-900 border border-cyan-500/20 mb-4">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-slate-400">{edu.scoreLabel}:</span>
                      <span className="text-sm font-bold font-mono text-cyan-300">{edu.score}</span>
                    </div>

                    {/* Highlights bullets */}
                    <div className="space-y-1.5 pt-1 border-t border-white/5">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications and Key Achievements Grid */}
        <div className="mt-20 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold font-heading text-white">
              Key Engineering Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioData.certificationsAndHighlights.map((cert) => (
              <div 
                key={cert.title}
                className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 flex items-start gap-3.5 hover:border-cyan-500/30 transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                    {cert.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
