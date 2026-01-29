import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <HeroCarousel />

      {/* New Arrivals - Editorial Layout */}
      <section className="py-20 lg:py-32">
        <div className="container">
          {/* Section Label */}
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-16">
            New Arrivals
          </p>

          {/* Women's Collection - Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24">
            {/* Left - Large Image */}
            <div className="lg:col-span-5">
              <Link href="/products?collection=winter-edit-2025-26&gender=woman" className="block group">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop"
                    alt="Women's Winter Collection"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>

            {/* Right - Text + Image */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="mb-8 lg:mb-12 lg:max-w-md">
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-6">
                  The Latest Women&apos;s Winter Collection 2025/26
                </h2>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  This winter collection is rooted in fine wool and timeless form.
                  Vintage motifs, symbolic elements, and hand-detailed craftsmanship shape each silhouette.
                  From classic pherans to layered winter pieces, every design carries quiet elegance and warmth.
                  A collection where heritage meets modern winter dressing.
                </p>
              </div>
              
              <Link href="/products?collection=winter-edit-2025-26&gender=woman" className="block group flex-1">
                <div className="h-full min-h-[400px] lg:min-h-0 overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
                    alt="Winter Collection Detail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Men's Collection - Centered Layout */}
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-6">
              The Latest Men&apos;s Winter Collection 2025/26
            </h2>
            <p className="text-[13px] leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Designed for men, this winter collection is built on structure, warmth, and restraint.
              Crafted in premium wool, each piece reflects timeless silhouettes and functional elegance.
              Subtle motifs and heritage detailing add depth without excess.
              A modern winter wardrobe grounded in tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <Link href="/products?collection=winter-edit-2025-26&gender=man" className="block group">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
                  alt="Men's Winter Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
            <Link href="/products?collection=vanguard-pherans&gender=man" className="block group">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop"
                  alt="Men's Vanguard Pherans"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link 
              href="/products?gender=man" 
              className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Pashmina - Full Width Editorial */}
      <section className="relative bg-[#f8f6f3] py-20 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-6">
                Heritage Craft
              </p>
              <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-8 leading-tight">
                Pure Pashmina
              </h2>
              <p className="text-[13px] leading-relaxed text-gray-600 mb-8 max-w-md">
                Handwoven from the finest Himalayan cashmere by master artisans in Kashmir. 
                Each piece takes months to complete, carrying generations of technique and an 
                unmistakable softness that only authentic pashmina can offer.
              </p>
              <Link 
                href="/products?collection=pure-pashmina" 
                className="inline-block text-[11px] font-medium tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
              >
                Discover Collection
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <Link href="/products?collection=pure-pashmina" className="block group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop"
                    alt="Pure Pashmina"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections - 3 Column Cards */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-4">
              Collections
            </p>
            <h2 className="text-2xl lg:text-3xl font-light tracking-tight">
              Explore Our World
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Link href="/products?collection=festive-edit-2025-26&gender=woman" className="block group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
                  alt="The Festive Edit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">The Festive Edit</h3>
              <p className="text-[12px] text-gray-500">Celebration wear</p>
            </Link>

            <Link href="/products?collection=khandar&gender=woman" className="block group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=600&auto=format&fit=crop"
                  alt="Khandar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">Khandar</h3>
              <p className="text-[12px] text-gray-500">Heritage patterns</p>
            </Link>

            <Link href="/products?collection=velvets&gender=woman" className="block group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop"
                  alt="Velvets"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">Velvets</h3>
              <p className="text-[12px] text-gray-500">Luxurious textures</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Initiatives - Dark Section */}
      <section className="bg-[#1a1a1a] py-16 lg:py-32">
        <div className="container">
          <div className="text-center mb-10 lg:mb-16">
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-3 lg:mb-4">
              Initiatives
            </p>
            <h2 className="text-xl lg:text-3xl font-light tracking-tight text-white italic">
              Sustainability and Craft Revival
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Project Matamaal */}
            <Link href="/initiatives/project-matamaal" className="block group relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
                  alt="Project Matamaal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-5 lg:p-8 flex flex-col">
                  <div>
                    <p className="text-[9px] lg:text-[10px] font-medium tracking-[0.2em] uppercase text-white/70 mb-1 lg:mb-2">
                      Project Matamaal
                    </p>
                    <p className="text-[13px] lg:text-sm text-white/90">
                      Breathing new life into heirloom garments
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-flex items-center h-10 gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-white/80 group-hover:text-white transition-colors">
                      Read More
                      <span className="w-6 lg:w-8 h-px bg-white/60 group-hover:w-10 lg:group-hover:w-12 transition-all" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Golden Hands */}
            <Link href="/initiatives/golden-hands" className="block group relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop"
                  alt="The Golden Hands of Kashmir"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 p-5 lg:p-8 flex flex-col">
                  <div>
                    <p className="text-[9px] lg:text-[10px] font-medium tracking-[0.2em] uppercase text-white/70 mb-1 lg:mb-2">
                      The Golden Hands of Kashmir
                    </p>
                    <p className="text-[13px] lg:text-sm text-white/90">
                      Supporting artisans who bring craft to life
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-flex items-center h-10 gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-white/80 group-hover:text-white transition-colors">
                      Read More
                      <span className="w-6 lg:w-8 h-px bg-white/60 group-hover:w-10 lg:group-hover:w-12 transition-all" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Quote Section */}
      <section className="py-16 lg:py-40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center px-4">
            <blockquote className="text-xl lg:text-4xl font-light leading-relaxed tracking-tight italic text-gray-800 mb-6 lg:mb-8">
              &ldquo;Every thread we weave carries the soul of Kashmir — 
              a legacy of artistry passed through generations, 
              now finding its way to wardrobes around the world.&rdquo;
            </blockquote>
            <p className="text-[10px] lg:text-[11px] font-medium tracking-[0.2em] uppercase text-gray-400">
              — The Mawal Story
            </p>
          </div>
        </div>
      </section>

      {/* Shop by Category - Horizontal Scroll */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="flex items-end justify-between mb-8 lg:mb-10">
            <div>
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-2">
                Shop
              </p>
              <h2 className="text-lg lg:text-2xl font-light tracking-tight">
                By Category
              </h2>
            </div>
            <Link 
              href="/products" 
              className="text-[11px] font-medium tracking-[0.15em] uppercase hover:opacity-60 transition-opacity"
            >
              View All
            </Link>
          </div>

          <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-hide">
            {[
              { name: "Pherans", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400", href: "/products?category=pherans" },
              { name: "Shawls", image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=400", href: "/products?category=shawls" },
              { name: "Kaftans", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400", href: "/products?category=kaftans" },
              { name: "Jackets", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400", href: "/products?category=jackets" },
              { name: "Accessories", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=400", href: "/products?category=accessories" },
            ].map((cat) => (
              <Link 
                key={cat.name}
                href={cat.href}
                className="flex-shrink-0 w-32 lg:w-48 group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-200 mb-2 lg:mb-3">
                  <img 
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] lg:text-[12px] font-medium text-center">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Minimal */}
      <section className="py-16 lg:py-28 border-t border-gray-200">
        <div className="container">
          <div className="max-w-md mx-auto text-center px-4">
            <h3 className="text-xl font-light mb-3">Stay in the loop</h3>
            <p className="text-[13px] text-gray-500 mb-6 lg:mb-8">
              Subscribe for early access to new collections and exclusive stories from Kashmir.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-3 border border-gray-300 text-[13px] focus:border-black focus:outline-none transition-colors min-h-[48px]"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-black text-white text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-gray-800 transition-colors min-h-[48px] sm:w-auto"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
