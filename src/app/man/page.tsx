"use client";
import Link from 'next/link';
import { 
  ChinarLeafSVG, 
  PaisleySVG, 
  EmbroideryLine, 
  ScrollReveal,
  LotusDivider,
  MountainSilhouette 
} from '../../components/KashmirElements';

const collections = [
  {
    title: "Winter Edit 2025/26",
    description: "Built on structure, warmth, and restraint.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=winter-edit-2025-26&gender=man"
  },
  {
    title: "The Vanguard Pherans",
    description: "Modern interpretations of the iconic Kashmiri pheran.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=vanguard-pherans&gender=man"
  },
  {
    title: "Khandar",
    description: "Heritage patterns for the modern man.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=khandar&gender=man"
  },
  {
    title: "Wyath",
    description: "Contemporary Kashmiri design.",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=wyath&gender=man"
  }
];

export default function ManPage() {
  return (
    <main className="pt-24 lg:pt-36 bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 chinar-pattern-bg opacity-20 pointer-events-none" />
      
      {/* Decorative Paisley */}
      <div className="absolute top-40 left-10 opacity-10 hidden lg:block rotate-180">
        <PaisleySVG size={120} color="#1B4332" />
      </div>
      
      {/* Hero */}
      <section className="container relative py-8 lg:py-20">
        <ScrollReveal>
          <div className="max-w-2xl">
            {/* Label with decoration */}
            <div className="flex items-center gap-3 mb-4">
              <ChinarLeafSVG size={18} color="#1B4332" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Collections
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </div>
            
            <h1 
              className="text-4xl lg:text-7xl font-light tracking-tight mb-5 lg:mb-6 text-[#1B4332]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Man
            </h1>
            <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed max-w-lg">
              A refined collection for the modern man. Each piece reflects timeless 
              silhouettes, functional elegance, and heritage detailing without excess.
            </p>
            
            <EmbroideryLine className="mt-8 max-w-[150px]" />
          </div>
        </ScrollReveal>
      </section>

      {/* View All Button */}
      <section className="container relative pb-12 lg:pb-16">
        <ScrollReveal delay={100}>
          <Link 
            href="/products?gender=man" 
            className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#1B4332] hover:text-[#D4AF37] transition-colors"
          >
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            View All Products
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
          </Link>
        </ScrollReveal>
      </section>

      {/* Featured - Two Column */}
      <section className="container relative pb-20 lg:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {collections.slice(0, 2).map((collection, idx) => (
            <ScrollReveal key={collection.href} delay={idx * 100}>
              <Link href={collection.href} className="block group relative">
                {/* Gold corner accent */}
                <div className={`absolute ${idx === 0 ? '-top-3 -left-3' : '-bottom-3 -right-3'} w-20 h-20 border-${idx === 0 ? 't' : 'b'}-2 border-${idx === 0 ? 'l' : 'r'}-2 border-[#D4AF37] opacity-60 z-10`} />
                
                <div className="aspect-[4/5] overflow-hidden bg-[#E5E5E5] mb-5 relative">
                  <img 
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#1B4332]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge for first item */}
                  {idx === 0 && (
                    <div className="absolute top-4 right-4 kashmir-badge">
                      New Season
                    </div>
                  )}
                </div>
                
                <h2 
                  className="text-xl lg:text-2xl font-light mb-2 text-gray-900 group-hover:text-[#1B4332] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {collection.title}
                </h2>
                <p className="text-[13px] text-gray-500">{collection.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lotus Divider */}
      <LotusDivider className="mb-16 lg:mb-20" />

      {/* Other Collections */}
      <section className="container relative pb-20 lg:pb-32">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
              More Collections
            </span>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-10 lg:gap-y-14 max-w-2xl mx-auto">
          {collections.slice(2).map((collection, idx) => (
            <ScrollReveal key={collection.href} delay={idx * 75}>
              <Link href={collection.href} className="block group">
                <div className="kashmir-card p-0 overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden bg-[#E5E5E5] mb-4 relative">
                    <img 
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gold corner on hover */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h3 
                  className="text-[14px] lg:text-[15px] font-light mb-1.5 text-gray-800 group-hover:text-[#1B4332] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {collection.title}
                </h3>
                <p className="text-[11px] lg:text-[12px] text-gray-500 line-clamp-2">{collection.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* Mountain silhouette */}
      <MountainSilhouette className="opacity-30" />
    </main>
  );
}
