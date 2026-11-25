import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  ExternalLink, 
  MapPin, 
  ShieldCheck, 
  Code2, 
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % portfolioData.personal.subtitles.length);
        setFade(true);
      }, 250);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    soundManager.playChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    const link = document.createElement('a');
    link.href = portfolioData.personal.resumePdfUrl;
    link.download = 'Shivam_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient accent glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-500/30 text-xs text-cyan-300 shadow-lg shadow-cyan-500/10 animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono font-medium">
              Parul University B.Tech CSE • CGPA: 8.32
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" /> Surat / Vadodara, India
            </span>
          </div>

          {/* Main Title & Rotating Subtitles */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-white block">Hello, I'm</span>
              <span className="text-gradient-cyan block mt-1">
                {portfolioData.personal.preferredName}
              </span>
            </h1>

            {/* Official Name Sub-caption */}
            <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wide">
              Official: <span className="text-slate-200">{portfolioData.personal.fullName}</span> • Handle: <span className="text-cyan-400 font-semibold">@shiivuuu</span>
            </p>

            {/* Animated Rotating Role Carousel */}
            <div className="h-10 sm:h-12 flex items-center justify-center overflow-hidden">
              <div 
                className={`transition-all duration-300 flex items-center gap-2 text-lg sm:text-2xl font-mono font-semibold text-slate-200 ${
                  fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                <span className="text-cyan-400">&gt;</span>
                <span className="border-b-2 border-cyan-400 pb-0.5">
                  {portfolioData.personal.subtitles[roleIndex]}
                </span>
                <span className="w-2 h-5 bg-cyan-400 inline-block animate-pulse ml-0.5" />
              </div>
            </div>
          </div>

          {/* Value Proposition Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Architecting robust <span className="text-white font-medium">Java Spring Boot</span> microservices, 
            multi-platform ecosystems (Android Native + Windows), and intelligent 
            <span className="text-cyan-300 font-medium"> PyTorch AI models</span>. 
            Backed by <span className="text-white font-semibold">630+ DSA problems solved</span> across LeetCode, CodeChef, and GeeksforGeeks.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              onClick={() => soundManager.playClick()}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel glass-panel-hover border-white/15 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => {
                soundManager.playPop();
                onOpenResume();
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel glass-panel-hover border-indigo-500/30 text-indigo-300 hover:text-indigo-200 font-medium text-sm transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 text-indigo-400" />
              <span>Preview PDF</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                onOpenTerminal();
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass-panel glass-panel-hover border-emerald-500/30 text-emerald-300 hover:text-emerald-200 font-mono text-sm transition-all duration-300"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Launch Terminal</span>
            </button>
          </div>

          {/* Social Proof & Quick Connect Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <a
              href={portfolioData.personal.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>github/shiivuuu</span>
            </a>

            <a
              href={portfolioData.personal.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 hover:border-blue-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={portfolioData.personal.socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-amber-500/20 hover:border-amber-500/50 text-xs font-mono text-amber-300 hover:text-amber-200 transition-all"
            >
              <span className="font-bold text-amber-400">LC:</span>
              <span>372 Solved</span>
            </a>

            <a
              href={portfolioData.personal.socialLinks.codechef}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-amber-800/30 hover:border-amber-700/60 text-xs font-mono text-amber-400 hover:text-amber-300 transition-all"
            >
              <span className="font-bold">CC:</span>
              <span>1516 Rating</span>
            </a>

            <a
              href={portfolioData.personal.socialLinks.geeksforgeeks}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundManager.playClick()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-emerald-500/20 hover:border-emerald-500/50 text-xs font-mono text-emerald-300 hover:text-emerald-200 transition-all"
            >
              <span className="font-bold text-emerald-400">GFG:</span>
              <span>182 Solved</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {portfolioData.stats.map((stat, i) => (
              <div 
                key={i}
                className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl text-left relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${stat.color}`} />
                <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Core Highlights Ribbon */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-white">Full-Stack & Systems</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Java, Spring Boot, Spring Security, Microservices & Polyglot SQL/NoSQL</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-white">AI & Machine Learning</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">PyTorch neural nets, Hugging Face transformers & document intelligence</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 flex items-start gap-3">
              <Code2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-white">Competitive Problem Solving</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">630+ DSA problems solved across LeetCode, CodeChef & GeeksforGeeks</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
