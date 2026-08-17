import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90',
    scriptSub: 'Plan your wedding with us',
    heading: 'Crafting Unforgettable Love Stories.',
    desc: 'From intimate backyard gatherings to grand, luxurious celebrations, we design, plan, and execute every single detail of your special day with absolute perfection so you can focus entirely on making memories.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90',
    scriptSub: 'Bespoke Royal Celebrations',
    heading: 'Where Opulence Meets Timeless Romance.',
    desc: 'Immerse your guests in heritage grandeur, palace courtyards, and bespoke crystal stages curated for unforgettable destination weddings.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=90',
    scriptSub: 'Luxury Destination Weddings',
    heading: 'Breathtaking Moments, Flawlessly Executed.',
    desc: 'From exotic beachside pheras to grand majestic forts across India & worldwide destinations, every detail is orchestrated with pure elegance.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=90',
    scriptSub: 'Spectacular Sangeet & Galas',
    heading: 'Electrifying Nights & Dazzling Celebrations.',
    desc: 'World-class artist management, immersive stage lighting, and mesmerizing celebrations designed to leave you and your guests breathless.'
  }
];

export default function HeroSection({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const LUXURY_EASE = [0.25, 1, 0.5, 1];

  // Automatic Slide Timer (every 5.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="relative min-h-[92vh] md:min-h-[100vh] flex flex-col justify-between overflow-hidden group">
      
      {/* Background Image Carousel with Ken-Burns Smooth Zoom & Crossfade */}
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

      {/* Signature Cinematic Pinkish & Charcoal Gradient Overlay Matching Reference */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ background: 'linear-gradient(180deg, rgba(46, 40, 42, 0.45) 0%, rgba(176, 125, 135, 0.65) 55%, rgba(176, 125, 135, 0.92) 100%)' }}
      />

      {/* Hero Center Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pt-36 pb-20 select-none">
        
        {/* Animated Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="flex flex-col items-center"
          >
            {/* Top Subheading: Centered cursive script font */}
            <p className="font-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#E8B2BC] drop-shadow-md mb-2 md:mb-3">
              {slide.scriptSub}
            </p>

            {/* Main Heading: Large white elegant serif */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-wide leading-tight drop-shadow-lg mb-6 max-w-3xl">
              {slide.heading}
            </h1>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed font-light mb-10 drop-shadow">
              {slide.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons: Two pill-shaped buttons side-by-side */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto z-20"
        >
          {/* Left Button: Solid dusty rose */}
          <button
            onClick={() => onOpenBooking('Full Wedding Planning')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-2xl transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Book a service
          </button>

          {/* Right Button: White pill button */}
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-rose-50 text-[#B07D87] border-2 border-[#B07D87] text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-2xl text-center transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Read more
          </a>
        </motion.div>

      </div>

      {/* Clean bottom spacer */}
      <div className="relative z-20 w-full h-8 pointer-events-none"></div>

    </div>
  );
}
