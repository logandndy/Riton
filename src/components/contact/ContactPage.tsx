'use client';

import Image from 'next/image';
import Hero from '../shared/Hero';

const CONTACT_IMG = 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=1400&q=80';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Hero
        variant="contact"
        pretitle="Restons en contact"
        title="Nous écrire"
        subtitle="Une question sur nos produits, une commande spéciale, une envie de collaborer ? On vous répond sous 24 heures."
        bgImage={CONTACT_IMG}
      />

      <section className="contact-split">

        {/* ── Left: photo + info ── */}
        <div className="contact-split-visual">
          <Image
            src={CONTACT_IMG}
            alt="Étal artisanal de Riton"
            fill
            className="contact-visual-img"
            sizes="50vw"
          />
          <div className="contact-visual-overlay" />
          <div className="contact-visual-content">
            <p className="contact-visual-eyebrow">Présents du mardi au samedi</p>
            <div className="contact-visual-details">
              <div className="contact-visual-item">
                <span className="contact-visual-item-label">Email</span>
                <a href="mailto:contact@riton.fr" className="contact-visual-item-value">
                  contact@riton.fr
                </a>
              </div>
              <div className="contact-visual-item">
                <span className="contact-visual-item-label">Adresse</span>
                <span className="contact-visual-item-value">
                  Halle aux Grains · 09000 Foix
                </span>
              </div>
              <div className="contact-visual-item">
                <span className="contact-visual-item-label">Horaires</span>
                <span className="contact-visual-item-value">
                  Mar – Sam : 9h – 19h
                </span>
              </div>
              <div className="contact-visual-item">
                <span className="contact-visual-item-label">Livraison</span>
                <span className="contact-visual-item-value">
                  France · Belgique · Suisse
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="contact-split-form">
          <div className="contact-form-wrap">
            <span className="contact-form-eyebrow">Message</span>
            <h2 className="contact-form-title">Écrivez-nous</h2>
            <p className="contact-form-subtitle">
              Réponse garantie sous 24 heures ouvrées.
            </p>

            <form className="contact-form-fields" onSubmit={e => e.preventDefault()}>
              <div className="cf-row">
                <div className="cf-field">
                  <input type="text" id="cf-name" name="name" required placeholder=" " autoComplete="name" />
                  <label htmlFor="cf-name">Nom complet *</label>
                </div>
                <div className="cf-field">
                  <input type="email" id="cf-email" name="email" required placeholder=" " autoComplete="email" />
                  <label htmlFor="cf-email">Adresse email *</label>
                </div>
              </div>

              <div className="cf-field">
                <select id="cf-subject" name="subject" required defaultValue="">
                  <option value="" disabled>Choisissez un sujet</option>
                  <option value="commande">Question sur une commande</option>
                  <option value="produit">Information produit</option>
                  <option value="livraison">Livraison et délais</option>
                  <option value="cadeau">Commande cadeau / plateau</option>
                  <option value="partenariat">Partenariat · Professionnel</option>
                  <option value="autre">Autre</option>
                </select>
                <label htmlFor="cf-subject">Sujet *</label>
              </div>

              <div className="cf-field cf-field--textarea">
                <textarea id="cf-message" name="message" required placeholder=" " rows={5} />
                <label htmlFor="cf-message">Votre message *</label>
              </div>

              <button type="submit" className="cf-submit">
                <span>Envoyer le message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </div>

      </section>
    </div>
  );
}
