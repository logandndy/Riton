import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientLayout from '../components/ClientLayout';

export const metadata: Metadata = {
  title: 'Riton - Charcuterie et Fromages Artisanaux',
  description: 'Découvrez les produits artisanaux de Riton : charcuterie et fromages de qualité premium.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
