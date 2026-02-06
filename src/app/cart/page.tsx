"use client";
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import { removeItem, updateQuantity } from '../../store/slices/cartSlice';
import {
  ChinarLeafSVG,
  LotusSVG,
  EmbroideryLine,
  ScrollReveal,
  PaisleySVG,
  MountainSilhouette
} from '../../components/KashmirElements';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.cart.items);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kashmir-pattern-bg opacity-15 pointer-events-none" />

      {/* Decorative Paisley */}
      <div className="absolute top-40 right-10 opacity-[0.06] hidden lg:block">
        <PaisleySVG size={120} color="#722F37" />
      </div>

      <div className="container relative py-8 lg:py-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <ChinarLeafSVG size={18} color="#722F37" />
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
              Your Selection
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
          </div>
          <h1
            className="text-2xl lg:text-5xl font-light tracking-tight mb-2 lg:mb-4 text-gray-900"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Shopping Bag
          </h1>
          <EmbroideryLine className="max-w-[120px] mb-8 lg:mb-12" />
        </ScrollReveal>

        {items.length === 0 ? (
          <ScrollReveal delay={100}>
            <div className="text-center py-16 lg:py-24">
              <LotusSVG size={50} color="#D4AF37" className="mx-auto mb-6 opacity-50" />
              <p
                className="text-xl lg:text-2xl font-light mb-3 text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Your bag is empty
              </p>
              <p className="text-[14px] text-gray-500 mb-8">Discover our handcrafted Kashmiri pieces</p>
              <Link href="/products" className="btn btn-kashmir">
                Continue Shopping
              </Link>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Items */}
            <div className="lg:col-span-2">
              {/* Desktop Header */}
              <div className="border-b border-[#D4AF37]/20 pb-4 mb-6 hidden lg:grid grid-cols-12 gap-4 text-[10px] font-medium tracking-[0.2em] uppercase text-[#D4AF37]">
                <div className="col-span-6 flex items-center gap-2">
                  <span className="text-[8px]">&#9670;</span> Product
                </div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <ul className="space-y-6 lg:space-y-8">
                {items.map((item, idx) => (
                  <ScrollReveal key={item.id} delay={idx * 50}>
                    <li className="pb-6 lg:pb-8 border-b border-[#D4AF37]/10">
                      {/* Mobile Layout */}
                      <div className="flex gap-4 lg:hidden">
                        <div className="w-24 h-32 bg-gradient-to-br from-[#F5F0E6] to-[#E8E3DA] flex-shrink-0 relative overflow-hidden">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <LotusSVG size={20} color="#D4AF37" className="opacity-30" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3
                            className="text-[14px] font-light mb-1 text-gray-900"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          >
                            {item.name}
                          </h3>
                          <p className="text-[13px] text-[#D4AF37] font-medium mb-3">${item.price.toLocaleString()}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-[#D4AF37]/30">
                              <button
                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 active:bg-[#F5F0E6]"
                              >
                                &#8722;
                              </button>
                              <span className="w-10 text-center text-[13px]">{item.quantity}</span>
                              <button
                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                className="w-10 h-10 flex items-center justify-center text-gray-500 active:bg-[#F5F0E6]"
                              >
                                +
                              </button>
                            </div>
                            <p className="text-[14px] font-medium text-gray-900">${(item.price * item.quantity).toLocaleString()}</p>
                          </div>

                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            className="text-[11px] text-[#722F37] hover:text-[#D4AF37] transition-colors mt-3 min-h-0 tracking-wider uppercase"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden lg:grid grid-cols-12 gap-4 items-start">
                        <div className="col-span-6 flex gap-4">
                          <div className="w-24 h-32 bg-gradient-to-br from-[#F5F0E6] to-[#E8E3DA] flex-shrink-0 relative overflow-hidden">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <LotusSVG size={20} color="#D4AF37" className="opacity-30" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h3
                              className="text-[14px] font-light mb-1 text-gray-900"
                              style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                              {item.name}
                            </h3>
                            <p className="text-[13px] text-[#D4AF37] mb-3">${item.price.toLocaleString()}</p>
                            <button
                              onClick={() => dispatch(removeItem(item.id))}
                              className="text-[11px] text-[#722F37] hover:text-[#D4AF37] transition-colors tracking-wider uppercase"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        <div className="col-span-2 flex justify-center">
                          <div className="flex items-center border border-[#D4AF37]/30">
                            <button
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#722F37] transition-colors"
                            >
                              &#8722;
                            </button>
                            <span className="w-8 text-center text-[13px]">{item.quantity}</span>
                            <button
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#722F37] transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="col-span-2 text-right text-[13px] text-gray-600">
                          ${item.price.toLocaleString()}
                        </div>

                        <div className="col-span-2 text-right text-[14px] font-medium text-gray-900">
                          ${(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

            {/* Summary */}
            <ScrollReveal delay={100} className="lg:col-span-1">
              <div className="kashmir-card p-6 lg:p-8 sticky top-24">
                <h3 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-6 flex items-center gap-2">
                  <span className="text-[8px]">&#9670;</span> Summary
                </h3>

                <div className="space-y-3 mb-6 lg:mb-8">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[13px] text-gray-500">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between text-[14px] font-medium border-t border-[#D4AF37]/20 pt-4 mb-6 lg:mb-8">
                  <span>Total</span>
                  <span className="text-[#D4AF37]">${subtotal.toLocaleString()}</span>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full py-4 bg-gradient-to-r from-[#722F37] to-[#4A1C22] text-white text-center text-[11px] font-medium tracking-[0.2em] uppercase hover:from-[#8B3A44] hover:to-[#5A2230] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Checkout
                </Link>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 text-center">
                  <LotusSVG size={20} color="#D4AF37" className="mx-auto mb-2" />
                  <p className="text-[10px] text-gray-500 tracking-wider uppercase">Free shipping over $500</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>

      {/* Mountain silhouette */}
      <MountainSilhouette className="opacity-30" />
    </main>
  );
}
