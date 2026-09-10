/**
 * presentacion.js — contenido de la presentación, como datos.
 *
 * Lo consumen dos renderizadores: build_pptx.js (PowerPoint) y build_slides_pdf.js
 * (HTML → Chrome → PDF). Se separó del renderizador porque exportar el .pptx a PDF
 * con Keynote o PowerPoint resultó ser poco fiable: dependía de permisos de
 * automatización del escritorio y fallaba sin aviso, dejando un PDF antiguo.
 *
 * Tipos de diapositiva: portada · frase · tarjetas · filas · destacado ·
 * doscol · autores · cierre
 */
module.exports = [
  {
    tipo: 'portada',
    marca: 'AI Clauses',
    titulo: 'Un contrato público de tecnología dura años.\nLa tecnología que compra, no.',
    subtitulo: 'Cláusulas de inteligencia artificial y deep tech para pliegos de contratación pública',
    autores: 'Delfina Lafuente Veira  ·  Dr. José Antonio Ondiviela García  ·  Miguel Ángel Domínguez Castellano',
    pie: 'Versión 3.0 · septiembre de 2026 · publicado en abierto bajo licencia CC BY 4.0',
  },
  {
    tipo: 'frase',
    titulo: 'La idea, en una frase',
    frase: 'Que el contrato obligue al proveedor a entregar\ncapacidades concretas y comprobables durante toda su vida,\nen lugar de una promesa de «mantenerse actualizado».',
    caja: 'Y que se pueda comprobar con un acta, no con una discusión.',
    pie: 'Todo lo demás de esta presentación es la explicación de esa frase.',
  },
  {
    tipo: 'tarjetas',
    titulo: 'El problema',
    intro: 'Un ayuntamiento contrata un sistema de gestión: tributos, padrón, contabilidad, atención al ciudadano. Da igual cuál.',
    tarjetas: [
      { kicker: 'Año 0', titulo: 'Se firma', texto: 'La herramienta está al día. El pliego es correcto.', tono: 'azul' },
      { kicker: 'Año 2', titulo: 'Aparece algo mejor', texto: 'Capacidades que al redactar el pliego no existían y nadie podía nombrar.', tono: 'ambar' },
      { kicker: 'Año 5', titulo: 'Se acaba el contrato', texto: 'Cinco años de servicio público prestado con herramientas de otra época.', tono: 'rojo' },
    ],
    pie: 'Nadie ha hecho nada mal por el camino. Es un defecto de diseño del contrato.',
  },
  {
    tipo: 'tarjetas',
    titulo: 'A los dos años sólo hay tres salidas, y las tres cuestan dinero público',
    numeradas: true,
    tarjetas: [
      { titulo: 'Se paga dos veces', texto: 'Se saca un contrato nuevo para «modernizar» lo que ya se compró. La misma función, otra vez facturada.', tono: 'azul' },
      { titulo: 'Se aguanta', texto: 'Se espera al final del contrato prestando el servicio con lo que hay.', tono: 'azul' },
      { titulo: 'Se queda cautivo', texto: 'Cambiar de proveedor obligaría a dejar atrás los datos y los desarrollos propios. Sale tan caro que no se cambia.', tono: 'azul' },
    ],
    pie: 'La tercera es la peor: la licitación siguiente está decidida antes de publicarse.',
  },
  {
    tipo: 'filas',
    titulo: '«Que se comprometa a mantenerlo actualizado» no sirve',
    intro: 'Suena razonable. Es lo primero que uno escribiría. Y no funciona por tres motivos:',
    filas: [
      ['La empresa no puede ponerle precio', 'Se le pide algo cuyo contenido nadie conoce todavía. O infla la oferta por si acaso, o la ignora y ya discutirá durante la ejecución.'],
      ['La administración no puede exigirlo', 'Demostrar que una tecnología concreta «era necesaria» es una apreciación técnica que no se sostiene frente a un contratista bien asesorado.'],
      ['Y un tribunal la anula', 'Una obligación genérica no puede ser ni siquiera una obligación contractual, y menos aún una cuyo incumplimiento permita resolver el contrato.'],
    ],
    pie: 'El clausulado que no se puede exigir es peor que no tener clausulado: da falsa seguridad.',
  },
  {
    tipo: 'destacado',
    titulo: 'La vuelta de tuerca',
    intro: 'En lugar de comprar una evolución futura indefinida…',
    caja: '…se compran capacidades concretas, con plazo y con criterios de aceptación verificables, fijadas al licitar y revisadas cada año para las licitaciones siguientes.',
    tono: 'verde',
    columnas: [
      ['La empresa', 'sabe exactamente qué está ofertando, y puede ponerle precio.'],
      ['La administración', 'sabe exactamente qué puede exigir, y cuándo.'],
      ['El tribunal', 'no tiene nada indeterminado que anular.'],
    ],
    pie: 'Lo que no se pueda concretar hoy, se concreta el año que viene, en la licitación siguiente.',
  },
  {
    tipo: 'destacado',
    titulo: 'La otra mitad del problema: de quién son los datos',
    intro: 'Un pliego puede restringir la competencia de dos maneras. La conocida es escribirlo a medida de un proveedor. La otra es más silenciosa:',
    caja: 'Si al terminar el contrato los datos, los desarrollos y la lógica de negocio se quedan con el proveedor saliente, cambiar de empresa es tan caro que nadie cambia.',
    tono: 'ambar',
    subintro: 'Por eso una parte central del clausulado no habla de inteligencia artificial:',
    columnas: [
      ['De quién son los datos', 'y en qué formato se devuelven'],
      ['De quién son los algoritmos', 'hechos a medida para la administración'],
      ['Qué se entrega al terminar', 'en qué plazo, y quién comprueba que funciona'],
    ],
    pie: 'Un pliego que restringe la competencia no es más exigente: es más frágil.',
  },
  {
    tipo: 'destacado',
    titulo: 'Lo que este documento NO promete',
    caja: 'No se promete que ningún tribunal pueda anular nada.\nNo es prometible: aún no existe doctrina sobre cláusulas de IA en contratación pública.',
    tono: 'ambar',
    subintro: 'Lo que sí está diseñado, y se puede comprobar cláusula por cláusula:',
    lista: [
      'una necesidad identificada, y la norma o el acuerdo que la impone;',
      'un instrumento correcto, y sólo uno, para que nada se puntúe dos veces;',
      'un medio de acreditación y una forma de verificación, con quién la hace y cuánto cuesta;',
      'una consecuencia tasada si se incumple, proporcionada y dentro de los límites legales;',
      'y una regla de separabilidad: si cae una pieza, no arrastra el pliego entero.',
    ],
    pie: 'Prometer que algo es inanulable destruye su credibilidad ante quien tiene que firmarlo.',
  },
  {
    tipo: 'filas',
    titulo: 'De dónde sale: un problema real y cuatro dificultades',
    intro: 'El clausulado nació en 2026 de un problema real de gestión dentro de una entidad local. Su memoria empieza nombrando, sin suavizarlas, las cuatro dificultades que quienes lo han trabajado han observado que suceden en la contratación pública.',
    alternas: true,
    filas: [
      ['La necesidad no la demanda aún el gestor', 'Cada cláusula lleva ahora el origen de su necesidad: una norma, el servicio gestor, o un acuerdo del órgano de gobierno. Lo que no tiene ninguno de los tres, no entra.'],
      ['El seguimiento real es escaso, y sólo mira el gasto', 'Quien controla no puede imponer instrumentos, pero sí necesita el dato al mismo rango que quien gestiona. De ahí sale ADM-12: paridad de acceso, sin tarificar, en formato abierto y con diccionario de datos.'],
      ['El grado de abstracción es demasiado alto', 'Método para elegir el contrato piloto, y un subconjunto mínimo de seis cláusulas para empezar. El catálogo entero no entra en el primer expediente.'],
      ['Hay actores, y no sólo propios, que no lo han visto', 'Consulta preliminar anual, publicación del Anexo V antes de licitar, plazo por encima del mínimo y gradualidad. Si el mercado no puede cumplirlo, la exigencia no entra en el pliego.'],
    ],
    pie: 'Las cuatro se responden dentro del documento, no en una nota al pie: han cambiado su arquitectura, no su prólogo.',
  },
  {
    tipo: 'doscol',
    titulo: 'Qué es, y qué no es',
    izquierda: {
      etiqueta: 'ES', tono: 'verde',
      puntos: [
        'Un catálogo de cláusulas ya redactadas, con su justificación y su medio de prueba.',
        'Un manual de expediente: qué documento hace falta, quién lo firma y en qué orden.',
        'Un ejemplo completo trabajado, de principio a fin, sobre un expediente simulado.',
      ],
    },
    derecha: {
      etiqueta: 'NO ES', tono: 'rojo',
      puntos: [
        'Una norma. No obliga a nadie por sí mismo.',
        'De aplicación automática. Ninguna cláusula entra en un pliego por existir aquí.',
        'Un «copia y pega». Una cláusula sin necesidad acreditada no protege: añade un motivo de recurso.',
      ],
    },
    pie: 'Se toma lo que cada expediente necesita, y se justifica. Ésa es toda la regla de uso.',
  },
  {
    tipo: 'filas',
    titulo: 'Qué hay publicado, y para quién',
    anchas: true,
    filas: [
      ['El clausulado completo', 'Catálogo, memoria justificativa para los órganos de control, circuito del expediente, ejemplo trabajado y anexos con todos los modelos.', 'Quien redacta y quien fiscaliza'],
      ['La guía municipal · 20 páginas', 'Cómo decidir, motivar, seleccionar, copiar y verificar sin recorrer el catálogo entero.', 'Concejalía, Contratación, Intervención y TI'],
      ['El resumen y la guía de uso', 'La primera parte del documento, escrita para quien no sabe nada de contratación ni de tecnología.', 'Alcaldía, concejalías, prensa'],
      ['Esta presentación', 'El problema y la solución, sin que haga falta saber nada previo.', 'Cualquier sala'],
      ['Y dentro del clausulado, un manual de tramitación', 'La Parte V es el circuito completo del expediente —los veintiún documentos, quién firma cada uno y en qué orden— y no tiene nada de específico de la IA: sirve para cualquier cláusula conforme a la Ley 9/2017.', 'Quien tramita expedientes'],
    ],
    cierre: 'Todo en abierto, bajo licencia Creative Commons Attribution 4.0: se puede copiar, adaptar y usar con cualquier finalidad, citando la autoría.',
  },
  {
    tipo: 'autores',
    titulo: 'Quién lo ha hecho',
    intro: 'Un trabajo conjunto de varios meses, con el reconocimiento colectivo que se recoge al final.',
    autores: [
      {
        nombre: 'Dr. José Antonio Ondiviela García',
        cargo: 'Profesor e investigador de la Escuela Politécnica Superior · Universidad Francisco de Vitoria',
        enlace: 'ufv.es',
        aporte: 'La mirada del mercado: qué se le puede pedir de verdad a un fabricante de software y qué hará que no se presente. Suya es la idea que resuelve el problema de fondo.',
      },
      {
        nombre: 'Miguel Ángel Domínguez Castellano',
        cargo: 'CEO de Add4u · Presidente de Alastria · Presidente del Clúster de Blockchain de la Comunidad de Madrid',
        enlace: 'miguelangeldominguez.info',
        aporte: 'La perspectiva de quien conoce las dos orillas: la de quien redacta pliegos y la de quien se presenta a ellos. Asume la responsabilidad editorial de la publicación.',
      },
      {
        nombre: 'Delfina Lafuente Veira — co-impulsora del proyecto',
        cargo: 'Concejal de Administración Digital, Calidad e Innovación · Ayuntamiento de Pozuelo de Alarcón · a título personal',
        enlace: 'pozuelodealarcon.org',
        aporte: 'De ella nace el proyecto y suya es la primera redacción. Y suyo es el mérito menos visible: llevarlo a los servicios de contratación y jurídicos de su propio ayuntamiento y traer sus objeciones de vuelta enteras.',
      },
    ],
    nota: 'El contraste con la práctica real de la contratación y la lectura crítica de los borradores son de los servicios técnicos municipales, y se reconocen de forma colectiva y deliberada. Las cuatro dificultades del §M1.1 son la razón de ser de esta versión y se responden una a una en el cuerpo del documento. Ningún órgano de contratación, intervención o asesoría jurídica se ha pronunciado sobre el catálogo.',
  },
  {
    tipo: 'destacado',
    titulo: 'Uso de inteligencia artificial, y cómo debe usarse esto',
    caja: 'En la elaboración de este documento se han utilizado sistemas de inteligencia artificial: el clon digital («second brain») de Miguel Ángel Domínguez, determinante en la recuperación del material disperso, la investigación jurídica, la verificación de las fuentes, la crítica adversarial del texto y la redacción de los borradores. Las decisiones, el criterio jurídico y la responsabilidad son de las personas que lo firman.',
    tono: 'azul',
    aclaracion: 'Se declara aunque no sea obligatorio: el artículo 50.4 del Reglamento (UE) 2024/1689 exime de divulgarlo cuando hay revisión humana y responsabilidad editorial. Se divulga igualmente, porque un documento que exige transparencia de IA no puede ocultarla en sí mismo.',
    caja2: {
      tono: 'ambar',
      titulo: 'Se publica «tal cual» (as is). Se recomienda su lectura y su uso — y con la misma firmeza, NO copiarlo sin entenderlo.',
      texto: 'Una cláusula copiada sin necesidad acreditada no protege: añade un motivo de recurso. Una exigencia copiada sin contrastar con el mercado no es más ambiciosa, es más restrictiva. Una obligación que nadie verifica es peor que no tenerla.',
    },
    pie: 'No es asesoramiento legal, y no sustituye a los informes preceptivos de ninguna administración.',
  },
  {
    tipo: 'cierre',
    titulo: 'Una licitación que dura años\nya no se puede sacar como se sacaba antes.',
    texto: 'El clausulado completo, los modelos y esta presentación están publicados en abierto.',
    enlace: 'github.com/migueldadd4u/ai-clauses',
    pie: 'No es asesoramiento legal. Su incorporación a un expediente concreto exige el análisis, la adaptación y los informes preceptivos de cada administración.',
  },
];
