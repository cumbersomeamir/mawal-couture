"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import { clearCart } from '../../store/slices/cartSlice';
import {
  ChinarLeafSVG,
  LotusSVG,
  EmbroideryLine,
  ScrollReveal,
  PaisleySVG,
  MountainSilhouette
} from '../../components/KashmirElements';

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.cart.items);
  const [step, setStep] = useState<'shipping' | 'payment' | 'complete'>('shipping');

  const [shipping, setShipping] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'India'
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 500 ? 0 : 25;
  const total = subtotal + shippingCost;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(clearCart());
    setStep('complete');
  };

  if (step === 'complete') {
    return (
      <main className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4] relative overflow-hidden">
        <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />
        <div className="absolute inset-0 chinar-pattern-bg opacity-15 pointer-events-none" />

        <div className="container relative py-12 lg:py-20">
          <ScrollReveal>
            <div className="max-w-lg mx-auto text-center px-4">
              <div className="w-20 h-20 lg:w-24 lg:h-24 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
                <LotusSVG size={45} color="#D4AF37" />
              </div>
              <h1
                className="text-2xl lg:text-5xl font-light tracking-tight mb-4 text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Thank you
              </h1>
              <p className="text-[14px] text-gray-600 mb-4">
                Your order has been placed successfully.
              </p>
              <p className="text-[13px] text-gray-500 mb-8">
                We&apos;ll send you a confirmation email with tracking details shortly.
              </p>
              <EmbroideryLine className="max-w-[150px] mx-auto mb-8" />
              <Link
                href="/products"
                className="btn btn-kashmir"
              >
                Continue Shopping
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <MountainSilhouette className="opacity-30" />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4] relative overflow-hidden">
        <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />

        <div className="container relative py-12 lg:py-20 text-center px-4">
          <LotusSVG size={50} color="#D4AF37" className="mx-auto mb-6 opacity-50" />
          <h1
            className="text-2xl lg:text-4xl font-light tracking-tight mb-4 text-gray-900"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your bag is empty
          </h1>
          <p className="text-[14px] text-gray-500 mb-8">Add some pieces to your bag before checking out</p>
          <Link
            href="/products"
            className="btn btn-outline-dark"
          >
            Continue Shopping
          </Link>
        </div>

        <MountainSilhouette className="opacity-30" />
      </main>
    );
  }

  return (
    <main className="pt-24 lg:pt-36 min-h-screen bg-[#FBF9F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 kashmir-pattern-bg opacity-15 pointer-events-none" />

      {/* Decorative Paisley */}
      <div className="absolute top-40 left-10 opacity-[0.06] hidden lg:block rotate-180">
        <PaisleySVG size={120} color="#722F37" />
      </div>

      <div className="container relative py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <ChinarLeafSVG size={18} color="#722F37" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Secure Checkout
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </div>
            <h1
              className="text-2xl lg:text-5xl font-light tracking-tight mb-2 lg:mb-4 text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Checkout
            </h1>
            <EmbroideryLine className="max-w-[120px] mb-8 lg:mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Form */}
            <ScrollReveal className="order-2 lg:order-1">
              {/* Steps */}
              <div className="flex gap-6 lg:gap-8 mb-8 lg:mb-10">
                <button
                  onClick={() => step === 'payment' && setStep('shipping')}
                  className={`flex items-center gap-2 text-[12px] transition-colors ${
                    step === 'shipping' ? 'text-[#722F37] font-medium' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${
                    step === 'shipping' ? 'border-[#D4AF37] bg-[#D4AF37] text-white' : 'border-gray-300 text-gray-400'
                  }`}>1</span>
                  Shipping
                </button>
                <div className="flex-1 h-px bg-[#D4AF37]/20 self-center" />
                <span className={`flex items-center gap-2 text-[12px] ${
                  step === 'payment' ? 'text-[#722F37] font-medium' : 'text-gray-400'
                }`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${
                    step === 'payment' ? 'border-[#D4AF37] bg-[#D4AF37] text-white' : 'border-gray-300 text-gray-400'
                  }`}>2</span>
                  Payment
                </span>
              </div>

              {step === 'shipping' && (
                <form onSubmit={handleShippingSubmit} className="space-y-6 lg:space-y-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                        <span className="text-[8px]">&#9670;</span> First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={shipping.firstName}
                        onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}
                        className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                        <span className="text-[8px]">&#9670;</span> Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={shipping.lastName}
                        onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}
                        className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                      <span className="text-[8px]">&#9670;</span> Email
                    </label>
                    <input
                      type="email"
                      required
                      value={shipping.email}
                      onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
                      className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                      <span className="text-[8px]">&#9670;</span> Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={shipping.phone}
                      onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
                      className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                      <span className="text-[8px]">&#9670;</span> Address
                    </label>
                    <input
                      type="text"
                      required
                      value={shipping.address}
                      onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                      className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                        <span className="text-[8px]">&#9670;</span> City
                      </label>
                      <input
                        type="text"
                        required
                        value={shipping.city}
                        onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                        className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                        <span className="text-[8px]">&#9670;</span> Postal Code
                      </label>
                      <input
                        type="text"
                        required
                        value={shipping.zip}
                        onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
                        className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#722F37] to-[#4A1C22] text-white text-[11px] font-medium tracking-[0.2em] uppercase hover:from-[#8B3A44] hover:to-[#5A2230] transition-all duration-300 mt-4 shadow-md hover:shadow-lg">
                    Continue to Payment
                  </button>
                </form>
              )}

              {step === 'payment' && (
                <form onSubmit={handlePaymentSubmit} className="space-y-6 lg:space-y-7">
                  <div>
                    <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                      <span className="text-[8px]">&#9670;</span> Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent placeholder-gray-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                        <span className="text-[8px]">&#9670;</span> Expiry
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] block mb-2 flex items-center gap-1.5">
                        <span className="text-[8px]">&#9670;</span> CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        required
                        className="w-full border-0 border-b-2 border-[#D4AF37]/30 py-3 text-[14px] focus:border-[#D4AF37] transition-colors outline-none bg-transparent placeholder-gray-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setStep('shipping')}
                      className="w-full sm:flex-1 py-4 border border-[#D4AF37]/40 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#F5F0E6] transition-colors text-gray-800"
                    >
                      Back
                    </button>
                    <button type="submit" className="w-full sm:flex-1 py-4 bg-gradient-to-r from-[#722F37] to-[#4A1C22] text-white text-[11px] font-medium tracking-[0.2em] uppercase hover:from-[#8B3A44] hover:to-[#5A2230] transition-all duration-300 shadow-md hover:shadow-lg">
                      Place Order
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>

            {/* Order Summary */}
            <ScrollReveal delay={100} className="order-1 lg:order-2">
              <div className="kashmir-card p-6 lg:p-8 sticky top-24">
                <h3 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-6 flex items-center gap-2">
                  <span className="text-[8px]">&#9670;</span> Order Summary
                </h3>

                <ul className="space-y-4 mb-6 lg:mb-8">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-3 lg:gap-4">
                      <div className="w-14 h-18 lg:w-16 lg:h-20 bg-gradient-to-br from-[#F5F0E6] to-[#E8E3DA] flex-shrink-0 overflow-hidden">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <LotusSVG size={14} color="#D4AF37" className="opacity-30" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[13px] font-light truncate text-gray-900"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {item.name}
                        </p>
                        <p className="text-[12px] text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-[13px] flex-shrink-0 text-[#D4AF37] font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 border-t border-[#D4AF37]/20 pt-4 lg:pt-6 mb-4 lg:mb-6">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-gray-600">Shipping</span>
                    <span className={shippingCost === 0 ? 'text-[#D4AF37]' : ''}>{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</span>
                  </div>
                </div>

                <div className="flex justify-between text-[14px] font-medium border-t border-[#D4AF37]/20 pt-4">
                  <span>Total</span>
                  <span className="text-[#D4AF37]">${total.toLocaleString()}</span>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 text-center">
                  <LotusSVG size={20} color="#D4AF37" className="mx-auto mb-2" />
                  <p className="text-[10px] text-gray-500 tracking-wider uppercase">Secure Checkout</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Mountain silhouette */}
      <MountainSilhouette className="opacity-30" />
    </main>
  );
}
