import type { Metadata } from 'next';
import { getProducts } from '../../lib/stripe';
import CategoryPageLayout from '../../components/boutique/CategoryPageLayout';
import MarketCta from '../../components/shared/MarketCta';

export const metadata: Metadata = {
  title: 'Boutique',
  description: 'Toute la charcuterie et les fromages artisanaux de Riton. Filtrez par prix, triez et commandez en ligne.',
};

const BOUTIQUE_BG = 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1920&q=80';

export default async function BoutiquePage() {
  const products = await getProducts();

  return (
    <CategoryPageLayout
      heroVariant="boutique"
      heroPretitle="Produits artisanaux"
      heroTitle="La Boutique"
      heroSubtitle="Charcuteries, fromages et spécialités ariégeoises — tout est fait à la main, sélectionné avec soin, livré frais."
      heroBgImage={BOUTIQUE_BG}
      pageLabel="Toute la sélection"
      products={products}
      productNoun="produit"
      tagline="Élevés et transformés en Ariège · Livrés sous 48h"
      cta={<MarketCta />}
    />
  );
}
