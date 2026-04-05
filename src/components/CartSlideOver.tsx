'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '../store/useCartStore';

interface CartSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSlideOver = ({ isOpen, onClose }: CartSlideOverProps) => {
  const items = useCartStore(state => state.items);
  const total = useCartStore(state => state.getTotal());

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cart-slideover">
      <div className="cart-content">
        <button onClick={onClose} className="close-button">×</button>
        <h2>Produit ajouté au panier</h2>
        <div className="cart-items">
          {items.slice(-1).map(item => (
            <div key={item.product.id} className="cart-item">
              <img src={item.product.images[0]} alt={item.product.name} />
              <div>
                <h3>{item.product.name}</h3>
                <p>Quantité: {item.quantity}</p>
                <p>{item.product.price} €</p>
              </div>
            </div>
          ))}
        </div>
        <p>Total: {total} €</p>
        <Link href="/panier" onClick={onClose} className="view-cart">
          Voir le panier complet
        </Link>
      </div>
    </div>
  );
};

export default CartSlideOver;