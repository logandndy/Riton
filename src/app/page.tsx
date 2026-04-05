import Link from 'next/link';
import { getProducts } from '../lib/stripe';

export default async function Home() {
  // Récupérer quelques produits phares (par exemple, les premiers)
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4); // 4 produits phares

  return (
    <div className="home">
      {/* Hero Section */}
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
          {/* Image placeholder */}
          <img src="/hero-image.jpg" alt="Marché artisanal" />
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="story">
        <h2>Notre Histoire</h2>
        <p>
          Depuis des générations, Riton perpétue la tradition artisanale à la Halle aux Grains de Foix.
          Nos produits sont sélectionnés avec soin auprès de producteurs partenaires locaux,
          garantissant une qualité premium et un respect des méthodes traditionnelles.
          Venez goûter l'authenticité du terroir ariégeois, directement chez vous.
        </p>
      </section>

      {/* Produits Phares */}
      <section className="featured-products">
        <h2>Nos Produits Phares</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price} €</p>
              <Link href={`/boutique/${product.id}`} className="product-link">
                Voir le produit
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
