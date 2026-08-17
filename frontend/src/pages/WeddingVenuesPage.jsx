import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const categories = [
  { id: 'all', name: 'All Venues' },
  { id: 'palaces', name: 'Palaces & Royal Forts' },
  { id: 'beach', name: 'Beachfront Resorts' },
  { id: 'havelis', name: 'Heritage Havelis' },
  { id: 'ballrooms', name: 'Luxury City Ballrooms' },
  { id: 'hills', name: 'Scenic Hills & Estates' }
];

const venuesList = [
  {
    id: 'rambagh-palace',
    name: 'Rambagh Palace',
    category: 'palaces',
    location: 'Jaipur, Rajasthan',
    type: 'Royal Heritage Palace',
    capacity: '200 - 1500 Guests',
    rooms: '78 Luxury Rooms & Suites',
    spaces: 'Mughal Lawns, Oriental Garden, Jaigarh Hall',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    tag: 'Jewel of Jaipur',
    priceCategory: 'Ultra Luxury Palace'
  },
  {
    id: 'the-leela-palace-udaipur',
    name: 'The Leela Palace Udaipur',
    category: 'palaces',
    location: 'Lake Pichola, Udaipur',
    type: 'Lakeside Palace Resort',
    capacity: '100 - 500 Guests',
    rooms: '80 Lake-View Rooms & Royal Suites',
    spaces: 'Pichola Lawns, Guava Garden, Marwar Hall',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    tag: 'Iconic Lakefront',
    priceCategory: 'Ultra Luxury'
  },
  {
    id: 'taj-exotica-goa',
    name: 'Taj Exotica Resort & Spa',
    category: 'beach',
    location: 'Benaulim Beach, South Goa',
    type: '5-Star Beachfront Resort',
    capacity: '150 - 800 Guests',
    rooms: '140 Villas & Rooms',
    spaces: 'Private Beach Deck, Oceanview Lawns, Ballroom',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    tag: 'Coastal Luxury',
    priceCategory: 'Luxury Resort'
  },
  {
    id: 'samode-palace',
    name: 'Samode Palace & Haveli',
    category: 'havelis',
    location: 'Samode, Rajasthan',
    type: 'Historic 475-Year Haveli',
    capacity: '100 - 600 Guests',
    rooms: '43 Heritage Suites',
    spaces: 'Sheesh Mahal, Darbar Hall, Rooftop Infinity Pool',
    image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
    tag: 'Mirrored Sheesh Mahal',
    priceCategory: 'Heritage Royalty'
  },
  {
    id: 'jw-marriott-mussoorie',
    name: 'JW Marriott Walnut Grove Resort',
    category: 'hills',
    location: 'Mussoorie, Uttarakhand',
    type: 'Himalayan Luxury Resort',
    capacity: '100 - 450 Guests',
    rooms: '115 Mountain Suites',
    spaces: 'Valley View Amphitheatre, Pine Greens, Grand Ballroom',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    tag: 'Himalayan Panorama',
    priceCategory: 'Mountain Luxury'
  },
  {
    id: 'st-regis-mumbai',
    name: 'The St. Regis Mumbai',
    category: 'ballrooms',
    location: 'Lower Parel, Mumbai',
    type: '5-Star Metropolitan Grand Ballroom',
    capacity: '200 - 1200 Guests',
    rooms: '395 Luxury Rooms',
    spaces: 'Imperial Hall, Grand Astor Ballroom, Zenith Sky Deck',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    tag: 'Urban Grandeur',
    priceCategory: 'Metro 5-Star'
  },
  {
    id: 'fairmont-jaipur',
    name: 'Fairmont Jaipur',
    category: 'palaces',
    location: 'Kukas, Jaipur',
    type: 'Grand Mughal Palace & Amphitheatre',
    capacity: '300 - 2000 Guests',
    rooms: '245 Royal Rooms',
    spaces: 'Aab-o-Hawa Lawns, Grand Ballroom, Central Charbagh',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    tag: 'Grand Scale Weddings',
    priceCategory: 'Grand Luxury'
  },
  {
    id: 'w-goa-beach',
    name: 'W Goa Resort',
    category: 'beach',
    location: 'Vagator Beach, North Goa',
    type: 'High-Fashion Coastal Property',
    capacity: '100 - 500 Guests',
    rooms: '121 Chalets & Villas',
    spaces: 'Rockpool Sunset Deck, Horizon Lawns, Great Room',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tag: 'Contemporary Chic',
    priceCategory: 'Ultra Modern Luxury'
  },
  {
    id: 'kumarakom-lake-resort',
    name: 'Kumarakom Lake Resort',
    category: 'hills',
    location: 'Vembanad Lake, Kerala',
    type: 'Heritage Backwater Retreat',
    capacity: '80 - 350 Guests',
    rooms: '65 Traditional Villas with Private Pools',
    spaces: 'Lakeside Phera Lawns, Meandering Pool Courtyards',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tag: 'Serene Backwaters',
    priceCategory: 'Tropical Heritage'
  }
];

const VENUE_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85',
    sub: 'Unrivaled Elegance & Prime Locations',
    title: 'Exclusive Wedding Venues',
    desc: 'Discover our handpicked portfolio of royal heritage palaces, sun-drenched private beaches, mountain glasshouses, and glamorous 5-star ballrooms.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
    sub: 'Imperial Heritage & Majestic Courtyards',
    title: 'Palatial Havens & Royal Forts',
    desc: 'Direct partner bookings with privileged wholesale rates, VIP room blocks, private courtyards, and 24/7 dedicated event management.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2000&q=85',
    sub: 'Coastal Serenity & Private Shores',
    title: 'Bespoke Beachfront Paradises',
    desc: 'Secluded golden sand stretches, private cliffside lawns, and oceanfront gazebos designed for dreamy sunset vows and tropical celebrations.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=85',
    sub: 'Misty Peaks & Enchanted Nature',
    title: 'Serene Mountain & Nature Escapes',
    desc: 'Panoramic alpine valleys, secluded luxury forest lodges, and glasshouse conservatories bringing the beauty of the outdoors inside.'
  }
];

export default function WeddingVenuesPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % VENUE_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = VENUE_SLIDES[currentSlide];

  const filteredVenues = activeCategory === 'all' 
    ? venuesList 
    : venuesList.filter(v => v.category === activeCategory);

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
                Request Free Venue Guide
              </Link>
              <a 
                href="#venue-catalog" 
                className="px-8 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs tracking-widest uppercase backdrop-blur-md border border-white/30 transition-all hover:scale-105"
              >
                Browse All Venues
              </a>
            </div>
          </div>
        </section>

        {/* Venue Filter Tabs & Catalog */}
        <section id="venue-catalog" className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          
          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${activeCategory === cat.id ? 'bg-[#E84874] text-white shadow-md' : 'bg-white text-[#423E40] hover:bg-rose-50 border border-rose-200/70'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVenues.map((venue, idx) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-rose-100 hover:shadow-2xl transition duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={venue.image} 
                      alt={venue.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-[#B07D87] shadow-sm">
                      {venue.tag}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#2E282A]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-medium">
                      {venue.priceCategory}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] text-[#B07D87] font-semibold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{venue.location}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#2E282A] mb-3">{venue.name}</h3>

                    <div className="space-y-2 border-t border-rose-50 pt-4 text-xs text-[#423E40]">
                      <div className="flex items-center">
                        <i className="fa-solid fa-users text-rose-400 w-5"></i>
                        <span className="font-medium text-gray-500 mr-1.5">Capacity:</span>
                        <span>{venue.capacity}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-bed text-rose-400 w-5"></i>
                        <span className="font-medium text-gray-500 mr-1.5">Stay / Rooms:</span>
                        <span>{venue.rooms}</span>
                      </div>
                      <div className="flex items-start">
                        <i className="fa-solid fa-layer-group text-rose-400 w-5 mt-0.5"></i>
                        <div>
                          <span className="font-medium text-gray-500 mr-1.5">Event Spaces:</span>
                          <span className="text-[#696164]">{venue.spaces}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-2">
                  <button 
                    onClick={() => onOpenBooking && onOpenBooking(`Brochure for ${venue.name}`)}
                    className="flex-1 py-2.5 rounded-xl border border-rose-300 text-[#423E40] hover:bg-rose-50 font-medium text-xs tracking-wider transition text-center cursor-pointer"
                  >
                    Brochure
                  </button>
                  <button 
                    onClick={() => onOpenBooking && onOpenBooking(`Book Venue Tour: ${venue.name}`)}
                    className="flex-1 py-2.5 rounded-xl bg-[#E84874] hover:bg-[#D43460] text-white font-semibold text-xs tracking-wider uppercase transition text-center shadow-sm cursor-pointer"
                  >
                    Book Tour
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </section>

        {/* Why Choose SHOWMANIA For Venues */}
        <section className="bg-gradient-to-b from-white to-[#FAF6F3] py-20 px-4 sm:px-6 md:px-12 border-t border-rose-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-script text-3xl text-[#B07D87] block mb-2">Exclusive Access</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2E282A] font-normal mb-4">
                The SHOWMANIA Venue Advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm">
                <div className="w-14 h-14 mx-auto rounded-full bg-rose-50 text-[#B07D87] flex items-center justify-center text-2xl mb-4">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h4 className="font-serif text-xl text-[#2E282A] mb-2">Preferred Palace Pricing</h4>
                <p className="text-xs text-[#696164] font-light leading-relaxed">
                  Direct contracts with premier luxury hotel chains ensure wholesale pricing, room upgrade waivers, and complimentary event lawn spaces.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm">
                <div className="w-14 h-14 mx-auto rounded-full bg-rose-50 text-[#B07D87] flex items-center justify-center text-2xl mb-4">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <h4 className="font-serif text-xl text-[#2E282A] mb-2">Complimentary Recce & Tours</h4>
                <p className="text-xs text-[#696164] font-light leading-relaxed">
                  Join our wedding directors on private physical or virtual 360-degree venue walkthroughs with technical acoustic and drone analysis.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm">
                <div className="w-14 h-14 mx-auto rounded-full bg-rose-50 text-[#B07D87] flex items-center justify-center text-2xl mb-4">
                  <i className="fa-solid fa-file-contract"></i>
                </div>
                <h4 className="font-serif text-xl text-[#2E282A] mb-2">Legal & Sound Permissions</h4>
                <p className="text-xs text-[#696164] font-light leading-relaxed">
                  We handle all government clearances, late-night sound permissions, fire permits, and drone flight licenses so you celebrate worry-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#834F59] via-[#B07D87] to-[#834F59] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="font-script text-3xl sm:text-4xl text-rose-200 block mb-3">Your Perfect Setting Awaits</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-6">
              Need Help Finding the Ideal Wedding Venue?
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl mx-auto mb-8 font-light">
              Tell us your preferred destination, estimated guest count, and date range. We will send you a personalized venue shortlist within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking && onOpenBooking('Custom Venue Shortlist Request')}
                className="px-8 py-3.5 rounded-full bg-white text-[#834F59] font-bold text-xs tracking-widest uppercase shadow-xl hover:bg-rose-50 transition transform hover:scale-105 cursor-pointer"
              >
                Request Custom Shortlist
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
