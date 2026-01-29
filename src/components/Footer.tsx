import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="container py-12 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 mb-12 lg:mb-16">
          {/* Shop */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-500 mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products?gender=woman" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Woman
                </Link>
              </li>
              <li>
                <Link href="/products?gender=man" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Man
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?collection=pure-pashmina" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Pashmina
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-500 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/initiatives/project-matamaal" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[13px] text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-500 mb-6">
              Contact
            </h4>
            <address className="not-italic">
              <p className="text-[13px] text-gray-400 mb-3">
                1st Floor, Aircel Building,<br />
                Near Gurudwara, Baghat,<br />
                Srinagar, J&K – 190005
              </p>
              <p className="text-[13px]">
                <a href="tel:+918899253285" className="text-gray-400 hover:text-white transition-colors">
                  +91 88992 53285
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-gray-500 mb-4 lg:mb-6">
              Newsletter
            </h4>
            <p className="text-[12px] lg:text-[13px] text-gray-400 mb-4">
              Subscribe for exclusive updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email"
                className="flex-1 min-w-0 bg-transparent border-b border-gray-700 py-3 text-[13px] text-white placeholder-gray-600 focus:border-white transition-colors outline-none"
              />
              <button type="submit" className="ml-3 w-12 h-12 flex items-center justify-center text-[14px] text-gray-500 hover:text-white transition-colors">
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-800">
          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <circle cx="12" cy="12" r="3.5"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          <p className="text-[11px] text-gray-600">
            © {new Date().getFullYear()} Mawal Couture
          </p>
        </div>
      </div>
    </footer>
  );
}
