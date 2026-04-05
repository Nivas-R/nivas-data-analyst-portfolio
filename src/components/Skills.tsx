import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Terminal, Cpu, Globe, GitBranch, BarChart3, Activity, Sparkles } from 'lucide-react';

const skillGroups = [
  {
    id: "prog",
    title: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Python", "SQL"],
    description: "Core logic and data systems architecture.",
    status: "ACTIVE",
    color: "text-neon-lime",
    border: "border-neon-lime/30",
    bg: "bg-neon-lime/5",
    gridSpan: "md:col-span-2 lg:col-span-1"
  },
  {
    id: "data",
    title: "Data Analysis",
    icon: <Database className="w-6 h-6" />,
    items: ["Pandas", "NumPy", "Excel", "Data Cleaning", "EDA"],
    description: "Transforming raw noise into structured signals.",
    status: "PROCESSING",
    color: "text-accent-teal",
    border: "border-accent-teal/30",
    bg: "bg-accent-teal/5",
    gridSpan: "md:col-span-1"
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Scikit-learn", "Regression", "Classification", "Clustering", "Feature Engineering"],
    description: "Predictive modeling and pattern recognition.",
    status: "TRAINING",
    color: "text-neon-yellow",
    border: "border-neon-yellow/30",
    bg: "bg-neon-yellow/5",
    gridSpan: "md:col-span-1 lg:col-span-2"
  },
  {
    id: "viz",
    title: "Visualization",
    icon: <BarChart3 className="w-6 h-6" />,
    items: ["Matplotlib", "Seaborn", "Plotly", "Power BI"],
    description: "Visual storytelling through complex data mapping.",
    status: "RENDERING",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    gridSpan: "md:col-span-1"
  },
  {
    id: "nlp",
    title: "NLP & AI",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Text Preprocessing", "Sentiment Analysis", "NLTK", "TextBlob"],
    description: "Linguistic processing and semantic understanding.",
    status: "ANALYZING",
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/5",
    gridSpan: "md:col-span-1"
  },
  {
    id: "web",
    title: "Web & Deployment",
    icon: <Globe className="w-6 h-6" />,
    items: ["Streamlit", "Django", "Render", "Vercel"],
    description: "Deploying data products to the global network.",
    status: "ONLINE",
    color: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
    gridSpan: "md:col-span-1"
  },
  {
    id: "tools",
    title: "Tools",
    icon: <GitBranch className="w-6 h-6" />,
    items: ["Git", "GitHub", "VS Code", "Jupyter", "Colab"],
    description: "System management and version control.",
    status: "READY",
    color: "text-white",
    border: "border-white/20",
    bg: "bg-white/5",
    gridSpan: "md:col-span-2 lg:col-span-1"
  }
];

const SkillCard = React.memo(({ group, index }: { group: typeof skillGroups[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`${group.gridSpan} group relative p-6 border border-white/10 bg-base-dark/40 backdrop-blur-sm overflow-hidden hover:border-white/30 transition-all duration-500`}
  >
    <div className={`absolute -right-10 -top-10 w-32 h-32 ${group.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 ${group.bg} border ${group.border} transition-transform duration-500 group-hover:scale-110`}>
          <div className={`${group.color}`}>
            {group.icon}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-1">Status</div>
          <div className={`text-[10px] font-mono font-bold ${group.color} flex items-center gap-1.5`}>
            <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
            {group.status}
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-neon-lime transition-colors">
        {group.title}
      </h3>

      <p className="text-text-muted text-xs font-mono mb-6 leading-relaxed">
        {group.description}
      </p>

      {/* ✅ ENHANCED SKILLS */}
      <div className="mt-auto flex flex-wrap gap-3">
        {group.items.map((item, i) => (
          <span 
            key={i}
            className="px-3 py-1.5 text-sm md:text-base font-mono bg-white/5 border border-white/5 text-white/80 group-hover:border-white/20 group-hover:text-white transition-all hover:scale-105 hover:bg-white/10 hover:text-neon-lime"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-neon-lime to-transparent group-hover:w-full transition-all duration-700`} />
  </motion.div>
));

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-4 md:px-8 relative bg-base-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
              <span className="text-neon-lime font-mono text-[10px] tracking-[0.4em] uppercase">Technical_Capabilities_v5.0</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
              TECH <span className="text-neon-lime italic">ARSENAL</span>
            </h2>
          </div>

          <div className="max-w-xs text-right hidden md:block">
            <p className="text-text-muted text-xs font-mono leading-relaxed">
              A comprehensive matrix of specialized tools and methodologies deployed across the data lifecycle.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.id} group={group} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};