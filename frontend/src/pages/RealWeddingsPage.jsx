import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const categories = [
  { id: 'all', name: 'All Weddings' },
  { id: 'kumbhalgarh', name: 'Kumbhalgarh' },
  { id: 'udaipur', name: 'Udaipur' },
  { id: 'jaipur', name: 'Jaipur' },
  { id: 'goa', name: 'Goa' },
  { id: 'jodhpur', name: 'Jodhpur' }
];

const weddingsList = [
  {
    id: 'ritesh-bhavika',
    names: 'Ritesh & Bhavika',
    category: 'kumbhalgarh',
    venue: 'Rawla Shargun, Kumbhalgarh',
    bannerImg: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    thought: 'Bhavika and Ritesh wanted their wedding decor to be a perfect blend of royal elegance and personal touches. They aimed for a luxurious, rich, and detailed look that still felt warm and inviting. Each event was to have a unique style fitting its mood – from pastel freshness at Haldi to glamorous and fairy-tale-like settings for the Sangeet, with a grand aesthetic backdrop for the wedding itself.',
    specialNote: 'A special request was made to ensure everything looked luxurious with exceptional attention to every detail, which was beautifully brought to life by SHOWMANIA Events.',
    makers: [
      { role: 'Wedding Planner', credit: '@showmaniaevents' },
      { role: 'Design & Decor', credit: '@showmaniaevents' },
      { role: 'Photographer', credit: '@delhivelvet' },
      { role: 'Makeup Artist', credit: '@manudheeraj_makeupartis' },
      { role: 'Jewellery', credit: '@navrathan1954, Tonoto (Haldi jewellery)' },
      { role: 'Venue', credit: 'Rawla Shargun Kumbhalgarh (@rawlasagrun & @lemontreeresortkumbhalgah)' },
      { role: 'Anchor', credit: '@mcujjwal' },
      { role: 'Dholis', credit: '@sanjaydholies' },
      { role: 'Choreographers', credit: '@energiedancecrew' },
      { role: 'DJ', credit: '@johnniernest' }
    ],
    functions: [
      { name: 'Haldi', vibe: 'Soft pastel hues, fresh flowers, fun games, and props to keep guests entertained.' },
      { name: 'Sangeet', vibe: 'A glamorous event filled with lots of shine and lighting to create a fairy-tale atmosphere.' },
      { name: 'Mayra', vibe: 'Traditional and simple with a "gulaabi" touch.' },
      { name: 'Wedding', vibe: 'Set against the majestic mountain views, the wedding featured an elegant, aesthetic backdrop that complemented the grandeur of the day.' }
    ]
  },
  {
    id: 'aarav-ananya',
    names: 'Aarav & Ananya',
    category: 'udaipur',
    venue: 'The Oberoi Udaivilas, Udaipur',
    bannerImg: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    thought: 'Ananya and Aarav envisioned a Lake Pichola royal celebration immersed in candlelight, floating lotus mandaps, and regal Mewari heritage. They wanted every guest arriving by royal boat to feel the magic of Rajasthan. SHOWMANIA designed an ethereal Sangeet with crystal canopies and a Pheras ceremony illuminated by 10,000 diyas reflecting on the lake.',
    specialNote: 'The couple had guests traveling from 14 countries. SHOWMANIA handled end-to-end royal logistics, charter boats, bespoke Rajasthani welcome kits, and curated culinary experiences.',
    makers: [
      { role: 'Wedding Planner', credit: '@showmaniaevents' },
      { role: 'Design & Decor', credit: '@showmaniaevents' },
      { role: 'Photographer', credit: '@storiesbyjosephradhik' },
      { role: 'Makeup Artist', credit: '@namratasoni' },
      { role: 'Jewellery', credit: '@sabyasachijewelry' },
      { role: 'Venue', credit: 'The Oberoi Udaivilas, Udaipur' },
      { role: 'Live Artist', credit: '@mame_khan_official' },
      { role: 'DJ & Sound', credit: '@dj_shadow_dubai' }
    ],
    functions: [
      { name: 'Royal Welcome & Sundowner', vibe: 'Lakeside cocktails with vintage boat transfers and traditional Rajasthani ghoomar dancers.' },
      { name: 'Mehndi & Carnival', vibe: 'Vibrant marigold and gota patti canopies with live bangle making and folk puppet acts.' },
      { name: 'Sangeet under the Stars', vibe: 'Crystal chandeliers, moving LED arches, and high-energy choreographies.' },
      { name: 'The Pheras', vibe: 'Floating mandap on the dome promenade flanked by sacred Vedic chants and floral fireworks.' }
    ]
  },
  {
    id: 'karan-meera',
    names: 'Karan & Meera',
    category: 'jaipur',
    venue: 'Fairmont Jaipur, Kukas',
    bannerImg: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85',
    thought: 'Meera and Karan requested a grand Pink City extravaganza with high-energy Punjabi and Marwari fusion. They wanted a carnival-themed Mehndi with live folk percussionists, an electric Mughal-glam Sangeet featuring celebrity singers, and a sunset courtyard wedding with cascading tuberose and pink roses.',
    specialNote: 'Special vintage cars and a 100-member royal elephant and camel procession made the Baraat one of the most talked-about events of the season.',
    makers: [
      { role: 'Wedding Planner', credit: '@showmaniaevents' },
      { role: 'Design & Decor', credit: '@showmaniaevents' },
      { role: 'Photographer', credit: '@weddingnama' },
      { role: 'Makeup Artist', credit: '@danielcbauer' },
      { role: 'Venue', credit: 'Fairmont Jaipur (@fairmontjaipur)' },
      { role: 'DJ & Sound', credit: '@dj_chetas' },
      { role: 'Anchor', credit: '@vandanavadhera' }
    ],
    functions: [
      { name: 'Bazaar Mehndi', vibe: 'Block-print decor, traditional spice stalls, attar bars, and live Sufi musicians.' },
      { name: 'Gala Sangeet', vibe: 'Concert-grade lighting, cold pyros, hydraulic stage, and A-list headline artist performances.' },
      { name: 'Royal Baraat & Pheras', vibe: 'Grand elephant procession leading into a majestic mirrored lotus mandap.' }
    ]
  },
  {
    id: 'rohan-tanya',
    names: 'Rohan & Tanya',
    category: 'goa',
    venue: 'W Goa & Vagator Beachfront',
    bannerImg: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    thought: 'Tanya and Rohan wanted a barefoot coastal chic vibe mixed with high-octane sunset cocktail parties. The Haldi by the pool featured marigold yellow and turquoise accents, while the beachfront Pheras took place under a bamboo canopy at golden hour with sound waves harmonizing with acoustic sitar rhythms.',
    specialNote: 'A dedicated sundowner cocktail bar with custom signature couple drinks and an open-air afterparty that lasted until dawn.',
    makers: [
      { role: 'Wedding Planner', credit: '@showmaniaevents' },
      { role: 'Design & Decor', credit: '@showmaniaevents' },
      { role: 'Photographer', credit: '@theweddingsalad' },
      { role: 'Venue', credit: 'W Goa, Vagator (@w_goa)' },
      { role: 'DJ', credit: '@djzaeden' }
    ],
    functions: [
      { name: 'Poolside Haldi & Rain Dance', vibe: 'Tropical yellow blooms, water guns, and bespoke coconuts branded with couple initials.' },
      { name: 'Sunset Beach Pheras', vibe: 'Pastel pampas grass, driftwood arches, and conch shell fanfares at golden hour.' },
      { name: 'Neon After-Party', vibe: 'Boho teepees, fire dancers, glow bars, and house DJ sets.' }
    ]
  }
];

const REAL_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85',
    sub: 'Unforgettable Nuptials & Grand Love Stories',
    title: 'Real Weddings by SHOWMANIA',
    desc: "Every couple's journey is a bespoke masterpiece. Explore our real weddings, couple thoughts, decor inspirations, and the esteemed wedding makers behind each majestic celebration."
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85',
    sub: "Aarav & Meera's Udaipur Fairytale",
    title: 'Imperial Romance in the City of Lakes',
    desc: 'A 3-day royal extravaganza featuring 2,000 floating candles, 24-piece string symphony, and vintage royal boat processions across Lake Pichola.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85',
    sub: "Rohan & Natasha's Goa Soirée",
    title: 'Seaside Magic & High-Energy Nights',
    desc: 'Pastel mandap under the swaying coastal palms, a neon tropical after-party, and personalized vows under the starlit Arabian sky.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85',
    sub: "Kabir & Ananya's Royal Fortress",
    title: 'Century-Old Fort Extravaganza',
    desc: 'Grand sandstone archways illuminated by 5,000 diyas, majestic floral showers, and authentic royal Rajasthani hospitality.'
  }
];

export default function RealWeddingsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeStory, setActiveStory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % REAL_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = REAL_SLIDES[currentSlide];

  const filteredWeddings = selectedCategory === 'all'
    ? weddingsList
    : weddingsList.filter(w => w.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAF6F3] text-charcoal">
      
      {/* 1. HERO SECTION WITH AUTOMATIC SLIDER & PINKISH FADED OVERLAY */}
      <section className="relative text-white min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 text-center overflow-hidden">
        
        {/* Background Images Crossfade & Ken-Burns */}
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 6.5, ease: "easeOut" }
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        </AnimatePresence>

        {/* Signature Pinkish Faded Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10" 
          style={{ background: 'linear-gradient(180deg, rgba(46, 40, 42, 0.45) 0%, rgba(176, 125, 135, 0.70) 55%, rgba(176, 125, 135, 0.92) 100%)' }}
        />
        
        <div className="max-w-4xl mx-auto relative z-20 flex-1 flex flex-col items-center justify-center select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="flex flex-col items-center"
            >
              <span className="font-script text-3xl sm:text-5xl text-rose-200 block mb-2 sm:mb-3">
                {slide.sub}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide leading-tight mb-4 sm:mb-6 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed px-2 drop-shadow-sm">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <div className="w-full bg-[#B07D87] text-white py-6 px-4 sm:px-6 border-b border-rose-400/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block font-serif text-3xl sm:text-4xl font-bold">150+</span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-rose-200">Royal Nuptials</span>
          </div>
          <div>
            <span className="block font-serif text-3xl sm:text-4xl font-bold">18+</span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-rose-200">Iconic Destinations</span>
          </div>
          <div>
            <span className="block font-serif text-3xl sm:text-4xl font-bold">500+</span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-rose-200">Artisans & Makers</span>
          </div>
          <div>
            <span className="block font-serif text-3xl sm:text-4xl font-bold">100%</span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase text-rose-200">Bespoke Curation</span>
          </div>
        </div>
      </div>

      {/* 3. FILTER CATEGORIES */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto w-full text-center">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#E84874] text-white shadow-md'
                  : 'bg-white text-[#423E40] hover:bg-rose-50 border border-rose-200/70'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* 4. REAL WEDDINGS SHOWCASE (MATCHING IMAGE 1 & 2 DESIGN) */}
      <section className="pb-20 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full space-y-16 sm:space-y-20">
        <AnimatePresence mode="wait">
          {filteredWeddings.map((wedding, idx) => (
            <motion.div
              key={wedding.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: LUXURY_EASE }}
              className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-rose-200/80 transition-all hover:shadow-2xl"
            >
              {/* Top Floral Botanical Crest (Reference Image 2) */}
              <div className="flex justify-center mb-8 sm:mb-10">
                <div className="relative w-72 sm:w-80 h-36 sm:h-40 rounded-full bg-radial-crest bg-[#FFF5F7] border border-rose-200 shadow-inner flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-[#B07D87] text-lg mb-0.5">
                    <i className="fa-solid fa-spa"></i>
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-[#423E40] tracking-wider uppercase font-medium">
                    {wedding.venue}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2E282A] font-semibold mt-1">
                    {wedding.names}
                  </h3>
                </div>
              </div>

              {/* Main Two-Column Row (Reference Image 1) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Couple Photograph */}
                <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-lg border-2 border-rose-100 group relative aspect-[4/3] sm:aspect-[16/11]">
                  <img 
                    src={wedding.bannerImg} 
                    alt={wedding.names}
                    className="w-full h-full object-cover object-center transition transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-3.5 py-1.5 rounded-full font-medium flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-rose-300"></i>
                    <span>{wedding.venue}</span>
                  </div>
                </div>

                {/* Right: Soft Pink Outlined Quote Box (Reference Image 1) */}
                <div className="lg:col-span-6 bg-[#FFF9FA] border border-[#E8B2BC] p-6 sm:p-8 md:p-10 rounded-2xl relative flex flex-col justify-between h-full text-center">
                  
                  <div className="text-[#B07D87] text-3xl sm:text-4xl font-serif mb-4 flex justify-center opacity-80">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>

                  <p className="font-sans text-xs sm:text-sm md:text-[13px] text-[#423E40] leading-relaxed font-light mb-6 px-1 sm:px-4">
                    {wedding.thought}
                  </p>

                  <div className="pt-4 border-t border-rose-200/60 flex flex-col items-center gap-3">
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#2E282A] font-semibold">
                      {wedding.names}
                    </h4>
                    
                    <button 
                      onClick={() => setActiveStory(wedding)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B07D87] hover:text-rose-700 underline underline-offset-8 transition-colors cursor-pointer group"
                    >
                      <span>Read More</span>
                      <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition"></i>
                    </button>
                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* 5. CTA CONSULTATION SECTION */}
      <section className="pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-rose-50 -z-0"></div>
          <div className="relative z-10">
            <span className="font-script text-3xl sm:text-5xl text-[#B07D87] block mb-2">Write Your Own Love Story</span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold mb-4">
              Ready to Craft Your Dream Nuptials?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#696164] max-w-xl mx-auto mb-8 font-light leading-relaxed">
              From concept sketches and 3D decor renders to venue scouting and full day-of concierge, let SHOWMANIA produce an unforgettable celebration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-9 py-4 rounded-full bg-[#E84874] hover:bg-[#D43460] text-white text-xs font-semibold tracking-widest uppercase shadow-xl transition transform hover:scale-105 active:scale-95"
              >
                Book Consultation
              </Link>
              <Link 
                to="/wedding-venues" 
                className="px-9 py-4 rounded-full bg-white hover:bg-rose-50 text-[#B07D87] border border-rose-300 text-xs font-semibold tracking-widest uppercase transition"
              >
                Explore Venues
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE STORY MODAL (MATCHING REFERENCE IMAGE 2 & 3) */}
      <AnimatePresence>
        {activeStory && (
          <div 
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setActiveStory(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: LUXURY_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-rose-200 overflow-hidden relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/90 shadow-md border border-rose-200 text-charcoal hover:bg-rose-50 hover:text-rose-600 transition flex items-center justify-center z-30 cursor-pointer"
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>

              {/* Scrollable Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-10 md:p-12 space-y-8 text-charcoal">
                
                {/* Top Botanical Crest Banner (Reference Image 2) */}
                <div className="flex justify-center mb-2">
                  <div className="relative w-72 sm:w-80 h-32 sm:h-36 rounded-full bg-[#FFF5F7] border border-rose-200 shadow-inner flex flex-col items-center justify-center p-3 text-center">
                    <div className="text-[#B07D87] text-base mb-0.5">
                      <i className="fa-solid fa-spa"></i>
                    </div>
                    <span className="font-sans text-[11px] sm:text-xs text-[#423E40] tracking-wider uppercase font-medium">
                      {activeStory.venue}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#2E282A] font-semibold mt-0.5">
                      {activeStory.names}
                    </h2>
                  </div>
                </div>

                {/* Banner Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/9] w-full border border-rose-100">
                  <img src={activeStory.bannerImg} alt={activeStory.names} className="w-full h-full object-cover" />
                </div>

                {/* The Couple's Vision (Reference Image 1) */}
                <div className="bg-[#FFF9FA] border border-[#E8B2BC] p-6 sm:p-8 rounded-2xl text-center">
                  <div className="text-[#B07D87] text-3xl font-serif mb-2 opacity-80">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2E282A] mb-3">The Couple's Vision</h3>
                  <p className="text-xs sm:text-sm text-[#423E40] leading-relaxed font-light mb-4">
                    {activeStory.thought}
                  </p>
                  <p className="text-xs text-[#B07D87] italic font-medium">
                    {activeStory.specialNote}
                  </p>
                </div>

                {/* Celebrations & Distinct Vibes (Reference Image 3) */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E282A] mb-4 pb-2 border-b border-rose-200">
                    The Wedding Celebrations & Distinct Vibes
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeStory.functions.map((f, i) => (
                      <div key={i} className="bg-rose-50/70 p-4 sm:p-5 rounded-2xl border border-rose-100">
                        <h5 className="font-serif text-base sm:text-lg font-semibold text-[#B07D87] mb-1">{f.name}</h5>
                        <p className="text-xs sm:text-sm text-[#524B4E] font-light leading-relaxed">{f.vibe}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Wedding Makers (Reference Image 3) */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-rose-200 shadow-sm">
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E282A] mb-4 pb-2 border-b border-rose-100 flex items-center gap-2">
                    <i className="fa-solid fa-wand-magic-sparkles text-rose-500 text-lg"></i>
                    <span>Our Wedding Makers</span>
                  </h3>
                  <div className="space-y-2.5">
                    {activeStory.makers.map((m, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#423E40]">
                        <span className="font-semibold text-[#2E282A] min-w-[130px] sm:min-w-[150px]">{m.role}:</span>
                        <span className="font-normal text-[#B07D87]">{m.credit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-rose-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-charcoal">Inspired by this celebration?</span>
                    <span className="block text-xs text-gray-500 font-light">Speak with our lead wedding curators today.</span>
                  </div>
                  <Link 
                    to="/contact" 
                    onClick={() => setActiveStory(null)}
                    className="px-7 py-3 rounded-full bg-[#E84874] hover:bg-[#D43460] text-white text-xs font-semibold tracking-widest uppercase shadow-md transition transform hover:scale-105"
                  >
                    Plan a Wedding Like This
                  </Link>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
