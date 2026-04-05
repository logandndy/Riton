import Stripe from 'stripe';

let stripe: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
    }
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-03-31.basil',
    });
  }
  return stripe;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  images: string[];
  metadata: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export async function getProducts(): Promise<Product[]> {
  const stripeClient = getStripe();
  const products = await stripeClient.products.list({
    active: true,
    expand: ['data.default_price'],
  });

  return products.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price?.unit_amount ? price.unit_amount / 100 : 0,
      images: product.images,
      metadata: product.metadata as Record<string, string>,
    };
  });
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const stripeClient = getStripe();
    const product = await stripeClient.products.retrieve(id, {
      expand: ['default_price'],
    });
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: price?.unit_amount ? price.unit_amount / 100 : 0,
      images: product.images,
      metadata: product.metadata as Record<string, string>,
    };
  } catch {
    return null;
  }
}

export function getProductsByCategory(products: Product[], category: string): Product[] {
  const target = category.toLowerCase().replace(/s$/, ''); // "fromages" → "fromage"
  return products.filter(product => {
    const meta = product.metadata;
    // Accepte "categorie" (FR) et "category" (EN)
    const raw = (meta.categorie ?? meta.category ?? '').toLowerCase().replace(/s$/, '');
    // Correspondance exacte après normalisation du pluriel
    return raw !== '' && raw === target;
  });
}

export function getCategories(products: Product[]): string[] {
  const categories = new Set(
    products.map(p => p.metadata.categorie).filter(Boolean)
  );
  return Array.from(categories);
}

export async function createCheckoutSession(items: CartItem[]): Promise<string> {
  const stripeClient = getStripe();

  const session = await stripeClient.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.product.name,
          images: item.product.images.slice(0, 1),
          description: item.product.description ?? undefined,
        },
        unit_amount: Math.round(item.product.price * 100),
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'}/commande-confirmee`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'}/panier`,
    locale: 'fr',
    shipping_address_collection: {
      allowed_countries: ['FR', 'BE', 'CH', 'LU'],
    },
  });

  if (!session.url) throw new Error('Failed to create Stripe session URL');
  return session.url;
}
