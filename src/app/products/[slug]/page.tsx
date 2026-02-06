"use client";
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useAppDispatch } from '../../../store/hooks';
import { addItem } from '../../../store/slices/cartSlice';
import { openCart } from '../../../store/slices/uiSlice';
import {
  ChinarLeafSVG,
  PaisleySVG,
  EmbroideryLine,
  ScrollReveal,
  LotusSVG,
  MountainSilhouette
} from '../../../components/KashmirElements';

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
      <div className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4]">
        <div className="container py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <div className="aspect-[3/4] skeleton"></div>
            <div className="space-y-4 lg:pt-8">
              <div className="h-3 skeleton w-1/3 mb-6"></div>
              <div className="h-8 lg:h-10 skeleton w-3/4"></div>
              <div className="h-6 skeleton w-1/4 mt-2"></div>
              <div className="h-px bg-[#D4AF37]/20 my-6"></div>
              <div className="h-20 lg:h-24 skeleton w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4] relative overflow-hidden">
        <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />
        <div className="container py-16 lg:py-24 text-center px-6 relative">
          <LotusSVG size={50} color="#D4AF37" className="mx-auto mb-6 opacity-50" />
          <h1
            className="text-2xl lg:text-3xl font-light mb-4 text-gray-900"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Product not found
          </h1>
          <p className="text-[13px] text-gray-600 mb-8">
            The piece you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/products"
            className="btn btn-outline-dark"
          >
            View All Products
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
    <main className="pt-24 lg:pt-36 bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kashmir-pattern-bg opacity-15 pointer-events-none" />

      {/* Decorative Paisley */}
      <div className="absolute top-60 right-10 opacity-[0.06] hidden lg:block">
        <PaisleySVG size={140} color="#722F37" />
      </div>

      <div className="container relative py-6 lg:py-12">
        {/* Breadcrumb with Kashmir styling */}
        <ScrollReveal>
          <nav className="mb-8 lg:mb-12 flex items-center gap-2 text-[11px] lg:text-[12px] text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#722F37] transition-colors">Home</Link>
            <span className="text-[#D4AF37] text-[8px]">&#9670;</span>
            <Link href="/products" className="hover:text-[#722F37] transition-colors">Products</Link>
            <span className="text-[#D4AF37] text-[8px]">&#9670;</span>
            <span className="text-gray-900">{productName}</span>
          </nav>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Images with Kashmir frame */}
          <ScrollReveal>
            <div className="space-y-3 lg:space-y-4">
              {/* Main Image with gold corners */}
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] opacity-50 z-10" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] opacity-50 z-10" />

                <div className="aspect-[3/4] bg-gradient-to-br from-[#F5F0E6] to-[#E8E3DA] overflow-hidden">
                  {images[selectedImage] ? (
                    <img
                      src={images[selectedImage]}
                      alt={productName}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <LotusSVG size={60} color="#D4AF37" className="opacity-30" />
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 bg-gradient-to-br from-[#F5F0E6] to-[#E8E3DA] overflow-hidden transition-all duration-300 ${
                        selectedImage === idx
                          ? 'opacity-100 ring-2 ring-[#D4AF37]'
                          : 'opacity-50 hover:opacity-75'
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
          </ScrollReveal>

          {/* Product Info with Kashmir styling */}
          <ScrollReveal delay={100}>
            <div className="lg:max-w-md lg:pt-4">
              {/* Category badge */}
              {product.category && (
                <div className="flex items-center gap-2 mb-4">
                  <ChinarLeafSVG size={14} color="#D4AF37" />
                  <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                    {product.category}
                  </span>
                </div>
              )}

              <h1
                className="text-2xl lg:text-4xl font-light mb-3 lg:mb-4 text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {productName}
              </h1>

              <p className="text-lg lg:text-xl font-medium text-[#D4AF37] mb-6">
                ${product.price.toLocaleString()}
              </p>

              <EmbroideryLine className="max-w-[120px] mb-6" />

              <p className="text-[13px] lg:text-[14px] text-gray-600 mb-8 leading-relaxed">
                {product.description || 'Handcrafted piece from Kashmir, featuring traditional artistry and premium materials.'}
              </p>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3 flex items-center gap-2">
                    <span className="text-[8px]">&#9670;</span> Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[44px] px-4 py-3 text-[11px] lg:text-[12px] border transition-all duration-300 ${
                          selectedSize === size
                            ? 'border-[#722F37] bg-[#722F37] text-white'
                            : 'border-[#D4AF37]/30 hover:border-[#D4AF37] active:bg-[#F5F0E6]'
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
                <div className="mb-6">
                  <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3 flex items-center gap-2">
                    <span className="text-[8px]">&#9670;</span> Color: <span className="text-gray-600 normal-case tracking-normal">{selectedColor}</span>
                  </label>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 lg:w-9 lg:h-9 rounded-full border-2 transition-all duration-300 ${
                          selectedColor === color.name
                            ? 'border-[#D4AF37] scale-110 shadow-md'
                            : 'border-gray-200 hover:border-[#D4AF37]/50 active:scale-95'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-3 flex items-center gap-2">
                  <span className="text-[8px]">&#9670;</span> Quantity
                </label>
                <div className="flex items-center border border-[#D4AF37]/30 w-fit">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[#F5F0E6] active:bg-[#E8E3DA] transition-colors text-gray-600"
                  >
                    &#8722;
                  </button>
                  <span className="w-12 text-center text-[13px] font-medium">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-[#F5F0E6] active:bg-[#E8E3DA] transition-colors text-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-gradient-to-r from-[#722F37] to-[#4A1C22] text-white text-[11px] font-medium tracking-[0.2em] uppercase hover:from-[#8B3A44] hover:to-[#5A2230] active:from-[#611F29] active:to-[#3A1018] transition-all duration-300 mb-6 shadow-md hover:shadow-lg"
              >
                Add to Bag
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mb-8 py-4 border-t border-b border-[#D4AF37]/20">
                {['Handcrafted', 'Authentic', 'Free Shipping'].map((badge) => (
                  <div key={badge} className="text-center">
                    <LotusSVG size={18} color="#D4AF37" className="mx-auto mb-1.5" />
                    <span className="text-[9px] tracking-wider uppercase text-gray-500">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Details Accordions */}
              <div className="space-y-0">
                <details className="group border-t border-[#D4AF37]/20">
                  <summary className="flex items-center justify-between cursor-pointer py-4">
                    <span className="text-[12px] font-medium tracking-[0.1em] flex items-center gap-2">
                      <ChinarLeafSVG size={12} color="#D4AF37" />
                      Details
                    </span>
                    <svg
                      className="w-4 h-4 text-[#D4AF37] transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </summary>
                  <div className="pt-1 pb-5 text-[13px] text-gray-600 leading-relaxed">
                    {product.details || product.description || 'This exquisite piece showcases the finest Kashmiri craftsmanship. Hand-woven by skilled artisans using traditional techniques passed down through generations.'}
                  </div>
                </details>

                <details className="group border-t border-[#D4AF37]/20">
                  <summary className="flex items-center justify-between cursor-pointer py-4">
                    <span className="text-[12px] font-medium tracking-[0.1em] flex items-center gap-2">
                      <ChinarLeafSVG size={12} color="#D4AF37" />
                      Care Instructions
                    </span>
                    <svg
                      className="w-4 h-4 text-[#D4AF37] transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </summary>
                  <div className="pt-1 pb-5 text-[13px] text-gray-600">
                    <ul className="space-y-2">
                      {product.care && product.care.length > 0 ? (
                        product.care.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#D4AF37] mt-0.5 text-[8px]">&#9670;</span>
                            {item}
                          </li>
                        ))
                      ) : (
                        <>
                          <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-0.5 text-[8px]">&#9670;</span>Dry clean only</li>
                          <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-0.5 text-[8px]">&#9670;</span>Store in a cool, dry place</li>
                          <li className="flex items-start gap-2"><span className="text-[#D4AF37] mt-0.5 text-[8px]">&#9670;</span>Avoid direct sunlight</li>
                        </>
                      )}
                    </ul>
                  </div>
                </details>

                <details className="group border-t border-b border-[#D4AF37]/20">
                  <summary className="flex items-center justify-between cursor-pointer py-4">
                    <span className="text-[12px] font-medium tracking-[0.1em] flex items-center gap-2">
                      <ChinarLeafSVG size={12} color="#D4AF37" />
                      Shipping
                    </span>
                    <svg
                      className="w-4 h-4 text-[#D4AF37] transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </summary>
                  <div className="pt-1 pb-5 text-[13px] text-gray-600">
                    <p className="flex items-start gap-2"><span className="text-[#D4AF37] mt-0.5 text-[8px]">&#9670;</span>Free shipping on orders over $500</p>
                    <p className="mt-2 flex items-start gap-2"><span className="text-[#D4AF37] mt-0.5 text-[8px]">&#9670;</span>Delivery within 7-10 business days</p>
                  </div>
                </details>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Mountain silhouette */}
      <MountainSilhouette className="opacity-30" />
    </main>
  );
}
