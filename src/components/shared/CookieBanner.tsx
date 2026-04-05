'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'riton_cookies_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(COOKIE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (SSR guard)
    }
  }, []);

  const respond = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch { /* noop */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="alertdialog" aria-live="polite" aria-label="Consentement aux cookies">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-body">
          <span className="cookie-banner-icon" aria-hidden="true">🍪</span>
          <p className="cookie-banner-text">
            Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser notre trafic.{' '}
            <Link href="/politique-confidentialite" className="cookie-banner-link">
              En savoir plus
            </Link>
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            className="cookie-btn cookie-btn--decline"
            onClick={() => respond('declined')}
            aria-label="Refuser les cookies non essentiels"
          >
            Refuser
          </button>
          <button
            className="cookie-btn cookie-btn--accept"
            onClick={() => respond('accepted')}
            aria-label="Accepter tous les cookies"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
