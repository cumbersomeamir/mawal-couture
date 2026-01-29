"use client";
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard';

// Collection metadata for display
const collectionMeta: Record<string, { title: string; description: string }> = {
  "winter-edit-2025-26": {
    title: "Winter Edit 2025/26",
    description: "Structured silhouettes crafted in fine wool, where classic pherans and vintage motifs reflect the soul of Kashmir."
  },
  "festive-edit-2025-26": {
    title: "The Festive Edit 2025/26",
    description: "Celebrating the season of radiance from Diwali lights to winter weddings. Crafted in heritage Kashmiri artistry."
  },
  "khandar": {
    title: "Khandar Collection",
    description: "Traditional patterns from the Khandar region, embodying centuries of artisan heritage."
  },
  "matamaal": {
    title: "Matamaal",
    description: "Restored heirloom pieces from our Project Matamaal initiative. Each garment carries generations of history."
  },
  "wyath": {
    title: "Wyath Collection",
    description: "Contemporary interpretations of classic Kashmiri design, where tradition meets modern sensibility."
  },
  "noon-chai-soiree": {
    title: "Noon Chai Soirée",
    description: "Leisurely elegance for chai gatherings and intimate celebrations. Comfort meets sophistication."
  },
  "pewand": {
    title: "Pewand Collection",
    description: "Intricate threadwork patterns that tell stories of Kashmiri craftsmanship."
  },
  "khandde-gaazir": {
    title: "Khandde Gaazir",
    description: "Bold geometric patterns rooted in Kashmir's architectural heritage."
  },
  "ab-sherun-nikkah": {
    title: "Ab Sherun - Nikkah",
    description: "Bridal couture for the most cherished day. Timeless elegance for Kashmiri weddings."
  },
  "pambach": {
    title: "Pambach Collection",
    description: "Exquisite embroidery techniques passed down through generations of master craftsmen."
  },
  "celebrity-closet": {
    title: "Celebrity Closet",
    description: "Pieces worn by icons who appreciate the art of Kashmiri couture."
  },
  "client-diaries": {
    title: "Client Diaries",
    description: "Real stories, real people, wearing Mawal Couture at life's special moments."
  },
  "casual-wear": {
    title: "Casual Wear",
    description: "Everyday elegance with the unmistakable touch of Kashmiri craftsmanship."
  },
  "tomul-tshatun": {
    title: "Tomul Tshatun",
    description: "Heritage weaving techniques creating patterns of extraordinary beauty."
  },
  "velvets": {
    title: "Velvets",
    description: "Luxurious velvet pieces with hand-embroidered details. Royal elegance for special occasions."
  },
  "kaftan": {
    title: "Kaftan Collection",
    description: "Flowing silhouettes with Kashmiri embroidery. Effortless elegance for every occasion."
  },
  "tilla-handwork": {
    title: "Tilla Handwork",
    description: "Intricate gold and silver thread embroidery. The pinnacle of Kashmiri decorative art."
  },
  "pure-pashmina": {
    title: "Pure Pashmina",
    description: "Handwoven from the finest Himalayan cashmere. Each piece, a testament to artisan mastery."
  },
  "silk-roots": {
    title: "Silk Roots",
    description: "Heritage silk traditions woven into contemporary designs."
  },
  "jackets": {
    title: "Jackets",
    description: "Structured outerwear with traditional Kashmiri embroidery and modern tailoring."
  },
  "festive-wear": {
    title: "Festive Wear",
    description: "Celebration-ready pieces crafted for life's most joyous moments."
  },
  "vanguard-pherans": {
    title: "The Vanguard - Pherans",
    description: "Modern interpretations of the iconic Kashmiri pheran. Clean lines, heritage soul."
  }
};

interface Product {
  id: string;
  title?: string;
  name?: string;
  slug: string;
  price: number;
  currency?: string;
  category?: string;
  collection?: string;
  gender?: string;
  tags?: string[];
  description?: string;
  images?: string[];
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" }
];

const categoryFilters = [
  "All",
  "Pherans",
  "Pashmina",
  "Shawls",
  "Stoles",
  "Jackets",
  "Coats",
  "Kaftan",
  "Kurtas"
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const collectionSlug = searchParams.get('collection');
  const genderParam = searchParams.get('gender');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("featured");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Load products from JSON
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('/data/products.json');
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        }
      } catch (err) {
        console.error('Failed to load products:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Get page title and description based on filters
  const pageInfo = useMemo(() => {
    if (collectionSlug && collectionMeta[collectionSlug]) {
      return collectionMeta[collectionSlug];
    }
    if (genderParam === 'woman') {
      return {
        title: "Woman",
        description: "Explore our complete women's collection. From traditional pherans to contemporary silhouettes, each piece celebrates Kashmiri craftsmanship."
      };
    }
    if (genderParam === 'man') {
      return {
        title: "Man",
        description: "Discover our men's collection. Heritage craftsmanship meets modern sophistication in every piece."
      };
    }
    return {
      title: "All Products",
      description: "Explore our complete collection of handcrafted Kashmiri couture. Each piece tells a story of heritage and artistry."
    };
  }, [collectionSlug, genderParam]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by collection
    if (collectionSlug) {
      result = result.filter(p => p.collection === collectionSlug);
    }

    // Filter by gender
    if (genderParam) {
      result = result.filter(p => p.gender === genderParam);
    }

    // Filter by category
    if (categoryFilter !== "All") {
      result = result.filter(p => 
        p.category?.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, collectionSlug, genderParam, categoryFilter, sortBy]);

  // Get available categories from filtered products
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    let baseProducts = [...products];
    
    if (collectionSlug) {
      baseProducts = baseProducts.filter(p => p.collection === collectionSlug);
    }
    if (genderParam) {
      baseProducts = baseProducts.filter(p => p.gender === genderParam);
    }
    
    baseProducts.forEach(p => {
      if (p.category) categories.add(p.category);
    });
    
    return ["All", ...Array.from(categories)];
  }, [products, collectionSlug, genderParam]);

  // Build breadcrumb
  const breadcrumbs = useMemo(() => {
    const crumbs = [{ label: "Home", href: "/" }];
    
    if (genderParam) {
      crumbs.push({ 
        label: genderParam === 'woman' ? 'Woman' : 'Man', 
        href: `/products?gender=${genderParam}` 
      });
    }
    
    if (collectionSlug && collectionMeta[collectionSlug]) {
      crumbs.push({ 
        label: collectionMeta[collectionSlug].title, 
        href: `/products?collection=${collectionSlug}${genderParam ? `&gender=${genderParam}` : ''}` 
      });
    }
    
    return crumbs;
  }, [collectionSlug, genderParam]);

  if (loading) {
    return (
      <div className="pt-32 lg:pt-40 min-h-screen">
        <div className="container">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-12"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="aspect-[3/4] bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 lg:pt-40 min-h-screen">
      {/* Breadcrumbs */}
      <nav className="container mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          {breadcrumbs.map((crumb, idx) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {idx > 0 && <span>/</span>}
              {idx === breadcrumbs.length - 1 ? (
                <span className="text-gray-900">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-gray-900 transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Header */}
      <section className="container mb-8">
        <h1 className="text-3xl lg:text-4xl font-serif mb-4">{pageInfo.title}</h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          {pageInfo.description}
        </p>
      </section>

      {/* Filters Bar */}
      <section className="border-y border-gray-200 sticky top-[72px] lg:top-[120px] bg-white/95 backdrop-blur-sm z-30">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Filter Toggle */}
            <button 
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden flex items-center gap-2 text-sm font-medium"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="21" x2="4" y2="14"/>
                <line x1="4" y1="10" x2="4" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12" y2="3"/>
                <line x1="20" y1="21" x2="20" y2="16"/>
                <line x1="20" y1="12" x2="20" y2="3"/>
                <line x1="1" y1="14" x2="7" y2="14"/>
                <line x1="9" y1="8" x2="15" y2="8"/>
                <line x1="17" y1="16" x2="23" y2="16"/>
              </svg>
              Filters
              {categoryFilter !== "All" && (
                <span className="ml-1 px-2 py-0.5 bg-[#c9847a] text-white text-xs rounded-full">1</span>
              )}
            </button>

            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-6">
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`text-sm transition-colors ${
                    categoryFilter === cat 
                      ? 'text-[#222426] font-medium border-b-2 border-[#c9847a] pb-1' 
                      : 'text-gray-500 hover:text-[#222426]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results Count & Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-gray-200 rounded px-3 py-2 bg-white focus:ring-1 focus:ring-[#c9847a] focus:border-[#c9847a] cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {filtersOpen && (
            <div className="lg:hidden pt-4 pb-2 border-t mt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {availableCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setCategoryFilter(cat);
                      setFiltersOpen(false);
                    }}
                    className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                      categoryFilter === cat 
                        ? 'bg-[#222426] text-white border-[#222426]' 
                        : 'border-gray-300 hover:border-[#222426]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <h3 className="text-lg font-serif mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">
              {categoryFilter !== "All" 
                ? `No ${categoryFilter.toLowerCase()} items in this collection.`
                : "This collection is coming soon."}
            </p>
            <Link 
              href="/products" 
              className="inline-block px-6 py-3 bg-[#222426] text-white text-sm uppercase tracking-wider hover:bg-[#333] transition-colors"
            >
              View All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={{
                  id: product.id,
                  name: product.title || product.name || '',
                  price: product.price,
                  images: product.images || [],
                  description: product.description || ''
                }} 
              />
            ))}
          </div>
        )}
      </section>

      {/* Collection CTA for empty or few results */}
      {filteredProducts.length > 0 && filteredProducts.length < 4 && (
        <section className="container pb-16">
          <div className="bg-[#fbf8f6] rounded-lg p-8 lg:p-12 text-center">
            <h3 className="text-xl lg:text-2xl font-serif mb-3">Explore More Collections</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Discover our complete range of handcrafted Kashmiri couture.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/products?gender=woman" 
                className="px-6 py-3 bg-[#222426] text-white text-sm uppercase tracking-wider hover:bg-[#333] transition-colors"
              >
                Shop Women
              </Link>
              <Link 
                href="/products?gender=man" 
                className="px-6 py-3 border border-[#222426] text-[#222426] text-sm uppercase tracking-wider hover:bg-[#222426] hover:text-white transition-colors"
              >
                Shop Men
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
