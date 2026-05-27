/** Formulaires cachés pour détection Netlify au build (export statique). Ne pas supprimer. */
export function NetlifyFormsDetection() {
  return (
    <>
      <form name="contact" data-netlify="true" data-netlify-honeypot="hp-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="prenom" />
        <input name="telephone" />
        <input name="email" />
        <input name="hp-field" />
      </form>
      <form name="contact-accompagnement" data-netlify="true" data-netlify-honeypot="hp-field" hidden>
        <input type="hidden" name="form-name" value="contact-accompagnement" />
        <input name="prenom" />
        <input name="telephone" />
        <select name="activite">
          <option value="mandataire-iad">Mandataire IAD</option>
        </select>
        <input name="hp-field" />
      </form>
    </>
  );
}
