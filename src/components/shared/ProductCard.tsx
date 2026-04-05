'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '../../store/useCartStore';
import type { Product } from '../../lib/stripe';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);

  const category = product.metadata.categorie;
  const categoryLabel = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : null;

  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="product-image"
          />
        ) : (
          <div className="product-image" style={{ background: 'var(--color-gray-pale)' }} />
        )}
        {categoryLabel && (
          <span className="product-badge">{categoryLabel}</span>
        )}
        <div className="product-overlay">
          <Link
            href={`/boutique/${product.id}`}
            className="product-overlay-button"
          >
            Voir le produit
          </Link>
        </div>
      </div>

      <div className="product-info">
        {categoryLabel && (
          <span className="product-category">{categoryLabel}</span>
        )}
        <h3 className="product-name">{product.name}</h3>
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        <div className="product-footer">
          <div className="product-prices">
            <span className="product-price-current">
              {product.price.toFixed(2)} €
            </span>
          </div>
          <button
            className="product-add-to-cart"
            onClick={() => addItem(product)}
            aria-label={`Ajouter ${product.name} au panier`}
            title="Ajouter au panier"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
