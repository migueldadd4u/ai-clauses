#!/usr/bin/env node
/**
 * build_docx.js — genera el .docx del clausulado a partir del markdown ensamblado.
 *
 *   NODE_PATH=$(npm root -g) node herramientas/build_docx.js <entrada.md> <salida.docx>
 *
 * Soporta: portada (bloque inicial hasta el primer "---"), encabezados ##..#####,
 * párrafos con **negrita** / *cursiva* / `código`, listas con viñeta y numeradas,
 * tablas markdown, blockquotes, reglas horizontales y —lo importante— los bloques
 *
 *     :::pliego
 *     texto que se copia literalmente al pliego
 *     :::
 *
 * que se renderizan como recuadro sombreado con borde, para que quien redacta un
 * pliego vea de un vistazo qué se copia y qué es comentario.
 *
 * El markdown de origen trae los párrafos partidos en líneas de ~100 caracteres.
 * Una línea NO es un párrafo: se cosen hasta el siguiente corte real y se emite
 * UN Paragraph por párrafo. Los cortes están documentados más abajo, en el bloque
 * «dónde corta un párrafo»: tocarlos sin recorrer antes el markdown entero es la
 * forma más rápida de partir un pliego por la mitad o de fundir dos apartados.
 */
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  Footer, Header, PageNumber, TableOfContents, PageBreak, convertInchesToTwip,
  ExternalHyperlink,
} = require('docx');

const AZUL = '1F3864';
const AZUL_CLARO = 'D9E2F3';
const GRIS = '595959';
const GRIS_CLARO = 'F2F2F2';
const VERDE = '2E6B3E';
const SERIF = 'Georgia';
const SANS = 'Calibri';
const MONO = 'Consolas';

/* ---------- dónde corta un párrafo ----------
   Los párrafos del markdown vienen partidos en líneas de ~100 caracteres: una
   línea NO es un párrafo, y hay que coserlas hasta el siguiente corte real.
   Pero no todo lo que va pegado al texto anterior es continuación. Éstos son
   los cortes que markdown NO reconoce —los trata como continuación, y por eso
   en el PDF salen corridos— y que aquí sí se respetan, porque un pliego se lee
   apartado por apartado y un formulario se copia con sus renglones:

     ENUMERADO   a)  (i)  L1.  G11.  B.1)   -> cada apartado, su párrafo
     CASILLA     ☐                          -> cada casilla, su renglón
     ROTULO      **Rótulo:**  *(nota)*      -> rótulo o nota al margen, PERO
                 sólo cuando la línea anterior cierra frase: si no, es una
                 negrita a principio de renglón dentro de un párrafo partido
                 («... se ancla por vía» / «**normativa** o **funcional** ...»)
     FORMULARIO  línea con relleno «……»     -> renglón de formulario
     MODELO      ---- INICIO/FIN DEL MODELO ----  -> dentro no se cose nada: el
                 salto de línea ES el contenido y el bloque se copia tal cual

   Todo lo demás se cose. La lista no es una corazonada: sale de recorrer el
   markdown entero y revisar una a una las líneas que el arreglo iba a coser.
   Si el catálogo estrena una forma de enumerar, hay que añadirla aquí. */
const ENUMERADO   = /^(\(?[a-z]{1,3}\)|[A-Z]{1,3}\.?\d{1,3}[.)])\s/;
const CASILLA     = /^☐/;
const ROTULO      = /^(\*\*|\*\()/;
const CIERRA_FRASE = /([.!?…]|\*\*)["»)\]]?$/;
const FORMULARIO  = /…\s*…/;
const MODELO_INI  = /^-{3,}\s*INICIO DEL MODELO/i;
const MODELO_FIN  = /^-{3,}\s*FIN DEL MODELO/i;
const abreParrafo = (l, previa) =>
  ENUMERADO.test(l) || CASILLA.test(l) || (ROTULO.test(l) && CIERRA_FRASE.test(previa || ''));

const src = process.argv[2];
const out = process.argv[3] || src.replace(/\.md$/, '.docx');
const md = fs.readFileSync(src, 'utf8');
const lines = md.split('\n');

/* ---------- inline: **negrita**, *cursiva*, `código`, [texto](url) ----------
   Es recursivo a propósito: un **[enlace en negrita](url)** es justo el caso de
   los créditos, y con un parser plano el enlace se perdía dentro de la negrita
   y salía coloreado pero muerto. */
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const tok = m[0];
    if (tok.startsWith('**')) {
      out.push(...runs(tok.slice(2, -2), { ...base, bold: true }));
    } else if (tok.startsWith('`')) {
      out.push(new TextRun({ text: tok.slice(1, -1), font: MONO, size: (base.size || 22) - 2, ...base, color: base.color || '2F5496' }));
    } else if (tok.startsWith('[')) {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok);
      out.push(new ExternalHyperlink({
        link: mm[2],
        children: [new TextRun({ ...base, text: mm[1], color: '2F5496', underline: {} })],
      }));
    } else {
      out.push(...runs(tok.slice(1, -1), { ...base, italics: true }));
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out.length ? out : [new TextRun({ text: '', ...base })];
}

const P = (text, opt = {}) => new Paragraph({
  spacing: { after: opt.after ?? 120, line: opt.line ?? 276 },
  alignment: opt.align,
  indent: opt.indent,
  keepNext: opt.keepNext,
  children: runs(text, { font: opt.font || SANS, size: opt.size || 21, color: opt.color, bold: opt.bold, italics: opt.italics }),
});

/* ---------- tablas ---------- */
function splitRow(l) {
  return l.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim());
}
function buildTable(rows) {
  const head = rows[0];
  const body = rows.slice(1);
  const cell = (txt, isHead) => new TableCell({
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    shading: isHead ? { type: ShadingType.CLEAR, fill: AZUL_CLARO } : undefined,
    children: [new Paragraph({
      spacing: { after: 0, line: 240 },
      children: runs(txt, { font: SANS, size: 18, bold: isHead, color: isHead ? AZUL : undefined }),
    })],
  });
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: ['top', 'bottom', 'left', 'right', 'insideHorizontal', 'insideVertical'].reduce((a, k) => {
      a[k] = { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' }; return a;
    }, {}),
    rows: [
      new TableRow({ tableHeader: true, children: head.map(c => cell(c, true)) }),
      ...body.map(r => new TableRow({ children: head.map((_, i) => cell(r[i] ?? '', false)) })),
    ],
  });
}

/* ---------- recuadro :::pliego ---------- */
function pliegoBox(body) {
  const inner = [];
  inner.push(new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text: 'TEXTO PARA EL PLIEGO', bold: true, size: 16, color: VERDE, font: SANS, characterSpacing: 30 })],
  }));
  let tableBuf = [];
  const flush = () => { if (tableBuf.length) { inner.push(buildTable(tableBuf)); inner.push(new Paragraph({ spacing: { after: 80 }, children: [] })); tableBuf = []; } };
  // mismo acumulador que en el cuerpo: dentro del recuadro el markdown viene
  // igual de partido, y un párrafo del pliego roto en tres es peor todavía
  let parrafo = null;
  let enModelo = false;
  const vaciar = () => {
    if (!parrafo) return;
    const t = parrafo.lineas.join(' ').replace(/\s+/g, ' ').trim();
    if (parrafo.tipo === 'vineta') {
      inner.push(new Paragraph({ bullet: { level: 0 }, spacing: { after: 60, line: 264 }, children: runs(t, { font: SERIF, size: 20 }) }));
    } else if (parrafo.tipo === 'numerada') {
      inner.push(new Paragraph({ numbering: { reference: 'num', level: 0 }, spacing: { after: 60, line: 264 }, children: runs(t, { font: SERIF, size: 20 }) }));
    } else {
      inner.push(new Paragraph({ spacing: { after: 100, line: 264 }, children: runs(t, { font: SERIF, size: 20 }) }));
    }
    parrafo = null;
  };
  for (const l of body) {
    const t = l.trim();
    if (MODELO_INI.test(t) || MODELO_FIN.test(t)) {
      vaciar(); flush();
      enModelo = MODELO_INI.test(t);
      inner.push(new Paragraph({ spacing: { after: 100, line: 264 }, children: runs(t, { font: SERIF, size: 20 }) }));
      continue;
    }
    if (/^\|.*\|$/.test(t)) { vaciar(); if (!/^\|[\s:|-]+\|$/.test(t)) tableBuf.push(splitRow(t)); continue; }
    flush();
    if (!t) { vaciar(); continue; }
    if (/^[-*]\s+/.test(t)) {
      vaciar(); parrafo = { tipo: 'vineta', lineas: [t.replace(/^[-*]\s+/, '')] };
    } else if (/^\d+\.\s+/.test(t)) {
      vaciar(); parrafo = { tipo: 'numerada', lineas: [t.replace(/^\d+\.\s+/, '')] };
    } else if (enModelo || FORMULARIO.test(t)) {
      // renglón de formulario: se copia con su salto de línea, no se cose
      vaciar(); parrafo = { tipo: 'texto', lineas: [t] }; vaciar();
    } else if (abreParrafo(t, parrafo && parrafo.lineas[parrafo.lineas.length - 1])) {
      vaciar(); parrafo = { tipo: 'texto', lineas: [t] };
    } else if (parrafo) {
      parrafo.lineas.push(t);                       // continuación: se cose
    } else {
      parrafo = { tipo: 'texto', lineas: [t] };
    }
  }
  vaciar();
  flush();
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: VERDE },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: VERDE },
      left: { style: BorderStyle.SINGLE, size: 18, color: VERDE },
      right: { style: BorderStyle.SINGLE, size: 6, color: VERDE },
      insideHorizontal: { style: BorderStyle.NONE, size: 0 },
      insideVertical: { style: BorderStyle.NONE, size: 0 },
    },
    rows: [new TableRow({
      children: [new TableCell({
        shading: { type: ShadingType.CLEAR, fill: 'F4F8F5' },
        margins: { top: 180, bottom: 180, left: 220, right: 180 },
        children: inner.length ? inner : [new Paragraph({ children: [] })],
      })],
    })],
  });
}

/* ---------- recorrido ---------- */
const children = [];
let i = 0;

// Portada: todo lo anterior al primer "---" en línea sola.
children.push(new Paragraph({ spacing: { before: 2200 }, children: [] }));
// también en la portada: dos líneas de la misma frase son UN párrafo centrado,
// no dos bloques separados por un hueco a mitad de oración
let portada = [];
const vaciarPortada = () => {
  if (!portada.length) return;
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 140 },
    children: runs(portada.join(' ').replace(/\s+/g, ' ').trim(), { font: SANS, size: 20, color: GRIS }),
  }));
  portada = [];
};
while (i < lines.length && lines[i].trim() !== '---') {
  const l = lines[i].trim();
  if (l.startsWith('# ')) {
    vaciarPortada();
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 240 },
      children: [new TextRun({ text: l.slice(2), bold: true, size: 60, color: AZUL, font: SERIF })],
    }));
  } else if (l.startsWith('## ')) {
    vaciarPortada();
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER, spacing: { after: 900 },
      children: [new TextRun({ text: l.slice(3), size: 28, color: GRIS, font: SERIF, italics: true })],
    }));
  } else if (l) {
    portada.push(l);
  } else {
    vaciarPortada();
  }
  i++;
}
vaciarPortada();
i++; // salta el ---

// Índice automático
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(new Paragraph({
  spacing: { after: 300 },
  children: [new TextRun({ text: 'Índice', bold: true, size: 36, color: AZUL, font: SERIF })],
}));
children.push(new TableOfContents('Índice', { hyperlink: true, headingStyleRange: '1-4' }));
children.push(new Paragraph({ children: [new PageBreak()] }));

let tableBuf = [];
const flushTable = () => {
  if (tableBuf.length) {
    children.push(buildTable(tableBuf));
    children.push(new Paragraph({ spacing: { after: 200 }, children: [] }));
    tableBuf = [];
  }
};

/* El párrafo en construcción. Aquí está el arreglo: el markdown de origen trae
   los párrafos partidos en líneas de ~100 caracteres, y emitir un Paragraph por
   línea rompía el texto cada cien caracteres en las 294 páginas del Word. Se
   acumulan las líneas y se emite UN Paragraph por párrafo del markdown, unido
   con espacio. De regalo se arregla la **negrita** abierta en una línea y
   cerrada en la siguiente, que salía con los asteriscos a la vista porque
   runs() nunca llegaba a ver el marcador de cierre. */
let parrafo = null;            // { tipo: 'texto'|'vineta'|'numerada'|'cita', nivel, lineas }
let enCodigo = false;          // dentro de un cerco ``` ... ```

let enModelo = false;          // dentro de ---- INICIO/FIN DEL MODELO ----

const vaciarParrafo = () => {
  if (!parrafo) return;
  const t = parrafo.lineas.join(' ').replace(/\s+/g, ' ').trim();
  if (parrafo.tipo === 'vineta') {
    children.push(new Paragraph({
      bullet: { level: parrafo.nivel },
      spacing: { after: 70, line: 268 },
      children: runs(t, { font: SANS, size: 21 }),
    }));
  } else if (parrafo.tipo === 'numerada') {
    children.push(new Paragraph({
      numbering: { reference: 'num', level: 0 },
      spacing: { after: 70, line: 268 },
      children: runs(t, { font: SANS, size: 21 }),
    }));
  } else if (parrafo.tipo === 'cita') {
    children.push(new Paragraph({
      spacing: { after: 140, line: 264 }, indent: { left: 400 },
      border: { left: { style: BorderStyle.SINGLE, size: 12, color: 'BFBFBF', space: 8 } },
      children: runs(t, { font: SERIF, size: 20, italics: true, color: GRIS }),
    }));
  } else {
    children.push(P(t, { after: 140 }));
  }
  parrafo = null;
};
const abrirParrafo = (tipo, texto, nivel = 0) => { vaciarParrafo(); parrafo = { tipo, nivel, lineas: [texto] }; };

for (; i < lines.length; i++) {
  const raw = lines[i];
  const l = raw.trim();

  // cerco de código: dentro NO se cose nada, la partición en líneas ES el
  // contenido (la fórmula del valor estimado se lee sumando por líneas)
  if (/^```/.test(l)) { vaciarParrafo(); flushTable(); enCodigo = !enCodigo; continue; }
  if (enCodigo) {
    children.push(new Paragraph({
      spacing: { after: 0, line: 240 }, indent: { left: 300 },
      children: [new TextRun({ text: raw.replace(/\s+$/, '').replace(/^ +/, m2 => '\u00A0'.repeat(m2.length)), font: MONO, size: 18, color: '2F5496' })],
    }));
    continue;
  }

  // delimitadores ---- INICIO/FIN DEL MODELO ----: son la convención declarada
  // del documento («lo que está entre esas dos líneas se copia»), y dentro de
  // ellos los renglones se respetan uno a uno
  if (MODELO_INI.test(l) || MODELO_FIN.test(l)) {
    vaciarParrafo();
    flushTable();
    enModelo = MODELO_INI.test(l);
    children.push(P(l, { after: 140 }));
    continue;
  }

  // bloque :::pliego
  if (/^:::\s*pliego/i.test(l)) {
    vaciarParrafo();
    flushTable();
    const body = [];
    i++;
    while (i < lines.length && !/^:::\s*$/.test(lines[i].trim())) { body.push(lines[i]); i++; }
    children.push(pliegoBox(body));
    children.push(new Paragraph({ spacing: { after: 220 }, children: [] }));
    continue;
  }

  // tabla
  if (/^\|.*\|$/.test(l)) {
    if (/^\|[\s:|-]+\|$/.test(l)) continue;   // separador
    vaciarParrafo();
    tableBuf.push(splitRow(l));
    continue;
  }
  flushTable();

  if (!l) { vaciarParrafo(); continue; }

  if (l === '---') { vaciarParrafo(); children.push(new Paragraph({ spacing: { before: 120, after: 200 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'D0D0D0' } }, children: [] })); continue; }

  let m;
  if ((m = /^(#{2,5})\s+(.*)$/.exec(l))) {
    vaciarParrafo();
    const lvl = m[1].length;                       // 2..5
    const sizes = { 2: 34, 3: 26, 4: 22, 5: 20 };
    const heading = { 2: HeadingLevel.HEADING_1, 3: HeadingLevel.HEADING_2, 4: HeadingLevel.HEADING_3, 5: HeadingLevel.HEADING_4 }[lvl];
    if (lvl === 2) children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(new Paragraph({
      heading, keepNext: true,
      spacing: { before: lvl === 2 ? 200 : 320, after: lvl === 2 ? 240 : 140 },
      children: [new TextRun({
        text: m[2].replace(/\*\*/g, ''),
        bold: true, size: sizes[lvl], color: lvl <= 3 ? AZUL : '2F5496', font: SERIF,
      })],
    }));
    continue;
  }

  if (/^>/.test(l)) {
    const t = l.replace(/^>\s?/, '');
    // un «>» a solas separa dos párrafos dentro de la misma cita
    if (!t) { vaciarParrafo(); continue; }
    // una viñeta dentro de la cita abre bloque propio; el texto corrido continúa
    if (parrafo && parrafo.tipo === 'cita' && !/^([-*]\s|\d+\.\s)/.test(t)) parrafo.lineas.push(t);
    else abrirParrafo('cita', t);
    continue;
  }

  if (/^[-*]\s+/.test(l)) {
    abrirParrafo('vineta', l.replace(/^[-*]\s+/, ''), (raw.match(/^\s*/)[0].length >= 2) ? 1 : 0);
    continue;
  }

  if (/^\d+\.\s+/.test(l)) {
    abrirParrafo('numerada', l.replace(/^\d+\.\s+/, ''));
    continue;
  }

  // renglón de formulario, o cualquier línea dentro de un ---- MODELO ----:
  // el salto de línea es contenido, se emite tal cual
  if (enModelo || FORMULARIO.test(l)) { vaciarParrafo(); children.push(P(l, { after: 140 })); continue; }

  // apartado «a)», casilla «☐», y rótulo «**...**» o nota «*(...)*» cuando la
  // línea anterior cierra frase: párrafo propio
  if (abreParrafo(l, parrafo && parrafo.lineas[parrafo.lineas.length - 1])) { abrirParrafo('texto', l); continue; }

  // texto corrido: continúa el párrafo, la viñeta, la numeración o la cita
  // que estuviera abierta. Éste es el caso que antes emitía un Paragraph suelto.
  if (parrafo) parrafo.lineas.push(l);
  else parrafo = { tipo: 'texto', nivel: 0, lineas: [l] };
}
vaciarParrafo();
flushTable();

const doc = new Document({
  creator: 'Miguel Ángel Domínguez Castellano',
  title: 'Cláusulas de IA y Deep Tech para la contratación pública',
  description: 'Clausulado tipo, versión 3.0',
  numbering: {
    config: [{
      reference: 'num',
      levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.START,
                 style: { paragraph: { indent: { left: 480, hanging: 260 } } } }],
    }],
  },
  styles: {
    default: {
      document: { run: { font: SANS, size: 21 } },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: { top: convertInchesToTwip(1), bottom: convertInchesToTwip(1), left: convertInchesToTwip(1.1), right: convertInchesToTwip(1.1) },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          spacing: { after: 200 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'D0D0D0', space: 4 } },
          children: [new TextRun({ text: 'Cláusulas de IA y Deep Tech · versión 3.0', size: 16, color: GRIS, font: SANS })],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: GRIS, font: SANS })],
        })],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(out, buf);
  console.log(`OK  ${out}  ${(buf.length / 1024).toFixed(0)} KB  ·  ${children.length} bloques`);
});
