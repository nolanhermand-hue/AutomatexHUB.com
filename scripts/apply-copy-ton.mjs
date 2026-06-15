import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const files = [
  "lib/automatisation-cocon-shared.ts",
  "lib/automatisation-cocon.ts",
  "lib/home-copy.ts",
  "lib/constants.ts",
  "lib/villes-normandie.ts",
  "lib/btp-copy.ts",
  "lib/about-page.ts",
  "lib/geo-master-faq.ts",
  "lib/local-pages.ts",
  "lib/live-demo.ts",
  "lib/demo-loaders.ts",
  "lib/immobilier-daily-features.ts",
  "lib/immobilier-accompaniment-copy.ts",
  "lib/automations-catalog.ts",
  "lib/automatisation-ia-tpe-content.ts",
  "lib/vos-donnees-content.ts",
  "lib/json-ld.ts",
  "app/immobilier/page.tsx",
  "app/automatisations/page.tsx",
  "app/cgv/page.tsx",
  "app/mentions-legales/page.tsx",
  "components/sections/Hero.tsx",
  "components/demo/ImmobilierLiveDemoSection.tsx",
  "components/demo/ImmobilierLeadDemoSection.tsx",
  "components/motion/RoiCounter.tsx",
  "components/automatisation-cocon/AutomatisationCoconPilierTemplate.tsx",
  "components/vos-donnees/VosDonneesView.tsx",
];

const skipLine = (line) =>
  /rappel-lead|lead-immobilier|leadFirst|demoId|ProblemIconId|icon:\s*"lead"|id:\s*"leads"|leads-reponses|home-card-logos|leadFirst\?|leading-|storyLead|VALUE_PER_LEAD|loadLeadImmobilier|LeadImmobilier/.test(
    line,
  );

function transformLine(line) {
  if (skipLine(line)) return line;
  let t = line;

  t = t.replace(/Stack complet \+ brique métier/gi, "Ensemble de vos outils + fonction sur mesure");
  t = t.replace(/Leads & réponses/g, "Demandes & réponses");
  t = t.replace(/Leads & appels/g, "Demandes & appels");

  const leadRules = [
    [/leads immobiliers/gi, "demandes immobilières"],
    [/leads entrants/gi, "demandes entrantes"],
    [/leads standards/gi, "demandes standards"],
    [/leads chauds/gi, "demandes chaudes"],
    [/leads en attente/gi, "demandes en attente"],
    [/leads non rappelés/gi, "clients non rappelés"],
    [/leads ratés/gi, "clients ratés"],
    [/leads perdus/gi, "clients perdus"],
    [/leads perdent/gi, "les clients se perdent"],
    [/leads reçus/gi, "demandes reçues"],
    [/leads qui arrivent/gi, "demandes qui arrivent"],
    [/leads SeLoger/gi, "demandes SeLoger"],
    [/un lead SeLoger/gi, "une demande SeLoger"],
    [/lead SeLoger/gi, "demande SeLoger"],
    [/lead formulaire/gi, "demande formulaire"],
    [/lead site/gi, "demande site"],
    [/Lead formulaire/g, "Demande formulaire"],
    [/Lead site/g, "Demande site"],
    [/Lead entrant/g, "Demande entrante"],
    [/Nouveau lead/g, "Nouvelle demande"],
    [/nouveau lead/g, "nouvelle demande"],
    [/Nouveaux leads/g, "Nouvelles demandes"],
    [/nouveaux leads/g, "nouvelles demandes"],
    [/Réponse lead/g, "Réponse client"],
    [/réponse lead/g, "réponse client"],
    [/Lead immobilier/g, "Demande immobilière"],
    [/lead immobilier/g, "demande immobilière"],
    [/réponse leads/gi, "réponse clients"],
    [/Réponse aux leads/gi, "Réponse aux demandes"],
    [/aux leads/gi, "aux demandes"],
    [/des leads/gi, "des clients"],
    [/ces leads/gi, "ces clients"],
    [/un lead/gi, "un client"],
    [/1 lead/gi, "1 client"],
    [/5 leads/gi, "5 clients"],
    [/leads/gi, "clients"],
    [/lead/gi, "client"],
  ];
  for (const [re, rep] of leadRules) t = t.replace(re, rep);

  t = t.replace(/\bworkflows N8N\b/g, "enchaînements N8N");
  t = t.replace(/\bworkflows\b/g, "enchaînements");
  t = t.replace(/\bworkflow\b/g, "enchaînement");

  const pairs = [
    ["Compatible avec ton outil", "Compatible avec votre outil"],
    ["ton logiciel métier", "votre logiciel métier"],
    ["ton logiciel", "votre logiciel"],
    ["ton outil", "votre outil"],
    ["ton téléphone", "votre téléphone"],
    ["ton pack", "votre pack"],
    ["ton process", "votre process"],
    ["ton calendrier", "votre calendrier"],
    ["ton standard", "votre standard"],
    ["ton annuaire", "votre annuaire"],
    ["ton flux", "votre flux"],
    ["ton mobile pro", "votre mobile pro"],
    ["ton numéro", "votre numéro"],
    ["ton périmètre", "votre périmètre"],
    ["ton cas", "votre cas"],
    ["ton métier", "votre métier"],
    ["ton créneau", "votre créneau"],
    ["ton habitude", "votre habitude"],
    ["ta signature", "votre signature"],
    ["ta boîte", "votre boîte"],
    ["ta règle", "votre règle"],
    ["ta place", "votre place"],
    ["ta journée", "votre journée"],
    ["ta disponibilité", "votre disponibilité"],
    ["ta réalité", "votre réalité"],
    ["tes règles", "vos règles"],
    ["tes outils", "vos outils"],
    ["Tes clients", "Vos clients"],
    ["Tes mails", "Vos mails"],
    ["tes mails", "vos mails"],
    ["avec toi", "avec vous"],
    ["Nolan te rappelle", "Nolan vous rappelle"],
    ["te rappelle", "vous rappelle"],
    ["Tu as déjà", "Vous avez déjà"],
    ["tu as vu", "vous avez vu"],
    ["Tu marques", "Vous marquez"],
    ["Tu gardes", "Vous gardez"],
    ["Tu coupes", "Vous coupez"],
    ["Tu restes", "Vous restez"],
    ["Tu poses", "Vous posez"],
    ["Tu livres", "Vous livrez"],
    ["Tu définis", "Vous définissez"],
    ["Tu décides", "Vous décidez"],
    ["Tu fixes", "Vous fixez"],
    ["Tu envoies", "Vous envoyez"],
    ["Tu rappelles", "Vous rappelez"],
    ["Tu reçois", "Vous recevez"],
    ["tu ne décroches", "vous ne décroquez"],
    ["tu manques", "vous manquez"],
    ["tu choisis", "vous choisissez"],
    ["tu valides", "vous validez"],
    ["tu veux", "vous voulez"],
    ["tu autorises", "vous autorisez"],
    ["tu aurais", "vous auriez"],
    ["tu utilises", "vous utilisez"],
    ["tu restes", "vous restez"],
    ["tu montres", "vous montrez"],
    ["tu closes", "vous bouclez"],
    ["tu ouvres", "vous ouvrez"],
    ["tu sais", "vous savez"],
    ["tu fais", "vous faites"],
    ["Tu es sur", "Vous êtes sur"],
    ["Tu es en", "Vous êtes en"],
    ["tu es en", "vous êtes en"],
    ["tu es sur", "vous êtes sur"],
    ["Combien tu perds", "Combien vous perdez"],
    ["pour toi", "pour vous"],
    ["Ce qui tourne pour toi", "Ce qui tourne pour vous"],
    ["prêtes pour ton", "prêtes pour votre"],
    ["sur ta réalité", "sur votre réalité"],
    ["réserver ta démo", "réserver votre démo"],
    ["Choisis ton créneau", "Choisissez votre créneau"],
    ["Tu interviens", "Intervenez-vous"],
    ["à ta place", "à votre place"],
    ["quand tu ne peux", "quand vous ne pouvez"],
    ["quand tu es", "quand vous êtes"],
    ["pendant que tu es", "pendant que vous êtes"],
    ["ce que tu as déjà", "ce que vous avez déjà"],
    ["ce que tu fais", "ce que vous faites"],
    ["sans que tu doives", "sans que vous ayez à"],
    ["Le client appelle. Tu poses.", "Le client appelle. Vous posez."],
    ["Le prospect écrit. Tu es", "Le prospect écrit. Vous êtes"],
    ["tu rappelleras", "vous rappellerez"],
    ["Tes clients ne t'attendent", "Vos clients ne vous attendent"],
    ["t'attendent", "vous attendent"],
    ["t'en souvenir", "vous en souvenir"],
    ["ce que tu utilises déjà", "ce que vous utilisez déjà"],
    ["pour que le soir tu closes", "pour que le soir vous boucliez"],
    ["répondent à ta place quand tu ne peux pas", "répondent à votre place quand vous ne pouvez pas"],
    ["sur le toit, tu ne réponds", "sur le toit, vous ne répondez"],
    ["tu roules toute la journée", "vous roulez toute la journée"],
    ["tu ne vois pas", "vous ne voyez pas"],
    ["on automatise ce qu'il ne fait pas", "nous automatisons ce qu'il ne fait pas"],
    ["Nolan valide avec toi", "Nolan valide avec vous"],
    ["validé avec toi", "validé avec vous"],
    ["Dans ton ", "Dans votre "],
    ["dans ton ", "dans votre "],
    ["sur ton ", "sur votre "],
    ["de ton ", "de votre "],
    ["à ton ", "à votre "],
    ["et ton ", "et votre "],
    ["ta cadence", "votre cadence"],
    ["Je branche ce qui manque sur ce que tu utilises", "Je branche ce qui manque sur ce que vous utilisez"],
    ["m'adapter à ta réalité", "m'adapter à votre réalité"],
    ["Chaque page décrit un cas concret — relance, SMS, client, RDV", "Chaque page décrit un cas concret — relance, SMS, demande, RDV"],
    ["relance, SMS, client, RDV", "relance, SMS, demande, RDV"],
    ["SMS appels manqués, clients, RDV", "SMS appels manqués, demandes, RDV"],
    ["réponse client, prise de RDV", "réponse aux demandes, prise de RDV"],
    ["Mail ou SMS entrant après client ou relance", "Mail ou SMS entrant après demande ou relance"],
    ["Après un client,", "Après une demande,"],
    ["Même mécanique sur un client SeLoger", "Même mécanique sur une demande SeLoger"],
    ["Connaît ta cadence", "Connaît votre cadence"],
    ["ta démo de 30 minutes", "votre démo de 30 minutes"],
    ["Questions avant de réserver ta démo", "Questions avant de réserver votre démo"],
    ["Démo gratuite 30 min sur ton cas", "Démo gratuite 30 min sur votre cas"],
    ["Démo 30 min sur ton cas", "Démo 30 min sur votre cas"],
    ["réponse clients en 90s", "réponse clients en 90 s"],
  ];

  for (const [a, b] of pairs) t = t.split(a).join(b);

  return t;
}

function transform(content) {
  return content
    .split("\n")
    .map((line) => transformLine(line))
    .join("\n");
}

for (const rel of files) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    console.warn("skip missing", rel);
    continue;
  }
  const before = fs.readFileSync(full, "utf8");
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(full, after);
    console.log("updated", rel);
  }
}

const catalogPath = path.join(root, "lib/automations-catalog.ts");
let cat = fs.readFileSync(catalogPath, "utf8");
if (cat.includes('"Demandes & réponses"') && !cat.includes('"Demandes & réponses": "leads-reponses"')) {
  cat = cat.replace(
    /"Demandes & réponses": "demandes-reponses"/g,
    '"Demandes & réponses": "leads-reponses"',
  );
}
if (!cat.includes('"Demandes & réponses": "leads-reponses"')) {
  cat = cat.replace(
    /("Leads & réponses": "leads-reponses")/,
    '"Demandes & réponses": "leads-reponses"',
  );
  cat = cat.replace(/"Leads & réponses"/g, '"Demandes & réponses"');
  cat = cat.replace(/'Leads & réponses'/g, '"Demandes & réponses"');
}
cat = cat.replace(/"Demandes & réponses": "demandes-reponses"/g, '"Demandes & réponses": "leads-reponses"');
fs.writeFileSync(catalogPath, cat);

console.log("done");
