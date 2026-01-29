import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs tracking-[0.3em] uppercase mb-4">Discover</p>
            <h1 className="text-display">Our Story</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl mb-8">
              Mawal Couture is a dream to revive the forgotten threads of Kashmiri tradition and culture.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Born as a vision in the heart of Kashmir, Mawal Couture has grown to become a brand admired 
              beyond the valley, worn by Bollywood celebrities, and cherished across the globe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in preserving the rich heritage of Kashmiri craftsmanship while adapting it 
              for the modern world. Each piece tells a story of tradition, skill, and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1000&auto=format&fit=crop"
                alt="Kashmiri Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
                Our Heritage
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl mb-6">
                Preserving centuries-old traditions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kashmir has been renowned for its exquisite textiles for centuries. From the legendary 
                Pashmina shawls to intricate embroidery work, our artisans have perfected their craft 
                over generations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Mawal Couture, we work directly with these master craftsmen, ensuring fair wages 
                and sustainable practices while bringing their art to a global audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
              Our Values
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Authenticity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every piece we create is authentically Kashmiri, crafted using traditional techniques 
                and the finest materials.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Artisan Welfare</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We ensure fair compensation and safe working conditions for all the artisans 
                who bring our designs to life.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl mb-4">Sustainability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our commitment to sustainable practices ensures that our craft can be enjoyed 
                for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl lg:text-4xl mb-6">
            Experience Kashmiri Craftsmanship
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Visit our store or book an appointment to explore our collections and find 
            pieces that speak to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="btn-primary">
              EXPLORE COLLECTIONS
            </Link>
            <Link href="/contact" className="btn-outline border-primary text-primary hover:bg-primary hover:text-white">
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
