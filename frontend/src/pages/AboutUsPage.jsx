import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const ABOUT_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
    sub: "Passion, Precision & Royal Splendor",
    title: "About Showmania Events",
    desc: "For over 16 years, SHOWMANIA has been the premier architect of magnificent royal weddings, corporate galas, and bespoke celebrations across India and the globe."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85",
    sub: "Architects of Unforgettable Experiences",
    title: "Celebrating Significant Moments",
    desc: "Transforming your most precious dreams into breathtaking realities with personalized planning systems and dedicated white-glove hospitality."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85",
    sub: "Award-Winning Excellence",
    title: "Over 16 Years of Mastery",
    desc: "Spotlighted as the Best Wedding Planner in Rajasthan and trusted by hundreds of esteemed families and global corporate leaders."
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
      className="min-h-screen bg-[#FAF6F3] text-[#2E282A] flex flex-col justify-between"
    >
      <div>
        {/* 1. HERO SECTION WITH AUTOMATIC SLIDER & SIGNATURE PINKISH FADED OVERLAY */}
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

          {/* Signature Pinkish Faded Gradient Overlay */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: 'linear-gradient(180deg, rgba(46, 40, 42, 0.45) 0%, rgba(176, 125, 135, 0.70) 55%, rgba(176, 125, 135, 0.92) 100%)' }}
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
                <span className="font-script text-3xl sm:text-5xl text-rose-200 block mb-3">
                  {slide.sub}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide leading-tight mb-5 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed mb-8 px-2 drop-shadow-sm">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-center gap-4 z-20">
              <a 
                href="#about-story" 
                className="px-8 py-3.5 rounded-full bg-[#E84874] hover:bg-[#D43460] text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl hover:scale-105"
              >
                Discover Our Story
              </a>
              <Link 
                to="/contact" 
                className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs tracking-widest uppercase backdrop-blur-md border border-white/30 transition-all hover:scale-105"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* 2. SECTION 1: ABOUT US (IMAGE 1 REFERENCE) */}
        <section id="about-story" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Bride & Groom in Palace Archway Photo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85" 
                  alt="Showmania Bride and Groom under Royal Palace Archway" 
                  className="w-full h-[520px] sm:h-[600px] object-cover object-center"
                />
              </div>
              {/* Decorative Glow */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            {/* Right Column: Overlapping Elegant About Us Card (Matching Reference Image 1) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="lg:col-span-7"
            >
              <div className="bg-[#FFF8F9] border border-[#EEDCE0] shadow-xl rounded-2xl p-8 sm:p-12 md:p-14 text-center sm:text-left relative">
                
                {/* Floral Flourish at Top */}
                <div className="text-center mb-6">
                  <svg className="w-12 h-6 mx-auto text-[#85515C]" viewBox="0 0 100 40" fill="currentColor">
                    <path d="M50 20 Q35 5 20 20 Q35 35 50 20 Z" opacity="0.8"/>
                    <path d="M50 20 Q65 5 80 20 Q65 35 50 20 Z" opacity="0.8"/>
                    <circle cx="50" cy="20" r="3" fill="#B07D87"/>
                  </svg>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-normal tracking-wide mt-2">
                    About Us
                  </h2>
                </div>

                {/* Bold Subtitle */}
                <p className="font-sans text-sm sm:text-base md:text-lg font-semibold text-[#2E282A] leading-snug mb-6 text-center sm:text-left">
                  Welcome to the heart of celebration and creativity — welcome to Showmania Events.
                </p>

                {/* Descriptive Paragraph */}
                <p className="font-sans text-xs sm:text-sm text-[#4E4447] font-light leading-relaxed mb-6 text-justify">
                  We’re dedicated to transforming your significant moments into cherished memories, with a steadfast focus on customer satisfaction and nurturing enduring relationships. Integrity, honesty, and the safeguarding of our clients’ reputations stand at the core of our approach. Our meticulously designed planning systems and procedures are tailored to provide a blend of professionalism and creativity, ensuring your needs always take precedence. In the journey of making special events unforgettable, our mission is to place your dreams at the heart of everything we do.
                </p>

                {/* Subtle Signature flourish line */}
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-4 border-t border-rose-200/60">
                  <span className="font-script text-2xl sm:text-3xl text-[#B07D87]">Showmania Events & Entertainment</span>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* 3. SECTION 2: VISION & MISSION (IMAGE 2 REFERENCE) */}
        <section className="py-20 sm:py-24 bg-[#F9F3F4]/60 border-y border-rose-100 px-4 sm:px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="max-w-4xl mx-auto"
          >
            {/* Top Flourish */}
            <div className="mb-4">
              <svg className="w-12 h-6 mx-auto text-[#85515C]" viewBox="0 0 100 40" fill="currentColor">
                <path d="M50 20 Q35 5 20 20 Q35 35 50 20 Z" opacity="0.8"/>
                <path d="M50 20 Q65 5 80 20 Q65 35 50 20 Z" opacity="0.8"/>
                <circle cx="50" cy="20" r="3" fill="#B07D87"/>
              </svg>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-normal tracking-wide mb-8">
              Vision & Mission
            </h2>

            {/* Paragraph 1 */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#4E4447] font-light leading-relaxed mb-6">
              From the very beginning, our mission has been clear: to transform ordinary gatherings into extraordinary celebrations. With a blend of innovation, passion, and meticulous attention to detail, we’ve carved a niche as not just event planners but as architects of unforgettable experiences.
            </p>

            {/* Paragraph 2 */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#4E4447] font-light leading-relaxed mb-6">
              At Showmania Events, we believe in the power of moments. Moments that bring people together, that sparkle with joy, and that leave a lasting imprint on the hearts of all who share them. Our journey has been one of passion, dedication, and a relentless pursuit of perfection. As one of India’s premier event planning companies, we pride ourselves on our ability to understand and execute our clients’ visions, executing events that are not only memorable but also mirror the essence of their dreams.
            </p>

            {/* Paragraph 3 */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#4E4447] font-light leading-relaxed mb-8">
              Join us as we unfold our story – a tale of dreams turned into reality, of challenges met with innovation, and of a relentless commitment to excellence.
            </p>

            {/* Bold Final Motto */}
            <p className="font-sans text-sm sm:text-base md:text-lg font-semibold text-[#2E282A] tracking-wide">
              Welcome to Showmania Events, where every event is a masterpiece.
            </p>

          </motion.div>
        </section>

        {/* 4. SECTION 3: FOUNDER - VIKAS DEVA (IMAGE 3 REFERENCE) */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Founder Bio Text */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="lg:col-span-8"
            >
              
              {/* Top Flourish */}
              <div className="mb-3">
                <svg className="w-10 h-5 text-[#85515C]" viewBox="0 0 100 40" fill="currentColor">
                  <path d="M50 20 Q35 5 20 20 Q35 35 50 20 Z" opacity="0.8"/>
                  <path d="M50 20 Q65 5 80 20 Q65 35 50 20 Z" opacity="0.8"/>
                  <circle cx="50" cy="20" r="3" fill="#B07D87"/>
                </svg>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-normal tracking-wide mb-1">
                Vikas Deva
              </h2>
              <span className="font-sans text-xs sm:text-sm font-semibold text-[#B07D87] uppercase tracking-widest block mb-6">
                Founder
              </span>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-[#4E4447] font-light leading-relaxed text-justify">
                <p>
                  Vikas Deva, the driving force behind Showmania Events & Entertainment, with over 16 years of event planning expertise. Renowned for his innovative approach to destination wedding planning, he has earned acclaim as one of India’s leading event planners.
                </p>
                <p>
                  Vikas Deva’s dedication was spotlighted in 2018 when he was celebrated as the best wedding planner in Rajasthan, for weaving the rich cultural fabric of India into each event’s design and making them memorable.
                </p>
                <p>
                  Beyond weddings, Vikas excels in corporate and MICE events, applying his keen attention to detail and cultural sensitivity to create remarkable experiences for all attendees. His work is characterized by a commitment to personalized, immersive experiences that reflect each client’s unique vision and aspirations.
                </p>
                <p>
                  His journey is one of passion, innovation, and collaboration, continually pushing the boundaries of what’s possible in event planning and execution.
                </p>
              </div>

            </motion.div>

            {/* Right Column: Founder Circular Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105 transition duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                    alt="Vikas Deva - Founder of Showmania Events" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative subtle ring */}
                <div className="absolute inset-0 rounded-full border-2 border-rose-300 transform scale-105 pointer-events-none"></div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 5. SECTION 4: QUALITY POLICY & STATS (IMAGE 4 REFERENCE) */}
        <section className="py-20 sm:py-24 bg-white border-t border-rose-100 px-4 sm:px-6 md:px-12 text-center">
          <div className="max-w-6xl mx-auto">
            
            {/* Top Flourish */}
            <div className="mb-3">
              <svg className="w-12 h-6 mx-auto text-[#85515C]" viewBox="0 0 100 40" fill="currentColor">
                <path d="M50 20 Q35 5 20 20 Q35 35 50 20 Z" opacity="0.8"/>
                <path d="M50 20 Q65 5 80 20 Q65 35 50 20 Z" opacity="0.8"/>
                <circle cx="50" cy="20" r="3" fill="#B07D87"/>
              </svg>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-normal tracking-wide mb-14">
              Quality Policy
            </h2>

            {/* 6 Quality Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 mb-20">
              
              {/* 1. Top-Notch Venue Selection */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E84874] flex items-center justify-center mb-3 text-[#E84874] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-archway"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Top-Notch Venue Selection</span>
              </motion.div>

              {/* 2. Premium Hospitality */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E84874] flex items-center justify-center mb-3 text-[#E84874] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-bell-concierge"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Premium Hospitality</span>
              </motion.div>

              {/* 3. Premium Decor */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E84874] flex items-center justify-center mb-3 text-[#E84874] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Premium Decor</span>
              </motion.div>

              {/* 4. Seamless Logistics Management */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E84874] flex items-center justify-center mb-3 text-[#E84874] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-van-shuttle"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Seamless Logistics Management</span>
              </motion.div>

              {/* 5. Customized Planning */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E84874] flex items-center justify-center mb-3 text-[#E84874] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Customized Planning</span>
              </motion.div>

              {/* 6. Budget-Friendly Planning */}
              <motion.div whileHover={{ scale: 1.08 }} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#E84874] flex items-center justify-center mb-3 text-[#E84874] text-2xl group-hover:bg-rose-50 transition transform shadow-sm">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Budget-Friendly Planning</span>
              </motion.div>

            </div>

            {/* Bottom Statistics Counter Row (Matching Image 4 Reference) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-rose-100 text-center">
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E84874] font-normal block mb-1">878</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#2E282A] font-semibold">GOOD COMMENTS</span>
              </div>
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E84874] font-normal block mb-1">175</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#2E282A] font-semibold">FEATURED EVENTS</span>
              </div>
              <div className="p-4 md:border-r border-rose-100">
                <span className="font-serif text-4xl sm:text-5xl text-[#E84874] font-normal block mb-1">5</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#2E282A] font-semibold">AWARD WINNING</span>
              </div>
              <div className="p-4">
                <span className="font-serif text-4xl sm:text-5xl text-[#E84874] font-normal block mb-1">125</span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#2E282A] font-semibold">HAPPY CLIENT</span>
              </div>
            </div>

          </div>
        </section>

        {/* 6. SECTION 5: WE MANAGE (MATCHING NEW REFERENCE IMAGE) */}
        <section className="py-16 sm:py-20 bg-[#FAF6F3] border-t border-rose-100/80 px-4 sm:px-6 md:px-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="max-w-5xl mx-auto"
          >
            
            {/* Top Botanical Flourish */}
            <div className="mb-3">
              <svg className="w-12 h-6 mx-auto text-[#85515C]" viewBox="0 0 100 40" fill="currentColor">
                <path d="M50 20 Q35 5 20 20 Q35 35 50 20 Z" opacity="0.8"/>
                <path d="M50 20 Q65 5 80 20 Q65 35 50 20 Z" opacity="0.8"/>
                <circle cx="50" cy="20" r="3" fill="#E84874"/>
              </svg>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-normal tracking-wide mb-12">
              We Manage
            </h2>

            {/* Items Grid with Pink Heart Icons */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-6 max-w-4xl mx-auto">
              
              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Invitation</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Makeup</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Decoration</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Security</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Venue</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Logistics</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Catering</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">Hospitality</span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} className="flex items-center gap-2 group cursor-default">
                <i className="fa-solid fa-heart text-[#E84874] text-base group-hover:scale-125 transition duration-300"></i>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#2E282A]">DJ</span>
              </motion.div>

            </div>

          </motion.div>
        </section>

        {/* 7. SECTION 6: OUR EXPERTISE BANNER (IMAGE 5 REFERENCE) */}
        <section 
          className="py-16 sm:py-20 text-white px-4 sm:px-6 md:px-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #693E46 0%, #85515C 50%, #4E2D33 100%)' }}
        >
          <div className="max-w-7xl mx-auto relative border border-dashed border-white/40 rounded-2xl py-12 px-6 sm:px-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center">
              
              {/* Left Polaroid: Grand Indoor Palace Banquet (Tilted Left) */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="bg-white p-3 shadow-2xl rounded-sm transform -rotate-6 hover:rotate-0 transition duration-500 max-w-[240px] mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80" 
                    alt="Grand Royal Banquet Setup" 
                    class="w-full h-48 object-cover rounded-sm"
                  />
                </div>
              </div>

              {/* Center Content */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                
                {/* Flourish Crest */}
                <div className="mb-3">
                  <svg className="w-12 h-6 mx-auto text-rose-200" viewBox="0 0 100 40" fill="currentColor">
                    <path d="M50 20 Q35 5 20 20 Q35 35 50 20 Z" opacity="0.8"/>
                    <path d="M50 20 Q65 5 80 20 Q65 35 50 20 Z" opacity="0.8"/>
                    <circle cx="50" cy="20" r="3" fill="#E84874"/>
                  </svg>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-wider mb-4 uppercase">
                  OUR EXPERTISE
                </h2>

                <p className="font-sans text-xs sm:text-sm text-white/90 font-light tracking-wide mb-8 max-w-xl">
                  Weddings | Corporate Events | Exhibitions | Conferences | Artist Management
                </p>

                <Link 
                  to="/contact" 
                  className="px-8 py-3 rounded-md bg-[#E84874] hover:bg-[#D43460] text-white font-semibold text-xs tracking-widest uppercase shadow-xl transition transform hover:scale-105"
                >
                  CONTACT US
                </Link>

              </div>

              {/* Right Two Polaroids: Romantic Setup & Joyful Celebration (Tilted Right) */}
              <div className="hidden lg:block lg:col-span-3 relative">
                <div className="space-y-4 max-w-[200px] mx-auto">
                  {/* Top Right Polaroid */}
                  <div className="bg-white p-2.5 shadow-2xl rounded-sm transform rotate-6 hover:rotate-0 transition duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" 
                      alt="Romantic Candlelit Setup" 
                      className="w-full h-28 object-cover rounded-sm"
                    />
                  </div>
                  {/* Bottom Right Polaroid */}
                  <div className="bg-white p-2.5 shadow-2xl rounded-sm transform -rotate-3 hover:rotate-0 transition duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80" 
                      alt="Joyful Celebration" 
                      className="w-full h-28 object-cover rounded-sm"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </motion.div>
  );
}
