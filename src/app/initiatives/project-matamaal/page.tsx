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

export default function ProjectMatamaalPage() {
  return (
    <main className="pt-24 lg:pt-36 bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />

      {/* Decorative */}
      <div className="absolute top-40 right-10 opacity-10 hidden lg:block">
        <PaisleySVG size={120} color="#722F37" />
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
              <LotusSVG size={24} color="#D4AF37" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Heritage Restoration
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent max-w-[200px]" />
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-light tracking-tight leading-tight text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Project <span className="text-[#722F37]">Matamaal</span>
            </h1>
            <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed max-w-2xl">
              Breathing new life into heirloom garments, one stitch at a time.
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
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1920&auto=format&fit=crop"
                alt="Project Matamaal"
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
                <KashmirStat number="200+" label="Pieces Restored" />
                <KashmirStat number="30+" label="Artisans Trained" />
                <KashmirStat number="100%" label="Heritage Preserved" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              <p
                className="text-xl lg:text-2xl font-light leading-relaxed text-gray-800 mb-8 drop-cap"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                &ldquo;Matamaal&rdquo; means grandmother&apos;s house in Kashmiri &mdash; a place where
                treasured garments are stored and stories are passed down through generations.
              </p>

              <p className="text-[14px] lg:text-[15px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
                Project Matamaal is our restoration initiative that transforms these treasured
                family pieces into contemporary garments. We carefully restore vintage pherans,
                shawls, and embroidered pieces, preserving their heritage value while giving
                them new life for modern wardrobes.
              </p>

              <p className="text-[14px] lg:text-[15px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
                Each restored piece comes with a certificate documenting its history, the
                restoration process, and the artisans who worked on it. This creates a
                bridge between generations &mdash; honoring the past while embracing the future.
              </p>

              <p className="text-[14px] lg:text-[15px] leading-relaxed text-gray-600">
                Through Matamaal, we&apos;ve restored over 200 heirloom pieces, reducing textile
                waste while preserving invaluable cultural artifacts. The initiative also
                provides specialized training for young artisans in traditional restoration
                techniques.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 chinar-pattern-bg opacity-30" />

        <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
          <ChinarLeafSVG size={150} color="#722F37" />
        </div>

        <div className="container relative">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <KashmirQuote author="Project Matamaal">
                Every heirloom carries the warmth of the hands that wove it
                and the love of those who wore it. Our work is simply to
                ensure these stories continue.
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
              Have an heirloom to restore?
            </h3>
            <p className="text-[13px] text-white/60 mb-8 max-w-md mx-auto">
              Contact us to learn more about our restoration services and bring
              your family&apos;s treasured pieces back to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="btn btn-kashmir">
                Get in Touch
              </Link>
              <Link href="/products?collection=matamaal" className="btn btn-outline">
                View Restored Pieces
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
