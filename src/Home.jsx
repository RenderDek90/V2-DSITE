import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Projects from './components/Projects';
import imageProfile from './images/MukaDardar3.png';
import React, { useState, useEffect, useRef } from 'react';
import TypedText from './js/TypedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import 'swiper/css';
import './css/typing.css';

const Home = ({ data, isPending, error }) => {
  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 20 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.4 }}>
      {/* Head Section */}
      <div className="up-section flex flex-col justify-center items-center gap-5 p-10 min-h-screen lg:min-h-full relative overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Abstract Glassmorphism Background Overlay */}
        <div className="absolute inset-0 bg-glass-gradient pointer-events-none z-0"></div>

        <div className="flex flex-col gap-10 sm:gap-16 items-center justify-center rounded-2xl overflow-hidden relative z-10 w-full lg:max-w-4xl mx-auto glass-panel p-8 sm:p-16">
          <motion.div className="w-full text-center" variants={containerVariants} initial="hidden" animate="visible">
            <div className="w-full">
              <motion.p variants={childVariants} className="sm:text-7xl text-5xl font-bold tracking-tighter text-gradient-primary drop-shadow-sm">Darren Ezra</motion.p>
              <motion.div variants={childVariants} className="type-effect-text mt-4">
                <p className="sm:text-4xl text-2xl font-medium text-slate-500">
                  I'm a <TypedText />
                </p>
              </motion.div>
            </div>
            <motion.div variants={childVariants} className="flex flex-col sm:flex-row justify-center items-center sm:mt-10 mt-6 text-sm sm:text-base gap-3">
              <p className="text-center font-medium tracking-wide text-slate-400">
                <span className="hover:text-accent-primary transition-colors duration-300">RPA Tech Lead</span> <span className="text-slate-300 mx-2">|</span>{' '}
                <span className="hover:text-accent-primary transition-colors duration-300">Web Developer</span> <span className="text-slate-300 mx-2">|</span>{' '}
                <span className="hover:text-accent-primary transition-colors duration-300">Graphics Designer</span> <span className="text-slate-300 mx-2">|</span>{' '}
                <span className="hover:text-accent-primary transition-colors duration-300">Video Editor</span>{' '}
              </p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          className="text-center sm:mt-12 mt-8 glass-panel p-6 shadow-lg hover:shadow-[0_0_30px_var(--accent-tertiary)] duration-300 ease-in-out relative z-10 w-[90%] sm:w-fit max-w-2xl mx-auto border-accent-tertiary/50"
        >
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-accent-primary blur-[2px]"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-accent-secondary blur-[2px]"></div>
          <p className="text-slate-800 dark:text-white text-lg sm:text-xl font-medium italic">"I can do all this through Him who gives me strength."</p>
          <p className="text-accent-primary font-mono mt-2 tracking-widest text-sm">~ Philippians 4:13</p>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Home;
