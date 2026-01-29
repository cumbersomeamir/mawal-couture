"use client";
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { RootState } from '../store/store';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';
import { closeCart } from '../store/slices/uiSlice';

export default function CartSidebar() {
  const dispatch = useAppDispatch();
  const cartOpen = useAppSelector((state: RootState) => state.ui.cartOpen);
  const items = useAppSelector((state: RootState) => state.cart.items);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-drawer-overlay ${cartOpen ? 'open' : ''}`}
        onClick={() => dispatch(closeCart())}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">Shopping Bag ({items.length})</h2>
          <button 
            onClick={() => dispatch(closeCart())}
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="cart-drawer-content">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-body text-gray-500 mb-6">Your bag is empty</p>
              <button 
                onClick={() => dispatch(closeCart())}
                className="text-small underline hover:no-underline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-28 bg-gray-100 flex-shrink-0">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-small font-medium mb-1">{item.name}</h3>
                    <p className="text-small text-gray-500 mb-auto">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-gray-200">
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-small">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button 
                        onClick={() => dispatch(removeItem(item.id))}
                        className="text-[11px] text-gray-400 hover:text-black underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="flex items-center justify-between mb-6">
              <span className="text-small">Subtotal</span>
              <span className="text-body font-medium">${subtotal.toLocaleString()}</span>
            </div>
            <Link 
              href="/checkout"
              onClick={() => dispatch(closeCart())}
              className="btn btn-primary w-full"
            >
              Checkout
            </Link>
            <p className="text-[11px] text-gray-500 text-center mt-4">
              Shipping calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
