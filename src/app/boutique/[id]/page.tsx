import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, getProducts } from '../../../lib/stripe';
import AddToCartButton from '../../../components/boutique/AddToCartButton';
import RelatedProducts from '../../../components/boutique/RelatedProducts';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return { title: 'Produit introuvable' };
  return {
    title: product.name,
    description: product.description ?? `Découvrez ${product.name} — produit artisanal de Riton.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  const category = product.metadata.categorie;
  const categoryLabel = category ? category.charAt(0).toUpperCase() + category.slice(1) : null;
  const categoryHref = category ? `/boutique/${category}` : '/boutique';

  return (
    <>
      <div className="product-detail-page">
        <div className="product-detail-container">
          <nav className="product-detail-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/boutique" className="product-detail-breadcrumb-link">Boutique</Link>
            <span className="product-detail-separator" aria-hidden="true">›</span>
            {categoryLabel && (
              <>
                <Link href={categoryHref} className="product-detail-breadcrumb-link">
                  {categoryLabel}
                </Link>
                <span className="product-detail-separator" aria-hidden="true">›</span>
              </>
            )}
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="product-detail-grid">
            {/* ── GALERIE ── */}
            <div className="product-gallery">
              <div className="product-gallery-main">
                {product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="product-gallery-main-image"
                    priority
                  />
                ) : (
                  <div className="product-gallery-placeholder" aria-hidden="true">🥩</div>
                )}
                {categoryLabel && (
                  <span className="product-gallery-badge">{categoryLabel}</span>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="product-gallery-thumbnails" role="list" aria-label="Vues du produit">
                  {product.images.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      className={`product-gallery-thumbnail${i === 0 ? ' is-active' : ''}`}
                      role="listitem"
                    >
                      <Image src={img} alt={`${product.name} — vue ${i + 1}`} fill sizes="100px" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── INFOS & ACHAT ── */}
            <div className="product-info-section">
              {categoryLabel && (
                <p className="product-detail-category">{categoryLabel}</p>
              )}
              <h1 className="product-detail-title">{product.name}</h1>

              <div className="product-pricing">
                <span className="product-pricing-current">
                  {product.price.toFixed(2)}&nbsp;€
                </span>
                <p className="product-pricing-note">
                  Prix par unité · Livraison calculée au paiement
                </p>
              </div>

              {product.description && (
                <div className="product-description-section">
                  <h2 className="product-description-title">À propos de ce produit</h2>
                  <p className="product-description-text">{product.description}</p>
                </div>
              )}

              <AddToCartButton product={product} />

              <div className="product-guarantees">
                <div className="product-guarantee-item">
                  <span aria-hidden="true">❄️</span>
                  <p>Expédié en colis isotherme avec pack de froid</p>
                </div>
                <div className="product-guarantee-item">
                  <span aria-hidden="true">🌿</span>
                  <p>Produit artisanal du terroir ariégeois</p>
                </div>
                <div className="product-guarantee-item">
                  <span aria-hidden="true">🚚</span>
                  <p>Livraison 24–48h — expédié le prochain jour ouvré</p>
                </div>
              </div>

              <Link href={categoryHref} className="product-back-link">
                ← Retour {categoryLabel ? `aux ${categoryLabel.toLowerCase()}s` : 'à la boutique'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── PRODUITS APPARENTÉS ── */}
      <RelatedProducts
        currentProductId={product.id}
        category={category ?? null}
      />
    </>
  );
}
