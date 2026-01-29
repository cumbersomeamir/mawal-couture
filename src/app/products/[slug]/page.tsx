"use client";
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useAppDispatch } from '../../../store/hooks';
import { addItem } from '../../../store/slices/cartSlice';
import { openCart } from '../../../store/slices/uiSlice';

type Props = {
  params: Promise<{ slug: string }>;
};

interface Product {
  _id?: string;
  productId?: string;
  id?: string;
  title?: string;
  name?: string;
  slug: string;
  price: number;
  description?: string;
  details?: string;
  care?: string[];
  images?: string[];
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  category?: string;
  collection?: string;
  gender?: string;
}

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    async function loadProduct() {
      try {
        // Try API first
        const apiRes = await fetch(`/api/products/${slug}`);
        
        if (apiRes.ok) {
          const data = await apiRes.json();
          if (data && !data.error) {
            setProduct(data);
            if (data.sizes?.length) setSelectedSize(data.sizes[0]);
            if (data.colors?.length) setSelectedColor(data.colors[0].name);
            setLoading(false);
            return;
          }
        }
        
        // Fallback to static JSON
        const staticRes = await fetch('/data/products.json');
        if (staticRes.ok) {
          const products = await staticRes.json();
          const found = products.find((p: any) => 
            p.slug === slug || p.id === slug || p.productId === slug
          );
          if (found) {
            setProduct(found);
            if (found.sizes?.length) setSelectedSize(found.sizes[0]);
            if (found.colors?.length) setSelectedColor(found.colors[0].name);
          }
        }
      } catch (err) {
        console.error('Failed to load product:', err);
        // Try static JSON as final fallback
        try {
          const staticRes = await fetch('/data/products.json');
          if (staticRes.ok) {
            const products = await staticRes.json();
            const found = products.find((p: any) => 
              p.slug === slug || p.id === slug || p.productId === slug
            );
            if (found) setProduct(found);
          }
        } catch (e) {
          console.error('Failed to load static product:', e);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-20 lg:pt-32 min-h-screen">
        <div className="container py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
            <div className="aspect-[3/4] skeleton"></div>
            <div className="space-y-4">
              <div className="h-6 lg:h-8 skeleton w-3/4"></div>
              <div className="h-5 lg:h-6 skeleton w-1/4"></div>
              <div className="h-20 lg:h-24 skeleton w-full mt-6 lg:mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-20 lg:pt-32 min-h-screen">
        <div className="container py-16 lg:py-24 text-center px-6">
          <h1 className="text-xl lg:text-2xl font-light mb-4">Product not found</h1>
          <p className="text-[13px] text-gray-600 mb-6 lg:mb-8">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center h-12 text-[11px] font-medium tracking-[0.15em] uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images || [];
  const productName = product.title || product.name || 'Product';

  const handleAddToCart = () => {
    dispatch(addItem({ 
      id: product.productId || product.id || product._id || product.slug, 
      name: productName, 
      price: product.price, 
      quantity: qty, 
      image: images[selectedImage] || '' 
    }));
    dispatch(openCart());
  };

  return (
    <main className="pt-20 lg:pt-32">
      <div className="container py-6 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 lg:mb-8 text-[11px] lg:text-[12px] text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-black transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{productName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Images */}
          <div className="space-y-3 lg:space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              {images[selectedImage] ? (
                <img 
                  src={images[selectedImage]} 
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-[13px]">
                  No image
                </div>
              )}
            </div>

            {/* Thumbnails - horizontal scroll on mobile */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 bg-gray-100 overflow-hidden transition-opacity ${
                      selectedImage === idx ? 'opacity-100 ring-1 ring-black' : 'opacity-50 hover:opacity-75'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${productName} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:max-w-md">
            <h1 className="text-xl lg:text-3xl font-light mb-2 lg:mb-4">{productName}</h1>
            <p className="text-base lg:text-lg mb-6 lg:mb-8">${product.price.toLocaleString()}</p>

            <p className="text-[12px] lg:text-[13px] text-gray-600 mb-6 lg:mb-8 leading-relaxed">
              {product.description || 'Handcrafted piece from Kashmir, featuring traditional artistry and premium materials.'}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-5 lg:mb-6">
                <label className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 block mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[44px] px-4 py-3 text-[11px] lg:text-[12px] border transition-colors ${
                        selectedSize === size 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 hover:border-black active:bg-gray-100'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-5 lg:mb-6">
                <label className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 block mb-3">
                  Color: {selectedColor}
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 lg:w-8 lg:h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name 
                          ? 'border-black scale-110' 
                          : 'border-gray-300 active:scale-95'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6 lg:mb-8">
              <label className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-400 block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 w-fit">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-12 h-12 flex items-center justify-center active:bg-gray-100 transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center text-[13px]">{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="w-12 h-12 flex items-center justify-center active:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="w-full py-4 bg-black text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 active:bg-gray-900 transition-colors mb-5 lg:mb-6"
            >
              Add to Bag
            </button>

            {/* Details */}
            <div className="border-t border-gray-200 pt-8 space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3">
                  <span className="text-[12px] font-medium">Details</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-open:rotate-180" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="pt-2 pb-4 text-[13px] text-gray-600 leading-relaxed">
                  {product.details || product.description || 'This exquisite piece showcases the finest Kashmiri craftsmanship. Hand-woven by skilled artisans using traditional techniques.'}
                </div>
              </details>

              <details className="group border-t border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer py-3">
                  <span className="text-[12px] font-medium">Care</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-open:rotate-180" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="pt-2 pb-4 text-[13px] text-gray-600">
                  <ul className="space-y-2">
                    {product.care && product.care.length > 0 ? (
                      product.care.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))
                    ) : (
                      <>
                        <li>Dry clean only</li>
                        <li>Store in a cool, dry place</li>
                        <li>Avoid direct sunlight</li>
                      </>
                    )}
                  </ul>
                </div>
              </details>

              <details className="group border-t border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer py-3">
                  <span className="text-[12px] font-medium">Shipping</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-open:rotate-180" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="pt-2 pb-4 text-[13px] text-gray-600">
                  <p>Free shipping on orders over $500.</p>
                  <p className="mt-2">Delivery within 7-10 business days.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
