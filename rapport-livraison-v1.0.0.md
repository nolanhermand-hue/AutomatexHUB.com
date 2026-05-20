# Rapport de livraison — Automatex Hub v1.0.0

Date : 2026-05-19  
Environnement cible : https://automatex-hub.com  
Stack : Next.js static export (`out/`) · Netlify · Forms + n8n webhook  

## Résumé livraison

- Hub bifurcant `/` avec accompagnement 3 colonnes + démo avant/après
- Landings `/immobilier`, `/btp`, `/accompagnement` enrichies
- 5 pages SEO BTP locales + blocs GEO Q/R
- 5 démos motion (PNG fallback + animations CSS, scroll-triggered, `prefers-reduced-motion`)
- JSON-LD BTP (ProfessionalService + Service/offers)
- CI GitHub Actions (build, routes, Lighthouse CI, headers)
- Toggle tarifs `role="switch"` · formulaire BTP a11y renforcé

## Scores Lighthouse (mobile)

| Page | Perf | A11y | BP | SEO | Notes |
|------|------|------|-----|-----|-------|
| `/` | À mesurer post-deploy | 100 cible | 98+ cible | 100 cible | `npm run audit:lighthouse` |
| `/btp` | Idem | Idem | Idem | Idem | |
| `/immobilier` | Idem | Idem | Idem | Idem | |
| `/accompagnement` | Idem | Idem | Idem | Idem | |

Baseline v1 précédente (prod) : Perf 99 · A11y 100 · BP 100 · SEO 100.

## Routes livrées (build statique)

26 pages générées incluant : `/`, `/immobilier`, `/btp`, `/accompagnement`, 5 URLs BTP locales, 4 mandataires locales, légales, `/merci`, `/sitemap.xml`.

Vérification locale : `npm run build && npx serve out -l 3000 && npm run check:routes:local`

## Checklist go/no-go (30 points)

| # | Vérification | Statut |
|---|--------------|--------|
| 01 | Build sans erreur | ✅ local |
| 02 | Hub bifurcation | ✅ |
| 03 | BTP 9 sections | ✅ |
| 04 | Immobilier accompagnement + démo lead | ✅ |
| 05 | Accompagnement complet | ✅ |
| 06 | `/merci` | ✅ (existant) |
| 07–08 | Formulaires prod | ☐ à valider Netlify + email |
| 09–10 | SSL / console prod | ☐ post-deploy |
| 11–14 | Lighthouse 4 pages | ☐ post-deploy |
| 15–16 | 5 démos + reduced motion | ✅ implémenté |
| 17–18 | CSP + formulaire | ☐ post-deploy |
| 19–20 | Pages locales 200 | ✅ build |
| 21–22 | Schema + sitemap GSC | ☐ soumission manuelle |
| 23 | OG image | ✅ via brand OG |
| 24 | Toggle switch | ✅ |
| 25 | Intégrations hors-cible | ✅ déjà retirées |
| 26 | Responsive | ☐ recette device |
| 27 | Cache headers | ✅ netlify.toml |
| 28 | CI GitHub | ✅ workflow ajouté |
| 29–30 | Audits archivés + rapport | ✅ ce fichier |

## Fichiers livrables techniques

- `.github/workflows/ci.yml`
- `lighthouserc.js`
- `scripts/check-routes.sh`
- `scripts/check-animation-weight.sh`
- `scripts/generate-demo-statics.mjs`
- `public/assets/demos/*-static.png`

## Post-lancement recommandé

1. Pousser `main` / déployer Netlify
2. Soumettre sitemap GSC · indexer `/btp`, `/accompagnement`, pages BTP locales
3. Tester formulaires BTP + immobilier en production
4. Relancer Lighthouse sur les 4 URLs et archiver dans `audits/production-v1.0.0-mobile.html`
