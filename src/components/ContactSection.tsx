import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Clock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineer Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const quickSubjects = [
    'Software Engineer Opportunity',
    'Spring Boot & Backend Project',
    'AI / Machine Learning Collaboration',
    'General Inquiry'
  ];

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    soundManager.playPop();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playChime();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);

    // Fallback: create mailto trigger
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
      formData.subject + ' - ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Send className="w-3.5 h-3.5" />
            <span>Initiate Communication</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-gradient-cyan">Something Extraordinary</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Actively open to software engineering opportunities, enterprise backend development, 
            AI/ML innovations, and high-impact engineering teams.
          </p>
        </div>

        {/* Contact Grid: Details + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Status Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Current Status</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Available for Hire
                </span>
              </div>
              <p className="text-sm text-slate-200">
                Undergraduate in Computer Science & Engineering at Parul University (CGPA 8.32). 
                Ready for full-time, part-time or project engagements.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Response Time: Typically under 6 hours</span>
              </div>
            </div>

            {/* Email Card with Copy Button */}
            <div className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                title="Copy email to clipboard"
                className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all ml-2 shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</div>
                  <a 
                    href={portfolioData.personal.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 ml-2 shrink-0">
                <a
                  href={portfolioData.personal.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundManager.playClick()}
                  title="Chat directly on WhatsApp"
                  className="px-2.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium hover:bg-emerald-500/25 transition-all"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                  title="Copy phone to clipboard"
                  className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-emerald-500/40 text-slate-400 hover:text-white transition-all"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400">Location Base</div>
                <div className="text-sm font-semibold text-white">
                  Surat & Vadodara, Gujarat, India
                </div>
                <div className="text-[11px] text-slate-400">Open to Relocation & Remote Roles Globally</div>
              </div>
            </div>

            {/* Social Network Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={portfolioData.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-3.5 rounded-2xl glass-panel glass-panel-hover border-white/10 flex items-center gap-2.5 text-xs text-slate-200 hover:text-blue-400"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono truncate">LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
              </a>

              <a
                href={portfolioData.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-3.5 rounded-2xl glass-panel glass-panel-hover border-white/10 flex items-center gap-2.5 text-xs text-slate-200 hover:text-cyan-400"
              >
                <GithubIcon className="w-4 h-4 text-slate-300 shrink-0" />
                <span className="font-mono truncate">github/shiivuuu</span>
                <ExternalLink className="w-3 h-3 ml-auto text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative">
              <h3 className="text-xl font-bold font-heading text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Have a proposal, role, or project in mind? Fill out the details below.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    Message Prepared & Client Dispatched!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your message draft has been primed. If your mail client didn't launch automatically, 
                    feel free to email directly at <span className="text-cyan-300 font-mono font-semibold">{portfolioData.personal.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Topic selection chips */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Inquiry Category:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {quickSubjects.map(sub => (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => {
                            soundManager.playClick();
                            setFormData(prev => ({ ...prev, subject: sub }));
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                            formData.subject === sub
                              ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-medium'
                              : 'bg-slate-900/60 border border-white/5 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe / Tech Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject summary..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shivam, we came across your work on Team-Apex and competitive programming stats. We'd love to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
