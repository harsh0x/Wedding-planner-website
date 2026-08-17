import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const roster = [
  {
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
    tag: 'Red Carpet & Emcees',
    icon: 'fa-solid fa-film',
    title: 'Celebrity Appearances & Hosts',
    desc: 'Top-tier actors, sports personalities, and charismatic television emcees to host grand wedding receptions, ribbon-cuttings, and awards banquets.',
    highlight: 'A-List Talent'
  },
  {
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    tag: 'Concert Experience',
    icon: 'fa-solid fa-microphone',
    title: 'Live Playback Singers & Bands',
    desc: 'Mesmerizing Sufi vocalists, chart-topping Bollywood playback stars, and high-energy live wedding bands that keep guests singing all night.',
    highlight: 'Live Stage Vocals'
  },
  {
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    tag: 'EDM & Saxophone',
    icon: 'fa-solid fa-compact-disc',
    title: 'Global DJs & Live Instruments',
    desc: 'Club resident DJs paired with live electric violinists, percussionists, and saxophonists for an intoxicating After-Party ambiance.',
    highlight: 'High-Energy Fusion'
  },
  {
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    tag: 'Classical Grandeur',
    icon: 'fa-solid fa-music',
    title: 'Symphony & String Quartets',
    desc: 'Graceful aisle entrance serenades, cocktail background acoustics, and grand 24-piece orchestral overtures for regal arrivals.',
    highlight: 'Orchestral Nuance'
  },
  {
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    tag: 'Visual Spectacle',
    icon: 'fa-solid fa-person-falling',
    title: 'International Dance Troupes',
    desc: 'Silk aerialists, LED water drummers, Russian ballet dancers, and mesmerizing fire performers tailored to thematic evening stages.',
    highlight: 'Theatrical Artistry'
  },
  {
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    tag: '100% Confidential',
    icon: 'fa-solid fa-shield-halved',
    title: 'Rider & Security Protocols',
    desc: 'Discrete executive protection, black-car motorcades, sound engineer tech specs, and five-star backstage green room styling.',
    highlight: 'VIP Protection'
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80', title: 'Headliner DJ Stage' },
  { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', title: 'Playback Singer Spotlight' },
  { url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80', title: 'Live String Quartet' },
  { url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', title: 'International Aerial Act' }
];

const CELEBRITY_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=85',
    sub: 'World-Class Star Power',
    title: 'Celebrity & Artist Management',
    desc: 'Connect your stage with renowned playback legends, Bollywood luminaries, international EDM headliners, 24-piece string symphonies, and boundary-pushing acrobatic acts.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2000&q=85',
    sub: 'Headlining Live Concerts',
    title: 'Iconic Musical Performances',
    desc: 'Seamless artist booking, VIP riders, green-room logistics, and concert-grade acoustics that deliver goosebumps to your audience.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2000&q=85',
    sub: 'High-Octane After-Parties',
    title: 'Legendary Club & DJ Nights',
    desc: 'Electrifying Sangeet after-parties and corporate galas featuring international DJ sets, cryogenic CO2 jets, laser synchs, and confetti showers.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=2000&q=85',
    sub: 'Ethereal Visual & Stage Artistry',
    title: 'Mesmerizing Cultural Acts',
    desc: 'Curated Sufi ensembles, royal instrumentalists, aerial acrobatics, and bespoke theatrical choreography crafted specifically for your event theme.'
  }
];

export default function CelebrityArtistPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CELEBRITY_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = CELEBRITY_SLIDES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % CELEBRITY_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + CELEBRITY_SLIDES.length) % CELEBRITY_SLIDES.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F3] text-[#2E282A] flex flex-col justify-between"
    >
      <div>
        {/* Hero Section with Automatic Multi-Slide Carousel & Pinkish Faded Overlay */}
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

          {/* Signature Pinkish Faded Gradient Overlay Matching Reference */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ background: 'linear-gradient(180deg, rgba(46, 40, 42, 0.45) 0%, rgba(176, 125, 135, 0.70) 55%, rgba(176, 125, 135, 0.92) 100%)' }}
          />

          {/* Center Content */}
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
                <span className="font-script text-3xl sm:text-5xl text-rose-200 block mb-3">
                  {slide.sub}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide leading-tight mb-5 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="font-sans text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl mx-auto font-light leading-relaxed mb-8 px-2 drop-shadow-sm">
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap items-center justify-center gap-4 z-20">
              <a 
                href="#artist-roster" 
                className="px-8 py-3.5 rounded-full bg-white text-[#2E282A] hover:bg-rose-50 text-xs font-semibold uppercase tracking-widest shadow-xl transition transform hover:scale-105"
              >
                Explore Roster
              </a>
              <Link 
                to="/contact" 
                className="px-8 py-3.5 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs font-semibold uppercase tracking-widest shadow-xl border border-white/40 transition transform hover:scale-105"
              >
                Inquire Availability
              </Link>
            </div>
          </div>

        </section>

        {/* Roster Grid With Imagery */}
        <section id="artist-roster" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-2">The Talent Curation</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold">
              Headline Entertainment Roster
            </h2>
            <p className="text-xs sm:text-sm text-[#696164] max-w-xl mx-auto mt-2 font-light">
              We handle all talent negotiations, rider compliance, green room hospitality, VIP security convoys, and live sound mixing in-house.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roster.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: LUXURY_EASE }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-rose-200/80 hover:shadow-2xl transition duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 w-full overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#B07D87] shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#B07D87] flex items-center justify-center text-lg mb-4 shadow-xs">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="font-serif text-2xl text-[#2E282A] font-semibold mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#696164] font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-rose-100 flex items-center justify-between text-xs text-[#B07D87] font-semibold">
                    <span>{item.highlight}</span>
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Showcase */}
        <section className="py-16 bg-white border-y border-rose-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-1">Live In Action</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#2E282A] font-semibold">
                Stage & Performance Highlights
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-md h-48 sm:h-64 group relative"
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition p-4 flex items-end">
                    <span className="text-white text-xs font-medium">{img.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-rose-50 -z-0"></div>
            <div className="relative z-10">
              <span className="font-script text-3xl sm:text-5xl text-[#B07D87] block mb-2">Electrify Your Event</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold mb-4">
                Book Star Talent for Your Stage
              </h2>
              <p className="text-xs sm:text-sm text-[#696164] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Request private artist availability, technical riders, and commercial packages with our celebrity booking directors.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4.5 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-xl transition transform hover:scale-105 active:scale-95"
              >
                Inquire Artist Availability
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
