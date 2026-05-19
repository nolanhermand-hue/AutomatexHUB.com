/**
 * Netlify Function — H25
 * Reçoit les données du formulaire Contact et les transmet au webhook N8N.
 * L'URL N8N est stockée dans la variable d'environnement N8N_WEBHOOK_URL,
 * jamais exposée dans le bundle client.
 */

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("N8N_WEBHOOK_URL non défini");
    return { statusCode: 500, body: "Configuration manquante" };
  }

  let payload;
  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, body: "JSON invalide" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prenom: payload.prenom ?? "",
        email: payload.email ?? "",
        telephone: payload.telephone ?? "",
        reseau: payload.reseau ?? "",
        source: "automatex-website",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error("N8N webhook error:", response.status);
      return { statusCode: 502, body: "Erreur webhook" };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Erreur fetch N8N:", err);
    return { statusCode: 500, body: "Erreur serveur" };
  }
};
