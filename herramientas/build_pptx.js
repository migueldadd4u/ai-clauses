#!/usr/bin/env node
/**
 * build_pptx.js — presentación de AI Clauses para quien no sabe nada del tema.
 *
 *   NODE_PATH=$(npm root -g) node herramientas/build_pptx.js
 *
 * Cada diapositiva se escribe a mano: la composición importa más que la
 * automatización, y el público objetivo no es técnico.
 */
const pptxgen = require('pptxgenjs');
const path = require('path');

const p = new pptxgen();
p.layout = 'LAYOUT_WIDE';                  // 13.3 x 7.5
p.author = 'Miguel Ángel Domínguez Castellano';
p.title = 'AI Clauses · Cláusulas de IA para la contratación pública';

const AZUL = '1F3864';
const AZUL_MED = '2F5496';
const TINTE = 'EDF1F8';
const VERDE = '2E6B3E';
const TINTE_V = 'EFF5F0';
const AMBAR = '8A5A00';
const TINTE_A = 'FDF6E6';
const BLANCO = 'FFFFFF';
const CARBON = '22201D';
const GRIS = '6E6A63';
const GRIS_CL = 'C9D3E6';

const F_TIT = 'Georgia';
const F_TXT = 'Calibri';

let s;
const nueva = (color = BLANCO) => { s = p.addSlide(); s.background = { color }; return s; };
const titulo = (t, opt = {}) => s.addText(t, {
  x: 0.9, y: opt.y ?? 0.55, w: 11.5, h: 0.9,
  fontFace: F_TIT, fontSize: opt.size ?? 36, bold: true, color: opt.color ?? AZUL,
});
const pie = t => s.addText(t, {
  x: 0.9, y: 6.55, w: 11.5, h: 0.6, fontFace: F_TXT, fontSize: 14, italic: true, color: GRIS,
});
const tarjeta = (x, y, w, h, fill) => s.addShape(p.ShapeType.roundRect, {
  x, y, w, h, fill: { color: fill }, line: { type: 'none' }, rectRadius: 0.1,
});

/* ---------- 1 · portada ---------- */
nueva(AZUL);
s.addText('AI Clauses', { x: 0.9, y: 1.75, w: 11.5, h: 0.8, fontFace: F_TIT, fontSize: 30, color: GRIS_CL });
s.addText('Un contrato público de tecnología dura años.\nLa tecnología que compra, no.', {
  x: 0.9, y: 2.5, w: 11.5, h: 1.9, fontFace: F_TIT, fontSize: 42, bold: true, color: BLANCO, lineSpacingMultiple: 1.15,
});
s.addText('Cláusulas de inteligencia artificial y deep tech para pliegos de contratación pública', {
  x: 0.9, y: 4.6, w: 11.5, h: 0.6, fontFace: F_TXT, fontSize: 19, color: GRIS_CL,
});
s.addShape(p.ShapeType.line, { x: 0.9, y: 5.5, w: 2.2, h: 0, line: { color: GRIS_CL, width: 1.5 } });
s.addText('Delfina Lafuente Veira  ·  Dr. José Antonio Ondiviela García  ·  Miguel Ángel Domínguez Castellano', { x: 0.9, y: 5.75, w: 11.5, h: 0.4, fontFace: F_TXT, fontSize: 15, color: BLANCO });
s.addText('Versión 3.0 · septiembre de 2026 · publicado en abierto bajo licencia CC BY 4.0', {
  x: 0.9, y: 6.15, w: 11.5, h: 0.4, fontFace: F_TXT, fontSize: 13, color: GRIS_CL,
});

/* ---------- 2 · la idea en una frase ---------- */
nueva();
titulo('La idea, en una frase');
s.addText('Que el contrato obligue al proveedor a entregar\ncapacidades concretas y comprobables durante toda su vida,\nen lugar de una promesa de «mantenerse actualizado».', {
  x: 1.3, y: 2.1, w: 10.7, h: 2.2, fontFace: F_TIT, fontSize: 28, italic: true, color: CARBON,
  align: 'center', lineSpacingMultiple: 1.25,
});
tarjeta(1.3, 4.6, 10.7, 1.5, TINTE);
s.addText('Y que se pueda comprobar con un acta, no con una discusión.', {
  x: 1.7, y: 4.95, w: 9.9, h: 0.8, fontFace: F_TXT, fontSize: 20, color: AZUL, align: 'center', valign: 'middle',
});
pie('Todo lo demás de esta presentación es la explicación de esa frase.');

/* ---------- 3 · el problema ---------- */
nueva();
titulo('El problema');
s.addText('Un ayuntamiento contrata un sistema de gestión: tributos, padrón, contabilidad, atención al ciudadano. Da igual cuál.', {
  x: 0.9, y: 1.6, w: 11.5, h: 0.7, fontFace: F_TXT, fontSize: 20, color: CARBON,
});
const linea = [
  ['Año 0', 'Se firma', 'La herramienta está al día. El pliego es correcto.', AZUL],
  ['Año 2', 'Aparece algo mejor', 'Capacidades que al redactar el pliego no existían y nadie podía nombrar.', AMBAR],
  ['Año 5', 'Se acaba el contrato', 'Cinco años de servicio público prestado con herramientas de otra época.', '9A3324'],
];
linea.forEach((l, i) => {
  const x = 0.9 + i * 3.95;
  tarjeta(x, 2.6, 3.65, 2.45, i === 0 ? TINTE : (i === 1 ? TINTE_A : 'FBEEEC'));
  s.addText(l[0], { x: x + 0.3, y: 2.85, w: 3.05, h: 0.45, fontFace: F_TXT, fontSize: 13, bold: true, color: l[3], charSpacing: 2 });
  s.addText(l[1], { x: x + 0.3, y: 3.3, w: 3.05, h: 0.6, fontFace: F_TIT, fontSize: 21, bold: true, color: CARBON });
  s.addText(l[2], { x: x + 0.3, y: 3.9, w: 3.05, h: 1.05, fontFace: F_TXT, fontSize: 15, color: CARBON });
});
pie('Nadie ha hecho nada mal por el camino. Es un defecto de diseño del contrato.');

/* ---------- 4 · las tres salidas ---------- */
nueva();
titulo('A los dos años sólo hay tres salidas, y las tres cuestan dinero público');
const salidas = [
  ['Se paga dos veces', 'Se saca un contrato nuevo para «modernizar» lo que ya se compró. La misma función, otra vez facturada.'],
  ['Se aguanta', 'Se espera al final del contrato prestando el servicio con lo que hay.'],
  ['Se queda cautivo', 'Cambiar de proveedor obligaría a dejar atrás los datos y los desarrollos propios. Sale tan caro que no se cambia.'],
];
salidas.forEach((v, i) => {
  const x = 0.9 + i * 3.95;
  tarjeta(x, 2.0, 3.65, 2.95, TINTE);
  s.addText(String(i + 1), { x: x + 0.3, y: 2.25, w: 0.6, h: 0.6, fontFace: F_TIT, fontSize: 30, bold: true, color: GRIS_CL });
  s.addText(v[0], { x: x + 0.3, y: 2.9, w: 3.05, h: 0.7, fontFace: F_TIT, fontSize: 20, bold: true, color: AZUL });
  s.addText(v[1], { x: x + 0.3, y: 3.6, w: 3.05, h: 1.25, fontFace: F_TXT, fontSize: 15, color: CARBON });
});
pie('La tercera es la peor: la licitación siguiente está decidida antes de publicarse.');

/* ---------- 5 · por qué no vale pedir innovación ---------- */
nueva();
titulo('«Que se comprometa a mantenerlo actualizado» no sirve');
s.addText('Suena razonable. Es lo primero que uno escribiría. Y no funciona por tres motivos:', {
  x: 0.9, y: 1.55, w: 11.5, h: 0.5, fontFace: F_TXT, fontSize: 18, color: CARBON,
});
const motivos = [
  ['La empresa no puede ponerle precio', 'Se le pide algo cuyo contenido nadie conoce todavía. O infla la oferta por si acaso, o la ignora y ya discutirá durante la ejecución.'],
  ['La administración no puede exigirlo', 'Demostrar que una tecnología concreta «era necesaria» es una apreciación técnica que no se sostiene frente a un contratista bien asesorado.'],
  ['Y un tribunal la anula', 'Una obligación genérica no puede ser ni siquiera una obligación contractual, y menos aún una cuyo incumplimiento permita resolver el contrato.'],
];
motivos.forEach((m, i) => {
  const y = 2.3 + i * 1.32;
  s.addShape(p.ShapeType.rect, { x: 0.9, y, w: 0.09, h: 1.08, fill: { color: AZUL }, line: { type: 'none' } });
  s.addText(m[0], { x: 1.25, y, w: 4.3, h: 1.08, fontFace: F_TIT, fontSize: 19, bold: true, color: AZUL, valign: 'middle' });
  s.addText(m[1], { x: 5.7, y, w: 6.7, h: 1.08, fontFace: F_TXT, fontSize: 15.5, color: CARBON, valign: 'middle' });
});
pie('El clausulado que no se puede exigir es peor que no tener clausulado: da falsa seguridad.');

/* ---------- 6 · la vuelta de tuerca ---------- */
nueva();
titulo('La vuelta de tuerca');
s.addText('En lugar de comprar una evolución futura indefinida…', {
  x: 0.9, y: 1.6, w: 11.5, h: 0.5, fontFace: F_TXT, fontSize: 19, color: GRIS,
});
tarjeta(0.9, 2.2, 11.5, 1.9, TINTE_V);
s.addText('…se compran capacidades concretas, con plazo y con criterios de aceptación\nverificables, fijadas al licitar y revisadas cada año para las licitaciones siguientes.', {
  x: 1.4, y: 2.5, w: 10.5, h: 1.3, fontFace: F_TIT, fontSize: 23, color: CARBON, align: 'center', valign: 'middle', lineSpacingMultiple: 1.2,
});
const efectos = [
  ['La empresa', 'sabe exactamente qué está ofertando, y puede ponerle precio.'],
  ['La administración', 'sabe exactamente qué puede exigir, y cuándo.'],
  ['El tribunal', 'no tiene nada indeterminado que anular.'],
];
efectos.forEach((e, i) => {
  const x = 0.9 + i * 3.95;
  s.addText(e[0], { x, y: 4.45, w: 3.65, h: 0.5, fontFace: F_TIT, fontSize: 19, bold: true, color: VERDE });
  s.addText(e[1], { x, y: 4.95, w: 3.65, h: 1.2, fontFace: F_TXT, fontSize: 15.5, color: CARBON });
});
pie('Lo que no se pueda concretar hoy, se concreta el año que viene, en la licitación siguiente.');

/* ---------- 7 · la otra mitad ---------- */
nueva();
titulo('La otra mitad del problema: de quién son los datos');
s.addText('Un pliego puede restringir la competencia de dos maneras. La conocida es escribirlo a medida de un proveedor. La otra es más silenciosa:', {
  x: 0.9, y: 1.55, w: 11.5, h: 0.8, fontFace: F_TXT, fontSize: 18, color: CARBON,
});
tarjeta(0.9, 2.5, 11.5, 1.35, TINTE_A);
s.addText('Si al terminar el contrato los datos, los desarrollos y la lógica de negocio se quedan con el proveedor saliente, cambiar de empresa es tan caro que nadie cambia.', {
  x: 1.35, y: 2.75, w: 10.6, h: 0.9, fontFace: F_TXT, fontSize: 18, color: CARBON, valign: 'middle',
});
s.addText('Por eso una parte central del clausulado no habla de inteligencia artificial:', {
  x: 0.9, y: 4.15, w: 11.5, h: 0.45, fontFace: F_TXT, fontSize: 17, color: GRIS,
});
[['De quién son los datos', 'y en qué formato se devuelven'],
 ['De quién son los algoritmos', 'hechos a medida para la administración'],
 ['Qué se entrega al terminar', 'en qué plazo, y quién comprueba que funciona']].forEach((c, i) => {
  const x = 0.9 + i * 3.95;
  tarjeta(x, 4.7, 3.65, 1.5, TINTE_V);
  s.addText(c[0], { x: x + 0.3, y: 4.9, w: 3.05, h: 0.5, fontFace: F_TIT, fontSize: 17, bold: true, color: VERDE });
  s.addText(c[1], { x: x + 0.3, y: 5.4, w: 3.05, h: 0.7, fontFace: F_TXT, fontSize: 14, color: CARBON });
});
pie('Un pliego que restringe la competencia no es más exigente: es más frágil.');

/* ---------- 8 · qué NO se promete ---------- */
nueva();
titulo('Lo que este documento NO promete');
tarjeta(0.9, 1.7, 11.5, 1.5, TINTE_A);
s.addText('No se promete que ningún tribunal pueda anular nada.\nNo es prometible: aún no existe doctrina sobre cláusulas de IA en contratación pública.', {
  x: 1.35, y: 1.95, w: 10.6, h: 1.0, fontFace: F_TIT, fontSize: 20, color: CARBON, valign: 'middle', lineSpacingMultiple: 1.2,
});
s.addText('Lo que sí está diseñado, y se puede comprobar cláusula por cláusula:', {
  x: 0.9, y: 3.5, w: 11.5, h: 0.5, fontFace: F_TXT, fontSize: 18, bold: true, color: AZUL,
});
s.addText([
  { text: 'una necesidad identificada, y la norma o el acuerdo que la impone;\n', options: { bullet: true } },
  { text: 'un instrumento correcto, y sólo uno, para que nada se puntúe dos veces;\n', options: { bullet: true } },
  { text: 'un medio de acreditación y una forma de verificación, con quién la hace y cuánto cuesta;\n', options: { bullet: true } },
  { text: 'una consecuencia tasada si se incumple, proporcionada y dentro de los límites legales;\n', options: { bullet: true } },
  { text: 'y una regla de separabilidad: si cae una pieza, no arrastra el pliego entero.', options: { bullet: true } },
], { x: 1.2, y: 4.1, w: 11.0, h: 2.2, fontFace: F_TXT, fontSize: 17, color: CARBON, lineSpacingMultiple: 1.35 });
pie('Prometer que algo es inanulable destruye su credibilidad ante quien tiene que firmarlo.');

/* ---------- 9 · de dónde sale ---------- */
nueva();
titulo('De dónde sale: un ayuntamiento y tres objeciones');
s.addText('El clausulado nació en el Ayuntamiento de Pozuelo de Alarcón en 2026 y se sometió al criterio de su área de contratación. Lo que esa área respondió es lo que da forma a esta versión.', {
  x: 0.9, y: 1.55, w: 11.5, h: 0.9, fontFace: F_TXT, fontSize: 17.5, color: CARBON,
});
const objs = [
  ['«Artificioso al contrato»', 'Unas cláusulas que no nacen de una necesidad demandada por nadie no obligan a nada útil.',
   'Cada cláusula lleva ahora el origen de su necesidad: una norma, el servicio gestor, o un acuerdo del órgano de gobierno. Lo que no tiene ninguno de los tres, no entra.'],
  ['«Demasiado abstracto»', 'No se sabía qué copiar al pliego y qué era explicación.',
   'Cada cláusula tiene siete epígrafes fijos, y el texto que se copia va dentro de un recuadro. Fuera del recuadro no se copia nada.'],
  ['«Pruébalo primero»', 'Antes de generalizarlo, aplicarlo a un contrato de verdad.',
   'El documento incluye el caso piloto resuelto entero, con su expediente y con lo que hay que rectificar de lo ya redactado.'],
];
objs.forEach((o, i) => {
  const y = 2.6 + i * 1.35;
  tarjeta(0.9, y, 11.5, 1.15, i % 2 ? BLANCO : TINTE);
  s.addText(o[0], { x: 1.15, y: y + 0.1, w: 3.0, h: 0.95, fontFace: F_TIT, fontSize: 17, bold: true, color: AZUL, valign: 'middle' });
  s.addText(o[2], { x: 4.3, y: y + 0.1, w: 7.9, h: 0.95, fontFace: F_TXT, fontSize: 14.5, color: CARBON, valign: 'middle' });
});
pie('Las tres objeciones se responden dentro del documento, no en una nota al pie.');

/* ---------- 10 · qué es y qué no es ---------- */
nueva();
titulo('Qué es, y qué no es');
tarjeta(0.9, 1.8, 5.6, 4.2, TINTE_V);
s.addText('ES', { x: 1.25, y: 2.05, w: 4.9, h: 0.5, fontFace: F_TXT, fontSize: 14, bold: true, color: VERDE, charSpacing: 3 });
s.addText([
  { text: 'Un catálogo de cláusulas ya redactadas, con su justificación y su medio de prueba.\n\n', options: {} },
  { text: 'Un manual de expediente: qué documento hace falta, quién lo firma y en qué orden.\n\n', options: {} },
  { text: 'Un caso piloto resuelto de principio a fin.', options: {} },
], { x: 1.25, y: 2.6, w: 4.9, h: 3.2, fontFace: F_TXT, fontSize: 16, color: CARBON });

tarjeta(6.8, 1.8, 5.6, 4.2, 'FBEEEC');
s.addText('NO ES', { x: 7.15, y: 2.05, w: 4.9, h: 0.5, fontFace: F_TXT, fontSize: 14, bold: true, color: '9A3324', charSpacing: 3 });
s.addText([
  { text: 'Una norma. No obliga a nadie por sí mismo.\n\n', options: {} },
  { text: 'De aplicación automática. Ninguna cláusula entra en un pliego por existir aquí.\n\n', options: {} },
  { text: 'Un «copia y pega». Una cláusula sin necesidad acreditada no protege: añade un motivo de recurso.', options: {} },
], { x: 7.15, y: 2.6, w: 4.9, h: 3.2, fontFace: F_TXT, fontSize: 16, color: CARBON });
pie('Se toma lo que cada expediente necesita, y se justifica. Ésa es toda la regla de uso.');

/* ---------- 11 · qué hay publicado ---------- */
nueva();
titulo('Qué hay publicado, y para quién');
const docs = [
  ['El clausulado completo', 'Catálogo, memoria justificativa para la Intervención, circuito del expediente, caso piloto y anexos con todos los modelos.', 'Quien redacta y quien fiscaliza'],
  ['El resumen y la guía de uso', 'La primera parte del documento, escrita para quien no sabe nada de contratación ni de tecnología.', 'Alcaldía, concejalías, prensa'],
  ['Esta presentación', 'El problema y la solución, sin que haga falta saber nada previo.', 'Cualquier sala'],
];
docs.forEach((d, i) => {
  const y = 1.75 + i * 1.55;
  tarjeta(0.9, y, 11.5, 1.35, TINTE);
  s.addText(d[0], { x: 1.2, y: y + 0.15, w: 3.4, h: 1.05, fontFace: F_TIT, fontSize: 18, bold: true, color: AZUL, valign: 'middle' });
  s.addText(d[1], { x: 4.7, y: y + 0.15, w: 5.4, h: 1.05, fontFace: F_TXT, fontSize: 14, color: CARBON, valign: 'middle' });
  s.addText(d[2], { x: 10.2, y: y + 0.15, w: 2.0, h: 1.05, fontFace: F_TXT, fontSize: 12.5, italic: true, color: GRIS, valign: 'middle' });
});
s.addText('Todo en abierto, bajo licencia Creative Commons Attribution 4.0: se puede copiar, adaptar y usar con cualquier finalidad, citando la autoría.', {
  x: 0.9, y: 6.4, w: 11.5, h: 0.7, fontFace: F_TXT, fontSize: 15, color: CARBON,
});

/* ---------- 12 · créditos ---------- */
nueva();
titulo('Quién lo ha hecho');
s.addText('Un trabajo conjunto de varios meses entre tres personas, cada una desde su oficio, con el Ayuntamiento de Pozuelo de Alarcón como banco de pruebas real.', {
  x: 0.9, y: 1.5, w: 11.5, h: 0.6, fontFace: F_TXT, fontSize: 16, color: CARBON,
});
const autores = [
  ['Delfina Lafuente Veira',
   'Concejal de Administración Digital, Calidad e Innovación · Ayuntamiento de Pozuelo de Alarcón',
   'De ella nace el proyecto y suya es la primera redacción. Y suyo es el mérito menos visible: llevarlo a los servicios de contratación y jurídicos de su propio ayuntamiento y traer sus objeciones de vuelta enteras.',
   'pozuelodealarcon.org'],
  ['Dr. José Antonio Ondiviela García',
   'Profesor e investigador de la Escuela Politécnica Superior · Universidad Francisco de Vitoria',
   'La mirada del mercado: qué se le puede pedir de verdad a un fabricante de software y qué hará que no se presente. Suya es la idea que resuelve el problema de fondo.',
   'ufv.es'],
  ['Miguel Ángel Domínguez Castellano',
   'CEO de Add4u · Presidente de Alastria · Presidente del Clúster de Blockchain de la Comunidad de Madrid',
   'La perspectiva de quien conoce las dos orillas: la de quien redacta pliegos y la de quien se presenta a ellos. Asume la responsabilidad editorial de la publicación.',
   'miguelangeldominguez.info'],
];
autores.forEach((a, i) => {
  const y = 2.25 + i * 1.5;
  s.addShape(p.ShapeType.rect, { x: 0.9, y, w: 0.09, h: 1.28, fill: { color: AZUL }, line: { type: 'none' } });
  s.addText(a[0], { x: 1.3, y, w: 11.0, h: 0.4, fontFace: F_TIT, fontSize: 18, bold: true, color: AZUL });
  s.addText(a[1] + (a[3] ? '  ·  ' + a[3] : ''), { x: 1.3, y: y + 0.4, w: 11.0, h: 0.32, fontFace: F_TXT, fontSize: 13, color: GRIS });
  s.addText(a[2], { x: 1.3, y: y + 0.74, w: 11.0, h: 0.55, fontFace: F_TXT, fontSize: 13.5, color: CARBON });
});
s.addText('El área de contratación del Ayuntamiento de Pozuelo de Alarcón no figura como autora y sin embargo ha determinado la forma del documento más que ninguna otra aportación: sus tres objeciones son la razón de ser de esta versión.', {
  x: 0.9, y: 6.35, w: 11.5, h: 0.8, fontFace: F_TXT, fontSize: 13.5, italic: true, color: GRIS,
});

/* ---------- 12 bis · uso de IA y condiciones de uso ---------- */
nueva();
titulo('Uso de inteligencia artificial, y cómo debe usarse esto');
tarjeta(0.9, 1.55, 11.5, 1.95, TINTE);
s.addText('En la elaboración de este documento se han utilizado sistemas de inteligencia artificial:', {
  x: 1.3, y: 1.8, w: 10.7, h: 0.4, fontFace: F_TXT, fontSize: 15, bold: true, color: AZUL,
});
s.addText('el clon digital («second brain») de Miguel Ángel Domínguez, determinante en la recuperación del material disperso, la investigación jurídica, la verificación de las fuentes, la crítica adversarial del texto y la redacción de los borradores. Las decisiones, el criterio jurídico y la responsabilidad son de las personas que lo firman.', {
  x: 1.3, y: 2.2, w: 10.7, h: 1.15, fontFace: F_TXT, fontSize: 14.5, color: CARBON,
});
s.addText('Se declara aunque no sea obligatorio: el art. 50.4 del Reglamento (UE) 2024/1689 exime de divulgarlo cuando hay revisión humana y responsabilidad editorial. Se divulga igualmente, porque un documento que exige transparencia de IA no puede ocultarla en sí mismo.', {
  x: 0.9, y: 3.65, w: 11.5, h: 0.75, fontFace: F_TXT, fontSize: 14, italic: true, color: GRIS,
});
tarjeta(0.9, 4.55, 11.5, 1.75, TINTE_A);
s.addText('Se publica «tal cual» (as is). Se recomienda su lectura y su uso — y con la misma firmeza, NO copiarlo sin entenderlo.', {
  x: 1.3, y: 4.8, w: 10.7, h: 0.5, fontFace: F_TIT, fontSize: 18, bold: true, color: CARBON,
});
s.addText('Una cláusula copiada sin necesidad acreditada no protege: añade un motivo de recurso. Una exigencia copiada sin contrastar con el mercado no es más ambiciosa, es más restrictiva. Una obligación que nadie verifica es peor que no tenerla.', {
  x: 1.3, y: 5.35, w: 10.7, h: 0.85, fontFace: F_TXT, fontSize: 14.5, color: CARBON,
});
pie('No es asesoramiento legal, y no sustituye a los informes preceptivos de ninguna administración.');

/* ---------- 13 · cierre ---------- */
nueva(AZUL);
s.addText('Una licitación que dura años\nya no se puede sacar como se sacaba antes.', {
  x: 0.9, y: 2.4, w: 11.5, h: 2.0, fontFace: F_TIT, fontSize: 36, bold: true, color: BLANCO, lineSpacingMultiple: 1.2,
});
s.addText('El clausulado completo, los modelos y esta presentación están publicados en abierto.', {
  x: 0.9, y: 4.6, w: 11.5, h: 0.5, fontFace: F_TXT, fontSize: 18, color: GRIS_CL,
});
s.addText('github.com/migueldadd4u/ai-clauses', {
  x: 0.9, y: 5.2, w: 11.5, h: 0.6, fontFace: F_TXT, fontSize: 22, bold: true, color: BLANCO,
});
s.addText('No es asesoramiento legal. Su incorporación a un expediente concreto exige el análisis, la adaptación y los informes preceptivos de cada administración.', {
  x: 0.9, y: 6.3, w: 11.5, h: 0.7, fontFace: F_TXT, fontSize: 12.5, italic: true, color: GRIS_CL,
});

const salida = path.resolve(__dirname, '..', 'docs', 'descargas', 'presentacion-ai-clauses.pptx');
p.writeFile({ fileName: salida }).then(f => console.log(`OK  ${f}`));
