"use client";
import Link from 'next/link';
import {
  ChinarLeafSVG,
  PaisleySVG,
  LotusSVG,
  EmbroideryLine,
  ScrollReveal,
  KashmirQuote,
  LotusDivider,
  MountainSilhouette
} from '../../components/KashmirElements';

const collections = [
  {
    title: "Winter Edit 2025/26",
    description: "Structured silhouettes in fine wool and timeless form.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=winter-edit-2025-26&gender=woman"
  },
  {
    title: "The Festive Edit",
    description: "From Diwali lights to winter weddings.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=festive-edit-2025-26&gender=woman"
  },
  {
    title: "Pure Pashmina",
    description: "Handwoven from the finest Himalayan cashmere.",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=pure-pashmina&gender=woman"
  },
  {
    title: "Khandar",
    description: "Traditional patterns embodying centuries of heritage.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=khandar&gender=woman"
  },
  {
    title: "Velvets",
    description: "Luxurious textures with hand-embroidered details.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=velvets&gender=woman"
  },
  {
    title: "Kaftan",
    description: "Flowing silhouettes with Kashmiri embroidery.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=kaftan&gender=woman"
  }
];

export default function WomanPage() {
  return (
    <main className="pt-24 lg:pt-36 bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />
      
      {/* Decorative Paisley */}
      <div className="absolute top-40 right-10 opacity-10 hidden lg:block">
        <PaisleySVG size={120} color="#722F37" />
      </div>
      
      {/* Hero */}
      <section className="container relative py-8 lg:py-20">
        <ScrollReveal>
          <div className="max-w-2xl">
            {/* Label with decoration */}
            <div className="flex items-center gap-3 mb-4">
              <ChinarLeafSVG size={18} color="#722F37" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Collections
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </div>
            
            <h1 
              className="text-4xl lg:text-7xl font-light tracking-tight mb-5 lg:mb-6 text-[#722F37]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Woman
            </h1>
            <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed max-w-lg">
              A curated selection of handcrafted pieces rooted in Kashmiri tradition. 
              Each garment carries the warmth of heritage and the elegance of modern design.
            </p>
            
            <EmbroideryLine className="mt-8 max-w-[150px]" />
          </div>
        </ScrollReveal>
      </section>

      {/* View All Button */}
      <section className="container relative pb-12 lg:pb-16">
        <ScrollReveal delay={100}>
          <Link 
            href="/products?gender=woman" 
            className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#722F37] hover:text-[#D4AF37] transition-colors"
          >
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            View All Products
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
          </Link>
        </ScrollReveal>
      </section>

      {/* Featured - Asymmetric Layout */}
      <section className="container relative pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Large Left */}
          <ScrollReveal className="lg:col-span-7">
            <Link href={collections[0].href} className="block group relative">
              {/* Gold corner accent */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37] opacity-60 z-10" />
              
              <div className="aspect-[4/5] overflow-hidden bg-[#E5E5E5] mb-5 relative">
                <img 
                  src={collections[0].image}
                  alt={collections[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#722F37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 kashmir-badge">
                  New Season
                </div>
              </div>
              
              <h2 
                className="text-xl lg:text-2xl font-light mb-2 text-gray-900 group-hover:text-[#722F37] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {collections[0].title}
              </h2>
              <p className="text-[13px] text-gray-500">{collections[0].description}</p>
            </Link>
          </ScrollReveal>

          {/* Right Column */}
          <ScrollReveal delay={100} className="lg:col-span-5">
            <Link href={collections[1].href} className="block group relative">
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37] opacity-60 z-10" />
              
              <div className="aspect-[4/5] overflow-hidden bg-[#E5E5E5] mb-5 relative">
                <img 
                  src={collections[1].image}
                  alt={collections[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#722F37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <h2 
                className="text-xl lg:text-2xl font-light mb-2 text-gray-900 group-hover:text-[#722F37] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {collections[1].title}
              </h2>
              <p className="text-[13px] text-gray-500">{collections[1].description}</p>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Lotus Divider */}
      <LotusDivider className="mb-16 lg:mb-20" />

      {/* Grid Collections */}
      <section className="container relative pb-20 lg:pb-32">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
              More Collections
            </span>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-10 lg:gap-y-14">
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
                  className="text-[14px] lg:text-[15px] font-light mb-1.5 text-gray-800 group-hover:text-[#722F37] transition-colors"
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
      
      {/* Quote Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 chinar-pattern-bg opacity-30" />
        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <KashmirQuote author="Mawal Couture">
                Each garment carries the warmth of Kashmir&apos;s heritage and the elegance
                of modern design &mdash; woven by hands that have perfected their craft
                over generations.
              </KashmirQuote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-kashmir-dark">
        <div className="absolute inset-0 kashmir-pattern-bg opacity-5 pointer-events-none" />
        <MountainSilhouette className="opacity-20" />

        <div className="container relative text-center px-6">
          <ScrollReveal>
            <LotusSVG size={45} color="#D4AF37" className="mx-auto mb-6 animate-float" />

            <h2
              className="text-2xl lg:text-4xl font-light text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Explore the full collection
            </h2>
            <p className="text-[13px] text-white/60 mb-8 max-w-md mx-auto">
              Discover handcrafted pieces rooted in Kashmir&apos;s rich tradition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/products?gender=woman" className="btn btn-kashmir">
                Shop All Women
              </Link>
              <Link href="/about" className="btn btn-outline">
                Our Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
