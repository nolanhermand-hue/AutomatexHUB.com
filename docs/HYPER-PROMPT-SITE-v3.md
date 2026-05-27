# HYPER-PROMPT SITE — automatex-hub.com v3.0

> **Usage agents** : lire **d’abord** `docs/REPO-ALIGNMENT-v3.md` (vérité code) puis ce doc (stratégie). Routes : `docs/SITE-ROUTES-MEMORY.md`.

**Nolan Hermand** · Automatex Hub · Flers, Orne (61) · Mai 2026

---

## Contexte global (injecter partout)

| Clé | Valeur |
|-----|--------|
| Site | `https://automatex-hub.com` · Next 15 **`output:"export"`** · Netlify `out/` · **pas Framer** |
| Produit | Réponse auto leads + tri mail + Drive · mandataires + artisans BTP |
| Fondateur | Nolan Hermand · 19 ans · EI |
| Adresse | 50 rue de l'Equerre · 61100 Saint-Georges-des-Groseillers |
| SIRET | 10320805400017 · APE 6202A |
| GEO | 48.7483, -0.5711 |
| Contact | +33645384233 · nolan.hermand@automatex-hub.com |
| Réassurance publique | **`IA française · Automations UE · RGPD`** (`SOVEREIGNTY_TRUST_LINE`) — pas « 100 % France » marketing seul |
| Stack client | Gmail · Calendar · Drive · Telegram |
| Stack inv. | N8N + Mistral — **marketing public : ne pas nommer** · transparence sur `/vos-donnees` uniquement |

### Cibles

- **A Mandataires** : IAD, SAFTI, Capifrance, Optimhome, EffiCity · Orne/Normandie · lead perdu en visite · mail chaos · ~3 500 €/vente nette (ordre de grandeur).
- **B Mandataires BTP** : plombier, électricien, maçon, couvreur · appel manqué · devis >24h (FFB ~60 %).

### Tarifs **code actuel** (`lib/constants.ts` · `lib/btp-copy.ts`)

| Segment | Formule | Setup | /mois | ⭐ |
|---------|---------|-------|-------|-----|
| IMMO | Essentiel | 199 | 99 | |
| IMMO | Pro | 499 | 199 | best |
| IMMO | Cabinet | 999 | 449 | |
| IMMO | Sur mesure | devis | devis | |
| BTP | Départ | 199 | 99 | |
| BTP | Clarté | 249 | 149 | |
| BTP | Essentiel | 499 | 249 | best |
| BTP | Pro | 749 | 349 | |
| BTP | Full | 999 | 449 | |
| TPE | voir `/automatisation-ia-tpe` · `lib/automatisation-ia-tpe-content.ts` | 99–449 | |

Garantie : **30 j · satisfait ou remboursé** · résiliation **1 mail**. Fidélité : `lib/pricing.ts` (−15 % annuel · M13 −5 % · M37 −15 %).

### Mots interdits **CI** (`scripts/check-forbidden-words.mjs`)

`IA` · intelligence artificielle · workflow · API · SaaS · abonnement · LLM · no-code · chatbot · robot · bot · algorithme · machine learning

**Autorisé** : « automatisations » (catalogue), « Automatex », pages `/automatisation-*`.

### Mots qui convertissent (copy)

« pendant vos visites / sur le chantier » · « répond à votre place » · « 1 lead ≈ 3 500 € » · « 1 chantier récupéré » · souveraineté ligne officielle · « résiliable en 1 mail » · « Nolan à Flers »

---

## Module A — Mobile-first (résumé)

- Design depuis **390×680** ; desktop = adaptation.
- Above fold : **H1 + sous-titre + 1 CTA** sans scroll ; SEO long = **`sr-only`**.
- Avatar Nolan **sous** le texte mobile.
- CTA sticky bas · tap **≥44px** · CTA **≥280px** ou full width.
- Typo : H1 28–32px · body **≥16px** · CTA 17–18px.
- Tarifs : stack ou carrousel · FAQ accordéon 48px · form labels au-dessus · champs 48px.
- Perf : WebP · lazy · dimensions HTML · LCP <2.5s · CLS 0.

---

## Module B — GEO (Princeton 2023, résumé)

- **Direct Answer First** : fait chiffré dans les **200 premiers mots**.
- H2 en **questions** · stats **sourcées** · ton affirmatif · citation **Nolan Hermand** nommé.
- Éviter : keyword stuffing · promo vide · simplification creuse.
- **llms.txt** + **llms-full.txt** à la racine (à créer si absents) · `robots.txt` bots IA **Allow** (déjà GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot).
- NAP identique partout : `Automatex Hub · 50 rue de l'Equerre · 61100 Saint-Georges-des-Groseillers · +33645384233`

---

## Module C — SEO technique (résumé)

- LCP / CLS / INP cibles · contenu tarifs/FAQ dans **HTML exporté** (pas client-only).
- title <60 · meta <155 · H1 unique · canonical · JSON-LD par type de page.
- Maillage : locales → `/immobilier` ou `/btp` · produit → `/accompagnement` · max **3 clics** depuis `/`.
- Intro locale **80–100 mots uniques** par ville.

---

## Blocs opérationnels (index)

| Bloc | Objet |
|------|--------|
| 1 | Hero mobile `/immobilier` · `/btp` |
| 2 | Nav mobile (bottom bar vs hamburger) |
| 3 | Douleurs AVANT/APRÈS + GEO |
| 4 | Tarifs mobile |
| 5 | FAQ GEO (5+5) |
| 6 | Témoignages bêta |
| 7 | Mocks Telegram/SMS |
| 8 | Refonte `/btp` |
| 9 | `/accompagnement` · `/a-propos` |
| 10 | JSON-LD complet |
| 11 | `/llms.txt` · `/llms-full.txt` |
| 12 | Pages `/mandataires-*` |
| 13 | Formulaire `#contact` mobile |
| 14 | Matrice CTA A/B |
| 15 | Audit QA 7 axes pré-commit |

Détail rédactionnel des blocs 1–15 : voir prompt source v3.0 Nolan (archive conversation / export Notion). **Implémenter via PRs** en respectant `REPO-ALIGNMENT-v3.md`.

---

## Plan d'exécution (phases)

1. **Fondations mobile** (2, 1, 13) + audit 15 axes 1–3  
2. **Conversion** (3, 4, 6, 7) + audit axe 4  
3. **Secondaires** (8, 9, 12)  
4. **SEO/GEO infra** (5, 10, 11, 14) + robots/sitemap/NAP  
5. **QA final** (15) + GBP / annuaires / co-citations locales  

---

## Contraintes permanentes

- Test **« maçon 50 ans · 5 s »** sur chaque hero.
- `tel:+33645384233` sur pages conversion.
- Mobile-first · sr-only SEO · sticky CTA.
- Entités : IAD · SAFTI · Capifrance · Orne · Normandie dans 100 premiers mots (pages locales).
- **Ne pas** contredire `lib/pricing.ts`, `lib/hub-nav.ts` `contactHref`, routes dans `SITE-ROUTES-MEMORY.md`.

---

*Fin mémo compressé — v3.0*
