import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  FileText, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Code2, 
  GraduationCap, 
  Layers, 
  Send
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenTerminal, 
  onOpenResume,
  activeSection 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = soundManager.toggle();
    setSoundActive(state);
  };

  const navLinks = [
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'CP & DSA', href: '#competitive-programming', icon: Code2 },
    { name: 'Skills', href: '#skills', icon: Sparkles },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    soundManager.playChime();
    
    // Confetti effect
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#38bdf8', '#818cf8', '#34d399', '#f43f5e']
    });

    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#080c14]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a 
            href="#" 
            onClick={() => soundManager.playClick()}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-mono font-bold text-sm tracking-tighter text-cyan-400 group-hover:text-white transition-colors">
                SY
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#090d16] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {portfolioData.personal.preferredName}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono hidden sm:inline-block">
                  @{portfolioData.personal.alias}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Software Dev • 630+ DSA
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => soundManager.playClick()}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              aria-label={soundActive ? "Mute audio effects" : "Enable audio effects"}
              title={soundActive ? "Sound enabled (click to mute)" : "Enable interactive sound effects"}
              className={`p-2 rounded-xl border transition-all text-xs font-mono flex items-center justify-center ${
                soundActive 
                  ? 'border-cyan-500/50 bg-cyan-500/15 text-cyan-300 shadow-sm shadow-cyan-500/30' 
                  : 'border-white/10 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Terminal Trigger */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenTerminal();
              }}
              title="Launch interactive SkyCLI terminal"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-slate-900/60 hover:bg-slate-800/80 hover:border-cyan-500/40 text-xs font-mono text-slate-200 hover:text-cyan-300 transition-all shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>SkyCLI</span>
              <kbd className="text-[10px] bg-slate-800 border border-slate-700 px-1 rounded text-slate-400">~</kbd>
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundManager.playPop();
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-indigo-200 text-xs font-medium transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden xs:inline">Resume</span>
            </button>

            {/* Hire Me Button */}
            <button
              onClick={handleHireMeClick}
              className="relative group overflow-hidden px-4 py-1.5 rounded-xl text-xs font-semibold text-white shadow-md shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 transition-transform duration-300 group-hover:scale-105" />
              <span className="relative flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hire Shivam</span>
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl border border-white/10 bg-slate-900/50 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0b1220]/95 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-mono text-cyan-400">Navigation</span>
            <span className="text-[11px] text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              Available for hire
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundManager.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-white/5 text-xs font-medium text-slate-200 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300 hover:bg-slate-800"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Launch SkyCLI Terminal</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs font-medium text-indigo-300"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View Full PDF Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
