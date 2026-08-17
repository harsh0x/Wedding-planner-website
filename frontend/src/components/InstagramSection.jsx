import React from 'react';
import { motion } from 'framer-motion';

const instagramPosts = [
  {
    id: 1,
    col: 'left',
    type: 'video',
    src: '/assets/videos/rajasthan_chari_dance.webm',
    likes: '8.4k',
    comments: '412',
    caption: 'Mesmerizing Rajasthani folk artists welcoming baraat guests with the royal Chari fire dance ✨🔥🏰 #RajasthaniWedding #SurajLightHouse'
  },
  {
    id: 2,
    col: 'center-top',
    type: 'video',
    src: '/assets/videos/rajasthan_folk_dance.webm',
    likes: '9.8k',
    comments: '643',
    caption: 'Traditional royal folk beats & spirited wedding performances lighting up the sangeet night 👑🌸 #RoyalHeritage #SurajLightHouse'
  },
  {
    id: 3,
    col: 'center-bottom',
    type: 'video',
    src: '/assets/videos/hd_wedding_mehendi.webm',
    likes: '11.5k',
    comments: '893',
    caption: 'Joyful celebrations, authentic mehendi rituals & colorful royal wedding vibes 🏰💫 #RanthamboreWeddings #SurajLightHouse'
  },
  {
    id: 4,
    col: 'right-top',
    type: 'video',
    src: '/assets/videos/rajasthan_ghoomar_palace.webm',
    likes: '14.8k',
    comments: '1.2k',
    caption: 'Majestic palace court illuminations & royal wedding celebrations under starry skies ✨🦚 #RoyalRajasthani #WeddingLighting'
  },
  {
    id: 5,
    col: 'right-bottom',
    type: 'video',
    src: '/assets/videos/hd_royal_stage_celebration.webm',
    likes: '15.6k',
    comments: '924',
    caption: 'Grand royal sangeet stage, festive dhol & vibrant celebrations lighting up the night 🌸✨ #SurajLightHouse #BespokeWeddings'
  }
];

export default function InstagramSection() {
  const LUXURY_EASE = [0.25, 1, 0.5, 1];
  const INSTAGRAM_URL = "https://www.instagram.com/suraj_light_house_ranthmbhor?utm_source=qr";

  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-12 lg:px-16 border-t border-rose-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetrical 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          
          {/* ================= COLUMN 1 (LEFT) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            
            {/* Top Text & Instagram Brand Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: LUXURY_EASE }}
              className="pt-2 sm:pt-4"
            >
              <div className="mb-4">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-charcoal hover:text-[#E84874] transition-colors"
                  aria-label="Instagram Profile"
                >
                  <i className="fa-brands fa-instagram text-4xl sm:text-5xl"></i>
                </a>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E282A] font-normal leading-tight tracking-wide mb-3">
                Follow Us On <br /> Instagram
              </h2>

              <p className="font-sans text-xs text-gray-500 font-light mb-4">
                <a 
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B07D87] font-medium hover:underline hover:text-[#E84874] transition"
                >
                  @suraj_light_house_ranthmbhor
                </a> • Daily inspiration, royal Rajasthani decor & live wedding moments
              </p>

              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B07D87] hover:text-[#E84874] transition group"
              >
                <span>Explore Feed</span>
                <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
              </a>
            </motion.div>

            {/* Video 1 (Rajasthani Chari Dance Video) */}
            <motion.a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-100/80 bg-rose-50/50 block cursor-pointer"
            >
              <video 
                src={instagramPosts[0].src} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-xs z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
                <i className="fa-solid fa-play text-[10px] ml-0.5"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <i className="fa-brands fa-instagram text-2xl text-white/90"></i>
                </div>
                <div>
                  <p className="text-xs font-light line-clamp-2 mb-3 leading-relaxed text-white/90">
                    {instagramPosts[0].caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-rose-200">
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-heart text-red-500"></i> {instagramPosts[0].likes}</span>
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-comment"></i> {instagramPosts[0].comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>

          </div>

          {/* ================= COLUMN 2 (CENTER) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            
            {/* Video 2 (Rajasthani Folk Celebration) */}
            <motion.a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-100/80 bg-rose-50/50 block cursor-pointer"
            >
              <video 
                src={instagramPosts[1].src} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-xs z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
                <i className="fa-solid fa-play text-[10px] ml-0.5"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <i className="fa-brands fa-instagram text-2xl text-white/90"></i>
                </div>
                <div>
                  <p className="text-xs font-light line-clamp-2 mb-3 leading-relaxed text-white/90">
                    {instagramPosts[1].caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-rose-200">
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-heart text-red-500"></i> {instagramPosts[1].likes}</span>
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-comment"></i> {instagramPosts[1].comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Video 3 (Rajasthani Palace Folk Vibes) */}
            <motion.a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3, ease: LUXURY_EASE }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-100/80 bg-rose-50/50 block cursor-pointer"
            >
              <video 
                src={instagramPosts[2].src} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-xs z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
                <i className="fa-solid fa-play text-[10px] ml-0.5"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <i className="fa-brands fa-instagram text-2xl text-white/90"></i>
                </div>
                <div>
                  <p className="text-xs font-light line-clamp-2 mb-3 leading-relaxed text-white/90">
                    {instagramPosts[2].caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-rose-200">
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-heart text-red-500"></i> {instagramPosts[2].likes}</span>
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-comment"></i> {instagramPosts[2].comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>

          </div>

          {/* ================= COLUMN 3 (RIGHT) ================= */}
          <div className="flex flex-col gap-6 sm:gap-8">
            
            {/* Video 4 (Ghoomar & Royal Palace Court Celebrations) */}
            <motion.a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4, ease: LUXURY_EASE }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-100/80 bg-rose-50/50 block cursor-pointer"
            >
              <video 
                src={instagramPosts[3].src} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-xs z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
                <i className="fa-solid fa-play text-[10px] ml-0.5"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <i className="fa-brands fa-instagram text-2xl text-white/90"></i>
                </div>
                <div>
                  <p className="text-xs font-light line-clamp-2 mb-3 leading-relaxed text-white/90">
                    {instagramPosts[3].caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-rose-200">
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-heart text-red-500"></i> {instagramPosts[3].likes}</span>
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-comment"></i> {instagramPosts[3].comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Video 5 (Indian Wedding Celebration Video) */}
            <motion.a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.5, ease: LUXURY_EASE }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-rose-100/80 bg-rose-50/50 block cursor-pointer"
            >
              <video 
                src={instagramPosts[4].src} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-xs z-10 pointer-events-none group-hover:opacity-0 transition-opacity">
                <i className="fa-solid fa-play text-[10px] ml-0.5"></i>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <i className="fa-brands fa-instagram text-2xl text-white/90"></i>
                </div>
                <div>
                  <p className="text-xs font-light line-clamp-2 mb-3 leading-relaxed text-white/90">
                    {instagramPosts[4].caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-medium text-rose-200">
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-heart text-red-500"></i> {instagramPosts[4].likes}</span>
                    <span className="flex items-center gap-1.5"><i className="fa-solid fa-comment"></i> {instagramPosts[4].comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>

          </div>

        </div>

      </div>
    </section>
  );
}


