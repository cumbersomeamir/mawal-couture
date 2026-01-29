import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#4A1C22] to-[#0A0A0A] text-white overflow-hidden">
      {/* Paisley pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-8 0-15 7-15 20s7 30 15 30 15-17 15-30S38 5 30 5zm0 5c5 0 10 5 10 15s-5 25-10 25-10-15-10-25 5-15 10-15z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,120 L0,80 L150,60 L300,75 L450,45 L600,70 L750,35 L900,65 L1050,40 L1200,60 L1350,50 L1440,65 L1440,120 Z" 
            fill="#D4AF37"
            fillOpacity="0.15"
          />
          <path 
            d="M0,120 L0,90 L200,70 L400,85 L600,55 L800,80 L1000,50 L1200,75 L1440,60 L1440,120 Z" 
            fill="#722F37"
            fillOpacity="0.1"
          />
        </svg>
      </div>
      
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      
      <div className="container relative py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20 mb-16 lg:mb-20">
          {/* Shop */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-6 flex items-center gap-2">
              <span>◆</span> Shop
            </h4>
            <ul className="space-y-4">
              {[
                { href: '/products?gender=woman', label: 'Woman' },
                { href: '/products?gender=man', label: 'Man' },
                { href: '/products', label: 'All Products' },
                { href: '/products?collection=pure-pashmina', label: 'Pashmina' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="group text-[13px] text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-0 hover:gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#D4AF37] transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-6 flex items-center gap-2">
              <span>◆</span> Company
            </h4>
            <ul className="space-y-4">
              {[
                { href: '/about', label: 'Our Story' },
                { href: '/initiatives', label: 'Initiatives' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="group text-[13px] text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-0 hover:gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#D4AF37] transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-6 flex items-center gap-2">
              <span>◆</span> Visit Us
            </h4>
            <address className="not-italic space-y-4">
              <p className="text-[13px] text-gray-400 leading-relaxed">
                1st Floor, Aircel Building,<br />
                Near Gurudwara, Baghat,<br />
                Srinagar, J&K – 190005
              </p>
              <p>
                <a 
                  href="tel:+918899253285" 
                  className="text-[13px] text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  +91 88992 53285
                </a>
              </p>
              <p>
                <a 
                  href="mailto:contact@mawalcouture.com" 
                  className="text-[13px] text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  contact@mawalcouture.com
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-6 flex items-center gap-2">
              <span>◆</span> Newsletter
            </h4>
            <p className="text-[13px] text-gray-400 mb-5 leading-relaxed">
              Subscribe for exclusive stories from Kashmir and early access to new collections.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-white/5 border border-[#D4AF37]/30 py-4 px-4 pr-14 text-[13px] text-white placeholder-gray-500 focus:border-[#D4AF37] transition-colors outline-none"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[#D4AF37] hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Logo */}
        <div className="flex flex-col items-center mb-12">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-medium tracking-[0.25em] uppercase mb-6 text-white hover:text-[#D4AF37] transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            MAWAL
          </Link>
          
          {/* Tagline */}
          <p className="text-[11px] tracking-[0.2em] uppercase text-gray-500 mb-6">
            Kashmiri Couture Since 2018
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-8">
            {[
              { 
                href: 'https://instagram.com', 
                label: 'Instagram',
                icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>,
                extra: <circle cx="12" cy="12" r="3.5"/>
              },
              { 
                href: 'https://facebook.com', 
                label: 'Facebook',
                icon: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              },
              { 
                href: 'https://pinterest.com', 
                label: 'Pinterest',
                icon: <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              },
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-2 text-gray-500 hover:text-[#D4AF37] transition-colors"
                aria-label={social.label}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  {social.icon}
                  {social.extra}
                </svg>
                <span className="text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-[#D4AF37]/20">
          {/* Decorative center element */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4A1C22] px-4">
            <span className="text-[#D4AF37] text-sm">❈</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-[11px] text-gray-500">
              © {new Date().getFullYear()} Mawal Couture. All rights reserved.
            </p>
            <span className="hidden md:inline text-gray-600">•</span>
            <p className="text-[11px] text-gray-500">
              Handcrafted with love in Kashmir
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
