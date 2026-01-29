"use client";
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import { removeItem, updateQuantity, clearCart } from '../../store/slices/cartSlice';

export default function CartPage() {
  const items = useAppSelector((s: RootState) => s.cart.items);
  const dispatch = useAppDispatch();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="pt-32 lg:pt-40">
      <div className="container py-8 lg:py-12">
        <h1 className="font-serif text-3xl lg:text-4xl mb-8">Shopping Bag</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-gray-300">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 6h15l-1.5 9h-12z"/>
                <circle cx="9" cy="20" r="1"/>
                <circle cx="18" cy="20" r="1"/>
                <path d="M6 6L5 1H2"/>
              </svg>
            </div>
            <p className="text-gray-500 mb-6">Your shopping bag is empty.</p>
            <Link href="/products" className="btn-primary">
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2">
              <div className="border-b pb-4 mb-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">{items.length} item{items.length > 1 ? 's' : ''}</span>
                <button 
                  onClick={() => dispatch(clearCart())} 
                  className="text-sm text-gray-500 hover:text-primary underline"
                >
                  Clear all
                </button>
              </div>

              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    {/* Image */}
                    <div className="w-32 h-40 bg-gray-100 flex-shrink-0 overflow-hidden">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <Link href={`/products/${item.id}`} className="font-serif text-lg hover:underline">
                        {item.name}
                      </Link>
                      <p className="text-gray-600 mt-1">${item.price.toLocaleString()}</p>
                      
                      {/* Quantity */}
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border">
                          <button 
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => dispatch(removeItem(item.id))}
                          className="text-sm text-gray-500 hover:text-primary underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Line Total */}
                    <div className="text-right">
                      <p className="font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 sticky top-40">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="border-t mt-6 pt-6">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Tax included. Shipping calculated at checkout.
                  </p>
                </div>

                <Link href="/checkout" className="btn-primary w-full text-center block mt-6">
                  PROCEED TO CHECKOUT
                </Link>

                <Link href="/products" className="block text-center text-sm mt-4 underline hover:no-underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
