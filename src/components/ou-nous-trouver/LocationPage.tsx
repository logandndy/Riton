import Image from 'next/image';
import Link from 'next/link';
import Hero from '../shared/Hero';

const LOCATION_IMG = 'https://images.unsplash.com/photo-1527527977888-2b6be5f1a7b5?auto=format&fit=crop&w=1920&q=80';
const MARKET_IMG   = 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80';

const reasons = [
  'Goûter avant d\'acheter',
  'Conseils personnalisés de Riton',
  'Découvrir les produits de saison',
  'Commander des plateaux sur mesure',
  'Rencontrer les producteurs partenaires',
];

export default function LocationPage() {
  return (
    <div className="location-page">
      <Hero
        variant="location"
        pretitle="Ariège · Pyrénées"
        title="Nous trouver"
        subtitle="Riton est présent chaque semaine à la Halle aux Grains de Foix. Venez le rencontrer, goûter, et repartir les bras chargés."
        bgImage={LOCATION_IMG}
      />

      {/* ── Cinematic photo banner ── */}
      <div className="location-banner">
        <Image
          src={LOCATION_IMG}
          alt="Marché de Foix, Ariège"
          fill
          className="location-banner-img"
          sizes="100vw"
          priority
        />
        <div className="location-banner-overlay" />
        <div className="location-banner-badge">
          <span className="location-banner-badge-name">Halle aux Grains</span>
          <span className="location-banner-badge-city">Foix · Ariège · 09000</span>
        </div>
      </div>

      {/* ── Main info grid ── */}
      <section className="location-info-section">
        <div className="container">
          <div className="location-info-grid">

            {/* Left: editorial text + address */}
            <div className="location-info-main">
              <span className="location-eyebrow">Depuis plus de 30 ans</span>
              <h2 className="location-info-title">
                Au cœur<br />de <em>Foix</em>
              </h2>
              <p className="location-info-body">
                La Halle aux Grains est le marché couvert historique de Foix,
                au centre de la ville médiévale. C&apos;est ici que Riton tient
                son étal depuis trois décennies, entouré de fidèles clients et
                des meilleurs producteurs de la région.
              </p>

              <div className="location-address-block">
                <div className="location-address-row">
                  <span className="location-address-label">Adresse</span>
                  <span className="location-address-value">Place de la Halle aux Grains · 09000 Foix</span>
                </div>
                <div className="location-address-row">
                  <span className="location-address-label">Mardi</span>
                  <span className="location-address-value">9h00 – 13h00</span>
                </div>
                <div className="location-address-row">
                  <span className="location-address-label">Samedi</span>
                  <span className="location-address-value">8h30 – 13h00</span>
                </div>
                <div className="location-address-row">
                  <span className="location-address-label">Parking</span>
                  <span className="location-address-value">Gratuit · Place du Mercadal (2 min)</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Halle+aux+Grains+Foix"
                target="_blank"
                rel="noopener noreferrer"
                className="location-maps-link"
              >
                Ouvrir dans Google Maps
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>

            {/* Right: market photo + reasons + CTA */}
            <div className="location-info-side">

              <div className="location-market-photo">
                <Image
                  src={MARKET_IMG}
                  alt="Marché couvert artisanal"
                  fill
                  className="location-market-img"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="location-market-overlay" />
              </div>

              <div className="location-reasons">
                <h3 className="location-reasons-title">Pourquoi venir au marché</h3>
                <ul className="location-reasons-list">
                  {reasons.map(r => (
                    <li key={r} className="location-reasons-item">
                      <span className="location-reasons-dot" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="location-online-cta">
                <p className="location-online-eyebrow">Commander en ligne</p>
                <h3 className="location-online-title">
                  Même qualité,<br /><em>livrée chez vous</em>
                </h3>
                <p className="location-online-sub">
                  Expédition sous 24–48h · France, Belgique, Suisse
                </p>
                <Link href="/boutique" className="location-online-btn">
                  Accéder à la boutique
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
