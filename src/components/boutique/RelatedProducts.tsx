import Link from 'next/link';
import { getProducts, getProductsByCategory } from '../../lib/stripe';
import type { Product } from '../../lib/stripe';
import ProductCard from '../shared/ProductCard';

interface RelatedProductsProps {
  currentProductId: string;
  category: string | null;
}

export default async function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const allProducts = await getProducts();

  let pool: Product[];
  if (category) {
    pool = getProductsByCategory(allProducts, category);
    // Fallback to full catalogue if not enough related items
    if (pool.length < 2) pool = allProducts;
  } else {
    pool = allProducts;
  }

  const related = pool
    .filter(p => p.id !== currentProductId)
    .slice(0, 3);

  if (related.length === 0) return null;

  const sectionLabel = category
    ? `Autres ${category}s`
    : 'Vous aimerez aussi';

  return (
    <section className="related-products" aria-label={sectionLabel}>
      <div className="related-products-container">
        <div className="related-products-header">
          <span className="related-products-pretitle">Dans la même famille</span>
          <h2 className="related-products-title">Vous aimerez aussi</h2>
        </div>

        <div className="related-products-grid">
          {related.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="related-products-footer">
          <Link
            href={category ? `/boutique/${category}` : '/boutique'}
            className="related-products-link"
          >
            Voir toute la {category ?? 'boutique'} →
          </Link>
        </div>
      </div>
    </section>
  );
}
