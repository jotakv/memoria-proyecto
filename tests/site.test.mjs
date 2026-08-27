import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('la aplicación expone 22 secciones y su navegación', () => {
  assert.equal((html.match(/data-document-section/g) ?? []).length, 22);
  assert.equal((html.match(/data-nav-link/g) ?? []).length, 22);
  for (let number = 1; number <= 22; number += 1) {
    const id = `seccion-${String(number).padStart(2, '0')}`;
    assert.match(html, new RegExp(`id="${id}"`));
    assert.match(html, new RegExp(`href="#${id}"`));
  }
});

test('metadatos, impresión y controles accesibles están presentes', () => {
  assert.match(html, /<title>Allsetic AI Automation Studio — Memoria descriptiva<\/title>/);
  assert.match(html, /property="og:title"/);
  assert.match(html, /data-print/);
  assert.match(html, /aria-controls="indice"/);
  assert.match(html, /Saltar al contenido/);
  assert.match(html, /Promotor: Kevin Joel Valdivieso Ordóñez/);
});

test('los recursos internos referenciados existen', async () => {
  const targets = [...html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)]
    .map((match) => match[1])
    .filter((target) => !/^https?:/.test(target));
  for (const target of targets) {
    await assert.doesNotReject(access(new URL(`../${target}`, import.meta.url)), target);
  }
});
