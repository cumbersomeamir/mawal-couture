import Link from 'next/link';

export default function ProjectMatamaalPage() {
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
            Project Matamaal
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container pb-10 lg:pb-24">
        <div className="aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1920&auto=format&fit=crop"
            alt="Project Matamaal"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="container pb-16 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400">
              Breathing new life into heirloom garments
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base lg:text-xl font-light leading-relaxed text-gray-700 mb-6 lg:mb-8">
              &ldquo;Matamaal&rdquo; means grandmother&apos;s house in Kashmiri — a place where 
              treasured garments are stored and stories are passed down through generations.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
              Project Matamaal is our restoration initiative that transforms these treasured 
              family pieces into contemporary garments. We carefully restore vintage pherans, 
              shawls, and embroidered pieces, preserving their heritage value while giving 
              them new life for modern wardrobes.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-600 mb-6 lg:mb-8">
              Each restored piece comes with a certificate documenting its history, the 
              restoration process, and the artisans who worked on it. This creates a 
              bridge between generations — honoring the past while embracing the future.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-relaxed text-gray-600">
              Through Matamaal, we&apos;ve restored over 200 heirloom pieces, reducing textile 
              waste while preserving invaluable cultural artifacts. The initiative also 
              provides specialized training for young artisans in traditional restoration 
              techniques.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f6f3] py-12 lg:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h3 className="text-lg lg:text-xl font-light mb-4">Have an heirloom to restore?</h3>
            <p className="text-[12px] lg:text-[13px] text-gray-600 mb-6 lg:mb-8">
              Contact us to learn more about our restoration services.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-black text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
