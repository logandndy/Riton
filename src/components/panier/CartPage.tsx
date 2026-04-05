'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '../../store/useCartStore';

export default function CartPage() {
  const items          = useCartStore(state => state.items);
  const total          = useCartStore(state => state.getTotal());
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeItem     = useCartStore(state => state.removeItem);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]         = useState<string | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res  = await fetch('/api/checkout', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Erreur lors du paiement');
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      setIsLoading(false);
    }
  };

  return (
    <div className="cart-page">

      {/* ── Header ── */}
      <div className="cart-header">
        <div className="cart-header-inner">
          <span className="cart-pretitle">Votre commande</span>
          <h1 className="cart-page-title">Panier</h1>
          {items.length > 0 && (
            <p className="cart-header-sub">
              {items.length} article{items.length > 1 ? 's' : ''} sélectionné{items.length > 1 ? 's' : ''}
            </p>
          )}
        </div>
      </div>

      {/* ── Empty state ── */}
      {items.length === 0 ? (
        <div className="cart-empty-state">
          <svg className="cart-empty-svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <h2 className="cart-empty-title">Votre panier est vide</h2>
          <p className="cart-empty-message">
            Nos charcuteries et fromages ariégeois n&apos;attendent que vous.
          </p>
          <Link href="/boutique" className="cart-empty-button">
            Découvrir la boutique
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      ) : (

        <div className="cart-container">

          {/* ════════════ ITEMS ════════════ */}
          <div className="cart-items-section">
            <h2 className="cart-items-title">
              {items.length} article{items.length > 1 ? 's' : ''} dans votre panier
            </h2>

            <ul className="cart-items-list">
              {items.map(item => {
                const category = item.product.metadata?.categorie ?? item.product.metadata?.category ?? null;
                const lineTotal = (item.product.price * item.quantity).toFixed(2);

                return (
                  <li key={item.product.id} className="cart-row">

                    {/* Photo */}
                    <div className="cart-item-img-wrap">
                      {item.product.images[0] ? (
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="100px"
                          className="cart-item-img"
                        />
                      ) : (
                        <div className="cart-item-img-placeholder" />
                      )}
                    </div>

                    {/* Détails */}
                    <div className="cart-item-details-cell">
                      {category && (
                        <span className="cart-item-category">{category}</span>
                      )}
                      <p className="cart-item-name">{item.product.name}</p>
                      <p className="cart-item-unit-price">{item.product.price.toFixed(2)} € / unité</p>
                    </div>

                    {/* Actions */}
                    <div className="cart-item-actions-cell">
                      <div className="cart-quantity-control">
                        <button
                          className="cart-quantity-button"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label="Diminuer la quantité"
                        >−</button>
                        <span className="cart-quantity-value">{item.quantity}</span>
                        <button
                          className="cart-quantity-button"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label="Augmenter la quantité"
                        >+</button>
                      </div>
                      <span className="cart-item-price">{lineTotal} €</span>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeItem(item.product.id)}
                        aria-label={`Retirer ${item.product.name}`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                          <path d="M10 11v6M14 11v6"/>
                          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                        </svg>
                      </button>
                    </div>

                  </li>
                );
              })}
            </ul>

            {/* Reassurance strip sous les articles */}
            <div className="cart-reassurance">
              <div className="cart-reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Paiement 100% sécurisé
              </div>
              <div className="cart-reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                Livraison fraîche sous 24–48h
              </div>
              <div className="cart-reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                France · Belgique · Suisse
              </div>
            </div>
          </div>

          {/* ════════════ SUMMARY ════════════ */}
          <div className="cart-summary">
            <div className="cart-summary-card">

              {/* Kicker */}
              <span className="cart-summary-kicker">Récapitulatif</span>

              {/* Lignes */}
              <div className="cart-summary-lines">
                <div className="cart-summary-field">
                  <span className="cart-summary-field-label">Sous-total</span>
                  <span className="cart-summary-field-value">{total.toFixed(2)} €</span>
                </div>
                <div className="cart-summary-field">
                  <span className="cart-summary-field-label">Livraison</span>
                  <span className="cart-summary-field-value cart-summary-field-value--muted">Calculée à l&apos;étape suivante</span>
                </div>
              </div>

              <div className="cart-summary-divider" />

              {/* Total */}
              <div className="cart-summary-total">
                <div>
                  <p className="cart-summary-total-label">Total estimé</p>
                  <p className="cart-summary-total-note">hors frais de port</p>
                </div>
                <span className="cart-summary-total-amount">{total.toFixed(2)} €</span>
              </div>

              {/* Erreur */}
              {error && (
                <p className="cart-error">{error}</p>
              )}

              {/* CTA */}
              <div className="cart-summary-actions">
                <button
                  className="cart-checkout-btn"
                  onClick={handleCheckout}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="cart-checkout-spinner" aria-hidden="true" />
                      Redirection…
                    </>
                  ) : (
                    <>
                      Commander · {total.toFixed(2)} €
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </>
                  )}
                </button>
                <Link href="/boutique" className="cart-continue-shopping-btn">
                  Continuer mes achats
                </Link>
              </div>

              {/* Trust */}
              <div className="cart-trust">
                <div className="cart-trust-secure">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  Paiement sécurisé via Stripe
                </div>
                <div className="cart-trust-badges">
                  <span className="cart-trust-badge">CB</span>
                  <span className="cart-trust-badge">VISA</span>
                  <span className="cart-trust-badge">MC</span>
                  <span className="cart-trust-badge">Stripe</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}
