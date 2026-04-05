import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import ClientLayout from '../components/shared/ClientLayout';
import PromoBanner from '../components/shared/PromoBanner';

export const metadata: Metadata = {
  title: {
    default: 'Riton — Charcuterie & Fromages Artisanaux, Foix (Ariège)',
    template: '%s | Riton',
  },
  description:
    'Riton, charcutier et fromager ariégeois depuis 30 ans. Commandez en ligne nos charcuteries, fromages et produits du terroir, livrés depuis la Halle aux Grains de Foix.',
  keywords: ['charcuterie', 'fromage', 'artisan', 'terroir', 'ariège', 'foix', 'pyrénées', 'saucisson'],
  authors: [{ name: 'Riton' }],
  openGraph: {
    title: 'Riton — Charcuterie & Fromages Artisanaux',
    description: 'Le meilleur du terroir ariégeois, directement depuis la Halle aux Grains de Foix.',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <PromoBanner />
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
