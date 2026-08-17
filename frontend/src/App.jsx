import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Components
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LightboxModal from './components/LightboxModal';
import Toast from './components/Toast';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

// Page Components
import HomePage from './pages/HomePage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import CorporateEventsPage from './pages/CorporateEventsPage';
import SocialEventsPage from './pages/SocialEventsPage';
import CelebrityArtistPage from './pages/CelebrityArtistPage';
import DestinationIndiaPage from './pages/DestinationIndiaPage';
import DestinationAbroadPage from './pages/DestinationAbroadPage';
import WeddingVenuesPage from './pages/WeddingVenuesPage';
import RealWeddingsPage from './pages/RealWeddingsPage';
import GalleryPage from './pages/GalleryPage';
import AboutUsPage from './pages/AboutUsPage';

import { INITIAL_PORTFOLIO } from './data/weddingData';
import { fetchPortfolio } from './services/api';

// Scroll To Top on Route Change Helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// Animated Route Container with Framer Motion AnimatePresence
function AnimatedRoutes({
  portfolioItems,
  onOpenBooking,
  onImageClick,
  onShowToast
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* Route 1: Home Landing Page */}
        <Route 
          path="/" 
          element={
            <HomePage
              portfolioItems={portfolioItems}
              onOpenBooking={onOpenBooking}
              onImageClick={onImageClick}
              onShowToast={onShowToast}
            />
          } 
        />

        {/* Route 1.5: About Us Page */}
        <Route 
          path="/about" 
          element={
            <AboutUsPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 2: Testimonials Page */}
        <Route 
          path="/testimonials" 
          element={
            <TestimonialsPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 3: Contact Us Page */}
        <Route 
          path="/contact" 
          element={
            <ContactPage 
              onShowToast={onShowToast}
            />
          } 
        />

        {/* Route 4: Corporate Events */}
        <Route 
          path="/services/corporate" 
          element={
            <CorporateEventsPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 5: Social Events */}
        <Route 
          path="/services/social" 
          element={
            <SocialEventsPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 6: Celebrity & Artist Management */}
        <Route 
          path="/services/celebrity-artist" 
          element={
            <CelebrityArtistPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 7: Destination Wedding in India */}
        <Route 
          path="/destination-wedding-india" 
          element={
            <DestinationIndiaPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 8: Destination Wedding in Abroad */}
        <Route 
          path="/destination-wedding-abroad" 
          element={
            <DestinationAbroadPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 9: Wedding Venues */}
        <Route 
          path="/wedding-venues" 
          element={
            <WeddingVenuesPage 
              onOpenBooking={onOpenBooking}
            />
          } 
        />

        {/* Route 10: Real Weddings */}
        <Route 
          path="/real-weddings" 
          element={
            <RealWeddingsPage />
          } 
        />

        {/* Route 11: Gallery */}
        <Route 
          path="/gallery" 
          element={
            <GalleryPage />
          } 
        />

        {/* Fallback Route */}
        <Route 
          path="*" 
          element={
            <HomePage
              portfolioItems={portfolioItems}
              onOpenBooking={onOpenBooking}
              onImageClick={onImageClick}
              onShowToast={onShowToast}
            />
          } 
        />

      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Full Wedding Planning');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState(INITIAL_PORTFOLIO);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll for sticky nav & bottom scroll-to-top detection
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 80;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          const scrollPosition = window.innerHeight + window.scrollY;
          const totalHeight = document.documentElement.scrollHeight;
          const isNearBottom = totalHeight > window.innerHeight && scrollPosition >= (totalHeight - 1000);
          setShowScrollTop(isNearBottom);

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch live portfolio data from MongoDB backend
  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const items = await fetchPortfolio();
        if (items && items.length > 0) {
          setPortfolioItems(items);
        }
      } catch (err) {
        console.log('Using initial portfolio data');
      }
    };
    loadPortfolio();
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleOpenBooking = (serviceName = 'Full Wedding Planning') => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="relative min-w-full min-h-screen bg-[#FDFBF9] text-[#2E282A] font-sans selection:bg-[#B07D87] selection:text-white flex flex-col justify-between">
        
        {/* Route Scroll Position Reset */}
        <ScrollToTop />

        {/* Toast Feedback */}
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

        {/* Lightbox Modal */}
        <LightboxModal image={lightboxImage} onClose={() => setLightboxImage(null)} />

        {/* Booking Consultation Modal (Connected to Express /api/inquiry & Nodemailer) */}
        <BookingModal 
          isOpen={bookingModalOpen} 
          onClose={() => setBookingModalOpen(false)}
          initialService={selectedService}
          onSuccess={(msg) => showToast(msg)}
        />

        {/* Top Announcement Bar */}
        <AnnouncementBar 
          onSignUpClick={() => {
            const el = document.getElementById('newsletter-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* Global Navigation with Animated Dropdown */}
        <Navbar 
          isScrolled={isScrolled} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Multi-Page Animated Routing Outlet */}
        <main className="flex-grow">
          <AnimatedRoutes 
            portfolioItems={portfolioItems}
            onOpenBooking={handleOpenBooking}
            onImageClick={(img) => setLightboxImage(img)}
            onShowToast={showToast}
          />
        </main>

        {/* Global Luxury Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Floating WhatsApp Action Widget (Bottom-Right, Luxury Dusty Rose Theme) */}
        <FloatingWhatsAppButton 
          phoneNumber="+919782962963"
          message="Hello! I am interested in your luxury wedding planning services."
          theme="luxury"
          tooltipText="Chat with our Wedding Concierge"
        />

        {/* Floating Scroll-to-Top Button (Bottom-Left) — Only visible when near bottom of page */}
        {showScrollTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-[#B07D87] border border-rose-200 shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 duration-200 backdrop-blur-sm animate-fade-in"
            aria-label="Scroll to top"
          >
            <i className="fa-solid fa-chevron-up text-xs"></i>
          </button>
        )}

      </div>
    </BrowserRouter>
  );
}
