"use client";
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    brand: "MAWAL COUTURE MAN",
    title: "Winter . Edit",
    description: "Structured Wool Pherans rooted in tradition, featuring khatamband detailing inspired by the architectural heritage of Kashmir.",
    cta: "SHOP NOW",
    link: "/man",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 2,
    brand: "MAWAL COUTURE WOMAN",
    title: "Winter . Edit",
    description: "Winter silhouettes crafted in fine wool, where classic pherans and vintage motifs reflect the soul of Kashmir.",
    cta: "SHOP NOW",
    link: "/woman",
    image: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 3,
    brand: "MAWAL COUTURE WOMAN",
    title: "STYLE . LEGACY",
    description: "\"Lights in the Lake\" Our journey from the looms of kashmir to the lamps of Diwali begins here. With our very first Diwali Collection.",
    cta: "Shop Now",
    link: "/woman",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1920&auto=format&fit=crop"
  },
  {
    id: 4,
    brand: "MAWAL COUTURE WOMAN",
    title: "Style . Legacy",
    description: "The Festive Edit 2025/26 celebrates the season of radiance from Diwali lights to winter weddings. Crafted in heritage Kashmiri artistry and timeless silhouettes.",
    cta: "DISCOVER",
    link: "/woman",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-end pb-24 lg:pb-32">
            <div className="container">
              <div 
                className={`max-w-2xl transition-all duration-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p className="text-white/80 text-xs tracking-[0.25em] uppercase mb-4">
                  {slide.brand}
                </p>
                <h2 className="text-white text-display font-serif mb-6">
                  {slide.title}
                </h2>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                  {slide.description}
                </p>
                <Link 
                  href={slide.link}
                  className="btn-outline"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows (optional, shown on hover) */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white transition-colors hidden lg:block"
        aria-label="Previous slide"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white transition-colors hidden lg:block"
        aria-label="Next slide"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}
