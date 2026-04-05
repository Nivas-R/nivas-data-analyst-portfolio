import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Data Analyst | Problem Solver | Insight Builder";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-8 pt-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <div className="space-y-1">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white relative group cursor-default"
            >
              <span className="relative z-10 group-hover:animate-glitch inline-block">NIVAS</span>
              <motion.div 
                className="absolute inset-0 bg-neon-lime/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.h1>
            <div className="h-6 flex items-center">
              <span className="text-neon-lime font-mono text-sm md:text-base tracking-widest uppercase">
                {typedText}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-1.5 h-4 bg-neon-lime ml-1 align-middle"
                />
              </span>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-main text-lg max-w-lg leading-relaxed font-light"
          >
            Data enthusiast building intelligent systems that transform raw data into actionable insights through AI, automation, and interactive applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="group relative px-6 py-3 bg-neon-lime text-black font-bold text-sm flex items-center gap-2 overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(199,240,0,0.4)]"
            >
              <span className="relative z-10">Explore Work</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </button>
            <a 
              href="https://media.licdn.com/dms/image/v2/D562DAQHhWoeP3lvWlw/profile-treasury-document-images_1920/B56Z1EukvjKkA0-/1/1774974554460?e=1776297600&v=beta&t=-4TuZtM-9zNNG_Lx8jpCMazfs_46hkwsUt0Z8wwRjjk"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-neon-lime/30 text-neon-lime font-bold text-sm flex items-center gap-2 hover:bg-neon-lime/10 transition-all backdrop-blur-sm"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-white/10 text-white font-bold text-sm flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              <Mail className="w-4 h-4" />
              Let's Connect
            </button>
          </motion.div>
        </div>

        {/* RIGHT CONTENT - OUTLINE IMAGE PLACEHOLDER */}
        <div className="relative aspect-square flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full h-full"
          >
            {/* Abstract Data Visualization Outline */}
            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_0_20px_rgba(199,240,0,0.2)]">
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C7F000" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00FFC6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Animated Hexagon Grid */}
              {[...Array(6)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M250,50 L423,150 L423,350 L250,450 L77,350 L77,150 Z`}
                  fill="none"
                  stroke="url(#neonGradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
                  style={{ scale: 1 - i * 0.1 }}
                />
              ))}

              {/* Central Data Node */}
              <motion.circle
                cx="250" cy="250" r="40"
                fill="none"
                stroke="#C7F000"
                strokeWidth="2"
                animate={{ r: [40, 45, 40], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Connecting Lines */}
              {[...Array(12)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="250" y1="250"
                  x2={250 + Math.cos(i * Math.PI / 6) * 200}
                  y2={250 + Math.sin(i * Math.PI / 6) * 200}
                  stroke="#C7F000"
                  strokeWidth="0.5"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, 10] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  opacity="0.2"
                />
              ))}
            </svg>

            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 bg-base-dark/80 border border-white/10 backdrop-blur-md rounded-lg shadow-2xl"
            >
              <div className="text-[10px] font-mono text-neon-lime mb-1">DATA_STREAM_01</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [10, 25, 15, 30, 10] }}
                    transition={{ duration: 1 + i * 0.2, repeat: Infinity }}
                    className="w-1 bg-neon-lime"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
