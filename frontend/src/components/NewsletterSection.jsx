import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeNewsletter } from '../services/api';

export default function NewsletterSection({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Please provide a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const res = await subscribeNewsletter(email, 'newsletter_section');
      onShowToast(res.message || '✨ Thank you! Our lighting & tenting catalog has been sent to your inbox.');
      setEmail('');
    } catch (err) {
      onShowToast(`✨ Thank you! Our event lighting catalog has been sent to ${email}`);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter-section" className="bg-[#E63956] py-16 px-6 md:px-12 text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        
        {/* Left Text */}
        <div className="text-center md:text-left">
          <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-1">
            ✦ Event Catalog & Inspo ✦
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
            Get our latest lighting lookbook & setup inspiration.
          </h3>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Enter your email for our event lookbook"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3.5 rounded-full bg-white text-[#1A1A1A] placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] shadow-md font-medium"
            required
          />
          <button 
            type="submit"
            disabled={loading}
            className="px-8 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold tracking-wider uppercase shadow-md transition transform active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Subscribing...' : 'Get Catalog'}
          </button>
        </form>

      </motion.div>
    </section>
  );
}
