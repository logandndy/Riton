'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LOCATION_IMG = '/market.jpg';
const MARKET_IMG   = 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80';
const STALL_IMG    = 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=1400&q=80';

const WHY_ITEMS = [
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22a10 10 0 100-20 10 10 0 000 20z"/><path d="M8 12s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
    ),
    title: 'Goûter avant d\'acheter',
    body: 'Rien ne vaut une dégustation pour choisir en toute confiance.',
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    ),
    title: 'Conseils personnalisés',
    body: 'Riton vous guide et raconte l\'histoire derrière chaque produit.',
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    ),
    title: 'Produits de saison',
    body: 'La sélection évolue chaque semaine selon les arrivages.',
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>
    ),
    title: 'Plateaux sur mesure',
    body: 'Anniversaire, mariage, entreprise — composez un plateau d\'exception.',
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ),
    title: 'Rencontrer les artisans',
    body: 'Certains producteurs partenaires viennent présenter leurs créations.',
  },
];

export default function LocationPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky  = stickyRef.current;
    if (!section || !sticky) return;

    const tick = () => {
      const rect    = section.getBoundingClientRect();
      const scrollH = section.offsetHeight - window.innerHeight;
      const p       = Math.max(0, Math.min(1, -rect.top / scrollH));
      sticky.style.setProperty('--p', p.toString());
    };

    window.addEventListener('scroll', tick, { passive: true });
    tick();
    return () => window.removeEventListener('scroll', tick);
  }, []);

  return (
    <div className="lp">

      {/* ── Curtain intro ────────────────────────────────────── */}
      <div className="lp-curtain-wrap" ref={sectionRef}>
        <div className="lp-curtain-sticky" ref={stickyRef}>

          {/* Background revealed as panels open */}
          <div className="lp-curtain-bg" aria-hidden="true">
            <Image
              src={MARKET_IMG}
              alt=""
              fill
              sizes="100vw"
              className="lp-curtain-bg-img"
              priority
            />
            <div className="lp-curtain-bg-overlay" />
            <div className="lp-curtain-bg-text">
              <span className="lp-curtain-bg-eyebrow">Ariège · Pyrénées</span>
              <h1 className="lp-curtain-bg-title">
                Au cœur<br />de <em>Foix</em>
              </h1>
            </div>
          </div>

          {/* Left panel — Mardi */}
          <div className="lp-curtain-left">
            <Image
              src={LOCATION_IMG}
              alt=""
              fill
              sizes="50vw"
              className="lp-curtain-panel-img"
              priority
            />
            <div className="lp-curtain-panel-overlay" />
            <div className="lp-curtain-panel-content">
              <span className="lp-curtain-kicker">Rendez-vous</span>
              <span className="lp-curtain-day">Mardi</span>
              <span className="lp-curtain-time">9h00 – 13h00</span>
              <span className="lp-curtain-sub">Marché hebdomadaire de Foix</span>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="lp-curtain-divider" aria-hidden="true" />

          {/* Right panel — Samedi */}
          <div className="lp-curtain-right">
            <Image
              src={STALL_IMG}
              alt=""
              fill
              sizes="50vw"
              className="lp-curtain-panel-img"
              priority
            />
            <div className="lp-curtain-panel-overlay" />
            <div className="lp-curtain-panel-content">
              <span className="lp-curtain-badge">Marché principal</span>
              <span className="lp-curtain-kicker">deux fois par semaine</span>
              <span className="lp-curtain-day">Samedi</span>
              <span className="lp-curtain-time">8h30 – 13h00</span>
              <span className="lp-curtain-sub">Grand marché — arrivages exceptionnels</span>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="lp-curtain-hint" aria-hidden="true">
            <span className="lp-curtain-hint-label">Défiler</span>
            <div className="lp-curtain-hint-line" />
          </div>

        </div>
      </div>

      {/* ── Address + photo split ────────────────────────────── */}
      <section className="lp-address">
        <div className="lp-address-content">
          <span className="lp-address-eyebrow">Depuis plus de 30 ans</span>
          <h2 className="lp-address-title">
            Au cœur<br />de <em>Foix</em>
          </h2>
          <p className="lp-address-body">
            La Halle aux Grains est le marché couvert historique de Foix,
            au centre de la ville médiévale. C&apos;est ici que Riton tient
            son étal depuis trois décennies, entouré de fidèles clients et
            des meilleurs producteurs de la région.
          </p>
          <div className="lp-address-table">
            <div className="lp-address-row">
              <span className="lp-address-row-label">Adresse</span>
              <span className="lp-address-row-value">Place de la Halle aux Grains · 09000 Foix</span>
            </div>
            <div className="lp-address-row">
              <span className="lp-address-row-label">Parking</span>
              <span className="lp-address-row-value">Gratuit · Place du Mercadal (2 min à pied)</span>
            </div>
            <div className="lp-address-row">
              <span className="lp-address-row-label">Accès</span>
              <span className="lp-address-row-value">Centre-ville · Bus ligne 1, arrêt Halle</span>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=Halle+aux+Grains+Foix"
            target="_blank"
            rel="noopener noreferrer"
            className="lp-maps-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Ouvrir dans Google Maps
          </a>
        </div>
        <div className="lp-address-photo">
          <Image
            src={MARKET_IMG}
            alt="Marché couvert artisanal de Foix"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="lp-address-photo-img"
          />
          <div className="lp-address-photo-overlay" />
          <div className="lp-address-photo-badge">
            <span className="lp-address-photo-badge-name">Halle aux Grains</span>
            <span className="lp-address-photo-badge-city">Foix · 09000 · Ariège</span>
          </div>
        </div>
      </section>

      {/* ── Why visit ────────────────────────────────────────── */}
      <section className="lp-why">
        <div className="lp-why-inner">
          <div className="lp-why-header">
            <span className="lp-why-eyebrow">Pourquoi venir nous voir</span>
            <h2 className="lp-why-title">L&apos;expérience du <em>vrai</em> marché</h2>
          </div>
          <div className="lp-why-grid">
            {WHY_ITEMS.map((item, i) => (
              <div key={i} className="lp-why-card">
                <div className="lp-why-card-icon">{item.svg}</div>
                <h3 className="lp-why-card-title">{item.title}</h3>
                <p className="lp-why-card-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Online CTA ───────────────────────────────────────── */}
      <section className="lp-cta">
        <div className="lp-cta-photo" aria-hidden="true">
          <Image src={STALL_IMG} alt="" fill sizes="100vw" className="lp-cta-photo-img" />
          <div className="lp-cta-photo-overlay" />
        </div>
        <div className="lp-cta-content">
          <span className="lp-cta-eyebrow">Commander en ligne</span>
          <h2 className="lp-cta-title">
            Même qualité,<br />
            <em>livrée chez vous</em>
          </h2>
          <p className="lp-cta-sub">Expédition sous 24–48h · France, Belgique, Suisse</p>
          <Link href="/boutique" className="lp-cta-btn">
            Accéder à la boutique
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
