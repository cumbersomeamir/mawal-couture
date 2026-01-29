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
    <Link href={productUrl} className="product-card group block">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
        {product.images && product.images[0] ? (
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No image</span>
          </div>
        )}
        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-4 py-2 text-xs uppercase tracking-wider font-medium">
            Quick View
          </span>
        </div>
      </div>
      <div className="px-1">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Mawal Couture</p>
        <h3 className="font-serif text-base mb-2 line-clamp-2 group-hover:text-[#c9847a] transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-700 font-medium">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
