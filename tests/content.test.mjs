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
  assert.match(canonical, /componente remota/i);
});

test('ofertas, plazos y precios están marcados como hipótesis', () => {
  assert.match(canonical, /AI Process & Automation Audit[\s\S]*1–2 semanas[\s\S]*2\.500–4\.000 € \[HIPÓTESIS HYP-A01\]/);
  assert.match(canonical, /AI Agent Sprint[\s\S]*2–4 semanas[\s\S]*5\.000–9\.000 € \[HIPÓTESIS HYP-A02\]/);
  assert.match(canonical, /Managed AI Automation[\s\S]*2\.000–5\.000 €\/mes \[HIPÓTESIS HYP-A03\]/);
  assert.match(canonical, /no representan ventas obtenidas ni facturación garantizada/i);
});

test('la inversión vigente concilia fuentes, usos y control de liquidez', () => {
  const section = canonical.match(/## 15\. Inversión prevista([\s\S]*?)## 16\./)?.[1] ?? '';
  assert.ok(section);
  assert.match(section, /Media estadística[\s\S]*36\.975,00 €/i);
  assert.match(section, /46\.370,52 €/);
  assert.match(section, /22\.257,62 €/);
  assert.match(section, /PENDIENTE DE RESOLUCIÓN \/ NO CONCEDIDO \/ NO COBRADO/);

  const viability = canonical.match(/## 18\. Viabilidad([\s\S]*?)## 19\./)?.[1] ?? '';
  assert.match(viability, /7\.200,00 €/);
  assert.match(viability, /2\.312,90 €/);
  assert.match(viability, /no un déficit definitivo/i);
});
