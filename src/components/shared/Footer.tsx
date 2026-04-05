'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ── Newsletter band ── */}
        <div className="footer-nl">
          <div className="footer-nl-left">
            <p className="footer-nl-eyebrow">Newsletter</p>
            <h3 className="footer-nl-title">Nouveautés &amp; arrivages</h3>
          </div>
          <form
            className="footer-nl-form"
            onSubmit={e => e.preventDefault()}
            aria-label="Inscription newsletter"
          >
            <div className="footer-nl-input-wrap">
              <input
                type="email"
                className="footer-nl-input"
                placeholder="Votre email"
                required
                aria-label="Email"
              />
              <button type="submit" className="footer-nl-btn">
                S&rsquo;inscrire
              </button>
            </div>
            <p className="footer-nl-note">
              Pas de spam. Désinscription à tout moment.
            </p>
          </form>
        </div>

        {/* ── Main grid ── */}
        <div className="footer-grid">

          {/* ── Brand ── */}
          <div>
            <p className="footer-brand-name">Riton</p>
            <p className="footer-description">
              Charcutier et fromager artisan depuis plus de 30 ans, Riton perpétue
              les traditions du terroir ariégeois. Retrouvez-nous chaque semaine
              à la Halle aux Grains de Foix.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* ── Boutique ── */}
          <div>
            <h4 className="footer-section-title">Boutique</h4>
            <ul className="footer-links">
              <li><Link href="/boutique" className="footer-link">Tous nos produits</Link></li>
              <li><Link href="/boutique/charcuterie" className="footer-link">Charcuterie</Link></li>
              <li><Link href="/boutique/fromages" className="footer-link">Fromages</Link></li>
              <li><Link href="/panier" className="footer-link">Mon panier</Link></li>
            </ul>
          </div>

          {/* ── Informations ── */}
          <div>
            <h4 className="footer-section-title">Informations</h4>
            <ul className="footer-links">
              <li><Link href="/ou-nous-trouver" className="footer-link">Où nous trouver</Link></li>
              <li><Link href="/contact" className="footer-link">Nous contacter</Link></li>
              <li><Link href="/cgv" className="footer-link">Conditions de vente</Link></li>
              <li><Link href="/politique-confidentialite" className="footer-link">Confidentialité</Link></li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="footer-section-title">Contact</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span className="footer-contact-text">
                  Halle aux Grains<br />09000 Foix, Ariège
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <span className="footer-contact-text">
                  Mar — Sam : 9h – 19h<br />
                  <span style={{ opacity: .6 }}>Dim &amp; Lun : Fermé</span>
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <a href="mailto:contact@riton.fr" className="footer-contact-link">
                  contact@riton.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom ── */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Riton — Charcuterie &amp; Fromages Artisanaux · Foix, Ariège
          </p>
          <div className="footer-payments">
            <span className="footer-payment-icon">CB</span>
            <span className="footer-payment-icon">VISA</span>
            <span className="footer-payment-icon">MC</span>
            <span className="footer-payment-icon">STRIPE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
