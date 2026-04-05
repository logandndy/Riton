import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description:
    "Conditions générales de vente de Riton — charcuterie & fromages artisanaux. Livraison, retours, paiement, garanties.",
};

export default function CGVPage() {
  return (
    <div className="legal-page">
      <div className="legal-page-header">
        <span className="legal-pretitle">Documents légaux</span>
        <h1 className="legal-page-title">Conditions Générales de Vente</h1>
        <p className="legal-page-date">En vigueur au 1er janvier 2025 — Mise à jour : avril 2025</p>
      </div>

      <div className="legal-page-content">

        <article className="legal-article">
          <h2>Article 1 — Identification du vendeur</h2>
          <p>La vente des produits proposés sur ce site est assurée par :</p>
          <ul>
            <li><strong>Nom commercial :</strong> Riton — Charcuterie &amp; Fromages Artisanaux</li>
            <li><strong>Adresse :</strong> Halle aux Grains, Place Parmentier, 09000 Foix (Ariège)</li>
            <li><strong>Email :</strong> <a href="mailto:contact@riton.fr">contact@riton.fr</a></li>
            <li><strong>Activité :</strong> Artisan charcutier-fromager, vente directe au consommateur</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2>Article 2 — Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
            entre Riton et tout client souhaitant effectuer un achat via le site. Toute commande implique
            l&apos;acceptation sans réserve des présentes CGV.
          </p>
        </article>

        <article className="legal-article">
          <h2>Article 3 — Produits</h2>
          <p>
            Les produits proposés sont des denrées alimentaires artisanales périssables. Les photographies
            et descriptions sont indicatives. Chaque produit est fabriqué à la main ; des variations
            naturelles d&apos;aspect, de poids et de goût sont inhérentes à leur caractère artisanal.
          </p>
          <p>
            Les produits sont disponibles dans la limite des stocks disponibles. En cas d&apos;indisponibilité
            après validation d&apos;une commande, nous vous contacterons dans les 24h ouvrées.
          </p>
        </article>

        <article className="legal-article">
          <h2>Article 4 — Prix</h2>
          <p>
            Les prix affichés sont indiqués en euros TTC. Ils peuvent être modifiés à tout moment.
            Les prix applicables sont ceux en vigueur au moment de la validation de la commande.
            Les frais de livraison sont calculés et affichés lors du paiement.
          </p>
          <div className="legal-highlight">
            <p>🎁 <strong>Livraison offerte</strong> pour toute commande supérieure à 80&nbsp;€ TTC (France métropolitaine).</p>
          </div>
        </article>

        <article className="legal-article">
          <h2>Article 5 — Commande</h2>
          <p>La passation d&apos;une commande se fait via le site, en suivant les étapes :</p>
          <ol>
            <li>Sélection des produits et ajout au panier</li>
            <li>Vérification du panier et validation</li>
            <li>Renseignement des informations de livraison</li>
            <li>Choix du mode de paiement et confirmation</li>
            <li>Réception d&apos;un email de confirmation</li>
          </ol>
          <p>La vente est réputée conclue à compter de la réception de l&apos;email de confirmation.</p>
        </article>

        <article className="legal-article">
          <h2>Article 6 — Paiement</h2>
          <p>
            Le paiement s&apos;effectue en ligne de manière sécurisée via <strong>Stripe</strong>.
            Moyens acceptés : carte bancaire (Visa, Mastercard, American Express).
            Les données bancaires sont transmises directement à Stripe et ne transitent jamais
            par nos serveurs.
          </p>
        </article>

        <article className="legal-article">
          <h2>Article 7 — Livraison</h2>
          <p>
            Les commandes sont expédiées en <strong>colis isotherme avec pack de froid</strong>.
            Délais indicatifs :
          </p>
          <ul>
            <li><strong>France métropolitaine :</strong> 24 à 48h ouvrées</li>
            <li><strong>Belgique, Luxembourg :</strong> 48 à 72h ouvrées</li>
            <li><strong>Suisse :</strong> 48 à 96h ouvrées</li>
          </ul>
          <p>
            L&apos;expédition a lieu le prochain jour ouvré suivant la commande (mardi au samedi).
            Aucune expédition le dimanche et lundi.
          </p>
        </article>

        <article className="legal-article">
          <h2>Article 8 — Droit de rétractation</h2>
          <p>
            Conformément à l&apos;article L.221-28 du Code de la consommation, <strong>le droit de
            rétractation ne s&apos;applique pas</strong> aux denrées alimentaires périssables.
          </p>
          <p>
            En cas de produit défectueux, manquant ou non conforme, contactez-nous à{' '}
            <a href="mailto:contact@riton.fr">contact@riton.fr</a> dans les 24h suivant la réception,
            avec photos. Un remboursement ou remplacement sera effectué dans les meilleurs délais.
          </p>
        </article>

        <article className="legal-article">
          <h2>Article 9 — Responsabilité</h2>
          <p>
            Riton ne saurait être tenu responsable des retards de livraison dus au transporteur,
            à des événements de force majeure, ou à une adresse incorrecte fournie par l&apos;acheteur.
          </p>
        </article>

        <article className="legal-article">
          <h2>Article 10 — Données personnelles</h2>
          <p>
            Les informations recueillies lors d&apos;une commande sont nécessaires à son traitement.
            Consultez notre <a href="/politique-confidentialite">Politique de confidentialité</a> pour les détails.
          </p>
        </article>

        <article className="legal-article">
          <h2>Article 11 — Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige non résolu à l&apos;amiable,
            les tribunaux de Foix (Ariège) seront seuls compétents.
          </p>
        </article>

      </div>
    </div>
  );
}
