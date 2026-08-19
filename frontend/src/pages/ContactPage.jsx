import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitInquiry } from '../services/api';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    partner_name: '',
    email: '',
    phone: '',
    date: '',
    guests: '300 - 600 Guests',
    service: 'Full Event Lighting',
    vision: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await submitInquiry(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(res.message || 'Something went wrong. Please call +91 97829 62963 directly.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again or call our direct numbers.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F0] text-[#1A1A1A] flex flex-col justify-between"
    >
      
      <div>
        {/* Top Hero Banner */}
        <section className="bg-[#E63956] text-white pt-28 pb-14 sm:pt-32 sm:pb-20 px-4 sm:px-6 md:px-12 text-center relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2">
              ✦ Suraj Light House • Ranthambore ✦
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6">
              Light Up Your Event
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed px-2">
              Tell us about your event venue, dates, generator needs, chandelier requirements, and guest count. Our master electrical and decor team will prepare a comprehensive proposal.
            </p>
          </motion.div>
        </section>

        {/* Main Content Grid */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Contacts */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease: LUXURY_EASE }}
              className="lg:col-span-4 space-y-5 sm:space-y-6 w-full"
            >
              
              {/* Contact Card 1: Concierge Email */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-rose-200/80 shadow-md">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-rose-50 text-[#E63956] flex items-center justify-center text-base sm:text-lg mb-4 sm:mb-6 shadow-sm">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-bold mb-1 sm:mb-2">
                  Inquiry Email
                </h3>
                <p className="text-xs text-[#5A5255] font-light leading-relaxed mb-3 sm:mb-4">
                  For formal quotation requests, layout schematics & vendor partnerships:
                </p>
                <a 
                  href="mailto:Rinkuchinki91@gmail.com" 
                  className="text-xs sm:text-sm font-bold text-[#E63956] hover:text-[#CF203E] transition break-all block"
                >
                  Rinkuchinki91@gmail.com
                </a>
              </div>

              {/* Contact Card 2: Phone Numbers */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-rose-200/80 shadow-md">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-rose-50 text-[#E63956] flex items-center justify-center text-base sm:text-lg mb-4 sm:mb-6 shadow-sm">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-bold mb-2">
                  Direct Phone Lines
                </h3>
                <p className="text-xs text-[#5A5255] font-light mb-4">
                  Call directly for urgent bookings & on-site logistics:
                </p>
                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="border-b border-rose-100 pb-2.5">
                    <a href="tel:+919782962963" className="hover:text-[#E63956] transition flex flex-wrap items-center justify-between gap-1">
                      <span className="font-bold text-[#1A1A1A]">+91 9782962963</span>
                      <span className="text-[11px] text-gray-500 font-medium">(Rinku Chinky)</span>
                    </a>
                  </li>
                  <li className="border-b border-rose-100 pb-2.5">
                    <a href="tel:+919414310499" className="hover:text-[#E63956] transition flex flex-wrap items-center justify-between gap-1">
                      <span className="font-bold text-[#1A1A1A]">+91 9414310499</span>
                      <span className="text-[11px] text-gray-500 font-medium">(Suraj Mal Saini)</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919982142355" className="hover:text-[#E63956] transition flex flex-wrap items-center justify-between gap-1">
                      <span className="font-bold text-[#1A1A1A]">+91 9982142355</span>
                      <span className="text-[11px] text-gray-500 font-medium">(Visnu Saini)</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Card 3: Location Studio */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-rose-200/80 shadow-md">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-rose-50 text-[#E63956] flex items-center justify-center text-base sm:text-lg mb-4 sm:mb-6 shadow-sm">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-bold mb-1 sm:mb-2">
                  Headquarters & Inventory
                </h3>
                <p className="text-xs text-[#1A1A1A] font-medium leading-relaxed mb-2">
                  Suraj Light House, Ranthambore National Park Road, Sawai Madhopur, Rajasthan 322001, India
                </p>
                <p className="text-[11px] text-gray-500 font-light">
                  Serving Nahargarh, Six Senses Barwara, Oberoi Vanyavilas, Sawai Vilas & pan-Rajasthan venues.
                </p>
              </div>

            </motion.div>

            {/* Right Column: 8-Field Event Lighting Inquiry Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: LUXURY_EASE }}
              className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-rose-200/80 shadow-xl w-full"
            >
              
              {submitted ? (
                <div className="text-center py-12 sm:py-16 px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-100 text-[#E63956] flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-6 shadow-md">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-2">
                    ✦ Request Received ✦
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] font-bold mb-4">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#5A5255] max-w-md mx-auto leading-relaxed mb-8 font-light">
                    Your lighting & tenting requirements have been forwarded directly to our senior project lead. We will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3.5 rounded-full bg-[#E63956] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#CF203E] transition cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6 sm:mb-8">
                    <span className="font-serif text-xs tracking-[0.25em] uppercase font-bold text-[#E63956] block mb-1">
                      ✦ Reserve Your Date ✦
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A1A1A] font-bold">
                      Event Lighting & Tenting Consultation
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5A5255] font-light mt-1">
                      Please provide your event parameters so our technical team can construct a precise power and lighting estimate.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-semibold flex items-center gap-2">
                      <i className="fa-solid fa-circle-exclamation text-rose-600 text-sm"></i>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    {/* ROW 1: Names */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                          YOUR NAME *
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. Vikramaditya Rathore"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-xs sm:text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                          HOST / EVENT NAME
                        </label>
                        <input 
                          type="text" 
                          placeholder="e.g. Royal Wedding / Corporate Summit"
                          value={formData.partner_name}
                          onChange={(e) => handleChange('partner_name', e.target.value)}
                          className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-xs sm:text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                        />
                      </div>
                    </div>

                    {/* ROW 2: Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                          EMAIL ADDRESS *
                        </label>
                        <input 
                          required
                          type="email" 
                          placeholder="vikram@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-xs sm:text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                          PHONE NUMBER
                        </label>
                        <input 
                          type="tel" 
                          placeholder="+91 97829 62963"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-xs sm:text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                        />
                      </div>
                    </div>

                    {/* ROW 3: Date, Guests & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                          EVENT DATE
                        </label>
                        <input 
                          type="date" 
                          value={formData.date}
                          onChange={(e) => handleChange('date', e.target.value)}
                          className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-xs sm:text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                          ESTIMATED GUESTS
                        </label>
                        <select 
                          value={formData.guests}
                          onChange={(e) => handleChange('guests', e.target.value)}
                          className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-xs sm:text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer font-medium"
                        >
                          <option value="Under 150 Guests">Under 150 Guests</option>
                          <option value="150 - 300 Guests">150 - 300 Guests</option>
                          <option value="300 - 600 Guests">300 - 600 Guests</option>
                          <option value="600 - 1200 Guests">600 - 1200 Guests</option>
                          <option value="1200+ Royal Mega Setup">1200+ Royal Mega Setup</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                          DESIRED SERVICE
                        </label>
                        <select 
                          value={formData.service}
                          onChange={(e) => handleChange('service', e.target.value)}
                          className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-xs sm:text-sm text-[#1A1A1A] shadow-sm transition cursor-pointer font-medium"
                        >
                          <option value="Full Event Lighting">Full Event Lighting</option>
                          <option value="Tenting & Decor">Tenting & Decor</option>
                          <option value="Corporate Setup">Corporate Setup</option>
                          <option value="Royal Heritage Wedding Decor">Royal Heritage Wedding Decor</option>
                          <option value="Stage & Truss Illumination">Stage & Truss Illumination</option>
                          <option value="Sound & Generator Redundancy">Sound & Generator Redundancy</option>
                        </select>
                      </div>
                    </div>

                    {/* ROW 4: Vision & Notes */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#1A1A1A] mb-1.5">
                        TELL US ABOUT YOUR EVENT & LIGHTING REQUIREMENTS
                      </label>
                      <textarea 
                        rows={4}
                        placeholder="Detail your venue name in Ranthambore/Rajasthan, stage dimensions, chandelier desires, generator requirements, or custom lighting cues..."
                        value={formData.vision}
                        onChange={(e) => handleChange('vision', e.target.value)}
                        className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl border border-rose-200/90 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63956] focus:border-transparent text-xs sm:text-sm text-[#1A1A1A] shadow-sm transition placeholder-gray-400 font-medium"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 px-6 rounded-full bg-[#E63956] hover:bg-[#CF203E] text-white font-bold text-xs sm:text-sm tracking-widest uppercase shadow-xl transition transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                            <span>Transmitting to Suraj Light House...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Event Lighting Quote</span>
                            <i className="fa-solid fa-paper-plane text-xs"></i>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              )}

            </motion.div>

          </div>
        </section>
      </div>

    </motion.div>
  );
}
