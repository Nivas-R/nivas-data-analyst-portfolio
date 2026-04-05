import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const BackgroundSystem: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const graphLines = useMemo(() => [...Array(2)], []);
  const candlestickTraces = useMemo(() => [...Array(4)], []);
  const floatingNumbers = useMemo(() => [...Array(5)], []);
  const glowingNodes = useMemo(() => [...Array(3)], []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] bg-base-black overflow-hidden pointer-events-none">
      {/* Layer 1: Deep Gradient + Grain */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-black via-base-dark to-base-black opacity-80" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      {/* Layer 2: Perspective Grid */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 bg-grid mask-radial opacity-20 transform -skew-y-12 origin-top will-change-transform"
      />

      {/* Layer 3: Animated Line Graphs */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {graphLines.map((_, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 1000 200"
            className="absolute w-full h-40 will-change-transform"
            style={{ top: `${30 + i * 40}%` }}
            initial={{ x: -1000 }}
            animate={{ x: 1000 }}
            transition={{ 
              duration: 25 + i * 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 5
            }}
          >
            <path
              d={`M0,100 Q250,${50 + i * 50} 500,100 T1000,100`}
              fill="none"
              stroke="#C7F000"
              strokeWidth="1"
            />
          </motion.svg>
        ))}
      </div>

      {/* Layer 4: Candlestick Traces */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-around px-20">
        {candlestickTraces.map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: [30, 60, 40, 80, 30] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-neon-lime/30 rounded-full will-change-[height]"
          />
        ))}
      </div>

      {/* Layer 5: Floating Numbers */}
      <div className="absolute inset-0 font-mono text-[8px] text-neon-lime/5">
        {floatingNumbers.map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${(i + 1) * 15}%`, 
              y: `${20 + i * 15}%`,
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-30%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 20 + i * 2, 
              repeat: Infinity, 
              delay: i * 2 
            }}
            className="absolute will-change-transform"
          >
            {(0.1234 + i * 0.1).toFixed(4)}
          </motion.div>
        ))}
      </div>

      {/* Layer 6: Glowing Nodes */}
      <div className="absolute inset-0">
        {glowingNodes.map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: i * 2 }}
            className="absolute w-1 h-1 bg-neon-lime rounded-full blur-[1px]"
            style={{ 
              left: `${20 + i * 30}%`, 
              top: `${10 + i * 25}%` 
            }}
          />
        ))}
      </div>

      {/* Layer 9: Soft Scanning Beams */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-full h-[40vh] bg-gradient-to-b from-transparent via-neon-lime/10 to-transparent blur-3xl will-change-transform"
        />
        <motion.div 
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 4 }}
          className="w-full h-[20vh] bg-gradient-to-b from-transparent via-accent-teal/5 to-transparent blur-2xl will-change-transform"
        />
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
});
