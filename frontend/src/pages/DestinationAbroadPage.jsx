import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const destinationsAbroad = [
  {
    id: 'bali',
    country: 'Bali, Indonesia',
    tag: 'Clifftop & Tropical Luxury',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    desc: 'Breathtaking oceanfront clifftop chapels in Uluwatu, private rainforest estates in Ubud, and sunset beach fireworks.',
    venues: ['BVLGARI Resort Bali', 'The Edge Bali', 'Alila Villas Uluwatu', 'Ayana Resort & Spa'],
    idealSeason: 'April to October',
    capacity: '80 - 400 Guests',
    highlights: ['Glass Chapel Mandap on Sea', 'Balinese Fire Dance & Drummers', 'Private Luxury Villa Takeovers']
  },
  {
    id: 'dubai',
    country: 'Dubai & Abu Dhabi, UAE',
    tag: 'Opulent Skyscrapers & Desert Dunes',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Unrivaled Middle Eastern opulence, futuristic glass ballrooms, Burj Al Arab backdrop terraces, and luxury desert safari sangeets.',
    venues: ['Atlantis The Royal', 'Emirates Palace Abu Dhabi', 'Bab Al Shams Desert Resort', 'Armani Hotel Dubai'],
    idealSeason: 'November to April',
    capacity: '150 - 1000+ Guests',
    highlights: ['Helicopter Bridal Entry', 'Ultra-Luxury Desert Dunefest Sangeet', 'Skyline Fireworks & Drone Shows']
  },
  {
    id: 'italy',
    country: 'Lake Como & Amalfi Coast, Italy',
    tag: 'Renaissance Villas & Riviera Romance',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    desc: 'Centuries-old lakeside palazzos, cascading cliffside Mediterranean gardens, Riva boat arrivals, and candlelit Italian courtyards.',
    venues: ['Villa d’Este Lake Como', 'Villa Balbiano', 'Belmond Hotel Caruso Amalfi', 'Villa Cimbrone Ravello'],
    idealSeason: 'May to October',
    capacity: '50 - 300 Guests',
    highlights: ['Classic Riva Boat Grand Entrance', 'Italian Michelin-Grade Dining', 'Renaissance Frescoed Ballrooms']
  },
  {
    id: 'thailand',
    country: 'Phuket & Koh Samui, Thailand',
    tag: 'Turquoise Lagoons & Island Glamour',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Lush tropical island luxury, private beach cove pheras, vibrant pool party mehendi vibes, and warm Thai hospitality.',
    venues: ['Sri Panwa Phuket', 'Banyan Tree Samui', 'JW Marriott Phuket', 'Four Seasons Resort Koh Samui'],
    idealSeason: 'November to April',
    capacity: '100 - 500 Guests',
    highlights: ['Over-Water Floating Glass Mandap', 'Elephant Blessing Ceremonies', 'Island Lantern Sky Release']
  },
  {
    id: 'greece',
    country: 'Santorini & Mykonos, Greece',
    tag: 'Aegean Sunsets & Whitewashed Elegance',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dazzling whitewashed cliffs, iconic cobalt-blue domes, panoramic Aegean sunsets, and glamorous Mediterranean beach club celebrations.',
    venues: ['Canaves Oia Santorini', 'Grace Hotel Auberge', 'Cavo Tagoo Mykonos', 'Rocabella Santorini'],
    idealSeason: 'May to October',
    capacity: '40 - 250 Guests',
    highlights: ['Caldera Sunset Mandap Views', 'Luxury Catamaran Cruise Rehearsal', 'Greek Mezze & Wine Pairings']
  },
  {
    id: 'turkey',
    country: 'Istanbul & Cappadocia, Turkey',
    tag: 'Bosphorus Palaces & Hot Air Balloons',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    desc: 'Historic Ottoman waterfront palaces on the Bosphorus strait, hot air balloon sunrise photoshoots, and rich Eurasian grandeur.',
    venues: ['Çırağan Palace Kempinski Istanbul', 'Four Seasons Bosphorus', 'Museum Hotel Cappadocia', 'Mandarin Oriental Bosphorus'],
    idealSeason: 'April to June & Sep to Nov',
    capacity: '100 - 600 Guests',
    highlights: ['Ottoman Palace Waterfront Pheras', 'Hot Air Balloon Pre-Wedding Shoot', 'Bosphorus Luxury Yacht Baarat']
  }
];

const internationalServices = [
  {
    icon: 'fa-solid fa-passport',
    title: 'Visa & Flight Concierge',
    desc: 'Complete group visa processing, chartered and commercial flight bookings, baggage handling, and direct airline coordination.'
  },
  {
    icon: 'fa-solid fa-earth-americas',
    title: 'Customs & Decor Import',
    desc: 'Smooth customs clearance for Indian wedding attire, jewelry, specialty pooja items, mandap structures, and custom props.'
  },
  {
    icon: 'fa-solid fa-utensils',
    title: 'Indian Master Chefs on Location',
    desc: 'Flying renowned Indian Maharaj teams alongside local Michelin chefs to deliver authentic regional Indian flavours & gourmet global menus.'
  },
  {
    icon: 'fa-solid fa-language',
    title: 'Multi-Lingual On-Ground Crew',
    desc: 'Experienced multi-lingual destination managers fluent in local regulations, legal wedding licensing, and vendor coordination.'
  },
  {
    icon: 'fa-solid fa-hotel',
    title: 'Hotel Buyouts & Room Blocks',
    desc: 'Direct negotiations for exclusive resort buyouts, private villas, VIP welcome suites, and dedicated hospitality lounges.'
  },
  {
    icon: 'fa-solid fa-compact-disc',
    title: 'Artist & Entertainment Touring',
    desc: 'Handling international riders, work permits, sound gear, and logistics for celebrity DJs, Bollywood singers, and live bands.'
  }
];

const ABROAD_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85',
    sub: 'Global Romance & World-Class Elegance',
    title: 'Destination Weddings in Abroad',
    desc: 'Exchange vows across the world’s most mesmerizing horizons — from Italian Renaissance villas and Balinese ocean cliffs to Dubai desert dunes and turquoise Thai island sanctuaries.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=85',
    sub: 'Tropical Paradise & Oceanfront Panoramas',
    title: 'Enchanting Island Celebrations',
    desc: 'Lush jungle canopies, cascading infinity pools, bespoke Balinese florals, and breathtaking ocean breezes curated for romantic nuptials.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=2000&q=85',
    sub: 'Renaissance Romance & Lake Vistas',
    title: 'Timeless Italian Villa Elegance',
    desc: 'Private speedboats, historic lakeside palazzos, Michelin-star culinary experiences, and candlelit courtyard galas under European skies.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85',
    sub: 'Futuristic Luxury & Golden Dunes',
    title: 'Opulent Arabian Extravaganzas',
    desc: 'Helipad entrances, bespoke 7-star resort hospitality, celestial desert dune setups, and world-class international fireworks.'
  }
];

export default function DestinationAbroadPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ABROAD_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = ABROAD_SLIDES[currentSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: LUXURY_EASE }}
      className="min-h-screen bg-[#FAF6F3] text-[#2E282A] flex flex-col justify-between"
    >
      <div>
        {/* Hero Section with Automatic Multi-Slide Carousel & Signature Pinkish Faded Overlay */}
        <section className="relative text-white min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-28 sm:py-36 md:py-44 px-4 sm:px-6 md:px-12 text-center overflow-hidden">
          
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
              <Link 
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-[#E84874] hover:bg-[#D43460] text-white font-semibold text-xs tracking-widest uppercase transition-all shadow-xl hover:scale-105"
              >
                Plan Your International Wedding
              </Link>
              <a 
                href="#international-destinations" 
                className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs tracking-widest uppercase backdrop-blur-md border border-white/30 transition-all hover:scale-105"
              >
                View Global Venues
              </a>
            </div>
          </div>
        </section>

        {/* Global Credentials Bar */}
        <section className="bg-white border-y border-rose-100 py-10 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-[#B07D87] font-semibold">12+</span>
              <span className="text-xs uppercase tracking-widest text-[#696164] font-medium mt-1">Countries Mastered</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-[#B07D87] font-semibold">120+</span>
              <span className="text-xs uppercase tracking-widest text-[#696164] font-medium mt-1">Global Luxury Resorts</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-[#B07D87] font-semibold">24/7</span>
              <span className="text-xs uppercase tracking-widest text-[#696164] font-medium mt-1">Visa & Flight Support</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-[#B07D87] font-semibold">100%</span>
              <span className="text-xs uppercase tracking-widest text-[#696164] font-medium mt-1">Legal & License Peace of Mind</span>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section id="international-destinations" className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-script text-3xl text-[#B07D87] block mb-2">Worldwide Elegance</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-normal mb-4">
              Iconic International Wedding Hotspots
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#696164] font-light leading-relaxed">
              We seamlessly transport authentic Indian traditions, opulent hospitality, and custom production to the world's most glamorous destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsAbroad.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-rose-100 hover:shadow-2xl transition duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.country} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#B07D87]">
                      {dest.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-[#2E282A] mb-2">{dest.country}</h3>
                    <p className="text-xs text-[#696164] font-light leading-relaxed mb-4">{dest.desc}</p>
                    
                    <div className="space-y-2 border-t border-rose-50 pt-4 text-xs">
                      <div className="flex items-center text-[#423E40]">
                        <i className="fa-solid fa-hotel text-rose-400 w-5"></i>
                        <span className="font-medium text-gray-500 mr-1.5">Top Venues:</span>
                        <span className="truncate">{dest.venues.join(', ')}</span>
                      </div>
                      <div className="flex items-center text-[#423E40]">
                        <i className="fa-regular fa-calendar text-rose-400 w-5"></i>
                        <span className="font-medium text-gray-500 mr-1.5">Best Season:</span>
                        <span>{dest.idealSeason}</span>
                      </div>
                      <div className="flex items-center text-[#423E40]">
                        <i className="fa-solid fa-users text-rose-400 w-5"></i>
                        <span className="font-medium text-gray-500 mr-1.5">Capacity:</span>
                        <span>{dest.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => onOpenBooking && onOpenBooking(`Wedding in ${dest.country}`)}
                    className="w-full py-2.5 rounded-xl border border-[#B07D87] text-[#B07D87] hover:bg-[#B07D87] hover:text-white font-semibold text-xs tracking-wider uppercase transition text-center cursor-pointer"
                  >
                    Inquire International Venue
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Concierge Capabilities */}
        <section className="bg-gradient-to-b from-white to-[#FAF6F3] py-20 px-4 sm:px-6 md:px-12 border-t border-rose-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-script text-3xl text-[#B07D87] block mb-2">Cross-Border Mastery</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2E282A] font-normal mb-4">
                Our International Wedding Concierge
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#696164] font-light">
                Planning an abroad wedding requires deep knowledge of customs regulations, international vendor standards, flight routing, and catering logistics. We handle it all under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalServices.map((serv, i) => (
                <div key={i} className="bg-white p-7 rounded-2xl border border-rose-100/90 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#B07D87] flex items-center justify-center text-xl mb-4">
                    <i className={serv.icon}></i>
                  </div>
                  <h4 className="font-serif text-xl text-[#2E282A] mb-2">{serv.title}</h4>
                  <p className="text-xs text-[#696164] font-light leading-relaxed">{serv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Abroad Wedding Timeline */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-script text-3xl text-[#B07D87] block mb-2">Stress-Free Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2E282A] font-normal mb-3">
              How We Plan Your Abroad Wedding
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: '01', title: 'Destination Scouting & Resort Buyout', desc: 'We curate shortlisted global properties, organize virtual and physical site tours, and negotiate buyout contracts.' },
              { step: '02', title: 'Theme, 3D Scenography & Custom Mandap', desc: 'Our architecture team renders customized photorealistic 3D mandap concepts tailored to local terrain and wind conditions.' },
              { step: '03', title: 'Flight, Visa & Guest Concierge Portal', desc: 'A custom branded RSVP portal for your guests with dedicated flight desk, visa guides, and 24/7 WhatsApp support.' },
              { step: '04', title: 'On-Ground Production & Grand Execution', desc: 'Our full team arrives 4-5 days prior with sound engineers, florists, and hospitality leads to ensure absolute perfection.' }
            ].map((st, sidx) => (
              <div key={sidx} className="bg-white p-6 rounded-2xl border border-rose-100 flex items-start gap-5 shadow-sm">
                <span className="font-serif text-3xl font-bold text-rose-300 flex-shrink-0">{st.step}</span>
                <div>
                  <h4 className="font-serif text-xl text-[#2E282A] mb-1">{st.title}</h4>
                  <p className="text-xs text-[#696164] font-light leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global CTA Banner */}
        <section className="bg-gradient-to-r from-[#2E282A] via-[#834F59] to-[#2E282A] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="font-script text-3xl sm:text-4xl text-rose-200 block mb-3">A Passport to Forever</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6">
              Ready to Host Your Dream Wedding Abroad?
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl mx-auto mb-8 font-light">
              Connect with our International Destination Directors today for exclusive resort packages, venue cost breakdowns, and season recommendations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking && onOpenBooking('Abroad Wedding Consultation')}
                className="px-8 py-3.5 rounded-full bg-[#E84874] hover:bg-[#D43460] text-white font-bold text-xs tracking-widest uppercase shadow-xl hover:scale-105 transition cursor-pointer"
              >
                Book International Consultation
              </button>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-widest uppercase border border-white/20 transition"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
