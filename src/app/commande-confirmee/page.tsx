import type { Metadata } from 'next';
import Link from 'next/link';
import CartCleaner from '../../components/panier/CartCleaner';

export const metadata: Metadata = {
  title: 'Commande confirmée — Merci !',
  description:
    "Votre commande a bien été enregistrée. Riton prépare vos produits artisanaux pour l'expédition.",
};

export default function CommandeConfirmeePage() {
  return (
    <div className="confirmation-page">
      {/* Clears Zustand cart on mount (client-side) */}
      <CartCleaner />

      <div className="confirmation-container">
        <div className="confirmation-badge" aria-hidden="true">✓</div>

        <h1 className="confirmation-title">Merci pour votre commande&nbsp;!</h1>
        <p className="confirmation-subtitle">
          Riton a bien reçu votre commande et prépare vos produits avec soin.
          Un email de confirmation vient de vous être envoyé.
        </p>

        <div className="confirmation-steps">
          <div className="confirmation-step">
            <span className="confirmation-step-icon" aria-hidden="true">📧</span>
            <div className="confirmation-step-body">
              <strong>Confirmation par email</strong>
              <p>Un récapitulatif de votre commande vous a été envoyé.</p>
            </div>
          </div>
          <div className="confirmation-step">
            <span className="confirmation-step-icon" aria-hidden="true">🥩</span>
            <div className="confirmation-step-body">
              <strong>Préparation artisanale</strong>
              <p>Vos produits sont sélectionnés et conditionnés le jour même.</p>
            </div>
          </div>
          <div className="confirmation-step">
            <span className="confirmation-step-icon" aria-hidden="true">❄️</span>
            <div className="confirmation-step-body">
              <strong>Expédition isotherme</strong>
              <p>Votre colis part le prochain jour ouvré, sous pack de froid garanti.</p>
            </div>
          </div>
          <div className="confirmation-step">
            <span className="confirmation-step-icon" aria-hidden="true">🚚</span>
            <div className="confirmation-step-body">
              <strong>Livraison 24–48h</strong>
              <p>Suivi de colis disponible par email dès l&apos;expédition.</p>
            </div>
          </div>
        </div>

        <div className="confirmation-help">
          <p>
            Une question ? Écrivez-nous à{' '}
            <a href="mailto:contact@riton.fr" className="confirmation-email-link">
              contact@riton.fr
            </a>{' '}
            — nous répondons sous 24h ouvrées.
          </p>
        </div>

        <div className="confirmation-actions">
          <Link href="/boutique" className="confirmation-btn-primary">
            Continuer mes achats
          </Link>
          <Link href="/" className="confirmation-btn-secondary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
