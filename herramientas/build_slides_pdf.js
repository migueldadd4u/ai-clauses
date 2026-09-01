#!/usr/bin/env node
/**
 * build_slides_pdf.js — PDF de la presentación, desde HTML con Chrome headless.
 *
 *   NODE_PATH=$(npm root -g) node herramientas/build_slides_pdf.js
 *
 * No se convierte el .pptx: ni Keynote ni PowerPoint resultaron fiables por
 * AppleScript (permisos de automatización, y Keynote además no sobrescribe un
 * PDF existente, de modo que dejaba el anterior sin avisar). Este renderizador
 * y build_pptx.js comen del mismo fichero de datos, presentacion.js, así que no
 * pueden divergir.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const RAIZ = path.resolve(__dirname, '..');
const SLIDES = require('./presentacion.js');
const TMP = path.join(RAIZ, 'docs', 'descargas', '.slides.html');
const OUT = path.join(RAIZ, 'docs', 'descargas', 'presentacion-ai-clauses.pdf');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/\n/g, '<br>');

const CSS = `
  @page { size: 13.333in 7.5in; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Calibri, "Segoe UI", Helvetica, Arial, sans-serif; color: #22201d; }
  .s {
    width: 13.333in; height: 7.5in; padding: .55in .9in .5in;
    page-break-after: always; position: relative; background: #fff;
    display: flex; flex-direction: column;
  }
  .s:last-child { page-break-after: auto; }
  h1 { font-family: Georgia, serif; font-size: 33pt; color: #1F3864; line-height: 1.15; margin-bottom: .18in; }
  .intro { font-size: 15pt; margin-bottom: .2in; max-width: 11in; }
  .pie {
    position: absolute; left: .9in; right: .9in; bottom: .42in;
    font-size: 11.5pt; font-style: italic; color: #6E6A63;
  }
  .caja { border-radius: 9px; padding: .22in .3in; }
  .t-azul   { background: #EDF1F8; }
  .t-verde  { background: #EFF5F0; }
  .t-ambar  { background: #FDF6E6; }
  .t-rojo   { background: #FBEEEC; }

  /* portada y cierre */
  .s.oscura { background: #1F3864; color: #fff; justify-content: center; }
  .marca { font-family: Georgia, serif; font-size: 24pt; color: #C9D3E6; margin-bottom: .12in; }
  .s.oscura h1 { color: #fff; font-size: 36pt; margin-bottom: .3in; }
  .s.oscura .sub { font-size: 15pt; color: #C9D3E6; margin-bottom: .5in; }
  .regla { width: 2in; height: 1.5px; background: #C9D3E6; margin-bottom: .18in; }
  .s.oscura .aut { font-size: 12.5pt; margin-bottom: .1in; }
  .s.oscura .pie { color: #C9D3E6; font-style: normal; }
  .enlace { font-size: 18pt; font-weight: 700; margin-top: .18in; }

  /* frase central */
  .frase {
    font-family: Georgia, serif; font-size: 23pt; font-style: italic;
    text-align: center; line-height: 1.35; margin: .5in 0 .35in;
  }
  .caja-c { text-align: center; font-size: 16pt; color: #1F3864; }

  /* tarjetas */
  .tarjetas { display: flex; gap: .28in; margin-top: .1in; }
  .tarjetas .c { flex: 1; border-radius: 9px; padding: .24in .26in; }
  .tarjetas .k { font-size: 10.5pt; font-weight: 700; letter-spacing: .06em; margin-bottom: .08in; }
  .tarjetas .n { font-family: Georgia, serif; font-size: 24pt; font-weight: 700; color: #C9D3E6; line-height: 1; margin-bottom: .1in; }
  .tarjetas h3 { font-family: Georgia, serif; font-size: 17pt; margin-bottom: .12in; color: #1F3864; }
  .tarjetas p { font-size: 12.5pt; line-height: 1.4; }
  .k-azul { color: #1F3864; } .k-ambar { color: #8A5A00; } .k-rojo { color: #9A3324; }

  /* filas */
  .fila { display: flex; gap: .3in; align-items: flex-start; padding: .16in 0; }
  .fila.alt { background: #EDF1F8; border-radius: 8px; padding: .16in .25in; }
  .fila .barra { width: 4px; align-self: stretch; background: #1F3864; border-radius: 2px; }
  .fila .izq { font-family: Georgia, serif; font-size: 15.5pt; font-weight: 700; color: #1F3864; flex: 0 0 3.1in; }
  .fila .der { font-size: 12.5pt; line-height: 1.45; flex: 1; }
  .fila .extra { flex: 0 0 1.7in; font-size: 11pt; font-style: italic; color: #6E6A63; }

  /* destacado */
  .cajagrande { font-family: Georgia, serif; font-size: 17pt; line-height: 1.4; text-align: center; }
  .cajagrande.izq { text-align: left; font-size: 14.5pt; }
  .cols { display: flex; gap: .32in; margin-top: .26in; }
  .cols .c { flex: 1; }
  .cols h4 { font-family: Georgia, serif; font-size: 15.5pt; margin-bottom: .08in; }
  .cols p { font-size: 12.5pt; line-height: 1.4; }
  .c-verde h4 { color: #2E6B3E; } .c-azul h4 { color: #1F3864; }
  ul.lista { margin: .18in 0 0 .28in; }
  ul.lista li { font-size: 13pt; line-height: 1.5; margin-bottom: .07in; }
  .aclara { font-size: 12pt; font-style: italic; color: #6E6A63; margin: .18in 0; }
  .subintro { font-size: 13.5pt; font-weight: 700; color: #1F3864; margin-top: .22in; }

  /* dos columnas */
  .doscol { display: flex; gap: .35in; margin-top: .12in; flex: 1; }
  .doscol .c { flex: 1; border-radius: 9px; padding: .28in .3in; }
  .doscol .et { font-size: 11.5pt; font-weight: 700; letter-spacing: .14em; margin-bottom: .18in; }
  .doscol p { font-size: 13pt; line-height: 1.45; margin-bottom: .18in; }
  .et-verde { color: #2E6B3E; } .et-rojo { color: #9A3324; }

  /* autores */
  .autor { display: flex; gap: .22in; margin-bottom: .2in; }
  .autor .barra { width: 4px; background: #1F3864; border-radius: 2px; }
  .autor .nom { font-family: Georgia, serif; font-size: 16pt; font-weight: 700; color: #1F3864; }
  .autor .car { font-size: 11.5pt; color: #6E6A63; margin: .03in 0 .06in; }
  .autor .url { color: #2F5496; }
  .autor .ap { font-size: 12pt; line-height: 1.4; }
  .nota { font-size: 11.5pt; font-style: italic; color: #6E6A63; margin-top: .1in; }
`;

const render = s => {
  const pie = s.pie ? `<p class="pie">${esc(s.pie)}</p>` : '';
  switch (s.tipo) {
    case 'portada':
      return `<section class="s oscura">
        <p class="marca">${esc(s.marca)}</p>
        <h1>${esc(s.titulo)}</h1>
        <p class="sub">${esc(s.subtitulo)}</p>
        <div class="regla"></div>
        <p class="aut">${esc(s.autores)}</p>
        <p class="pie">${esc(s.pie)}</p>
      </section>`;
    case 'cierre':
      return `<section class="s oscura">
        <h1>${esc(s.titulo)}</h1>
        <p class="sub" style="margin-bottom:.1in">${esc(s.texto)}</p>
        <p class="enlace">${esc(s.enlace)}</p>
        <p class="pie">${esc(s.pie)}</p>
      </section>`;
    case 'frase':
      return `<section class="s">
        <h1>${esc(s.titulo)}</h1>
        <p class="frase">${esc(s.frase)}</p>
        <div class="caja t-azul caja-c">${esc(s.caja)}</div>
        ${pie}</section>`;
    case 'tarjetas':
      return `<section class="s">
        <h1>${esc(s.titulo)}</h1>
        ${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ''}
        <div class="tarjetas">
          ${s.tarjetas.map((c, i) => `<div class="c t-${c.tono}">
            ${s.numeradas ? `<p class="n">${i + 1}</p>` : ''}
            ${c.kicker ? `<p class="k k-${c.tono}">${esc(c.kicker)}</p>` : ''}
            <h3>${esc(c.titulo)}</h3><p>${esc(c.texto)}</p></div>`).join('')}
        </div>
        ${pie}</section>`;
    case 'filas':
      return `<section class="s">
        <h1>${esc(s.titulo)}</h1>
        ${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ''}
        ${s.filas.map((f, i) => `<div class="fila${s.alternas && i % 2 === 0 ? ' alt' : ''}">
          ${s.alternas ? '' : '<div class="barra"></div>'}
          <div class="izq">${esc(f[0])}</div>
          <div class="der">${esc(f[1])}</div>
          ${f[2] ? `<div class="extra">${esc(f[2])}</div>` : ''}
        </div>`).join('')}
        ${s.cierre ? `<p class="intro" style="margin-top:.25in">${esc(s.cierre)}</p>` : ''}
        ${pie}</section>`;
    case 'destacado':
      return `<section class="s">
        <h1>${esc(s.titulo)}</h1>
        ${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ''}
        <div class="caja t-${s.tono} cajagrande${s.caja.length > 220 ? ' izq' : ''}">${esc(s.caja)}</div>
        ${s.aclaracion ? `<p class="aclara">${esc(s.aclaracion)}</p>` : ''}
        ${s.subintro ? `<p class="subintro">${esc(s.subintro)}</p>` : ''}
        ${s.lista ? `<ul class="lista">${s.lista.map(l => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}
        ${s.columnas ? `<div class="cols">${s.columnas.map(c =>
          `<div class="c c-${s.tono === 'verde' ? 'verde' : 'azul'}"><h4>${esc(c[0])}</h4><p>${esc(c[1])}</p></div>`).join('')}</div>` : ''}
        ${s.caja2 ? `<div class="caja t-${s.caja2.tono}" style="margin-top:.22in">
            <p style="font-family:Georgia,serif;font-size:15pt;font-weight:700;margin-bottom:.1in">${esc(s.caja2.titulo)}</p>
            <p style="font-size:12.5pt;line-height:1.45">${esc(s.caja2.texto)}</p></div>` : ''}
        ${pie}</section>`;
    case 'doscol':
      return `<section class="s">
        <h1>${esc(s.titulo)}</h1>
        <div class="doscol">
          ${[s.izquierda, s.derecha].map(c => `<div class="c t-${c.tono}">
            <p class="et et-${c.tono}">${esc(c.etiqueta)}</p>
            ${c.puntos.map(x => `<p>${esc(x)}</p>`).join('')}</div>`).join('')}
        </div>
        ${pie}</section>`;
    case 'autores':
      return `<section class="s">
        <h1>${esc(s.titulo)}</h1>
        <p class="intro">${esc(s.intro)}</p>
        ${s.autores.map(a => `<div class="autor"><div class="barra"></div><div>
          <p class="nom">${esc(a.nombre)}</p>
          <p class="car">${esc(a.cargo)}${a.enlace ? ` · <span class="url">${esc(a.enlace)}</span>` : ''}</p>
          <p class="ap">${esc(a.aporte)}</p></div></div>`).join('')}
        <p class="nota">${esc(s.nota)}</p>
      </section>`;
    default:
      throw new Error('tipo de diapositiva desconocido: ' + s.tipo);
  }
};

const html = `<!doctype html><html lang="es"><head><meta charset="utf-8">
<title>AI Clauses · presentación</title><style>${CSS}</style></head><body>
${SLIDES.map(render).join('\n')}
</body></html>`;

fs.mkdirSync(path.dirname(TMP), { recursive: true });
fs.writeFileSync(TMP, html);
fs.rmSync(OUT, { force: true });

execFileSync(CHROME, [
  '--headless', '--disable-gpu', '--no-pdf-header-footer',
  '--virtual-time-budget=20000',
  `--print-to-pdf=${OUT}`,
  'file://' + TMP,
], { stdio: 'pipe' });

fs.unlinkSync(TMP);
console.log(`OK  docs/descargas/presentacion-ai-clauses.pdf  ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB  ·  ${SLIDES.length} diapositivas`);
