#!/usr/bin/env node
/**
 * ensamblar.js — cose las partes redactadas en el documento único.
 *
 *   node herramientas/ensamblar.js
 *
 * Lee clausulado/partes/v3_*.md en el orden correcto, les antepone la portada y escribe
 * clausulado/clausulado-ia-deeptech-v3.md, que es la fuente única de la que salen
 * el .docx, el .pdf y la web.
 */
const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
const ORDEN = ['parte0', 'parte1', 'parte2', 'parte3a', 'parte3b', 'parte4', 'parte5', 'parte6'];
const OUT = path.join(RAIZ, 'clausulado', 'clausulado-ia-deeptech-v3.md');

const PORTADA = `# Cláusulas de Inteligencia Artificial y Deep Tech

## Catálogo de cláusulas para pliegos de contratación pública

Versión 4.0, definitiva · octubre de 2026

Catálogo para su incorporación motivada a los Pliegos de Prescripciones Técnicas
y de Cláusulas Administrativas Particulares, y para su fiscalización

Delfina Lafuente Veira · Dr. José Antonio Ondiviela García · Miguel Ángel Domínguez Castellano


Elaborado con asistencia de sistemas de inteligencia artificial. Véase la declaración
de la primera sección, conforme al artículo 50 del Reglamento (UE) 2024/1689.

Se publica «tal cual» (as is). Léase y entiéndase antes de adaptarlo: no copie sin entender.

Licencia Creative Commons Attribution 4.0 Internacional

Fecha de corte de las referencias normativas y de doctrina: 1 de septiembre de 2026.
Actualización de la versión 4.0, a 15 de octubre de 2026: proyecto de Ley de la Administración Digital
e Inteligencia Artificial de la Comunidad de Madrid

---
`;

// la sección de autoría, uso de IA y condiciones de uso va delante de todo:
// el art. 50.5 del Reglamento (UE) 2024/1689 exige que la declaración de uso de
// IA se facilite «de manera clara y distinguible» en la primera exposición
const CREDITOS = fs.readFileSync(path.join(RAIZ, 'clausulado', 'creditos-y-uso.md'), 'utf8').trim();

const partes = [];
for (const k of ORDEN) {
  // las partes están en git desde la 4.0 (antes vivían en _trabajo/, que no se versiona)
  const f = path.join(RAIZ, 'clausulado', 'partes', `v3_${k}.md`);
  // Sin una parte NO se ensambla: antes seguía con un «continue» y, en una copia sin
  // _trabajo/, sustituía el catálogo por un resto de 23 KB y salía con 0 (Gauntlet 4.0, juez 4)
  if (!fs.existsSync(f)) { console.error(`ERROR  falta ${path.relative(RAIZ, f)}: no se ensambla`); process.exit(1); }
  let t = fs.readFileSync(f, 'utf8').trim();
  // quita cercos de código con que algún redactor haya envuelto todo su texto
  t = t.replace(/^```(?:markdown|md)?\s*\n/, '').replace(/\n```\s*$/, '');
  // normaliza el encabezado de parte: las dos mitades de la Parte III se
  // redactaron por separado y llegaban con títulos distintos
  // la Parte III se redactó en dos mitades y al corregirla se unificó: 3a abre la
  // parte y 3b continúa sin encabezado propio. Se normaliza sólo el título de 3a.
  if (k === 'parte3a') t = t.replace(/^## .*$/m, '## PARTE III · CLÁUSULAS ADMINISTRATIVAS (PCAP)');
  // una parte vacía o casi vacía es una parte perdida: la más corta de la 4.0 pasa de 30 KB
  if (t.length < 10000) { console.error(`ERROR  ${path.relative(RAIZ, f)} mide ${t.length} caracteres: parte vacía o truncada`); process.exit(1); }
  partes.push({ k, t });
  console.log(`  ok      v3_${k}.md  ${(t.length / 1024).toFixed(0)} KB`);
}

const doc = PORTADA + '\n' + [CREDITOS, ...partes.map(p => p.t)].join('\n\n---\n\n') + '\n';

const h2 = (doc.match(/^## /gm) || []).length;
const h3 = (doc.match(/^### /gm) || []).length;
const pliegos = (doc.match(/^:::\s*pliego/gm) || []).length;
const cierres = (doc.match(/^:::\s*$/gm) || []).length;
console.log(`\nOK  ${path.relative(RAIZ, OUT)}`);
console.log(`    ${(doc.length / 1024).toFixed(0)} KB · ~${Math.round(doc.length / 2800)} páginas · ${h2} secciones · ${h3} subsecciones`);
console.log(`    ${pliegos} bloques de texto para el pliego (${cierres} cierres)${pliegos !== cierres ? '  <-- DESCUADRE' : ''}`);
if (pliegos !== cierres) { console.error('ERROR  bloques :::pliego sin cerrar o cierres de más: no se publica un documento descuadrado'); process.exit(1); }
if (doc.length < 1000000) { console.error(`ERROR  el ensamblado mide ${(doc.length / 1024).toFixed(0)} KB: falta contenido`); process.exit(1); }

// sólo se escribe si todo lo anterior ha pasado: un ensamblado malo no sustituye al bueno
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, doc);
