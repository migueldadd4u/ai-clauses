#!/usr/bin/env node
/**
 * build_pdf.js — PDF del clausulado, generado desde HTML con Chrome headless.
 *
 *   NODE_PATH=$(npm root -g) node herramientas/build_pdf.js
 *
 * Por qué no se convierte el .docx: Pages y Word rompen los recuadros anidados
 * al reconvertir (Pages hinchó el documento a 814 páginas y partió las
 * ligaduras del texto extraíble). Desde HTML el resultado es predecible y
 * conserva el CSS de impresión de la web.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { marked } = require('marked');

const RAIZ = path.resolve(__dirname, '..');
const SRC = path.join(RAIZ, 'clausulado', 'clausulado-ia-deeptech-v3.md');
const TMP = path.join(RAIZ, 'docs', 'descargas', '.imprimir.html');
const OUT = path.join(RAIZ, 'docs', 'descargas', 'clausulado-ia-deeptech-v3.pdf');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

let md = fs.readFileSync(SRC, 'utf8');

/* portada */
// idem: la sección de autoría y declaración de uso de IA no puede quedarse fuera
const corte = md.search(/^## (AUTORÍA|PARTE|ANEXO)/mi);
const portadaMd = corte > 0 ? md.slice(0, corte) : '';
const cuerpoMd = corte > 0 ? md.slice(corte) : md;

const lineas = portadaMd.split('\n').map(l => l.trim()).filter(Boolean);
const h1 = (lineas.find(l => l.startsWith('# ')) || '# ').slice(2);
const h2 = (lineas.find(l => l.startsWith('## ')) || '## ').slice(3);
const resto = lineas.filter(l => !l.startsWith('#') && l !== '---');

function render(src) {
  const bloques = src.split(/^:::\s*pliego\s*$|^:::\s*$/gm);
  const marcas = src.match(/^:::\s*pliego\s*$|^:::\s*$/gm) || [];
  let out = '', dentro = false;
  bloques.forEach((b, i) => {
    out += dentro
      ? `<aside class="pliego"><p class="pliego-et">Texto para el pliego</p>${marked.parse(b, { mangle: false, headerIds: false })}</aside>`
      : marked.parse(b, { mangle: false, headerIds: false });
    if (i < marcas.length) dentro = /pliego/.test(marcas[i]);
  });
  return out;
}

const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70);

const toc = [];
const cuerpo = render(cuerpoMd).replace(/<h([2-3])>(.*?)<\/h\1>/g, (m, lvl, txt) => {
  const plano = txt.replace(/<[^>]+>/g, '').trim();
  const id = slug(plano);
  toc.push({ lvl: +lvl, id, txt: plano });
  return `<h${lvl} id="${id}">${txt}</h${lvl}>`;
});

const indice = toc.map(t =>
  `<li class="i${t.lvl}"><a href="#${t.id}">${t.txt.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</a></li>`
).join('');

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<title>${h1}</title>
<link rel="stylesheet" href="../estilo.css">
<style>
  :root { --ancho: none; }
  body { background: #fff; color: #000; font-size: 10.5pt; }
  main { max-width: none; padding: 0; }
  .portada { text-align: center; padding: 22vh 2cm 0; page-break-after: always; }
  .portada h1 { font-family: var(--serif); font-size: 30pt; color: var(--acento); margin: 0 0 .6cm; line-height: 1.15; }
  .portada h2 { font-family: var(--serif); font-size: 15pt; font-style: italic; color: #555; font-weight: 400; border: 0; margin: 0 0 1.6cm; padding: 0; }
  .portada p { font-size: 10.5pt; color: #333; margin: 0 0 .35cm; }
  .toc { page-break-after: always; padding-top: .5cm; }
  .toc h2 { font-family: var(--serif); font-size: 18pt; color: var(--acento); border: 0; padding: 0; margin: 0 0 .8cm; page-break-before: avoid; }
  .toc ul { list-style: none; padding: 0; margin: 0; font-size: 10pt; }
  .toc li { margin-bottom: .12cm; }
  .toc li.i3 { padding-left: .9cm; color: #444; font-size: 9.5pt; }
  .toc a { color: #000; text-decoration: none; }
  .doc h2 { font-size: 18pt; page-break-before: always; border-top: 0; padding-top: 0; }
  .doc h3 { font-size: 13pt; }
  .doc h4 { font-size: 11pt; }
  @page { size: A4; margin: 2cm 2.2cm 2cm 2.2cm; }
</style>
</head><body class="doc">
<div class="portada">
  <h1>${h1}</h1>
  <h2>${h2}</h2>
  ${resto.map(l => `<p>${l}</p>`).join('\n  ')}
</div>
<nav class="toc"><h2>Índice</h2><ul>${indice}</ul></nav>
<main>${cuerpo}</main>
</body></html>`;

fs.mkdirSync(path.dirname(TMP), { recursive: true });
fs.writeFileSync(TMP, html);

execFileSync(CHROME, [
  '--headless', '--disable-gpu', '--no-pdf-header-footer',
  '--virtual-time-budget=30000',
  `--print-to-pdf=${OUT}`,
  'file://' + TMP,
], { stdio: 'pipe' });

fs.unlinkSync(TMP);
const kb = fs.statSync(OUT).size / 1024;
console.log(`OK  ${path.relative(RAIZ, OUT)}  ${kb.toFixed(0)} KB  ·  ${toc.length} entradas de índice`);
