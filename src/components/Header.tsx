"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleCart, openSignIn } from '../store/slices/uiSlice';
import MegaMenu from './MegaMenu';
import { PaisleySVG, ChinarLeafSVG } from './KashmirElements';

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
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || activeMenu
          ? 'bg-gradient-to-b from-[#FBF9F4] to-[#FBF9F4]/98 shadow-sm backdrop-blur-sm border-b border-[#D4AF37]/10' 
          : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-[76px]">
            {/* Left - Menu toggle on mobile, Nav on desktop */}
            <div className="flex items-center gap-8">
              <button 
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
              
              <nav className="hidden lg:flex items-center gap-10">
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('woman')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`text-[11px] font-medium tracking-[0.15em] uppercase py-6 transition-all ${
                    activeMenu === 'woman' ? 'text-[#D4AF37]' : 'hover:text-[#722F37]'
                  } ${!scrolled && !activeMenu ? 'text-white' : 'text-[#0A0A0A]'}`}>
                    WOMAN
                  </button>
                  {/* Gold underline indicator */}
                  <span className={`absolute bottom-4 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                    activeMenu === 'woman' ? 'w-full' : 'w-0'
                  }`} />
                </div>
                <div 
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('man')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`text-[11px] font-medium tracking-[0.15em] uppercase py-6 transition-all ${
                    activeMenu === 'man' ? 'text-[#D4AF37]' : 'hover:text-[#722F37]'
                  } ${!scrolled && !activeMenu ? 'text-white' : 'text-[#0A0A0A]'}`}>
                    MAN
                  </button>
                  <span className={`absolute bottom-4 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                    activeMenu === 'man' ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </nav>
            </div>

            {/* Center - Logo with Kashmir styling */}
            <Link 
              href="/" 
              className={`group relative text-xl font-medium tracking-[0.2em] uppercase transition-colors ${
                !scrolled && !activeMenu ? 'text-white' : 'text-[#0A0A0A]'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span className="relative">
                MAWAL
                {/* Decorative star */}
                <span className={`absolute -top-1 -right-4 text-[8px] transition-colors ${
                  !scrolled && !activeMenu ? 'text-[#D4AF37]' : 'text-[#D4AF37]'
                }`}>
                  ✦
                </span>
              </span>
              {/* Subtle gold underline on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Right - Icons */}
            <div className={`flex items-center gap-6 ${
              !scrolled && !activeMenu ? 'text-white' : 'text-[#0A0A0A]'
            }`}>
              <button aria-label="Search" className="hover:text-[#D4AF37] transition-colors">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
              <button 
                onClick={() => dispatch(openSignIn())}
                aria-label="Account"
                className="hidden sm:block hover:text-[#D4AF37] transition-colors"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
                </svg>
              </button>
              <button 
                onClick={() => dispatch(toggleCart())}
                aria-label="Shopping bag"
                className="relative hover:text-[#D4AF37] transition-colors"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#722F37] text-white text-[9px] font-medium flex items-center justify-center rounded-full">
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

      {/* Mobile Menu - Kashmir styled */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200]">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-full max-w-sm bg-[#FBF9F4] overflow-hidden">
            {/* Decorative paisley background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none kashmir-pattern-bg" />
            
            {/* Header */}
            <div className="relative flex items-center justify-between p-6 border-b border-[#D4AF37]/20">
              <div className="flex items-center gap-3">
                <ChinarLeafSVG size={16} color="#722F37" />
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#722F37]">Menu</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close"
                className="hover:text-[#722F37] transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="relative p-8">
              <ul className="space-y-8">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/woman', label: 'Woman' },
                  { href: '/man', label: 'Man' },
                  { href: '/products', label: 'Shop All' },
                  { href: '/about', label: 'Our Story' },
                  { href: '/contact', label: 'Contact' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="group flex items-center gap-4 text-2xl font-light text-gray-800 hover:text-[#722F37] transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="w-0 group-hover:w-6 h-px bg-[#D4AF37] transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Decorative element */}
              <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
                <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-4">Kashmiri Couture</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Handcrafted pieces rooted in Kashmir&apos;s rich heritage.
                </p>
              </div>
            </nav>
            
            {/* Bottom decoration */}
            <div className="absolute bottom-8 left-8 opacity-20">
              <PaisleySVG size={60} color="#722F37" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
