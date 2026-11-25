import React from 'react';
import { 
  ArrowUp, 
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060910] text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          
          {/* Identity column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-xs text-white">
                SY
              </div>
              <span className="font-heading font-bold text-white text-base">
                {portfolioData.personal.preferredName}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/10">
                @{portfolioData.personal.alias}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Software Developer & Full-Stack AI Engineer. Undergraduate in CSE at Parul University. 
              630+ DSA problems solved across LeetCode, CodeChef, and GeeksforGeeks.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span>Available for engineering roles & internships</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  &gt; Featured Projects
                </a>
              </li>
              <li>
                <a href="#competitive-programming" className="hover:text-cyan-400 transition-colors">
                  &gt; CP & DSA (630+ Solved)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  &gt; Technical Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">
                  &gt; Education & Parul Univ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  &gt; Contact & Hire
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Profiles & Code
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={portfolioData.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-2 rounded-xl bg-slate-900 border border-amber-500/20 hover:border-amber-500/50 text-amber-300 text-xs font-mono transition-all"
                title="LeetCode (372 Solved)"
              >
                LC: 372
              </a>
              <a
                href={portfolioData.personal.socialLinks.codechef}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-2 rounded-xl bg-slate-900 border border-amber-800/30 hover:border-amber-700/60 text-amber-400 text-xs font-mono transition-all"
                title="CodeChef (1516 Rating)"
              >
                CC: 1516
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Crafted with</span>
            <Code2 className="w-3.5 h-3.5 text-cyan-400 inline" />
            <span>React 19 • TypeScript • Tailwind CSS • Vite</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
