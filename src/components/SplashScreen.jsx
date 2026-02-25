import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ finishLoading }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay before showing text
    const timer1 = setTimeout(() => setIsReady(true), 200);
    // Total splash duration
    const timer2 = setTimeout(() => finishLoading(), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cyber-black overflow-hidden"
      >
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none z-0 mix-blend-screen"></div>
        {/* Neon glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: isReady ? 1 : 0, scale: isReady ? 1 : 0.8, y: isReady ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut', type: "spring", bounce: 0.4 }}
          className="relative z-10 flex flex-col items-center justify-center text-center"
        >
          {/* Main Title */}
          <h1 
            className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 tracking-tighter uppercase mb-4 glitch max-w-full drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            data-text="D'SITE"
          >
            D'SITE
          </h1>
          
          <div className="flex items-center gap-4 mt-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "40px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[2px] bg-neon-cyan shadow-[0_0_10px_#00f3ff]" 
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-gray-400 font-mono tracking-widest text-sm uppercase"
            >
              by Darren Ezra
            </motion.p>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "40px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[2px] bg-neon-pink shadow-[0_0_10px_#ff003c]" 
            />
          </div>

          {/* Loading indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12 flex flex-col items-center"
          >
             <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_10px_#00f3ff]"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
             </div>
             <p className="text-neon-cyan font-mono text-xs tracking-[0.3em] mt-3 animate-pulse">INITIALIZING...</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
