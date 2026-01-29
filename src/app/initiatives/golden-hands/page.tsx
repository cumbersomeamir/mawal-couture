import Link from 'next/link';

export default function GoldenHandsPage() {
  return (
    <main className="pt-20 lg:pt-32">
      {/* Hero */}
      <section className="container py-10 lg:py-24">
        <div className="max-w-3xl">
          <Link 
            href="/initiatives" 
            className="inline-flex items-center h-12 gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-black transition-colors mb-6 lg:mb-8"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Initiatives
          </Link>
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-4 lg:mb-6">
            Initiative
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light tracking-tight leading-tight">
            The Golden Hands of Kashmir
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container pb-10 lg:pb-24">
        <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1920&auto=format&fit=crop"
            alt="The Golden Hands of Kashmir"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="container pb-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400">
              Supporting artisans who bring craft to life
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base lg:text-xl font-light leading-relaxed text-gray-700 mb-6 lg:mb-8">
              Behind every Mawal piece are the skilled hands of Kashmir&apos;s master artisans — 
              craftspeople who have dedicated their lives to preserving centuries-old techniques.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
              The Golden Hands initiative is our commitment to these artisans. We work directly 
              with over 150 artisan families across Kashmir, ensuring fair wages, safe working 
              conditions, and opportunities for professional growth.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
              Through this program, we provide healthcare support, education scholarships for 
              artisans&apos; children, and training programs that help pass traditional skills to 
              the next generation. We also connect artisans with global platforms, giving their 
              work the recognition it deserves.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-600">
              When you purchase from Mawal, you&apos;re not just buying a garment — you&apos;re 
              supporting a living tradition and the families who keep it alive.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111] py-12 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div>
              <p className="text-2xl lg:text-4xl font-light text-white mb-1 lg:mb-2">150+</p>
              <p className="text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-gray-500">Artisan Families</p>
            </div>
            <div>
              <p className="text-2xl lg:text-4xl font-light text-white mb-1 lg:mb-2">50+</p>
              <p className="text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-gray-500">Scholarships</p>
            </div>
            <div>
              <p className="text-2xl lg:text-4xl font-light text-white mb-1 lg:mb-2">100%</p>
              <p className="text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-gray-500">Fair Wages</p>
            </div>
            <div>
              <p className="text-2xl lg:text-4xl font-light text-white mb-1 lg:mb-2">7</p>
              <p className="text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-gray-500">Years Running</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h3 className="text-lg lg:text-xl font-light mb-4">Support our artisans</h3>
            <p className="text-[12px] lg:text-[13px] text-gray-600 mb-6 lg:mb-8">
              Every purchase directly benefits our artisan community.
            </p>
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-black text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
