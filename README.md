# Riton - Front-end E-commerce

Site e-commerce pour Riton, spécialisé dans la charcuterie et les fromages artisanaux premium.

## Stack Technique

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Style** : CSS pur
- **Panier** : Zustand avec persist
- **Paiement** : Stripe Checkout (headless)
- **Back-end** : API Stripe pour les produits

## Fonctionnalités

- Navbar premium avec catégories et badge panier dynamique
- Pages boutique avec filtres (catégorie, prix, tri)
- Fiches produits avec ajout au panier
- CartSlideOver (tiroir latéral)
- Pages légales (CGV, confidentialité, etc.)
- Design rouge/noir élégant et authentique

## Installation

1. Cloner le repo :

   ```bash
   git clone https://github.com/logandndy/Riton.git
   cd Riton
   ```

2. Installer les dépendances :

   ```bash
   npm install
   ```

3. Configurer les variables d'environnement :
   Créer un fichier `.env.local` avec :

   ```
   STRIPE_SECRET_KEY=votre_clé_secrète_stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_clé_publique_stripe
   ```

4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

Ouvrir [http://localhost:3000](http://localhost:3000) pour voir le site.

## Structure du Projet

```
src/
├── app/                 # Pages Next.js
│   ├── boutique/        # Boutique et catégories
│   ├── panier/          # Page panier
│   └── ...
├── components/          # Composants réutilisables
├── lib/                 # Utilitaires (Stripe)
└── store/               # Store Zustand
```

## Déploiement

Le projet est prêt pour le déploiement sur Vercel, Netlify ou tout autre plateforme supportant Next.js.

## Copywriting

Le site utilise un copywriting chaleureux, authentique et rassurant, mettant en avant la qualité artisanale et le terroir ariégeois.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
