import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../css/portfolio.css';
import Coding from '../Portofolio/Coding';
import Creative from '../Portofolio/Creative';
import VideoEditor from '../VideoEditor/VideoEditor';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 20 },
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.4 }} className="bg-cyber-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none z-0 mix-blend-screen"></div>
      <div className="absolute top-[30%] left-[-10%] w-64 h-64 bg-neon-cyan rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="flex justify-center lg:justify-start items-center lg:items-start lg:flex-col lg:top-[35%] lg:fixed top-0 sticky z-[99] w-full lg:w-fit glass-panel lg:border-y-0 lg:border-l-0 lg:border-r border-b border-x-0 border-t-0 !rounded-none lg:bg-transparent bg-black/60 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-row lg:flex-col gap-2 sm:gap-4 py-4 px-2 sm:px-6 lg:pl-0 lg:pr-8 overflow-x-auto w-full items-center lg:items-start max-w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <a href="#website" className="group flex items-center gap-3 px-5 py-3 bg-black/40 backdrop-blur-md border border-white/5 rounded-full lg:rounded-r-full lg:rounded-l-none hover:bg-black/60 hover:border-accent-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] whitespace-nowrap">
            <div className="hidden sm:block w-2 h-2 rounded-full bg-slate-600 group-hover:bg-accent-primary group-hover:shadow-[0_0_10px_rgba(14,165,233,0.8)] transition-all duration-300"></div>
            <span className="font-semibold tracking-wider text-xs sm:text-sm text-slate-400 group-hover:text-accent-primary uppercase duration-300">Coding</span>
          </a>

          <a href="#creative" className="group flex items-center gap-3 px-5 py-3 bg-black/40 backdrop-blur-md border border-white/5 rounded-full lg:rounded-r-full lg:rounded-l-none hover:bg-black/60 hover:border-accent-secondary/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] whitespace-nowrap">
            <div className="hidden sm:block w-2 h-2 rounded-full bg-slate-600 group-hover:bg-accent-secondary group-hover:shadow-[0_0_10px_rgba(236,72,153,0.8)] transition-all duration-300"></div>
            <span className="font-semibold tracking-wider text-xs sm:text-sm text-slate-400 group-hover:text-accent-secondary uppercase duration-300">Creative</span>
          </a>

          <a href="#video-editor" className="group flex items-center gap-3 px-5 py-3 bg-black/40 backdrop-blur-md border border-white/5 rounded-full lg:rounded-r-full lg:rounded-l-none hover:bg-black/60 hover:border-accent-tertiary/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(167,139,250,0.3)] whitespace-nowrap">
            <div className="hidden sm:block w-2 h-2 rounded-full bg-slate-600 group-hover:bg-accent-tertiary group-hover:shadow-[0_0_10px_rgba(167,139,250,0.8)] transition-all duration-300"></div>
            <span className="font-semibold tracking-wider text-xs sm:text-sm text-slate-400 group-hover:text-accent-tertiary uppercase duration-300">Video Editor</span>
          </a>
        </motion.div>
      </div>

      {/* Portfolio */}
      <div className="py-5 max-w-[80%] mx-auto relative z-10">
        <Coding title="Coding" />
        <Creative title="Creative" />
        <VideoEditor title="Video Editor" />
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Portfolio;
