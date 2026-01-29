import Link from 'next/link';

const collections = [
  {
    title: "Winter Edit 2025/26",
    description: "Structured silhouettes in fine wool and timeless form.",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=winter-edit-2025-26&gender=woman"
  },
  {
    title: "The Festive Edit",
    description: "From Diwali lights to winter weddings.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=festive-edit-2025-26&gender=woman"
  },
  {
    title: "Pure Pashmina",
    description: "Handwoven from the finest Himalayan cashmere.",
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=pure-pashmina&gender=woman"
  },
  {
    title: "Khandar",
    description: "Traditional patterns embodying centuries of heritage.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=khandar&gender=woman"
  },
  {
    title: "Velvets",
    description: "Luxurious textures with hand-embroidered details.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=velvets&gender=woman"
  },
  {
    title: "Kaftan",
    description: "Flowing silhouettes with Kashmiri embroidery.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    href: "/products?collection=kaftan&gender=woman"
  }
];

export default function WomanPage() {
  return (
    <main className="pt-20 lg:pt-32">
      {/* Hero */}
      <section className="container py-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-3 lg:mb-4">
            Collections
          </p>
          <h1 className="text-3xl lg:text-6xl font-light tracking-tight mb-4 lg:mb-6">Woman</h1>
          <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
            A curated selection of handcrafted pieces rooted in Kashmiri tradition. 
            Each garment carries the warmth of heritage and the elegance of modern design.
          </p>
        </div>
      </section>

      {/* View All */}
      <section className="container pb-8 lg:pb-12">
        <Link 
          href="/products?gender=woman" 
          className="inline-flex items-center h-12 text-[11px] font-medium tracking-[0.15em] uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
        >
          View All Products
        </Link>
      </section>

      {/* Featured - Asymmetric Layout */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Left */}
          <div className="lg:col-span-7">
            <Link href={collections[0].href} className="block group">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={collections[0].image}
                  alt={collections[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="text-lg font-medium mb-1">{collections[0].title}</h2>
              <p className="text-[12px] text-gray-500">{collections[0].description}</p>
            </Link>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <Link href={collections[1].href} className="block group">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
                <img 
                  src={collections[1].image}
                  alt={collections[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="text-lg font-medium mb-1">{collections[1].title}</h2>
              <p className="text-[12px] text-gray-500">{collections[1].description}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Collections */}
      <section className="container pb-16 lg:pb-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-4 gap-y-8 lg:gap-y-10">
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
