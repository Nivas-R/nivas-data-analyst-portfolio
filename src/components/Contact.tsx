import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white uppercase group cursor-default">
            LET'S <span className="text-neon-lime group-hover:animate-glitch inline-block">CONNECT</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto font-light">
            I'm always open to discussing new projects, creative ideas or 
            opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a 
            href="mailto:nivas20savin@gmail.com" 
            className="group flex items-center gap-4 p-6 border border-white/10 bg-base-dark/50 hover:border-neon-lime transition-all"
          >
            <Mail className="text-neon-lime w-6 h-6" />
            <div className="text-left">
              <div className="text-neon-lime font-mono text-[8px] uppercase tracking-widest">Email</div>
              <div className="text-white font-bold text-lg">nivas20savin@gmail.com</div>
            </div>
            <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-neon-lime transition-colors group-hover:translate-x-2" />
          </a>

          <a 
            href="https://media.licdn.com/dms/image/v2/D562DAQHhWoeP3lvWlw/profile-treasury-document-images_1920/B56Z1EukvjKkA0-/1/1774974554460?e=1776297600&v=beta&t=-4TuZtM-9zNNG_Lx8jpCMazfs_46hkwsUt0Z8wwRjjk"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 p-6 border border-neon-lime/20 bg-neon-lime/5 hover:border-neon-lime transition-all"
          >
            <div className="p-2 bg-neon-lime/10 border border-neon-lime">
              <ArrowRight className="text-neon-lime w-5 h-5 rotate-[-45deg]" />
            </div>
            <div className="text-left">
              <div className="text-neon-lime font-mono text-[8px] uppercase tracking-widest">Document</div>
              <div className="text-white font-bold text-lg uppercase">View Resume</div>
            </div>
          </a>

          <div className="flex gap-3">
            <a 
              href="https://github.com/Nivas-R" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 border border-white/10 bg-base-dark/50 hover:border-neon-lime transition-all flex items-center justify-center"
            >
              <Github className="text-white w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nivasrajagopal" 
              target="_blank" 
              rel="noreferrer"
              className="p-6 border border-white/10 bg-base-dark/50 hover:border-neon-lime transition-all flex items-center justify-center"
            >
              <Linkedin className="text-white w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-8 border-t border-white/5 bg-base-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-2xl font-bold text-white tracking-tighter">NIVAS</div>
          <div className="text-text-muted text-xs font-mono uppercase tracking-widest">Designed & Built</div>
        </div>
        
        <div className="text-text-muted text-sm font-mono">
          © {new Date().getFullYear()} — ALL RIGHTS RESERVED
        </div>

              </div>
    </footer>
  );
};
