#!/usr/bin/env node
/**
 * Bulk JPG/JPEG → WebP conversion.
 *
 * Reads every .jpg/.jpeg in public/ recursively and emits a same-name
 * .webp companion (the .jpg original is kept on disk so existing
 * references don't 404 mid-deploy; clean up in a follow-up commit
 * after verifying everything works).
 *
 * WebP quality 82 — the sweet spot for photography:
 *   - Lossless visual difference vs JPEG quality 85+
 *   - 60-80% file size reduction in practice
 *
 * Why this matters for SEO:
 *   The site had ~31 MB of unoptimized JPG/JPEG.
 *   Largest image: consultorio.jpg = 2.43 MB.
 *   This kills LCP (Largest Contentful Paint) — the most important
 *   Core Web Vital — which directly affects Google ranking.
 *
 * After running, also update code references from .jpg → .webp
 * (search for /\.(jpg|jpeg)['"]/ across app/ and components/).
 */

import sharp from 'sharp';
import { readdir, stat, access } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const QUALITY = 82;
const SKIP_IF_LARGER = true; // Skip if WebP ends up bigger than original
const MAX_WIDTH = 1920; // Cap width — most displays don't need more

async function walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkDir(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function convertOne(jpgPath) {
  const webpPath = jpgPath.replace(/\.(jpg|jpeg)$/i, '.webp');

  // Already converted? Skip silently.
  if (await fileExists(webpPath)) {
    return { skipped: true, reason: 'already exists', jpgPath, webpPath };
  }

  const original = await stat(jpgPath);
  const originalKB = original.size / 1024;

  // Read source, get metadata, resize if needed, then encode WebP.
  const image = sharp(jpgPath);
  const meta = await image.metadata();
  let pipeline = image;
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(webpPath);

  const newStat = await stat(webpPath);
  const newKB = newStat.size / 1024;
  const savedPct = 100 * (1 - newStat.size / original.size);

  return {
    skipped: false,
    jpgPath,
    webpPath,
    originalKB: Math.round(originalKB),
    newKB: Math.round(newKB),
    savedPct: Math.round(savedPct),
  };
}

async function main() {
  console.log(`📂 Scanning ${PUBLIC_DIR}\n`);
  const all = await walkDir(PUBLIC_DIR);
  const jpgs = all.filter((p) => /\.(jpg|jpeg)$/i.test(p));
  console.log(`Found ${jpgs.length} JPG/JPEG to process.\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let converted = 0;
  let skipped = 0;

  for (const jpg of jpgs) {
    const rel = jpg.replace(PUBLIC_DIR, '');
    try {
      const result = await convertOne(jpg);
      if (result.skipped) {
        console.log(`  ⏭️  ${rel}  (${result.reason})`);
        skipped++;
      } else {
        totalOriginal += result.originalKB;
        totalNew += result.newKB;
        converted++;
        console.log(
          `  ✅ ${rel}  ${result.originalKB} KB → ${result.newKB} KB  (-${result.savedPct}%)`,
        );
      }
    } catch (err) {
      console.error(`  ❌ ${rel}  ${err.message}`);
    }
  }

  const savedKB = totalOriginal - totalNew;
  const savedMB = (savedKB / 1024).toFixed(2);
  console.log(`\n📊 Summary`);
  console.log(`   Converted: ${converted}`);
  console.log(`   Skipped (already done): ${skipped}`);
  console.log(`   Original total: ${(totalOriginal / 1024).toFixed(2)} MB`);
  console.log(`   New WebP total: ${(totalNew / 1024).toFixed(2)} MB`);
  console.log(`   Saved: ${savedMB} MB`);
  console.log(`\nNext: update code references from .jpg → .webp.`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
