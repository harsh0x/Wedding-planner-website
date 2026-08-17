import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const destinationsInIndia = [
  {
    id: 'udaipur',
    city: 'Udaipur, Rajasthan',
    tag: 'City of Lakes & Palaces',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    desc: 'Grand fairytale nuptials overlooking tranquil waters, shimmering marble courtyards, and torchlit royal boat arrivals.',
    venues: ['Taj Lake Palace', 'The Leela Palace', 'Jagmandir Island', 'Oberoi Udaivilas'],
    idealSeason: 'October to March',
    capacity: '150 - 800+ Guests',
    highlights: ['Royal Jagmandir Boat Baarat', 'Sunset Lakefront Mandap', 'Palatial Heritage Scenography']
  },
  {
    id: 'jaipur',
    city: 'Jaipur, Rajasthan',
    tag: 'Regal Forts & Heritage Grandeur',
    image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
    desc: 'Echoing the grandeur of Maharajas with majestic fort ramparts, royal elephant processions, and opulent courtyard sangeets.',
    venues: ['Rambagh Palace', 'Jai Mahal Palace', 'Fairmont Jaipur', 'Samode Palace'],
    idealSeason: 'October to April',
    capacity: '200 - 1500+ Guests',
    highlights: ['Fort Rampart Fireworks', 'Mughal Garden Banquets', 'Elephant & Camel Welcome']
  },
  {
    id: 'goa',
    city: 'Goa (North & South)',
    tag: 'Sun-Kissed Coastal Reverie',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    desc: 'Golden hour pheras on private sandy coves, bohemian floral sundowners, and electrifying beachside afterparties until dawn.',
    venues: ['Taj Exotica', 'The St. Regis Goa', 'W Goa', 'Alila Diwa'],
    idealSeason: 'November to May',
    capacity: '100 - 600+ Guests',
    highlights: ['Barefoot Beachfront Mandap', 'Neon Sundowner Pool Parties', 'Sunset Catamaran Cruises']
  },
  {
    id: 'jodhpur',
    city: 'Jodhpur, Rajasthan',
    tag: 'Sun City Sandstone Citadels',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dramatic golden-yellow sandstone architecture, panoramic desert vistas, and imperial banquet halls fit for royalty.',
    venues: ['Umaid Bhawan Palace', 'Ajit Bhawan', 'Indana Palace', 'Fort Khejarla'],
    idealSeason: 'October to March',
    capacity: '150 - 1000+ Guests',
    highlights: ['Umaid Bhawan Lawns', 'Dune Sundowner Celebrations', 'Traditional Langa Folk Symphony']
  },
  {
    id: 'kerala',
    city: 'Kerala (Kovalam & Kumarakom)',
    tag: 'Enchanted Backwaters & Tropics',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    desc: 'Serene backwater houseboats, verdant coconut groves, and tranquil cliffside resorts offering soul-stirring romance.',
    venues: ['Kumarakom Lake Resort', 'The Leela Kovalam', 'Taj Bekal', 'Grand Hyatt Kochi'],
    idealSeason: 'September to March',
    capacity: '80 - 450+ Guests',
    highlights: ['Houseboat Bridal Arrival', 'Traditional Kathakali Welcomes', 'Sprawling Backwater Gazebos']
  },
  {
    id: 'mussoorie',
    city: 'Mussoorie & Jim Corbett',
    tag: 'Misty Mountains & Wilderness',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    desc: 'Crisp Himalayan breezes, sweeping valley horizons, and secluded luxury jungle lodges surrounded by untamed wilderness.',
    venues: ['JW Marriott Mussoorie Walnut Grove', 'Taj Corbett Resort', 'The Riverview Retreat', 'Jaypee Residency Manor'],
    idealSeason: 'Year-Round (Best Mar-Jun & Sep-Dec)',
    capacity: '100 - 500+ Guests',
    highlights: ['Himalayan Panorama Mandap', 'Bonfire Sangeet Soirée', 'Wilderness Cocktail Receptions']
  }
];

const indianPackages = [
  {
    name: 'The Imperial Rajputana',
    subtitle: 'Palatial Palace Experience',
    price: 'Bespoke Luxury',
    features: [
      'Dedicated 24/7 Destination Concierge',
      'Royal Elephant & Vintage Car Baarat',
      'Architectural Light Projection & Mapping',
      'Curated 3-Day Wedding Itinerary & Hospitality',
      'Master Chef Rajasthani & Global Catering',
      'Celebrity Artist & Live Folk Orchestration'
    ],
    popular: true
  },
  {
    name: 'Coastal Beachfront Reverie',
    subtitle: 'Goa & Seaside Serenade',
    price: 'Curated Elegance',
    features: [
      'Private Beachfront Access & Phera Deck',
      'Bohemian Sunset Haldi & Rain Dance Setup',
      'LED Stage & Silent Disco Afterparty',
      'Bespoke Tropical Floral Installations',
      'Airport Luxury Shuttle Fleet Logistics',
      'Customized Cocktail Mixology Bar'
    ],
    popular: false
  },
  {
    name: 'Himalayan Mountain Grace',
    subtitle: 'Valley & Forest Romance',
    price: 'Ultra Exquisite',
    features: [
      'Panoramic Valley-View Glasshouse Mandap',
      'Cozy Fireside Sangeet & Acoustic Lounge',
      'Artisanal Winter-Warm Gourmet Stations',
      'Guest Villa Block Management & Welcome Kits',
      'Comprehensive Drone & Multi-Cam Cinematography',
      'Helicopter Floral Shower & Couple Departure'
    ],
    popular: false
  }
];

const INDIA_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85',
    sub: 'Royal Splendor & Timeless Heritage',
    title: 'Destination Weddings in India',
    desc: 'From the majestic royal palaces of Udaipur and Jaipur to sun-kissed private beaches in Goa and serene Kerala backwaters, SHOWMANIA creates unforgettable imperial celebrations.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85',
    sub: 'Regal Forts & Grand Courtyards',
    title: 'The Imperial Heritage of Rajasthan',
    desc: 'Celebrate beneath starry desert skies surrounded by centuries-old sandstone architecture, royal elephant processions, and bespoke crystal staging.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85',
    sub: 'Oceanfront Romance & Sunset Pheras',
    title: 'Enchanting Coastal Nuptials',
    desc: 'Bespoke bohemian florals, golden hour vows by the Arabian Sea, and high-energy tropical after-parties on private secluded shores.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85',
    sub: 'Breathtaking Royal Experiences',
    title: 'Unrivalled Indian Hospitality',
    desc: 'Curating regal fireworks displays, traditional folk artists, Michelin-standard royal feasts, and 24/7 dedicated guest hospitality.'
  }
];

export default function DestinationIndiaPage({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % INDIA_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = INDIA_SLIDES[currentSlide];

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
                Plan Your Royal Wedding
              </Link>
              <a 
                href="#destinations" 
                className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs tracking-widest uppercase backdrop-blur-md border border-white/30 transition-all hover:scale-105"
              >
                Explore Destinations
              </a>
            </div>
          </div>
        </section>

        {/* Introduction / Stats Bar */}
        <section className="bg-white border-y border-rose-100 py-10 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-[#B07D87] font-semibold">250+</span>
              <span className="text-xs uppercase tracking-widest text-[#696164] font-medium mt-1">Palaces & Resorts Curated</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-[#B07D87] font-semibold">18+</span>
              <span className="text-xs uppercase tracking-widest text-[#696164] font-medium mt-1">Iconic Indian Cities</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-[#B07D87] font-semibold">100%</span>
              <span className="text-xs uppercase tracking-widest text-[#696164] font-medium mt-1">White-Glove Hospitality</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl text-[#B07D87] font-semibold">15+</span>
              <span className="text-xs uppercase tracking-widest text-[#696164] font-medium mt-1">Years Planning Royalty</span>
            </div>
          </div>
        </section>

        {/* Featured Indian Destinations */}
        <section id="destinations" className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-script text-3xl text-[#B07D87] block mb-2">Curated Escapes</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-normal mb-4">
              India's Most Coveted Wedding Havens
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#696164] font-light leading-relaxed">
              Every city holds an unmistakable aura of royalty, tranquility, or coastal vibrancy. Explore our prime locations for an extraordinary wedding celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsInIndia.map((dest, idx) => (
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
                      alt={dest.city} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#B07D87]">
                      {dest.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-[#2E282A] mb-2">{dest.city}</h3>
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
                    onClick={() => onOpenBooking && onOpenBooking(`Wedding in ${dest.city}`)}
                    className="w-full py-2.5 rounded-xl border border-[#B07D87] text-[#B07D87] hover:bg-[#B07D87] hover:text-white font-semibold text-xs tracking-wider uppercase transition text-center cursor-pointer"
                  >
                    Check Venue Availability
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Complete End-to-End India Wedding Services */}
        <section className="bg-gradient-to-b from-white to-[#FAF6F3] py-20 px-4 sm:px-6 md:px-12 border-t border-rose-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-script text-3xl text-[#B07D87] block mb-2">Flawless Royal Hospitality</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2E282A] font-normal mb-4">
                What We Handle For Your Big Day
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'fa-solid fa-crown', title: 'Royal Venue Sourcing', desc: 'Direct liaisons with top palace chains, guaranteeing exclusive rates and buyout privileges.' },
                { icon: 'fa-solid fa-plane-arrival', title: 'Guest Logistics & Fleet', desc: 'Luxury airport transfers, luggage tagging, golf-cart marshaling, and personalized guest concierges.' },
                { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Thematic Mandaps & Decor', desc: 'Custom 3D-designed mandaps, floral chhattars, candlelit aisles, and atmospheric stagecraft.' },
                { icon: 'fa-solid fa-utensils', title: 'Royal Banqueting & Chefs', desc: 'Multi-course royal feasts, traditional live halwai stations, mixology bars, and late-night snacks.' },
                { icon: 'fa-solid fa-music', title: 'Artist & Sangeet Direction', desc: 'Celebrity singer bookings, bespoke choreography, royal shehnai troupes, and concert-grade sound.' },
                { icon: 'fa-solid fa-camera', title: 'Drone & Royal Cinematography', desc: 'Award-winning photography teams documenting every emotional ritual with timeless grandeur.' },
                { icon: 'fa-solid fa-gift', title: 'Hampers & Royal Invites', desc: 'Custom trousseau packaging, Rajasthani ittar boxes, and curated local artisan favors.' },
                { icon: 'fa-solid fa-shield-heart', title: 'Discreet Security & Care', desc: 'VIP protocol, medical station on-site, kids activity lounges, and seamless 24/7 coordination.' }
              ].map((serv, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-rose-100/80 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#B07D87] flex items-center justify-center text-xl mb-4">
                    <i className={serv.icon}></i>
                  </div>
                  <h4 className="font-serif text-lg text-[#2E282A] mb-2">{serv.title}</h4>
                  <p className="text-xs text-[#696164] font-light leading-relaxed">{serv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curated Package Tiers */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-script text-3xl text-[#B07D87] block mb-2">Bespoke Investment</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2E282A] font-normal mb-4">
              Destination Wedding Packages
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#696164] font-light">
              Tailored production frameworks designed to match your dream vision, guest count, and royal preference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {indianPackages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-3xl p-8 border ${pkg.popular ? 'border-[#B07D87] shadow-2xl relative' : 'border-rose-100 shadow-md'} flex flex-col justify-between`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E84874] text-white text-[10px] font-semibold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                    Most Requested
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-2xl text-[#2E282A]">{pkg.name}</h3>
                  <p className="text-xs text-[#B07D87] font-medium tracking-wide uppercase mt-1 mb-4">{pkg.subtitle}</p>
                  <div className="text-2xl font-serif font-semibold text-[#2E282A] pb-6 border-b border-rose-100">
                    {pkg.price}
                  </div>
                  <ul className="py-6 space-y-3 text-xs text-[#423E40]">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5">
                        <i className="fa-solid fa-circle-check text-[#B07D87] mt-0.5"></i>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onOpenBooking && onOpenBooking(pkg.name)}
                  className={`w-full py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase transition ${pkg.popular ? 'bg-[#E84874] hover:bg-[#D43460] text-white shadow-lg' : 'bg-rose-50 hover:bg-[#B07D87] text-[#B07D87] hover:text-white'}`}
                >
                  Request Detailed Proposal
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#834F59] via-[#B07D87] to-[#834F59] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="font-script text-3xl sm:text-4xl text-rose-200 block mb-3">Begin Your Royal Chapter</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6">
              Let's Plan Your Dream Destination Wedding in India
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl mx-auto mb-8 font-light">
              Speak directly with our senior destination wedding planners to lock prime dates, explore luxury venues, and receive a customized budget roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking && onOpenBooking('India Destination Consultation')}
                className="px-8 py-3.5 rounded-full bg-white text-[#834F59] font-bold text-xs tracking-widest uppercase shadow-xl hover:bg-rose-50 transition transform hover:scale-105 cursor-pointer"
              >
                Schedule Free Consultation
              </button>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-transparent border border-white text-white font-semibold text-xs tracking-widest uppercase hover:bg-white/10 transition"
              >
                Contact Studio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
