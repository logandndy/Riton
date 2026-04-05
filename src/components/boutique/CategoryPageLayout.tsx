import type { ReactNode } from 'react';
import Hero from '../shared/Hero';
import ProductListShell from './ProductListShell';
import type { Product } from '../../lib/stripe';

interface CategoryPageLayoutProps {
  /** hero */
  heroVariant: 'boutique' | 'category';
  heroPretitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBgImage: string;
  /** header below hero */
  pageLabel: string;        // ex : "Toute la sélection"
  products: Product[];
  productNoun: string;      // ex : "produit", "charcuterie", "fromage"
  tagline: string;
  /** optional slots */
  intro?: ReactNode;        // bandeau/strip entre header et grille
  cta?: ReactNode;          // section après la grille
}

export default function CategoryPageLayout({
  heroVariant,
  heroPretitle,
  heroTitle,
  heroSubtitle,
  heroBgImage,
  pageLabel,
  products,
  productNoun,
  tagline,
  intro,
  cta,
}: CategoryPageLayoutProps) {
  const plural = products.length !== 1 ? 's' : '';

  return (
    <>
      <Hero
        variant={heroVariant}
        pretitle={heroPretitle}
        title={heroTitle}
        subtitle={heroSubtitle}
        bgImage={heroBgImage}
      />

      <div className="boutique-page">

        {/* ── Header éditorial ── */}
        <div className="boutique-header">
          <div className="boutique-header-left">
            <span className="boutique-pretitle">{pageLabel}</span>
            <h2 className="boutique-title">
              {products.length} <em>{productNoun}{plural}</em>
            </h2>
          </div>
          <div className="boutique-header-right">
            <p className="boutique-tagline">{tagline}</p>
          </div>
        </div>

        {/* ── Slot intro (bandeau catégorie) ── */}
        {intro}

        {/* ── Grille produits ── */}
        <ProductListShell initialProducts={products} />

        {/* ── Slot CTA bas de page ── */}
        {cta}

      </div>
    </>
  );
}
