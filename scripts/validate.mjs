import { readFile, readdir } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const canonicalPath = join(root, 'docs', 'memoria-descriptiva-allsetic.md');
const canonical = await readFile(canonicalPath, 'utf8');
const problems = [];

const headings = [...canonical.matchAll(/^## (\d{1,2})\. /gm)].map((match) => Number(match[1]));
if (headings.length !== 22 || headings.some((number, index) => number !== index + 1)) {
  problems.push('La memoria no contiene exactamente las secciones 1–22 en orden.');
}

const required = [
  'Allsetic AI Automation Studio',
  'Kevin Joel Valdivieso Ordóñez',
  'AI Process & Automation Audit',
  'AI Agent Sprint',
  'Managed AI Automation',
  '2.500–4.000 €',
  '5.000–9.000 €',
  '2.000–5.000 €/mes',
  'Pendiente de presupuesto',
  'Copilot Studio',
  'Azure AI Foundry',
];

for (const value of required) {
  if (!canonical.includes(value)) problems.push(`Falta contenido obligatorio: ${value}`);
}

const textFiles = await listTextFiles(root);
const inheritedTerms = [
  'SO' + 'MA',
  'well' + 'ness',
  'holís' + 'tico',
  'holis' + 'tic',
  'yo' + 'ga',
  'medi' + 'tación',
  'centro ' + 'híbrido',
  'membre' + 'sías',
  'bienes' + 'tar',
  'tera' + 'pias',
  'Tina' + 'mus',
  'cambio de ' + 'uso',
];

for (const file of textFiles) {
  const content = await readFile(file, 'utf8');
  for (const term of inheritedTerms) {
    if (content.toLocaleLowerCase('es').includes(term.toLocaleLowerCase('es'))) {
      problems.push(`Referencia incompatible en ${relative(root, file)}: ${term}`);
    }
  }
}

const markdownLinks = [...canonical.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
for (const target of markdownLinks.filter((link) => !/^https?:/.test(link) && !link.startsWith('#'))) {
  const absolute = resolve(join(canonicalPath, '..'), target);
  try {
    await readFile(absolute);
  } catch {
    problems.push(`Enlace interno inexistente en la memoria: ${target}`);
  }
}

if (problems.length) {
  console.error(problems.map((problem) => `- ${problem}`).join('\n'));
  process.exit(1);
}

console.log(`Validación editorial superada en ${textFiles.length} archivos de texto.`);

async function listTextFiles(directory) {
  const result = [];
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (['.git', 'dist', 'node_modules', 'referencias'].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await listTextFiles(path));
    else if (['.css', '.html', '.js', '.json', '.md', '.mjs', '.txt', '.webmanifest'].includes(extname(entry.name))) result.push(path);
  }
  return result;
}
