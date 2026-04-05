import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '../lib/stripe';

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Retournez au Marché avec Riton</h1>
          <p>
            Découvrez la saveur authentique de nos charcuteries et fromages artisanaux,
            préparés avec passion par des artisans locaux. Comme sur les marchés physiques,
            chaque bouchée vous ramène aux racines du terroir ariégeois.
          </p>
          <Link href="/boutique" className="cta-button">
            Explorer nos produits
          </Link>
        </div>
        <div className="hero-image">
          <Image src="/hero-image.jpg" alt="Marché artisanal" width={400} height={300} />
        </div>
      </section>

      <section className="story">
        <h2>Notre Histoire</h2>
        <p>
          Depuis des générations, Riton perpétue la tradition artisanale à la Halle aux Grains de Foix.
          Nos produits sont sélectionnés avec soin auprès de producteurs partenaires locaux,
          garantissant une qualité premium et un respect des méthodes traditionnelles.
          Venez goûter l&apos;authenticité du terroir ariégeois, directement chez vous.
        </p>
      </section>

      <section className="featured-products">
        <h2>Nos Produits Phares</h2>
        {featuredProducts.length > 0 ? (
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                {product.images && product.images[0] && (
                  <Image src={product.images[0]} alt={product.name} width={250} height={200} />
                )}
                <h3>{product.name}</h3>
                {product.description && <p>{product.description}</p>}
                <p className="price">{product.price} €</p>
                <Link href={`/boutique/${product.id}`} className="product-link">
                  Voir le produit
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucun produit disponible pour le moment.</p>
        )}
      </section>
    </div>
  );
}
