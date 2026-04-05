import Link from 'next/link';

const CATEGORIES = [
  {
    slug: 'charcuterie',
    label: 'Charcuterie',
    tagline: 'Le savoir-faire des Pyrénées',
    description:
      "Saucissons fumés, jambons de montagne, terrines et rillettes — fabriqués selon des recettes transmises de génération en génération dans les Pyrénées ariégeoises.",
    tags: ['Saucissons', 'Jambons', 'Terrines', 'Rillettes'],
    // Unsplash : cured meats / charcuterie
    bgImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'fromages',
    label: 'Fromages',
    tagline: 'Affinés en altitude',
    description:
      "Brebis, vache, chèvre — des fromages de caractère sélectionnés par Riton auprès des fromagers qu'il connaît depuis 30 ans, à quelques kilomètres du marché.",
    tags: ['Brebis', 'Vache', 'Chèvre', 'Affinés'],
    // Unsplash : cheese board
    bgImage: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1400&q=80',
  },
] as const;

export default function CategoryNav() {
  return (
    <section className="category-nav" aria-label="Naviguer par catégorie">
      <div className="category-nav-grid">
        {CATEGORIES.map(({ slug, label, tagline, description, tags, bgImage }) => (
          <Link key={slug} href={`/boutique/${slug}`} className="category-card">

            {/* Full-bleed background photo */}
            <div
              className="category-card-media"
              style={{ backgroundImage: `url(${bgImage})` }}
              aria-hidden="true"
            >
              <span className="category-card-watermark">{label}</span>
            </div>

            {/* Text overlay at bottom */}
            <div className="category-card-body">
              <span className="category-card-tagline">{tagline}</span>
              <h3 className="category-card-title">{label}</h3>

              <div className="category-card-reveal">
                <p className="category-card-description">{description}</p>
                <div className="category-card-tags" aria-label="Produits disponibles">
                  {tags.map(tag => (
                    <span key={tag} className="category-card-tag">{tag}</span>
                  ))}
                </div>
                <span className="category-card-cta">
                  Explorer <span className="category-card-arrow">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
