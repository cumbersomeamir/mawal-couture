"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleCart, openSignIn } from '../store/slices/uiSlice';
import MegaMenu from './MegaMenu';

export default function Header() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((s) => s.cart.items);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              {/* Left: Menu icon and Search */}
              <div className="flex items-center gap-4 w-48">
                <button 
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Open menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                </button>
                <button 
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Search"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </button>
              </div>

              {/* Center: Logo */}
              <div className="flex flex-col items-center">
                <Link href="/" className="text-center">
                  <h1 className="text-2xl font-serif tracking-[0.2em] font-normal">MAWAL COUTURE</h1>
                  <div className="text-xs tracking-[0.15em] mt-1 text-gray-600">WOMAN | MAN</div>
                </Link>
              </div>

              {/* Right: Cart and Account */}
              <div className="flex items-center gap-4 w-48 justify-end">
                <button 
                  onClick={() => dispatch(toggleCart())}
                  className="p-2 hover:opacity-70 transition-opacity relative"
                  aria-label="Cart"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 6h15l-1.5 9h-12z"/>
                    <circle cx="9" cy="20" r="1"/>
                    <circle cx="18" cy="20" r="1"/>
                    <path d="M6 6L5 1H2"/>
                  </svg>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c9847a] text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                </button>
                <button 
                  onClick={() => dispatch(openSignIn())}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Account"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="border-t border-gray-200/30 bg-white/80 backdrop-blur-sm">
            <div className="container">
              <ul className="flex items-center justify-center gap-10 py-3 text-sm tracking-wide">
                <li>
                  <Link href="/" className="hover:opacity-70 transition-opacity">HOME</Link>
                </li>
                <li 
                  className="relative py-2"
                  onMouseEnter={() => setActiveMenu('woman')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link href="/woman" className="hover:opacity-70 transition-opacity">WOMAN</Link>
                  {/* Invisible bridge to mega menu */}
                  {activeMenu === 'woman' && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen h-4" />
                  )}
                </li>
                <li
                  className="relative py-2"
                  onMouseEnter={() => setActiveMenu('man')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link href="/man" className="hover:opacity-70 transition-opacity">MAN</Link>
                  {/* Invisible bridge to mega menu */}
                  {activeMenu === 'man' && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen h-4" />
                  )}
                </li>
                <li>
                  <Link href="/contact" className="hover:opacity-70 transition-opacity">CONTACT</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden bg-white/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Left: Hamburger and Search */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="p-2"
                aria-label="Open menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
              <button className="p-2" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </div>

            {/* Center: Logo */}
            <Link href="/" className="text-center">
              <h1 className="text-lg font-serif tracking-[0.15em]">MAWAL COUTURE</h1>
              <div className="text-[10px] tracking-[0.1em] text-gray-600">WOMAN | MAN</div>
            </Link>

            {/* Right: Cart and Account */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => dispatch(toggleCart())}
                className="p-2 relative"
                aria-label="Cart"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6h15l-1.5 9h-12z"/>
                  <circle cx="9" cy="20" r="1"/>
                  <circle cx="18" cy="20" r="1"/>
                  <path d="M6 6L5 1H2"/>
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c9847a] text-white text-[10px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
              <button 
                onClick={() => dispatch(openSignIn())}
                className="p-2"
                aria-label="Account"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-serif text-lg tracking-wider">Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                <li><Link href="/" className="block py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>HOME</Link></li>
                <li><Link href="/woman" className="block py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>WOMAN</Link></li>
                <li><Link href="/man" className="block py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>MAN</Link></li>
                <li><Link href="/contact" className="block py-2 text-lg" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
