# Rapport de livraison — Automatex Hub

**Date :** 20 mai 2026  
**Environnement :** https://automatex-hub.com  
**Stack :** Next.js 15 (export statique) · Netlify · `publish = out/`

---

## Scores Lighthouse (production, mobile — Moto G4 simulé)

| Axe | Brief (avant) | Baseline prod (pré-fix) | Après livraison |
|---|---|---|---|
| Performance | 90 | 77 | **99** |
| Accessibilité | 98 | 97 | **100** |
| Best Practices | 92 | 96 | **100** |
| SEO | 100 | 100 | **100** |

Référence preview Netlify (`automatexhub.netlify.app`) avant derniers correctifs contraste : Performance **97**, Accessibilité **97**, BP **96**, SEO **100**.

Rapports archivés :
- `audits/baseline-mobile.json` / `audits/baseline-desktop-prod.json`
- `audits/production-mobile.html` / `audits/production-mobile.json`

---

## Corrections apportées

1. **Hero / LCP** — Suppression de `hero-atmosphere.webp` (404) ; fond CSS `.hero-atmosphere` ; retrait de `framer-motion` sur le hero.
2. **Intégrations** — Liste réduite (mandataires) ; SVG hébergés dans `/assets/integrations/` (plus de jsDelivr / 403 Leboncoin).
3. **DOM** — Suppression Discord, GitHub, WordPress, Dropbox et initiales hors-cible.
4. **Accessibilité** — Contraste WCAG AA : `--color-faint`, footer sombre, marquees, badge −17 %, cartes PAP/LI.
5. **Best Practices** — CSP, HSTS, X-Frame-Options DENY ; zéro erreur console 4xx en prod.
6. **Netlify** — Redirect www → apex ; cache long `/_next/static/*`, `/assets/*`, `*.woff2`.
7. **SEO** — Inchangé (sitemap 10 URLs, JSON-LD, meta, robots).

---

## Pages disponibles (HTTP 200 vérifié)

| URL | Statut |
|---|---|
| `/` | 200 |
| `/mandataires-normandie` | 200 |
| `/mandataires-flers` | 200 |
| `/mandataires-alencon` | 200 |
| `/mandataires-argentan` | 200 |
| `/a-propos` | 200 |
| `/mentions-legales` | 200 |
| `/politique-confidentialite` | 200 |
| `/cgv` | 200 |
| `/securite` | 200 |
| `/merci` | 200 |

Sitemap : https://automatex-hub.com/sitemap.xml (10 URLs, `/merci` exclu).

---

## Formulaire de contact

- Soumission HTML Netlify Forms (`data-netlify="true"`) → redirection `/merci`.
- Notification parallèle : `POST /.netlify/functions/notify` → webhook **n8n** (`N8N_WEBHOOK_URL` côté Netlify).
- **À confirmer côté client :** notifications email Netlify Forms vers nolan.hermand@automatex-hub.com ; variable `N8N_WEBHOOK_URL` en production.

---

## Variables d'environnement (Netlify)

| Variable | Usage |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical / sitemap |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics Plausible (optionnel) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | GSC |
| `NEXT_PUBLIC_GA_ID` | GA4 (optionnel) |
| `N8N_WEBHOOK_URL` | Function notify (serveur) |

---

## Recommandations post-lancement

1. Surveiller les soumissions dans **Netlify → Forms** et le workflow n8n.
2. Relancer `AUDIT_BASE_URL=https://automatex-hub.com npm run audit:lighthouse mobile production-mobile html` à J+30.
3. Google Search Console : resoumettre `sitemap.xml` ; inspection d’URL (`npm run audit:routes` / `scripts/gsc-indexation-urls.mjs`).

---

## Checklist go/no-go (Annexe B)

| # | Check | Statut |
|---|---|---|
| 1 | hero-atmosphere : supprimé (CSS) | OK |
| 2 | leboncoin.svg local | OK |
| 3 | Formulaire : flux POST /merci | OK (recette manuelle dashboard) |
| 4 | Email notification | À valider Netlify/n8n |
| 5 | `/merci` 200 | OK |
| 6 | SSL automatex-hub.com | OK |
| 7 | Zéro erreur console prod | OK |
| 8 | Performance ≥ 95 mobile | OK (99) |
| 9 | Accessibilité = 100 | OK |
| 10 | Best Practices ≥ 98 | OK (100) |
| 11 | SEO = 100 | OK |
| 12 | CSP actif | OK |
| 13 | Cache assets | OK |
| 14 | Pages `/mandataires-*` | OK |
| 15 | Sitemap valide | OK |
| 16 | OG image | `/assets/brand/og-image.png` (build) |
| 17 | Schema.org | JSON-LD layout |
| 18 | Responsive 375 / 1440 | `scripts/device-test.mjs` (BASE_URL prod) |
| 19 | Discord/GitHub/WordPress supprimés | OK |
| 20 | Rapport de livraison | OK |

---

## Fichiers livrés

- `audits/` — baselines, production, screenshots, `routes-status.txt`, `console-errors.txt`
- `netlify.toml` — build, redirects, headers
- `scripts/lighthouse-audit.mjs`, `audit-routes.mjs`, `audit-console-screenshots.mjs`

Commits principaux : `9e355d5` (perf/CSP/assets), `4cbed0a` (accessibilité).
