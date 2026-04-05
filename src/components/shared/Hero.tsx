import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  variant: 'home' | 'boutique' | 'category' | 'contact' | 'location' | 'cart';
  pretitle?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  /** Unsplash or external photo URL for full-bleed background */
  bgImage?: string;
  /** Counts shown below subtitle — home hero only */
  stats?: Array<{ value: string; label: string }>;
}

export default function Hero({
  variant,
  pretitle,
  title,
  subtitle,
  ctaText,
  ctaHref,
  bgImage,
  stats,
}: HeroProps) {
  return (
    <section className={`hero-base hero-${variant}`}>
      {/* Full-bleed background photo */}
      {bgImage && (
        <div className="hero-photo-layer" aria-hidden="true">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo-img"
          />
          {/* Dark cinematic overlay */}
          <div className="hero-photo-overlay" />
        </div>
      )}

      <div className="hero-base-content">
        {pretitle && (
          <span className="hero-base-pretitle">{pretitle}</span>
        )}

        <h1 className="hero-base-title">{title}</h1>

        {subtitle && (
          <p className="hero-base-subtitle">{subtitle}</p>
        )}

        {ctaText && ctaHref && (
          <Link href={ctaHref} className="hero-base-cta btn-magnetic">
            {ctaText}
          </Link>
        )}

        {stats && stats.length > 0 && (
          <div className="hero-stats">
            {stats.map(({ value, label }) => (
              <div key={label} className="hero-stat">
                <span className="hero-stat-value">{value}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
