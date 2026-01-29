"use client";
import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  slug?: string;
  price: number;
  images?: string[];
  description?: string;
  category?: string;
  featured?: boolean;
  newArrival?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const productUrl = `/products/${product.slug || product.id}`;
  
  return (
    <Link href={productUrl} className="block group">
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#F5F0E6] to-[#E5E5E5] mb-3 lg:mb-4">
        {/* Gold corner accent on hover */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
        
        {/* Featured or New badge */}
        {(product.featured || product.newArrival) && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-3 py-1.5 text-[9px] font-medium tracking-[0.15em] uppercase bg-gradient-to-r from-[#D4AF37] to-[#E5A220] text-black">
              {product.newArrival ? 'New' : 'Featured'}
            </span>
          </div>
        )}
        
        {product.images && product.images[0] ? (
          <>
            <img 
              src={product.images[0]} 
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {/* Loading shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 skeleton" />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[11px] text-gray-400">No image</span>
          </div>
        )}
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-[#722F37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick view hint */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white">Quick View</span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="space-y-1.5">
        <h3 
          className="text-[13px] lg:text-[14px] font-normal leading-tight text-gray-800 group-hover:text-[#722F37] transition-colors line-clamp-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {product.name}
        </h3>
        <p className="text-[12px] lg:text-[13px] font-medium text-[#D4AF37]">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
