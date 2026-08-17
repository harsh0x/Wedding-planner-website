import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioSection({ portfolioItems, onOpenBooking, onImageClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItem = portfolioItems[activeIndex] || portfolioItems[0];

  return (
    <section id="portfolio" className="bg-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with smooth entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-1">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-medium tracking-tight mb-4">
            Visualizing Your Dreams Into Reality
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#696164] max-w-2xl mx-auto leading-relaxed font-light">
            Take a glimpse into recent weddings and styled shoots designed and executed by the SHOWMANIA Events & Entertainment team. We turn creative visions, styling, and dreams into a quintessential bespoke wedding experience.
          </p>
        </motion.div>

        {/* Interactive Carousel Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#FAF6F3] rounded-3xl p-4 sm:p-8 shadow-xl border border-rose-100 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Large Image */}
            <div className="lg:col-span-8 relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentItem.id || activeIndex}
                  src={currentItem.image} 
                  alt={currentItem.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition duration-700"
                  onClick={() => onImageClick({ 
                    url: currentItem.image, 
                    title: currentItem.title 
                  })}
                />
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setActiveIndex((activeIndex - 1 + portfolioItems.length) % portfolioItems.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#2E282A] flex items-center justify-center shadow-lg transition backdrop-blur-sm z-10"
                aria-label="Previous portfolio item"
              >
                <i className="fa-solid fa-chevron-left text-sm"></i>
              </button>
              <button 
                onClick={() => setActiveIndex((activeIndex + 1) % portfolioItems.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#2E282A] flex items-center justify-center shadow-lg transition backdrop-blur-sm z-10"
                aria-label="Next portfolio item"
              >
                <i className="fa-solid fa-chevron-right text-sm"></i>
              </button>

              {/* Enlarge Hint */}
              <div className="absolute bottom-4 right-4 bg-[#2E282A]/70 text-white text-[11px] px-3 py-1.5 rounded-full backdrop-blur-sm z-10">
                <i className="fa-solid fa-expand mr-1.5"></i> Click to enlarge
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-4 flex flex-col justify-center px-2">
              <span className="text-xs uppercase tracking-widest text-[#B07D87] font-semibold mb-2">
                {currentItem.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2E282A] font-semibold mb-3">
                {currentItem.title}
              </h3>
              <p className="text-xs text-[#696164] flex items-center gap-2 mb-4">
                <i className="fa-solid fa-location-dot text-rose-400"></i>
                <span>{currentItem.location}</span>
              </p>
              <p className="font-sans text-xs sm:text-sm text-[#696164] leading-relaxed font-light mb-6">
                {currentItem.desc}
              </p>

              {/* Indicator dots */}
              <div className="flex items-center gap-2 mb-6">
                {portfolioItems.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#B07D87]' : 'w-2.5 bg-rose-200 hover:bg-rose-300'}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={() => onOpenBooking(`Portfolio Inquiry: ${currentItem.title}`)}
                className="w-full py-3 rounded-full bg-[#2E282A] hover:bg-[#423E40] text-white text-xs font-medium tracking-wider uppercase transition shadow-md transform hover:-translate-y-0.5"
              >
                Inquire About This Style
              </button>
            </div>

          </div>
        </motion.div>

        {/* "And more!" Feature Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-8"
        >
          <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-1">
            And more!
          </span>
          <p className="font-sans text-xs sm:text-sm text-[#696164] max-w-xl mx-auto leading-relaxed mb-12 font-light">
            From custom floor plans to floral design and decor rental curation, we bring your complete wedding vision to life with ease.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
            {/* 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 text-[#B07D87] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#B07D87] group-hover:text-white transition duration-300 shadow-sm">
                <i className="fa-solid fa-draw-polygon"></i>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#2E282A] font-semibold mb-1">
                Floor Plan & Design
              </h4>
              <p className="text-[11px] text-[#696164]">Custom 3D layouts & seating flow</p>
            </motion.div>

            {/* 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 text-[#B07D87] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#B07D87] group-hover:text-white transition duration-300 shadow-sm">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#2E282A] font-semibold mb-1">
                Lighting & Decor
              </h4>
              <p className="text-[11px] text-[#696164]">Chandeliers, fairy canopies & uplighting</p>
            </motion.div>

            {/* 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 text-[#B07D87] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#B07D87] group-hover:text-white transition duration-300 shadow-sm">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#2E282A] font-semibold mb-1">
                Floral Coordination
              </h4>
              <p className="text-[11px] text-[#696164]">Statement arches & tablescape blooms</p>
            </motion.div>

            {/* 4 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-200 text-[#B07D87] flex items-center justify-center text-2xl mb-4 group-hover:bg-[#B07D87] group-hover:text-white transition duration-300 shadow-sm">
                <i className="fa-solid fa-wine-glass"></i>
              </div>
              <h4 className="font-serif text-base sm:text-lg text-[#2E282A] font-semibold mb-1">
                Tabletop & Linen Rentals
              </h4>
              <p className="text-[11px] text-[#696164]">Fine china, crystal & bespoke linens</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
