"use client";
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { RootState } from '../store/store';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';
import { closeCart } from '../store/slices/uiSlice';
import { ChinarLeafSVG, EmbroideryLine } from './KashmirElements';

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
        {/* Background Pattern */}
        <div className="absolute inset-0 kashmir-pattern-bg opacity-20 pointer-events-none" />
        
        {/* Header */}
        <div className="relative cart-drawer-header">
          <div className="flex items-center gap-2">
            <ChinarLeafSVG size={16} color="#722F37" />
            <h2 
              className="text-sm font-medium tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Shopping Bag ({items.length})
            </h2>
          </div>
          <button 
            onClick={() => dispatch(closeCart())}
            aria-label="Close cart"
            className="hover:text-[#722F37] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="relative cart-drawer-content">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ChinarLeafSVG size={40} color="#D4AF37" className="mb-6 opacity-50" />
              <p className="text-sm text-gray-500 mb-6">Your bag is empty</p>
              <button 
                onClick={() => dispatch(closeCart())}
                className="text-[11px] tracking-[0.15em] uppercase text-[#722F37] underline hover:no-underline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 p-4 bg-white border border-[#D4AF37]/20 relative">
                  {/* Gold corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#D4AF37]/20" />
                  
                  {/* Image */}
                  <div className="w-20 h-28 bg-[#F5F0E6] flex-shrink-0 overflow-hidden">
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
                    <h3 
                      className="text-[13px] font-medium mb-1 text-gray-800"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-[12px] text-[#D4AF37] font-medium mb-auto">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-[#D4AF37]/30">
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#722F37] hover:bg-[#D4AF37]/10 transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-[12px]">{item.quantity}</span>
                        <button 
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#722F37] hover:bg-[#D4AF37]/10 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button 
                        onClick={() => dispatch(removeItem(item.id))}
                        className="text-[10px] text-gray-400 hover:text-[#722F37] transition-colors"
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
          <div className="relative cart-drawer-footer">
            <EmbroideryLine className="absolute top-0 left-0 right-0" />
            
            <div className="flex items-center justify-between mb-6 pt-4">
              <span className="text-[11px] tracking-[0.15em] uppercase text-gray-500">Subtotal</span>
              <span 
                className="text-lg font-medium text-[#722F37]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ${subtotal.toLocaleString()}
              </span>
            </div>
            <Link 
              href="/checkout"
              onClick={() => dispatch(closeCart())}
              className="btn btn-primary w-full"
            >
              Checkout
            </Link>
            <p className="text-[10px] text-gray-500 text-center mt-4">
              Shipping calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
