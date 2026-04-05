import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartSlideOver from '../components/CartSlideOver';
import { useCartStore } from '../store/useCartStore';

export const metadata: Metadata = {
  title: 'Riton - Charcuterie et Fromages Artisanaux',
  description: 'Découvrez les produits artisanaux de Riton : charcuterie et fromages de qualité premium.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isCartOpen = useCartStore(state => state.isCartOpen);
  const closeCart = useCartStore(state => state.closeCart);

  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CartSlideOver isOpen={isCartOpen} onClose={closeCart} />
      </body>
    </html>
  );
}
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
