'use client';

import { useCartStore } from '../../store/useCartStore';
import CartSlideOver from './CartSlideOver';
import CookieBanner from './CookieBanner';
import ScrollReveal from './ScrollReveal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const isCartOpen = useCartStore(state => state.isCartOpen);
  const closeCart = useCartStore(state => state.closeCart);

  return (
    <>
      <ScrollReveal />
      <main>{children}</main>
      <CartSlideOver isOpen={isCartOpen} onClose={closeCart} />
      <CookieBanner />
    </>
  );
}
