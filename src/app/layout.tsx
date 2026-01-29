import './globals.css';
import { ReactNode } from 'react';
import { StoreProvider } from '../store/StoreProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import WhatsAppButton from '../components/WhatsAppButton';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';
import SeedLoader from '../components/SeedLoader';

export const metadata = {
  title: 'MAWAL | Kashmiri Couture - Handcrafted Heritage from the Valley',
  description: 'Experience the soul of Kashmir through fine handcrafted shawls, pashmina, and couture. Reviving forgotten threads of tradition with master artisans from Srinagar.',
  keywords: 'pashmina, kashmir shawl, kashmiri couture, pheran, handcrafted fashion, luxury kashmir, tilla embroidery, sozni, kani shawl, himalayan cashmere',
  authors: [{ name: 'Mawal Couture' }],
  openGraph: {
    title: 'MAWAL | Kashmiri Couture',
    description: 'Fine handcrafted pashmina, shawls, and couture from the Valley of Kashmir',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicons with Kashmir colors */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#722F37" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased bg-[#FBF9F4]">
        <StoreProvider>
          <SeedLoader />
          <Header />
          {children}
          <Footer />
          <CartSidebar />
          <SignInModal />
          <SignUpModal />
          <WhatsAppButton />
        </StoreProvider>
      </body>
    </html>
  );
}
