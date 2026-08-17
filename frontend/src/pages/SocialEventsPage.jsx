import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const LUXURY_EASE = [0.25, 1, 0.5, 1];

const categories = [
  {
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
    tag: '30th • 50th • 75th',
    icon: 'fa-solid fa-cake-candles',
    title: 'Milestone Birthdays',
    desc: 'Landmark celebrations crafted around bespoke themes, personalized cocktail bars, customized tiered cake design, and private DJ sets.',
    highlight: 'Themed Curation'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    tag: 'Romantic Banquets',
    icon: 'fa-solid fa-heart',
    title: 'Anniversaries & Renewals',
    desc: 'Reignite love with candlelit garden banquets, string quartet serenades, nostalgic photo retrospective installations, and five-star culinary pairings.',
    highlight: 'Intimate Luxury'
  },
  {
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    tag: 'Pastel High Tea',
    icon: 'fa-solid fa-baby-carriage',
    title: 'Baby Showers & Reveals',
    desc: 'Ethereal floral arches, pastel balloon sculptures, high tea culinary styling, and dramatic pyrotechnic or smoke reveal moments for the new arrival.',
    highlight: 'Pastel Elegance'
  },
  {
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    tag: 'Pre-Wedding Glamour',
    icon: 'fa-solid fa-ring',
    title: 'Engagements & Roka Soirées',
    desc: 'High-energy ring ceremony productions with customized photobooth walls, signature champagne towers, live dhol/percussionists, and luxury gifting trays.',
    highlight: 'Pre-Wedding Radiance'
  },
  {
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tag: 'Artisanal Mixology',
    icon: 'fa-solid fa-martini-glass-citrus',
    title: 'Private Cocktail Soirées',
    desc: 'Exclusive rooftop and estate cocktail gatherings featuring flair mixologists, grazing tables, live acoustic artists, and warm mood lighting design.',
    highlight: 'Gourmet Mixology'
  },
  {
    image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=800&q=80',
    tag: 'Fireworks & Galas',
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Holiday & Festival Galas',
    desc: 'Diwali feasts, New Year’s Eve midnight countdowns, and bespoke themed galas with lavish immersive decor, fireworks, and live interactive performers.',
    highlight: 'Immersive Decor'
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80', title: 'Midnight Countdown Toast' },
  { url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80', title: 'Bespoke Anniversary Dinner' },
  { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80', title: 'Private Rooftop Soirée' },
  { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80', title: 'Bespoke 30th Birthday Gala' }
];

const SOCIAL_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=2000&q=85',
    sub: 'Unforgettable Personal Milestones',
    title: 'Social Celebrations & Luxury Soirées',
    desc: 'From landmark milestone birthdays and lavish anniversaries to themed private galas, SHOWMANIA transforms personal celebrations into iconic memories.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=2000&q=85',
    sub: 'Alfresco Magic & Bespoke Lounges',
    title: 'Enchanted Garden Galas',
    desc: 'Drape your open-air soirées in fairy-light canopies, personalized mixology stations, and custom floral pavilions that dazzle your guests.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=85',
    sub: 'Immersive Themes & Electric Vibes',
    title: 'Vibrant Themed Extravaganzas',
    desc: 'Electrifying after-parties, retro masquerades, and cutting-edge sound and light production that keep your guests dancing until dawn.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2000&q=85',
    sub: 'Opulent Intimate Gatherings',
    title: 'Signature Private Hospitality',
    desc: 'Exquisite tabletop styling, world-class gourmet catering curation, and warm hospitality designed for your closest family and friends.'
  }
];

export default function SocialEventsPage({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SOCIAL_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SOCIAL_SLIDES[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SOCIAL_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SOCIAL_SLIDES.length) % SOCIAL_SLIDES.length);
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
                href="#social-categories" 
                className="px-8 py-3.5 rounded-full bg-white text-[#2E282A] hover:bg-rose-50 text-xs font-semibold uppercase tracking-widest shadow-xl transition transform hover:scale-105"
              >
                View Soirées
              </a>
              <Link 
                to="/contact" 
                className="px-8 py-3.5 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs font-semibold uppercase tracking-widest shadow-xl border border-white/40 transition transform hover:scale-105"
              >
                Reserve Date
              </Link>
            </div>
          </div>

        </section>

        {/* Categories Grid With Imagery */}
        <section id="social-categories" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-2">Artistry in Every Detail</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold">
              Curated Social Celebrations
            </h2>
            <p className="text-xs sm:text-sm text-[#696164] max-w-xl mx-auto mt-2 font-light">
              Every occasion possesses its own rhythm and soul. We weave couture floral design, ambient lighting, bespoke mixology, and musical curation into each soiree.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item, idx) => (
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
              <span className="font-script text-3xl sm:text-4xl text-[#B07D87] block mb-1">Celebration Memories</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#2E282A] font-semibold">
                Social Soirée Moments
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

        {/* CTA Banner */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-rose-200/80 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-rose-50 -z-0"></div>
            <div className="relative z-10">
              <span className="font-script text-3xl sm:text-5xl text-[#B07D87] block mb-2">Celebrate In Grandeur</span>
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#2E282A] font-semibold mb-4">
                Let’s Design Your Next Private Soirée
              </h2>
              <p className="text-xs sm:text-sm text-[#696164] max-w-xl mx-auto mb-8 font-light leading-relaxed">
                Share your vision with our social event specialists for custom thematic sketches, culinary suggestions, and venue options.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4.5 rounded-full bg-[#B07D87] hover:bg-[#9E6772] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-xl transition transform hover:scale-105 active:scale-95"
              >
                Inquire for Social Event
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
