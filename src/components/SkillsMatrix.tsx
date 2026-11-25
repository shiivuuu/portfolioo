import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Coffee, 
  Code, 
  Terminal, 
  FileCode, 
  Database, 
  Layout, 
  Server, 
  ShieldCheck, 
  Box, 
  Network, 
  Cpu, 
  Brain, 
  Activity, 
  FileText, 
  Layers, 
  GitBranch, 
  Cloud, 
  Wrench, 
  Binary, 
  PackageCheck, 
  Smartphone, 
  Compass
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconMap: Record<string, React.ElementType> = {
    Coffee,
    Code,
    Terminal,
    FileCode,
    Database,
    Layout,
    Server,
    ShieldCheck,
    Box,
    Network,
    Cpu,
    Brain,
    Sparkles,
    Activity,
    FileText,
    Layers,
    GitBranch,
    Cloud,
    Wrench,
    Binary,
    PackageCheck,
    Smartphone,
    Compass
  };

  const filteredCategories = portfolioData.skills.map(category => {
    const matchingSkills = category.skills.filter(skill => {
      const matchesSearch = searchQuery === '' || 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.highlight && skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || category.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return {
      ...category,
      skills: matchingSkills
    };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Core Competencies</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Enterprise backend architecture, multi-platform engineering, deep learning pipelines, 
            and algorithmic problem solving.
          </p>

          {/* Search bar & Filter tabs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search skill (e.g. Java, PyTorch, SQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setSelectedCategory('all');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                All Domains
              </button>
              {portfolioData.skills.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedCategory(cat.category);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    selectedCategory === cat.category
                      ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div 
              key={category.category}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {category.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-300 self-start sm:self-auto">
                  {category.skills.length} Competencies
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={skill.name}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-slate-900/90 group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-heading font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </div>
                            {skill.highlight && (
                              <div className="text-[11px] font-mono text-slate-400">
                                {skill.highlight}
                              </div>
                            )}
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-500 group-hover:from-cyan-400 group-hover:to-indigo-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 glass-panel rounded-3xl border border-white/10">
              <p className="text-sm font-mono text-slate-400">
                No matching skills found for "{searchQuery}". Try searching for Java, PyTorch, React, or Spring Boot.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
