"use client";
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { PaisleySVG } from './KashmirElements';

const slides = [
  {
    id: 1,
    label: "Winter 2025/26",
    title: "New Season",
    subtitle: "Kashmir Heritage",
    description: "Rooted in fine wool and timeless form. Heritage craftsmanship meets contemporary design.",
    cta: "Explore Women",
    link: "/products?collection=winter-edit-2025-26&gender=woman",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 2,
    label: "Men's Collection",
    title: "The Vanguard",
    subtitle: "Modern Tradition",
    description: "Modern interpretations of the iconic Kashmiri pheran. Structure, warmth, restraint.",
    cta: "Shop Men",
    link: "/products?collection=vanguard-pherans&gender=man",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 3,
    label: "Heritage Craft",
    title: "Pure Pashmina",
    subtitle: "Himalayan Cashmere",
    description: "Handwoven from the finest Himalayan cashmere. A testament to artisan mastery.",
    cta: "Discover",
    link: "/products?collection=pure-pashmina",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1920&auto=format&fit=crop"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[700px] overflow-hidden bg-black">
      {/* Kashmir Corner Decorations */}
      <div className="absolute top-6 left-6 lg:top-10 lg:left-10 z-30 pointer-events-none">
        <div className="w-20 h-20 lg:w-32 lg:h-32 border-t-2 border-l-2 border-[#D4AF37] opacity-50">
          <PaisleySVG size={20} color="#D4AF37" className="absolute top-3 left-3 opacity-60" />
        </div>
      </div>
      <div className="absolute top-6 right-6 lg:top-10 lg:right-10 z-30 pointer-events-none">
        <div className="w-20 h-20 lg:w-32 lg:h-32 border-t-2 border-r-2 border-[#D4AF37] opacity-50">
          <PaisleySVG size={20} color="#D4AF37" className="absolute top-3 right-3 opacity-60 -scale-x-100" />
        </div>
      </div>
      <div className="absolute bottom-24 left-6 lg:bottom-28 lg:left-10 z-30 pointer-events-none">
        <div className="w-20 h-20 lg:w-32 lg:h-32 border-b-2 border-l-2 border-[#D4AF37] opacity-50" />
      </div>
      <div className="absolute bottom-24 right-6 lg:bottom-28 lg:right-10 z-30 pointer-events-none">
        <div className="w-20 h-20 lg:w-32 lg:h-32 border-b-2 border-r-2 border-[#D4AF37] opacity-50" />
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms]"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)'
            }}
          />
          
          {/* Kashmir-inspired gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-[#722F37]/10" />
          
          {/* Subtle paisley pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-8 0-15 7-15 20s7 30 15 30 15-17 15-30S38 5 30 5zm0 5c5 0 10 5 10 15s-5 25-10 25-10-15-10-25 5-15 10-15z' fill='%23D4AF37' fill-opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}
          />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end pb-24 lg:pb-36">
            <div className="container">
              <div 
                className={`max-w-xl transition-all duration-1000 delay-200 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Label with decorative line */}
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <span className="w-8 lg:w-12 h-px bg-[#D4AF37]" />
                  <p className="text-[9px] lg:text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]">
                    {slide.label}
                  </p>
                </div>
                
                {/* Subtitle */}
                <p className="text-[10px] lg:text-[12px] font-light tracking-[0.2em] uppercase text-white/50 mb-2 lg:mb-3">
                  {slide.subtitle}
                </p>
                
                {/* Title with display font */}
                <h1 className="text-4xl lg:text-7xl font-light text-white tracking-tight mb-4 lg:mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {slide.title}
                </h1>
                
                {/* Description */}
                <p className="text-[13px] lg:text-[15px] text-white/75 leading-relaxed mb-8 lg:mb-10 max-w-md">
                  {slide.description}
                </p>
                
                {/* CTA Button with Kashmir styling */}
                <Link 
                  href={slide.link} 
                  className="group inline-flex items-center gap-4 text-[11px] lg:text-[12px] font-medium tracking-[0.2em] uppercase text-[#D4AF37] hover:text-white transition-colors"
                >
                  <span className="relative">
                    {slide.cta}
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-[#D4AF37] group-hover:bg-white transition-colors" />
                  </span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots - Kashmir styled */}
      <div className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`block rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-8 h-2 bg-[#D4AF37]' 
                : 'w-2 h-2 bg-white/40 group-hover:bg-white/60'
            }`} />
            {/* Ring on active */}
            {index === currentSlide && (
              <span className="absolute inset-0 m-auto w-12 h-6 border border-[#D4AF37]/30 rounded-full animate-pulse-gold" />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator - Kashmir styled */}
      <div className="absolute bottom-8 lg:bottom-10 right-6 lg:right-10 hidden lg:flex flex-col items-center gap-3 text-white/50 z-20">
        <span className="text-[9px] tracking-[0.25em] uppercase writing-vertical" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37]/60 to-transparent animate-pulse" />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 lg:bottom-10 left-6 lg:left-10 text-white/40 z-20 hidden lg:block">
        <span className="text-[#D4AF37] text-lg font-light">0{currentSlide + 1}</span>
        <span className="mx-2">/</span>
        <span className="text-sm">0{slides.length}</span>
      </div>
    </section>
  );
}
