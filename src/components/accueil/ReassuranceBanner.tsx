const PILLARS = [
  {
    title: 'Livraison fraîche',
    body: 'Expédié le lendemain en colis isotherme — France, Belgique, Suisse.',
  },
  {
    title: '30 ans de savoir-faire',
    body: 'Charcutier ariégeois de père en fils, producteurs locaux, circuits courts.',
  },
  {
    title: 'Satisfait ou remboursé',
    body: 'Un problème avec votre commande ? On vous rembourse, sans question.',
  },
  {
    title: 'Paiement sécurisé',
    body: 'CB, Visa, Mastercard — données chiffrées via Stripe. Jamais stockées.',
  },
] as const;

export default function ReassuranceBanner() {
  return (
    <section className="reassurance-banner" aria-label="Nos engagements">
      <div className="reassurance-container">
        {PILLARS.map(({ title, body }) => (
          <div key={title} className="reassurance-item">
            <span className="reassurance-check" aria-hidden="true" />
            <div className="reassurance-text">
              <strong className="reassurance-title">{title}</strong>
              <p className="reassurance-body">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
