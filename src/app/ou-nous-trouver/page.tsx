import type { Metadata } from 'next';
import LocationPage from '../../components/ou-nous-trouver/LocationPage';

export const metadata: Metadata = {
  title: 'Où nous trouver',
  description: 'Retrouvez Riton à la Halle aux Grains de Foix (Ariège) — marchés, horaires et plan d\'accès.',
};

export default function OuNousTrouver() {
  return <LocationPage />;
}
