# Guide d'optimisation Google Search Console — Automatex Hub

Document de référence pour **Gemini** (ou tout autre assistant) : bonnes pratiques GSC **+** état concret du dépôt **automatex-hub.com** (Next.js 15, export statique Netlify), audits PageSpeed / accessibilité et correctifs déjà livrés (mai 2026).

**URLs canoniques :** `https://automatex-hub.com`  
**Propriétaire / zone :** Nolan Hermand — Flers (61), Orne  
**Repo :** `AutomatexHUB.com` (branche `main`)

---

## Partie A — Guide générique : les fichiers clés GSC

### 1. Fichiers de configuration (à fournir à Google)

#### `sitemap.xml` (plan du site)

- **Rôle :** liste les URL importantes à indexer.
- **Optimisation :**
  - Au-delà de ~50 000 URL ou 50 Mo, utiliser un **index de sitemaps** (`sitemap-posts.xml`, `sitemap-pages.xml`, etc.).
  - Sitemaps dédiés si besoin : images, vidéos, Google Actualités.
  - Aucune URL en 404, 301 inutile ou bloquée par `robots.txt`.

#### `robots.txt` (budget de crawl)

- **Rôle :** autoriser / interdire le crawl par zone.
- **Optimisation :**
  - Bloquer paniers, admin, paramètres de tri/filtre infinis, assets inutiles au SEO.
  - Ligne obligatoire : `Sitemap: https://www.votresite.com/sitemap.xml`.

#### Fichier de vérification HTML (`googleXXXXX.html`)

- **Rôle :** prouver la propriété du site dans GSC.
- **Alternative recommandée :** enregistrement **TXT DNS** → propriété de domaine (HTTP/HTTPS, www, sous-domaines).

---

### 2. Fichiers de code (monitoring GSC)

#### Données structurées (`JSON-LD`)

- **Rôle :** sémantique pour Google (rich results).
- **Schémas utiles :** `Product`, `Article` / `NewsArticle`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`, `ProfessionalService`, `Service`.
- **GSC :** onglet « Résultats enrichis » → corriger erreurs de syntaxe pour FAQ, avis, fil d’Ariane, etc.

---

### 3. Fichiers d’analyse et de nettoyage

#### Exports Performance GSC (CSV / API)

- Requêtes, pages, pays, appareils (16 mois).
- **Opportunité SEO :** impressions élevées + position moyenne **11–20** → rafraîchir le contenu cible.

#### Logs serveur (`.log`)

- Croiser avec le rapport **Indexation / Couverture** : Googlebot sur les bonnes URLs vs pages zombies.

#### `disavow.txt` (désaveu de liens)

- À utiliser **avec prudence** en cas de negative SEO massif.

---

### Plan d’action GSC (générique)

1. Générer et valider `sitemap.xml`.
2. Configurer `robots.txt`.
3. Soumettre le sitemap dans GSC.
4. Surveiller **Indexation** et corriger les exclusions / erreurs.

---

## Partie B — Automatex Hub : fichiers GSC réels dans le repo

| Fichier / ressource | Emplacement | Notes |
|---------------------|-------------|--------|
| **Sitemap** | `app/sitemap.ts` → généré en `/sitemap.xml` au build | ~22 URLs ; **exclut** `/merci`. Priorités max : `/`, `/immobilier`, `/btp`, `/accompagnement`, `/automatisation-ia-tpe`. Ne pas dupliquer `public/sitemap.xml`. |
| **robots.txt** | `public/robots.txt` | `Disallow: /merci`, `/api/`, `/.netlify/` ; bots IA autorisés (GEO) ; `Sitemap: https://automatex-hub.com/sitemap.xml`. |
| **Vérification Google** | `app/layout.tsx` | Variable d’env `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` → `metadata.verification.google`. |
| **JSON-LD global** | `components/seo/StructuredData.tsx` + `lib/json-ld.ts` | Organisation / services selon pages. |
| **JSON-LD BTP** | `components/seo/BtpStructuredData.tsx` | Landing `/btp`. |
| **JSON-LD local** | `components/seo/LocalStructuredData.tsx` | Pages mandataires / géo. |
| **Routes & SEO mémo** | `docs/SITE-ROUTES-MEMORY.md` | Source de vérité URLs / ancres. |

**Soumission GSC :** `https://automatex-hub.com/sitemap.xml`  
**Pilier TPE :** `/automatisation-ia-tpe` · ancre suivi : `#suivi-rapports` · contact : `lib/hub-nav.ts` (`contactHref`).

---

## Partie C — Performance & Core Web Vitals (Lighthouse, mai 2026)

Objectif produit : **Performance ≥ 95** (mobile et desktop), **CLS &lt; 0,05**, **TBT &lt; 50 ms** sur `/`, `/immobilier`, `/btp`.

### Constats audit (avant correctifs)

| Métrique | Mobile | Desktop | Diagnostic |
|----------|--------|---------|--------------|
| Performance | ~83 | ~79 | Desktop TBT plus élevé (plus de JS / grilles visibles) |
| CLS | ~0,334 | ~0,342 | Même source structurelle (pas viewport) |
| TBT | ~90 ms | ~160 ms | Thread principal chargé au montage |

**CLS home (`/`) — cause majeure identifiée :** chargement **async** de la feuille CSS globale (`scripts/optimize-static-html-css.mjs` avec `media="print"` + `onload`) → shift ~**0,335** sur la section hero hub (`HubEntry`, classe `hub-entry-hero`).

### Correctifs livrés (commits récents sur `main`)

#### CLS

- **CSS global bloquant** : suppression du différé async dans `scripts/optimize-static-html-css.mjs` ; conservation du **preload** font Inter woff2.
- **CSS critique** : `components/seo/CriticalAboveFoldStyles.tsx` (shell hub, header, badges, `max-w-content`, typo).
- **Hub** : `components/hub/HubEntry.tsx` → classe `hub-entry-hero`.
- **Inter** : `fallback` + `adjustFontFallback` dans `app/layout.tsx`.
- **ROI** : `components/motion/RoiCounter.tsx` statique (plus d’anim GSAP → pas de shift chiffres).
- **Sticky mobile** : `opacity` / `visibility` au lieu de `translateY` / `display:none` (`app/globals.css`, `app/animations.css`).
- **Démos** : `MotionDemo` dimensions + lazy ; skeleton `ImmobilierLeadDemoSection` ; WebP dans `lib/demo-loaders.ts` / `public/assets/demos/*.webp`.
- **Parcours immobilier** : HTML complet au build (`ImmobilierHome.tsx` sans dynamic skeleton inutile).

#### TBT (desktop)

- `lib/schedule-idle.ts` + `components/layout/DeferredPerfChrome.tsx` (curseur, UTM, scroll depth après idle).
- `LayoutChrome.tsx`, `ReadingProgress.tsx`, `UtmCapture.tsx`, `MotionBootstrap.tsx` (idle).
- `next.config.mjs` : `optimizePackageImports` (`gsap`, `lottie-react`).

#### Accessibilité

- Menu mobile : **`inert`** quand fermé, plus de `aria-hidden` sur un conteneur avec liens focusables (`MegaNav.tsx`).
- CTA primaire : texte `var(--color-cta-fg)` sur fond orange pour **WCAG AA** (`app/globals.css` — `.btn-bracket-primary`).
- Contraste texte secondaire : `--color-muted` / `--color-faint` dans `@theme` (`globals.css`).

### Fichiers perf à ne pas « casser »

| Fichier | Rôle |
|---------|------|
| `scripts/optimize-static-html-css.mjs` | Post-build : **preload font uniquement** (ne pas remettre CSS async). |
| `netlify.toml` | Headers cache assets / `_next/static`. |
| `components/layout/CustomCursor.tsx` | Halo souris (chargé en différé via `DeferredPerfChrome`). |

### Règle produit

- **Ne pas modifier le design visuel** (couleurs CTA orange, layout marketing) pour la perf : config, dimensions, `font-display`, skeletons, idle, lazy-load uniquement.

---

## Partie D — Checklist post-déploiement (Gemini / humain)

### Google Search Console

- [ ] Propriété vérifiée (DNS ou meta).
- [ ] Sitemap soumis : `https://automatex-hub.com/sitemap.xml`.
- [ ] Rapport **Pages** : pas de hausse 404 sur URLs du sitemap.
- [ ] **Résultats enrichis** : FAQ / LocalBusiness sans erreurs critiques.
- [ ] Export Performance : opportunités position 11–20.

### PageSpeed / CWV (après deploy Netlify)

- [ ] `/` — CLS &lt; 0,05 (hero hub stable).
- [ ] `/immobilier`, `/btp` — CLS + TBT.
- [ ] Accessibilité : menu mobile + contraste CTA OK.

### Build local

```bash
npm run build
# → out/ + optimize-static-html-css (preload Inter)
```

---

## Partie E — Commits de référence (historique récent)

| Commit | Sujet |
|--------|--------|
| `50bf333` | perf: CLS/TBT desktop (idle, WebP, ROI statique, deferred chrome) |
| `79f1739` | fix(a11y): menu inert + contraste CTA primaire |
| `a63cb95` | fix(cls): hero hub — CSS bloquant + shell critique |

---

## Partie F — Prompts & docs internes Cursor

- Routes / URLs : `docs/SITE-ROUTES-MEMORY.md`
- Règle Cursor : `.cursor/rules/site-routes.mdc` (lire avant nouvelle URL ou copy stratégique)

---

*Automatex Hub · Nolan Hermand · Flers (61) · Document consolidé pour Gemini — Search Console + état technique du site (mai 2026).*
