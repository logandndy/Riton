const VALUES = [
  {
    icon: '🏔️',
    title: 'Produits du terroir',
    description:
      "Éleveurs et producteurs locaux, sélectionnés pour leur savoir-faire et leur respect du vivant. Rien ne vient de loin quand les Pyrénées sont là.",
  },
  {
    icon: '🔪',
    title: 'Fait à la main',
    description:
      "Chaque terrine, chaque saucisson est préparé selon des recettes transmises de génération en génération. Ici, pas de machine — juste des mains expertes.",
  },
  {
    icon: '⏳',
    title: 'Le temps de bien faire',
    description:
      "Un bon jambon se fait attendre. Un fromage de caractère s'affine avec patience. Riton ne court pas après la production — il court après la qualité.",
  },
  {
    icon: '🚚',
    title: 'Livraison soignée',
    description:
      "Vos commandes sont expédiées en colis isotherme, avec les mêmes attentions que si vous veniez les chercher au marché. Fraîcheur garantie.",
  },
];

export default function ValuesSection() {
  return (
    <section className="values-section">
      <div className="values-header">
        <h2>Ce qui nous distingue</h2>
        <p>
          Chez Riton, la qualité n&apos;est pas un argument de vente.
          C&apos;est une façon de travailler.
        </p>
      </div>
      <div className="values-grid">
        {VALUES.map(({ icon, title, description }) => (
          <div key={title} className="value-card">
            <span className="value-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
