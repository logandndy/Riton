'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '../../store/useCartStore';

const NAV_LINKS = [
  { href: '/',                    label: 'Accueil' },
  { href: '/boutique',            label: 'La Boutique' },
  { href: '/boutique/charcuterie',label: 'Charcuterie' },
  { href: '/boutique/fromages',   label: 'Fromages' },
  { href: '/ou-nous-trouver',     label: 'Nous trouver' },
  { href: '/contact',             label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const itemCount = useCartStore(state => state.getItemCount());
  const openCart  = useCartStore(state => state.openCart);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-container">

        {/* ── Logo ── */}
        <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)} aria-label="Riton — accueil">
          <span className="navbar-logo-text">Riton</span>
        </Link>

        {/* ── Desktop menu ── */}
        <ul className="navbar-menu" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`navbar-menu-link${isActive(href) ? ' active' : ''}`}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Actions ── */}
        <div className="navbar-actions">
          <button
            className="navbar-cart-button"
            onClick={openCart}
            aria-label={`Ouvrir le panier — ${itemCount} article${itemCount !== 1 ? 's' : ''}`}
          >
            {/* Bag SVG icon */}
            <svg className="navbar-cart-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className="navbar-cart-label">Panier</span>
            {itemCount > 0 && (
              <span className="navbar-cart-count" aria-hidden="true">{itemCount}</span>
            )}
          </button>

          {/* Animated hamburger */}
          <button
            className={`navbar-toggle${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-menu"
          >
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div id="navbar-mobile-menu" className="navbar-mobile-menu" role="dialog" aria-label="Menu mobile">
          <ul role="list">
            {NAV_LINKS.map(({ href, label }, i) => (
              <li key={href}>
                {/* Visual divider before "Nous trouver" */}
                {i === 4 && <div className="navbar-mobile-divider" aria-hidden="true" />}
                <Link
                  href={href}
                  className={`navbar-mobile-link${isActive(href) ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
