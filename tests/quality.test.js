import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

function scanFiles(dir, extensions = ['.ts', '.tsx', '.html', '.css', '.md']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === 'dist' || file === '.git') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(scanFiles(fullPath, extensions));
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

test('Enforce zero em-dashes across all source and data files', () => {
  const rootDir = path.resolve('.');
  const files = scanFiles(rootDir);
  const emDashRegex = /\u2014|—/;

  const violations = [];

  for (const filePath of files) {
    if (filePath.endsWith('quality.test.js')) continue;

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      if (emDashRegex.test(line)) {
        violations.push({
          file: path.relative(rootDir, filePath),
          line: index + 1,
          text: line.trim(),
        });
      }
    });
  }

  assert.strictEqual(
    violations.length,
    0,
    `Found em-dashes in source files:\n${violations.map(v => `  ${v.file}:${v.line} -> ${v.text}`).join('\n')}`
  );
});

test('Verify required font links exist in index.html', () => {
  const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8');
  assert.ok(indexHtml.includes('Bricolage+Grotesque'));
  assert.ok(indexHtml.includes('Inter'));
  assert.ok(indexHtml.includes('JetBrains+Mono'));
});

test('Verify favicon.svg exists and is referenced in index.html', () => {
  assert.ok(fs.existsSync(path.resolve('public/favicon.svg')));
  const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8');
  assert.ok(indexHtml.includes('favicon.svg'));
});

test('Verify mobile touch target standards in index.css', () => {
  const css = fs.readFileSync(path.resolve('src/index.css'), 'utf8');
  assert.ok(css.includes('min-height: 44px;'));
  assert.ok(css.includes('transform: scale(0.97)'));
  assert.ok(css.includes('transform: translateY(-2px)'));
});

test('Verify projects catalog contains core live projects', () => {
  const projectsTs = fs.readFileSync(path.resolve('src/data/projects.ts'), 'utf8');
  assert.ok(projectsTs.includes('tier-builder'));
  assert.ok(projectsTs.includes('watch-radar'));
  assert.ok(projectsTs.includes('retro-handhelds-radar'));
  assert.ok(projectsTs.includes('iem-radar'));
  assert.ok(projectsTs.includes('halle-cafes'));

  // Ensure removed projects are not in catalog
  assert.ok(!projectsTs.includes('diana-reyn'));
  assert.ok(!projectsTs.includes('erfurt-trip'));
  assert.ok(!projectsTs.includes('gestekarte-demo'));
  assert.ok(!projectsTs.includes('rail-flow-release-notes'));
  assert.ok(!projectsTs.includes('halle-dash'));
});
