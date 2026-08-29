import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const canonical = await readFile(new URL('../docs/memoria-descriptiva-allsetic.md', import.meta.url), 'utf8');

test('la memoria contiene las 22 secciones en orden', () => {
  const numbers = [...canonical.matchAll(/^## (\d{1,2})\. /gm)].map((match) => Number(match[1]));
  assert.deepEqual(numbers, Array.from({ length: 22 }, (_, index) => index + 1));
});

test('identifica proyecto, promotor y local propio', () => {
  assert.match(canonical, /consultoría tecnológica especializada/i);
  assert.match(canonical, /Kevin Joel Valdivieso Ordóñez/);
  assert.match(canonical, /local comercial propio/i);
  assert.match(canonical, /prestación parcial en remoto/i);
});

test('ofertas y precios siguen como hipótesis', () => {
  assert.match(canonical, /AI Process & Automation Audit[\s\S]*1–2 semanas[\s\S]*2\.500–4\.000 € \[HIPÓTESIS HYP-A01\]/);
  assert.match(canonical, /AI Agent Sprint[\s\S]*2–4 semanas[\s\S]*5\.000–9\.000 € \[HIPÓTESIS HYP-A02\]/);
  assert.match(canonical, /Managed AI Automation[\s\S]*2\.000–5\.000 €\/mes \[HIPÓTESIS HYP-A03\]/);
  assert.match(canonical, /no representan ventas obtenidas ni facturación garantizada/i);
});

test('la inversión, financiación y brecha están reconciliadas', () => {
  assert.match(canonical, /Usos cuantificados: 42\.738,84 € más pendientes/);
  assert.match(canonical, /29\.000 € \[ESTIMADO — PENDIENTE DE RESOLUCIÓN\]/);
  assert.match(canonical, /brecha mínima[^\n]*\*\*1\.738,84 €\*\*/i);
  assert.match(canonical, /no confirma por sí sola su admisibilidad/i);
});

test('no presenta operaciones como ejecutadas', () => {
  assert.match(canonical, /no ha adquirido, reservado ni pagado el local/i);
  assert.match(canonical, /no se ha adquirido, encargado, recibido ni pagado ningún equipo/i);
  assert.match(canonical, /No es proforma ni acredita/i);
});
