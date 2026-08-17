import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/weddingData';

export default function WhyChooseUsSection({ onOpenBooking, onImageClick }) {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];

  const bubbles = IMAGES.whyBubbles || [];

  return (
    <section className="bg-[#B07D87] py-28 px-6 md:px-12 lg:px-16 text-white relative overflow-hidden">
      
      {/* ======================================================== */}
      {/* --- SCATTERED DECORATIVE PHOTO BUBBLES (Matching Design) --- */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: bubble.delay,
            }}
            className={`absolute ${bubble.pos} ${bubble.size} pointer-events-auto`}
          >
            {/* Continuous Organic Floating Motion Wrapper */}
            <motion.div
              animate={{
                y: [0, bubble.floatY, 0],
                x: [0, bubble.floatX, 0],
                rotate: [0, bubble.floatX > 0 ? 3 : -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: bubble.floatDuration,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                zIndex: 30,
                boxShadow: "0 20px 30px -5px rgba(0, 0, 0, 0.4), 0 0 20px 2px rgba(255, 255, 255, 0.6)",
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onImageClick && onImageClick({ url: bubble.url, title: bubble.title })}
              className="w-full h-full rounded-full border-2 border-white/60 hover:border-white overflow-hidden shadow-xl cursor-pointer transition-colors duration-300 relative bg-rose-900/30"
              title={bubble.title}
            >
              <img
                src={bubble.url}
                alt={bubble.title}
                className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ======================================================== */}
      {/* --- CENTER HEADINGS & 3 MAIN FEATURE CARDS --- */}
      {/* ======================================================== */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
        >
          {/* Cursive Subheading */}
          <span className="font-script text-3xl sm:text-4xl md:text-5xl text-rose-200 block mb-2 drop-shadow-sm">
            Why Choose Us
          </span>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal tracking-wide max-w-3xl mx-auto leading-tight mb-16 drop-shadow">
            Crafting weddings that unforgettably align with your absolute dream.
          </h2>
        </motion.div>

        {/* 3 Main Circular Feature Cards (Bespoke Design, Fluid Logistics, Luxury Venues) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
          
          {/* Card 1: Bespoke Design */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: LUXURY_EASE }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 cursor-pointer relative bg-rose-900/20" 
              onClick={() => onImageClick({ url: IMAGES.why1, title: "Bespoke Design Experience" })}
            >
              <img 
                src={IMAGES.why1} 
                alt="Bespoke Design" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
            </motion.div>
            <h3 className="font-serif text-2xl text-white font-medium mb-3">
              Bespoke Design
            </h3>
            <p className="font-sans text-xs text-white/90 leading-relaxed font-light max-w-xs">
              We turn your unique love story into a custom visual experience, designing every detail to match your personal style perfectly.
            </p>
          </motion.div>

          {/* Card 2: Fluid Logistics */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.28, ease: LUXURY_EASE }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 cursor-pointer relative bg-rose-900/20" 
              onClick={() => onImageClick({ url: IMAGES.why2, title: "Fluid Logistics Coordination" })}
            >
              <img 
                src={IMAGES.why2} 
                alt="Fluid Logistics" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
            </motion.div>
            <h3 className="font-serif text-2xl text-white font-medium mb-3">
              Fluid Logistics
            </h3>
            <p className="font-sans text-xs text-white/90 leading-relaxed font-light max-w-xs">
              From vendor timelines to smooth on-day coordination, our team manages the chaos so you can enjoy your day stress-free.
            </p>
          </motion.div>

          {/* Card 3: Luxury Venues */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.40, ease: LUXURY_EASE }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 cursor-pointer relative bg-rose-900/20" 
              onClick={() => onImageClick({ url: IMAGES.why3, title: "Luxury Venues Showcase" })}
            >
              <img 
                src={IMAGES.why3} 
                alt="Luxury Venues" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out" 
              />
            </motion.div>
            <h3 className="font-serif text-2xl text-white font-medium mb-3">
              Luxury Venues
            </h3>
            <p className="font-sans text-xs text-white/90 leading-relaxed font-light max-w-xs">
              Gain exclusive access to breathtaking locations and elite partnerships that make your celebration feel truly grand.
            </p>
          </motion.div>

        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.45, ease: LUXURY_EASE }}
        >
          <motion.button 
            whileHover={{ 
              scale: 1.06, 
              y: -2, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.25)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => onOpenBooking('General Inquiry')}
            className="px-9 py-3.5 rounded-full bg-white hover:bg-rose-50 text-[#B07D87] text-xs font-semibold tracking-wider uppercase shadow-xl transition cursor-pointer"
          >
            View more
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
