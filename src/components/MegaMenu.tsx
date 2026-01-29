"use client";
import Link from 'next/link';

const womanCollections = [
  { name: "View All", slug: "", featured: true },
  { name: "Winter Edit 2025/26", slug: "winter-edit-2025-26" },
  { name: "The Festive Edit", slug: "festive-edit-2025-26" },
  { name: "Khandar", slug: "khandar" },
  { name: "Matamaal", slug: "matamaal" },
  { name: "Wyath", slug: "wyath" },
  { name: "Pure Pashmina", slug: "pure-pashmina" },
  { name: "Velvets", slug: "velvets" },
  { name: "Kaftan", slug: "kaftan" },
];

const manCollections = [
  { name: "View All", slug: "", featured: true },
  { name: "Winter Edit 2025/26", slug: "winter-edit-2025-26" },
  { name: "Khandar", slug: "khandar" },
  { name: "Wyath", slug: "wyath" },
  { name: "The Vanguard Pherans", slug: "vanguard-pherans" },
];

interface MegaMenuProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function MegaMenu({ activeMenu, setActiveMenu, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const collections = activeMenu === 'woman' ? womanCollections : manCollections;
  const gender = activeMenu === 'woman' ? 'woman' : 'man';
  const featuredImage = activeMenu === 'woman' 
    ? "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=400&auto=format&fit=crop"
    : "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400&auto=format&fit=crop";

  return (
    <div 
      className={`fixed left-0 right-0 top-[72px] bg-white shadow-lg z-[90] transition-all duration-200 ${
        activeMenu 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Collections List */}
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 mb-4">
              Collections
            </p>
            <nav>
              <ul className="space-y-2">
                {collections.map((item) => (
                  <li key={item.slug}>
                    <Link 
                      href={item.slug ? `/products?collection=${item.slug}&gender=${gender}` : `/products?gender=${gender}`}
                      onClick={() => setActiveMenu(null)}
                      className={`block text-[13px] py-1 transition-opacity hover:opacity-50 ${
                        item.featured ? 'font-medium' : 'text-gray-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Featured Image */}
          <div className="col-span-12 lg:col-span-4 hidden lg:block">
            <Link 
              href={`/products?collection=winter-edit-2025-26&gender=${gender}`}
              onClick={() => setActiveMenu(null)}
              className="block group"
            >
              <div className="aspect-[4/5] max-h-[280px] overflow-hidden bg-gray-100">
                <img 
                  src={featuredImage}
                  alt="Featured Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] text-gray-500 mt-2">Winter Edit 2025/26</p>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="col-span-12 lg:col-span-4 hidden lg:block">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setActiveMenu(null)}
                  className="text-[13px] text-gray-600 hover:opacity-50 transition-opacity"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={() => setActiveMenu(null)}
                  className="text-[13px] text-gray-600 hover:opacity-50 transition-opacity"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/initiatives" 
                  onClick={() => setActiveMenu(null)}
                  className="text-[13px] text-gray-600 hover:opacity-50 transition-opacity"
                >
                  Initiatives
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
