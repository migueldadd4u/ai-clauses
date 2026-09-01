#!/usr/bin/env node
/**
 * Genera el Word del resumen con el mismo compromiso que el PDF: dos páginas A4.
 * Usa una cabecera a una columna y el cuerpo a dos columnas, y valida el resultado
 * renderizado con LibreOffice antes de darlo por bueno.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  Footer,
  Header,
  LevelFormat,
  Packer,
  PageBreak,
  PageNumber,
  Paragraph,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  WidthType,
  convertInchesToTwip,
} = require('docx');

const RAIZ = path.resolve(__dirname, '..');
const SRC = path.join(RAIZ, 'clausulado', 'resumen-dos-paginas.md');
const OUT = path.join(RAIZ, 'docs', 'descargas', 'resumen-dos-paginas.docx');
const SOFFICE = execFileSync('which', ['soffice'], { encoding: 'utf8' }).trim();
const AZUL = '1F3864';
const GRIS = '5D6573';
const TINTA = '22201D';
const SANS = 'Calibri';
const SERIF = 'Georgia';

if (!fs.existsSync(SRC)) throw new Error(`Falta la fuente: ${SRC}`);
if (!SOFFICE || !fs.existsSync(SOFFICE)) throw new Error('No se encuentra LibreOffice/soffice en PATH');

const md = fs.readFileSync(SRC, 'utf8');
const lineas = md.split('\n');
const titulo = lineas.find(l => /^#\s+/.test(l))?.replace(/^#\s+/, '') || 'AI Clauses';
const subtitulo = lineas.find(l => /^\*\*.*\*\*$/.test(l.trim()))?.trim().replace(/^\*\*|\*\*$/g, '') || 'Resumen en dos páginas';
const inicio = lineas.findIndex(l => /^##\s+/.test(l));
if (inicio < 0) throw new Error('El resumen no contiene epígrafes de segundo nivel');

function runs(text, base = {}) {
  const salida = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let ultimo = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > ultimo) salida.push(new TextRun({ text: text.slice(ultimo, m.index), ...base }));
    const token = m[0];
    if (token.startsWith('**')) {
      salida.push(...runs(token.slice(2, -2), { ...base, bold: true }));
    } else if (token.startsWith('`')) {
      salida.push(new TextRun({ text: token.slice(1, -1), ...base, font: 'Consolas', color: '2F5597' }));
    } else if (token.startsWith('[')) {
      const enlace = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      salida.push(new ExternalHyperlink({
        link: enlace[2],
        children: [new TextRun({ text: enlace[1], ...base, color: '2F5597', underline: {} })],
      }));
    } else {
      salida.push(...runs(token.slice(1, -1), { ...base, italics: true }));
    }
    ultimo = m.index + token.length;
  }
  if (ultimo < text.length) salida.push(new TextRun({ text: text.slice(ultimo), ...base }));
  return salida.length ? salida : [new TextRun({ text: '', ...base })];
}

const secciones = [];
let seccionActual = null;
for (const raw of lineas.slice(inicio)) {
  const m = /^##\s+(.*)$/.exec(raw.trim());
  if (m) {
    seccionActual = { titulo: m[1], lineas: [] };
    secciones.push(seccionActual);
  } else if (seccionActual) {
    seccionActual.lineas.push(raw);
  }
}

function bloquesSeccion(titulos, bodySize) {
  const bloques = [];
  for (const nombre of titulos) {
    const seccion = secciones.find(s => s.titulo === nombre);
    if (!seccion) throw new Error(`No se encuentra el epígrafe del resumen: ${nombre}`);
    bloques.push(new Paragraph({
      keepNext: true,
      spacing: { before: bloques.length ? 65 : 0, after: 28, line: 215 },
      children: runs(seccion.titulo, { font: SERIF, size: bodySize + 6, bold: true, color: AZUL }),
    }));

    let actual = null;
    const vaciar = () => {
      if (!actual) return;
      const texto = actual.texto.join(' ').replace(/\s+/g, ' ').trim();
      if (actual.tipo === 'lista') {
        bloques.push(new Paragraph({
          numbering: { reference: 'resumen-vinetas', level: 0 },
          spacing: { after: 18, line: 214 },
          children: runs(texto, { font: SANS, size: bodySize, color: TINTA }),
        }));
      } else {
        bloques.push(new Paragraph({
          spacing: { after: 36, line: 216 },
          alignment: AlignmentType.JUSTIFIED,
          children: runs(texto, { font: SANS, size: bodySize, color: TINTA }),
        }));
      }
      actual = null;
    };

    for (const raw of seccion.lineas) {
      const l = raw.trim();
      if (!l) { vaciar(); continue; }
      if (/^[-*]\s+/.test(l)) {
        vaciar();
        actual = { tipo: 'lista', texto: [l.replace(/^[-*]\s+/, '')] };
      } else if (actual) {
        actual.texto.push(l);
      } else {
        actual = { tipo: 'parrafo', texto: [l] };
      }
    }
    vaciar();
  }
  return bloques;
}

const DISTRIBUCION = {
  p1i: ['El problema', 'Por qué no basta con pedir «que se mantenga actualizado»', 'La solución'],
  p1d: ['La otra mitad: de quién son los datos', 'Qué es esto, y qué no es', 'Qué se promete, y qué no'],
  p2i: ['De dónde sale', 'Cómo debe usarse: no copie sin entender'],
  p2d: ['Un aviso, antes de citarlo', 'Quién lo ha hecho'],
};

function tablaColumnas(izquierda, derecha) {
  const sinBorde = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  const celda = (children, margenIzquierdo, margenDerecho) => new TableCell({
    width: { size: 50, type: WidthType.PERCENTAGE },
    margins: { top: 0, bottom: 0, left: margenIzquierdo, right: margenDerecho },
    borders: { top: sinBorde, bottom: sinBorde, left: sinBorde, right: sinBorde },
    children,
  });
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: { top: sinBorde, bottom: sinBorde, left: sinBorde, right: sinBorde, insideHorizontal: sinBorde, insideVertical: sinBorde },
    rows: [new TableRow({ children: [celda(izquierda, 0, 150), celda(derecha, 150, 0)] })],
  });
}

const pie = () => new Footer({ children: [new Paragraph({
  alignment: AlignmentType.RIGHT,
  children: [
    new TextRun({ text: 'AI Clauses · página ', font: SANS, size: 14, color: GRIS }),
    new TextRun({ children: [PageNumber.CURRENT], font: SANS, size: 14, color: GRIS }),
    new TextRun({ text: ' de 2', font: SANS, size: 14, color: GRIS }),
  ],
})] });

const cabecera = () => new Header({ children: [new Paragraph({
  alignment: AlignmentType.RIGHT,
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'D8DEE8', space: 3 } },
  spacing: { after: 50 },
  children: [new TextRun({ text: 'Cláusulas de IA y deep tech · resumen', font: SANS, size: 14, color: GRIS })],
})] });

function crearDocumento(bodySize) {
  const comun = {
    page: {
      margin: {
        top: convertInchesToTwip(0.48), bottom: convertInchesToTwip(0.48),
        left: convertInchesToTwip(0.52), right: convertInchesToTwip(0.52),
        header: convertInchesToTwip(0.24), footer: convertInchesToTwip(0.24),
      },
    },
  };
  return new Document({
    creator: 'Delfina Lafuente Veira; José Antonio Ondiviela García; Miguel Ángel Domínguez Castellano; Enrique Jiménez; Roberto García',
    title: 'AI Clauses · resumen en dos páginas',
    description: 'Resumen ejecutivo del catálogo de cláusulas de IA y deep tech para contratación pública',
    numbering: { config: [{
      reference: 'resumen-vinetas',
      levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.START, style: { paragraph: { indent: { left: 250, hanging: 150 } } } }],
    }] },
    styles: { default: { document: { run: { font: SANS, size: bodySize, color: TINTA } } } },
    sections: [{
      properties: comun,
      headers: { default: cabecera() },
      footers: { default: pie() },
      children: [
        new Paragraph({ spacing: { before: 20, after: 35 }, children: runs(titulo, { font: SERIF, size: bodySize + 14, bold: true, color: AZUL }) }),
        new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: AZUL, space: 2 } },
          spacing: { after: 60 },
          children: runs(subtitulo, { font: SANS, size: bodySize + 1, bold: true, color: GRIS }),
        }),
        tablaColumnas(bloquesSeccion(DISTRIBUCION.p1i, bodySize), bloquesSeccion(DISTRIBUCION.p1d, bodySize)),
        new Paragraph({ children: [new PageBreak()] }),
        tablaColumnas(bloquesSeccion(DISTRIBUCION.p2i, bodySize), bloquesSeccion(DISTRIBUCION.p2d, bodySize)),
      ],
    }],
  });
}

async function main() {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const temporal = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-clauses-resumen-docx-'));
  let elegido = null;
  let paginas = null;
  try {
    for (const bodySize of [20, 19, 18, 17, 16]) {
      const buffer = await Packer.toBuffer(crearDocumento(bodySize));
      fs.writeFileSync(OUT, buffer);
      const pdfTemporal = path.join(temporal, 'resumen-dos-paginas.pdf');
      fs.rmSync(pdfTemporal, { force: true });
      const perfil = path.join(temporal, 'perfil');
      execFileSync(SOFFICE, [`-env:UserInstallation=file://${perfil}`, '--headless', '--convert-to', 'pdf', '--outdir', temporal, OUT], { stdio: 'pipe' });
      const info = execFileSync('pdfinfo', [pdfTemporal], { encoding: 'utf8' });
      paginas = Number(/^Pages:\s+(\d+)$/m.exec(info)?.[1]);
      const texto = execFileSync('pdftotext', ['-q', pdfTemporal, '-'], { encoding: 'utf8' });
      const palabras = texto.split('\f').filter(p => p.trim()).map(p => p.trim().split(/\s+/).length);
      if (paginas === 2 && palabras.length === 2 && Math.min(...palabras) > 350) { elegido = bodySize; break; }
    }
  } finally {
    fs.rmSync(temporal, { recursive: true, force: true });
  }
  if (elegido === null) throw new Error(`El Word del resumen debe tener 2 páginas; el último intento produjo ${paginas}`);
  console.log(`OK  docs/descargas/resumen-dos-paginas.docx  ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB  ·  2 páginas A4  ·  cuerpo a ${(elegido / 2).toFixed(1)} pt`);
}

main().catch(err => { console.error(err); process.exitCode = 1; });
