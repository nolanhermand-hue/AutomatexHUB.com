# Inventaire des routes — AutomateX-HUB

> **Màj** : 2026-06-15 · **Canon** : `https://automatex-hub.com` (apex, sans `www` → 301 Netlify) · **Build** : Next.js 15, `output: "export"`, `trailingSlash: false` · **Deploy** : Netlify `publish = out`

Ce document est la **source de vérité** pour les URLs publiques. Pour les règles agents (JSON-LD, ancres, Mermaid, checklist funnel), voir `docs/SITE-ROUTES-MEMORY.md`.

---

## Vue d’ensemble

| Métrique | Valeur |
|----------|--------|
| Fichiers `app/**/page.tsx` | **26** (dont 2 routes dynamiques) |
| URLs HTML indexables (sitemap) | **38** |
| Contact canonique | **`/rendez-vous`** (`lib/hub-nav.ts`) |
| Accueil | **`/`** → `HomePage` (plus de hub choix de parcours) |
| Hors index SEO | **`/merci`** (`robots.txt` + header Netlify `noindex`) |
| Routes API Next | **Aucune** (`/api/*` interdit dans `robots.txt`) |

**Marque** : site édité sous AutomateX / AutomateX-HUB selon les constantes (`lib/constants.ts`).

---

## Table principale — pages statiques

| URL | Fichier source | Type | Titre / H1 (bref) | Notes |
|-----|----------------|------|-------------------|-------|
| `/` | `app/page.tsx` | Landing transverse | Title : *Automatisation artisans & TPE en Normandie* · H1 : *Tes clients n'attendent plus…* (`lib/home-copy.ts`) | `HomePage` · CTA → `rendezVousHref()` · pas de `#contact` sur la home |
| `/rendez-vous` | `app/rendez-vous/page.tsx` | Conversion | Title : *Prendre rendez-vous · Démo 30 min* · H1 : *Réserve 30 minutes de démo sur ton cas* | `Contact` `variant="hub"` · query `?offre=` / `?sujet=resiliation` |
| `/immobilier` | `app/immobilier/page.tsx` | Funnel immo | Title : *Diagnostiqueur immo · Orne — réponse agences 2 min* | `ImmobilierHome` · ancres ci-dessous |
| `/btp` | `app/btp/page.tsx` | Funnel BTP | Title : *Artisans BTP · devis & appels automatiques · Orne* · H1 : `BTP_HERO.h1` (`lib/btp-copy.ts`) | Landing Kévin / artisans |
| `/automatisation-ia-tpe` | `app/automatisation-ia-tpe/page.tsx` | Pilier TPE | Title : `TPE_META` · H1 deux lignes `TPE_HERO` | Tarifs + `#contact` via `Contact` |
| `/automatisations` | `app/automatisations/page.tsx` | Catalogue | Title : *Catalogue automatisations* · H1 : *Ce qu'AutomateX peut faire pour toi* | 18 automatisations · ancres `#leads-reponses` … `#suivi-rapports` |
| `/accompagnement` | `app/accompagnement/page.tsx` | Confiance | Title : *Accompagnement humain inclus* · H1 : *Vous n'êtes jamais seul avec votre système.* | CTA → `/rendez-vous` · `#contact` |
| `/a-propos` | `app/a-propos/page.tsx` | Confiance | `ABOUT_PAGE.metaTitle` · H1 : *Construit à Flers…* | JSON-LD `AboutPage` |
| `/vos-donnees` | `app/vos-donnees/page.tsx` | Confiance / RGPD | Title : *Vos données en sécurité* | `VosDonneesView` |
| `/faq` | `app/faq/page.tsx` | GEO / aide | Title : *FAQ — 40 réponses* · H1 : *40 réponses sur {marque}* | `MasterFaqPage` · une FAQPage JSON-LD |
| `/automatisation-c-est-quoi` | `app/automatisation-c-est-quoi/page.tsx` | Pédagogie | Title : *C'est quoi une automatisation ?* · H1 : idem | Lien Mega Nav · `AUTOMATISATION_CEST_QUOI_PATH` |
| `/automatisation-pour-artisans` | `app/automatisation-pour-artisans/page.tsx` | Cocon pilier | `COCON_PILIER` (`lib/automatisation-cocon.ts`) | Hub douleurs artisans |
| `/automatisation-btp-orne` | `app/automatisation-btp-orne/page.tsx` | SEO local BTP | `BTP_LOCAL_PAGES` · H1 Orne | `BtpLocalPage` + extension SEO |
| `/automatisation-artisan-flers` | `app/automatisation-artisan-flers/page.tsx` | SEO local BTP | Flers (61) | idem |
| `/automatisation-artisan-alencon` | `app/automatisation-artisan-alencon/page.tsx` | SEO local BTP | Alençon (61) | idem |
| `/automatisation-artisan-argentan` | `app/automatisation-artisan-argentan/page.tsx` | SEO local BTP | Argentan (61) | idem |
| `/normandie` | `app/normandie/page.tsx` | Cocon GEO pilier | `NORMANDIE_PILIER` (`lib/villes-normandie.ts`) | Cluster villes |
| `/comparatif/telesecretariat-artisan` | `app/comparatif/telesecretariat-artisan/page.tsx` | Comparatif SEO | *Télésecrétariat artisan vs réponse automatique* | `lib/comparatif-telesecretariat-artisan.ts` |
| `/comparatif/demandes-agences-diagnostiqueur` | `app/comparatif/demandes-agences-diagnostiqueur/page.tsx` | Comparatif SEO | *Demandes agences diagnostiqueur…* | `lib/comparatif-demandes-agences-diagnostiqueur.ts` |
| `/mentions-legales` | `app/mentions-legales/page.tsx` | Légal | *Mentions légales — AutomateX* | `LegalPageShell` |
| `/politique-confidentialite` | `app/politique-confidentialite/page.tsx` | Légal | *Politique de confidentialité* | RGPD |
| `/cgv` | `app/cgv/page.tsx` | Légal | *Conditions générales de vente* | |
| `/securite` | `app/securite/page.tsx` | Légal / confiance | *Sécurité des données* | |
| `/merci` | `app/merci/page.tsx` | Post-formulaire | H1 : *Merci. Nous vous recontactons sous 24 h.* | **Absent du sitemap** · `Disallow: /merci` |

---

## Routes dynamiques (SSG)

Paramètre `dynamicParams = false` : tout slug inconnu → 404 au build.

### Cocon artisans — `app/automatisation-pour-artisans/[douleur]/page.tsx`

Source slugs : `getAllCoconPainSlugs()` → `lib/automatisation-cocon.ts` (`COCON_PILIER_PATH = /automatisation-pour-artisans`).

| Slug | URL | H1 (bref) |
|------|-----|-----------|
| `relance-devis-automatique` | `/automatisation-pour-artisans/relance-devis-automatique` | Relance de devis — client ne répond plus |
| `sms-appel-manque` | `/automatisation-pour-artisans/sms-appel-manque` | SMS sur appel manqué chantier |
| `relance-impayes-livrable` | `/automatisation-pour-artisans/relance-impayes-livrable` | Relance impayés / blocage livrable |
| `rappel-lead-instantane` | `/automatisation-pour-artisans/rappel-lead-instantane` | Réponse demandes instantanée |
| `prise-rdv-automatique` | `/automatisation-pour-artisans/prise-rdv-automatique` | Prise de RDV sans aller-retour |

Template : `AutomatisationCoconPainTemplate`.

### Normandie villes — `app/normandie/[ville]/page.tsx`

Source : `NORMANDIE_VILLES` → `lib/villes-normandie.ts`.

| Slug | URL | Département |
|------|-----|-------------|
| `caen` | `/normandie/caen` | 14 |
| `rouen` | `/normandie/rouen` | 76 |
| `le-havre` | `/normandie/le-havre` | 76 |
| `cherbourg-en-cotentin` | `/normandie/cherbourg-en-cotentin` | 50 |
| `saint-lo` | `/normandie/saint-lo` | 50 |
| `lisieux` | `/normandie/lisieux` | 14 |
| `evreux` | `/normandie/evreux` | 27 |
| `alencon` | `/normandie/alencon` | 61 |
| `flers` | `/normandie/flers` | 61 |
| `argentan` | `/normandie/argentan` | 61 |

---

## Funnels — ancres hash (CTA booking → `/rendez-vous`)

| Page | IDs DOM utiles |
|------|----------------|
| `/immobilier` | `#hero`, `#solution`, `#demo`, `#pricing`, `#faq`, `#contact` |
| `/btp` | `#hero`, `#demo`, `#solution`, `#pricing`, `#faq`, `#contact` |
| `/automatisation-ia-tpe` | `#automatisations`, `#tarifs`, `#faq`, `#contact` |
| `/accompagnement` | `#contact` |
| `/automatisations` | Voir `categoryToAnchor()` dans `lib/automations-catalog.ts` |

### Sections catalogue `/automatisations`

| Catégorie | Ancre `id` |
|-----------|------------|
| Leads & réponses | `#leads-reponses` |
| Mails & tri | `#mails-tri` |
| Documents & Drive | `#documents-drive` |
| Résumés & planning | `#resumes-planning` |
| Relances & suivi | `#relances-suivi` |
| Dictée & terrain | `#dictee-terrain` |
| Appels & terrain BTP | `#appels-terrain-btp` |
| Suivi & Rapports Métier | `#suivi-rapports` |

**Query contact** : `/rendez-vous?offre=declic|systeme|pilote|sur-mesure` · `/rendez-vous?sujet=resiliation`

**Obsolète** : CTA nav via `#contact` sur la home ou hub — remplacé par `contactHref()` → `/rendez-vous` partout.

---

## Redirections Netlify (`netlify.toml`)

| From | To | Statut | Remarque |
|------|-----|--------|----------|
| `https://www.automatex-hub.com/*` | `https://automatex-hub.com/:splat` | 301 force | Apex canonique |
| `/mandataires-flers` | `/immobilier` | 301 | Legacy mandataires |
| `/mandataires-alencon` | `/immobilier` | 301 | idem |
| `/mandataires-argentan` | `/immobilier` | 301 | idem |
| `/mandataires-normandie` | `/immobilier` | 301 | idem |
| `/devis-automatique-artisan` | `/automatisation-pour-artisans` | 301 | Legacy devis |
| `/devis-automatique-artisan-orne` | `/automatisation-pour-artisans` | 301 | idem |

**Pas de `page.tsx`** pour ces chemins legacy : uniquement redirects + tests HTTP 301 dans `scripts/check-routes.sh` / `audit-routes.mjs`.

---

## Pages locales sans route (données seules)

`lib/local-pages.ts` — contenu préparé, **aucun** `app/diagnostiqueurs-*/page.tsx` :

| Path prévu | Slug | Statut |
|------------|------|--------|
| `/diagnostiqueurs-flers` | `flers` | Données SEO · pas de route |
| `/diagnostiqueurs-alencon` | `alencon` | idem |
| `/diagnostiqueurs-argentan` | `argentan` | idem |
| `/diagnostiqueurs-normandie` | `normandie` | idem |

Landing immo canonique : **`/immobilier`**.

---

## Sitemap (`app/sitemap.ts`)

- Généré au build : **`/sitemap.xml`** (ne pas dupliquer `public/sitemap.xml`).
- **38 URLs** : toutes les pages indexables ci-dessus (pilier + 5 douleurs cocon + pilier + 10 villes Normandie inclus).
- **Exclu** : `/merci`.
- **Priorités notables** : `1.0` — `/`, `/immobilier`, `/btp`, `/accompagnement` · `0.95` — `/automatisation-ia-tpe`, `/rendez-vous`.
- **lastModified** : cluster Normandie (`NORMANDIE_CLUSTER_LAST_MODIFIED`), cocon (`COCON_CLUSTER_LAST_MODIFIED`), comparatifs (`COMPARATIF_LAST_UPDATED`), *c'est quoi* (`AUTOMATISATION_CEST_QUOI_LAST_MODIFIED`), reste = date build.

**Nouvelle route marketing** : ajouter `app/.../page.tsx` + entrée `app/sitemap.ts` + étendre `scripts/check-routes.sh` et `scripts/audit-routes.mjs` si la route est critique.

---

## Navigation

### `SITE_NAV` — `lib/hub-nav.ts`

Ordre : `/automatisation-pour-artisans` · `/normandie` · `/faq` · `/automatisation-ia-tpe` · `/immobilier` · `/btp` · `/automatisations` · `/accompagnement` · `/vos-donnees` · `/a-propos`

### CTA header / MegaNav

- `contactHref(pathname)` → **`/rendez-vous`** (toutes pages).
- `rendezVousHref({ offre, sujet })` pour tarifs et résiliation.

### Mega-menu — `lib/mega-nav-data.ts` + `components/layout/MegaNav.tsx`

- Métiers : TPE, BTP, immo (href ci-dessus).
- Besoins : liens `/automatisations#…` via `categoryToAnchor`.
- Pédagogie : `MEGA_NAV_PEDAGOGIE` → `/automatisation-c-est-quoi`.
- Liens directs : `/automatisations`, `/accompagnement`, `/vos-donnees`, `/a-propos`, `/immobilier`, `/btp`.

### Footer BTP local — `FOOTER_BTP_LOCAL_LINKS` (`lib/hub-nav.ts`)

`/automatisation-btp-orne`, artisans Flers / Alençon / Argentan, deux pages cocon douleur, `/btp`.

---

## Règles — ne pas inventer de routes

| Interdit / obsolète | Utiliser |
|---------------------|----------|
| `/tpe`, `/automatisation-tpe` | `/automatisation-ia-tpe` |
| Hub parcours `/hub` (supprimé) | `/` `HomePage` |
| `#pipeline-pilotage` | `#suivi-rapports` |
| CTA nav `#contact` | `/rendez-vous` |
| `/automatisation` = tout le BTP | Faux : TPE = `/automatisation-ia-tpe` ; BTP = `/btp` + `/automatisation-artisan-*` + `/automatisation-btp-orne` |
| `/api/*` App Router | Aucune · forms Netlify |

---

## Métadonnées générées (hors table pages)

| URL | Source |
|-----|--------|
| `/sitemap.xml` | `app/sitemap.ts` |
| `/robots.txt` | `public/robots.txt` |
| `/favicon.ico`, `/icon.png`, `/apple-icon.png` | `app/` (build brand) |

---

## Vérification des routes

```bash
npm run build                    # inclut check:faqpage selon package.json
npx serve out -p 3000            # export statique local
npm run check:routes:local       # scripts/check-routes.sh — échantillon + redirects + assets
npm run audit:routes             # scripts/audit-routes.mjs → audits/routes-status.txt
# Prod :
AUDIT_BASE_URL=https://automatex-hub.com npm run audit:routes
```

**Écart connu** : `check-routes.sh` et `audit-routes.mjs` ne couvrent pas encore toutes les URLs du sitemap (cocon douleurs, villes Normandie sauf Flers, `/faq`, comparatifs, `/automatisation-c-est-quoi`, `/automatisation-pour-artisans`). Le sitemap reste la liste complète pour Search Console.

**Redirects legacy** : les scripts attendent **200 ou 301** sur `/devis-automatique-artisan*` (cible cocon).

---

*AutomateX-HUB · Nolan Hermand · Flers (61) · Mettre à jour ce fichier à chaque nouvelle URL ou redirect.*
