import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    couple: "Vikramaditya & Ananya Rathore",
    venue: "Nahargarh Palace, Ranthambore",
    date: "December 2025",
    rating: 5,
    quote: "Suraj Light House turned Nahargarh into an absolute fairytale wonderland! The 40+ crystal chandeliers hanging over our open-air courtyard reception and the amber facade wash took everyone's breath away. Their generator backups ran seamlessly through our 1200-guest sangeet without a single microsecond of flicker.",
    image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    couple: "Siddharth & Priya Singhania",
    venue: "Six Senses Fort Barwara, Sawai Madhopur",
    date: "January 2026",
    rating: 5,
    quote: "The stage trussing and concert lighting provided by Suraj Light House for our musical sangeet night was beyond world-class. Sharpie moving heads, laser synchronization, and heavy low fog made our celebrity artist performance feel like an international stadium concert.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    couple: "Kabir & Meera Shekhawat",
    venue: "The Oberoi Vanyavilas, Ranthambore",
    date: "November 2025",
    rating: 5,
    quote: "Suraj Light House's heritage shamiyana and fairy light tunnel created an ethereal atmosphere for our pheras under the stars. Their on-site technicians monitored every circuit all night with extreme politeness and professional perfection.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    couple: "Aditya & Sanjana Khandelwal",
    venue: "Sawai Vilas Resort, Sawai Madhopur",
    date: "February 2026",
    rating: 5,
    quote: "Prompt setup, pristine heavy equipment, and unmatched local knowledge of Ranthambore power requirements. The Suraj Light House team arrived a full day early, coordinated with our wedding planners, and delivered the most spectacular lighting display we have ever witnessed.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    couple: "Devendra & Radhika Joshi",
    venue: "Fort Rajwada & Royal Courtyards",
    date: "October 2025",
    rating: 5,
    quote: "We required high-voltage silent diesel generators, custom truss arches, and warm vintage Edison filaments for a 3-day royal wedding. Suraj Light House handled the entire power distribution and decor lighting with zero stress. Truly the best lighting company in Rajasthan!",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    couple: "Rohan & Natasha Mehra",
    venue: "Taj Sawai Madhopur Lodge",
    date: "March 2026",
    rating: 5,
    quote: "From our intimate pre-wedding dinner to our grand reception, the atmospheric amber wash and bespoke crystal chandelier arrangements transformed the entire heritage property into an unforgettable royal dream.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80"
  }
];

export default function TestimonialsPage({ onOpenBooking }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#FAF6F0]"
    >
      
      {/* HERO BANNER: Royal Coral Crimson Header */}
      <section className="bg-[#E63956] text-white pt-40 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
        
        {/* Subtle Watermark Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2"
          >
            ✦ Words of Appreciation ✦
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            Client Appreciations
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Hear from royal families, wedding couples, and event producers who trusted Suraj Light House to illuminate their grandest celebrations in Ranthambore & Rajasthan.
          </motion.p>
        </div>
      </section>

      {/* TESTIMONIALS GRID: 3-Column Cascading Cards */}
      <section className="py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 25px 35px -5px rgba(230, 57, 86, 0.25)",
                transition: { duration: 0.35 }
              }}
              className="bg-white rounded-3xl p-8 shadow-md border border-rose-200/80 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#E63956] text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-rose-50 text-[#E63956] flex items-center justify-center text-sm shadow-sm">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-xs sm:text-sm text-[#5A5255] leading-relaxed font-light italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Couple Details & Thumbnail Frame */}
              <div className="pt-6 border-t border-rose-100/90 flex items-center gap-4">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#E63956]/60 shadow-md flex-shrink-0">
                  <img src={item.image} alt={item.couple} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-bold leading-tight mb-1">
                    {item.couple}
                  </h3>
                  <p className="text-[11px] font-bold text-[#E63956]">
                    {item.venue}
                  </p>
                  <p className="text-[10px] text-gray-400 font-light">
                    {item.date}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-white rounded-3xl p-10 md:p-14 text-center border border-rose-200/80 shadow-xl max-w-4xl mx-auto"
        >
          <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
            ✦ Light Up Your Milestone ✦
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-bold mb-4">
            Plan Your Grand Illumination & Tenting
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5255] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Contact our senior event lighting team to receive a tailored layout and generator proposal for your celebration in Ranthambore.
          </p>
          <button 
            onClick={() => onOpenBooking('Full Event Lighting')}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#E63956] to-[#CF203E] hover:from-[#CF203E] hover:to-[#AB132D] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_10px_25px_rgba(230,57,86,0.35)] hover:shadow-[0_15px_30px_rgba(230,57,86,0.5)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer border border-white/20"
          >
            <span>Request an Event Quote</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </motion.div>

      </section>

    </motion.div>
  );
}
