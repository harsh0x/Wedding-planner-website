import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitInquiry } from '../services/api';

export default function InquiryForm({ onShowToast }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // 8 Field State Object matching specification
  const [formData, setFormData] = useState({
    name: '',
    partnerName: '',
    email: '',
    phone: '',
    date: '',
    guests: '150+',
    service: 'Full Wedding Planning',
    vision: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMessage('Please fill in both your name and email address.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await submitInquiry(formData);
      if (onShowToast) {
        onShowToast(res.message);
      }
      // Reset form
      setFormData({
        name: '',
        partnerName: '',
        email: '',
        phone: '',
        date: '',
        guests: '150+',
        service: 'Full Wedding Planning',
        vision: ''
      });
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Unable to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Form Cascading Animation Variants
  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="inquiry-section" className="bg-[#FAF6F3] py-20 px-6 md:px-12 border-t border-rose-200/60 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header with smooth entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-1">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-medium tracking-tight mb-3">
            Wedding Consultation Inquiry
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#696164] max-w-xl mx-auto leading-relaxed font-light">
            Fill out the details below to request your private consultation. We look forward to crafting your bespoke celebration.
          </p>
        </motion.div>

        {/* Form Container with Staggered Cascading Rows */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#FAF6F3] rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-rose-200/90"
        >
          
          {/* Error Alert */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-medium flex items-center gap-2">
              <i className="fa-solid fa-circle-exclamation text-rose-600 text-sm"></i>
              <span>{errorMessage}</span>
            </div>
          )}

          <motion.form 
            variants={formVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-5"
          >
            
            {/* ROW 1: "YOUR NAME *" and "PARTNER'S NAME" */}
            <motion.div variants={rowVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                  YOUR NAME *
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                  PARTNER'S NAME
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Julian Hayes"
                  value={formData.partnerName}
                  onChange={(e) => handleChange('partnerName', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
                />
              </div>
            </motion.div>

            {/* ROW 2: "EMAIL ADDRESS *" and "PHONE NUMBER" */}
            <motion.div variants={rowVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <input 
                  required
                  type="email" 
                  placeholder="eleanor@luxuryweddings.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                  PHONE NUMBER
                </label>
                <input 
                  type="tel" 
                  placeholder="+1 (305) 555-0199"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
                />
              </div>
            </motion.div>

            {/* ROW 3: "ESTIMATED DATE", "ESTIMATED GUESTS", "DESIRED SERVICE" */}
            <motion.div variants={rowVariants} className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                  ESTIMATED DATE
                </label>
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                  ESTIMATED GUESTS
                </label>
                <select 
                  value={formData.guests}
                  onChange={(e) => handleChange('guests', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition cursor-pointer"
                >
                  <option value="Intimate (< 50)">Intimate (&lt; 50)</option>
                  <option value="50-100">50 - 100 Guests</option>
                  <option value="100-150">100 - 150 Guests</option>
                  <option value="150+">150+ Guests</option>
                  <option value="250+ Grand Gala">250+ Grand Gala</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                  DESIRED SERVICE
                </label>
                <select 
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition cursor-pointer"
                >
                  <option value="Full Wedding Planning">Full Wedding Planning</option>
                  <option value="Partial Planning">Partial Planning</option>
                  <option value="Day-of-Management">Day-of-Management</option>
                  <option value="Destination Experience">Destination Experience</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>
            </motion.div>

            {/* ROW 4: "TELL US ABOUT YOUR WEDDING VISION" */}
            <motion.div variants={rowVariants}>
              <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                TELL US ABOUT YOUR WEDDING VISION
              </label>
              <textarea 
                rows="4"
                placeholder="Share your dream aesthetic, desired venue, color palette, or special traditions..."
                value={formData.vision}
                onChange={(e) => handleChange('vision', e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
              ></textarea>
            </motion.div>

            {/* Submit Button with Spring Micro-interactions */}
            <motion.div variants={rowVariants} className="pt-3">
              <motion.button 
                whileHover={{ 
                  scale: 1.03, 
                  y: -2, 
                  boxShadow: "0 20px 30px -5px rgba(176, 125, 135, 0.5), 0 10px 15px -5px rgba(176, 125, 135, 0.4)" 
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-[#B07D87] text-white font-semibold tracking-widest uppercase text-xs shadow-xl disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Wedding Inquiry</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

        </motion.div>

      </div>
    </section>
  );
}
