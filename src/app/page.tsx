import Link from 'next/link';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* New Arrivals - Women */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">New Arrivals</p>
          </div>
          <h2 className="text-display-sm text-center mb-6">
            The Latest Women&apos;s Winter Collection 2025/26
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            This winter collection is rooted in fine wool and timeless form.
            Vintage motifs, symbolic elements, and hand-detailed craftsmanship shape each silhouette.
            From classic pherans to layered winter pieces, every design carries quiet elegance and warmth.
            A collection where heritage meets modern winter dressing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Link href="/woman/winter-edit" className="group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop"
                  alt="Women's Winter Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <Link href="/woman/winter-edit" className="group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
                  alt="Festive Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <Link href="/woman/winter-edit" className="group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop"
                  alt="Heritage Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals - Men */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">New Arrivals</p>
          </div>
          <h2 className="text-display-sm text-center mb-6">
            The Latest Men&apos;s Winter Collection 2025/26
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Designed for men, this winter collection is built on structure, warmth, and restraint.
            Crafted in premium wool, each piece reflects timeless silhouettes and functional elegance.
            Subtle motifs and heritage detailing add depth without excess.
            A modern winter wardrobe grounded in tradition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Link href="/man/winter-edit" className="group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
                  alt="Men's Winter Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            <Link href="/man/winter-edit" className="group">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop"
                  alt="Men's Pheran Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link href="/man" className="btn-primary">
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Pashmina Shawls Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-2xl text-white">
            <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/80">
              New Collection of Pure and Handwoven
            </p>
            <h2 className="text-display-sm mb-6">Pashmina Shawls</h2>
            <p className="text-white/90 leading-relaxed mb-8">
              Each piece crafted by the region&apos;s most distinguished artisans. 
              Their mastery evident in every fine stitch and weave.
              <br /><br />
              A MAWAL COUTURE PASHMINA IS UNDENIABLY AUTHENTIC.
            </p>
            <Link href="/products" className="btn-outline">
              EXPLORE
            </Link>
          </div>
        </div>
      </section>

      {/* Pashmina Stoles */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1503342394128-480259e0d7d2?q=80&w=1000&auto=format&fit=crop"
                alt="Pashmina Stoles"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
                New Arrivals
              </p>
              <h2 className="text-display-sm mb-6">Pashmina Stoles</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                In unique Mawal Couture style, hand embroideries, stripes, and checks.
              </p>
              <Link href="/products?category=stoles" className="btn-primary">
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Men Pashmina Shawls */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
                Latest from Mawal Couture Man
              </p>
              <h2 className="text-display-sm mb-6">Man Pashmina Shawls</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                A selection exclusively designed for men.
              </p>
              <Link href="/man?category=shawls" className="btn-primary">
                BROWSE TRENDSETTERS
              </Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
                alt="Men Pashmina Shawls"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container text-center">
          <h2 className="text-display-sm mb-6">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Mawal Couture is a dream to revive the forgotten threads of Kashmiri tradition and culture.
          </p>
          <Link href="/about" className="btn-primary">
            OUR ORIGINS
          </Link>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl mb-4">
              Born as a vision, now a brand admired beyond the valley, Bollywood, & across the globe.
            </h3>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
              Initiatives
            </p>
            <h2 className="text-display-sm">Sustainability and Craft Revival</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Matamaal */}
            <div className="bg-white p-8 lg:p-12">
              <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
                Project Matamaal
              </p>
              <h3 className="font-serif text-2xl mb-4">
                Breathing new life into heirloom garments
              </h3>
              <Link href="/initiatives/project-matamaal" className="inline-block mt-4 text-sm underline hover:no-underline">
                READ MORE
              </Link>
            </div>

            {/* Golden Hands */}
            <div className="bg-white p-8 lg:p-12">
              <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
                The Golden Hands of Kashmir
              </p>
              <h3 className="font-serif text-2xl mb-4">
                Supporting artisans who bring craft to life
              </h3>
              <Link href="/initiatives/golden-hands" className="inline-block mt-4 text-sm underline hover:no-underline">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
