#!/usr/bin/env node
/**
 * build_complementarios.js — documentos complementarios del catálogo (versión 4.0):
 * los pliegos de referencia por perfil y los documentos explicativos.
 *
 *   NODE_PATH=$(npm root -g) node herramientas/build_complementarios.js
 *
 * Lee clausulado/complementarios/*.md y produce, por cada uno:
 *   docs/complementarios/<nombre>.html     página web con el estilo del sitio
 *   docs/descargas/complementarios/<nombre>.docx   (vía build_docx.js)
 *   docs/descargas/complementarios/<nombre>.pdf    (vía imprimir_pdf.js, numerado)
 * y un índice docs/complementarios/index.html.
 *
 * LO IMPORTANTE: los pliegos de referencia no copian el texto de las cláusulas.
 * Llevan marcas {{pliego:DT-1·v3}} que aquí se sustituyen por los bloques
 * «texto para el pliego» VIGENTES de esa cláusula, sacados del documento
 * ensamblado. Así un cambio en el catálogo no deja desfasado ningún pliego de
 * referencia: se reconstruyen con él. Una marca que no case con ninguna
 * cláusula, o que case con una cláusula sin bloque de pliego, PARA la
 * construcción: un pliego de referencia con un hueco no se publica.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { marked } = require('marked');
const { imprimirPdf } = require('./imprimir_pdf');

const RAIZ = path.resolve(__dirname, '..');
const SRC_DIR = path.join(RAIZ, 'clausulado', 'complementarios');
const DOC = path.join(RAIZ, 'clausulado', 'clausulado-ia-deeptech-v3.md');
const WEB = path.join(RAIZ, 'docs', 'complementarios');
const DESC = path.join(RAIZ, 'docs', 'descargas', 'complementarios');
const CSS = path.join(RAIZ, 'docs', 'estilo.css');
const HUELLA = require('crypto').createHash('sha1').update(fs.readFileSync(CSS)).digest('hex').slice(0, 8);

// orden y presentación en el índice; un .md que no esté aquí PARA la construcción,
// para que no se publique nada que nadie haya decidido publicar
const DOCUMENTOS = [
  { f: 'pliego-referencia-saas', grupo: 'Pliegos de referencia por perfil', corto: 'SaaS: aplicación estándar prestada como servicio en la nube' },
  { f: 'pliego-referencia-mantenimiento-aplicaciones', grupo: 'Pliegos de referencia por perfil', corto: 'Mantenimiento, evolución y soporte de una aplicación ya implantada' },
  { f: 'pliego-referencia-desarrollo-a-medida', grupo: 'Pliegos de referencia por perfil', corto: 'Desarrollo de software específico para la entidad' },
  { f: 'pliego-referencia-plataformas-criticas', grupo: 'Pliegos de referencia por perfil', corto: 'Sistemas de los que depende un servicio esencial' },
  { f: 'encaje-ladia', grupo: 'Encaje normativo', corto: 'El catálogo frente al proyecto de Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid' },
  { f: 'version-minima-seis-clausulas', grupo: 'Para entender el catálogo', corto: 'Con qué empezar, qué aporta cada cláusula y qué agilidad produce el conjunto' },
  { f: 'agilizaciones', grupo: 'Para entender el catálogo', corto: 'Qué agiliza el catálogo y qué no' },
  { f: 'explicaciones-lenguaje-llano', grupo: 'Para entender el catálogo', corto: 'Seis explicaciones para quien no es jurista de contratación' },
];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70);

/* ---------- 1. bloques de pliego vigentes ---------- */
// Dos clases de marca:
//   {{pliego:DT-1·v3}}   todos los bloques de pliego de esa cláusula (su «###»)
//   {{pliego:§7.10}} {{pliego:V.8.4}} {{pliego:ANEXO XIX}}   los de ese epígrafe,
//       hasta el siguiente encabezado de su mismo nivel o superior
const doc = fs.readFileSync(DOC, 'utf8').split('\n');
const encabezados = [];   // {i, nivel, texto}
doc.forEach((l, i) => { const m = l.match(/^(#{2,5}) (.+)$/); if (m) encabezados.push({ i, nivel: m[1].length, texto: m[2].trim() }); });

function bloquesEntre(desde, hasta) {
  const out = []; let dentro = false, buf = [];
  for (let i = desde; i < hasta; i += 1) {
    const l = doc[i];
    if (/^:::\s*pliego\s*$/.test(l)) { dentro = true; buf = []; continue; }
    if (dentro && /^:::\s*$/.test(l)) { dentro = false; out.push(buf.join('\n')); continue; }
    if (dentro) buf.push(l);
  }
  return out;
}
function bloquesDe(clave) {
  const k = clave.replace(/^§/, '');
  const esClausula = /^(DT|ADM)-\d+·v3$/.test(k);
  const h = encabezados.find(e => esClausula
    ? e.nivel === 3 && e.texto.includes(`${k} —`)
    : e.texto.startsWith(k + ' '));   // el espacio exige palabra entera: «ANEXO XI» no casa con «ANEXO XIX»
  if (!h) return null;
  const sig = encabezados.find(e => e.i > h.i && e.nivel <= h.nivel);
  return { titulo: h.texto, bloques: bloquesEntre(h.i, sig ? sig.i : doc.length) };
}

// En el PDF y en el Word, un enlace relativo apunta al disco de quien construyó
// (file:///…) o a ninguna parte: se reescriben a la dirección pública de la web.
const WEB_BASE = 'https://migueldadd4u.github.io/ai-clauses/complementarios/';
const absolutas = md => md.replace(/\]\((?!https?:|mailto:|#)([^)\s]+)\)/g, (_, u) => `](${new URL(u, WEB_BASE).href})`);

function expandir(md, nombre) {
  const faltan = [];
  const out = md.replace(/^\{\{pliego:([^}]+)\}\}\s*$/gm, (_, clave) => {
    const k = clave.trim();
    const r = bloquesDe(k);
    const bloques = r && r.bloques;
    if (!bloques || !bloques.length) { faltan.push(k); return ''; }
    return `*Texto vigente de ${k} en el catálogo, versión 4.0${bloques.length > 1 ? ` (${bloques.length} bloques)` : ''}:*\n\n`
      + bloques.map(b => `:::pliego\n${b}\n:::`).join('\n\n');
  });
  if (faltan.length) {
    console.error(`ERROR  ${nombre}: marcas sin cláusula o sin bloque de pliego: ${faltan.join(', ')}`);
    process.exit(1);
  }
  const resto = out.match(/\{\{[^}]*\}\}/g);
  if (resto) { console.error(`ERROR  ${nombre}: marcas mal escritas: ${resto.join(', ')}`); process.exit(1); }
  // marcadores de trabajo, con sus variantes (tilde, minúsculas): ninguno llega a lo publicado
  for (const [re, que] of [[/\[HORAS-M[IÍ]NIMO\]/i, '[HORAS-MINIMO]'], [/\[\[\s*v4\s*:/i, '[[V4: …]]'], [/\[PENDIENTE/i, '[PENDIENTE …]']]) {
    if (re.test(out)) { console.error(`ERROR  ${nombre}: queda un marcador ${que} sin resolver`); process.exit(1); }
  }
  const ab = (out.match(/^:::\s*pliego\s*$/gm) || []).length, ci = (out.match(/^:::\s*$/gm) || []).length;
  if (ab !== ci) { console.error(`ERROR  ${nombre}: ${ab} aperturas :::pliego y ${ci} cierres`); process.exit(1); }
  return out;
}

/* ---------- 2. render (mismo tratamiento de :::pliego que la web y el PDF) ---------- */
function render(src) {
  const bloques = src.split(/^:::\s*pliego\s*$|^:::\s*$/gm);
  const marcas = src.match(/^:::\s*pliego\s*$|^:::\s*$/gm) || [];
  let out = '', d = false;
  bloques.forEach((b, i) => {
    out += d
      ? `<aside class="pliego"><p class="pliego-et">Texto para el pliego</p>\n${marked.parse(b, { mangle: false, headerIds: false })}</aside>\n`
      : marked.parse(b, { mangle: false, headerIds: false });
    if (i < marcas.length) d = /pliego/.test(marcas[i]);
  });
  return out;
}
function conAnclas(html, toc) {
  return html.replace(/<h([2-3])>(.*?)<\/h\1>/g, (mm, lvl, txt) => {
    const id = slug(txt.replace(/<[^>]+>/g, '').trim());
    toc.push({ lvl: +lvl, id, txt: txt.replace(/<[^>]+>/g, '').trim() });
    return `<h${lvl} id="${id}">${txt}<a class="anchor" href="#${id}" aria-label="Enlace a esta sección">#</a></h${lvl}>`;
  });
}

const CABEZA = (titulo, desc) => `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)} · AI Clauses</title>
<meta name="description" content="${esc(desc)}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#9878;</text></svg>">
<link rel="stylesheet" href="../estilo.css?v=${HUELLA}">
</head>
<body class="doc">
<a class="saltar" href="#contenido">Saltar al contenido</a>
<header class="barra">
  <a class="marca" href="../index.html">AI&nbsp;Clauses</a>
  <div class="barra-acc">
    <a class="volver" href="index.html">Documentos complementarios</a>
    <button id="tema" type="button" aria-label="Cambiar tema">◐</button>
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
})();
</script>
</body>
</html>`;

/* ---------- 3. construir ---------- */
(async () => {
  const hay = fs.existsSync(SRC_DIR) ? fs.readdirSync(SRC_DIR).filter(f => f.endsWith('.md')) : [];
  const conocidos = new Set(DOCUMENTOS.map(d => d.f + '.md'));
  const sobran = hay.filter(f => !conocidos.has(f));
  if (sobran.length) { console.error(`ERROR  documentos sin decidir su publicación: ${sobran.join(', ')}`); process.exit(1); }

  // se valida TODO antes de borrar nada: si una marca falla, la web publicada no se queda a medias
  for (const d of DOCUMENTOS) {
    const src = path.join(SRC_DIR, d.f + '.md');
    if (!fs.existsSync(src)) { console.error(`ERROR  falta ${path.relative(RAIZ, src)}`); process.exit(1); }
    expandir(fs.readFileSync(src, 'utf8'), d.f);
  }
  // descargas de documentos que ya no se publican: fuera
  if (fs.existsSync(DESC)) for (const f of fs.readdirSync(DESC)) {
    const base = f.replace(/\.(pdf|docx)$/, '');
    if (base !== f && !DOCUMENTOS.some(d => d.f === base)) { fs.rmSync(path.join(DESC, f)); console.log(`  retirado  ${f}`); }
  }
  fs.rmSync(WEB, { recursive: true, force: true });
  fs.mkdirSync(WEB, { recursive: true });
  fs.mkdirSync(DESC, { recursive: true });
  const hechos = [];

  for (const d of DOCUMENTOS) {
    const src = path.join(SRC_DIR, d.f + '.md');
    if (!fs.existsSync(src)) { console.error(`ERROR  falta ${path.relative(RAIZ, src)}`); process.exit(1); }
    const md = expandir(fs.readFileSync(src, 'utf8'), d.f);
    const t = (md.match(/^# (.+)$/m) || [, d.f])[1].replace(/\*\*/g, '').trim();
    const sinTitulo = md.replace(/^# .+\n/m, '');

    // web
    const toc = [];
    const cuerpo = conAnclas(render(sinTitulo), toc);
    const nav = toc.filter(x => x.lvl === 2).map(x => `<a href="#${x.id}">${esc(x.txt)}</a>`).join(' · ');
    const pagina = CABEZA(t, `${t}. ${d.corto}. Documento complementario de AI Clauses, versión 4.0.`) + `
<main id="contenido" class="ig">
  <p class="ig-sub-t">${esc(d.grupo)} · AI Clauses, versión 4.0</p>
  <h1>${esc(t)}</h1>
  <p class="descargas-doc"><a href="../descargas/complementarios/${d.f}.pdf">PDF</a> ·
     <a href="../descargas/complementarios/${d.f}.docx">Word</a></p>
  ${nav ? `<nav class="toc-corto" aria-label="En este documento">${nav}</nav>` : ''}
  ${cuerpo}
  <p class="pie-doc">Documento complementario de AI Clauses, versión 4.0, definitiva. Donde discrepe del
  <a href="../clausulado/indice.html">catálogo</a>, manda el catálogo ·
  <a href="https://creativecommons.org/licenses/by/4.0/deed.es">CC BY 4.0</a></p>
</main>` + PIE;
    fs.writeFileSync(path.join(WEB, d.f + '.html'), pagina);

    // Word: build_docx.js toma como portada el bloque anterior al primer «---»
    const tmpMd = path.join(DESC, `.${d.f}.md`);
    fs.writeFileSync(tmpMd, `# ${t}\n\n## ${d.grupo}\n\nAI Clauses · Cláusulas de IA y Deep Tech · versión 4.0, definitiva\n\nDocumento complementario del catálogo. Donde discrepe del catálogo, manda el catálogo.\n\nLicencia Creative Commons Attribution 4.0 Internacional\n\n---\n\n${absolutas(sinTitulo)}`);
    execFileSync('node', [path.join(__dirname, 'build_docx.js'), tmpMd, path.join(DESC, d.f + '.docx')], { stdio: 'inherit', env: process.env });
    fs.rmSync(tmpMd);

    // PDF numerado
    const tmpHtml = path.join(DESC, `.${d.f}.html`);
    fs.writeFileSync(tmpHtml, `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${esc(t)}</title>
<link rel="stylesheet" href="../../estilo.css">
<style>
  body { background:#fff; color:#000; font-size:10.5pt; }
  main { max-width:none; padding:0; }
  h1 { font-family: var(--serif); font-size: 22pt; color: var(--acento); margin: 0 0 .3cm; }
  .sub { color:#555; font-style: italic; margin: 0 0 .8cm; }
  .doc h2 { font-size: 15pt; border-top: 0; padding-top: 0; page-break-after: avoid; }
  .doc h3 { font-size: 12pt; page-break-after: avoid; }
  table { font-size: 9pt; }
  /* la hoja del sitio pone las tablas en display:block y prohíbe partirlas: en
     estos documentos, hechos casi de tablas, eso dobla las páginas. Aquí la tabla
     se parte entre filas y nunca dentro de una fila. */
  .doc table { display: table; width: 100%; page-break-inside: auto; }
  .doc tr { page-break-inside: avoid; }
  .pliego { page-break-inside: auto; }
  @page { size: A4; margin: 2cm 2.2cm 2cm 2.2cm; }
</style></head><body class="doc"><main>
<h1>${esc(t)}</h1><p class="sub">${esc(d.grupo)} · AI Clauses, versión 4.0, definitiva · CC BY 4.0</p>
${render(absolutas(sinTitulo))}
</main></body></html>`);
    const pdf = path.join(DESC, d.f + '.pdf');
    await imprimirPdf({ html: tmpHtml, out: pdf, pie: `AI Clauses v4.0 · ${d.grupo}` });   // el título entero no cabe en el pie
    fs.rmSync(tmpHtml);
    let pags = '?';
    try { pags = execFileSync('pdfinfo', [pdf], { encoding: 'utf8' }).match(/^Pages:\s+(\d+)$/m)[1]; } catch (_) {}
    hechos.push({ ...d, t, pags });
    console.log(`OK  ${d.f}  ·  ${pags} páginas`);
  }

  // índice: el cuadro «Cómo elegir el perfil», común a los cuatro pliegos, va también aquí,
  // porque es lo primero que necesita quien llega sin saber cuál abrir
  const saas = fs.readFileSync(path.join(SRC_DIR, 'pliego-referencia-saas.md'), 'utf8');
  const ini = saas.search(/^### 2\.2 Cómo elegir el perfil/m);
  const fin = saas.indexOf('**En este perfil.**', ini);
  if (ini < 0 || fin < 0) { console.error('ERROR  no encuentro el cuadro «Cómo elegir el perfil» en el pliego de SaaS'); process.exit(1); }
  const cuadro = render(absolutas(saas.slice(ini, fin).replace(/^### 2\.2 Cómo elegir el perfil\n/, '').replace('*Cuadro común a los cuatro pliegos de referencia, idéntico en los cuatro.* ', '')));
  const grupos = [...new Set(DOCUMENTOS.map(d => d.grupo))];
  const lista = grupos.map(g => `<section class="ig-parte"><h2>${esc(g)}</h2><ul class="ig-sub">` +
    hechos.filter(d => d.grupo === g).map(d =>
      `<li><a href="${d.f}.html"><strong>${esc(d.t)}</strong></a> — ${esc(d.corto)} · <a href="../descargas/complementarios/${d.f}.pdf">PDF</a> (${d.pags} págs.) · <a href="../descargas/complementarios/${d.f}.docx">Word</a></li>`
    ).join('\n') + `</ul></section>`).join('\n');
  fs.writeFileSync(path.join(WEB, 'index.html'), CABEZA('Documentos complementarios', 'Pliegos de referencia por perfil y documentos explicativos de AI Clauses, versión 4.0.') + `
<main id="contenido" class="ig">
  <h1>Documentos complementarios</h1>
  <p class="ig-sub-t">AI Clauses · versión 4.0, definitiva</p>
  <p>Explican y ensamblan el catálogo; no lo sustituyen. Los <strong>pliegos de referencia</strong> no son
  pliegos-tipo ni modelos aprobados por ningún órgano: son la selección coordinada de cláusulas para un
  perfil de contrato, que cada órgano de contratación adapta y motiva con datos propios. El texto de cada
  cláusula que llevan dentro se toma, en cada construcción, del <a href="../clausulado/indice.html">catálogo vigente</a>.</p>
  <section class="ig-parte"><h2>Cómo elegir el perfil</h2>${cuadro}</section>
  ${lista}
</main>` + PIE);
  console.log(`\nOK  docs/complementarios/  ·  ${hechos.length} documentos + índice`);
})().catch(e => { console.error(e); process.exit(1); });
