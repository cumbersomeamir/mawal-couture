import './globals.css';
import { ReactNode } from 'react';
import { StoreProvider } from '../store/StoreProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import WhatsAppButton from '../components/WhatsAppButton';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';

export const metadata = {
  title: 'Mawal Couture | Fine Kashmiri Handcrafted Couture',
  description: 'Mawal Couture - Fine handcrafted shawls, pashmina, and couture from Kashmir. Reviving the forgotten threads of Kashmiri tradition and culture.',
  keywords: 'pashmina, shawl, kashmir, handcrafted, couture, pheran, kashmiri fashion',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <StoreProvider>
          <Header />
          <main>{children}</main>
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
