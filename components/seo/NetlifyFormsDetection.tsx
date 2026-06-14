/** Formulaires cachés pour détection Netlify au build (export statique). Ne pas supprimer. */
export function NetlifyFormsDetection() {
  return (
    <>
      <form name="contact" data-netlify="true" data-netlify-honeypot="company_website" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="nom" />
        <input name="telephone" />
        <select name="secteur">
          <option value="artisan">artisan</option>
        </select>
        <textarea name="precisions" />
        <input name="company_website" />
      </form>
    </>
  );
}
