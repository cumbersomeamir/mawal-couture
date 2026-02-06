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
} from '../../../components/KashmirElements';

export default function GoldenHandsPage() {
  return (
    <main className="pt-24 lg:pt-36 bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 chinar-pattern-bg opacity-20 pointer-events-none" />

      {/* Decorative */}
      <div className="absolute top-40 left-10 opacity-10 hidden lg:block rotate-180">
        <PaisleySVG size={120} color="#1B4332" />
      </div>

      {/* Hero */}
      <section className="container relative py-10 lg:py-24">
        <ScrollReveal>
          <Link
            href="/initiatives"
            className="inline-flex items-center h-12 gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-[#722F37] hover:text-[#D4AF37] transition-colors mb-6 lg:mb-8 group"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Initiatives
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <ChinarLeafSVG size={20} color="#D4AF37" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Artisan Support
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent max-w-[200px]" />
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-light tracking-tight leading-tight text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Golden Hands of <span className="text-[#722F37]">Kashmir</span>
            </h1>
            <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed max-w-2xl">
              Supporting the artisans who bring craft to life, ensuring their legacy endures.
            </p>

            <EmbroideryLine className="mt-8 max-w-[150px]" />
          </div>
        </ScrollReveal>
      </section>

      {/* Hero Image with Kashmir frame */}
      <section className="container relative pb-16 lg:pb-28">
        <ScrollReveal delay={100}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37] z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37] z-10" />

            <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[#E5E5E5]">
              <img
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1920&auto=format&fit=crop"
                alt="The Golden Hands of Kashmir"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Content */}
      <section className="container relative pb-16 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <ScrollReveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-6">
                About the Initiative
              </p>

              {/* Stats */}
              <div className="space-y-6 pt-6 border-t border-[#D4AF37]/20">
                <KashmirStat number="150+" label="Artisan Families" />
                <KashmirStat number="50+" label="Scholarships" />
                <KashmirStat number="7" label="Years Running" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <p
                className="text-xl lg:text-2xl font-light leading-relaxed text-gray-800 mb-8 drop-cap"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Behind every Mawal piece are the skilled hands of Kashmir&apos;s master artisans &mdash;
                craftspeople who have dedicated their lives to preserving centuries-old techniques.
              </p>

              <p className="text-[14px] lg:text-[15px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
                The Golden Hands initiative is our commitment to these artisans. We work directly
                with over 150 artisan families across Kashmir, ensuring fair wages, safe working
                conditions, and opportunities for professional growth.
              </p>

              <p className="text-[14px] lg:text-[15px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
                Through this program, we provide healthcare support, education scholarships for
                artisans&apos; children, and training programs that help pass traditional skills to
                the next generation. We also connect artisans with global platforms, giving their
                work the recognition it deserves.
              </p>

              <p className="text-[14px] lg:text-[15px] leading-relaxed text-gray-600">
                When you purchase from Mawal, you&apos;re not just buying a garment &mdash; you&apos;re
                supporting a living tradition and the families who keep it alive.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section - Kashmir dark */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-kashmir-dark">
        <div className="absolute inset-0 kashmir-pattern-bg opacity-5 pointer-events-none" />

        <div className="container relative">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
              {[
                { number: "150+", label: "Artisan Families" },
                { number: "50+", label: "Scholarships" },
                { number: "100%", label: "Fair Wages" },
                { number: "7", label: "Years Running" }
              ].map((stat, idx) => (
                <ScrollReveal key={stat.label} delay={idx * 75}>
                  <div>
                    <p
                      className="text-3xl lg:text-5xl font-light text-[#D4AF37] mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {stat.number}
                    </p>
                    <p className="text-[10px] lg:text-[11px] tracking-[0.2em] uppercase text-white/50">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 kashmir-pattern-bg opacity-30" />

        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block -scale-x-100">
          <PaisleySVG size={150} color="#722F37" />
        </div>

        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <KashmirQuote author="Golden Hands Initiative">
                True luxury lies not in the garment itself, but in the hands that craft it
                and the heritage it carries forward.
              </KashmirQuote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lotus Divider */}
      <LotusDivider />

      {/* CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-kashmir-dark">
        <div className="absolute inset-0 kashmir-pattern-bg opacity-5 pointer-events-none" />
        <MountainSilhouette className="opacity-20" />

        <div className="container relative text-center px-6">
          <ScrollReveal>
            <LotusSVG size={45} color="#D4AF37" className="mx-auto mb-6 animate-float" />

            <h3
              className="text-xl lg:text-3xl font-light mb-4 text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Support our artisans
            </h3>
            <p className="text-[13px] text-white/60 mb-8 max-w-md mx-auto">
              Every purchase directly benefits our artisan community and helps
              preserve Kashmir&apos;s living heritage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/products" className="btn btn-kashmir">
                Shop Collection
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
