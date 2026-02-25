import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Contact = () => {
  const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.05 },
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }} className="min-h-screen flex flex-col justify-between pt-24 bg-cyber-black text-white relative">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none z-0"></div>
      
      <div className="flex-grow flex items-center justify-center p-6 relative z-10 w-full max-w-4xl mx-auto">
        <div className="w-full bg-[#111] p-8 md:p-12 shadow-neon-pink cyber-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink opacity-20 blur-[50px]"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-cyan opacity-20 blur-[50px]"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 glitch hover-glitch text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink" data-text="INITIATE_CONTACT">
            INITIATE_CONTACT
          </h2>

          <form action="https://formsubmit.co/darrenezra902@gmail.com" method="POST" className="space-y-6">
            {/* Optional config for FormSubmit */}
            <input type="hidden" name="_subject" value="New Subspace Transmission (Portfolio Contact)" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 group-focus-within:text-neon-cyan transition-colors duration-300 uppercase tracking-widest mb-1">Entity Identifier [Name]</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="w-full bg-[#050505] border-b-2 border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-neon-cyan focus:shadow-[0_4px_15px_rgba(0,243,255,0.2)] transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 group-focus-within:text-neon-pink transition-colors duration-300 uppercase tracking-widest mb-1">Subspace Node [Email]</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="w-full bg-[#050505] border-b-2 border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-neon-pink focus:shadow-[0_4px_15px_rgba(255,0,60,0.2)] transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 group-focus-within:text-neon-purple transition-colors duration-300 uppercase tracking-widest mb-1">Comm Channel [Phone Number]</label>
              <input 
                type="tel" 
                name="phone" 
                id="phone" 
                className="w-full bg-[#050505] border-b-2 border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-neon-purple focus:shadow-[0_4px_15px_rgba(176,38,255,0.2)] transition-all duration-300"
                placeholder="+1 234 567 890"
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 group-focus-within:text-neon-cyan transition-colors duration-300 uppercase tracking-widest mb-1">Transmission Data [Message]</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5" 
                required 
                className="w-full bg-[#050505] border-b-2 border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-neon-cyan focus:shadow-[0_4px_15px_rgba(0,243,255,0.2)] transition-all duration-300 resize-none"
                placeholder="Enter your message here..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="cyber-button w-full sm:w-auto px-8 py-4 text-center cursor-pointer flex justify-center items-center gap-2 group"
              >
                <span className="relative z-10 group-hover:tracking-widest transition-all duration-300">Transmit Data</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default Contact;
