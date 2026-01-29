"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

export default function CheckoutPage() {
  const items = useAppSelector((s: RootState) => s.cart.items);
  const [step, setStep] = useState<'shipping' | 'payment' | 'complete'>('shipping');
  
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    country: 'India',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('complete');
  };

  if (items.length === 0 && step !== 'complete') {
    return (
      <div className="pt-32 lg:pt-40">
        <div className="container py-20 text-center">
          <h1 className="font-serif text-3xl mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some items to your cart before checking out.</p>
          <Link href="/products" className="btn-primary">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  if (step === 'complete') {
    return (
      <div className="pt-32 lg:pt-40">
        <div className="container py-20 text-center max-w-xl mx-auto">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h1 className="font-serif text-3xl mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-2">Your order has been placed successfully.</p>
          <p className="text-gray-600 mb-8">Order confirmation has been sent to {formData.email}</p>
          <Link href="/products" className="btn-primary">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 lg:pt-40 bg-gray-50 min-h-screen">
      <div className="container py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/cart" className="text-gray-500 hover:text-primary">Cart</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className={step === 'shipping' ? 'text-primary' : 'text-gray-500'}>Shipping</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className={step === 'payment' ? 'text-primary' : 'text-gray-500'}>Payment</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {step === 'shipping' && (
              <form onSubmit={handleShippingSubmit}>
                <h2 className="font-serif text-2xl mb-6">Shipping Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      placeholder="Street address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Apartment, suite, etc. (optional)</label>
                    <input
                      type="text"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zip"
                        required
                        value={formData.zip}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full mt-8">
                  CONTINUE TO PAYMENT
                </button>
              </form>
            )}

            {step === 'payment' && (
              <form onSubmit={handlePaymentSubmit}>
                <h2 className="font-serif text-2xl mb-6">Payment</h2>
                
                <div className="bg-white p-6 border mb-6">
                  <h3 className="font-medium mb-4">Shipping to:</h3>
                  <p className="text-gray-600 text-sm">
                    {formData.firstName} {formData.lastName}<br />
                    {formData.address}{formData.apartment && `, ${formData.apartment}`}<br />
                    {formData.city}, {formData.state} {formData.zip}
                  </p>
                  <button 
                    type="button"
                    onClick={() => setStep('shipping')}
                    className="text-sm text-primary underline mt-2"
                  >
                    Edit
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Name on Card</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  This is a demo checkout. No real payment will be processed.
                </p>

                <button type="submit" className="btn-primary w-full mt-8">
                  PLACE ORDER - ${total.toLocaleString()}
                </button>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-8 sticky top-40">
              <h2 className="font-serif text-xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-20 bg-gray-100 flex-shrink-0 overflow-hidden relative">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      )}
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
              </div>

              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
