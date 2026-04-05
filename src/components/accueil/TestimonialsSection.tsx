import Link from 'next/link';

type Category = 'charcuterie' | 'fromages';
type T = { quote: string; author: string; location: string; category: Category };

const TESTIMONIALS: T[] = [
  {
    quote: 'Le saucisson de montagne est une révélation. J\'en commande tous les mois depuis Toulouse — jamais déçu.',
    author: 'Mathilde R.',
    location: 'Toulouse',
    category: 'charcuterie',
  },
  {
    quote: 'La tomme ariégeoise est fondante, les fromages de brebis… je ne m\'en passe plus depuis la première commande.',
    author: 'Pierre-Antoine G.',
    location: 'Bordeaux',
    category: 'fromages',
  },
  {
    quote: 'La terrine maison est incroyable. On sent le savoir-faire artisanal dès la première bouchée.',
    author: 'Thomas B.',
    location: 'Paris',
    category: 'charcuterie',
  },
  {
    quote: 'Les fromages sont choisis avec une passion rare. On découvre des produits qu\'on ne trouve nulle part ailleurs.',
    author: 'Jean-Luc F.',
    location: 'Lyon',
    category: 'fromages',
  },
  {
    quote: 'Le jambon de montagne a conquis toute ma famille. On en prend maintenant deux à chaque commande.',
    author: 'Isabelle M.',
    location: 'Montpellier',
    category: 'charcuterie',
  },
  {
    quote: 'Riton m\'a retrouvé le goût des marchés du sud-ouest. Qualité irréprochable, livrée en 48h chez moi.',
    author: 'Sophie L.',
    location: 'Marseille',
    category: 'charcuterie',
  },
  {
    quote: 'Les fromages ariégeois sont devenus un rituel dominical. Riton connaît ses producteurs, et ça se sent.',
    author: 'Céline D.',
    location: 'Foix',
    category: 'fromages',
  },
  {
    quote: 'Le plateau mixte charcuterie-fromages pour mes apéros — un incontournable depuis que je l\'ai découvert.',
    author: 'Marc D.',
    location: 'Nantes',
    category: 'fromages',
  },
];

const CAT = {
  charcuterie: { label: 'Charcuterie', href: '/boutique/charcuterie' },
  fromages:    { label: 'Fromages',    href: '/boutique/fromages'    },
} as const;

function Stars() {
  return (
    <div className="testi-stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}


function TestiCard({ quote, author, location, category, dupe }: T & { dupe?: boolean }) {
  const { label, href } = CAT[category];
  return (
    <article
      className="testi-card"
      aria-hidden={dupe ? true : undefined}
    >
      <Stars />
      <blockquote className="testi-quote">{quote}</blockquote>
      <footer className="testi-card-foot">
        <div className="testi-meta">
          <span className="testi-author">{author}</span>
          <span className="testi-dot-sep" aria-hidden="true">·</span>
          <span className="testi-location">{location}</span>
        </div>
        <Link
          href={href}
          className="testi-cta"
          tabIndex={dupe ? -1 : 0}
          aria-hidden={dupe ? true : undefined}
        >
          {label}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </Link>
      </footer>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testi-section">

      {/* ── Header ── */}
      <header className="testi-header">
        <span className="testi-kicker">Avis clients</span>
        <h2 className="testi-heading">
          Ils en parlent<br />mieux que nous
        </h2>
      </header>

      {/* ════════════════════════════════════════
          MOBILE — scroll-snap horizontal natif
          (caché sur desktop)
          ════════════════════════════════════════ */}
      <div className="testi-mobile-scroll" aria-label="Avis clients">
        {TESTIMONIALS.map((t, i) => (
          <TestiCard key={`m-${i}`} {...t} />
        ))}
      </div>

      {/* ════════════════════════════════════════
          DESKTOP — marquee double rangée
          (caché sur mobile)
          ════════════════════════════════════════ */}
      <div className="testi-desktop">

        {/* Row 1 — défile vers la gauche */}
        <div className="testi-row testi-row--1">
          <div className="testi-marquee testi-marquee--left">
            {TESTIMONIALS.map((t, i) => <TestiCard key={`r1-a-${i}`} {...t} />)}
            {TESTIMONIALS.map((t, i) => <TestiCard key={`r1-b-${i}`} {...t} dupe />)}
          </div>
        </div>

        {/* Row 2 — défile vers la droite (sens inverse + décalé) */}
        <div className="testi-row testi-row--2">
          <div className="testi-marquee testi-marquee--right">
            {TESTIMONIALS.map((t, i) => <TestiCard key={`r2-a-${i}`} {...t} dupe />)}
            {TESTIMONIALS.map((t, i) => <TestiCard key={`r2-b-${i}`} {...t} dupe />)}
          </div>
        </div>

      </div>

    </section>
  );
}
