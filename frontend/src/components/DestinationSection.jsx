import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/weddingData';

export default function DestinationSection() {
  return (
    <section className="relative bg-[#1F1C1D] text-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Background Couple Watermark */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: `url('${IMAGES.destSouthBg}')` }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <span className="font-script text-3xl sm:text-4xl text-rose-300 block mb-2">
              South Florida Weddings
            </span>
            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-8 max-w-md mx-auto lg:mx-0">
              As South Florida's leading luxury wedding planner, we specialize in high-end destination celebrations across Miami, Palm Beach, Naples, and the Florida Keys. We bring unparalleled local vendor connections and coastal glamour to your special day.
            </p>
            <div>
              <a 
                href="#contact"
                className="inline-block px-8 py-3 rounded-full bg-[#B07D87] hover:bg-rose-600 text-white text-xs font-medium tracking-wider uppercase shadow-lg transition transform hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right 3 Destination Cards with Staggered Entrance */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              }
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            
            {/* Miami */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="bg-[#2A2527] rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={IMAGES.destMiami} 
                  alt="Miami Weddings" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              <div className="p-3 bg-[#B07D87] text-center">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-white block">
                  Miami Weddings
                </span>
                <span className="text-[9px] text-rose-100">Oceanfront & Ballrooms</span>
              </div>
            </motion.div>

            {/* Palm Beach */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="bg-[#2A2527] rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={IMAGES.destPalmBeach} 
                  alt="Palm Beach Weddings" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              <div className="p-3 bg-[#B07D87] text-center">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-white block">
                  Palm Beach
                </span>
                <span className="text-[9px] text-rose-100">Historic Estates & Luxury</span>
              </div>
            </motion.div>

            {/* Naples & Florida Keys */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="bg-[#2A2527] rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={IMAGES.destNaples} 
                  alt="Naples & Florida Keys" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              <div className="p-3 bg-[#B07D87] text-center">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-white block">
                  Naples & Keys
                </span>
                <span className="text-[9px] text-rose-100">Coastal Sunset Nuptials</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
