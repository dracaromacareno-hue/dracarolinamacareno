#!/usr/bin/env node
/**
 * Rewrite all in-repo references to .jpg/.jpeg → .webp, but only when
 * the .webp counterpart actually exists on disk. This is the safe
 * follow-up to convert-to-webp.mjs.
 *
 * Refuses to touch:
 *   - URLs pointing at external hosts (we only own images on our domain
 *     and in /public, so any `http(s)://other.com/foo.jpg` is left alone)
 *   - .jpg references whose .webp twin doesn't exist (would 404)
 *   - node_modules, .next, .git (obvious)
 *
 * Logs every change with the source line for review before commit.
 */

import { readdir, readFile, writeFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const SCAN_DIRS = ['app', 'components', 'lib'];
const FILE_EXT_REGEX = /\.(tsx?|jsx?|mjs|cjs)$/;
// Match /something.jpg or /something.jpeg — only path-style refs
// (skips URLs on other hosts because they always have a scheme://).
const IMG_REGEX = /(["'`(,\s])(\/[^"'`)\s]+?)\.(jpg|jpeg)(["'`)\s,])/g;

const IGNORE = new Set(['node_modules', '.next', '.git', 'dist', '.vercel']);

async function walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (IGNORE.has(entry.name)) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkDir(fullPath)));
    } else if (entry.isFile() && FILE_EXT_REGEX.test(entry.name)) {
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

async function processFile(path) {
  const original = await readFile(path, 'utf8');
  const replacements = [];

  // First pass — collect what we'd change and verify the WebP exists.
  const pendingMatches = [];
  let m;
  IMG_REGEX.lastIndex = 0;
  while ((m = IMG_REGEX.exec(original)) !== null) {
    const [full, openDelim, basePath, ext, closeDelim] = m;
    const webpPath = join(PUBLIC_DIR, basePath + '.webp');
    pendingMatches.push({ full, openDelim, basePath, ext, closeDelim, webpPath });
  }

  // Resolve existence checks in parallel.
  const checks = await Promise.all(
    pendingMatches.map((p) => fileExists(p.webpPath)),
  );

  let updated = original;
  for (let i = 0; i < pendingMatches.length; i++) {
    const p = pendingMatches[i];
    if (!checks[i]) {
      replacements.push({
        from: p.basePath + '.' + p.ext,
        to: null,
        skipped: 'no webp counterpart',
      });
      continue;
    }
    const newSnippet = `${p.openDelim}${p.basePath}.webp${p.closeDelim}`;
    // Replace ONLY the first remaining occurrence to handle duplicates correctly.
    updated = updated.replace(p.full, newSnippet);
    replacements.push({ from: p.basePath + '.' + p.ext, to: p.basePath + '.webp' });
  }

  if (updated !== original) {
    await writeFile(path, updated, 'utf8');
  }
  return { path, replacements, changed: updated !== original };
}

async function main() {
  console.log('🔄 Updating image references .jpg/.jpeg → .webp\n');
  const allFiles = [];
  for (const d of SCAN_DIRS) {
    const dir = join(ROOT, d);
    if (await fileExists(dir)) {
      allFiles.push(...(await walkDir(dir)));
    }
  }

  let totalChanged = 0;
  let totalReplaced = 0;
  let totalSkipped = 0;

  for (const file of allFiles) {
    const result = await processFile(file);
    const successes = result.replacements.filter((r) => r.to);
    const skips = result.replacements.filter((r) => r.skipped);
    if (successes.length > 0 || skips.length > 0) {
      const rel = file.replace(ROOT, '');
      console.log(`📝 ${rel}`);
      for (const r of successes) {
        console.log(`   ✅ ${r.from} → ${r.to}`);
        totalReplaced++;
      }
      for (const r of skips) {
        console.log(`   ⏭️  ${r.from}  (${r.skipped})`);
        totalSkipped++;
      }
      if (result.changed) totalChanged++;
    }
  }

  console.log(`\n📊 Summary`);
  console.log(`   Files changed: ${totalChanged}`);
  console.log(`   References rewritten: ${totalReplaced}`);
  console.log(`   References skipped (no .webp): ${totalSkipped}`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
