import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Code2, Briefcase, GraduationCap, Mail, Menu, X, FolderCode } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { id: 'about', label: 'About', icon: <User className="w-5 h-5" /> },
  { id: 'skills', label: 'Skills', icon: <Code2 className="w-5 h-5" /> },
  { id: 'projects', label: 'Projects', icon: <FolderCode className="w-5 h-5" /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
];

export const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[60] lg:hidden p-3 bg-base-dark/80 border border-white/10 backdrop-blur-md text-neon-lime"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Desktop */}
      <motion.nav 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed left-0 top-0 bottom-0 w-20 hidden lg:flex flex-col items-center justify-center z-50 border-r border-white/5 bg-base-black/50 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex items-center justify-center"
            >
              <div className={`p-3 transition-all duration-300 ${
                activeSection === item.id 
                  ? 'text-neon-lime bg-neon-lime/10 border border-neon-lime' 
                  : 'text-text-muted hover:text-white'
              }`}>
                {item.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1 bg-neon-lime text-black font-mono text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[55] bg-base-black flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-4xl font-bold tracking-tighter uppercase transition-colors ${
                    activeSection === item.id ? 'text-neon-lime' : 'text-white/40'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
