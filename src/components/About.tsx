import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: TITLE & DECORATION */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-16 -left-16 w-48 h-48 bg-neon-lime/5 rounded-full blur-3xl"
          />
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 group cursor-default"
          >
            ABOUT <span className="text-neon-lime group-hover:animate-glitch inline-block">ME</span>
          </motion.h2>
          <div className="flex gap-3 mb-10">
            <div className="w-10 h-1 bg-neon-lime" />
            <div className="w-3 h-1 bg-white/20" />
            <div className="w-3 h-1 bg-white/20" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 border border-white/10 bg-base-dark/50 backdrop-blur-xl relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-lime to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <div className="text-neon-lime font-mono text-[10px] mb-3">SYSTEM_PROFILE_01</div>
            <p className="text-text-muted leading-relaxed font-light italic text-sm">
              "I design systems that transform raw data into meaningful insights. 
              My focus is on building practical solutions that simplify complexity 
              and support better decision-making."
            </p>
          </motion.div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-text-main text-lg font-medium leading-relaxed">
              I am a final-year Computer Science student focused on data analysis 
              and real-world problem solving.
            </p>
            <p className="text-text-muted leading-relaxed text-sm">
              I work with structured and unstructured datasets to identify patterns, 
              understand behavior, and transform complex information into clear insights.
            </p>
            <p className="text-text-muted leading-relaxed text-sm">
              Through internships and projects, I have developed a systematic approach 
              — understanding the problem, analyzing the data, and presenting outcomes 
              that are meaningful and actionable.
            </p>
          </motion.div>

          {/* Stats/Metrics */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white">2026</div>
              <div className="text-[10px] font-mono text-neon-lime uppercase tracking-widest">Graduation Year</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white">7+</div>
              <div className="text-[10px] font-mono text-neon-lime uppercase tracking-widest">Internship Months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
