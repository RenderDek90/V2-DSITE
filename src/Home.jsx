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
      <div className="up-section flex flex-col justify-center sm:items-start items-center gap-5 p-10 min-h-screen lg:min-h-full relative bg-cyber-black overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Cyberpunk background grid overlay */}
        <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none z-0 mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-neon-purple rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="flex sm:flex-row flex-col gap-5 text-white text-left items-center rounded-lg overflow-hidden relative z-10 w-full pl-0 sm:pl-10">
          <motion.div className="p-5" variants={containerVariants} initial="hidden" animate="visible">
            <div className="w-full">
              <motion.p variants={childVariants} className="sm:text-7xl text-5xl sm:text-left text-center font-bold glitch hover-glitch tracking-tighter" data-text="Darren Ezra">Darren Ezra</motion.p>
              <motion.div variants={childVariants} className="type-effect-text sm:text-left text-center mt-2">
                <p className="sm:text-4xl text-lg font-medium text-gray-300">
                  I'm a <TypedText />
                </p>
              </motion.div>
            </div>
            <motion.div variants={childVariants} className="flex flex-row sm:justify-start justify-center items-center sm:mt-8 mt-4 text-sm sm:text-base">
              <hr className="w-[50px] mr-4 border-neon-cyan shadow-[0_0_10px_#00f3ff]" />
              <p className="text-center font-mono tracking-widest text-gray-400">
                <span className="hover:text-neon-cyan hover:text-glow-cyan duration-300 ease-in-out cursor-crosshair">RPA Tech Lead</span> <span className="text-neon-pink mx-2">|</span>{' '}
                <span className="hover:text-neon-cyan hover:text-glow-cyan duration-300 ease-in-out cursor-crosshair">Web Developer</span> <span className="text-neon-pink mx-2">|</span>{' '}
                <span className="hover:text-neon-cyan hover:text-glow-cyan duration-300 ease-in-out cursor-crosshair">Graphics Designer</span> <span className="text-neon-pink mx-2">|</span>{' '}
                <span className="hover:text-neon-cyan hover:text-glow-cyan duration-300 ease-in-out cursor-crosshair">Video Editor</span>{' '}
              </p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          className="text-center sm:mt-12 mt-8 bg-[#111] border border-neon-purple p-6 shadow-neon-purple hover:shadow-[0_0_30px_#b026ff] duration-300 ease-in-out rounded-sm cyber-card relative z-10 w-[90%] sm:w-fit max-w-2xl mx-auto sm:ml-10"
        >
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-neon-cyan"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-neon-pink"></div>
          <p className="text-white text-lg sm:text-xl font-medium italic">"I can do all this through Him who gives me strength."</p>
          <p className="text-neon-cyan font-mono mt-2 tracking-widest text-sm">~ Philippians 4:13</p>
        </motion.div>
      </div>

      <div className="Footer sm:flex sm:flex-row justify-center items-center w-full bg-[#252525]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:w-full sm:px-12 p-6">
          <div className="sm:mt-2 flex flex-row gap-5 text-white justify-center items-center">
            <Link to="https://www.instagram.com/darrenezra_/" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-fuchsia-400 no-underline">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </Link>
            <Link to="https://www.linkedin.com/in/darren-ezra-9090/" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-blue-700 no-underline">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </Link>
            <Link to="https://github.com/RenderDek90" target="_blank" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-orange-500 no-underline">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </Link>
            <Link to="mailto:darrenezra902@gmail.com" className="lg:text-2xl text-lg hover:scale-110 duration-300 ease-in-out hover:text-cyan-500 no-underline">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </Link>
          </div>
          <div className="w-full sm:w-fit py-2">
            <p className="text-white text-sm text-center">&copy; Copyright 2023 - Darren Ezra - V2</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
