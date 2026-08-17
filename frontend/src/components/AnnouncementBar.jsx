import React from 'react';
import { motion } from 'framer-motion';

// Premium Motion Physics & Cubic Bezier Tokens
const LUXURY_EASE = [0.25, 1, 0.5, 1];

export const buttonMotion = {
  hover: { 
    scale: 1.05, 
    y: -2,
    boxShadow: "0 20px 25px -5px rgba(176, 125, 135, 0.35), 0 8px 10px -6px rgba(176, 125, 135, 0.25)",
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  tap: { 
    scale: 0.95,
    transition: { type: "spring", stiffness: 500, damping: 15 }
  }
};

export default function AnnouncementBar({ onSignUpClick }) {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: LUXURY_EASE }}
      onClick={onSignUpClick}
      className="w-full bg-[#B07D87] text-white py-2.5 px-4 text-center cursor-pointer hover:bg-[#9E6772] transition-colors z-50 relative group select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs md:text-sm font-sans tracking-wide uppercase">
        <i className="fa-solid fa-sparkles text-xs text-rose-200 group-hover:rotate-12 transition transform"></i>
        <span className="font-semibold tracking-wider">For Event Planning Tips and Inspo SIGN UP!</span>
        <i className="fa-solid fa-arrow-right text-xs opacity-70 group-hover:translate-x-1 transition transform"></i>
      </div>
    </motion.div>
  );
}
