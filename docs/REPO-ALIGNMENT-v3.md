# Alignement dépôt vs HYPER-PROMPT v3.0

> **Règle** : en cas de conflit, **le code + `docs/SITE-ROUTES-MEMORY.md`** gagnent. Ce fichier évite que les agents appliquent le hyper-prompt à la lettre quand il est obsolète.

| Sujet | Hyper-prompt v3 | **Vérité repo (mai 2026)** |
|-------|-----------------|---------------------------|
| Stack | « Framer pour pages vitrines » | **Next.js 15** export statique uniquement |
| Hébergement marketing | « OVH Roubaix · 100 % France » | **`SOVEREIGNTY_TRUST_LINE`** + détail **Netlify CDN** (site) · **N8N Francfort** · **Mistral Paris** (`/vos-donnees`, légal) |
| Mot « automatisation » | Interdit partout | Interdit en CI : **liste plus courte** — le mot **« automatisations »** et URLs `/automatisation-*` sont **OK** |
| Pilier TPE | Non détaillé dans hyper | **`/automatisation-ia-tpe`** + pricing TPE + loyalty affichée via `PricingProgramNotes` |
| IMMO tarifs | Déclic/Système/Pilote | **Aligné** `OFFERS` dans `lib/constants.ts` |
| BTP tarifs | Déclic/Système/Pilote (3 packs) | **Aligné** `BTP_OFFERS` dans `lib/btp-copy.ts` |
| Nav CTA contact | Immo vs BTP générique | **`contactHref()`** dans `lib/hub-nav.ts` — voir routes doc |
| Catalogue ancre | `#pipeline-pilotage` (ancien) | **`#suivi-rapports`** · catégorie **Suivi & Rapports Métier** |
| Theme crème | — | **Supprimé** · ORIS sombre fixe · `html.dark` |
| `three` | — | **Retiré** · WebGL natif `dataFlowBackground.ts` |
| `/llms.txt` | À créer | **À vérifier** — pas encore dans `public/` si absent |
| OAI-SearchBot | Mentionné robots | **Non listé** dans `public/robots.txt` — ajouter si voulu |
| Pages | — | **23** `page.tsx` — liste `SITE-ROUTES-MEMORY.md` |
| `/merci` | — | Existe · **Disallow** robots · **hors sitemap** |

### Fichiers source de vérité

| Domaine | Fichier |
|---------|---------|
| Tarifs immo | `lib/constants.ts` → `OFFERS` |
| Tarifs BTP | `lib/btp-copy.ts` → `BTP_OFFERS` |
| Tarifs TPE | `lib/automatisation-ia-tpe-content.ts` |
| Loyalty / annuel / fondateurs | `lib/pricing.ts` |
| Routes + contact CTA | `lib/hub-nav.ts` + `docs/SITE-ROUTES-MEMORY.md` |
| Catalogue + ancres | `lib/automations-catalog.ts` |
| Mots interdits build | `scripts/check-forbidden-words.mjs` |
| Sitemap | `app/sitemap.ts` |
| NAP / meta | `lib/constants.ts` → `NAP` |
| JSON-LD | `lib/json-ld.ts` + pages locales |

### Commandes avant merge

```bash
npm run build
npm run check:words
bash scripts/check-routes.sh http://127.0.0.1:3000
```
