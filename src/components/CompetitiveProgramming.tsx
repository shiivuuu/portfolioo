import React from 'react';
import { 
  Trophy, 
  ExternalLink, 
  CheckCircle2, 
  Flame, 
  Target
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const CompetitiveProgramming: React.FC = () => {
  const { competitiveProgramming } = portfolioData;

  const topics = [
    { name: 'Dynamic Programming', count: '110+', color: 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30' },
    { name: 'Trees & Graphs', count: '135+', color: 'text-indigo-400 bg-indigo-950/50 border-indigo-500/30' },
    { name: 'Arrays & Two Pointers', count: '180+', color: 'text-emerald-400 bg-emerald-950/50 border-emerald-500/30' },
    { name: 'Binary Search & Greedy', count: '95+', color: 'text-amber-400 bg-amber-950/50 border-amber-500/30' },
    { name: 'Recursion & Backtracking', count: '65+', color: 'text-purple-400 bg-purple-950/50 border-purple-500/30' },
    { name: 'Stack, Queue & Heap', count: '75+', color: 'text-rose-400 bg-rose-950/50 border-rose-500/30' }
  ];

  return (
    <section id="competitive-programming" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Programming & DSA</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Algorithmic Rigor & <span className="text-gradient-cyan">630+ Solved</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Consistently solving rigorous algorithmic challenges across top platforms. 
            Demonstrated mastery in optimal time-space complexity, advanced data structures, 
            and contest-level problem solving.
          </p>
        </div>

        {/* Global Metric Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 mb-12 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Total Solved</span>
              <div className="text-5xl font-black font-mono text-white mt-1">
                630<span className="text-cyan-400">+</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Verified across LeetCode, CodeChef & GeeksforGeeks
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-amber-500/20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-semibold">LeetCode</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-mono">
                    @Shivam3030
                  </span>
                </div>
                <div className="mt-3">
                  <div className="text-3xl font-extrabold font-mono text-white">372</div>
                  <div className="text-xs text-slate-400">Problems Solved</div>
                </div>
                <div className="mt-3 flex gap-1 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 w-[41%]" title="Easy: 154" />
                  <div className="bg-amber-400 w-[50%]" title="Medium: 186" />
                  <div className="bg-rose-400 w-[9%]" title="Hard: 32" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-amber-700/30 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-300 font-semibold">CodeChef</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-800/20 text-amber-300 font-mono">
                    @sky2008
                  </span>
                </div>
                <div className="mt-3">
                  <div className="text-3xl font-extrabold font-mono text-white">1516</div>
                  <div className="text-xs text-slate-400">Rating • 80 Solved</div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-amber-300">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Division Contest Competitor</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">GeeksforGeeks</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-mono">
                    @sky2008
                  </span>
                </div>
                <div className="mt-3">
                  <div className="text-3xl font-extrabold font-mono text-white">182</div>
                  <div className="text-xs text-slate-400">Problems Solved</div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core DSA Fundamentals</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {competitiveProgramming.platforms.map((platform) => (
            <div 
              key={platform.name}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between group relative"
            >
              <div>
                {/* Platform Badge & Handle */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-md text-sm font-mono"
                      style={{ backgroundColor: platform.accentColor }}
                    >
                      {platform.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base">
                        {platform.name}
                      </h3>
                      <p className="text-xs font-mono text-slate-400">
                        @{platform.handle}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium border border-white/10 bg-slate-800 text-slate-200">
                    {platform.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {platform.description}
                </p>

                {/* Difficulty Breakdown if present */}
                {platform.breakdown && (
                  <div className="space-y-2 mb-6 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="text-[11px] font-mono text-slate-400 flex justify-between">
                      <span>Difficulty Breakdown</span>
                      <span className="text-white font-bold">{platform.solved} Total</span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {platform.breakdown.easy !== undefined && (
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="text-emerald-400 font-mono w-14">Easy</span>
                          <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-emerald-400 h-full rounded-full"
                              style={{ width: `${(platform.breakdown.easy / platform.solved) * 100}%` }}
                            />
                          </div>
                          <span className="font-mono text-slate-300 w-8 text-right">{platform.breakdown.easy}</span>
                        </div>
                      )}

                      {platform.breakdown.medium !== undefined && (
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="text-amber-400 font-mono w-14">Medium</span>
                          <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-amber-400 h-full rounded-full"
                              style={{ width: `${(platform.breakdown.medium / platform.solved) * 100}%` }}
                            />
                          </div>
                          <span className="font-mono text-slate-300 w-8 text-right">{platform.breakdown.medium}</span>
                        </div>
                      )}

                      {platform.breakdown.hard !== undefined && (
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="text-rose-400 font-mono w-14">Hard</span>
                          <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-rose-400 h-full rounded-full"
                              style={{ width: `${(platform.breakdown.hard / platform.solved) * 100}%` }}
                            />
                          </div>
                          <span className="font-mono text-slate-300 w-8 text-right">{platform.breakdown.hard}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Profile CTA */}
              <a
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playClick()}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-white/10 hover:border-cyan-500/40 bg-slate-900/60 hover:bg-cyan-500/10 text-slate-200 hover:text-cyan-300 text-xs font-mono font-medium transition-all"
              >
                <span>View {platform.name} Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Core Algorithmic Domains */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Primary Algorithmic Specializations</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Targeted practice covering foundational & advanced data structures and algorithms
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 self-start sm:self-auto border border-white/10">
              C++ • Java • Python
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {topics.map((topic) => (
              <div 
                key={topic.name}
                className={`p-3 rounded-xl border ${topic.color} flex flex-col justify-between`}
              >
                <span className="text-xs font-medium text-slate-200">{topic.name}</span>
                <span className="text-base font-bold font-mono mt-2">{topic.count}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
