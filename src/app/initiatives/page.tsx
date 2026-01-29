"use client";
import Link from 'next/link';
import { 
  ChinarLeafSVG, 
  PaisleySVG,
  LotusSVG,
  EmbroideryLine, 
  ScrollReveal,
  KashmirQuote,
  MountainSilhouette 
} from '../../components/KashmirElements';

export default function InitiativesPage() {
  return (
    <main className="pt-24 lg:pt-36 bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 chinar-pattern-bg opacity-20 pointer-events-none" />
      
      {/* Hero */}
      <section className="container relative py-10 lg:py-24">
        <ScrollReveal>
          <div className="max-w-3xl">
            {/* Header decoration */}
            <div className="flex items-center gap-3 mb-6">
              <LotusSVG size={24} color="#D4AF37" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Initiatives
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent max-w-[200px]" />
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-6xl font-light tracking-tight leading-tight mb-6 lg:mb-8 text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Sustainability and <span className="text-[#722F37]">Craft Revival</span>
            </h1>
            <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed max-w-2xl">
              Beyond fashion, we are committed to preserving Kashmir&apos;s artisan heritage 
              and promoting sustainable practices that honor both people and planet.
            </p>
            
            <EmbroideryLine className="mt-8 max-w-[150px]" />
          </div>
        </ScrollReveal>
      </section>

      {/* Initiatives Grid */}
      <section className="container relative pb-20 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Project Matamaal */}
          <ScrollReveal>
            <Link href="/initiatives/project-matamaal" className="block group">
              <div className="relative">
                {/* Gold frame corners */}
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] z-10" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] z-10" />
                
                <div className="aspect-[4/3] overflow-hidden bg-[#E5E5E5] mb-6 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop"
                    alt="Project Matamaal"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#722F37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 kashmir-badge">
                    Heritage Restoration
                  </div>
                </div>
              </div>
              
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-3 flex items-center gap-2">
                <span>◆</span> Project Matamaal
              </p>
              <h2 
                className="text-xl lg:text-2xl font-light mb-3 text-gray-900 group-hover:text-[#722F37] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Breathing new life into heirloom garments
              </h2>
              <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed mb-5">
                A restoration initiative that transforms treasured family pieces into 
                contemporary garments while preserving their heritage value.
              </p>
              <span className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#722F37] group-hover:text-[#D4AF37] transition-colors">
                Learn More
                <span className="w-6 h-px bg-current group-hover:w-10 transition-all" />
              </span>
            </Link>
          </ScrollReveal>

          {/* Golden Hands */}
          <ScrollReveal delay={100}>
            <Link href="/initiatives/golden-hands" className="block group">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] z-10" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] z-10" />
                
                <div className="aspect-[4/3] overflow-hidden bg-[#E5E5E5] mb-6 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop"
                    alt="The Golden Hands of Kashmir"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#722F37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 left-4 kashmir-badge">
                    Artisan Support
                  </div>
                </div>
              </div>
              
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-3 flex items-center gap-2">
                <span>◆</span> The Golden Hands of Kashmir
              </p>
              <h2 
                className="text-xl lg:text-2xl font-light mb-3 text-gray-900 group-hover:text-[#722F37] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Supporting artisans who bring craft to life
              </h2>
              <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed mb-5">
                A program dedicated to empowering Kashmir&apos;s master craftspeople through 
                fair wages, training, and global recognition.
              </p>
              <span className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#722F37] group-hover:text-[#D4AF37] transition-colors">
                Learn More
                <span className="w-6 h-px bg-current group-hover:w-10 transition-all" />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 kashmir-pattern-bg opacity-30" />
        
        <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
          <ChinarLeafSVG size={150} color="#722F37" />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block -scale-x-100">
          <ChinarLeafSVG size={150} color="#722F37" />
        </div>
        
        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <KashmirQuote author="Our Commitment">
                True luxury lies not in the garment itself, but in the hands that craft it 
                and the heritage it carries forward.
              </KashmirQuote>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Mountain silhouette */}
      <MountainSilhouette className="opacity-30" />
    </main>
  );
}
