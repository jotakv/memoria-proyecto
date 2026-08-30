import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDirectory, '..');
const sourcePath = join(root, 'docs', 'memoria-descriptiva-allsetic.md');
const outputPath = join(root, 'index.html');
const distDirectory = join(root, 'dist');

const markdown = await readFile(sourcePath, 'utf8');
const sections = extractSections(markdown);

if (sections.length !== 22 || sections.some((section, index) => section.number !== index + 1)) {
  throw new Error('La memoria canónica debe contener exactamente las secciones numeradas del 1 al 22.');
}

if (!markdown.includes('Kevin Joel Valdivieso Ordóñez')) {
  throw new Error('El nombre completo del promotor no aparece correctamente en la memoria.');
}

const page = renderPage(sections);
await writeFile(outputPath, page, 'utf8');

const distRelative = relative(root, distDirectory);
if (distRelative !== 'dist' || !distDirectory.startsWith(`${root}${sep}`)) {
  throw new Error('Ruta de salida no segura.');
}

await rm(distDirectory, { recursive: true, force: true });
await mkdir(join(distDirectory, 'assets'), { recursive: true });
await mkdir(join(distDirectory, 'docs'), { recursive: true });
await writeFile(join(distDirectory, 'index.html'), page, 'utf8');
await copyFile(join(root, 'assets', 'styles.css'), join(distDirectory, 'assets', 'styles.css'));
await copyFile(join(root, 'assets', 'app.js'), join(distDirectory, 'assets', 'app.js'));
await copyFile(join(root, 'manifest.webmanifest'), join(distDirectory, 'manifest.webmanifest'));
await copyFile(sourcePath, join(distDirectory, 'docs', 'memoria-descriptiva-allsetic.md'));

console.log(`Aplicación generada desde la memoria canónica: ${sections.length} secciones.`);

function extractSections(source) {
  const matches = [...source.matchAll(/^## (\d{1,2})\. (.+)$/gm)];
  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? source.length;
    return {
      number: Number(match[1]),
      title: match[2].trim(),
      lines: source.slice(start, end).trim().split(/\r?\n/),
    };
  });
}

function renderPage(documentSections) {
  const navigation = documentSections
    .map(
      ({ number, title }) => `
        <a class="section-nav__link" href="#seccion-${pad(number)}" data-nav-link>
          <span>${pad(number)}</span><span>${escapeHtml(title)}</span>
        </a>`,
    )
    .join('');

  const content = documentSections.map(renderSection).join('\n');

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#08111f">
  <meta name="description" content="Memoria profesional de Allsetic AI Automation Studio, consultoría técnica de IA aplicada, automatización e integración empresarial.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_ES">
  <meta property="og:title" content="Allsetic AI Automation Studio — Memoria descriptiva">
  <meta property="og:description" content="Consultoría técnica de inteligencia artificial aplicada, automatización, Microsoft 365, Dynamics 365, Power Platform, Azure y CRM.">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Allsetic AI Automation Studio — Memoria descriptiva">
  <meta name="twitter:description" content="Memoria profesional de una consultoría técnica de IA aplicada y automatización empresarial.">
  <title>Allsetic AI Automation Studio — Memoria descriptiva</title>
  <link rel="manifest" href="manifest.webmanifest">
  <link rel="stylesheet" href="assets/styles.css">
  <script src="assets/app.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <div class="print-header print-only">
    <strong>ALLSETIC · Memoria descriptiva</strong>
    <span>Promotor: Kevin Joel Valdivieso Ordóñez · 27 de agosto de 2026</span>
  </div>

  <header class="topbar" aria-label="Cabecera principal">
    <a class="wordmark" href="#inicio" aria-label="Allsetic, ir al inicio">ALLSETIC<span>.</span></a>
    <div class="topbar__meta">Memoria descriptiva <span>v1.0</span></div>
    <div class="topbar__actions">
      <a class="source-link" href="docs/memoria-descriptiva-allsetic.md">Ver fuente Markdown</a>
      <button class="button button--primary" type="button" data-print>Imprimir / Guardar como PDF</button>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="indice" data-menu-toggle>
        <span class="menu-button__label">Índice</span>
        <span class="menu-button__bars" aria-hidden="true"></span>
      </button>
    </div>
    <div class="reading-progress" aria-hidden="true"><span data-progress></span></div>
  </header>

  <main>
    <section class="hero" id="inicio" aria-labelledby="hero-title">
      <div class="hero__grid" aria-hidden="true"></div>
      <div class="hero__content">
        <p class="eyebrow">Memoria empresarial · 2026</p>
        <h1 id="hero-title">IA aplicada a procesos que <em>ya existen.</em></h1>
        <p class="hero__lead">Allsetic diseña e implanta automatización, agentes e integraciones sobre el ecosistema Microsoft para convertir trabajo manual e información dispersa en soluciones trazables.</p>
        <div class="hero__facts" aria-label="Datos principales del proyecto">
          <span>Consultoría técnica</span>
          <span>Sede profesional · alcance remoto</span>
          <span>España + Europa</span>
          <span>Inicio como autónomo</span>
        </div>
        <div class="hero__actions">
          <a class="button button--light" href="#seccion-01">Leer la memoria</a>
          <span class="document-state"><i aria-hidden="true"></i> Borrador profesional · datos económicos pendientes</span>
        </div>
      </div>
      <div class="hero__signal" aria-hidden="true">
        <div class="signal-card signal-card--main">
          <span>01 / Diagnóstico</span>
          <strong>Proceso → sistema</strong>
          <div class="signal-line"><i></i><i></i><i></i><i></i></div>
        </div>
        <div class="signal-card signal-card--small">POWER<br>PLATFORM</div>
        <div class="signal-orbit"><span>AI</span></div>
      </div>
    </section>

    <div class="document-shell">
      <aside class="section-nav" id="indice" data-navigation aria-label="Índice de la memoria" aria-hidden="false">
        <div class="section-nav__head">
          <p>Índice</p>
          <span>22 secciones</span>
        </div>
        <nav>${navigation}</nav>
        <div class="legend" aria-label="Leyenda documental">
          <p>Estado de la información</p>
          <span><i class="legend__dot legend__dot--confirmed"></i> Confirmado</span>
          <span><i class="legend__dot legend__dot--hypothesis"></i> Hipótesis</span>
          <span><i class="legend__dot legend__dot--pending"></i> Pendiente</span>
        </div>
      </aside>

      <div class="nav-scrim" aria-hidden="true" data-menu-toggle></div>

      <article class="document" id="contenido" aria-label="Memoria descriptiva de Allsetic">
        <header class="document__intro">
          <div>
            <p class="eyebrow eyebrow--blue">Documento canónico</p>
            <h2>Una propuesta técnica, concreta y defendible.</h2>
          </div>
          <p>Los estados visibles separan hechos aportados, hipótesis y datos que aún requieren evidencia. Los precios son orientativos; no son ventas ni previsiones garantizadas.</p>
        </header>
        ${content}
      </article>
    </div>
  </main>

  <footer class="footer">
    <a class="wordmark wordmark--footer" href="#inicio">ALLSETIC<span>.</span></a>
    <p>Memoria descriptiva · Kevin Joel Valdivieso Ordóñez</p>
    <p>Borrador profesional pendiente de completar datos económicos y administrativos.</p>
  </footer>

  <button class="back-to-top" type="button" aria-label="Volver al inicio" data-back-to-top>↑</button>
  <noscript><p class="noscript">La memoria es completamente legible sin JavaScript. El resaltado del índice y el menú móvil requieren JavaScript.</p></noscript>
</body>
</html>
`;
}

function renderSection(section) {
  const layout = {
    8: 'cards',
    9: 'services',
    12: 'timeline',
    17: 'timeline',
    20: 'cards',
  }[section.number] ?? 'standard';

  const firstSubsection = section.lines.findIndex((line) => /^### /.test(line));
  let body;

  if (firstSubsection === -1) {
    body = renderBlocks(section.lines);
  } else {
    const intro = renderBlocks(section.lines.slice(0, firstSubsection));
    const subsections = [];
    let index = firstSubsection;
    while (index < section.lines.length) {
      const heading = section.lines[index].replace(/^### /, '').trim();
      const next = section.lines.findIndex((line, lineIndex) => lineIndex > index && /^### /.test(line));
      const end = next === -1 ? section.lines.length : next;
      subsections.push(`
        <section class="subsection">
          <h3>${inline(heading)}</h3>
          ${renderBlocks(section.lines.slice(index + 1, end))}
        </section>`);
      index = end;
    }
    body = `${intro}<div class="subsections">${subsections.join('')}</div>`;
  }

  return `<section class="doc-section layout-${layout}" id="seccion-${pad(section.number)}" data-document-section data-section="${section.number}">
    <div class="doc-section__heading">
      <span>${pad(section.number)}</span>
      <h2>${escapeHtml(section.title)}</h2>
    </div>
    <div class="section-content">${body}</div>
  </section>`;
}

function renderBlocks(inputLines) {
  const lines = [...inputLines];
  const output = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      output.push('<hr>');
      index += 1;
      continue;
    }

    if (/^#### /.test(line)) {
      output.push(`<h4>${inline(line.replace(/^#### /, ''))}</h4>`);
      index += 1;
      continue;
    }

    if (/^> ?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^> ?/.test(lines[index])) {
        quote.push(lines[index].replace(/^> ?/, ''));
        index += 1;
      }
      output.push(`<blockquote>${inline(quote.join(' '))}</blockquote>`);
      continue;
    }

    if (isTableStart(lines, index)) {
      const rows = [];
      rows.push(parseTableRow(lines[index]));
      index += 2;
      while (index < lines.length && /^\|.*\|\s*$/.test(lines[index])) {
        rows.push(parseTableRow(lines[index]));
        index += 1;
      }
      const [head, ...body] = rows;
      output.push(`<div class="table-wrap"><table><thead><tr>${head.map((cell) => `<th scope="col">${inline(cell)}</th>`).join('')}</tr></thead><tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }

    if (/^- /.test(line)) {
      const items = [];
      while (index < lines.length && /^- /.test(lines[index])) {
        items.push(lines[index].replace(/^- /, ''));
        index += 1;
      }
      output.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`);
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\. /.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\. /, ''));
        index += 1;
      }
      output.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join('')}</ol>`);
      continue;
    }

    if (/^```/.test(line)) {
      const language = line.replace(/^```/, '').trim();
      const code = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index])) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      output.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ''}>${escapeHtml(code.join('\n'))}</code></pre>`);
      continue;
    }

    const paragraph = [];
    while (index < lines.length && lines[index].trim() && !isBlockBoundary(lines, index)) {
      const hardBreak = /\s{2}$/.test(lines[index]) || /^\*\*/.test(lines[index]);
      paragraph.push(`${inline(lines[index].trim())}${hardBreak ? '<br>' : ' '}`);
      index += 1;
    }
    if (paragraph.length) {
      output.push(`<p>${paragraph.join('').trim()}</p>`);
    } else {
      index += 1;
    }
  }

  return output.join('\n');
}

function isBlockBoundary(lines, index) {
  const line = lines[index];
  return /^(- |\d+\. |> ?|#### |```|---+$)/.test(line) || isTableStart(lines, index);
}

function isTableStart(lines, index) {
  return /^\|.*\|\s*$/.test(lines[index] ?? '') && /^\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(lines[index + 1] ?? '');
}

function parseTableRow(line) {
  return line.trim().replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
}

function inline(value) {
  let result = escapeHtml(value);
  result = result.replace(/\[([^\]]+)]\((https?:\/\/[^\s)]+|[^\s)]+)\)/g, '<a href="$2">$1</a>');
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>');
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  result = result.replace(/\[((?:CONFIRMADO|HIPÓTESIS|PENDIENTE|ESTIMADO|BENCHMARK)[^\]]*)\]/gi, (_, label) => {
    const normalized = label.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const type = normalized.startsWith('confirmado') ? 'confirmed' : normalized.startsWith('hipotesis') ? 'hypothesis' : normalized.startsWith('pendiente') ? 'pending' : 'estimate';
    return `<span class="status status--${type}">${label}</span>`;
  });
  return result;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function pad(number) {
  return String(number).padStart(2, '0');
}
