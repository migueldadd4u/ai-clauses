#!/usr/bin/env node
/**
 * build_resumen.js — el resumen de dos páginas, en PDF.
 *
 *   NODE_PATH=$(npm root -g) node herramientas/build_resumen.js
 *
 * Es el entregable que de verdad se lee. Se maqueta a dos columnas sobre dos
 * páginas A4 y el script COMPRUEBA que salen exactamente dos: si se pasa, avisa,
 * porque un «resumen de dos páginas» de tres no es el producto pedido.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { marked } = require('marked');

const RAIZ = path.resolve(__dirname, '..');
const SRC = path.join(RAIZ, 'clausulado', 'resumen-dos-paginas.md');
const TMP = path.join(RAIZ, 'docs', 'descargas', '.resumen.html');
const OUT = path.join(RAIZ, 'docs', 'descargas', 'resumen-dos-paginas.pdf');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const md = fs.readFileSync(SRC, 'utf8');
const cuerpo = marked.parse(md, { mangle: false, headerIds: false });

const htmlCon = pt => `<!doctype html><html lang="es"><head><meta charset="utf-8">
<title>AI Clauses · resumen en dos páginas</title>
<style>
  @page { size: A4; margin: 1.35cm 1.3cm 1.15cm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Calibri, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: ${pt}pt; line-height: 1.38; color: #22201d;
    column-count: 2; column-gap: .75cm; column-fill: auto;
    text-align: justify; hyphens: auto;
  }
  h1 {
    column-span: all; font-family: Georgia, serif; font-size: ${(pt * 2).toFixed(1)}pt;
    line-height: 1.14; color: #1F3864; margin-bottom: .12cm;
    letter-spacing: -.01em;
  }
  h1 + p {
    column-span: all; font-size: ${(pt * 1.06).toFixed(1)}pt; color: #5d574e;
    border-bottom: 1.5px solid #1F3864; padding-bottom: .16cm; margin-bottom: .3cm;
    text-align: left;
  }
  h2 {
    font-family: Georgia, serif; font-size: ${(pt * 1.2).toFixed(1)}pt; color: #1F3864;
    margin: .3cm 0 .1cm; break-after: avoid; text-align: left;
  }
  p { margin-bottom: .17cm; }
  ul { margin: 0 0 .17cm .42cm; }
  li { margin-bottom: .07cm; }
  strong { color: #1a1917; }
  em { color: #3a3630; }
  p:last-child {
    border-top: 1px solid #cfc8bc; padding-top: .18cm; margin-top: .2cm;
    font-size: 7.8pt; color: #5d574e; text-align: left;
  }
</style></head><body>${cuerpo}</body></html>`;

fs.mkdirSync(path.dirname(TMP), { recursive: true });

/* Dos páginas es el producto, no una aspiración: se prueba de mayor a menor y se
   deja el tamaño de letra más grande que quepa. Si ninguno cabe, se avisa en vez
   de publicar un «resumen de dos páginas» de tres. */
const paginasDe = () => {
  try {
    return execFileSync('pdftotext', ['-q', OUT, '-'], { encoding: 'utf8' })
      .split('\f').filter(p => p.trim()).length;
  } catch (e) { return null; }
};

const TAMANOS = [11.6, 11.4, 11.2, 11.0, 10.8, 10.6, 10.4, 10.2, 10.0, 9.8, 9.6, 9.4, 9.2, 9.0];
let elegido = null, paginas = null;

for (const pt of TAMANOS) {
  fs.writeFileSync(TMP, htmlCon(pt));
  fs.rmSync(OUT, { force: true });
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--no-pdf-header-footer',
    '--virtual-time-budget=15000',
    `--print-to-pdf=${OUT}`,
    'file://' + TMP,
  ], { stdio: 'pipe' });
  paginas = paginasDe();
  if (paginas === null) { elegido = pt; break; }        // sin pdftotext: no se puede ajustar
  if (paginas <= 2) { elegido = pt; break; }
}

fs.unlinkSync(TMP);

const kb = (fs.statSync(OUT).size / 1024).toFixed(0);
if (elegido === null) {
  console.log(`AVISO  el resumen no cabe en dos páginas ni al tamaño mínimo. Hay que acortar el texto.`);
  process.exitCode = 1;
} else if (paginas === null) {
  console.log(`OK  docs/descargas/resumen-dos-paginas.pdf  ${kb} KB  (sin pdftotext: no se comprobaron las páginas)`);
} else {
  console.log(`OK  docs/descargas/resumen-dos-paginas.pdf  ${kb} KB  ·  ${paginas} páginas  ·  cuerpo a ${elegido} pt`);
}
