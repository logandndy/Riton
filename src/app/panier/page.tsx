'use client';

import { useCartStore } from '../../store/useCartStore';

export default function Panier() {
  const items = useCartStore(state => state.items);
  const total = useCartStore(state => state.getTotal());
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeItem = useCartStore(state => state.removeItem);

  const handleCheckout = async () => {
    // Intégration Stripe Checkout ici
    alert('Redirection vers Stripe Checkout');
  };

  if (items.length === 0) {
    return (
      <div className="panier">
        <h1>Votre panier est vide</h1>
        <a href="/boutique" className="cta-button">Continuer les achats</a>
      </div>
    );
  }

  return (
    <div className="panier">
      <h1>Votre panier</h1>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.product.id} className="cart-item">
            <img src={item.product.images[0]} alt={item.product.name} />
            <div className="item-details">
              <h3>{item.product.name}</h3>
              <p>{item.product.price} €</p>
              <div className="quantity">
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
              </div>
            </div>
            <button onClick={() => removeItem(item.product.id)} className="remove">Supprimer</button>
          </div>
        ))}
      </div>
      <div className="total">
        <h2>Total: {total} €</h2>
        <button onClick={handleCheckout} className="checkout-button">
          Procéder au paiement
        </button>
      </div>
    </div>
  );
}