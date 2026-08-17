import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/weddingData';

export default function AboutSection({ onOpenBooking, onImageClick }) {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];

  // Tile hover animation tokens
  const tileHoverProps = {
    whileHover: { 
      y: -8, 
      boxShadow: "0 25px 35px -5px rgba(176, 125, 135, 0.3), 0 12px 16px -6px rgba(176, 125, 135, 0.2)",
      transition: { duration: 0.45, ease: LUXURY_EASE } 
    }
  };

  const imageHoverProps = {
    whileHover: { 
      scale: 1.08, 
      transition: { duration: 0.7, ease: LUXURY_EASE } 
    }
  };

  const aboutWordsLine1 = ["The", "Minds", "Behind"];
  const aboutWordsLine2 = ["Your", "Perfect", "Day"];

  const wordContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: LUXURY_EASE,
      },
    },
  };

  return (
    <section id="about" className="relative bg-white pt-12 sm:pt-16 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Floating Arrow Button with gentle floating bounce */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a 
          whileHover={{ scale: 1.12, boxShadow: "0 20px 25px -5px rgba(176, 125, 135, 0.5)" }}
          whileTap={{ scale: 0.92 }}
          href="#about"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white flex items-center justify-center shadow-2xl transition border-[3px] border-white cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <i className="fa-solid fa-arrow-down text-sm sm:text-base"></i>
        </motion.a>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-6 sm:mt-8">
        {/* Main 3-column asymmetrical layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Photo Cluster: 2 Overlapping Interactive Image Tiles */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: LUXURY_EASE }}
            className="lg:col-span-4 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm h-[380px] sm:h-[420px]">
              
              {/* Back/Bottom Image Tile */}
              <motion.div 
                {...tileHoverProps}
                className="absolute bottom-0 left-0 w-[78%] h-[68%] rounded-2xl overflow-hidden frame-rose shadow-xl cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.aboutLeftBack, title: "Intimate Outdoor Wedding Celebration" })}
              >
                <motion.img 
                  {...imageHoverProps}
                  src={IMAGES.aboutLeftBack} 
                  alt="Outdoor wedding scenery"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Front/Top Image Tile */}
              <motion.div 
                {...tileHoverProps}
                className="absolute top-0 right-2 w-[62%] h-[72%] rounded-2xl overflow-hidden frame-white shadow-2xl z-10 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.aboutLeftFront, title: "The Beautiful Couple in Floral Arch" })}
              >
                <motion.img 
                  {...imageHoverProps}
                  src={IMAGES.aboutLeftFront} 
                  alt="Bride and Groom under Floral Arch"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* Center Text Area: Staggered Typography & Smooth Fade-Slide */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.15, ease: LUXURY_EASE }}
            className="lg:col-span-4 text-center px-2 sm:px-6"
          >
            
            {/* Subheading: "About SHOWMANIA" */}
            <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-2">
              About SHOWMANIA
            </span>

            {/* Main Heading with Staggered Cascading Words */}
            <motion.h2 
              variants={wordContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="font-serif text-3xl sm:text-4xl lg:text-4xl text-[#2E282A] font-semibold tracking-tight leading-snug mb-5 overflow-hidden"
            >
              <div className="flex flex-wrap justify-center gap-x-2">
                {aboutWordsLine1.map((w, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block">{w}</motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-x-2">
                {aboutWordsLine2.map((w, i) => (
                  <motion.span key={i} variants={wordVariants} className="inline-block text-[#B07D87]">{w}</motion.span>
                ))}
              </div>
            </motion.h2>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#696164] leading-relaxed font-light mb-8 max-w-md mx-auto">
              We believe every love story deserves a breathtaking celebration. Our dedicated team blends visionary creative direction with flawless logistics to curate bespoke luxury weddings tailored uniquely to your style. From initial concept sketch to the final grand exit, we handle every intricate detail seamlessly, allowing you to immerse yourself fully in the magic of your moments.
            </p>

            {/* Action Buttons with Spring Micro-interactions */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  y: -2, 
                  boxShadow: "0 15px 25px -5px rgba(176, 125, 135, 0.45)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => onOpenBooking('Full Wedding Planning')}
                className="px-6 py-2.5 rounded-full bg-[#B07D87] text-white text-xs font-medium tracking-wider uppercase shadow-md"
              >
                Meet the Team
              </motion.button>
              
              <motion.a 
                whileHover={{ 
                  scale: 1.05, 
                  y: -2, 
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="#services"
                className="px-6 py-2.5 rounded-full bg-white hover:bg-rose-50 text-[#B07D87] border border-[#B07D87] text-xs font-medium tracking-wider uppercase shadow-sm"
              >
                Read more
              </motion.a>
            </div>

          </motion.div>

          {/* Right Photo Cluster: 2 Overlapping Interactive Image Tiles */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.25, ease: LUXURY_EASE }}
            className="lg:col-span-4 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm h-[380px] sm:h-[420px]">
              
              {/* Back/Top Image Tile */}
              <motion.div 
                {...tileHoverProps}
                className="absolute top-0 left-4 w-[65%] h-[72%] rounded-2xl overflow-hidden frame-white shadow-2xl z-10 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.aboutRightBack, title: "Bride and Groom Golden Hour" })}
              >
                <motion.img 
                  {...imageHoverProps}
                  src={IMAGES.aboutRightBack} 
                  alt="Groom and Bride Portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Front/Bottom Image Tile */}
              <motion.div 
                {...tileHoverProps}
                className="absolute bottom-0 right-0 w-[68%] h-[70%] rounded-2xl overflow-hidden frame-rose shadow-xl cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.aboutRightFront, title: "Cutting the Wedding Cake" })}
              >
                <motion.img 
                  {...imageHoverProps}
                  src={IMAGES.aboutRightFront} 
                  alt="Cutting Cake Celebration"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
