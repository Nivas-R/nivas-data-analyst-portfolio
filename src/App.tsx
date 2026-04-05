import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { IntroSequence } from './components/IntroSequence';
import { BackgroundSystem } from './components/BackgroundSystem';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact, Footer } from './components/Contact';

const GlobalEffects = React.memo(() => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [ripples, setRipples] = useState<{ x: number, y: number, id: number }[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (Math.random() > 0.99) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 100);
      }
    };
    const handleClick = (e: MouseEvent) => {
      const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mouseX, mouseY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Global Glitch Class on Body */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { 
          filter: ${glitchActive ? 'url(#chromatic-aberration)' : 'none'};
          transition: filter 0.1s ease;
        }
      `}} />

      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed w-20 h-20 border border-neon-lime rounded-full pointer-events-none z-[100]"
          style={{ left: ripple.x - 40, top: ripple.y - 40 }}
        />
      ))}

      {/* Custom Cursor Glow Trailing */}
      <motion.div 
        className="fixed w-[400px] h-[400px] bg-neon-lime/5 rounded-full blur-[100px] pointer-events-none z-0 will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      <motion.div 
        className="fixed w-[200px] h-[200px] bg-accent-teal/5 rounded-full blur-[80px] pointer-events-none z-0 will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] p-4 bg-neon-lime text-black border border-black/10 hover:shadow-[0_0_20px_rgba(199,240,0,0.4)] transition-all group"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 -rotate-90" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
});

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleIntroComplete = useCallback(() => setShowIntro(false), []);

  return (
    <main className="relative min-h-screen bg-base-black selection:bg-neon-lime selection:text-black cursor-crosshair overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Vignette Effect */}
      <div className="fixed inset-0 z-[98] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      
      {/* CRT Scanline Effect */}
      <div className="fixed inset-0 z-[97] pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {/* Global Chromatic Aberration Filter */}
      <svg className="hidden">
        <filter id="chromatic-aberration">
          <feOffset in="SourceGraphic" dx="-2" dy="0" result="red" />
          <feOffset in="SourceGraphic" dx="2" dy="0" result="blue" />
          <feColorMatrix in="red" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red-only" />
          <feColorMatrix in="blue" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="blue-only" />
          <feBlend in="red-only" in2="blue-only" mode="screen" />
        </filter>
      </svg>

      <AnimatePresence>
        {showIntro && (
          <IntroSequence onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <GlobalEffects />

          {/* Scroll Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-neon-lime z-[60] origin-left"
            style={{ scaleX }}
          />

          <BackgroundSystem />
          
          <div className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
            <Footer />
          </div>
        </motion.div>
      )}
    </main>
  );
}
