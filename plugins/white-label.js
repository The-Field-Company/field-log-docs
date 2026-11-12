const fs = require('node:fs/promises');
const path = require('node:path');

const GENERATOR_META = /<meta name=generator content="Docusaurus[^"]*">/g;

// Base-url diagnostic banner rendered by core on every page. It only shows when
// the site fails to boot, but its markup still names the vendor.
const BASE_URL_BANNER =
  /<script data-rh=true>document\.addEventListener\("DOMContentLoaded",function\(\)\{void 0===window\.docusaurus[\s\S]*?<\/script>/g;

/**
 * Strip vendor chrome from the generated HTML: the generator meta tag and the
 * base-url diagnostic banner hard-coded by Docusaurus core.
 */
function whiteLabel(html) {
  return html.replace(GENERATOR_META, '').replace(BASE_URL_BANNER, '');
}

/** @param {string} dir @returns {Promise<string[]>} */
async function htmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const nested = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(full);
      return entry.name.endsWith('.html') ? [full] : [];
    }),
  );

  return nested.flat();
}

/**
 * Rewrite every generated page after the static build so the deployed HTML
 * carries no vendor branding.
 */
module.exports = function whiteLabelPlugin() {
  return {
    name: 'fieldlog-white-label',

    /** @param {{outDir: string}} context */
    async postBuild({ outDir }) {
      const files = await htmlFiles(outDir);

      await Promise.all(
        files.map(async (file) => {
          const html = await fs.readFile(file, 'utf8');
          const stripped = whiteLabel(html);
          if (stripped !== html) await fs.writeFile(file, stripped);
        }),
      );
    },
  };
};
