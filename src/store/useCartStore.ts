import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../lib/stripe';

export type { Product };

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,

      addItem: (product) => {
        const items = get().items;
        const existingIndex = items.findIndex(item => item.product.id === product.id);
        if (existingIndex >= 0) {
          const updated = items.map((item, i) =>
            i === existingIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updated, isCartOpen: true });
        } else {
          set({ items: [...items, { product, quantity: 1 }], isCartOpen: true });
        }
      },

      removeItem: (productId) => {
        set({ items: get().items.filter(item => item.product.id !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set({
          items: get().items.map(item =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotal: () =>
        get().items.reduce((total, item) => total + item.product.price * item.quantity, 0),

      getItemCount: () =>
        get().items.reduce((count, item) => count + item.quantity, 0),

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
    }),
    {
      name: 'riton-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
