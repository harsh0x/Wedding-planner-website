import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const services = [
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    tag: 'Black Tie & Awards',
    icon: 'fa-solid fa-trophy',
    title: 'Annual Galas & Awards',
    desc: 'Grand black-tie celebrations honoring achievement. We manage complete stage scenography, bespoke dining, entertainment choreography, and red carpet arrivals.',
    highlight: 'Complete Stage & Dining'
  },
  {
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    tag: 'Summits & Conventions',
    icon: 'fa-solid fa-microphone-lines',
    title: 'Conferences & Global Summits',
    desc: 'Seamless multi-day conventions with digital check-ins, immersive LED stage walls, live simultaneous interpretation, and VIP speaker concierges.',
    highlight: 'High-Tech Stagecraft'
  },
  {
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    tag: 'Brand Unveilings',
    icon: 'fa-solid fa-rocket',
    title: 'Product Launches & Activations',
    desc: 'Captivating media and influencer experiences. From holographic reveals and architectural projection mapping to experiential brand lounges that dominate social channels.',
    highlight: 'Media & Brand PR'
  },
  {
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    tag: 'Private Offsites',
    icon: 'fa-solid fa-gem',
    title: 'Executive Retreats & Offsites',
    desc: 'Discreet, ultra-luxury board retreats at exclusive private estates and 5-star destination resorts with tailored wellness itineraries and Michelin-grade dining.',
    highlight: 'Private Luxury Venues'
  },
  {
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    tag: 'Concert Grade Tech',
    icon: 'fa-solid fa-sliders',
    title: 'End-to-End AV & Production',
    desc: 'In-house sound engineering, concert-grade intelligent lighting, 4K multi-cam broadcasting, and flawless technical show-calling with zero downtime.',
    highlight: 'Broadcast Quality'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    tag: 'Diplomatic Protocol',
    icon: 'fa-solid fa-handshake-angle',
    title: 'VIP Hospitality & Protocol',
    desc: 'Dedicated multi-lingual delegate concierges, secure private transportation, airport greeting, and bespoke executive gifting suites.',
    highlight: 'White-Glove Service'
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', title: 'Leadership Summit Stage' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', title: 'Grand Ballroom Awards' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80', title: 'VIP Banquet Service' },
  { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80', title: 'Confetti Brand Finale' }
];

const CORPORATE_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85',
    sub: 'Executive Excellence & Global Impact',
    title: 'Corporate Events & Summits',
    desc: 'From multinational leadership summits and high-profile product unveilings to opulent annual galas, SHOWMANIA executes visionary brand experiences with immaculate technical precision.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=85',
    sub: 'Grand Gala Dinners & Award Ceremonies',
    title: 'Opulent Brand Milestones',
    desc: 'Curating distinguished evenings of honor, bespoke fine dining, and cinematic stage productions that resonate with global leaders and stakeholders.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2000&q=85',
    sub: 'State-of-the-Art Production & AV',
    title: 'Immersive Product Reveals',
    desc: 'Transforming venues with 3D projection mapping, LED video walls, and synchronised sensory effects engineered to captivate audiences worldwide.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=85',
    sub: 'Global Conclaves & Trade Expositions',
    title: 'Flawless Technical Orchestration',
    desc: 'End-to-end conference management, VIP hospitality, and seamless hybrid broadcasting across premier luxury convention centres.'
  }
];

export default function CorporateEventsPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CORPORATE_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = CORPORATE_SLIDES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % CORPORATE_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + CORPORATE_SLIDES.length) % CORPORATE_SLIDES.length);
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
                href="#capabilities" 
                className="px-8 py-3.5 rounded-full bg-white text-[#2E282A] hover:bg-rose-50 text-xs font-semibold uppercase tracking-widest shadow-xl transition transform hover:scale-105"
              >
                Explore Capabilities
              </a>
              <Link 
                to="/contact" 
                className="px-8 py-3.5 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs font-semibold uppercase tracking-widest shadow-xl border border-white/40 transition transform hover:scale-105"
              >
                Request RFP
              </Link>
            </div>
          </div>

        </section>

        {/* Stats Strip */}
        <section className="py-12 bg-white border-b border-rose-100 shadow-sm relative z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#B07D87] font-semibold block">500+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Corporate Summits</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#B07D87] font-semibold block">50+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Fortune 500 Brands</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#B07D87] font-semibold block">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">On-Time Execution</span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl text-[#B07D87] font-semibold block">Global</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">AV & Stage Production</span>
            </div>
          </div>
        </section>

        {/* Services Grid With Imagery */}
        <section id="capabilities" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-2">Our Capabilities</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold">
              Tailored Corporate Experiences
            </h2>
            <p className="text-xs sm:text-sm text-[#696164] max-w-xl mx-auto mt-2 font-light">
              We transform corporate milestones into captivating brand narratives through architecture, state-of-the-art audiovisuals, and seamless hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
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
              <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-1">Visual Excellence</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#2E282A] font-semibold">
                Recent Corporate Showcase
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

        {/* 4-Step Process */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-1">Flawless Process</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold">
              The SHOWMANIA Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-6 border border-rose-200/70 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#B07D87] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">01</span>
              <h3 className="font-serif text-xl font-semibold mb-2">Vision & Strategy</h3>
              <p className="text-xs text-[#696164] font-light leading-relaxed">RFP scoping, venue sourcing, budget modeling, and creative concept decks.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-rose-200/70 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#B07D87] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">02</span>
              <h3 className="font-serif text-xl font-semibold mb-2">Design & 3D Render</h3>
              <p className="text-xs text-[#696164] font-light leading-relaxed">CAD floor plans, stage set renders, lighting cues, and speaker flow mapping.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-rose-200/70 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#B07D87] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">03</span>
              <h3 className="font-serif text-xl font-semibold mb-2">Technical Rigging</h3>
              <p className="text-xs text-[#696164] font-light leading-relaxed">Concert sound setup, LED wall calibration, rehearsals, and dry runs.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-rose-200/70 shadow-sm text-center">
              <span className="w-10 h-10 rounded-full bg-[#B07D87] text-white flex items-center justify-center text-sm font-bold mx-auto mb-4">04</span>
              <h3 className="font-serif text-xl font-semibold mb-2">Live Show Calling</h3>
              <p className="text-xs text-[#696164] font-light leading-relaxed">Minute-by-minute execution, VIP protocol, live broadcast, and wrap report.</p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-rose-50 -z-0"></div>
            <div className="relative z-10">
              <span className="font-script text-3xl sm:text-5xl text-[#B07D87] block mb-2">Elevate Your Brand</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold mb-4">
                Ready to Plan Your Next Corporate Milestone?
              </h2>
              <p className="text-xs sm:text-sm text-[#696164] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Speak directly with our senior corporate event directors to request a customized RFP, technical rider, or venue portfolio.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4.5 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-xl transition transform hover:scale-105 active:scale-95"
              >
                Request Corporate Proposal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
