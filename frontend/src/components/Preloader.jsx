import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Preloader Component for Suraj Light's Ranthambore
 * Featuring the official Brand Logo with glowing royal illumination aura
 * and smooth curtain exit matching the website's luxury theme.
 */
export default function Preloader({ onComplete, duration = 2800 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="suraj-lights-preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 1.0,
              ease: [0.76, 0, 0.24, 1], // Cinematic curtain slide-up
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070b14] text-[#FAF6F0] select-none overflow-hidden"
        >
          {/* ================================================================= */}
          {/* 1. AMBIENT BACKGROUND GLOWS (Breathing Royal Lighting Aura)      */}
          {/* ================================================================= */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-tr from-amber-600/25 via-yellow-500/20 to-rose-600/15 blur-[120px] pointer-events-none"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-gradient-to-br from-yellow-300/20 via-amber-500/30 to-red-600/10 blur-[90px] pointer-events-none"
          />

          {/* ================================================================= */}
          {/* 2. CENTER STAGE: OFFICIAL LOGO WITH GLOWING ILLUMINATION         */}
          {/* ================================================================= */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            
            <div className="relative mb-6 flex items-center justify-center">
              
              {/* Pulsating Golden Halo behind Logo */}
              <motion.div
                animate={{
                  scale: [1, 1.28, 1],
                  opacity: [0.4, 0.85, 0.4],
                  boxShadow: [
                    '0 0 35px rgba(245, 158, 11, 0.35)',
                    '0 0 75px rgba(251, 191, 36, 0.75)',
                    '0 0 35px rgba(245, 158, 11, 0.35)',
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-amber-400/30 bg-amber-500/10 backdrop-blur-md"
              />

              {/* Rotating Celestial Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-dashed border-amber-300/25"
              />

              {/* Suraj Light's Official Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: 1,
                  filter: [
                    'drop-shadow(0 0 15px rgba(251, 191, 36, 0.5))',
                    'drop-shadow(0 0 30px rgba(245, 158, 11, 0.9))',
                    'drop-shadow(0 0 15px rgba(251, 191, 36, 0.5))',
                  ],
                }}
                transition={{
                  scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                  filter: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
                  opacity: { duration: 0.8, ease: 'easeOut' },
                }}
                className="relative z-10 p-2 sm:p-3"
              >
                <img
                  src="/logo.png"
                  alt="Suraj Light House Logo"
                  className="h-24 sm:h-32 md:h-36 w-auto object-contain max-w-[240px] sm:max-w-[280px]"
                />
              </motion.div>
            </div>

            {/* =============================================================== */}
            {/* 3. ROYAL BRAND SUBTITLE & PALETTE COMPLEMENTS                   */}
            {/* =============================================================== */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="space-y-1"
            >
              <h2 className="text-sm sm:text-base md:text-lg font-serif tracking-[0.35em] sm:tracking-[0.45em] uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4D2] via-[#FBD38D] to-[#E2A03F] drop-shadow-[0_2px_12px_rgba(245,158,11,0.4)]">
                RANTHAMBORE
              </h2>
              <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.36em] text-rose-300/90 font-medium uppercase">
                Royal Illuminations & Luxury Tenting
              </p>
            </motion.div>

            {/* Golden Divider Line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '140px' }}
              transition={{ duration: 1.0, delay: 0.4, ease: 'easeInOut' }}
              className="h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent my-3.5"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[10px] sm:text-[11px] text-amber-100/60 font-light tracking-[0.22em] uppercase max-w-xs"
            >
              Crafting Grand Memories Under The Lights
            </motion.p>

            {/* Shimmering Gold Loading Track */}
            <div className="w-44 sm:w-56 h-[2px] bg-amber-950/70 rounded-full overflow-hidden mt-6 relative border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: 'easeInOut',
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-amber-300 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
