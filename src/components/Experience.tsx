import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    company: "VCODEZ",
    role: "Data Science Intern",
    period: "4 Months | May - August 2025",
    details: [
      "worked on data preprocessing and analysis",
      "explored machine learning basics",
      "handled real datasets",
      "developed problem-solving approach"
    ],
    outcome: "Built strong foundation in data science workflows."
  },
  {
    company: "SpydX",
    role: "Data Analyst Intern",
    period: "3 Months | October - December 2025",
    details: [
      "worked on data preparation",
      "performed analysis tasks",
      "supported project workflows",
      "handled structured datasets"
    ],
    outcome: "Improved practical analytical skills and workflow understanding."
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-3 uppercase group cursor-default">
            EXPERIENCE <span className="text-neon-lime group-hover:animate-glitch inline-block">TIMELINE</span>
          </h2>
          <p className="text-text-muted font-mono text-[10px] tracking-widest uppercase">
            Professional Journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-white/5 bg-base-dark/30 p-6 lg:p-8 hover:border-neon-lime transition-all"
            >
              <div className="lg:col-span-4 space-y-1">
                <div className="text-neon-lime font-mono text-[10px] uppercase tracking-widest mb-1">
                  {exp.period}
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-neon-lime transition-colors">
                  {exp.company}
                </h3>
                <p className="text-text-main text-lg font-medium">{exp.role}</p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.details.map((detail, di) => (
                    <li key={di} className="flex items-center gap-2 text-text-muted text-sm">
                      <div className="w-1 h-1 bg-neon-lime/50 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/5">
                  <div className="text-neon-lime font-mono text-[8px] uppercase tracking-widest mb-1">Outcome</div>
                  <p className="text-text-main text-sm font-medium italic">"{exp.outcome}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
