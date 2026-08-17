import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ isScrolled, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [destinationDropdownOpen, setDestinationDropdownOpen] = useState(false);
  const [venueDropdownOpen, setVenueDropdownOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDestinationOpen, setMobileDestinationOpen] = useState(false);
  const [mobileVenueOpen, setMobileVenueOpen] = useState(false);

  const location = useLocation();
  const aboutTimerRef = useRef(null);
  const servicesTimerRef = useRef(null);
  const destinationTimerRef = useRef(null);
  const venueTimerRef = useRef(null);

  const isHome = location.pathname === '/';
  const isSolid = isScrolled || !isHome;

  // Dropdown hover helpers with 250ms grace period
  const handleAboutEnter = () => {
    if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
    setAboutDropdownOpen(true);
  };
  const handleAboutLeave = () => {
    aboutTimerRef.current = setTimeout(() => setAboutDropdownOpen(false), 250);
  };

  const handleServicesEnter = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
    setServicesDropdownOpen(true);
  };
  const handleServicesLeave = () => {
    servicesTimerRef.current = setTimeout(() => setServicesDropdownOpen(false), 250);
  };

  const handleDestinationEnter = () => {
    if (destinationTimerRef.current) clearTimeout(destinationTimerRef.current);
    setDestinationDropdownOpen(true);
  };
  const handleDestinationLeave = () => {
    destinationTimerRef.current = setTimeout(() => setDestinationDropdownOpen(false), 250);
  };

  const handleVenueEnter = () => {
    if (venueTimerRef.current) clearTimeout(venueTimerRef.current);
    setVenueDropdownOpen(true);
  };
  const handleVenueLeave = () => {
    venueTimerRef.current = setTimeout(() => setVenueDropdownOpen(false), 250);
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileAboutOpen(false);
        setMobileServicesOpen(false);
        setMobileDestinationOpen(false);
        setMobileVenueOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: 8, 
      scale: 0.97, 
      transition: { duration: 0.18, ease: "easeInOut" } 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const isAboutActive = location.pathname === '/testimonials' || location.pathname === '/contact';
  const isServicesActive = location.pathname.startsWith('/services');
  const isDestinationActive = location.pathname === '/destination-wedding-india' || location.pathname === '/destination-wedding-abroad';
  const isVenueActive = location.pathname === '/wedding-venues';

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
      className={`w-full z-50 transition-all duration-500 ${isSolid ? 'fixed top-0 left-0 glass-nav shadow-md py-3 text-[#2E282A]' : 'absolute top-0 left-0 py-5 text-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          to="/"
          className="flex items-center gap-3 group cursor-pointer py-1 flex-shrink-0"
        >
          <img 
            src="/logo.png" 
            alt="SHOWMANIA Events & Entertainment" 
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition transform group-hover:scale-105"
            onError={(e) => { e.target.src = 'assets/logo.png'; }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-3.5 2xl:space-x-5 text-[10.5px] 2xl:text-[11px] tracking-[0.14em] 2xl:tracking-[0.18em] uppercase font-medium whitespace-nowrap">
          
          {/* 1. Home */}
          <Link 
            to="/" 
            className={`transition-colors py-1 relative ${location.pathname === '/' ? 'text-[#B07D87] font-semibold' : (isSolid ? 'text-[#2E282A] hover:text-[#B07D87]' : 'text-white/90 hover:text-rose-300')}`}
          >
            <span>Home</span>
            {location.pathname === '/' && (
              <motion.span layoutId="navUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B07D87]" />
            )}
          </Link>

          {/* 2. About Us Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <Link 
              to="/about"
              className={`flex items-center gap-1.5 py-1 tracking-[0.18em] uppercase transition-colors cursor-pointer ${location.pathname === '/about' ? 'text-[#B07D87] font-semibold border-b-2 border-[#B07D87]' : (isSolid ? 'text-[#2E282A] hover:text-[#B07D87]' : 'text-white/90 hover:text-rose-300')}`}
            >
              <span>About Us</span>
              <motion.i 
                animate={{ rotate: aboutDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="fa-solid fa-chevron-down text-[8px] opacity-70"
              />
            </Link>

            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                  className="absolute top-full left-0 pt-2 w-56 z-50 text-[#2E282A]"
                >
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-200/90 py-2.5 overflow-hidden">
                    <div className="px-1.5 space-y-1">
                      <Link
                        to="/about"
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/about' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-gem text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">About Showmania</span>
                          <span className="block text-[10px] text-gray-400 font-light">Our legacy, vision & founder</span>
                        </div>
                      </Link>

                      <Link
                        to="/testimonials"
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/testimonials' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-heart-pulse text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Testimonials</span>
                          <span className="block text-[10px] text-gray-400 font-light">Client love stories & reviews</span>
                        </div>
                      </Link>

                      <Link
                        to="/contact"
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/contact' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-regular fa-envelope text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Contact Us</span>
                          <span className="block text-[10px] text-gray-400 font-light">Direct inquiry & studio lines</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Services Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 py-1 tracking-[0.18em] uppercase transition-colors cursor-pointer ${isServicesActive || servicesDropdownOpen ? 'text-[#B07D87] font-semibold' : (isSolid ? 'text-[#2E282A] hover:text-[#B07D87]' : 'text-white/90 hover:text-rose-300')}`}
            >
              <span>Services</span>
              <motion.i 
                animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="fa-solid fa-chevron-down text-[8px] opacity-70"
              />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                  className="absolute top-full left-0 pt-2 w-64 z-50 text-[#2E282A]"
                >
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-200/90 py-2.5 overflow-hidden">
                    <div className="px-1.5 space-y-1">
                      <a
                        href="/#services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87] transition-all group"
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-ring text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Wedding Services</span>
                          <span className="block text-[10px] text-gray-400 font-light">Bespoke nuptial planning</span>
                        </div>
                      </a>

                      <Link
                        to="/services/corporate"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/services/corporate' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-building text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Corporate Events</span>
                          <span className="block text-[10px] text-gray-400 font-light">Galas, summits & launches</span>
                        </div>
                      </Link>

                      <Link
                        to="/services/social"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/services/social' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-champagne-glasses text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Social Events</span>
                          <span className="block text-[10px] text-gray-400 font-light">Birthdays & luxury soirées</span>
                        </div>
                      </Link>

                      <Link
                        to="/services/celebrity-artist"
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/services/celebrity-artist' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-star text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Celebrity & Artist</span>
                          <span className="block text-[10px] text-gray-400 font-light">Talent & stage curation</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Destination Weddings Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={handleDestinationEnter}
            onMouseLeave={handleDestinationLeave}
          >
            <button 
              onClick={() => setDestinationDropdownOpen(!destinationDropdownOpen)}
              className={`flex items-center gap-1.5 py-1 tracking-[0.18em] uppercase transition-colors cursor-pointer ${isDestinationActive || destinationDropdownOpen ? 'text-[#B07D87] font-semibold' : (isSolid ? 'text-[#2E282A] hover:text-[#B07D87]' : 'text-white/90 hover:text-rose-300')}`}
            >
              <span>Destination Weddings</span>
              <motion.i 
                animate={{ rotate: destinationDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="fa-solid fa-chevron-down text-[8px] opacity-70"
              />
            </button>

            <AnimatePresence>
              {destinationDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={handleDestinationEnter}
                  onMouseLeave={handleDestinationLeave}
                  className="absolute top-full left-0 pt-2 w-72 z-50 text-[#2E282A]"
                >
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-200/90 py-2.5 overflow-hidden">
                    <div className="px-1.5 space-y-1">
                      <Link
                        to="/destination-wedding-india"
                        onClick={() => setDestinationDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/destination-wedding-india' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-7 h-7 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-archway text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Destination Wedding in India</span>
                          <span className="block text-[10px] text-gray-400 font-light">Udaipur, Jaipur, Goa, Kerala & more</span>
                        </div>
                      </Link>

                      <Link
                        to="/destination-wedding-abroad"
                        onClick={() => setDestinationDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/destination-wedding-abroad' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-7 h-7 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-plane-departure text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Destination Wedding in Abroad</span>
                          <span className="block text-[10px] text-gray-400 font-light">Bali, Dubai, Italy, Thailand & Europe</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. Venue Dropdown */}
          <div 
            className="relative py-2"
            onMouseEnter={handleVenueEnter}
            onMouseLeave={handleVenueLeave}
          >
            <button 
              onClick={() => setVenueDropdownOpen(!venueDropdownOpen)}
              className={`flex items-center gap-1.5 py-1 tracking-[0.18em] uppercase transition-colors cursor-pointer ${isVenueActive || venueDropdownOpen ? 'text-[#B07D87] font-semibold' : (isSolid ? 'text-[#2E282A] hover:text-[#B07D87]' : 'text-white/90 hover:text-rose-300')}`}
            >
              <span>Venue</span>
              <motion.i 
                animate={{ rotate: venueDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="fa-solid fa-chevron-down text-[8px] opacity-70"
              />
            </button>

            <AnimatePresence>
              {venueDropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onMouseEnter={handleVenueEnter}
                  onMouseLeave={handleVenueLeave}
                  className="absolute top-full left-0 pt-2 w-64 z-50 text-[#2E282A]"
                >
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-rose-200/90 py-2.5 overflow-hidden">
                    <div className="px-1.5 space-y-1">
                      <Link
                        to="/wedding-venues"
                        onClick={() => setVenueDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs normal-case transition-all group ${location.pathname === '/wedding-venues' ? 'bg-rose-50 text-[#B07D87] font-semibold' : 'text-[#423E40] hover:bg-rose-50 hover:text-[#B07D87]'}`}
                      >
                        <div className="w-7 h-7 rounded-full bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center text-[#B07D87]">
                          <i className="fa-solid fa-hotel text-xs"></i>
                        </div>
                        <div>
                          <span className="block font-medium">Wedding Venues</span>
                          <span className="block text-[10px] text-gray-400 font-light">Palaces, Forts, Havelis & Resorts</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 6. Real Weddings (Dedicated Page) */}
          <Link 
            to="/real-weddings" 
            className={`hover:text-[#B07D87] transition-colors py-1 ${location.pathname === '/real-weddings' ? 'text-[#B07D87] font-semibold border-b-2 border-[#B07D87]' : (isSolid ? 'text-[#2E282A]' : 'text-white/90')}`}
          >
            Real Weddings
          </Link>

          {/* 7. Gallery (Dedicated Page) */}
          <Link 
            to="/gallery" 
            className={`hover:text-[#B07D87] transition-colors py-1 ${location.pathname === '/gallery' ? 'text-[#B07D87] font-semibold border-b-2 border-[#B07D87]' : (isSolid ? 'text-[#2E282A]' : 'text-white/90')}`}
          >
            Gallery
          </Link>

        </nav>

        {/* Far Right CTA: CONTACT US (Vibrant pink button matching the theme) */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-md bg-[#E84874] hover:bg-[#D43460] text-white text-xs font-semibold tracking-widest uppercase transition transform hover:scale-[1.03] shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="xl:hidden flex items-center gap-3">
          <Link
            to="/contact"
            className="px-3.5 py-1.5 rounded-md bg-[#E84874] hover:bg-[#D43460] text-white text-[10px] font-semibold tracking-wider uppercase transition shadow-sm"
          >
            Contact
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition cursor-pointer ${isSolid ? 'text-[#2E282A] hover:bg-rose-100/60' : 'text-white hover:bg-white/15'}`}
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#FAF6F3] text-[#2E282A] border-b border-rose-200 px-6 py-5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2 text-xs font-medium tracking-wider uppercase">
              
              {/* Home */}
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-rose-100 flex items-center justify-between text-[#2E282A] hover:text-[#B07D87]"
              >
                <span>Home</span>
                <i className="fa-solid fa-house text-xs opacity-50"></i>
              </Link>

              {/* About Us Accordion */}
              <div className="border-b border-rose-100 py-2">
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between text-left tracking-wider uppercase hover:text-[#B07D87]"
                >
                  <span>About Us</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition transform ${mobileAboutOpen ? 'rotate-180 text-[#B07D87]' : 'opacity-50'}`}></i>
                </button>
                {mobileAboutOpen && (
                  <div className="pl-3 pt-2 space-y-2 normal-case font-normal text-xs text-[#423E40]">
                    <Link 
                      to="/about" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-gem text-xs text-rose-400 mr-2"></i>
                      About Showmania & Founder
                    </Link>
                    <Link 
                      to="/testimonials" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-heart-pulse text-xs text-rose-400 mr-2"></i>
                      Testimonials & Reviews
                    </Link>
                    <Link 
                      to="/contact" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-regular fa-envelope text-xs text-rose-400 mr-2"></i>
                      Contact Us & Studio Info
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Accordion */}
              <div className="border-b border-rose-100 py-2">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-left tracking-wider uppercase hover:text-[#B07D87]"
                >
                  <span>Services</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition transform ${mobileServicesOpen ? 'rotate-180 text-[#B07D87]' : 'opacity-50'}`}></i>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 pt-2 space-y-2 normal-case font-normal text-xs text-[#423E40]">
                    <a 
                      href="/#services" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-ring text-xs text-rose-400 mr-2"></i>
                      Wedding Services
                    </a>
                    <Link 
                      to="/services/corporate" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-building text-xs text-rose-400 mr-2"></i>
                      Corporate Events & Galas
                    </Link>
                    <Link 
                      to="/services/social" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-champagne-glasses text-xs text-rose-400 mr-2"></i>
                      Social Events & Soirées
                    </Link>
                    <Link 
                      to="/services/celebrity-artist" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-star text-xs text-rose-400 mr-2"></i>
                      Celebrity & Artist Management
                    </Link>
                  </div>
                )}
              </div>

              {/* Destination Weddings Accordion */}
              <div className="border-b border-rose-100 py-2">
                <button 
                  onClick={() => setMobileDestinationOpen(!mobileDestinationOpen)}
                  className="w-full flex items-center justify-between text-left tracking-wider uppercase hover:text-[#B07D87]"
                >
                  <span>Destination Weddings</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition transform ${mobileDestinationOpen ? 'rotate-180 text-[#B07D87]' : 'opacity-50'}`}></i>
                </button>
                {mobileDestinationOpen && (
                  <div className="pl-3 pt-2 space-y-2 normal-case font-normal text-xs text-[#423E40]">
                    <Link 
                      to="/destination-wedding-india" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-archway text-xs text-rose-400 mr-2"></i>
                      Destination Wedding in India
                    </Link>
                    <Link 
                      to="/destination-wedding-abroad" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-plane-departure text-xs text-rose-400 mr-2"></i>
                      Destination Wedding in Abroad
                    </Link>
                  </div>
                )}
              </div>

              {/* Venue Accordion */}
              <div className="border-b border-rose-100 py-2">
                <button 
                  onClick={() => setMobileVenueOpen(!mobileVenueOpen)}
                  className="w-full flex items-center justify-between text-left tracking-wider uppercase hover:text-[#B07D87]"
                >
                  <span>Venue</span>
                  <i className={`fa-solid fa-chevron-down text-xs transition transform ${mobileVenueOpen ? 'rotate-180 text-[#B07D87]' : 'opacity-50'}`}></i>
                </button>
                {mobileVenueOpen && (
                  <div className="pl-3 pt-2 space-y-2 normal-case font-normal text-xs text-[#423E40]">
                    <Link 
                      to="/wedding-venues" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#B07D87]"
                    >
                      <i className="fa-solid fa-hotel text-xs text-rose-400 mr-2"></i>
                      Wedding Venues (Palaces, Forts & Resorts)
                    </Link>
                  </div>
                )}
              </div>

              {/* Real Weddings */}
              <Link 
                to="/real-weddings" 
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-rose-100 flex items-center justify-between ${location.pathname === '/real-weddings' ? 'text-[#B07D87] font-semibold' : 'text-[#2E282A] hover:text-[#B07D87]'}`}
              >
                <span>Real Weddings</span>
                <i className="fa-regular fa-image text-xs opacity-50"></i>
              </Link>

              {/* Gallery */}
              <Link 
                to="/gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-rose-100 flex items-center justify-between ${location.pathname === '/gallery' ? 'text-[#B07D87] font-semibold' : 'text-[#2E282A] hover:text-[#B07D87]'}`}
              >
                <span>Gallery</span>
                <i className="fa-solid fa-camera-retro text-xs opacity-50"></i>
              </Link>

              {/* Contact Button */}
              <div className="pt-3">
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-md bg-[#E84874] text-white text-center font-semibold tracking-widest uppercase block shadow-md"
                >
                  CONTACT US
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
