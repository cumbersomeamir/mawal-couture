import Link from 'next/link';

const collections = [
  {
    title: "Winter Edit 2025/26",
    description: "Winter silhouettes crafted in fine wool",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    href: "/woman/winter-edit"
  },
  {
    title: "The Festive Edit 2025/26",
    description: "Celebrating the season of radiance",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    href: "/woman/festive-edit"
  },
  {
    title: "Khandar",
    description: "Traditional elegance reimagined",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop",
    href: "/woman/khandar"
  },
  {
    title: "Matamaal",
    description: "Heritage pieces with modern sensibility",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    href: "/woman/matamaal"
  },
  {
    title: "Pure Pashmina",
    description: "Hand-loomed luxury from Kashmir",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop",
    href: "/woman/pure-pashmina"
  },
  {
    title: "Velvets",
    description: "Rich textures for special occasions",
    image: "https://images.unsplash.com/photo-1503342394128-480259e0d7d2?q=80&w=800&auto=format&fit=crop",
    href: "/woman/velvets"
  },
  {
    title: "Kaftan",
    description: "Effortless elegance",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    href: "/woman/kaftan"
  },
  {
    title: "Tilla Handwork",
    description: "Intricate golden embroidery",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    href: "/woman/tilla"
  },
  {
    title: "Jackets",
    description: "Statement outerwear",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop",
    href: "/woman/jackets"
  }
];

export default function WomanPage() {
  return (
    <div className="pt-32 lg:pt-40">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs tracking-[0.3em] uppercase mb-4">Mawal Couture</p>
            <h1 className="text-display">Woman</h1>
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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-xl text-white">
            <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/80">
              The Festive Edit 2025/26
            </p>
            <h2 className="text-display-sm mb-6">Style . Legacy</h2>
            <p className="text-white/90 leading-relaxed mb-8">
              Celebrating the season of radiance from Diwali lights to winter weddings.
              Crafted in heritage Kashmiri artistry and timeless silhouettes.
            </p>
            <Link href="/woman/festive-edit" className="btn-outline">
              DISCOVER
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
