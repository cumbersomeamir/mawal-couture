"use client";
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import { removeItem, updateQuantity } from '../../store/slices/cartSlice';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.cart.items);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="pt-20 lg:pt-32 min-h-screen">
      <div className="container py-8 lg:py-12">
        <h1 className="text-2xl lg:text-4xl font-light tracking-tight mb-8 lg:mb-12">Shopping Bag</h1>

        {items.length === 0 ? (
          <div className="text-center py-12 lg:py-16">
            <p className="text-[14px] text-gray-500 mb-6 lg:mb-8">Your bag is empty</p>
            <Link href="/products" className="inline-block px-6 py-3 border border-black text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Items */}
            <div className="lg:col-span-2">
              {/* Desktop Header */}
              <div className="border-b border-gray-200 pb-4 mb-6 hidden lg:grid grid-cols-12 gap-4 text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <ul className="space-y-6 lg:space-y-8">
                {items.map((item) => (
                  <li key={item.id} className="pb-6 lg:pb-8 border-b border-gray-100">
                    {/* Mobile Layout */}
                    <div className="flex gap-4 lg:hidden">
                      <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[14px] font-medium mb-1">{item.name}</h3>
                        <p className="text-[13px] text-gray-500 mb-3">${item.price}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-gray-200">
                            <button 
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                              className="w-10 h-10 flex items-center justify-center text-gray-500 active:bg-gray-100"
                            >
                              −
                            </button>
                            <span className="w-10 text-center text-[13px]">{item.quantity}</span>
                            <button 
                              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                              className="w-10 h-10 flex items-center justify-center text-gray-500 active:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          <p className="text-[14px] font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                        
                        <button 
                          onClick={() => dispatch(removeItem(item.id))}
                          className="text-[11px] text-gray-400 underline mt-3 min-h-0"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:grid grid-cols-12 gap-4 items-start">
                      <div className="col-span-6 flex gap-4">
                        <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                          {item.image && (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <h3 className="text-[14px] font-medium mb-1">{item.name}</h3>
                          <p className="text-[13px] text-gray-500 mb-3">${item.price}</p>
                          <button 
                            onClick={() => dispatch(removeItem(item.id))}
                            className="text-[11px] text-gray-400 underline hover:text-black"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 flex justify-center">
                        <div className="flex items-center border border-gray-200">
                          <button 
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-[13px]">{item.quantity}</span>
                          <button 
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 text-right text-[13px]">
                        ${item.price}
                      </div>

                      <div className="col-span-2 text-right text-[14px] font-medium">
                        ${(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Summary - Sticky on mobile */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 lg:p-8 sticky top-24">
                <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 mb-6">Summary</h3>
                
                <div className="space-y-3 mb-6 lg:mb-8">
                  <div className="flex justify-between text-[13px]">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[13px] text-gray-500">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between text-[14px] font-medium border-t border-gray-200 pt-4 mb-6 lg:mb-8">
                  <span>Total</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>

                <Link 
                  href="/checkout" 
                  className="block w-full py-4 bg-black text-white text-center text-[11px] font-medium tracking-[0.15em] uppercase hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
