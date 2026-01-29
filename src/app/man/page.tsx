import Link from 'next/link';

const collections = [
  {
    title: "Winter Edit 2025/26",
    description: "Structured wool pherans rooted in tradition",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    href: "/man/winter-edit"
  },
  {
    title: "Khandar",
    description: "Traditional menswear reimagined",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    href: "/man/khandar"
  },
  {
    title: "Wyath",
    description: "Contemporary heritage pieces",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    href: "/man/wyath"
  },
  {
    title: "Noon Chai Soirée",
    description: "Casual elegance for everyday",
    image: "https://images.unsplash.com/photo-1480429370612-d16e28c8eb29?q=80&w=800&auto=format&fit=crop",
    href: "/man/noon-chai"
  },
  {
    title: "Pambach Man",
    description: "Premium pashmina collection",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    href: "/man/pambach"
  },
  {
    title: "The Vanguard - Pherans",
    description: "Modern interpretations of classic pherans",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
    href: "/man/vanguard"
  }
];

export default function ManPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs tracking-[0.3em] uppercase mb-4">Mawal Couture</p>
            <h1 className="text-display">Man</h1>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link 
                key={collection.href}
                href={collection.href}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">{collection.title}</h3>
                <p className="text-sm text-gray-600">{collection.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-xl text-white">
            <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/80">
              Winter Edit 2025/26
            </p>
            <h2 className="text-display-sm mb-6">Winter . Edit</h2>
            <p className="text-white/90 leading-relaxed mb-8">
              Designed for men, this winter collection is built on structure, warmth, and restraint.
              Crafted in premium wool, each piece reflects timeless silhouettes and functional elegance.
            </p>
            <Link href="/man/winter-edit" className="btn-outline">
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
