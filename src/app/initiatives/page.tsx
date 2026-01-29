import Link from 'next/link';

export default function InitiativesPage() {
  return (
    <main className="pt-20 lg:pt-32">
      {/* Hero */}
      <section className="container py-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-4 lg:mb-6">
            Initiatives
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-light tracking-tight leading-tight mb-6 lg:mb-8">
            Sustainability and Craft Revival
          </h1>
          <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
            Beyond fashion, we are committed to preserving Kashmir&apos;s artisan heritage 
            and promoting sustainable practices that honor both people and planet.
          </p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="container pb-16 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {/* Project Matamaal */}
          <Link href="/initiatives/project-matamaal" className="block group">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4 lg:mb-6">
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop"
                alt="Project Matamaal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-2">
              Project Matamaal
            </p>
            <h2 className="text-lg lg:text-xl font-light mb-2 lg:mb-3">
              Breathing new life into heirloom garments
            </h2>
            <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed mb-4">
              A restoration initiative that transforms treasured family pieces into 
              contemporary garments while preserving their heritage value.
            </p>
            <span className="inline-flex items-center h-12 gap-2 text-[11px] font-medium tracking-[0.15em] uppercase group-hover:opacity-60 transition-opacity">
              Learn More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>

          {/* Golden Hands */}
          <Link href="/initiatives/golden-hands" className="block group">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-4 lg:mb-6">
              <img 
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop"
                alt="The Golden Hands of Kashmir"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-2">
              The Golden Hands of Kashmir
            </p>
            <h2 className="text-lg lg:text-xl font-light mb-2 lg:mb-3">
              Supporting artisans who bring craft to life
            </h2>
            <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed mb-4">
              A program dedicated to empowering Kashmir&apos;s master craftspeople through 
              fair wages, training, and global recognition.
            </p>
            <span className="inline-flex items-center h-12 gap-2 text-[11px] font-medium tracking-[0.15em] uppercase group-hover:opacity-60 transition-opacity">
              Learn More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
