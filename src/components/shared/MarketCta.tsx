import Image from 'next/image';
import Link from 'next/link';

const MARKET_IMG = 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80';

export default function MarketCta() {
  return (
    <section className="boutique-market-cta">
      <div className="boutique-market-inner">
        <div className="boutique-market-text">
          <span className="boutique-market-eyebrow">Ariège · Foix · Chaque semaine</span>
          <h2 className="boutique-market-title">
            Goûter avant<br /><em>d&apos;acheter ?</em>
          </h2>
          <p className="boutique-market-body">
            Retrouvez Riton chaque mardi et samedi à la Halle aux Grains.
            Conseils personnalisés, dégustation, produits du moment.
          </p>
          <Link href="/ou-nous-trouver" className="boutique-market-link">
            Voir l&apos;emplacement
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </Link>
        </div>
        <div className="boutique-market-visual">
          <Image
            src={MARKET_IMG}
            alt="Marché artisanal de Foix"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="boutique-market-img"
          />
          <div className="boutique-market-visual-overlay" />
        </div>
      </div>
    </section>
  );
}
