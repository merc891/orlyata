#!/usr/bin/env node
/**
 * token-audit.js — scans CSS files for hardcoded values.
 * Exit 1 if errors found (CI-ready).
 *
 * Usage: node scripts/token-audit.js [--dir src]
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const ROOT = process.argv[2] === '--dir' ? process.argv[3] : 'src';

// ─── Patterns ────────────────────────────────────────────────────────────────

const ERRORS = [
  {
    name: 'hardcoded-hex',
    re: /(?<![a-z-])color\s*:\s*#[0-9a-fA-F]{3,8}/g,
    message: 'Hardcoded hex color — use a --color-* token',
  },
  {
    name: 'hardcoded-rgb',
    re: /(?<![a-z-])(?:color|background)[^:]*:\s*rgba?\([^)]+\)/g,
    message: 'Hardcoded rgba/rgb color — use a --color-* token',
    suggest: (match) => {
      const m = match.toLowerCase();
      if (m.includes('255,255,255')) {
        const alpha = parseFloat(m.match(/[\d.]+\)$/)?.[0] ?? '1');
        if (alpha <= 0.1) return '--color-surface-glass or --color-border-subtle';
        if (alpha <= 0.2) return '--color-surface-glass-hover';
        if (alpha <= 0.45) return '--color-text-inverse-label';
        if (alpha <= 0.55) return '--color-text-inverse-muted';
        if (alpha <= 0.65) return '--color-text-inverse-sub';
        if (alpha <= 0.75) return '--color-text-inverse-dim';
        if (alpha <= 0.85) return '--color-text-inverse-soft';
        if (alpha <= 0.92) return '--color-surface-overlay';
        return '--color-surface-play';
      }
      if (m.includes('0,0,0') || m.includes('10,10,10')) {
        const alpha = parseFloat(m.match(/[\d.]+\)$/)?.[0] ?? '1');
        if (alpha <= 0.06) return '--color-surface-hover';
        if (alpha <= 0.08) return '--color-divider or --color-border';
        if (alpha <= 0.12) return '--color-border';
        if (alpha <= 0.3) return '--color-text-placeholder';
        if (alpha <= 0.45) return '--color-surface-thumb';
        if (alpha <= 0.55) return '--color-text-muted-on-light';
        if (alpha <= 0.65) return '--color-surface-scrim';
        if (alpha <= 0.72) return '--color-text-sub-on-light';
        if (alpha <= 0.78) return '--color-black-75';
        if (alpha <= 0.85) return '--color-text-nav';
        return '--color-black-80';
      }
      return 'a --color-* semantic token';
    },
  },
  {
    name: 'hardcoded-font-weight',
    re: /font-weight\s*:\s*[0-9]+/g,
    message: 'Hardcoded font-weight — use var(--font-weight-regular) or define a new token',
  },
];

const WARNINGS = [
  {
    name: 'hardcoded-transition',
    re: /transition\s*:[^;]*\d+\.?\d*s(?!\s*var)/g,
    message: 'Raw duration — use var(--transition-fast/base/slow)',
  },
  {
    name: 'hardcoded-z-index',
    re: /z-index\s*:\s*[0-9]+/g,
    message: 'Raw z-index — use var(--z-above/sticky/overlay/modal)',
    skip: /z-index\s*:\s*0/,
  },
];

// ─── File walker ─────────────────────────────────────────────────────────────

function walkCSS(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) results.push(...walkCSS(full));
    else if (entry.endsWith('.css') && !entry.includes('tokens.css')) results.push(full);
  }
  return results;
}

// ─── Main ────────────────────────────────────────────────────────────────────

let totalErrors = 0;
let totalWarnings = 0;
const fileScores = {};

const files = walkCSS(ROOT);

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  const lines = src.split('\n');
  const rel = relative(ROOT, file);
  let fileErrors = 0;
  let fileWarnings = 0;

  for (const { name, re, message, suggest, skip } of ERRORS) {
    re.lastIndex = 0;
    for (const line of lines) {
      const lineNo = lines.indexOf(line) + 1;
      let m;
      re.lastIndex = 0;
      while ((m = re.exec(line)) !== null) {
        const suggestion = suggest ? suggest(m[0]) : undefined;
        console.log(
          `\x1b[31mERROR\x1b[0m ${rel}:${lineNo}  [${name}]  ${m[0].trim()}`
        );
        console.log(`       → ${message}${suggestion ? ': ' + suggestion : ''}`);
        fileErrors++;
        totalErrors++;
      }
    }
  }

  for (const { name, re, message, skip } of WARNINGS) {
    re.lastIndex = 0;
    for (const line of lines) {
      const lineNo = lines.indexOf(line) + 1;
      if (skip && skip.test(line)) continue;
      let m;
      re.lastIndex = 0;
      while ((m = re.exec(line)) !== null) {
        console.log(
          `\x1b[33mWARN \x1b[0m ${rel}:${lineNo}  [${name}]  ${m[0].trim()}`
        );
        console.log(`       → ${message}`);
        fileWarnings++;
        totalWarnings++;
      }
    }
  }

  if (fileErrors + fileWarnings > 0) {
    fileScores[rel] = { errors: fileErrors, warnings: fileWarnings };
  }
}

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log('\n── Token audit summary ──────────────────────────────');
if (Object.keys(fileScores).length === 0) {
  console.log('\x1b[32m✓ Zero violations. Design system is clean.\x1b[0m');
} else {
  const sorted = Object.entries(fileScores).sort((a, b) =>
    b[1].errors + b[1].warnings - (a[1].errors + a[1].warnings)
  );
  console.log('Files with most violations:');
  for (const [f, { errors, warnings }] of sorted) {
    console.log(`  ${f}  errors:${errors}  warnings:${warnings}`);
  }
}
console.log(`\nTotal: \x1b[31m${totalErrors} errors\x1b[0m  \x1b[33m${totalWarnings} warnings\x1b[0m`);

process.exit(totalErrors > 0 ? 1 : 0);
