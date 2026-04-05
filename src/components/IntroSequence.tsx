import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroSequenceProps {
  onComplete: () => void;
}

const DecodingText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("")
          .map((char, index) => {
            if (index < iteration) return char;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

export const IntroSequence: React.FC<IntroSequenceProps> = React.memo(({ onComplete }) => {
  const [scene, setScene] = useState(1);
  const [bootText, setBootText] = useState<string[]>([]);
  const fullBootLines = useMemo(() => [
    "PREPARING YOUR EXPERIENCE...",
    "LOADING ANALYTICS MODULES...",
    "OPTIMIZING VISUAL INTERFACE...",
    "WELCOME."
  ], []);

  const tunnelLayers = useMemo(() => [...Array(20)], []);
  const particles = useMemo(() => [...Array(30)], []);

  useEffect(() => {
    // Scene 1: Data Tunnel (0s - 2.5s)
    const t1 = setTimeout(() => setScene(2), 2500);
    // Scene 2: Transition (2.5s - 3.5s)
    const t2 = setTimeout(() => setScene(3), 3500);
    // Scene 3: AI Boot (3.5s - 5s)
    const t3 = setTimeout(() => setScene(4), 5000);
    // Scene 4: Final Reveal (5s - 6s)
    const t4 = setTimeout(() => onComplete(), 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  useEffect(() => {
    if (scene === 3) {
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < fullBootLines.length) {
          setBootText(prev => [...prev, fullBootLines[currentLine]]);
          currentLine++;
        } else {
          clearInterval(interval);
        }
      }, 400);
      return () => clearInterval(interval);
    }
  }, [scene, fullBootLines]);

  return (
    <div className="fixed inset-0 z-[100] bg-base-black flex items-center justify-center overflow-hidden">
      {/* Scanning Line Overlay */}
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-50 pointer-events-none h-[2px] bg-neon-lime/20 blur-sm will-change-transform"
      />

      <AnimatePresence mode="wait">
        {scene === 1 && (
          <motion.div
            key="scene1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Data Tunnel Effect */}
            <div className="absolute inset-0 perspective-1000">
              {tunnelLayers.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ z: -2000, opacity: 0 }}
                  animate={{ 
                    z: 1200, 
                    opacity: [0, 1, 0],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: i * 0.12,
                    ease: "easeIn"
                  }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
                >
                  <div 
                    className="border border-neon-lime/20 w-[90vw] h-[90vh] flex items-center justify-center relative"
                    style={{ transform: `rotate(${i * 18}deg)` }}
                  >
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-neon-lime/10 font-mono text-[10px]">
                      {((i + 1) * 0xABC).toString(16).toUpperCase()}
                    </span>
                    <div className="absolute inset-0 border-l border-r border-neon-lime/5" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Central Core Effect */}
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 2.5, ease: "circOut" }}
              className="absolute w-64 h-64 border border-neon-lime/20 rounded-full flex items-center justify-center will-change-transform"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-neon-lime/5 rounded-full blur-2xl"
              />
              <div className="w-full h-full border border-dashed border-neon-lime/10 rounded-full animate-spin-slow" />
            </motion.div>

            <motion.div 
              initial={{ scale: 0.5, opacity: 0, letterSpacing: "2em" }}
              animate={{ scale: 1, opacity: 1, letterSpacing: "0.8em" }}
              transition={{ duration: 2.5, ease: "circOut" }}
              className="z-10 text-white font-display text-3xl md:text-6xl font-light tracking-tighter relative"
            >
              WELCOME
              <motion.div 
                animate={{ opacity: [0, 1, 0], x: [-5, 5, -5] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 1 }}
                className="absolute inset-0 text-neon-lime opacity-30 blur-sm"
              >
                WELCOME
              </motion.div>
            </motion.div>

            {/* Floating Data Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {particles.map((_, i) => (
                <motion.div
                  key={`p-${i}`}
                  initial={{ 
                    x: `${(i * 3.33)}%`, 
                    y: "100%",
                    opacity: 0
                  }}
                  animate={{ 
                    y: "-10%",
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 3 + (i % 5), 
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  className="absolute w-1 h-1 bg-neon-lime rounded-full will-change-transform"
                />
              ))}
            </div>
          </motion.div>
        )}

        {scene === 2 && (
          <motion.div
            key="scene2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={{ width: "80%", height: "60%" }}
              className="border border-neon-yellow/30 relative flex items-center justify-center will-change-[width,height]"
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-yellow" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-yellow" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-yellow" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-yellow" />
              
              <motion.div 
                animate={{ opacity: [0, 1, 0.5, 1] }}
                transition={{ duration: 0.2, repeat: 5 }}
                className="text-neon-yellow font-mono text-sm"
              >
                ESTABLISHING CONNECTION...
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {scene === 3 && (
          <motion.div
            key="scene3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-md p-8 font-mono"
          >
            <div className="space-y-2 mb-8">
              {bootText.map((line, i) => (
                <div key={i} className="text-neon-yellow text-sm flex items-center gap-2">
                  <span className="opacity-50">[{i + 1}]</span>
                  {line}
                </div>
              ))}
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-2 h-4 bg-neon-yellow inline-block"
              />
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-neon-yellow shadow-[0_0_10px_rgba(230,255,0,0.5)]"
              />
            </div>
          </motion.div>
        )}

        {scene === 4 && (
          <motion.div
            key="scene4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center relative px-4"
          >
            {/* Glitch Background Effect */}
            <motion.div 
              animate={{ 
                opacity: [0, 0.4, 0, 0.2, 0],
                x: [-20, 20, -10, 10, 0],
                y: [5, -5, 2, -2, 0],
                skew: [0, 10, -10, 5, 0]
              }}
              transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1.5 }}
              className="absolute inset-0 bg-neon-lime/20 blur-[100px] -z-10 will-change-transform"
            />

            {/* Chromatic Aberration Layers */}
            <div className="relative">
              <motion.h1 
                initial={{ y: 20, opacity: 0, letterSpacing: "1em" }}
                animate={{ y: 0, opacity: 1, letterSpacing: "0.1em" }}
                className="text-white text-5xl md:text-8xl font-bold tracking-tighter mb-4 relative z-10"
              >
                NIVAS RAJAGOPAL
                {/* Red Glitch Layer */}
                <motion.span 
                  animate={{ 
                    x: [-2, 2, -1, 1, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 0.5 }}
                  className="absolute inset-0 text-red-500 -z-10 translate-x-1 will-change-transform"
                >
                  NIVAS RAJAGOPAL
                </motion.span>
                {/* Blue Glitch Layer */}
                <motion.span 
                  animate={{ 
                    x: [2, -2, 1, -1, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 0.7 }}
                  className="absolute inset-0 text-blue-500 -z-10 -translate-x-1 will-change-transform"
                >
                  NIVAS RAJAGOPAL
                </motion.span>
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-neon-lime to-transparent mb-6"
            />

            <div className="flex flex-col items-center gap-4">
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-neon-lime font-mono tracking-[0.5em] text-[10px] md:text-sm uppercase relative"
              >
                Data Analyst // AI Enthusiast
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.05, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 bg-neon-lime/20 blur-sm"
                />
              </motion.p>

              {/* Decoding Text Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="font-mono text-[8px] text-white/30 tracking-widest uppercase"
              >
                <DecodingText text="INITIALIZING_CORE_SYSTEMS" />
              </motion.div>
            </div>

            {/* System Ready Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-12 flex items-center justify-center gap-2 text-[10px] font-mono text-white/40"
            >
              <div className="w-1 h-1 bg-neon-lime rounded-full animate-pulse" />
              <span>SYSTEM_READY_FOR_DEPLOYMENT</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
