"use client";
import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard';
import { 
  ChinarLeafSVG, 
  EmbroideryLine, 
  ScrollReveal,
  MountainSilhouette 
} from '../../components/KashmirElements';

const collectionMeta: Record<string, { title: string; description: string }> = {
  "winter-edit-2025-26": {
    title: "Winter Edit 2025/26",
    description: "Structured silhouettes crafted in fine wool, where classic pherans and vintage motifs reflect the soul of Kashmir."
  },
  "festive-edit-2025-26": {
    title: "The Festive Edit",
    description: "Celebrating the season of radiance from Diwali lights to winter weddings."
  },
  "khandar": {
    title: "Khandar",
    description: "Traditional patterns from the Khandar region, embodying centuries of artisan heritage."
  },
  "matamaal": {
    title: "Matamaal",
    description: "Restored heirloom pieces. Each garment carries generations of history."
  },
  "wyath": {
    title: "Wyath",
    description: "Contemporary interpretations of classic Kashmiri design."
  },
  "noon-chai-soiree": {
    title: "Noon Chai Soirée",
    description: "Leisurely elegance for chai gatherings and intimate celebrations."
  },
  "pure-pashmina": {
    title: "Pure Pashmina",
    description: "Handwoven from the finest Himalayan cashmere. A testament to artisan mastery."
  },
  "velvets": {
    title: "Velvets",
    description: "Luxurious velvet pieces with hand-embroidered details."
  },
  "kaftan": {
    title: "Kaftan",
    description: "Flowing silhouettes with Kashmiri embroidery."
  },
  "tilla-handwork": {
    title: "Tilla Handwork",
    description: "Intricate gold and silver thread embroidery."
  },
  "jackets": {
    title: "Jackets",
    description: "Structured outerwear with traditional embroidery."
  },
  "vanguard-pherans": {
    title: "The Vanguard",
    description: "Modern interpretations of the iconic Kashmiri pheran."
  },
  "pambach": {
    title: "Pambach",
    description: "Exquisite embroidery techniques passed down through generations."
  }
};

interface Product {
  _id?: string;
  id?: string;
  productId?: string;
  title?: string;
  name?: string;
  slug: string;
  price: number;
  category?: string;
  collection?: string;
  collectionName?: string;
  gender?: string;
  images?: string[];
  description?: string;
  featured?: boolean;
  newArrival?: boolean;
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" }
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const collectionSlug = searchParams.get('collection');
  const genderParam = searchParams.get('gender');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    async function loadProducts() {
      try {
        const params = new URLSearchParams();
        if (collectionSlug) params.set('collection', collectionSlug);
        if (genderParam) params.set('gender', genderParam);
        if (sortBy && sortBy !== 'featured') params.set('sort', sortBy);
        
        const queryString = params.toString();
        const apiUrl = `/api/products${queryString ? `?${queryString}` : ''}`;
        
        const apiRes = await fetch(apiUrl);
        
        if (apiRes.ok) {
          const data = await apiRes.json();
          if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
            setLoading(false);
            return;
          }
        }
        
        const staticRes = await fetch('/data/products.json');
        if (staticRes.ok) {
          const data = await staticRes.json();
          setProducts(data);
        }
      } catch (err) {
        console.error('Failed to load products:', err);
        try {
          const staticRes = await fetch('/data/products.json');
          if (staticRes.ok) {
            const data = await staticRes.json();
            setProducts(data);
          }
        } catch (e) {
          console.error('Failed to load static products:', e);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [collectionSlug, genderParam, sortBy]);

  const pageInfo = useMemo(() => {
    if (collectionSlug && collectionMeta[collectionSlug]) {
      return collectionMeta[collectionSlug];
    }
    if (genderParam === 'woman') {
      return {
        title: "Woman",
        description: "Explore our complete women's collection of handcrafted Kashmiri pieces."
      };
    }
    if (genderParam === 'man') {
      return {
        title: "Man",
        description: "Discover our men's collection built on structure, warmth, and restraint."
      };
    }
    return {
      title: "All Products",
      description: "Explore our complete collection of handcrafted Kashmiri couture."
    };
  }, [collectionSlug, genderParam]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (collectionSlug) {
      result = result.filter(p => (p.collection || p.collectionName) === collectionSlug);
    }

    if (genderParam) {
      result = result.filter(p => p.gender === genderParam);
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, collectionSlug, genderParam, sortBy]);

  if (loading) {
    return (
      <div className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4]">
        <div className="container py-8 lg:py-12">
          {/* Loading header */}
          <div className="mb-12">
            <div className="h-8 skeleton w-1/3 mb-4"></div>
            <div className="h-4 skeleton w-2/3"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-10 lg:gap-y-14">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i}>
                <div className="aspect-[3/4] skeleton mb-3 lg:mb-4"></div>
                <div className="h-4 skeleton w-3/4 mb-2"></div>
                <div className="h-3 skeleton w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />
      
      {/* Header */}
      <section className="container relative py-8 lg:py-16">
        <ScrollReveal>
          <div className="max-w-2xl">
            {/* Label with decoration */}
            <div className="flex items-center gap-3 mb-4">
              <ChinarLeafSVG size={18} color="#722F37" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Collection
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </div>
            
            <h1 
              className="text-3xl lg:text-5xl font-light tracking-tight mb-4 lg:mb-5 text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {pageInfo.title}
            </h1>
            <p className="text-[13px] lg:text-[14px] text-gray-600 leading-relaxed">
              {pageInfo.description}
            </p>
            
            <EmbroideryLine className="mt-6 max-w-[150px]" />
          </div>
        </ScrollReveal>
      </section>

      {/* Filter Bar */}
      <section className="container relative pb-6 lg:pb-10">
        <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
          <span className="text-[11px] lg:text-[12px] text-gray-500 flex items-center gap-2">
            <span className="text-[#D4AF37]">◆</span>
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </span>
          
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-[11px] lg:text-[12px] border border-[#D4AF37]/30 bg-white px-4 py-3 pr-10 cursor-pointer focus:border-[#D4AF37] focus:ring-0 min-h-[44px] appearance-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#D4AF37]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container relative pb-20 lg:pb-32">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 lg:py-24">
            <ChinarLeafSVG size={40} color="#D4AF37" className="mx-auto mb-6 opacity-50" />
            <p className="text-[14px] text-gray-500 mb-8">No products found in this collection.</p>
            <Link 
              href="/products" 
              className="btn btn-outline-dark"
            >
              View All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-10 lg:gap-y-14">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal key={product._id || product.productId || product.id} delay={idx % 4 * 50}>
                <ProductCard 
                  product={{
                    id: product.productId || product.id || product._id || '',
                    name: product.title || product.name || '',
                    slug: product.slug,
                    price: product.price,
                    images: product.images || [],
                    description: product.description || '',
                    featured: product.featured,
                    newArrival: product.newArrival
                  }} 
                />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
      
      {/* Mountain silhouette at bottom */}
      <MountainSilhouette className="opacity-30" />
    </div>
  );
}

// Loading component for Suspense fallback
function ProductsLoading() {
  return (
    <div className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4]">
      <div className="container py-8 lg:py-12">
        <div className="mb-12">
          <div className="h-8 skeleton w-1/3 mb-4"></div>
          <div className="h-4 skeleton w-2/3"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-10 lg:gap-y-14">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i}>
              <div className="aspect-[3/4] skeleton mb-3 lg:mb-4"></div>
              <div className="h-4 skeleton w-3/4 mb-2"></div>
              <div className="h-3 skeleton w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  );
}
