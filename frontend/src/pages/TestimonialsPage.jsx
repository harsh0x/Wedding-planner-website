import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    couple: "Eleanor & Julian Hayes",
    venue: "The Breakers, Palm Beach",
    date: "November 2025",
    rating: 5,
    quote: "Christi and the SHOWMANIA team turned what could have been an overwhelming planning process into an effortless, joyous journey. Every floral petal, chandelier alignment, and timeline cue was orchestrated with absolute perfection. Our guests are still raving about it being the most breathtaking wedding they’ve ever attended!",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    couple: "Sophia & Marcus Vance",
    venue: "Vizcaya Museum & Gardens, Miami",
    date: "January 2026",
    rating: 5,
    quote: "Words cannot describe the sheer magic SHOWMANIA created for our coastal celebration. From vendor negotiations to designing our 3-tier rose garden arch, their aesthetic intuition is second to none. We had total peace of mind and were able to truly immerse ourselves in every single second.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    couple: "Camilla & Alexander Wright",
    venue: "Ocean Reef Club, Key Largo",
    date: "December 2025",
    rating: 5,
    quote: "Flawless logistics, incredible taste, and genuine warmth. Christi treated our wedding as if it were her own family's. When unexpected coastal weather shifted our cocktail hour, her team transitioned 250 guests indoors in minutes without a single hitch. Worth every investment!",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    couple: "Isabella & Daniel Sterling",
    venue: "Faena Hotel, Miami Beach",
    date: "October 2025",
    rating: 5,
    quote: "The level of bespoke curation provided by SHOWMANIA is unmatched. They understood our modern-romantic vision immediately and elevated it beyond our imagination. Their vendor connections alone saved us countless hours and secured us dream collaborators.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    couple: "Charlotte & Liam Montgomery",
    venue: "The Ritz-Carlton, Naples",
    date: "February 2026",
    rating: 5,
    quote: "Planning a destination wedding from London felt daunting until we met SHOWMANIA. Their digital timelines, virtual mockups, and proactive communication kept us calm and thrilled across timezones. The wedding weekend was an absolute fairy tale.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    couple: "Genevieve & Harrison Brooks",
    venue: "Biltmore Estate, Coral Gables",
    date: "September 2025",
    rating: 5,
    quote: "From our first design consultation to the final fireworks sendoff, Christi brought boundless elegance, professionalism, and exquisite style. We cannot thank SHOWMANIA enough for giving us the happiest day of our lives!",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80"
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
      className="min-h-screen bg-[#FAF6F3]"
    >
      
      {/* ======================================================== */}
      {/* --- HERO BANNER: Tall Dusty Rose Header --- */}
      {/* ======================================================== */}
      <section className="bg-[#B07D87] text-white pt-40 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
        
        {/* Subtle Watermark Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-script text-4xl sm:text-5xl text-rose-200 block mb-2"
          >
            Real Love Stories
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide leading-tight mb-6"
          >
            Love Stories & Kind Words
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Read heartfelt reflections from couples who trusted SHOWMANIA to design and coordinate their most cherished celebrations.
          </motion.p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* --- TESTIMONIALS GRID: 3-Column Cascading Cards --- */}
      {/* ======================================================== */}
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
                boxShadow: "0 25px 35px -5px rgba(176, 125, 135, 0.25)",
                transition: { duration: 0.35 }
              }}
              className="bg-white rounded-3xl p-8 shadow-md border border-rose-200/80 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#B07D87] text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-rose-50 text-[#B07D87] flex items-center justify-center text-sm shadow-sm">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-xs sm:text-sm text-[#524B4E] leading-relaxed font-light italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Couple Details & Thumbnail Frame */}
              <div className="pt-6 border-t border-rose-100/90 flex items-center gap-4">
                <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-[2.2rem] overflow-hidden border-2 border-[#B07D87]/70 shadow-md flex-shrink-0">
                  <img src={item.image} alt={item.couple} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-script text-2xl text-[#B07D87] leading-none mb-1">
                    {item.couple}
                  </h3>
                  <p className="text-[11px] font-medium text-[#2E282A]">
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
          <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-2">
            Ready to Create Your Own Memory?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2E282A] font-semibold mb-4">
            Let's Begin Planning Your Wedding Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#696164] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            We'd love to learn about your unique love story and craft a customized celebration proposal for your big day.
          </p>
          <button 
            onClick={() => onOpenBooking('Full Wedding Planning')}
            className="px-9 py-4 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs font-semibold tracking-widest uppercase shadow-xl transition transform hover:scale-105 active:scale-95"
          >
            Inquire For Your Date
          </button>
        </motion.div>

      </section>

    </motion.div>
  );
}
