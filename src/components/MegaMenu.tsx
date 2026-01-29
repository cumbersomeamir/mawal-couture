"use client";
import Link from 'next/link';

const womanCollections = [
  { name: "Winter Edit 2025/26", slug: "winter-edit-2025-26" },
  { name: "The Festive Edit 2025/26", slug: "festive-edit-2025-26" },
  { name: "Khandar", slug: "khandar" },
  { name: "Matamaal", slug: "matamaal" },
  { name: "Wyath", slug: "wyath" },
  { name: "Noon Chai Soirée", slug: "noon-chai-soiree" },
  { name: "Pewand", slug: "pewand" },
  { name: "Khandde Gaazir", slug: "khandde-gaazir" },
  { name: "Ab Sherun - Nikkah", slug: "ab-sherun-nikkah" },
  { name: "Pambach Collection", slug: "pambach" },
  { name: "Celebrity Closet", slug: "celebrity-closet" },
  { name: "Client Diaries", slug: "client-diaries" },
  { name: "Casual Wear", slug: "casual-wear" },
  { name: "Tomul Tshatun", slug: "tomul-tshatun" },
  { name: "Velvets", slug: "velvets" },
  { name: "Kaftan", slug: "kaftan" },
  { name: "Tilla Handwork", slug: "tilla-handwork" },
  { name: "Pure Pashmina", slug: "pure-pashmina" },
  { name: "Silk Roots", slug: "silk-roots" },
  { name: "Jackets", slug: "jackets" },
  { name: "Festive Wear", slug: "festive-wear" },
];

const manCollections = [
  { name: "Winter Edit 2025/26", slug: "winter-edit-2025-26" },
  { name: "Khandar", slug: "khandar" },
  { name: "Wyath", slug: "wyath" },
  { name: "Noon Chai Soirée", slug: "noon-chai-soiree" },
  { name: "Pambach Man", slug: "pambach" },
  { name: "The Vanguard - Pherans", slug: "vanguard-pherans" },
];

interface MegaMenuProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}

export default function MegaMenu({ activeMenu, setActiveMenu }: MegaMenuProps) {
  if (!activeMenu) return null;

  const collections = activeMenu === 'woman' ? womanCollections : manCollections;
  const title = activeMenu === 'woman' ? 'WOMAN' : 'MAN';
  const gender = activeMenu === 'woman' ? 'woman' : 'man';

  return (
    <div 
      className={`mega-menu ${activeMenu ? 'active' : ''}`}
      onMouseEnter={() => setActiveMenu(activeMenu)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Invisible bridge area at top to prevent gap issues */}
      <div className="absolute -top-4 left-0 right-0 h-4" />
      <div className="container py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Collections List */}
          <div className="col-span-3">
            <Link 
              href={`/products?gender=${gender}`}
              className="text-xs tracking-[0.2em] text-gray-500 mb-4 block hover:text-gray-900 transition-colors"
            >
              VIEW ALL {title}
            </Link>
            <ul className="space-y-2">
              {collections.slice(0, 10).map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/products?collection=${item.slug}&gender=${gender}`}
                    className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3">
            <h3 className="text-xs tracking-[0.2em] text-gray-500 mb-4 invisible">MORE</h3>
            <ul className="space-y-2">
              {collections.slice(10, 21).map((item) => (
                <li key={item.slug}>
                  <Link 
                    href={`/products?collection=${item.slug}&gender=${gender}`}
                    className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Images */}
          <div className="col-span-3">
            <Link href={`/products?collection=winter-edit-2025-26&gender=${gender}`} className="block group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src={activeMenu === 'woman' 
                    ? "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop"
                  }
                  alt={`${title} Collection`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3">
                <p className="text-xs tracking-[0.15em] text-gray-500 uppercase">New Arrivals</p>
                <p className="text-sm font-medium mt-1 group-hover:text-[#c9847a] transition-colors">Winter Edit 2025/26</p>
              </div>
            </Link>
          </div>

          <div className="col-span-3">
            <Link href={`/products?collection=festive-edit-2025-26&gender=${gender}`} className="block group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100">
                <img 
                  src={activeMenu === 'woman'
                    ? "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop"
                  }
                  alt={`${title} Festive`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3">
                <p className="text-xs tracking-[0.15em] text-gray-500 uppercase">Featured</p>
                <p className="text-sm font-medium mt-1 group-hover:text-[#c9847a] transition-colors">The Festive Edit 2025/26</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
