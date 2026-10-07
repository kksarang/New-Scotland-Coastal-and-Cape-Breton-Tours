/**
 * Lightweight checks for enquiry helpers (no network). Run: node scripts/test-enquiry-payload.mjs
 */
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'src/lib/enquirySubmit.js'), 'utf8');

assert.match(src, /normalizeVisitorEmail/);
assert.match(src, /payload\.email/);
assert.match(src, /formspree\.io\/f\//);
assert.doesNotMatch(src, /password|smtp|gmail.*app/i);

function normalizeVisitorEmail(value) {
  return String(value || '').trim().toLowerCase();
}

assert.equal(normalizeVisitorEmail('  User@Example.COM '), 'user@example.com');

console.log('enquiry module static checks passed');
