'use client';

import { useCartStore } from '../store/useCartStore';
import CartSlideOver from './CartSlideOver';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const isCartOpen = useCartStore(state => state.isCartOpen);
  const closeCart = useCartStore(state => state.closeCart);

  return (
    <>
      {children}
      <CartSlideOver isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}