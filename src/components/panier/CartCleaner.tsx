'use client';

import { useEffect } from 'react';
import { useCartStore } from '../../store/useCartStore';

/**
 * Clears the cart on mount — used on the order confirmation page
 * so the cart is only emptied after a successful Stripe payment.
 */
export default function CartCleaner() {
  const clearCart = useCartStore(state => state.clearCart);
  useEffect(() => { clearCart(); }, [clearCart]);
  return null;
}
