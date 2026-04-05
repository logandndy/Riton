'use client';

import Image from 'next/image';

const NL_IMG = 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80';

export default function NewsletterSection() {
  return (
    <section className="nl-section" aria-label="Newsletter">

      {/* ── Left — texte + formulaire ── */}
      <div className="nl-content">
        <div className="nl-inner">

          <span className="nl-kicker">Newsletter</span>

          <h2 className="nl-title">
            Restez dans<br />la <em>confidence</em>
          </h2>

          <p className="nl-subtitle">
            Arrivages du marché, recettes de saison, nouvelles
            du terroir ariégeois — Riton vous écrit quand il
            y a vraiment quelque chose à dire.
          </p>

          {/* Badges-promesse */}
          <ul className="nl-promises">
            <li className="nl-promise">
              <span className="nl-promise-dot" aria-hidden="true" />
              1 à 2 emails par mois, pas plus
            </li>
            <li className="nl-promise">
              <span className="nl-promise-dot" aria-hidden="true" />
              Désinscription en un clic
            </li>
          </ul>

          <form
            className="nl-form"
            onSubmit={e => e.preventDefault()}
            aria-label="Inscription à la newsletter"
          >
            <div className="nl-input-group">
              <input
                type="email"
                className="nl-input"
                placeholder="votre@email.fr"
                required
                aria-label="Adresse email"
              />
              <button type="submit" className="nl-submit" aria-label="S'inscrire">
                <span className="nl-submit-text">S&rsquo;inscrire</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
            <p className="nl-legal">
              Vos données restent chez nous. Aucune revente, aucun spam.
            </p>
          </form>

        </div>
      </div>

      {/* ── Right — photo ── */}
      <div className="nl-visual" aria-hidden="true">
        <Image
          src={NL_IMG}
          alt=""
          fill
          sizes="45vw"
          className="nl-visual-img"
        />
        <div className="nl-visual-overlay" />
        {/* Floating quote */}
        <div className="nl-visual-badge">
          <p className="nl-visual-quote">
            &ldquo;Trente ans à choisir le meilleur pour vous.&rdquo;
          </p>
          <span className="nl-visual-author">— Riton, Foix</span>
        </div>
      </div>

    </section>
  );
}
