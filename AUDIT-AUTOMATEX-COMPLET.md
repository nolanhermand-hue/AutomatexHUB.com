# AUDIT COMPLET — AUTOMATEX HUB

**Date :** 2026-05-23  
**Repo :** commit `4022918` (remote `main`) + **28 fichiers modifiés non poussés** (MegaNav, SEO BTP, Phase 2/3)  
**Prod mesurée :** https://automatex-hub.com (fetch Node + curl headers, 2026-05-23)  
**Analyste :** Cursor Agent · Expert Web Senior  
**Méthode :** lecture repo · scripts · audits Lighthouse archivés · vérifications HTTP prod

---

## SCORE GLOBAL : **154 / 200**

| Domaine | Score | Tendance |
|---|---|---|
| 01 · Architecture & routing | **17/20** | ↑ (local) · prod en retard |
| 02 · UI / Design system | **16/20** | → stable |
| 03 · UX & parcours | **15/20** | ↑ MegaNav local |
| 04 · SEO on-page | **15/20** | ↑ métadonnées locales |
| 05 · SEO technique | **16/20** | → sitemap/robots solides |
| 06 · GEO (moteurs IA) | **15/20** | ↑ pages Orne + bots IA |
| 07 · Performance | **12/20** | ↓ LCP archive 4,8 s |
| 08 · Accessibilité | **16/20** | ↑ focus trap / 100 post-fix |
| 09 · Sécurité | **17/20** | → headers A |
| 10 · Conversion | **15/20** | ↑ dual CTA local |

**Justification globale :** stack Next 15 export statique mature, sécurité et SEO technique au-dessus de la moyenne PME, funnels riches (LiveDemo + catalogue 20 fiches). **Frein principal :** écart **repo local ↔ prod** (page SEO `/devis-automatique-artisan-orne` en 404 prod, MegaNav absent prod) et **Performance mobile** (archive LCP 4,8 s sur `/` ; First Load JS landings ~193–219 kB).

---

## 01 · ARCHITECTURE & ROUTING

**Score : 17/20** — Forces : App Router clair, 28 routes statiques générées au build local, scripts routes alignés sur 20 URLs sitemap. Faiblesses : prod ≠ dernier build local ; `Navbar.tsx` orphelin.

### Inventaire des routes

| URL | Statut HTTP prod | Dans sitemap.ts | Dans check-routes | Rôle |
|---|---|---|---|---|
| / | 200 | oui | oui | Hub bifurcation |
| /immobilier | 200 | oui | oui | Funnel mandataires |
| /btp | 200 | oui | oui | Funnel artisans |
| /accompagnement | 200 | oui | oui | Rassurance |
| /automatisations | 200 | oui | oui | Catalogue (20 fiches) |
| /a-propos | 200 | oui | oui | Confiance |
| /automatisation-btp-orne | 200 | oui | oui | SEO local BTP |
| /automatisation-artisan-flers | 200 | oui | oui | SEO local |
| /automatisation-artisan-alencon | 200 | oui | oui | SEO local |
| /automatisation-artisan-argentan | 200 | oui | oui | SEO local |
| /devis-automatique-artisan | 200 | oui | oui | SEO ressource |
| /devis-automatique-artisan-orne | **404 prod** | oui (repo) | oui (repo) | SEO longue traîne |
| /mandataires-normandie | 200 | oui | oui | SEO mandataires |
| /mandataires-flers | 200 | oui | oui | SEO local |
| /mandataires-alencon | 200 | oui | oui | SEO local |
| /mandataires-argentan | 200 | oui | oui | SEO local |
| /merci | 200 | non (volontaire) | oui | Post-formulaire |
| /mentions-legales | 200 | oui | oui | Légal |
| /politique-confidentialite | 200 | oui | oui | Légal |
| /cgv | 200 | oui | oui | Légal |
| /securite | 200 | oui | oui | Données |
| /sitemap.xml | 200 | — | oui | Technique |
| /robots.txt | 200 | — | oui | Technique |

Source prod : `scripts/audit-routes.mjs` avec `AUDIT_BASE_URL=https://automatex-hub.com` (2026-05-23).

### Cohérence sitemap vs scripts vs routes réelles

| Source | Nombre d’URLs commerciales/légales |
|---|---|
| `app/sitemap.ts` | **20** entrées (l.14–33) |
| XML prod (`<loc>`) | **19** (curl prod 2026-05-23) |
| `check-routes.sh` | **23** chemins (incl. `/merci`, `sitemap.xml`, `robots.txt`) |
| `audit-routes.mjs` | **22** chemins + sitemap/robots |

**Écarts :**
- Prod XML **−1** vs repo : `/devis-automatique-artisan-orne` absente du déploiement (404 prod).
- `check-routes.sh` et `audit-routes.mjs` **alignés** sur le repo (incl. `/automatisations`, `/devis-automatique-artisan-orne`).
- `/merci` : dans scripts smoke, **Disallow** dans robots (cohérent).

### Navigation

- **Nav prod (déployée) :** ancienne barre `SITE_NAV` (5 liens) — `lib/hub-nav.ts` l.2–8 : Immobilier, Artisans BTP, Automatisations, Accompagnement, À propos.
- **Nav repo local :** `components/layout/MegaNav.tsx` — dropdowns Solutions (3 col.) + Automatisations (2 col.) ; `LayoutChrome.tsx` l.26 importe `MegaNav` (non poussé).
- **CTA dynamique :** `lib/hub-nav.ts` `contactHref()` — `/btp`, `/automatisation*`, `/devis-automatique*` → `/btp#contact` ; immo/mandataires/hub → `/immobilier#contact`.
- **Liens cassés internes :** aucun sur routes prod 200 ; ancres catalogue `#leads-reponses` etc. présentes en local (`categoryToAnchor` dans `lib/automations-catalog.ts` + `app/automatisations/page.tsx`).

### Forces

- `next.config.mjs` l.9 : `output: "export"` confirmé — déploiement Netlify `out/` prévisible.
- Build local : **28** pages statiques (dernier `npm run build`).
- Maillage BTP local : `components/sections/BtpGeoInternalNav.tsx` + `lib/mega-nav-data.ts` `BTP_GEO_INTERNAL_LINKS` (local).

### Faiblesses

- **Déploiement incomplet** · Impact **élevé** · prod 404 sur `/devis-automatique-artisan-orne` alors que sitemap repo l’indexe.
- **`Navbar.tsx` conservé mais non monté** · Impact faible · dette / confusion.
- Mega-menu **invisible en prod** jusqu’au push.

### Actions

- **P0** Pousser `main` (Netlify) pour aligner prod sur repo : MegaNav, page Orne devis, formulaire layout, dual CTA catalogue.
- **P1** Supprimer ou documenter `components/layout/Navbar.tsx` si MegaNav validé.
- **P2** Automatiser diff sitemap XML prod vs `app/sitemap.ts` post-deploy (script CI).

---

## 02 · UI / DESIGN SYSTEM

**Score : 16/20** — Forces : tokens `@theme` cohérents crème/vert. Faiblesses : double langage visuel (terminal sombre) non centralisé dans un doc design.

### Palette documentée

| Token CSS | Valeur déclarée | Usage cohérent |
|---|---|---|
| `--color-night` / fond | `#faf9f6` | oui (pages hub/funnels) |
| `--color-text` | `#1a1a18` | oui |
| `--color-primary` / accent | `#0f6e56` | oui |
| `--color-muted` / faint | `#6b6a66` | oui (contraste limite AA sur petits textes) |
| `--color-border` | `#e0ddd6` | oui |
| Terminal demo | `#0D0D0D` / `#FF8200` | oui (`LiveDemoBlock`, `AutomationCard`) |

Source : `app/globals.css` l.4–24.

### Typographie

- Fonts : `Cormorant_Garamond` (headings) + `Plus_Jakarta_Sans` (body) — `app/layout.tsx` via `next/font/google`, `display: "swap"`.
- Body : `@apply text-base` → **16px** (conforme mobile).
- Auto-hébergée : oui (Google font subset, pas de CDN runtime pour fonts).

### Composants identifiés (échantillon)

| Composant | Fichier | Props typées | États | Réutilisable |
|---|---|---|---|---|
| MegaNav | `components/layout/MegaNav.tsx` | oui | hover, open, mobile | oui |
| LiveDemoBlock | `components/demo/LiveDemoBlock.tsx` | oui | variants immo/btp | oui |
| AutomationCard | `components/catalog/AutomationCard.tsx` | oui | — | oui |
| Contact | `components/sections/Contact.tsx` | oui | btp/immo/resiliation | oui |
| LogoOrbit | `components/brand/LogoOrbit.tsx` | oui | light/dark | oui |

### Cohérence visuelle

- Deux langages (clair + terminal) : **documenté** dans `docs/orchestration/ANALYSE-ORCHESTRATION-COMPLETE.md`, pas dans README produit.
- CTA primaire : `bg-cta` (#1a1a18) + `rounded-md`/`rounded-xl` — **cohérent** sur funnels ; MegaNav utilise même token.
- Icônes : **SVG inline** + emojis ponctuels (mega-menu) — pas de lucide-react (cohérent bundle).

### Forces

- Design system Tailwind 4 `@theme` lisible et maintenu.
- Logo lockup généré (`public/assets/brand/generate-favicons.js`).

### Faiblesses

- Radius CTA variable (`md` vs `xl` vs `full`) — pas bloquant, mais micro-incohérence.
- Pages catalogue en fond `bg-night` (crème) avec cartes terminal : transition assumée, peut surprendre.

### Actions

- **P2** Fiche design tokens (1 page) pour prestataires externes.
- **P3** Harmoniser border-radius CTA sur 2 valeurs max.

---

## 03 · UX & PARCOURS

**Score : 15/20** — Forces : funnels longs avec démos. Faiblesses : pages denses mobile, prod sans mega-menu.

### Parcours mandataire (Pascal, 47 ans, 375px)

| Étape | Page | Section | Friction | Sévérité |
|---|---|---|---|---|
| Arrivée | / | HubEntry | Choix immo/BTP clair | faible |
| Landing | /immobilier | Hero + LiveDemo | Longueur page, JS lourd | moyenne |
| Compréhension | /immobilier | MotionDemo / FeatureGrid | Double démo possible | faible |
| Prix | /immobilier | #pricing | Bas de funnel | moyenne |
| Décision | /immobilier | #contact | Form Netlify client-side OK | faible |

### Parcours artisan (Kévin, 38 ans, 20h30)

| Étape | Page | Section | Friction | Sévérité |
|---|---|---|---|---|
| Arrivée | /btp | Hero + LazyHero backdrop | Three lazy local — OK | faible |
| Preuve | /btp | LiveDemo ×2, #demo | Contenu riche | faible |
| Prix | /btp | BtpPricing | Visible mid-funnel | faible |
| Décision | /btp | Contact variant btp | CTA cohérent | faible |

### Formulaires

| Formulaire | Page | Champs | CTA | Honeypot | Détecté build |
|---|---|---|---|---|---|
| `contact` | /immobilier, /btp, mandataires | prénom, tel, réseau, etc. | variable BTP/immo | oui `hp-field` | oui (HTML export) |
| `contact-accompagnement` | /accompagnement | prénom, tel, activité | Nolan me rappelle… | oui | oui local (`NetlifyFormsDetection` layout + form client) |

Fichiers : `components/sections/Contact.tsx` l.103–108 ; `AccompagnementContactForm.tsx` l.17–21 ; `components/seo/NetlifyFormsDetection.tsx`.

### Above the fold (375px — structure repo)

- **/** : eyebrow Flers, H1 deux lignes, 2 cartes métier, badges RGPD — **CTA métier visible**.
- **/immobilier** : hero stats + H1 mandataires — **promesse chiffrée partielle** (stats bandeau).
- **/btp** : H1 + prix dès 99€ — **CTA démo hero**.
- **/accompagnement** : H1 + bandeau prix local (99€/mois) — **prix above fold** (local).
- **/automatisations** : H1 catalogue + compteur 20 — **pas de CTA hero** (CTA bas de page dual en local).

### CTA audit

| Page | CTA principal | Wording (local) | Position | Dual ? |
|---|---|---|---|---|
| / | Hub | Démo mandataire / artisan | hero | oui |
| /immobilier | #contact | Réserver / submit contact | bas + sticky | non |
| /btp | #contact | BTP_CONTACT.cta | bas + sticky | non |
| /automatisations | immo + BTP | Mandataire / Artisan | bas | **oui (local)** |

### Forces

- Parcours hub → landing → contact **sans impasse**.
- Sticky mobile CTA BTP (`StickyMobileCta`).

### Faiblesses

- **Prod** : catalogue peut encore n’avoir qu’un CTA BTP si deploy ancien — vérifier après push.
- Navigation prod **sans** parcours « par besoin » (mega-menu).

### Actions

- **P0** Déployer dual CTA + MegaNav.
- **P1** CTA intermédiaire sur `/automatisations` (above fold) pour mandataires.
- **P2** Raccourcir funnel immo mobile (replier sections secondaires).

---

## 04 · SEO ON-PAGE

**Score : 15/20** — Forces : titles immo/BTP ciblés en local. Faiblesses : titles longs avec template layout ; prod metadata pas à jour partout.

### Metadata par page (repo local)

| Page | Title (chars) | Description (chars) | H1 unique | Canonical |
|---|---|---|---|---|
| / | 48 + suffixe layout | ~120 | oui | oui |
| /immobilier | ~56 (+ · Automatex Hub) | ~155 | oui | oui |
| /btp | ~65 | ~140 | oui | oui |
| /accompagnement | ~45 | ~130 | oui | oui |
| /automatisations | ~72 | ~160 | oui | oui |
| /a-propos | via `ABOUT_PAGE` | oui | oui | oui |
| /automatisation-btp-orne | ~58 | ~155 | oui | oui |

Sources : `app/*/page.tsx`, `lib/btp-copy.ts` (metaTitle), `lib/btp-local-page.ts`.

Note : `app/layout.tsx` l.36–38 `title.template: "%s · Automatex Hub"` allonge les titles enfants.

### Balises OG

| Page | og:title | og:image | og:url |
|---|---|---|---|
| / | oui (layout) | `og-image.png` 1200×630 | oui |
| /immobilier | oui | hérite layout | oui |
| /btp | oui | **og-image.png** (pas BTP dédié) | oui |

Duplicate OG image BTP/immo : **oui** (même PNG) — `app/btp/page.tsx` l.6–27.

### Structured data (JSON-LD)

| Page | Types | FAQPage | Service / Local |
|---|---|---|---|
| / | ProfessionalService + FAQ (layout) | oui | oui |
| /immobilier | via StructuredData / json-ld.ts | oui | oui |
| /btp | BtpStructuredData + FAQ BTP | oui | oui |
| /automatisation-btp-orne | `buildLocalBtpJsonLd` | dl FAQ page | Service |

Source : `lib/json-ld.ts`, `components/templates/BtpLocalPage.tsx` l.10–15.

### Mots-clés cibles vs contenu (repo)

| Mot-clé | Page cible | H1 | Title | Contenu |
|---|---|---|---|---|
| mandataire IAD Orne | /immobilier | partiel | **oui** | oui |
| automatisation BTP Orne | /automatisation-btp-orne | **oui** | **oui** | oui (extension SEO) |
| artisan plombier Flers | /automatisation-artisan-flers | partiel | oui | oui (localDetail) |
| devis automatique artisan | /devis-automatique-artisan-orne | **oui** | **oui** | oui |

### Forces

- Pages locales BTP **uniques** (`lib/btp-local-sections.ts`).
- Title immo aligné IAD/SAFTI + 90s (local).

### Faiblesses

- **`og-image-btp.png` absent** — commentaire TODO `app/btp/page.tsx`.
- Page Orne devis **404 prod** = SEO perdu jusqu’au deploy.

### Actions

- **P0** Deploy + GSC indexation `/devis-automatique-artisan-orne`.
- **P1** Créer `og-image-btp.png` 1200×630.
- **P2** Raccourcir titles > 60 caractères visibles SERP.

---

## 05 · SEO TECHNIQUE

**Score : 16/20** — Forces : robots GEO-friendly, sitemap Next. Faiblesses : lag deploy, LHCI non prouvé en CI remote.

### Sitemap

- Généré : `app/sitemap.ts` → `/sitemap.xml` **200** prod.
- Entrées repo : **20** · prod XML : **19** `<loc>` (2026-05-23).
- Format : `lastModified`, `changeFrequency`, `priority` — OK.
- GSC : **inconnu** (non vérifiable depuis repo).

### Robots.txt (prod)

```
User-agent: *
Allow: /
Disallow: /merci
Disallow: /api/
Disallow: /.netlify/
User-agent: GPTBot / ClaudeBot / PerplexityBot / Google-Extended / CCBot → Allow: /
Sitemap: https://automatex-hub.com/sitemap.xml
```

Sitemap référencé : **oui**.

### Crawlabilité

- Static export : **100 % HTML** pour pages marketing — pas de contenu critique JS-only pour le copy principal.
- Formulaires : champs dans HTML export (Contact server-rendered in bundle + hidden form accompagnement).
- `/merci` : noindex implicite via Disallow (OK).

### Maillage interne

- `/btp` : pills geo **local** (`BtpGeoInternalNav`).
- Footer : `FOOTER_BTP_LOCAL_LINKS` — `lib/hub-nav.ts` l.31–38.
- MegaNav : liens vers ancres catalogue — **local**.

### Core Web Vitals (archive)

| Page | LCP | CLS | Source | Date |
|---|---|---|---|---|
| / (mobile prod) | **4,8 s** | **0** | `audits/baseline-mobile-prod.json` | 2026-05-20 |
| / | [à mesurer] | — | post-deploy | — |

### Scores Lighthouse archives

| Fichier | Perf | A11y | BP | SEO | Note |
|---|---|---|---|---|---|
| `baseline-mobile-prod.json` | **77** | 97 | 96 | 100 | home, pré-optimisations |
| `production-mobile.json` | **99** | 100 | 100 | 100 | home, post-fix rapport |

**Les deux coexistent** — re-mesurer après deploy MegaNav + landings lourdes.

### Performances techniques (build local)

| Route | First Load JS |
|---|---|
| /immobilier | **219 kB** |
| /btp | **193 kB** |
| /automatisations | **106 kB** |

Dynamic : `LazyHeroMotionBackdrop.tsx` → `HeroMotionBackdrop` (ssr: false).

### Forces

- `trailingSlash: false` cohérent avec liens internes.
- LHCI configuré 6 URLs — `lighthouserc.js`.

### Faiblesses

- **CI GitHub** : workflow présent localement — **push remote non confirmé** dans cet audit.
- Seuil Perf LHCI **0,90** — landings immo peuvent échouer sans lazy agressif.

### Actions

- **P0** Push + LHCI sur build frais.
- **P1** Mesure LCP `/btp` et `/immobilier` post-deploy.
- **P2** Soumettre sitemap GSC après sync 20 URLs.

---

## 06 · GEO (MOTEURS IA)

**Score : 15/20** — Forces : robots autorisent GPTBot/ClarityBot ; copy affirmatif Flers. Faiblesses : peu de backlinks locaux.

### Signaux GEO présents

| Signal | Présent | Preuve |
|---|---|---|
| Nom + localité early | oui | NAP `lib/constants.ts`, hub eyebrow |
| Q/R naturelles | oui | FAQ immo/BTP, `BtpOrneSeoExtension` |
| Affirmations factuelles | oui | « Basé à Flers », SIRET à-propos |
| OVHcloud / hébergement FR | oui | copy sécurité / DATA_TRUST |
| SIRET visible | oui | `lib/about-page.ts` |
| Téléphone texte | oui | `NAP.phoneDisplay` |
| Pages par ville | **6+** BTP + 4 mandataires | sitemap |
| areaServed JSON-LD | oui | `buildLocalBtpJsonLd` |

### Blocs Q/R (extraits)

| Question | Page |
|---|---|
| Coût automatisation BTP Orne ? | `/automatisation-btp-orne` (extension) |
| Mandataires IAD avant démarrage ? | `/immobilier` FAQ |
| Il a 19 ans ? | FAQ BTP + immo (local) |

### Autorité locale

- Villes nommées : Flers, Argentan, Alençon, Condé-sur-Noireau, etc. — **multiples pages**.
- Distances (« 35 min d’Alençon ») : oui — `lib/btp-copy.ts`.
- Backlinks CCI/CAPEB/presse : **non** (aucune preuve repo).

### Forces

- `robots.txt` ouvert aux crawlers IA — signal explicite.

### Faiblesses

- Pas de page « Automatex est… » optimisée snippet Perplexity hors FAQ dispersées.
- **0 témoignage client** — GEO compense par transparence lancement.

### Actions

- **P1** Indexation manuelle GSC + `scripts/gsc-indexation-urls.mjs`.
- **P2** Bloc Q/R unique footer « Automatex en 30 secondes » (NAP + offre + zone).
- **P3** Annuaire CCI Orne / article Ouest-France (hors code).

---

## 07 · PERFORMANCE

**Score : 12/20** — Forces : lazy hero Three, static export. Faiblesses : LCP archive 4,8 s, bundles landings > 190 kB.

### Budget ressource (estimé)

| Ressource | Impact | Lazy ? |
|---|---|---|
| JS shared ~103 kB | moyen | partiel |
| /immobilier +116 kB route | **élevé** | MotionDemo, GSAP, Three partiels |
| Three.js hero | LCP | **oui local** (`LazyHeroMotionBackdrop`) |
| GSAP / Framer | TBT | partiel (`optimizePackageImports` framer) |
| Fonts next/font | faible | swap |

### Dynamic imports

- `components/motion/LazyHeroMotionBackdrop.tsx` → `HeroMotionBackdrop` (**ssr: false**).
- **Non lazy** : `MotionDemo`, `NolanLiveDemo`, demos GSAP — candidats P1.

### Next.js

- `output: "export"` · `images.unoptimized: true` — pas d’optimisation CDN Next Image.

### Netlify cache (`netlify.toml`)

- `/_next/static/*` : **immutable** 1 an.
- `/assets/*` : **immutable** 1 an.
- HTML : `max-age=0, must-revalidate`.

### Forces

- Pas de hero-atmosphere.webp 404 en prod (asset retiré) — curl **404** sur URL legacy (OK, non référencé code actuel).
- `leboncoin.svg` : **200** prod.

### Faiblesses

- Archive **Perf 77** + LCP **4,8 s** incompatible objectif ≥ 95 sans mesure récente landings.
- LHCI seuil 90 — **risque échec** sur `/immobilier`.

### Actions

- **P0** Lighthouse mobile `/immobilier` + `/btp` post-deploy.
- **P1** Lazy `MotionDemo` / demos below-fold immo.
- **P2** Remonter seuil LHCI à 0,95 quand LCP < 2,5 s.

---

## 08 · ACCESSIBILITÉ

**Score : 16/20** — Forces : 100 A11y archive post-fix home ; focus trap mobile MegaNav. Faiblesses : pas de tests axe automatisés.

### Score Lighthouse

- Archive : **97** (`baseline-mobile-prod.json`) · **100** (`production-mobile.json` home).

### Contraste (estimation palette)

| Combinaison | WCAG AA |
|---|---|
| `#1a1a18` sur `#faf9f6` | pass |
| `#6b6a66` muted sur crème | limite AA (16px body OK) |
| `#faf9f6` sur `#1a1a18` CTA | pass |
| Terminal #F5F4F1 sur #0D0D0D | pass (composants demo) |

### ARIA (repo)

- Occurrences `aria-*` / `role=` / `sr-only` : **~150+** lignes cumulées (grep app+components).
- MegaNav : `aria-expanded`, `role="menu"`, dialog mobile — `MegaNav.tsx`.
- Tickers : `sr-only` — `TrustBar.tsx`, `IntegrationMarquees.tsx`.

### Formulaires

- Labels `htmlFor` : **oui** Contact + Accompagnement.
- Erreurs aria-live : **non** (validation HTML5 native).

### Navigation clavier

- Focus trap menu mobile : **oui** (`MegaNav.tsx`, ex-`Navbar.tsx`).
- `focus-visible:outline` sur boutons nav — **oui**.

### Sémantique

- `<main>` via LayoutChrome ; H1 par page template — **oui**.
- FAQ BTP : `<details>` SSR — `BtpFaq.tsx`.

### Tests auto

- Cypress/axe : **absent** · Playwright : dep sans tests a11y.

### Actions

- **P1** `@axe-core/playwright` sur 6 URLs LHCI.
- **P2** `aria-live` sur erreurs formulaire si validation custom ajoutée.

---

## 09 · SÉCURITÉ

**Score : 17/20** — Forces : CSP + HSTS + DENY frame. Faiblesses : `unsafe-inline` scripts/styles.

### Headers prod (curl 2026-05-23)

| Header | Présent | Valeur (extrait) |
|---|---|---|
| CSP | oui | `default-src 'self'` … `frame-ancestors 'none'` |
| HSTS | oui | `max-age=31536000; includeSubDomains; preload` |
| X-Frame-Options | oui | DENY |
| X-Content-Type-Options | oui | nosniff |
| Referrer-Policy | oui | strict-origin-when-cross-origin |
| Permissions-Policy | oui | geolocation/mic/camera/payment désactivés |

Score securityheaders estimé : **A** (pas A+ à cause unsafe-inline).

### CSP (`netlify.toml` l.81)

- `script-src 'unsafe-inline'` + analytics (Plausible, GA, Clarity) — **nécessaire** export statique + analytics.
- `form-action 'self'` — Netlify Forms OK.
- `connect-src` : pas `api.netlify.com` — soumissions forms **POST same-origin** (OK).

### Formulaires

| Form | Honeypot | Validation |
|---|---|---|
| contact | oui | pattern tel FR |
| contact-accompagnement | oui | required fields |

### RGPD

- `/politique-confidentialite`, `/cgv`, `/mentions-legales`, `/securite` — **200** prod.
- Analytics : Plausible/GA/Clarity **optionnels** via env — `app/layout.tsx`.
- SIRET + adresse : **à-propos** + footer.

### Forces

- www → apex redirect (netlify.toml — mention rapport livraison).
- Pas de scripts jsDelivr sur intégrations (assets locaux).

### Faiblesses

- CSP non nonce-based — durcissement limité sur static export.

### Actions

- **P2** Documenter choix `unsafe-inline` pour audit client/RGPD.
- **P3** Revue Clarity/GA : consentement si cookie non exempté.

---

## 10 · CONVERSION

**Score : 15/20** — Forces : LiveDemo + 20 fiches catalogue + garantie 30j local. Faiblesses : photo Nolan placeholder, deploy lag CTA.

### Proposition de valeur above fold

| Page | Chiffrée | Spécifique | CTA visible |
|---|---|---|---|
| /immobilier | stats hero | mandataires | oui |
| /btp | 99€/mois | artisans | oui |

### Démonstration

- LiveDemo immo + BTP : **oui** (`LiveDemoBlock`).
- Catalogue : **20** entrées — `grep -c 'id: "' lib/automations-catalog.ts`.
- Messages terrain : prénoms Orne, € — **oui** (catalogue + live-demo).

### Social proof (0 client)

- Stats sectorielles : **oui** (TrustBar, sources FNAIM/FFB mentionnées copy).
- Transparence lancement : **oui** (`BTP_BETA`, à-propos).
- Garantie 30j : **oui** près forms (local).
- Photo Nolan : **placeholder NH** — `FounderAvatar.tsx` + fallback onError.

### Objections

| Objection | Adressée | Qualité |
|---|---|---|
| Pas tech | oui FAQ | A |
| Déjà payé trucs | oui | B+ |
| Panne | oui BTP FAQ | B+ |
| 19 ans | oui FAQ BTP/immo | A |
| Données | oui /securite | A |
| Vrai prix | oui accompagnement bandeau local | B+ |

### Forces

- `contactHref` évite fuite BTP→immo sur mauvaise page (hub-nav).

### Faiblesses

- **Confiance visuelle** : pas de photo réelle Nolan.
- Prod peut ne pas avoir dual CTA catalogue.

### Actions

- **P0** Deploy conversion fixes.
- **P1** `nolan-photo.webp` 400×400.
- **P2** A/B wording sticky CTA immo vs « Réserver 20 min ».

---

## SYNTHÈSE FINALE

### Scores récapitulatifs

| Domaine | Score | Forces clés | Faiblesses critiques |
|---|---|---|---|
| 01 · Architecture | 17/20 | 28 routes static, scripts sync | prod 404 page Orne devis |
| 02 · UI | 16/20 | Tokens crème/vert | doc design externe |
| 03 · UX | 15/20 | Funnels complets | mega-menu absent prod |
| 04 · SEO on-page | 15/20 | Titles locaux | OG BTP partagé |
| 05 · SEO technique | 16/20 | robots IA-friendly | sitemap prod -1 URL |
| 06 · GEO | 15/20 | Pages ville + FAQ | 0 backlink local |
| 07 · Performance | 12/20 | lazy Three | LCP 4,8 s archive |
| 08 · Accessibilité | 16/20 | focus trap, sr-only | pas axe CI |
| 09 · Sécurité | 17/20 | HSTS CSP DENY | unsafe-inline |
| 10 · Conversion | 15/20 | démos + catalogue | photo NH |
| **TOTAL** | **154/200** | | |

---

### TOP 5 — CE QUI FONCTIONNE VRAIMENT

```
1. Export statique Next 15 + Netlify — 22 routes prod en 200 (audit-routes.mjs).
2. Sécurité headers prod — CSP, HSTS preload, X-Frame DENY (curl 2026-05-23).
3. SEO technique de base — robots + sitemap 200, JSON-LD FAQ/Service (lib/json-ld.ts).
4. Preuve produit — LiveDemoBlock + catalogue 20 automatisations avec ancres SEO.
5. Archive Lighthouse home post-fix — 99/100/100/100 (audits/production-mobile.json).
```

### TOP 5 — CE QUI BLOQUE LA CROISSANCE

```
1. Repo local non déployé → 404 /devis-automatique-artisan-orne + pas de MegaNav prod → SEO BTP et nav premium invisibles.
2. Performance mobile landings — First Load JS 219 kB /immobilier ; LCP archive 4,8 s sur /.
3. Confiance humaine — photo Nolan placeholder (FounderAvatar) sur pages clés.
4. CI/LHCI non garanti sur remote — risque régression non détectée avant Netlify.
5. Positionnement Google BTP — contenu prêt en local, absent ou incomplet en prod jusqu’au push.
```

---

### BACKLOG PRIORISÉ

#### P0 — Faire maintenant

| ID | Correction | Domaine | Fichier | Effort | Impact |
|---|---|---|---|---|---|
| P0-01 | Push `main` Netlify (MegaNav, SEO Orne, dual CTA, forms) | Archi | git push | 30 min | critique |
| P0-02 | Vérifier 200 `/devis-automatique-artisan-orne` post-deploy | SEO | — | 15 min | critique |
| P0-03 | GSC indexation URLs BTP (`gsc-indexation-urls.mjs`) | GEO | — | 45 min | élevé |
| P0-04 | Lighthouse mobile `/immobilier` + `/btp` post-deploy | Perf | `scripts/lighthouse-audit.mjs` | 1 h | élevé |

#### P1 — Cette semaine

| ID | Correction | Domaine | Fichier | Effort | Impact |
|---|---|---|---|---|---|
| P1-01 | `og-image-btp.png` + metadata | SEO | `app/btp/page.tsx` | 2 h | moyen |
| P1-02 | Photo `nolan-photo.webp` | CRO | `public/assets/brand/` | 1 h | élevé |
| P1-03 | Lazy below-fold demos immo | Perf | `ImmobilierHome.tsx` | 3 h | élevé |
| P1-04 | Pousser `.github/workflows/ci.yml` + green build | Ops | `.github/` | 2 h | élevé |
| P1-05 | Tests axe Playwright (6 URLs) | A11y | nouveau spec | 3 h | moyen |

#### P2 — Ce mois

| ID | Correction | Domaine | Fichier | Effort | Impact |
|---|---|---|---|---|---|
| P2-01 | Supprimer Navbar mort ou ré-export | Archi | `Navbar.tsx` | 30 min | faible |
| P2-02 | Remonter LHCI Perf à 0,95 | Perf | `lighthouserc.js` | 4 h+ | moyen |
| P2-03 | Backlinks CCI/CAPEB | GEO | hors site | — | moyen |
| P2-04 | CTA above fold `/automatisations` | CRO | `app/automatisations/page.tsx` | 1 h | moyen |

#### P3 — Long terme

| ID | Correction | Domaine | Effort |
|---|---|---|---|
| P3-01 | CSP nonce (si migration hosting le permet) | Sécu | élevé |
| P3-02 | Blog 90j (10 articles plan orchestration) | SEO | élevé |
| P3-03 | Témoignages clients J+30 | CRO | process |

---

### DÉCISIONS REQUISES (Nolan)

```
1. Valider MegaNav en prod (wording dropdowns, emoji « à la une »).
2. Nomenclature offres : garder Départ/Essentiel (déjà acté dans rapport-livraison) vs Module 0 DÉCLIC.
3. Date livraison photo professionnelle Nolan.
4. Budget acquisition / Google Ads BTP Orne (hors scope technique).
5. Autoriser push CI GitHub (scope workflow) si pas déjà fait.
```

---

### MÉTRIQUES À SURVEILLER (J+30)

```
SEO :
- Position « mandataire Orne » / « mandataire IAD Orne » → Top 1
- Position « automatisation BTP Orne » → Top 3
- Impressions GSC pages /automatisation-* et /devis-automatique-artisan-orne

Conversion :
- Soumissions Netlify / semaine par form (contact vs contact-accompagnement)
- Taux rebond /immobilier et /btp (< 60 % cible)

Performance :
- LCP mobile /btp < 2,5 s
- Lighthouse Perf mobile moyen 6 URLs ≥ 90 puis ≥ 95

Business :
- Démos 20 min / semaine ≥ 3
- Taux démo → signature (suivi manuel Nolan)
```

---

*Document généré par analyse statique du repo + mesures prod 2026-05-23.*  
*À régénérer après chaque deploy majeur (commit + curl + Lighthouse).*
