#!/usr/bin/env node
/**
 * Construye la guía municipal de 20 páginas desde un único Markdown.
 * Salidas: HTML navegable, PDF A4 exacto y DOCX paginado.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { marked } = require('marked');
const {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  Footer,
  Header,
  LevelFormat,
  PageBreak,
  PageNumber,
  PageOrientation,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} = require('docx');

const RAIZ = path.resolve(__dirname, '..');
const NOMBRE = '2026-09-01_ai-clauses_guia-municipal-20-paginas';
const SRC = path.join(RAIZ, 'clausulado', `${NOMBRE}.md`);
const HTML = path.join(RAIZ, 'docs', `${NOMBRE}.html`);
const PDF = path.join(RAIZ, 'docs', 'descargas', `${NOMBRE}.pdf`);
const DOCX = path.join(RAIZ, 'docs', 'descargas', `${NOMBRE}.docx`);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const AZUL = '1F3864';
const AZUL_MEDIO = '2F5597';
const TINTA = '22201D';
const GRIS = '5D6573';
const GRIS_CLARO = 'F2F4F7';
const AZUL_CLARO = 'E8EEF7';
const BLANCO = 'FFFFFF';
const SANS = 'Calibri';
const MONO = 'Consolas';
const ANCHO_DXA = 10100; // A4 con márgenes de 0,625 pulgadas.

if (!fs.existsSync(SRC)) throw new Error(`Falta la fuente: ${SRC}`);
if (!fs.existsSync(CHROME)) throw new Error(`No se encuentra Google Chrome: ${CHROME}`);

const md = fs.readFileSync(SRC, 'utf8');
const marcas = [...md.matchAll(/^<!-- PAGINA (\d+) -->\s*$/gm)];
if (marcas.length !== 20) throw new Error(`La guía debe tener 20 marcadores; tiene ${marcas.length}`);

const paginas = marcas.map((m, i) => {
  const numero = Number(m[1]);
  if (numero !== i + 1) throw new Error(`Marcador fuera de orden: se esperaba ${i + 1} y aparece ${numero}`);
  const inicio = m.index + m[0].length;
  const fin = i + 1 < marcas.length ? marcas[i + 1].index : md.length;
  const contenido = md.slice(inicio, fin).trim();
  if (!contenido) throw new Error(`La página ${numero} está vacía`);
  return { numero, contenido };
});

marked.setOptions({ mangle: false, headerIds: false });

const htmlPaginas = paginas.map(({ numero, contenido }) => `
<section class="pagina" aria-label="Página ${numero} de 20">
  <div class="cabecera"><span>AI CLAUSES</span><span>GUÍA MUNICIPAL DE DECISIÓN Y APLICACIÓN</span></div>
  <article class="contenido">${marked.parse(contenido)}</article>
  <div class="pie"><a href="clausulado/indice.html">Abrir el catálogo completo</a><span>Página ${numero} de 20</span></div>
</section>`).join('\n');

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- OCULTO-BUSCADORES 03/09/2026 · no se anuncia todavía. Quitar esta línea y docs/robots.txt para que vuelva a indexarse. -->
<meta name="robots" content="noindex, nofollow">
<title>AI Clauses · Guía municipal de decisión y aplicación · 20 páginas</title>
<meta name="description" content="Guía de 20 páginas para decidir, motivar, seleccionar, copiar y verificar cláusulas de IA y deep tech en la contratación pública.">
<link rel="canonical" href="https://migueldadd4u.github.io/ai-clauses/${NOMBRE}.html">
<style>
  :root { --azul:#1f3864; --azul2:#2f5597; --tinta:#22201d; --gris:#5d6573; --borde:#d8dee8; --fondo:#eef2f7; }
  * { box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { margin:0; background:var(--fondo); color:var(--tinta); font-family:Calibri,"Segoe UI",Arial,sans-serif; }
  .pagina { width:min(210mm,calc(100% - 2rem)); min-height:297mm; margin:1.2rem auto; padding:14mm 15mm 12mm; background:white; box-shadow:0 5px 24px #20314d22; display:flex; flex-direction:column; }
  .cabecera,.pie { display:flex; justify-content:space-between; gap:1rem; color:var(--gris); font-size:8.2pt; letter-spacing:.045em; text-transform:uppercase; }
  .cabecera { border-bottom:1px solid var(--borde); padding-bottom:2.2mm; margin-bottom:5mm; }
  .pie { border-top:1px solid var(--borde); padding-top:2.2mm; margin-top:4mm; }
  .pie a { color:var(--azul2); text-decoration:none; text-transform:none; letter-spacing:0; }
  .contenido { flex:1; min-height:0; font-size:10.25pt; line-height:1.27; }
  h1,h2,h3 { font-family:Georgia,"Times New Roman",serif; color:var(--azul); break-after:avoid; }
  h1 { font-size:25pt; line-height:1.08; margin:0 0 5mm; letter-spacing:-.015em; }
  h2 { font-size:17.5pt; line-height:1.12; margin:0 0 4mm; }
  h3 { font-size:11.8pt; margin:4mm 0 1.5mm; }
  p { margin:0 0 2.6mm; }
  ul,ol { margin:1.5mm 0 2.8mm 6mm; padding-left:4mm; }
  li { margin:0 0 1.4mm; }
  blockquote { margin:3mm 0; padding:3mm 4mm; border-left:4px solid var(--azul2); background:#f5f7fb; color:#323a46; }
  blockquote p:last-child { margin-bottom:0; }
  table { width:100%; border-collapse:collapse; table-layout:fixed; margin:2.5mm 0 3mm; font-size:8.15pt; line-height:1.18; }
  th,td { border:1px solid #c8d0dc; padding:1.6mm 1.8mm; vertical-align:top; overflow-wrap:anywhere; }
  th { background:#e8eef7; color:var(--azul); text-align:left; }
  strong { color:#191817; }
  code { font-family:Consolas,monospace; font-size:.88em; color:#244a82; }
  a { color:#244f8f; }
  hr { border:0; border-top:1px solid var(--borde); margin:4mm 0; }
  .contenido > p:last-child { margin-bottom:0; }
  body.qa { background:white; }
  body.qa .pagina { width:210mm; height:297mm; min-height:297mm; margin:0; box-shadow:none; page-break-after:always; }
  @media (max-width:720px) {
    .pagina { width:100%; min-height:0; margin:0 0 1rem; padding:1.2rem; box-shadow:none; }
    .cabecera { font-size:.68rem; }
    .contenido { font-size:1rem; line-height:1.45; }
    table { display:block; overflow-x:auto; font-size:.84rem; }
  }
  @media print {
    @page { size:A4; margin:0; }
    body { background:white; }
    .pagina { width:210mm; height:297mm; min-height:297mm; margin:0; box-shadow:none; page-break-after:always; break-after:page; overflow:hidden; }
    .pagina:last-child { page-break-after:auto; break-after:auto; }
  }
</style>
</head>
<body>${htmlPaginas}
<script>
if (new URLSearchParams(location.search).has('qa')) document.body.classList.add('qa');
function medir() {
  const desbordadas = [...document.querySelectorAll('.pagina')]
    .filter(p => { const c = p.querySelector('.contenido'); return c.scrollHeight > c.clientHeight + 2; })
    .map(p => p.getAttribute('aria-label').match(/Página (\d+)/)[1]);
  document.body.dataset.overflow = desbordadas.join(',');
}
window.addEventListener('load', medir);
requestAnimationFrame(medir);
</script>
</body></html>`;

fs.mkdirSync(path.dirname(HTML), { recursive: true });
fs.mkdirSync(path.dirname(PDF), { recursive: true });
fs.writeFileSync(HTML, html);

const dom = execFileSync(CHROME, [
  '--headless', '--disable-gpu', '--no-sandbox', '--dump-dom', '--virtual-time-budget=2500',
  `file://${HTML}?qa=1`,
], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const overflow = /data-overflow="([^"]*)"/.exec(dom)?.[1] ?? '';
if (overflow) throw new Error(`Desbordan las páginas HTML: ${overflow}`);

if (fs.existsSync(PDF)) fs.unlinkSync(PDF);
execFileSync(CHROME, [
  '--headless', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer',
  '--virtual-time-budget=5000', `--print-to-pdf=${PDF}`, `file://${HTML}`,
], { stdio: 'pipe' });
const pdfInfo = execFileSync('pdfinfo', [PDF], { encoding: 'utf8' });
const paginasPdf = Number(/^Pages:\s+(\d+)$/m.exec(pdfInfo)?.[1]);
if (paginasPdf !== 20) throw new Error(`El PDF debe tener 20 páginas y tiene ${paginasPdf}`);

function inlineRuns(text, base = {}) {
  const resultado = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let ultimo = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > ultimo) resultado.push(new TextRun({ text: text.slice(ultimo, m.index), ...base }));
    const token = m[0];
    if (token.startsWith('**')) {
      resultado.push(...inlineRuns(token.slice(2, -2), { ...base, bold: true }));
    } else if (token.startsWith('`')) {
      resultado.push(new TextRun({ text: token.slice(1, -1), ...base, font: MONO, size: (base.size || 20) - 1, color: AZUL_MEDIO }));
    } else if (token.startsWith('[')) {
      const enlace = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      resultado.push(new ExternalHyperlink({
        link: enlace[2],
        children: [new TextRun({ text: enlace[1], ...base, color: AZUL_MEDIO, underline: {} })],
      }));
    } else {
      resultado.push(...inlineRuns(token.slice(1, -1), { ...base, italics: true }));
    }
    ultimo = m.index + token.length;
  }
  if (ultimo < text.length) resultado.push(new TextRun({ text: text.slice(ultimo), ...base }));
  return resultado.length ? resultado : [new TextRun({ text: '', ...base })];
}

function splitRow(linea) {
  return linea.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim());
}

function tablaWord(filas) {
  const columnas = Math.max(...filas.map(f => f.length));
  const primera = columnas >= 4 ? 1150 : 1900;
  const resto = Math.floor((ANCHO_DXA - primera) / Math.max(1, columnas - 1));
  const anchos = columnas === 1 ? [ANCHO_DXA] : [primera, ...Array(columnas - 1).fill(resto)];
  anchos[anchos.length - 1] += ANCHO_DXA - anchos.reduce((a, b) => a + b, 0);
  const tam = columnas >= 4 ? 15 : 17;

  const celda = (texto, col, cabecera) => new TableCell({
    width: { size: anchos[col], type: WidthType.DXA },
    margins: { top: 70, bottom: 70, left: 95, right: 95 },
    shading: cabecera ? { type: ShadingType.CLEAR, fill: AZUL_CLARO } : undefined,
    children: [new Paragraph({
      style: 'GuideTable',
      children: inlineRuns(texto, { font: SANS, size: tam, bold: cabecera, color: cabecera ? AZUL : TINTA }),
    })],
  });

  return new Table({
    width: { size: ANCHO_DXA, type: WidthType.DXA },
    columnWidths: anchos,
    borders: ['top', 'bottom', 'left', 'right', 'insideHorizontal', 'insideVertical'].reduce((acc, k) => {
      acc[k] = { style: BorderStyle.SINGLE, size: 4, color: 'C8D0DC' };
      return acc;
    }, {}),
    rows: filas.map((fila, i) => new TableRow({
      tableHeader: i === 0,
      children: Array.from({ length: columnas }, (_, col) => celda(fila[col] || '', col, i === 0)),
    })),
  });
}

function bloquesPagina(texto, numero) {
  const lineas = texto.split('\n');
  const bloques = [];
  let tabla = [];
  let parrafo = [];

  const vaciarParrafo = () => {
    if (!parrafo.length) return;
    const textoParrafo = parrafo.join(' ').replace(/\s+/g, ' ').trim();
    bloques.push(new Paragraph({ style: numero === 1 ? 'GuideCoverText' : 'GuideBody', children: inlineRuns(textoParrafo, { font: SANS, size: numero === 1 ? 21 : 20, color: TINTA }) }));
    parrafo = [];
  };
  const vaciarTabla = () => {
    if (!tabla.length) return;
    bloques.push(tablaWord(tabla));
    bloques.push(new Paragraph({ style: 'GuideTight', children: [] }));
    tabla = [];
  };

  for (const raw of lineas) {
    const l = raw.trim();
    if (/^\|.*\|$/.test(l)) {
      vaciarParrafo();
      if (!/^\|[\s:|-]+\|$/.test(l)) tabla.push(splitRow(l));
      continue;
    }
    vaciarTabla();
    if (!l) { vaciarParrafo(); continue; }

    let m;
    if ((m = /^(#{1,3})\s+(.*)$/.exec(l))) {
      vaciarParrafo();
      const nivel = m[1].length;
      const estilo = numero === 1 && nivel === 1 ? 'GuideTitle' : nivel === 1 ? 'GuideH1' : nivel === 2 ? 'GuideH1' : 'GuideH2';
      bloques.push(new Paragraph({ style: estilo, children: inlineRuns(m[2], { font: nivel <= 2 ? 'Georgia' : SANS, bold: true, color: AZUL }) }));
    } else if (/^[-*]\s+/.test(l)) {
      vaciarParrafo();
      bloques.push(new Paragraph({
        style: 'GuideList', numbering: { reference: 'guide-bullets', level: 0 },
        children: inlineRuns(l.replace(/^[-*]\s+/, ''), { font: SANS, size: 20, color: TINTA }),
      }));
    } else if (/^\d+\.\s+/.test(l)) {
      vaciarParrafo();
      bloques.push(new Paragraph({
        style: 'GuideList', numbering: { reference: `guide-numbers-${numero}`, level: 0 },
        children: inlineRuns(l.replace(/^\d+\.\s+/, ''), { font: SANS, size: 20, color: TINTA }),
      }));
    } else if (/^>\s?/.test(l)) {
      vaciarParrafo();
      bloques.push(new Paragraph({
        style: 'GuideQuote',
        border: { left: { style: BorderStyle.SINGLE, size: 16, color: AZUL_MEDIO, space: 8 } },
        children: inlineRuns(l.replace(/^>\s?/, ''), { font: SANS, size: 20, italics: true, color: '323A46' }),
      }));
    } else if (l === '---') {
      vaciarParrafo();
      bloques.push(new Paragraph({ style: 'GuideTight', border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'D8DEE8' } }, children: [] }));
    } else {
      parrafo.push(l);
    }
  }
  vaciarParrafo();
  vaciarTabla();
  return bloques;
}

const contenidoWord = [];
for (const pagina of paginas) {
  if (pagina.numero > 1) contenidoWord.push(new Paragraph({ children: [new PageBreak()] }));
  contenidoWord.push(...bloquesPagina(pagina.contenido, pagina.numero));
}

const doc = new Document({
  creator: 'Delfina Lafuente Veira; José Antonio Ondiviela García; Miguel Ángel Domínguez Castellano; Enrique Jiménez; Roberto García',
  title: 'AI Clauses · Guía municipal de decisión y aplicación',
  description: 'Guía ejecutiva de 20 páginas para revisar el catálogo de cláusulas de IA y deep tech',
  numbering: {
    config: [
      { reference: 'guide-bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.START, style: { paragraph: { indent: { left: 500, hanging: 250 } } } }] },
      ...Array.from({ length: 20 }, (_, i) => ({
        reference: `guide-numbers-${i + 1}`,
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.START, style: { paragraph: { indent: { left: 500, hanging: 250 } } } }],
      })),
    ],
  },
  styles: {
    default: { document: { run: { font: SANS, size: 20, color: TINTA }, paragraph: { spacing: { after: 80, line: 259 } } } },
    paragraphStyles: [
      { id: 'GuideTitle', name: 'Guide Title', basedOn: 'Normal', next: 'GuideCoverText', run: { font: 'Georgia', size: 52, bold: true, color: AZUL }, paragraph: { alignment: AlignmentType.LEFT, spacing: { before: 500, after: 260, line: 250 }, keepNext: true } },
      { id: 'GuideH1', name: 'Guide Heading 1', basedOn: 'Normal', next: 'GuideBody', run: { font: 'Georgia', size: 34, bold: true, color: AZUL }, paragraph: { spacing: { before: 80, after: 150, line: 240 }, keepNext: true, outlineLevel: 0 } },
      { id: 'GuideH2', name: 'Guide Heading 2', basedOn: 'Normal', next: 'GuideBody', run: { font: SANS, size: 23, bold: true, color: AZUL_MEDIO }, paragraph: { spacing: { before: 130, after: 70, line: 240 }, keepNext: true, outlineLevel: 1 } },
      { id: 'GuideBody', name: 'Guide Body', basedOn: 'Normal', next: 'GuideBody', run: { font: SANS, size: 20, color: TINTA }, paragraph: { spacing: { before: 0, after: 80, line: 259 } } },
      { id: 'GuideCoverText', name: 'Guide Cover Text', basedOn: 'GuideBody', next: 'GuideCoverText', run: { font: SANS, size: 21, color: TINTA }, paragraph: { spacing: { before: 0, after: 105, line: 268 } } },
      { id: 'GuideList', name: 'Guide List', basedOn: 'GuideBody', next: 'GuideList', run: { font: SANS, size: 20, color: TINTA }, paragraph: { spacing: { before: 0, after: 65, line: 259 } } },
      { id: 'GuideQuote', name: 'Guide Quote', basedOn: 'GuideBody', next: 'GuideBody', run: { font: SANS, size: 20, italics: true, color: '323A46' }, paragraph: { indent: { left: 260, right: 120 }, spacing: { before: 80, after: 100, line: 259 } } },
      { id: 'GuideTable', name: 'Guide Table', basedOn: 'Normal', next: 'GuideTable', run: { font: SANS, size: 16, color: TINTA }, paragraph: { spacing: { before: 0, after: 0, line: 230 } } },
      { id: 'GuideTight', name: 'Guide Tight', basedOn: 'Normal', next: 'GuideBody', run: { font: SANS, size: 4 }, paragraph: { spacing: { before: 0, after: 45, line: 120 } } },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838, orientation: PageOrientation.PORTRAIT },
        margin: { top: 900, right: 900, bottom: 900, left: 900, header: 400, footer: 400 },
      },
    },
    headers: { default: new Header({ children: [new Paragraph({
      alignment: AlignmentType.RIGHT,
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'D8DEE8', space: 3 } },
      spacing: { after: 80 },
      children: [new TextRun({ text: 'AI Clauses · Guía municipal de decisión y aplicación', font: SANS, size: 15, color: GRIS })],
    })] }) },
    footers: { default: new Footer({ children: [new Paragraph({
      alignment: AlignmentType.RIGHT,
      children: [new TextRun({ text: 'Página ', font: SANS, size: 15, color: GRIS }), new TextRun({ children: [PageNumber.CURRENT], font: SANS, size: 15, color: GRIS }), new TextRun({ text: ' de 20', font: SANS, size: 15, color: GRIS })],
    })] }) },
    children: contenidoWord,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(DOCX, buf);
  const kbPdf = (fs.statSync(PDF).size / 1024).toFixed(0);
  const kbDocx = (buf.length / 1024).toFixed(0);
  console.log(`OK  docs/${NOMBRE}.html`);
  console.log(`OK  docs/descargas/${NOMBRE}.pdf  ${kbPdf} KB  ·  20 páginas A4`);
  console.log(`OK  docs/descargas/${NOMBRE}.docx  ${kbDocx} KB`);
}).catch(err => { console.error(err); process.exitCode = 1; });
