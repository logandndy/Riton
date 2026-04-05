'use client';

import { useState } from 'react';
import Image from 'next/image';
import Hero from '../shared/Hero';

const HERO_IMG  = 'https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=1400&q=80';
const STORY_IMG = 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="cp">
      <Hero
        variant="contact"
        pretitle="Restons en contact"
        title="Nous écrire"
        subtitle="Une question sur nos produits, une commande spéciale, une envie de collaborer ? On vous répond sous 24 heures."
        bgImage={HERO_IMG}
      />

      {/* ── Info bar ────────────────────────────────────────── */}
      <div className="cp-infobar">
        <div className="cp-infobar-inner">

          <div className="cp-infobar-item">
            <div className="cp-infobar-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="cp-infobar-text">
              <span className="cp-infobar-label">Email</span>
              <a href="mailto:contact@riton.fr" className="cp-infobar-value cp-infobar-value--link">contact@riton.fr</a>
            </div>
          </div>

          <div className="cp-infobar-sep" aria-hidden="true" />

          <div className="cp-infobar-item">
            <div className="cp-infobar-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="cp-infobar-text">
              <span className="cp-infobar-label">Adresse</span>
              <span className="cp-infobar-value">Halle aux Grains · Foix 09000</span>
            </div>
          </div>

          <div className="cp-infobar-sep" aria-hidden="true" />

          <div className="cp-infobar-item">
            <div className="cp-infobar-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="cp-infobar-text">
              <span className="cp-infobar-label">Présents</span>
              <span className="cp-infobar-value">Mar – Sam · 9h – 19h</span>
            </div>
          </div>

          <div className="cp-infobar-sep" aria-hidden="true" />

          <div className="cp-infobar-item">
            <div className="cp-infobar-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div className="cp-infobar-text">
              <span className="cp-infobar-label">Livraison</span>
              <span className="cp-infobar-value">France · Belgique · Suisse</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Main body ───────────────────────────────────────── */}
      <section className="cp-body">
        <div className="cp-body-inner">

          {/* Editorial left */}
          <div className="cp-editorial">
            <span className="cp-editorial-eyebrow">Depuis 1992 à votre service</span>
            <h2 className="cp-editorial-title">
              Une question ?<br />
              <em>On adore</em><br />
              en parler.
            </h2>
            <p className="cp-editorial-text">
              Que vous souhaitiez en savoir plus sur l&apos;origine de nos fromages,
              composer un plateau cadeau ou organiser une livraison pour un événement,
              l&apos;équipe Riton est là pour vous guider avec passion.
            </p>
            <blockquote className="cp-editorial-quote">
              <p>
                &laquo; Le meilleur service qu&apos;on puisse offrir, c&apos;est de partager
                notre passion pour les vrais produits du terroir. &raquo;
              </p>
              <footer>— Riton, fondateur</footer>
            </blockquote>
            <div className="cp-editorial-photo">
              <Image
                src={STORY_IMG}
                alt="Étal de Riton au marché de Foix"
                fill
                sizes="(max-width: 1023px) 100vw, 38vw"
                className="cp-editorial-photo-img"
              />
              <div className="cp-editorial-photo-caption">
                Marché de Foix · Ariège
              </div>
            </div>
          </div>

          {/* Form right */}
          <div className="cp-form-panel">
            <div className="cp-form-card">

              <div className="cp-form-card-header">
                <span className="cp-form-card-eyebrow">Message</span>
                <h3 className="cp-form-card-title">Écrivez-nous</h3>
                <p className="cp-form-card-sub">Réponse garantie sous 24h ouvrées.</p>
              </div>

              {submitted ? (
                <div className="cp-form-success">
                  <div className="cp-form-success-icon" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h4>Message envoyé !</h4>
                  <p>Nous vous répondrons dans les 24 heures ouvrées.</p>
                </div>
              ) : (
                <form
                  className="cp-form-fields"
                  onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                >
                  <div className="cp-row">
                    <div className="cp-field">
                      <input type="text" id="cp-name" name="name" required placeholder=" " autoComplete="name" />
                      <label htmlFor="cp-name">Nom complet *</label>
                    </div>
                    <div className="cp-field">
                      <input type="email" id="cp-email" name="email" required placeholder=" " autoComplete="email" />
                      <label htmlFor="cp-email">Adresse email *</label>
                    </div>
                  </div>

                  <div className="cp-field">
                    <select id="cp-subject" name="subject" required defaultValue="">
                      <option value="" disabled>Choisissez un sujet</option>
                      <option value="commande">Question sur une commande</option>
                      <option value="produit">Information produit</option>
                      <option value="livraison">Livraison et délais</option>
                      <option value="cadeau">Commande cadeau / plateau</option>
                      <option value="partenariat">Partenariat · Professionnel</option>
                      <option value="autre">Autre</option>
                    </select>
                    <label htmlFor="cp-subject">Sujet *</label>
                  </div>

                  <div className="cp-field cp-field--textarea">
                    <textarea id="cp-message" name="message" required placeholder=" " rows={5} />
                    <label htmlFor="cp-message">Votre message *</label>
                  </div>

                  <button type="submit" className="cp-submit">
                    <span>Envoyer le message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
