# Référence IA — Automatex Hub (mémoire partagée)

> **Document canonique** pour Gemini, Cursor, Claude et tout agent travaillant sur ce dépôt.  
> **Dernière consolidation :** 2026-05-27 · **Site :** https://automatex-hub.com  
> En cas de conflit : **code + ce fichier + `SITE-ROUTES-MEMORY.md`** > hyper-prompt marketing.

---

## 1. Comment utiliser ce document

| Priorité | Fichier | Quand |
|----------|---------|--------|
| 1 | **`docs/AI-REFERENCE.md`** (ce fichier) | Contexte global : routes, design, copy, stack |
| 2 | **`docs/SITE-ROUTES-MEMORY.md`** | Détail URLs, ancres, schémas Mermaid, checklist route |
| 3 | **`docs/REPO-ALIGNMENT-v3.md`** | Hyper-prompt vs réalité du code |
| 4 | **`docs/HYPER-PROMPT-SITE-v3.md`** | Stratégie marketing / GEO / mobile |
| 5 | **`docs/guide-fichiers-search-console-gemini.md`** | GSC + perf déjà livrée |

**Règle Cursor (workspace) :** `.cursor/rules/site-routes.mdc` — lire avant toute nouvelle URL ou copy stratégique.

---

## 2. Identité & contact (NAP)

| Clé | Valeur |
|-----|--------|
| Marque publique | **Automatex** / **Automatex Hub** |
| Fondateur | **Nolan Hermand** |
| URL canonique | `https://automatex-hub.com` (apex, **sans** `www` → 301 Netlify) |
| Adresse | 50 rue de l'Equerre, 61100 Saint-Georges-des-Groseillers, Orne, Normandie, FR |
| Ancrage commercial copy | **Flers · Saint-Georges-des-Groseillers (Orne, 61)** |
| SIRET | 10320805400017 · APE 6202A |
| Téléphone | `06 45 38 42 33` · E.164 `+33645384233` |
| Email | `nolan.hermand@automatex-hub.com` |
| GEO (meta) | `48.7483;-0.5711` |
| Ligne souveraineté (partout) | **`SOVEREIGNTY_TRUST_LINE`** = `IA française · Automations UE · RGPD` |
| Détail infra (page dédiée) | `/vos-donnees` — Netlify CDN, N8N Francfort, Mistral Paris |
| Source code NAP | `lib/constants.ts` → `NAP`, `META`, `GEO_DEFINITION` |

**Ne pas inventer** : « 100 % hébergement France » seul ; stack inv. (N8N, Mistral) **marketing** : transparence sur `/vos-donnees`, pas en hero générique sauf ligne officielle ci-dessus.

---

## 3. Stack technique

| Élément | Détail |
|---------|--------|
| Framework | **Next.js 15** (App Router) |
| React | 19 |
| Export | **`output: "export"`** → dossier `out/` |
| Hébergement | **Netlify** (`publish = out`) · pas de SSR |
| URLs | **`trailingSlash: false`** (pas de `/` final) |
| CSS | Tailwind v4 (`@import "tailwindcss"` dans `app/globals.css`) + `app/animations.css` |
| Animations lourdes | GSAP (idle), Lottie (lazy), pas de Three.js |
| Images | `images.unoptimized: true` (export statique) · démos **WebP** + PNG généré build |
| Forms | Soumission unifiée via **WebHook Formulaire prospects** (`lib/prospect-webhook.ts`) |
| Analytics | Plausible + Google Analytics (composants `components/seo/`) |

**Build :**

```bash
npm run build   # favicons + demos webp + next build + optimize-static-html-css.mjs
```

**Post-build perf :** `scripts/optimize-static-html-css.mjs` — **preload font Inter** uniquement (ne pas remettre CSS global en async → CLS hub).

---

## 4. Design system — couleurs (`app/globals.css` @theme)

Thème **sombre fixe** · `html` avec classe **`dark`** · pas de thème crème.

| Token CSS | Hex / valeur | Usage |
|-----------|--------------|--------|
| `--color-bg`, `--color-night`, `--color-section` | `#080d1a` | Fond page |
| `--color-surface` | `#0d1526` | Cartes, panneaux |
| `--color-surface-2` | `#111e35` | Surfaces secondaires |
| `--color-surface-3` | `#162240` | — |
| `--color-bg-card` | `#0d1526` | Cartes hero aside |
| `--color-border` | `#1a2540` | Bordures |
| `--color-border-light` | `#2a3a5c` | Bordures badges |
| **`--color-primary`** | **`#ff6b2b`** | CTA orange, accents (**ne pas remplacer** sans demande) |
| `--color-accent-dark` | `#ff7a42` | Hover primary |
| `--color-success` | `#10b981` | — |
| `--color-danger` | `#ef4444` | — |
| `--color-warning` | `#f59e0b` | — |
| `--color-text` | `#e8edf5` | Texte principal |
| `--color-muted` | `#94a3b8` | Texte secondaire (WCAG AA sur `#080d1a`) |
| `--color-faint` | `#8892a4` | Labels discrets |
| `--color-cta` | `#e8edf5` | — |
| **`--color-cta-fg`** | **`#080d1a`** | **Texte sur bouton orange** (`.btn-bracket-primary`) |
| `--max-w-content` | `1140px` | Conteneur principal |
| `--max-w-readable` | `680px` | Paragraphes |
| `--spacing-gutter` | `1.5rem` | `px-gutter` |
| `--radius-sm` … `--radius-xl` | 3px → 14px | — |

**Brand assets :** `lib/brand.ts` → `BRAND.themeColor` `#080D1A`, OG `/assets/brand/og-image.png`, BTP `/assets/brand/og-image-btp.png`.

---

## 5. Typographie

| Rôle | Implémentation |
|------|----------------|
| Corps & titres | **Inter** — `next/font/google` dans `app/layout.tsx` |
| Variables CSS | `--font-inter` sur `<html>` |
| Mono (nav, badges, CTA bracket) | **JetBrains Mono** — `--font-mono-jetbrains` |
| Classes Tailwind | `font-body`, `font-heading`, `font-mono` |
| `display` | **`swap`** + `adjustFontFallback` + fallback system-ui |
| Critique above-the-fold | `components/seo/CriticalAboveFoldStyles.tsx` |
| Tailles mobile (hyper-prompt) | H1 28–32px mobile · body ≥16px · CTA 17–18px |

**Composants boutons :**

- `.btn-bracket` — fond clair, texte sombre, crochets `[ ]` en pseudo-éléments
- `.btn-bracket-primary` — fond **`--color-primary`**, texte **`--color-cta-fg`** (accessibilité)
- `.btn-bracket-outline` — transparent, bordure

---

## 6. Routes — inventaire complet (23 pages)

**Ne pas inventer de routes.** Liste détaillée + Mermaid : **`docs/SITE-ROUTES-MEMORY.md`**.

### Interdits / obsolètes

| ❌ | ✅ |
|----|-----|
| `/tpe`, `/automatisation-tpe` | `/automatisation-ia-tpe` |
| `#pipeline-pilotage` | `#suivi-rapports` |
| `/automatisation` = tout BTP | Faux : TPE = `/automatisation-ia-tpe` ; BTP = `/automatisation-artisan-*`, `/automatisation-btp-orne` |
| `/merci` indexable | `Disallow` robots · hors sitemap |
| API Next `/api/*` | Aucune — Netlify Forms |

### Table des pages (`app/**/page.tsx`)

| Route | Rôle | Composant / note |
|-------|------|------------------|
| `/` | Hub choix parcours | `HubEntry` · classe `hub-entry-hero` |
| `/immobilier` | Landing mandataires | `ImmobilierHome` |
| `/btp` | Landing artisans BTP | `BtpLanding` (sections dynamic SSR) |
| `/automatisation-ia-tpe` | Pilier TPE/PME | `TpeAutomatisationPricing` · `#tarifs` · CTA → `/rendez-vous` |
| `/automatisations` | Catalogue | `AutomatisationsCatalogSections` |
| `/accompagnement` | Offre 12 mois | CTA → `/rendez-vous` · `AccompagnementContactForm` |
| `/rendez-vous` | Contact canonique | `Contact` variant hub |
| `/a-propos` | Fondateur | statique |
| `/vos-donnees` | Transparence infra | `VosDonneesView` |
| `/merci` | Post-formulaire | **off-SEO** |
| `/mentions-legales` | LCEN | `LegalPageShell` |
| `/politique-confidentialite` | RGPD | idem |
| `/cgv` | Contrat | idem |
| `/securite` | Sécurité | idem |
| `/mandataires-normandie` | SEO immo | hub local |
| `/mandataires-flers` | SEO local | `MandatairesLocalPage` · `lib/local-pages.ts` |
| `/mandataires-alencon` | idem | idem |
| `/mandataires-argentan` | idem | idem |
| `/automatisation-btp-orne` | SEO BTP | `BtpLocalPage` |
| `/automatisation-artisan-flers` | SEO BTP ville | `lib/btp-copy.ts` `BTP_LOCAL_PAGES` |
| `/automatisation-artisan-alencon` | idem | idem |
| `/automatisation-artisan-argentan` | idem | idem |
| `/devis-automatique-artisan-orne` | long-tail | idem |
| `/devis-automatique-artisan` | long-tail | idem |

### Générés au build

- `/sitemap.xml` ← `app/sitemap.ts` (22 URLs + `/` = 23 · **sans** `/merci`)
- `/robots.txt` ← `public/robots.txt`
- Favicons `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`

### Ancres hash importantes

| Page | IDs |
|------|-----|
| `/immobilier` | `#hero` `#solution` `#demo` `#pricing` `#faq` `#contact` |
| `/btp` | `#hero` `#demo` `#solution` `#pricing` `#faq` `#contact` |
| `/automatisation-ia-tpe` | `#automatisations` `#tarifs` `#faq` `#contact` |
| `/accompagnement` | `#contact` |
| `/automatisations` | `#leads-reponses` `#mails-tri` `#documents-drive` `#resumes-planning` `#relances-suivi` `#dictee-terrain` `#appels-terrain-btp` **`#suivi-rapports`** |

Catégorie catalogue : **`CATEGORY_SUIVI_RAPPORTS`** = « Suivi & Rapports Métier » → `lib/automations-catalog.ts` → `categoryToAnchor()`.

---

## 7. Navigation & CTA contact

### `SITE_NAV` (`lib/hub-nav.ts`)

Ordre : `/automatisation-ia-tpe` · `/immobilier` · `/btp` · `/automatisations` · `/accompagnement` · `/vos-donnees` · `/a-propos`

Mega-menu : `lib/mega-nav-data.ts`

### `contactHref(pathname)` — **obligatoire** pour CTA nav

| Préfixe `pathname` | Cible |
|--------------------|--------|
| Toutes routes | **`/rendez-vous`** (`lib/hub-nav.ts` — plus de hash `#contact` pour la nav) |

**CTA booking** : `rendezVousHref()` · tarifs → `rendezVousHref({ offre })`. Ancres `#contact` sur landings = sections formulaire optionnelles ; la nav pointe toujours `/rendez-vous`.

### Libellés CTA récurrents (`lib/constants.ts`)

- `BOOKING_CTA_LABEL` = « Réserver mon appel avec Nolan »
- Hub unifié : « Nolan me rappelle sous 24 h » (`HubEntry`)
- Cadre commercial : **Sans engagement** · résiliation **1 mail**

---

## 8. Tarifs — sources de vérité (ne pas inventer les prix)

| Segment | Fichier | Constante |
|---------|---------|-----------|
| Immobilier | `lib/constants.ts` | `OFFERS` — Déclic / Système ⭐ / Pilote / Sur mesure |
| BTP | `lib/btp-copy.ts` | `BTP_OFFERS` — Déclic / Système ⭐ / Pilote / Sur mesure (grille unifiée) |
| TPE | `lib/automatisation-ia-tpe-content.ts` | offres page pilier |
| Fidélité / annuel | `lib/pricing.ts` | −15 % annuel, M13, M37 |

**Ordres de grandeur copy :** 1 lead immo ≈ **3 500 €** (`VALUE_PER_LEAD_EUROS`) · ROI section statique (plus d’anim GSAP).

---

## 9. Copy & conformité linguistique

### Mots interdits CI (`FORBIDDEN_WORDS` + `npm run check:words`)

`IA` · intelligence artificielle · workflow · API · SaaS · abonnement · LLM · no-code · chatbot · robot · bot · algorithme · machine learning

**Autorisé :** « automatisations », « Automatex », URLs `/automatisation-*`, ligne `SOVEREIGNTY_TRUST_LINE` (exception contrôlée).

### Angles qui convertissent

« pendant vos visites » · « sur le chantier » · « répond à votre place » · « 1 lead ≈ 3 500 € » · résiliable en 1 mail · Nolan à Flers

### Personas

- **Immo (Pascal)** : IAD, SAFTI, Capifrance, Optimhome, EffiCity — Orne/Normandie
- **BTP (Kévin)** : maçon, plombier, électricien — appels manqués, devis

---

## 10. SEO, JSON-LD, Search Console

| Ressource | Emplacement |
|-----------|-------------|
| Metadata racine | `app/layout.tsx` · `META` |
| Sitemap | `app/sitemap.ts` |
| robots | `public/robots.txt` |
| Vérification GSC | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` |
| JSON-LD global | `components/seo/StructuredData.tsx` · `lib/json-ld.ts` |
| BTP | `components/seo/BtpStructuredData.tsx` |
| Pages locales | `components/seo/LocalStructuredData.tsx` |

**Soumission :** `https://automatex-hub.com/sitemap.xml`

Guide détaillé GSC + historique perf : **`docs/guide-fichiers-search-console-gemini.md`**

---

## 11. Layout global & composants clés

| Zone | Fichier |
|------|---------|
| Shell | `components/layout/LayoutChrome.tsx` |
| Nav | `components/layout/MegaNav.tsx` — sticky 60px / 72px lg · menu mobile **`inert`** fermé |
| Footer | `components/layout/Footer.tsx` |
| Providers | `providers/AppProviders.tsx` — reduced motion, GSAP ScrollTrigger idle |
| Perf différée | `components/layout/DeferredPerfChrome.tsx` — curseur, UTM, scroll depth |
| Contact | `components/sections/Contact.tsx` — variants `immobilier` \| `btp` \| `hub` |
| Curseur desktop | `components/layout/CustomCursor.tsx` — halo bleu, `body.cursor-custom` |

**data-cursor :** `cta` \| `link` \| `card` \| `nav` \| `slider` — `lib/cursorKinds.ts`

---

## 12. Performance & accessibilité (contraintes agents)

| Sujet | Règle |
|-------|--------|
| Design visuel | **Ne pas changer** couleurs primaires orange / layout marketing sans demande |
| CLS | Pas de CSS global async post-build · skeletons = hauteur réelle · images width/height |
| TBT | `scheduleIdleTask` / `requestIdleCallback` pour non-critique |
| A11y menu | Pas `aria-hidden` sur conteneur avec liens — utiliser **`inert`** |
| CTA primary | Texte `#080d1a` sur orange |

Objectif Lighthouse : **Perf ≥ 95**, **CLS < 0,05**, **TBT < 50 ms** (/, `/immobilier`, `/btp`).

---

## 13. Nouvelle route marketing — checklist

1. `app/<slug>/page.tsx`
2. Entrée dans `app/sitemap.ts`
3. `scripts/check-routes.sh` + `scripts/audit-routes.mjs`
4. Mettre à jour **`docs/SITE-ROUTES-MEMORY.md`** (et ce fichier si changement majeur)
5. `contactHref` si nouvelle famille d’URL
6. `npm run build` + `npm run check:words`

---

## 14. Commandes utiles

```bash
npm run dev              # turbopack
npm run build
npm run lint
npm run check:words
npm run check:routes:local   # serve out puis script
npm run audit:routes
npm run brand:favicons
npm run demos:static
```

---

## 15. Variables d’environnement (publiques)

| Variable | Usage |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | Canonique (défaut `https://automatex-hub.com`) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Meta GSC |
| `NEXT_PUBLIC_WEBHOOK_FORMULAIRE_PROSPECTS_URL` | URL du **WebHook Formulaire prospects** (POST JSON) |

---

## 16. Arborescence mentale (1 ligne)

`/` hub → **immo** `/immobilier` + `/mandataires-*` | **btp** `/btp` + `/automatisation-*` `/devis-*` | **tpe** `/automatisation-ia-tpe` | **catalogue** `/automatisations#*` | **trust** `/vos-donnees` `/accompagnement` | **legal** ×4 | **merci** off-SEO

---

*Automatex Hub · Nolan Hermand · Flers (61) · Maintenir ce fichier à jour lors de tout changement de route, tarif, token design ou règle copy.*
