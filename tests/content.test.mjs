import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const canonical = await readFile(new URL('../docs/memoria-descriptiva-allsetic.md', import.meta.url), 'utf8');

test('la memoria contiene las 22 secciones en orden', () => {
  const numbers = [...canonical.matchAll(/^## (\d{1,2})\. /gm)].map((match) => Number(match[1]));
  assert.deepEqual(numbers, Array.from({ length: 22 }, (_, index) => index + 1));
});

test('el posicionamiento y el promotor son correctos', () => {
  assert.match(canonical, /consultoría técnica especializada/i);
  assert.match(canonical, /Kevin Joel Valdivieso Ordóñez/);
  assert.match(canonical, /principalmente remota/i);
});

test('ofertas, plazos y precios están marcados como hipótesis', () => {
  assert.match(canonical, /AI Process & Automation Audit[\s\S]*1–2 semanas[\s\S]*2\.500–4\.000 € \[HIPÓTESIS HYP-A01\]/);
  assert.match(canonical, /AI Agent Sprint[\s\S]*2–4 semanas[\s\S]*5\.000–9\.000 € \[HIPÓTESIS HYP-A02\]/);
  assert.match(canonical, /Managed AI Automation[\s\S]*2\.000–5\.000 €\/mes \[HIPÓTESIS HYP-A03\]/);
  assert.match(canonical, /no representan ventas obtenidas ni facturación garantizada/i);
});

test('la inversión no contiene importes inventados', () => {
  const section = canonical.match(/## 15\. Inversión prevista([\s\S]*?)## 16\./)?.[1] ?? '';
  assert.ok(section);
  assert.equal((section.match(/Pendiente de presupuesto/g) ?? []).length, 11);
  assert.match(section, /no confirma por sí sola su admisibilidad/i);
});
