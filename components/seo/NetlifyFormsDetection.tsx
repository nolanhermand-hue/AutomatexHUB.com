/** Formulaires cachés pour détection Netlify au build (export statique). Ne pas supprimer. */
export function NetlifyFormsDetection() {
  return (
    <>
      <form name="contact" data-netlify="true" data-netlify-honeypot="company_website" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="prenom" />
        <input name="telephone" />
        <input name="email" />
        <select name="secteur">
          <option value="artisan">artisan</option>
        </select>
        <select name="zone_orne">
          <option value="61">61</option>
        </select>
        <input name="company_website" />
      </form>
      <form name="contact-accompagnement" data-netlify="true" data-netlify-honeypot="company_website" hidden>
        <input type="hidden" name="form-name" value="contact-accompagnement" />
        <input name="prenom" />
        <input name="telephone" />
        <select name="activite">
          <option value="diagnostiqueur">Diagnostiqueur immobilier</option>
        </select>
        <input name="company_website" />
      </form>
    </>
  );
}
