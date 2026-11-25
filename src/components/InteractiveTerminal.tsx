import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Trash2, 
  Maximize2, 
  Minimize2, 
  X, 
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import confetti from 'canvas-confetti';

interface InteractiveTerminalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
  onOpenResume?: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen = true,
  onClose,
  isModal = false,
  onOpenResume
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'welcome',
      time: '12:00:00',
      output: (
        <div className="space-y-1.5 text-xs">
          <p className="text-cyan-400 font-bold">
            SkyCLI v2.4.0 (x86_64-pc-parul-os)
          </p>
          <p className="text-slate-300">
            Welcome to Shivam Yadav's Interactive Terminal Shell.
          </p>
          <p className="text-slate-400">
            Type <span className="text-cyan-300 font-bold">help</span> or tap any button below to execute commands.
          </p>
        </div>
      )
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const quickCommands = [
    'help',
    'about',
    'skills',
    'projects',
    'stats',
    'education',
    'contact',
    'sudo hire',
    'clear'
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandExecution = (cmdString: string) => {
    const trimmed = cmdString.trim().toLowerCase();
    if (!trimmed) return;

    soundManager.playKeypress();
    setPastCommands(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const now = new Date().toLocaleTimeString();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-semibold mb-1">Available SkyCLI Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-amber-400 font-bold">about</span> - Brief bio & background</div>
              <div><span className="text-amber-400 font-bold">skills</span> - Full technology stack</div>
              <div><span className="text-amber-400 font-bold">projects</span> - Flagship architectures</div>
              <div><span className="text-amber-400 font-bold">stats</span> - Competitive programming metrics</div>
              <div><span className="text-amber-400 font-bold">education</span> - Parul University & grades</div>
              <div><span className="text-amber-400 font-bold">contact</span> - Phone, email, WhatsApp & socials</div>
              <div><span className="text-amber-400 font-bold">resume</span> - Open PDF resume viewer</div>
              <div><span className="text-emerald-400 font-bold">sudo hire</span> - Direct hiring recommendation</div>
              <div><span className="text-rose-400 font-bold">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p><span className="text-cyan-400 font-bold">Name:</span> {portfolioData.personal.fullName} ({portfolioData.personal.preferredName})</p>
            <p><span className="text-cyan-400 font-bold">Title:</span> {portfolioData.personal.title}</p>
            <p><span className="text-cyan-400 font-bold">Campus:</span> Parul University, Vadodara, Gujarat (CSE 2025-2029)</p>
            <p><span className="text-cyan-400 font-bold">CGPA:</span> 8.32 / 10.0</p>
            <p className="text-slate-400 mt-1">{portfolioData.personal.bio}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Technical Taxonomy:</p>
            {portfolioData.skills.map(s => (
              <div key={s.category}>
                <span className="text-indigo-400 font-semibold">[{s.category}]:</span>{' '}
                <span className="text-slate-200">{s.skills.map(x => x.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-3 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Featured Production Systems:</p>
            {portfolioData.projects.map((p, idx) => (
              <div key={p.id} className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10">
                <p className="text-cyan-400 font-bold">{idx + 1}. {p.title} - <span className="text-slate-300 font-normal">{p.subtitle}</span></p>
                <p className="text-slate-400 text-[11px] mt-0.5">{p.description}</p>
                <p className="text-indigo-300 text-[11px] mt-1">Tech: {p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'stats':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Competitive Programming Metrics:</p>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 space-y-1">
              <p>• <span className="text-amber-400 font-semibold">LeetCode:</span> 372 solved (Handle: Shivam3030)</p>
              <p>• <span className="text-amber-600 font-semibold">CodeChef:</span> 1516 Rating, 80 solved (Handle: sky2008)</p>
              <p>• <span className="text-emerald-400 font-semibold">GeeksforGeeks:</span> 182 solved (Handle: sky2008)</p>
              <p className="text-cyan-400 font-bold pt-1">Total Solved: 630+ DSA Problems</p>
            </div>
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Academic Background:</p>
            {portfolioData.education.map(e => (
              <div key={e.institution} className="p-2 rounded-lg bg-slate-900/80 border border-white/10">
                <p className="text-white font-semibold">{e.degree}</p>
                <p className="text-cyan-400 text-[11px]">{e.institution} • {e.location}</p>
                <p className="text-emerald-400 text-[11px] font-bold">{e.scoreLabel}: {e.score} ({e.period})</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Direct Channels:</p>
            <p>• Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-cyan-400 underline">{portfolioData.personal.email}</a></p>
            <p>• Phone: <span className="text-slate-200">{portfolioData.personal.phone}</span></p>
            <p>• WhatsApp: <a href={portfolioData.personal.whatsapp} target="_blank" rel="noreferrer" className="text-emerald-400 underline">Chat on WhatsApp</a></p>
            <p>• GitHub: <a href={portfolioData.personal.socialLinks.github} target="_blank" rel="noreferrer" className="text-indigo-400 underline">{portfolioData.personal.socialLinks.github}</a></p>
            <p>• LinkedIn: <a href={portfolioData.personal.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{portfolioData.personal.socialLinks.linkedin}</a></p>
          </div>
        );
        break;

      case 'resume':
        response = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-400">Opening PDF Resume preview...</p>
            <p className="text-slate-400">You can also download directly from the header or hero buttons.</p>
          </div>
        );
        if (onOpenResume) {
          setTimeout(() => onOpenResume(), 300);
        }
        break;

      case 'sudo hire':
      case 'hire':
        soundManager.playChime();
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
        response = (
          <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/80 to-indigo-950/80 border border-cyan-500/40 text-xs font-mono text-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>ACCESS GRANTED: Shivam Yadav is ready to make high impact!</span>
            </div>
            <p className="text-slate-300">
              Proficient in scalable Java Spring Boot backend design, PyTorch ML integrations, 
              cross-platform systems, and strong algorithmic speed (630+ DSA).
            </p>
            <p className="text-cyan-300">
              👉 Email directly at <a href={`mailto:${portfolioData.personal.email}`} className="underline font-bold">{portfolioData.personal.email}</a> or call <span className="font-bold">{portfolioData.personal.phone}</span>!
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = (
          <p className="text-rose-400 text-xs font-mono">
            command not found: '{trimmed}'. Type <span className="text-cyan-300 font-bold">help</span> to view all commands.
          </p>
        );
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: trimmed,
        output: response,
        time: now
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandExecution(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < pastCommands.length) {
          setHistoryIndex(nextIdx);
          setInputVal(pastCommands[pastCommands.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(pastCommands[pastCommands.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (isModal && !isOpen) return null;

  const terminalContent = (
    <div className={`glass-panel bg-[#070b12]/95 border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden ${
      isMaximized ? 'h-[90vh]' : 'h-[500px]'
    }`}>
      {/* Terminal Header Bar */}
      <div className="px-4 py-3 bg-[#0d1424] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="text-xs font-mono text-slate-300 flex items-center gap-1.5 ml-2">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>sky@portfolio:~ (bash)</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setHistory([])}
            title="Clear buffer"
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            title={isMaximized ? "Restore size" : "Maximize window"}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-rose-950"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Action Suggestion Chips */}
      <div className="px-4 py-2 bg-[#090e1a] border-b border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
        <span className="text-slate-500 uppercase tracking-wider shrink-0 text-[10px]">Quick:</span>
        {quickCommands.map(cmd => (
          <button
            key={cmd}
            onClick={() => handleCommandExecution(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800/90 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 text-slate-300 shrink-0 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Log */}
      <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-4">
        {history.map(item => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400 font-bold">sky@portfolio:~$</span>
              <span className="text-white font-semibold">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.time}</span>
            </div>
            <div className="pl-4 border-l border-cyan-500/20">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Bar */}
      <div className="p-3 bg-[#090e1a] border-t border-white/10 flex items-center gap-2">
        <span className="text-cyan-400 font-mono text-xs font-bold shrink-0">sky@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. help, skills, stats, sudo hire)..."
          className="flex-1 bg-transparent text-xs font-mono text-white placeholder-slate-600 focus:outline-none"
        />
        <button
          onClick={() => handleCommandExecution(inputVal)}
          aria-label="Execute command"
          className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div 
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div 
          className="w-full max-w-4xl"
          onClick={e => e.stopPropagation()}
        >
          {terminalContent}
        </div>
      </div>
    );
  }

  return (
    <section id="terminal" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Developer Console</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Interactive <span className="text-gradient-cyan">SkyCLI Terminal</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Engineered for developers and technical recruiters who prefer command line interfaces.
          </p>
        </div>

        {terminalContent}
      </div>
    </section>
  );
};
