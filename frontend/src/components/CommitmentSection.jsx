import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../data/weddingData';

export default function CommitmentSection({ onOpenBooking, onImageClick }) {
  return (
    <section className="bg-[#FAF6F3] py-24 px-6 md:px-12 lg:px-16 border-t border-rose-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column: Slide in from left */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-2">
              Our Commitment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold tracking-tight leading-tight mb-6">
              Your Vision, Our <br className="hidden sm:block" /> Flawless Execution
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#696164] leading-relaxed font-light mb-8 max-w-lg mx-auto lg:mx-0">
              We are dedicated to turning your dream celebration into a reality that surpasses your wildest expectations. Through meticulous planning, customized timelines, and a deeply personalized approach, we promise an exceptional wedding experience for you and your guests with absolute finesse.
            </p>
            <div>
              <button 
                onClick={() => onOpenBooking('Full Wedding Planning')}
                className="px-8 py-3.5 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs font-medium tracking-wider uppercase shadow-xl transition transform hover:-translate-y-0.5"
              >
                Learn more
              </button>
            </div>
          </motion.div>

          {/* Right Staggered Photo Cluster: Slide in from right */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-md h-[400px]">
              
              {/* Top Left Card */}
              <div className="absolute top-0 left-4 w-[52%] h-[65%] rounded-2xl overflow-hidden frame-white shadow-xl z-10">
                <img 
                  src={IMAGES.commit1} 
                  alt="Smiling Couple" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                  onClick={() => onImageClick({ url: IMAGES.commit1, title: "Pure Joyful Moments" })}
                />
              </div>

              {/* Top Right Card */}
              <div className="absolute top-6 right-2 w-[48%] h-[60%] rounded-2xl overflow-hidden frame-rose shadow-lg">
                <img 
                  src={IMAGES.commit2} 
                  alt="Groom in Navy Suit" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                  onClick={() => onImageClick({ url: IMAGES.commit2, title: "Classic Elegance" })}
                />
              </div>

              {/* Bottom Center Card */}
              <div className="absolute bottom-0 left-[20%] w-[60%] h-[68%] rounded-2xl overflow-hidden frame-white shadow-2xl z-20">
                <img 
                  src={IMAGES.commit3} 
                  alt="Romantic Bride and Groom with bouquet" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                  onClick={() => onImageClick({ url: IMAGES.commit3, title: "Unforgettable Connection" })}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
