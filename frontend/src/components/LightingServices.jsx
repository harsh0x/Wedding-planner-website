import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/lightingData';

export default function LightingServices({ onOpenBooking }) {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.18,
        ease: LUXURY_EASE,
      },
    }),
  };

  const services = [
    {
      num: "01",
      title: "Heritage Tenting & Shamiyana",
      img: IMAGES.service1,
      desc: "Handcrafted royal Rajasthani canopies, waterproof German hangar tents, luxury silk draperies, and grand dining pavilions engineered for monumental celebrations.",
      serviceName: "Tenting & Decor"
    },
    {
      num: "02",
      title: "Full Event Lighting & Chandeliers",
      img: IMAGES.service2,
      desc: "Opulent imported crystal chandeliers, thousands of warm fairy light canopies, perimeter architectural washes, and heritage brass lantern pathways.",
      serviceName: "Full Event Lighting"
    },
    {
      num: "03",
      title: "Stage Trussing & Special FX",
      img: IMAGES.service3,
      desc: "Concert-grade aluminum trussing, intelligent computerized moving beam sharpies, cold pyrotechnics, heavy low fog, and synchronization with live performers.",
      serviceName: "Stage & Truss Illumination"
    }
  ];

  return (
    <section id="services" className="bg-[#FAF6F0] py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
        >
          {/* Subheading */}
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
            ✦ Complete Event Solutions ✦
          </span>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-4">
            Lighting, Tenting & Royal Decor Architecture
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm text-[#5A5255] max-w-2xl mx-auto leading-relaxed mb-16 font-light">
            From majestic wildlife resorts in Ranthambore to iconic heritage forts across Rajasthan, we provide end-to-end electrical engineering, grand decor infrastructure, and theatrical lighting.
          </p>
        </motion.div>

        {/* 3 Service Cards with staggered entrance & interactive tile hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((item, i) => (
            <motion.div
              key={item.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 25px 35px -5px rgba(230, 57, 86, 0.25), 0 10px 15px -5px rgba(230, 57, 86, 0.15)",
                transition: { duration: 0.4, ease: LUXURY_EASE } 
              }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col items-center text-center border border-rose-100 group relative"
            >
              <div className="w-12 h-12 rounded-full bg-[#E63956] text-white font-serif text-base font-bold flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition">
                {item.num}
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 shadow-sm">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: LUXURY_EASE }}
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-bold mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#5A5255] leading-relaxed font-light mb-6 flex-1">
                {item.desc}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenBooking(item.serviceName)}
                className="text-xs uppercase tracking-widest font-bold text-[#E63956] hover:text-[#CF203E] flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Get a Quote</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Centered CTA with Pro Spring Physics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: LUXURY_EASE }}
          className="mt-14"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              y: -3, 
              boxShadow: "0 20px 30px -5px rgba(230, 57, 86, 0.45)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => onOpenBooking('Full Event Lighting')}
            className="px-10 py-4 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white text-xs font-bold tracking-wider uppercase shadow-xl transition cursor-pointer"
          >
            Get an Event Quote
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
