#!/usr/bin/env node
/**
 * imprimir_pdf.js — HTML -> PDF con NÚMERO DE PÁGINA, hablando con Chrome por su
 * propio protocolo (CDP).
 *
 *   const { imprimirPdf } = require('./imprimir_pdf');
 *   await imprimirPdf({ html: '/ruta/doc.html', out: '/ruta/doc.pdf', pie: 'AI Clauses · v3.0' });
 *
 * POR QUÉ ESTO Y NO `--print-to-pdf`:
 * Chrome no implementa las cajas de margen de CSS paged media, así que
 * `@page { @bottom-center { content: counter(page) } }` NO pinta nada. Y el flag
 * de línea de comandos sólo sabe poner la cabecera y el pie POR DEFECTO, que
 * incluyen la URL del fichero — que aquí sería una ruta local de /tmp.
 * `Page.printToPDF` del protocolo sí acepta una plantilla propia de pie, y es la
 * única vía para tener «pág. N de M» limpio sin instalar dependencias.
 *
 * Usa el WebSocket nativo de Node (>= 22). No hace falta puppeteer ni ws.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function esperar(ms) { return new Promise(r => setTimeout(r, ms)); }

async function puntoDeEntrada(puerto, intentos = 60) {
  for (let i = 0; i < intentos; i += 1) {
    try {
      const r = await fetch(`http://127.0.0.1:${puerto}/json/version`);
      if (r.ok) return (await r.json()).webSocketDebuggerUrl;
    } catch (_) { /* aún no escucha */ }
    await esperar(250);
  }
  throw new Error('Chrome no abrió el puerto de depuración a tiempo');
}

/** Cliente CDP mínimo sobre el WebSocket nativo. */
class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.n = 0;
    this.pend = new Map();
    this.espera = new Map();
    ws.addEventListener('message', (ev) => {
      const m = JSON.parse(ev.data);
      if (m.id && this.pend.has(m.id)) {
        const { ok, ko } = this.pend.get(m.id);
        this.pend.delete(m.id);
        m.error ? ko(new Error(m.error.message)) : ok(m.result);
      } else if (m.method && this.espera.has(m.method)) {
        const r = this.espera.get(m.method);
        this.espera.delete(m.method);
        r(m.params);
      }
    });
  }
  enviar(method, params = {}, sessionId) {
    const id = ++this.n;
    return new Promise((ok, ko) => {
      this.pend.set(id, { ok, ko });
      this.ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });
  }
  evento(method) { return new Promise(r => this.espera.set(method, r)); }
}

/**
 * @param {object} o
 * @param {string} o.html  ruta al HTML de entrada
 * @param {string} o.out   ruta del PDF de salida
 * @param {string} [o.pie] texto a la izquierda del pie (además del número de página)
 * @param {number} [o.desde] primera página que lleva número (1 = todas; 2 deja limpia la portada)
 */
async function imprimirPdf({ html, out, pie = '', desde = 1 }) {
  if (!fs.existsSync(html)) throw new Error(`No existe el HTML: ${html}`);
  const perfil = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-clauses-chrome-'));
  const puerto = 9222 + Math.floor(Math.random() * 500);
  const chrome = spawn(CHROME, [
    '--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${perfil}`, `--remote-debugging-port=${puerto}`, 'about:blank',
  ], { stdio: 'ignore' });

  try {
    const wsUrl = await puntoDeEntrada(puerto);
    const ws = new WebSocket(wsUrl);
    await new Promise((ok, ko) => {
      ws.addEventListener('open', ok, { once: true });
      ws.addEventListener('error', () => ko(new Error('no se pudo abrir el WebSocket de Chrome')), { once: true });
    });
    const cdp = new Cdp(ws);

    const { targetId } = await cdp.enviar('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.enviar('Target.attachToTarget', { targetId, flatten: true });
    await cdp.enviar('Page.enable', {}, sessionId);

    // El evento de carga NO siempre llega en documentos muy grandes (el
    // clausulado son 1,3 MB de HTML): se espera, pero con tope. Colgarse aquí
    // para siempre fue el primer fallo de este impresor.
    const cargado = cdp.evento('Page.loadEventFired');
    await cdp.enviar('Page.navigate', { url: 'file://' + html }, sessionId);
    await Promise.race([cargado, esperar(60000)]);
    // deja asentar tipografías y saltos antes de medir las páginas
    await esperar(1500);

    // El pie va dentro de un iframe propio de Chrome, sin heredar el CSS del
    // documento: hay que darle su tipografía y su tamaño explícitos.
    const marca = pie ? `<span style="margin-right:auto">${pie}</span>` : '';
    const pieHtml = `<div style="width:100%;font-family:Georgia,serif;font-size:8pt;color:#5D6573;
        padding:0 16mm;display:flex;justify-content:space-between;align-items:center;">
        ${marca}<span>pág. <span class="pageNumber"></span> de <span class="totalPages"></span></span></div>`;

    // `ReturnAsStream` y no `data` en la respuesta: un PDF de 7,5 MB viaja como
    // ~10 MB de base64 en un único mensaje de WebSocket y Chrome se queda mudo.
    // Fue el segundo fallo de este impresor: diez minutos al 0 % de CPU.
    const impreso = await cdp.enviar('Page.printToPDF', {
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: pieHtml,
      pageRanges: '',
      transferMode: 'ReturnAsStream',
    }, sessionId);

    if (impreso.stream) {
      const trozos = [];
      for (;;) {
        const t = await cdp.enviar('IO.read', { handle: impreso.stream, size: 1 << 20 }, sessionId);
        if (t.data) trozos.push(Buffer.from(t.data, t.base64Encoded === false ? 'utf8' : 'base64'));
        if (t.eof) break;
      }
      await cdp.enviar('IO.close', { handle: impreso.stream }, sessionId);
      fs.writeFileSync(out, Buffer.concat(trozos));
    } else {
      fs.writeFileSync(out, Buffer.from(impreso.data, 'base64'));
    }
    ws.close();
    return out;
  } finally {
    chrome.kill();
    try { fs.rmSync(perfil, { recursive: true, force: true }); } catch (_) {}
  }
}

module.exports = { imprimirPdf };

if (require.main === module) {
  const [html, out, pie] = process.argv.slice(2);
  if (!html || !out) {
    console.error('uso: node imprimir_pdf.js <entrada.html> <salida.pdf> ["pie"]');
    process.exit(2);
  }
  imprimirPdf({ html, out, pie: pie || '' })
    .then(() => console.log(`OK  ${out}`))
    .catch(e => { console.error(e); process.exit(1); });
}
