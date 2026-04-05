import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, ShieldCheck, Database } from 'lucide-react';

const education = [
  {
    school: "Karpaga Vinayaga College of Engineering and Technology",
    location: "Chengalpattu, Chennai",
    degree: "B.E Computer Science",
    period: "2022 – 2026",
    status: "COMPLETED_V3"
  },
  {
    school: "Sri Shanmuka Matriculation Higher Secondary School",
    location: "Mannargudi",
    degree: "Higher Secondary",
    period: "2020 – 2022",
    status: "ARCHIVED"
  },
  {
    school: "Ashoka Sishu Vihar Matriculation School",
    location: "Mannargudi",
    degree: "Primary Education",
    period: "2008 – 2020",
    status: "ARCHIVED"
  }
];

const certifications = [
  { name: "Introduction to Data Science", issuer: "Cisco Networking Academy", id: "DS_001" },
  { name: "Data Analytics Essentials", issuer: "Cisco Networking Academy", id: "DA_002" },
  { name: "Data Science & Analytics", issuer: "HP LIFE", id: "HP_003" },
  { name: "Python Essentials 1", issuer: "Cisco Networking Academy", id: "PY_004" },
  { name: "Data Analytics Simulation", issuer: "Deloitte", id: "DL_005" },
  { name: "Data Visualization for Effective Insights", issuer: "Tata", id: "TV_006" },
  { name: "Data Analysis with Python", issuer: "freeCodeCamp", id: "FC_007" },
  { name: "Getting Started with AI", issuer: "IBM", id: "IB_008" }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: EDUCATION LOG */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-neon-lime/10 border border-neon-lime">
                <Terminal className="text-neon-lime w-5 h-5" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white uppercase group cursor-default">
                ACADEMIC <span className="text-neon-lime group-hover:animate-glitch inline-block">LOG</span>
              </h2>
            </motion.div>

            <div className="relative space-y-6 before:absolute before:left-[15px] before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-10 group"
                >
                  <div className="absolute left-0 top-2 w-8 h-8 bg-base-black border border-white/10 rounded-full flex items-center justify-center group-hover:border-neon-lime transition-colors z-10">
                    <div className="w-1.5 h-1.5 bg-neon-lime rounded-full animate-pulse" />
                  </div>
                  
                  <div className="p-5 border border-white/5 bg-base-dark/30 hover:border-neon-lime/30 transition-all backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-neon-lime font-mono text-[8px] uppercase tracking-widest">
                        {edu.period}
                      </div>
                      <div className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] font-mono text-text-muted">
                        {edu.status}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-lime transition-colors">
                      {edu.school}
                    </h3>
                    <div className="text-text-main font-medium text-sm mb-1">{edu.degree}</div>
                    <p className="text-text-muted text-xs">{edu.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: CERTIFICATION GRID */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-neon-lime/10 border border-neon-lime">
                <ShieldCheck className="text-neon-lime w-5 h-5" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white uppercase group cursor-default">
                VERIFIED <span className="text-neon-lime group-hover:animate-glitch inline-block">CRED</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative p-4 bg-base-dark/60 border border-white/10 hover:border-neon-lime transition-all duration-300 overflow-hidden"
                >
                  {/* Digital Badge Elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-neon-lime/5 -rotate-45 translate-x-8 -translate-y-8 group-hover:bg-neon-lime/20 transition-colors" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-lime/10 transition-colors relative">
                      <Database className="w-6 h-6 text-text-muted group-hover:text-neon-lime transition-colors" />
                      {/* Scanning Line */}
                      <motion.div 
                        animate={{ y: [-20, 20] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-[1px] bg-neon-lime/40 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div className="text-white text-sm font-bold group-hover:text-neon-lime transition-colors">
                          {cert.name}
                        </div>
                        <div className="text-[8px] font-mono text-neon-lime opacity-40">
                          {cert.id}
                        </div>
                      </div>
                      <div className="text-text-muted text-[10px] font-mono uppercase tracking-widest mt-1">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Barcode Decoration */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
                    <div className="flex gap-0.5">
                      {[...Array(12)].map((_, bi) => (
                        <div 
                          key={bi} 
                          className="w-[1px] bg-white/10" 
                          style={{ height: `${Math.random() * 8 + 4}px` }}
                        />
                      ))}
                    </div>
                    <div className="text-[8px] font-mono text-white/20 group-hover:text-neon-lime/40 transition-colors">
                      VERIFICATION_TOKEN_SECURED
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative System Status */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-6 border border-neon-lime/20 bg-neon-lime/5 font-mono text-[10px] space-y-2"
            >
              <div className="flex justify-between text-neon-lime">
                <span>SYSTEM_STATUS:</span>
                <span>OPTIMIZED</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>CREDENTIAL_COUNT:</span>
                <span>08_UNITS</span>
              </div>
              <div className="w-full h-1 bg-white/10 mt-4 overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-1/3 h-full bg-neon-lime"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
