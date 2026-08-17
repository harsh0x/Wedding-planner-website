import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const filterCategories = [
  { id: 'destination-weddings', name: 'Destination Weddings' },
  { id: 'birthday-party', name: 'Birthday Party' },
  { id: 'corporate-events', name: 'Corporate Events' },
  { id: 'cocktail-party', name: 'Cocktail Party' }
];

const galleryItems = [
  // Destination Weddings (18 photos matching reference sequence)
  { id: 1, category: 'destination-weddings', title: 'Royal Haldi Palace Courtyard Setup', location: 'Udaipur, Rajasthan', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85' },
  { id: 2, category: 'destination-weddings', title: 'Opulent Palace Mandap & Crystal Stage', location: 'Jaipur, Rajasthan', url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85' },
  { id: 3, category: 'destination-weddings', title: 'Grand Checkered Courtyard Nuptial Decor', location: 'Kumbhalgarh, Rajasthan', url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85' },
  { id: 4, category: 'destination-weddings', title: 'Sangeet Stage with Illumination & Led Arches', location: 'Fairmont Jaipur', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=85' },
  { id: 5, category: 'destination-weddings', title: 'Bride & Groom Royal Varmala Ceremony', location: 'Umaid Bhawan, Jodhpur', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85' },
  { id: 6, category: 'destination-weddings', title: 'Bespoke Floral Arch Welcome', location: 'Goa Beachfront Resort', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85' },
  { id: 7, category: 'destination-weddings', title: 'Pastel Floral Mandap on Lake Pichola', location: 'Lake Pichola, Udaipur', url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1400&q=85' },
  { id: 8, category: 'destination-weddings', title: 'Sunset Beachside Pheras Canopy', location: 'W Goa, Vagator', url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=85' },
  { id: 9, category: 'destination-weddings', title: 'Luxury Banquet Table Curation with Gold Trim', location: 'The Leela Palace', url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=85' },
  { id: 10, category: 'destination-weddings', title: 'Gota Patti & Marigold Carnival Mehndi', location: 'Samode Palace', url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85' },
  { id: 11, category: 'destination-weddings', title: 'Red Velvet Gala Sangeet Ballroom', location: 'Rambagh Palace Jaipur', url: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=1400&q=85' },
  { id: 12, category: 'destination-weddings', title: 'Royal Fort Illuminated Entryway', location: 'Mehrangarh Fort, Jodhpur', url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85' },
  { id: 13, category: 'destination-weddings', title: 'Heritage Haveli Courtyard Reception', location: 'Chomu Palace, Rajasthan', url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85' },
  { id: 14, category: 'destination-weddings', title: 'Crystal Chandelier Imperial Dining', location: 'Taj Falaknuma Palace', url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1400&q=85' },
  { id: 15, category: 'destination-weddings', title: 'Ruby Red Rose Floral Stage Setup', location: 'Grand Hyatt Goa', url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&q=85' },
  { id: 16, category: 'destination-weddings', title: 'Yellow Genda Phool Urli Haldi Setup', location: 'Rawla Narlai, Rajasthan', url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=85' },
  { id: 17, category: 'destination-weddings', title: 'Lawn Fairylight Canopy & Mirror Aisle', location: 'ITC Grand Bharat', url: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85' },
  { id: 18, category: 'destination-weddings', title: 'Midnight Royal Fireworks Display', location: 'Jagmandir Island Palace, Udaipur', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=85' },

  // Birthday Party
  { id: 19, category: 'birthday-party', title: 'Milestone 50th Golden Jubilee Gala', location: 'The Oberoi, New Delhi', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85' },
  { id: 20, category: 'birthday-party', title: 'Fairy Tale Enchanted Garden Soirée', location: 'Private Estate, Alibaug', url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85' },
  { id: 21, category: 'birthday-party', title: 'Neon Disco Carnival Celebration', location: 'JW Marriott, Mumbai', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85' },
  { id: 22, category: 'birthday-party', title: 'Royal Moroccan Themed Birthday Lounge', location: 'Jaipur Palace Lawns', url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=85' },

  // Corporate Events
  { id: 23, category: 'corporate-events', title: 'Global Leadership Summit & Stage Production', location: 'Grand Hyatt Convention', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85' },
  { id: 24, category: 'corporate-events', title: 'Annual Excellence Awards & Gala Night', location: 'Taj Palace, New Delhi', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=85' },
  { id: 25, category: 'corporate-events', title: 'Luxury Automobile Product Reveal', location: 'BICC, Mumbai', url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85' },
  { id: 26, category: 'corporate-events', title: 'Tech Innovation Gala Keynote Stage', location: 'Aerocity, New Delhi', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85' },

  // Cocktail Party
  { id: 27, category: 'cocktail-party', title: 'Sundowner Speakeasy Bar & Live Saxophone', location: 'Goa Cliffside Deck', url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=85' },
  { id: 28, category: 'cocktail-party', title: 'Gatsby Glamour Cocktail & Champagne Tower', location: 'St. Regis Ballroom', url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=85' },
  { id: 29, category: 'cocktail-party', title: 'Moonlight Lounge with Custom Mixology', location: 'Lakeside Pavilion, Udaipur', url: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1400&q=85' },
  { id: 30, category: 'cocktail-party', title: 'Boho Chic Sunset Cocktail Soirée', location: 'Vagator Beachfront, Goa', url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85' }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('destination-weddings');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems = galleryItems.filter(item => item.category === selectedCategory);

  // Slideshow timer
  useEffect(() => {
    let timer = null;
    if (isSlideshow && lightboxIndex !== null) {
      timer = setInterval(() => {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isSlideshow, lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
        setIsSlideshow(false);
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F3] text-charcoal pb-24">
      
      {/* 1. TOP BOTANICAL HEADER (MATCHING EXACT REFERENCE IMAGE 1) */}
      <section className="pt-24 sm:pt-32 pb-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Delicate Botanical Leaves Flourish */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-1.5 text-[#556B2F] text-lg mb-2"
          >
            <i className="fa-solid fa-leaf transform -scale-x-100"></i>
            <i className="fa-solid fa-seedling"></i>
            <i className="fa-solid fa-leaf"></i>
          </motion.div>

          {/* Title: Gallery */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: LUXURY_EASE }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2E282A] font-normal tracking-wide"
          >
            Gallery
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-gray-500 font-light max-w-xl mx-auto mt-2"
          >
            A glimpse into our bespoke setups, vibrant festivities, and opulent celebrations.
          </motion.p>

        </div>
      </section>

      {/* 2. FILTER TABS (MATCHING EXACT REFERENCE IMAGE 1) */}
      <section className="py-4 px-4 sm:px-6 max-w-6xl mx-auto w-full text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {filterCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-6 sm:px-8 py-3 rounded-sm text-xs sm:text-sm font-medium tracking-wider transition-all shadow-sm cursor-pointer ${
                  isActive
                    ? 'border border-[#E84874] text-[#E84874] bg-white hover:shadow'
                    : 'border border-gray-300 text-[#423E40] bg-white hover:border-[#E84874] hover:text-[#E84874]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. GALLERY GRID */}
      <section className="py-8 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-100/80 bg-white cursor-pointer transition transform duration-500 hover:-translate-y-1.5"
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-rose-300 mb-0.5">
                    {item.location}
                  </span>
                  <h4 className="font-serif text-base font-semibold leading-snug drop-shadow">
                    {item.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-200">
                    <i className="fa-solid fa-expand text-[11px]"></i>
                    <span className="text-[10px] uppercase tracking-wider">View Full Photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. FULLSCREEN LIGHTBOX WITH FILMSTRIP (MATCHING EXACT REFERENCE IMAGE 2) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col justify-between select-none"
          >
            {/* Top Control Bar */}
            <div className="w-full px-4 sm:px-8 py-4 flex items-center justify-between text-white/90 z-20">
              
              {/* Photo Counter */}
              <div className="text-xs sm:text-sm font-sans tracking-widest text-white/80 font-medium">
                <span>{lightboxIndex + 1}</span> / <span>{filteredItems.length}</span>
              </div>

              {/* Center Title Caption */}
              <div className="hidden sm:block text-xs sm:text-sm font-serif tracking-wider text-rose-200 truncate max-w-md text-center">
                {filteredItems[lightboxIndex]?.title} • {filteredItems[lightboxIndex]?.location}
              </div>

              {/* Top Right Action Icons */}
              <div className="flex items-center gap-4 sm:gap-5 text-sm sm:text-base">
                
                {/* Zoom */}
                <button 
                  onClick={() => setIsZoomed(!isZoomed)} 
                  className="hover:text-rose-400 transition cursor-pointer p-1"
                  title="Zoom In/Out"
                >
                  <i className={`fa-solid ${isZoomed ? 'fa-magnifying-glass-minus text-rose-400' : 'fa-magnifying-glass-plus'}`}></i>
                </button>

                {/* Slideshow Play/Pause */}
                <button 
                  onClick={() => setIsSlideshow(!isSlideshow)} 
                  className="hover:text-rose-400 transition cursor-pointer p-1"
                  title="Slideshow Play/Pause"
                >
                  <i className={`fa-solid ${isSlideshow ? 'fa-pause text-rose-400' : 'fa-play'}`}></i>
                </button>

                {/* Fullscreen Toggle */}
                <button 
                  onClick={toggleFullscreen} 
                  className="hover:text-rose-400 transition cursor-pointer p-1"
                  title="Toggle Fullscreen"
                >
                  <i className="fa-solid fa-expand"></i>
                </button>

                {/* Close */}
                <button 
                  onClick={() => {
                    setLightboxIndex(null);
                    setIsSlideshow(false);
                    setIsZoomed(false);
                  }} 
                  className="hover:text-rose-400 transition cursor-pointer p-1 text-lg ml-2"
                  title="Close"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>

              </div>

            </div>

            {/* Center Stage with Display Image */}
            <div className="relative flex-1 flex items-center justify-center px-4 sm:px-14 overflow-hidden">
              
              {/* Prev Button (<) */}
              <button 
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition border border-white/20 z-20 cursor-pointer"
                aria-label="Previous Image"
              >
                <i className="fa-solid fa-chevron-left text-base sm:text-lg"></i>
              </button>

              {/* Main Image */}
              <div className="relative max-h-[68vh] sm:max-h-[72vh] max-w-5xl flex items-center justify-center">
                <motion.img 
                  key={filteredItems[lightboxIndex]?.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: isZoomed ? 1.4 : 1 }}
                  transition={{ duration: 0.3 }}
                  src={filteredItems[lightboxIndex]?.url} 
                  alt={filteredItems[lightboxIndex]?.title}
                  className={`max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300 ${isZoomed ? 'cursor-zoom-out' : ''}`}
                />
              </div>

              {/* Next Button (>) */}
              <button 
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center transition border border-white/20 z-20 cursor-pointer"
                aria-label="Next Image"
              >
                <i className="fa-solid fa-chevron-right text-base sm:text-lg"></i>
              </button>

            </div>

            {/* Bottom Filmstrip Thumbnail Carousel (Reference Image 2) */}
            <div className="w-full bg-black/80 border-t border-white/10 p-2 sm:p-3 overflow-x-auto filmstrip-scroll z-20">
              <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 min-w-max px-2">
                {filteredItems.map((thumb, idx) => {
                  const isCurrent = idx === lightboxIndex;
                  return (
                    <button
                      key={thumb.id}
                      onClick={() => setLightboxIndex(idx)}
                      className={`w-14 h-10 sm:w-18 sm:h-12 flex-shrink-0 rounded overflow-hidden transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? 'border-2 border-[#E84874] shadow-lg scale-105 opacity-100'
                          : 'border border-white/30 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={thumb.url} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  );
                })}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
