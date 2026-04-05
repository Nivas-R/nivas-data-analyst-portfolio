import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: "stock-sentinel",
    title: "StockSentinel",
    subtitle: "AI-Powered Market Sentiment Analyzer",
    overview: "A smart web application that analyzes stock market trends using real-time news sentiment analysis. It helps users understand market mood and make informed decisions.",
    features: [
      "Real-time stock data visualization (Open, High, Low, Close, Volume)",
      "News-based sentiment classification (Positive, Negative, Neutral)",
      "Interactive charts and market mood summary",
      "PDF export of filtered news data",
      "Automated data pipeline (scraping + GitHub integration)"
    ],
    techStack: ["Python", "Streamlit", "Pandas", "Plotly", "NewsAPI", "GitHub Automation"],
    impact: [
      "Demonstrates real-world application of NLP + Data Visualization",
      "Shows ability to build end-to-end data products",
      "Focuses on automation and deployment readiness"
    ],
    links: {
      github: "https://github.com/Nivas-R/Stocksentinel",
      live: "https://stocksentinel.streamlit.app/"
    },
    color: "from-neon-lime to-accent-teal"
  },
  {
    id: "deepfake-guard",
    title: "DeepFakeGuard",
    subtitle: "AI-Based Deepfake Detection System",
    overview: "A multi-modal AI system designed to detect deepfake content in images, audio, and videos using machine learning models.",
    features: [
      "Image deepfake detection using CNN models",
      "Audio deepfake detection using trained neural networks",
      "Backend API built with Django",
      "Modular architecture for scalability"
    ],
    techStack: ["Python", "TensorFlow/Keras", "Django", "OpenCV"],
    impact: [
      "Addresses real-world problem of digital misinformation",
      "Demonstrates knowledge of deep learning and backend integration",
      "Highlights multi-model system design"
    ],
    status: "Under development",
    color: "from-accent-teal to-blue-500"
  },
  {
    id: "product-pulse",
    title: "Product Pulse",
    subtitle: "Product Sentiment & Review Analyzer",
    overview: "An intelligent system that analyzes customer reviews to determine product sentiment and overall feedback trends.",
    features: [
      "Sentiment classification of product reviews",
      "Trend analysis of customer opinions",
      "Data cleaning and NLP preprocessing",
      "Visual dashboards for insights"
    ],
    techStack: ["Python", "NLP (NLTK / TextBlob)", "Pandas", "Matplotlib"],
    impact: [
      "Useful for businesses to understand customer feedback",
      "Demonstrates NLP pipeline development",
      "Shows ability to extract insights from unstructured data"
    ],
    links: {
      github: "https://github.com/Nivas-R/Product-Pulse",
      live: "https://product-pulse-x3bw.onrender.com/"
    },
    color: "from-neon-yellow to-neon-lime"
  },
  {
    id: "smart-deal-hub",
    title: "Smart Deal Hub",
    subtitle: "Intelligent Product Recommendation System",
    overview: "A smart recommendation platform that suggests the best deals and products based on user preferences and trends.",
    features: [
      "Product comparison and filtering",
      "Recommendation logic based on user input",
      "Price and feature-based analysis",
      "Clean UI for user interaction"
    ],
    techStack: ["Python", "Streamlit", "Pandas"],
    impact: [
      "Demonstrates recommendation system fundamentals",
      "Focuses on user-centric design and usability",
      "Shows ability to combine logic + data for decision-making"
    ],
    links: {
      github: "https://github.com/Nivas-R/smart-deal-hub",
      live: "https://smart-deal-hub.vercel.app/"
    },
    color: "from-white to-text-muted"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-3 uppercase group cursor-default">
            PRODUCT <span className="text-neon-lime group-hover:animate-glitch inline-block">SHOWCASE</span>
          </h2>
          <p className="text-text-muted font-mono text-[10px] tracking-widest uppercase">
            End-to-End Data Solutions & Development
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Visual Side */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative aspect-video bg-base-dark border border-white/10 overflow-hidden group-hover:border-neon-lime/50 transition-all">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-neon-lime opacity-40 font-mono text-3xl font-bold tracking-tighter mb-2">
                          {project.title.toUpperCase()}
                        </div>
                        <div className="text-white/20 text-[10px] font-mono uppercase tracking-[0.3em]">
                          {project.subtitle}
                        </div>
                      </div>
                    </div>
                    {/* Decorative Data Lines */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, li) => (
                        <motion.div 
                          key={li}
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 3 + li, repeat: Infinity, ease: "linear" }}
                          className="h-[1px] w-full bg-neon-lime/10 absolute"
                          style={{ top: `${12 * li}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-neon-lime font-mono text-[10px] uppercase tracking-widest">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, ti) => (
                        <span key={ti} className="px-3 py-1 bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {project.links && (
                      <>
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold text-xs"
                        >
                          <Github className="w-4 h-4" />
                          SOURCE
                        </a>
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neon-lime text-black font-bold hover:shadow-[0_0_20px_rgba(199,240,0,0.3)] transition-all text-xs"
                        >
                          <ExternalLink className="w-4 h-4" />
                          DEPLOY
                        </a>
                      </>
                    )}
                    {!project.links && (
                      <div className="w-full py-3 border border-white/10 text-center text-text-muted font-mono text-[10px] uppercase tracking-widest">
                        {project.status}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-2">
                    <div className="text-neon-lime font-mono text-[10px] uppercase tracking-widest">
                      PROJECT_0{i + 1}
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter group-hover:text-neon-lime transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neon-lime/60 font-mono text-xs uppercase tracking-widest">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-text-main text-lg leading-relaxed font-light">
                    {project.overview}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-neon-lime font-mono text-[10px] uppercase tracking-widest">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {project.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start gap-3 text-text-muted text-sm">
                          <CheckCircle2 className="w-4 h-4 text-neon-lime mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-white/5">
                    <h4 className="text-neon-lime font-mono text-[10px] uppercase tracking-widest">Impact</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.impact.map((imp, ii) => (
                        <div key={ii} className="flex items-center gap-3 text-text-main text-sm font-medium italic">
                          <div className="w-1.5 h-1.5 bg-neon-lime rounded-full" />
                          "{imp}"
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Numbering */}
              <div className="absolute -top-16 -left-16 text-[12rem] font-bold text-white/[0.02] pointer-events-none select-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
