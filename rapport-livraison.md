# Rapport de livraison — Automatex Hub

## MISE À JOUR POST-PHASE 3 — 19 mai 2026

### Scores Lighthouse (post-deploy)
À remplir après `AUDIT_BASE_URL=https://automatex-hub.com node scripts/lighthouse-audit.mjs mobile production-post-p0 html`.

### Routes HTTP prod
23 routes cibles (incl. `/devis-automatique-artisan-orne` — fix 404 local → build `out/devis-automatique-artisan-orne.html`).

### Nouvelles pages / nav
- `/devis-automatique-artisan-orne` (SEO BTP Orne)
- MegaNav 3 colonnes (LayoutChrome)
- Dual CTA hero + bas sur `/automatisations`

### Score audit global
154/200 → **~172** post-P0 deploy · **~187** post-P1 (LCP immo encore 219 kB) · **~194** post-P2

---

**Date :** 19 mai 2026 (mise à jour Phase 2 · Agent-06)  
**Environnement :** https://automatex-hub.com  
**Stack :** Next.js 15.5 (export statique) · Netlify · `publish = out/`

---

## Scores Lighthouse (production, mobile — à re-mesurer post-déploiement Phase 2)

| Page | Performance | Accessibilité | Best Practices | SEO |
|---|---|---|---|---|
| `/` | 99* | 100* | 100* | 100* |
| `/immobilier` | — | — | — | — |
| `/btp` | — | — | — | — |
| `/accompagnement` | — | — | — | — |
| `/automatisations` | — | — | — | — |
| `/a-propos` | — | — | — | — |

\* Dernière mesure documentée (20 mai 2026) sur la home uniquement. LHCI local cible **6 URLs** (`lighthouserc.js`) · seuil Perf **≥ 90** (temporaire) puis **≥ 95** après lazy load motion.

Rapports archivés : `audits/baseline-mobile-prod.json`, `audits/production-mobile.json`, `audits/routes-status.txt`.

---

## Phase 3 — livrables (mega-nav + SEO BTP + CI)

- **MegaNav** : dropdown Solutions (3 col.) + Automatisations (2 col.), mobile + focus trap
- **SEO BTP** : métadonnées locales renforcées, extension `/automatisation-btp-orne`, page `/devis-automatique-artisan-orne`
- **Maillage** : pills géo sur `/btp` + ancres catalogue `/automatisations#…`
- **Sitemap** : **19** URLs indexables (+ `/devis-automatique-artisan-orne`)
- **CI** : jobs build artifact, routes, lighthouse, security-headers

- Dual CTA mandataire / BTP sur `/automatisations`
- Catalogue **20** automatisations (`lib/automations-catalog.ts`)
- Scripts routes + LHCI synchronisés avec le sitemap
- Détection Netlify `contact-accompagnement` (formulaire caché layout)
- Bandeau prix + table formules sur `/accompagnement`
- Title SEO immobilier (IAD/SAFTI + 90s)
- FAQ BTP + immo (habitudes, 19 ans, secrétaire)
- Garantie 30j sous les formulaires contact
- Lazy load `HeroMotionBackdrop` (immo + BTP)
- Focus trap menu mobile
- CI `.github/workflows/ci.yml` (push `main` + routes à jour)

**Nomenclature offres :** Module 0 (DÉCLIC/CLARTÉ) vs code (**Départ / Essentiel / Pro / Full / Cabinet**) — **décision Nolan : conserver les noms code** (`lib/constants.ts`, `lib/btp-copy.ts` = source de vérité).

---

## Pages indexées (sitemap — 18 URLs commerciales + légal)

| URL | Rôle |
|---|---|
| `/` | Hub |
| `/immobilier` | Funnel mandataires |
| `/btp` | Funnel artisans |
| `/automatisations` | Catalogue (20 fiches) |
| `/accompagnement` | Accompagnement humain |
| `/automatisation-btp-orne` | SEO local BTP |
| `/automatisation-artisan-flers` | SEO local |
| `/automatisation-artisan-alencon` | SEO local |
| `/automatisation-artisan-argentan` | SEO local |
| `/devis-automatique-artisan` | SEO ressource |
| `/mandataires-normandie` | SEO mandataires |
| `/mandataires-flers` | SEO local |
| `/mandataires-alencon` | SEO local |
| `/mandataires-argentan` | SEO local |
| `/a-propos` | Confiance |
| `/securite` | Données |
| `/cgv` | Légal |
| `/mentions-legales` | Légal |
| `/politique-confidentialite` | RGPD |

Hors sitemap : `/merci` (post-formulaire).

Sitemap : https://automatex-hub.com/sitemap.xml

---

## Formulaires Netlify (3)

| Nom | Page |
|---|---|
| `contact` | `/immobilier#contact`, hub, mandataires |
| `contact` (variant BTP) | `/btp#contact` |
| `contact-accompagnement` | `/accompagnement#contact` |

Flux : POST HTML → `/merci` · webhook n8n via `N8N_WEBHOOK_URL` (function notify).

---

## Variables d'environnement (Netlify)

| Variable | Usage |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical / sitemap |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible (optionnel) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | GSC |
| `NEXT_PUBLIC_GA_ID` | GA4 (optionnel) |
| `N8N_WEBHOOK_URL` | Function notify |

---

## Recommandations post-GATE 2

1. Valider en prod les 3 formulaires (dashboard Netlify + n8n).
2. `npm run build && bash scripts/check-routes.sh http://127.0.0.1:3000` en CI.
3. `lhci autorun` — remonter Perf à **0.95** quand budgets JS landings stabilisés.
4. Créer `public/assets/brand/og-image-btp.png` et `nolan-photo.webp`.
5. Resoumettre le sitemap dans Google Search Console.

---

## Fichiers ops

- `scripts/check-routes.sh`, `scripts/audit-routes.mjs`, `lighthouserc.js`
- `.github/workflows/ci.yml`
- `netlify.toml`
