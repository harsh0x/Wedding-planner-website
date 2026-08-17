import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitInquiry } from '../services/api';

export default function BookingModal({ isOpen, onClose, initialService, onSuccess }) {
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

  // Prefill service
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
      onSuccess(res.message);
      onClose();
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[105] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto cursor-pointer"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF6F3] rounded-3xl max-w-3xl w-full p-8 md:p-12 shadow-2xl border border-rose-200/80 relative my-8 cursor-default"
          >
            
            {/* Top-Right Close 'X' Button */}
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-rose-100/90 text-[#B07D87] hover:bg-[#B07D87] hover:text-white flex items-center justify-center transition shadow-sm border border-rose-200 cursor-pointer"
              aria-label="Close modal"
              title="Close form (ESC)"
            >
              <i className="fa-solid fa-xmark text-base"></i>
            </motion.button>

            {/* Modal Header */}
            <div className="text-center mb-8 pr-8 pl-8">
              <span className="font-script text-[#B07D87] text-3xl sm:text-4xl block">Reserve Your Date</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2E282A] font-semibold mt-1">
                Wedding Consultation Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#696164] mt-2 max-w-lg mx-auto font-light leading-relaxed">
                We accept a strictly limited number of luxury weddings each season to guarantee bespoke, flawless dedication.
              </p>
            </div>

            {/* Error Alert */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-medium flex items-center gap-2">
                <i className="fa-solid fa-circle-exclamation text-rose-600 text-sm"></i>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 8-Field Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* ROW 1: "YOUR NAME *" and "PARTNER'S NAME" */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
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
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
                  />
                </div>
              </div>

              {/* ROW 2: "EMAIL ADDRESS *" and "PHONE NUMBER" */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
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
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition placeholder-gray-400"
                  />
                </div>
              </div>

              {/* ROW 3: "ESTIMATED DATE", "ESTIMATED GUESTS", "DESIRED SERVICE" */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                    ESTIMATED DATE
                  </label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-[#423E40] mb-1.5">
                    ESTIMATED GUESTS
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => handleChange('guests', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition cursor-pointer"
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
                    className="w-full px-4 py-3 rounded-xl border border-rose-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#B07D87] focus:border-transparent text-sm text-[#2E282A] shadow-sm transition cursor-pointer"
                  >
                    <option value="Full Wedding Planning">Full Wedding Planning</option>
                    <option value="Partial Planning">Partial Planning</option>
                    <option value="Day-of-Management">Day-of-Management</option>
                    <option value="Destination Experience">Destination Experience</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              {/* ROW 4: "TELL US ABOUT YOUR WEDDING VISION" */}
              <div>
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
              </div>

              {/* Submit & Cancel Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <motion.button 
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="flex-1 w-full py-4 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white font-semibold tracking-widest uppercase text-xs shadow-xl disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                      <span>Transmitting to SHOWMANIA Concierge...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Wedding Inquiry</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </>
                  )}
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-rose-50 text-[#696164] hover:text-[#2E282A] border border-rose-200 text-xs font-semibold tracking-widest uppercase transition cursor-pointer"
                >
                  Close
                </motion.button>
              </div>
            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
