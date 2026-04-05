const ITEMS = [
  '🎁 Livraison offerte dès 80\u202f€ d\u2019achat',
  '❄️ Expédition en colis isotherme',
  '🌿 Producteurs ariégeois sélectionnés',
  '🔒 Paiement sécurisé via Stripe',
];

export default function PromoBanner() {
  return (
    <div className="promo-banner" role="banner" aria-label="Informations promotionnelles">
      <div className="promo-banner-track" aria-hidden="true">
        {/* Doubled for seamless CSS marquee */}
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="promo-banner-item">
            {item}
            <span className="promo-banner-sep" aria-hidden="true"> · </span>
          </span>
        ))}
      </div>
      {/* Screen-reader-only static version */}
      <ul className="sr-only">
        {ITEMS.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
