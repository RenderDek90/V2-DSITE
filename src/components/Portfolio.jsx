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

      <div className="flex lg:justify-start lg:items-start justify-center items-center lg:flex-col px-5 lg:top-[40%] lg:fixed top-0 sticky z-[99] lg:w-fit lg:bg-transparent bg-[#050505] border-b lg:border-none border-neon-cyan">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:grid lg:grid-cols-1 text-left flex lg:flex-col gap-3 py-5 "
        >
          <a href="#website" className="nav-port hover:scale-105 hover:font-bold font-mono hover:text-neon-cyan hover:text-glow-cyan uppercase tracking-widest text-sm lg:text-gray-400 text-gray-300 duration-300 ease-in-out">
            Coding
          </a>
          <a href="#creative" className="nav-port hover:scale-105 hover:font-bold font-mono hover:text-neon-pink hover:text-glow-pink uppercase tracking-widest text-sm lg:text-gray-400 text-gray-300 duration-300 ease-in-out">
            Creative
          </a>
          <a href="#video-editor" className="nav-port hover:scale-105 hover:font-bold font-mono hover:text-neon-purple hover:text-glow-purple uppercase tracking-widest text-sm lg:text-gray-400 text-gray-300 duration-300 ease-in-out">
            Video Editor
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
