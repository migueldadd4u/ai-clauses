## PARTE VI · EJEMPLO COMPLETO TRABAJADO SOBRE UN EXPEDIENTE SIMULADO

> ### ⚠ Advertencia previa, y es la más importante de todo el documento
>
> **Todo lo que sigue es una simulación.** El municipio, el objeto del contrato, las cifras, las
> fechas, los módulos, los plazos y las conclusiones han sido **construidos para este ejemplo**, con
> el único fin de mostrar el catálogo funcionando de principio a fin sobre un caso completo.
>
> **No corresponden a ningún expediente real** —adjudicado, licitado, anunciado o en preparación—
> de ningún ayuntamiento, y **no deben citarse como dato**. Ningún número de esta parte procede de
> un expediente municipal; ninguna conclusión de esta parte prejuzga la que corresponda a un
> expediente real, que dependerá de sus propios datos.
>
> Esta advertencia no es una cautela de estilo: la preparación de un contrato **es información no
> pública hasta su publicación en el perfil de contratante**, y un documento como éste no puede
> anticiparla. Por eso el ejemplo es simulado y por eso lo dice aquí, en la primera línea.

### VI.1 Qué es esta parte y por qué existe

Esta parte responde a la **tercera dificultad del §M1.1**: mientras un catálogo no se vea
funcionando sobre un expediente concreto, se lee como una declaración de intenciones, y la forma de
quitarse las dudas sobre su aplicabilidad real es incluirlo en alguna contratación ya prevista en la
que su aplicación no resulte excesivamente compleja, a modo de experimento piloto.

La respuesta se da en dos piezas que conviene no confundir:

1. **El método para elegir el contrato piloto** (§VI.2): qué condiciones hace falta que reúna un
   expediente para ser un buen primer caso, y cuáles lo desaconsejan. Esto sí es directamente
   aplicable por cualquier administración a sus propios contratos.
2. **Un ejemplo completo trabajado sobre un expediente simulado** (§VI.3 y siguientes): el catálogo
   recorrido entero sobre un caso construido, con las casillas marcadas, las cláusulas descartadas
   con su motivo, la categoría de seguridad razonada, el baremo completo —con el precio dentro— y la
   lista de documentos que el expediente debe contener. Y con lo que ningún documento de este tipo
   suele incluir: la tabla de lo que habría que rectificar en unos pliegos ya redactados con la
   versión anterior.

Es deliberado que el ejemplo sea simulado y no un expediente real. Un catálogo que se publica en
abierto no puede sostenerse sobre la preparación de un contrato concreto: ni jurídicamente —esa
información no es pública hasta el perfil de contratante—, ni prácticamente, porque las conclusiones
de un expediente no son trasladables a otro. Lo que sí es trasladable, y es lo que se entrega aquí,
es **el orden de las decisiones**: origen de la necesidad, aplicabilidad, categoría de seguridad,
instrumento, baremo, valor estimado, documentos.

Regla de lectura para otra administración que reutilice el documento (R-5): lo que sigue es un caso
construido, no una plantilla. Reutilícese el orden; no las conclusiones.

---

### VI.2 Cómo elegir el contrato piloto, y el cauce si los pliegos ya están escritos

#### VI.2.1 Qué condiciones debe reunir el primer contrato

El objetor pedía un contrato «en el que su aplicación no fuera excesivamente compleja». La condición
es acertada y merece traducirse a criterios comprobables. Un expediente es buen candidato a piloto
cuando reúne **las cinco** siguientes; si falla alguna, es mejor esperar al siguiente:

| # | Condición | Por qué |
|---|---|---|
| 1 | **Hay un usuario del dato distinto del gestor**, con obligación legal propia de controlarlo | Es lo que permite empezar el piloto *dando* acceso —ADM-12·v3— en vez de *pidiendo* exigencias nuevas al contratista. El primer contacto del mercado con el catálogo no debería ser una imposición |
| 2 | **La prestación produce dato estructurado y verificable** | Todo lo que el catálogo exige —interfaz de consulta, registro de auditoría, exportación en formato abierto, diccionario de datos— se comprueba entonces con una prueba de aceptación, no con una opinión. Un piloto que se evalúa por opinión no prueba nada |
| 3 | **El objeto no es crítico en disponibilidad** | Si el análisis de riesgos sitúa el sistema en categoría ALTA, el expediente arrastra depósito de código, requisitos reforzados y coste; y el piloto pasa a discutirse por lo que no era. Elíjase un contrato de categoría BÁSICA o MEDIA |
| 4 | **Existe mercado plural para ese objeto** | Un objeto con un solo proveedor real convierte cualquier exigencia nueva en una barrera, y el piloto acabará discutiéndose como restricción de la concurrencia en lugar de como prueba del catálogo |
| 5 | **Está en fase de preparación, no de licitación** | Sobre un pliego ya publicado no se «corrige»: se rectifica con nueva aprobación y publicación, o se desiste (§VI.2.2). Un piloto no debería nacer con ese lastre |

Como **primer** piloto son peores candidatos —que no es lo mismo que estar excluidos— los contratos
menores, los basados en acuerdo marco, las adhesiones a central de compra y las prórrogas de
contratos vivos: en todos ellos el margen del catálogo es más estrecho y el piloto probaría menos.
Pero **ninguno queda fuera del catálogo**, y la Parte I dice de cada uno qué sí cabe: en el contrato
menor, la lista cerrada de exigencias normativas (§V.7.1), porque lo que la ley impone se pide igual;
en el acuerdo marco y la adhesión, elegir entre las opciones ya previstas, usar los extremos que el
instrumento reserve a la fase de contrato basado —incluida la nueva licitación entre adjudicatarios—
y trasladar la necesidad al órgano titular para la siguiente licitación; en la prórroga, comprobar lo
ya exigible y preparar con tiempo la contratación sucesora.

Y una recomendación que vale por las cinco condiciones juntas: **el primer piloto no debe incorporar
el catálogo entero.** El §VI.2.2 identifica el subconjunto mínimo con el que empezar.

#### VI.2.2 El subconjunto mínimo para el primer piloto

Ésta es la respuesta directa al reproche de abstracción, y conviene darla en forma de lista corta. Un
primer expediente no necesita las veintitantas cláusulas del catálogo: necesita **seis**, que son las
que producen resultado verificable en el primer año con menos piezas alrededor, y **una séptima,
DT-1·v3, cuando en el contrato intervengan sistemas de inteligencia artificial**. No son del todo
independientes, y conviene saberlo antes de recortar: ADM-2·v3 no entra sin DT-9·v3 y sin el Anexo V
transcrito (Anexo VI, dependencias en sentido inverso); ADM-5·v3 tipifica el incumplimiento de las
demás, de modo que se depura con ellas; y **DT-7·v3, que no está en la lista, entra con el Anexo V de
este catálogo**: si el Anexo V que se transcribe es el del propio catálogo para 2026-2027, DT-7·v3
entra con él, porque sus tres exigencias dependen de ella (Anexo VI, fila DT-7·v3).

**Es el único mínimo de partida del catálogo.** Es el que citan la memoria justificativa y los
documentos que acompañan a este catálogo. La «versión mínima» de ADM-4·v3, epígrafe 5, es la carga
de verificación de este mismo subconjunto, no un subconjunto distinto.

| Orden | Cláusula | Por qué está en el mínimo |
|---|---|---|
| 1 | **ADM-12·v3** · Acceso de los órganos de control a los datos de ejecución | Responde a la necesidad de origen normativo mejor documentada del catálogo (Parte IV, §M1.4), que en cada expediente declara por escrito el órgano interventor, y no impone al contratista una tecnología: le impone no tarifar, documentar y exportar. Empezar por ella es empezar dando |
| 2 | **DT-0·v3** · Equivalencia y trámite de prueba | No añade exigencias: quita barreras. Es la cláusula que protege la concurrencia y la primera que un licitador echa en falta |
| 3 | **DT-6·v3** · Seguridad conforme al ENS en la categoría que corresponda | Es obligación legal preexistente (art. 2.3 RD 311/2022): no se está pidiendo nada nuevo, se está redactando bien lo que ya había que pedir |
| 4 | **ADM-8·v3** · Propiedad intelectual y licencia mínima | Lo que se pierde por no ponerla no se recupera después. Es la cláusula con más consecuencia y menos coste |
| 5 | **ADM-2·v3** + **Anexo V** · Exigencias tecnológicas del ejercicio, con alcance cerrado, transcritas al PPT por DT-9·v3 | Es el núcleo del catálogo, y sólo funciona si el Anexo V está aprobado y publicado antes. Sin Anexo V, no entra |
| 6 | **ADM-5·v3** · Penalidades tipificadas, en su parte correspondiente a lo anterior | Sin consecuencia tipificada, las cinco anteriores son recomendaciones |
| 7 | **DT-1·v3**, *sólo si intervienen sistemas de inteligencia artificial* · Como mínimo, su apartado 2 (inventario y clasificación de los sistemas) y su apartado 6 (reparto de papeles y medios que entrega el contratista), con el apartado 1, que fija su ámbito | Tres razones. El cuadro de intensidad del §2.2 de la Parte I ya la pone en el nivel A, el más bajo, siempre que intervengan sistemas de IA: un mínimo sin ella quedaría por debajo del nivel mínimo. Las obligaciones del Ayuntamiento como responsable del despliegue no se pueden cumplir sin la información del proveedor, y esta cláusula es la que obliga a entregarla. Y [si la entidad está sujeta a la Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid o a norma autonómica equivalente], los apartados 2 y 6 son los que sostienen el encaje con los artículos 21 a 23 del proyecto de esa ley: aportan parte de lo que su art. 21.2 lleva al registro de sistemas (finalidad, proveedor, clasificación del riesgo conforme al Reglamento europeo, que no equivale al nivel de impacto propio del proyecto), los medios de supervisión humana y de suspensión de su art. 21.4 y la información técnica para la evaluación de impacto de su art. 23.1. En un pliego limitado a las seis cláusulas anteriores, casi ninguno de esos encajes existiría |

**Cuánto cuesta verificarlo.** La carga se calcula en ADM-4·v3, epígrafe 5 («Versión mínima»), con
las filas de su tabla única y sin estimación propia: **20–24 horas al año en régimen ordinario y
44–60 el primer año**. Suman, cuando proceden, dos sumandos condicionales. DT-1·v3, cuando
intervengan sistemas de inteligencia artificial, añade 12–20 horas al año y 16–28 el primer año, y
sus apartados 11 a 13, si se incorporan, 3 y 12–16 más en el nivel B (7 y 16–20 en el nivel C).
DT-7·v3 añade 4 y 12–16. **Si se transcribe el Anexo V de este catálogo para 2026-2027, entran sus
tres exigencias —ET-1, interfaz normalizada; ET-2, operación autónoma supervisada; y ET-3,
trazabilidad y auditoría de la actuación de agentes— y, con ellas, DT-7·v3, de la que dependen las
tres; la carga es entonces la de esa combinación, 24–28 horas al año y 56–76 el primer año, o 36–48
y 72–104 si interviene además DT-1·v3**. Sólo un Anexo V propio cuyas exigencias no dependan de DT-7·v3 la deja fuera; con un
Anexo V de una sola exigencia, el primer año baja a 28–36 horas y el régimen ordinario sigue en 20–24, más los sumandos que procedan.
El desglose, la aritmética y su lectura frente a los umbrales del §7.9.2 de
la Parte I están allí y no se repiten aquí.

Todo lo demás —gobernanza certificada, depósito de código, preparación criptográfica— **se deja
fuera del primer piloto** y se incorpora, si procede, cuando el informe de evaluación del §VI.8
acredite que el circuito funciona. La operación autónoma supervisada queda fuera sólo con un
Anexo V propio que no la incluya: con el de este catálogo entra, como ET-2. Es preferible una exigencia
acotada que se cumple a una amplia que se incumple desde el primer año.

#### VI.2.3 Si los pliegos ya están escritos: cuál es el cauce

Cuestión distinta del piloto, y que se plantea en cuanto una administración adopta el catálogo
teniendo expedientes en marcha. Antes de tocar nada, el órgano de contratación debe consignar en el
expediente en cuál de estas tres situaciones se encuentra, porque de ella depende el cauce:

| Situación | Qué es la revisión de VI.6 | Cauce |
|---|---|---|
| **A.** Borrador de pliegos no aprobado | Corrección ordinaria del borrador | Se incorporan los cambios y se aprueba el expediente con el texto corregido. Sin trámite adicional. |
| **B.** Expediente aprobado, licitación **no** anunciada | **Rectificación previa a licitar**, no un retoque | Nuevo acuerdo del órgano de contratación que apruebe los pliegos rectificados, con informe jurídico previo, antes de publicar el anuncio |
| **C.** Licitación anunciada o en plazo de presentación | No cabe «corregir» los pliegos publicados | Los pliegos publicados son *lex contractus*. La corrección exige la nueva aprobación y publicación con reapertura íntegra del plazo o, si el defecto es no subsanable, el desistimiento del procedimiento (art. 152.4 LCSP). En ambos casos, decisión del órgano de contratación previo informe del órgano al que corresponda el informe jurídico preceptivo |

Advertencia expresa, porque es la que se olvida: en las situaciones B y C **esto no es un ajuste de redacción**. Es la rectificación de un pliego que ya ha pasado por el circuito de aprobación, y por eso vuelve a pasar entero por él. Un pliego rectificado por vía de fe de erratas es un pliego rectificado por el cauce equivocado.

Segunda advertencia, sobre el origen material del borrador. Es frecuente, y perfectamente legítimo, que un pliego se redacte tomando como referencia el de otro ayuntamiento. Cuando ese ayuntamiento tiene ya implantada una solución determinada, la herencia obliga a un barrido específico antes de aprobar: **un pliego heredado de un municipio con un producto ya implantado tiende a describir ese producto**, y esa descripción sobrevive a la traducción a «requisitos funcionales». El barrido consiste en localizar toda especificación que sólo pueda cumplir un fabricante concreto y reescribirla en términos de función, con la admisión de equivalentes y la prueba en la oferta (DT-0·v3). Hágase siempre, y déjese constancia de que se ha hecho.

---

### VI.3 El expediente simulado sobre el que se trabaja

Recordatorio, porque a partir de aquí empiezan las cifras: **el expediente que sigue es construido**
(véase la advertencia que abre esta parte). Se ha elegido un objeto que cumple las cinco condiciones
del §VI.2.1 y que, por su perfil, permite ver operar la mayor parte del catálogo:

> **Expediente simulado.** Ayuntamiento de [MUNICIPIO]. Contrato de **servicios de mantenimiento,
> evolución y soporte de la plataforma municipal de gestión de subvenciones y ayudas**, con la
> licencia o suscripción de la solución estándar sobre la que se presta. Dos años, con prórroga
> prevista de otros dos.

Por qué este objeto ilustra bien el catálogo —y son, punto por punto, las condiciones del §VI.2.1:

1. **La primera cláusula que se aplica es la que da, no la que pide.** La necesidad de acceso de los
   órganos de control a los datos de ejecución (ADM-12·v3) responde a la segunda dificultad del
   §M1.1, y la ejecución del gasto en subvenciones es materia sobre la que
   esos órganos ejercen por ley funciones de control (art. 214 TRLRHL; arts. 4.3, 6.3, 6.7, 20 y 30
   del RD 424/2017; y, en el ámbito específico de las subvenciones, el control financiero de los
   arts. 44 y siguientes de la Ley 38/2003, General de Subvenciones). El piloto empieza dando, no
   pidiendo: es la mejor forma de que el catálogo no se lea como una imposición al mercado.
2. **Es un contrato con dato estructurado y verificable.** Convocatoria, solicitud, valoración,
   concesión, pago, justificación y reintegro son estados con fecha y con importe. Todo lo que el
   catálogo exige —interfaz de consulta, registro de auditoría, exportación en formato abierto,
   diccionario de datos— se comprueba con una prueba de aceptación, no con una opinión.
3. **Tiene gestor identificado y usuario natural del dato distinto del gestor.** Es el caso que
   obliga a usar las dos vías de firma de la ficha de aplicabilidad (Anexo II) y, por tanto, el que
   prueba si el circuito funciona.
4. **No es crítico en disponibilidad y tiene mercado plural.** Permite razonar una categoría ENS
   MEDIA sin forzarla, y deja fuera del ejemplo el depósito de código, que habría desplazado la
   discusión.

Lo que un piloto así **no** demuestra, y conviene decirlo antes de que lo diga otro: no mide lo que
el catálogo rinde en contratos menores, en los basados en acuerdo marco o en adhesiones a centrales
de compra, ni en prórrogas de contratos vivos. En todos ellos **sí cabe aplicarlo, con el alcance que
detalla la Parte I**; lo que falta es experiencia sobre cómo se comporta ahí.

---

### VI.4 El caso resuelto

#### VI.4.1 Objeto y calificación del contrato

Antes de aplicar ninguna cláusula hay que decidir qué contrato es, porque de la calificación dependen tres cosas del catálogo: la titularidad de la propiedad intelectual (ADM-8·v3), la posibilidad de usar la bolsa de servicios evolutivos (ADM-3·v3, bloque 2) y el régimen de criterios cualitativos (art. 145.4 LCSP).

| Componente de la prestación | Calificación | Consecuencia en el catálogo |
|---|---|---|
| Licencia o suscripción de una solución estándar de gestión de subvenciones y ayudas | Suministro (art. 16.3.b) LCSP; la suscripción como servicio se califica igual: Parte I, §2.1) | ADM-8·v3 **no** ampara exigencias de titularidad sobre el producto base: el art. 308.1 LCSP opera en el contrato de servicios. Sí operan la licencia mínima supletoria dimensionada para el uso municipal y la delimitación del código; la transferencia del producto base sólo opera si se pacta expresamente con el licenciante |
| Implantación, parametrización, migración de datos y formación | Servicios | Aquí sí nace la titularidad municipal sobre desarrollos específicos, configuraciones, parametrizaciones y bases de conocimiento |
| Soporte y mantenimiento correctivo, adaptativo y evolutivo | Servicios de mantenimiento de aplicaciones informáticas | Es el único supuesto en que cabe la bolsa de servicios evolutivos del art. 308.3 LCSP |

**Decisión que debe adoptar el expediente:** si el contrato es mixto, se determina la prestación principal y se motiva. Recomendación para este perfil: **contrato de servicios** con suministro accesorio de licencias o suscripción, **siempre que el desglose del presupuesto base de licitación (VI.4.7) acredite que el valor estimado de los servicios —implantación y mantenimiento evolutivo— supera el de la licencia o la suscripción**, que es el criterio del art. 18.1.a), párrafo segundo, LCSP para los contratos mixtos de servicios y suministros. Si no lo supera, el contrato es de suministro, no cabe la bolsa de servicios evolutivos y ADM-8·v3, DT-8·v3 y ADM-1·v3 se recortan como indica la Parte I, §2.1.

**Segunda decisión:** si el órgano de contratación motiva que la prestación tiene **carácter intelectual**, los criterios cualitativos deben representar al menos el 51 % de la puntuación (art. 145.4 LCSP) y queda excluido el procedimiento abreviado del art. 159.6. Esa motivación es una decisión del expediente, no un automatismo; el baremo de VI.4.6 cumple el 51 % en cualquiera de las dos hipótesis, precisamente para no depender de ella.

#### VI.4.2 Las necesidades del contrato y su origen

El catálogo distingue tres orígenes de necesidad. La distinción no es doctrinal: determina **quién firma** la ficha del Anexo II y **qué documento** la sostiene.

| Origen | Definición | Quién lo acredita y con qué |
|---|---|---|
| **N — Normativo** | Una norma en vigor impone al Ayuntamiento un deber que no puede cumplir sin la colaboración del contratista | Informe del servicio competente por razón de la materia (informática y seguridad, Intervención, delegado de protección de datos, órgano del informe jurídico preceptivo), con cita del precepto |
| **F — Funcional** | El servicio gestor necesita la prestación para prestar su servicio | Firma del gestor del contrato en la ficha del Anexo II |
| **I — Institucional** | No lo impone ninguna norma ni lo ha pedido el gestor: deriva de un plan o política municipal aprobados por el órgano de gobierno | Remisión al acuerdo del órgano de gobierno (modelo en el Anexo VIII), más informe del servicio promotor sobre su aplicación a este contrato |

**Regla de cierre (Anexo II):** la exigencia que no tenga origen marcado y firmado **va a NO APLICA**. No hay cuarta casilla.

Necesidades identificadas en este contrato:

| # | Necesidad | Origen | Fundamento | Cláusula que la satisface |
|---|---|---|---|---|
| 1 | Tramitación, seguimiento y justificación de las subvenciones y ayudas municipales conforme a la Ley 38/2003, General de Subvenciones, y a las bases reguladoras municipales | F | Necesidad del servicio gestor | Prescripciones funcionales del PPT (fuera de este catálogo) |
| 2 | Conformidad con el Esquema Nacional de Seguridad del sistema del contratista y de su cadena de suministro | N | Art. 2.3 RD 311/2022: los pliegos «contemplarán todos aquellos requisitos necesarios para asegurar la conformidad con el ENS», cautela que se extiende a la cadena de suministro | DT-6·v3 |
| 3 | Interoperabilidad con los servicios comunes de obligada utilización y con el resto de sistemas municipales | N | RD 4/2010 (ENI) y Ley 39/2015 | DT-5·v3 |
| 4 | Tratamiento de datos personales por cuenta del Ayuntamiento (solicitantes, beneficiarios y sus representantes, personal) | N | Art. 28 RGPD; arts. 122.2 y 202.1 párr. 3.º LCSP cuando concurren sus supuestos | ADM-6·v3 bloque A; cláusulas de protección de datos del PCAP |
| 5 | Explotación de los datos de ejecución por los órganos de control interno: consulta sin tarificación con los accesos incluidos en el precio, diccionario de datos, exportación en formato abierto y permanencia en prórrogas y reversión | N | Art. 214 TRLRHL y arts. 4.3, 6.3, 6.7, 20 y 30 RD 424/2017; DA 3.ª.3 LCSP. **En el expediente simulado, el órgano de control la pide por escrito** | ADM-12·v3 |
| 6 | Recuperación ordenada del servicio y de los datos al término del contrato, sin dependencia injustificada | N/F | Arts. 34.1 y 111.1 LCSP; art. 28.3.g) RGPD para datos personales | DT-8·v3 |
| 7 | Continuidad del servicio ante cese o incumplimiento grave del proveedor sobre un sistema que sostiene la concesión y el pago de las subvenciones | N/F | Análisis de riesgos del expediente; medida de medios alternativos del Anexo II del RD 311/2022 para servicios contratados a terceros, invocada por analogía | ADM-11·v3 |
| 8 | Titularidad municipal de los desarrollos específicos, la lógica de negocio y los datos, con licencia suficiente para cederlos a otras administraciones | N | Art. 308.1 LCSP; arts. 43, 97.4, 99 y 100 TRLPI; arts. 157 y 158 Ley 40/2015 | ADM-8·v3 |
| 9 | Que la solución pueda ser operada, consultada y auditada por agentes y asistentes de IA bajo control municipal | **I** | **Ninguna norma lo impone y el gestor no lo ha pedido.** Sólo puede fundarse en el acuerdo del órgano de gobierno que apruebe el plan y el catálogo anual (Anexo VIII) | DT-7·v3, DT-9·v3 y Anexo V (ET-1, ET-2, ET-3) |
| 10 | Control del uso de sistemas de IA de terceros sobre información municipal no pública | N/F | Art. 28 RGPD y deber de confidencialidad del contratista | ADM-13·v3 |
| 11 | Evolución determinada de la solución durante la vigencia, valorable por el licitador | I/F | Acuerdo del órgano de gobierno + necesidad del servicio de no quedar con una versión congelada | ADM-2·v3 sobre el Anexo V |

**Lo que hay que decir en voz alta sobre la fila 9**, porque es el punto de la primera dificultad del §M1.1 y el que un recurrente atacará: la necesidad de agentización **no es normativa ni funcional**. Si el expediente la justifica con un párrafo general sobre la transformación digital, es justificación estereotipada y cae. Si la justifica por remisión a un acuerdo del órgano de gobierno que aprueba un plan con objetivos y calendario, y el informe de necesidad explica por qué **este** contrato entra en ese plan, la relación con el objeto pasa a ser derivada de una política municipal aprobada. **Sin ese acuerdo previo, la recomendación de este documento es marcar la fila 9 como NO APLICA en este expediente** y contratar la solución sin ella. Es preferible un piloto que aplique nueve cláusulas bien fundadas que uno que aplique once con una sostenida por una frase.

#### VI.4.3 Qué cláusulas aplican y cuáles no

Ficha de aplicabilidad cumplimentada. Instrumentos: **P** prescripción técnica · **S** solvencia · **CEE** condición especial de ejecución · **CEE-E** condición especial de ejecución de carácter esencial · **CA** criterio de adjudicación · **NA** no aplica. Cada exigencia lleva **un solo** instrumento (Anexo I).

| Cláusula v3 | Instrumento | Origen | Motivación de la decisión |
|---|---|---|---|
| **DT-0·v3** Equivalencia y acreditación | P | N | Obligatoria siempre que el pliego cite cualquier producto, protocolo, norma o red. Nunca puede marcarse NA en un pliego tecnológico |
| **DT-1·v3** IA, IA generativa y agentes | P | N/I | Aplica en su bloque de reparto de papeles y decisiones automatizadas. La tramitación de subvenciones no está configurada en el ejemplo como actuación administrativa automatizada del art. 41 de la Ley 40/2015, pero el sistema soportará propuestas asistidas: la cláusula fija que ninguna decisión con efecto jurídico o económico se ejecute sin validación humana. **Con la versión 4.0 entran además sus apartados 11, 12 y 13, este último con su letra c)**, porque el contrato es de nivel C (Parte I, §2.2: sujeto a regulación armonizada y de categoría ENS MEDIA), las propuestas asistidas sirven de fundamento a actos del procedimiento de concesión y se refieren a solicitantes y beneficiarios, entre ellos personas físicas (VI.4.2, fila 4). No entran el último párrafo del apartado 2 ni la mención autonómica del apartado 9, porque la entidad no está sujeta a esa normativa (Anexo X, fila 50), ni la descripción publicable del apartado 7, porque no hay actuación automatizada. Su carga añadida está en VI.4.8 |
| **DT-2·v3** Capa de confianza (anclaje de evidencias, identidad verificable) | **NA** | — | No hay necesidad identificada: la integridad de los expedientes de subvención y de sus anotaciones se resuelve con el registro de auditoría del sistema y con el ENS. Añadir anclaje distribuido sería exigencia sin necesidad. **Arrastra: se suprime el criterio de adjudicación que, en su caso, hubiera valorado esa capacidad, si el órgano de contratación lo hubiera añadido al baremo** (Anexo VI) |
| **DT-3·v3** Criptoagilidad y transición post-cuántica | **NA** | — | La cláusula se activa en sistemas con datos de conservación prolongada o especialmente protegidos. Los expedientes de subvenciones tienen conservación larga, pero en este expediente simulado no contienen datos de categorías especiales y su confidencialidad no es el riesgo dominante. Decisión: NA, con revisión en la licitación siguiente. Si el análisis de riesgos del expediente concluyera lo contrario, se activa sólo el inventario criptográfico y el plan de transición, nunca un algoritmo nominado |
| **DT-4·v3** Automatización de procesos identificados — **procesos mínimos** de la lista cerrada | P | F | Aplica sobre **lista cerrada y numerada de procesos** publicada en el PPT (comprobación de la documentación de las solicitudes frente a los requisitos de las bases reguladoras, consulta del cumplimiento de las obligaciones tributarias y con la Seguridad Social por los servicios de intermediación de datos, remisión de convocatorias y concesiones a la Base de Datos Nacional de Subvenciones, emisión de requerimientos de subsanación, cálculo de la propuesta de pago, comprobación aritmética de la cuenta justificativa). Los procesos marcados como mínimos son prescripción y no puntúan |
| **DT-4·v3** Automatización de procesos identificados — **procesos adicionales** de la misma lista cerrada | CA | F | Sólo el exceso sobre los mínimos anteriores, valorado por el criterio H del baremo (VI.4.6) sobre la misma lista cerrada y numerada del PPT |
| **DT-5·v3** Interoperabilidad, servicios comunes y soberanía del dato | P | N | Con la excepción expresa: a los servicios comunes de obligada utilización **no** se les añade «o equivalente» |
| **DT-6·v3** Seguridad conforme al ENS en la categoría que corresponda | P | N | Aplica. La categoría es la resultante del anexo I del RD 311/2022 y **se consigna en el expediente antes de aprobar el pliego** (VI.4.4) |
| **DT-7·v3** Interfaz normalizada de acceso programático para agentes | P | **I** | Aplica **sólo si existe el acuerdo del órgano de gobierno** (fila 9 de VI.4.2). Ámbito modulado: los módulos que identifique el Anexo V, no «todas las aplicaciones municipales» |
| **DT-8·v3** Reversibilidad, inventario de componentes y dossier | P | N/F | Aplica íntegra. Es la cláusula con más valor real en un sistema de gestión de subvenciones: el día que se cambia de proveedor, el problema no es el software, son veinte ejercicios de convocatorias, concesiones, justificaciones y reintegros |
| **DT-9·v3** Exigencias tecnológicas determinadas del ejercicio | P | I | Aplica con DT-7·v3 y con la misma condición. El Anexo V se **transcribe físicamente** en el PPT, recortado a este objeto (VI.4.5) |
| **ADM-1·v3** Solvencia técnica y profesional | S | N | Solvencia técnica ordinaria por experiencia y medios, en los términos de los arts. 90 y 93 LCSP |
| **ADM-1·v3** Sistema de gestión de la IA (gobernanza) | CEE | I | La gobernanza de IA (UNE-EN ISO/IEC 42001:2026 o equivalente) **no se exige como solvencia** en este contrato. No porque el contrato no esté sujeto a regulación armonizada —lo está, según VI.4.7—, sino porque **falta el segundo requisito acumulativo de la modalidad A** de ADM-1·v3: el sistema de inteligencia artificial no constituye elemento determinante de la prestación, que es la tramitación y el seguimiento de las subvenciones. Se configura, por tanto, como condición especial de ejecución (modalidad B), con compromiso de obtención, **limitada a las letras a), d) y e) de su apartado 1**: inventario de sistemas, registro de incidencias y de cambios, y revisión anual. Sus letras b) y c) —análisis de riesgos sobre los datos municipales y supervisión humana— no se transcriben, porque son contenido del plan que puntúa el criterio E (VI.4.6), y puntuar lo que se impone como condición especial de ejecución es la tercera combinación que prohíbe la Parte I, §7.3 (ADM-7·v3.1.1.c)). Lo que el adjudicatario comprometa en ese plan se incorpora al contrato (ADM-7·v3.1.2); la media hora anual que ADM-1·v3, epígrafe 5, asigna a comprobar la formación de la letra c) se dedica aquí a comprobar ese compromiso, y la fila C3 de VI.4.8 conserva sus horas |
| **ADM-2·v3** Compromiso de evolución tecnológica determinada | CEE | I/F | Aplica, con alcance cerrado al Anexo V. Si el Anexo V no se incorpora, esta cláusula decae entera. **No se califica de esencial en este expediente**: su esencialidad depende del bloque B.2 de ADM-6·v3, que aquí no se marca por no superarse el test de relevancia (párrafo siguiente a esta tabla). El incumplimiento queda en penalidad conforme a ADM-5·v3 (tipos G2, M1 y M2) |
| **ADM-3·v3** Plazos, Plan Anual y bolsa de servicios evolutivos | CEE | F | Aplica. La bolsa se incorpora al amparo del art. 308.3 LCSP, con precio por unidades de actividad del Cuadro de Precios Unitarios y **peticiones de servicio del responsable del contrato**, nunca dirección de personal (art. 308.2 LCSP) |
| **ADM-4·v3** Seguimiento, responsable del contrato y Comisión | CEE | F | Aplica, con periodicidad y carga dimensionadas (VI.4.8) |
| **ADM-5·v3** Penalidades | Cláusula del PCAP | N | Aplica, depurada de las penalidades cuyas cláusulas se han marcado NA (Anexo VI) |
| **ADM-6·v3** Obligaciones esenciales y resolución | Cláusula del PCAP | N | Aplica. **Bloque A condicionado**: sólo si el contrato implica cesión de datos por el Ayuntamiento al contratista (art. 202.1 párr. 3.º) o tratamiento de datos personales por cuenta del responsable (art. 122.2). En este contrato ambos supuestos concurren y deben declararse expresamente en el PCAP. **Bloque B.1**: se conservan las letras a) —reversibilidad, DT-8·v3—, c) —acceso de los órganos de control, ADM-12·v3— y d) —uso de sistemas de IA sobre información municipal, ADM-13·v3—, y **se borra la letra b)** por estar ADM-11·v3 marcada NO APLICA (Anexo VI). **Bloque B.2: no se marca ninguna letra en el cuadro de características**, por el test de relevancia resuelto tras esta tabla |
| **ADM-7·v3** Criterios de adjudicación | CA | F/I | Aplica el baremo de VI.4.6, con precio y criterios funcionales dentro |
| **ADM-8·v3** Propiedad intelectual, titularidad y no dependencia | Cláusula del PCAP | N | Aplica con la delimitación de VI.4.1: nada sobre el producto base salvo licencia y delimitación; todo sobre desarrollos específicos, parametrizaciones, lógica y datos |
| **ADM-9·v3** Verificación mediante demostración funcional | Medio de comprobación de un criterio (art. 145.5.c) | F | Aplica, **sin atribuir puntuación adicional**, con dos medios separados: la sesión comprueba el criterio D y sólo confirma o retira los puntos asignados a la memoria técnica; la comprobación documental verifica C1, A y H respecto de todas las ofertas admitidas, después de abrir el sobre de fórmulas y antes de clasificarlas. Momento procedimental fijado en el PCAP y relación cerrada de elementos verificables publicada (VI.5) |
| **ADM-10·v3** Plan Anual de Evolución Tecnológica | CEE | F | Aplica como instrumento de seguimiento, con el modelo del Anexo XIV, **y con la misma condición que DT-9·v3**: sin Anexo V transcrito, el Plan carece de alcance (ADM-10·v3, epígrafe 7). **Sus hitos no son esenciales en este expediente**: sólo podrían serlo los aprobados con fecha cierta en acta y con la letra i) del bloque B.2 de ADM-6·v3 marcada, y aquí no se marca ninguna letra de ese bloque. El incumplimiento queda en penalidad conforme a ADM-5·v3 (tipos L1, G9, L2 y G5) |
| **ADM-11·v3** Depósito de código y continuidad | **NA (condicionada)** | — | **No aplica en este expediente.** ADM-11·v3.1 exige la concurrencia de **todas** las circunstancias de su apartado 1, la primera de las cuales es la categoría ALTA en la dimensión de disponibilidad, y la categorización propuesta en VI.4.4 la sitúa en MEDIA. Sólo si el análisis de riesgos firmado situara la disponibilidad en ALTA **y** concurrieran además las otras tres circunstancias —valor estimado superior al umbral, servicio de la lista tasada y estudio de mercado que acredite la ausencia de alternativa sustituible en menos de seis meses— procedería su incorporación, con su coste consignado como partida independiente del presupuesto base. La ficha debe recoger esta motivación |
| **ADM-12·v3** Acceso de los órganos de control a los datos de ejecución | CEE-E | **N** | Aplica. Es la cláusula que estrena el piloto (VI.4.9) |
| **ADM-13·v3** Uso de sistemas de IA sobre información municipal | CEE-E | N/F | Aplica. La declaración de sistemas se presenta con la oferta pero **no puntúa** |
| **ADM-14·v3** Modificación prevista y valor estimado | **NA** por defecto | — | No se incorpora: la evolución exigible está determinada en el Anexo V y retribuida con el precio, y cada euro de reserva sube el valor estimado (VI.4.7). Si el expediente decidiera incorporarla, se motiva y se recalcula el valor estimado antes de aprobar |

**El test de relevancia del bloque B.2 de ADM-6·v3, resuelto para este contrato.** ADM-6·v3 no permite marcar ninguna letra del bloque B.2 sin superar antes su test de relevancia, y obliga a que la conclusión conste en la memoria justificativa. Las letras que este expediente tendría más motivos para marcar son la **e)** —falta de implantación de una exigencia del Anexo V transcrito en el PPT— y la **g)** —falta de entrega de la interfaz normalizada en el plazo máximo del PPT—; las **f)**, **h)** e **i)** —versión sucesora, Plan Anual y sus hitos— recaen sobre la misma evolución tecnológica y siguen su suerte. Resuelto sobre ellas:

- **(i) ¿Capacidad identificada en el Informe de Necesidad como determinante de la finalidad del contrato?** **No.** La finalidad es la tramitación, el seguimiento y la justificación de las subvenciones municipales: es la necesidad 1 de VI.4.2, de origen funcional. La capacidad de ser operada y auditada por agentes es la necesidad 9, de origen **institucional**, y su propia fila declara que «ninguna norma lo impone y el gestor no lo ha pedido». El informe de necesidad no puede calificarla de determinante de la finalidad sin contradecir esa ficha.
- **(ii) ¿Peso económico en la oferta igual o superior al [X; se recomienda 10] por ciento del precio del contrato?** **No consta.** El expediente no imputa a esta capacidad un coste de esa magnitud. Su peso en el baremo es de 13 puntos sobre 100 —criterios A (8) y B (5)—, que es medida de puntuación y no de precio. Si el estudio económico del expediente cifrara ese coste por encima del umbral, el test se rehace y se hace constar.
- **(iii) ¿Su falta impide el uso de la solución para la finalidad contratada, o impide al Ayuntamiento cumplir una obligación legal propia?** **No.** Sin la interfaz normalizada el Ayuntamiento convoca, concede, paga y justifica sus subvenciones exactamente igual.

**Conclusión: no concurre ninguno de los tres supuestos, la casilla no se marca y ADM-2·v3 no se califica de esencial en este contrato.** Es la conclusión que la nota al redactor de ADM-6·v3 anticipa con este mismo ejemplo: resolver un contrato de gestión de subvenciones y ayudas municipales porque el contratista no entregó en plazo una interfaz para agentes de inteligencia artificial es desproporcionado en grado manifiesto. La consecuencia del incumplimiento queda en penalidad grave o muy grave —tipos G2 y M1 de ADM-5·v3 para las exigencias del Anexo V, y G19 y M15 para la interfaz normalizada—, con los límites del art. 192.1 LCSP; no es consecuencia simbólica. **Esta conclusión se transcribe en la memoria justificativa del expediente**, que es donde ADM-6·v3 exige que conste.

**Nota sobre las filas desdobladas.** Una cláusula que exige un mínimo y puntúa el exceso ocupa **dos filas** de la ficha, nunca una con dos instrumentos. Es lo que hace el Anexo I con DT-4·v3 (filas 13 y 14) y con ADM-1·v3 (filas 16 y 18), y lo que esta ficha reproduce. Una fila con dos instrumentos no supera la primera comprobación de cierre del Anexo II.

**Recuento del piloto: 24 cláusulas · 16 aplicadas sin condición · 4 condicionadas** al acuerdo del órgano de gobierno (DT-7·v3, DT-9·v3 y, con ellas, ADM-2·v3 y ADM-10·v3) **· 4 marcadas NO APLICA** (DT-2·v3, DT-3·v3, ADM-11·v3 y ADM-14·v3). La ficha firmada, con esta motivación, es documento público desde su incorporación al expediente (arts. 63.3.a) y 116.1 LCSP): se redacta sabiendo que la lee el recurrente.

#### VI.4.4 Categoría del Esquema Nacional de Seguridad

La categoría **no se elige**: resulta de valorar el nivel de cada dimensión de seguridad conforme al anexo I del RD 311/2022, y la categoría del sistema es la de la dimensión más alta. Escribir «ENS Nivel Alto» en la rúbrica de una cláusula, como hacía la versión 2, es fijar el resultado antes de hacer el análisis.

Esto no es una cautela teórica: es el supuesto exacto de la **Resolución 383/2024 del Tribunal Administrativo de Contratación Pública de la Comunidad de Madrid** (Parla), tratada íntegramente, con su literal y con el sentido de su fallo, en la Parte IV, IV.0, y en la Parte V, V.5.6. Su consecuencia operativa es la que aquí importa: **la justificación va en la memoria del expediente, y lo que no esté ahí no se puede arreglar después.** Ni este catálogo, ni sus anexos, ni la ficha de aplicabilidad son la memoria justificativa del expediente.

Análisis para este contrato, que el expediente debe recoger firmado por el responsable de la información y el responsable del servicio en cuanto a la valoración de cada dimensión (art. 41.1 del RD 311/2022) y **por el responsable de la seguridad en cuanto a la determinación de la categoría del sistema** (art. 41.2 del mismo real decreto), a quien corresponde asimismo la Declaración de Aplicabilidad (art. 28.2):

| Dimensión | Razonamiento | Nivel propuesto |
|---|---|---|
| Disponibilidad | La interrupción del sistema paraliza la tramitación de las solicitudes, las resoluciones de concesión y los pagos, pero admite continuidad manual acotada y no afecta a servicios esenciales para la ciudadanía en el corto plazo | MEDIO |
| Integridad | Una alteración no detectada de las solicitudes, de su valoración o de los importes concedidos y pagados produce concesiones o pagos indebidos, con efectos en el control financiero, en el reintegro y en el control externo | MEDIO / ALTO según el análisis de riesgos |
| Confidencialidad | Datos económicos y personales de solicitantes, beneficiarios y personal; en las líneas de ayuda del expediente simulado no hay categorías especiales del art. 9 RGPD (si se gestionaran ayudas con datos de salud, el análisis se rehace) | MEDIO |
| Autenticidad | La imputación de cada acto de tramitación —valoración, propuesta, resolución, pago— a un usuario determinado es determinante de responsabilidad | MEDIO |
| Trazabilidad | Sostiene la función interventora y la auditoría posterior | MEDIO / ALTO |

**Categoría propuesta: [MEDIA; elévese a ALTA sólo si el análisis de riesgos sitúa integridad o trazabilidad en nivel alto].** Consecuencias directas: en categoría MEDIA o ALTA la conformidad se acredita mediante **certificación**; en BÁSICA, mediante declaración de conformidad basada en autoevaluación (art. 38.1 RD 311/2022). Y el umbral de activación del depósito de código de ADM-11·v3 está anudado a la **concurrencia acumulativa de las cuatro circunstancias de su apartado 1**, entre ellas la categoría ALTA en la dimensión de disponibilidad. Con la categorización propuesta (MEDIA), **ADM-11·v3 se marca NO APLICA en este expediente** y así debe decirlo la ficha. En este ejemplo fallan además otras circunstancias del apartado 1 —entre ellas la de la lista tasada de servicios, en la que la gestión de subvenciones no figura—, y conviene subrayar la regla: la lista es una de las cuatro circunstancias, no una vía alternativa, de modo que su concurrencia sola tampoco bastaría. Sólo si el análisis de riesgos firmado sitúa la disponibilidad en ALTA, y concurren además las otras tres, procede su incorporación, con su coste consignado como partida independiente del presupuesto base de licitación.

#### VI.4.5 El Anexo V recortado a este objeto

El Anexo V del ejercicio (Anexo V de este documento, apartado V.A.2) se **transcribe físicamente en el PPT**, recortado a los módulos de este contrato. No se incorpora por remisión: un pliego que remita a un documento municipal revisable cada año es un pliego con obligación indeterminada.

El apéndice que lo contiene es el **Apéndice técnico 2 · Exigencias tecnológicas determinadas** (Anexo XXV), y lleva delante, en su apartado 1, la relación cerrada y numerada de módulos y funciones de la interfaz. **Es la sede única de esa relación**: este pliego no abre un apéndice separado para DT-7·v3, porque dos listas cerradas sobre la misma interfaz dejarían sin término de comparación al criterio A del baremo.

:::pliego
**APÉNDICE TÉCNICO 2 · EXIGENCIAS TECNOLÓGICAS DETERMINADAS APLICABLES A ESTE CONTRATO**

**1. Módulos y funciones de la interfaz normalizada.** Este apartado es la **única** relación de este pliego sobre los módulos y las funciones de la interfaz normalizada. Ningún otro documento del pliego contiene una relación distinta sobre la misma interfaz, y el exceso que valora el criterio A del pliego de cláusulas administrativas particulares se mide exclusivamente sobre el bloque B.

Módulos alcanzados por la exigencia ET-1: (i) convocatorias y bases reguladoras; (ii) solicitudes, valoración y resolución de concesión; (iii) pagos, justificación y reintegros. Quedan excluidos los módulos [relación de módulos excluidos].

**Bloque A · Funciones mínimas** que la interfaz debe exponer sobre los módulos anteriores, todas ellas **de consulta**. Son prescripción técnica obligatoria y **no puntúan**:
a) Consulta de las convocatorias, con sus bases reguladoras, su importe, sus plazos y su estado.
b) Consulta del estado de tramitación de una solicitud identificada.
c) Consulta de las concesiones y de los pagos por beneficiario y por período.
d) Consulta de la justificación presentada por un beneficiario y de su estado de comprobación.
e) Consulta del diccionario de datos y del catálogo de funciones expuestas.

**Bloque B · Funciones adicionales ofertables** sobre esos mismos módulos, todas ellas **de consulta**. Relación cerrada y numerada: es la única base del criterio A del pliego de cláusulas administrativas particulares, que cuenta las funciones de este bloque que el licitador se compromete a exponer por encima de las cinco del bloque A. **Se valora el compromiso**, con independencia de que la función se entregue desde la puesta en producción inicial o mediante desarrollo dentro del plazo de entrega fijado más abajo:
B.1) Consulta de la ejecución de cada convocatoria por fases: importe convocado, concedido, pagado, justificado y reintegrado.
B.2) Consulta de la información remitida a la Base de Datos Nacional de Subvenciones sobre cada convocatoria y cada concesión, con su fecha de remisión.
B.3) Consulta de las solicitudes registradas y de su estado de tramitación, por convocatoria y por período.
B.4) Consulta de los expedientes de reintegro, con su importe, sus intereses de demora y su estado.
B.5) Consulta de los requerimientos de subsanación y de justificación emitidos, con su plazo y su respuesta.
B.6) Consulta de los datos de los beneficiarios y de sus representantes asociados a una concesión.
B.7) Consulta de los asientos del registro de auditoría por persona usuaria, agente, fecha y módulo, con exportación en formato abierto.
B.8) Suscripción a avisos de cambio de estado sobre una solicitud o un expediente identificados.

**2. Transcripción del Catálogo de Exigencias Tecnológicas Determinadas.** Se transcriben a continuación las exigencias tecnológicas ET-1, ET-2 y ET-3 del Catálogo de Exigencias Tecnológicas Determinadas del ejercicio 2026-2027, versión [1.0], aprobado por [órgano competente] con fecha [fecha], en su redacción vigente en la fecha de aprobación del presente pliego. Las revisiones posteriores del Catálogo **no** afectan a este contrato.

Operaciones de escritura habilitables al amparo de la exigencia ET-2 en este contrato: **ninguna con efecto jurídico o económico sobre los expedientes**. Se habilitan exclusivamente operaciones sin ese efecto: creación de borradores, no firmados, de requerimientos de subsanación y de informes de valoración, y generación de informes. Toda operación con efecto jurídico o económico requiere validación expresa de la persona competente, sin posibilidad de configuración en sentido contrario.

Alcance de la exigencia ET-3 en este contrato: el registro de trazabilidad y auditoría comprende la totalidad de las consultas, propuestas y acciones realizadas sobre los módulos alcanzados por ET-1 y sobre las operaciones habilitadas conforme a ET-2, con los cinco criterios de aceptación del Catálogo, sin recorte alguno. La periodicidad de la copia exportada con resumen criptográfico es [X; se recomienda DIARIA] y el registro se conserva por un período no inferior a [VEINTICUATRO (24)] meses, por sostener el sistema funciones de control interno y actos susceptibles de impugnación.

Plazo de entrega: [X; se recomienda DOCE (12)] meses desde la formalización del contrato o, si fuera posterior, desde la puesta en producción del módulo correspondiente.

Verificación: prueba de aceptación ejecutada por los servicios municipales sobre el entorno de pruebas, documentada en acta suscrita por el responsable del contrato.
:::

Por qué se recorta así: la operación autónoma sobre un sistema que concede y paga subvenciones es donde el catálogo puede hacer daño de verdad. Limitar ET-2 a operaciones sin efecto jurídico ni económico convierte una exigencia discutible en una exigencia que un interventor puede firmar, y no impide la evolución: cuando el Ayuntamiento quiera habilitar operaciones con efecto sobre los expedientes, lo hará en la licitación siguiente con el Anexo V actualizado y con el circuito de autorización resuelto.

#### VI.4.6 El baremo completo, con el precio dentro

Tres advertencias antes de la tabla, porque son las tres formas de tumbar un baremo:

1. **Un baremo de 100 puntos en el que ningún punto valora la prestación es indefendible.** El bloque de innovación es un bloque **dentro** del baremo del contrato, no el baremo.
2. **No se puntúa el cumplimiento de lo que el pliego ya impone como obligación.** Cada criterio de abajo lleva escrito qué valora **por encima del mínimo**, y ese mínimo está en el PPT.
3. **El encaje procedimental manda sobre el diseño.** El porcentaje de juicio de valor decide el procedimiento utilizable y la necesidad de comité de expertos, no al revés.

**Variante A — procedimiento abierto ordinario (recomendada para este contrato)**

Es el baremo modelo de ADM-7·v3, apartado 2, aplicado a este expediente: mismos criterios, mismos códigos y mismas cifras del contrato de ejemplo. No hay dos baremos modelo en este documento.

| Criterio | Puntos | Tipo | Qué valora exactamente | Mínimo obligatorio de referencia |
|---|---|---|---|---|
| **P. Precio** | 40 | Fórmula | Baja sobre el presupuesto base de licitación, con la fórmula del Anexo XVII y el tratamiento de ofertas anormalmente bajas allí previsto | — |
| **C1. Cobertura funcional comprometida** | 8 | Fórmula E del Anexo XVII | Número de requisitos funcionales del **bloque B · Requisitos funcionales valorables** del **Apéndice técnico 0 · Matriz de requisitos funcionales** que el licitador **se compromete** a tener operativos en el plazo del PPT, sea porque la solución los cubre desde su entrega inicial, sea porque los desarrolla dentro de ese plazo. **Cmín = 0** y **Ctecho = número total de requisitos del bloque B**. La disponibilidad a la fecha de la oferta no se valora ni se exige | Los requisitos mínimos obligatorios del bloque A del mismo apéndice, que no puntúan |
| **C2. Plan de implantación y migración de datos** | 8 | Juicio de valor | Calidad del plan de migración de los ejercicios históricos, plan de pruebas y plan de vuelta atrás | Existencia de plan, exigida por el PPT |
| **C3. Niveles de servicio ofertados** | 6 | Fórmula | Tiempos de respuesta y resolución ofertados **por debajo** de los máximos del PPT, en horas | Los niveles de servicio máximos del PPT |
| **C4. Plan de formación y acompañamiento** | 4 | Juicio de valor | Adecuación a los perfiles municipales reales (servicio gestor de subvenciones, órganos de control interno) | Horas mínimas de formación del PPT |
| **A. Alcance funcional adicional de la interfaz normalizada** | 8 | Fórmula | Número de funciones del **bloque B · Funciones adicionales ofertables** del apartado 1 del **Apéndice técnico 2 · Exigencias tecnológicas determinadas** del PPT (ocho funciones) que el licitador se compromete a exponer **por encima** de las cinco del bloque A. Es indiferente que se entreguen de origen o mediante desarrollo dentro del plazo de ET-1 | Las cinco funciones mínimas del bloque A del mismo apartado (ET-1) |
| **B. Plazo ofertado de puesta en producción de ET-1** | 5 | Fórmula | Meses ofertados por debajo del máximo de 12, con puntuación proporcional y suelo en [X; se recomienda 6] meses | 12 meses |
| **D. Tratamiento del caso de uso municipal publicado** | 7 | Juicio de valor con rúbrica | **Descripción, en la memoria técnica presentada en plazo**, de cómo la solución ofertada resuelve las cinco tareas del caso de uso publicado en el PCAP, valorada conforme a la rúbrica de VI.5. La demostración funcional de ADM-9·v3 **confirma o retira** estos puntos; no puede añadir ninguno | — |
| **E. Plan de gobernanza de IA aplicado a este contrato** | 5 | Juicio de valor con rúbrica | Sólo lo que exceda del PPT y de la condición especial, en tres aspectos con su peso y valorados con la rúbrica de abajo: **E.1** supervisión humana de las propuestas asistidas sobre solicitudes, valoraciones y justificaciones: operaciones, perfil del equipo adscrito que asiste al personal municipal, modo de intervención y plazo de respuesta (2); **E.2** análisis de los riesgos de cada sistema sobre los datos de este contrato, con su medida de tratamiento, y medidas de mitigación de sesgos distintas de las de DT-1·v3, apartado 13 (2); **E.3** contenido, destinatarios y calendario de la información al Ayuntamiento y al órgano interventor, con periodicidad más frecuente que la semestral de DT-1·v3, apartado 13.c) (1). La supervisión humana y el análisis de riesgos no forman parte en este expediente de la condición especial de ADM-1·v3 (VI.4.3) | **Obligatorio y no puntúa**: DT-1·v3, apartados 2, 6.c), 6.d), 6.f), 11 y 13 —trazabilidad y constancia de los criterios de cada resultado, control de suspensión, formación para la supervisión, documentación, muestra de 50 casos y comunicación de sesgos, indicadores semestrales— y las letras a), d) y e) de ADM-1·v3, modalidad B |
| **H. Procesos automatizados adicionales** | 4 | Fórmula | Número de procesos de la lista cerrada y numerada del **Apéndice técnico 1 · Procesos automatizables** del PPT que el licitador se compromete a automatizar por encima de los mínimos exigidos | Los procesos mínimos de DT-4·v3, relacionados en el mismo apéndice |
| **F. Precio unitario ponderado del Cuadro de Precios Unitarios** | 5 | Fórmula | Precio/hora ponderado de los perfiles de la bolsa de servicios evolutivos. Los 5 puntos son de F.1: el ejemplo no prevé accesos adicionales y no incorpora ADM-14·v3, y su Cuadro no lleva unidades de despliegue | — |
| **TOTAL** | **100** | | | |

**Rúbrica del criterio E (5 puntos), publicada en el PCAP.** Se puntúa cada aspecto por separado y se suman. Lo que la memoria técnica describa y coincida con lo que el PPT o la condición especial ya imponen puntúa cero en el aspecto correspondiente. Lo que el adjudicatario comprometa se incorpora al contrato (ADM-7·v3.1.2).

| Aspecto | Peso | Tramo alto | Tramo medio | Cero |
|---|---|---|---|---|
| **E.1** Supervisión humana | 2 | **2**: relaciona una por una las operaciones de la solución que afectan a derechos de solicitantes o beneficiarios en este contrato, asigna a cada una el perfil del equipo adscrito que asiste al personal municipal que la supervisa y fija para cada una el modo de intervención y el plazo de respuesta del adjudicatario | **1**: relaciona operaciones y perfiles, pero sin asignarlos uno a uno o sin modo de intervención y plazo | Descripción genérica, no referida a las operaciones de este contrato, o limitada a la formación de DT-1·v3, apartado 6.f) |
| **E.2** Riesgos y sesgos | 2 | **2**: análisis de los riesgos de cada sistema de la relación de DT-1·v3, apartado 2, referido a los datos y procesos de este contrato, con una medida de tratamiento por riesgo, **y** medidas de mitigación de sesgos que se aplicarán en este contrato, identificadas por sistema y distintas de la documentación, la muestra y la comunicación de DT-1·v3, apartado 13 | **1**: sólo uno de los dos contenidos con ese detalle, o los dos sin medida por riesgo o por sistema | Descripción genérica, o que reproduce lo que DT-1·v3, apartados 12 y 13, ya obliga a entregar |
| **E.3** Información periódica | 1 | **1**: contenido, destinatarios —Ayuntamiento y órgano interventor— y calendario definidos, con periodicidad más frecuente que la semestral de DT-1·v3, apartado 13.c) | **0,5**: periodicidad más frecuente que la semestral, sin contenido o destinatarios definidos | La periodicidad semestral, que es la mínima de DT-1·v3, apartado 13.c), o una descripción genérica |

E.1 y E.2 valoran la calidad del plan con que se presta el servicio, no prestaciones adicionales. **E.3 sí es una prestación adicional** —informar con más frecuencia que la mínima—: se trata como mejora del art. 145.7 LCSP, especificada en su contenido, destinatarios y calendario, y con 1 punto sobre 100 queda por debajo del tope del 2,5 % que ese artículo fija para las mejoras valoradas por juicio de valor. Si el órgano de contratación añadiera al criterio prestaciones adicionales —más casos en la muestra de DT-1·v3, apartado 13.b), por ejemplo—, serían mejoras y, valoradas por juicio de valor, quedarían sujetas al tope del 2,5 %.

Comprobaciones obligatorias sobre este baremo, que son las que la hoja del Anexo IV automatiza:

- **Juicio de valor: 24 puntos (24 %)** —C2, C4, D y E—. Criterios evaluables por fórmula: 76 %. Hay preponderancia clara de los criterios automáticos, luego **no procede el comité de expertos** del art. 146.2.a) LCSP.
- **Criterios relacionados con la calidad: 55 puntos (55 %)**, todos salvo **P** y **F**, que son criterios de precio. Se cumple el 51 % del art. 145.4 LCSP tanto si el contrato se califica de prestación intelectual como si no.
- **Mejoras:** los criterios A y H de la lista cerrada son prestaciones adicionales a las definidas en el PPT y, por tanto, mejoras en el sentido del art. 145.7 LCSP. Por eso el PPT publica la lista cerrada, sus límites y su vinculación al objeto, y **se valoran por fórmula**: si el órgano de contratación decidiera valorarlas por juicio de valor, les sería aplicable el tope del 2,5 %.
- **Doble cómputo:** ningún criterio retribuye una obligación del PPT ni de una condición especial de ejecución. A valora funciones adicionales; H, procesos adicionales de la misma lista cerrada; B, plazo inferior al máximo; C3, niveles de servicio mejores que los exigidos; E, sólo lo que exceda del PPT y de la condición especial, en tres aspectos cerrados con su peso y su rúbrica: lo que DT-1·v3 impone en sus apartados 2, 6.c), 6.d), 6.f), 11 y 13 —trazabilidad, suspensión, sesgos— no puntúa, y la supervisión humana y el análisis de riesgos, que la modalidad B de ADM-1·v3 incluye en sus letras b) y c), se han dejado fuera de esa condición especial en este expediente (VI.4.3), porque la Parte I, §7.3, prohíbe puntuar lo que se impone como condición especial. Si el PPT llegara a exigir el plan de gobernanza del contrato, **el criterio E decae** (Anexo I). Y ninguna capacidad valorada por el baremo figura además entre las obligaciones esenciales del bloque B.2 de ADM-6·v3, **porque en este expediente no se marca ninguna letra de ese bloque**: el test de relevancia se resuelve en VI.4.3 y su conclusión es negativa. La regla que hay que respetar el día que se marque alguna letra es la del Anexo IV: **ninguna capacidad puede figurar a la vez como criterio del baremo y como obligación esencial sobre el mismo nivel de exigencia**. Si un expediente marcara las letras e) o g), la esencialidad quedaría acotada al mínimo del PPT —nunca al alcance ofertado por encima de él, como la propia letra e) advierte— y los criterios A y B seguirían valorando exclusivamente el exceso. Acumular sobre el mismo elemento, y sobre el mismo nivel de exigencia, un premio y una pena de máxima intensidad está prohibido.
- **Criterio suprimido:** no figura ningún criterio sobre capacidades de infraestructuras de servicios de confianza, porque DT-2·v3 está marcada NO APLICA. Puntuar una capacidad cuya cláusula técnica se ha declarado innecesaria no se motiva: se suprime el criterio y **se recompone el baremo antes de publicar el anuncio** (Anexo VI).
- **Nada puntúa la tenencia previa:** ni certificaciones (ENS, 27001, 27701, 42001), ni experiencia, ni medios, instalaciones o desarrollos ajenos al objeto ya disponibles a fecha de licitación. Lo que sí se valora es la **prestación comprometida**, que es cosa distinta: los criterios C1 y A cuentan lo que el licitador se obliga a entregar dentro del plazo del contrato, **sin exigir que esté disponible el día de ofertar y sin penalizar a quien lo desarrolle**, de modo que el licitador que se compromete a desarrollar la funcionalidad puntúa igual que el que ya la trae hecha (ADM-7·v3.1.2). **Una precisión que conviene hacer antes de que la haga otro:** el criterio B puntúa un plazo, y un plazo refleja de forma indirecta la disponibilidad previa, porque quien ya tiene la capacidad puede ofertar el mínimo. Por eso el criterio B tiene **suelo** —no se puntúa por debajo de [X; se recomienda 6] meses, de modo que esa ventaja queda acotada— y **peso bajo** (5 sobre 100). En C1 y en A la acotación es distinta y opera en el propio enunciado del criterio: se valora compromiso, no tenencia. En los tres casos lo valorado es una cualidad de la prestación —qué hará el sistema y cuándo estará disponible para el Ayuntamiento—, no una característica de la empresa. Esta motivación se reproduce en la casilla 5 de las fichas de los criterios B, C1 y A del Anexo IV.
- **Ofertas anormalmente bajas, que con 45 puntos de precio entre P y F son la principal defensa de este contrato y no un trámite.** El PCAP de este expediente hace tres cosas, que son las tres reglas del **Anexo XVII, apartado 5**, y se copian de allí: (1) **publica antes de licitar los parámetros objetivos** de identificación de la oferta presuntamente anormal, referidos a la oferta en su conjunto o al criterio de precio, según decida el expediente; (2) tramita el requerimiento de justificación al licitador, el informe técnico y la resolución motivada del **art. 149 LCSP antes de puntuar**, no después; y (3) hace constar expresamente que **la oferta excluida no forma parte de la referencia de cálculo de ninguna fórmula**. Este expediente **no se remite a parámetros supletorios** de ninguna norma de desarrollo: publica los suyos, que es la recomendación del propio Anexo XVII.

**Variante B — procedimiento abierto simplificado (art. 159 LCSP)**

Sólo utilizable si el valor estimado no supera el umbral del art. 159.1.a) para servicios y suministros. El límite que aquí manda es el del art. 159.1.b): el juicio de valor no puede superar el **25 %** (45 % en prestaciones de carácter intelectual). La variante A, con 24 %, **cabe tal cual**. Es deliberado: el baremo se ha diseñado para no expulsar al contrato del procedimiento más ágil. **Con las cifras de este expediente (valor estimado 504.000 €) esta variante no es utilizable**; se ofrece como ejemplo reutilizable para contratos por debajo del umbral del art. 159.1.a).

**Variante C — procedimiento abreviado (art. 159.6 LCSP)**

**Con las cifras de este expediente esta variante tampoco es utilizable**: el valor estimado supera con mucho el umbral del art. 159.6 y, si el expediente motiva el carácter intelectual de la prestación, el procedimiento queda además excluido por razón del objeto. Se ofrece igualmente como **ejemplo reutilizable** para contratos de menor cuantía.

Sin criterios de juicio de valor y sin demostración funcional. Se suprimen C2, C4, D y E (24 puntos) y se redistribuyen:

| Criterio | Puntos | Tipo |
|---|---|---|
| P. Precio | 45 | Fórmula |
| C1. Cobertura funcional comprometida | 16 | Fórmula |
| C3. Niveles de servicio ofertados | 10 | Fórmula |
| A. Alcance funcional adicional de la interfaz | 12 | Fórmula |
| B. Plazo ofertado de ET-1 | 8 | Fórmula |
| H. Procesos automatizados adicionales | 4 | Fórmula |
| F. Precio unitario ponderado | 5 | Fórmula |
| **TOTAL** | **100** | |

Comprobación previa: el procedimiento abreviado no está disponible para prestaciones de carácter intelectual. Si el expediente ha motivado ese carácter para invocar el 51 % del art. 145.4, no puede después acudir a esta variante. **Criterios de calidad en esta variante: 50 %** —todos salvo P (45) y F (5)—. Por debajo del 51 %, la variante **no es utilizable** si el expediente ha motivado el carácter intelectual de la prestación, lo que además la excluye por el art. 159.6 LCSP. Con la calificación ordinaria, el 50 % es admisible, pero el margen es nulo: cualquier ajuste al alza del peso del precio la invalida.

**Regla común a las tres variantes:** el baremo se publica con la ponderación exacta de cada criterio y **no se reescala en ningún caso una vez publicado el anuncio de licitación** (Parte I, §7.8.b). La cláusula de separabilidad de la Parte I opera sobre cláusulas y obligaciones; sobre las ponderaciones, la única operación admisible es la **recomposición del baremo antes de publicar**, y requiere informe del órgano al que corresponda el informe jurídico preceptivo.

#### VI.4.7 Valor estimado, umbrales y decisión sobre la modificación prevista

Método de cálculo, que debe figurar en el PCAP (art. 101.5 LCSP):

```
VE = (presupuesto base de licitación anual del servicio, sin IVA × años de duración inicial)
   + (presupuesto base de licitación anual del servicio, sin IVA × años de prórrogas previstas)
   + importe máximo de la bolsa de servicios evolutivos de todas esas anualidades
   + importe máximo de las modificaciones al alza previstas (art. 101.2.c)
   + primas o pagos a los licitadores, si los hubiera
```

Los tres primeros sumandos no se solapan: los dos primeros recogen el servicio y el tercero la bolsa. La bolsa está **dentro** del presupuesto base de licitación, y por eso se separa aquí sólo a efectos de cálculo, nunca para dejarla fuera de él.

Tres reglas que se olvidan y cuestan el expediente:

1. **Las prórrogas previstas computan aunque no se ejerzan.**
2. **La bolsa de servicios evolutivos computa, y su base de cálculo se escribe.** Está dentro del presupuesto base de licitación, luego está en el valor estimado. Escribir que no lo infla es un error de cálculo del valor estimado, y el valor estimado determina la publicidad armonizada y el acceso al recurso especial. El porcentaje de la bolsa se aplica sobre el **presupuesto base de licitación del servicio correspondiente a la duración inicial, sin IVA** (ADM-3·v3, bloque 2, apartado 5), y el pliego dice expresamente si la bolsa se dota además en las anualidades de prórroga y por qué importe. «Importe del contrato» no es término de la Ley 9/2017 y no se emplea como base.
3. **El porcentaje de la modificación prevista se calcula sobre el presupuesto base de licitación a efectos del valor estimado, y sobre el precio de adjudicación a efectos de ejecución.** Una baja del 15 % en la licitación se lleva por delante el 15 % de la reserva.

Ilustración numérica —**cifras hipotéticas**, sustitúyanse por las del expediente; mientras el expediente no se publique, ninguna cifra de este apartado debe citarse como dato real—.

**Presupuesto base de licitación y su desglose (art. 100.2 LCSP).** Es lo primero que comprueba la fiscalización previa, y sin él la tabla del valor estimado no se sostiene.

| Concepto | Importe anual (IVA excluido) |
|---|---|
| Costes directos de personal, conforme al convenio colectivo de referencia [identifíquese el convenio sectorial aplicable y el grupo profesional de cada perfil] | ……… € |
| Otros costes directos (licencias, suscripción, entorno de pruebas, migración) | ……… € |
| Gastos generales de estructura | ……… € |
| Beneficio industrial | ……… € |
| **Presupuesto base de licitación anual del servicio** | **120.000 €** |
| Bolsa de servicios evolutivos imputada a la anualidad (ADM-3·v3, bloque 2) | 6.000 € |
| **Presupuesto base de licitación anual, bolsa incluida** | **126.000 €** |
| IVA (21 %) | ……… € |

| Concepto | Importe |
|---|---|
| Presupuesto base de licitación anual del servicio (IVA excluido) | 120.000 € |
| Bolsa de servicios evolutivos anual: [X; se recomienda 5] % del presupuesto base de licitación del servicio de la duración inicial (240.000 €), imputado por anualidades | 6.000 € |
| **Presupuesto base de licitación anual, bolsa incluida** | **126.000 €** |
| **Duración inicial: 2 años — presupuesto base de licitación del contrato** | **252.000 €** (240.000 de servicio + 12.000 de bolsa) |
| Prórrogas previstas: 2 años, con la bolsa dotada en la misma proporción | 252.000 € (240.000 de servicio + 12.000 de bolsa) |
| Modificación prevista (ADM-14·v3 marcada NO APLICA) | 0 € |
| **Valor estimado** | **504.000 €** |

**Base de cálculo de la bolsa y crédito que hay que autorizar.** El 5 % se aplica sobre el presupuesto base de licitación del servicio de la **duración inicial**, sin IVA —240.000 €—, y arroja **12.000 €** para los dos años iniciales, la mitad del techo del 10 % que ADM-3·v3 se impone. La bolsa se dota **también** en las dos anualidades de prórroga, en la misma proporción y por otros 12.000 €, que sólo se autorizan si la prórroga se acuerda. De ahí la consecuencia que el expediente debe escribir y no deducir: el presupuesto base de licitación de la duración inicial es **252.000 €** (IVA excluido), y ése —no 240.000 €— es el importe del desglose del art. 100.2 LCSP, del certificado de existencia de crédito del art. 116.3 LCSP y del compromiso de gasto plurianual del art. 174 TRLRHL. El valor estimado no varía por escribirlo bien: 252.000 + 252.000 = **504.000 €**, exactamente lo que resultaba de sumar la bolsa como línea aparte. Una precisión que el PCAP debe recoger para que la bolsa dentro del presupuesto base no confunda al licitador: **la baja del criterio P se oferta sobre el presupuesto base de licitación del servicio —240.000 €—**, porque la bolsa no se retribuye a tanto alzado, sino a los precios unitarios que el criterio F valora y sólo por las horas efectivamente ejecutadas y recibidas de conformidad (ADM-3·v3, bloque 2, apartado 3).

**Coste de las cláusulas del catálogo efectivamente activadas**, cumplimentando la tabla de la Parte V, V.4.16. Un expediente que incorpora estas cláusulas y no cifra su coste no se fiscaliza de conformidad.

| Cláusula activada | Coste imputado | Dónde se consigna |
|---|---|---|
| ADM-3·v3, bloque 2 — bolsa de servicios evolutivos | 12.000 € en la duración inicial (24.000 € si se ejercen las dos prórrogas) | Dentro del presupuesto base de licitación; computada en el valor estimado |
| DT-8·v3 — entorno de pruebas y ensayo de reversibilidad | ……… € | Presupuesto base, dentro de otros costes directos |
| ADM-11·v3 — depósito de código y su verificación | **0 €**, por marcarse NO APLICA (VI.4.3) | — |
| ADM-12·v3 — [X; se recomienda 3] accesos de control incluidos en el precio | Sin coste adicional: incluidos en el precio ofertado | PCAP, cláusula de acceso |
| Horas municipales de verificación (VI.4.8) | ……… h/año × [coste hora del puesto] | Memoria justificativa, no presupuesto del contrato |

Comprobación de los **cuatro umbrales** de la Parte V, V.4.10, con ese resultado. Se añade, por su efecto sobre la variante B del baremo, el tope del procedimiento abierto simplificado, que no es umbral autónomo:

| Umbral | Precepto | Efecto en este expediente |
|---|---|---|
| Contrato menor | Art. 118.1 LCSP | No procede |
| Procedimiento abierto abreviado | Art. 159.6 LCSP | No procede |
| Recurso especial en materia de contratación | Art. 44.1.a) LCSP: valor estimado superior a 100.000 € en servicios y suministros | **Procede**. Los pliegos son directamente recurribles (art. 44.2.a). La defensa se juega en las dos primeras semanas desde su publicación y con lo que en ese momento conste en el expediente |
| Contrato sujeto a regulación armonizada | Reglamento Delegado (UE) 2025/2152, incorporado a los arts. 21.1.b) y 22.1.b) LCSP por la Orden HAC/1517/2025, de 18 de diciembre (BOE-A-2025-26605): 216.000 € en servicios y suministros | **Procede**. Publicidad en el DOUE y plazos armonizados. Compruébese la vigencia del importe antes de publicar: se revisa cada dos años |
| *(Tope, no umbral)* Procedimiento abierto simplificado | Art. 159.1.a) LCSP | **No procede**: el valor estimado supera el umbral de servicios y suministros. La variante B del baremo no es utilizable en este expediente |

**Decisión sobre ADM-14·v3 (modificación prevista): NO se incorpora.** Motivos, en este orden: la evolución exigible está determinada en el Anexo V y retribuida con el precio ofertado; la bolsa de servicios evolutivos del art. 308.3 LCSP cubre las peticiones de servicio no previstas dentro del objeto; y toda reserva adicional sube el valor estimado sin contrapartida. El ejemplo numérico de por qué una reserva pequeña puede abrir el recurso especial en un contrato que estaba por debajo del umbral está en ADM-14·v3 y en la Parte 0, §0.2, y no se repite aquí.

#### VI.4.8 Quién verifica, cuándo y cuánto cuesta

La segunda dificultad del §M1.1 es que el seguimiento real de los contratos es escaso y se limita al control del gasto. La respuesta no es prometer más seguimiento: es dimensionarlo y decir quién lo hace. **Ninguna cláusula se incorpora si su verificación no tiene actor municipal designado y periodicidad**, conforme a la regla de verificabilidad municipal enunciada en la Parte I, §7.9.

**Fuente única de la cuantificación: la tabla de ADM-4·v3, epígrafe 5.** Este apartado no estima por su cuenta y no añade ninguna fila a aquélla: **reproduce sus filas literalmente**, con su misma numeración, y se limita a suprimir las que VI.4.3 marca NO APLICA en este expediente y a añadir, como fila «B1, nota», el sumando que aquella tabla deja en nota para los apartados 11 a 13 de DT-1·v3, que este expediente incorpora. Si una cifra de aquí divergiera de la de allí, prevalece aquélla y ésta se corrige.

| # en ADM-4·v3.5 | Qué se verifica | Quién | Cuándo | Documento | h/año ordinario | h año 1 |
|---|---|---|---|---|---|---|
| B1 | Aceptación de funcionalidades de IA y revisión anual del inventario (DT-1·v3) | Responsable del contrato + informática + delegado de protección de datos | Aceptación y revisión anual | Acta de aceptación por funcionalidad | 12–20 | 16–28 |
| B1, nota | Apartados 11 a 13 de DT-1·v3, en el nivel C: criterios aplicados, descripción de los datos, muestra de verificación de sesgos e indicadores semestrales | Responsable del contrato + gestor del procedimiento + informática | Aceptación, revisión anual y entrega semestral de indicadores | Acta de aceptación (Anexo XVIII, modelo F); fichero de indicadores | 7 | 16–20 |
| B2 | Aceptación de automatizaciones e indicadores trimestrales (DT-4·v3) | Gestor del proceso + responsable del contrato | Aceptación y trimestral | Acta de aceptación; informe trimestral | 20 | 26 |
| B3 | Pruebas de integración y de exportación autónoma (DT-5·v3) | Servicio de informática, con el órgano interventor en la exportación | Aceptación y comprobación anual | Acta de integración; acta de exportación | 4 | 12 |
| B4 | Revisión de seguridad, vulnerabilidades y prueba de continuidad (DT-6·v3) | Responsable de la seguridad de la información | Anual | Informe anual de seguimiento de seguridad | 10–14 | 10–14 |
| B5 | Aceptación y verificación anual de la interfaz normalizada (DT-7·v3) | Servicio de informática + responsable del contrato | Al vencer el plazo de 12 meses y, después, anual | Acta de prueba de aceptación de la interfaz | 4 | 12–16 |
| B6 | Revisión del Plan y del Inventario de Componentes y ensayo de reversibilidad (DT-8·v3) | Responsable del contrato + informática | Cotejo con cada versión en producción; ensayo cada [X; se recomienda 24] meses y uno en el último año | Registro del contrato; acta de ensayo | 8–12 | 12–20 |
| B7 | Prueba de aceptación de cada exigencia del Anexo V y comprobación anual de las capacidades aceptadas (DT-9·v3) | Servicio de informática, con el órgano interventor cuando afecte a información económico-financiera | Al vencer el plazo de cada exigencia y, después, anual | Acta de aceptación por exigencia | 4 | 28–40 |
| | **Subtotal de las cláusulas técnicas** | | | | **69–85** | **132–176** |
| C1 | Sesiones de la Comisión de Seguimiento (ADM-4·v3.2) | Responsable del contrato + gestor + informática (+ control interno como invitado) | Semestral | Acta | 12 | 12 |
| C2 | Informe anual de ejecución (ADM-4·v3.3) | Responsable del contrato | Anual | Informe | 6 | 6 |
| C3 | Comprobación del sistema de gestión de IA (ADM-1·v3, modalidad B) | Responsable del contrato | Anual | Nota de comprobación | 3,5 | 4,5 |
| C4 | Seguimiento de versiones sucesoras y fines de soporte (ADM-2·v3.6) | Responsable del contrato | Continuo, balance anual | Registro + acta | 4 | 4 |
| C5 | Revisión del Plan Anual de Evolución Tecnológica y aprobación de hitos (ADM-10·v3) | Responsable + órgano de contratación | Anual | Acta + acuerdo | 7 | 7 |
| C6 | Tramitación y recepción de peticiones de la bolsa (ADM-3·v3, bloque 2) | Responsable del contrato | Por petición ([X; se recomienda 20]/año) | Petición + acta | 20 | 20 |
| C7 | Cierre anual de la bolsa (ADM-3·v3) | Responsable + unidad gestora | Anual | Cuadro acumulado | 3 | 3 |
| C8 | Comprobación del depósito de código (ADM-11·v3) | — | — | — | **0**, por marcarse NO APLICA (VI.4.3) | **0** |
| C9 | Comprobación del acceso de los órganos de control (ADM-12·v3) | Órgano interventor | Anual | Diligencia | 2 | 2 |
| C10 | Autorización de altas y comprobación de la declaración de sistemas de IA (ADM-13·v3) | Responsable del contrato | Anual y por alta | Autorización escrita | 2 | 3 |
| | **Subtotal de las cláusulas administrativas, descontada C8** | | | | **59,5** | **61,5** |
| | **Total de ejecución de este expediente (B + C)** | | | | **128,5–144,5 h/año** | **193,5–237,5 h** |

**Aritmética de los subtotales, para que pueda rehacerse.** El subtotal técnico es el de ADM-4·v3.5 —las siete cláusulas técnicas aplican y DT-2·v3 y DT-3·v3 ya estaban excluidas de aquella tabla— más la fila «B1, nota» (DT-1·v3, epígrafe 5: 3 horas al año y 12–16 el primer año en el nivel B, y 4 más cada año en el nivel C): 62 + 7 = 69 y 78 + 7 = 85 en régimen ordinario; 116 + 16 = 132 y 156 + 20 = 176 el primer año. El subtotal administrativo es el de ADM-4·v3.5 —62,5 y 64,5 horas— menos las 3 horas de C8, que aquí es cero por estar ADM-11·v3 marcada NO APLICA: 59,5 y 61,5. Total de la duración ordinaria, 69 + 59,5 = 128,5 y 85 + 59,5 = 144,5; total del primer año, 132 + 61,5 = 193,5 y 176 + 61,5 = 237,5.

**Carga de licitación, que no es anual y no se suma a la anterior** (filas A1 a A3 de ADM-4·v3.5): apreciación de las equivalencias invocadas por los licitadores (DT-0·v3), **6–18 h**; ficha por criterio y hoja de comprobación del baremo (ADM-7·v3), **3–6 h**; y demostración funcional más comprobación documental de ADM-9·v3 con cinco ofertas admitidas y sin requerimientos adicionales, **24–29 h**, que es la cláusula más cara del catálogo en horas municipales. **Subtotal por licitación: 33–53 h.**

**Fuera del cómputo anual**, por no ser recurrentes: entre **20 y 30 horas** en el último año por la reversión efectiva; unas **6 horas** por cada expediente de penalidad (ADM-5·v3); y entre **25 y 40 horas** por cada expediente de resolución. El ensayo de reversibilidad no se suma aparte: está dentro de la fila B6.

**Sobre las cinco verificaciones que una versión anterior de este apartado presentaba como «añadidas».** DT-1·v3, DT-4·v3, DT-5·v3, DT-6·v3 y el cotejo del Inventario de Componentes **ya figuran** en la tabla de ADM-4·v3, epígrafe 5, como filas B1, B2, B3, B4 y B6. No se añaden aquí, y no procede corregir la fuente única en ese sentido: contarlas dos veces era el error.

**Las cláusulas aplicables que no generan carga anual de ejecución, y dónde se comprueban**, para que ninguna quede sin actor: DT-0·v3, ADM-6·v3 y ADM-8·v3 se verifican **una sola vez, al aprobar el pliego**, por el órgano al que corresponda el informe jurídico preceptivo; ADM-7·v3 y ADM-9·v3, **en la licitación**, por la mesa de contratación, con la carga por expediente ya indicada; y ADM-5·v3 se activa **ante cada incumplimiento**, con la carga por expediente ya indicada. Todas ellas figuran con su verificador y su periodicidad en el Anexo I.

Lectura honesta de esa cifra: con [X; se recomienda 10] contratos activos bajo este catálogo, la carga anual está entre **1.285 y 1.445 horas**, del orden de **0,7 a 0,9 efectivos a jornada completa**, que es la misma lectura que ADM-4·v3.5 hace para el catálogo completo. Es asumible si se planifica y es inasumible si se descubre a posteriori. Crear obligaciones esenciales que después nadie verifica es peor que no crearlas: convierte cada penalidad en una discusión sobre por qué no se detectó antes.

**Consecuencia de los umbrales del §7.9.2 de la Parte I.** La carga de este contrato supera las 40 horas al año —las supera con holgura incluso en el extremo más favorable de la horquilla, 128,5 h—, de modo que **se requiere la conformidad expresa del servicio verificador**, que se incorpora al expediente como documento propio (VI.4.10, fila 19) y se marca en la casilla correspondiente de la ficha del Anexo II. Esa conformidad se firma sobre la horquilla completa de 128,5 a 144,5 horas al año, no sobre su extremo inferior. El umbral no se recalibra por el hecho de que el primer expediente lo supere: la alternativa prevista es incorporar menos cláusulas, hasta el mínimo de partida del §VI.2.2, cuya carga calcula la versión mínima de ADM-4·v3.5.

#### VI.4.9 Cómo se estrena ADM-12·v3

En el expediente simulado, el órgano de control pide por escrito esta cláusula, y se aplica en un contrato cuya materia controla por ley: la concesión y el pago de subvenciones. Contenido concreto para este expediente:

- **[X; se recomienda 3] accesos nominativos de consulta incluidos en el precio**, que permitirán consultar los datos de ejecución del contrato **con el detalle funcional definido en el apartado [ ] del Pliego de Prescripciones Técnicas**, sin coste adicional, durante toda la vigencia y las prórrogas. Es la formulación del apartado 1 de ADM-12·v3, y se emplea por la razón que allí se explica: «acceso de alcance no inferior al del gestor» es indeterminado y desproporcionado, y el propio catálogo lo suprimió. **Antes de aprobar el pliego hay que comprobar que el PPT contiene efectivamente ese apartado**, con la relación de consultas y de exportaciones que el órgano de control necesita; su texto modelo está en ADM-12·v3, epígrafe 2. El número de accesos es un parámetro del pliego: fijarlo evita la discusión sobre el modelo de licenciamiento y no expulsa del procedimiento a las soluciones que licencian por usuario.
- **Extracción en formato abierto** por interfaz documentada, sin intervención del adjudicatario y sin tarificación por consulta.
- **Diccionario de datos** entregado y mantenido actualizado.
- **Permanencia** de estas obligaciones en las prórrogas y durante el período de reversión.
- **Límites:** finalidad exclusiva de control interno, deber de sigilo del personal que accede (art. 5.1 RD 424/2017) y sujeción al régimen de protección de datos.

Anclaje: función interventora y control financiero (art. 214 TRLRHL; arts. 4.3, 6.3, 6.7, 20 y 30 del RD 424/2017) y DA 3.ª.3 LCSP. La cadena completa del control interno, y la advertencia sobre lo que el art. 33.4.d) del RD 424/2017 **no** ampara —es circularización de saldos en auditoría pública, no título para exigir acceso funcional permanente a la aplicación—, están desarrolladas en ADM-12·v3 y en la Parte IV, M1.4, y no se repiten aquí. En este expediente basta con dejar constancia de que el fundamento es la previsión contractual y de que el art. 33.4.d) se cita sólo como refuerzo.

#### VI.4.10 Los documentos del expediente

La relación reproduce el circuito general de la Parte V, V.2.1, aplicado a este expediente, y le añade los documentos propios del catálogo. **No concurre en él la justificación de la elección del procedimiento** (paso B-2 del circuito), porque el contrato se tramita por procedimiento abierto y el art. 63.3.a) LCSP sólo la exige cuando el procedimiento es distinto del abierto o del restringido. Ninguno de los demás es nuevo salvo tres.

| # | Documento | Quién lo firma | Precepto o modelo | ¿Se publica? |
|---|---|---|---|---|
| 1 | Informe de necesidad e idoneidad | Gestor y/o servicio competente según el origen | Arts. 28.1 y 116.4.e) LCSP · modelo en el Anexo III | Sí (art. 63.3.a) |
| 2 | Ficha de aplicabilidad firmada | Gestor / servicio competente / remisión al acuerdo | Anexo II | Sí, en el expediente |
| 3 | Memoria justificativa del expediente, **con la justificación de la categoría ENS y de cada exigencia tecnológica** | Órgano de contratación / servicio promotor | Art. 116 LCSP · doctrina de la Res. TACP Madrid 383/2024 | Sí |
| 4 | Informe de insuficiencia de medios | Servicio promotor | Art. 116.4.f) LCSP | Sí |
| 5 | Determinación de la categoría ENS y análisis de riesgos | Valoración: responsable de la información y responsable del servicio (art. 41.1). Categoría y Declaración de Aplicabilidad: responsable de la seguridad (arts. 41.2 y 28.2) | Anexo I y arts. 2.3, 28, 38.1, 40 y 41 RD 311/2022 | En el expediente |
| 6 | Consulta al directorio general de aplicaciones y justificación de no reutilización | Servicio de informática | Art. 157.3 Ley 40/2015 | En el expediente |
| 7 | Memoria de criterios de adjudicación y hoja de comprobación del baremo | Servicio promotor | Anexo IV | Sí |
| 8 | Cálculo del valor estimado y método | Órgano de contratación | Arts. 101.2.c) y 101.5 LCSP | Sí, el método en el PCAP |
| 9 | Declaración de conflicto de interés y de participación previa en la preparación | Cargos y asesores intervinientes | Arts. 64 y 70 LCSP · modelo en el Anexo IX | En el expediente |
| 10 | Documentación de la consulta preliminar del mercado, si se realizó | Servicio promotor | Art. 115 LCSP | Sí |
| 11 | Contraste de mercado del Anexo V | Servicio de informática | Anexo V, apartado V.A.4 | En el expediente |
| 12 | PPT y PCAP, con el Anexo V transcrito | Órgano de contratación | — | Sí |
| 13 | Informe jurídico preceptivo | Órgano al que corresponda (Asesoría Jurídica en municipios de gran población; Secretaría en el régimen común) | DA 3.ª.8 LCSP | En el expediente |
| 14 | Fiscalización previa y certificado de existencia de crédito | Intervención | DA 3.ª.3 LCSP y RD 424/2017 · art. 116.3 LCSP | En el expediente |
| 15 | Valoración de repercusiones en la estabilidad presupuestaria y la sostenibilidad financiera | Intervención | DA 3.ª.3 LCSP | En el expediente |
| 16 | Acuerdo de aprobación del expediente y de los pliegos | Órgano de contratación | — | Sí |
| 17 | Justificación de la decisión de no dividir en lotes, si no se divide | Órgano de contratación | Art. 116.4.g) LCSP | A través de la memoria |
| 18 | Compromiso de gasto plurianual y consignación de la aplicación presupuestaria | Intervención y órgano de contratación | Art. 174 TRLRHL; bases de ejecución del presupuesto | En el expediente |
| 19 | Conformidad expresa del servicio verificador con la carga anual de verificación | Servicio verificador designado | Parte I, §7.9.2, por superar el contrato las 40 h/año (VI.4.8) | En el expediente |

Los documentos 5, 6 y 11 son los que el circuito actual no produce. Los tres son baratos y los tres son exactamente lo que se echa en falta cuando llega un recurso. Los documentos 18 y 19 son los que la fiscalización previa echa en falta en primer lugar: un contrato de dos años más dos de prórroga es gasto plurianual, y una carga de verificación que supera el umbral del §7.9.2 sin conformidad del servicio que ha de asumirla es una obligación sin actor.

**Carpeta de defensa.** Antes de publicar el anuncio, se deja preparado un índice con todos los documentos de la tabla y sus enlaces internos. Si se interpone recurso especial, el expediente y el informe se remiten en plazo brevísimo: eso se prepara antes, no después.

---

### VI.5 Guion y rúbrica de la demostración funcional del piloto

El caso de uso y su rúbrica se recogen aquí, y no en un anexo, porque son específicos de este contrato; el guion, la relación cerrada de elementos verificables y la rúbrica **genéricos**, reutilizables por cualquier objeto, están en el Anexo XX. **Regla que gobierna todo este apartado:** la demostración funcional **no constituye criterio de adjudicación y no atribuye puntuación alguna** (ADM-9·v3, apartados 1 y 4). Lo que se puntúa es la memoria técnica escrita; la sesión sólo confirma o retira los puntos ya asignados a ella.

**Caso de uso publicado en el PCAP, idéntico para todos los licitadores, sobre datos ficticios facilitados por el Ayuntamiento:**

> «A partir del fichero de datos ficticios que se entrega con el pliego, y en un máximo de noventa minutos: (1) registrar una solicitud recibida en una convocatoria y tramitarla hasta la propuesta de resolución, con el circuito de validación configurado; (2) localizar y corregir un error en la valoración de una solicitud, mostrando el rastro completo de la modificación; (3) registrar la justificación presentada por un beneficiario y vincularla a la concesión y al pago que la originan; (4) obtener, para una convocatoria y un período, el detalle de importes concedidos, pagados y pendientes de justificar en formato exportable; (5) mostrar el registro de auditoría de todo lo anterior, identificando usuario, momento y datos afectados.»

**Reglas de la sesión:** modalidad por defecto videoconferencia sobre el entorno del propio licitador, sin despliegue previo ni coste para el Ayuntamiento; duración máxima [X; se recomienda 90] minutos; orden por sorteo; mismo guion y mismo tiempo para todos; incidencias técnicas documentadas y reanudación por una sola vez.

**Momento procedimental, como regla imperativa del PCAP:** la demostración se celebra **después** de abrir el sobre de criterios sujetos a juicio de valor y **siempre antes** de abrir el de criterios evaluables por fórmula, con constancia documental previa de la fecha y del guion. Una demostración cuya puntuación se cierre después de conocerse los precios no se retrotrae: anula la licitación entera.

**Qué se valora y qué no:** sólo lo descrito en la memoria técnica presentada en plazo. Lo mostrado y no descrito no puntúa; lo descrito y no acreditado puntúa cero. La demostración **verifica** lo declarado por escrito en la oferta: no la sustituye ni la completa. Con ese anclaje se resuelve el encaje con la DA 15.ª.2 LCSP, que sólo admite la comunicación oral para comunicaciones distintas de las relativas a los elementos esenciales del procedimiento, entre los que enumera las ofertas.

**Documentación de la sesión:** acta escrita detallada suscrita por quienes asistan, conforme al modelo de acta del Anexo XX, con una fila por cada una de las cinco tareas y **cuatro columnas obligatorias: «declarado» · «acreditado» · «no acreditado» · «evidencia observada»**, más las incidencias. Regla expresa que se transcribe al PCAP: *lo declarado en la memoria y no acreditado en la sesión puntúa cero en el subcriterio correspondiente; lo mostrado en la sesión y no declarado en la memoria no puntúa.* La DA 15.ª.2 LCSP exige que las comunicaciones orales que puedan incidir sustancialmente en la evaluación queden documentadas «a través de los medios adecuados, tales como los archivos o resúmenes escritos o sonoros»: **el acta escrita detallada basta**; puede añadirse archivo sonoro si el órgano lo considera conveniente, previa información a los licitadores. Escribir que la norma impone grabación audiovisual es sobredimensionar la exigencia y regalar un motivo de recurso.

**Rúbrica del criterio D (7 puntos), publicada en el PCAP.** Valora **la cobertura y la precisión de lo descrito por escrito** en la memoria técnica para las cinco tareas del caso de uso, no el desempeño en sala. Cada tramo exige la evidencia documental que se indica, aportada con la oferta.

| Tramo | Puntos | Qué debe contener la memoria técnica |
|---|---|---|
| Descripción completa y documentada | 7 | Las cinco tareas descritas paso a paso sobre funciones existentes de la solución, con identificación de la pantalla, función o servicio que ejecuta cada paso; se acompaña documentación de producto o manual que las recoge; se describe qué queda registrado en el registro de auditoría en cada una y en qué formato abierto se obtiene la exportación |
| Descripción completa con soporte parcial | 5 | Las cinco tareas descritas, pero en alguna la documentación aportada no cubre todos los pasos, o alguno requiere una intervención manual del proveedor que la propia memoria declara |
| Descripción parcial | 3 | Tres o cuatro tareas descritas con ese nivel de detalle; en las restantes la descripción es genérica o no identifica la función que las ejecuta |
| Descripción insuficiente | 1 | Una o dos tareas descritas con ese nivel de detalle |
| Sin descripción útil | 0 | Ninguna tarea descrita con ese nivel de detalle, o la memoria se limita a afirmar que la solución las cubre |

**Efecto de la sesión sobre esta rúbrica.** La demostración funcional de ADM-9·v3 no altera los tramos: comprueba, tarea por tarea, si lo descrito es exacto. Lo declarado y no acreditado pasa a cero en su subcriterio; lo acreditado y no declarado no suma. **La sesión no puede subir la puntuación de ningún licitador.**

**Advertencia que debe constar en el PCAP:** el resultado de la demostración no acredita solvencia y **no puede fundar por sí solo la exclusión** del licitador. El criterio valora lo descrito por escrito, no el desempeño en sala; la sesión sólo comprueba la exactitud de lo descrito, que es la función que le atribuyen el art. 145.5.c) LCSP y la cláusula ADM-9·v3. La demostración se celebra sobre un entorno de pruebas o preproducción del licitador, sin exigir instalación en el Ayuntamiento.

**Sobre en que se presenta cada declaración, y qué se comprueba en la sesión.** Cada declaración viaja en el sobre del criterio al que sirve, sin excepción. La memoria técnica y las declaraciones que sostienen los criterios sujetos a juicio de valor —C2, C4, **D** y E— van al **sobre de criterios sujetos a juicio de valor**. Las declaraciones que sostienen criterios evaluables por fórmula —el bloque B del Apéndice técnico 0 del criterio C1, la relación de funciones del bloque B del Apéndice técnico 2 del criterio A y la relación de procesos del criterio H— van al **sobre de criterios evaluables mediante fórmulas**, acompañadas de la documentación técnica que identifica la versión, el módulo o el hito de desarrollo que sostiene cada compromiso, con el Cuadro de Precios Unitarios y el resto de la proposición sometida a ese régimen.

En consecuencia, **la sesión de este apartado versa exclusivamente sobre el criterio D**, que es el único de juicio de valor al que sirve la demostración, y se celebra antes de abrir el sobre de fórmulas (ADM-9·v3.5). La exactitud de lo declarado para C1, A y H se comprueba por medios documentales **después de abrir ese sobre y antes de clasificar las ofertas, respecto de todas las ofertas admitidas**, conforme al apartado 5 de ADM-9·v3. Si se aprecia una duda, la mesa requiere la documentación técnica que la resuelva, sin permitir que se amplíe ni modifique la oferta; la fórmula se aplica sobre los elementos efectivamente acreditados.

**Por qué se resuelve así y no al revés.** Llevar al sobre de juicio de valor las declaraciones de C1, A y H habría puesto 20 de los 100 puntos del baremo —8 + 8 + 4, todos ellos automáticos— en manos de quien todavía tenía que valorar los 24 puntos subjetivos. Eso es lo que el artículo 26 del Real Decreto 817/2009 impide al exigir sobre independiente «del resto de la proposición», y lo que el artículo 146.2 de la LCSP ordena en cuanto al orden de valoración. El vicio se produciría en el trámite de la mesa, donde no cabe retroacción: obligaría a repetir la licitación entera. Con el reparto anterior no hay contaminación posible, y los criterios automáticos conservan una comprobación documental igual para todas las ofertas antes de su clasificación.

---

### VI.6 Tabla de rectificación de un pliego redactado con la versión 2

Este apartado no depende del ejemplo: sirve a cualquier administración que tenga pliegos ya
redactados con el clausulado de la versión 2.0 y quiera saber, cláusula por cláusula, qué hay que
cambiar y con qué urgencia. Es también el mejor resumen de por qué existe la versión 3.

Tabla de rectificación, cláusula por cláusula. **Prioridad P1**: defecto que bloquea la aprobación o produce un motivo de recurso directo; se corrige antes de aprobar. **P2**: defecto que debilita la posición del Ayuntamiento; se corrige antes de publicar. **P3**: mejora de claridad.

| Cláusula redactada con el texto de la versión 2 | Defecto | Qué se pone en su lugar | P |
|---|---|---|---|
| Rúbrica «DT-6. Seguridad (**ENS Nivel Alto**)» | Fija la categoría antes del análisis y sin justificación en la memoria. Es el supuesto exacto de la Res. TACP Madrid 383/2024 (Parla) | **DT-6·v3**: «Seguridad conforme al ENS en la categoría que corresponda». Categoría del anexo I del RD 311/2022 consignada en el expediente **y justificada en la memoria**, con certificación en MEDIA/ALTA y autoevaluación en BÁSICA | **P1** |
| «DT-7. **Servidor MCP** por cada plataforma y ERP», con ámbito «la totalidad de las aplicaciones municipales» | Obligación definida por el nombre de un protocolo privado, sin admisión de equivalentes, y ámbito universal desvinculado del objeto | **DT-7·v3**: obligación funcional (qué debe hacer la interfaz), ámbito modulado a los módulos del Anexo V, y el protocolo citado sólo fuera del articulado como referencia del estado del arte | **P1** |
| Inciso de DT-7 v2 «obteniendo mayor puntuación conforme a la cláusula ADM-7» | Mezcla prescripción y criterio en la misma cláusula: doble cómputo | Se suprime el inciso. La prescripción impone el mínimo; el criterio A del baremo valora sólo lo que excede de ese mínimo | **P1** |
| ADM-7 v2, criterio A: «Servidor MCP **operativo a fecha de licitación**», 15 puntos automáticos | Puntúa la tenencia previa: ventaja indirecta al contratista previo (art. 40.b LCSP) | **ADM-7·v3**, criterios A y B: alcance funcional **comprometido** y plazo **ofertado**. Nada puntúa por estar ya disponible | **P1** |
| ADM-7 v2, criterio E: ISO/IEC 42001 vigente y «cumplimiento del AI Act», 13 puntos, tipo «Mixto» | Puntúa una certificación de empresa y el cumplimiento de una obligación legal; la categoría «Mixto» no existe en la LCSP y obliga a adivinar el sobre | La gobernanza de IA sale del baremo y vive en **ADM-1·v3** como condición especial de ejecución. El baremo valora, en su caso, el **plan aplicado a este contrato**. Cada criterio se clasifica como fórmula o juicio de valor, sin tercera categoría | **P1** |
| ADM-7 v2: baremo de 100 puntos íntegramente de innovación | Ningún punto valora la prestación principal en el contrato que la tiene por objeto (art. 145.6 LCSP). Además, 57 de 100 por juicio de valor | Baremo completo de VI.4.6, con precio y criterios funcionales dentro, 24 % de juicio de valor y comprobación del art. 146.2 | **P1** |
| ADM-2 v2: «las tecnologías que el Ayuntamiento determine como necesarias **o convenientes**» | Obligación de contenido indeterminado: el licitador no puede valorarla y el Ayuntamiento no puede exigirla | **ADM-2·v3**: alcance cerrado al Anexo V, con hechos desencadenantes tasados y regla de agotamiento | **P1** |
| ADM-6 v2: se califican como esenciales «el compromiso de evolución», «el cumplimiento del Plan» y «el mantenimiento de las certificaciones» | Califica conceptos y un plan redactado por el propio adjudicatario. El art. 211.1.f).2.º exige enumeración precisa, clara e inequívoca y declara inadmisibles las cláusulas de tipo general | **ADM-6·v3**: incumplimientos tasados en lista cerrada, con el bloque *ex lege* **condicionado** a que concurran los supuestos de los arts. 202.1 párr. 3.º y 122.2 LCSP, y cláusula de cierre redactada como «ninguna otra de las obligaciones incorporadas en virtud del catálogo [denominación y versión]…», con identificación expresa del catálogo y no con la fórmula «de este clausulado» | **P1** |
| ADM-6 v2: «resolución del contrato **como penalidad por obsolescencia tecnológica**» | La obsolescencia así definida no es un hecho verificable; y la resolución no es una penalidad | Se suprime. La resolución opera sobre los incumplimientos tasados de ADM-6·v3, previa audiencia y requerimiento de subsanación, y sólo cuando el perjuicio de resolver no supere el de mantener el contrato | **P1** |
| ADM-3 v2: adaptación en 12 meses «dentro del **alcance razonable** del contrato», «salvo que se fije motivadamente un plazo inferior» | Dos conceptos jurídicos indeterminados en la cláusula que sostiene la penalidad | **ADM-3·v3**: «dentro del alcance definido en el Anexo V»; plazos inferiores sólo si están predeterminados en el Anexo V o los impone una norma | **P1** |
| Si el requerimiento de adaptación de 12 meses o la previsión de modificación quedaron en el **PPT** | Pliego equivocado: las condiciones especiales de ejecución y la modificación prevista van siempre al PCAP; su reproducción en el PPT carece de efectos | Se trasladan al PCAP y se elimina la reproducción | **P1** |
| ADM-5 v2: penalidad por «falta de la demostración exigida» | Es una conducta de la fase de licitación, no de ejecución del contrato | Se suprime esa fila del cuadro de penalidades. Su único efecto es cero puntos en el criterio correspondiente | **P2** |
| ADM-8 v2: titularidad «de los desarrollos, configuraciones… corresponderá al Ayuntamiento», sin tiempo, territorio ni modalidades | Sin esas menciones, la cesión queda limitada a cinco años y al territorio de la cesión (art. 43.2 TRLPI), y sin licencia mínima dimensionada no queda garantizado el uso municipal durante la vigencia y la reversión | **ADM-8·v3**: cesión con carácter exclusivo, todas las modalidades, todo el plazo de protección y todos los países; mención expresa del código fuente **y del código objeto**; reserva de derechos morales; licencia mínima supletoria dimensionada; reutilización limitada a los elementos de titularidad municipal, salvo pacto expreso sobre el producto base; y delimitación de lo que **no** se cede | **P1** |
| DT-2 v2: preferencia por una red nominada con motivación territorial y el inciso «salvo justificación motivada en el expediente» | Preferencia sin fundamento funcional y puerta abierta a convertirla en excluyente | En el expediente del ejemplo, **NO APLICA**. En general, **DT-2·v3** reformulada por capacidades funcionales, con prohibición de puntuar la pertenencia a una red determinada | **P1** |
| DT-3 v2: preparación cuántica con algoritmos nominados | Referencias a normas de un organismo nacional no europeo sin «o equivalente» ni orden de prelación | En el expediente del ejemplo, **NO APLICA**. En general, **DT-3·v3** con prelación de normas europeas e internacionales y guías del centro criptológico nacional | **P2** |
| DT-4 v2: «hiperautomatización», «Loop Engineering», «skills, harness, loops» | Vocabulario sin definición normalizada: no sostiene criterio, ni penalidad, ni resolución en un procedimiento contradictorio | **DT-4·v3**: lista cerrada y numerada de procesos automatizables publicada en el PPT. Los términos pasan al glosario descriptivo, sin efectos | **P1** |
| DT-5 v2: «o servicios equivalentes» aplicado también a los servicios comunes | Debilita una exigencia obligatoria: permite ofrecer un sustitutivo propio de un servicio de obligada utilización | **DT-5·v3**, con la excepción expresa del régimen de equivalencia para los servicios comunes de obligada utilización **relacionados en DT-5·v3, apartado 2** | **P2** |
| DT-1 v2: facultad de requerir lo «necesario o **conveniente**» | Mismo vicio que ADM-2 v2 | **DT-1·v3**, con remisión al Anexo V o al régimen de modificación del contrato, y con el reparto de papeles proveedor / responsable del despliegue | **P1** |
| Ausencia de cláusula de equivalencia y de trámite de prueba | Sin definición ni parámetros, cualquier rechazo de un equivalente es discrecional; y sin trámite, el licitador no sabe cómo probarla | **DT-0·v3**, con la prueba de la equivalencia **en la oferta** y motivación escrita del rechazo | **P1** |
| Ausencia de cláusula de acceso de los órganos de control | Se consolida durante toda la vida del contrato una limitación del control interno | **ADM-12·v3** | **P1** |
| Ausencia de cláusula sobre uso de sistemas de IA de terceros sobre información municipal | Riesgo real y actual, no de anulación sino de brecha | **ADM-13·v3** | **P2** |
| Anexo I v2 (declaración responsable): compromiso de «Servidor MCP», aceptación de la obsolescencia como causa de resolución y compromiso de demostración | Reproduce en la declaración los tres defectos ya corregidos en el articulado | Modelo del **Anexo VII** de este documento | **P1** |
| Anexo IV v2 (ficha de aplicabilidad): casillas sin motivación ni firma | Una casilla marcada no es una justificación; y sin firma no hay origen de necesidad | Modelo del **Anexo II**, con motivación por cláusula, doble vía de firma y regla de cierre | **P1** |
| Toda cita al Reglamento (UE) 2024/1689 con el calendario original | El calendario ha cambiado: el Reglamento (UE) 2026/1744, de 8 de julio de 2026, aplaza la exigibilidad de las secciones 1, 2 y 3 del capítulo III | Cita «en su redacción vigente» y remisión al Anexo XI de vigencia normativa, con la separación entre lo ya exigible y lo anticipado voluntariamente | **P2** |

**Regla de ejecución de esta tabla:** las correcciones P1 se hacen **todas o ninguna**. Corregir la mitad produce un pliego internamente contradictorio, que es peor que el pliego original: da al recurrente la prueba de que el Ayuntamiento conocía el defecto y lo dejó.

---

### VI.7 Orden entre la rectificación del piloto y la publicación del modelo

**Regla de este catálogo:** las correcciones de prioridad P1 de VI.6 se ejecutan **antes** de publicar el modelo. Es la opción que se adopta y así debe hacerse constar por escrito en el acuerdo que ordene la publicación (Anexo VIII, punto Octavo).

Fundamento, en una línea: **la credibilidad del modelo depende de que su primera aplicación lo cumpla.** Un catálogo cuyo primer expediente arrastra los defectos que el propio catálogo corrige no es un catálogo defectuoso; es un catálogo que nadie copia.

Cauces admisibles, según la situación de VI.2.3: rectificar y publicar después (regla general); o aprobar los pliegos rectificados y publicar el modelo en el mismo acto, cuando el expediente esté en las situaciones A o B y la coordinación entre los servicios intervinientes lo permita. Publicar el modelo con el piloto sin rectificar **no es un cauce previsto en este catálogo**; si el órgano competente decidiera hacerlo, debe consignarlo expresamente como decisión propia y motivada, con el análisis de sus consecuencias en la nota de elevación del expediente, que no forma parte de este documento.

---

### VI.8 Compromiso de evaluación del piloto

Para que el piloto sea un experimento de verdad, y no una declaración de intenciones, tiene que producir datos. El servicio promotor emitirá dos informes, dirigidos al órgano de contratación y al órgano de control interno:

**Informe a los 6 meses de la publicación de la licitación**, con: número de ofertas presentadas y comparación con licitaciones equivalentes anteriores del mismo objeto; consultas y aclaraciones recibidas, clasificadas por cláusula; recursos interpuestos, motivos alegados y resultado; exclusiones producidas y su causa; y tiempo real de tramitación frente al de expedientes comparables.

**Informe a los 12 meses de la formalización**, con: cumplimiento de los plazos del Anexo V; resultado de las pruebas de aceptación; incidencias en la aplicación de cada cláusula; horas reales dedicadas a la verificación, contrastadas con la estimación de VI.4.8; y uso efectivo del acceso de los órganos de control.

Ambos informes concluyen con una **propuesta motivada de ajuste** de tres cosas distintas: del catálogo (si alguna cláusula resultó inaplicable), del Anexo V del ejercicio siguiente (si alguna exigencia resultó inalcanzable o quedó superada) y de los valores por defecto de la tabla de parámetros del Anexo X. Un catálogo que no se corrige con lo que aprende es un catálogo que envejece igual que el pliego que pretende sustituir.

---

## PARTE VII · ANEXOS E INSTRUMENTOS

Regla común a toda esta parte: **son instrumentos de trabajo del expediente, y no se copian al pliego, los anexos I, II, III, IV, VI, X (salvo sus apartados X.3 y X.4), XI (salvo su extracto del anexo XIX), XII, XVIII, XXI, XXII, XXIII, XXIV, XXV y XXVI.** **Llevan bloque `:::pliego`, porque su texto literal se incorpora a un pliego o a la documentación de la licitación, los anexos V, VII, X.3, XIV, XVII, XIX y XX.** Los anexos VIII, XV y XVI son modelos de actos propios del Ayuntamiento —acuerdo del órgano de gobierno y resoluciones—, que no se copian a ningún pliego. El anexo IX contiene declaraciones que se incorporan al expediente. El anexo XIII es descriptivo y carece de efectos jurídicos.

Segunda regla, que es la que da valor a los anexos II y III: **son documento público desde su incorporación al expediente** (arts. 63.3.a) y 116.1 LCSP). Se redactan sabiendo que los lee el licitador que va a recurrir.

---

### ANEXO I · CUADRO MAESTRO DE EXIGENCIAS

Función: **hacer imposible el doble cómputo.** Cada exigencia aparece una sola vez y con un único instrumento. Si una exigencia necesita aparecer en dos sitios, es que son dos exigencias distintas y hay que escribirlas por separado, con su mínimo y su exceso.

Instrumentos posibles, y su precepto: **P** prescripción técnica (arts. 124 a 130 LCSP) · **S** solvencia (arts. 87 a 95) · **AM** adscripción de medios (art. 76) · **CEE** condición especial de ejecución (art. 202) · **CEE-E** condición especial de ejecución calificada de esencial (arts. 202.3 y 211.1.f) · **CA** criterio de adjudicación (art. 145) · **PCAP** cláusula contractual del pliego administrativo · **EXP** documento del expediente.

**Prohibición de doble asignación.** Ninguna exigencia puede computarse a la vez como: (a) solvencia y criterio de adjudicación; (b) prescripción técnica obligatoria y criterio de adjudicación; (c) criterio de adjudicación y condición especial de ejecución. Cuando el órgano de contratación quiera valorar algo que también exige, tiene que partirlo: **el mínimo obligatorio va al pliego técnico y sólo el exceso sobre ese mínimo, definido en lista cerrada, puede puntuar.**

| # | Exigencia | Cláusula | Instrumento **único** | Precepto de apoyo | Verificador municipal · periodicidad | Nunca además como |
|---|---|---|---|---|---|---|
| 1 | Formulación funcional de las prescripciones y admisión de equivalentes | DT-0·v3 | P | art. 126.5.a) LCSP | Órgano del informe jurídico · al aprobar el pliego | CA, S |
| 2 | Prueba de la equivalencia aportada con la oferta | DT-0·v3 | Requisito de la oferta | arts. 126.7, 126.8 y 128.2 LCSP | Mesa de contratación · en la licitación | CA |
| 3 | Utilización de los servicios comunes de obligada utilización, sin equivalente | DT-5·v3 | P | RD 4/2010 y Ley 39/2015 | Informática · aceptación | CA |
| 4 | Conformidad con el ENS en la categoría que corresponda, y en la cadena de suministro | DT-6·v3 | P + acreditación | art. 2.3 y 38.1 RD 311/2022 | Responsable de seguridad · anual | CA, S adicional |
| 5 | Reparto de papeles proveedor / responsable del despliegue y entrega de medios para la supervisión humana | DT-1·v3 | P | Reglamento (UE) 2024/1689, en su redacción vigente | Responsable del contrato · anual | CA |
| 6 | Régimen de decisiones automatizadas y derecho a intervención humana | DT-1·v3 | P | art. 41 Ley 40/2015; art. 22 RGPD | Órgano del informe jurídico · al aprobar | CA |
| 7 | Interfaz normalizada para agentes: **funciones mínimas** del bloque A del apartado de módulos y funciones del **Apéndice técnico 2 · Exigencias tecnológicas determinadas** | DT-7·v3 + ET-1 | P | art. 126.5.a) LCSP | Informática · acta de aceptación, una vez | CA |
| 8 | Interfaz normalizada: **funciones adicionales ofertables** del bloque B del mismo apartado del **Apéndice técnico 2 · Exigencias tecnológicas determinadas**, comprometidas por encima de las mínimas del bloque A | ADM-7·v3 criterio A | CA (fórmula) | arts. 145.6 y 145.7 LCSP | Mesa · en la licitación | P, CEE |
| 9 | Plazo máximo de puesta en producción de la interfaz | DT-9·v3 / ET-1 | P | — | Responsable del contrato · al vencimiento | CA |
| 10 | Plazo **ofertado** inferior al máximo | ADM-7·v3 criterio B | CA (fórmula) | art. 145 LCSP | Mesa · en la licitación | P |
| 11 | Operación autónoma supervisada dentro de límites configurables | ET-2 | P | — | Informática · acta, una vez | CA |
| 12 | Trazabilidad y auditoría de la actuación de agentes | ET-3 | P | — | Informática · acta, una vez | CA |
| 13 | Automatización de los procesos **mínimos** de la lista cerrada | DT-4·v3 | P | — | Gestor · aceptación | CA |
| 14 | Automatización de procesos **adicionales** de la misma lista cerrada | ADM-7·v3 criterio H | CA (fórmula) | art. 145.7 LCSP | Mesa · en la licitación | P |
| 15 | Reversibilidad: plan, inventario de componentes, ensayo y dossier | DT-8·v3 | P + garantía | arts. 34.1 y 111.1 LCSP; art. 28.3.g) RGPD | Informática · ensayo cada [X; se recomienda 24] meses | CA |
| 16 | Sistema de gestión de la IA (norma de gobernanza de IA o equivalente) | ADM-1·v3 | CEE (o S sólo en contratos armonizados) | arts. 202 y 93.2 LCSP | Responsable del contrato · anual | **CA en ningún caso** |
| 17 | Plan de gobernanza de IA **aplicado a este contrato**: sólo lo que exceda de lo impuesto, en los aspectos E.1 a E.3 | ADM-7·v3 criterio E | CA (juicio de valor, con rúbrica por aspecto) | arts. 145 y 145.5.b) LCSP | Mesa · en la licitación | P: DT-1·v3, apartados 6.c), 6.d), 11 y 13 —lo que imponen no puntúa—; *E decae si el PPT exige el plan* · CEE: si se incorpora además ADM-1·v3, modalidad B, no se transcriben sus letras b) y c), que recaen sobre el mismo contenido (Parte VI, VI.4.3) |
| 18 | Solvencia técnica y profesional | ADM-1·v3 | S | arts. 90 y 93 LCSP | Mesa · en la licitación | CA |
| 19 | Medios personales concretos comprometidos | ADM-1·v3 | AM | arts. 76 y 150.2 LCSP | Responsable del contrato · continua | CA |
| 20 | Evolución tecnológica determinada del Anexo V | ADM-2·v3 | CEE; CEE-E sólo si el cuadro de características marca el bloque B.2 de ADM-6·v3 | arts. 202.1 y 202.2 LCSP | Comisión de seguimiento · semestral | CA |
| 21 | Plan Anual de Evolución Tecnológica | ADM-10·v3 | CEE | art. 202 LCSP | Responsable del contrato · anual | CA, CEE-E salvo hitos aprobados con fecha cierta y con la letra i) del bloque B.2 de ADM-6·v3 marcada |
| 22 | Bolsa de servicios evolutivos por unidades de actividad | ADM-3·v3, bloque 2 | Sistema de determinación del precio | art. 308.3 LCSP | Responsable del contrato · continua | CA |
| 23 | Precio unitario ponderado del Cuadro de Precios Unitarios | ADM-7·v3 criterio F | CA (fórmula) | art. 145 LCSP | Mesa · en la licitación | — |
| 24 | Depósito de código y continuidad del servicio | ADM-11·v3 | CEE-E | arts. 34.1 y 202 LCSP | Informática · verificación anual | CA |
| 25 | Acceso de los órganos de control a los datos de ejecución | ADM-12·v3 | CEE-E | art. 214 TRLRHL; arts. 4.3, 6.3, 6.7, 20 y 30 RD 424/2017; DA 3.ª.3 LCSP | Control interno · uso ordinario | CA |
| 26 | Uso de sistemas de IA de terceros sobre información municipal | ADM-13·v3 | CEE-E | art. 28 RGPD | Responsable del contrato · anual y ante cada alta | CA |
| 27 | Declaración en la oferta de los sistemas de IA que se emplearán | ADM-13·v3 | Requisito de la oferta | — | Mesa · en la licitación | **CA en ningún caso** |
| 28 | Titularidad, licencia y no dependencia | ADM-8·v3 | PCAP | art. 308.1 LCSP; arts. 43, 97.4, 99 y 100 TRLPI | Órgano del informe jurídico · al aprobar | CA |
| 29 | Demostración funcional | ADM-9·v3 | Medio de comprobación de un criterio (art. 145.5.c) | arts. 139.2 y 146.2 LCSP; arts. 26 a 30 RD 817/2009 | Mesa · en la licitación | S, CEE, causa autónoma de exclusión |
| 30 | Modificación prevista y, en su caso, reducción por informe vinculante desfavorable (cláusula complementaria [n+2]) | ADM-14·v3 | PCAP + valor estimado; la [n+2], con la casilla de desglose del modelo de oferta económica (Anexo X, X.4) | arts. 204 y 101.2.c) LCSP | Órgano de contratación · al aprobar; la Mesa comprueba en la licitación que la oferta trae el desglose | CA |
| 31 | Penalidades | ADM-5·v3 | PCAP | arts. 192.1 y 122.3 LCSP | Responsable del contrato · ante cada incumplimiento | CA |
| 32 | Obligaciones esenciales y resolución | ADM-6·v3 | PCAP | art. 211.1.f) LCSP | Órgano de contratación | CA |
| 33 | Niveles de servicio: tiempos máximos de respuesta y de resolución de incidencias | PPT del contrato; su incumplimiento, tipos L12, G26 y M16 de ADM-5·v3 | P | arts. 192.1 y 122.3 LCSP | Responsable del contrato · cada período de medición del PPT y en el informe anual de ejecución | CA |
| 34 | Tiempos de respuesta y de resolución **ofertados** por debajo de los máximos del PPT | ADM-7·v3 criterio C3 | CA (fórmula) | arts. 145 y 122.3 LCSP | Mesa · en la licitación; en ejecución, como la fila 33 | P, CEE-E |

**Regla de lectura del cuadro:** la columna «verificador municipal · periodicidad» no es informativa. Si una fila no puede rellenarla, **la exigencia no se incorpora**. Es la regla de verificabilidad municipal: una obligación esencial que nadie comprueba no protege al Ayuntamiento, lo expone.

---

### ANEXO II · FICHA DE APLICABILIDAD POR EXPEDIENTE

Función: dejar constancia, cláusula por cláusula, de **de dónde nace** cada exigencia que se incorpora al pliego, y **quién responde** de esa afirmación. No es una tabla de casillas: es un formulario de motivación con firma.

---- INICIO DEL MODELO ----

**FICHA DE APLICABILIDAD DEL CATÁLOGO DE CLÁUSULAS DE IA Y DEEP TECH**

Expediente: ……………………………… · Objeto: ………………………………
Órgano de contratación: ……………………………… · Servicio promotor: ………………………………
Versión del catálogo aplicada: **[ ]** · Versión del Catálogo de Exigencias Tecnológicas: **[2026-2027, v. 1.0]**
Fecha: …… / …… / ……

**Instrucciones.** (1) Se cumplimenta **después** del informe de necesidad (Anexo III), no antes: la ficha es consecuencia de la necesidad, no su sustituto. (2) Por cada cláusula que se marque distinta de NO APLICA hay que rellenar **las seis casillas** (a) a (f). Una casilla en blanco equivale a NO APLICA. (3) La casilla «origen» determina quién firma. (4) **Regla de cierre: la cláusula que no tenga origen marcado y firmado va a NO APLICA.** No hay opción intermedia. (5) Una cláusula que exige un mínimo y puntúa el exceso ocupa **dos filas**, cada una con un solo instrumento; no se admite una fila con dos instrumentos. (6) En la fila de DT-1·v3, la casilla (a) dice además qué apartados 11, 12 y 13 se incorporan y por qué concurre su presupuesto —intervención en procedimientos administrativos; resultados referidos a personas físicas—, y la casilla (b), si la entidad está sujeta a la normativa autonómica de la fila 50 del Anexo X, que es lo que activa los incisos condicionados de los apartados 2, 7 y 9.

**Orígenes de necesidad.** **N** normativo: una norma en vigor impone al Ayuntamiento un deber que no puede cumplir sin la colaboración del contratista — lo acredita el servicio competente por razón de la materia, citando el precepto. **F** funcional: lo necesita el servicio gestor para prestar su servicio — lo firma el gestor del contrato. **I** institucional: no lo impone una norma ni lo ha pedido el gestor, y deriva de un plan o política aprobados por el órgano de gobierno — se acredita por remisión al acuerdo, identificándolo por fecha y número.

**Instrumentos.** P prescripción técnica · S solvencia · AM adscripción de medios · CEE condición especial de ejecución · CEE-E condición especial esencial · CA criterio de adjudicación · **NA no aplica**.

| Cláusula | Instrumento | Origen (N/F/I) | (a) Necesidad municipal concreta que satisface | (b) Norma, acuerdo o petición del gestor de que nace | (c) Por qué la relación con el objeto de **este** contrato es directa, clara y proporcional (art. 116.4.e LCSP) | (d) Verificador (puesto, no persona) | (e) Periodicidad y documento que la prueba | (f) Carga estimada (h/año) |
|---|---|---|---|---|---|---|---|---|
| DT-0·v3 Equivalencia y acreditación | | | | | | | | |
| DT-1·v3 IA, IA generativa y agentes | | | | | | | | |
| DT-2·v3 Capa de confianza | | | | | | | | |
| DT-3·v3 Criptoagilidad y post-cuántica | | | | | | | | |
| DT-4·v3 Automatización de procesos | | | | | | | | |
| DT-5·v3 Interoperabilidad y soberanía del dato | | | | | | | | |
| DT-6·v3 Seguridad conforme al ENS | | | | | | | | |
| DT-7·v3 Interfaz normalizada para agentes | | | | | | | | |
| DT-8·v3 Reversibilidad e inventario | | | | | | | | |
| DT-9·v3 Exigencias tecnológicas determinadas | | | | | | | | |
| ADM-1·v3 Solvencia y certificaciones | | | | | | | | |
| ADM-2·v3 CEE de evolución determinada | | | | | | | | |
| ADM-3·v3 Plazos, Plan Anual y bolsa | | | | | | | | |
| ADM-4·v3 Seguimiento y Comisión | | | | | | | | |
| ADM-5·v3 Penalidades | | | | | | | | |
| ADM-6·v3 Obligaciones esenciales | | | | | | | | |
| ADM-7·v3 Criterios de adjudicación | | | | | | | | |
| ADM-8·v3 Propiedad intelectual y titularidad | | | | | | | | |
| ADM-9·v3 Demostración funcional | | | | | | | | |
| ADM-10·v3 Plan Anual de Evolución Tecnológica | | | | | | | | |
| ADM-11·v3 Depósito de código | | | | | | | | |
| ADM-12·v3 Acceso de los órganos de control | | | | | | | | |
| ADM-13·v3 Uso de sistemas de IA | | | | | | | | |
| ADM-14·v3 Modificación prevista | | | | | | | | |

**Carga total de verificación del expediente**

| Concepto | Horas/año |
|---|---|
| Suma de la columna (f) de todas las cláusulas marcadas | ……… h/año |
| Carga concentrada no anual (aceptación inicial, ensayo de reversibilidad, reversión, demostración funcional por licitación) | ……… h |

Umbrales del §7.9.2 de la Parte I, que se comprueban sobre la primera cifra y también sobre la del primer año de ejecución, que suma a ella la parte de la carga concentrada que cae en ese año, como la aceptación inicial (ADM-4·v3, epígrafe 5); basta que una de las dos los supere: si **supera [X; se recomienda 20] h/año** → se reduce el número de cláusulas incorporadas o se agrupa la verificación en la comisión de seguimiento; si **supera [X; se recomienda 40] h/año** → se requiere la **conformidad expresa del servicio verificador**, que se incorpora al expediente.

**Comprobaciones de cierre** (se marcan las cinco o la ficha no se firma):

- ☐ Cada exigencia marcada aparece con **un solo** instrumento, conforme al Anexo I. No hay ninguna que puntúe y a la vez sea obligatoria. Las cláusulas que exigen un mínimo y puntúan el exceso ocupan dos filas.
- ☐ Se ha ejecutado la **tabla de dependencias** (Anexo VI) para todas las cláusulas marcadas NA: no queda en el pliego ninguna remisión, penalidad, criterio ni casilla de la declaración responsable que se refiera a una cláusula suprimida.
- ☐ Cada cláusula marcada tiene cumplimentadas las casillas **(d) verificador, (e) periodicidad y documento y (f) carga estimada**, y la carga anual resultante consta en el cuadro anterior.
- ☐ Si la carga anual supera las [X; se recomienda 40] h/año, consta en el expediente la **conformidad expresa del servicio verificador**, firmada y fechada.
- ☐ El Catálogo de Exigencias Tecnológicas se **transcribe físicamente** en el PPT, con versión y fecha, y no se incorpora por remisión.

**Firmas.** Se firma por vía separada según el origen. Una sola persona no puede firmar orígenes que no le corresponden.

| Vía | Quién firma | Cláusulas que ampara | Firma y fecha |
|---|---|---|---|
| Necesidad **funcional** | El gestor del contrato / responsable del servicio destinatario | Las marcadas con origen F | |
| Necesidad **normativa** | El servicio competente por razón de la materia (informática y seguridad, control interno, delegado de protección de datos) | Las marcadas con origen N | |
| Necesidad **institucional** | Por remisión al acuerdo del órgano de gobierno de fecha …… , punto …… , más informe del servicio promotor | Las marcadas con origen I | |

---- FIN DEL MODELO ----

**Nota para quien reutilice el documento.** La doble vía de firma no es burocracia añadida: resuelve una contradicción real. El gestor de un servicio no puede firmar que necesita la conformidad con el esquema de seguridad ni el acceso de los órganos de control, porque no son necesidades suyas. Si se le obliga a firmarlas, o firma lo que no le corresponde o esas cláusulas no entran nunca en ningún pliego.

---

### ANEXO III · MODELO DE INFORME DE NECESIDAD

Función: cumplir los arts. 28.1 y 116.4.e) LCSP en **este** expediente. Se redacta antes de la ficha del Anexo II. Y se redacta sabiendo que se publica: la motivación de la necesidad se publica en el perfil de contratante.

**Advertencia central, que es la lección de la Resolución 383/2024 del TACP de la Comunidad de Madrid**: este informe y la memoria justificativa del expediente son el sitio donde se justifica cada exigencia. El catálogo de cláusulas no es la memoria de ningún expediente, y la justificación no puede completarse después, en sede de recurso.

---- INICIO DEL MODELO ----

**INFORME DE NECESIDAD E IDONEIDAD DEL CONTRATO**
*(arts. 28.1 y 116.4 de la Ley 9/2017, de Contratos del Sector Público)*

Expediente: ……………………… · Objeto: ………………………
Servicio promotor: ……………………… · Fecha: …… / …… / ……

**1. Necesidad que se pretende satisfacer y su relación con el fin institucional.**
Descríbase la situación actual y qué deja de poder hacerse si no se contrata. Evítese la fórmula genérica: la frase «para la modernización y transformación digital del Ayuntamiento» no es una necesidad, es un rótulo.

**2. Idoneidad del objeto y de su contenido.**
Por qué el objeto definido satisface esa necesidad y por qué no se ha definido de forma más amplia ni más estrecha. Delimitación de lo que queda fuera.

**3. Insuficiencia de medios propios y consulta previa de soluciones ya disponibles.**
(a) Por qué no puede atenderse con los medios personales y materiales del Ayuntamiento (art. 116.4.f). (b) Resultado de la consulta al directorio general de aplicaciones y, si existiendo una solución reutilizable no se reutiliza, justificación en términos de eficiencia (art. 157.3 de la Ley 40/2015).

**4. Origen de cada exigencia tecnológica incorporada.** *(Cumpliméntese una fila por cada cláusula marcada en la ficha del Anexo II)*

| Cláusula | Origen | Qué necesidad concreta cubre | Norma, acuerdo o petición que la sostiene | Por qué es proporcionada a este contrato |
|---|---|---|---|---|
| | | | | |

**4.bis Exigencias de origen institucional.** Si alguna exigencia tiene origen institucional, identifíquese el acuerdo del órgano de gobierno que aprueba el plan o política de que deriva (fecha, punto del orden del día y publicación), y explíquese **por qué este contrato entra en su ámbito**. La remisión al acuerdo sin esa explicación es justificación estereotipada y no cumple el art. 116.4.e).

**5. Necesidades declaradas por órganos distintos del gestor.**
Hágase constar expresamente la necesidad declarada por los órganos de control interno respecto del acceso a los datos de ejecución, con identificación del documento en que consta, su fecha y su autor. Si no existe documento firmado, no se cita: se solicita.

**6. Por qué el mantenimiento correctivo ordinario no cubre la necesidad de evolución.**
Distíngase con precisión: (a) corrección de errores, incluida en el mantenimiento; (b) adaptación a cambios normativos, habitualmente incluida; (c) incorporación de capacidades nuevas determinadas, que **no** está incluida y es lo que el catálogo contrata. Sin esta distinción, la exigencia de evolución se solapa con el mantenimiento y se paga dos veces.

**7. Coste de no evolucionar.**
Efecto previsible sobre la prestación si la solución permanece en su estado actual durante toda la duración del contrato y sus prórrogas: horas de trabajo manual, dependencia de terceros para obtener datos propios, coste de la migración futura.

**8. Categoría de seguridad y tratamiento de datos personales.**
Categoría del sistema conforme al anexo I del RD 311/2022, con el nivel de cada dimensión y su motivación. Declaración expresa de si el contrato implica cesión de datos por el Ayuntamiento al contratista y de si requiere tratamiento de datos personales por su cuenta —de ello depende que operen o no las obligaciones calificadas de esenciales por la propia ley—.

**9. Valor estimado, método de cálculo y umbrales.**
Importe, método (art. 101.5) y comprobación de los umbrales de procedimiento, recurso especial y regulación armonizada.

**10. Conclusión.**
Se propone la tramitación del expediente con las cláusulas marcadas en la ficha de aplicabilidad que se acompaña, cuya motivación individual figura en el apartado 4.

Firma del responsable del servicio promotor. Firmas adicionales según el origen de las exigencias, conforme al Anexo II.

---- FIN DEL MODELO ----

---

### ANEXO IV · FICHA POR CRITERIO Y HOJA DE COMPROBACIÓN DEL BAREMO

Función: sumar **el PCAP entero** —precio incluido— y avisar antes de publicar. Las comprobaciones legales del baremo operan sobre el total de criterios del contrato, no sobre un bloque.

**IV.1 Ficha por criterio.** Se rellena una por cada criterio del baremo. Sin ficha, el criterio no se incorpora.

---- INICIO DEL MODELO ----

| Casilla | Contenido |
|---|---|
| Criterio n.º y denominación | |
| Puntos | |
| Tipo: fórmula / juicio de valor | |
| **(1) Necesidad**: qué aporta a la prestación que el pliego no exija ya | |
| **(2) Mejora del rendimiento**: en qué mejora objetivamente la ejecución del contrato | |
| **(3) Medio de verificación efectiva** de lo declarado por el licitador (art. 145.5.c) | |
| **(4) Proporcionalidad del peso**: por qué esos puntos y no más ni menos | |
| **(5) Ventaja indirecta**: ¿puede el criterio reflejar de forma indirecta la disponibilidad previa de la capacidad (por ejemplo, un plazo ofertado)? Si sí, acotación adoptada —suelo de puntuación, peso máximo— y motivación de por qué lo valorado es una cualidad de la prestación y no una característica de la empresa | |
| Mínimo obligatorio de referencia en el PPT (lo que **no** puntúa) | |
| ¿Es «mejora» del art. 145.7? Si sí: ¿lista cerrada publicada, límites, modalidades y vinculación al objeto? | |
| Fórmula completa o rúbrica con descriptores por tramos | |

---- FIN DEL MODELO ----

**IV.2 Hoja de suma y avisos.** Se cumplimenta con todos los criterios del PCAP.

| Bloque | Puntos por fórmula | Puntos por juicio de valor | Total |
|---|---|---|---|
| Precio y costes | | | |
| Calidad de la prestación principal | | | |
| Bloque de IA y tecnología | | | |
| Otros | | | |
| **TOTAL** | **(A)** | **(B)** | **100** |

**Avisos automáticos.** Ésta es la **lista única** de comprobaciones del baremo: son las **catorce** de la hoja de comprobación de ADM-7·v3, apartado 5, reproducidas aquí como hoja operativa. Las dos listas deben coincidir fila por fila; si divergen, se corrige este anexo, porque manda la cláusula. Ninguna de las dos se copia al pliego: se cumplimentan y se incorporan al expediente. Cualquiera en rojo bloquea la publicación hasta que se resuelva.

| # | Comprobación | Cálculo | Umbral y aviso | Estado |
|---|---|---|---|---|
| 1 | Suma de todos los criterios del contrato, precio incluido | Σ puntos = ___ | ¿= 100? Si no suma 100, el baremo está incompleto o duplicado | ☐ |
| 2 | Puntuación que valora la prestación principal del contrato (precio + criterios funcionales) | ___ / 100 = ___ % | ¿≥ [X; se recomienda 70] %? **ROJO** si es inferior: el baremo no valora aquello que se contrata (arts. 145.5.b y 145.6 LCSP) | ☐ |
| 3 | Bloque «Innovación y tecnología» | ___ / 100 = ___ % | ¿≤ [X; se recomienda 25] %? **ROJO** si supera el **40 %**, que es límite absoluto no superable | ☐ |
| 4 | Suma de criterios sujetos a juicio de valor (B) frente a los evaluables por fórmula (A) | (B) ___ % · (A) ___ % | ¿(B) < (A)? **ROJO** si (B) es mayor: comité de expertos del art. 146.2.a) LCSP **preceptivo**, con un mínimo de tres miembros no adscritos al órgano proponente, identificado en el PCAP antes de licitar | ☐ |
| 5 | Si el procedimiento es abierto simplificado | juicio de valor = ___ % | ¿≤ 25 %? (45 % si prestación intelectual motivada). **ROJO**: procedimiento indebido (art. 159.1.b LCSP) | ☐ |
| 6 | Si el procedimiento es abreviado | juicio de valor = ___ % | ¿= 0 %? **ROJO**: procedimiento indebido (art. 159.6.c LCSP). Tampoco cabe el abreviado en prestaciones de carácter intelectual | ☐ |
| 7 | Mejoras valoradas por juicio de valor | ___ / 100 = ___ % | ¿≤ 2,5 %? **ROJO** (art. 145.7 LCSP) | ☐ |
| 8 | Si el objeto son prestaciones de carácter intelectual | criterios de calidad = ___ % | ¿≥ 51 %? **ROJO** (art. 145.4 LCSP) | ☐ |
| 9 | Criterios que valoran el cumplimiento de un mínimo ya impuesto por el PPT, por el Anexo V o por una condición especial de ejecución | listar: ___ | ¿ninguno? **ROJO**: doble cómputo. Reformular como incremento sobre el mínimo o suprimir | ☐ |
| 10 | Criterios que valoran certificaciones de empresa, experiencia previa o disponibilidad de medios anterior a la licitación | listar: ___ | ¿ninguno? **ROJO**: art. 40.b) LCSP, causa de anulabilidad | ☐ |
| 11 | Criterios que valoran una capacidad cuya cláusula técnica está marcada NO APLICA | listar: ___ | ¿ninguno? **ROJO**: se puntúa lo que el pliego no exige. Se suprime el criterio y **se recompone el baremo antes de publicar el anuncio** | ☐ |
| 12 | Criterios sin medio de comprobación efectiva o sin ficha del apartado IV.1 | listar: ___ | ¿ninguno? **ROJO**: se suprime el criterio (art. 145.5.c LCSP) | ☐ |
| 13 | Capacidades que figuran a la vez como criterio del baremo y como obligación esencial del bloque B.2 de ADM-6·v3 | listar: ___ | ¿ninguna? **ROJO**: acumula sobre el mismo elemento un premio y una pena de máxima intensidad | ☐ |
| 14 | ¿Se ha excluido del cómputo de criterios de calidad **todo** criterio de precio, incluidos los de precios unitarios? | ___ | **ROJO** si no. Un criterio de precio unitario es precio, no calidad | ☐ |

**Regla de cierre del anexo:** las ponderaciones publicadas no se modifican después. Si un criterio decae, **el baremo se recompone antes de la publicación del anuncio**, nunca por reescalado una vez publicado el pliego, que la Parte I, §7.8.b), declara prohibido.

---

### ANEXO V · CATÁLOGO DE EXIGENCIAS TECNOLÓGICAS DETERMINADAS DEL EJERCICIO 2026-2027

| Dato de control | Contenido |
|---|---|
| Denominación | Catálogo de Exigencias Tecnológicas Determinadas |
| Ejercicio | 2026-2027 |
| Versión | **1.0** |
| Fecha de aprobación | …… / …… / …… |
| Órgano aprobante | [Órgano de gobierno municipal competente, o el órgano en quien delegue conforme al acuerdo del Anexo VIII] |
| Materia del ejercicio | Capacidad de la solución para ser operada y auditada por agentes y asistentes de inteligencia artificial bajo control municipal, con supervisión humana y trazabilidad completa |
| Vigencia | Se aplica a las licitaciones que se convoquen a partir de su aprobación y hasta la aprobación de la revisión siguiente |
| Efecto sobre contratos en vigor | **Ninguno.** A un contrato ya formalizado sólo le resultan exigibles las exigencias del Catálogo vigente en el momento de su licitación |

**Advertencia de incorporación, que es de cumplimiento obligado.** Este catálogo **se transcribe físicamente en el pliego de prescripciones técnicas**, con su número de versión y su fecha, recortado a los módulos del contrato. **No se incorpora por remisión.** Un pliego que remita a un documento municipal revisable anualmente contiene una obligación cuyo contenido puede cambiar después de ofertar: es indeterminación, y es motivo de recurso contra el pliego. En el pliego debe constar además, expresamente, que las revisiones posteriores del catálogo no afectan al contrato.

**Advertencia de contraste de mercado.** Antes de incorporar el catálogo a un pliego concreto, su contenido se contrasta con el mercado de la tipología de solución de que se trate, y el contraste se deja documentado en el expediente. Una exigencia que ningún proveedor del sector pueda cumplir en el plazo previsto no protege al Ayuntamiento: reduce la concurrencia o produce un incumplimiento generalizado desde el primer año. El contraste se hace **una vez al año, al aprobar el catálogo**, y se reutiliza en cada expediente; hacerlo por expediente es inasumible y no aporta nada.

#### V.A.1 Reglas comunes a las tres exigencias

1. **Alcance ordinario.** Las exigencias forman parte del objeto del contrato y se entienden retribuidas con el precio ofertado. Su cumplimiento no da lugar a facturación adicional ni requiere modificación contractual.
2. **Criterios binarios.** Todo criterio de aceptación se formula de modo que la respuesta sea sí o no y se compruebe en el entorno de pruebas. Un criterio que sólo pueda valorarse por apreciación no sostiene una penalidad en un procedimiento contradictorio.
3. **Nada exige lo imposible.** Ningún criterio puede exigir al adjudicatario una propiedad que no esté en su mano acreditar sobre un sistema que él mismo opera. Cuando el objetivo sea la protección frente al propio operador, se formula como control verificable —segregación de funciones, sólo-anexado, exportación con resumen criptográfico— y no como una cualidad absoluta.
4. **Verificación documentada.** Cada exigencia se verifica mediante prueba de aceptación sobre el entorno de pruebas, documentada en acta suscrita por el responsable del contrato.
5. **La aceptación no exime.** La aceptación no libera al adjudicatario de responsabilidad por defectos, errores, vulnerabilidades, incumplimientos normativos o degradación posterior de la capacidad verificada, que debe mantenerse operativa durante el resto de la vigencia.
6. **Neutralidad.** Ninguna exigencia se define por el nombre de un producto, protocolo o red. Cuando el pliego mencione uno a título ilustrativo, la mención va acompañada de «o equivalente» y de la remisión a DT-0·v3.
7. **Coherencia con la cláusula técnica que la soporta.** Ningún criterio de aceptación de este catálogo puede fijar un valor distinto del que fija la cláusula técnica de la que depende. Antes de transcribir, se coteja parámetro a parámetro. Un pliego que exija conservar un registro veinticuatro meses en su cláusula técnica y seis en el apéndice que transcribe este catálogo contiene una obligación indeterminada sobre el elemento del que cuelgan una penalidad y una obligación esencial.

#### V.A.2 Texto que se transcribe al pliego

:::pliego
**ET-1. INTERFAZ NORMALIZADA DE ACCESO PROGRAMÁTICO PARA AGENTES DE INTELIGENCIA ARTIFICIAL**

*Objeto.* Entrega de una interfaz de acceso programático que exponga de forma segura los datos y funciones de los módulos contratados a asistentes y agentes de inteligencia artificial operados bajo control del Ayuntamiento. La interfaz se define por las funciones que debe prestar y no por el protocolo que emplee; se admite cualquier protocolo abierto y documentado que satisfaga los criterios de aceptación, correspondiendo al licitador acreditar la equivalencia conforme a la cláusula DT-0·v3.

*Ámbito y sede única de la relación.* Los módulos alcanzados por esta exigencia, las funciones mínimas exigidas y, en bloque separado, las funciones adicionales que pueden ofertarse se relacionan de forma cerrada y numerada en el apartado de módulos y funciones de la interfaz normalizada que encabeza este mismo Apéndice técnico. **Esa relación es la única de este pliego sobre esta interfaz**: ningún otro documento del pliego contiene una relación distinta, y el exceso que valore el pliego de cláusulas administrativas particulares se mide exclusivamente sobre ella.

*Plazo.* [X; se recomienda DOCE (12)] meses desde la formalización del contrato o, si fuera posterior, desde la puesta en producción del módulo correspondiente.

*Criterios de aceptación.*
1. La interfaz expone, como mínimo, las funciones de consulta relacionadas como **funciones mínimas** en el apartado de módulos y funciones de este Apéndice técnico, sobre los módulos allí identificados, y además las **funciones adicionales** de ese mismo apartado que el adjudicatario haya comprometido en su oferta. Se acredita mediante inventario de funciones expuestas y ejecución de cada una de ellas en el entorno de pruebas.
2. La autenticación y la autorización se integran con el directorio corporativo del Ayuntamiento. El control de acceso se diferencia por módulo, por operación y por ámbito de datos, y distingue las operaciones de consulta de las de escritura. Se acredita creando dos perfiles con permisos distintos y comprobando que cada uno accede sólo a lo suyo.
3. Toda consulta y toda acción realizada a través de la interfaz queda registrada con identificación del agente actuante, de la persona usuaria responsable, de la marca temporal y de los datos afectados. El registro es exportable en formato abierto y se conserva conforme a la política municipal, por un período no inferior a [X; se recomienda VEINTICUATRO (24)] meses, en coherencia con el plazo que para el mismo registro fija la cláusula DT-7·v3, apartado 3.c).
4. La documentación técnica de la interfaz está publicada y versionada, y comprende la especificación de las funciones, el modelo de permisos, el diccionario de datos y las instrucciones de despliegue.
5. El Ayuntamiento dispone de un entorno de pruebas con datos ficticios o anonimizados que permite verificar los criterios anteriores sin afectar al entorno de producción.

*Comprobación.* Prueba de aceptación ejecutada por los servicios municipales sobre el entorno de pruebas, con ejecución efectiva de cada función y de cada criterio, documentada en acta.

---

**ET-2. OPERACIÓN AUTÓNOMA SUPERVISADA**

*Objeto.* Capacidad de la solución para ejecutar, a instancia de un agente de inteligencia artificial, secuencias de operaciones sobre los módulos contratados, dentro de límites configurables por el Ayuntamiento y bajo supervisión humana.

*Plazo.* [X; se recomienda DOCE (12)] meses desde la formalización del contrato.

*Criterios de aceptación.*
1. Los límites de actuación son configurables por el Ayuntamiento y permiten habilitar y deshabilitar de forma independiente cada operación susceptible de ser ejecutada por un agente. Se acredita deshabilitando una operación y comprobando que deja de estar disponible.
2. Las operaciones con efecto jurídico o económico requieren en todos los casos validación expresa de la persona competente antes de su ejecución, sin que exista configuración alguna que permita lo contrario. Se acredita intentando ejecutar una de ellas sin validación y comprobando que el sistema lo impide.
3. Existe un mecanismo de suspensión inmediata de la operación de agentes, accionable desde la propia solución por una persona usuaria del Ayuntamiento con perfil de administración, sin necesidad de solicitud, aviso ni intervención humana del adjudicatario, y cuyo efecto se produce en un plazo no superior a [X; se recomienda CINCO (5)] minutos. Se acredita accionándolo en el entorno de pruebas y comprobando que ninguna operación posterior se ejecuta.
4. Toda operación ejecutada por un agente es reversible desde la propia solución por una persona usuaria con perfil competente. Se acredita **revirtiendo efectivamente**, en la prueba de aceptación, al menos una operación de cada tipo habilitado, y comprobando que la reversión queda registrada conforme a ET-3.

*Comprobación.* Demostración sobre el entorno de pruebas, con verificación de cada criterio mediante ejecución efectiva y documentación en acta.

---

**ET-3. TRAZABILIDAD Y AUDITORÍA DE LA ACTUACIÓN DE AGENTES**

*Objeto.* Registro íntegro y consultable de la actuación de agentes de inteligencia artificial sobre los datos y procesos del Ayuntamiento.

*Plazo.* [X; se recomienda DOCE (12)] meses desde la formalización del contrato.

*Criterios de aceptación.*
1. El registro recoge consultas, propuestas y acciones, distinguiendo unas de otras.
2. El registro opera en modo sólo-anexado: la solución no ofrece, en ninguno de sus perfiles de administración, función alguna de modificación o borrado selectivo de asientos del registro. Las operaciones de purga por política de retención son configurables por el Ayuntamiento y quedan a su vez registradas. Se acredita revisando el catálogo de funciones de administración y comprobando en el entorno de pruebas que no existe tal función.
3. La solución entrega al Ayuntamiento, con periodicidad [X; se recomienda DIARIA], una copia exportada del registro acompañada de un resumen criptográfico que permita al Ayuntamiento detectar por sí mismo cualquier alteración posterior. Se acredita comprobando la entrega y verificando el resumen sobre una copia.
4. El registro es consultable por los servicios municipales mediante herramienta propia de la solución y exportable en formato estándar y abierto, sin intervención del adjudicatario.
5. El registro permite reconstruir, para cualquier operación registrada, el agente actuante, la persona usuaria responsable, la marca temporal y los datos consultados o modificados.

*Comprobación.* Verificación documental, revisión del catálogo de funciones de administración y prueba de exportación y de verificación del resumen criptográfico sobre el entorno de pruebas.
:::

**Nota de alcance sobre ET-2, fuera del texto que se copia al pliego.** El pliego identifica expresamente qué operaciones se habilitan a los agentes: la exigencia no consiste en habilitarlas todas. Cuando el objeto del contrato sostenga procedimientos con efecto económico o registral —contabilidad, recaudación, padrón, registro—, la recomendación es habilitar únicamente operaciones sin ese efecto y dejar la escritura para una licitación posterior, con el catálogo actualizado y el circuito de autorización resuelto. Una exigencia acotada que se cumple vale más que una amplia que se incumple desde el primer año.

#### V.A.3 Qué se ha corregido respecto de la propuesta de origen, y por qué

| Criterio original | Problema | Redacción del catálogo |
|---|---|---|
| ET-2, criterio 4: «Las actuaciones ejecutadas son reversibles, **o consta el procedimiento documentado** para revertir sus efectos» | La alternativa hace el criterio no binario: un documento describiendo un procedimiento no acredita que la reversión funcione | Se elimina la alternativa. Se acredita revirtiendo efectivamente una operación de cada tipo en la prueba de aceptación |
| ET-2, criterio 3: suspensión «accionable por el Ayuntamiento **sin intervención del adjudicatario**» | En una solución operada por el adjudicatario, la exigencia leída literalmente es de imposible acreditación: todo el sistema está bajo su operación | Se reformula como capacidad concreta: función accionable desde la solución por un perfil municipal, sin solicitud ni aviso previo, con efecto en un plazo máximo verificable |
| ET-3, criterio 1: registro «**inalterable por el propio adjudicatario**» | Exige acreditar una imposibilidad absoluta sobre un sistema que el propio adjudicatario administra. Un criterio de aceptación que nadie puede acreditar no protege: restringe la concurrencia | Se sustituye por tres controles verificables: modo sólo-anexado, ausencia de función de modificación o borrado selectivo en los perfiles de administración, y entrega periódica de copia con resumen criptográfico que permite al Ayuntamiento detectar alteraciones |
| ET-1, criterio 1: relación de módulos abierta | El ámbito universal rompe la vinculación al objeto | La relación de módulos, de funciones mínimas y de funciones adicionales ofertables se publica cerrada y numerada en el apartado inicial del Apéndice técnico 2 · Exigencias tecnológicas determinadas, que es su **única** sede en el pliego (Anexo XXV) |

#### V.A.4 Procedimiento de revisión anual

1. Con anterioridad al inicio de cada ejercicio, los servicios técnicos municipales elaboran una **propuesta de actualización**, identificando las capacidades que pasan a ser exigibles, las que se mantienen y las que se suprimen por haberse generalizado o quedado superadas.
2. La propuesta se acompaña del **contraste de mercado** por tipología de solución, que acredita que las exigencias son alcanzables en el plazo previsto por una pluralidad de operadores. Cuando se articule mediante consulta preliminar del mercado, se está a lo previsto en la Parte V, V.4.13 —que regula cómo se publica y cómo se documenta— y en la Parte IV, M3, que explica por qué su carácter anual y centralizado es lo que acredita la neutralidad. El modelo de anuncio y de informe está en el Anexo XXII. No se reproduce aquí ese régimen: sólo se hace constar que su documentación sirve a la vez para todos los expedientes del ejercicio.
3. La propuesta se somete al **informe del órgano al que corresponda el informe jurídico** (Asesoría Jurídica en municipios de gran población; Secretaría en el régimen común).
4. El catálogo actualizado se aprueba por **el órgano competente identificado en el acuerdo del Anexo VIII**, y se publica en el perfil de contratante con su número de versión y su fecha antes de incorporarse a ningún pliego.
5. La revisión **no** reabre el clausulado: el articulado es estable y el catálogo es volátil. Esa separación es lo que permite que la revisión anual ocurra de verdad.


---

### ANEXO VI · TABLA DE DEPENDENCIAS

Función: evitar el pliego contradictorio. Cuando una cláusula se marca NO APLICA, sus menciones sobreviven en el resto del documento: en el cuadro de penalidades, en la lista de obligaciones esenciales, en el baremo, en la declaración responsable y en las remisiones internas. Un pliego que penaliza el incumplimiento de una cláusula que no ha incorporado es un pliego indeterminado.

**Regla de ejecución:** la depuración se hace **antes** de aprobar el pliego, se marca en la casilla de cierre de la ficha del Anexo II, y consiste en **suprimir**, no en dejar el texto «por si acaso». Y cuando la supresión afecta a un criterio de adjudicación, el baremo se **recompone antes de publicar el anuncio**; una vez publicado el pliego, el reescalado está prohibido (Parte I, §7.8.b).

**Ésta es la tabla única de dependencias del documento.** Las Partes 0 a V remiten a ella y no contienen ninguna otra.

**Instrucción operativa.** Los recuadros de ADM-5·v3 y ADM-6·v3 deben llegar al redactor como **lista con casillas de borrado**, una por cláusula técnica, y no como texto corrido. Un cuadro de penalidades en texto corrido es la forma más segura de dejar viva la penalidad de una obligación que el pliego no impone.

**Aviso sobre DT-6·v3.** Marcar DT-6·v3 como NO APLICA en un contrato que comprenda sistemas de información del sector público contradice el art. 2.3, párrafo segundo, del RD 311/2022, que ordena que los pliegos contemplen los requisitos necesarios para asegurar la conformidad con el Esquema Nacional de Seguridad. La supresión sólo cabe cuando el objeto quede materialmente fuera de ese ámbito, y se motiva.

| Si se marca NO APLICA… | …hay que suprimir o ajustar |
|---|---|
| **DT-0·v3** | **No puede marcarse NO APLICA** en ningún pliego que mencione un producto, protocolo, norma, red o marca. Si el pliego no menciona ninguno, decae por falta de objeto |
| **DT-1·v3** | Referencias al reparto de papeles en DT-4·v3 y DT-7·v3 · **en DT-4·v3, apartado 3.e), el inciso entre corchetes que remite a DT-1·v3, apartado 7**; el resto de esa letra regula por sí solo la aprobación previa de la actuación automatizada y se conserva · criterio E del baremo (plan de gobernanza) · apartado correspondiente de la declaración responsable y su casilla 16 (funcionalidades sujetas al procedimiento sustitutivo de suspensión) · tipos L6, L11, G10, G11, G12, G23, G24, G25 y M9 del cuadro de penalidades de ADM-5·v3 · **en ADM-8·v3, apartado 8, la remisión al apartado 7 de DT-1·v3**: se suprime y se conserva la remisión a la cláusula de reversibilidad. El apartado 7 de ADM-8·v3, acceso para auditoría en actuación administrativa automatizada, se funda en el art. 41 de la Ley 40/2015 y se conserva |
| **DT-2·v3** | **El criterio del baremo que, en su caso, hubiera valorado esa capacidad**, si el órgano de contratación lo hubiera añadido (con **recomposición del baremo antes de publicar el anuncio**; nunca reescalado una vez publicado el pliego: Parte I, §7.8.b) · fila del cuadro maestro · fila de penalidades · apartado de la declaración responsable relativo a la capa de confianza · toda mención a redes o infraestructuras nominadas · entradas del glosario que sólo la sirvan |
| **DT-3·v3** | Requisito de inventario criptográfico y plan de transición · fila de penalidades · mención en la declaración responsable · toda referencia a algoritmos o normas criptográficas nominadas |
| **DT-4·v3** | **Criterio H del baremo** (procesos automatizados adicionales de la lista cerrada) y **recomposición del baremo antes de publicar el anuncio** · lista cerrada de procesos del PPT · fila de penalidades · apartado de la declaración responsable · mención de DT-4·v3 (automatizaciones de procesos, apartado 3.a)) en DT-1·v3, apartado 6.d) |
| **DT-5·v3** | Excepción del régimen de equivalencia para los servicios comunes de obligada utilización **relacionados en DT-5·v3, apartado 2** (queda sin objeto). Si esa tabla queda vacía, se suprimen también el apartado 2, el apartado 7 de DT-0·v3 y las dos menciones de la Parte I, §7.10 · requisito de integración con el directorio corporativo de ET-1 criterio 2 · referencias de ADM-8·v3 a la portabilidad de datos |
| **DT-6·v3** | Acreditación de conformidad de ADM-1·v3 · umbral de activación de ADM-11·v3: **ADM-11·v3 decae por completo**, porque la categoría ALTA en disponibilidad es una de las cuatro circunstancias acumulativas de su apartado 1 y la lista tasada de servicios no es una vía alternativa · fila de penalidades · casilla de la declaración responsable |
| **DT-7·v3** | **ET-1, ET-2 y ET-3 completas** y su transcripción en el PPT · **criterios A y B del baremo** y recomposición del baremo antes de publicar el anuncio · caso de uso de la demostración, si versa sobre la interfaz · alcance de ADM-2·v3 · filas de penalidades · lista de obligaciones esenciales de ADM-6·v3 · apartado de la declaración responsable · Plan Anual de ADM-10·v3 en lo referido a la interfaz · **la mención de DT-7·v3 en DT-1·v3, apartado 6.d)** (operaciones a través de la interfaz normalizada, apartado 3, letra f)); el resto de esa letra regula por sí solo la suspensión de las funcionalidades integradas y se conserva (DT-7·v3, epígrafe 7) |
| **DT-8·v3** | Contenido del depósito de ADM-11·v3 · vinculación del plazo de garantía al **acta de reversión (DT-8·v3, apartado 8) o, en su defecto, al vencimiento del plazo previsto en dicho apartado para levantarla** · filas de penalidades · lista de esenciales · apartado de la declaración responsable · referencias de ADM-8·v3 al inventario de componentes |
| **DT-9·v3** | **Todo el Anexo V y su transcripción** —esto es, el apartado 2 del Apéndice técnico 2, no el apartado 1, que lo exige DT-7·v3 por sí sola— · ADM-2·v3 completa (queda sin alcance) · ADM-3·v3 en lo referido a plazos del catálogo · filas de penalidades · lista de esenciales · ADM-14·v3, que sólo opera sobre capacidades no determinadas en el catálogo. **Los criterios A y B del baremo no decaen por esta sola marca**: miden sobre la relación de módulos y funciones del apartado 1 del Apéndice técnico 2 y sobre el plazo de DT-7·v3, apartado 5, y decaen únicamente si se marca NO APLICA DT-7·v3 · mención de DT-9·v3, apartado 8.5, en DT-1·v3, apartado 6.d) · **apartado 3 de los dos bloques de transcripción de la Parte I, §7.10**: en el del PCAP se emplea su redacción alternativa, y en el del PPT se suprime |
| **ADM-1·v3** (bloque de gobernanza de IA) | Casilla de la declaración responsable sobre obtención de la certificación · fila de penalidades · cuadro de certificaciones y equivalencias del Anexo XXI. **No afecta al criterio E**, que valora el plan del contrato y no la certificación |
| **ADM-2·v3** | ADM-3·v3 en lo referido a plazos de adaptación · filas de penalidades por incumplimiento del catálogo · lista de esenciales · hitos de ADM-10·v3 |
| **ADM-3·v3, bloque 2** (bolsa de evolutivos) | **Criterio F del baremo** (precio unitario ponderado) y recomposición del baremo antes de publicar el anuncio · Cuadro de Precios Unitarios, salvo que se conserve para ADM-14·v3 · partida correspondiente del presupuesto base de licitación y recálculo del valor estimado |
| **ADM-4·v3** | Valor probatorio de las actas en el sistema de acreditación de ADM-2·v3 (hay que sustituirlo por otro medio tasado) · fecha cierta de los hitos esenciales de ADM-6·v3 · periodicidad de verificación del Anexo I |
| **ADM-8·v3** | Sólo las remisiones que otras cláusulas le hacen, conservando su contenido: **en la última frase de DT-1·v3, apartado 11, y en el último párrafo de DT-8·v3, apartado 1, la remisión a [ADM-8], apartado 4**, que se suprime manteniendo la exclusión del código fuente del producto base y de los componentes de terceros. **No arrastra el apartado 7 de DT-1·v3**, que no remite a ADM-8·v3 (es el apartado 8 de ésta el que remite a aquél) y se sostiene solo; ni tipos de ADM-5·v3 ni letras de ADM-6·v3: G3, M4 y la letra a) del bloque B.1 son de DT-8·v3 (ADM-8·v3, epígrafe 7) |
| **ADM-9·v3** | La mención adicional a la comprobación conforme a ADM-9·v3 en los criterios del baremo · el guion, la relación cerrada y numerada de elementos verificables y la matriz de comprobación · las reglas de momento procedimental del PCAP. **No arrastra la supresión de ningún criterio ni de su medio documental propio**: ADM-9·v3 no reparte puntos, y C1, A y H se comprueban mediante la documentación técnica exigida en su propia fila |
| **ADM-10·v3** | Letras h) e i) del bloque B.2 de ADM-6·v3 (Plan Anual e hitos aprobados) · modelo de Plan Anual de Evolución Tecnológica del Anexo XIV · fila de penalidades por falta de presentación · apartado de la declaración responsable relativo al Plan Anual |
| **ADM-11·v3** | Filas de penalidades sobre constitución, actualización, verificación y liberación del depósito · lista de esenciales · **partida del presupuesto base de licitación** y recálculo del valor estimado · apartado de la declaración responsable · referencia de DT-8·v3 al contenido depositado |
| **ADM-12·v3** | Filas de penalidades · lista de esenciales · **número de accesos incluidos en el precio** y su reflejo en el presupuesto · apartado de la declaración responsable · referencia del informe de necesidad a la necesidad declarada por los órganos de control · **cláusula del PPT que fija el detalle funcional del acceso y la conservación del registro de actividad** (ADM-12·v3, epígrafe 2) · si se prevén accesos adicionales, fila del Cuadro de Precios Unitarios (Anexo X, X.3), máximo y precio máximo en el cuadro de características y importe que se desglosa dentro del valor estimado, sin sumarlo dos veces (Parte V, V.4.10, letra c bis) |
| **ADM-13·v3** | Lista de esenciales · apartado de declaración de sistemas de IA en la oferta · dos filas (G7 y M5) del cuadro de penalidades · referencia a la política municipal de uso de inteligencia artificial generativa del Anexo XVI |
| **ADM-14·v3** | **Recálculo del valor estimado** (arts. 101.2.c y 101.5) y comprobación de umbrales · Cuadro de Precios Unitarios, salvo que se conserve para ADM-3·v3, bloque 2 · apartado de la declaración responsable · anuncio de licitación · si se incorpora la cláusula complementaria [n+2], **casilla de desglose del modelo de oferta económica** (Anexo X, X.4), parte del presupuesto base atribuida a cada funcionalidad en el cuadro de características y relación de funcionalidades sujetas a informe o consulta previos (DT-1·v3, apartado 9) |

**Dependencias en sentido inverso** —cláusulas que no pueden incorporarse solas—:

| Si se incorpora… | …es obligatorio incorporar también |
|---|---|
| DT-7·v3 o DT-9·v3 | DT-0·v3 (equivalencia), y el acuerdo de origen institucional si no hay norma ni petición del gestor |
| Criterios A, B o H del baremo | La prescripción técnica que fija el mínimo del que esos criterios miden el exceso, con su lista cerrada publicada |
| ADM-11·v3 | DT-8·v3 (inventario de componentes: sin él no se sabe qué se deposita) y la partida de coste en el presupuesto base |
| ADM-2·v3 | DT-9·v3 y el Anexo V transcrito (sin catálogo, la condición especial de ejecución carece de alcance) |
| DT-1·v3, apartado 13 | DT-1·v3, apartado 12 (la letra a) del apartado 13 se documenta junto a esa descripción) |
| ADM-6·v3 bloque de esenciales por ley | La declaración expresa en el PCAP de que el contrato implica cesión de datos o tratamiento por cuenta del responsable. Sin ese supuesto, esas obligaciones **no** son esenciales y declararlo sería un defecto del pliego |
| ADM-9·v3 | El criterio del baremo cuya exactitud comprueba, con la relación cerrada y numerada de elementos verificables publicada en el pliego, y la regla de momento procedimental en el PCAP |

---

### ANEXO VII · DECLARACIÓN RESPONSABLE DEL LICITADOR (MODELO)

**Instrucciones de uso, previas al texto.** (1) Esta declaración **no sustituye** a la declaración responsable ni al documento europeo único de contratación que exija el PCAP con carácter general: es una declaración adicional referida exclusivamente a las cláusulas de este catálogo. (2) Se presenta en el sobre que el PCAP determine y **no puntúa**: nada de lo declarado en ella puede valorarse como criterio de adjudicación. (3) **Se depura con la tabla de dependencias del Anexo VI antes de incorporarla al pliego**: cada apartado lleva una casilla de supresión y el apartado referido a una cláusula marcada NO APLICA se suprime, no se deja. (4) Ningún apartado puede exigir la aceptación en bloque de causas de resolución ni la renuncia a discutir su procedencia.

:::pliego
**DECLARACIÓN RESPONSABLE RELATIVA A LAS CLÁUSULAS DE INTELIGENCIA ARTIFICIAL Y TECNOLOGÍAS DEEP TECH**

D./D.ª ………………………………, con documento de identidad n.º …………………, en nombre y representación de la empresa ………………………………, con NIF …………………, en relación con el expediente de contratación ………………………………, **DECLARA** bajo su responsabilidad:

☐ **1.** Que conoce y acepta las cláusulas de inteligencia artificial y tecnologías deep tech incorporadas al pliego de prescripciones técnicas y al pliego de cláusulas administrativas particulares de este expediente, así como el Catálogo de Exigencias Tecnológicas Determinadas transcrito en el pliego técnico, versión ………, de fecha ……………, y que ha tenido en cuenta el coste de su cumplimiento al formular su oferta.

☐ **2.** Que se compromete a entregar las capacidades exigidas en dicho Catálogo, con los criterios de aceptación y en los plazos que en él se establecen, entendiéndose retribuidas con el precio ofertado y sin que su cumplimiento dé lugar a facturación adicional.

☐ **3.** Que dispone de un sistema de gestión de la inteligencia artificial conforme a la norma indicada en el pliego, **con la designación y el año que en él constan**, o que acredita el cumplimiento mediante las pruebas de las medidas equivalentes del artículo 93.2 de la Ley 9/2017; o, en su defecto, que se compromete a obtener dicha certificación en el plazo máximo de [X; se recomienda DOCE (12)] meses desde la formalización, aplicando entretanto medidas equivalentes documentadas de gobernanza que describe en el documento que se adjunta.

☐ **4.** Que la relación de sistemas de inteligencia artificial que empleará en la ejecución del contrato es la que consta en el cuadro adjunto, con expresión, para cada uno, de proveedor, ubicación de almacenamiento y tratamiento, plazos de retención, tratamiento de metadatos, existencia y alcance de mecanismos que excluyan el contenido del usuario del entrenamiento de modelos y posibilidad de configuración de las revisiones humanas por el proveedor; que la mantendrá actualizada; y que no introducirá información municipal del nivel 1 definido en la cláusula [ADM-13], apartado 1, en sistemas no autorizados expresamente por el Ayuntamiento.

☐ **5.** Que entregará el Inventario de Componentes en el plazo previsto en el pliego, el Plan de Reversibilidad en el plazo de [X; se recomienda TRES (3)] meses desde la formalización, y que participará en el ensayo de reversibilidad en los términos del pliego.

☐ **6.** Que acepta el régimen de depósito de código y continuidad del servicio previsto en el pliego y, cuando no sea titular de los derechos sobre el producto base, que aporta o se compromete a aportar el compromiso del titular en los términos allí establecidos.

☐ **7.** Que facilitará el acceso de los órganos de control municipales a los datos de ejecución en los términos y con el número de accesos previstos en el pliego, sin coste adicional y sin tarificación por consulta, durante toda la vigencia del contrato y de sus prórrogas.

☐ **8.** Que, cuando su oferta proponga una solución equivalente a alguna de las referencias contenidas en el pliego, aporta con la oferta la prueba de la equivalencia por cualquier medio adecuado, siendo consciente de que dicha prueba es carga suya.

☐ **9.** Que conoce el cuadro de penalidades y la relación de obligaciones calificadas como esenciales que figura en el pliego de cláusulas administrativas particulares, y el régimen de resolución al que su incumplimiento puede dar lugar, conforme a la Ley 9/2017.

☐ **10.** Que, cuando este pliego incorpore la cláusula de capa de confianza, se compromete a cumplir sus exigencias funcionales de integridad, sellado de tiempo, no repudio, identidad digital verificable, interoperabilidad, protección de datos y portabilidad, con independencia de la infraestructura o tecnología empleada, y a aportar los medios de acreditación exigidos.

☐ **11.** Que, cuando este pliego incorpore la cláusula de criptoagilidad, se compromete a entregar y mantener actualizados el inventario criptográfico y el plan de transición, y a permitir la sustitución de algoritmos, longitudes de clave y protocolos en los términos y plazos establecidos en el pliego.

☐ **12.** Que ha identificado, en el sobre de criterios evaluables mediante fórmulas y sobre la relación cerrada y numerada del apéndice técnico del pliego, los procesos que se compromete a automatizar, con su alcance y plazo, y que cumplirá para cada automatización las exigencias establecidas en la cláusula correspondiente.

☐ **13.** Que ha identificado, en el sobre de criterios evaluables mediante fórmulas, las funciones adicionales de la interfaz normalizada que compromete y su plazo de entrega, y que entregará la interfaz con las exigencias funcionales y sobre los módulos relacionados en el pliego.

☐ **14.** Que se compromete a presentar y mantener actualizado el Plan Anual de Evolución Tecnológica conforme al modelo, contenido y plazos del pliego, sin atribuirle alcance distinto del Anexo de Exigencias Tecnológicas Determinadas incorporado al contrato.

☐ **15.** Que conoce y acepta el régimen de modificación prevista del contrato establecido en el pliego, exclusivamente dentro de su objeto, circunstancias objetivas, límite económico, precios unitarios y procedimiento publicados.

☐ **16.** Que, cuando este pliego incorpore la cláusula de incorporación de inteligencia artificial y conserve en ella el procedimiento sustitutivo de suspensión, las funcionalidades de la solución basadas en inteligencia artificial que, por razón de su arquitectura, no admiten el control propio de suspensión del Ayuntamiento son únicamente las siguientes, con la denominación que reciben en la oferta: ………………………………; y que ejecutará su suspensión a requerimiento del responsable del contrato en el plazo previsto en el pliego.

En ……………………, a …… de …………………… de 20…… (firma y sello)

*Cuadro del apartado 4 — sistemas de inteligencia artificial empleados en la ejecución*

| Sistema | Proveedor | Ubicación de tratamiento | Retención | Metadatos y telemetría | Exclusión de entrenamiento | Revisión humana por el proveedor |
|---|---|---|---|---|---|---|
| | | | | | | |
:::

**Qué se ha eliminado respecto del modelo de la versión anterior, y por qué:** el compromiso de entregar un producto designado por el nombre de un protocolo, que ha pasado a formularse por función; la aceptación anticipada de la obsolescencia tecnológica como causa de resolución, que era la aceptación en bloque de una causa de contenido indeterminado; y el compromiso de realizar la demostración, que no es una obligación del contrato sino una regla del procedimiento de licitación, con su efecto propio.

---

### ANEXO VIII · MODELO DE ACUERDO DEL ÓRGANO DE GOBIERNO

**Para qué sirve este acuerdo, dicho sin rodeos.** Hay exigencias de este catálogo que ninguna norma impone y que ningún gestor va a pedir. Sin un acto institucional que las asuma, la ficha de necesidad de cada expediente se rellenará con el mismo párrafo, que es la definición de justificación estereotipada. Este acuerdo es el eslabón que convierte esa exigencia en una política municipal aprobada, de la que un expediente concreto puede derivar. **Sin él, las cláusulas de origen institucional van a NO APLICA.**

---- INICIO DEL MODELO ----

**ACUERDO DEL [ÓRGANO DE GOBIERNO MUNICIPAL COMPETENTE] POR EL QUE SE APRUEBAN EL PLAN MUNICIPAL DE MODERNIZACIÓN TECNOLÓGICA Y EL CATÁLOGO DE CLÁUSULAS DE INTELIGENCIA ARTIFICIAL Y DEEP TECH, Y SE CREA EL CIRCUITO DE REVISIÓN ANUAL DE SUS EXIGENCIAS TECNOLÓGICAS**

**ANTECEDENTES**

**I.** El Ayuntamiento contrata soluciones tecnológicas cuya vida útil excede de la duración de los contratos que las sostienen. La experiencia acredita que, sin previsión contractual expresa, la solución permanece durante toda la vigencia en el estado en que se contrató y que la recuperación de los datos al término del contrato resulta costosa y, en ocasiones, dependiente de la voluntad del proveedor saliente.

**II.** Determinadas exigencias que este Ayuntamiento considera necesarias para su funcionamiento futuro no vienen impuestas por ninguna norma en vigor ni pueden ser formuladas por los servicios gestores, por exceder de su ámbito funcional. Corresponde a este órgano determinar si el Ayuntamiento las asume como objetivo propio, con qué alcance y con qué calendario, para que puedan ser incorporadas a los expedientes de contratación con una relación directa, clara y proporcional con el objeto de cada contrato, en los términos del artículo 116.4.e) de la Ley 9/2017.

**III.** Consta en el expediente el informe del [servicio promotor], el informe del órgano al que corresponde el informe jurídico preceptivo y el informe de la Intervención sobre las repercusiones económicas y presupuestarias del plan.

**ACUERDA**

**Primero. Aprobar el Plan Municipal de Modernización Tecnológica [período]**, cuyos objetivos son: (a) que las soluciones contratadas puedan ser consultadas, operadas y auditadas por asistentes y agentes de inteligencia artificial bajo control municipal, con supervisión humana y trazabilidad completa; (b) que el Ayuntamiento conserve en todo momento la titularidad y la disponibilidad efectiva de sus datos y de los desarrollos específicos que financia; (c) que la sustitución de un proveedor sea posible sin pérdida de información ni interrupción del servicio; y (d) que los órganos de control interno dispongan del mismo acceso a los datos de ejecución que los órganos gestores. Se aprueba asimismo el calendario del plan que figura como anexo.

**Segundo. Aprobar el Catálogo de Cláusulas de Inteligencia Artificial y Deep Tech, versión [ ]**, como instrumento de **aplicación motivada** y no de incorporación automática. Ninguna de sus cláusulas se incorpora a un pliego sin la ficha de aplicabilidad firmada y el informe de necesidad correspondientes al expediente de que se trate.

**Tercero. Aprobar el Catálogo de Exigencias Tecnológicas Determinadas del ejercicio 2026-2027, versión 1.0**, que se acompaña, y que se transcribirá físicamente en los pliegos de prescripciones técnicas de las licitaciones que se convoquen a partir de la fecha de este acuerdo, sin que las revisiones posteriores afecten a los contratos ya licitados.

**Cuarto. Designar** a [órgano o unidad] como competente para aprobar la revisión anual del Catálogo de Exigencias Tecnológicas, previo contraste de mercado documentado e informe jurídico, sin necesidad de modificar el Catálogo de Cláusulas. La revisión se aprobará antes del inicio de cada ejercicio.

**Quinto. Ordenar la realización, con periodicidad anual y carácter centralizado, del contraste de mercado** que ha de acompañar a la revisión del Catálogo de Exigencias Tecnológicas, pudiendo articularse mediante consulta preliminar del mercado publicada conforme al artículo 115 de la Ley 9/2017, cuya documentación se reutilizará en los expedientes del ejercicio.

**Sexto. Aprobar la asignación de responsabilidades de verificación** que figura como anexo, con designación de actor municipal y periodicidad para cada exigencia, y tomar conocimiento de la estimación de carga anual que comporta. No se incorporará a ningún pliego una exigencia cuya verificación carezca de actor designado.

**Séptimo. Aprobar la política municipal de uso de sistemas de inteligencia artificial por el personal del Ayuntamiento**, que se acompaña, como compromiso recíproco de las obligaciones que se imponen a los contratistas.

**Octavo. Ordenar la publicación** del Catálogo de Cláusulas y del Catálogo de Exigencias Tecnológicas en el perfil de contratante y en el portal de transparencia municipal, en formato reutilizable, para su empleo por otras administraciones públicas.

**Noveno. Encomendar al [servicio promotor] la evaluación** de la primera aplicación del catálogo, mediante informes a los seis y a los doce meses sobre concurrencia obtenida, incidencias, recursos interpuestos y carga real de verificación, con propuesta motivada de ajuste del catálogo, del anexo anual y de los valores por defecto de sus parámetros.

**Décimo.** Dar traslado del presente acuerdo a los servicios gestores, al órgano al que corresponde el informe jurídico preceptivo y a la Intervención General.

---- FIN DEL MODELO ----

**Nota de reutilización.** El órgano competente para adoptar este acuerdo y para aprobar la revisión anual depende del régimen de cada entidad y de su cuadro de delegaciones. Determínese antes de aprobar: un catálogo aprobado por órgano incompetente no es *lex contractus*, es un papel, y el defecto se descubre cuando ya está en un pliego recurrido.

---

### ANEXO IX · DECLARACIÓN DE CONFLICTO DE INTERÉS Y DE PARTICIPACIÓN PREVIA EN LA PREPARACIÓN

Este anexo contiene dos declaraciones distintas que se cumplimentan por separado, más el cuadro de medidas. La primera se refiere a quienes intervienen en el procedimiento por parte del poder adjudicador (art. 64 LCSP); la segunda, a quienes han participado en la preparación y podrían después licitar o estar vinculados a un licitador (art. 70 LCSP).

**Por qué se hace por iniciativa propia y antes de aprobar.** Un conflicto revelado y neutralizado por el propio expediente es un dato del expediente. El mismo conflicto descubierto por un recurrente deja de ser una cuestión técnica y pasa a ser una imputación de favorecimiento. Pero conviene decir también lo que la declaración no hace: **declarar no basta.** El art. 70.1 no pide declarar, pide adoptar medidas adecuadas para que la participación previa no falsee la competencia y dejar constancia de ellas. La declaración sin las medidas del cuadro C es una intención.

---- INICIO DEL MODELO A ----

**DECLARACIÓN DE AUSENCIA O EXISTENCIA DE CONFLICTO DE INTERÉS (art. 64 LCSP)**

D./D.ª ………………………………, con documento de identidad n.º …………………, en su condición de [cargo o función: miembro del órgano de contratación / miembro de la mesa / técnico redactor de los pliegos / asesor externo / miembro del comité de expertos], en relación con [el Catálogo de Cláusulas de IA y Deep Tech, versión ……, de fecha ……………… / el expediente de contratación n.º ………], **DECLARA**:

☐ Que **no** tiene, directa ni indirectamente, interés financiero, económico o personal alguno que pudiera parecer que compromete su imparcialidad e independencia en este procedimiento.

☐ Que **sí** concurre la siguiente circunstancia, que declara por iniciativa propia: ……………………………………………………………………………

En particular, y en su caso, declara: (a) su relación laboral, mercantil, societaria o de asesoramiento, actual o en los [dos] últimos años, con empresas u organizaciones que operen en el mercado al que se refieren las exigencias tecnológicas del catálogo; (b) su pertenencia a asociaciones, consorcios, fundaciones o entidades promotoras de infraestructuras, redes, protocolos o estándares mencionados en el documento, aunque sea a título ilustrativo; (c) cualquier participación en el capital o en los órganos de administración de esas entidades; y (d) cualquier retribución percibida de ellas.

Y se compromete a comunicar de inmediato cualquier circunstancia sobrevenida, y a abstenerse de intervenir cuando proceda.

En ……………………, a …… de …………………… de 20…… (firma)

---- FIN DEL MODELO A ----

---- INICIO DEL MODELO B ----

**DECLARACIÓN DE PARTICIPACIÓN PREVIA EN LA PREPARACIÓN (art. 70 LCSP)**

D./D.ª ………………………………, en nombre propio / en representación de ………………………………, **DECLARA** haber participado en la preparación del [catálogo / expediente] mediante: [redacción, asesoramiento, respuesta a consulta preliminar del mercado, aportación de documentación técnica, u otra], en las fechas y con el alcance siguientes: ……………………………

Y manifiesta conocer que: (a) esta participación no determina por sí sola su exclusión de las licitaciones que se convoquen; (b) la exclusión sólo procede cuando no exista otro medio de garantizar la igualdad de trato y previa audiencia en la que pueda probar que su participación no falsea la competencia; y (c) toda la información que aportó y que resulte relevante para las licitaciones será puesta a disposición del resto de licitadores.

En ……………………, a …… de …………………… de 20…… (firma)

---- FIN DEL MODELO B ----

**Cuadro C · Medidas adoptadas para que la participación previa no falsee la competencia.** Reproduce, en forma de hoja de comprobación, **las doce medidas del §M7.3 de la Parte IV**, que es donde se explican y se motivan. No hay dos listas de medidas: ésta es la operativa y aquélla la razonada. Se deja constancia de su estado en el expediente y en el informe específico del contrato, conforme al art. 70.1 LCSP.

| # | Medida (§M7.3) | Estado | Constancia documental |
|---|---|---|---|
| 1 | Eliminación material de toda preferencia por una infraestructura, red, protocolo o producto concretos, y reformulación por capacidades funcionales, sin inciso que permita reintroducirla | | Cláusulas DT-0·v3, DT-2·v3, DT-5·v3 y DT-7·v3 |
| 2 | Prohibición expresa de puntuar la pertenencia a una red o infraestructura nominada y de configurarla como requisito o criterio de solvencia | | ADM-7·v3; Anexo I; Anexo IV, aviso 10 |
| 3 | Supresión de toda mención nominativa operativa en el articulado; las normas técnicas se citan al amparo del art. 126.5.b) LCSP con admisión de equivalentes y de las pruebas del art. 93.2 | | Barrido documental incorporado al expediente |
| 4 | Supresión de toda puntuación de la tenencia previa: certificaciones, experiencia y disponibilidad presente de medios a fecha de licitación (art. 40.b LCSP) | | Anexo I; Anexo IV, aviso 10 |
| 5 | Abstención de los asesores externos intervinientes en mesas de contratación, comités de expertos y valoración de ofertas de los expedientes que apliquen el catálogo | | Expediente de cada licitación |
| 6 | Publicación íntegra y anticipada del catálogo y de sus anexos, con antelación a cualquier licitación que los aplique | | Perfil de contratante y portal de transparencia |
| 7 | Consulta preliminar del mercado publicada y abierta (art. 115 LCSP), con publicación del informe de conclusiones | | Anexo XXII; Parte V, V.4.13 |
| 8 | Autolimitación recomendada: abstención de licitar de asesores externos y entidades en que participen durante [X; se recomienda 12] meses desde la aprobación | | Acuerdo del órgano de contratación |
| 9 | Si pese a lo anterior alguno concurriera: puesta a disposición de todos los licitadores de la información derivada de la participación previa, plazos suficientes y **audiencia previa a cualquier exclusión** | | Expediente de cada licitación |
| 10 | Trazabilidad de la autoría: constancia de quién propuso cada previsión referida a una tecnología en la que un interviniente tenga interés declarado | | Expediente |
| 11 | Emisión del informe jurídico y de la nota de fiscalización conociendo ya esta declaración | | Expediente |
| 12 | Regla de reutilización: toda administración que copie el catálogo repite la declaración con sus propios intervinientes | | Expediente de la administración que lo reutilice |
| *(común)* | Ampliación del plazo de presentación de ofertas cuando la exigencia tecnológica sea nueva en el mercado local | | PCAP; Anexo X, parámetro 25 |
| *(común)* | Declaraciones de los modelos A y B firmadas y fechadas, incorporadas al expediente antes de la aprobación | | Expediente |

**Advertencia final del anexo.** Estas declaraciones deben estar **firmadas por personas identificadas** e incorporadas al expediente antes de la aprobación. Una declaración prometida en una memoria y no aportada no produce ningún efecto, salvo el de acreditar que se conocía la necesidad de hacerla. La regla vale también para este documento: los modelos A y B **de quienes lo firman** se cumplimentan con nombre, empresas y relación concreta, se fechan y **se publican junto al catálogo**. Publicar el catálogo antes que las declaraciones invierte el orden que el propio apartado M7.1 de la Parte IV defiende.


---

### ANEXO X · TABLA CONSOLIDADA DE PARÁMETROS

Función: que nadie tenga que abrir una consulta para cada corchete de decisión económica, de calendario o de configuración del expediente. Todos ellos aparecen aquí **con valor recomendado por defecto**, con quién lo fija y con el caso en que debe moverse. **Lo que este anexo no consolida** son los plazos y umbrales de trámite interno que cada cláusula administrativa fija dentro de su propio texto de pliego: su sede es la cláusula, y allí se consultan. El apartado X.1 cierra con la relación de cuáles son y dónde están. Un catálogo de decisiones sin valores por defecto es un catálogo de retrasos.

**Regla de precedencia, que es la primera que hay que leer.** Esta tabla **reproduce** los valores que fijan las cláusulas; no los decide. Ante cualquier divergencia entre una fila de este anexo y el texto de la cláusula, **manda la cláusula**, y la fila se corrige.

**Regla de uso:** el valor por defecto se aplica salvo que concurra el supuesto de la última columna. Cuando se aparte de él, el expediente lo motiva en una línea. Cuando el parámetro afecte al precio, al valor estimado o a las penalidades, la motivación es obligatoria en todo caso.

#### X.1 Parámetros del articulado y del catálogo

| # | Parámetro | Dónde | Quién lo fija | **Valor recomendado por defecto** | Cuándo moverlo |
|---|---|---|---|---|---|
| 1 | Categoría de seguridad del sistema | DT-6·v3 | Responsable de la información y responsable del servicio | **No hay valor por defecto**: resulta del anexo I del RD 311/2022 | Nunca se fija a priori. Escribir la categoría antes del análisis es el defecto que anula el pliego |
| 2 | Plazo de entrega de las exigencias del catálogo | ET-1, ET-2, ET-3 | Órgano de contratación, a propuesta del servicio técnico | **12 meses** desde la formalización | Bajar a 6 sólo si el contraste de mercado acredita que varios operadores ya lo ofrecen. **Nunca más de 18 meses ni más que la duración inicial del contrato**: más allá, la obligación se agota fuera de la vigencia útil del contrato |
| 3 | Plazo de comunicación de una versión sucesora | DT-9·v3.7, ADM-2·v3.6.a) y ADM-10·v3.4, con el mismo valor | Servicio técnico | **30 días naturales** desde su disponibilidad general | 60 días en soluciones con ciclos de publicación largos y despliegue por oleadas |
| 4 | Conservación de los registros de la interfaz | DT-7·v3.3.c) y ET-1 criterio 3 | Delegado de protección de datos y responsable de seguridad | **24 meses** | Reducible a 12 **sólo** cuando el sistema no sostenga funciones de control interno ni actos susceptibles de impugnación. El valor de la cláusula técnica y el del criterio de aceptación deben ser el mismo (Anexo V, regla V.A.1.7) |
| 5 | Periodicidad de la exportación del registro con resumen criptográfico | ET-3 criterio 3 | Servicio de informática | **Diaria** | Semanal si el volumen lo justifica y el análisis de riesgos lo admite |
| 6 | Tiempo máximo de efecto de la suspensión de agentes | ET-2 criterio 3 | Servicio de informática | **5 minutos** | Hasta 60 minutos en soluciones con procesamiento por lotes. Nunca «a la mayor brevedad» |
| 7 | Accesos de control incluidos en el precio | ADM-12·v3 | Órgano de control interno | **3** | Más en entidades con mayor plantilla de control. **Nunca 0**: sin número, la discusión vuelve al modelo de licenciamiento |
| 8 | Permanencia del acceso de control tras la extinción | ADM-12·v3 | Órgano de control interno | **3 meses** desde la extinción o hasta la fecha del **acta de reversión** de DT-8·v3, apartado 8, o el vencimiento del plazo previsto para levantarla, lo que ocurra después | — |
| 9 | Plazo de entrega del Plan de Reversibilidad | DT-8·v3 | Responsable del contrato | **3 meses** desde la formalización | — |
| 10 | Plazo de entrega del Inventario de Componentes y periodicidad de actualización | DT-8·v3 | Servicio de informática | **30 días** desde la formalización y, después, **con cada versión puesta en producción** | No se sustituye por una periodicidad fija: la actualización se anuda a la puesta en producción, que es el hecho que altera el inventario |
| 11 | Periodicidad del ensayo real de reversibilidad | DT-8·v3 | Responsable del contrato | **Cada 24 meses**, y en todo caso durante el último año de vigencia | Cada 12 meses en sistemas de categoría ALTA |
| 12 | Licencia de uso transitoria del producto base durante la reversión | DT-8·v3 | Órgano de contratación | **6 meses** | Ampliar sólo si el coste se computa en el presupuesto base de licitación y el plazo se recoge en DT-8·v3.5 y en la definición de la Parte I, §5.2.d). No caben prórrogas que el texto de pliego no prevea |
| 13 | Plazo de subsanación previo a la calificación del incumplimiento como esencial | ADM-6·v3 | Órgano de contratación | **1 mes** desde el requerimiento fehaciente | Ampliable por causa acreditada no imputable al contratista |
| 14 | Penalidad por retraso en una exigencia del catálogo | ADM-5·v3 | Órgano de contratación | **Los tramos de ADM-5·v3, apartado 2, literalmente**: leve, hasta el 0,5 % del **precio anual**; grave, del 0,5 al 3 % del **precio anual**; muy grave, del 3 al 6 % del **precio del contrato**. El tramo grave se aplica por cada mes o fracción de retraso | No se recalibra aquí: la base de cálculo y la unidad las fija ADM-5·v3. Límites legales infranqueables: cada penalidad no puede superar el 10 % del precio y el conjunto el 50 %, IVA excluido (art. 192.1 LCSP) |
| 15 | Duración máxima de la demostración funcional | ADM-9·v3 | Órgano de contratación | **90 minutos** | Hasta 120 en objetos con más de cinco tareas en el guion |
| 16 | Peso del bloque de IA y tecnología en el baremo | ADM-7·v3 | Órgano de contratación | **25 % del total del PCAP recomendado; 40 % límite absoluto, no superable en ningún caso** (ADM-7·v3.1.4.a) | Bajar a 15 % cuando el componente tecnológico sea accesorio. Entre el 25 % y el 40 %, motivación expresa en la memoria de criterios. Por encima del 40 %, no cabe motivación: el baremo es inválido |
| 17 | Peso del criterio de precio | ADM-7·v3 | Órgano de contratación | **40 %** | Ajustable, con el límite del 51 % de criterios cualitativos en prestaciones de carácter intelectual (art. 145.4) |
| 18 | Suelo del plazo puntuable de entrega de la interfaz | ADM-7·v3 criterio B | Servicio técnico | **6 meses** | Evita que la puntuación premie plazos que nadie puede cumplir |
| 19 | Bolsa de servicios evolutivos | ADM-3·v3, bloque 2, apartado 5 | Órgano de contratación, previo informe de Intervención | **5 % del presupuesto base de licitación de la duración inicial, sin IVA**, en horas del Cuadro de Precios Unitarios | Nunca superior al 10 % de esa misma base. Sólo en contratos de desarrollo o mantenimiento de aplicaciones (art. 308.3 LCSP). Si el contrato prevé prórrogas, el pliego dice **expresamente** si la bolsa se dota también para cada anualidad prorrogada y por qué importe. Está **dentro** del presupuesto base de licitación y, con él, en el valor estimado |
| 20 | Porcentaje de la modificación prevista | ADM-14·v3 | Órgano de contratación, previo informe de Intervención | **0 %: por defecto no se incorpora.** Si se incorpora: «[X, en ningún caso superior al VEINTE] por ciento», con recomendación de **10** | Sólo cuando el catálogo no cubra necesidades identificadas, exista Cuadro de Precios Unitarios y el valor estimado resultante no cruce un umbral sin que el expediente lo asuma |
| 21 | Umbral de activación del depósito de código | ADM-11·v3 | Órgano de contratación | **Las cuatro circunstancias del apartado 1 de ADM-11·v3, de concurrencia acumulativa**: (a) categoría ALTA en la dimensión de **disponibilidad**; (b) valor estimado superior a **300.000 €**; (c) servicio de la lista tasada (padrón, tributos, recaudación, contabilidad, gestión de expedientes, sede); y (d) estudio de mercado que acredite que no hay alternativa sustituible en menos de 6 meses | **En defecto de cualquiera de ellas, la cláusula se marca NO APLICA.** No son vías alternativas. Rebajar el umbral económico exige motivación en la memoria: el depósito tiene coste y va al presupuesto base |
| 22 | Umbral de aplicación de la demostración funcional | ADM-9·v3 | Órgano de contratación | Valor estimado igual o superior a **200.000 €** | No cabe en el procedimiento abreviado y sólo cabe en el simplificado dentro de los topes de juicio de valor |
| 23 | Periodicidad de la Comisión de seguimiento | ADM-4·v3 | Responsable del contrato | **Semestral**: 2 sesiones al año, también el primero | Anual en contratos de menor cuantía. Trimestral el primer año, 4 sesiones, tras una implantación o con un Anexo V exigente: cada sesión añadida suma 6 horas a la fila C1 de la tabla única (ADM-4·v3, epígrafe 5) |
| 24 | Número mínimo de operadores que deben poder cumplir una exigencia | Anexo V, contraste de mercado | Servicio técnico | **3** | Si el contraste arroja menos de 3, la exigencia **no se incorpora** ese ejercicio: se aplaza al siguiente |
| 25 | Ampliación del plazo de presentación de ofertas | PCAP | Órgano de contratación | **+5 días naturales** sobre el mínimo legal cuando el pliego incorpore por primera vez una exigencia del catálogo | — |
| 26 | Plazo de obtención de la certificación de gobernanza de IA | ADM-1·v3 | Órgano de contratación | **12 meses** desde la formalización, con medidas equivalentes documentadas entretanto | — |
| 27 | Variante de la tercera condición de equivalencia | DT-0·v3.3.c) | Órgano de contratación | **Variante abierta** (la del texto de la cláusula) | Sólo a la variante de continuidad cuando el objeto sea la continuidad o ampliación de un sistema ya implantado y la memoria lo justifique |
| 28 | Preaviso de cambio de clasificación de riesgo del sistema de IA | DT-1·v3.2 | Responsable del contrato | **30 días naturales** | Reducir a 15 en contratos con despliegue muy dinámico; nunca por debajo de 10 |
| 29 | Conservación de los archivos de registro del sistema de IA | DT-1·v3.6.c) | Delegado de protección de datos | **12 meses** (mínimo 6) | Elevar a 24 cuando el sistema soporte procedimientos con plazos de impugnación largos |
| 30 | Respuesta del punto de contacto ante incidente grave | DT-1·v3.6.e) | Servicio de informática | **24 horas hábiles** | Reducir a 4 horas en servicios de disponibilidad crítica |
| 31 | Umbral de conservación prolongada que activa DT-3·v3 | DT-3·v3.1 | Responsable de seguridad | **5 años** | Reducir a 3 en información de categorías especiales |
| 32 | Periodicidad del inventario criptográfico | DT-3·v3.3 | Servicio de informática | **Anual** | Semestral en categoría ENS ALTA |
| 33 | Plazo de entrega del plan de transición criptográfica | DT-3·v3.4 | Servicio de informática | **6 meses** | Ampliar a 12 en soluciones con muchos componentes de terceros |
| 34 | Número mínimo de procesos automatizados de la lista cerrada | DT-4·v3.2 | Gestor | **3** | Reducir a 1 en contratos de menor cuantía; elevar sólo con volumen acreditado en el apéndice técnico |
| 35 | Plazo de automatización de esos procesos | DT-4·v3.2 | Gestor | **6 meses** | Ampliar a 12 cuando la automatización dependa de integraciones con terceros |
| 36 | Periodicidad de los indicadores de automatización | DT-4·v3.4 | Gestor | **Trimestral** | Semestral en contratos de bajo volumen |
| 37 | Plazo de entrega de la documentación de interfaces | DT-5·v3.3 | Servicio de informática | **30 días naturales** | Ampliar a 60 sólo con justificación técnica |
| 38 | Plazo para obtener la acreditación de conformidad con el ENS | DT-6·v3.3 | Responsable de seguridad | **6 meses** | Ampliar a 12 sólo si el mercado lo justifica y consta en la memoria |
| 39 | Plazos de subsanación de vulnerabilidades por severidad | DT-6·v3.6 | Responsable de seguridad | **Crítica 15 / alta 30 / media 90 días** | Reducir en categoría ALTA; nunca ampliar sin motivación |
| 40 | Comunicación de vulnerabilidad crítica o alta | DT-6·v3.6 | Responsable de seguridad | **48 horas** | Reducir a 24 en categoría ALTA |
| 41 | Periodicidad de la prueba de continuidad | DT-6·v3.7 | Servicio de informática | **Anual** | Semestral en categoría ALTA |
| 42 | Preaviso de auditoría al contratista | DT-6·v3.8 | Responsable de seguridad | **15 días hábiles** | Reducir a 5 en contratos de alta criticidad |
| 43 | Antelación con que debe estar disponible el entorno de pruebas | DT-7·v3.3.e) | Servicio de informática | **60 días naturales** | Reducir a 30 en módulos de baja complejidad |
| 44 | Inicio del período de reversión | DT-8·v3.4 | Responsable del contrato | **3 meses antes de la finalización** | Ampliar a 6 en soluciones con migración compleja |
| 45 | Plazo máximo de entrega tras la finalización | DT-8·v3.4 | Responsable del contrato | **30 días naturales** | No ampliar: es lo que hace cierto el día inicial del plazo de garantía |
| 46 | Plazo para levantar el acta de reversión | DT-8·v3.8 | Órgano de contratación | **15 días hábiles**, con silencio a favor del contratista | No ampliar: cuanto más largo, más se retrasa el día inicial de la garantía |
| 47 | Plazo de garantía | DT-8·v3.8 | Órgano de contratación | **12 meses** desde el acta de reversión o desde el vencimiento del plazo para levantarla | Ajustar al que el PCAP fije con carácter general para el tipo de contrato |
| 48 | Plazos de subsanación citados en los cuadros de penalidades | ADM-5·v3 y cláusulas DT | Órgano de contratación | **15 o 30 días**, según el hecho | Alinear con los del PCAP: no dejar dos plazos distintos para el mismo hecho |
| 49 | Umbrales de cantidad del criterio C1 | ADM-7·v3 criterio C1; Apéndice técnico 0 | Servicio técnico | **Cmín = 0 requisitos valorables; Ctecho = número total de requisitos del bloque B del Apéndice técnico 0** | Si el bloque B queda vacío, se suprime C1 y se recompone el baremo antes de publicar. Ctecho nunca puede superar el número de filas publicadas en ese bloque |
| 50 | Sujeción de la entidad a la Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid o a norma autonómica equivalente | Parte I, §2.3, fila 13, y §3.3, fila 14; Parte V, V.2.1, paso B-9; ADM-14·v3, apartados 2.d) y 3.b); Anexo XI.4 | Órgano de contratación, con el informe jurídico preceptivo | **No sujeta**, mientras sea proyecto de ley | Pasa a «sujeta» cuando la ley se publique en el «Boletín Oficial de la Comunidad de Madrid» y entre en vigor (a los veinte días: disposición final quinta del proyecto), para la Administración de la Comunidad de Madrid y sus organismos públicos (art. 2.1); para una entidad local, sólo si lo establece un convenio (art. 2.2, sin perjuicio del ejercicio directo por la Comunidad de Madrid de las competencias que le atribuye el art. 36 de la Ley 7/1985 respecto de los municipios de menos de 20.000 habitantes). Se hace constar en el informe de necesidad. Si la ley se aprueba con un texto distinto del proyecto, se rehace el Anexo XI.4 antes de mover este valor |
| 51 | Ley autonómica nominada en la modificación prevista | ADM-14·v3, apartados 2.d) y 3.b) | Órgano de contratación | **Ninguna.** Sólo se nomina si la fila 50 está en «sujeta» o se prevé que lo esté durante la vigencia del contrato, y siempre que ADM-14·v3 se incorpore | Se nomina **una** ley, por su denominación, número y fecha o, si aún no se ha publicado, por la referencia de su proyecto. Nunca una fórmula genérica del tipo «la normativa autonómica aplicable» |
| 52 | Extremos para que el Ayuntamiento asigne el nivel de impacto o riesgo autonómico | DT-1·v3.2, último párrafo | Servicio de informática, con el informe jurídico preceptivo | **Los que enumeren los criterios de asignación publicados** a la fecha de la licitación o, si no se han publicado, finalidad y ámbito de aplicación, tipo de datos, grado de automatización y modalidad de supervisión humana | Sólo si la fila 50 está en «sujeta»; si no, el párrafo se suprime. La relación es cerrada: no se sustituye por una remisión a lo que el Ayuntamiento precise |
| 53 | Tiempo de efecto del control propio de suspensión de una funcionalidad de IA | DT-1·v3.6.d) | Servicio de informática | **4 horas** desde su activación | Reducir a 5 minutos, como en DT-7·v3.3.f), cuando la funcionalidad actúe sobre terceros sin intervención de personal municipal; ampliar sólo si el contraste de mercado acredita que las soluciones del sector no lo alcanzan |
| 54 | Tiempo de efecto del procedimiento sustitutivo de suspensión | DT-1·v3.6.d) | Responsable del contrato | **24 horas** desde el requerimiento | Reducir a 4 horas en funcionalidades de atención a la ciudadanía. En el nivel C, el inciso no se conserva sin motivación |
| 55 | Informes, consultas o autorizaciones previos a la aceptación de una funcionalidad de IA | DT-1·v3.9 | Órgano de contratación, con el informe jurídico preceptivo | **Los que exija la normativa aplicable**, con su precepto (p. ej., la consulta previa del art. 36 RGPD, cuando proceda) | La mención del informe autonómico, sólo si la fila 50 está en «sujeta». Si no se exige ninguno, el acta de aceptación lo hace constar |
| 56 | Tamaño mínimo de la muestra de verificación de sesgos | DT-1·v3.13.b) | Gestor del procedimiento | **50 casos** | Reducir a 20 en procedimientos de bajo volumen anual; elevar cuando el sistema clasifique en muchas categorías o el gestor necesite comparar varios grupos |
| 57 | Periodicidad de los indicadores desagregados de sesgo | DT-1·v3.13.c) | Responsable del contrato | **Semestral** | Trimestral en sistemas de alto volumen de resultados referidos a personas; anual en los de bajo volumen |
| 58 | Comunicación de sesgos detectados | DT-1·v3.13.d) | Responsable del contrato | **15 días naturales** desde que el adjudicatario los conozca | Reducir a 5 cuando el sistema intervenga en procedimientos de concurrencia competitiva o que limiten derechos |
| 59 | Umbrales de los tipos de niveles de servicio | ADM-5·v3, tipos L12 y M16 | Órgano de contratación, a propuesta del responsable del contrato | **10 %** de las incidencias no críticas del período de medición (L12); exceso de más del **100 %** sobre el tiempo máximo de resolución de una incidencia crítica (M16) | Con pocas incidencias por período, una sola dispara el porcentaje: fijar entonces un número mínimo de incidencias fuera de plazo |

**Qué no está aquí, y dónde está.** Los plazos y umbrales de trámite interno de las cláusulas administrativas no se consolidan en esta tabla: **su sede es el texto de pliego de la cláusula que los fija**, con su valor recomendado, y allí se consultan y se mueven. Son cuatro, y ésta es la relación completa: **audiencia previa a la imposición de una penalidad**, ADM-5·v3, apartado 4; **umbral de penalidades acumuladas que obliga a valorar expresamente la resolución**, ADM-5·v3, apartado 5; **audiencia previa a la liberación del depósito de código**, ADM-11·v3, apartado 6; y **umbrales de duración y de valor estimado por debajo de los cuales no se constituye la Comisión de Seguimiento**, ADM-4·v3, epígrafe 7. No se duplican aquí a propósito: dos redacciones del mismo plazo es el defecto que la regla de precedencia de este anexo existe para evitar. Cuando un plazo de trámite **sí** figura en la tabla anterior —el mes de subsanación previo a la calificación del incumplimiento como esencial, fila 13—, la tabla lo reproduce y no lo decide: manda la cláusula.

#### X.2 Umbrales y límites legales

Se recogen con su precepto. **Antes de publicar, compruébese la redacción vigente**: los umbrales de la Unión Europea se revisan cada dos años y los del procedimiento se han modificado en el pasado. Se separan los que **determinan el procedimiento y el acceso al recurso** —que son los cuatro umbrales de la Parte V, V.4.10, fuente única— de los **límites legales de cuantía**, que no son umbrales de procedimiento y no se manejan como tales.

**X.2.a · Umbrales que determinan el procedimiento y el recurso**

| Umbral | Precepto | Valor | Caducidad / cautela |
|---|---|---|---|
| Contrato menor | Art. 118.1 LCSP | Valor estimado inferior a 15.000 € en servicios y suministros; inferior a 40.000 € en obras | Compruébese la redacción vigente. Reglas específicas del catálogo para menores en la Parte I, §2.4 |
| Procedimiento abierto abreviado | Art. 159.6 LCSP | 60.000 € de valor estimado en servicios y suministros; 80.000 € en obras | No cabe en prestaciones de carácter intelectual; no admite criterios de juicio de valor |
| Recurso especial en materia de contratación | Arts. 44.1.a) y 44.2.a) LCSP | Valor estimado **superior a** 100.000 € en servicios y suministros; superior a 3.000.000 € en obras y concesiones | Los pliegos son directamente recurribles |
| Contrato sujeto a regulación armonizada | Reglamento Delegado (UE) 2025/2152, incorporado a los arts. 21.1.b) y 22.1.b) LCSP por la Orden HAC/1517/2025, de 18 de diciembre (BOE-A-2025-26605) | 216.000 € en servicios y suministros adjudicados por entidades distintas de la Administración General del Estado | **Compruébese antes de cada uso**: se actualiza cada dos años. El importe vigente en obras y concesiones es 5.404.000 € |
| *(Tope, no umbral autónomo)* Procedimiento abierto simplificado | Art. 159.1.a) LCSP | 100.000 € de valor estimado en servicios y suministros | Coincide en cuantía con el del recurso especial. Además, tope de juicio de valor del art. 159.1.b): 25 % general, 45 % en prestaciones de carácter intelectual |

**X.2.b · Límites legales de cuantía**

| Límite | Precepto | Valor | Cautela |
|---|---|---|---|
| Comprobación material de la inversión | Art. 20.3 RD 424/2017 | 50.000 € | Determina la intervención de la comprobación material |
| Penalidades | Art. 192.1 LCSP | 10 % del precio por cada penalidad; 50 % del precio en su conjunto, IVA excluido | Límite legal, no parámetro |
| Mejoras valoradas por juicio de valor | Art. 145.7 LCSP | 2,5 % | Límite legal |
| Criterios cualitativos en prestaciones de carácter intelectual | Art. 145.4 LCSP | 51 % como mínimo | Límite legal |
| Modificación prevista | Art. 204 LCSP | 20 % del precio inicial | Límite legal. La modificación no puede suponer nuevos precios unitarios no previstos (art. 204.1.b) |

#### X.3 Modelo mínimo del Cuadro de Precios Unitarios

El Cuadro de Precios Unitarios se presenta **con la oferta** y sirve a dos cosas a la vez: fija el precio de la bolsa de servicios evolutivos (ADM-3·v3, bloque 2, al amparo del art. 308.3 LCSP, que permite definir el objeto por componentes de prestación con precio por unidades de actividad) y convierte una eventual modificación prevista en una multiplicación en lugar de una negociación. Si ADM-12·v3 prevé accesos de control adicionales, fija también su precio. Se incorpora al PCAP como anexo propio del pliego.

:::pliego
**CUADRO DE PRECIOS UNITARIOS** *(se presenta con la oferta, en el sobre de criterios evaluables mediante fórmula)*

| Perfil profesional | Precio/hora (IVA excluido) | Ponderación a efectos del criterio de valoración |
|---|---|---|
| Jefe de proyecto | | [X; se recomienda 10] % |
| Analista funcional | | [X; se recomienda 25] % |
| Analista-programador | | [X; se recomienda 35] % |
| Técnico de sistemas / integración | | [X; se recomienda 20] % |
| Técnico de formación | | [X; se recomienda 10] % |

| Unidad de despliegue | Cláusula que la usa | Unidades máximas | Precio unitario (IVA excluido), no superior al máximo del cuadro de características | Ponderación a efectos del criterio de valoración |
|---|---|---|---|---|
| [Si se prevén accesos adicionales:] Acceso de control adicional, por acceso y año | [ADM-12], apartado 1 | [X; se recomienda 2] | | [X] % |
| [Si se incorpora la modificación prevista:] Extensión de la interfaz normalizada a un módulo del contrato no relacionado en el Anexo de Exigencias Tecnológicas, con la de su registro de trazabilidad | [ADM-14], apartado 2, letras a) y c) | Las de la letra a) | | [X] % |
| [Si se incorpora la modificación prevista:] Extensión de la operación autónoma supervisada a una operación no relacionada en el Anexo, con la de su registro de trazabilidad | [ADM-14], apartado 2, letras b) y c) | Las de la letra b) | | [X] % |

**Ninguna unidad de despliegue se imputa a la bolsa de servicios evolutivos**, que se retribuye sólo por horas y perfil. La suma de las ponderaciones de las unidades de despliegue es 100, y pesan en el criterio de precio unitario conforme a la fórmula de valoración publicada. Si el pliego no prevé accesos adicionales ni incorpora la modificación prevista, esta tabla no se incluye.

**La suma de las ponderaciones anteriores debe ser 100** y responder a la cesta de consumo previsible del contrato, motivada en el expediente. Una ponderación que no refleje el consumo real convierte el criterio de precio unitario en un criterio arbitrario.

Los precios unitarios ofertados son fijos durante toda la vigencia del contrato y de sus prórrogas, sin perjuicio de la revisión de precios cuando proceda conforme al pliego. Las peticiones de servicio con cargo a la bolsa las cursa el responsable del contrato mediante encargo escrito con alcance, unidades y plazo; en ningún caso comportan el ejercicio de facultades de dirección sobre el personal del contratista. Las horas no consumidas al término del contrato no son facturables.
:::

**Por qué esas tres unidades y no otras.** Cada unidad del Cuadro tiene una cláusula que la usa, un máximo y peso en el criterio de precio unitario, para que ningún precio que luego fije un pago quede fuera de la competencia. No hay unidad para un módulo adicional, porque la bolsa y ADM-14·v3 excluyen los módulos nuevos (ADM-3·v3, bloque 2, apartado 2; ADM-14·v3, apartado 2). Tampoco para una integración o una función más de la interfaz dentro de los módulos contratados: son las clases (iii) y (vi) de la bolsa y se piden por horas. Ni para la formación, que retribuye el precio. El peso de las unidades se calcula con la fórmula C bis del Anexo XVII, sobre su precio máximo.

**Advertencia de fiscalización.** Las dos preguntas que la Intervención hará sobre la bolsa son: si se abonan las horas no consumidas —no se abonan, y así consta arriba— y cómo se garantiza la determinación del objeto (art. 99.1 LCSP) si el contenido concreto se fija durante la ejecución. La respuesta está en el art. 308.3 LCSP: el objeto se define por componentes de prestación, con precio por unidades de actividad, y el pliego prevé expresamente la concreción de las funcionalidades durante la ejecución. Esa previsión debe figurar en el PCAP con esas palabras, y la bolsa **computa** en el presupuesto base de licitación y en el valor estimado.

#### X.4 Casilla de desglose del modelo de oferta económica

Sólo si el PCAP incorpora la cláusula complementaria [n+2] de ADM-14·v3 (reducción prevista por informe vinculante desfavorable). Se añade al modelo de oferta económica del PCAP, en el sobre de criterios evaluables mediante fórmula. Las funcionalidades son las que el PPT sujeta a informe o consulta previos conforme a DT-1·v3, apartado 9. El desglose no se valora: sólo fija el importe de una eventual reducción. Para que no se cumplimente a la baja, el apartado del cuadro de características que lo acompaña asigna a cada funcionalidad su parte del presupuesto base de licitación.

:::pliego
**DESGLOSE DE LA OFERTA ECONÓMICA POR FUNCIONALIDAD BASADA EN INTELIGENCIA ARTIFICIAL SUJETA A INFORME O CONSULTA PREVIOS** *(forma parte de la oferta económica; no es objeto de valoración)*

| Funcionalidad (relación del Pliego de Prescripciones Técnicas, apartado [ ]) | Importe que la oferta le asigna (IVA excluido) | Pago único o por anualidad |
|---|---|---|
| | | |
| **Total asignado** | | |

El importe asignado a cada funcionalidad está comprendido en el precio ofertado y no se suma a él, y el total asignado no excede de ese precio. Si el importe asignado a una funcionalidad es inferior al que resulta de aplicar a la parte del presupuesto base de licitación que el cuadro de características le atribuye el porcentaje de baja de la oferta, la reducción de la cláusula [n+2] se calcula con este último.
:::

---

### ANEXO XI · ANEXO DE VIGENCIA NORMATIVA

**Fecha de corte: 1 de septiembre de 2026.** Este anexo se revisa con periodicidad anual, junto con el Catálogo de Exigencias Tecnológicas. La versión aplicable a un contrato es la vigente en la fecha de aprobación de su expediente; su actualización posterior no altera las obligaciones del contrato ya adjudicado.

**Por qué existe este anexo.** Un pliego puede exigir más de lo que la ley exige hoy: eso es una decisión del órgano de contratación, y es legítima si es proporcionada y está motivada. Lo que no puede hacer es **presentar como obligación legal vigente lo que la norma todavía no impone**. La confusión entre ambas cosas es un problema de proporcionalidad y, en un documento publicado en abierto, un problema de credibilidad.

#### XI.1 El calendario del Reglamento de IA tras la modificación de 2026

El Reglamento (UE) 2024/1689 se cita en todo este documento **en su redacción vigente**, modificada por el **Reglamento (UE) 2026/1744 del Parlamento Europeo y del Consejo, de 8 de julio de 2026**, por el que se modifican los Reglamentos (UE) 2024/1689, (UE) 2018/1139 y (UE) 2023/1230, publicado en el Diario Oficial de la Unión Europea de 24 de julio de 2026 y en vigor desde el 27 de julio de 2026 (referencia del BOE: DOUE-L-2026-81147). Literal verificado del considerando que fija las nuevas fechas:

> «procede fijar la fecha de aplicación del capítulo III, secciones 1, 2 y 3 el **2 de diciembre de 2027** en el caso de los sistemas de IA clasificados como de alto riesgo en virtud del artículo 6, apartado 2, y el anexo III, y el **2 de agosto de 2028** en el caso de los sistemas de IA clasificados como de alto riesgo en virtud del artículo 6, apartado 1, y del anexo I.»

**Consecuencia directa que hay que tener presente al redactar cualquier pliego:** los **artículos 26 y 27** —obligaciones del responsable del despliegue y evaluación de impacto relativa a los derechos fundamentales— están en la **sección 3 del capítulo III**. A la fecha de corte de este anexo **no son exigibles**. Toda cláusula que se apoye en ellos se apoya en una obligación futura, y así debe decirlo.

**Tres precisiones del texto nuevo que no pueden omitirse**, porque acotan el calendario anterior:

1. La letra c) del párrafo tercero del art. 113, en su redacción vigente, se aplica **«con excepción de su artículo 6, apartado 5»**.
2. Se añade al mismo párrafo una **letra d)**: «los artículos 102 a 110 serán aplicables a partir del **27 de julio de 2026**».
3. La aplicación desde el 2 de febrero de 2025 de las prácticas prohibidas **no alcanza** al artículo 5, apartado 1, párrafo primero, letras b bis) y b ter), ni a los apartados 1 bis y 1 ter del mismo artículo, **aplicables desde el 2 de diciembre de 2026** (art. 113, párrafo tercero, letra a), en su redacción vigente).

**Y una cuestión que queda resuelta, para que no se arrastre como pendiente:** el **artículo 49** (registro de sistemas de alto riesgo) está en la **sección 5** del capítulo III y **no entra en el aplazamiento**, que sólo alcanza a las secciones 1, 2 y 3.

#### XI.2 Las dos columnas

| Materia | **Ya exigible a 01/09/2026** | **Anticipado voluntariamente por el Ayuntamiento** |
|---|---|---|
| Prácticas prohibidas de IA y alfabetización en materia de IA (arts. 4 y 5 del Reglamento de IA) | **Sí**, desde el 02/02/2025, **con excepción del artículo 5, apartado 1, párrafo primero, letras b bis) y b ter), y de los apartados 1 bis y 1 ter del mismo artículo, aplicables desde el 02/12/2026** (art. 113, párr. 3.º, letra a), en su redacción vigente) | — |
| Modelos de IA de uso general, gobernanza y régimen sancionador | **Sí**, desde el 02/08/2025, **con la salvedad del artículo 101**, cuya aplicación se difiere en los términos del art. 113, párr. 3.º, letra b) | — |
| Obligaciones de transparencia sobre interacción con sistemas de IA y contenido generado (art. 50) | **Sí**, desde el 02/08/2026, con el régimen transitorio del art. 111 para sistemas ya introducidos en el mercado | — |
| Requisitos de los sistemas de alto riesgo y obligaciones del responsable del despliegue (cap. III, secciones 1 a 3, arts. 26 y 27 incluidos) | **No.** Exigibles el 02/12/2027 (art. 6.2 y anexo III) y el 02/08/2028 (art. 6.1 y anexo I), **con excepción del art. 6, apartado 5**, y sin perjuicio de que los arts. 102 a 110 se apliquen desde el 27/07/2026. [Si la entidad está sujeta a la Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid o a norma autonómica equivalente], la evaluación de impacto relativa a los derechos fundamentales podría serle exigible antes de esas fechas, desde la entrada en vigor de esa ley: véase XI.4. Hoy es proyecto | **Sí**: el contrato exige hoy que el adjudicatario **entregue los medios** para que el Ayuntamiento pueda cumplirlas cuando lo sean —instrucciones de uso, información para la evaluación de impacto, registros exportables, mecanismo de suspensión y punto de contacto—. Se anticipa porque el contrato durará más que el plazo |
| Protección de datos: encargo del tratamiento, devolución o supresión al término, evaluación de impacto | **Sí** (RGPD y LOPDGDD) | — |
| Actuación administrativa automatizada: determinación de órganos de especificaciones, programación, supervisión, control de calidad y auditoría del código | **Sí**, cuando el Ayuntamiento acuerde una actuación automatizada (art. 41 Ley 40/2015) | Se anticipa la **disponibilidad de la información técnica** que permita hacerlo, aunque hoy no haya actuación automatizada acordada |
| Decisiones individuales automatizadas | **Sí** (art. 22 RGPD) | — |
| Conformidad con el Esquema Nacional de Seguridad y extensión a la cadena de suministro | **Sí** (RD 311/2022, art. 2.3) | — |
| Interoperabilidad y servicios comunes de obligada utilización | **Sí** (RD 4/2010 y Ley 39/2015) | — |
| Titularidad y cesión de aplicaciones a otras administraciones | **Sí** (arts. 157 y 158 Ley 40/2015; art. 308.1 LCSP; TRLPI) | — |
| Acceso de los órganos de control interno a los datos de ejecución | La potestad de control **existe** (art. 214 TRLRHL; RD 424/2017). Su articulación frente al contratista **no** está impuesta por norma | **Sí**: la previsión contractual es lo que la hace efectiva frente a un tercero |
| Sistema de gestión de la inteligencia artificial (norma de gobernanza de IA) | **No.** Ninguna norma obliga a un contratista a certificarse | **Sí**, como condición especial de ejecución con compromiso de obtención. Se hace constar que esa certificación **no** otorga presunción de conformidad con el Reglamento de IA: la presunción corresponde a las normas armonizadas cuyas referencias se publican en el Diario Oficial (art. 40 del Reglamento) |
| Interfaz normalizada de acceso programático para agentes (ET-1) | **No.** Ninguna norma la impone | **Sí**, con fundamento en el acuerdo del órgano de gobierno (Anexo VIII) |
| Operación autónoma supervisada y su trazabilidad (ET-2 y ET-3) | Parcialmente: la trazabilidad deriva del ENS en la medida de la categoría del sistema | **Sí** en lo que excede de esa medida |
| Depósito de código y continuidad del servicio | **No.** Ninguna norma lo impone | **Sí**, como previsión contractual de continuidad. Debe presentarse como previsión de nueva planta bien fundada, no como práctica consolidada |
| Control del uso de sistemas de IA de terceros sobre información municipal | Parcialmente: deriva del deber de confidencialidad y del régimen de encargo del tratamiento | **Sí** en lo relativo a la declaración de sistemas y a la autorización previa de altas |
| Registro de sistemas de alto riesgo (art. 49, sección 5 del capítulo III) | **Sí**: la sección 5 **no** está incluida en el aplazamiento de las secciones 1, 2 y 3 | — |
| Sistemas de alto riesgo **destinados a ser utilizados por autoridades públicas** | **No hasta el 02/08/2030.** El artículo 111, apartado 2, del Reglamento (UE) 2024/1689, en su redacción vigente, concede a proveedores y responsables del despliegue de estos sistemas plazo hasta esa fecha | **Sí**: el contrato exige antes de esa fecha la entrega de la documentación y de los medios que permitirán cumplir, y lo dice expresamente. Es la fila que más veces se cita mal, porque es la que más alarga el plazo real |

**Regla de uso de esta tabla.** Ninguna fila de la columna izquierda puede transcribirse a un pliego sin su fecha. Ninguna fila de la columna derecha puede presentarse como obligación legal vigente. El extracto que se transcribe al pliego de prescripciones técnicas es el del **anexo XIX**, no esta tabla.

#### XI.3 Comprobaciones pendientes antes de publicar

No se afirma nada que no se haya comprobado. Estas tres se encargan, no se deducen. Cuando una comprobación se cierra, se cierra: no queda como pendencia.

1. **Alcance exacto del régimen transitorio del artículo 111** del Reglamento (UE) 2024/1689 en su redacción vigente, sobre el texto consolidado, para los sistemas ya introducidos en el mercado antes de las fechas de aplicación. *(La duda sobre el artículo 49 queda resuelta y cerrada: está en la sección 5 del capítulo III y no entra en el aplazamiento, que sólo alcanza a las secciones 1, 2 y 3. Así consta en XI.1 y en la tabla de XI.2.)*
2. **Lista oficial de normas armonizadas** del Reglamento de IA publicadas en el Diario Oficial, a la fecha de aprobación del expediente.
3. **Vigencia de la designación de la norma de gobernanza de sistemas de gestión de IA** antes de cada expediente. La designación está fijada en ADM-1·v3, nota al redactor, punto Sexto: **UNE-EN ISO/IEC 42001:2026**, edición de 8 de abril de 2026, que anula la UNE-ISO/IEC 42001:2025. Se cita en el pliego **con designación y año expresos y regla de referencia estática** —nunca con la fórmula «o norma que la sustituya», que permitiría que el contenido de la obligación cambiase después de que el licitador hubiera ofertado— y con admisión de otras pruebas de medidas equivalentes (art. 93.2 LCSP).

#### XI.4 Normativa autonómica en tramitación: el proyecto de Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid

*Añadido en la versión 4.0, con la actualización de 15 de octubre de 2026 y, por tanto, después de la fecha de corte de este anexo.* Se cita como **proyecto de Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid (PL-11/2026, BOAM núm. 171, de 17 de septiembre de 2026)**. Es el texto anexo al Acuerdo del Consejo de Gobierno de la Comunidad de Madrid de 9 de septiembre de 2026, que lo aprueba y ordena su remisión a la Asamblea de Madrid para su tramitación por el procedimiento legislativo común. A la fecha de esta versión, el plazo de enmiendas al articulado estaba abierto hasta el 16 de octubre de 2026. Cualquier enmienda que prospere obliga a rehacer esta sección sobre el texto que se publique.

**Estado: proyecto de ley en tramitación. No es exigible a nadie.** No obliga hasta que se apruebe, se publique en el «Boletín Oficial de la Comunidad de Madrid» —las leyes de la Asamblea se publican también en el «Boletín Oficial del Estado» (art. 40.1 del Estatuto de Autonomía)— y entre en vigor, a los veinte días de su publicación en aquél (disposición final quinta). Cuando lo haga, se aplicará a la Administración de la Comunidad de Madrid y a sus organismos públicos vinculados o dependientes (art. 2.1), y a las entidades locales de la Comunidad sólo en los términos que acuerden mediante convenio (art. 2.2), sin perjuicio del ejercicio directo por la Comunidad de Madrid de las competencias que le atribuye el art. 36 de la Ley 7/1985 respecto de los municipios de menos de 20.000 habitantes. Ese inciso deja a salvo competencias propias de la Comunidad; no dice que la ley se aplique a esos municipios sin convenio. Para un ayuntamiento sin convenio, lo que sigue describe compatibilidad, no obligación.

**Fórmula única de parametrización.** Lo que el catálogo recoge sólo de este proyecto, porque ninguna norma vigente lo sostiene, va condicionado con una misma fórmula: «[si la entidad está sujeta a la Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid o a norma autonómica equivalente]». Su valor por defecto es «no sujeta» (Anexo X, fila 50). Mientras no cambie, el bloque condicionado se suprime del expediente y del pliego. Lo que se sostiene en norma vigente se incorpora sin la fórmula, y el proyecto se cita sólo como refuerzo: es el caso de los apartados 6.d), 11, 12 y 13 de DT-1·v3, como muestra la segunda tabla de esta sección.

| Previsión del proyecto | Qué haría exigible, si se aprueba en estos términos | Desde cuándo | Dónde lo recoge el catálogo |
|---|---|---|---|
| Art. 23.1: antes de implantar un sistema de inteligencia artificial, el órgano promotor elabora un proyecto de implantación; si el sistema es de alto riesgo de los contemplados en el Reglamento europeo, realiza además la evaluación de impacto relativa a los derechos fundamentales | La evaluación de impacto, **sin remisión al calendario del Reglamento (UE) 2026/1744**. El texto no resuelve si quiere adelantar ese calendario para las entidades sujetas: por eso el catálogo dice que la evaluación *podría* ser exigible antes del 02/12/2027 y del 02/08/2028, no que lo será | Desde la entrada en vigor de la ley | Parte I, §3.3, fila 14, y fila de alto riesgo de XI.2. La información técnica para hacerla ya la entrega el contratista: DT-1·v3, apartado 6.b) |
| Disposición transitoria primera: adecuación de los sistemas existentes a la entrada en vigor | Su adecuación a la ley. El plan de adecuación no es la regla: sólo procede si a los doce meses de la entrada en vigor hay circunstancias que impidan la plena aplicación, y sus plazos no pueden superar los veinticuatro meses desde la entrada en vigor. Se cita la disposición transitoria, no la exposición de motivos, que habla de un «plazo adicional» y no coincide con ella | Desde la entrada en vigor; el plan, sólo en el supuesto de los doce meses | ADM-14·v3, apartado 2.d), si el pliego nomina esta ley (Anexo X, fila 51); en contratos vivos, Parte V, V.7.3 |
| Disposición final primera: nueva redacción de los arts. 2.1, 3.2.c) y k) y 7.2.d) de la Ley 14/2023, de 20 de diciembre, por la que se crea la Agencia de Ciberseguridad de la Comunidad de Madrid | En la Administración General y los organismos públicos de la Comunidad de Madrid: autorización previa de la Agencia para todo nuevo sistema de información, e informe preceptivo de la Agencia sobre los pliegos de prescripciones técnicas de los contratos en materia de ciberseguridad y de gobernanza de las tecnologías de la información y la comunicación | Desde la entrada en vigor de la ley | Parte I, §2.3, fila 13; Parte V, V.2.1, paso B-9, y V.4.14, advertencia 4 |

**Las demás previsiones del proyecto que tocan materias del catálogo** —el registro público de sistemas de inteligencia artificial (art. 21.2), la supervisión humana y su contenido mínimo (art. 21.3 y 4), la motivación de la solución que propone el sistema (art. 22.2), el informe preceptivo y vinculante de la Oficina para el Impulso de la Inteligencia Artificial sobre el proyecto de implantación (art. 23.2) el contenido de la resolución que determina una actuación administrativa automatizada (art. 26.1), la descripción de los datos y del algoritmo (art. 19.n) y las medidas contra los sesgos (arts. 19.b), 21.2.g), 21.4.b) y 26.3)— no son exigibles hoy. Donde el catálogo las recoge, la cláusula se ancla en la norma vigente cuando la hay, y el proyecto sólo se cita como refuerzo; la fórmula de parametrización la lleva únicamente lo que depende del proyecto:

| Previsión del proyecto | Dónde la recoge el catálogo | Norma vigente en que se ancla, o fórmula |
|---|---|---|
| Art. 21.2.e) y 21.6: nivel de impacto o riesgo asignado, con criterios remitidos a un reglamento | DT-1·v3, apartado 2, último párrafo | Ninguna: lleva la fórmula de parametrización |
| Art. 21.2 (resto) y 21.3: registro de sistemas y supervisión humana | DT-1·v3, apartados 2 y 6 | Reglamento (UE) 2024/1689, en su redacción vigente |
| Art. 21.4.d): suspensión del sistema dentro de la supervisión humana | DT-1·v3, apartado 6.d) | La suspensión del uso ante riesgo, que el Reglamento (UE) 2024/1689 atribuye al responsable del despliegue (DT-1·v3, apartado 6); sin fórmula |
| Art. 22.2: motivación de la solución que propone el sistema | DT-1·v3, apartado 11 | Ley 39/2015, arts. 35.1 y 88.3; Ley 15/2022, art. 23.2; sin fórmula |
| Art. 23.2: informe preceptivo y vinculante previo a la implantación | DT-1·v3, apartado 9 | Reglamento (UE) 2016/679, art. 36.1, para la consulta previa; la mención del informe autonómico lleva la fórmula |
| Art. 26.1: descripción del diseño y del funcionamiento en la resolución que determina una actuación automatizada | DT-1·v3, apartado 7, y DT-4·v3, apartado 3.e) | Ninguna para un ayuntamiento: lleva la fórmula, o la decisión municipal de publicarla |
| Art. 19.n): descripción de la recogida y el etiquetado de los datos y del algoritmo | Datos: DT-1·v3, apartado 12. Algoritmo: DT-1·v3, epígrafe 4; DT-4·v3, epígrafe 4; DT-8·v3, apartado 1.c) | Ley 15/2022, art. 23.1; sin fórmula |
| Arts. 19.b), 21.2.g), 21.4.b) y 26.3: medidas contra los sesgos y su detección | DT-1·v3, apartado 13 | Ley 15/2022, art. 23.1; sin fórmula |

**Reglas de uso de esta sección.**

1. **Un proyecto de ley no es origen normativo de necesidad** (Parte I, §3.3, reglas de cierre): no se escribe en la memoria que imponga nada, ni se cita en un pliego como norma aplicable.
2. **No pasa al extracto del Anexo XIX mientras sea proyecto.** Cuando la ley entre en vigor, y sólo en los pliegos de entidades sujetas, la fila que corresponda se añade al extracto con su precepto y su fecha de exigibilidad, como cualquier otra.
3. **Antes de cada uso se comprueba el estado de la tramitación**: aprobación, publicación en el «Boletín Oficial de la Comunidad de Madrid» y coincidencia del texto publicado con el del proyecto. Si difieren, manda el publicado y esta sección se rehace antes de aplicarla.


---

### ANEXO XII · TABLA DE CORRESPONDENCIAS v2 → v3

Función: que quien ya haya redactado pliegos con la versión 2 sepa exactamente qué cambia en cada cláusula que usó. **Los códigos se conservan cuando la cláusula subsiste, pero se escriben con versión** —DT-7·v3, ADM-2·v3— porque el contenido no es el mismo. Un pliego que cite «ADM-2» sin versión, publicado el v3, es un pliego ambiguo.

#### XII.1 Cláusula por cláusula

| v2 | v3 | Qué cambia | Por qué | Qué debe rectificar quien redactó con v2 |
|---|---|---|---|---|
| Parte I · Objeto: «clausulado tipo para su incorporación transversal… con independencia del área gestora» | Parte I §1 | El documento deja de ser de incorporación transversal y pasa a ser **catálogo de aplicación motivada** | Una incorporación transversal produce en cada expediente una justificación por remisión, es decir, estereotipada | Añadir al expediente el informe de necesidad y la ficha firmada. Sin ellos, las cláusulas están en el pliego sin fundamento propio |
| Parte I · Definiciones: «Reversibilidad» | Parte I §5 y DT-8·v3 | Se alinea con la delimitación del código entregable y se le añade contenido: inventario, plan, ensayo y dossier | Una reversibilidad sin plazo, sin inventario y sin ensayo se descubre inoperante el día que hace falta | Sustituir la definición y añadir la cláusula DT-8·v3 |
| Parte I · Definiciones: «Obsolescencia tecnológica» | Parte I §5, ADM-2·v3 | Se ancla al producto contratado y a sus **versiones sucesoras**, con la definición triple: continuidad funcional, sustitución en catálogo o ruta de migración del fabricante | La definición anterior remitía a la evolución del mercado: indeterminada e inexigible | Sustituir la definición y **suprimir la obsolescencia como causa autónoma de resolución** |
| Parte I · Definiciones: «Loop Engineering», «skills / harness / loops» | Anexo XIII (glosario) | Salen del articulado. Pasan al glosario, **sin efectos jurídicos** | Vocabulario sin definición normalizada: no sostiene criterio, penalidad ni resolución | Eliminarlos del PPT y del PCAP y del baremo |
| Parte I · Definiciones: red nominada | Parte I §5, DT-2·v3 | Se despoja de toda carga preferencial | La preferencia por una red determinada, motivada en razones territoriales, es el patrón que la doctrina de arraigo territorial rechaza | Eliminar la preferencia y toda mención excluyente |
| Parte I · Marco normativo (lista única, con un protocolo entre las normas) | Parte I §4, en tres bloques | Se separan normas de aplicación obligatoria, referencias técnicas del estado del arte **no normativas** y anexo de vigencia | Un protocolo de gobernanza privada no es norma en el sentido del art. 125 LCSP. Citarlo entre las normas es lo primero que subraya el abogado de un licitador | Reordenar el marco normativo del PPT y retirar el protocolo de la lista de normas |
| *(Inexistente en v2)* | **DT-0·v3** | **Nueva**: régimen de equivalencia, definición, prueba en la oferta, motivación del rechazo y excepción de los servicios comunes | Sin definición ni trámite, el rechazo de un equivalente es discrecional y la aceptación, arbitraria | Incorporarla. Es la cláusula que sostiene todas las demás referencias técnicas del pliego |
| **DT-1** IA, IA generativa y agentes | **DT-1·v3** | Se suprime la facultad de requerir lo «necesario **o conveniente**»; se añade el reparto de papeles proveedor / responsable del despliegue y el bloque de decisiones automatizadas | La facultad abierta es obligación de contenido indeterminado. Y v2 trasladaba al adjudicatario obligaciones que corresponden al Ayuntamiento y son indelegables | Sustituir el texto entero |
| **DT-2** Blockchain/DLT e integración con red nominada | **DT-2·v3** Capa de confianza · **NO APLICA por defecto** | Se elimina la preferencia, la motivación territorial y el inciso «salvo justificación motivada en el expediente». Se reformula por capacidades funcionales | El inciso permitía a cualquier ayuntamiento convertir la cláusula en excluyente, y basta uno para marcar el modelo entero | Marcarla NO APLICA salvo necesidad acreditada, y **suprimir el criterio del baremo que la puntuaba** |
| **DT-3** Preparación cuántica y post-cuántica | **DT-3·v3** · **NO APLICA por defecto** | Sale del baremo. Queda como requisito funcional activable, con prelación de normas europeas e internacionales | Puntuar preparación cuántica en un contrato ordinario es exigencia sin necesidad | Marcarla NO APLICA y suprimir su criterio del baremo |
| **DT-4** Automatización, RPA, hiperautomatización y Loop Engineering | **DT-4·v3** | Se sustituye el vocabulario por **lista cerrada y numerada de procesos** publicada en el PPT | Inverificable en procedimiento contradictorio | Sustituir el texto y publicar la lista de procesos |
| **DT-5** Interoperabilidad, APIs abiertas y soberanía del dato | **DT-5·v3** + **DT-8·v3** | Se corrige el «o equivalente» aplicado a los servicios comunes de obligada utilización; el guion de reversibilidad se extrae a DT-8·v3 | Añadir «o equivalente» a un servicio de obligada utilización **debilita** la exigencia | Corregir la excepción y trasladar el guion de reversibilidad |
| **DT-6** Seguridad (ENS **Nivel Alto**) | **DT-6·v3** Seguridad conforme al ENS **en la categoría que corresponda** | Cambia la rúbrica y se exige consignar y **justificar en la memoria** la categoría del anexo I del RD 311/2022 antes de aprobar el pliego | Es el supuesto exacto de la Res. TACP Madrid 383/2024, que anuló los pliegos de un ayuntamiento por exigir el nivel alto sin justificación | **Prioridad máxima.** Cambiar la rúbrica, consignar la categoría y justificarla en la memoria del expediente |
| **DT-7** Servidor [protocolo] por cada plataforma y ERP | **DT-7·v3** Interfaz normalizada de acceso programático para agentes | Obligación formulada por función; ámbito modulado a los módulos del catálogo; se suprime el inciso que remitía a mayor puntuación | Obligación definida por el nombre de un protocolo privado, sin equivalentes, y con ámbito universal desvinculado del objeto | Sustituir el texto entero, acotar el ámbito y suprimir el inciso de puntuación |
| *(Inexistente en v2)* | **DT-8·v3** | **Nueva**: reversibilidad con inventario de componentes, licencia transitoria, plan, ensayo real y dossier reutilizable | Es la cláusula con más valor económico real y la que v2 dejaba en una promesa | Incorporarla |
| *(Inexistente en v2)* | **DT-9·v3** | **Nueva**: exigencias tecnológicas determinadas del ejercicio, con remisión al catálogo transcrito | Sustituye la obligación abierta de evolución por una obligación determinada, valorable y exigible | Incorporarla y transcribir el catálogo en el PPT |
| **ADM-1** Solvencia y certificaciones | **ADM-1·v3** | La norma de gobernanza de IA **sale del baremo** y vive aquí: solvencia sólo en contratos armonizados, o —preferente— condición especial de ejecución con compromiso de obtención. Designación con año y «o equivalente» | Puntuar una certificación valora una característica de la empresa, no de la prestación | Retirar la certificación del baremo y reubicarla |
| **ADM-2** CEE: compromiso de evolución tecnológica continua | **ADM-2·v3** | Se suprimen «**o convenientes**» y «las tecnologías que el Ayuntamiento determine»; alcance **cerrado al catálogo**; hechos desencadenantes tasados; acreditación por medios tasados | Obligación de contenido indeterminado: el licitador no puede valorarla y el Ayuntamiento no puede exigirla | Sustituir el texto entero |
| **ADM-3** Plazo de adaptación (≤12 meses) y Plan Anual | **ADM-3·v3** | Se suprimen «dentro del **alcance razonable**» y «salvo que se fije motivadamente un plazo inferior». Se añade la bolsa de servicios evolutivos con anclaje en el art. 308.3 LCSP y precio por unidades de actividad | Dos conceptos indeterminados en la cláusula que sostiene la penalidad | Sustituir el texto. **Y comprobar en qué pliego está**: si el requerimiento de adaptación quedó en el PPT, trasladarlo al PCAP |
| **ADM-4** Seguimiento, Comisión y auditoría anual | **ADM-4·v3** | Se conserva y se le añade **valor probatorio**: sus actas son medio tasado de acreditación y fechan los hitos que pueden ser esenciales | Sin valor probatorio, la Comisión es una reunión | Añadir el apartado de valor probatorio y la periodicidad |
| **ADM-5** Penalidades | **ADM-5·v3** | Cuadro tipificado por **hechos verificables**. Se suprime la penalidad por «falta de la demostración exigida». Se conservan los límites del art. 192.1 | La demostración es fase de licitación, no de ejecución | Suprimir esa fila y depurar el cuadro con la tabla de dependencias |
| **ADM-6** Obligaciones esenciales y resolución | **ADM-6·v3** | Se dejan de calificar conceptos y se califican **incumplimientos tasados**, en lista cerrada, con el bloque *ex lege* **condicionado** a que concurran sus supuestos, y con cláusula de cierre redactada como «ninguna otra de las obligaciones incorporadas en virtud del catálogo [denominación y versión]…», con identificación expresa del catálogo y no con la fórmula «de este clausulado» | El art. 211.1.f).2.º exige enumeración precisa, clara e inequívoca y declara inadmisibles las cláusulas de tipo general | Sustituir el texto entero. **Cuidado con la cláusula de cierre**: copiada literalmente al PCAP afectaría a otras obligaciones esenciales del pliego ajenas a este catálogo |
| **ADM-6** · párrafo «Obsolescencia tecnológica» como causa de resolución | Suprimido | La resolución opera sobre incumplimientos tasados, previa audiencia y requerimiento, y sólo cuando el perjuicio de resolver no supere el de mantener el contrato | La resolución no es una penalidad, y la obsolescencia así definida no es un hecho verificable | Suprimir el párrafo |
| **ADM-7** Criterios de adjudicación y baremo Deep Tech (100 puntos) | **ADM-7·v3** | Regla de separación de instrumentos; supresión de la categoría «Mixto»; supresión de toda puntuación de la tenencia previa; baremo **con el precio y los criterios funcionales dentro**; tres variantes según el procedimiento | Un baremo de 100 puntos en el que ningún punto valora la prestación es indefendible; y «Mixto» no existe en la ley | **Rehacer el baremo entero.** No es un ajuste de pesos |
| **ADM-8** Propiedad intelectual, reversibilidad y no dependencia | **ADM-8·v3** (+ DT-8·v3) | Cesión con tiempo, ámbito territorial y modalidades; código fuente **y objeto**; reserva de derechos morales; licencia mínima supletoria dimensionada para el uso municipal; reutilización limitada a los elementos de titularidad municipal, salvo pacto expreso sobre el producto base; delimitación de lo que no se cede | Sin esas menciones la cesión queda limitada a cinco años y al territorio de la cesión (art. 43.2 TRLPI), y no queda garantizado el uso municipal durante la vigencia y la reversión | Sustituir el párrafo primero y añadir la delimitación |
| **ADM-9** Demostración de capacidades a fecha de licitación | **ADM-9·v3** Verificación mediante demostración funcional | Cambia el objeto y el efecto: de «enséñeme lo que tiene» a comprobar la exactitud de lo declarado por escrito. **No reparte puntos**: sólo confirma o retira los ya asignados a la memoria técnica. Momento procedimental imperativo, relación cerrada y numerada de elementos verificables publicada, acta detallada con las columnas «declarado / acreditado / no acreditado / evidencia observada» | Valorar «capacidades disponibles a fecha de licitación» es puntuar la tenencia previa; y una demostración sin momento fijado permite alterarlo una vez conocidas las ofertas | Sustituir el texto, publicar el caso y la relación de elementos verificables, y fijar el momento en el PCAP. **Un criterio cuyo contenido sea el resultado de la sesión, cualquiera que sea su peso, no es admisible** |
| **ADM-10** Plan de Actualización y compromiso anti-obsolescencia | **ADM-10·v3 · Plan Anual de Evolución Tecnológica** | Cambia la rúbrica —el instrumento se llama igual en todo el documento— y queda **degradada**: deja de ser fuente autónoma de obligaciones esenciales. Sólo los hitos aprobados expresamente y con fecha cierta en acta lo son | Calificar como esencial el cumplimiento de un plan redactado por el propio adjudicatario es el caso de manual de cláusula de tipo general | Sustituir el texto y retirar la calificación de esencial |
| *(Inexistente en v2)* | **ADM-11·v3** | **Nueva**: depósito de código con disparadores objetivos de servicio, verificación técnica de cada depósito, licencia condicionada y coste en el presupuesto base | La continuidad del servicio no se garantiza con una promesa de entrega | Incorporarla si concurre el umbral |
| *(Inexistente en v2)* | **ADM-12·v3** | **Nueva**: acceso de los órganos de control a los datos de ejecución | Responde a la necesidad de origen normativo mejor documentada del catálogo (Parte IV, §M1.4); en cada expediente la declara por escrito el órgano interventor. Omitirla consolida durante toda la vida del contrato una limitación del control interno | Incorporarla |
| *(Inexistente en v2)* | **ADM-13·v3** | **Nueva**: uso de sistemas de IA de terceros sobre información municipal, con declaración en la oferta y autorización previa de altas | El riesgo no es de anulación: es de brecha | Incorporarla |
| *(Inexistente en v2)* | **ADM-14·v3** | **Nueva**: modificación prevista con lista cerrada y cuantificada, y cláusula de valor estimado. **Por defecto no se incorpora** | Cada euro reservado sube el valor estimado y puede cruzar un umbral | Sólo si se decide incorporarla, con recálculo del valor estimado |
| Anexo I v2 · Declaración responsable | **Anexo VII** | Se eliminan el compromiso definido por el nombre de un protocolo, la aceptación en bloque de la obsolescencia como causa de resolución y el compromiso de demostración. Se añaden la declaración de sistemas de IA y las casillas de supresión | Reproducía en la declaración los defectos ya corregidos en el articulado | Sustituir el modelo |
| Anexo II v2 · Plan Anual de Evolución | **Anexo XIV**, con el régimen de ADM-10·v3 | Se añade la casilla que faltaba: **qué hitos se someten a aprobación expresa** —los únicos que pueden ser esenciales— | Sin esa casilla, o todo el plan es esencial o no lo es nada | Añadir la casilla |
| Anexo III v2 · Certificaciones y equivalencias | **Anexo XXI**, con el régimen de ADM-1·v3 | Designaciones **con año expreso y regla de referencia estática**, sin la fórmula «o norma que la sustituya», y con mención expresa a otras pruebas de medidas equivalentes (art. 93.2 LCSP) | Una designación sin año, o una remisión a la norma que la sustituya, es referencia dinámica: el contenido de la obligación puede cambiar después de ofertar | Actualizar el cuadro y suprimir la fórmula dinámica también de la declaración responsable |
| Anexo IV v2 · Ficha de Aplicabilidad (casillas) | **Anexo II** | Pasa de tabla de casillas a **formulario de motivación con doble vía de firma y regla de cierre** | Una casilla marcada no es una justificación | Sustituir la ficha y firmarla |
| Anexo V v2 · Glosario Deep Tech | **Anexo XIII** | Se mantiene como glosario **descriptivo, sin efectos jurídicos**, y recoge los términos expulsados del articulado | Un glosario no puede crear obligaciones por la puerta de atrás | Sustituirlo y añadir la advertencia de ausencia de efectos |
| Parte IV v2 · Memoria justificativa | Parte IV v3 | Se reescribe entera: armazón de la necesidad, encaje legal con precepto en todas las filas, neutralidad **acreditada** y no afirmada, conflicto de interés y estado real de la doctrina | La memoria es lo primero que lee el recurrente | Rehacerla |
| *(Inexistente en v2)* | Partes 0, V, VI y anexos I a XXV | Resumen para legos, circuito del expediente, ejemplo completo trabajado e instrumentos | Es lo que un habilitado nacional busca y no encontraba | Incorporarlos al circuito de trabajo. **La versión 4.0 entrega aparte pliegos de referencia por perfil —SaaS, mantenimiento de aplicaciones, desarrollo a medida y plataformas críticas—, que no son pliegos-tipo: son referencias que ningún órgano ha aprobado. El ejemplo trabajado sobre un expediente de una administración concreta sigue sin entregarse: véase la nota de alcance que cierra esta parte** |

#### XII.2 Dónde ha aterrizado cada una de las ocho modificaciones propuestas en agosto de 2026

| Modificación | Objeto | Dónde está en v3 | Estado |
|---|---|---|---|
| 1 | Delimitar el código objeto de entrega, excluyendo el del producto base | DT-8·v3 | **Incorporada**, y completada con el Inventario de Componentes: sin él la delimitación sigue siendo indeterminada |
| 2 | Alinear la definición de reversibilidad con esa delimitación | Parte I §5 y DT-8·v3 | **Incorporada**, y completada con la licencia transitoria del producto base: devolver sólo el código propio deja un sistema que no arranca |
| 3 | Incluir expresamente los algoritmos y la lógica de negocio | ADM-8·v3 | **Incorporada y corregida**: sin mención de tiempo, ámbito territorial y modalidades, la cesión quedaría limitada a cinco años y al territorio de la cesión |
| 4 | Coherencia de la cláusula técnica de titularidad | DT-1·v3 | **Incorporada** |
| 5 | Depósito de código y continuidad ante insolvencia | ADM-11·v3 | **Incorporada y reescrita**: el disparador basado en la declaración de concurso se sustituye por hechos objetivos de servicio, y se añaden verificación técnica, licencia condicionada y coste en el presupuesto base |
| 6 | Definición de obsolescencia anclada al producto y sus versiones sucesoras | Parte I §5 y ADM-2·v3 | **Incorporada y elevada**: pasa a ser el criterio principal, no un complemento |
| 7 | Obligación de entrega de versiones sucesoras | ADM-2·v3 y ADM-10·v3 | **Incorporada**, con la advertencia de que garantiza el acceso a las versiones, no la magnitud de la evolución: eso es lo que sostiene el catálogo determinado |
| 8 | Coherencia del régimen de resolución por obsolescencia | ADM-6·v3 | **Incorporada por supresión**: la obsolescencia deja de ser causa autónoma de resolución y opera por los incumplimientos tasados |

---

### ANEXO XIII · GLOSARIO

**Cómo usar este glosario.** Tiene dos bloques. El primero define **las palabras de contratación**, para quien no es del oficio: son las que aparecen desde la primera página y las que un lector externo no tiene por qué conocer. El segundo define **las palabras de tecnología**. Quien lea el documento sin experiencia en contratación pública debería empezar por aquí, y no llegar al glosario al final.

**Advertencia previa, que forma parte del anexo.** Este glosario es **descriptivo y carece de efectos jurídicos**. No define el alcance de ninguna prestación, no crea obligaciones, no puede invocarse para interpretar una cláusula en contra de su literalidad y **ningún término aquí recogido puede emplearse en un pliego para generar una obligación, una penalidad o un criterio de adjudicación**. Los términos que en versiones anteriores figuraban en el articulado y que carecen de definición normalizada se recogen aquí precisamente para dejar constancia de que no la tienen.

#### XIII.1 Palabras de contratación, para quien no es del oficio

**Pliego.** Documento que fija las reglas de un contrato público antes de licitarlo. Hay dos: el **pliego de cláusulas administrativas particulares (PCAP)**, que contiene las reglas jurídicas y económicas —quién puede presentarse, cómo se valoran las ofertas, qué obligaciones asume el contratista, qué penalidades hay—, y el **pliego de prescripciones técnicas (PPT)**, que describe qué hay que entregar y con qué características. Una vez publicados, obligan al Ayuntamiento tanto como al contratista.

**Licitación.** El procedimiento por el que una administración invita públicamente a las empresas a presentar ofertas y elige una conforme a reglas conocidas de antemano.

**Licitador.** La empresa que presenta una oferta. **Adjudicatario**, la que resulta elegida. **Contratista**, la que ya ha firmado el contrato.

**Órgano de contratación.** El órgano municipal competente para aprobar el expediente, los pliegos y la adjudicación. No es una persona técnica: es quien firma y responde.

**Expediente.** El conjunto ordenado de documentos que preceden y justifican el contrato. Lo que no consta en él no existe a efectos de defensa: es la regla que explica la mitad de este catálogo.

**Memoria justificativa.** El documento del expediente donde se explica por qué se contrata, por qué con ese objeto y por qué con cada una de las exigencias que el pliego impone. Es el sitio donde se gana o se pierde un recurso.

**Fiscalización.** El control previo que ejerce la Intervención municipal sobre el gasto: comprueba que hay crédito, que el cálculo es correcto y que el expediente cumple los requisitos. Si formula reparos, el expediente se detiene hasta resolverlos.

**Perfil de contratante.** La sede electrónica donde cada administración publica sus licitaciones y su documentación. Publicar algo allí lo hace accesible a cualquiera, incluidos los competidores del adjudicatario.

**Recurso especial en materia de contratación.** La vía por la que una empresa puede impugnar los pliegos o la adjudicación ante un tribunal administrativo especializado, con plazos muy breves y sin coste de tasas. Sólo está disponible por encima de determinado valor estimado.

**Valor estimado.** El importe total que el contrato puede llegar a costar, incluidas prórrogas, bolsas y modificaciones previstas, sin IVA. No es el precio: es el techo que determina qué procedimiento cabe y si los pliegos son recurribles.

**Solvencia.** Los requisitos mínimos de capacidad —económica, técnica o profesional— que una empresa debe acreditar para poder presentarse. Se comprueba antes de valorar las ofertas y no puntúa.

**Criterio de adjudicación.** Cada uno de los elementos con los que se puntúan las ofertas y se decide cuál gana. Debe referirse a la prestación que se contrata, no a características de la empresa.

**Condición especial de ejecución.** Una obligación que el contratista asume durante la ejecución del contrato, no un requisito para presentarse ni un criterio que puntúe. Puede calificarse de **esencial**, y entonces su incumplimiento permite resolver el contrato.

**Prescripción técnica.** La exigencia mínima que la solución debe cumplir obligatoriamente. Se cumple o no se cumple; no puntúa.

#### XIII.2 Palabras de tecnología

**Agente de inteligencia artificial.** Sistema que persigue un objetivo encadenando llamadas a herramientas y a fuentes de datos, con capacidad de decidir el siguiente paso. En este documento nunca se le atribuyen efectos jurídicos: toda actuación con efecto jurídico o económico requiere validación humana previa.

**Agentización.** Expresión de uso comercial que designa la adaptación de una solución para poder ser operada por agentes. No tiene definición normalizada. Lo que este documento exige no es «agentizar», sino las capacidades concretas descritas en el Anexo V.

**Anclaje de evidencias.** Registro de una huella criptográfica de un documento o asiento en un soporte que permite a un tercero comprobar después que no ha sido alterado.

**Cadena de bloques y registros distribuidos.** Tecnologías de registro replicado entre varios participantes. En este documento nunca se exigen por su nombre: la exigencia, cuando existe, es la capacidad de verificación por tercero sin acceso privilegiado.

**Código fuente y código objeto.** El primero es el texto legible por una persona; el segundo, el resultado de su compilación. La distinción importa porque la entrega de uno sin el otro puede hacer inútil la entrega.

**Credencial verificable e identificador descentralizado.** Formatos de acreditación de atributos y de identidad que permiten su comprobación sin consultar al emisor.

**Criptoagilidad.** Capacidad de un sistema para sustituir sus algoritmos criptográficos sin rehacer la aplicación.

**Deep tech.** Rótulo de uso comercial con el que se agrupan las tecnologías nacidas de avances científicos o de ingeniería todavía poco maduros en el mercado. No tiene definición normalizada ni umbral que permita decir si una solución concreta lo es. Aparece en el título de este documento porque describe la materia de la que trata, y **no genera ninguna obligación**: lo que obliga es cada cláusula, por lo que el sistema debe hacer y por cómo se comprueba que lo hace.

**Depósito de código (*escrow*).** Entrega del código y de la documentación de despliegue a un tercero, que sólo los libera al beneficiario si se produce un hecho previsto en el contrato. La entrega física del código no confiere por sí sola derecho a reproducirlo: hace falta la licencia.

**Diccionario de datos.** Documento que describe qué significa cada campo, con qué tipo y con qué relaciones. Sin él, la exportación de datos es un fichero que nadie sabe leer.

**Entorno de pruebas.** Copia del sistema con datos ficticios o anonimizados, sobre la que se ejecutan las pruebas de aceptación sin afectar a la producción.

**Esquema Nacional de Seguridad y Esquema Nacional de Interoperabilidad.** Marcos reglamentarios españoles de seguridad e interoperabilidad de los sistemas del sector público.

**Formato abierto.** Formato cuya especificación es pública y de uso libre, de modo que los datos puedan leerse sin la herramienta que los generó.

**«Hiperautomatización», «Loop Engineering», «skills», «harness», «loops».** Términos del vocabulario comercial y técnico del sector. **Carecen de definición normalizada y de método de verificación en un procedimiento contradictorio.** Se recogen aquí para dejar constancia de que no pueden emplearse en el articulado de un pliego, ni como obligación, ni como criterio, ni como tipo de incumplimiento.

**Interfaz normalizada de acceso programático.** Punto de entrada documentado que permite a un programa externo consultar datos o solicitar operaciones a la solución, con control de acceso y registro. Es lo que este documento exige; el protocolo concreto es indiferente.

**Model Context Protocol.** Especificación abierta para la conexión entre asistentes de inteligencia artificial y fuentes de datos y herramientas, bajo gobernanza de una fundación del ecosistema del software libre desde diciembre de 2025. Se menciona **exclusivamente como referencia ilustrativa del estado del arte**: no es norma en el sentido de la legislación de contratos, no puede operar como medio de presunción de conformidad y no puede exigirse por su nombre.

**Modelo de lenguaje y sistema de IA generativa.** Sistemas que producen texto, imagen, sonido o código a partir de una instrucción. Su uso sobre información municipal está sujeto a la cláusula ADM-13·v3.

**Responsable del despliegue y proveedor.** Papeles definidos en la normativa europea de inteligencia artificial. El Ayuntamiento actúa normalmente como responsable del despliegue; el adjudicatario, como proveedor o distribuidor. Las obligaciones del primero son indelegables, y lo que el contrato exige al segundo es que entregue los medios para poder cumplirlas.

**Reversibilidad y dependencia tecnológica.** Capacidad de recuperar datos, configuraciones y desarrollos y de continuar el servicio con otro proveedor. La dependencia no es ilícita: lo es la injustificada, y se combate con inventario, formato abierto, licencia suficiente y ensayo previo.

**Sistema de alto riesgo.** Categoría de la normativa europea de inteligencia artificial que activa un conjunto de requisitos reforzados, con el calendario de exigibilidad que recoge el Anexo XI.

**Sistema de gestión de la inteligencia artificial.** Conjunto documentado de políticas, funciones y controles con los que una organización gobierna el uso de la IA. Su certificación acredita el sistema de gestión; **no** acredita la conformidad de un producto con la normativa europea de inteligencia artificial.

**Solución equivalente.** La que cumple las mismas funciones exigidas, interopera con el resto del entorno sin pérdida de funcionalidad ni de calidad de servicio y no comporta sobrecoste ni sobreesfuerzo desproporcionado de implantación. Su prueba corresponde al licitador y se aporta con la oferta; su apreciación corresponde al órgano de contratación, motivadamente y por escrito.

**Trazabilidad.** Propiedad de un sistema que permite reconstruir quién hizo qué, cuándo y sobre qué datos.

**Versión sucesora.** La que presenta continuidad funcional con el producto contratado, lo sustituye en el catálogo del fabricante o cuenta con una ruta de migración ofrecida por el propio fabricante. La definición importa porque es lo que hace exigible la entrega sin discusión sobre la denominación comercial.

---

### ANEXO XIV · MODELO DE PLAN ANUAL DE EVOLUCIÓN TECNOLÓGICA

Función: dar formato cerrado al Plan que exige la cláusula ADM-10·v3, y en particular a **la casilla de hitos sometidos a aprobación expresa**. De esa casilla depende que unos hitos sean obligación esencial y el resto no. Sin ella, o se califica como esencial el cumplimiento íntegro de un plan redactado por el propio adjudicatario —cláusula de tipo general, prohibida por el artículo 211.1.f).2.º de la LCSP—, o no lo es nada y la cláusula no protege.

**Instrucciones de uso, previas al modelo.** (1) El modelo se incorpora como anexo del PCAP y el pliego exige su empleo: un Plan presentado en formato libre no permite localizar los hitos que se someten a aprobación. (2) Las filas del apartado 1 se preimprimen por el Ayuntamiento con las exigencias del Catálogo de Exigencias Tecnológicas efectivamente incorporadas a ese contrato; **las filas huérfanas se borran**. (3) El apartado 4 es el único que produce obligaciones esenciales, y sólo tras la aprobación expresa del apartado 6. (4) El Plan **no crea obligaciones distintas** de las del Catálogo transcrito y del pliego de prescripciones técnicas: si una fila lo hace, se suprime antes de aprobar. (5) El apartado 5 se suprime si el contrato no incorpora bolsa de servicios evolutivos.

:::pliego
**PLAN ANUAL DE EVOLUCIÓN TECNOLÓGICA**
*(Cláusula [ADM-10] del pliego de cláusulas administrativas particulares)*

Contrato: ……………………………… · Expediente n.º: ………………………
Adjudicatario: ……………………………… · NIF: ………………
Anualidad a que se refiere: …… (de …… a ……) · N.º de Plan: ……
Versión del Catálogo de Exigencias Tecnológicas incorporada al contrato: ……, de fecha ……………
Fecha de presentación: …… / …… / …… · Plazo del pliego: **[X; se recomienda 60] días naturales** desde la formalización o desde el inicio de la anualidad.

**1. Calendario de las exigencias del Catálogo incorporadas a este contrato.**
Una fila por exigencia. La fecha comprometida no puede exceder del plazo fijado en el propio Catálogo transcrito en el pliego.

| Exigencia | Criterio de aceptación pendiente | Fecha comprometida | Estado a la fecha del Plan | Acta de aceptación (fecha y n.º) |
|---|---|---|---|---|
| ET-1 · [denominación] | | | ☐ No iniciada ☐ En curso ☐ Aceptada | |
| ET-2 · [denominación] | | | ☐ No iniciada ☐ En curso ☐ Aceptada | |
| ET-3 · [denominación] | | | ☐ No iniciada ☐ En curso ☐ Aceptada | |

**2. Versiones sucesoras.**
Compromiso de poner a disposición del Ayuntamiento, sin coste adicional durante la vigencia del contrato y de sus prórrogas, las versiones sucesoras del producto contratado, en los términos de la cláusula [ADM-10], apartado 2, letra b).

| Versión sucesora publicada en el período | Fecha de disponibilidad general | Fecha de comunicación al Ayuntamiento | Criterio que la acredita (continuidad funcional / sustitución en catálogo / ruta de migración) | Documento del fabricante que lo prueba |
|---|---|---|---|---|
| | | | | |

☐ No se ha publicado versión sucesora alguna en el período. *(Marcada esta casilla, no hay obligación que cumplir ni consecuencia que imponer.)*

**3. Versiones en soporte y fin de soporte declarado.**

| Componente | Versión desplegada en el Ayuntamiento | ¿En soporte del fabricante? | Fecha de fin de soporte declarada | Actuación prevista y fecha |
|---|---|---|---|---|
| | | ☐ Sí ☐ No | | |

**4. HITOS QUE SE SOMETEN A APROBACIÓN EXPRESA DEL ÓRGANO DE CONTRATACIÓN.**

*Advertencia que forma parte del modelo: **sólo los hitos consignados en este apartado y aprobados expresamente, con fecha cierta, en el acta de la Comisión de Seguimiento, tienen carácter de obligación contractual esencial** a los efectos del artículo 211.1.f) de la LCSP, en los términos de la cláusula [ADM-6]. Ningún otro contenido de este Plan lo tiene. Un hito no consignado aquí no puede ser calificado como esencial después.*

| N.º | Hito propuesto, descrito por su resultado verificable | Exigencia del Catálogo o cláusula de la que deriva | Fecha cierta propuesta | Cómo se comprobará su cumplimiento | Se somete a aprobación expresa |
|---|---|---|---|---|---|
| 1 | | | …… / …… / …… | | ☐ Sí ☐ No |
| 2 | | | …… / …… / …… | | ☐ Sí ☐ No |
| 3 | | | …… / …… / …… | | ☐ Sí ☐ No |

☐ **El adjudicatario no somete ningún hito a aprobación expresa en esta anualidad.** *(Marcada esta casilla, ninguna obligación derivada de este Plan tendrá carácter esencial en la anualidad de referencia.)*

**5. Consumo de la bolsa de servicios evolutivos.** *[Sólo si el contrato incorpora la bolsa de la cláusula [ADM-3].]*

| Perfil profesional del Cuadro de Precios Unitarios | Clase de petición (apartado 2 de la cláusula [ADM-3]) | Horas consumidas en el período | Importe | Encargo escrito que las ampara (fecha y n.º) | Saldo restante |
|---|---|---|---|---|---|
| | | | | | |
| **TOTAL** | | | | | |

*La bolsa se consume sólo por horas y perfil: ninguna unidad de despliegue se imputa a ella (Anexo X, X.3).*

**6. Indicadores de seguimiento.**

| Indicador | Método de medición | Fuente del dato | Valor comprometido | Valor alcanzado |
|---|---|---|---|---|
| | | | | |

**7. Declaración de límite.** El adjudicatario declara que ninguna previsión de este Plan comprende prestaciones no contenidas en el Catálogo de Exigencias Tecnológicas incorporado a este contrato ni en el pliego de prescripciones técnicas.

Firma del adjudicatario · Fecha

---

**DILIGENCIA DE TRAMITACIÓN** *(no la cumplimenta el adjudicatario)*

| Trámite | Fecha | Documento | Firma |
|---|---|---|---|
| Recepción del Plan | | Registro de entrada n.º …… | |
| Informe del responsable del contrato (conformidad o reparos) | | | |
| Aprobación expresa de hitos por el órgano de contratación | | Acta de la Comisión de Seguimiento n.º …… | |
| Notificación al adjudicatario de los hitos aprobados | | | |

**Hitos efectivamente aprobados, con su fecha cierta** *(se transcriben desde el acta; los no transcritos no son esenciales)*:

| N.º del apartado 4 | Hito aprobado | Fecha cierta aprobada |
|---|---|---|
| | | |
:::

**Nota al redactor.** El plazo de presentación del Plan y el de su actualización deben coincidir con los de la cláusula [ADM-10] del PCAP y con la fila correspondiente del cuadro de penalidades. Si el pliego fija un plazo y este modelo otro, el contratista alegará la contradicción en el primer expediente de penalidad, y la alegación prosperará.

---

### ANEXO XV · MODELO DE RESOLUCIÓN DE APROBACIÓN ANUAL DEL CATÁLOGO DE EXIGENCIAS TECNOLÓGICAS (ANEXO V)

Función: hacer que la revisión anual ocurra. La separación entre un articulado estable y un catálogo de exigencias que se revisa cada año es el argumento central de este documento; sin un acto administrativo que la ejecute, esa separación es una declaración de intenciones. Este modelo es el acto. Se dicta por el órgano designado en el punto Cuarto del acuerdo del Anexo VIII, y su omisión tiene una consecuencia que conviene decir por escrito: **sin resolución de aprobación en plazo, el Catálogo vigente sigue siendo el del ejercicio anterior**, y así se hará constar en los expedientes que se tramiten.

**Qué tiene que constar en el expediente antes de dictarla** (los cuatro documentos del procedimiento de revisión del Anexo V, apartado V.A.4): (a) propuesta de actualización de los servicios técnicos; (b) contraste de mercado documentado, por tipología de solución; (c) informe del órgano al que corresponda el informe jurídico preceptivo; (d) acreditación de la competencia del órgano que resuelve, por remisión al acuerdo del Anexo VIII.

---- INICIO DEL MODELO ----

**RESOLUCIÓN DE [ÓRGANO DESIGNADO EN EL PUNTO CUARTO DEL ACUERDO DE …………………] POR LA QUE SE APRUEBA EL CATÁLOGO DE EXIGENCIAS TECNOLÓGICAS DETERMINADAS DEL EJERCICIO [ ], VERSIÓN [ ]**

**ANTECEDENTES DE HECHO**

**Primero.** Por acuerdo de [órgano de gobierno], de fecha ……………, punto ……, se aprobaron el Plan Municipal de Modernización Tecnológica, el Catálogo de Cláusulas de Inteligencia Artificial y Deep Tech y el Catálogo de Exigencias Tecnológicas Determinadas del ejercicio [ ], versión [ ], designándose a este órgano como competente para aprobar su revisión anual.

**Segundo.** Con fecha …………… los servicios técnicos municipales han formulado propuesta de actualización del Catálogo, en la que se identifican las capacidades que pasan a ser exigibles, las que se mantienen sin cambio y las que se suprimen por haberse generalizado en el mercado o haber quedado superadas.

**Tercero.** Consta en el expediente el **contraste de mercado** por tipología de solución, de fecha ……………, [realizado mediante consulta preliminar del mercado publicada conforme al artículo 115 de la Ley 9/2017, cuyo informe motivado obra en el expediente y se publica con la misma publicidad que los pliegos / realizado mediante ……………]. Del contraste resulta que cada exigencia que se incorpora puede ser cumplida, en el plazo previsto, por un número de operadores no inferior a **[X; se recomienda 3]**.

**Cuarto.** Consta informe del órgano al que corresponde el informe jurídico preceptivo, de fecha ……………, de sentido [favorable / favorable con observaciones, que han sido incorporadas].

**FUNDAMENTOS DE DERECHO**

**I.** El artículo 116.4.e) de la Ley 9/2017 exige que la justificación de cada exigencia incorporada a un pliego guarde relación directa, clara y proporcional con el objeto del contrato. La aprobación anual y centralizada de las exigencias tecnológicas, con contraste de mercado documentado, es el instrumento que permite que esa justificación exista antes de cada expediente y no se construya en sede de recurso.

**II.** El artículo 126 de la misma ley obliga a que las prescripciones técnicas no creen obstáculos injustificados a la competencia y a que toda referencia a una norma técnica se acompañe de la mención «o equivalente». Las exigencias que se aprueban están formuladas por función y no por producto, protocolo o red, y remiten al régimen de equivalencia de la cláusula DT-0·v3 del Catálogo de Cláusulas.

**III.** La competencia de este órgano resulta del punto Cuarto del acuerdo citado en el antecedente primero.

**RESUELVO**

**Primero. Aprobar el Catálogo de Exigencias Tecnológicas Determinadas del ejercicio [ ], versión [ ]**, que se acompaña como anexo a esta resolución, integrado por las exigencias siguientes:

| Código | Denominación | Situación respecto de la versión anterior | Plazo de entrega | Motivo |
|---|---|---|---|---|
| ET-1 | | ☐ Se mantiene ☐ Se modifica ☐ Nueva ☐ Se suprime | **[X; se recomienda 12] meses** | |
| ET-2 | | ☐ Se mantiene ☐ Se modifica ☐ Nueva ☐ Se suprime | **[X; se recomienda 12] meses** | |
| ET-3 | | ☐ Se mantiene ☐ Se modifica ☐ Nueva ☐ Se suprime | **[X; se recomienda 12] meses** | |

**Segundo. Declarar expresamente el ámbito temporal de la aprobación.** El Catálogo aprobado se aplica a las licitaciones que se convoquen **a partir de la publicación de esta resolución en el perfil de contratante**. **No produce efecto alguno sobre los contratos ya formalizados ni sobre las licitaciones convocadas con anterioridad**, a los que sólo resulta exigible el Catálogo vigente en el momento de su licitación. Los pliegos de las licitaciones que lo incorporen citarán su versión y su fecha.

**Tercero. Ordenar su transcripción física en los pliegos.** El Catálogo se transcribirá físicamente en el pliego de prescripciones técnicas de cada licitación que lo incorpore, recortado a los módulos del contrato, con su número de versión y su fecha. **No se incorporará por remisión.** En el pliego constará expresamente que las revisiones posteriores del Catálogo no afectan al contrato.

**Cuarto. Dejar constancia del contraste de mercado.** Se hace constar que ninguna exigencia se incorpora sin que el contraste acredite que puede ser cumplida por una pluralidad de operadores en el plazo previsto. Las exigencias que no superaron ese contraste, y que por ello **no** se incorporan en este ejercicio, son: …………………… . Se reconsiderarán en la revisión siguiente.

**Quinto. Ordenar la publicación** de esta resolución y del Catálogo aprobado en el perfil de contratante y en el portal de transparencia municipal, en formato reutilizable, con su número de versión y su fecha.

**Sexto. Dar traslado** a los servicios gestores, al órgano al que corresponde el informe jurídico preceptivo, a la Intervención General y a los responsables de los contratos en vigor, a los solos efectos de su conocimiento y con expresa indicación de que **no altera las obligaciones de los contratos ya formalizados**.

Lugar, fecha y firma.

---- FIN DEL MODELO ----

**Regla de cierre del anexo, que debe cumplirse aunque incomode.** Si al inicio de un ejercicio no se ha dictado esta resolución, no se aplica el Catálogo del ejercicio anterior «actualizado de hecho»: se aplica el del ejercicio anterior tal cual, con su versión y su fecha, y se hace constar en el expediente que la revisión no se produjo. Un catálogo que se dice anual y no se revisa produce pliegos que citan una versión que nadie aprobó.

---

### ANEXO XVI · POLÍTICA MUNICIPAL DE USO DE INTELIGENCIA ARTIFICIAL GENERATIVA POR EL PERSONAL

Función: cerrar la mitad municipal de la única objeción de seguridad que se planteó de forma concreta —si compromete la seguridad de un documento municipal procesarlo en una cuenta de inteligencia artificial que no es licencia del Ayuntamiento—. La cláusula ADM-13·v3 resuelve la mitad del contratista. Esta política resuelve la del Ayuntamiento, y su existencia es lo que hace defendible la exigencia: **un pliego que impone al contratista un régimen de uso de IA que el propio Ayuntamiento no se aplica es un pliego desproporcionado y así se alegará.**

**Naturaleza y aprobación.** No es cláusula de pliego y no se copia a ninguno. Es un acto propio del Ayuntamiento, aprobado en el punto Séptimo del acuerdo del Anexo VIII o por resolución posterior, que se comunica al adjudicatario conforme al apartado 7 de ADM-13·v3.

**Referencia de contenido, no normativa.** La **Política general para el uso de IA generativa en procesos administrativos** publicada por la Agencia Española de Protección de Datos el **27 de noviembre de 2025** (<https://www.aepd.es/documento/politica-iag-aepd.pdf>), primera de este tipo en el sector público español. De ella proceden el principio de precaución del apartado 4, las reglas de uso del apartado 5 y la lista de aspectos a evaluar antes de contratar del apartado 8. Se cita como buena práctica publicada por el regulador, **no como norma**: no impone deber alguno a este Ayuntamiento y su seguimiento no produce presunción de conformidad con norma alguna.

---- INICIO DEL MODELO ----

**POLÍTICA MUNICIPAL DE USO DE SISTEMAS DE INTELIGENCIA ARTIFICIAL GENERATIVA POR EL PERSONAL DEL AYUNTAMIENTO**

Versión **1.0** · Fecha de aprobación …… / …… / …… · Órgano aprobante ………………………
Revisión: **anual**, junto con el Catálogo de Exigencias Tecnológicas.

**1. Objeto y ámbito.** Esta política regula el uso de sistemas de inteligencia artificial generativa por el personal al servicio del Ayuntamiento en el ejercicio de sus funciones. Se aplica a todo el personal, cualquiera que sea su vínculo, y a quienes accedan a información municipal en virtud de encargo, encomienda o contrato, sin perjuicio de las obligaciones que a estos últimos imponga su propio contrato.

**2. Lo que esta política no hace.** No regula el uso que el personal haga de estas herramientas fuera del ejercicio de sus funciones y con información no municipal. No sustituye a la normativa de protección de datos, a la política de seguridad de la información del Ayuntamiento ni al Esquema Nacional de Seguridad: los complementa.

**3. Inventario de sistemas autorizados.** El [servicio de informática] mantiene y publica en la intranet municipal un **inventario de sistemas de inteligencia artificial generativa autorizados**, con indicación, para cada uno, de: proveedor; finalidad para la que se autoriza; niveles de información admitidos conforme al apartado 4; ubicación de tratamiento; plazo de retención; y fecha de alta.

**Regla primera y principal: no se utilizará ningún sistema de inteligencia artificial generativa que no figure en el inventario.** El alta de un sistema nuevo se solicita por escrito y la autoriza [puesto], previa evaluación conforme al apartado 8.

**4. Clasificación de la información y principio de precaución.** Se distinguen tres niveles, coincidentes con los de la cláusula ADM-13·v3 para que la regla sea la misma dentro y fuera:

| Nivel | Qué comprende | Regla |
|---|---|---|
| **1 · Restringida** | Datos personales; expedientes en tramitación; documentación contractual no publicada; informes internos; datos de entornos de producción; y toda información clasificada como de acceso restringido por la política de seguridad municipal | **Sólo en sistemas internos o desplegados ad hoc bajo control municipal.** Su uso en sistemas externos exige autorización expresa, previa y escrita, y evidencias de cumplimiento aportadas por el proveedor, más allá de sus manifestaciones o compromisos contractuales |
| **2 · Interna no restringida** | Documentación de trabajo sin datos personales ni contenido reservado: borradores, guiones, esquemas, textos de estudio | Admisible en sistemas del inventario, con las reglas del apartado 5 |
| **3 · Pública** | Información ya publicada por el Ayuntamiento | Sin restricción, con las reglas del apartado 5 |

**Principio de precaución.** En caso de duda sobre el nivel de una información, se aplica el régimen del nivel superior. La duda se resuelve consultando a [puesto], no por criterio individual.

**5. Reglas de uso para el personal.**

a) **Revisión humana.** Todo contenido generado se revisa por la persona usuaria antes de incorporarlo a un expediente, a un documento o a una comunicación. La responsabilidad del contenido es de quien lo firma, sin que su origen pueda invocarse como excusa.

b) **Doble revisión.** Cuando el contenido se dirija a un superior jerárquico o vaya a publicarse, se somete además a revisión interna por pares.

c) **Minimización.** Se reduce a lo estrictamente necesario la introducción, en sistemas externos, de información institucional sensible aunque no contenga datos personales —referencias institucionales, nombres vinculados a incidencias graves, documentos internos— cuando pueda perjudicar a la imagen o a la estrategia institucional propia o de terceros.

d) **Prohibición de decisión.** Ningún resultado generado por estos sistemas constituye por sí solo el fundamento de un acto administrativo. Toda propuesta de resolución la formula y la firma la persona competente. Cuando el Ayuntamiento acuerde una actuación administrativa automatizada, se estará a lo dispuesto en el artículo 41 de la Ley 40/2015.

e) **Trazabilidad del uso.** Cuando el resultado se incorpore a un expediente, se hace constar en él que se ha empleado un sistema de inteligencia artificial generativa, con indicación del sistema y de la fecha. La constancia no exime de la revisión de la letra a).

f) **Cuentas.** Se emplean exclusivamente las cuentas corporativas habilitadas. **No se utilizan cuentas personales del empleado ni cuentas de prueba, gratuitas o de evaluación, para tratar información municipal de cualquier nivel.**

g) **Registro.** Los sistemas del inventario que lo permitan mantendrán registro de las interacciones, conservado conforme a la política municipal de conservación y accesible para las funciones de control y de seguridad.

**6. Formación previa.** El uso de estos sistemas requiere haber completado la formación municipal correspondiente, con contenido mínimo sobre límites de la herramienta, protección de datos, clasificación de la información y responsabilidad del resultado. El registro de personas formadas lo mantiene [puesto]. Esta previsión da cumplimiento, en el lado municipal, a la medida de alfabetización en materia de inteligencia artificial del artículo 4 del Reglamento (UE) 2024/1689, en su redacción vigente, y sirve de base a la exigencia paralela que el pliego impone al contratista.

**7. Incidencias.** La introducción indebida de información de nivel 1 en un sistema externo, o el uso de un sistema no inventariado, se comunica de inmediato a [puesto] y al delegado de protección de datos. La comunicación temprana de una incidencia propia no agrava la responsabilidad; su ocultación, sí.

**8. Evaluación previa a la contratación o al alta de un sistema.** Antes de contratar una solución de inteligencia artificial generativa o de dar de alta un sistema en el inventario, se evalúan de forma previa y documentada, al menos:

☐ Tratamiento de metadatos y de telemetría.
☐ Declaración expresa del proveedor sobre si emplea, y en qué medida, el contenido de las conversaciones y de los archivos para mejorar sus servicios o entrenar sus modelos.
☐ Existencia y alcance de mecanismos que excluyan el contenido del usuario del entrenamiento, y si la configuración se establece a nivel de organización o depende de cada persona usuaria.
☐ Ubicación de almacenamiento y de tratamiento de los datos.
☐ Plazo y criterios de retención.
☐ Existencia y alcance de revisiones humanas por parte del proveedor, y posibilidad de desactivarlas por configuración administrativa.
☐ Régimen aplicable en materia de protección de datos y, cuando proceda, encargo del tratamiento conforme al artículo 28 del Reglamento (UE) 2016/679, **sin que la sola aceptación de los términos de servicio del proveedor pueda amparar el tratamiento**.
☐ Encaje con la categoría de seguridad del sistema de información afectado conforme al Real Decreto 311/2022.

La evaluación se documenta y se conserva. Un alta sin evaluación documentada no se autoriza.

**9. Responsabilidades.** [Puesto] mantiene el inventario y autoriza las altas. [Puesto] aprueba y revisa esta política. El delegado de protección de datos informa las altas que impliquen tratamiento de datos personales. Cada responsable de unidad vela por su aplicación en su ámbito.

**10. Vigencia y revisión.** Esta política se revisa anualmente, junto con el Catálogo de Exigencias Tecnológicas, y siempre que un cambio normativo o una incidencia lo aconsejen. Se comunica al personal y a los adjudicatarios de los contratos que incorporen la cláusula de uso de sistemas de inteligencia artificial sobre información municipal.

---- FIN DEL MODELO ----

**Nota al redactor.** El inventario del apartado 3 es el punto que hace exigible todo lo demás y el que más trabajo cuesta mantener. Si el Ayuntamiento no puede mantenerlo, la respuesta correcta no es publicar la política sin inventario: es reducir a uno o dos los sistemas autorizados y decirlo. Una política que remite a un inventario que no existe tiene el mismo valor que una obligación esencial que nadie verifica.

---

### ANEXO XVII · FÓRMULAS MODELO DE VALORACIÓN Y TRATAMIENTO DE LAS OFERTAS ANORMALMENTE BAJAS

Función: dar escritas las fórmulas que el baremo invoca. Un pliego que remite a «la fórmula de proporcionalidad inversa publicada en el apartado [ ]» sin publicarla incumple el artículo 145.5.b) de la LCSP, que prohíbe conferir al órgano de contratación una libertad de decisión ilimitada, y deja al licitador sin poder calcular el efecto de su propia oferta. **Ninguna de estas fórmulas es obligatoria: son las usuales, se ofrecen para que el redactor elija una y la publique entera.**

**Reglas comunes, aplicables a todas las fórmulas de este anexo. Se transcriben al PCAP junto con la fórmula elegida.**

1. **Publicación íntegra.** La fórmula se publica en el PCAP con su expresión matemática, la definición de cada término y **un ejemplo numérico resuelto**. Sin ejemplo, la fórmula se discute; con ejemplo, se aplica.
2. **Techo y suelo.** Ninguna fórmula puede atribuir más puntos que el máximo del criterio ni menos de cero. Toda fórmula lleva la acotación expresa.
3. **Redondeo.** Se fija en el pliego: se recomienda **dos decimales**, con redondeo al más próximo y, en caso de equidistancia, al alza.
4. **Orden de aplicación.** Primero se resuelve la admisión de las ofertas, incluido el trámite de las anormalmente bajas del apartado 5 de este anexo; después se puntúa. **Una oferta excluida no forma parte de la referencia de cálculo de ninguna fórmula.**
5. **Prohibición de referencias a la conducta ajena.** No se emplearán fórmulas cuya referencia sea la media de las ofertas presentadas ni ningún otro parámetro que dependa del comportamiento de los demás licitadores. Con ellas, la puntuación de un licitador varía sin que su oferta cambie, el licitador no puede calcular el efecto de la suya y el criterio deja de medir la prestación.
6. **Empates.** El PCAP publica los criterios de desempate del artículo 147 de la LCSP que aplicará, y su orden. Sin publicación previa, el desempate se decide después de conocidas las ofertas.
7. **Coherencia con el mínimo del pliego.** Ninguna fórmula puede puntuar el cumplimiento del mínimo exigido en el pliego de prescripciones técnicas. Sólo puntúa el exceso sobre ese mínimo, definido en lista cerrada (Anexo I, prohibición de doble asignación).

:::pliego
**FÓRMULAS DE VALORACIÓN DE LOS CRITERIOS EVALUABLES MEDIANTE LA MERA APLICACIÓN DE FÓRMULAS**

**A. Precio. Fórmula de proporcionalidad inversa.** *(Recomendada cuando se quiera evitar que una baja marginal reparta toda la puntuación.)*

> P(i) = Pmáx × (Omín / O(i))

Donde: **P(i)** = puntos del licitador *i*; **Pmáx** = puntuación máxima del criterio de precio; **O(i)** = importe ofertado por el licitador *i*, IVA excluido; **Omín** = importe ofertado más bajo de entre las ofertas admitidas, IVA excluido.

**B. Precio. Fórmula de proporcionalidad directa sobre la baja.** *(Recomendada cuando el órgano quiera que el peso real del precio coincida con el nominal.)*

> P(i) = Pmáx × (PBL − O(i)) / (PBL − Omín)

Donde **PBL** = presupuesto base de licitación, IVA excluido. Si Omín = PBL —ninguna oferta baja—, todas las ofertas obtienen **cero** puntos en este criterio y así se hace constar.

**C. Precio unitario ponderado del Cuadro de Precios Unitarios.** Se calcula primero el precio unitario ponderado de cada oferta y después se le aplica la fórmula A o la B, sustituyendo O(i) por PU(i):

> PU(i) = Σ [ w(k) × p(i,k) ] / 100

Donde **p(i,k)** = precio/hora ofertado por el licitador *i* para el perfil *k*, IVA excluido; **w(k)** = ponderación del perfil *k* publicada en el anexo de este pliego que contiene el Cuadro de Precios Unitarios. **La suma de las ponderaciones w(k) debe ser 100** y responder a la cesta de consumo previsible del contrato, motivada en el expediente.

**C bis. Unidades de despliegue, cuando el Cuadro de Precios Unitarios las incluya.** El criterio se divide en F.1, perfiles, con **[X; se recomienda 4]** puntos, calculado conforme a la fórmula C, y F.2, unidades de despliegue, con los puntos restantes del criterio. Para F.2:

> PU2(i) = Σ [ w(u) × p(i,u) / pmáx(u) ] / 100

Donde **p(i,u)** = precio unitario ofertado por el licitador *i* para la unidad *u*, IVA excluido; **pmáx(u)** = precio máximo de la unidad *u* fijado en el cuadro de características; **w(u)** = ponderación de la unidad *u* publicada con el Cuadro. **La suma de las ponderaciones w(u) debe ser 100.** A PU2(i) se le aplica la fórmula A, sustituyendo O(i) por PU2(i). No se admite la oferta que supere pmáx(u) en alguna unidad. Si el Cuadro no incluye unidades de despliegue, F.1 lleva todos los puntos del criterio.

**D. Plazo ofertado, cuando menor es mejor, con suelo.**

> P(i) = Pmáx × (Tmáx − T(i)) / (Tmáx − Tsuelo)

Donde **Tmáx** = plazo máximo admitido por el pliego, que es el mínimo obligatorio y no puntúa; **T(i)** = plazo ofertado por el licitador *i*; **Tsuelo** = plazo por debajo del cual no se otorgan más puntos. A efectos de cálculo, **T(i) se sustituye por Tsuelo cuando el plazo ofertado sea inferior a éste**, y la puntuación no excede de Pmáx.

**E. Cantidad ofertada sobre una lista cerrada, cuando más es mejor, con techo.**

> P(i) = Pmáx × (C(i) − Cmín) / (Ctecho − Cmín)

Donde **Cmín** = número mínimo exigido por el pliego de prescripciones técnicas, que no puntúa; **C(i)** = número comprometido por el licitador *i*, contado exclusivamente sobre los elementos de la **lista cerrada y numerada publicada en el pliego**; **Ctecho** = número a partir del cual no se otorgan más puntos. A efectos de cálculo, C(i) se sustituye por Ctecho cuando lo supere.

**F. Cantidad por unidades, con puntuación fija y tope.** *(Alternativa a la E cuando las unidades sean pocas y homogéneas.)*

> P(i) = mín [ Pmáx ; u × C(i) ]

Donde **u** = puntos por cada unidad adicional sobre el mínimo, publicados en el pliego. Sólo se computan las unidades de la lista cerrada y numerada.

**G. Regla común de acotación.** En todas las fórmulas anteriores: **0 ≤ P(i) ≤ Pmáx**. Los resultados se expresan con **[X; se recomienda DOS (2)]** decimales, con redondeo al más próximo y, en caso de equidistancia, al alza.
:::

**Advertencias de uso que no se copian al pliego pero deben leerse antes de elegir.**

- **Efecto de la fórmula A.** Reparte poco. Con un presupuesto base de 100.000 € y ofertas de 100.000 € y 90.000 €, la diferencia es del 10 % de los puntos del criterio, no del 100 %. El peso real del precio resulta menor que el peso nominal publicado. Es su virtud y su límite.
- **Efecto de la fórmula B.** Atribuye el máximo a la oferta más baja y cero a quien oferte el presupuesto base. Reparte todo el rango y, por ello, amplifica el peso del precio respecto de su porcentaje nominal.
- **Por qué el suelo de la fórmula D no es opcional.** Sin él, la fórmula premia plazos que ningún operador puede cumplir, el criterio deja de medir capacidad y el pliego se convierte en un incentivo al incumplimiento. El valor por defecto recomendado figura en el Anexo X.1, fila 18.
- **La fórmula decide el peso real del criterio.** Dos pliegos con «precio 40 puntos» reparten cosas distintas según empleen A o B. La memoria de criterios (Anexo IV, casilla 4) tiene que justificar el peso **con la fórmula elegida**, no con el porcentaje nominal.
- **Una fórmula no arregla un criterio mal construido.** Si el criterio puntúa algo que el PPT ya exige, o una certificación, o experiencia previa, la fórmula sólo hace más preciso el defecto. Antes de elegir fórmula, se pasan los avisos 9 y 10 del Anexo IV.
- **Criterios sujetos a juicio de valor.** No se les aplica fórmula: se les aplica **rúbrica con descriptores por tramos**, publicada en el PCAP (artículo 145.5.b). El modelo genérico de rúbrica figura en el Anexo XX.
- **No se mezclan unidades.** Una fórmula que sume euros con meses o con número de funciones no es una fórmula: es una ponderación encubierta y sin publicar.

**Apartado 5 · Tratamiento de las ofertas anormalmente bajas.**

Con un criterio de precio de peso alto, la identificación y el tratamiento de las ofertas anormalmente bajas dejan de ser un trámite y pasan a ser la principal defensa del contrato. Este catálogo no regula la materia —lo hace el **artículo 149 de la LCSP**—, pero sí impone tres reglas de redacción, porque su omisión es la causa habitual de que el trámite se resuelva mal:

1. **Los parámetros objetivos se publican en el PCAP**, antes de licitar, y se refieren a la oferta en su conjunto o al criterio de precio, según se decida. Un pliego sin parámetros publicados obliga al órgano a improvisarlos después de conocidas las ofertas, que es cuando ya no se puede.
2. **El trámite es contradictorio y previo.** Identificada una oferta como presuntamente anormal, se requiere al licitador para que la justifique, se recaba el informe técnico y se resuelve motivadamente **antes** de puntuar. Sólo entonces se aplican las fórmulas del bloque anterior.
3. **La oferta excluida no es referencia de cálculo.** Se hace constar expresamente en el PCAP, porque de ello depende que Omín no sea el importe de una oferta rechazada.

*Comprobación encargada antes de publicar, que se añade a las del Anexo XI.3:* si el pliego pretende remitirse a parámetros supletorios de la normativa de desarrollo en lugar de publicar los suyos, compruébese su vigencia y su aplicabilidad al contrato de que se trate. La recomendación de este catálogo es **publicar los parámetros en el pliego** y no remitirse a ninguno.

---

### ANEXO XVIII · MODELOS DE ACTA

Función: entregar los documentos sin los cuales el catálogo no se ejecuta. Este documento convierte el acta en **medio de acreditación tasado** en más de veinte lugares —aceptación de las exigencias del Anexo V y de las funcionalidades de inteligencia artificial, ensayo de reversibilidad, reversión, Comisión de Seguimiento, demostración funcional, comprobación del acceso de los órganos de control— y hasta ahora no entregaba ninguno. La consecuencia práctica de esa omisión es conocida: en un procedimiento contradictorio de penalidad o de resolución, **lo que no consta en acta no ocurrió**.

**Reglas comunes a todas las actas de este anexo.**

1. **Quién la levanta.** La levanta el Ayuntamiento, por el puesto que en cada caso designe la cláusula. La firma del contratista acredita su presencia y su conocimiento; **su negativa a firmar no impide levantar el acta**, y se hace constar en ella.
2. **Qué contiene siempre.** Expediente, contrato, fecha, hora de inicio y de fin, lugar o medio, asistentes con nombre, puesto y organización, objeto, lo actuado, el resultado y las observaciones de cada parte.
3. **Resultado binario.** Cuando el acta documente la comprobación de un criterio de aceptación, el resultado se consigna como **conforme / no conforme**, criterio por criterio. No se admiten resultados intermedios: un criterio de aceptación que sólo pueda valorarse por apreciación no sostiene una penalidad.
4. **Incorporación.** Toda acta se incorpora al expediente de ejecución del contrato en el plazo de **[X; se recomienda 5] días hábiles** desde su firma, y se notifica al contratista.
5. **Lo que un acta no hace.** No modifica el contrato, no sustituye a la resolución que corresponda ni suple la audiencia del contratista en los procedimientos que la exijan. Un acta que acuerde algo que sólo el órgano de contratación puede acordar es un acta viciada en esa parte.
6. **Numeración.** Correlativa por contrato y por tipo, con el formato `[tipo]/[n.º]/[año]`.

---- INICIO DEL MODELO A — ACTA DE ACEPTACIÓN DE LAS EXIGENCIAS TECNOLÓGICAS DETERMINADAS ----

*(Anexo V, regla común 4: cada exigencia se verifica mediante prueba de aceptación sobre el entorno de pruebas, documentada en acta suscrita por el responsable del contrato.)*

**ACTA DE ACEPTACIÓN N.º ……/……/…… · EXIGENCIA [ET-…]**

Expediente: ……………… · Contrato: ……………… · Adjudicatario: ………………
Fecha: …… / …… / …… · Hora de inicio: …… · Hora de fin: ……
Entorno sobre el que se ejecuta la prueba: ☐ Entorno de pruebas municipal ☐ Otro: ………
Juego de datos empleado: ☐ Ficticios ☐ Anonimizados · Identificación: ………………
Asistentes: ………………………………………………………………

**Resultado por criterio de aceptación** *(se transcriben los criterios del Catálogo tal como figuran en el pliego; una fila por criterio)*

| N.º | Criterio de aceptación | Cómo se ha comprobado (operación efectivamente ejecutada) | Evidencia obtenida | Resultado |
|---|---|---|---|---|
| 1 | | | | ☐ Conforme ☐ No conforme |
| 2 | | | | ☐ Conforme ☐ No conforme |
| 3 | | | | ☐ Conforme ☐ No conforme |

**Declaración de resultado.** ☐ **Aceptada**: todos los criterios resultan conformes. ☐ **No aceptada**: resultan no conformes los criterios n.º ……, por los motivos que constan. Plazo de subsanación otorgado: …… . Nueva prueba prevista para el …… / …… / …… .

**Advertencia que forma parte del acta.** La aceptación **no libera** al adjudicatario de su responsabilidad por defectos, errores, vulnerabilidades, incumplimientos normativos o degradación posterior de la capacidad verificada, que debe permanecer operativa durante el resto de la vigencia del contrato y de sus prórrogas.

Firma del responsable del contrato · Firma del técnico que ejecuta la prueba · Firma del adjudicatario (o constancia de su negativa)

---- FIN DEL MODELO A ----

---- INICIO DEL MODELO B — ACTA DE ENSAYO DE REVERSIBILIDAD ----

*(Cláusula DT-8·v3, apartado 3: extracción y restitución efectivas de una muestra representativa en un entorno ajeno a la infraestructura del adjudicatario, a su costa, y, si el contrato comprende desarrollos específicos, compilación y despliegue de su código.)*

**ACTA DE ENSAYO DE REVERSIBILIDAD N.º ……/……/……**

Expediente · Contrato · Adjudicatario · Fecha · Hora de inicio y de fin
Periodicidad exigida por el pliego: cada **[X; se recomienda 24] meses**, y en todo caso uno durante el último año.
**Entorno de destino del ensayo, ajeno a la infraestructura del adjudicatario:** ………………………

| Elemento | Contenido de la muestra | Volumen | Formato de extracción | ¿Restituido y legible en destino? | Tiempo empleado |
|---|---|---|---|---|---|
| Datos | | | | ☐ Sí ☐ No | |
| Configuraciones y parametrizaciones | | | | ☐ Sí ☐ No | |
| Diccionario de datos | | | | ☐ Sí ☐ No | |
| Documentación técnica y de despliegue | | | | ☐ Sí ☐ No | |
| Código fuente de los desarrollos específicos, versión en producción *(sólo si el contrato los comprende; en esta fila, «Sí» significa que compila y se despliega en un entorno funcional siguiendo únicamente la documentación entregada)* | | | | ☐ Sí ☐ No | |

**Representatividad de la muestra.** Motívese por qué la muestra empleada es representativa del conjunto: …………………… . Sin esta motivación, el ensayo acredita que se movieron unos ficheros, no que la reversión sea posible.

**Comprobación del Inventario de Componentes.** ☐ Entregado y actualizado, con las cuatro categorías separadas (producto base · desarrollos específicos para el Ayuntamiento · componentes de terceros con su licencia · configuraciones). ☐ No entregado o incompleto. *(La falta del Inventario impide tener por cumplida la obligación de reversibilidad.)*

**Resultado.** ☐ Satisfactorio ☐ Satisfactorio con incidencias (se relacionan) ☐ No satisfactorio.
**Tiempo total empleado:** …… . **Estimación de esfuerzo de migración completa que resulta del ensayo:** …… .
**Actualizaciones que deben incorporarse al Plan de Reversibilidad y al Dossier como consecuencia del ensayo:** ……………………

Firma del servicio de informática · Firma del responsable del contrato · Firma del adjudicatario

---- FIN DEL MODELO B ----

---- INICIO DEL MODELO C — ACTA DE REVERSIÓN ----

*(Cláusula DT-8·v3, apartado 8. Es el acta de la que depende el día inicial del plazo de garantía. Su plazo para levantarse es cierto y el silencio juega a favor del contratista: léase el apartado antes de usar este modelo.)*

**ACTA DE REVERSIÓN N.º ……/……/……**

Expediente · Contrato · Adjudicatario
**Fecha de la comunicación de entrega íntegra por el adjudicatario:** …… / …… / ……
**Fecha de levantamiento de la presente acta:** …… / …… / …… · **Plazo del pliego: [X; se recomienda 15] días hábiles desde aquella comunicación.**

**Relación de lo entregado** *(una fila por cada letra del apartado 1 de la cláusula de reversibilidad efectivamente incorporada al pliego)*

| Elemento | Soporte y formato | Suma de verificación | Fecha de entrega | ¿Completo? | Defectos apreciados |
|---|---|---|---|---|---|
| Datos y sus metadatos | | | | ☐ Sí ☐ No | |
| Diccionario de datos | | | | ☐ Sí ☐ No | |
| Código de los desarrollos específicos, fuente y objeto *(«Sí» sólo si el código fuente compila y se despliega siguiendo la documentación entregada, comprobado como en el modelo B)* | | | | ☐ Sí ☐ No | |
| Configuraciones y parametrizaciones | | | | ☐ Sí ☐ No | |
| Prompts corporativos, bases de conocimiento y modelos ajustados con datos municipales | | | | ☐ Sí ☐ No | |
| Documentación técnica, de construcción y de despliegue | | | | ☐ Sí ☐ No | |
| Inventario de Componentes | | | | ☐ Sí ☐ No | |
| Dossier de Reversibilidad | | | | ☐ Sí ☐ No | |
| Certificación de supresión de datos personales (art. 28.3.g RGPD) | | | | ☐ Sí ☐ No | |
| Documento de licencia de continuidad, con fechas de inicio y fin | | | | ☐ Sí ☐ No | |

**Defectos apreciados y plazo de subsanación otorgado:** …………………… · Plazo: …………

**Efectos que se hacen constar expresamente.**
1. El **plazo de garantía del contrato**, de **[X; se recomienda 12] meses**, se computa desde la fecha de la presente acta.
2. Si esta acta no se hubiera levantado dentro del plazo indicado y sin que el Ayuntamiento hubiera formulado objeciones, la reversión se tendría por conforme a todos los efectos y el plazo de garantía se computaría desde el día siguiente al vencimiento de dicho plazo.
3. El acceso de los órganos de control se mantiene en los términos de la cláusula correspondiente del pliego y del Anexo X.1, fila 8.

Firma del responsable del contrato · Firma del servicio de informática · Firma del adjudicatario

---- FIN DEL MODELO C ----

---- INICIO DEL MODELO D — ACTA DE LA COMISIÓN DE SEGUIMIENTO ----

*(Cláusula ADM-4·v3, apartado 2. Sus actas son medio tasado de acreditación del cumplimiento y **son el documento donde se aprueban los hitos que pueden llegar a ser esenciales**.)*

**ACTA N.º ……/……/…… DE LA COMISIÓN DE SEGUIMIENTO**

Expediente · Contrato · Adjudicatario · Fecha · Hora de inicio y de fin · Lugar o medio
Sesión: ☐ Ordinaria ☐ Extraordinaria, a petición de ……………… , por concurrir el hecho relevante siguiente: ………………
Convocatoria cursada el …… / …… / …… · Antelación: **[X; se recomienda 10] días**.

**Asistentes**

| Por el Ayuntamiento | Puesto | Asiste |
|---|---|---|
| Responsable del contrato (preside) | | ☐ |
| Técnico del servicio de informática | | ☐ |
| Representante de la unidad gestora | | ☐ |
| Representante del órgano interventor *(si el contrato incorpora la condición especial de acceso de los órganos de control)* | | ☐ |

| Por el adjudicatario | Puesto | Asiste |
|---|---|---|
| Jefe de proyecto | | ☐ |
| | | ☐ |

☐ **Inasistencia no justificada del adjudicatario**, convocado con la antelación exigida. Se hace constar a los efectos del cuadro de penalidades del pliego.

**Orden del día y acuerdos**

| Punto | Contenido | Lo tratado y acordado |
|---|---|---|
| 1 | Estado de cada exigencia del Catálogo de Exigencias Tecnológicas | |
| 2 | Cumplimiento de cada condición especial de ejecución, una por una | |
| 3 | Vigencia de las certificaciones o sistemas de gestión exigidos | |
| 4 | Indicadores de servicio del PPT | |
| 5 | Consumo de la bolsa de servicios evolutivos *(si procede)* | |
| 6 | Incidencias registradas y su tratamiento | |
| 7 | Plan Anual de Evolución Tecnológica: presentación, contenido y reparos | |
| 8 | **Aprobación expresa de hitos** *(véase el cuadro siguiente)* | |
| 9 | Propuesta, en su caso, de imposición de penalidades o de incoación del procedimiento de resolución | |

**Cuadro 8 · Aprobación expresa de hitos del Plan Anual**

*Advertencia que forma parte del acta: **sólo los hitos que se aprueben en este cuadro, con fecha cierta, adquieren carácter de obligación contractual esencial.** Los hitos propuestos y no aprobados no lo adquieren, y así se les comunica al adjudicatario.*

| N.º del apartado 4 del Plan | Hito | Fecha cierta que se aprueba | Acuerdo |
|---|---|---|---|
| | | …… / …… / …… | ☐ Aprobado ☐ No aprobado ☐ Aprobado con modificación de fecha |

**Observaciones del adjudicatario, que se hacen constar a su instancia:** ……………………

**Constancia final.** Esta acta se incorpora al expediente de ejecución del contrato y se notifica al adjudicatario. La aprobación de hitos que contiene la adopta el órgano de contratación, previo informe del responsable del contrato, y se documenta aquí; **cuando el órgano de contratación no sea quien preside la Comisión, la aprobación surte efecto desde su resolución, que se une a esta acta**.

Firmas de los asistentes

---- FIN DEL MODELO D ----

---- INICIO DEL MODELO E — DILIGENCIA DE COMPROBACIÓN DEL ACCESO DE LOS ÓRGANOS DE CONTROL Y DE LA EXPORTACIÓN DE DATOS ----

*(Cláusula ADM-12·v3. Comprobación anual, a cargo del órgano interventor.)*

**DILIGENCIA N.º ……/……/…… · COMPROBACIÓN ANUAL**

Expediente · Contrato · Adjudicatario · Fecha

| Comprobación | Resultado | Evidencia |
|---|---|---|
| Los **[X; se recomienda 3] accesos nominativos** de consulta están operativos y a nombre del personal designado | ☐ Sí ☐ No | |
| El alcance funcional del acceso se corresponde con el definido en el PPT | ☐ Sí ☐ No | |
| La exportación en formato abierto, reutilizable y documentado se obtiene **sin desarrollo a medida y sin coste por consulta** | ☐ Sí ☐ No | |
| La exportación comprende los datos que acreditan la realidad de la prestación, el grado de cumplimiento de los niveles de servicio y los datos económicos de la ejecución | ☐ Sí ☐ No | |
| El **diccionario de datos** está entregado, actualizado a la última versión mayor en producción, y permite interpretar lo extraído **sin asistencia del adjudicatario** | ☐ Sí ☐ No | |
| El registro de actividad permite determinar qué operación se realizó, cuándo, por quién o por qué proceso automatizado y con qué resultado, y es exportable en los mismos términos | ☐ Sí ☐ No | |
| No se ha facturado ni tarificado consulta alguna con cargo a estos accesos | ☐ Sí ☐ No | |

**Prueba efectivamente realizada:** descríbase la extracción concreta ejecutada, con fecha, alcance y resultado: …………………… . *(Una diligencia que sólo declare que el acceso «está disponible» no comprueba nada: la comprobación es una extracción.)*

**Incidencias y requerimiento formulado, en su caso:** …………………… · Plazo otorgado: **[X; se recomienda 10] días hábiles**.

Firma del órgano interventor · Firma del responsable del contrato

---- FIN DEL MODELO E ----

---- INICIO DEL MODELO F — ACTA DE ACEPTACIÓN DE UNA FUNCIONALIDAD DE INTELIGENCIA ARTIFICIAL ----

*(Cláusula DT-1·v3, apartado 9: ninguna funcionalidad basada en inteligencia artificial se pone en producción sin aceptación expresa, documentada en acta. Se suprimen las filas de los apartados que el pliego no incorpore.)*

**ACTA DE ACEPTACIÓN N.º ……/……/…… · FUNCIONALIDAD DE INTELIGENCIA ARTIFICIAL [denominación]**

Expediente · Contrato · Adjudicatario · Fecha · Hora de inicio y de fin
Sistema en que se basa, según la relación del apartado 2 de la cláusula: ……………… · Versión: ……
Entorno de la prueba: ☐ Entorno de pruebas del contrato ☐ Otro: ……… · Juego de datos: ☐ Ficticios ☐ Anonimizados
Asistentes: ………………………………………………………………

| N.º | Extremo comprobado | DT-1·v3 | Cómo se ha comprobado | Evidencia | Resultado |
|---|---|---|---|---|---|
| 1 | Pruebas técnicas, funcionales, de seguridad y de integración | Ap. 9 | | | ☐ Conforme ☐ No conforme |
| 2 | Control propio de suspensión activado por personal municipal. Tiempo medido hasta que la funcionalidad deja de producir resultados: …… (máximo del pliego: ……). Si la oferta identificó la funcionalidad, prueba del procedimiento sustitutivo por el canal del apartado 6.e) | Ap. 6.d) | | | ☐ Conforme ☐ No conforme |
| 3 | Exportación por expediente, hecha por personal municipal sobre al menos tres resultados de prueba, de los criterios aplicados o de la constancia de que no pueden identificarse, vinculados al expediente, a la versión y a los datos de entrada | Ap. 11 | | | ☐ Conforme ☐ No conforme |
| 4 | Descripción de la recogida y el etiquetado de los datos recibida, con fecha y versión, y con las partes reservadas identificadas y motivadas | Ap. 12 | | | ☐ Conforme ☐ No conforme |
| 5 | Muestra de verificación de sesgos ejecutada sobre …… casos elegidos o elaborados por el gestor del procedimiento, con los resultados exportados | Ap. 13.b) | | | ☐ Conforme ☐ No conforme |
| 6 | Descripción publicable de la actuación automatizada recibida, con las partes depuradas identificadas | Ap. 7 | | | ☐ Conforme ☐ No conforme |
| 7 | Informes, consultas o autorizaciones previos que exige la normativa aplicable, con su fecha y su sentido, o constancia de que no se exige ninguno | Ap. 9 | | | ☐ Conforme ☐ No conforme |

**Declaración de resultado.** ☐ **Aceptada**: todos los extremos resultan conformes. ☐ **No aceptada**: resultan no conformes los extremos n.º ……, por los motivos que constan. ☐ **No puede aceptarse todavía**: falta alguno de los informes, consultas o autorizaciones de la fila 7, o el informe vinculante no es favorable; mientras tanto no corren los plazos del pliego que dependen de la puesta en producción.

**Advertencia que forma parte del acta.** La aceptación no exime de responsabilidad por defectos, errores, sesgos, vulnerabilidades, incumplimientos normativos, uso inadecuado de datos o degradación posterior del servicio (DT-1·v3, apartado 9). El análisis de los resultados de la muestra de la fila 5 corresponde al Ayuntamiento; si revela un sesgo, la aceptación puede denegarse motivadamente.

Firma del responsable del contrato · Firma del técnico de informática que ejecuta la prueba · Firma del adjudicatario (o constancia de su negativa)

---- FIN DEL MODELO F ----

**Nota sobre el acta de la demostración funcional.** Su modelo no figura aquí: va con el guion y la relación cerrada de elementos verificables, en el **Anexo XX**, porque los tres se publican juntos como anexo del PCAP y se leen juntos.

---

### ANEXO XIX · EXTRACTO DE VIGENCIA NORMATIVA TRANSCRIBIBLE AL PLIEGO DE PRESCRIPCIONES TÉCNICAS

Función: entregar el texto que la cláusula DT-1·v3 invoca cuatro veces cuando habla del «anexo de vigencia normativa de este pliego». El Anexo XI de este catálogo es un instrumento de trabajo del expediente y no se copia a ningún pliego; lo que sí se copia es este extracto, recortado a las cláusulas incorporadas. Sin él, DT-1·v3 remite a un anexo del pliego que nadie ha escrito.

**Instrucciones de uso.** (1) Se transcribe físicamente en el PPT, con su **fecha de corte**, y no se incorpora por remisión. (2) Se recorta a las materias de las cláusulas efectivamente incorporadas: las filas huérfanas se borran. (3) La fecha de corte del extracto que se transcriba a un pliego es la de la última revisión anual del Anexo XI aprobada; si no se ha revisado, la del Anexo XI vigente, y se dice cuál es. (4) Las tres comprobaciones del Anexo XI.3 se resuelven **antes** de transcribirlo, o las filas afectadas no se transcriben.

:::pliego
**APÉNDICE TÉCNICO [N] · VIGENCIA NORMATIVA DE LAS EXIGENCIAS DE ESTE PLIEGO**
*(Fecha de corte: …… / …… / ……)*

**1. Objeto de este apéndice.** Este pliego distingue expresamente entre las obligaciones que una norma en vigor ya impone y las que el Ayuntamiento anticipa como exigencia contractual. La distinción se hace para que el licitador pueda valorar el coste de cada una y para que ninguna exigencia se presente como obligación legal vigente sin serlo.

**2. Cuadro de vigencia.**

| Materia exigida en este pliego | ¿La impone hoy una norma en vigor? | Desde cuándo, o desde cuándo lo será |
|---|---|---|
| Prácticas prohibidas de inteligencia artificial y alfabetización en materia de IA (arts. 4 y 5 del Reglamento (UE) 2024/1689, en su redacción vigente) | **Sí** | Desde el 2 de febrero de 2025 |
| Modelos de IA de uso general, gobernanza y régimen sancionador del mismo Reglamento | **Sí** | Desde el 2 de agosto de 2025 |
| Transparencia sobre la interacción con sistemas de IA y sobre el contenido generado (art. 50 del mismo Reglamento) | **Sí** | Desde el 2 de agosto de 2026, con el régimen transitorio de su art. 111 para los sistemas ya introducidos en el mercado |
| Requisitos de los sistemas de alto riesgo y obligaciones del responsable del despliegue (capítulo III, secciones 1 a 3, arts. 26 y 27 incluidos) | **No** | El 2 de diciembre de 2027 para los sistemas del art. 6.2 y del anexo III, y el 2 de agosto de 2028 para los del art. 6.1 y del anexo I, conforme al Reglamento (UE) 2026/1744, de 8 de julio de 2026. **Lo que este pliego exige hoy es la entrega de la documentación y de los medios que permitirán cumplirlas: instrucciones de uso, información técnica, registros y capacidad de supervisión humana** |
| Sistemas de alto riesgo **destinados a ser utilizados por autoridades públicas** | **No** | Hasta el 2 de agosto de 2030, conforme al art. 111, apartado 2, del Reglamento (UE) 2024/1689, en su redacción vigente |
| Protección de datos personales: encargo del tratamiento, devolución o supresión al término, evaluación de impacto | **Sí** | Reglamento (UE) 2016/679 y Ley Orgánica 3/2018 |
| Actuación administrativa automatizada y decisiones individuales automatizadas | **Sí** | Art. 41 de la Ley 40/2015 y art. 22 del Reglamento (UE) 2016/679 |
| Conformidad con el Esquema Nacional de Seguridad, y su extensión a la cadena de suministro | **Sí** | Art. 2.3 del Real Decreto 311/2022 |
| Interoperabilidad y utilización de los servicios comunes de obligada utilización | **Sí** | Real Decreto 4/2010 y Ley 39/2015 |
| Titularidad de las aplicaciones y su puesta a disposición de otras administraciones | **Sí** | Arts. 157 y 158 de la Ley 40/2015; art. 308.1 de la Ley 9/2017 |
| Acceso de los órganos de control interno a los datos de ejecución del contrato | La potestad de control **existe** (art. 214 del texto refundido de la Ley reguladora de las Haciendas Locales y Real Decreto 424/2017). Su articulación frente al contratista **no** viene impuesta por norma | **Exigencia contractual de este pliego**, que es lo que la hace efectiva frente a un tercero |
| Sistema de gestión de la inteligencia artificial conforme a la norma designada en este pliego | **No.** Ninguna norma obliga a un contratista a certificarse | **Exigencia contractual de este pliego**, con las alternativas de acreditación que en él se establecen. Se hace constar que esta certificación **no otorga presunción de conformidad** con el Reglamento (UE) 2024/1689: esa presunción corresponde a las normas armonizadas publicadas en el Diario Oficial de la Unión Europea |
| Interfaz normalizada de acceso programático para agentes | **No** | **Exigencia contractual de este pliego** |
| Operación autónoma supervisada y su trazabilidad | Parcialmente: la trazabilidad deriva del Esquema Nacional de Seguridad en la medida de la categoría del sistema | **Exigencia contractual de este pliego** en lo que exceda de esa medida |
| Depósito de código y continuidad del servicio | **No** | **Exigencia contractual de este pliego** |
| Control del uso de sistemas de inteligencia artificial de terceros sobre información municipal | Parcialmente: deriva del deber de confidencialidad y del régimen de encargo del tratamiento | **Exigencia contractual de este pliego** en lo relativo a la declaración de sistemas y a la autorización previa de altas |

**3. Regla de interpretación.** Las obligaciones de la tercera columna que se identifican como exigencia contractual de este pliego se asumen por el contratista en virtud del contrato y no en virtud de la norma citada. Su incumplimiento produce los efectos previstos en este pliego, y no los que la norma anude a su propio incumplimiento.

**4. Efecto de las modificaciones normativas posteriores.** La entrada en vigor o la modificación posterior de cualquiera de las normas citadas **no altera el contenido de las obligaciones asumidas en este contrato**, sin perjuicio del deber general del contratista de cumplir la normativa que le sea aplicable en cada momento. Cuando el Ayuntamiento quiera que una obligación nueva resulte exigible, la incorporará a la licitación siguiente o tramitará la modificación que proceda.
:::

**Nota al redactor.** Este extracto es el instrumento más barato de todo el catálogo y el que más recursos evita: un pliego que dice qué exige por ley y qué exige por contrato desarma de antemano la alegación de desproporción, y un pliego que confunde ambas cosas la invita. Si por falta de tiempo hubiera que renunciar a algún anexo, no sea éste.

---

### ANEXO XX · GUION, RELACIÓN CERRADA Y RÚBRICA GENÉRICOS DE LA DEMOSTRACIÓN FUNCIONAL

Función: entregar los tres documentos que la cláusula ADM-9·v3 remite al anexo del PCAP y que hasta ahora sólo existían para el contrato piloto. Son genéricos: el redactor sustituye el caso de uso por el suyo y conserva la estructura.

**Advertencia previa, que condiciona todo lo demás y debe leerse antes de usar el anexo.** La demostración funcional **no atribuye puntuación alguna**. Es un medio de comprobación de la exactitud de lo declarado por escrito (art. 145.5.c de la LCSP), y su único efecto es **confirmar o retirar** puntos ya asignados a la oferta escrita. Por tanto: la rúbrica del apartado 4 valora **lo descrito en la memoria técnica**, no el desempeño en sala; y el acta del apartado 5 no puntúa, sino que consigna si lo descrito se acreditó. Un anexo que reparta puntos por el resultado de la sesión favorece a quien ya tiene producto operativo y reproduce el supuesto que el artículo 40.b) de la LCSP declara anulable.

:::pliego
**ANEXO [ ] DEL PLIEGO DE CLÁUSULAS ADMINISTRATIVAS PARTICULARES**
**GUION DE LA DEMOSTRACIÓN FUNCIONAL, RELACIÓN CERRADA DE ELEMENTOS VERIFICABLES Y MATRIZ DE DECLARACIÓN**

**1. Relación cerrada y numerada de elementos verificables.**
Sólo se verificarán los elementos de esta relación, y sólo en la medida en que el licitador los haya descrito por escrito en su oferta presentada en plazo. **Lo mostrado en la sesión y no descrito en la oferta no se valorará en ningún caso. Lo descrito en la oferta y no acreditado por el medio previsto para el tipo de criterio se puntuará con cero en el subcriterio correspondiente.**

Cada elemento indica el criterio al que sirve y el **momento** de su comprobación, que depende del tipo de ese criterio: los elementos que sirven a criterios sujetos a juicio de valor se comprueban en la sesión del apartado 3; los que sirven a criterios evaluables mediante la mera aplicación de fórmulas se comprueban por medios documentales **después de abrir ese sobre y antes de clasificar las ofertas, respecto de todas las ofertas admitidas**.

| N.º | Elemento verificable | Criterio del baremo al que sirve (código publicado en el PCAP: **P · C1 · C2 · C3 · C4 · A · B · D · E · F · H**) | Tipo del criterio (juicio de valor / fórmula) y momento de la comprobación | Qué se considerará acreditado |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| … | | | | |

**2. Caso de uso.**
Idéntico para todos los licitadores, publicado con este pliego y ejecutado sobre datos ficticios o anonimizados facilitados por el Ayuntamiento.

> «A partir del juego de datos que se entrega con este pliego, y en un máximo de **[X; se recomienda 90] minutos**: (1) …………………… ; (2) …………………… ; (3) …………………… ; (4) …………………… ; (5) …………………… .»

**3. Guion y reglas de la sesión.**

| Fase | Contenido | Duración |
|---|---|---|
| 1 | Identificación de los asistentes y del entorno sobre el que se opera | **[X; se recomienda 5] min** |
| 2 | Ejecución de las tareas del caso de uso, en el orden publicado | **[X; se recomienda 70] min** |
| 3 | Comprobación de los elementos de la relación cerrada no cubiertos por las tareas | **[X; se recomienda 10] min** |
| 4 | Lectura del resultado consignado en acta y observaciones de las partes | **[X; se recomienda 5] min** |

*La suma de las cuatro fases no puede exceder de la duración máxima publicada en el apartado 2.*

a) **Modalidad:** videoconferencia sobre el entorno del propio licitador, salvo que el expediente motive expresamente la necesidad de presencialidad. No se exigirá despliegue, instalación ni integración en los sistemas municipales, ni entrega de bienes, ni gastos de desplazamiento de personal municipal.
b) **Momento:** una vez abierto el sobre de criterios sujetos a juicio de valor y, en todo caso, **antes de la apertura del sobre de criterios evaluables mediante la mera aplicación de fórmulas**, dejando constancia documental de la valoración con carácter previo a dicha apertura. **Este momento no se altera una vez publicados los pliegos.**
c) **Orden e igualdad:** el calendario y el orden de intervención se determinan por sorteo ante la mesa de contratación y se comunican a todos los licitadores con una antelación mínima de **[X; se recomienda 5] días hábiles**. Todos disponen de idéntica duración máxima, del mismo entorno de referencia y de los mismos evaluadores. Cada sesión se celebra sin presencia de los restantes licitadores y sin facilitar información alguna sobre las demás ofertas.
d) **Incidencias:** ante una incidencia técnica no imputable al licitador se admite **una única** repetición, dejando constancia en acta.
e) **Prohibición de ampliar la oferta:** no se admitirá, ni se hará constar en acta a efectos de valoración, manifestación oral alguna que amplíe, aclare, rectifique o complete la oferta escrita.
f) **Incomparecencia:** no determina la exclusión. Los elementos declarados y no acreditados se puntúan con cero.
g) **Deslinde:** el resultado de la demostración no acredita la solvencia técnica y **no puede fundar por sí solo la exclusión** del licitador.
h) **Alcance de la sesión y comprobación de las fórmulas:** la sesión versa **exclusivamente sobre los elementos de la relación cerrada que sirven a criterios sujetos a juicio de valor**. Los elementos que sirven a criterios evaluables mediante fórmulas no se comprueban en ella. Abierto el sobre de fórmulas y antes de clasificar las ofertas, la mesa comprobará documentalmente su exactitud respecto de todas las ofertas admitidas. Apreciada una duda, requerirá al licitador de que se trate, por plazo no inferior a **[X; se recomienda 5] días hábiles**, la documentación técnica que la resuelva, sin que la respuesta pueda ampliar ni modificar la oferta. Si la comprobación acredita que una declaración no es exacta, la puntuación se calculará aplicando la fórmula publicada sobre los elementos efectivamente acreditados. Esta comprobación no atribuye puntuación adicional y no puede fundar por sí sola la exclusión.

**4. Rúbrica del criterio de juicio de valor al que sirve la demostración.**
Se valora **lo descrito en la memoria técnica presentada en plazo**. La demostración confirma o retira estos puntos; no puede añadir ninguno.

| Tramo | Puntos | Descriptor, referido a lo descrito por escrito |
|---|---|---|
| Completo y trazable | [Pmáx] | La memoria describe las cinco tareas con identificación de la función o módulo que las resuelve, del rastro de auditoría que generan y del formato de salida, y aporta la evidencia documental que el pliego exige para cada una |
| Completo | [0,7 × Pmáx] | Describe las cinco tareas con ese detalle, pero no acredita documentalmente alguna de ellas |
| Suficiente | [0,4 × Pmáx] | Describe con ese detalle tres o cuatro tareas |
| Insuficiente | [0,15 × Pmáx] | Describe con ese detalle una o dos tareas |
| No descrito | 0 | No describe ninguna tarea con el detalle exigido, o lo descrito no permite determinar cómo se resuelve |

**Regla de aplicación.** Los puntos asignados conforme a esta rúbrica se **retiran** en el subcriterio correspondiente respecto de cada tarea descrita y no acreditada en la sesión.

**5. Matriz de declaración del licitador.**
Se presenta cumplimentada **con la oferta** y **desdoblada por sobres**: los elementos que sirven a criterios sujetos a juicio de valor, en el sobre de criterios sujetos a juicio de valor; los que sirven a criterios evaluables mediante la mera aplicación de fórmulas, en el sobre de criterios evaluables mediante fórmulas, junto con el resto de la proposición sometida a ese régimen (artículos 26 y 30.2 del Real Decreto 817/2009 y artículo 146.2 de la LCSP). Sin matriz cumplimentada, los elementos no se consideran declarados.

| N.º del elemento | ¿Se declara? | Documento de la oferta, apartado y página donde se describe | Función o módulo que lo resuelve, o hito de desarrollo comprometido |
|---|---|---|---|
| 1 | ☐ Sí ☐ No | | |
| 2 | ☐ Sí ☐ No | | |

**6. Modelo de acta de la sesión.**
De cada sesión se levanta acta escrita detallada, en el mismo acto, con el contenido siguiente. Podrá realizarse además grabación sonora o audiovisual cuando este pliego lo prevea; en tal caso se anuncia aquí y la grabación se conserva hasta que la adjudicación sea firme, a disposición del órgano competente para resolver el recurso especial. El acceso de los demás licitadores al acta y, en su caso, a la grabación se rige por el artículo 133 de la LCSP.

> **ACTA DE LA SESIÓN DE DEMOSTRACIÓN FUNCIONAL**
> Expediente · Licitador · Fecha · Hora de inicio y de fin · Modalidad · Entorno · Asistentes por ambas partes · Evaluadores.
>
> | N.º del elemento | ¿Consta descrito en la oferta? | ¿Acreditado en la sesión? | Evidencia observada | Observaciones |
> |---|---|---|---|---|
> | 1 | ☐ Sí ☐ No | ☐ Sí ☐ No | | |
> | 2 | ☐ Sí ☐ No | ☐ Sí ☐ No | | |
>
> **Incidencias técnicas y repetición, en su caso:** ……………………
> **Manifestaciones orales que se rechazan por ampliar o rectificar la oferta escrita:** ……………………
> **Observaciones del licitador, que se hacen constar a su instancia:** ……………………
> Firmas de los asistentes y del secretario de la mesa.

**7. Regla de cierre.** La valoración de los criterios sujetos a juicio de valor se documenta **antes** de la apertura del sobre de criterios evaluables mediante fórmulas. Una valoración de juicio de valor que se cierre después de conocidos los precios no admite retroacción. La comprobación de los elementos que sirven a criterios evaluables mediante fórmulas, practicada conforme a la letra h) del apartado 3, se realiza después de esa apertura, antes de la clasificación y respecto de todas las ofertas admitidas. No altera el orden de valoración: esos criterios son reglados y su puntuación resulta de aplicar la fórmula publicada a los elementos efectivamente acreditados.
:::

**Notas al redactor, fuera del texto que se copia al pliego.**

- **Cómo se construye el caso de uso del apartado 2.** Las tareas se enuncian por su **resultado**, no por el camino; no se nombra producto, protocolo ni red alguna; y ninguna tarea puede exigir un despliegue, una instalación o una integración en sistemas municipales. Un caso de uso que sólo pueda resolverlo quien ya tenga la solución instalada en el Ayuntamiento no comprueba lo declarado: premia la tenencia previa.
- **Los coeficientes de la rúbrica.** Los que figuran entre corchetes son los valores recomendados por defecto. Si el órgano de contratación los modifica, lo motiva en la memoria de criterios. En todo caso, los cinco tramos se publican en el PCAP con su valor numérico exacto, nunca con la fórmula del coeficiente.
- **Lo que cuesta.** La demostración es la pieza más cara de este catálogo en horas municipales: entre tres y cuatro por licitador, más la preparación única del guion y del juego de datos, más **[X; se recomienda 1] hora por oferta admitida** para la comprobación documental y el tiempo de los requerimientos que resulten necesarios. Con cinco ofertas admitidas y sin requerimientos adicionales, entre 24 y 29 horas. Si el expediente no puede asumir esa carga, **la cláusula se marca NO APLICA y no ocurre nada**, precisamente porque no reparte puntos. Lo que no cabe es publicarla y no celebrarla.

---

### ANEXO XXI · CUADRO DE CERTIFICACIONES Y EQUIVALENCIAS ADMISIBLES

Función: que el redactor sepa, de un vistazo, qué puede exigir, con qué instrumento, con qué designación y qué tiene que admitir como equivalente. **Regla que gobierna el cuadro entero y no admite excepción: ninguna certificación de las que aquí figuran puede valorarse como criterio de adjudicación.** Puntuar una certificación valora una característica de la empresa y no de la prestación, y la tenencia previa cae bajo el artículo 40.b) de la LCSP.

**Segunda regla: designación con año y referencia estática.** Toda norma se cita con su designación completa **y su año**, y el pliego añade que la designación se entiende hecha a la versión vigente **a la fecha de publicación del anuncio de licitación**, sin que su revisión posterior modifique el contenido de la obligación. «O norma que la sustituya» parece una cautela y es un defecto: permite que la obligación cambie después de que el licitador haya ofertado, sobre un texto que aún no existe.

| Materia | Norma o marco, con designación | Instrumento admisible | ¿Puede exigirse como solvencia? | Equivalencias que hay que admitir | Cuándo no se exige |
|---|---|---|---|---|---|
| **Gestión de la inteligencia artificial** | **UNE-EN ISO/IEC 42001:2026**, «Tecnología de la información. Inteligencia artificial. Sistema de gestión», edición de 8 de abril de 2026, que anula la UNE-ISO/IEC 42001:2025 | Condición especial de ejecución (recomendado) o solvencia técnica | **Sólo** en contratos sujetos a regulación armonizada y cuando el sistema de IA sea elemento determinante de la prestación, no accesorio | Certificado equivalente de organismo de cualquier Estado miembro; y **otras pruebas de medidas equivalentes** (art. 93.2 LCSP): política aprobada por el órgano de dirección, procedimiento de gestión de riesgos, procedimiento de supervisión humana con puestos identificados, registro de incidencias y de cambios de modelo o versión, e informe de la última revisión con antigüedad no superior a **[X; se recomienda 24] meses** | Contratos sin intervención de sistemas de IA sobre datos o procesos municipales; contratos menores; basados en acuerdo marco; adhesiones a centrales de compra; prórrogas |
| **Seguridad de la información** | **UNE-EN ISO/IEC 27001:[año vigente]** | Condición especial de ejecución u obligación del contratista | Sólo con motivación en el Informe de Necesidad y en contratos armonizados | Certificado equivalente de cualquier Estado miembro; y otras pruebas de medidas equivalentes (art. 93.2 LCSP) | Cuando la conformidad con el Esquema Nacional de Seguridad ya cubra la necesidad. **Exigir las dos cosas sin motivar por qué no basta una es desproporcionado** |
| **Privacidad** | **UNE-EN ISO/IEC 27701:[año vigente]** | Obligación del contratista | Excepcional, sólo con motivación expresa | Las mismas | Cuando el contrato no comporte tratamiento de datos personales por cuenta del Ayuntamiento |
| **Esquema Nacional de Seguridad** | **Real Decreto 311/2022**, en la **categoría que resulte de su anexo I** para el sistema de que se trate | Prescripción técnica más acreditación | No procede como solvencia: es exigencia del sistema, no de la empresa | Según el art. 38.1: **certificación de conformidad** en categorías MEDIA y ALTA; **declaración de conformidad**, previa autoevaluación, en categoría BÁSICA | Nunca se exige una categoría a priori ni por remisión a un nivel predeterminado. La categoría **resulta** del análisis, firmado por el responsable de la información y el responsable del servicio, y la determina el responsable de la seguridad |
| **Cadena de suministro** | **Art. 2.3 del Real Decreto 311/2022** | Prescripción técnica | — | La exigencia se extiende a los subcontratistas cuyos sistemas sustenten el servicio, motivada en el análisis de riesgos | Cuando el análisis de riesgos no la sostenga. Extenderla a toda la cadena sin análisis reduce la concurrencia sin ganar seguridad |
| **Servicios electrónicos de confianza** | Condición de **prestador cualificado** conforme a la normativa europea de identificación electrónica y servicios de confianza | Requisito de aptitud o prescripción técnica | Sólo cuando el objeto comprenda efectivamente la prestación de tales servicios | La inscripción en la lista de confianza de cualquier Estado miembro | Cuando el objeto no comprenda la prestación de servicios de confianza. Exigirlo «por si acaso» es una barrera de entrada sin necesidad |
| **Calidad general** | UNE-EN ISO 9001:[año vigente] | Solvencia técnica en contratos armonizados | Sólo con motivación específica de qué aporta a **este** objeto | Certificados equivalentes y otras pruebas de medidas equivalentes (art. 93.2 LCSP) | Por defecto **no se exige**: es la certificación que más se pide por inercia y menos se motiva |

**Cómo se acredita una equivalencia, en tres reglas.**

1. **La carga de la prueba es del licitador**, que la aporta **con la oferta** o con la documentación previa a la adjudicación, según lo que el pliego determine. No se admite después.
2. **El rechazo se motiva.** Una equivalencia rechazada sin motivación técnica escrita es una decisión discrecional sobre un requisito de admisión, y así se alegará.
3. **La equivalencia se juzga sobre el contenido, no sobre el título.** Lo que hay que comprobar es si las medidas acreditadas cubren las mismas materias que la norma designada, no si el documento se llama igual.

**Regla final del anexo.** Si el redactor no sabe decir qué necesidad municipal concreta cubre una certificación, y con qué precepto, esa certificación no se exige. Un pliego que acumula certificaciones sin motivación individual no eleva la calidad de las ofertas: reduce el número de licitadores que pueden presentarlas.

---

### ANEXO XXII · MODELO DE ANUNCIO Y DE INFORME DE CONSULTA PRELIMINAR DEL MERCADO

Función: modelizar el instrumento que la memoria justificativa y el circuito del expediente describen y no entregan. La consulta preliminar del mercado del artículo 115 de la LCSP es la pieza que convierte la afirmación de neutralidad tecnológica en prueba de neutralidad tecnológica, y es además el contraste de mercado que el Anexo V exige para la revisión anual: **se hace una vez al año, de forma centralizada, y su documentación se reutiliza en todos los expedientes del ejercicio.** Hacerla por expediente es inasumible y no añade nada.

**Regla de orden, que es lo que más se incumple.** La publicación del anuncio es **previa** a la consulta, no posterior. Publicar después de haber hablado con el mercado no cumple el precepto y deja el expediente peor que si no se hubiera consultado.

---- INICIO DEL MODELO A — ANUNCIO PREVIO DE CONSULTA ----

**ANUNCIO DE CONSULTA PRELIMINAR DEL MERCADO**
*(Artículo 115 de la Ley 9/2017, de Contratos del Sector Público)*

Publicado en el perfil de contratante alojado en la Plataforma de Contratación del Sector Público [o servicio de información equivalente], con fecha …… / …… / …… .

**1. Órgano que promueve la consulta:** ……………………… · **Servicio responsable:** ………………………

**2. Objeto de la consulta.** Conocer las capacidades disponibles en el mercado en relación con [materia del ejercicio del Catálogo de Exigencias Tecnológicas: …………………], con la finalidad de preparar correctamente las licitaciones del ejercicio [ ] y de comprobar que las exigencias que se prevé incorporar pueden ser cumplidas, en el plazo previsto, por una pluralidad de operadores.

**3. Cuestiones que se someten a consulta.** *(Se formulan por función y por resultado, nunca por producto, protocolo o red.)*
a) ¿Con qué medios y en qué plazo puede exponerse [la capacidad de que se trate] en soluciones ya operativas en administraciones locales?
b) ¿Qué plazo mínimo razonable requiere su implantación desde la formalización de un contrato?
c) ¿Qué criterios de aceptación permitirían comprobarla de forma binaria en un entorno de pruebas?
d) ¿Qué coste incremental aproximado comporta, y sobre qué base se calcula?
e) ¿Qué obstáculos técnicos o de licenciamiento impedirían cumplirla?

**4. Inicio y plazo.** La consulta se inicia el …… / …… / …… y las aportaciones podrán presentarse hasta el …… / …… / …… , por [medio], en [formato].

**5. Terceros que van a participar.** Se relacionan a continuación las denominaciones de los terceros cuya participación está prevista a la fecha de este anuncio: ………………………………………… . *(Si se han seleccionado asesores externos, se expresan las razones de su elección: …………………)*

**6. Advertencias que se hacen constar expresamente.**
a) La participación en esta consulta **no comporta ventaja alguna** respecto de la adjudicación de los contratos que se convoquen, ni exclusión de ellos.
b) No se revelará a unos participantes la solución propuesta por otros.
c) Toda la información aportada que resulte relevante para las licitaciones **se pondrá a disposición del resto de licitadores** en las mismas condiciones.
d) De esta consulta no puede resultar un objeto contractual tan concreto y delimitado que únicamente se ajuste a las características técnicas de uno de los consultados.
e) Quienes participen deberán suscribir la declaración de participación previa en la preparación (modelo B del Anexo IX de este catálogo).

---- FIN DEL MODELO A ----

---- INICIO DEL MODELO B — INFORME MOTIVADO DE RESULTADO ----

**INFORME MOTIVADO DE LA CONSULTA PRELIMINAR DEL MERCADO**
*(Art. 115.3 de la Ley 9/2017. Forma parte del expediente y se publica con la misma publicidad que los pliegos.)*

**1. Anuncio previo.** Publicado el …… / …… / …… en …………… . Plazo de aportaciones: de …… a …… .

**2. Estudios realizados y sus autores.**

| Estudio o documento | Autor | Fecha | Encargado o espontáneo |
|---|---|---|---|
| | | | |

**3. Entidades consultadas y respuestas recibidas.**

| Entidad | Fecha de la aportación | Medio | ¿Ha suscrito la declaración de participación previa? |
|---|---|---|---|
| | | | ☐ Sí ☐ No |

**4. Cuestiones formuladas y síntesis de las respuestas.** *(Una fila por cuestión del apartado 3 del anuncio. La síntesis no identifica al autor de cada solución cuando ello revelaría su propuesta a los demás.)*

| Cuestión | Síntesis de las respuestas | Convergencias | Discrepancias |
|---|---|---|---|
| | | | |

**5. Conclusión sobre la pluralidad de operadores.** Del resultado de la consulta se concluye que las exigencias siguientes pueden ser cumplidas, en el plazo indicado, por un número de operadores no inferior a **[X; se recomienda 3]**:

| Exigencia | N.º de operadores que acreditan poder cumplirla | Plazo mínimo que declaran | ¿Se incorpora al Catálogo del ejercicio? |
|---|---|---|---|
| | | | ☐ Sí ☐ No, se aplaza |

**6. Resultados que se han tenido en cuenta al elaborar los pliegos, y resultados que no.** Se relacionan expresamente las aportaciones que se han incorporado y, respecto de las que no se han tenido en cuenta, **el motivo**: ………………………… . *(La omisión de este apartado es el defecto más frecuente y el más fácil de reprochar: el precepto obliga a dejar constancia de los motivos.)*

**7. Medidas adoptadas para que la participación previa no falsee la competencia.** Se remite al cuadro C del Anexo IX, cuyas filas se cumplimentan con la constancia documental de este expediente.

Firma del servicio responsable · Fecha

---- FIN DEL MODELO B ----

---

### ANEXO XXIII · PRESTACIONES DE CARÁCTER INTELECTUAL: REGLA DE MOTIVACIÓN

Función: cerrar un concepto del que dependen tres decisiones de este catálogo y que ninguna de sus partes define. De la calificación de un contrato como de prestaciones de carácter intelectual dependen: el **51 %** mínimo de criterios cualitativos (art. 145.4 LCSP), el **45 %** de tope de juicio de valor en el procedimiento abierto simplificado en lugar del 25 % (art. 159.1.b), y la **exclusión del procedimiento abreviado** (art. 159.6).

**Advertencia de método, que se formula como se formulan en este documento todas las afirmaciones negativas.** La Ley de Contratos del Sector Público emplea la expresión en los preceptos citados y no la define. Este catálogo **no ha verificado en fuente primaria** doctrina que delimite el concepto para los contratos de servicios informáticos; la comprobación queda encargada antes de aprobar cualquier expediente que se apoye en la calificación, y se añade a las comprobaciones pendientes del Anexo XI.3. Lo que sigue no es, por tanto, una definición: es una **regla de motivación**, y su valor está en obligar a escribir el razonamiento donde tiene que estar.

**Regla primera: la calificación se motiva en el expediente, antes de aprobar el pliego, y no se deduce del objeto.** No basta con que el contrato sea de servicios informáticos. Se motiva por escrito, en el Informe de Necesidad, y la motivación se traslada a la memoria de criterios.

**Regla segunda: se motiva sobre la prestación, no sobre el sector.** Los indicios que sostienen la calificación, que deben concurrir de forma acumulativa y acreditarse uno a uno:

| Indicio | Cómo se acredita en el expediente |
|---|---|
| La prestación consiste principalmente en **análisis, diseño, concepción o elaboración**, y su resultado no es un bien ni un servicio predeterminado | Descripción del entregable principal: si es un producto ya existente que se instala y se mantiene, el indicio no concurre |
| El resultado **varía sustancialmente** según la aptitud y el criterio profesional de quien lo ejecuta | Comparación razonada de dos soluciones posibles para la misma necesidad |
| La calidad del resultado **no puede asegurarse mediante prescripciones técnicas cerradas** y sólo se comprueba valorando la solución propuesta | Motivación de por qué el PPT no puede describir exhaustivamente el resultado exigido |
| El coste está determinado principalmente por el **esfuerzo profesional cualificado**, y no por licencias, equipos o infraestructura | Desglose del presupuesto base de licitación por partidas |

**Regla tercera: la calificación tiene consecuencias en cadena, y se comprueban todas antes de publicar.**

| Si el contrato **es** de prestaciones de carácter intelectual | Si **no** lo es |
|---|---|
| Los criterios cualitativos deben representar al menos el **51 %** de la puntuación (art. 145.4) | No opera ese mínimo |
| En el abierto simplificado, el juicio de valor puede llegar al **45 %** (art. 159.1.b) | El tope es el **25 %** |
| **No cabe el procedimiento abreviado** (art. 159.6) | Cabe, si se cumplen sus demás requisitos |

**Regla cuarta, y es la que más veces se incumple: la calificación no se usa a conveniencia.** Un expediente no puede invocar el carácter intelectual para justificar un 45 % de juicio de valor y, en el mismo pliego, tramitar por el procedimiento abreviado, que esa misma calificación excluye. Ni puede invocarlo para el 51 % y negarlo al calcular el tope del simplificado. **La calificación es una y produce todos sus efectos.** El aviso correspondiente figura en el Anexo IV, comprobaciones 2, 3 y 4.

**Regla quinta: por defecto, no se califica.** Cuando el contrato tenga por objeto el suministro, la implantación y el mantenimiento evolutivo de una solución de mercado —que es el supuesto ordinario de este catálogo—, la calificación **no** procede, y el expediente lo dice en una línea. Calificar por inercia un contrato de mantenimiento como prestación intelectual, para elevar el peso del juicio de valor, es exactamente lo que un órgano de recursos comprueba primero.

---

### ANEXO XXIV · CONTRATOS YA FORMALIZADOS CON LA VERSIÓN 2 DEL CLAUSULADO

Función: resolver el caso que el resto del documento no cubre. La tabla de correspondencias del Anexo XII dice a quien **va a redactar** qué debe rectificar; el circuito del expediente cubre las prórrogas; el piloto cubre lo que está por licitar. Falta el contrato **vivo, formalizado y en ejecución** con cláusulas de la versión 2.

**Regla primera, y de ella deriva todo lo demás: los pliegos son *lex contractus*.** Las correcciones de la versión 3 **no se aplican retroactivamente** a un contrato en vigor. Lo pactado es lo que figura en sus pliegos, con sus defectos. Nada de lo que este catálogo diga altera un contrato ya formalizado, y así se hace constar en la resolución de aprobación anual del Anexo XV.

**Regla segunda: lo que no se puede hacer.**

- **No se introducen las cláusulas de la versión 3 por la vía de una modificación contractual.** Una modificación no prevista de las del artículo 205 de la LCSP exige que concurran sus supuestos; añadir obligaciones nuevas al contratista porque el Ayuntamiento ha mejorado su clausulado no es ninguno de ellos. Intentarlo produce una modificación anulable y un contratista con derecho a reclamar.
- **No se reinterpretan las cláusulas de la versión 2 con el vocabulario de la versión 3.** Si el contrato dice «obsolescencia tecnológica» con la definición abierta que la versión 3 abandonó, esa es la obligación pactada, y su indeterminación juega contra quien la redactó.
- **No se penaliza sobre hechos que el contrato no tipifica.** El cuadro de penalidades de la versión 3 no es aplicable a un contrato que no lo incorpora.

**Regla tercera: lo que sí se puede hacer, por orden de menor a mayor intervención.**

| Actuación | Cuándo procede | Con qué se documenta |
|---|---|---|
| **Inventariar** los contratos vivos con cláusulas de la versión 2, con su fecha de finalización y de prórroga | Siempre, y es lo primero | Relación firmada por el responsable de cada contrato |
| **Ejercer las facultades que el contrato ya concede** —seguimiento, informes, entrega de documentación— aunque el contrato no las llame como las llama la versión 3 | Siempre | Actas del Anexo XVIII, adaptadas al contenido del contrato de que se trate |
| **Solicitar del contratista, sin contraprestación y con carácter voluntario**, la entrega anticipada del inventario de componentes y del diccionario de datos | Cuando el contrato no los prevea y el contratista acceda | Acuerdo escrito que **declare expresamente su carácter voluntario y gratuito**, y que no altera el contrato |
| **Preparar la reversión con lo que el contrato dé de sí** | Desde el penúltimo año | Ensayo con el modelo B del Anexo XVIII, en la medida en que el contrato lo permita; y en su defecto, informe que deje constancia de lo que **no** puede exigirse, para la siguiente licitación |
| **No prorrogar**, cuando la prórroga sea potestativa y el contrato carezca de reversibilidad | Cuando el informe anterior acredite el riesgo | Informe motivado previo al acuerdo de prórroga |
| **Aplicar el catálogo íntegro en la licitación siguiente** | Siempre | Ficha del Anexo II e Informe de Necesidad del nuevo expediente |

**Regla cuarta: las prórrogas.** En una prórroga no caben obligaciones nuevas. Lo que sí cabe, y conviene, es que el informe que la propone deje constancia de qué exigencias del catálogo **no** pueden introducirse y de qué consecuencias tiene, para que la decisión de prorrogar se adopte sabiendo lo que se prorroga.

**Regla quinta, y es la única buena noticia del anexo: el valor está en la siguiente licitación.** Un contrato vivo mal cubierto no se arregla; se documenta. El Dossier de Reversibilidad que hoy no existe se sustituye por el informe de lo que no puede exigirse, y ese informe es el mejor material de partida del pliego siguiente. Es también el argumento más eficaz ante el órgano de gobierno para aprobar el acuerdo del Anexo VIII.

---

### ANEXO XXV · REGLA DE COMPOSICIÓN Y NUMERACIÓN DE LOS APÉNDICES TÉCNICOS DEL PLIEGO

Función: entregar la matriz funcional que sirve de base al criterio C1 y evitar que tres cláusulas técnicas remitan cada una a «el apéndice de este pliego» sin que nadie diga cuántos son ni cómo se numeran. El criterio C1 y las cláusulas DT-4·v3, DT-7·v3 y DT-9·v3 exigen apéndice, y el Anexo XIX de este catálogo añade uno más. Un pliego con apéndices sin rotular produce remisiones que no resuelven.

**Una sola sede para la interfaz normalizada.** DT-7·v3 y DT-9·v3 versan sobre el mismo elemento —los módulos y las funciones de la interfaz normalizada— y comparten un **único apéndice**. La versión anterior de esta regla les daba uno a cada una, con el resultado de que un pliego montado al pie de la letra tenía **dos relaciones cerradas sobre la misma interfaz** y el criterio de adjudicación A no decía respecto de cuál se medía el exceso ofertado: indeterminación del término de comparación de un criterio automático (arts. 145.5.b y 145.5.c LCSP) y el vicio que la regla V.A.1.7 del Anexo V declara inadmisible. Los módulos, las funciones mínimas y las funciones adicionales ofertables se relacionan **exclusivamente** en el apartado inicial del Apéndice técnico 2, delante de la transcripción del Catálogo del ejercicio.

**Regla de composición del PPT.** Todo pliego de prescripciones técnicas que incorpore cláusulas de este catálogo se compone de: (a) el cuerpo del pliego; (b) los apéndices técnicos que siguen, en este orden y con esta rotulación; y (c) los que el objeto del contrato exija además, numerados a continuación.

| N.º | Rótulo | Contenido | Cláusula que lo exige | Se suprime si… |
|---|---|---|---|---|
| **Apéndice técnico 0** | **Matriz de requisitos funcionales** | Dos bloques cerrados y numerados: A, requisitos mínimos obligatorios, que no puntúan; B, requisitos funcionales valorables, que constituyen la única base del criterio C1 | ADM-7·v3, criterio C1 | El baremo no incorpora C1. Si el bloque B queda vacío, C1 se suprime y el baremo se recompone antes de publicar |
| **Apéndice técnico 1** | **Procesos automatizables** | Lista **cerrada y numerada** de los procesos cuya automatización se exige como mínimo, y de los que pueden ofertarse por encima del mínimo, separados en dos bloques | DT-4·v3 | DT-4·v3 se marca NO APLICA |
| **Apéndice técnico 2** | **Exigencias tecnológicas determinadas** | Dos apartados, en este orden: (i) relación cerrada y numerada de los módulos sobre los que se expone la interfaz, de las **funciones mínimas** exigidas y, en bloque separado, de las **funciones adicionales ofertables**, que es la única base del criterio A; y (ii) transcripción física del Catálogo de Exigencias Tecnológicas del ejercicio, con su versión y su fecha, recortado a los módulos del contrato | DT-7·v3, DT-9·v3 y Anexo V | **Ambas** se marcan NO APLICA. Si sólo se marca NO APLICA DT-7·v3, decae el apartado (i); si sólo se marca NO APLICA DT-9·v3, decae el apartado (ii). El apéndice conserva rótulo y número en los dos casos |
| **Apéndice técnico 3** | **Vigencia normativa de las exigencias de este pliego** | El extracto del Anexo XIX, con su fecha de corte | DT-1·v3 | No se incorpora ninguna cláusula que distinga entre obligación legal y exigencia contractual anticipada |

**Modelo del Apéndice técnico 0.** Se cumplimenta antes de publicar y se transcribe físicamente al PPT. Las filas se enuncian por el resultado funcional exigido, sin nombrar productos ni describir cómo debe implementarse.

:::pliego
**APÉNDICE TÉCNICO 0 · MATRIZ DE REQUISITOS FUNCIONALES**

**Bloque A · Requisitos mínimos obligatorios.** Todos los requisitos de este bloque son prescripciones técnicas mínimas. Su cumplimiento no atribuye puntuación y su incumplimiento se trata conforme al régimen de admisión de ofertas fijado en los pliegos.

| N.º | Requisito funcional mínimo obligatorio, enunciado por resultado | Momento en que debe estar operativo |
|---|---|---|
| A.1 | | |
| A.2 | | |
| … | | |

**Bloque B · Requisitos funcionales valorables.** Esta relación es cerrada: sólo sus filas pueden atribuir puntuación en el criterio C1.

| N.º | Requisito funcional valorable, enunciado por resultado | Compromiso del licitador | Versión y módulo que lo soporta o hito de desarrollo comprometido |
|---|---|---|---|
| B.1 | | ☐ Sí ☐ No | |
| B.2 | | ☐ Sí ☐ No | |
| … | | ☐ Sí ☐ No | |

**Regla de valoración.** C(i) es el número de filas del bloque B que el licitador marque «Sí» y acredite por el medio documental del criterio C1. Se aplica la fórmula de cantidad publicada en el PCAP, correspondiente a la fórmula E del Anexo XVII del catálogo, con **Cmín = 0** y **Ctecho = número total de filas publicadas en el bloque B**. Las filas del bloque A no puntúan. Si el bloque B queda vacío, se suprime C1 y se recompone el baremo antes de publicar el anuncio.
:::

**Reglas de aplicación.**

1. **Los apéndices no se renumeran al suprimir uno.** Si el Apéndice técnico 0 o el Apéndice técnico 1 no proceden, se hace constar en el índice «Apéndice técnico 0 · No procede» o «Apéndice técnico 1 · No procede», respectivamente, y se conservan los números de los siguientes. Renumerar rompe todas las remisiones del cuerpo del pliego, que es exactamente el defecto que este anexo evita.
2. **Las remisiones del cuerpo del pliego citan el rótulo completo**, no sólo el número: «el Apéndice técnico 2 · Exigencias tecnológicas determinadas». Cuando la remisión se refiera sólo a una parte del apéndice, se cita también el apartado: «el apartado de módulos y funciones de la interfaz normalizada del Apéndice técnico 2 · Exigencias tecnológicas determinadas».
3. **Los anexos del PCAP se numeran por separado y con numeración propia del expediente.** No se emplea la numeración romana de este catálogo para los anexos de un pliego: el Anexo IX de este catálogo es la declaración de conflicto de interés y el X es la tabla de parámetros, y un redactor que siga esa remisión aterriza en el documento equivocado. En el articulado, las remisiones a anexos del pliego se escriben **«Anexo [ ] de este pliego»**, y el número lo pone el redactor del expediente.
4. **Todo apéndice se transcribe físicamente.** Ninguno se incorpora por remisión a un documento municipal revisable.

---

### ANEXO XXVI · MATRIZ DE RIESGOS Y MEDIDAS DE CONTROL

Función: para cada uno de los doce riesgos que este catálogo se propone reducir en un contrato TIC con inteligencia artificial, decir qué cláusula responde, hasta dónde y qué queda a cargo del órgano de contratación porque ninguna cláusula lo resuelve. Al órgano de contratación le sirve para decidir qué incorpora; al órgano de control, para comprobar que cada riesgo tiene respuesta o que su falta consta asumida. Los doce son riesgos habituales de la contratación TIC; su descripción, la lectura de la cobertura y lo que queda a cargo del órgano son de este catálogo. Es instrumento de trabajo del expediente y **no se transcribe al pliego**.

**Lo que este anexo no fija: la probabilidad y el impacto.** Cuánto es probable cada riesgo y cuánto daño haría dependen del contrato: de su objeto, de su duración, de los datos que trata, del mercado que lo puede atender y de la plantilla que lo va a verificar. Por eso **los valora cada expediente con sus datos, en el informe de necesidad (Anexo III) o en la memoria justificativa del contrato (Parte V, V.4.5)**, y este anexo no les asigna valor ni ordena los riesgos por nivel. Una valoración común a todos los contratos acabaría copiada de expediente en expediente, que es lo que la Parte V, V.3.2, regla 6, señala como prueba de justificación estereotipada.

**Lo que este anexo no repite.** Los cuatro riesgos jurídicos de incorporar estas cláusulas —proporcionalidad, competencia, neutralidad tecnológica y evoluciones futuras sin definir— tienen su tabla en la Parte 0, §0.1, con el sitio del catálogo que responde a cada uno. Este anexo mira la gestión del contrato y remite a aquella tabla en R1, R4, R5 y R6. Tampoco sustituye al análisis de riesgos del Esquema Nacional de Seguridad (Parte V, V.4.11), que es del sistema y se hace conforme al anexo I del Real Decreto 311/2022.

#### XXVI.1 Los doce riesgos, la cláusula que responde y lo que queda fuera

En la columna «Riesgo», cada vertiente va en cursiva y reaparece, con la misma palabra, en la columna siguiente. Cada referencia se ha comprobado en el texto de esta versión.

| ID | Riesgo | Dónde lo cubre el catálogo | Cobertura | Qué queda a cargo del órgano de contratación |
|---|---|---|---|---|
| **R1** | **La solución se queda atrás antes de que acabe el contrato.** Lo contratado deja de servir a lo que el servicio necesita durante la vigencia o las prórrogas, porque el contrato no prevé su *evolución*, nadie hace el *seguimiento* de la que prevé o lo que se pide no estaba *definido* al licitar | *Evolución:* ADM-2·v3, apartados 1 a 5, y DT-9·v3, apartado 1; versiones sucesoras sin coste en ADM-2·v3, apartado 6, y DT-9·v3, apartado 7; bolsa de servicios evolutivos de ADM-3·v3, bloque 2, sólo en contratos de desarrollo o mantenimiento de aplicaciones. *Seguimiento:* ADM-4·v3, apartado 3.a) (informe anual); DT-9·v3, apartado 6, y epígrafe 5 (repetición anual de una muestra de criterios); ADM-10·v3, apartado 2.c) (fin de soporte declarado por el fabricante). *Definido:* Anexo V (ET-1 a ET-3), transcrito en el Apéndice técnico 2 (Anexo XXV); definición de obsolescencia en la Parte I, §5.2, letra f). Parte 0, §0.1, fila «Evoluciones futuras sin definir» | **Plena** | Aprobar el Anexo V y contrastarlo cada año con el mercado (Anexo XV). Sin él no entran ADM-2·v3 ni DT-9·v3 (epígrafe 7 de cada una); si el órgano de gobierno no aprueba nada, Parte IV, §M1.2 bis. Lo que no figure en el Anexo no es exigible (Parte I, §7.4): va a la licitación siguiente o, si se previó, a ADM-14·v3 |
| **R2** | **El Ayuntamiento no puede cambiar de proveedor sin perder el servicio.** Al terminar el contrato no consigue *salir* con lo que es suyo, *llevarse* sus datos a otra solución, *entender* lo que recibe o contar con *ayuda en el relevo* | *Salir:* DT-8·v3, apartados 1 a 8 (entrega sin coste, Inventario de Componentes, Plan y ensayo, licencia de continuidad, Dossier de Reversibilidad, acta de reversión); ADM-8·v3, apartados 1, 2, 5 y 6 (titularidad de lo desarrollado y licencia mínima sobre el producto base); ADM-11·v3, sólo si concurren todas las circunstancias de su apartado 1. *Llevarse:* DT-5·v3, apartados 1, 3 y 4 (interoperabilidad, interfaces y exportación de la totalidad de los datos); DT-8·v3, apartado 1.a). *Entender:* DT-8·v3, apartados 1.c) y 1.e); DT-7·v3, apartado 3.d). *Ayuda en el relevo:* sólo la documental del Dossier (DT-8·v3, apartado 6); la definición de reversibilidad nombra la asistencia durante el período de transición (Parte I, §5.2, letra d)), pero DT-8·v3 no la regula | **Parcial**: plena salvo en la ayuda en el relevo | Si el relevo necesita asistencia al Ayuntamiento o al contratista entrante, fijar en el PPT su contenido, sus perfiles y sus horas. Presenciar el ensayo de reversibilidad (DT-8·v3, epígrafe 5) |
| **R3** | **Lo que el pliego exige sobre inteligencia artificial no se puede comprobar, y por tanto no se puede exigir.** Falta una *medida* objetiva, una *prueba* tasada, la posibilidad de *examinar* el sistema o un *acta* que deje constancia | *Medida:* criterios de aceptación binarios (DT-9·v3, apartado 4; Anexo V, V.A.1, regla 2); indicadores de DT-4·v3, apartado 4; medio de verificación de cada criterio de adjudicación (ADM-7·v3, ADM-7.1, apartado 5). *Prueba:* epígrafe 4 de cada cláusula (medios tasados); ADM-2·v3, apartado 7; registros exportables de DT-1·v3, apartado 6.c), y criterios por resultado de su apartado 11; accesos de consulta de ADM-12·v3, con la relación cerrada de consultas de su texto para el PPT (epígrafe 2). *Examinar:* DT-6·v3, apartado 8; DT-1·v3, apartado 7 (lógica y código de lo desarrollado para el Ayuntamiento, en decisiones automatizadas); muestra de verificación de sesgos de DT-1·v3, apartado 13.b). *Acta:* DT-1·v3, apartado 9; DT-7·v3, apartado 6; DT-9·v3, apartado 5; modelos A y F del Anexo XVIII. Consecuencia tasada: ADM-5·v3, apartado 3 (lista cerrada de tipos). Regla general: Parte I, §7.9 | **Plena** | Ejecutar las pruebas y levantar las actas: sin acta no consta ni el cumplimiento ni el incumplimiento (DT-9·v3, epígrafe 4). Pedir al órgano interventor la relación de consultas que el PPT de ADM-12·v3 deja en blanco. Depende de que exista quien lo haga (R8) |
| **R4** | **Una redacción abierta a interpretación da pie a recurso.** El texto admite más de una lectura, no se sabe de qué norma o necesidad sale o nadie lo revisó antes de aprobarlo: falla la *redacción*, el *origen* o la *revisión* | *Redacción:* los siete epígrafes de cada cláusula (Parte II, II.0); definiciones de la Parte I, §5.2; reglas de agotamiento y de esencialidad tasada (Parte I, §7.4 y §7.5); tipificación cerrada de ADM-5·v3, apartado 3, y lista cerrada de ADM-6·v3, apartados 2 y 3; dependencias del Anexo VI. *Origen:* epígrafe 3 de cada cláusula; Parte IV, M2 (encaje legal) y M8 (doctrina, con copia de cada resolución citada: §M8.3). *Revisión:* Parte V, V.4.15 (informe jurídico), V.2.3 (quién tiene la pluma de la coherencia entre PPT y PCAP) y V.10 (lista de comprobación final); Parte IV, M10.1. Parte 0, §0.1, fila «Proporcionalidad» | **Plena** | Recabar en cada expediente el informe jurídico y, antes de aplicar el catálogo, el informe firmado y fechado de los servicios competentes (Parte IV, §M11, fila 4). El catálogo no promete que un tribunal no pueda anular un pliego (Parte 0, §0.3) |
| **R5** | **Concurren pocas empresas, o una sola.** Las exigencias se escriben sin *preguntar* antes al mercado, sin *admitir equivalentes* o de forma que sólo encajen con un producto: falta *neutralidad* | *Preguntar:* Parte IV, §M3.2 y §M3.3; Parte V, V.4.13; Anexo XXII. *Admitir equivalentes:* DT-0·v3, apartados 3 a 5; Parte I, §7.7; Anexo XXI. *Neutralidad:* DT-0·v3, apartados 1 y 6; DT-7·v3, apartado 4; Parte I, §4.2; ADM-7·v3, ADM-7.1, apartado 2 (no se puntúa la tenencia previa). Además, Parte IV, §M1.6, puntos 2 y 3 (aviso anticipado y plazo de presentación ampliado), y §M7.3. Parte 0, §0.1, filas «Competencia» y «Neutralidad tecnológica» | **Plena** | Hacer la consulta anual y publicar su informe: es condición suspensiva pendiente (Parte IV, §M11, fila 2) y, sin ella, la neutralidad está diseñada pero no acreditada (§M3.1). Revisar las especificaciones heredadas de otro pliego (Parte VI, §VI.2.3) y decidir sobre los lotes (Parte V, V.4.9) |
| **R6** | **Se paga aparte lo que no se previó, o dos veces lo que ya se pagó.** Una capacidad nueva llega sin saber si está *incluida* en el precio, por qué *cauce* se pide si no lo está y con qué *techo* | *Incluida:* DT-9·v3, apartados 1 y 3, y ADM-2·v3, apartados 2 y 4 (el Anexo V va en el precio y fuera de él no hay evolución exigible); DT-5·v3, apartados 3 y 4, y su epígrafe 6 (facturar las consultas o la exportación es muy grave); ADM-12·v3, apartado 1 (accesos de control con cargo al precio); DT-8·v3, apartado 1 (entrega sin coste). *Cauce:* ADM-3·v3, bloque 2 (bolsa por horas y perfil, con catálogo cerrado de peticiones); ADM-14·v3 (modificación prevista, que por defecto no se incorpora); entre los dos, ADM-3·v3, bloque 2, apartado 2, y ADM-14·v3, apartado 2 (no se imputa a ninguno lo que retribuye el precio; lo que cabe en la bolsa va sólo por ella, aunque se agote); Anexo X, X.3 (cada unidad de despliegue con su cláusula, su máximo y su peso en el criterio de precio unitario, y ninguna en la bolsa); ADM-12·v3, apartado 1 (accesos adicionales con precio ofertado, máximo y cómputo en el valor estimado). *Techo:* ADM-3·v3, bloque 2, apartados 3 y 5 (las horas no consumidas no se abonan; bolsa recomendada del 5 % del presupuesto base de la duración inicial, nunca más del 10 %); ADM-14·v3, apartado 4 (nunca más del 20 % del precio inicial); Parte IV, §M6.2 (criterio de prudencia del 15 % del presupuesto base, que se propone y no es regla legal). Parte 0, §0.1, fila «Evoluciones futuras sin definir» | **Plena**: cada vertiente tiene su regla, y también el paso de un cauce a otro. La bolsa toma sólo lo que excede del PPT y del Anexo V (clases (iii) y (vi)) y la adaptación de la parametrización a normas posteriores a la oferta (clase (iv)); la modificación, la extensión a módulos u operaciones fuera del Anexo y la adaptación de la solución a normas nominadas (ADM-14·v3, apartado 2, letras a) a d)) | Clasificar cada petición de servicio en su clase y comprobar en el cierre anual de la bolsa que ninguna imputada estaba ya en el precio (Anexo XIV, apartado 5; Parte IV, §M10.2, punto 11). Sustituir los órdenes de magnitud del §M6.2 por cifras propias (Parte IV, §M11, fila 6); certificado de crédito, compromisos plurianuales y valor estimado con la bolsa, los accesos adicionales y la reserva dentro (Parte IV, §M6.4; Parte V, V.4.10) |
| **R7** | **La solución o su uso vulneran la normativa de inteligencia artificial o de protección de datos.** Faltan *requisitos* en el pliego, la información para las *evaluaciones de impacto*, la posibilidad de *auditar* o una *vigilancia* durante la ejecución | *Requisitos:* DT-1·v3, apartados 3, 4, 5 y 7 (prácticas prohibidas, transparencia, alto riesgo y decisiones automatizadas); DT-6·v3, apartado 5; DT-5·v3, apartado 5 (ubicación de los servidores); ADM-13·v3, apartado 2 (información de nivel 1, que incluye los datos personales); ADM-6·v3, apartado 1 (bloque A, cuando concurra su presupuesto); calendario de exigibilidad en los Anexos XI y XIX. *Evaluaciones de impacto:* el contratista aporta la información técnica (DT-1·v3, apartado 6.b); DT-6·v3, apartado 5). *Auditar:* DT-6·v3, apartado 8; DT-1·v3, apartado 7. *Vigilancia:* DT-1·v3, epígrafe 5 (aceptación de cada funcionalidad y revisión anual del inventario); ADM-1·v3, modalidad B, apartado 1; ADM-4·v3, apartado 3 | **Plena**, en lo que un contrato puede exigir | Las evaluaciones de impacto, la supervisión humana por personal con competencia y autoridad, el registro que corresponde al responsable del despliegue y la política interna de uso (Anexo XVI) son del Ayuntamiento y no se trasladan al contratista (DT-1·v3, apartado 6; Parte I, §3.3, filas 13 a 15) |
| **R8** | **El Ayuntamiento no tiene quién verifique lo que contrata.** No hay *responsables* designados, no hay *horas* calculadas para verificar, falta *formación* o falta *apoyo* técnico cuando la tarea excede de la plantilla | *Responsables:* ADM-4·v3, apartados 1 y 2 (responsable del contrato y Comisión de Seguimiento); Parte V, V.2.3. *Horas:* ADM-4·v3, epígrafe 5 (tabla única de carga y «Versión mínima»: el mínimo de partida del §VI.2.2 de la Parte VI carga 20–24 horas al año en régimen ordinario y 44–60 el primer año, más los sumandos condicionales de DT-1·v3 y DT-7·v3); Parte I, §7.9; Anexo II, casillas (d) a (f); Parte V, V.2.1, paso A-6. *Formación:* DT-1·v3, apartado 6.f), sólo para quien ejerce la supervisión humana; criterio C4 de ADM-7·v3 (ADM-7.2), que puntúa el plan de formación pero no lo impone. *Apoyo:* sólo para tareas concretas: auditoría por tercero designado (DT-6·v3, apartado 8), verificación técnica del depósito (ADM-11·v3, apartado 4) y consulta preliminar del mercado, centralizada y con presupuesto del servicio promotor (Parte IV, §M6.2, fila 8) | **Parcial**: no hay apoyo técnico externo para la supervisión ordinaria, y la formación exigible se limita a la supervisión humana | Asignar puestos y horas reales o, si no las hay, reducir cláusulas o contratos (ADM-4·v3, epígrafe 5, regla de cierre). Si hace falta asistencia técnica externa para supervisar, es otro contrato, con su propio expediente: el catálogo no la regula |
| **R9** | **Al terminar el contrato no se recibe todo lo que es municipal.** Datos, código, configuraciones o documentación llegan tarde, incompletos o inservibles, porque no había *plan* de salida, *fechas* ciertas ni *consecuencia* por no cumplirlas | *Plan:* DT-8·v3, apartado 3 (Plan de Reversibilidad, actualización anual y ensayo). *Fechas:* DT-8·v3, apartados 4 (calendario de la reversión) y 8 (acta de reversión y efectos); ADM-12·v3, apartado 6; modelos B y C del Anexo XVIII. *Consecuencia:* ADM-5·v3, tipos L10, G3, G20 y M4; obligación esencial en ADM-6·v3, apartado 2, B.1.a); ADM-8·v3, epígrafe 6; garantía, Parte IV, §M5.4 | **Plena** | Presenciar el ensayo y levantar el acta de reversión en plazo: el silencio juega a favor del contratista (DT-8·v3, apartado 8). En contratos ya formalizados con la versión 2, Anexo XXIV |
| **R10** | **El mercado no puede o no quiere ofertar lo que se exige.** La exigencia se publica sin *contrastarla* antes con quien tendría que cumplirla, o entra entera de una vez en lugar de *graduarse* | *Contrastarla:* Parte IV, §M3.2, y §M1.6, punto 1 y regla de cierre (lo que el mercado no puede cumplir no entra en el pliego); Anexo V, advertencia de contraste de mercado y V.A.4, punto 2; Anexo XV; Anexo XXII, modelo B, apartado 5 (conclusión sobre la pluralidad de operadores). *Graduarse:* Parte IV, §M1.6, punto 4; Parte VI, §VI.2.2 (subconjunto mínimo de seis cláusulas, siete con DT-1·v3); ADM-4·v3, epígrafe 5 («Versión mínima», con la carga de ese subconjunto y la salida de un Anexo V de una sola exigencia); Parte I, §2.2 (cuadro de intensidad); Anexo V, nota de alcance sobre ET-2 | **Plena** | Hacer el contraste cada año antes de aprobar el Anexo V (Parte IV, §M11, fila 2, pendiente) y retirar o aplazar, con constancia motivada, lo que no lo supere |
| **R11** | **No se sabe por qué el sistema da el resultado que da.** El órgano no puede motivar un acto apoyado en el sistema ni detectar un error o un sesgo, porque falta *explicación* del resultado, *documentación* del sistema, *control de sesgos*, *auditoría* o *rastro* de lo que hizo | *Explicación:* DT-1·v3, apartado 4 (transparencia ante las personas y marcado de contenido); DT-1·v3, apartado 11 (criterios que han determinado cada resultado que pueda fundar un acto de un procedimiento, también cuando el sistema sólo propone, o constancia de que no pueden identificarse); DT-1·v3, apartado 7 (en decisiones automatizadas: acceso a la lógica, intervención humana e impugnación); fuera de los procedimientos administrativos, sólo el principio 2 de la Parte I, §6, que tiene valor interpretativo. *Documentación:* DT-1·v3, apartados 2, 5, 6.a) y b) y 12 (recogida y etiquetado de los datos). *Control de sesgos:* DT-1·v3, apartado 13. *Auditoría:* DT-1·v3, apartado 7, y ADM-8·v3, apartado 7, sobre lo desarrollado para el Ayuntamiento. *Rastro:* DT-1·v3, apartados 6.c) y 8; DT-4·v3, apartado 3.b); DT-7·v3, apartado 3.c); Anexo V, ET-3; DT-9·v3, apartado 8 | **Parcial**: plena en documentación y rastro; la explicación se limita a los resultados que pueden fundar un acto, con el detalle que la técnica del sistema permita, y la auditoría, a las decisiones automatizadas y a los componentes desarrollados para el Ayuntamiento | Si el uso exige explicar resultados que no fundan actos de un procedimiento, o auditar el modelo del producto base, escribirlo en el PPT como exigencia funcional verificable y contrastarlo con el mercado: el catálogo no lo exige, y no pide el código del producto base (ADM-8·v3, apartado 4) |
| **R12** | **La solución se implanta y el personal no la usa.** No hay *formación* para quien la usa, nadie se ocupa del *cambio* en la forma de trabajar, no se *prueba* con usuarios antes de generalizarla y no hay *indicadores* de uso | *Formación:* criterio C4 de ADM-7·v3 (ADM-7.2), que puntúa lo que exceda de las horas mínimas que fije el PPT y desaparece en el procedimiento abreviado (ADM-7.4); DT-1·v3, apartado 6.f), sólo para la supervisión humana. *Cambio:* ninguna cláusula; lo más próximo es el «acompañamiento» de C4. *Prueba:* ninguna con usuarios —el piloto de la Parte VI es del catálogo, no de la solución—; el entorno de pruebas (DT-5·v3, apartado 6) y la aceptación previa (DT-1·v3, apartado 9; DT-4·v3, apartado 5) permiten probar antes de producción. *Indicadores:* DT-4·v3, apartado 4, sólo para procesos automatizados; ADM-4·v3, apartado 3.d); ADM-10·v3, apartado 2.e), y Anexo XIV, apartado 6 | **Parcial** | Fijar en el PPT las horas mínimas de formación de los usuarios, los indicadores de uso de la solución y, si se quiere, una prueba con usuarios antes de generalizarla. El cambio en la forma de trabajar es organización interna y ninguna cláusula lo sustituye |

**Cómo se lee la columna «Cobertura».** *Plena*: el catálogo tiene cláusula o regla para cada vertiente del riesgo que nombra la segunda columna. *Parcial*: para alguna no la tiene, o la tiene sólo en un supuesto, y la misma celda dice cuál. *No cubre*: no tiene ninguna; no se da en ninguno de los doce. Plena no quiere decir que el riesgo desaparezca: quiere decir que la cláusula existe. Que se incorpore y se verifique es trabajo del expediente.

#### XXVI.2 Lo que la tabla deja a la vista

De los doce riesgos, **ocho tienen cobertura plena** (R1, R3, R4, R5, R6, R7, R9 y R10) y **cuatro, parcial** (R2, R8, R11 y R12). Las cuatro faltas no son del mismo tipo:

1. **Dos se resuelven en el pliego del expediente**, porque el catálogo deja el hueco a sabiendas: la ayuda en el relevo (R2) y la explicación de resultados que no fundan actos (R11) se escriben en el PPT, con contenido verificable y contrastado con el mercado.
2. **Dos dependen de la organización y no de una cláusula**: quién verifica (R8) y si el personal usa la solución (R12). R12 es el peor cubierto de los doce: el pliego puede fijar formación e indicadores, y lo demás es trabajo interno.

#### XXVI.3 Regla de uso en la memoria justificativa y en el informe de necesidad

**Este anexo no motiva ningún expediente.** El catálogo lo advierte de sí mismo: la remisión desde la memoria de un expediente a la Parte IV o al catálogo es justificación estereotipada (Parte IV, IV.0; Parte I, §3.8, consecuencia 2), y un párrafo repetido en varios expedientes es su prueba documental (Parte V, V.3.2, regla 6). Copiar la fila de un riesgo es la misma remisión con otra forma. Es material de partida, como la Parte IV en la letra b) de su regla de uso (IV.0), no fundamento. Se usa así:

1. **El riesgo entra en el expediente con datos del expediente.** En el informe de necesidad (Anexo III): en el apartado 1, qué deja de poder hacerse si no se contrata; en el 4, qué necesidad concreta cubre cada exigencia y por qué es proporcionada a este contrato; en el 7, el coste de no evolucionar. En la memoria justificativa del contrato (Parte V, V.4.5), en las letras c) y e) del art. 116.4 LCSP. Motiva, por ejemplo: para R2, el coste estimado del cambio de proveedor y el formato en que hoy están los datos (Parte I, §3.4); para R1, el efecto de que la solución siga como está durante el contrato y sus prórrogas (Anexo III, apartado 7); para R5, cuántos operadores identificó la consulta y de dónde sale el dato (Parte V, V.3.2, regla 5); para R8, qué puestos y cuántas horas puede comprometer el servicio (Anexo II, casillas (d) a (f)).
2. **La probabilidad y el impacto los pone el expediente.** Este anexo no los da. El expediente que valore un riesgo lo hace para su contrato, con sus datos, y dice de dónde salen.
3. **La valoración del riesgo no activa cláusulas.** Una cláusula entra por la ficha del Anexo II, con su origen de necesidad (Parte I, §3.6), y con el punto de partida del cuadro de intensidad de la Parte I, §2.2. Un riesgo que el expediente valore como grave no justifica una cláusula sin ficha ni verificador (Parte I, §7.9).
4. **Lo que no se cubre se deja escrito.** Si el expediente no cubre un riesgo, o lo cubre sólo en parte —las filas «Parcial»—, la memoria dice cuál y qué consecuencia asume la entidad, como el catálogo pide en los contratos basados en acuerdo marco (Parte I, §2.4, letra b), punto 3). Esa constancia es la que permite justificar la exigencia con datos en la licitación siguiente.
5. **El anexo no se cita como autoridad.** No es un informe ni expresa la posición de ningún órgano. La memoria no lo invoca: escribe sus propios datos.

**Para el órgano de control**, la última columna de la tabla es la lista de lo que el expediente tiene que acreditar fuera del pliego, y se coteja con los extremos de la Parte IV, M10.1 y M10.2.

### NOTA DE ALCANCE · INSTRUMENTOS QUE ESTA VERSIÓN ENTREGA APARTE Y LOS QUE NO ENTREGA

Este catálogo se ha comprometido a no afirmar lo que no ha comprobado. La misma regla obliga a no anunciar lo que no entrega. **De los dos instrumentos que este documento invoca y que la versión 3.0 no incluía, la versión 4.0 entrega el primero, en documentos aparte, y sigue sin entregar el segundo.** Se dice aquí para que ningún índice, ninguna remisión y ninguna memoria den por disponible lo que no lo está.

**1. Pliegos de referencia por perfil: se entregan aparte.** La necesidad se formuló con estas palabras: lo que se usa un martes por la mañana no es el documento doctrinal, son los pliegos ensamblados para los perfiles de contrato frecuentes. Es una petición fundada y la versión 4.0 la atiende con **pliegos de referencia para cuatro perfiles —SaaS, mantenimiento de aplicaciones, desarrollo a medida y plataformas críticas—**, publicados como documentos aparte. **No son pliegos-tipo, y ningún órgano los ha aprobado**: son la selección coordinada de cláusulas de este catálogo para cada perfil, que cada órgano de contratación adapta y motiva con datos propios, siguiendo el circuito de la Parte V. No sustituyen a la ficha del Anexo II ni a la memoria justificativa del expediente: copiados sin expediente, reproducen el vicio y no la protección (Parte I, §2.3). Para un perfil que no sea ninguno de los cuatro, el redactor sigue componiendo el pliego a partir de los bloques `:::pliego` de las Partes I a III y de los apéndices del Anexo XXV.

**2. Expediente completo de una administración concreta: no se entrega.** La Parte VI resuelve un caso simulado —calificación, categoría de seguridad, cláusulas aplicables y no aplicables, catálogo recortado, baremo, umbrales, verificadores y carga— pero **no entrega el expediente documento a documento**. Los documentos del circuito figuran enumerados en la Parte V, y buena parte de ellos está modelizada en los anexos II, III, IV, XIV, XV, XVIII, XX y XXII de esta parte; lo que falta es el juego completo, cumplimentado con los datos de un contrato piloto, y el modelo de los documentos del circuito que ningún anexo cubre. **No se entrega en la versión 4.0.**

**Compromiso.** Los informes de evaluación del piloto (VI.8), a los seis y a los doce meses, se pronunciarán sobre el uso real de los pliegos de referencia, sobre el perfil por el que conviene empezar y sobre la necesidad del expediente completo. Un documento que promete en su índice lo que no contiene pierde más credibilidad que uno que reconoce lo que le falta.

---

### NOTA FINAL · CUSTODIA Y VERSIONADO DE ESTE DOCUMENTO

Un catálogo del que circulan cinco copias distintas deja de ser un catálogo. Antes de su publicación debe quedar resuelto, y hacerse constar en el acuerdo de aprobación:

1. **Dónde vive el maestro.** Una única ubicación oficial, publicada en el perfil de contratante y en el portal de transparencia, en formato reutilizable. Toda copia de trabajo se identifica como tal.
2. **Quién lo versiona.** El servicio promotor, mediante propuesta al órgano que lo aprobó. Las versiones se numeran y se fechan; ninguna sustituye a la anterior sin acuerdo expreso.
3. **Cómo se sabe cuál es la vigente.** Cada pliego cita la versión del catálogo y la versión del Catálogo de Exigencias Tecnológicas que aplica, con su fecha. Esa cita es la que permite, dos años después, saber qué se exigió exactamente.
4. **Qué se revisa y cuándo.** El Catálogo de Exigencias Tecnológicas, cada año, con contraste de mercado. El articulado, sólo cuando la evaluación del piloto o un cambio normativo lo exijan. La separación entre ambos ritmos es deliberada: es lo que permite que la revisión anual ocurra de verdad y que el articulado no se reabra cada doce meses.
5. **Qué se hace con lo que se aprende.** Los informes de evaluación del piloto (VI.8) concluyen con propuesta motivada de ajuste del catálogo, del anexo anual y de los valores por defecto del Anexo X. Un catálogo que no se corrige con lo que aprende envejece igual que el pliego que pretende sustituir.
