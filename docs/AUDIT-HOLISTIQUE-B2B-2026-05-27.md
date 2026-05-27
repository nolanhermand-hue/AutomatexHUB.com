# AUDIT HOLISTIQUE B2B & PERFORMANCE — Automatex Hub

**Date :** 2026-05-27  
**Auditeur :** Principal B2B Web Architect & CRO (prompt master)  
**Cible :** [automatex-hub.com](https://automatex-hub.com) — Next.js 15, `output: "export"`, Netlify  
**Périmètre code :** dépôt local `Site Web Entreprise Nolan` (build `npm run build` du 2026-05-27)  
**Production mesurée :** `curl -I https://automatex-hub.com` (headers OK) ; `/vos-donnees` → **404 prod** (présent en build local, non déployé au moment de l’audit)

---

## TABLEAU DE BORD EXÉCUTIF

| Axe | Intitulé | Note /200 | Commentaire synthétique |
|-----|----------|-----------|-------------------------|
| 1 | Performances techniques & CWV | **148** | Static solide ; `/immobilier` à **221 kB** First Load JS ; pas de `next/image` ; `three` mort |
| 2 | Design system ORIS | **171** | Tokens + CTAs bracket largement appliqués ; reliquats copy/couleur « crème / 100 % France » |
| 3 | CRO & psychologie B2B | **165** | Bifurcation hub claire ; démos concrètes ; formulaire riche ; parcours immo long |
| 4 | SEO local & GEO | **159** | JSON-LD fort ; 20+ URLs sitemap ; `/merci` absent ; `lastModified` figé |
| 5 | Confiance & données | **174** | Page `/vos-donnees` prête en repo ; incohérence « Hébergé en France » vs transparence N8N/Mistral |
| | **SCORE GLOBAL** | **817 / 1000** | Plateforme crédible et technique ; gains rapides = déploiement + alignement copy souveraineté + allègement immo |

---

## PHASE 0 — SOURCING (FACTUEL)

### Routes `app/` (extrait)

Hub `/`, funnels `/immobilier`, `/btp`, `/automatisations`, `/accompagnement`, `/a-propos`, `/vos-donnees`, 4× mandataires geo, 4× artisan geo, `/devis-automatique-artisan*`, légal (`mentions-legales`, `politique-confidentialite`, `cgv`, `securite`), `/merci`, assets App Router (`favicon.ico`, `icon.png`, `apple-icon.png`).

### Build (`next.config.mjs`)

```7:16:next.config.mjs
const nextConfig = {
  outputFileTracingRoot: __dirname,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};
```

### First Load JS (build local)

| Route | First Load JS |
|-------|----------------|
| `/` | 108 kB |
| `/immobilier` | **221 kB** |
| `/btp` | 167 kB |
| `/automatisations` | 112 kB |
| Shared | 103 kB |

### Dépendances motion

`framer-motion`, `gsap`, `@gsap/react`, `three` dans `package.json` — **aucun import `three` dans `app/` ou `components/`** (dépendance morte).

### Headers production (2026-05-27)

- `strict-transport-security: max-age=31536000; includeSubDomains; preload`
- `content-security-policy` (Plausible, GA, Clarity whitelistés)
- `x-frame-options: DENY`, `x-content-type-options: nosniff`, `referrer-policy: strict-origin-when-cross-origin`
- `cache-control: public,max-age=0,must-revalidate` (HTML)

---

## AXE 1 — PERFORMANCES TECHNIQUES & CORE WEB VITALS (148/200)

### Forces

- **Export statique** cohérent avec Netlify (`netlify.toml` → `publish = "out"`), pas de SSR fragile.
- **Code-splitting cible immo** : `ImmobilierHome.tsx` charge en `next/dynamic` les blocs démo, marquees, ROI, grilles (`components/funnels/ImmobilierHome.tsx` L19–60).
- **Hero sans WebGL** : `SceneWrapper.tsx` = CSS `hero-atmosphere` uniquement (L3–10) — bon pour LCP vs ancienne stack Three.
- **Scripts perf** : `check-animation-weight.sh`, `demos:static` (PNG fallback démos), `optimizePackageImports: ["framer-motion"]`.
- **Sécurité edge** : CSP + HSTS en prod (mesure curl).

### Faiblesses / fuites

| Problème | Fichier / preuve | Impact |
|----------|------------------|--------|
| **221 kB** sur `/immobilier` | Build route table | TTI mobile Orne (4G) ; risque LCP > 2,5 s [À mesurer Lighthouse prod] |
| **`images.unoptimized: true`** | `next.config.mjs` L10–12 | Pas de pipeline WebP/width auto ; `<img>` et PNG lourds |
| **Aucun `next/image` / `fetchpriority`** | Grep codebase (0 usage app) | LCP hero / avatar non priorisés ; CLS possible sur images sans dimensions |
| **`three` inutilisé** | `package.json` L27 ; 0 import | Dead weight install + risque ré-import accidentel |
| **Hero + sections client lourdes** | `Hero.tsx` client + GSAP demos | Main thread [À mesurer profil staging] |
| **HTML ~79 kB** | `content-length: 79591` curl `/` | Parsing + hydration client |

### [À mesurer en staging/prod]

- LCP, INP, CLS Lighthouse mobile/desktop sur `/`, `/immobilier`, `/btp`.
- Poids réseau total (waterfall) avec Plausible + Clarity actifs.

---

## AXE 2 — DESIGN SYSTEM & VALEURS VISUELLES ORIS (171/200)

### Forces

- **Tokens centralisés** : `app/globals.css` — `#080D1A`, `#FF6B2B`, `#1A2540`, Inter + JetBrains Mono (`@theme` L5–43).
- **Grille body** : `background-size: 40px 40px` + fade top (`body::before` L86–96).
- **Composants** : `.btn-bracket`, `.btn-bracket-primary`, `.card`, `.badge-*`, `.label-micro` (globals L190+).
- **Hub & nav** : `HubEntry.tsx` — lockup mono, cartes métier, CTAs bracket (L13–54).
- **MegaNav** : fond surface, logo texte AUTOMATEX, lien « Vos données » + cadenas (`MegaNav.tsx`).
- **Favicon** : master AX + génération `app/favicon.ico` ICO valide (`generate-favicons.js`).

### Faiblesses

| Problème | Fichier | Impact |
|----------|---------|--------|
| Reliquats thème crème | `ThemeSwitcher.tsx` L16–20 `#FAF9F6` | Confusion si réactivé |
| `bg-section` pulse immo | `ImmobilierHome.tsx` RoiCounter fallback L45 | Token legacy vs ORIS |
| Commentaire Netlify faux | `netlify.toml` L70–75 « PNG servi en .ico » | **Corrigé en repo** (vrai ICO) — redeploy pour prod |
| Double charge visuelle curseur | `CustomCursor.tsx` halo 280px | Perf GPU faible [À mesurer] ; OK desktop premium |

---

## AXE 3 — CRO & PSYCHOLOGIE B2B (165/200)

### Forces — Pascal (mandataire)

- **Loss frame** : H1 « lead à 3 500 € » (`Hero.tsx` L68–70, `constants.ts` `VALUE_PER_LEAD_EUROS`).
- **Preuve chiffrée** : stats hero aside (`HERO_STATS`).
- **Show don’t tell** : `LiveDemoBlock` + `lib/live-demo.ts` (étapes Telegram/SMS visibles) ; GSAP demos lazy.
- **Pricing** : toggle −15 %, loyalty M13/M37, fondateurs (`lib/pricing.ts`, `PricingProgramNotes.tsx`).
- **Pré-remplissage offre** : `#contact?offre=` (`Contact.tsx` L35–48).

### Forces — Kévin (BTP)

- Hub → `/btp` explicite (`HubEntry.tsx` L47–53).
- `BtpLanding` + pricing 5 niveaux + `BtpSocialProof` compteur fondateurs dynamique.

### Faiblesses

| Problème | Impact business |
|----------|-----------------|
| **Parcours immo très long** (nombreuses sections sync importées avant dynamic) | Fatigue scroll ; CTA tardif sur mobile |
| **Hub `/` vs `/immobilier`** : hub léger (108 kB) mais SEO principal peut être split | Risque dilution message Pascal si trafic land hub |
| **Formulaire** : champs multiples + métier BTP | Abandon ; [À mesurer taux merci/visites] |
| **`/vos-donnees` 404 prod** | Frein confiance B2B pour décideurs sensibles RGPD |
| Copy « Hébergé en France » partout vs page honnête UE | Dissonance cognitive → baisse confiance |

---

## AXE 4 — SEO LOCAL & GEO (159/200)

### Forces

- **Metadata immo** : title/description geo IAD/SAFTI/Orne (`app/immobilier/page.tsx` L4–14).
- **Sitemap** : 20 entrées incl. geo BTP/mandataires + `/vos-donnees` (`app/sitemap.ts`).
- **JSON-LD** : `ProfessionalService`, `FAQPage`, `HowTo`, offres (`lib/json-ld.ts` L77+).
- **Pages locales** : `/mandataires-flers`, `/automatisation-artisan-*`, etc.
- **FAQ `<details>`** natif — bon pour GEO scraping (`FAQ.tsx`, `BtpFaq.tsx`).

### Faiblesses

| Problème | Fichier | Impact |
|----------|---------|--------|
| **`/merci` absent du sitemap** | `app/sitemap.ts` | Mineur (noindex implicite souhaitable) |
| **`lastModified` figé** `2026-05-20` | `sitemap.ts` L11 | Signal fraîcheur faible |
| **JSON-LD « Hébergé en France OVH »** | `lib/json-ld.ts` L258 | Incohérent avec stack N8N Francfort + Netlify |
| **Prod ≠ repo** | curl `/vos-donnees` 404 | SEO/confiance page manquante en live |
| **Mots interdits marketing** | `check-forbidden-words.mjs` | Bon garde-fou ; `/vos-donnees` exempt (Mistral/workflow) — OK |

---

## AXE 5 — CONFIANCE, SÉCURITÉ & TRANSPARENCE (174/200)

### Forces

- **Page `/vos-donnees`** : stack Netlify/N8N/Mistral, droits RGPD, registre (`components/vos-donnees/VosDonneesView.tsx`).
- **Pages légales** + `/securite`.
- **Garantie 30 j** : `GuaranteeXL`, pricing cards.
- **Honnêteté lancement** : `BTP_BETA`, `about-page.ts`, compteur fondateurs `formatFoundersAvailability()`.
- **SIRET** : footer / vos-donnees / constants `NAP`.
- **Headers sécurité** prod (CSP, HSTS) — mesure curl.

### Faiblesses

| Problème | Impact |
|----------|--------|
| **« Hébergé en France »** répété (15+ occurrences) | `constants.ts` TRUST_BAR, hero badge, JSON-LD, footer | Risque crédibilité vs `/vos-donnees` |
| **Netlify Forms USA** documenté sur vos-donnees mais pas dans hero trust | Transparence partielle |
| **Faux avis** : bien évité ; témoignages fondateurs conditionnés (`FOUNDERS_BENEFITS`) | OK |
| **Non déployé** : vos-donnees, pricing loyalty, favicon AX en prod si pas push récent | Confiance perçue stale |

---

## BACKLOG TECHNIQUE DE CORRECTION

| Prio | Composant / fichier | Modification exacte | Effort | Gain attendu |
|------|---------------------|---------------------|--------|--------------|
| **P0** | Déploiement Netlify | Push `main` + vérifier build ; `curl -I` `/vos-donnees` → 200 | 15 min | Confiance + SEO page données live |
| **P0** | `lib/constants.ts`, `lib/hub-copy.ts`, `lib/json-ld.ts`, hero badges | Remplacer « Hébergé en France » par **« IA française · automatisations UE · RGPD »** (aligné `vos-donnees`) | 45 min | Cohérence souveraineté ; moins de objections B2B |
| **P0** | `Contact.tsx` | Réduire champs hub/immobilier au minimum viable (prénom, tel, métier) ; message optionnel replié | 60 min | ↑ complétions formulaire |
| **P1** | `package.json` | Retirer `three` + `@types/three` si confirmé inutilisé | 10 min | Dette + surface bundle future |
| **P1** | `ImmobilierHome.tsx` | Dynamic import des sections **sync** restantes (Problem, Solution, Pricing, Contact) | 90 min | ↓ First Load JS immo ~20–40 kB [À mesurer] |
| **P1** | `FounderAvatar.tsx`, hero assets | `width`/`height` explicites + `fetchpriority="high"` sur LCP candidate ; WebP dans `public/` | 45 min | LCP, CLS |
| **P1** | `netlify.toml` L70–75 | Corriger `Content-Type: image/png` → `image/x-icon` pour `/favicon.ico` | 5 min | Validité favicon strict |
| **P1** | `components/funnels/ImmobilierHome.tsx` L45 | Remplacer `bg-section` par `bg-surface` dans skeleton RoiCounter | 2 min | Cohérence ORIS |
| **P2** | `app/sitemap.ts` | `lastModified: new Date()` au build ; exclure ou inclure `/merci` volontairement | 15 min | Crawl signals |
| **P2** | `app/immobilier/page.tsx` | Enrichir meta GEO « Flers, Alençon, Argentan » dans description | 20 min | SEO local long-tail |
| **P2** | Lighthouse CI | Brancher `npm run audit:lighthouse` post-deploy sur 3 URLs | 30 min | Régression CWV visible |
| **P2** | `CustomCursor.tsx` | `prefers-reduced-motion` déjà OK ; option `matchMedia('(pointer: fine)')` — désactiver halo >280px sur laptops faibles | 20 min | INP desktop marginal |

---

## DÉCISIONS BUSINESS (Fondateur — non techniques)

1. **Nomenclature souveraineté** : Valider la phrase officielle unique (ex. *« Site statique · automatisations N8N Francfort · Mistral Paris · RGPD »*) et l’interdire en marketing global « 100 % hébergé en France » pour les flux métier.
2. **Places fondateurs** : Mettre à jour `PRICING_CONFIG.founders.*.taken` dès chaque signature (compteur public = engagement fort).
3. **Photo / témoignage fondateur** : Arbitrer si le bloc `FounderTrustBlock` passe en photo pro vs avatar illustration (impact confiance Pascal > Kévin).

---

## SYNTHÈSE STRATÉGIQUE

Automatex Hub est **au-dessus de la moyenne** des landings B2B solo : architecture statique propre, JSON-LD riche, bifurcation personas, démos visuelles, garde-fou lexical (`check-forbidden-words`), et désormais une **page données de référence** en repo. Le score **817/1000** reflète surtout un **écart prod/repo**, une **charge JS immo**, et une **tension copy France vs UE** qui mine l’axe confiance pour les prospects informés.

**Top 3 actions ROI (≤ 2 h)** : déployer → harmoniser copy souveraineté → alléger le premier paint immo.

---

*Document généré pour injection Cursor / revue fondateur. Métriques CWV : [À mesurer en environnement de staging] sauf headers HTTP et tailles bundle build local.*
