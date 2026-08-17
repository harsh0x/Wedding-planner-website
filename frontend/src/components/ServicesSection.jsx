import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/weddingData';

export default function ServicesSection({ onOpenBooking }) {
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
      title: "Full Wedding Planning",
      img: IMAGES.service1,
      desc: "Complete end-to-end management including budget curation, luxury venue selection, custom aesthetic design, vendor procurement, and complete on-site mastery.",
      serviceName: "Full Wedding Planning"
    },
    {
      num: "02",
      title: "Partial Coordination",
      img: IMAGES.service2,
      desc: "Ideal for couples who have started their planning journey but seek seasoned professional guidance to refine design, finalize vendors, and streamline schedules.",
      serviceName: "Partial Coordination"
    },
    {
      num: "03",
      title: "Day-of Management",
      img: IMAGES.service3,
      desc: "Month-of handover to coordinate final logistics, orchestrate rehearsal, direct vendors, and lead seamless execution so you remain stress-free.",
      serviceName: "Day-of-Management"
    }
  ];

  return (
    <section id="services" className="bg-[#FAF6F3] py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
        >
          {/* Cursive Subheading */}
          <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-1">
            Our Services
          </span>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-medium tracking-tight mb-4">
            Bespoke Planning For Your Special Day
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-sm text-[#696164] max-w-2xl mx-auto leading-relaxed mb-16 font-light">
            We offer comprehensive, step-by-step wedding coordination tailored to suit your needs. From full-scale conceptualization to day-of coordination, we ensure an opulent, tension-free and unforgettable luxury experience.
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
                boxShadow: "0 25px 35px -5px rgba(176, 125, 135, 0.25), 0 10px 15px -5px rgba(176, 125, 135, 0.15)",
                transition: { duration: 0.4, ease: LUXURY_EASE } 
              }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col items-center text-center border border-rose-100 group relative"
            >
              <div className="w-12 h-12 rounded-full bg-[#B07D87] text-white font-serif text-base font-semibold flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition">
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
              <h3 className="font-serif text-xl sm:text-2xl text-[#2E282A] font-semibold mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#696164] leading-relaxed font-light mb-6 flex-1">
                {item.desc}
              </p>
              <motion.button 
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenBooking(item.serviceName)}
                className="text-xs uppercase tracking-widest font-semibold text-[#B07D87] hover:text-rose-700 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Inquire Service</span>
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
              boxShadow: "0 20px 30px -5px rgba(176, 125, 135, 0.45)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => onOpenBooking('General Consultation')}
            className="px-10 py-4 rounded-full bg-[#B07D87] text-white text-xs font-medium tracking-wider uppercase shadow-xl"
          >
            Book a Service
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
