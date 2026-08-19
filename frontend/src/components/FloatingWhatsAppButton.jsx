import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWhatsAppButton({
  phoneNumber = "+919782962963",
  message = "Hello Suraj Light House! I am interested in your event lighting & tenting services in Ranthambore.",
  theme = "luxury",
  tooltipText = "Chat with Suraj Light House",
  positionClass = "bottom-8 right-8"
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Clean phone number (strip spaces, +, -, etc. for the wa.me link)
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  // Theme styling configurations
  const themeStyles = {
    whatsapp: {
      bg: "bg-[#25D366]",
      hoverBg: "hover:bg-[#20bd5a]",
      ringColor: "bg-[#25D366]/30",
      shadow: "shadow-[0_10px_25px_-3px_rgba(37,211,102,0.45)]",
      hoverShadow: "0 20px 35px -5px rgba(37,211,102,0.55), 0 10px 15px -5px rgba(37,211,102,0.35)",
      badgeBg: "bg-[#25D366]"
    },
    luxury: {
      bg: "bg-[#E63956]",
      hoverBg: "hover:bg-[#CF203E]",
      ringColor: "bg-[#E63956]/35",
      shadow: "shadow-[0_10px_25px_-3px_rgba(230,57,86,0.45)]",
      hoverShadow: "0 20px 35px -5px rgba(230,57,86,0.55), 0 10px 15px -5px rgba(230,57,86,0.35)",
      badgeBg: "bg-[#E63956]"
    }
  };

  const activeTheme = themeStyles[theme] || themeStyles.luxury;

  return (
    <div className={`fixed ${positionClass} z-50 flex items-center justify-end group select-none`}>
      
      {/* Interactive Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="hidden sm:flex items-center gap-2 mr-3 px-4 py-2 bg-white/95 backdrop-blur-md text-[#1A1A1A] text-xs font-bold tracking-wide rounded-full shadow-xl border border-rose-100 whitespace-nowrap"
          >
            <span className={`w-2 h-2 rounded-full ${activeTheme.badgeBg} animate-ping`}></span>
            <span>{tooltipText}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button Container */}
      <div className="relative flex items-center justify-center">
        
        {/* Continuous Soft Breathing/Pulse Ripple Wave */}
        <motion.div
          animate={{
            scale: [1, 1.45, 1.7],
            opacity: [0.65, 0.25, 0],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className={`absolute w-14 h-14 rounded-full ${activeTheme.ringColor} pointer-events-none`}
        />

        {/* Floating Anchor Action Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Suraj Light House on WhatsApp"
          title={tooltipText}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            scale: [1, 1.035, 1],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.10,
            y: -3,
            boxShadow: activeTheme.hoverShadow,
            transition: { type: "spring", stiffness: 400, damping: 15 }
          }}
          whileTap={{
            scale: 0.94,
            transition: { type: "spring", stiffness: 500, damping: 15 }
          }}
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${activeTheme.bg} ${activeTheme.hoverBg} text-white flex items-center justify-center ${activeTheme.shadow} cursor-pointer transition-colors duration-300 relative border-2 border-white`}
        >
          
          {/* Custom Crisp WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9 7.4 8.73 7.7C8.46 8 7.7 8.72 7.7 10.18C7.7 11.64 8.76 13.05 8.91 13.25C9.06 13.45 11 16.43 13.93 17.7C14.63 18 15.17 18.18 15.6 18.32C16.3 18.54 16.94 18.51 17.44 18.43C18 18.35 19.18 17.72 19.43 17.03C19.68 16.33 19.68 15.74 19.6 15.62C19.53 15.5 19.33 15.43 19.03 15.28C18.73 15.13 17.26 14.41 16.98 14.31C16.71 14.21 16.51 14.16 16.31 14.46C16.11 14.76 15.54 15.43 15.36 15.63C15.19 15.83 15.01 15.86 14.71 15.71C14.41 15.56 13.45 15.25 12.31 14.23C11.43 13.44 10.83 12.47 10.66 12.17C10.49 11.87 10.64 11.71 10.79 11.56C10.93 11.42 11.09 11.2 11.24 11.03C11.39 10.85 11.44 10.73 11.54 10.53C11.64 10.33 11.59 10.16 11.51 10.01C11.44 9.86 10.84 8.38 10.59 7.78C10.34 7.2 10.1 7.28 9.91 7.27C9.74 7.26 9.54 7.26 9.34 7.26" />
          </svg>

          {/* Online Notification Dot */}
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
        </motion.a>

      </div>
    </div>
  );
}
