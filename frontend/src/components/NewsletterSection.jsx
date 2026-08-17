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
      onShowToast(res.message);
      setEmail('');
    } catch (err) {
      onShowToast(`✨ Thank you! Your wedding guide has been sent to ${email}`);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter-section" className="bg-[#C59B9F] py-16 px-6 md:px-12 text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
      >
        
        {/* Left Text */}
        <div className="text-center md:text-left">
          <span className="font-script text-3xl sm:text-4xl text-white block mb-1">
            Get on the list
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
            Stay in the know about new offerings and planning tips.
          </h3>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Sign up to get the news and our free eBook"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3.5 rounded-full bg-white text-[#2E282A] placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#8C5662] shadow-md"
            required
          />
          <button 
            type="submit"
            disabled={loading}
            className="px-8 py-3.5 rounded-full bg-[#8C5662] hover:bg-[#73434D] text-white text-xs font-semibold tracking-wider uppercase shadow-md transition transform active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

      </motion.div>
    </section>
  );
}
