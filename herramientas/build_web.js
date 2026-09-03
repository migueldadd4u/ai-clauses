#!/usr/bin/env node
/**
 * build_web.js — genera la web de GitHub Pages a partir del clausulado en markdown.
 *
 *   NODE_PATH=$(npm root -g) node herramientas/build_web.js
 *
 * El documento pasa de las 200 páginas: servirlo como una sola página HTML es
 * inmanejable (medía 244.000 px). Se parte en una página por Parte, con índice
 * general, índice lateral de la parte, navegación anterior/siguiente y buscador
 * sobre el índice general.
 *
 * La portada (docs/index.html) se escribe a mano y no se genera aquí.
 */
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const RAIZ = path.resolve(__dirname, '..');
const SRC = path.join(RAIZ, 'clausulado', 'clausulado-ia-deeptech-v3.md');
const DIR = path.join(RAIZ, 'docs', 'clausulado');

const slug = s => s.toLowerCase()
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70);

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- 1. leer y trocear por encabezados de nivel 2 ---------- */
let md = fs.readFileSync(SRC, 'utf8');

// la portada (todo lo anterior al primer "## PARTE") no va a la web: ya está en la home
// el corte tiene que dejar dentro la sección de autoría y declaración de uso de
// IA, que va antes de la Parte 0 y que el art. 50.5 del Reglamento (UE) 2024/1689
// exige mostrar «de manera clara y distinguible» en la primera exposición
const primero = md.search(/^## (AUTORÍA|PARTE|ANEXO)/mi);
const portada = primero > 0 ? md.slice(0, primero) : '';
md = primero > 0 ? md.slice(primero) : md;

const trozos = [];
const re = /^## (.+)$/gm;
let m, prev = null;
while ((m = re.exec(md)) !== null) {
  if (prev) trozos.push({ titulo: prev.t, cuerpo: md.slice(prev.i, m.index) });
  prev = { t: m[1].trim(), i: m.index };
}
if (prev) trozos.push({ titulo: prev.t, cuerpo: md.slice(prev.i) });

// agrupa: cada "PARTE n" abre página; lo que venga después sin ser PARTE se le une
const paginas = [];
for (const t of trozos) {
  const esParte = /^(PARTE|ANEXO)/i.test(t.titulo.replace(/\*\*/g, ''));
  if (esParte || paginas.length === 0) {
    paginas.push({ titulo: t.titulo, partes: [t.cuerpo] });
  } else {
    paginas[paginas.length - 1].partes.push(t.cuerpo);
  }
}
paginas.forEach((p, i) => {
  p.slug = slug(p.titulo.replace(/\*\*/g, '')) || `seccion-${i + 1}`;
  p.archivo = `${String(i).padStart(2, '0')}-${p.slug}.html`;
  p.md = p.partes.join('\n\n');
});

/* ---------- 2. render ---------- */
function render(src) {
  // :::pliego -> <aside>, respetando el markdown de dentro
  const bloques = src.split(/^:::\s*pliego\s*$|^:::\s*$/gm);
  let out = '', dentro = false;
  const marcas = src.match(/^:::\s*pliego\s*$|^:::\s*$/gm) || [];
  bloques.forEach((b, i) => {
    if (dentro) {
      out += `<aside class="pliego"><p class="pliego-et">Texto para el pliego</p>\n`
           + marked.parse(b, { mangle: false, headerIds: false }) + `</aside>\n`;
    } else {
      out += marked.parse(b, { mangle: false, headerIds: false });
    }
    if (i < marcas.length) dentro = /pliego/.test(marcas[i]);
  });
  return out;
}

function conAnclas(html, toc) {
  return html.replace(/<h([2-4])>(.*?)<\/h\1>/g, (mm, lvl, txt) => {
    const plano = txt.replace(/<[^>]+>/g, '').trim();
    const id = slug(plano);
    toc.push({ lvl: +lvl, id, txt: plano });
    return `<h${lvl} id="${id}">${txt}<a class="anchor" href="#${id}" aria-label="Enlace a esta sección">#</a></h${lvl}>`;
  });
}

const CABEZA = (titulo, desc, base) => `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- OCULTO-BUSCADORES 03/09/2026 · no se anuncia todavía. Quitar esta línea y docs/robots.txt para que vuelva a indexarse. -->
<meta name="robots" content="noindex, nofollow">
<title>${esc(titulo)} · AI Clauses</title>
<meta name="description" content="${esc(desc)}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#9878;</text></svg>">
<link rel="stylesheet" href="${base}estilo.css">
</head>
<body class="doc">
<a class="saltar" href="#contenido">Saltar al contenido</a>
<header class="barra">
  <a class="marca" href="${base}index.html">AI&nbsp;Clauses</a>
  <div class="barra-acc">
    <a class="volver" href="indice.html">Índice del documento</a>
    <button id="tema" type="button" aria-label="Cambiar tema">◐</button>
    <button id="menu" type="button" aria-label="Índice de esta parte">☰</button>
  </div>
</header>`;

const PIE = `
<script>
(function () {
  var d = document.documentElement;
  try { var g = localStorage.getItem('tema'); if (g) d.setAttribute('data-theme', g); } catch (e) {}
  var bt = document.getElementById('tema');
  if (bt) bt.addEventListener('click', function () {
    var oscuro = d.getAttribute('data-theme') === 'dark' ||
      (!d.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
    var v = oscuro ? 'light' : 'dark';
    d.setAttribute('data-theme', v);
    try { localStorage.setItem('tema', v); } catch (e) {}
  });
  var idx = document.getElementById('indice'), bm = document.getElementById('menu');
  if (idx && bm) {
    bm.addEventListener('click', function () { idx.classList.toggle('abierto'); });
    idx.addEventListener('click', function (e) { if (e.target.tagName === 'A') idx.classList.remove('abierto'); });
    var enlaces = [].slice.call(idx.querySelectorAll('a[href^="#"]'));
    var mapa = {}; enlaces.forEach(function (a) { mapa[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        var a = mapa[en.target.id]; if (!a || !en.isIntersecting) return;
        enlaces.forEach(function (x) { x.classList.remove('activo'); });
        a.classList.add('activo');
      });
    }, { rootMargin: '0px 0px -75% 0px' });
    [].slice.call(document.querySelectorAll('#contenido h2,#contenido h3,#contenido h4')).forEach(function (h) { obs.observe(h); });
  }
})();
</script>
</body>
</html>`;

fs.rmSync(DIR, { recursive: true, force: true });
fs.mkdirSync(DIR, { recursive: true });

const global = [];
let totalKB = 0;

paginas.forEach((p, i) => {
  const toc = [];
  const html = conAnclas(render(p.md), toc);
  const nav = toc.filter(t => t.lvl >= 3)
    .map(t => `<a class="l${t.lvl}" href="#${t.id}">${esc(t.txt)}</a>`).join('\n');
  const ant = i > 0 ? paginas[i - 1] : null;
  const sig = i < paginas.length - 1 ? paginas[i + 1] : null;
  const limpio = p.titulo.replace(/\*\*/g, '');

  const pagina = CABEZA(limpio, `${limpio}. Cláusulas de IA y deep tech para pliegos de contratación pública.`, '../')
    + `
<div class="disposicion">
  <nav id="indice" aria-label="Índice de esta parte">
    <p class="indice-t">En esta parte</p>
    ${nav || '<p class="indice-v">—</p>'}
  </nav>
  <main id="contenido">
    ${html}
    <nav class="paso">
      ${ant ? `<a class="prev" href="${ant.archivo}"><span>Anterior</span>${esc(ant.titulo.replace(/\*\*/g, ''))}</a>` : '<span></span>'}
      ${sig ? `<a class="next" href="${sig.archivo}"><span>Siguiente</span>${esc(sig.titulo.replace(/\*\*/g, ''))}</a>` : '<span></span>'}
    </nav>
    <p class="pie-doc">Versión 3.0 · referencias verificadas a 1 de septiembre de 2026 ·
    <a href="indice.html">índice del documento</a> ·
    <a href="https://creativecommons.org/licenses/by/4.0/deed.es">CC BY 4.0</a></p>
  </main>
</div>` + PIE;

  fs.writeFileSync(path.join(DIR, p.archivo), pagina);
  totalKB += pagina.length / 1024;
  global.push({ pagina: p, toc });
  console.log(`  ${p.archivo.padEnd(52)} ${(pagina.length / 1024).toFixed(0).padStart(4)} KB · ${toc.length} epígrafes`);
});

/* ---------- 3. índice general ---------- */
const listado = global.map(({ pagina, toc }) => {
  const sub = toc.filter(t => t.lvl === 3).slice(0, 40)
    .map(t => `<a href="${pagina.archivo}#${t.id}">${esc(t.txt)}</a>`).join('');
  return `<section class="ig-parte">
  <h2><a href="${pagina.archivo}">${esc(pagina.titulo.replace(/\*\*/g, ''))}</a></h2>
  <div class="ig-sub">${sub}</div>
</section>`;
}).join('\n');

const indice = CABEZA('Índice del documento', 'Índice completo del clausulado de IA y deep tech para contratación pública.', '../')
  + `
<main id="contenido" class="ig">
  <h1>Cláusulas de Inteligencia Artificial y Deep&nbsp;Tech</h1>
  <p class="ig-sub-t">Catálogo de cláusulas para pliegos de contratación pública · versión 3.0</p>
  <p class="ig-int">${(portada.match(/Elaborado por.*/) || [''])[0]}</p>
  <input id="buscar" type="search" placeholder="Buscar en el índice…" aria-label="Buscar en el índice">
  <div id="listado">
    ${listado}
  </div>
  <p class="pie-doc">Referencias normativas y de doctrina verificadas en fuente primaria.
  Fecha de corte: 1 de septiembre de 2026.</p>
</main>
<script>
(function () {
  var caja = document.getElementById('buscar');
  var partes = [].slice.call(document.querySelectorAll('.ig-parte'));
  caja.addEventListener('input', function () {
    var q = caja.value.trim().toLowerCase();
    partes.forEach(function (s) {
      var enlaces = [].slice.call(s.querySelectorAll('.ig-sub a'));
      var hayTitulo = s.querySelector('h2').textContent.toLowerCase().indexOf(q) >= 0;
      var n = 0;
      enlaces.forEach(function (a) {
        var ok = !q || hayTitulo || a.textContent.toLowerCase().indexOf(q) >= 0;
        a.style.display = ok ? '' : 'none'; if (ok) n++;
      });
      s.style.display = (!q || hayTitulo || n) ? '' : 'none';
    });
  });
})();
</script>` + PIE;

fs.writeFileSync(path.join(DIR, 'indice.html'), indice);

console.log(`\nOK  docs/clausulado/  ·  ${paginas.length} páginas + índice  ·  ${totalKB.toFixed(0)} KB en total`);
