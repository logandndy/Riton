import type { Metadata } from 'next';
import CartPage from '../../components/panier/CartPage';

export const metadata: Metadata = {
  title: 'Mon Panier',
  description: 'Finalisez votre commande de produits artisanaux Riton.',
};

export default function PanierPage() {
  return <CartPage />;
}
