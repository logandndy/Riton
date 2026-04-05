'use client';

import { useState } from 'react';
import { useCartStore } from '../../store/useCartStore';
import type { Product } from '../../lib/stripe';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore(state => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-quantity-cart">
      <button
        className="product-add-to-cart-btn"
        onClick={handleAdd}
        disabled={added}
      >
        {added ? '✓ Ajouté au panier !' : 'Ajouter au panier'}
      </button>
    </div>
  );
}
