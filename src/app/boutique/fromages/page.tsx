import type { Metadata } from 'next';
import { getProducts, getProductsByCategory } from '../../../lib/stripe';
import CategoryPageLayout from '../../../components/boutique/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'Fromages',
  description: 'Fromages de brebis, de vache et de chèvre des Pyrénées ariégeoises. Sélectionnés par Riton auprès des meilleurs producteurs locaux.',
};

const FROMAGE_BG = 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1920&q=80';

const ORIGIN_FACTS = [
  { label: 'Lait', value: 'Brebis, vache, chèvre — crus ou pasteurisés' },
  { label: 'Provenance', value: 'Producteurs ariégeois, < 80 km' },
  { label: 'Affinage', value: 'En caves naturelles, Pyrénées' },
  { label: 'Sélection', value: 'Goûtés et choisis par Riton lui-même' },
];

export default async function FromagesPage() {
  const allProducts = await getProducts();
  const products = getProductsByCategory(allProducts, 'fromages');

  return (
    <CategoryPageLayout
      heroVariant="category"
      heroPretitle="Fromagers partenaires"
      heroTitle="Fromages"
      heroSubtitle="Brebis, vache, chèvre — des fromages de caractère affinés en montagne, choisis par Riton auprès des producteurs qu'il connaît depuis 30 ans."
      heroBgImage={FROMAGE_BG}
      pageLabel="Fromages ariégeois"
      products={products}
      productNoun="fromage"
      tagline="Affinés en Pyrénées · Circuits courts"
      intro={
        <div className="category-origin-strip">
          <p className="category-origin-quote">
            &ldquo;Un bon fromage, c&apos;est d&apos;abord un bon éleveur.
            Riton les connaît tous par leur prénom.&rdquo;
          </p>
          <div className="category-origin-facts">
            {ORIGIN_FACTS.map(({ label, value }) => (
              <div key={label} className="category-origin-fact">
                <span className="category-origin-fact-label">{label}</span>
                <span className="category-origin-fact-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
