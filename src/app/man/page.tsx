import Link from 'next/link';

const collections = [
  {
    title: "Winter Edit 2025/26",
    description: "Built on structure, warmth, and restraint.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=winter-edit-2025-26&gender=man"
  },
  {
    title: "The Vanguard Pherans",
    description: "Modern interpretations of the iconic Kashmiri pheran.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=vanguard-pherans&gender=man"
  },
  {
    title: "Khandar",
    description: "Heritage patterns for the modern man.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=khandar&gender=man"
  },
  {
    title: "Wyath",
    description: "Contemporary Kashmiri design.",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=wyath&gender=man"
  }
];

export default function ManPage() {
  return (
    <main className="pt-20 lg:pt-32">
      {/* Hero */}
      <section className="container py-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-3 lg:mb-4">
            Collections
          </p>
          <h1 className="text-3xl lg:text-6xl font-light tracking-tight mb-4 lg:mb-6">Man</h1>
          <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
            A refined collection for the modern man. Each piece reflects timeless 
            silhouettes, functional elegance, and heritage detailing without excess.
          </p>
        </div>
      </section>

      {/* View All */}
      <section className="container pb-8 lg:pb-12">
        <Link 
          href="/products?gender=man" 
          className="inline-flex items-center h-12 text-[11px] font-medium tracking-[0.15em] uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
        >
          View All Products
        </Link>
      </section>

      {/* Featured - Two Column */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {collections.slice(0, 2).map((collection) => (
            <Link 
              key={collection.href}
              href={collection.href} 
              className="block group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="text-lg font-medium mb-1">{collection.title}</h2>
              <p className="text-[12px] text-gray-500">{collection.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Collections */}
      <section className="container pb-16 lg:pb-24">
        <div className="grid grid-cols-2 gap-x-3 lg:gap-x-4 gap-y-8 lg:gap-y-10">
          {collections.slice(2).map((collection) => (
            <Link 
              key={collection.href}
              href={collection.href}
              className="block group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-2 lg:mb-3">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[12px] lg:text-[13px] font-medium mb-1">{collection.title}</h3>
              <p className="text-[10px] lg:text-[11px] text-gray-500 line-clamp-2">{collection.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
