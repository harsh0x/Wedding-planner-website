import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Custom 404 Not Found Page for Suraj Light House
 * Features a flickering vintage event bulb graphic, royal dark lighting theme,
 * and animated golden action buttons.
 */
export default function NotFound({ onOpenBooking }) {
  return (
    <div className="relative min-h-[85vh] sm:min-h-screen bg-[#070b14] text-[#FAF6F0] flex flex-col items-center justify-center px-4 py-16 sm:py-24 overflow-hidden select-none">
      
      {/* ================================================================= */}
      {/* 1. AMBIENT BACKGROUND GLOWS & LIGHT LEAKS                         */}
      {/* ================================================================= */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-600/20 via-yellow-500/15 to-transparent blur-[140px] pointer-events-none -top-24 -left-24"
      />

      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-rose-600/15 via-amber-500/15 to-transparent blur-[130px] pointer-events-none -bottom-24 -right-24"
      />

      {/* Decorative Royal Lattice Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#F59E0B 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
        
        {/* ================================================================= */}
        {/* 2. FLICKERING EVENT LIGHT BULB / CHANDELIER GRAPHIC              */}
        {/* ================================================================= */}
        <div className="relative mb-6 sm:mb-8 flex flex-col items-center">
          
          {/* Wire hanging down */}
          <div className="w-[2px] h-12 sm:h-16 bg-gradient-to-b from-transparent via-amber-700/60 to-amber-500/80 mb-0" />

          {/* Lamp Socket */}
          <div className="w-6 h-3 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 rounded-t-sm border border-amber-600/40" />

          {/* Flickering Bulb & Glow */}
          <div className="relative flex items-center justify-center">
            
            {/* Erratic Flickering Golden Glow Halo */}
            <motion.div
              animate={{
                opacity: [0.8, 0.2, 0.9, 0.1, 0.85, 0.3, 0.95, 0.15, 0.8],
                scale: [1, 0.95, 1.08, 0.92, 1.05, 0.96, 1.1, 0.94, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
              }}
              className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-amber-400/25 blur-2xl pointer-events-none"
            />

            {/* Bulb SVG Icon with Animated Flicker */}
            <motion.div
              animate={{
                opacity: [1, 0.3, 0.9, 0.2, 1, 0.4, 1, 0.25, 1],
                filter: [
                  'drop-shadow(0 0 12px rgba(251,191,36,0.8))',
                  'drop-shadow(0 0 2px rgba(251,191,36,0.2))',
                  'drop-shadow(0 0 18px rgba(245,158,11,1))',
                  'drop-shadow(0 0 1px rgba(251,191,36,0.1))',
                  'drop-shadow(0 0 14px rgba(251,191,36,0.9))',
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="p-3 text-amber-300 relative z-10"
            >
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Bulb Glass Outline */}
                <path d="M9 18h6" stroke="#FDE68A" strokeWidth="2" />
                <path d="M10 22h4" stroke="#FBBF24" strokeWidth="2" />
                <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" fill="url(#bulb-glow-grad)" stroke="#FDE68A" strokeWidth="1.75" />
                
                {/* Broken / Flickering Filament */}
                <path d="M10 9l1.5 2 1-3 1.5 2" stroke="#FFF" strokeWidth="1.5" strokeDasharray="3 2" />

                <defs>
                  <linearGradient id="bulb-glow-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FDE68A" stopOpacity="0.4" />
                    <stop offset="0.7" stopColor="#F59E0B" stopOpacity="0.25" />
                    <stop offset="1" stopColor="#B45309" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. 404 NUMERICAL & HEADING TYPOGRAPHY                             */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-2 mb-6"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-500/60" />
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4D2] via-[#FBD38D] to-[#E2A03F] drop-shadow-[0_4px_24px_rgba(245,158,11,0.45)]">
              404
            </h1>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold tracking-wide text-amber-100/95">
            Looks like the lights went out here
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-amber-200/70 font-light tracking-wide max-w-lg mx-auto leading-relaxed pt-1">
            This space is currently unlit or the royal setup you are seeking has been moved. Let us illuminate your path back to the main stage.
          </p>
        </motion.div>

        {/* Decorative Golden Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mb-8"
        />

        {/* ================================================================= */}
        {/* 4. ACTIONS & GLOWING RETURN BUTTONS                              */}
        {/* ================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Glowing Return to Homepage Button */}
          <Link
            to="/"
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-serif font-bold text-xs sm:text-sm tracking-[0.18em] uppercase text-[#0B0F19] bg-gradient-to-r from-[#FDE68A] via-[#FBBF24] to-[#F59E0B] shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_40px_rgba(251,191,36,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden w-full sm:w-auto"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            
            <i className="fa-solid fa-arrow-left text-xs transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Return to Homepage</span>
          </Link>

          {/* Quick Contact / Book Lighting Action */}
          {onOpenBooking && (
            <button
              onClick={() => onOpenBooking('Event Consultation')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-serif font-medium text-xs sm:text-sm tracking-[0.16em] uppercase text-amber-200/90 hover:text-white bg-amber-950/30 hover:bg-amber-900/40 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <i className="fa-solid fa-wand-magic-sparkles text-amber-400 text-xs" />
              <span>Request Lighting Setup</span>
            </button>
          )}
        </motion.div>

        {/* Helpful Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-6 border-t border-amber-500/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-amber-300/60"
        >
          <span className="text-amber-400/40 font-serif uppercase tracking-widest text-[10px]">Quick Portals:</span>
          <Link to="/about" className="hover:text-amber-200 transition-colors">About Us</Link>
          <span className="text-amber-500/20">•</span>
          <Link to="/gallery" className="hover:text-amber-200 transition-colors">Lighting Gallery</Link>
          <span className="text-amber-500/20">•</span>
          <Link to="/contact" className="hover:text-amber-200 transition-colors">Contact Royal Concierge</Link>
        </motion.div>

      </div>
    </div>
  );
}
