import Hero from '../components/shared/Hero';
import ReassuranceBanner from '../components/accueil/ReassuranceBanner';
import CategoryNav from '../components/accueil/CategoryNav';
import FeaturedSection from '../components/accueil/FeaturedSection';
import StorySection from '../components/accueil/StorySection';
import ValuesSection from '../components/accueil/ValuesSection';
import TestimonialsSection from '../components/accueil/TestimonialsSection';
import MarketCta from '../components/shared/MarketCta';

const HOME_BG = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80';

export default function Home() {
  return (
    <>
      <Hero
        variant="home"
        pretitle="Halle aux Grains · Foix · Ariège"
        title="L'Artisan du Goût"
        subtitle="Charcuteries fumées, fromages de montagne, terrines maison. Riton perpétue les saveurs du terroir ariégeois depuis plus de 30 ans."
        ctaText="Découvrir la boutique"
        ctaHref="/boutique"
        bgImage={HOME_BG}
        stats={[
          { value: '30+', label: 'ans de métier' },
          { value: '100%', label: 'fait main' },
          { value: '2', label: 'marchés / semaine' },
        ]}
      />
      <ReassuranceBanner />
      <CategoryNav />
      <FeaturedSection />
      <StorySection />
      <ValuesSection />
      <TestimonialsSection />
      <MarketCta />
    </>
  );
}
