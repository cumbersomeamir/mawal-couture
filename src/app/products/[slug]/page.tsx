"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { RootState } from '../../../store/store';
import { addItem } from '../../../store/slices/cartSlice';
import { openCart } from '../../../store/slices/uiSlice';

type Props = {
  params: { slug: string };
};

export default function ProductPage({ params }: Props) {
  const products = useAppSelector((state: RootState) => state.products.items);
  const dispatch = useAppDispatch();
  const product = products.find((p) => p.id === params.slug);

  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [size, setSize] = useState('One Size');

  if (!product) {
    return (
      <div className="pt-32 lg:pt-40">
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images || [];

  const handleAddToCart = () => {
    dispatch(addItem({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      quantity: qty, 
      image: images[selectedImage] || '' 
    }));
    dispatch(openCart());
  };

  return (
    <div className="pt-32 lg:pt-40">
      <div className="container py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
              {images[selectedImage] ? (
                <img 
                  src={images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-3">
              Mawal Couture
            </p>
            <h1 className="font-serif text-3xl lg:text-4xl mb-4">{product.name}</h1>
            <p className="text-xl mb-6">${product.price.toLocaleString()}</p>

            <div className="prose prose-sm text-gray-600 mb-8">
              <p>{product.description || 'Beautiful handcrafted piece from Kashmir, featuring traditional artistry and premium materials.'}</p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Size</label>
              <div className="flex flex-wrap gap-2">
                {['One Size', 'S', 'M', 'L', 'XL'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      size === s 
                        ? 'border-primary bg-primary text-white' 
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center border border-gray-300 w-fit">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
                <span className="w-16 text-center">{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn-primary w-full mb-4"
            >
              ADD TO CART
            </button>

            {/* Additional Info */}
            <div className="border-t pt-8 mt-8 space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-sm font-medium">Description</span>
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="pt-2 pb-4 text-sm text-gray-600">
                  {product.description || 'This exquisite piece showcases the finest Kashmiri craftsmanship. Hand-woven by skilled artisans using traditional techniques passed down through generations.'}
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-sm font-medium">Care Instructions</span>
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="pt-2 pb-4 text-sm text-gray-600">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Dry clean only</li>
                    <li>Store in a cool, dry place</li>
                    <li>Avoid direct sunlight</li>
                    <li>Use cedar balls to protect from moths</li>
                  </ul>
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-sm font-medium">Shipping & Returns</span>
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </summary>
                <div className="pt-2 pb-4 text-sm text-gray-600">
                  <p className="mb-2">Free shipping on orders over $500.</p>
                  <p>Returns accepted within 14 days of delivery. Items must be unworn with original tags attached.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
