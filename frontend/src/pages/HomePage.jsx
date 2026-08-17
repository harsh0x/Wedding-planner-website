import React from 'react';
import { motion } from 'framer-motion';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MosaicGallery from '../components/MosaicGallery';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import CommitmentSection from '../components/CommitmentSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import DestinationSection from '../components/DestinationSection';
import FaqSection from '../components/FaqSection';
import InquiryForm from '../components/InquiryForm';
import InstagramSection from '../components/InstagramSection';
import NewsletterSection from '../components/NewsletterSection';

export default function HomePage({
  portfolioItems,
  onOpenBooking,
  onImageClick,
  onShowToast
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      {/* SECTION 1: Hero */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* SECTION 2: About Us (3-Column Asymmetrical Layout & Floating Down Arrow) */}
      <AboutSection 
        onOpenBooking={onOpenBooking} 
        onImageClick={onImageClick} 
      />

      {/* Curated Moments Mosaic Band */}
      <MosaicGallery onImageClick={onImageClick} />

      {/* SECTION 3: Bespoke Services */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* SECTION 4: Portfolio & "And more!" Grid */}
      <PortfolioSection 
        portfolioItems={portfolioItems}
        onOpenBooking={onOpenBooking}
        onImageClick={onImageClick}
      />

      {/* SECTION 5: Our Commitment */}
      <CommitmentSection 
        onOpenBooking={onOpenBooking} 
        onImageClick={onImageClick} 
      />

      {/* SECTION 6: Why Choose Us (11 Floating Bubbles & 3 Circular Cards) */}
      <WhyChooseUsSection 
        onOpenBooking={onOpenBooking} 
        onImageClick={onImageClick} 
      />

      {/* SECTION 7: South Florida Weddings (Dark Luxury) */}
      <DestinationSection />

      {/* SECTION 8: FAQ Accordion ("You may be wondering...") */}
      <FaqSection onImageClick={onImageClick} />

      {/* Embedded 8-Field Wedding Consultation Inquiry Section */}
      <InquiryForm onShowToast={onShowToast} />

      {/* SECTION 9: Follow Us On Instagram (Matching Reference Layout) */}
      <InstagramSection />

      {/* SECTION 10: Newsletter ("Get on the list") */}
      <NewsletterSection onShowToast={onShowToast} />
    </motion.div>
  );
}
