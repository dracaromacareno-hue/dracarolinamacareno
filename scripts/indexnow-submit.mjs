#!/usr/bin/env node
const HOST = 'dracarolinamacareno.com';
const KEY = '088cb93a795ed910e007103d6785d39e';
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
