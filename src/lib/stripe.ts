import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  images: string[];
  metadata: Record<string, string>;
}

export async function getProducts(): Promise<Product[]> {
  const products = await stripe.products.list({
    active: true,
    expand: ['data.default_price'],
  });

  return products.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price ? price.unit_amount! / 100 : 0, // Prix en euros
      images: product.images,
      metadata: product.metadata,
    };
  });
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const product = await stripe.products.retrieve(id, {
      expand: ['default_price'],
    });
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price ? price.unit_amount! / 100 : 0,
      images: product.images,
      metadata: product.metadata,
    };
  } catch {
    return null;
  }
}

export function getProductsByCategory(products: Product[], category: string): Product[] {
  return products.filter(product => product.metadata.categorie === category);
}

export function getCategories(products: Product[]): string[] {
  const categories = new Set(products.map(product => product.metadata.categorie).filter(Boolean));
  return Array.from(categories);
}