# Pliego de referencia · Plataformas críticas

*Documento complementario de AI Clauses, versión 4.0. Ensambla el catálogo; no lo sustituye. Donde discrepen, manda el catálogo. [Ir al catálogo](../clausulado/indice.html).*

**Selección coordinada de cláusulas para los sistemas de los que depende la continuidad de un servicio esencial o la gestión económica, tributaria o de personal de la entidad**

---

## 1 · Qué es y qué no es

1. **Es una referencia ensamblada**: la selección coordinada de cláusulas del catálogo para este perfil, con sus ajustes, su ficha y sus horas. No es un pliego ni un pliego-tipo (Parte 0, §0.1) y no lo ha aprobado ningún órgano.
2. **Se adapta y se motiva con datos propios del expediente.** Remitirse a este documento no justifica ninguna exigencia: una memoria que se limita a remitirse al catálogo es justificación por remisión, y por tanto estereotipada (Parte I, §3.8, consecuencia 2).
3. **Donde este documento y el catálogo discrepen, manda el catálogo**; y dentro del catálogo, la cláusula sobre los cuadros que la reproducen (Parte II, II.13; Anexo X, regla de precedencia).

> **Antes de abrir un expediente.** Las tres condiciones suspensivas de aplicación de la Parte IV, §M11, filas 1 a 3 —acuerdo del órgano de gobierno sobre el plan, el catálogo y el Anexo V; consulta preliminar del mercado con el contraste del Anexo V documentado; declaraciones de conflicto de interés firmadas— constan pendientes (caja de estado del catálogo), y cada entidad las cumple por sí (Parte I, §2.3, elementos 8 a 10). Mientras no se cumplan, ninguna cláusula entra en un expediente **como cláusula de este catálogo** —citándolo como modelo o remitiéndose a él para justificarla—, y en particular en ninguno que supere el umbral del recurso especial; sí cabe usar sus soluciones de redacción con la justificación propia del expediente (§M11). Lo de origen normativo o funcional no necesita el acuerdo; lo institucional, sí, o una de las vías del §M1.2 bis. Este documento cumple el compromiso del catálogo de entregar pliegos ensamblados por perfil de contrato (§M10.3, punto 4; §M11, fila 14; nota de alcance de la Parte VII); no acredita que esas condiciones se hayan cumplido.

**Cómo se lee.** Los recuadros «Texto para el pliego» reproducen, tal como está en el catálogo vigente, el texto de cada cláusula o epígrafe seleccionado: no se ha reescrito nada. Lo propio de este documento es la selección, los ajustes y las fichas. Debajo van los **ajustes del perfil**: el valor de cada corchete con su fuente («fila n» es fila del Anexo X, apartado X.1), los apartados que se suprimen y su reflejo en el otro pliego. Lo marcado `[a cumplimentar con datos del expediente]` no se rellena desde aquí. Las citas van por parte y epígrafe: «epígrafe» o «ep.» es el del comentario de una cláusula, y «apartado» o «ap.», el de su texto de pliego.

---

## 2 · El perfil

### 2.1 Definición: «crítica» se acredita con datos, no con un adjetivo

El catálogo no define «plataforma crítica». Sí gradúa la intensidad de aplicación por la categoría de seguridad y **por la criticidad del servicio soportado**, nunca por la ambición tecnológica del expediente (Parte I, §2.2). Una plataforma entra en este perfil cuando el expediente acredita **los tres** datos siguientes:

1. **Categoría ENS MEDIA o ALTA**, resultante del anexo I del RD 311/2022, con la valoración de cada dimensión firmada por los responsables de la información y de los servicios (art. 41.1) y la categoría firmada por el responsable de la seguridad (art. 41.2) (Parte V, V.4.11; DT-6·v3, ap. 2).
2. Que esa categoría la determinen **la disponibilidad o la integridad** —el daño de que el servicio se pare o de que los datos se pierdan o se alteren—, no sólo la confidencialidad. Ejemplo inverso: la Parte VI deja la disponibilidad de su sistema simulado en MEDIO porque «admite continuidad manual acotada» (VI.4.4).
3. **Necesidad funcional de continuidad** declarada por el gestor con datos: criticidad del servicio, tiempo máximo de indisponibilidad tolerable y dependencia actual (Parte I, §3.4, primera fila).

**Grado reforzado: continuidad ante insolvencia.** ADM-11·v3 sólo entra si concurren, acreditadas en la memoria, las **cuatro** circunstancias acumulativas de su ap. 1 (Anexo X, fila 21): a) categoría ALTA en la dimensión de disponibilidad; b) valor estimado superior a [X; se recomienda 300.000] €; c) padrón, gestión tributaria, recaudación, contabilidad y patrimonio, gestión de expedientes o sede electrónica; d) estudio de mercado que acredite que no hay alternativa que sustituya la solución en menos de [X; se recomienda 6] meses sin interrumpir el servicio.

**Lo que no basta.** No basta con figurar en la lista de la letra c), que no es una vía alternativa (VI.4.4), ni con la cuantía: el catálogo recomienda bajar el umbral del nivel reforzado en categoría MEDIA o ALTA «con independencia de la cuantía» (Parte I, §8). **La gestión de personal no está en la lista c)**: una plataforma de personal entra en el perfil por los datos 1 a 3, pero ADM-11·v3 sólo cabe motivando en la memoria la rebaja de esa circunstancia y haciéndolo constar en la ficha, nunca reinterpretando la lista (ADM-11·v3, nota al redactor; Parte IV, M4.2).

### 2.2 Cómo elegir el perfil

*Cuadro común a los cuatro pliegos de referencia, idéntico en los cuatro.* El perfil lo decide la **prestación principal** del contrato, que el expediente determina y motiva cuando el contrato es mixto (Parte VI, VI.4.1). La calificación del contrato sale de su objeto (Parte I, §2.1); la criticidad del sistema gradúa la intensidad de aplicación (§2.2) y por eso se suma como capa, en la fila 5.

| Situación del contrato | Perfil | Regla del catálogo que lo decide |
|---|---|---|
| 1. La prestación principal es crear software que no existe antes del contrato —una aplicación nueva o módulos nuevos—, cuya titularidad adquiere la entidad | **Desarrollo a medida** | Sólo el software hecho a medida es contrato de servicios (Parte I, §2.1; ADM-8·v3, epígrafe 3). ADM-9·v3 no se aplica (apartado 10) |
| 2. La prestación principal es el mantenimiento —correctivo, adaptativo o evolutivo— y el soporte de una aplicación ya implantada, instalada en la entidad o prestada como servicio, hecha a medida o estándar, con o sin la licencia o la suscripción como suministro accesorio | **Mantenimiento de aplicaciones** | Servicios de mantenimiento de aplicaciones (VI.4.1). Junto con el desarrollo a medida, es el único perfil en que cabe la bolsa del art. 308.3 LCSP (ADM-3·v3, bloque 2, y epígrafe 7) |
| 3. La prestación principal es el uso de una aplicación estándar que el proveedor presta como servicio en la nube y opera él, por suscripción, con o sin configuración, parametrización, carga de datos, integraciones o formación | **SaaS** | Suministro, como la licencia, o contrato mixto si se le añaden servicios (Parte I, §2.1; párrafo «Calificación de un SaaS»). ADM-8·v3 y ADM-11·v3 lo tratan como supuesto propio (epígrafes 7). La bolsa no cabe: exige que la prestación principal sea el desarrollo o el mantenimiento de aplicaciones (ADM-3·v3, epígrafe 7), y entonces el perfil es el de la fila 1 o el de la 2 |
| 4. Licencias de software estándar que instala y opera la propia entidad, solas o con su implantación; infraestructura o plataforma en la nube para aplicaciones propias; contrato menor, basado en acuerdo marco, adhesión a una central de compras o prórroga | **Ninguno de los cuatro** | La licencia de software estándar es suministro: ADM-8·v3 se queda en sus apartados 4 y 5, y DT-8·v3 en 1.a), 4, 7 y 8 (Parte I, §2.1; epígrafes 7 de las dos). El menor, el basado y la prórroga tienen su alcance limitado (Parte I, §2.4; Parte V, §V.7). El pliego se compone con los bloques de las Partes I a III (nota de alcance de la Parte VII) |
| 5. Además de una de las filas 1 a 3: el sistema tiene categoría ENS MEDIA o ALTA, determinada por la disponibilidad o la integridad, y el gestor declara con datos la necesidad de continuidad | **El perfil de la fila que corresponda, más la capa de plataformas críticas** | Una sola ficha y un solo informe de necesidad; ninguna exigencia dos veces ni con dos instrumentos (Parte I, §7.3). ADM-11·v3 sólo entra con sus cuatro circunstancias acumulativas (apartado 1) |

**Contrato mixto.** Si el contrato reúne prestaciones de dos filas —implantar una aplicación y mantenerla con evolutivos, o desarrollar y después mantener—, el perfil es el de la prestación principal, determinada y motivada en el expediente (VI.4.1). La parametrización, aunque sea sustantiva, no cambia el perfil: es un servicio de implantación (VI.4.1), y lo que mueve es el alcance de ADM-8·v3, cuyo apartado 1 alcanza entonces las configuraciones, reglas y flujos diseñados para la entidad (epígrafe 7; §M4.2), y el de DT-8·v3, apartado 1.c).

**Calificación de un SaaS.** La suscripción de software en modalidad de servicio se califica igual que la licencia: es **suministro**, porque el art. 16.3.b) LCSP comprende la cesión del derecho de uso de programas de ordenador «en cualquiera de sus modalidades de puesta a disposición» (Parte I, §2.1). Si el contrato añade implantación, parametrización, desarrollo o mantenimiento de aplicaciones, es mixto, y la prestación principal es la de mayor valor estimado (art. 18.1.a), párrafo segundo, LCSP), que el expediente motiva con el desglose del presupuesto (VI.4.1). Dependen de la calificación cinco piezas (Parte I, §2.1). En el suministro, ADM-8·v3 se reduce a sus apartados 4 y 5 y, del 1, a datos, *prompts* corporativos y bases de conocimiento municipales (epígrafe 7); DT-8·v3, a sus apartados 1.a), 4, 7 y 8, sin Inventario, Plan, ensayo, licencia de continuidad ni Dossier (epígrafe 7); y la modalidad B de ADM-1·v3, a las letras a), b) y d) de su apartado 1 (nota al redactor, punto cuarto). La bolsa de ADM-3·v3, bloque 2, sólo cabe en servicios de desarrollo o mantenimiento de aplicaciones (art. 308.3 LCSP), y el informe de insuficiencia de medios sólo se exige en servicios (art. 116.4.f) LCSP; Parte V, V.4.8). El perfil no depende de la calificación, y la bolsa no cabe en un SaaS con ninguna de las dos (ADM-3·v3, epígrafe 7).

**Cuándo no se suma esta capa, o no conviene empezar por ella.**

- **Categoría BÁSICA, o MEDIA sólo por la confidencialidad, sin continuidad declarada con datos**: se usa el perfil base (SaaS, mantenimiento de aplicaciones o desarrollo a medida); la confidencialidad ya la cubren DT-6·v3 y ADM-13·v3.
- **Sin categorización firmada**: primero el documento A-4; la categoría se determina antes de aprobar el pliego (Parte 0, §0.4, paso 3).
- **Componente tecnológico accesorio**: DT-6·v3, ADM-13·v3 y poco más (Parte IV, M4.3).
- **Contrato menor, basado en acuerdo marco, adhesión o prórroga**: el alcance limitado de la Parte I, §2.4. En la prórroga de una plataforma crítica se verifica lo ya exigible y se prepara la licitación sucesora con el Dossier de Reversibilidad (Parte 0, §0.6, caso 3).
- **Primer piloto de la entidad**: el catálogo desaconseja un objeto crítico en disponibilidad, porque arrastra depósito de código, requisitos reforzados y coste (Parte VI, VI.2.1, condición 3).

### 2.3 Una capa que se suma al perfil base

Una plataforma crítica se contrata como SaaS, como mantenimiento o como desarrollo a medida. **Este perfil se superpone al pliego de referencia de ese perfil base; no lo sustituye.** El perfil base decide las cláusulas ligadas al objeto (DT-1, DT-4, DT-7, DT-9, ADM-1, ADM-2, ADM-3, ADM-10 y la variante de baremo de ADM-7); esta capa endurece DT-6, DT-8, ADM-4 y ADM-6 y añade ADM-11, ADM-12 y DT-3.

- **Sobre SaaS**: ADM-12·v3 entra normalmente, porque el adjudicatario opera el sistema; ADM-11·v3, sólo por el plan de continuidad equivalente del ap. 3.c), o ninguna (ADM-11·v3 y ADM-12·v3, ep. 7).
- **Sobre mantenimiento en infraestructura de la entidad**: si los datos están en sistemas propios, el interventor recibe usuario y ADM-12·v3 sobra (ep. 7); ADM-11·v3 admite depósito propio o de tercero (ap. 3.a y 3.b).
- **Sobre desarrollo a medida**: ADM-9·v3 no se aplica (ap. 10); DT-8·v3 entrega el código de los desarrollos específicos (ap. 1.b).

**Regla de combinación.** Una sola ficha, un solo informe de necesidad y un solo Cuadro Maestro: ninguna exigencia aparece dos veces ni con dos instrumentos (Parte I, §7.3). Si los dos documentos dan valores distintos al mismo corchete, rige el supuesto de la columna «Cuándo moverlo» del Anexo X que concurra en el expediente, motivado en una línea (Anexo X, regla de uso).

### 2.4 Nivel del cuadro de intensidad: C, y por qué

El nivel C se activa con un valor estimado igual o superior al umbral de regulación armonizada (216.000 € en servicios y suministros para 2026-2027), con categoría ENS MEDIA o ALTA, o con un servicio de la lista de ADM-11·v3, ap. 1.c) (Parte I, §2.2). **Toda plataforma de este perfil cumple el segundo supuesto por definición**, sea cual sea su cuantía.

El nivel es punto de partida, no decisión (Parte 0, §0.0, nota al índice de cláusulas), y el catálogo lo acota: ADM-9, ADM-11 y ADM-14 conservan sus condiciones propias; el bloque evolutivo que el nivel C añade (DT-7, DT-9 con el Anexo V, ADM-2) depende del acuerdo del órgano de gobierno y del Anexo V, hoy condiciones suspensivas (§M11, filas 1 y 2); y bajar de nivel no exige motivación (Parte I, §2.2, notas). **Lo que la criticidad trae no es el bloque evolutivo**: son los valores que el catálogo mueve «en categoría ALTA», «en servicios de disponibilidad crítica» o «en contratos de alta criticidad» (II.13; Anexo X, filas 11, 30, 32 y 39 a 42).

---

## 3 · Selección coordinada

| Cláusula | Decisión | Condición o razón | Arrastra o exige (Anexo VI) |
|---|---|---|---|
| DT-0·v3 | **SÍ** | El PPT cita normas y protocolos: no admite NA (ep. 7) | La exigen DT-7 y DT-9 |
| DT-1·v3 | **CONDICIONAL** | Sólo con IA (ep. 7). Los incisos que dependen del proyecto de Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid (PL-11/2026, BOAM núm. 171, de 17 de septiembre de 2026), texto anexo al Acuerdo del Consejo de Gobierno de 9 de septiembre de 2026, llevan el corchete del catálogo «[si la entidad está sujeta a la Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid o a norma autonómica equivalente]»; con su valor por defecto, «no sujeta» (Anexo X, fila 50), se suprimen (Anexo XI.4) | NA: criterio E, L6, L11, G10–G12, G23–G25, M9 |
| DT-2·v3 | **NO APLICA** | Por defecto (§2.2): bastan la firma, el sello y el sellado ya disponibles (ep. 7) | Borrar G13, M10, L7 (anclaje) |
| DT-3·v3 | **CONDICIONAL** | Presupuesto del ap. 1 y material criptográfico propio (ep. 7) | NA: L8, G14, M11 |
| DT-4·v3 | **CONDICIONAL** | Del perfil base, con procesos reales (ep. 7) | NA: criterio H, G15, M12 |
| DT-5·v3 | **SÍ** | Sistema de información (II.0); su exportación sostiene ADM-12 y la reversión (ep. 3) | Ap. 2 vacío: fuera DT-0 ap. 7 |
| DT-6·v3 | **SÍ** | Art. 2.3 RD 311/2022; categoría resultante, motivada antes de aprobar (ep. 3) | Sin ella decae ADM-11 |
| DT-7·v3 | **CONDICIONAL** | Acuerdo de gobierno y módulos del Apéndice técnico 2 (ep. 7) | NA: ET-1 a ET-3, A, B, G19, M15 |
| DT-8·v3 | **SÍ, completa** | Con ensayo: distingue la reversibilidad real de la declarada (ep. 5) | La exige ADM-11 |
| DT-9·v3 | **CONDICIONAL** | Anexo V contrastado; VE ≥ [100.000] € y ≥ [24] meses (ep. 7; M4.2) | NA: ADM-2, G2, G21, G22, M1, M2 |

| Cláusula | Decisión | Condición o razón | Arrastra o exige (Anexo VI) |
|---|---|---|---|
| ADM-1·v3 | **CONDICIONAL** | Sólo con IA; modalidad B por defecto (ep. 7); con el criterio E, sólo sus letras a), d) y e), porque las b) y c) las puntúa E (VI.4.3; Anexo I, fila 17) | Su NA no suprime E; con E, la B va sin b) ni c) |
| ADM-2·v3 | **CONDICIONAL** | Con DT-9; no con duración inferior a [24] meses (ep. 7) | Exige DT-9 |
| ADM-3·v3 | **CONDICIONAL** | Bolsa sólo en desarrollo o mantenimiento (art. 308.3 LCSP) (ep. 7) | NA: criterio F; recálculo del VE |
| ADM-4·v3 | **SÍ** | Art. 62 LCSP; Comisión salvo < [12] meses o < [60.000] € (ep. 7) | Fecha cierta de hitos y actas |
| ADM-5·v3 | **SÍ** | Siempre (M4.2), con casillas y trasvase (ep. 2) | Tipos de cláusulas NA, fuera |
| ADM-6·v3 | **SÍ** | A con presupuesto; B.1 según lo incorporado; B.2 no (ep. 7) | A exige declarar cesión o tratamiento |
| ADM-7·v3 | **SÍ** | Si hay baremo (cierre de la Parte III) | NA: ADM-9 y Anexo IV |
| ADM-8·v3 | **SÍ** | Desarrollo o parametrización sustantiva (M4.2); si no, ap. 4 y 5 (ep. 7) | NA: DT-1 ap. 7 |
| ADM-9·v3 | **CONDICIONAL** | Valor estimado igual o superior a [200.000] € y comprobación justificada en el expediente; nunca en la tramitación del art. 159.6 LCSP ni en el desarrollo a medida de una solución que no preexiste (apartado 10) | Exige su criterio |
| ADM-10·v3 | **CONDICIONAL** | Con DT-9; VE ≥ [100.000] € y ≥ [24] meses (M4.2) | NA: L1, G9, B.2 h) e i) |
| ADM-11·v3 | **CONDICIONAL** | Sólo con las cuatro circunstancias acumulativas de su apartado 1, acreditadas en la memoria: categoría ALTA en disponibilidad, valor estimado superior a [300.000] €, servicio de la lista de la letra c) y ninguna alternativa sustituible en menos de [6] meses (§2.1). Se incorpora en esta capa (§2.2, fila 5) | Exige DT-8 y partida del PBL |
| ADM-12·v3 | **CONDICIONAL** | Tres condiciones: que el adjudicatario opere el sistema —si los datos residen en sistemas de la entidad, basta dar usuario al interventor (ep. 7)—; que el sistema soporte información con reflejo presupuestario, contable o patrimonial (§M4.2); y que conste el informe firmado y fechado del órgano de control (ep. 3). La primera depende del perfil base (§2.3) | NA: G6, M6, B.1 c) |
| ADM-13·v3 | **SÍ** | El contratista trata información no pública (M4.2) | NA: G7, M5, B.1 d) |
| ADM-14·v3 | **NO APLICA** | Por defecto (ep. 7) | Borrar su sumando del VE |

**Recuento: 10 SÍ · 12 CONDICIONAL · 2 NO APLICA.** Cuatro condicionales son de esta capa (DT-3, ADM-9, ADM-11, ADM-12); las otras ocho, del perfil base. Arrastres completos: Anexo VI.

---

## 4 · Extracto para el Pliego de Prescripciones Técnicas

### 4.1 Composición

**Interpretación e integración** (Parte I, §7.10), siempre que se incorpore cualquier cláusula. Se reproducen los dos bloques del epígrafe: el primero va al PCAP (§5.1) y el segundo, al PPT.

{{pliego:§7.10}}

*Apartado 3 de los dos bloques.* Remite al Anexo [V] del pliego. Si el pliego no incorpora DT-9·v3, el bloque del PCAP trae entre corchetes la redacción alternativa del apartado, que conserva el agotamiento y la tramitación de toda ampliación por los artículos 203 y 204 LCSP, y en el del PPT el apartado se suprime (Parte I, §7.10; Anexo VI, fila DT-9·v3).

**Referencias técnicas no normativas** (§4.2), sólo si el PPT menciona un protocolo, una especificación, una infraestructura o una red.

{{pliego:§4.2}}

**Definiciones** (§5.2), recortadas a las que sirvan a lo incorporado: a), d) y g) siempre; b) con desarrollo específico; c) con el Inventario de DT-8·v3; e) con DT-9, ADM-2 o ADM-10; f) y m) con el Anexo V; h) con DT-7; i) con DT-1, ADM-1 o ADM-13; j) con DT-7 o si la solución emplea agentes; k) y l) con ADM-13. En este perfil, al menos a), b), c), d), g), k) y l).

{{pliego:§5.2}}

**Vigencia normativa** (Anexo XIX): el extracto, con su fecha de corte y recortado a las materias de las cláusulas incorporadas; con DT-1·v3 es su Apéndice técnico 3 (Anexo XXV). El proyecto de ley autonómico no entra en él mientras sea proyecto (Anexo XI.4, regla 2).

{{pliego:ANEXO XIX}}

**Cláusulas DT**, en la sede de su epígrafe 2, y **apéndices técnicos** del Anexo XXV, sin renumerar los que no procedan (regla 1): **0** Matriz de requisitos funcionales (C1); **1** Procesos automatizables (DT-4); **2** Exigencias tecnológicas determinadas (DT-7 y DT-9); **3** Vigencia normativa (DT-1). Orden: el del ep. 2 de cada cláusula. **Los niveles de servicio y los indicadores del PPT no los da el catálogo** y este perfil los necesita: de ellos dependen ADM-4·v3, ap. 3.d), el criterio C3, el supuesto de liberación de ADM-11·v3, ap. 5.b), y los objetivos de recuperación de DT-6·v3, ap. 7 **[a cumplimentar con datos del expediente]**.

### 4.2 Cláusulas técnicas

#### DT-0·v3 · Equivalencia y acreditación — SÍ

{{pliego:DT-0·v3}}

**Ajustes.** Primera cláusula del PPT (ep. 2). Ap. 3.c): variante abierta (Anexo X, fila 27); la de continuidad sólo si el objeto es continuidad de un sistema implantado y la memoria lo justifica, porque fuera de ese supuesto garantiza que gane el producto de referencia (ep. 3). Ap. 7, sólo con servicios comunes (ep. 7). Remisión en el sobre técnico del PCAP (ep. 2).

#### DT-1·v3 · IA, IA generativa y agentes — CONDICIONAL

{{pliego:DT-1·v3}}

**Ajustes.** Ap. 6.e): **[4] horas**, el valor del catálogo «en servicios de disponibilidad crítica» (Anexo X, fila 30). Ap. 6.c): [12] meses, o [24] con plazos de impugnación largos (fila 29). Se suprimen el ap. 5 sin sistemas de alto riesgo y el ap. 7 desde su segundo inciso sin actuación administrativa automatizada del art. 41 de la Ley 40/2015 (ep. 7), que en tributos y recaudación se comprueba **[a cumplimentar con datos del expediente]**. Incisos con el corchete del proyecto de ley autonómico: se suprimen mientras la entidad no esté sujeta, que es el valor por defecto (Anexo X, fila 50). Exige el Apéndice técnico 3 (Anexo XXV).

#### DT-4·v3 · Automatización de procesos — CONDICIONAL

{{pliego:DT-4·v3}}

**Ajustes.** Los del perfil base (Anexo X, filas 34 a 36); esta capa no los mueve.

#### DT-9·v3 · Exigencias tecnológicas determinadas — CONDICIONAL

{{pliego:DT-9·v3}}

**Ajustes.** Los del perfil base, con el Anexo V transcrito en el Apéndice técnico 2 (Anexo XXV). Si hay ap. 8, sus 8.2 y 8.5 llevan los mismos valores que DT-7·v3, ap. 3.c) y 3.f) (II.13).

#### DT-5·v3 · Interoperabilidad y soberanía del dato — SÍ

{{pliego:DT-5·v3}}

**Ajustes.** Ap. 2: caso por caso, con el precepto de cada servicio y sin copiar la tabla de arranque; si queda vacío, se suprime (ep. 3). Ap. 3: [30] días (Anexo X, fila 37). Ap. 4: prueba de exportación autónoma al menos anual (ep. 5). Ap. 5, segundo inciso: sólo con tratamiento por cuenta, y entonces esencial *ex lege* en ADM-6, bloque A (ep. 6).

#### DT-7·v3 · Interfaz para agentes de IA — CONDICIONAL

{{pliego:DT-7·v3}}

**Ajustes.** Ap. 3.c): **[24] meses**; reducirlo a 12 exige que el sistema no sostenga control interno ni actos impugnables (Anexo X, fila 4) **[a cumplimentar con datos del expediente]**. Ap. 3.f): **[1] minuto** con operaciones de escritura sobre terceros (II.13). La interfaz no es la finalidad de estas plataformas: la letra g) de ADM-6, B.2, no se marca por defecto (ep. 6).

#### DT-6·v3 · Seguridad conforme al ENS — SÍ

{{pliego:DT-6·v3}}

**Ajustes.**
- **Ap. 2**: la categoría resultante, MEDIA o ALTA, que no tiene valor por defecto (Anexo X, fila 1). Se motiva en la memoria **antes de aprobar el pliego** (ep. 3), con el nivel de cada dimensión (Anexo III, ap. 8), del que depende ADM-11 (su ap. 1.a). La rúbrica no se toca: escribir «Nivel Alto» sin que el sistema lo sea es el defecto que señala el ep. 3, y el supuesto de la Resolución 383/2024, de 3 de octubre de 2024, del Tribunal Administrativo de Contratación Pública de la Comunidad de Madrid, que estimó el recurso por falta de justificación en la memoria (art. 116.2 LCSP), no por desproporción (Parte I, §3.8).
- **Ap. 3**: certificación del 3.a) y fuera el 3.b) (ep. 7); plazo de [6] meses (fila 38).
- **En categoría ALTA**: plazos de subsanación del ap. 6 reducidos, sin cifra en el catálogo **[a fijar por el responsable de la seguridad]** (fila 39); comunicación en **[24] horas** (fila 40); prueba de continuidad **[semestral]** (fila 41). Preaviso de auditoría de **[5]** días hábiles en alta criticidad (fila 42).
- **Ap. 7**: objetivos de recuperación «acordes con la categoría», tomados del análisis de impacto **[a cumplimentar con datos del expediente]**. **Ap. 1**: cadena de suministro según el análisis de riesgos (V.4.11).

#### DT-3·v3 · Criptoagilidad — CONDICIONAL

{{pliego:DT-3·v3}}

**Ajustes.** Tras DT-6 (ep. 2). El presupuesto del ap. 1 es necesario, no suficiente: la Parte VI deja la cláusula en NA con datos contables de conservación larga porque su confidencialidad no era el riesgo dominante (VI.4.3). Ap. 1: [5] años, [3] con categorías especiales del art. 9 RGPD (fila 31). Ap. 3: **[semestral]** en ALTA (fila 32). Ap. 4: [6] meses (fila 33).

#### DT-8·v3 · Reversibilidad, Inventario y Dossier — SÍ, completa

{{pliego:DT-8·v3}}

**Ajustes.**
- **Ap. 3**: ensayo **[1] cada [12] meses** en categoría ALTA (Anexo X, fila 11; II.13: «Anual en contratos de criticidad alta»); [24] en MEDIA salvo motivación. **El ensayo no se suprime**: la salida que admite el ep. 5 deja la reversibilidad en declarada; si faltan horas, se dota la función o se reducen otras cláusulas (ADM-4·v3, ep. 5, regla de cierre).
- **Ap. 4**: inicio de la reversión **[6] meses** antes si la migración es compleja (fila 44); entrega en [30] días, sin ampliar (fila 45). **Ap. 5**: licencia de [6] meses, ampliable sólo con su coste en el PBL (fila 12); se suprime si la solución es municipal o de fuentes abiertas (ep. 7). **Ap. 2**: [30] días (fila 10). **Ap. 8**: [15] días hábiles y garantía de [12] meses (filas 46 y 47).
- Reflejo obligatorio en el PCAP del plazo de ejecución, del desglose del PBL y de la garantía (ep. 2). Actas: modelos B y C del Anexo XVIII.

---

## 5 · Extracto para el Pliego de Cláusulas Administrativas Particulares

### 5.1 Composición

**Interpretación e integración** (Parte I, §7.10), siempre que se incorpore cualquier cláusula: el primero de los dos bloques que se reproducen en el §4.1. Su apartado 1 sólo va si la entidad ha aprobado el catálogo y se cumplen las condiciones de aplicación del §M11; si no, se suprime y el apartado 4 emplea la fórmula alternativa que trae el propio bloque.

**Identificación del catálogo aplicado** (Parte V, V.8.4), con el mismo corchete: sin catálogo aprobado, el pliego no lo cita, y la versión y la fecha del Anexo V constan en su propia transcripción.

{{pliego:V.8.4}}

**Cierre de versión** (V.8.5), sólo con el Anexo V transcrito.

{{pliego:V.8.5}}

**Método de cálculo del valor estimado** (V.4.10), que va al PCAP (art. 101.5 LCSP). En este perfil, la letra c) con la bolsa del perfil base, si la hay, y la d) con **[0] %**, porque ADM-14·v3 no se incorpora; el coste del depósito o del plan de ADM-11·v3 va en el presupuesto base como partida independiente (ADM-11·v3, ap. 8).

{{pliego:V.4.10}}

**Cláusulas ADM**: orden orientativo, el del ep. 2 de cada cláusula.

### 5.2 Cláusulas administrativas

#### ADM-1·v3 · Gobernanza de IA y certificaciones — CONDICIONAL

{{pliego:ADM-1·v3}}

**Ajustes.** Una sola modalidad, B por defecto; la A exige contrato armonizado e IA determinante de la prestación, que aquí es la continuidad del servicio. **Si el baremo incluye el criterio E, la B se transcribe sólo con sus letras a), d) y e)**: las b) y c) —análisis de riesgos y supervisión humana— no se transcriben porque las puntúa E, y puntuar una condición especial de ejecución es la combinación 3 del §7.3 (VI.4.3; Anexo I, fila 17). Sobre un perfil base SaaS, cuya calificación de suministro ya la limita a a), b) y d), quedan a) y d). La C, con ella: ap. 2 (27001/27701) sólo si el informe de necesidad lo motiva. Sin IA no se incorpora y la seguridad se acredita sólo por DT-6·v3, ap. 3 (ep. 7). Ninguna certificación se puntúa (modalidad C, ap. 4).

#### ADM-7·v3 · Criterios de adjudicación — SÍ

{{pliego:ADM-7·v3}}

**Ajustes.** Reglas de ADM-7.1 y la variante de baremo del procedimiento del perfil base; la hoja de ADM-7.5 va al expediente. Este perfil no fija pesos propios.
- **Pertinentes**: **C2**, plan de implantación y migración con plan de vuelta atrás, sólo por encima del mínimo del PPT; **C3**, niveles de servicio por encima del mínimo del PPT, que se incorporan al contrato.
- **Sólo con su cláusula**: A y B con DT-7 —y entonces las letras e) y g) de ADM-6, B.2, no se marcan sobre lo ofertado (ADM-7.2, segunda advertencia)—; E con DT-1, sin puntuar lo que exigen DT-1·v3, apartados 6.c), 6.d), 11 y 13, en lo incorporado, ni las letras a), d) y e) de ADM-1·v3 B, sino sólo lo que excede de ellos (VI.4.6), y decae si el PPT exige el plan (Anexo I, fila 17); con E, la B de ADM-1·v3 va sin sus letras b) y c); F con la bolsa; H con DT-4.
- **Nunca se puntúa**: la categoría o certificación ENS, ni las normas 27001, 27701 o 42001 (ADM-1·v3, modalidad C, ap. 4; ADM-7.1, ap. 2); el depósito o el plan de continuidad (ADM-11·v3, ap. 8); la reversibilidad, su ensayo o el Inventario, y los accesos de control (Anexo I, filas 15 y 25); la experiencia o la disponibilidad previa (ADM-7.1, ap. 2; ADM-9·v3, ap. 4).
- Bloque «Innovación y tecnología»: [25] %, **[15] %** si el componente tecnológico es accesorio (Anexo X, fila 16). El baremo se recompone antes del anuncio (ADM-7.1, ap. 3 y 6) y la hoja se pasa sobre el baremo entero (ADM-7.5).

#### ADM-9·v3 · Demostración funcional — CONDICIONAL

{{pliego:ADM-9·v3}}

**Ajustes.** Ap. 10: valor estimado **igual o superior a [200.000] €** (Anexo X, fila 22), y nunca sobre un desarrollo a medida. Comprueba criterios (C1, D, A, H), no la seguridad ni la continuidad. Ap. 7: [90] minutos (fila 15). Modelos: Anexo XX.

#### ADM-3·v3 · Plazos y bolsa de evolutivos — CONDICIONAL

{{pliego:ADM-3·v3}}

**Ajustes.** Los del perfil base ([5] % del PBL, nunca más del 10 %; Anexo X, fila 19). Advertencia propia de estas plataformas: la clase (iv) del catálogo cerrado —adaptación de la parametrización a cambios organizativos o normativos— roza lo que el mantenimiento ya cubre, y el informe de necesidad separa corrección, adaptación normativa y capacidades nuevas para no pagar dos veces (Anexo III, ap. 6).

#### ADM-2·v3 · Evolución tecnológica determinada — CONDICIONAL

{{pliego:ADM-2·v3}}

**Ajustes.** Los del perfil base, con DT-9 (ep. 7); su esencialidad (B.2) no se marca por defecto.

#### ADM-10·v3 · Plan Anual de Evolución Tecnológica — CONDICIONAL

{{pliego:ADM-10·v3}}

**Ajustes.** Los del perfil base, con el Anexo V (ep. 7). Modelo: Anexo XIV.

#### ADM-11·v3 · Depósito de código y continuidad — CONDICIONAL

{{pliego:ADM-11·v3}}

**Ajustes.**
- **Ap. 1**: las cuatro circunstancias, una por una en la memoria (§2.1). **Se reproduce en la memoria la advertencia de su nota al redactor**: figura de nueva planta, sin doctrina, apoyada en los arts. 34.1 y 202 LCSP y en la medida [op.cont.4] del Anexo II del RD 311/2022, que en disponibilidad ALTA exige medios alternativos, no depósito (ep. 3).
- **Ap. 3**: la vía la elige el adjudicatario, ninguna es preferente y nada se impone al fabricante. Plan equivalente de [12] meses. **Ap. 5**: liberación tras [30] días de interrupción o [3] penalidades graves o muy graves de niveles de servicio con riesgo acreditado; nunca por la sola declaración de concurso. **Ap. 6**: audiencia de [10] días hábiles. **Ap. 7**: licencia de [24] meses.
- **Ap. 8**: **[ ] euros anuales**, partida independiente del PBL **[a cumplimentar con datos del expediente: presupuesto solicitado o consulta de mercado]**; los órdenes de magnitud del §M6.2 no sirven para fijarlo (M6.1). No se puntúa ni se desglosa en la oferta. Va al anuncio y al cuadro-resumen (ep. 2).

#### ADM-12·v3 · Acceso de los órganos de control interno — CONDICIONAL

{{pliego:ADM-12·v3}}

**Ajustes.** Antes de incorporarla, informe firmado y fechado del órgano de control (ep. 3). [3] accesos, nunca 0 (Anexo X, fila 7), en [30] días; diccionario en [60] días; permanencia hasta el acta de reversión o [3] meses, lo que ocurra más tarde (fila 8). La marca inserta también el texto para el PPT, «Detalle funcional del acceso de los órganos de control interno», que va al PPT y se completa con la relación cerrada de consultas que aporte el órgano interventor (ADM-12·v3, epígrafe 2).

#### ADM-13·v3 · IA sobre información municipal — SÍ

{{pliego:ADM-13·v3}}

**Ajustes.** Altas con [15] días de antelación (ap. 2). La política municipal del ap. 7 (Anexo XVI) se anexa al pliego.

#### ADM-4·v3 · Seguimiento — SÍ

{{pliego:ADM-4·v3}}

**Ajustes.** Ap. 2.a): [2] sesiones al año, **4 el primer año tras una implantación o con un Anexo V exigente** (Anexo X, fila 23; M4.2). Ap. 3: se borran las letras sin objeto —a) sin Anexo V, c) sin certificaciones, e) sin bolsa— (ep. 7).

#### ADM-8·v3 · Propiedad intelectual — SÍ

{{pliego:ADM-8·v3}}

**Ajustes.** Alcance del perfil base: entera con desarrollo específico o parametrización sustantiva; en SaaS sin ninguno de los dos, ap. 4 y 5, y el 1 sólo para datos, *prompts* y bases de conocimiento (ep. 7). Licencia mínima del ap. 5: personas usuarias o instalaciones **[a cumplimentar con datos del expediente]**.

#### ADM-5·v3 · Penalidades — SÍ

{{pliego:ADM-5·v3}}

**Ajustes.** Cuantías literales del ap. 2 (Anexo X, fila 14); los máximos legales nunca suben (M4.2). Se copia como lista con casillas de borrado: el ap. 3 tipifica «exclusivamente». Los niveles de servicio del PPT, y los ofertados en C3, se penalizan con **L12, G26 y M16** (trasvase, más abajo); son también las penalidades graves o muy graves de niveles de servicio que cuenta la liberación del depósito de ADM-11·v3, ap. 5.b). Recomendación de este documento: que el PPT califique qué incidencias son críticas, porque sin esa calificación G26 y M16 se borran (ADM-5·v3, ep. 2).

**Trasvase de las cláusulas técnicas.** ADM-5·v3 tipifica L1 a L12, G1 a G26 y M1 a M16. Los tipos L6 a L11, G10 a G25 y M9 a M15 proceden de las cláusulas técnicas: se conserva el de la incorporada y se borra el de la NO APLICA (ADM-5·v3, epígrafe 2, instrucción de alta). Sin el trasvase, el PPT anuncia penalidades que el PCAP, que tipifica «exclusivamente», declara inexistentes.

| DT | Tipos | En este perfil |
|---|---|---|
| DT-1 | L6, L11, G10, G11, G12, G23, G24, G25, M9 | Con DT-1 |
| DT-2 | L7 (anclaje), G13, M10 | **Borrar** G13 y M10; L7 pierde el anclaje |
| DT-3 | L8 (plan criptográfico), G14, M11 | Con DT-3, condicional en esta capa; sin ella, se borran G14 y M11 y L8 pierde lo criptográfico |
| DT-4 | L8 (indicadores), G15, M12 | Con DT-4; sin DT-3 ni DT-4, L8 entero fuera |
| DT-5 | L7, G16, G17, M13 | **Conservar**; M13, en parte, si el ap. 2 queda vacío |
| DT-6 | L9, G8, G18, M7, M14 | **Conservar** |
| DT-7 | L7, G17, G19, M15 | Con DT-7; sin ella, se borran G19 y M15, y L7 y G17 siguen por DT-5 sin la interfaz |
| DT-8 | L10, G3, G20, M4 | **Conservar** |
| DT-9 | L2, G2, G5, G21, G22, M1, M2 | Con DT-9 |

**Casillas dentro de un mismo tipo** (ADM-5·v3, epígrafe 2). Si DT-1·v3 entra sin alguno de sus apartados 11 a 13, se borra el inciso que procede de él en L11, G24, G25 y M9; con la entidad no sujeta a la ley autonómica, que es el valor por defecto, el del nivel de impacto o riesgo en G10; y si el pliego no conserva el procedimiento sustitutivo de DT-1·v3, apartado 6.d), sus menciones en G23 y M9. Sin desarrollos específicos para la entidad, se borra en M4 el inciso del código fuente que no compile o no se despliegue; sin el criterio C3, la mención del tiempo ofertado en L12.

**Niveles de servicio: L12, G26 y M16** (ADM-5·v3, epígrafe 2). No proceden de una cláusula técnica, sino de los acuerdos de nivel de servicio que fije el PPT y, en su caso, de los tiempos inferiores ofertados en el criterio C3, que se incorporan al contrato. Se conservan si el PPT fija tiempos máximos de respuesta o de resolución; G26 y M16, sólo si además califica qué incidencias son críticas. Si no fija tiempos, se borran los tres, y la deficiencia queda en M8 cuando alcance su supuesto. Un mismo hecho sólo se penaliza por uno de G26, M8 y M16. Umbrales: Anexo X, fila 59 (**[10] %** de las incidencias no críticas en L12; más del **[100] %** del tiempo de resolución en M16). Base: arts. 192.1 y 122.3 LCSP.

**Tipos de origen administrativo.** Siempre, L3 —su inciso «cualquier otra documentación exigible» lo usa ADM-4·v3, apartado 5—, L5, G1 y M8. L4, con la Comisión de Seguimiento (ADM-4·v3). L1 y G9, con ADM-10·v3. G4 y M3, con ADM-11·v3. G6 y M6, con ADM-12·v3. G7 y M5, con ADM-13·v3. G8 y M7 siguen a DT-6·v3 y, en lo que toca al sistema de gestión de la IA, a ADM-1·v3. En este perfil, M8 —«afectación grave a la seguridad o a la continuidad del servicio imputable al contratista»— es el tipo central, probado con informe de informática y, en su caso, del responsable de seguridad (ADM-5·v3, epígrafe 4); G7 y M5 se conservan siempre, porque ADM-13·v3 entra siempre.

**Niveles de servicio en esta capa.** El cuadro cerrado los tipifica ya en L12, G26 y M16 (párrafo «Niveles de servicio: L12, G26 y M16», arriba), con la cobertura del art. 122.3 LCSP para el tiempo ofertado en C3 (ADM-5·v3, ep. 3). M8 sigue cubriendo la afectación grave a la continuidad, y un mismo hecho sólo se penaliza por uno de G26, M8 y M16.

#### ADM-6·v3 · Obligaciones esenciales y resolución — SÍ

{{pliego:ADM-6·v3}}

**Ajustes.**
- **Bloque A**: el 1.1 sólo con cesión de datos; el 1.2 sólo con tratamiento por cuenta, con las letras a) a e) del art. 122.2 LCSP. Se comprueban en el informe (Anexo III, ap. 8) y se declaran en el PCAP (Anexo VI).
- **B.1**: a) reversibilidad, [1] mes; b) depósito, con ADM-11, [1] mes; c) control interno, con ADM-12, [15] días; d) nivel 1 de ADM-13. Afectan a la posición institucional de la entidad (nota al redactor, tercera).
- **B.2: ninguna letra por defecto**; sólo con el test de relevancia en la memoria, nunca sobre lo ofertado ni junto al criterio que lo puntúa (ADM-7.5, fila 13). Cierre con denominación y versión del catálogo (ap. 3); ninguna esencial sin verificador (§7.9.3).
- **Anuncio (art. 202.1 LCSP)**: cada condición especial incorporada, una por una; la omisión no se subsana (M10.1, punto 11). Aquí, ADM-13 y, si entran, el bloque A de ADM-6, ADM-11, ADM-12 y las del perfil base.

---

## 6 · Ficha de aplicabilidad (Anexo II) prerrellenada

Sólo las filas de esta capa; las del perfil base, de su ficha (el expediente tiene una sola). Necesidad y proporcionalidad salen sólo del expediente.

---- INICIO DEL MODELO ----

**FICHA DE APLICABILIDAD · PERFIL PLATAFORMAS CRÍTICAS** · Expediente y objeto: [a cumplimentar con datos del expediente] · Versión del catálogo: [la del acuerdo de aprobación] · Perfil base: ☐ SaaS ☐ Mantenimiento ☐ Desarrollo a medida · Categoría ENS: [MEDIA / ALTA], disponibilidad [ ], integridad [ ], documento de [fecha]

| Cláusula · instrumento · origen | (a) Necesidad · (c) proporcionalidad | (b) Norma o acuerdo | (d) Verificador · (e) cuándo y documento | (f) h/año |
|---|---|---|---|---|
| DT-0 · P · N | [a cumplimentar con datos del expediente] | Arts. 126 y 128.2 LCSP | Servicio proponente · licitación · informe | 6–18 por licitación |
| DT-5 · P · N | [a cumplimentar con datos del expediente] | RD 4/2010; Ley 39/2015 | Informática · anual · actas de integración y exportación | 4 · 12 |
| DT-6 · P + acreditación · N | [a cumplimentar con datos del expediente] | Arts. 2.3, 38.1 y 41 RD 311/2022 | Responsable de seguridad · anual · informe | 10–14 (14–18 en ALTA: §8) |
| DT-8 · P + garantía · N/F | [a cumplimentar con datos del expediente] | Arts. 157 y 158 Ley 40/2015 | Responsable + informática · ensayo · actas B y C | 8–12 · 12–20 |
| DT-3 · P · N | [a cumplimentar con datos del expediente] | Art. 2.3 RD 311/2022 | Responsable de seguridad · anual · informe | 4 · 4 |

| Cláusula · instrumento · origen | (a) Necesidad · (c) proporcionalidad | (b) Norma o acuerdo | (d) Verificador · (e) cuándo y documento | (f) h/año |
|---|---|---|---|---|
| ADM-4 · PCAP · F | [a cumplimentar con datos del expediente] | Art. 62 LCSP | Responsable + informática · semestral · actas | 18 · 18 |
| ADM-5 · PCAP · N | — | Art. 192.1 LCSP | Responsable · por incumplimiento | 6 por expediente |
| ADM-6 · PCAP · N | [a cumplimentar con datos del expediente] | Arts. 122.2, 202.1 y 211.1.f) LCSP | Órgano de contratación · al hecho | 25–40 por resolución |
| ADM-7 · CA · F/I | [a cumplimentar con datos del expediente] | Arts. 145 y 146 LCSP | Redactor + informe jurídico · licitación | 3–6 por licitación |
| ADM-8 · PCAP · N | [a cumplimentar con datos del expediente] | Art. 308.1 LCSP | Responsable · [3] meses · Inventario | En B6 (ADM-8·v3, ep. 5) |
| ADM-9 · comprobación · F | [a cumplimentar con datos del expediente] | Art. 145.5.c) LCSP | Mesa · licitación · actas | 24–29 por licitación |
| ADM-11 · CEE-E · F | [a cumplimentar con datos del expediente] | Arts. 34.1 y 202 LCSP | Informática · anual · certificado | 3 · 3 |
| ADM-12 · CEE-E · N | [a cumplimentar con datos del expediente] | RD 424/2017 | Interventor · anual · diligencia | 2 · 2 |
| ADM-13 · CEE-E · N/F | [a cumplimentar con datos del expediente] | Art. 28 RGPD | Responsable + DPD · alta y anual | 2 · 3 |

DT-2 y ADM-14: NA, con motivo en una línea y Anexo VI ejecutado ☐. Las casillas (a) y (c) piden los datos del §7, no adjetivos (Parte I, §3.4).

**Firmas** por las vías del §3.7: normativa, el servicio competente (seguridad, informática, DPD, control interno); funcional, el gestor; institucional, remisión al acuerdo [fecha y punto]. **Carga total**: la del §8 para la configuración elegida; si supera [40] h/año, conformidad expresa del servicio verificador (§7.9.2). **Cierre**: las cinco comprobaciones del Anexo II.

---- FIN DEL MODELO ----

---

## 7 · Informe de necesidad (Anexo III): esqueleto

Antes de la ficha y sabiendo que se publica (Anexo III). Los diez apartados del modelo; lo propio del perfil:

1. **Necesidad**: qué se para o qué gestión queda sin hacer si la plataforma falla o pierde datos, a quién afecta y cuánto tiempo es tolerable **[a cumplimentar con datos del expediente]**.
2. **Idoneidad**: módulos, lo que queda fuera y el perfil base con el que se combina.
3. **Medios y reutilización**: art. 116.4.f) LCSP y consulta al directorio del art. 157.3 de la Ley 40/2015.
4. **Origen de cada exigencia**, con su proporcionalidad; para ADM-11, una subfila por circunstancia con el estudio de mercado. Las institucionales, en el 4 bis del modelo.
5. **Órganos distintos del gestor**: informe del órgano de control con peticiones al año y plazo de respuesta (§3.4); si no hay documento firmado, se pide, no se cita. Categorización firmada por el responsable de la seguridad.
6. **Mantenimiento frente a evolución**: corrección, adaptación normativa y capacidades nuevas, por separado.
7. **Coste de no evolucionar y de no poder salir**: coste de cambio, formatos y dependencias (§3.4, segunda fila).
8. **ENS y datos personales**: nivel de cada dimensión, categoría y Declaración de Aplicabilidad (V.4.11); cesión y tratamiento por cuenta, declarados.
9. **Valor estimado**: método y umbrales vigentes (Anexo X.2), con los del perfil: [200.000] € para ADM-9 y [300.000] € para ADM-11.
10. **Conclusión** y firmas por vía.

---

## 8 · Carga de verificación del perfil

Fuente: tabla única de ADM-4·v3, ep. 5 (estimaciones del catálogo, no mediciones).

| Cláusula (fila) | Ordinario · por defecto | Año 1 · por defecto | Ajuste en categoría ALTA | Ordinario · ALTA | Año 1 · ALTA |
|---|---|---|---|---|---|
| DT-5 (B3) | 4 | 12 | — | 4 | 12 |
| DT-6 (B4) | 10–14 | 10–14 | Continuidad semestral: +4 h (fila 41; ep. 5) | 14–18 | 14–18 |
| DT-8 (B6) | 8–12 | 12–20 | Ensayo anual: 4 + (8–16) h (fila 11; ep. 5) | 12–20 | 12–20 |
| ADM-4 (C1 + C2) | 18 | 18 | — | 18 | 18 |
| ADM-13 (C10) | 2 | 3 | — | 2 | 3 |
| **Capa** | **42–50** | **55–67** | | **50–62** | **59–71** |

Cálculo: 4 + (10–14) + (8–12) + 18 + 2 = **42–50**; 12 + (10–14) + (12–20) + 18 + 3 = **55–67**. En ALTA: 4 + (14–18) + (12–20) + 18 + 2 = **50–62**; 12 + (14–18) + (12–20) + 18 + 3 = **59–71**; 71–83 con Comisión trimestral el año 1 (C1, 2 × 6 h más; fila 23). Los ajustes de ALTA no son filas de la tabla única: salen de los epígrafes 5 de DT-6·v3 (4 h por prueba de continuidad) y de DT-8·v3 (4 h de revisión y 8 a 16 por ensayo), aplicados a las filas B4 y B6. ADM-8·v3 no tiene fila propia: su cotejo del Inventario está dentro de B6 y no se suma (ADM-8·v3, ep. 5). Al combinar la capa con el perfil base, las filas comunes —B3, B4, B6, C1, C2 y C10— se cuentan una sola vez, con el valor de esta capa.

**Condicionales de la capa**: ADM-11 (C8), 3 · 3; ADM-12 (C9), 2 · 2; DT-3 (nota de las filas B), 4 · 4. Con las tres, en ALTA: **59–71 h/año** y **68–80 h** el primer año. Las del perfil base, con sus filas.

**Fuera de la cuenta anual**: 9–24 h por licitación (A1 + A2), 33–53 con ADM-9 (A3); reversión, 20–30 h; 6 h por penalidad y 25–40 por resolución (ep. 5); preparación, 21,5 h la primera vez y 10 después (V.9).

**Frente al §7.9.2 de la Parte I.** Si la carga anual estimada de verificación **supera [20] horas**, se reduce el número de cláusulas incorporadas o se agrupa la verificación en la Comisión de Seguimiento; si **supera [40] horas**, la incorporación requiere la **conformidad expresa del servicio verificador**, firmada por su jefe, que es documento propio del expediente (paso A-6 de V.2.1). Es «supera», no «a partir de»: 40 horas exactas no la exigen. ADM-4·v3, epígrafe 5, compara con los umbrales también la carga del primer año, y todo contrato tiene su primer año: cuando ésta supera [40] horas, la conformidad se recaba. Como la carga se estima en horquilla, este documento recomienda, además, recabarla en cuanto el extremo superior pase de [40] horas y firmarla sobre la horquilla entera. Si la plantilla no la cubre, se incorporan menos cláusulas; no se escriben para dejarlas sin verificar (ADM-4·v3, epígrafe 5, regla de cierre). **En este perfil**, la capa va de 42 a 50 h/año por defecto y de 50 a 62 en ALTA, frente a las 20–24 h/año del mínimo de partida del §VI.2.2 (C9 + B4 + C4 + B7; ADM-4·v3, ep. 5): supera [40] horas en toda la horquilla, el primer año (55–67; 59–71 en ALTA) y en régimen ordinario, por defecto y en ALTA: la conformidad se recaba siempre. Sin horas, se dota la función o se reducen cláusulas; el ensayo de reversibilidad no se suprime (§4.2, DT-8·v3).

---

## 9 · Lista de comprobación antes de aprobar el pliego

1. ☐ Condiciones suspensivas de la Parte IV, §M11, filas 1 a 3, cumplidas para la entidad; si no, ninguna cláusula entra como cláusula del catálogo ni se justifica por remisión a él, y lo institucional tiene una vía del §M1.2 bis o se pospone.
2. ☐ Los tres datos de entrada del §2.1, acreditados en el expediente.
3. ☐ Categoría ENS con valoración por dimensiones y categoría firmadas (art. 41) y motivada en la memoria antes de aprobar; DT-6 con la categoría resultante y la rúbrica intacta.
4. ☐ ADM-11: cuatro circunstancias acreditadas, advertencia en la memoria y coste en el PBL; o NO APLICA con motivo.
5. ☐ DT-8: ensayo con calendario y horas comprometidas; plazo de ejecución, licencia y garantía reflejados en el PCAP.
6. ☐ ADM-5: trasvase hecho, tipos huérfanos borrados, M8 conservado; L12, G26 y M16 conservados si el PPT fija tiempos máximos y califica las incidencias críticas.
7. ☐ ADM-6: bloque A con su presupuesto declarado; B.1 según lo incorporado; B.2 sólo con test de relevancia; cierre con denominación y versión.
8. ☐ ADM-7: baremo recompuesto antes del anuncio y hoja de comprobación sin rojos; con E, ADM-1·v3 B sin sus letras b) y c), y E sin lo que exige DT-1·v3 (fila 9 de la hoja); nada de ENS, depósito, reversibilidad ni accesos de control puntúa.
9. ☐ Anuncio con cada condición especial de ejecución (art. 202.1 LCSP).
10. ☐ Verificador, periodicidad y horas por cláusula; conformidad expresa del servicio verificador si la carga anual estimada supera [40] horas, también la del primer año (§7.9.2; ADM-4·v3, epígrafe 5).
