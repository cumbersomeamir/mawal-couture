import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';
import { 
  EmbroideryLine, 
  LotusDivider, 
  KashmirQuote, 
  KashmirSectionHeader,
  ScrollReveal,
  MountainSilhouette,
  PaisleySVG,
  ChinarLeafSVG,
  LotusSVG
} from '../components/KashmirElements';

export default function Home() {
  return (
    <main className="bg-kashmir-gradient relative">
      
      {/* Hero */}
      <HeroCarousel />

      {/* New Arrivals - Editorial Layout with Kashmir touches */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 kashmir-pattern-bg opacity-30 pointer-events-none" />
        
        <div className="container relative">
          {/* Section Header with Kashmir styling */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-16">
              <ChinarLeafSVG size={24} color="#722F37" />
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-kashmir-burgundy">
                New Arrivals
              </p>
              <div className="flex-1 h-px bg-gradient-to-r from-kashmir-gold/50 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Women's Collection - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-32">
            {/* Left - Large Image with Kashmir border */}
            <ScrollReveal className="lg:col-span-5">
              <Link href="/products?collection=winter-edit-2025-26&gender=woman" className="block group relative">
                {/* Gold corner accent */}
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-kashmir-gold opacity-60 z-10" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-kashmir-gold opacity-60 z-10" />
                
                <div className="aspect-[3/4] overflow-hidden bg-kashmir-ivory">
                  <img 
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop"
                    alt="Women's Winter Collection"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Hover overlay with paisley */}
                <div className="absolute inset-0 bg-kashmir-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <PaisleySVG size={60} color="#D4AF37" className="animate-pulse-gold" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Right - Text + Image */}
            <div className="lg:col-span-7 flex flex-col">
              <ScrollReveal delay={100} className="mb-8 lg:mb-12 lg:max-w-lg">
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                  The Latest Women&apos;s Winter Collection 2025/26
                </h2>
                <p className="text-[14px] leading-relaxed text-gray-600 drop-cap">
                  This winter collection is rooted in fine wool and timeless form.
                  Vintage motifs, symbolic elements, and hand-detailed craftsmanship shape each silhouette.
                  From classic pherans to layered winter pieces, every design carries quiet elegance and warmth.
                  A collection where heritage meets modern winter dressing.
                </p>
                <EmbroideryLine className="mt-6 max-w-[150px]" />
              </ScrollReveal>
              
              <ScrollReveal delay={200} className="flex-1">
                <Link href="/products?collection=winter-edit-2025-26&gender=woman" className="block group h-full">
                  <div className="h-full min-h-[400px] lg:min-h-0 overflow-hidden bg-kashmir-ivory relative">
                    <img 
                      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
                      alt="Winter Collection Detail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Kashmir badge */}
                    <div className="absolute top-4 right-4 kashmir-badge">
                      Handcrafted
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Lotus Divider */}
          <LotusDivider className="mb-20" />

          {/* Men's Collection - Centered Layout */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
                The Latest Men&apos;s Winter Collection 2025/26
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Designed for men, this winter collection is built on structure, warmth, and restraint.
                Crafted in premium wool, each piece reflects timeless silhouettes and functional elegance.
                Subtle motifs and heritage detailing add depth without excess.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <ScrollReveal delay={100}>
              <Link href="/products?collection=winter-edit-2025-26&gender=man" className="block group">
                <div className="aspect-[4/5] overflow-hidden bg-kashmir-ivory relative">
                  <img 
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
                    alt="Men's Winter Collection"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gold corner on hover */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-kashmir-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link href="/products?collection=vanguard-pherans&gender=man" className="block group">
                <div className="aspect-[4/5] overflow-hidden bg-kashmir-ivory relative">
                  <img 
                    src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop"
                    alt="Men's Vanguard Pherans"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-kashmir-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal className="text-center">
            <Link 
              href="/products?gender=man" 
              className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase group"
            >
              <span className="w-8 h-px bg-kashmir-burgundy group-hover:w-12 transition-all" />
              <span className="text-kashmir-burgundy">Explore</span>
              <span className="w-8 h-px bg-kashmir-burgundy group-hover:w-12 transition-all" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Pashmina - Full Width Editorial with Kashmir styling */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-kashmir-ivory via-kashmir-cream to-kashmir-ivory" />
        
        {/* Decorative paisley corners */}
        <div className="absolute top-10 left-10 opacity-20">
          <PaisleySVG size={100} color="#722F37" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 rotate-180">
          <PaisleySVG size={100} color="#722F37" />
        </div>
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-kashmir-gold mb-4 flex items-center gap-2">
                <span>◆</span> Heritage Craft
              </p>
              <h2 className="text-4xl lg:text-6xl font-light tracking-tight mb-8 leading-tight text-kashmir-burgundy">
                Pure Pashmina
              </h2>
              <p className="text-[15px] leading-relaxed text-gray-700 mb-8 max-w-md">
                Handwoven from the finest Himalayan cashmere by master artisans in Kashmir. 
                Each piece takes months to complete, carrying generations of technique and an 
                unmistakable softness that only authentic pashmina can offer.
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {['100% Pure', 'Handwoven', 'Certified'].map((feature) => (
                  <div key={feature} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full border border-kashmir-gold flex items-center justify-center">
                      <LotusSVG size={20} color="#D4AF37" />
                    </div>
                    <span className="text-[10px] tracking-wider uppercase text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/products?collection=pure-pashmina" 
                className="btn btn-outline-dark"
              >
                Discover Collection
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="order-1 lg:order-2">
              <Link href="/products?collection=pure-pashmina" className="block group relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-kashmir-gold/30 pointer-events-none" />
                <div className="absolute -inset-8 border border-kashmir-burgundy/20 pointer-events-none" />
                
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop"
                    alt="Pure Pashmina"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Collections - 3 Column Cards with Kashmir cards */}
      <section className="py-24 lg:py-40 relative">
        <MountainSilhouette className="opacity-50" />
        
        <div className="container relative">
          <ScrollReveal>
            <KashmirSectionHeader 
              label="Collections"
              title="Explore Our World"
              description="Each collection tells a story of Kashmir's rich heritage, from festive celebrations to everyday elegance."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { 
                name: "The Festive Edit", 
                desc: "Celebration wear", 
                image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
                href: "/products?collection=festive-edit-2025-26&gender=woman"
              },
              { 
                name: "Khandar", 
                desc: "Heritage patterns", 
                image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=600&auto=format&fit=crop",
                href: "/products?collection=khandar&gender=woman"
              },
              { 
                name: "Velvets", 
                desc: "Luxurious textures", 
                image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop",
                href: "/products?collection=velvets&gender=woman"
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.name} delay={idx * 100}>
                <Link href={item.href} className="block group">
                  <div className="kashmir-card p-0 overflow-hidden">
                    <div className="aspect-[3/4] overflow-hidden bg-kashmir-ivory relative">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-light mb-1">{item.name}</h3>
                        <p className="text-[12px] text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives - Dark Section with Kashmir styling */}
      <section className="relative py-20 lg:py-40 overflow-hidden bg-kashmir-dark">
        {/* Paisley pattern overlay */}
        <div className="absolute inset-0 kashmir-pattern-bg opacity-5 pointer-events-none" />
        
        <div className="container relative">
          <ScrollReveal>
            <KashmirSectionHeader 
              label="Initiatives"
              title="Sustainability and Craft Revival"
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Project Matamaal */}
            <ScrollReveal delay={100}>
              <Link href="/initiatives/project-matamaal" className="block group relative">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
                    alt="Project Matamaal"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Kashmir corner decoration */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-kashmir-gold opacity-60" />
                  
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col">
                    <div>
                      <p className="text-[9px] lg:text-[10px] font-medium tracking-[0.25em] uppercase text-kashmir-gold mb-2">
                        Project Matamaal
                      </p>
                      <p className="text-base lg:text-lg text-white/90 font-light">
                        Breathing new life into heirloom garments
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-3">
                      <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-kashmir-gold">
                        Read More
                      </span>
                      <span className="w-8 h-px bg-kashmir-gold group-hover:w-16 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Golden Hands */}
            <ScrollReveal delay={200}>
              <Link href="/initiatives/golden-hands" className="block group relative">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop"
                    alt="The Golden Hands of Kashmir"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-kashmir-gold opacity-60" />
                  
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col">
                    <div>
                      <p className="text-[9px] lg:text-[10px] font-medium tracking-[0.25em] uppercase text-kashmir-gold mb-2">
                        The Golden Hands of Kashmir
                      </p>
                      <p className="text-base lg:text-lg text-white/90 font-light">
                        Supporting artisans who bring craft to life
                      </p>
                    </div>
                    <div className="mt-auto flex items-center gap-3">
                      <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-kashmir-gold">
                        Read More
                      </span>
                      <span className="w-8 h-px bg-kashmir-gold group-hover:w-16 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Quote Section - Kashmir Quote style */}
      <section className="py-20 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 chinar-pattern-bg opacity-30" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-10">
          <ChinarLeafSVG size={200} color="#722F37" />
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 -scale-x-100">
          <ChinarLeafSVG size={200} color="#722F37" />
        </div>
        
        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <KashmirQuote author="The Mawal Story">
                Every thread we weave carries the soul of Kashmir — 
                a legacy of artistry passed through generations, 
                now finding its way to wardrobes around the world.
              </KashmirQuote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Shop by Category - Horizontal Scroll with Kashmir styling */}
      <section className="py-16 lg:py-28 bg-kashmir-ivory">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-10 lg:mb-12">
              <div>
                <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-kashmir-gold mb-2 flex items-center gap-2">
                  <span>◆</span> Shop
                </p>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-gray-900">
                  By Category
                </h2>
              </div>
              <Link 
                href="/products" 
                className="text-[11px] font-medium tracking-[0.15em] uppercase text-kashmir-burgundy hover:text-kashmir-gold transition-colors flex items-center gap-2"
              >
                View All
                <span className="w-6 h-px bg-current" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="flex gap-6 lg:gap-8 overflow-x-auto pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-hide">
            {[
              { name: "Pherans", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400", href: "/products?category=pherans" },
              { name: "Shawls", image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=400", href: "/products?category=shawls" },
              { name: "Kaftans", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400", href: "/products?category=kaftans" },
              { name: "Jackets", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400", href: "/products?category=jackets" },
              { name: "Accessories", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=400", href: "/products?category=accessories" },
            ].map((cat, idx) => (
              <ScrollReveal key={cat.name} delay={idx * 50} className="flex-shrink-0 w-36 lg:w-52">
                <Link href={cat.href} className="block group">
                  <div className="aspect-[3/4] overflow-hidden bg-white mb-3 lg:mb-4 relative kashmir-card p-0">
                    <img 
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[12px] lg:text-[13px] font-medium text-center text-gray-800 group-hover:text-kashmir-burgundy transition-colors">
                    {cat.name}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Kashmir styling */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kashmir-cream to-kashmir-ivory" />
        
        {/* Decorative border top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kashmir-gold to-transparent" />
        
        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-lg mx-auto text-center px-4">
              <LotusSVG size={50} color="#D4AF37" className="mx-auto mb-6 animate-float" />
              
              <h3 className="text-2xl lg:text-3xl font-light mb-4 text-gray-900">Stay in the loop</h3>
              <p className="text-[14px] text-gray-600 mb-8">
                Subscribe for early access to new collections and exclusive stories from Kashmir.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-5 py-4 border border-kashmir-gold/30 bg-white text-[14px] focus:border-kashmir-gold focus:outline-none transition-colors min-h-[52px]"
                />
                <button 
                  type="submit" 
                  className="btn btn-kashmir min-h-[52px]"
                >
                  Join
                </button>
              </form>
              
              <EmbroideryLine className="mt-12 max-w-[200px] mx-auto" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
