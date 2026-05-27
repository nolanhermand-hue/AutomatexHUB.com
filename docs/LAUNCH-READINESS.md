# Mise en production — revue senior (2026-05-27)

**Verdict : GO production** — site marketing indexable, formulaires détectables, CI défini, écarts résiduels documentés (perf Lighthouse en amélioration continue, pas bloquants lancement).

## Checklist technique (automatisée en CI)

| Contrôle | Commande / workflow | Statut |
|----------|---------------------|--------|
| Mots interdits (pages publiques) | `npm run check:words` | Vert (docs/ exclu du scan) |
| Build export statique | `npm run build` | Vert |
| Poids animations | `npm run check:animations` | Vert (CI) |
| Routes 200 + assets clés | `scripts/check-routes.sh` | Vert (URLs sans `/` final) |
| Audit routes vs inventaire | `scripts/audit-routes.mjs` | Vert (CI) |
| Lighthouse mobile (6 URLs) | `lighthouserc.js` + `docs/ci-github-workflow.example.yml` | Seuils : SEO/a11y/BP stricts ; perf **warn** ≥ 0,9 — **copier le workflow dans `.github/workflows/`** (push GitHub nécessite scope `workflow` sur le token) |
| Headers sécurité | `netlify.toml` | Vert |

## SEO & indexation

| Élément | Détail |
|---------|--------|
| Canon | `https://automatex-hub.com` (www → 301) |
| `robots.txt` | Allow `/`, Disallow `/merci`, `/api/`, `/.netlify/` |
| `sitemap.xml` | 22 URLs indexables (`app/sitemap.ts`) |
| Meta robots | `index, follow` + `X-Robots-Tag` global Netlify |
| `/merci` | `noindex` (header + layout + hors sitemap) |
| JSON-LD | FAQ, Breadcrumb, LocalBusiness, Organization, SoftwareApplication (validé Rich Results Test prod) |

## Conversion & crédibilité

| Élément | Statut |
|---------|--------|
| Catalogue automatisations | **20** entrées (`AUTOMATIONS_CATALOG`) |
| CTA catalogue immo + BTP + TPE | `/automatisations` |
| Avatar fondateur | `founder-avatar.svg` (pas de 404 ; photo `.webp` optionnelle) |
| OG BTP | `og-image-btp.png` (généré au build favicons) |
| Formulaires Netlify | `contact` + `contact-accompagnement` dans `NetlifyFormsDetection` |
| Garantie 30j | Près du formulaire Contact |

## Performance & JS (lot 2026-05)

- Framer Motion retiré du chemin critique layout (CSS + listeners).
- GSAP chargé en idle dans `AppProviders`.
- CSS global différé post-build (`optimize-static-html-css.mjs`).
- Polyfill Next remplacé par noop (navigateurs modernes, `browserslist`).

**Post-déploiement** : relancer Lighthouse prod sur `/immobilier` et Search Console → sitemap.

## Hors scope « 100 % marketing » (Phase 2 optionnelle)

- Score Lighthouse perf mobile **95+** sur 5 pages (objectif produit, pas gate bloquant).
- Photo portrait Nolan réelle (`public/assets/brand/nolan-photo.webp`).
- E2E Cypress/axe complet.
- Harmonisation nomenclature offres DÉCLIC vs site.
- 3 fiches catalogue supplémentaires si le positionnement évolue au-delà de 20.

## Actions Nolan (5 min)

1. Search Console : propriété `automatex-hub.com`, sitemap `sitemap.xml`.
2. Netlify : vérifier que les formulaires `contact` et `contact-accompagnement` apparaissent dans l’onglet Forms après deploy.
3. Test manuel : envoi formulaire accompagnement → `/merci`.

## Animations performantes (hyper-prompt v1)

- **CSS** : `app/animations.css` (importé dans `globals.css`)
- **Scroll** : `ScrollAnimationProvider` + `lib/use-scroll-animation.ts` (IO natif + MutationObserver pour sections lazy)
- **Hero** : badge `.hero-badge-enter` uniquement ; pas d’anim LCP sur H1/CTA
- **Démos GSAP/Lottie** : inchangées (hors chemin layout) — ne pas y ajouter de libs d’animation

- Routes : [`SITE-ROUTES-MEMORY.md`](./SITE-ROUTES-MEMORY.md)
- GATE-1 historique : [`orchestration/phase-1/GATE-1-summary.md`](./orchestration/phase-1/GATE-1-summary.md)
