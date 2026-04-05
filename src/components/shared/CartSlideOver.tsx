'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '../../store/useCartStore';

interface CartSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSlideOver({ isOpen, onClose }: CartSlideOverProps) {
  const items          = useCartStore(state => state.items);
  const total          = useCartStore(state => state.getTotal());
  const itemCount      = useCartStore(state => state.getItemCount());
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeItem     = useCartStore(state => state.removeItem);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cso-overlay${isOpen ? ' active' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`cso-panel${isOpen ? ' active' : ''}`}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Panier"
      >
        {/* ── Header ── */}
        <div className="cso-header">
          <div className="cso-header-left">
            <span className="cso-header-count">
              {itemCount} article{itemCount !== 1 ? 's' : ''}
            </span>
            <h2 className="cso-header-title">Votre Panier</h2>
          </div>
          <button className="cso-close" onClick={onClose} aria-label="Fermer le panier">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* ── Body ── */}
        <div className="cso-body">
          {items.length === 0 ? (

            /* Empty state */
            <div className="cso-empty">
              <svg className="cso-empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <p className="cso-empty-title">Votre panier est vide</p>
              <p className="cso-empty-sub">
                Ajoutez nos charcuteries et fromages artisanaux pour commencer.
              </p>
              <Link href="/boutique" className="cso-empty-cta" onClick={onClose}>
                Découvrir la boutique
              </Link>
            </div>

          ) : (

            /* Items list */
            <ul className="cso-items" role="list">
              {items.map(({ product, quantity }) => {
                const category = product.metadata?.categorie ?? product.metadata?.category ?? null;
                const lineTotal = (product.price * quantity).toFixed(2);

                return (
                  <li key={product.id} className="cso-item">

                    {/* Photo */}
                    <div className="cso-item-photo">
                      {product.images[0] ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="72px"
                          className="cso-item-img"
                        />
                      ) : (
                        <div className="cso-item-img-placeholder" aria-hidden="true" />
                      )}
                    </div>

                    {/* Details */}
                    <div className="cso-item-details">
                      <div className="cso-item-top">
                        {category && (
                          <span className="cso-item-category">{category}</span>
                        )}
                        <p className="cso-item-name">{product.name}</p>
                        <p className="cso-item-unit-price">{product.price.toFixed(2)} € / unité</p>
                      </div>

                      <div className="cso-item-bottom">
                        {/* Quantity stepper */}
                        <div className="cso-qty" role="group" aria-label={`Quantité de ${product.name}`}>
                          <button
                            className="cso-qty-btn"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            aria-label="Diminuer la quantité"
                          >
                            −
                          </button>
                          <span className="cso-qty-value" aria-live="polite">{quantity}</span>
                          <button
                            className="cso-qty-btn"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            aria-label="Augmenter la quantité"
                          >
                            +
                          </button>
                        </div>

                        {/* Line total */}
                        <span className="cso-item-total">{lineTotal} €</span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      className="cso-item-remove"
                      onClick={() => removeItem(product.id)}
                      aria-label={`Supprimer ${product.name}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                        <path d="M10 11v6M14 11v6"/>
                        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                      </svg>
                    </button>

                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* ── Footer ── */}
        {items.length > 0 && (
          <div className="cso-footer">
            <div className="cso-subtotal-row">
              <span className="cso-subtotal-label">Sous-total</span>
              <span className="cso-subtotal-amount">{total.toFixed(2)} €</span>
            </div>
            <p className="cso-shipping-note">
              Frais de port calculés à l&apos;étape suivante · Livraison sous 24–48h
            </p>
            <Link
              href="/panier"
              className="cso-checkout-btn"
              onClick={onClose}
            >
              Commander · {total.toFixed(2)} €
            </Link>
            <button className="cso-continue-btn" onClick={onClose}>
              Continuer mes achats
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
