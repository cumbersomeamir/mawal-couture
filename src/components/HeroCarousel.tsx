"use client";
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    label: "Winter 2025/26",
    title: "New Season",
    description: "Rooted in fine wool and timeless form. Heritage craftsmanship meets contemporary design.",
    cta: "Explore Women",
    link: "/products?collection=winter-edit-2025-26&gender=woman",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 2,
    label: "Men's Collection",
    title: "The Vanguard",
    description: "Modern interpretations of the iconic Kashmiri pheran. Structure, warmth, restraint.",
    cta: "Shop Men",
    link: "/products?collection=vanguard-pherans&gender=man",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 3,
    label: "Heritage Craft",
    title: "Pure Pashmina",
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
    <section className="relative h-screen min-h-[550px] lg:min-h-[600px] overflow-hidden bg-black">
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
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end pb-20 lg:pb-32">
            <div className="container">
              <div 
                className={`max-w-lg transition-all duration-1000 delay-200 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <p className="text-[9px] lg:text-[10px] font-medium tracking-[0.3em] uppercase text-white/60 mb-3 lg:mb-4">
                  {slide.label}
                </p>
                <h1 className="text-3xl lg:text-6xl font-light text-white tracking-tight mb-3 lg:mb-4">
                  {slide.title}
                </h1>
                <p className="text-[12px] lg:text-[13px] text-white/80 leading-relaxed mb-6 lg:mb-8 max-w-[280px] lg:max-w-sm">
                  {slide.description}
                </p>
                <Link 
                  href={slide.link} 
                  className="inline-flex items-center h-12 text-[11px] font-medium tracking-[0.15em] uppercase text-white border-b border-white/60 pb-1 hover:border-white transition-colors"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`block rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-6 h-2 bg-white' 
                : 'w-2 h-2 bg-white/40'
            }`} />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 right-6 lg:right-8 hidden lg:flex items-center gap-3 text-white/50 z-20">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
