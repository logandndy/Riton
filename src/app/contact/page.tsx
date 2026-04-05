import type { Metadata } from 'next';
import ContactPage from '../../components/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Riton pour toute question sur nos produits, vos commandes ou un partenariat.',
};

export default function Contact() {
  return <ContactPage />;
}
