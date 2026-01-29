import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="pt-20 lg:pt-32">
      {/* Hero */}
      <section className="container py-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-4 lg:mb-6">
            Our Story
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-light tracking-tight leading-tight">
            Reviving the forgotten threads of Kashmiri tradition
          </h1>
        </div>
      </section>

      {/* Intro Image */}
      <section className="container pb-10 lg:pb-24">
        <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1920&auto=format&fit=crop"
            alt="Kashmiri artisan at work"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Story Text */}
      <section className="container pb-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400">
              Est. 2018
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base lg:text-xl font-light leading-relaxed text-gray-700 mb-6 lg:mb-8">
              Mawal Couture was born from a dream — to revive the forgotten threads 
              of Kashmiri tradition and culture. What started as a vision has grown 
              into a brand admired beyond the valley, across Bollywood, and around the globe.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
              Every piece at Mawal Couture is a testament to the skill of Kashmir&apos;s 
              master artisans. From hand-woven pashmina to intricate tilla embroidery, 
              our garments carry centuries of technique and tradition. We work directly 
              with artisan families, ensuring fair compensation and sustainable livelihoods.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-600">
              Our commitment goes beyond fashion. Through initiatives like Project Matamaal, 
              we breathe new life into heirloom garments, reducing waste while preserving heritage. 
              Each piece tells a story of craftsmanship, patience, and cultural pride.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8f6f3] py-16 lg:py-32">
        <div className="container">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 text-center mb-10 lg:mb-16">
            Our Values
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-base lg:text-lg font-medium mb-3 lg:mb-4">Authenticity</h3>
              <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">
                Every garment is genuinely handcrafted in Kashmir using traditional 
                techniques. We never compromise on origin or method.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-base lg:text-lg font-medium mb-3 lg:mb-4">Artisan Welfare</h3>
              <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">
                We work directly with artisan families, ensuring fair compensation 
                and sustainable livelihoods for the craftspeople behind our pieces.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-base lg:text-lg font-medium mb-3 lg:mb-4">Sustainability</h3>
              <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">
                Through initiatives like Project Matamaal, we breathe new life 
                into heirloom garments, reducing waste while preserving heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=600&auto=format&fit=crop"
                alt="Pashmina weaving"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop"
                alt="Fashion detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 col-span-2 lg:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop"
                alt="Artisan work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111] py-16 lg:py-28">
        <div className="container text-center px-6">
          <h2 className="text-xl lg:text-3xl font-light text-white mb-6 lg:mb-8">
            Experience our craft
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-4 text-[11px] font-medium tracking-[0.15em] uppercase text-white border border-white/30 hover:bg-white hover:text-black transition-colors"
            >
              Shop Collection
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-[11px] font-medium tracking-[0.15em] uppercase text-white border border-white/30 hover:bg-white hover:text-black transition-colors"
            >
              Visit Store
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
