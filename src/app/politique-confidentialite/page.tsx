import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    "Politique de confidentialité et gestion des données personnelles de Riton — charcuterie & fromages artisanaux.",
};

export default function PolitiquePage() {
  return (
    <div className="legal-page">
      <div className="legal-page-header">
        <span className="legal-pretitle">Documents légaux</span>
        <h1 className="legal-page-title">Politique de Confidentialité</h1>
        <p className="legal-page-date">Mise à jour : avril 2025</p>
      </div>

      <div className="legal-page-content">

        <article className="legal-article">
          <h2>1. Responsable du traitement</h2>
          <ul>
            <li><strong>Riton — Charcuterie &amp; Fromages Artisanaux</strong></li>
            <li><strong>Email :</strong> <a href="mailto:contact@riton.fr">contact@riton.fr</a></li>
            <li><strong>Adresse :</strong> Halle aux Grains, 09000 Foix, Ariège</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2>2. Données collectées</h2>
          <ul>
            <li><strong>Données de commande :</strong> nom, prénom, adresse de livraison, email</li>
            <li><strong>Données de paiement :</strong> traitées exclusivement par Stripe (aucune donnée bancaire stockée par nous)</li>
            <li><strong>Données de navigation :</strong> adresse IP, pages visitées (si cookies analytiques acceptés)</li>
            <li><strong>Données de contact :</strong> informations transmises via le formulaire</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2>3. Finalités du traitement</h2>
          <ul>
            <li>Traiter et expédier vos commandes</li>
            <li>Vous envoyer les confirmations et informations de suivi</li>
            <li>Répondre à vos demandes de contact</li>
            <li>Améliorer notre site (analytics anonymisés, avec consentement)</li>
            <li>Vous envoyer notre newsletter (avec consentement explicite)</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2>4. Base légale</h2>
          <ul>
            <li><strong>L&apos;exécution contractuelle</strong> — données de commande et de livraison</li>
            <li><strong>Votre consentement</strong> — newsletter et cookies analytiques</li>
            <li><strong>Notre intérêt légitime</strong> — sécurité du site et prévention des fraudes</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2>5. Cookies</h2>
          <div className="legal-highlight">
            <p><strong>Cookies essentiels</strong> (toujours actifs) : gestion du panier, session sécurisée.</p>
          </div>
          <div className="legal-highlight">
            <p><strong>Cookies analytiques</strong> (soumis à consentement) : statistiques de navigation anonymisées.</p>
          </div>
          <p>
            Vous pouvez gérer vos préférences via la bannière cookies affichée lors de votre première visite,
            ou en vidant les données locales de votre navigateur. Le refus des cookies analytiques
            n&apos;affecte pas le fonctionnement du site.
          </p>
        </article>

        <article className="legal-article">
          <h2>6. Conservation des données</h2>
          <ul>
            <li><strong>Données de commande :</strong> 3 ans (obligation légale comptable)</li>
            <li><strong>Données de contact :</strong> 1 an après le dernier échange</li>
            <li><strong>Newsletter :</strong> jusqu&apos;à désinscription</li>
            <li><strong>Cookies analytiques :</strong> 13 mois maximum</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2>7. Partage des données</h2>
          <p>Vos données ne sont jamais vendues. Elles peuvent être partagées uniquement avec :</p>
          <ul>
            <li><strong>Stripe</strong> — traitement sécurisé des paiements</li>
            <li><strong>Transporteurs</strong> (Colissimo, etc.) — uniquement pour la livraison</li>
          </ul>
        </article>

        <article className="legal-article">
          <h2>8. Vos droits (RGPD)</h2>
          <p>Conformément au RGPD, vous disposez des droits d&apos;accès, de rectification, d&apos;effacement,
          de portabilité, d&apos;opposition et de retrait du consentement.</p>
          <p>
            Pour les exercer : <a href="mailto:contact@riton.fr">contact@riton.fr</a> — réponse sous 30 jours.
            Vous pouvez également saisir la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
          </p>
        </article>

        <article className="legal-article">
          <h2>9. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques adaptées : chiffrement HTTPS/TLS,
            accès restreint aux données, journalisation des accès.
          </p>
        </article>

        <article className="legal-article">
          <h2>10. Modifications</h2>
          <p>
            Cette politique peut être mise à jour. La date de modification est indiquée en en-tête.
            Toute modification substantielle fera l&apos;objet d&apos;une notification sur le site.
          </p>
        </article>

      </div>
    </div>
  );
}
