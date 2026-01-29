"use client";
import { useEffect, useState } from 'react';

// ============================================
// CHINAR LEAF SVG - The iconic Kashmir symbol
// ============================================
export const ChinarLeafSVG = ({ className = "", size = 40, color = "#722F37" }: { className?: string; size?: number; color?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill={color}
  >
    <path d="M50 5 L60 20 L80 20 L70 35 L85 50 L70 65 L80 80 L60 80 L50 95 L40 80 L20 80 L30 65 L15 50 L30 35 L20 20 L40 20 Z" />
    <line x1="50" y1="95" x2="50" y2="50" stroke={color} strokeWidth="2" />
  </svg>
);

// ============================================
// PAISLEY SVG - Traditional boteh pattern
// ============================================
export const PaisleySVG = ({ className = "", size = 60, color = "#D4AF37" }: { className?: string; size?: number; color?: string }) => (
  <svg 
    width={size} 
    height={size * 1.5} 
    viewBox="0 0 60 90" 
    className={className}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
  >
    <path d="M30 5 C45 5 55 20 55 45 C55 70 40 85 30 85 C20 85 5 70 5 45 C5 20 15 5 30 5" />
    <path d="M30 15 C40 15 45 25 45 45 C45 65 35 75 30 75 C25 75 15 65 15 45 C15 25 20 15 30 15" />
    <circle cx="30" cy="30" r="5" fill={color} />
    <path d="M30 40 Q35 50 30 60 Q25 50 30 40" fill={color} />
  </svg>
);

// ============================================
// LOTUS FLOWER SVG - Dal Lake symbol
// ============================================
export const LotusSVG = ({ className = "", size = 50, color = "#E5A220" }: { className?: string; size?: number; color?: string }) => (
  <svg 
    width={size} 
    height={size * 0.7} 
    viewBox="0 0 100 70" 
    className={className}
    fill={color}
    opacity="0.8"
  >
    <ellipse cx="50" cy="60" rx="35" ry="8" fill={color} opacity="0.3" />
    <path d="M50 55 Q40 40 30 50 Q40 35 50 45 Q60 35 70 50 Q60 40 50 55" />
    <path d="M50 50 Q35 30 20 45 Q35 25 50 40 Q65 25 80 45 Q65 30 50 50" />
    <path d="M50 45 Q30 15 10 35 Q30 10 50 30 Q70 10 90 35 Q70 15 50 45" />
    <circle cx="50" cy="48" r="6" fill="#FFD700" />
  </svg>
);

// ============================================
// FLOATING CHINAR LEAVES - Ambient Animation
// ============================================
interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export const FloatingChinarLeaves = ({ count = 5 }: { count?: number }) => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const newLeaves: Leaf[] = [];
    for (let i = 0; i < count; i++) {
      newLeaves.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
        size: 20 + Math.random() * 20,
        rotation: Math.random() * 360,
      });
    }
    setLeaves(newLeaves);
  }, [count]);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]" aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            top: '-50px',
            animation: `chinarFall ${leaf.duration}s linear ${leaf.delay}s infinite`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <ChinarLeafSVG 
            size={leaf.size} 
            color={leaf.id % 2 === 0 ? "#722F37" : "#D4AF37"} 
          />
        </div>
      ))}
    </div>
  );
};

// ============================================
// SNOW EFFECT - Kashmir Winter Magic
// ============================================
export const SnowEffect = ({ intensity = 30 }: { intensity?: number }) => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; x: number; delay: number; duration: number; size: number }>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const flakes = [];
    for (let i = 0; i < intensity; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 15,
        size: 2 + Math.random() * 4,
      });
    }
    setSnowflakes(flakes);
  }, [intensity]);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${flake.x}%`,
            top: '-10px',
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// CORNER DECORATIONS - Kashmir Frame
// ============================================
export const KashmirCorners = ({ color = "#D4AF37" }: { color?: string }) => (
  <>
    <div 
      className="hero-corner-tl"
      style={{ borderColor: color }}
    >
      <PaisleySVG size={30} color={color} className="absolute top-2 left-2 opacity-50" />
    </div>
    <div className="hero-corner-tr" style={{ borderColor: color }}>
      <PaisleySVG size={30} color={color} className="absolute top-2 right-2 opacity-50 -scale-x-100" />
    </div>
    <div className="hero-corner-bl" style={{ borderColor: color }}>
      <PaisleySVG size={30} color={color} className="absolute bottom-2 left-2 opacity-50 rotate-180" />
    </div>
    <div className="hero-corner-br" style={{ borderColor: color }}>
      <PaisleySVG size={30} color={color} className="absolute bottom-2 right-2 opacity-50 -scale-x-100 rotate-180" />
    </div>
  </>
);

// ============================================
// EMBROIDERY LINE - Sozni Inspired
// ============================================
export const EmbroideryLine = ({ className = "" }: { className?: string }) => (
  <div className={`embroidery-line w-full ${className}`} />
);

// ============================================
// SECTION DIVIDER - Lotus Style
// ============================================
export const LotusDivider = ({ className = "" }: { className?: string }) => (
  <div className={`lotus-divider ${className}`}>
    <LotusSVG size={30} />
  </div>
);

// ============================================
// KASHMIR QUOTE BLOCK
// ============================================
export const KashmirQuote = ({ children, author }: { children: React.ReactNode; author?: string }) => (
  <blockquote className="kashmir-quote">
    {children}
    {author && (
      <footer className="mt-4 text-sm font-normal not-italic text-gray-600">
        — {author}
      </footer>
    )}
  </blockquote>
);

// ============================================
// KASHMIR CARD - With traditional border
// ============================================
export const KashmirCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`kashmir-card ${className}`}>
    {children}
  </div>
);

// ============================================
// KASHMIR STAT - Large number display
// ============================================
export const KashmirStat = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="kashmir-stat">{number}</div>
    <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mt-2">{label}</div>
  </div>
);

// ============================================
// KASHMIR BADGE
// ============================================
export const KashmirBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="kashmir-badge">{children}</span>
);

// ============================================
// MOUNTAIN SILHOUETTE BACKGROUND
// ============================================
export const MountainSilhouette = ({ className = "" }: { className?: string }) => (
  <div className={`absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none ${className}`}>
    <svg 
      viewBox="0 0 1440 200" 
      preserveAspectRatio="none" 
      className="w-full h-full"
    >
      {/* Far mountains */}
      <path 
        d="M0,200 L0,150 L100,120 L250,140 L400,100 L550,130 L700,80 L850,120 L1000,70 L1150,110 L1300,90 L1440,120 L1440,200 Z" 
        fill="#722F37" 
        fillOpacity="0.08"
      />
      {/* Mid mountains */}
      <path 
        d="M0,200 L0,160 L150,130 L300,150 L450,110 L600,140 L750,100 L900,130 L1050,95 L1200,125 L1350,105 L1440,130 L1440,200 Z" 
        fill="#D4AF37" 
        fillOpacity="0.05"
      />
      {/* Near mountains */}
      <path 
        d="M0,200 L0,170 L200,150 L400,165 L600,140 L800,160 L1000,145 L1200,155 L1440,150 L1440,200 Z" 
        fill="#1B4332" 
        fillOpacity="0.03"
      />
    </svg>
  </div>
);

// ============================================
// DAL LAKE RIPPLE EFFECT
// ============================================
export const DalLakeRipple = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[30%]"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(29, 53, 87, 0.05) 31%, transparent 32%),
            radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(29, 53, 87, 0.03) 51%, transparent 52%),
            radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(29, 53, 87, 0.02) 71%, transparent 72%)
          `,
          backgroundSize: '100% 100%',
          animation: 'ripple 4s ease-in-out infinite',
        }}
      />
    </div>
  );
};

// ============================================
// SHIKARA BOAT SVG - Dal Lake symbol
// ============================================
export const ShikaraSVG = ({ className = "", size = 80, color = "#722F37" }: { className?: string; size?: number; color?: string }) => (
  <svg 
    width={size} 
    height={size * 0.5} 
    viewBox="0 0 100 50" 
    className={className}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
  >
    {/* Boat hull */}
    <path d="M10 40 Q20 45 50 45 Q80 45 90 40 L85 35 Q50 38 15 35 Z" fill={color} opacity="0.3" />
    <path d="M15 35 Q50 38 85 35" />
    {/* Canopy */}
    <path d="M25 35 L25 15 Q50 5 75 15 L75 35" />
    <path d="M25 15 Q50 10 75 15" />
    {/* Decorative top */}
    <circle cx="50" cy="8" r="3" fill={color} />
    {/* Paddle */}
    <line x1="85" y1="30" x2="95" y2="45" strokeWidth="2" />
  </svg>
);

// ============================================
// ANIMATED SECTION HEADER
// ============================================
export const KashmirSectionHeader = ({ 
  label, 
  title, 
  description, 
  centered = true,
  light = false 
}: { 
  label: string; 
  title: string; 
  description?: string; 
  centered?: boolean;
  light?: boolean;
}) => (
  <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
    <div className={`section-label ${centered ? 'justify-center' : ''} ${light ? 'text-white/60 before:bg-kashmir-gold' : ''}`}>
      {label}
    </div>
    <h2 className={`text-display-sm mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-body max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-600'}`}>
        {description}
      </p>
    )}
    <div className={`mt-6 ${centered ? 'flex justify-center' : ''}`}>
      <EmbroideryLine className="max-w-[200px]" />
    </div>
  </div>
);

// ============================================
// SCROLL REVEAL WRAPPER
// ============================================
export const ScrollReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(ref);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, delay]);

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default {
  ChinarLeafSVG,
  PaisleySVG,
  LotusSVG,
  FloatingChinarLeaves,
  SnowEffect,
  KashmirCorners,
  EmbroideryLine,
  LotusDivider,
  KashmirQuote,
  KashmirCard,
  KashmirStat,
  KashmirBadge,
  MountainSilhouette,
  DalLakeRipple,
  ShikaraSVG,
  KashmirSectionHeader,
  ScrollReveal,
};
