"use client";
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { RootState } from '../store/store';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';
import { closeCart } from '../store/slices/uiSlice';

export default function CartSidebar() {
  const items = useAppSelector((state: RootState) => state.cart.items);
  const cartOpen = useAppSelector((s: RootState) => s.ui.cartOpen);
  const dispatch = useAppDispatch();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${cartOpen ? 'open' : ''}`}
        onClick={() => dispatch(closeCart())}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-serif tracking-wider">SHOPPING BAG</h2>
            <button 
              onClick={() => dispatch(closeCart())} 
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your cart is empty.</p>
                <Link 
                  href="/products" 
                  onClick={() => dispatch(closeCart())}
                  className="text-sm underline hover:no-underline"
                >
                  Continue shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Image */}
                    <div className="w-24 h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
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
                      <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">${item.price.toFixed(2)}</p>
                      
                      {/* Quantity */}
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                          className="w-8 h-8 border flex items-center justify-center text-sm hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="w-8 h-8 border flex items-center justify-center text-sm hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button 
                        onClick={() => dispatch(removeItem(item.id))}
                        className="text-xs text-gray-500 underline mt-2 hover:text-gray-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <Link 
                href="/checkout"
                onClick={() => dispatch(closeCart())}
                className="btn-primary w-full text-center block"
              >
                CHECKOUT
              </Link>
              <Link 
                href="/cart"
                onClick={() => dispatch(closeCart())}
                className="block text-center text-sm mt-3 underline hover:no-underline"
              >
                View Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
