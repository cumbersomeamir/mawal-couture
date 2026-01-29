import Link from 'next/link';

export default function InitiativesPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs tracking-[0.3em] uppercase mb-4">Our Initiatives</p>
            <h1 className="text-display">Craft Revival</h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl mb-8">
              Sustainability and Craft Revival
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Mawal Couture, we&apos;re committed to preserving Kashmir&apos;s rich textile heritage 
              while supporting the artisans who keep these traditions alive. Our initiatives focus 
              on sustainability, skill preservation, and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Project Matamaal */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1000&auto=format&fit=crop"
                alt="Project Matamaal"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
                Project Matamaal
              </p>
              <h3 className="font-serif text-3xl mb-6">
                Breathing new life into heirloom garments
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Project Matamaal is our initiative to restore and revive vintage Kashmiri textiles. 
                Many families possess heirloom pieces that have been passed down through generations 
                but have fallen into disrepair.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our skilled artisans carefully restore these treasures, preserving their historical 
                significance while making them wearable once again. This project not only saves 
                precious textiles from being lost but also provides employment to traditional craftsmen.
              </p>
              <Link href="/initiatives/project-matamaal" className="btn-primary">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Hands */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-xs tracking-[0.25em] uppercase mb-4 text-gray-500">
                The Golden Hands of Kashmir
              </p>
              <h3 className="font-serif text-3xl mb-6">
                Supporting artisans who bring craft to life
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Golden Hands of Kashmir is our program dedicated to supporting and celebrating 
                the master artisans of the valley. These skilled craftsmen have devoted their lives 
                to perfecting traditional techniques.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Through this initiative, we provide fair wages, healthcare support, and skill 
                development opportunities. We also document their techniques to ensure these 
                precious skills are passed on to future generations.
              </p>
              <Link href="/initiatives/golden-hands" className="btn-primary">
                LEARN MORE
              </Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1503342394128-480259e0d7d2?q=80&w=1000&auto=format&fit=crop"
                alt="The Golden Hands of Kashmir"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
