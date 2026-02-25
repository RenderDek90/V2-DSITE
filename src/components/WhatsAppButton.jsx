import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // You can replace this with your actual WhatsApp link later
  const whatsappUrl = "https://wa.me/1234567890?text=I'm%20interested%20in%20your%20portfolio!";

  return (
    <motion.a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(37,211,102,0.6)] cursor-pointer"
      style={{
        boxShadow: "0 0 15px #25D366, 0 0 30px #25D366",
        animation: "pulse-green 2s infinite"
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
      
      <style>{`
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </motion.a>
  );
};

export default WhatsAppButton;
