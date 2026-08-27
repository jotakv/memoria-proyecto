import { spawnSync } from 'node:child_process';

const files = [
  'assets/app.js',
  'scripts/build.mjs',
  'scripts/serve.mjs',
  'scripts/typecheck.mjs',
  'scripts/validate.mjs',
  'tests/content.test.mjs',
  'tests/site.test.mjs',
];

for (const file of files) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log(`Sintaxis validada en ${files.length} archivos JavaScript.`);
