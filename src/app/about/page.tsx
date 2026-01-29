"use client";
import Link from 'next/link';
import { 
  ChinarLeafSVG, 
  PaisleySVG,
  LotusSVG,
  EmbroideryLine, 
  ScrollReveal,
  KashmirQuote,
  KashmirStat,
  LotusDivider,
  MountainSilhouette 
} from '../../components/KashmirElements';

export default function AboutPage() {
  return (
    <main className="pt-24 lg:pt-36 bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />
      
      {/* Hero */}
      <section className="container relative py-10 lg:py-24">
        <ScrollReveal>
          <div className="max-w-4xl">
            {/* Label with decoration */}
            <div className="flex items-center gap-3 mb-6">
              <ChinarLeafSVG size={20} color="#722F37" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Our Story
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent max-w-[200px]" />
            </div>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-7xl font-light tracking-tight leading-tight text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Reviving the forgotten threads of <span className="text-[#722F37]">Kashmiri</span> tradition
            </h1>
            
            <EmbroideryLine className="max-w-[200px]" />
          </div>
        </ScrollReveal>
      </section>

      {/* Intro Image with Kashmir frame */}
      <section className="container pb-16 lg:pb-28">
        <ScrollReveal delay={100}>
          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37] z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37] z-10" />
            
            <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#E5E5E5]">
              <img 
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1920&auto=format&fit=crop"
                alt="Kashmiri artisan at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Story Text */}
      <section className="container pb-20 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <ScrollReveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
                Est. 2018
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-6">
                Srinagar, Kashmir
              </p>
              
              {/* Stats */}
              <div className="space-y-6 pt-6 border-t border-[#D4AF37]/20">
                <KashmirStat number="50+" label="Master Artisans" />
                <KashmirStat number="1000+" label="Pieces Created" />
                <KashmirStat number="6" label="Years of Heritage" />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100} className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <p 
                className="text-xl lg:text-2xl font-light leading-relaxed text-gray-800 mb-8 drop-cap"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Mawal Couture was born from a dream — to revive the forgotten threads 
                of Kashmiri tradition and culture. What started as a vision has grown 
                into a brand admired beyond the valley, across Bollywood, and around the globe.
              </p>
              
              <p className="text-[14px] lg:text-[15px] leading-relaxed text-gray-600 mb-6">
                Every piece at Mawal Couture is a testament to the skill of Kashmir&apos;s 
                master artisans. From hand-woven pashmina to intricate tilla embroidery, 
                our garments carry centuries of technique and tradition. We work directly 
                with artisan families, ensuring fair compensation and sustainable livelihoods.
              </p>
              
              <p className="text-[14px] lg:text-[15px] leading-relaxed text-gray-600 mb-8">
                Our commitment goes beyond fashion. Through initiatives like Project Matamaal, 
                we breathe new life into heirloom garments, reducing waste while preserving heritage. 
                Each piece tells a story of craftsmanship, patience, and cultural pride.
              </p>
              
              <Link 
                href="/initiatives" 
                className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase text-[#722F37] hover:text-[#D4AF37] transition-colors group"
              >
                <span>Explore Our Initiatives</span>
                <span className="w-6 h-px bg-current group-hover:w-10 transition-all" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kashmir Quote */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 chinar-pattern-bg opacity-30" />
        
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-10 hidden lg:block">
          <PaisleySVG size={150} color="#722F37" />
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 hidden lg:block -scale-x-100">
          <PaisleySVG size={150} color="#722F37" />
        </div>
        
        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <KashmirQuote author="The Mawal Philosophy">
                In every stitch lies the heartbeat of Kashmir — mountains that touch the sky, 
                lakes that mirror heaven, and hands that weave dreams into fabric.
              </KashmirQuote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-[#FBF9F4] to-[#F5F0E6] py-20 lg:py-36">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] flex items-center justify-center gap-2 mb-4">
                <span>◆</span> Our Values <span>◆</span>
              </span>
              <h2 
                className="text-3xl lg:text-4xl font-light text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                What We Stand For
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 max-w-5xl mx-auto">
            {[
              {
                icon: <ChinarLeafSVG size={32} color="#722F37" />,
                title: "Authenticity",
                desc: "Every garment is genuinely handcrafted in Kashmir using traditional techniques. We never compromise on origin or method."
              },
              {
                icon: <LotusSVG size={40} color="#D4AF37" />,
                title: "Artisan Welfare",
                desc: "We work directly with artisan families, ensuring fair compensation and sustainable livelihoods for the craftspeople behind our pieces."
              },
              {
                icon: <PaisleySVG size={36} color="#1B4332" />,
                title: "Sustainability",
                desc: "Through initiatives like Project Matamaal, we breathe new life into heirloom garments, reducing waste while preserving heritage."
              }
            ].map((value, idx) => (
              <ScrollReveal key={value.title} delay={idx * 100}>
                <div className="kashmir-card text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 
                    className="text-lg lg:text-xl font-light mb-4 text-gray-900"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lotus Divider */}
      <LotusDivider />

      {/* Image Grid */}
      <section className="py-16 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=600&auto=format&fit=crop", alt: "Pashmina weaving" },
              { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop", alt: "Fashion detail" },
              { src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop", alt: "Artisan work" },
            ].map((img, idx) => (
              <ScrollReveal 
                key={img.alt} 
                delay={idx * 75}
                className={idx === 2 ? "col-span-2 lg:col-span-1" : ""}
              >
                <div className="kashmir-card p-0 overflow-hidden group">
                  <div className="aspect-[3/4] overflow-hidden bg-[#E5E5E5]">
                    <img 
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-kashmir-dark">
        {/* Pattern overlay */}
        <div className="absolute inset-0 kashmir-pattern-bg opacity-5 pointer-events-none" />
        
        {/* Mountain silhouette */}
        <MountainSilhouette className="opacity-20" />
        
        <div className="container relative text-center px-6">
          <ScrollReveal>
            <LotusSVG size={50} color="#D4AF37" className="mx-auto mb-8 animate-float" />
            
            <h2 
              className="text-2xl lg:text-4xl font-light text-white mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Experience our craft
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link 
                href="/products" 
                className="btn btn-kashmir"
              >
                Shop Collection
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-outline"
              >
                Visit Store
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
