import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const filterCategories = [
  { id: 'palace-lighting', name: 'Palace & Fort Lighting' },
  { id: 'chandeliers', name: 'Crystal Chandeliers' },
  { id: 'stage-trussing', name: 'Stage Trussing & Special FX' },
  { id: 'tenting-decor', name: 'Heritage Shamiyana & Tenting' },
  { id: 'corporate-lighting', name: 'Corporate Summits & Galas' }
];

const galleryItems = [
  // Palace & Fort Lighting
  { id: 1, category: 'palace-lighting', title: 'Nahargarh Palace Courtyard Illumination', location: 'Ranthambore, Rajasthan', url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1400&q=85' },
  { id: 2, category: 'palace-lighting', title: 'Six Senses Fort Barwara Amber Facade Wash', location: 'Sawai Madhopur, Rajasthan', url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1400&q=85' },
  { id: 3, category: 'palace-lighting', title: 'Oberoi Vanyavilas Fairy Light Tree Canopies', location: 'Ranthambore National Park Road', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85' },
  { id: 4, category: 'palace-lighting', title: 'Royal Heritage Fort Rampart Floodlights', location: 'Jaipur, Rajasthan', url: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1400&q=85' },
  { id: 5, category: 'palace-lighting', title: 'Palace Lake Reflection Lighting', location: 'Udaipur, Rajasthan', url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=85' },
  { id: 6, category: 'palace-lighting', title: 'Sandstone Palace Golden Hour Glow', location: 'Jodhpur, Rajasthan', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=85' },

  // Crystal Chandeliers
  { id: 7, category: 'chandeliers', title: 'Grand 40-Chandelier Open Courtyard Canopy', location: 'Nahargarh Palace, Ranthambore', url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1400&q=85' },
  { id: 8, category: 'chandeliers', title: 'Imperial Crystal Chandelier Dining Pavilion', location: 'Sawai Vilas, Sawai Madhopur', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85' },
  { id: 9, category: 'chandeliers', title: 'Floral Mandap with Tiered Crystal Drop Chandeliers', location: 'Royal Heritage Courtyard', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85' },
  { id: 10, category: 'chandeliers', title: 'Vintage Brass & Crystal Chandelier Alley', location: 'Jaipur Haveli Resort', url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=85' },

  // Stage Trussing & Special FX
  { id: 11, category: 'stage-trussing', title: 'Heavy Aluminum Box Trussing with Moving Heads', location: 'Six Senses Fort Barwara Sangeet', url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=85' },
  { id: 12, category: 'stage-trussing', title: 'Concert DJ Stage with Full-Color RGB Lasers', location: 'Ranthambore Musical Night', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1400&q=85' },
  { id: 13, category: 'stage-trussing', title: 'Sparkular Cold Pyrotechnic Grand Entry', location: 'Nahargarh Main Amphitheatre', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85' },
  { id: 14, category: 'stage-trussing', title: 'Dry Ice Low Fog Cloud for Royal Couple Dance', location: 'Jaipur Grand Ballroom', url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1400&q=85' },

  // Heritage Shamiyana & Tenting
  { id: 15, category: 'tenting-decor', title: 'Traditional Rajasthani Handcrafted Shamiyana', location: 'Sawai Madhopur Palace Grounds', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85' },
  { id: 16, category: 'tenting-decor', title: 'Waterproof German Hangar Dining Pavilion', location: 'Ranthambore Luxury Resort', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85' },
  { id: 17, category: 'tenting-decor', title: 'Golden Silk Ceiling Drape with Warm Festoon Lights', location: 'Fort Courtyard Banquet', url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85' },
  { id: 18, category: 'tenting-decor', title: 'Fairytale Fairy Light Tunnel Pathway', location: 'The Oberoi Vanyavilas Garden', url: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85' },

  // Corporate Summits & Galas
  { id: 19, category: 'corporate-lighting', title: 'National Leadership Summit Keynote Stage', location: 'Rajasthan Convention Centre', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85' },
  { id: 20, category: 'corporate-lighting', title: 'Annual Corporate Awards & Gala Stage', location: 'Jaipur Grand Ballroom', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85' },
  { id: 21, category: 'corporate-lighting', title: 'Automobile Product Launch Spotlight Rig', location: 'Convention Hangar Setup', url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85' }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('palace-lighting');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isSlideshow, setIsSlideshow] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredItems = galleryItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    let timer = null;
    if (isSlideshow && lightboxIndex !== null) {
      timer = setInterval(() => {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isSlideshow, lightboxIndex, filteredItems.length]);

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

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

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
        <section className="bg-[#E63956] text-white pt-36 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#FFCCD3] block mb-2">
              ✦ Production Showcase ✦
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Our Grand Lighting & Decor Gallery
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed">
              Explore our portfolio of crystal chandelier canopies, royal shamiyana setups, palace floodlighting, and stage trussing across Ranthambore & Rajasthan.
            </p>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="py-8 bg-white border-b border-rose-100 sticky top-20 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#E63956] text-white shadow-md'
                    : 'bg-[#FAF6F0] text-[#5A5255] hover:bg-rose-50 hover:text-[#E63956]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-3xl overflow-hidden shadow-md border border-rose-200/80 bg-white cursor-pointer h-72 sm:h-80"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFCCD3] block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-bold leading-snug">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-rose-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to view in full HD</span>
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {currentItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 select-none"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Top Controls */}
              <div className="w-full flex items-center justify-between text-white z-10 max-w-6xl" onClick={(e) => e.stopPropagation()}>
                <span className="text-xs text-gray-400 font-medium">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsSlideshow(!isSlideshow)} 
                    className={`text-xs px-3 py-1 rounded-full border ${isSlideshow ? 'bg-[#E63956] border-[#E63956]' : 'border-white/30 text-white'} transition cursor-pointer`}
                  >
                    {isSlideshow ? 'Pause Slideshow' : 'Play Slideshow'}
                  </button>
                  <button 
                    onClick={() => setIsZoomed(!isZoomed)} 
                    className="text-white/80 hover:text-white transition text-lg cursor-pointer"
                    title="Zoom"
                  >
                    <i className={`fa-solid ${isZoomed ? 'fa-magnifying-glass-minus' : 'fa-magnifying-glass-plus'}`}></i>
                  </button>
                  <button 
                    onClick={() => setLightboxIndex(null)} 
                    className="text-white/80 hover:text-[#E63956] transition text-2xl cursor-pointer"
                    title="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative flex-1 flex items-center justify-center w-full max-w-5xl my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E63956] text-white flex items-center justify-center text-lg backdrop-blur-md transition cursor-pointer"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>

                <img 
                  src={currentItem.url} 
                  alt={currentItem.title} 
                  className={`max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain transition-transform duration-300 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-[#E63956] text-white flex items-center justify-center text-lg backdrop-blur-md transition cursor-pointer"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="text-center text-white z-10 max-w-2xl" onClick={(e) => e.stopPropagation()}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FFCCD3] block mb-1">
                  {currentItem.location}
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold">
                  {currentItem.title}
                </h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
