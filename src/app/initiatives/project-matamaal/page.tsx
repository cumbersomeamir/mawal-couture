import Link from 'next/link';

export default function ProjectMatamaalPage() {
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
            <p className="text-xs tracking-[0.3em] uppercase mb-4">Initiative</p>
            <h1 className="text-display">Project Matamaal</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl mb-8 text-center">
              Breathing new life into heirloom garments
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Project Matamaal (meaning &quot;grandmother&apos;s home&quot; in Kashmiri) is our heartfelt initiative 
                to restore and revive vintage Kashmiri textiles that have been passed down through generations.
              </p>

              <p>
                In many Kashmiri homes, families treasure heirloom pieces — pashmina shawls, pherans, 
                and embroidered textiles — that hold deep sentimental value. Over time, these precious 
                garments may develop tears, moth damage, or fading that renders them unwearable.
              </p>

              <h3>Our Mission</h3>
              <p>
                We believe these textile treasures deserve to be preserved and enjoyed, not forgotten 
                in storage. Our team of master artisans carefully examines each piece, identifying the 
                original techniques used and developing restoration plans that honor the garment&apos;s heritage.
              </p>

              <h3>The Process</h3>
              <ul>
                <li>Careful assessment of the garment&apos;s condition and historical significance</li>
                <li>Gentle cleaning using traditional methods</li>
                <li>Repair of tears and damage using period-appropriate techniques</li>
                <li>Re-embroidery to match original patterns where needed</li>
                <li>Final preservation treatment to protect against future damage</li>
              </ul>

              <h3>Community Impact</h3>
              <p>
                Project Matamaal provides meaningful employment to skilled artisans who specialize in 
                traditional restoration techniques. By preserving these skills, we ensure they can be 
                passed on to future generations.
              </p>

              <p>
                Each restored piece tells a story — of the family who owned it, the artisan who created 
                it, and now the craftsmen who have given it new life. We document these stories as part 
                of our commitment to preserving Kashmir&apos;s textile heritage.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="btn-primary">
                INQUIRE ABOUT RESTORATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="font-serif text-2xl text-center mb-12">Restoration Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=600&auto=format&fit=crop"
                alt="Restored piece 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop"
                alt="Restored piece 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop"
                alt="Restored piece 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
