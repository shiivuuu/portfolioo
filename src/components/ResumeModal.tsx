import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'digital'>('digital');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    soundManager.playChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 }
    });
    const link = document.createElement('a');
    link.href = portfolioData.personal.resumePdfUrl;
    link.download = 'Yadav_Shivam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl h-[92vh] glass-panel bg-[#090e18] border border-cyan-500/30 rounded-3xl flex flex-col overflow-hidden shadow-2xl shadow-cyan-500/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-[#0d1525] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white">
                {portfolioData.personal.fullName}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                Official Resume • {portfolioData.personal.title}
              </p>
            </div>
          </div>

          {/* Mode Switcher & Action buttons */}
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-1 text-xs font-mono">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setViewMode('digital');
                }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'digital'
                    ? 'bg-cyan-500 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Digital View
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setViewMode('pdf');
                }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-cyan-500 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-medium transition-all shadow-md shadow-cyan-500/20"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#070b13]">
          {viewMode === 'pdf' ? (
            <div className="w-full h-full min-h-[600px] flex flex-col">
              <iframe
                src={`${portfolioData.personal.resumePdfUrl}#toolbar=1&navpanes=0`}
                className="w-full flex-1 rounded-2xl border border-white/10 bg-slate-900"
                title="Resume PDF"
              />
              <div className="pt-3 text-center">
                <a
                  href={portfolioData.personal.resumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Open PDF in new browser tab</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 text-slate-200">
              {/* Header */}
              <div className="border-b border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {portfolioData.personal.fullName}
                  </h1>
                  <p className="text-sm font-mono text-cyan-400 font-semibold mt-1">
                    {portfolioData.personal.title}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1 justify-center sm:justify-start">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {portfolioData.personal.location}
                  </p>
                </div>

                <div className="text-xs font-mono space-y-1 text-slate-300 text-center sm:text-right">
                  <p className="flex items-center justify-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <a href={`mailto:${portfolioData.personal.email}`} className="hover:underline">{portfolioData.personal.email}</a>
                  </p>
                  <p className="flex items-center justify-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{portfolioData.personal.phone}</span>
                  </p>
                  <p className="text-indigo-300">github.com/shiivuuu</p>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
                  Education
                </h2>

                <div className="space-y-4">
                  {portfolioData.education.map(edu => (
                    <div key={edu.institution} className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <span className="font-bold text-white text-sm">{edu.degree}</span>
                        <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400">
                        <span>{edu.institution} • {edu.location}</span>
                        <span className="font-semibold text-emerald-400">{edu.scoreLabel}: {edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Programming */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
                  Competitive Programming
                </h2>
                <p className="text-xs text-slate-300">
                  <span className="font-bold text-white">630+ problems solved</span> across top coding platforms:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/5 text-xs">
                    <div className="font-bold text-amber-400">LeetCode</div>
                    <div className="text-slate-200">Solved 372 problems</div>
                    <div className="text-[11px] text-slate-400">@Shivam3030</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/5 text-xs">
                    <div className="font-bold text-amber-600">CodeChef</div>
                    <div className="text-slate-200">Rating 1516 • 80 Solved</div>
                    <div className="text-[11px] text-slate-400">@sky2008</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/5 text-xs">
                    <div className="font-bold text-emerald-400">GeeksforGeeks</div>
                    <div className="text-slate-200">Solved 182 problems</div>
                    <div className="text-[11px] text-slate-400">@sky2008</div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
                  Technical Skills
                </h2>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-white">Languages: </span>
                    <span className="text-slate-300">Java, C++, Python, SQL, JavaScript, HTML5/CSS3</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Frameworks & Backend: </span>
                    <span className="text-slate-300">Spring Boot, Spring Security, React, Node.js, Express, REST APIs</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">AI & Machine Learning: </span>
                    <span className="text-slate-300">PyTorch, Hugging Face Transformers, Neural Networks, Document Q&A</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Databases & Cloud: </span>
                    <span className="text-slate-300">MySQL, MongoDB, Git, GitHub, Vercel, Netlify</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Core Competencies: </span>
                    <span className="text-slate-300">Data Structures & Algorithms (DSA), OOP Fundamentals, Multi-Platform System Architecture</span>
                  </div>
                </div>
              </div>

              {/* Flagship Projects */}
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-cyan-500/20 pb-1">
                  Featured Projects
                </h2>

                {portfolioData.projects.map(proj => (
                  <div key={proj.id} className="space-y-2 p-3.5 rounded-2xl bg-slate-800/50 border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                      <span className="text-[11px] font-mono text-cyan-400">{proj.techStack.slice(0, 4).join(', ')}</span>
                    </div>
                    <p className="text-xs text-slate-300">{proj.description}</p>
                    <div className="space-y-1 pt-1">
                      {proj.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
