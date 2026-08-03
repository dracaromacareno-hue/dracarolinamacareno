#!/usr/bin/env node
const HOST = 'dracarolinamacareno.com';
/**
 * Clave rotada el 3-ago-2026. La anterior (088cb93a...) devolvía 403
 * "UserForbiddedToAccessSite" en Bing y en api.indexnow.org, mientras Yandex la
 * aceptaba sin problema.
 *
 * No era un bloqueo del dominio: probando con una clave inventada, Bing
 * respondía 202. O sea que Bing rechazaba ESA clave en concreto, no el sitio.
 * Lo más probable es que quedara registrada para el dominio `.co` viejo, así
 * que Bing considera que no somos dueños de ella para el `.com`.
 *
 * Rotar no necesita cuenta ni permiso de nadie: en IndexNow la clave se
 * autovalida sirviéndola en texto plano desde la raíz del dominio, y eso es la
 * prueba de propiedad. El archivo vive en public/<clave>.txt y su contenido
 * tiene que ser la clave, sola y sin nada más.
 *
 * El archivo de la clave vieja se deja en public/ por si algún servicio quedó
 * apuntando ahí; no estorba y no cuesta nada.
 */
const KEY = '4bdf03c765b6c813fb490231aa7a3fa7';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
// The sitemap is generated dynamically by Next.js (app/sitemap.ts) and is only
// served at runtime — there is no static public/sitemap.xml. So we fetch the
// live sitemap from the deployed domain instead of reading a local file.
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const ENDPOINTS = [
  { name: 'Bing',   url: 'https://www.bing.com/indexnow' },
  { name: 'Yandex', url: 'https://yandex.com/indexnow' },
  { name: 'IndexNow API', url: 'https://api.indexnow.org/IndexNow' },
];

function extractUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const url = m[1].trim();
    if (url.startsWith(`https://${HOST}`)) urls.push(url);
  }
  return Array.from(new Set(urls));
}

async function submit(endpoint, urlList) {
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  try {
    const res = await fetch(endpoint.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    const text = await res.text().catch(() => '');
    return { name: endpoint.name, status: res.status, ok: res.ok, body: text.slice(0, 200) };
  } catch (err) {
    return { name: endpoint.name, status: 0, ok: false, body: String(err) };
  }
}

async function fetchSitemap(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'indexnow-submit/1.0' } });
  if (!res.ok) throw new Error(`Sitemap fetch failed: HTTP ${res.status} for ${url}`);
  return res.text();
}

async function main() {
  console.log(`Fetching live sitemap: ${SITEMAP_URL}`);
  const xml = await fetchSitemap(SITEMAP_URL);
  const urls = extractUrls(xml);
  if (urls.length === 0) {
    console.error('No URLs found in sitemap.xml');
    process.exit(1);
  }
  console.log(`Submitting ${urls.length} URLs from sitemap to IndexNow endpoints...`);
  console.log(`Key file expected at: ${KEY_LOCATION}\n`);

  const batches = [];
  for (let i = 0; i < urls.length; i += 10000) batches.push(urls.slice(i, i + 10000));

  for (const endpoint of ENDPOINTS) {
    for (const batch of batches) {
      const result = await submit(endpoint, batch);
      const tag = result.ok ? 'OK' : 'FAIL';
      console.log(`[${tag}] ${result.name} -> HTTP ${result.status} (${batch.length} URLs)`);
      if (!result.ok && result.body) console.log(`       ${result.body}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
