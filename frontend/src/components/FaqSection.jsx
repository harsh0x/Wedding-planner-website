import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES, FAQS } from '../data/weddingData';

export default function FaqSection({ onImageClick }) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Photo Cluster */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <div className="rounded-2xl overflow-hidden frame-white shadow-xl h-44 sm:h-52">
              <img 
                src={IMAGES.faqLeftTop} 
                alt="Wedding couple" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.faqLeftTop, title: "Romantic Vows" })}
              />
            </div>
            <div className="rounded-2xl overflow-hidden frame-rose shadow-lg h-36 sm:h-44">
              <img 
                src={IMAGES.faqLeftBottom} 
                alt="Bridal party laughter" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.faqLeftBottom, title: "Bridal Party Fun" })}
              />
            </div>
          </motion.div>

          {/* Center FAQ Accordions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 text-center"
          >
            <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-2">
              You may be wondering...
            </span>

            <div className="space-y-3 mt-8 text-left">
              {FAQS.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FAF6F3] rounded-2xl border border-rose-200/70 overflow-hidden transition shadow-sm"
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-serif text-sm sm:text-base text-[#2E282A] font-medium hover:text-[#B07D87] transition"
                  >
                    <span>{faq.q}</span>
                    <i className={`fa-solid fa-chevron-down text-xs text-[#B07D87] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}></i>
                  </button>

                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#696164] leading-relaxed font-light border-t border-rose-100 overflow-hidden"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-8">
              <p className="font-script text-2xl sm:text-3xl text-[#B07D87]">
                Don't See Your Question? <br />
                <a href="#contact" className="underline hover:text-rose-700 font-script">Let's Talk</a>
              </p>
            </div>
          </motion.div>

          {/* Right Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden frame-white shadow-2xl w-full h-[320px] sm:h-[400px]">
              <img 
                src={IMAGES.faqRight} 
                alt="Bride and groom celebrating" 
                className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
                onClick={() => onImageClick({ url: IMAGES.faqRight, title: "Newly Married Joy" })}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
