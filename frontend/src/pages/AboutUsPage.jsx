import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const ABOUT_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
    sub: "✦ Passion, Engineering & Royal Grandeur ✦",
    title: "The Visionaries Behind The Light",
    desc: "For decades, Suraj Light House (Suraj Light's Ranthambore) has been Rajasthan's premier mastercraft event lighting, heritage tenting, and theatrical decor company."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=2000&q=85",
    sub: "✦ Masters of Theatrical Illumination ✦",
    title: "Crafting Luminous Spectacles",
    desc: "Transforming open grounds, wildlife resorts, and royal fort courtyards into breathtaking wonderlands with crystal chandeliers and fairy light canopies."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=85",
    sub: "✦ Industrial Grade Reliability ✦",
    title: "Fail-Safe Heavy Power Grids",
    desc: "Equipped with dedicated silent diesel generators, aluminum truss architecture, and computerized DMX consoles for zero-downtime celebrations."
  }
];

export default function AboutUsPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ABOUT_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = ABOUT_SLIDES[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] flex flex-col justify-between"
    >
      <div>
        {/* 1. HERO SECTION WITH AUTOMATIC SLIDER & SIGNATURE CRIMSON OVERLAY */}
        <section className="relative text-white min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 text-center overflow-hidden">
          
          {/* Background Images Crossfade & Ken-Burns */}
          <AnimatePresence mode="sync">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.4, ease: "easeInOut" },
                scale: { duration: 6.5, ease: "easeOut" }
              }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </AnimatePresence>

          {/* Signature Crimson & Obsidian Gradient Overlay */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.55) 0%, rgba(230, 57, 86, 0.70) 55%, rgba(230, 57, 86, 0.94) 100%)' }}
          />

          <div className="max-w-4xl mx-auto relative z-20 flex-1 flex flex-col items-center justify-center select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: LUXURY_EASE }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-3">
                  {slide.sub}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-5 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/95 max-w-2xl mx-auto font-light leading-relaxed mb-8 px-2 drop-shadow-sm">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-center gap-4 z-20">
              <a 
                href="#about-story" 
                className="px-8 py-3.5 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold text-xs tracking-widest uppercase transition-all shadow-xl hover:scale-105 border border-white/20"
              >
                Discover Our Heritage
              </a>
              <button 
                onClick={() => onOpenBooking('Full Event Lighting')}
                className="px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs tracking-widest uppercase backdrop-blur-md border border-white/30 transition-all hover:scale-105 cursor-pointer"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </section>

        {/* 2. SECTION 1: ABOUT US */}
        <section id="about-story" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Chandelier Setup Photo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=85" 
                  alt="Suraj Light House Royal Chandelier Setup" 
                  className="w-full h-[520px] sm:h-[600px] object-cover object-center"
                />
              </div>
              {/* Decorative Glow */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Right Column: Overlapping Elegant About Us Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="lg:col-span-7"
            >
              <div className="bg-white border border-[#EEDCE0] shadow-xl rounded-2xl p-8 sm:p-12 md:p-14 text-center sm:text-left relative">
                
                {/* Header */}
                <div className="text-center sm:text-left mb-6">
                  <img 
                    src="/logo.png" 
                    alt="Suraj Light's Ranthambore Logo" 
                    className="h-16 sm:h-20 w-auto object-contain mb-3 mx-auto sm:mx-0 drop-shadow"
                  />
                  <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">
                    ✦ The Story of Suraj Light's Ranthambore ✦
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mt-1">
                    The Visionaries Behind The Light
                  </h2>
                </div>

                {/* Bold Subtitle */}
                <p className="font-sans text-sm sm:text-base md:text-lg font-bold text-[#1A1A1A] leading-snug mb-6 text-center sm:text-left">
                  Welcome to Suraj Light's Ranthambore — where engineering mastery meets royal Rajasthani grandeur.
                </p>

                {/* Descriptive Paragraph */}
                <p className="font-sans text-xs sm:text-sm text-[#5A5255] font-light leading-relaxed mb-6 text-justify">
                  Headquartered in Sawai Madhopur, Suraj Light House has grown to become the defining force in grand wedding lighting, royal tenting (shamiyana), and stage trussing across Ranthambore and Rajasthan. We specialize in transforming vast outdoor landscapes, jungle luxury resorts, and ancient fort courtyards into luminous, fairytale venues. Every wire, bulb, generator, and chandelier is deployed with relentless attention to safety, power balance, and aesthetic perfection.
                </p>

                {/* Signature flourish line */}
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-4 border-t border-rose-200/60">
                  <span className="font-serif tracking-widest uppercase text-sm font-bold text-[#E63956]">Suraj Light House • Ranthambore</span>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* 3. SECTION 2: VISION & TECHNICAL MASTERY */}
        <section className="py-20 sm:py-24 bg-white border-y border-rose-100 px-4 sm:px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="max-w-4xl mx-auto"
          >
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ Our Mission & Capabilities ✦
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-8">
              Transforming Nightscapes Into Unforgettable Wonder
            </h2>

            {/* Paragraph 1 */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#5A5255] font-light leading-relaxed mb-6">
              From our humble beginnings to executing 1000+ guest royal sangeets and corporate summits at iconic venues like Nahargarh Fort, Six Senses Fort Barwara, and Oberoi Vanyavilas, our mission is clear: to engineer flawless event environments that leave guests in pure awe.
            </p>

            {/* Paragraph 2 */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#5A5255] font-light leading-relaxed mb-6">
              We own and maintain the largest inventory of heavy-duty aluminum box trussing, computer-controlled sharpie beam moving heads, imported crystal chandeliers, waterproof German pagodas, and soundproof commercial generator sets in Sawai Madhopur.
            </p>

            {/* Bold Final Motto */}
            <p className="font-sans text-sm sm:text-base md:text-lg font-bold text-[#E63956] tracking-wide">
              ✦ Suraj Light House: Where Every Celebration Shines with Royal Dignity ✦
            </p>

          </motion.div>
        </section>

        {/* 4. SECTION 4: QUALITY POLICY & STATS */}
        <section className="py-20 sm:py-24 bg-[#FAF6F0] px-4 sm:px-6 md:px-12 text-center">
          <div className="max-w-6xl mx-auto">
            
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ The Suraj Benchmark ✦
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-14">
              Our Pillars of Excellence
            </h2>

            {/* 6 Quality Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 mb-20">
              
              {/* 1. Heavy Aluminum Trussing */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Aluminum Truss Rigging</span>
              </motion.div>

              {/* 2. Crystal Chandeliers */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-gem"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Crystal Chandeliers</span>
              </motion.div>

              {/* 3. Heritage Tenting */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-campground"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Heritage Shamiyana</span>
              </motion.div>

              {/* 4. Generator Redundancy */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">100% DG Power Backup</span>
              </motion.div>

              {/* 5. Intelligent DMX Control */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-sliders"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Intelligent DMX Sync</span>
              </motion.div>

              {/* 6. On-Site Technical Crew */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E63956] flex items-center justify-center mb-3 text-[#E63956] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">24/7 Electrical Crew</span>
              </motion.div>

            </div>

            {/* Bottom Statistics Counter Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-rose-100 text-center">
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E63956] font-bold block mb-1">950+</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">EVENTS ILLUMINATED</span>
              </div>
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E63956] font-bold block mb-1">120+</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">FORTS & RESORTS</span>
              </div>
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E63956] font-bold block mb-1">100%</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">POWER REDUNDANCY</span>
              </div>
              <div className="p-4">
                <span className="font-serif text-4xl sm:text-5xl text-[#E63956] font-bold block mb-1">500+</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#1A1A1A] font-bold">DELIGHTED FAMILIES</span>
              </div>
            </div>

          </div>
        </section>

        {/* 5. SECTION 5: WE MANAGE */}
        <section className="py-16 sm:py-20 bg-white border-t border-rose-100 px-4 sm:px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="max-w-5xl mx-auto"
          >
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
              ✦ End-to-End Infrastructure ✦
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-bold tracking-tight mb-12">
              We Manage Complete Event Production
            </h2>

            {/* Items Grid */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-6 max-w-4xl mx-auto">
              
              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-lightbulb text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Palace Facade Illumination</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-gem text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Crystal Chandelier Canopies</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-campground text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Handcrafted Shamiyana</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-cubes-stacked text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Stage & Truss Architecture</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-bolt text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Silent Diesel Generators</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-fire text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Cold Pyros & Special FX</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-music text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Concert Audio Support</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-ring text-[#E63956] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">Royal Mandap Lighting</span>
              </motion.div>

            </div>

          </motion.div>
        </section>

        {/* 6. SECTION 6: OUR EXPERTISE BANNER */}
        <section 
          className="py-16 sm:py-20 text-white px-4 sm:px-6 md:px-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #E63956 70%, #CF203E 100%)' }}
        >
          <div className="max-w-7xl mx-auto relative border border-dashed border-white/40 rounded-2xl py-12 px-6 sm:px-10 text-center">
            
            <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2">
              ✦ Suraj Light House ✦
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
              Ready to Light Up Your Grand Celebration?
            </h2>

            <p className="font-sans text-xs sm:text-sm text-white/95 font-light tracking-wide mb-8 max-w-xl mx-auto">
              Destination Weddings | Palace Receptions | Corporate Summits | Sangeet Stage Productions
            </p>

            <button 
              onClick={() => onOpenBooking('Full Event Lighting')}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-white hover:bg-rose-50 text-[#E63956] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get a Proposal</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>

          </div>
        </section>

      </div>
    </motion.div>
  );
}
