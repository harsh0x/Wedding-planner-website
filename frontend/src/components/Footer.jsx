import React from 'react';
import { motion } from 'framer-motion';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-[#FAF6F3] text-[#696164] pt-20 pb-10 px-6 md:px-12 border-t border-rose-200/50 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          
          {/* Col 1: Showmania Logo & Socials */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="SHOWMANIA Events & Entertainment" 
                className="h-12 md:h-14 w-auto object-contain mb-2"
                onError={(e) => { e.target.src = 'assets/logo.png'; }}
              />
              <p className="text-[11px] text-[#696164] mt-1 font-light italic">
                Luxury Bespoke Celebrations & Entertainment
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="https://www.instagram.com/suraj_light_house_ranthmbhor?utm_source=qr" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-100 text-[#B07D87] hover:bg-[#B07D87] hover:text-white flex items-center justify-center text-xs transition" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-100 text-[#B07D87] hover:bg-[#B07D87] hover:text-white flex items-center justify-center text-xs transition" aria-label="Pinterest">
                <i className="fa-brands fa-pinterest-p"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-100 text-[#B07D87] hover:bg-[#B07D87] hover:text-white flex items-center justify-center text-xs transition" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-rose-100 text-[#B07D87] hover:bg-[#B07D87] hover:text-white flex items-center justify-center text-xs transition" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2E282A] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="/" className="hover:text-[#B07D87] transition">Home</a></li>
              <li><a href="/gallery" className="hover:text-[#B07D87] transition">Gallery</a></li>
              <li><a href="/real-weddings" className="hover:text-[#B07D87] transition">Real Weddings</a></li>
              <li><a href="/destination-wedding-india" className="hover:text-[#B07D87] transition">Weddings in India</a></li>
              <li><a href="/destination-wedding-abroad" className="hover:text-[#B07D87] transition">Weddings Abroad</a></li>
              <li><a href="/wedding-venues" className="hover:text-[#B07D87] transition">Wedding Venues</a></li>
              <li><a href="/testimonials" className="hover:text-[#B07D87] transition">Testimonials</a></li>
              <li><a href="/services/corporate" className="hover:text-[#B07D87] transition">Corporate Events</a></li>
              <li><a href="/services/social" className="hover:text-[#B07D87] transition">Social Events</a></li>
              <li><a href="/services/celebrity-artist" className="hover:text-[#B07D87] transition">Celebrity & Artist</a></li>
              <li><a href="/contact" className="hover:text-[#B07D87] transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2E282A] mb-4">
              Inquiries & Contact
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="mailto:Rinkuchinki91@gmail.com" className="hover:text-[#B07D87] transition flex items-center justify-center md:justify-start gap-2">
                  <i className="fa-regular fa-envelope text-rose-400 text-xs"></i>
                  <span>Rinkuchinki91@gmail.com</span>
                </a>
              </li>
              <li className="pt-1">
                <a href="tel:+919782962963" className="hover:text-[#B07D87] transition flex items-center justify-center md:justify-start gap-2">
                  <i className="fa-solid fa-phone text-rose-400 text-xs"></i>
                  <span>+91 9782962963 <span className="text-[11px] text-gray-500 font-normal">(Rinku Chinky)</span></span>
                </a>
              </li>
              <li>
                <a href="tel:+919414310499" className="hover:text-[#B07D87] transition flex items-center justify-center md:justify-start gap-2">
                  <i className="fa-solid fa-phone text-rose-400 text-xs"></i>
                  <span>+91 9414310499 <span className="text-[11px] text-gray-500 font-normal">(Suraj Mal Saini)</span></span>
                </a>
              </li>
              <li>
                <a href="tel:+919982142355" className="hover:text-[#B07D87] transition flex items-center justify-center md:justify-start gap-2">
                  <i className="fa-solid fa-phone text-rose-400 text-xs"></i>
                  <span>+91 9982142355 <span className="text-[11px] text-gray-500 font-normal">(Visnu Saini)</span></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Studios */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#2E282A] mb-4">
              Studios
            </h4>
            <p className="text-xs font-light leading-relaxed mb-2">
              Miami • Palm Beach • Naples • The Florida Keys
            </p>
            <p className="text-[11px] text-gray-500 font-light">
              Available worldwide for bespoke destination events & luxury celebrations.
            </p>
          </div>

        </div>

      </motion.div>

      {/* Bottom Full-Width Thin Strip */}
      <div className="w-full bg-[#B07D87] text-white py-3 text-center -mx-6 md:-mx-12 px-6 mt-10">
        <p className="text-[11px] font-light tracking-wide">
          © 2026 SHOWMANIA Events & Entertainment. All Rights Reserved. Crafted with love & elegance.
        </p>
      </div>

    </footer>
  );
}
