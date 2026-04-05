# 📚 Guide de Structure CSS - RITON

## Vue d'ensemble

Le système de styles de RITON est organisé de manière **modulaire et scalable**, suivi du principe **Mobile-First**. Tous les fichiers CSS sont regroupés dans le dossier `/src/styles/`.

---

## 🗂️ Structure des dossiers

```
src/styles/
├── index.css                    # Import central de tous les CSS
├── variables.css                # Variables globales (couleurs, espacements, typographie)
├── animations.css               # Animations réutilisables
│
├── shared/                       # Composants partagés
│   ├── layout.css               # Styles globaux, containers, grilles
│   ├── navbar.css               # Barre de navigation
│   ├── footer.css               # Pied de page
│   └── cart-slideover.css        # Modal panier latéral
│
├── accueil/                      # Page d'accueil (Home)
│   ├── hero.css                 # Section héro
│   ├── story.css                # Section histoire et valeurs
│   └── products.css             # Section produits en vedette
│
├── boutique/                     # Pages de boutique
│   ├── listing.css              # Liste de produits avec filtres
│   ├── filters.css              # Composant filtres
│   └── product-detail.css        # Page détail produit
│
├── panier/                       # Page panier
│   └── cart.css                 # Page complète du panier
│
└── pages/                        # Pages statiques
    └── static-pages.css         # Contact, pages légales, localisation, etc.
```

---

## 🎨 Système de couleurs

### Couleurs primaires

- **Red (#d32f2f)** - Couleur principale de la marque
- **Red Dark (#b71c1c)** - Hover / accent foncé
- **Red Light (#ef5350)** - Variante claire
- **Red Pale (#ffebee)** - Arrière-plan léger
- **Wine (#6b2c2c)** - Terroienne foncée

### Couleurs neutres

- **Black (#1a1a1a)** - Texte principal
- **Charcoal (#2c2c2c)** - Arrière-plans foncés
- **White (#fcfbf8)** - Blanc naturel (crème)
- **Gray Light (#d9d9d9)** - Bordures
- **Gray Medium (#5a5a5a)** - Texte secondaire

---

## 📐 Système d'espacements (Grille 8px)

```css
--spacing-xs: 0.25rem; /* 4px */
--spacing-sm: 0.5rem; /* 8px */
--spacing-md: 1rem; /* 16px */
--spacing-lg: 1.5rem; /* 24px */
--spacing-xl: 2rem; /* 32px */
--spacing-2xl: 2.5rem; /* 40px */
--spacing-3xl: 3rem; /* 48px */
--spacing-4xl: 4rem; /* 64px */
--spacing-5xl: 5rem; /* 80px */
```

---

## 🔤 Typographie

### Familles

- **Serif (régalien)** : `Georgia`, `Garamond` - Titres, contenu premium
- **Sans-serif (moderne)** : `-apple-system`, `BlinkMacSystemFont` - Corps, UI

### Tailles (Responsive)

- **Body** : 16px → 14px mobile
- **Headings** : h1 (3rem) → h6 (18px)
- Tous les titres utilisent `line-height: 1.2` pour compacité

### Poids

- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600 (standard buttons)
- Bold: 700 (titres, emphasis)

---

## ⚡ Animations disponibles

### Classes utilitaires

```css
.animate-fade-in           /* Fondu classique */
.animate-fade-in-up        /* Fondu + montée (entrée préférée) */
.animate-fade-in-left      /* Arrivée depuis gauche */
.animate-fade-in-right     /* Arrivée depuis droite */
.animate-scale-up          /* Zoom doux */
.animate-bounce            /* Rebond */
.animate-pulse             /* Pulsation (attention) */
.animate-float             /* Flottaison (images) */
.animate-glow              /* Lueur (highlight) */
.animate-slide-in-left     /* Glisse de côté */
```

### Délais staggered

```css
.stagger-1 {
  animation-delay: 0.1s;
}
.stagger-2 {
  animation-delay: 0.2s;
}
.stagger-3 {
  animation-delay: 0.3s;
}
/* ...jusqu'à stagger-5 */
```

---

## 📱 Breakpoints (Mobile-First)

```css
640px   (sm)   →  Petit mobile
768px   (md)   →  Tablette
1024px  (lg)   →  Desktop standard
1280px  (xl)   →  Desktop grand
1536px  (2xl)  →  Ultra-wide
```

### Exemple de pattern

```css
/* Mobile par défaut */
.element {
  display: block;
  width: 100%;
}

/* Tablet et plus */
@media (min-width: 768px) {
  .element {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop et plus */
@media (min-width: 1024px) {
  .element {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 🔧 Maintien du système

### 1. **Nouvelle page CSS**

Créer dans le dossier approprié avec ce structure :

```css
/* ===== [NOM DE LA PAGE] - RITON ===== */
/* Description courte */

.page-name {
  /* Styles */
}

/* COMPOSANT 1 */
.component-1 {
}

/* COMPOSANT 2 */
.component-2 {
}

/* RESPONSIVE */
@media (max-width: 767px) {
  /* Mobile adjustments */
}
```

### 2. **Ajouter à index.css**

Importer le nouveau fichier dans `/styles/index.css` :

```css
@import url("./nouveau-dossier/nouveau-fichier.css");
```

### 3. **Utilisation des variables**

Toujours utiliser les variables CSS plutôt que hardcoder :

```css
/* ✅ BON */
background: var(--color-red);
padding: var(--spacing-lg);

/* ❌ MAUVAIS */
background: #d32f2f;
padding: 24px;
```

---

## 🎯 Patterns courants

### Button standard

```html
<button class="button-primary">Cliquez</button>
```

### Product card avec hover

```html
<div class="product-card">
  <div class="product-image-container">
    <img class="product-image" src="..." />
  </div>
  <div class="product-info">
    <h3 class="product-name">Titre</h3>
    <p class="product-price">Prix</p>
  </div>
</div>
```

### Grid responsive

```html
<div class="products-grid">
  <!-- 1 col mobile, 2 col tablet, 4 col desktop -->
</div>
```

---

## ✨ Bonnes pratiques

1. **Préférer flexbox pour layouts 1D**, grid pour 2D
2. **Utiliser gap** au lieu de margins pour padding des grilles
3. **Appliquer animations** avec classes `.animate-*` plutôt que CSS directs
4. **Tester mobile-first** avant d'ajouter media queries
5. **Comment les fichiers** avec sections claires (HERO, PRODUCTS, etc.)
6. **Grouper les media queries** à la fin du fichier
7. **Respecter la cohérence de nomenclature** : `.section-component-element`

---

## 📊 Hiérarchie de spécificité

```
1. Variables CSS          (--color-red)
2. Utilities              (.mt-1, .text-center)
3. Base elements          (body, button, input)
4. Component classes      (.product-card, .navbar)
5. Responsive overrides   (@media queries)
```

---

## 🚀 Optimisations appliquées

✅ **Mobile-first** - Base mobile optimisée  
✅ **CSS variables** - Maintenabilité (35+ variables)  
✅ **Animations performantes** - Transform + opacity  
✅ **Fallbacks** - Support multigénérationalnel  
✅ **Print styles** - Masquage composants non imprimables  
✅ **Accessibilité** - `prefers-reduced-motion` respecté

---

## 📝 Notes finales

- Tous les fichiers CSS importent de `index.css` via `@import url('../styles/index.css')` dans `globals.css`
- Les variables sont définies une seule fois dans `variables.css`
- Les animations sont centralisées dans `animations.css`
- Chaque page a son propre fichier dans le dossier correspondant
- Les media queries **mobile-first** simplifient le CSS

**Le système est prêt pour scale!** 🎉
