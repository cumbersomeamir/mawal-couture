import Link from 'next/link';

export default function GoldenHandsPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503342394128-480259e0d7d2?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs tracking-[0.3em] uppercase mb-4">Initiative</p>
            <h1 className="text-display">The Golden Hands of Kashmir</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl mb-8 text-center">
              Supporting artisans who bring craft to life
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                The Golden Hands of Kashmir is our program dedicated to supporting and celebrating 
                the master artisans of the valley. These skilled craftsmen have devoted their lives 
                to perfecting traditional techniques that have been passed down for centuries.
              </p>

              <p>
                In an era of mass production, the value of handcrafted textiles cannot be overstated. 
                Each piece created by our artisans represents hundreds of hours of skilled labor, 
                deep cultural knowledge, and an unwavering commitment to quality.
              </p>

              <h3>Our Commitment</h3>
              <p>
                We believe that artisans deserve fair compensation for their extraordinary skills. 
                Unlike traditional supply chains that often exploit craftspeople, we work directly 
                with artisans, ensuring they receive wages that reflect the true value of their work.
              </p>

              <h3>What We Provide</h3>
              <ul>
                <li>Fair, transparent wages that exceed industry standards</li>
                <li>Healthcare coverage for artisans and their families</li>
                <li>Safe, well-equipped workshops</li>
                <li>Skill development and training programs</li>
                <li>Documentation and preservation of traditional techniques</li>
                <li>Educational support for artisans&apos; children</li>
              </ul>

              <h3>Preserving Knowledge</h3>
              <p>
                Many traditional Kashmiri textile techniques are in danger of being lost as younger 
                generations pursue other careers. Through The Golden Hands program, we document these 
                techniques through video and written records, and we support apprenticeship programs 
                that connect master artisans with young learners.
              </p>

              <h3>Meet Our Artisans</h3>
              <p>
                Our artisan community includes master weavers, embroiderers, dyers, and finishers — 
                each bringing unique skills to the creation of our pieces. Many have been practicing 
                their craft for 30, 40, or even 50 years.
              </p>

              <p>
                When you purchase from Mawal Couture, you&apos;re not just buying a beautiful garment — 
                you&apos;re supporting real families and helping preserve an irreplaceable cultural heritage.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link href="/products" className="btn-primary">
                SHOP ARTISAN-MADE PIECES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Profiles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="font-serif text-2xl text-center mb-12">Our Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&auto=format&fit=crop"
                  alt="Master Artisan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-2">Master Weaver</h3>
              <p className="text-sm text-gray-600">
                40 years of experience in traditional pashmina weaving
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
                  alt="Embroidery Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-2">Embroidery Specialist</h3>
              <p className="text-sm text-gray-600">
                Specialist in tilla and sozni embroidery techniques
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1480429370612-d16e28c8eb29?q=80&w=400&auto=format&fit=crop"
                  alt="Dye Master"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-2">Dye Master</h3>
              <p className="text-sm text-gray-600">
                Expert in natural dyeing using traditional Kashmiri methods
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
