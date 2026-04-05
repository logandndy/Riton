import type { Metadata } from 'next';
import { getProducts, getProductsByCategory } from '../../../lib/stripe';
import CategoryPageLayout from '../../../components/boutique/CategoryPageLayout';

export const metadata: Metadata = {
  title: 'Charcuterie',
  description: 'Saucissons secs, jambons, terrines et charcuteries artisanales de montagne. Riton, charcutier ariégeois depuis 30 ans.',
};

const CHARC_BG = 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1920&q=80';

const ORIGIN_FACTS = [
  { label: 'Recettes', value: 'Transmises de père en fils' },
  { label: 'Élevage', value: 'Porcs nourris aux céréales, Ariège' },
  { label: 'Affinage', value: 'En cave de montagne, 4 à 12 semaines' },
  { label: 'Additifs', value: 'Aucun conservateur ajouté' },
];

export default async function CharcuteriePage() {
  const allProducts = await getProducts();
  const products = getProductsByCategory(allProducts, 'charcuterie');

  return (
    <CategoryPageLayout
      heroVariant="category"
      heroPretitle="Savoir-faire artisanal"
      heroTitle="Charcuterie"
      heroSubtitle="Saucissons de montagne, jambons fumés, terrines — préparés selon les recettes transmises de père en fils dans les Pyrénées ariégeoises."
      heroBgImage={CHARC_BG}
      pageLabel="Charcuteries artisanales"
      products={products}
      productNoun="charcuterie"
      tagline="Élevés et transformés en Ariège · Sans conservateur"
      intro={
        <div className="category-origin-strip">
          <p className="category-origin-quote">
            &ldquo;Ici, chaque saucisson a un nom, une histoire,
            et le temps de bien se faire.&rdquo;
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
