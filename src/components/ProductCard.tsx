import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  slug?: string;
  price: number;
  images?: string[];
  description?: string;
  category?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const productUrl = `/products/${product.slug || product.id}`;
  
  return (
    <Link href={productUrl} className="block group">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-2 lg:mb-3">
        {product.images && product.images[0] ? (
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[11px] text-gray-400">No image</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-[12px] lg:text-[13px] font-normal leading-tight mb-1 group-hover:opacity-70 transition-opacity line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[11px] lg:text-[12px] text-gray-500">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
