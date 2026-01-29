"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleCart, openSignIn } from '../store/slices/uiSlice';
import MegaMenu from './MegaMenu';

export default function Header() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((s) => s.cart.items);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 100);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || activeMenu
          ? 'bg-white shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Left - Menu toggle on mobile, Nav on desktop */}
            <div className="flex items-center gap-8">
              <button 
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
              
              <nav className="hidden lg:flex items-center gap-8">
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('woman')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`text-[11px] font-medium tracking-[0.12em] uppercase py-6 transition-opacity ${
                    activeMenu === 'woman' ? 'opacity-50' : 'hover:opacity-60'
                  } ${!scrolled && !activeMenu ? 'text-white' : 'text-black'}`}>
                    WOMAN
                  </button>
                </div>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('man')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`text-[11px] font-medium tracking-[0.12em] uppercase py-6 transition-opacity ${
                    activeMenu === 'man' ? 'opacity-50' : 'hover:opacity-60'
                  } ${!scrolled && !activeMenu ? 'text-white' : 'text-black'}`}>
                    MAN
                  </button>
                </div>
              </nav>
            </div>

            {/* Center - Logo */}
            <Link 
              href="/" 
              className={`text-lg font-medium tracking-[0.15em] uppercase transition-colors ${
                !scrolled && !activeMenu ? 'text-white' : 'text-black'
              }`}
            >
              MAWAL
            </Link>

            {/* Right - Icons */}
            <div className={`flex items-center gap-5 ${
              !scrolled && !activeMenu ? 'text-white' : 'text-black'
            }`}>
              <button aria-label="Search" className="hover:opacity-60 transition-opacity">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
              <button 
                onClick={() => dispatch(openSignIn())}
                aria-label="Account"
                className="hidden sm:block hover:opacity-60 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
                </svg>
              </button>
              <button 
                onClick={() => dispatch(toggleCart())}
                aria-label="Shopping bag"
                className="relative hover:opacity-60 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu Dropdown */}
      <MegaMenu 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200]">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-white">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase">Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <nav className="p-6">
              <ul className="space-y-6">
                <li>
                  <Link 
                    href="/" 
                    className="text-2xl font-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/woman" 
                    className="text-2xl font-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Woman
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/man" 
                    className="text-2xl font-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Man
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products" 
                    className="text-2xl font-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shop All
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-2xl font-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
