# 100/100 — Protocoles d'exécution (CRO + Tech + Analytics)

Ce document complète l'implémentation code par les **plans d'exécution opérationnels**
qui ne peuvent pas vivre uniquement dans la base de code (tests A/B, audits manuels,
dashboards externes, validation utilisateurs réels).

---

## D13 — A/B test CTA hero (lift > 15 %)

**Variantes**
- A (contrôle) : « Réserver ma démo 15 min »
- B (urgence) : « Réserver ma démo cette semaine »
- C (résultat) : « Ne plus perdre un seul lead »

**Métrique primaire** : taux de clic sur le bouton (`data-analytics-cta="hero_primary"`).
**Métrique secondaire** : taux de soumission formulaire (`formulaire_soumis`).
**Critère stop** : lift > 15 % avec p < 0,05 (calcul Bayesian, min 200 visiteurs / variante).
**Outil** : Plausible Goals + GrowthBook (gratuit), ou alternative VWO.
**Durée min** : 14 jours (couvre 2 cycles hebdo).

---

## D14 — A/B test headline H1

**Variantes**
- A (contrôle, loss-frame) : « Ne perdez plus jamais un lead à 3 500 € »
- B (loss-frame alt) : « Vos leads vous échappent. On les rattrape. »
- C (gain-frame) : « + 1 vente / mois. Sans rien changer. »

Même protocole que D13. Variable canonique : `--ab-headline`.

---

## E15 — Plan témoignage vidéo (3 mois)

| Mois | Étape | Livrable |
|---|---|---|
| M1 | Onboarding 3 mandataires (offert) | Trois clients pilotes en Normandie |
| M2 | Suivi mensuel — relevé chiffres avant/après | 1 chiffre clé par client |
| M3 | Tournage 90s par client (smartphone + mic-cravate, 250 €) | 3 témoignages bruts |
| M3+1 | Montage + sous-titres dynamiques | 3 vidéos publiables |
| M3+2 | Intégration `/components/sections/SocialProof.tsx` | Section témoignages refaite |

---

## F9 — Test suppression du champ « Réseau »

**Hypothèse** : retirer le `select` réseau augmente le taux de conversion formulaire
de 15-25 % (Hick's law).

**Protocole** : créer une route `/test-form-court` avec le formulaire sans réseau,
diriger 50 % du trafic Google Ads dessus pendant 14 jours. Comparer
`formulaire_soumis` sur les deux URLs.

---

## F15 — Preview multi-devices (avant chaque release)

Devices cibles :
1. iPhone SE (320×568) — pire cas mobile
2. iPhone 12 (390×844) — médiane usagers
3. iPad Mini (768×1024) — tablettes
4. MacBook Pro 14" (1512×945) — desktop principal usage Nolan
5. Écran 4K (3840×2160) — vérifier l'absence d'agrandissement disgracieux

Outil : `npx playwright test scripts/device-test.mjs` (déjà en place dans le repo).

---

## G6 — `loading="lazy"` (audit hors-fold)

Audit du repo : seul `<Image>` Next.js est utilisé (Contact founder).
Toutes les images hors-fold sont déjà optimisées par Next (`priority={false}`).
Aucun `<img>` brut. ✓

---

## G8 — Bundle < 150 kb (à viser)

État actuel (build du 18/05/2026) : **First Load JS 232 kB** pour `/`.
Dépassement principal : `chunks/4bd1b696 = 54.2 kB` (Framer Motion + GSAP).

**Plan de réduction (à itérer)** :
1. Charger Framer Motion en `dynamic` dans Pricing + Navbar uniquement.
2. Splitter le bundle GSAP via dynamic import du ScrollTrigger (utilisé seulement dans Solution).
3. Remplacer `lenis` (12 kB) par un scroll natif `scroll-behavior: smooth` si tolérable.
4. Tree-shake `@react-three/drei` (importer composant par composant).

---

## G10 — WebP ≤ 100 ko

Tous les assets dans `/public/assets/images/` doivent passer :
```bash
cwebp -q 82 input.png -o output.webp
```
Cible : og-image.png (1200×630) → og-image.webp ≤ 100 ko.
Cible : nolan-placeholder.png → nolan.webp ≤ 60 ko.

---

## G13 — Lighthouse 90+ (validation post-déploiement)

Commande post-déploiement :
```bash
npx lighthouse https://automatex-hub.com \
  --preset=mobile \
  --output=json \
  --output=html \
  --output-path=./.lighthouse
```
Scores cibles : Perf ≥ 90 / Acc ≥ 95 / Best Practices ≥ 95 / SEO ≥ 100.

---

## G14 — Test 4G (Throttling)

DevTools → Network → throttling « Slow 4G » + CPU 4× slowdown.
LCP cible : < 2,5 s. Si > 4 s, retravailler le hero (taille image fallback,
réduire JS tier party).

---

## H14 — Audit alt text complet

Seules images du site :
- Hero : fond WebGL/CSS (décoratif, `aria-hidden`) ✓
- Contact : portrait Nolan (alt descriptif présent) ✓
- OG image : `/assets/images/og-image.png` (alt côté metadata) ✓

Tous les SVG inline sont `aria-hidden` ou décoratifs sans signification informative.

---

## I5 — Funnel de conversion (Plausible Goals)

À configurer dans Plausible :
1. `page_view` `/` (top-of-funnel)
2. `cta_clique` props.origin=`hero_primary` (mid-funnel)
3. `cta_clique` props.origin=`pricing_pro` (intent)
4. `offre_vue` props.offer=`pro` (consideration)
5. `formulaire_soumis` (bottom-of-funnel)
6. `page_view` `/merci` (conversion)

Visualisation : Plausible Funnels (payant) ou export CSV → Google Sheets.

---

## I6 — Baseline 30 jours

Avant tout A/B, mesurer 30 jours :
- Sessions / jour (médiane)
- Taux de conversion global
- Sources principales (Plausible Top Sources)
- Pages de sortie (Plausible Exits)
- Heatmap Clarity (zones cliquées / scroll dead zones)

---

## I7 / I8 / I9 — Roadmap A/B (3 mois)

| Semaine | Test | Hypothèse |
|---|---|---|
| S1-2 | I7 : headline H1 (D14) | Loss-frame > Gain-frame de 20 % |
| S3-4 | I8 : couleur CTA | Cta orange/jaune > vert de 10 % |
| S5-6 | I9 : video teaser vs photo | Video augmente conversion de 15 % |
| S7-8 | Formulaire court (F9) | -1 champ = +15-25 % conversion |
| S9-10 | Garantie 14 j vs 30 j | 30 j > 14 j de 5 % |
| S11-12 | Pricing toggle annuel par défaut | Annual default = +30 % ARPU |

---

## I12 — Dashboard KPI (Notion ou Google Data Studio)

Métriques à monitorer quotidiennement :
- **Acquisition** : sessions, sources, taux de rebond
- **Engagement** : pages/session, scroll depth ≥ 75 %, durée session
- **Conversion** : taux clic CTA hero, taux soumission form, taux validation démo
- **Économie** : CAC (€/lead), MRR, churn, LTV
- **Qualité** : NPS sondage post-onboarding, satisfaction 14 j

Seuils alerte (cf. `lib/constants.ts` → `CRO_THRESHOLDS`) :
- Critique : conv < 1,5 % (refondre)
- Acceptable : 4 %
- Bon : ≥ 5 %
- CAC plafond : 300 €/lead

---

## I15 — Suivi CAC (manuel)

Google Sheet partagé avec colonnes :
- Date | Source | Dépense | Sessions | Leads | Démos tenues | Ventes | CAC | LTV

Mise à jour hebdo le vendredi 16 h, revue mensuelle.

---

## J7 — Audit RGAA (à faire par accessibilité.fr ou tota11y)

Checklist auto-réalisable :
- [ ] Toutes les images ont un `alt` non vide ou `aria-hidden`
- [ ] Tous les SVG décoratifs ont `aria-hidden`
- [ ] Tous les boutons et liens ont du texte ou un `aria-label`
- [ ] Contraste texte ≥ 4,5:1 (WCAG AA)
- [ ] Navigation clavier complète (Tab, Enter, Esc)
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Formulaires : `<label>` lié à `<input>` (htmlFor / id)
- [ ] Erreurs annoncées via `aria-live`
- [ ] Lang `fr` sur `<html>`

Outils : axe DevTools (Chrome) + Tota11y bookmarklet.

---

## J8 — Audit SVG `aria-hidden`

État du repo après cette release :
- Tous les SVG inline (Hero, Benefits, GuaranteeXL, FAQ, Footer) portent `aria-hidden`.
- Aucun SVG porteur d'information unique sans alternative texte.

---

## J9 — Navigation au clavier

- `:focus-visible` global via `globals.css` (outline cta).
- Tous les boutons et liens (Button.tsx, Navbar, FAQ) ont focus-visible.
- Tab order naturel respecté (pas de `tabIndex` positif).
- Skip-to-content : à ajouter en prochaine itération (`<a href="#main">`).

---

## J15 — HTML valide

Validation post-build :
```bash
npm run build
npx html-validate out/index.html
```

Erreurs connues à traiter en post-release :
- `next/image` ne fournit pas toujours `width`/`height` dans la sortie statique
  → utiliser l'image OG manuelle si besoin.

---

## H10 — Google Business Profile (à créer manuellement)

Étapes (à faire par Nolan) :
1. Créer le profil sur business.google.com avec NAP exact (Flers 61100).
2. Catégorie principale : « Service d'automatisation ».
3. Sous-catégories : « Conseil en informatique », « Service aux entreprises ».
4. Zones desservies : Orne, Calvados, Manche, Eure, Seine-Maritime.
5. Photos : logo, photo Nolan, captures dashboard.
6. Publier 2 posts / semaine (cas client, conseil pige, étude marché).
7. Demander 1 avis / client onboardé (15 avis cibles à 3 mois).
