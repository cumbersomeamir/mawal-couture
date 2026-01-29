"use client";
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard';

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
  gender?: string;
  images?: string[];
  description?: string;
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" }
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const collectionSlug = searchParams.get('collection');
  const genderParam = searchParams.get('gender');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    async function loadProducts() {
      try {
        // Build API URL with query params
        const params = new URLSearchParams();
        if (collectionSlug) params.set('collection', collectionSlug);
        if (genderParam) params.set('gender', genderParam);
        if (sortBy && sortBy !== 'featured') params.set('sort', sortBy);
        
        const queryString = params.toString();
        const apiUrl = `/api/products${queryString ? `?${queryString}` : ''}`;
        
        // Try API first
        const apiRes = await fetch(apiUrl);
        
        if (apiRes.ok) {
          const data = await apiRes.json();
          if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
            setLoading(false);
            return;
          }
        }
        
        // Fallback to static JSON
        const staticRes = await fetch('/data/products.json');
        if (staticRes.ok) {
          const data = await staticRes.json();
          setProducts(data);
        }
      } catch (err) {
        console.error('Failed to load products:', err);
        // Try static JSON as final fallback
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
        description: "Explore our complete women's collection."
      };
    }
    if (genderParam === 'man') {
      return {
        title: "Man",
        description: "Discover our men's collection."
      };
    }
    return {
      title: "All Products",
      description: "Explore our complete collection of handcrafted Kashmiri couture."
    };
  }, [collectionSlug, genderParam]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by collection (if not already filtered by API)
    if (collectionSlug) {
      result = result.filter(p => p.collection === collectionSlug);
    }

    // Filter by gender (if not already filtered by API)
    if (genderParam) {
      result = result.filter(p => p.gender === genderParam);
    }

    // Sort (if not already sorted by API)
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, collectionSlug, genderParam, sortBy]);

  if (loading) {
    return (
      <div className="pt-20 lg:pt-32 min-h-screen">
        <div className="container py-8 lg:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-4 gap-y-8 lg:gap-y-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i}>
                <div className="aspect-[3/4] skeleton mb-2 lg:mb-3"></div>
                <div className="h-3 skeleton w-3/4 mb-2"></div>
                <div className="h-3 skeleton w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-32 min-h-screen">
      {/* Header */}
      <section className="container py-8 lg:py-16">
        <div className="max-w-2xl">
          <h1 className="text-2xl lg:text-4xl font-light tracking-tight mb-3 lg:mb-4">{pageInfo.title}</h1>
          <p className="text-[12px] lg:text-[13px] text-gray-600 leading-relaxed">{pageInfo.description}</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="container pb-6 lg:pb-8">
        <div className="flex items-center justify-between border-b border-gray-200 pb-3 lg:pb-4">
          <span className="text-[11px] lg:text-[12px] text-gray-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-[11px] lg:text-[12px] border-0 bg-transparent cursor-pointer focus:ring-0 py-0 pr-6 min-h-[44px]"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container pb-16 lg:pb-24">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 lg:py-20">
            <p className="text-[13px] text-gray-500 mb-6">No products found in this collection.</p>
            <Link 
              href="/products" 
              className="inline-flex items-center h-12 text-[11px] font-medium tracking-[0.15em] uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
            >
              View All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-x-4 gap-y-8 lg:gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product._id || product.productId || product.id} 
                product={{
                  id: product.productId || product.id || product._id || '',
                  name: product.title || product.name || '',
                  slug: product.slug,
                  price: product.price,
                  images: product.images || [],
                  description: product.description || ''
                }} 
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
