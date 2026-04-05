import Link from 'next/link';
import { getProducts } from '../../lib/stripe';
import ProductCard from '../shared/ProductCard';

export default async function FeaturedSection() {
  const allProducts = await getProducts();
  const featured = allProducts.slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="featured-products">
      <div className="featured-products-container">

        <div className="featured-products-header">
          <div className="featured-products-header-left">
            <span className="featured-products-pretitle">La sélection du marché</span>
            <h2 className="featured-products-title">Nos Produits Phares</h2>
          </div>
          <p className="featured-products-subtitle">
            Des saveurs authentiques, sélectionnées parmi ce que
            l&apos;Ariège a de meilleur.
          </p>
        </div>

        <div className="products-grid">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="featured-view-all">
          <Link href="/boutique" className="featured-view-all-button">
            <span>Découvrir toute la boutique</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
