"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import { clearCart } from '../../store/slices/cartSlice';

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
      <main className="pt-20 lg:pt-32 min-h-screen">
        <div className="container py-12 lg:py-16">
          <div className="max-w-lg mx-auto text-center px-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 border border-black rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h1 className="text-2xl lg:text-4xl font-light tracking-tight mb-4">Thank you</h1>
            <p className="text-[14px] text-gray-600 mb-6 lg:mb-8">
              Your order has been placed. We&apos;ll send you a confirmation email shortly.
            </p>
            <Link 
              href="/products" 
              className="inline-block w-full sm:w-auto px-8 py-4 bg-black text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="pt-20 lg:pt-32 min-h-screen">
        <div className="container py-12 lg:py-16 text-center px-4">
          <h1 className="text-2xl lg:text-4xl font-light tracking-tight mb-4">Your bag is empty</h1>
          <Link 
            href="/products" 
            className="inline-block w-full sm:w-auto px-8 py-4 border border-black text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 lg:pt-32 min-h-screen">
      <div className="container py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl lg:text-4xl font-light tracking-tight mb-8 lg:mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Form */}
            <div className="order-2 lg:order-1">
              {/* Steps */}
              <div className="flex gap-6 lg:gap-8 mb-8 lg:mb-10 text-[12px]">
                <span className={step === 'shipping' ? 'text-black font-medium' : 'text-gray-400'}>
                  1. Shipping
                </span>
                <span className={step === 'payment' ? 'text-black font-medium' : 'text-gray-400'}>
                  2. Payment
                </span>
              </div>

              {step === 'shipping' && (
                <form onSubmit={handleShippingSubmit} className="space-y-5 lg:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        value={shipping.firstName}
                        onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}
                        className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        value={shipping.lastName}
                        onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}
                        className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={shipping.email}
                      onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={shipping.phone}
                      onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">Address</label>
                    <input
                      type="text"
                      required
                      value={shipping.address}
                      onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">City</label>
                      <input
                        type="text"
                        required
                        value={shipping.city}
                        onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                        className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">Postal Code</label>
                      <input
                        type="text"
                        required
                        value={shipping.zip}
                        onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
                        className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 bg-black text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors mt-6 lg:mt-8">
                    Continue to Payment
                  </button>
                </form>
              )}

              {step === 'payment' && (
                <form onSubmit={handlePaymentSubmit} className="space-y-5 lg:space-y-6">
                  <div>
                    <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 block mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        required
                        className="w-full border-0 border-b border-gray-300 py-3 text-[14px] focus:border-black transition-colors outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-8">
                    <button 
                      type="button" 
                      onClick={() => setStep('shipping')}
                      className="w-full sm:flex-1 py-4 border border-black text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button type="submit" className="w-full sm:flex-1 py-4 bg-black text-white text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors">
                      Place Order
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Order Summary - Shows first on mobile */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-50 p-6 lg:p-8">
                <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 mb-6">Order Summary</h3>
                
                <ul className="space-y-4 mb-6 lg:mb-8">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-3 lg:gap-4">
                      <div className="w-14 h-18 lg:w-16 lg:h-20 bg-gray-200 flex-shrink-0">
                        {item.image && (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium truncate">{item.name}</p>
                        <p className="text-[12px] text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-[13px] flex-shrink-0">${(item.price * item.quantity).toLocaleString()}</p>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 border-t border-gray-200 pt-4 lg:pt-6 mb-4 lg:mb-6">
                  <div className="flex justify-between text-[13px]">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</span>
                  </div>
                </div>

                <div className="flex justify-between text-[14px] font-medium border-t border-gray-200 pt-4">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
