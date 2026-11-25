import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { Projects } from './components/Projects';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationTimeline } from './components/EducationTimeline';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ParticleBackground } from './components/ParticleBackground';

export function App() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'competitive-programming', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic 60fps Interactive Canvas Particle Network */}
      <ParticleBackground />

      {/* Persistent Floating Glass Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setTerminalModalOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <Projects />

        <CompetitiveProgramming />

        <SkillsMatrix />

        <EducationTimeline />

        {/* Embedded Terminal Section */}
        <InteractiveTerminal
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Standalone Interactive Terminal Modal (when launched via button) */}
      <InteractiveTerminal
        isModal={true}
        isOpen={terminalModalOpen}
        onClose={() => setTerminalModalOpen(false)}
        onOpenResume={() => {
          setTerminalModalOpen(false);
          setResumeModalOpen(true);
        }}
      />

      {/* Interactive Resume Modal (PDF Viewer & Digital View) */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
