## PARTE I · DISPOSICIONES GENERALES Y REGLAS DE INTEGRACIÓN

Esta Parte I no se copia a ningún pliego, salvo los bloques expresamente marcados como texto de pliego: el del apartado §4.2 (referencias técnicas no normativas), los del apartado §5.2 (definiciones) y los del apartado §7.10 (cláusula de integración e interpretación). Todo lo demás es régimen interno del catálogo: explica de dónde nace cada exigencia, qué instrumento contractual le corresponde y qué límites tiene. Un pliego que reciba las cargas de este catálogo sin transcribir los límites del §7.10 estará peor redactado que si no lo hubiera usado; esa es la razón de que la regla de transcripción exista y sea obligatoria.

Fecha de corte de toda la información normativa y doctrinal de este documento: **1 de septiembre de 2026**. Las fechas de exigibilidad y las referencias que caducan se recogen, con esa misma fecha de corte, en el Anexo XI (Vigencia normativa).

---

### §1. Objeto, naturaleza y regla de uso

#### 1.1 Objeto

Este documento reúne, ordena y motiva las cláusulas de contenido tecnológico —inteligencia artificial, agentes de inteligencia artificial, automatización, interoperabilidad, seguridad, servicios de confianza y reversibilidad— que el Ayuntamiento puede incorporar a los Pliegos de Prescripciones Técnicas (PPT) y de Cláusulas Administrativas Particulares (PCAP) de sus contratos, junto con los documentos de expediente que cada una de ellas exige.

Para cada cláusula, el documento entrega cinco cosas y solamente esas cinco: el texto literal que se copia al pliego, el pliego y el apartado donde va, la necesidad y la norma o el acto del que nace, el medio de acreditación y de verificación con su actor y su periodicidad, y la consecuencia tasada de su incumplimiento.

#### 1.2 Naturaleza: catálogo de aplicación motivada

Este documento es un **catálogo de aplicación motivada**. No es una norma, no es un pliego, no es una instrucción de obligado cumplimiento y no se aplica solo.

Desaparece, respecto de la versión 2.0, la definición del clausulado como texto «para su incorporación transversal en los Pliegos […] de cualquier licitación del Ayuntamiento, con independencia del área gestora». Esa fórmula describía exactamente lo que el artículo 116.4.e) de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público (en adelante, LCSP) no admite: una exigencia incorporada al pliego sin relación acreditada con el objeto de ese contrato. El precepto exige que en el expediente conste «la necesidad de la Administración a la que se pretende dar satisfacción mediante la contratación de las prestaciones correspondientes; y su relación con el objeto del contrato, que deberá ser directa, clara y proporcional» ([LCSP, texto consolidado](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902)).

De esa naturaleza se derivan tres consecuencias que gobiernan todo el documento:

1. **Ninguna cláusula está incorporada por el hecho de figurar aquí.** La aprobación de este catálogo no incorpora nada a ningún pliego.
2. **La aprobación de este catálogo no sustituye a la memoria justificativa de ningún expediente.** La motivación de cada exigencia se hace en la memoria del expediente concreto, y allí es donde se juega su validez (§3.8).
3. **Lo que no supere el circuito de motivación del §3 se marca NO APLICA y no entra en el pliego.** No entra «por si acaso», ni «porque estaba en el modelo», ni «porque lo lleva el contrato anterior».

#### 1.3 Regla de uso (regla de cierre)

Ninguna cláusula de las Partes II y III se incorpora a un PPT o a un PCAP sin que conste previamente en el expediente la Ficha de Aplicabilidad del Anexo II, cumplimentada y firmada, con identificación del origen de la necesidad conforme al §3 y con la motivación de la relación directa, clara y proporcional con el objeto de ese contrato. En su defecto, la cláusula se marca NO APLICA.

La firma de la ficha corresponde a un actor distinto según el origen de la necesidad. La doble vía de firma se detalla en el §3.7 y es condición de validez de la ficha: una ficha firmada por quien no puede declarar esa necesidad es una ficha sin motivación.

#### 1.4 Lo que este documento no promete

Este documento **no promete que un tribunal no pueda anular un pliego** que incorpore estas cláusulas. No consta, a fecha de corte 01/09/2026 y tras búsqueda en los repositorios del Tribunal Administrativo Central de Recursos Contractuales, del Tribunal Administrativo de Contratación Pública de la Comunidad de Madrid y del OARC/KEAO, resolución alguna sobre condiciones especiales de ejecución de contenido tecnológico-evolutivo, sobre interfaces de acceso para agentes de inteligencia artificial, sobre la ISO/IEC 42001 como criterio de adjudicación, sobre demostraciones funcionales de software ni sobre infraestructuras de registro distribuido en pliegos. El primer pliego recurrido sobre estas materias creará el precedente.

Lo que sí se promete, porque es diseñable y comprobable línea a línea:

- cada exigencia tiene un **origen de necesidad identificado** y escrito;
- cada exigencia tiene **un solo instrumento contractual** y no se computa dos veces;
- cada exigencia tiene un **medio de acreditación tasado** y una **forma de verificación con actor municipal y periodicidad**;
- cada incumplimiento tiene una **consecuencia tipificada**, y sólo son esenciales los incumplimientos de una lista cerrada;
- **la caída de una pieza no arrastra las demás**, salvo las relaciones de presupuesto necesario identificadas en la tabla de dependencias del Anexo VI (§7.8).

---

### §2. Ámbito, proporcionalidad y reutilización por otras administraciones

#### 2.1 Tipos de contrato y modulación

El catálogo puede aplicarse a contratos de servicios, suministros, obras y concesiones, y a sus modificaciones, siempre que el contrato tenga componente digital o tecnológico. Cuatro advertencias de tipología que condicionan cláusulas concretas:

- La adquisición de software estándar es **contrato de suministro**; sólo el software desarrollado a medida encaja en el contrato de servicios. Las exigencias de titularidad del artículo 308.1 LCSP no amparan la primera (véase ADM-8·v3).
- **La suscripción de software en modalidad de servicio se califica igual que la licencia.** El artículo 16.3.b) LCSP considera suministro, en todo caso, la cesión del derecho de uso de programas de ordenador «en cualquiera de sus modalidades de puesta a disposición», y sólo exceptúa los desarrollados a medida, que son servicios. Si el contrato añade implantación, parametrización, desarrollo o mantenimiento de aplicaciones, es mixto, y la prestación principal es la de mayor valor estimado, servicios o suministros (art. 18.1.a), párrafo segundo, LCSP); la calificación se motiva en el expediente, como hace el ejemplo de la Parte VI, VI.4.1. De ella dependen cinco piezas del catálogo: el alcance de ADM-8·v3, que en el suministro se reduce a sus apartados 4 y 5 y, del apartado 1, a datos, *prompts* corporativos y bases de conocimiento municipales (su epígrafe 7); el de DT-8·v3, que en el suministro de software estándar se reduce a sus apartados 1.a), 4, 7 y 8 (su epígrafe 7); las letras de ADM-1·v3, modalidad B, que en el suministro con inteligencia artificial operada por el proveedor son la a), la b) y la d) (su nota al redactor, punto cuarto); la bolsa de servicios evolutivos de ADM-3·v3, bloque 2, que sólo cabe en servicios de desarrollo o mantenimiento de aplicaciones (art. 308.3 LCSP); y el informe de insuficiencia de medios, que el artículo 116.4.f) LCSP sólo exige en los contratos de servicios.
- En contratos de obras y concesiones, el catálogo se aplica exclusivamente al componente de sistemas de información de la prestación, nunca al conjunto.
- En contratos sin sistema de información municipal ni tratamiento de datos personales por cuenta del Ayuntamiento, el catálogo **no se aplica**.

#### 2.2 Regla de proporcionalidad y cuadro de intensidad

La intensidad de aplicación se gradúa por el valor estimado del contrato, por la categoría de seguridad del sistema y por la criticidad del servicio soportado, y nunca por la ambición tecnológica del expediente. El cuadro siguiente es orientativo y no sustituye a la ficha: fija el punto de partida para que el redactor no tenga que reabrir la discusión en cada expediente.

| Nivel | Cuándo se aplica (valores recomendados) | Qué se incorpora |
|---|---|---|
| **A · Mínimo** | Valor estimado inferior a **[X; se recomienda 50.000] €**; o contrato sin sistema de información municipal. **Los contratos sin pliego —el contrato menor— no se rigen por este cuadro: véase el apartado V.7.1** | Sólo lo impuesto por norma: DT-6·v3 (ENS); DT-1·v3, siempre que intervengan sistemas de inteligencia artificial; bloque A de ADM-6·v3 (esencialidades *ex lege*, cuando concurra su presupuesto) y ADM-13·v3 si el contratista va a tratar información municipal no pública |
| **B · Estándar** | Valor estimado entre **[50.000; se recomienda 50.000]** € y el umbral de contratos sujetos a regulación armonizada; contrato con sistema de información municipal | Nivel A + DT-0·v3, DT-5·v3, DT-8·v3, ADM-1·v3, ADM-4·v3, ADM-5·v3, ADM-6·v3, ADM-8·v3, ADM-10·v3 (cuando se haya incorporado DT-9·v3 y su Anexo V, del que depende) y ADM-12·v3 |
| **C · Reforzado** | Valor estimado igual o superior al umbral de contratos sujetos a regulación armonizada (**216.000 €** en servicios y suministros para 2026-2027, conforme al [Reglamento Delegado (UE) 2025/2152](https://www.boe.es/buscar/doc.php?id=DOUE-L-2025-81543), incorporado a los artículos 21.1.b) y 22.1.b) LCSP por la Orden HAC/1517/2025, de 18 de diciembre; es un umbral legal, no un parámetro del órgano de contratación, y caduca el 31/12/2027); o sistema de categoría ENS **MEDIA** o **ALTA**; o servicio de los relacionados en la cláusula ADM-11·v3, apartado 1, letra c) | Nivel B + DT-7·v3, DT-9·v3 y Anexo V, ADM-2·v3 y ADM-7·v3; DT-4·v3 sólo cuando exista lista cerrada y numerada de procesos cumplimentada con datos reales; ADM-3·v3 sólo en contratos de servicios que impliquen desarrollo o mantenimiento de aplicaciones (art. 308.3 LCSP); ADM-9·v3 sólo desde **200.000 €** de valor estimado (ADM-9·v3, apartado 10); ADM-11·v3 sólo si concurren **todas** sus condiciones de incorporación (ADM-11·v3, apartado 1, y Anexo X, parámetro 21); ADM-14·v3 sólo si se cumplen sus condiciones de incorporación |

Notas de uso del cuadro, todas ellas de aplicación obligatoria:

- **DT-2·v3 y DT-3·v3 son NO APLICA por defecto en los tres niveles.** Se incorporan sólo con necesidad expresa y motivada.
- **Ningún nivel activa por sí solo una cláusula que tenga condiciones propias de incorporación.** ADM-9·v3, ADM-11·v3 y ADM-14·v3 entran únicamente si concurren las circunstancias que sus respectivas cláusulas exigen; el cuadro no las sustituye ni las flexibiliza. En el caso de ADM-11·v3, las cuatro circunstancias de su apartado 1 son **acumulativas**.
- **El contrato menor queda fuera de este cuadro.** Al no haber pliego, no caben condiciones especiales de ejecución, penalidades tipificadas, obligaciones esenciales ni criterios de adjudicación. Lo único que cabe en el encargo o en la aceptación de oferta es la relación cerrada del apartado V.7.1, que es su fuente única (§2.4.a).
- Subir de nivel exige motivación en la memoria; **bajar de nivel no exige motivación**, porque el catálogo no obliga a nadie a exigir.
- Ningún nivel autoriza a incorporar una cláusula sin ficha (§1.3) ni sin verificación asignada (§7.9).
- El valor estimado se calcula conforme a los artículos 101.2.c) y 101.5 LCSP, **incluidas las prórrogas y toda opción eventual**; una bolsa de horas o una reserva de modificación computan en él.

#### 2.3 Regla de reutilización por otras administraciones

Este documento se publica en abierto para que cualquier administración lo reutilice. La reutilización correcta exige adaptar, **antes de aprobarlo**, los trece elementos siguientes. La regla general se enuncia primero; el régimen de un municipio de gran población figura entre paréntesis, y sólo como ejemplo.

| # | Qué hay que adaptar | Regla general (ejemplo: municipio de gran población) |
|---|---|---|
| 1 | **Régimen jurídico del municipio** | Determina qué órgano emite el informe jurídico preceptivo y qué órgano aprueba. (Un municipio de gran población se rige por el Título X de la Ley 7/1985.) |
| 2 | **Órgano que emite el informe jurídico preceptivo del expediente** | El órgano al que corresponda conforme a la DA 3.ª.8 LCSP en relación con la DA 8.ª de la Ley 7/1985: **Asesoría Jurídica en municipios de gran población; Secretaría en el régimen común**. Toda referencia de este catálogo a «informe jurídico preceptivo» se entiende hecha a ese órgano. |
| 3 | **Órgano de contratación competente** | Según las reglas de competencia de la entidad. |
| 4 | **Órgano de gobierno que aprueba el plan y el catálogo anual** | Es el que crea la necesidad institucional del §3.5. (En un municipio de gran población, la Junta de Gobierno Local, salvo que las normas de organización atribuyan la competencia a otro órgano.) |
| 5 | **Tribunal competente para el recurso especial** | Determina ante quién se defiende el pliego y qué doctrina es la propia. Para las entidades locales de la Comunidad de Madrid, el Tribunal Administrativo de Contratación Pública de la Comunidad de Madrid, conforme al artículo 3 de la Ley 9/2010 en la redacción dada por la [Ley 5/2016, de 22 de julio](https://www.boe.es/buscar/doc.php?id=BOE-A-2016-11098). En otras comunidades, el tribunal autonómico o el TACRC según el convenio o la ausencia de él. |
| 6 | **Categoría de seguridad de cada sistema** | Resulta del anexo I del Real Decreto 311/2022 tras el análisis de impacto; **no se elige**. |
| 7 | **Umbrales económicos vigentes** | Umbral de contratos sujetos a regulación armonizada, umbral del recurso especial (**más de 100.000 €** de valor estimado en servicios y suministros, art. 44.1.a) LCSP) y umbrales de contrato menor del art. 118 LCSP. Fechar la revisión. |
| 8 | **Anexo V del ejercicio** | Cada administración aprueba el suyo, con su propio contraste de mercado documentado. El Anexo V de una administración no sirve como Anexo V de ninguna otra. |
| 9 | **Acuerdo del órgano de gobierno que crea la necesidad institucional** | Es propio e intransferible. El acuerdo de un ayuntamiento no motiva el expediente de otro. |
| 10 | **Declaración de conflicto de interés (art. 64 LCSP)** | Propia, con nombres, firmada y previa a la aprobación. |
| 11 | **Todos los parámetros entre corchetes** | Con decisión expresa; los valores recomendados de este documento son un punto de partida, no una decisión ajena. |
| 12 | **Estimación de carga de verificación con medios propios** | Regla del §7.9: lo que no se pueda verificar, no se incorpora. |
| 13 | **Informes y autorizaciones previos de otros órganos que imponga la normativa propia de la entidad** | Se incorporan al circuito del expediente como paso propio, con su documento y antes de la aprobación del expediente (Parte V, V.2.1, paso B-9). Sólo los que imponga una norma **vigente**: un proyecto no impone trámites. (Para la Administración General de la Comunidad de Madrid y sus organismos públicos, si se aprueba en los términos del proyecto de Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid —texto anexo al Acuerdo del Consejo de Gobierno de 9 de septiembre de 2026—, cuya disposición final primera da nueva redacción a los artículos 3.2.c) y k) y 7.2.d) de la Ley 14/2023, de 20 de diciembre, por la que se crea la Agencia de Ciberseguridad de la Comunidad de Madrid: autorización previa de la Agencia para todo nuevo sistema de información, e informe preceptivo de la Agencia sobre los pliegos de prescripciones técnicas en los contratos en materia de ciberseguridad y gobernanza de las tecnologías de la información y la comunicación. Hoy es proyecto y no se aplica a ningún expediente. A un ayuntamiento no le alcanza: el artículo 2.1 de esa Ley, en la redacción del proyecto, sitúa las funciones de la Agencia en la Administración General y los organismos públicos de la Comunidad.) |

**Advertencia de reutilización.** Copiar literalmente este documento no produce por sí solo ningún efecto de cobertura jurídica. Lo que protege no es el texto de las cláusulas: es el circuito de motivación, acreditación y verificación que las acompaña. Una administración que copie el articulado y no reproduzca ese circuito habrá importado las cargas sin las defensas.

#### 2.4 Contratos menores, contratos basados en acuerdo marco o sistemas centralizados, y prórrogas

Tres supuestos que son mayoría en el volumen de expedientes de un ayuntamiento y para los que el catálogo, sin estas reglas, no serviría.

**a) Contratos menores (art. 118 LCSP).** El catálogo **no se aplica**. Lo único que cabe incorporar al encargo o a la aceptación de oferta es la relación cerrada del apartado **V.7.1**, que es su **fuente única** y no se reproduce aquí para que las dos no puedan divergir: son exigencias que no derivan del catálogo sino de la norma —señaladamente, la conformidad con el ENS del artículo 2.3 del Real Decreto 311/2022 y el encargo de tratamiento del artículo 28 del RGPD—. Al no haber pliego, **no caben condiciones especiales de ejecución, penalidades tipificadas, obligaciones esenciales con efecto resolutorio ni criterios de adjudicación**: son instrumentos que presuponen pliegos. Queda prohibido fraccionar el objeto para situar un contrato por debajo del umbral del menor y eludir el catálogo; si se detecta, la ficha se deniega.

**b) Contratos basados en un acuerdo marco y adhesiones a sistemas de adquisición centralizada.** El pliego regulador del acuerdo marco o del sistema es *lex contractus* y no admite que el poder adjudicador adherido añada obligaciones nuevas en el contrato basado. Regla:

1. Si el Ayuntamiento es quien licita el acuerdo marco, el catálogo se aplica **en esa licitación**, no en los basados.
2. Si el Ayuntamiento es adherido, sólo cabe utilizar los elementos que el propio acuerdo marco deje abiertos: los términos de la nueva licitación o segunda vuelta, cuando exista, y las condiciones de ejecución que el acuerdo marco remita al contrato basado.
3. En ambos casos, el informe de necesidad hará constar **qué exigencias del catálogo no han podido incorporarse y qué consecuencia asume el Ayuntamiento** (típicamente: ausencia de reversibilidad pactada, ausencia de acceso de los órganos de control, ausencia de titularidad sobre desarrollos específicos). Esa constancia es la que permite, en la licitación siguiente, justificar la necesidad con datos y no con adjetivos.
4. Cuando la carencia sea relevante, el órgano de contratación trasladará la propuesta de incorporación al órgano que gestione el acuerdo marco o la central de compras. Es el único cauce eficaz.

**c) Prórrogas.** La prórroga ejecuta el contrato existente; **no introduce obligaciones nuevas** ni altera su contenido. Regla:

1. En la prórroga **no se incorporan cláusulas del catálogo**.
2. Antes de acordarla se verifica el cumplimiento de las obligaciones tecnológicas ya vigentes y se documenta el resultado; una prórroga acordada sin esa verificación consolida el incumplimiento.
3. El Anexo V vigente durante la prórroga sigue siendo **el de la licitación**, por aplicación de la regla de invariabilidad (DT-9·v3). Las revisiones anuales posteriores no afectan a los contratos en vigor.
4. Las exigencias que se hayan echado en falta se recogen en el informe de prórroga y alimentan el expediente de la licitación siguiente.

---

### §3. Armazón normativo de la necesidad

Esta es la sección más importante del documento. Responde a la dificultad que puede bloquear la aprobación de un expediente, la primera de las cuatro del §M1.1: unas cláusulas que nacen de necesidades que aún no demandan los gestores acaban resultando artificiosas al contrato.

La dificultad es correcta en el estándar y equivocada en el sujeto, y además **sólo cubre una parte del catálogo**. Las tres cosas se resuelven aquí.

#### 3.1 El estándar legal: qué exige exactamente la ley

El artículo 28.1 LCSP no dice que la necesidad la formule un gestor. Dice que la naturaleza y extensión de las necesidades y la idoneidad del objeto para satisfacerlas «deben ser determinadas con precisión, dejando constancia de ello en la documentación preparatoria, antes de iniciar el procedimiento encaminado a su adjudicación». El artículo 116.1 obliga a motivar la necesidad en el expediente, y su párrafo segundo obliga además a especificar la finalidad del tratamiento cuando se traten datos personales. Y el artículo 116.4.e) fija el test que aplicará un tribunal: relación entre la necesidad y el objeto **directa, clara y proporcional**.

El estándar es documental, no de origen de la petición. Quien determina la necesidad es el órgano de contratación; de dónde le llega es indiferente para la ley y decisivo para la calidad de la motivación.

#### 3.2 Por qué hacen falta tres orígenes y no uno

Una parte del catálogo nace de normas que obligan al Ayuntamiento entero y que ningún gestor pedirá nunca: la conformidad con el ENS, la condición especial de protección de datos, la titularidad suficiente para ceder la aplicación a otra Administración, el acceso de los órganos de control interno. Ahí la objeción no opera: la necesidad la formula la ley.

Otra parte nace del servicio: continuidad, poder cambiar de proveedor, reducir la carga de un procedimiento con volumen. Ahí la objeción opera plenamente y la respuesta es sencilla: si el gestor no la declara, no entra.

Y queda un tercer bloque —el núcleo tecnológico del catálogo: la interfaz normalizada de acceso para agentes, la operación autónoma supervisada, la trazabilidad de agentes— para el que **no hay norma que lo imponga y no habrá gestor que lo pida**. Ninguna norma obliga a un ayuntamiento a exponer sus sistemas de gestión a agentes de inteligencia artificial. Sostener que la necesidad existe porque está «desatendida» es una afirmación, no un instrumento: rellenada así, la ficha de cada expediente acabaría reproduciendo el mismo párrafo, que es la definición de justificación estereotipada.

Ese tercer bloque sólo tiene un fundamento válido: **un acto del órgano de gobierno municipal, con rango, publicado y fechado**, que apruebe el plan de digitalización y el catálogo anual de exigencias. Con él, el informe de necesidad de cada expediente no invoca un documento técnico de una concejalía: invoca un acuerdo del órgano de gobierno, y la relación con el objeto pasa a ser derivada de una política municipal aprobada. Sin él, ese bloque no entra en ningún pliego.

De ahí los **tres orígenes de necesidad**. Toda cláusula de este catálogo tiene que poder anclarse en uno de ellos, y el instrumento de motivación es distinto en cada caso.

#### 3.3 Origen (i): necesidad normativa

La necesidad la impone una norma al Ayuntamiento. El expediente no la justifica: la identifica y acredita que concurre su presupuesto de hecho.

La columna «Exigibilidad» es de aplicación obligatoria: separa lo que hoy es obligación legal de lo que el Ayuntamiento anticipa voluntariamente. Confundir ambas cosas es, además de un error de cita, un problema de proporcionalidad —se estaría exigiendo como obligación legal vigente lo que la norma todavía no exige—.

| # | Necesidad | Norma que la impone | Exigibilidad a 01/09/2026 | Instrumento (·v3) |
|---|---|---|---|---|
| 1 | Conformidad con el ENS de los sistemas en que se sustenten los servicios del contratista, y de su cadena de suministro | RD 311/2022, art. 2.3; forma de acreditación, arts. 38.1 y 40 | Exigible | DT-6·v3 |
| 2 | Condición especial de ejecución de protección de datos, con carácter de obligación esencial, **cuando el contrato implique cesión de datos por el Ayuntamiento al contratista** | LCSP art. 202.1, párr. 3.º | Exigible **si concurre el supuesto**; si no concurre, la obligación no existe y no se declara esencial | ADM-6·v3, bloque A |
| 3 | Obligaciones sobre ubicación de servidores y su subcontratación, calificadas como esenciales en todo caso, **cuando la ejecución requiera el tratamiento por el contratista de datos personales por cuenta del responsable** | LCSP art. 122.2, letras a) a e) y párrafo final | Exigible **si concurre el supuesto** | ADM-6·v3, bloque A |
| 4 | Especificación de la finalidad del tratamiento de datos personales en el expediente | LCSP art. 116.1, párr. 2.º | Exigible | Anexo III (informe de necesidad) |
| 5 | Acceso de los órganos de control interno a los datos que acreditan la ejecución | TRLRHL art. 214; RD 424/2017 arts. 4.3, 6.3, 6.4, 6.7, 20.3, 30.1 y 30.3; DA 3.ª.3 LCSP. Complementariamente, y sólo para la información sobre operaciones, saldos y costes del tercero en actuaciones de auditoría pública, RD 424/2017 art. 33.4.d) | Exigible | ADM-12·v3 |
| 6 | Determinación previa de los órganos competentes para especificaciones, programación, mantenimiento, supervisión, control de calidad y auditoría del sistema **y de su código fuente**, y del órgano responsable a efectos de impugnación | Ley 40/2015 art. 41.2 | Exigible **cuando haya actuación administrativa automatizada** | DT-1·v3 y ADM-8·v3 |
| 7 | Garantías frente a decisiones basadas únicamente en tratamiento automatizado | RGPD art. 22 | Exigible **si concurre el supuesto** | DT-1·v3 |
| 8 | Titularidad de derechos suficiente para poner la aplicación a disposición de cualquier otra Administración que la solicite | Ley 40/2015 arts. 157.1 y 158.1; RD 4/2010 (ENI) arts. 16 y 17 | Exigible | ADM-8·v3 |
| 9 | Consulta previa sobre soluciones ya disponibles y obligación de reutilizar, salvo justificación en términos de eficiencia | Ley 40/2015 art. 157.3 | Exigible; **es trámite del expediente, no cláusula del pliego** | Anexo III y Parte V |
| 10 | Definición del objeto en atención a funcionalidades, sin cerrarlo a una solución única, en especial cuando puedan incorporarse innovaciones tecnológicas | LCSP art. 99.1 | Exigible | DT-0·v3 y DT-9·v3 |
| 11 | Formulación funcional de las prescripciones, admisión de equivalentes y prueba de la equivalencia en la oferta | LCSP arts. 126.5.a), 126.6, 126.7, 126.8 y 128.2 | Exigible | DT-0·v3 |
| 12 | Inclusión de al menos una condición especial de ejecución; la innovación es materia expresamente admitida | LCSP art. 202.1 y 202.2; Directiva 2014/24/UE art. 70 | Exigible (habilitación, no obligación de contenido) | ADM-2·v3 |
| 13 | Que el personal que se ocupe del funcionamiento y uso de sistemas de IA tenga un nivel suficiente de conocimientos | Reglamento (UE) 2024/1689, art. 4, **en su redacción vigente** | Exigible; es obligación del Ayuntamiento. El contrato sólo puede aportar formación y materiales | DT-1·v3 |
| 14 | Obligaciones del responsable del despliegue de sistemas de alto riesgo y evaluación de impacto relativa a los derechos fundamentales | Reglamento (UE) 2024/1689, arts. 26 y 27 (capítulo III, sección 3), en su redacción vigente | **NO EXIGIBLE HOY.** El [Reglamento (UE) 2026/1744, de 8 de julio de 2026](https://www.boe.es/buscar/doc.php?id=DOUE-L-2026-81147) fija la aplicación del capítulo III, secciones 1, 2 y 3, el **2 de diciembre de 2027** para los sistemas de alto riesgo del art. 6.2 y anexo III, y el **2 de agosto de 2028** para los del art. 6.1 y anexo I. **Matiz autonómico** [si la entidad está sujeta a la Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid o a norma autonómica equivalente]: la evaluación de impacto podría ser exigible **antes** de esas fechas, desde la entrada en vigor de esa ley, porque el artículo 23.1 de su proyecto la exige para los sistemas de alto riesgo como parte del proyecto de implantación del sistema, sin remitir al calendario europeo. Hoy es un proyecto de ley en tramitación y no obliga a nadie (Anexo XI.4) | Sólo como **anticipación voluntaria**: véase §3.5 y DT-1·v3 |
| 15 | Registro en la base de datos de la UE | Reglamento (UE) 2024/1689, art. 49 | **Exigible.** El artículo 49 se integra en la **sección 5** del capítulo III y no queda comprendido en el aplazamiento del Reglamento (UE) 2026/1744, que alcanza únicamente a las secciones 1, 2 y 3 de ese capítulo. Es obligación del Ayuntamiento como responsable del despliegue; el contrato sólo puede aportar la información y la documentación necesarias | Anexo XI |

Dos reglas de cierre de esta tabla:

- **Toda cita al Reglamento (UE) 2024/1689 se hace «en su redacción vigente».** No se reproducen calendarios en el articulado: viven en el Anexo XI, con fecha de corte. La versión 2.0 de este clausulado y el resumen ejecutivo de la versión 1 describen el calendario original y han quedado desactualizados; así se hace constar en la tabla de correspondencias del Anexo XII.
- **Una fila «no exigible hoy» no es un origen normativo de necesidad.** Si el Ayuntamiento quiere anticiparla, necesita el origen (iii). No puede escribirse en la memoria que la impone una norma. Lo mismo vale para un proyecto de ley: mientras no se publique y entre en vigor, no es origen normativo de nada.

#### 3.4 Origen (ii): necesidad funcional del servicio gestor

La necesidad la declara el servicio gestor, por escrito, con datos. No hace falta norma alguna. Lo que hace falta es que la declaración sea verificable: volumen, coste, incidencias, plazo. Una necesidad funcional declarada con adjetivos no es una necesidad declarada.

| Necesidad funcional típica | Cómo se acredita en el informe de necesidad | Instrumento (·v3) |
|---|---|---|
| Que el servicio no se interrumpa si desaparece el proveedor | Criticidad del servicio, tiempo máximo de indisponibilidad tolerable, dependencia actual | ADM-11·v3 |
| Poder cambiar de proveedor al término del contrato sin rehacer el sistema | Coste de cambio estimado, formatos en que hoy están los datos, dependencias conocidas | DT-8·v3 |
| Reducir la carga de tramitación de un procedimiento concreto | Número de expedientes al año, tiempo medio por expediente, personas dedicadas | DT-4·v3, sobre lista cerrada de procesos |
| Explotar los datos de la ejecución sin pedírselos al proveedor | Número de peticiones de información al año y plazo medio de respuesta actual | ADM-12·v3 y DT-5·v3 |
| Disponer de un entorno de pruebas para validar cambios | Incidencias en producción atribuibles a cambios no probados | DT-9·v3 (criterio de entorno de pruebas del Anexo V) |
| Integrarse con los servicios comunes de obligada utilización | Servicios afectados y estado actual de la integración | DT-5·v3, con la excepción de equivalencia del DT-0·v3 |

#### 3.5 Origen (iii): necesidad institucional aprobada por el órgano de gobierno

Es el origen que faltaba y sin el cual el núcleo tecnológico de este catálogo no puede entrar en ningún pliego.

**Requisitos del acto.** Para servir de origen de necesidad, el acuerdo debe reunir cinco condiciones acumulativas:

1. Estar adoptado por el **órgano de gobierno** de la entidad (en los municipios de gran población, la Junta de Gobierno Local, salvo atribución distinta en sus normas de organización), no por un área ni por una concejalía.
2. **Identificar objetivos y calendario** verificables, no declaraciones de intenciones.
3. **Aprobar el catálogo anual de exigencias tecnológicas determinadas** (Anexo V del ejercicio), con número de versión y fecha, o remitir expresamente al órgano que lo apruebe y al procedimiento.
4. Fijar su **vigencia y revisión** —recomendado: un ejercicio, con revisión antes del cierre del ejercicio anterior— y hacer constar el **contraste de mercado documentado** que sustenta el catálogo.
5. **Publicarse**, de modo que el informe de necesidad de cada expediente pueda remitirse a un acto identificable por cualquiera, incluido un recurrente.

**Modelo de acuerdo** *(documento del expediente de aprobación; no es texto de pliego y no se copia a ningún pliego)*:

> **Acuerdo de la [Junta de Gobierno Local] por el que se aprueba el Plan de Digitalización y Automatización [20XX-20XX] y el Catálogo Anual de Exigencias Tecnológicas Determinadas del ejercicio [20XX].**
>
> **Primero.** Aprobar el Plan de Digitalización y Automatización [20XX-20XX], que fija como objetivo que los sistemas de información municipales relacionados en su anexo [ ] puedan ser operados y consultados de forma programática, bajo control municipal, con supervisión humana y trazabilidad completa, en el calendario que el propio Plan establece.
>
> **Segundo.** Aprobar el Catálogo Anual de Exigencias Tecnológicas Determinadas del ejercicio [20XX], versión [ ], de fecha [ ], que se incorpora como anexo, con las capacidades, plazos y criterios de aceptación que en él se relacionan, y a la vista del contraste de mercado documentado que obra en el expediente [ ].
>
> **Tercero.** Declarar que las exigencias del Catálogo responden a una necesidad de esta Administración en el sentido de los artículos 28.1 y 116.4.e) de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público, y que su incorporación a cada pliego requerirá, en todo caso, la acreditación en el expediente correspondiente de la relación directa, clara y proporcional con el objeto de ese contrato, conforme a la ficha del Anexo II del clausulado.
>
> **Cuarto.** El Catálogo se revisará anualmente. Las revisiones producirán efectos únicamente sobre las licitaciones que se convoquen a partir de su aprobación, sin afectar a los contratos en vigor ni a sus prórrogas.
>
> **Quinto.** Publicar el presente acuerdo y sus anexos en [el portal de transparencia y el perfil de contratante], y dar traslado a [órgano de contratación, Intervención General, Asesoría Jurídica y servicios gestores].

**Lo que el acuerdo no hace.** No incorpora nada a ningún pliego, no sustituye a la memoria justificativa de ningún expediente y no releva de la ficha. La remisión al acuerdo acredita **de dónde nace** la exigencia; la proporcionalidad respecto de *ese* contrato hay que escribirla igualmente (§3.8).

#### 3.6 Regla de cierre de los tres orígenes

> **Ninguna cláusula de este catálogo se incorpora a un pliego si no puede anclarse, en la ficha del Anexo II, en uno de los tres orígenes de necesidad: normativo, funcional o institucional. La que no tenga ninguno de los tres se marca NO APLICA y no entra en el pliego.**

Corolarios:

- Un origen se acredita, no se invoca. «Origen normativo» exige precepto; «origen funcional», datos del gestor; «origen institucional», número y fecha del acuerdo.
- Un mismo contrato puede incorporar cláusulas de los tres orígenes; cada una lleva el suyo.
- La ausencia de origen **no se subsana en sede de recurso** (§3.8).

#### 3.7 Doble vía de firma de la ficha

El §1.3 exige ficha firmada; el §3.3 acredita que hay necesidades que ningún gestor puede declarar. La contradicción se resuelve con dos vías de firma. El gestor de un servicio no puede firmar la ficha del ENS ni la del acceso de los órganos de control interno: no es su necesidad y no le consta.

| Origen | Quién declara la necesidad | Documento que la acredita | Quién firma la ficha del Anexo II |
|---|---|---|---|
| **(i) Normativo** | El servicio competente por razón de la materia: seguridad de la información para el ENS; delegado de protección de datos para RGPD; Intervención General para el control interno; servicio de informática para titularidad, interoperabilidad y reutilización | Informe del servicio competente, o remisión al precepto con acreditación de que concurre su presupuesto de hecho | El responsable del servicio competente que declara la necesidad |
| **(ii) Funcional** | El servicio gestor del contrato | Informe de necesidad del Anexo III, con los datos del §3.4 | El gestor del contrato |
| **(iii) Institucional** | El órgano de gobierno, mediante el acuerdo del §3.5 | Remisión al acuerdo, con número y fecha, más la motivación de proporcionalidad respecto de este contrato | El responsable del área impulsora del Plan, con remisión expresa al acuerdo |

Una ficha firmada por quien no puede declarar esa necesidad es una ficha sin motivación, y su efecto es el mismo que si no existiera. El órgano al que corresponda el informe jurídico preceptivo (Asesoría Jurídica en municipios de gran población; Secretaría en el régimen común) lo comprueba antes de informar.

#### 3.8 Dónde se motiva: la advertencia de Parla

La motivación se hace en la **memoria justificativa del expediente**, y no se puede completar después.

**Tribunal Administrativo de Contratación Pública de la Comunidad de Madrid, Resolución 383/2024, de 3 de octubre de 2024, expediente y recurso 383/2024** (recurso de Tecnologías Viales Aplicadas TEVA, S.L. contra los pliegos del Ayuntamiento de Parla para un sistema de gestión de zona de bajas emisiones). El Tribunal **estimó el recurso** por exigir certificaciones de conformidad con el Esquema Nacional de Seguridad de nivel ALTO sin justificación en la memoria. Precisión de cita, porque un lector hostil coteja el fallo: el ACUERDA se limita a decir «Estimar el recurso»; **la anulación de los pliegos consta en el fundamento de derecho Quinto**. El Tribunal no calificó la exigencia de desproporcionada: anuló por falta de justificación en el expediente, con arreglo al artículo 116.2 LCSP. Literal:

> «analizada la memoria justificativa publicada en la plataforma, en su apartado 13, consta exclusivamente la exigencia de la habilitación empresarial sin que aparezca la más mínima justificación de tal exigencia, como establece el artículo 116.2 de la LCSP. Esta justificación debe realizarse en la memoria justificativa de la contratación, sin que sea admisible la justificación realizada en sede de recurso»

[Resolución 383/2024 (PDF)](https://www.comunidad.madrid/tacp/sites/default/files/resolucion_383-2024_expediente_383-2024.pdf).

Es el tribunal que resolvería un recurso contra los pliegos de un ayuntamiento de la Comunidad de Madrid, sobre el supuesto exacto de la cláusula de seguridad de la versión 2.0 de este clausulado, y contra un ayuntamiento de la misma provincia. Se cita como doctrina directamente aplicable en cuanto al **deber de motivar en la memoria del expediente**; para el resto de exigencias de este catálogo se traslada **por analogía**, porque no consta doctrina específica sobre ellas (§1.4).

Consecuencias operativas, que hay que escribir sin adornos:

1. **Este catálogo no es la memoria justificativa de ningún expediente.** Ni el catálogo, ni sus anexos, ni la ficha lo son.
2. **Una memoria que se limite a remitirse al catálogo es una justificación por remisión**, y por tanto estereotipada. La remisión sirve para acreditar el origen; la proporcionalidad respecto de este contrato hay que escribirla.
3. **La ficha del Anexo II y el informe de necesidad del Anexo III son documento público** desde que se publica el expediente: el artículo 116.1 obliga a publicar en el perfil de contratante la motivación de la necesidad, y el artículo 63.3.a) LCSP relaciona la documentación que acompaña al anuncio. Se redactan sabiendo que los lee un recurrente.

#### 3.9 Párrafo de cierre

El artículo 28.1 LCSP no dice que la necesidad la formule un gestor: dice que el órgano de contratación la determine con precisión y deje constancia de ello en la documentación preparatoria. Que ningún gestor haya demandado una necesidad no la convierte automáticamente en artificiosa —pero tampoco la convierte automáticamente en necesidad—. La diferencia entre una cosa y otra no la marca la prosa: la marca el origen. Si viene de una norma, se cita el precepto; si viene del servicio, se aportan sus datos; si no viene de ninguno de los dos, hace falta un acuerdo del órgano de gobierno que la asuma como política municipal, con calendario y con contraste de mercado. Y si no hay ninguna de las tres cosas, la exigencia no entra en el pliego. Ese es todo el mecanismo, y es verificable línea por línea en cada expediente.

---

### §4. Marco normativo, en tres bloques separados

La versión 2.0 mezclaba en una sola lista normas jurídicas, normas técnicas y una especificación privada. Esa mezcla es el primer defecto que subraya el abogado de un licitador, porque de ella se derivan efectos jurídicos que la ley no permite. Se separa en tres bloques.

#### 4.1 Normas de aplicación obligatoria

Contratación pública
- Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público (LCSP), y Directiva 2014/24/UE.
- Real Decreto 817/2009, de 8 de mayo, de desarrollo parcial de la Ley 30/2007 (en lo aplicable a mesas y procedimiento de valoración).

Inteligencia artificial
- Reglamento (UE) 2024/1689, del Parlamento Europeo y del Consejo, **en su redacción vigente**, modificada por el [Reglamento (UE) 2026/1744, de 8 de julio de 2026](https://www.boe.es/buscar/doc.php?id=DOUE-L-2026-81147). Las fechas de exigibilidad, en el Anexo XI.
- Agencia Española de Supervisión de la Inteligencia Artificial (AESIA), creada por el Real Decreto 729/2023, de 22 de agosto, que aprueba su Estatuto. Es un organismo, no una norma; la versión 2.0 la citaba como «normativa nacional de desarrollo».

Protección de datos
- Reglamento (UE) 2016/679 (RGPD), en particular sus artículos 22 y 28.
- Ley Orgánica 3/2018, de 5 de diciembre.

Administración electrónica, seguridad e interoperabilidad
- Leyes 39/2015 y 40/2015, en particular los artículos 41, 157 y 158 de la segunda.
- Real Decreto 311/2022, de 3 de mayo (Esquema Nacional de Seguridad), y guías CCN-STIC del Centro Criptológico Nacional.
- Real Decreto 4/2010, de 8 de enero (Esquema Nacional de Interoperabilidad), y Normas Técnicas de Interoperabilidad; Real Decreto 203/2021, de 30 de marzo.
- Reglamento (UE) 910/2014 y Reglamento (UE) 2024/1183 (marco europeo de identidad digital).

Propiedad intelectual
- Real Decreto Legislativo 1/1996, de 12 de abril (TRLPI), en particular sus artículos 43, 97, 99 y 100.

Control interno y régimen local
- Ley 7/1985, de 2 de abril, reguladora de las Bases del Régimen Local, en especial su Título X para los municipios de gran población y su disposición adicional octava.
- Real Decreto Legislativo 2/2004 (TRLRHL), artículos 213, 214 y 220 a 222.
- Real Decreto 424/2017, de 28 de abril, de régimen jurídico del control interno.
- Ley 19/2013, de 9 de diciembre, de transparencia.

Proyectos normativos en tramitación, **que no son normas de aplicación obligatoria** y no se citan en un pliego como norma aplicable. Se relacionan aquí para que nadie los busque en este bloque:
- Proyecto de Ley Orgánica para el buen uso y la gobernanza de la inteligencia artificial: su tratamiento, en DT-1·v3, epígrafe 3.
- Proyecto de Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid (PL-11/2026, BOAM núm. 171, de 17 de septiembre de 2026; texto anexo al Acuerdo del Consejo de Gobierno de 9 de septiembre de 2026). **Proyecto de ley en tramitación, no exigible.** Si se aprueba, obligará a la Administración de la Comunidad de Madrid y a sus organismos públicos (art. 2.1 del proyecto) y a las entidades locales sólo en los términos de un convenio (art. 2.2, sin perjuicio del ejercicio directo por la Comunidad de Madrid de las competencias que le atribuye el art. 36 de la Ley 7/1985 respecto de los municipios de menos de 20.000 habitantes). Su ámbito, su entrada en vigor y lo que cambiaría en este catálogo, en el Anexo XI.4.

#### 4.2 Normas técnicas y referencias del estado del arte

Se distinguen dos categorías, porque su efecto jurídico es distinto y la confusión entre ambas es un vicio de construcción, no de motivación.

**a) Normas técnicas en el sentido del artículo 125 LCSP.** Pueden citarse en las prescripciones técnicas por la vía del artículo 126.5.b), acompañando **cada referencia** de la mención «o equivalente», y operan como medio de presunción de conformidad. Son las aprobadas por un organismo de normalización reconocido:

- UNE-EN ISO/IEC 27001 y UNE-EN ISO/IEC 27701, o normas que las sustituyan, o equivalentes.
- **UNE-EN ISO/IEC 42001:2026**, «Tecnología de la información. Inteligencia artificial. Sistema de gestión», edición de 8 de abril de 2026, que anula la UNE-ISO/IEC 42001:2025, o equivalente. Cuando esta norma se exija en un pliego, la designación se cita con año expreso y con la regla de referencia estática de ADM-1·v3, que excluye la fórmula «o norma que la sustituya» porque permitiría que el contenido de la obligación cambiase después de que el licitador hubiera ofertado. Su tratamiento contractual y la fundamentación de la designación están en ADM-1·v3, nota al redactor, punto Sexto.
- Normas técnicas de interoperabilidad y guías CCN-STIC, en los términos en que sean de obligado cumplimiento.

Advertencia: la certificación de un sistema de gestión **no otorga presunción de conformidad con el Reglamento (UE) 2024/1689**. Esa presunción sólo la producen las normas armonizadas publicadas en el Diario Oficial de la Unión Europea conforme a su artículo 40. Esta advertencia se formula como criterio propio del Ayuntamiento y no se apoya en doctrina, que no consta.

**b) Referencias que NO son normas y no producen presunción de conformidad.** Se citan **fuera del articulado**, a título ilustrativo del estado del arte, y no pueden fundar por sí solas ninguna obligación:

- **Model Context Protocol (MCP).** Especificación abierta bajo gobernanza de la Agentic AI Foundation (Linux Foundation) desde el [9 de diciembre de 2025](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation), con participación de múltiples operadores. Ese dato acredita que no caracteriza los productos de un empresario determinado, lo que es relevante frente al artículo 126.6 LCSP. **Pero el MCP no es «norma» en el sentido del artículo 125.2 LCSP ni «especificación técnica común» en el del artículo 125.4**, y por tanto **no puede citarse como medio de presunción de conformidad del artículo 126.5.c)**, cuyo efecto está reservado a las especificaciones de la letra b). La [lista de especificaciones técnicas del ámbito TIC identificadas por la Comisión Europea](https://single-market-economy.ec.europa.eu/single-market/european-standards/ict-standardisation/ict-technical-specifications_en) para poder ser referenciadas en contratación pública, conforme a los artículos 13 y 14 del Reglamento (UE) n.º 1025/2012, **no incluye, a 1 de septiembre de 2026, ningún protocolo de agentes**. Es una afirmación negativa sobre un catálogo vivo: se hace con esa fecha de corte y sobre la lista consultada en esa dirección, y debe recomprobarse antes de cada uso.
- **FIPS 203, 204 y 205 del NIST.** Normas federales de los Estados Unidos: no son normas europeas, internacionales ni nacionales españolas a los efectos del artículo 125. Mismo tratamiento.
- **EBSI e infraestructuras de registro distribuido**, incluida ISBE. Mismo tratamiento, con la regla adicional del §5.3.

**Consecuencia obligatoria para la redacción de los pliegos.** La obligación se define por lo que la solución **debe hacer**, no por el protocolo que use. La prescripción se formula en términos de rendimiento o de exigencias funcionales al amparo del artículo 126.5.a); el nombre del protocolo, si aparece, es una ayuda a la comprensión del licitador y va siempre acompañado de «o equivalente». Está prohibido escribir en un pliego que el MCP, las FIPS del NIST o la pertenencia a una red concreta acreditan el cumplimiento.

Texto que se copia al PPT cuando el pliego mencione cualquiera de estas referencias:

:::pliego
**Referencias técnicas no normativas.** Las prescripciones técnicas de este pliego se formulan en términos de rendimiento y de exigencias funcionales, conforme al artículo 126.5.a) de la Ley 9/2017, de 8 de noviembre, de Contratos del Sector Público. Cuando este pliego mencione un protocolo, una especificación, una infraestructura o una red determinados, la mención se efectúa a título ilustrativo del estado del arte, se entiende acompañada de la expresión «o equivalente» y **no constituye medio de presunción de conformidad** ni sustituye a la acreditación de las exigencias funcionales establecidas en la cláusula correspondiente. El cumplimiento se acredita respecto de dichas exigencias funcionales, cualquiera que sea la solución técnica empleada.
:::

#### 4.3 Vigencia normativa y fecha de corte

Toda afirmación sobre exigibilidad, calendarios y umbrales de este documento se remite al **Anexo XI, Vigencia normativa**, que se estructura en dos columnas —**obligación legal ya exigible** frente a **exigencia contractual anticipada por el Ayuntamiento**— y lleva fecha de corte expresa. Antes de cada uso del catálogo debe comprobarse que el Anexo XI está actualizado; si no lo está, el catálogo se usa igualmente pero las exigencias ancladas en el bloque de exigibilidad se verifican una a una.

---

### §5. Definiciones

#### 5.1 Regla sobre las definiciones

Sólo se transcriben al pliego las definiciones que **generan obligación** o que delimitan el alcance de una obligación. Las demás viven en el glosario descriptivo del Anexo XIII, que carece de efectos jurídicos y así lo hace constar.

**Se eliminan como definiciones operativas** y pasan al glosario descriptivo, sin efectos: «Loop Engineering», «Skills / harness / loops» e «hiperautomatización». No tienen definición normalizada y no son verificables en un procedimiento contradictorio; una obligación que no se puede verificar no sostiene ni una penalidad ni una resolución.

#### 5.2 Definiciones que se transcriben al pliego

:::pliego
**Definiciones.** A los efectos de este pliego se entiende por:

**a) Producto base o estándar.** El programa de ordenador, propiedad del adjudicatario o de un tercero licenciante, que se comercializa con anterioridad e independencia de este contrato, con sus actualizaciones y versiones sucesoras. No forma parte del producto base la parametrización, configuración o desarrollo realizados para el Ayuntamiento.

**b) Desarrollo específico.** El código, las reglas de negocio, los algoritmos de cálculo o de decisión, los flujos, las integraciones, las plantillas, los modelos ajustados con datos municipales y la documentación técnica correspondiente, diseñados o realizados específicamente para el Ayuntamiento en ejecución de este contrato, cualquiera que sea el soporte y comprendidos tanto el código fuente como el código objeto.

**c) Inventario de Componentes.** Relación, mantenida y actualizada por el adjudicatario desde el inicio de la ejecución y entregada al Ayuntamiento con la periodicidad que este pliego establece, que identifica y separa: el producto base; los desarrollos específicos; los componentes de terceros integrados, con su licencia y versión; y las configuraciones y parametrizaciones. Su función es delimitar, en cualquier momento de la ejecución, el objeto de la obligación de reversibilidad.

**d) Reversibilidad.** Conjunto de obligaciones del adjudicatario dirigidas a que el Ayuntamiento pueda continuar prestando el servicio por sí o por medio de otro contratista al término del contrato. Comprende la entrega ordenada, sin coste adicional y en formato abierto, reutilizable y documentado, de los datos y del material de titularidad municipal; la asistencia durante el período de transición; y, cuando el sistema no pueda operarse sin el producto base, una licencia de uso transitoria de éste, limitada a la finalidad de continuidad y migración, por plazo de **[X; se recomienda 6] meses** a contar desde la extinción del contrato. El contenido concreto de la entrega, su alcance y sus plazos son los que establece la cláusula **[DT-8·v3], apartado 1**; los límites de la obligación en materia de derechos de propiedad intelectual, y en particular sobre el código fuente del producto base y el de terceros licenciantes, son los que establece la cláusula **[ADM-8·v3], apartado 4**. La devolución o supresión de los datos personales se regirá por lo previsto en el artículo 28.3.g) del Reglamento (UE) 2016/679.

**e) Versión sucesora.** La versión del producto base que, con independencia de su denominación comercial, presente continuidad funcional con el producto contratado, lo sustituya en el catálogo del fabricante o cuente con una ruta de migración ofrecida por el propio fabricante. La concurrencia de cualquiera de estas tres circunstancias se acredita mediante documentación del fabricante.

**f) Obsolescencia tecnológica.** A los efectos de este contrato, se entiende producida cuando concurra alguna de estas dos circunstancias, y sólo ellas: (i) que el adjudicatario no haya implantado, en el plazo establecido, una exigencia de las relacionadas en el Anexo [V] de este pliego; o (ii) que no haya puesto a disposición del Ayuntamiento, en el plazo comprometido, una versión sucesora del producto contratado. Fuera de estos dos supuestos no existe obligación de evolución exigible al amparo de este pliego. La calificación de estos incumplimientos y sus consecuencias son las que expresamente establece la cláusula [ADM-6·v3].

**g) Solución equivalente.** La que cumple de forma equivalente los requisitos funcionales exigidos en este pliego, conforme a los artículos 126.7 y 126.8 de la Ley 9/2017. La equivalencia se aprecia respecto de las exigencias funcionales expresadas en la cláusula correspondiente, y no respecto de un producto, marca, protocolo o infraestructura determinados. Corresponde al licitador acreditarla en su oferta, por cualquier medio adecuado, incluidos los medios de prueba supletorios admitidos por el artículo 128.2. El régimen y el trámite de acreditación son los de la cláusula [DT-0·v3].

**h) Interfaz normalizada de acceso programático.** Interfaz documentada, versionada, autenticada y auditable que expone de forma segura, para su consulta y, cuando el pliego lo prevea, para su operación, los datos y funciones de los módulos identificados en este pliego, con control de acceso diferenciado por módulo, por operación y por ámbito de datos, y con registro de auditoría de las consultas y acciones realizadas. La obligación se define por estas capacidades funcionales, cualquiera que sea el protocolo empleado para prestarlas.

**i) Sistema de IA** y **sistema de IA de alto riesgo.** Los así definidos y clasificados por el Reglamento (UE) 2024/1689, en su redacción vigente.

**j) Agente de IA.** Sistema de IA que, sobre la base de instrucciones u objetivos, encadena y ejecuta operaciones sobre otros sistemas mediante interfaces, dentro de los límites configurados por el Ayuntamiento, con trazabilidad completa de sus actuaciones, con posibilidad de intervención y parada humana y con capacidad de revertir las actuaciones realizadas.

**k) Información municipal no pública.** Cualquier información de la que el Ayuntamiento sea responsable y que no haya sido objeto de publicación oficial, incluidos los datos personales, la información sometida a confidencialidad, la relativa a procedimientos en tramitación y la de seguridad de los sistemas.

**l) Información municipal restringida (nivel 1).** La comprendida en el nivel 1 de la cláusula [ADM-13], apartado 1: datos personales; expedientes en tramitación; documentación contractual no publicada; informes internos; datos de los entornos de producción; y cualquier información municipal clasificada como de acceso restringido por la política de seguridad del Ayuntamiento. Es un subconjunto de la información municipal no pública definida en la letra k) y no comprende los artefactos técnicos del nivel 2 cuando no contengan información de nivel 1.

**m) Exigencias Tecnológicas Determinadas.** Las capacidades concretas, con plazo y criterios de aceptación verificables, relacionadas en el Anexo [V] de este pliego, que forman parte del alcance ordinario del contrato y se entienden retribuidas con el precio ofertado. El régimen de incorporación física de dicho anexo y su invariabilidad durante la vigencia del contrato y de sus prórrogas son los de la cláusula **[DT-9·v3], apartado 2**.
:::

#### 5.3 Comentario a las cuatro definiciones reescritas

**Reversibilidad.** La definición de la versión 2.0 —«portabilidad de datos, código, configuraciones y modelos»— exigía literalmente, leída sin matiz, el código fuente del producto estándar del adjudicatario. Ningún fabricante de software de mercado lo acepta, de modo que la cláusula operaba como barrera de concurrencia sin dar al Ayuntamiento nada que no le diera una redacción delimitada. La nueva definición incorpora la delimitación propuesta en la revisión de modificaciones (modificación 2). El contenido de la entrega no se repite aquí: vive en DT-8·v3, apartado 1, al que la definición remite, y añade tres piezas que la propuesta de modificación no contemplaba y sin las cuales la delimitación se vuelve en contra del Ayuntamiento: el Inventario de Componentes —sin él, la frontera entre producto base y desarrollo específico se discute al final del contrato, que es cuando ya no hay palanca—, la licencia de uso transitoria del producto base —sin ella se devuelve un código que no arranca— y el diccionario de datos.

**Obsolescencia tecnológica.** La definición de la versión 2.0 remitía a «las tecnologías y mejoras que mantienen su vigencia funcional» y se autocalificaba como incumplimiento esencial. Tenía dos defectos acumulados: obligaba a probar, en un procedimiento contradictorio, qué tecnología del mercado era necesaria —cuestión de apreciación técnica—, y anudaba a esa apreciación el efecto resolutorio. El artículo 211.1.f).2.º LCSP exige que las obligaciones esenciales figuren «enumeradas de manera precisa, clara e inequívoca en los pliegos […] no siendo admisibles cláusulas de tipo general». La doctrina es tajante sobre el punto: *«las obligaciones genéricas o imprecisas no pueden configurarse como propias de un contrato […] menos aún pueden elevarse a categoría de obligaciones esenciales de este, cuyo incumplimiento habilite a la resolución»* (Tribunal Administrativo Central de Recursos Contractuales, [Resolución 1113/2022, de 27 de septiembre de 2022, recurso 998/2022](https://www.hacienda.gob.es/TACRC/Resoluciones/A%C3%B1o%202022/Recurso%200998-2022%20(Res%201113)%2027-9-2022.pdf), fundamento de derecho séptimo; el Tribunal declaró la nulidad de las cláusulas 29 y 39 del pliego y acordó la retroacción). Se cita como doctrina general sobre condiciones especiales de ejecución, trasladada por analogía: no consta doctrina sobre cláusulas de contenido tecnológico-evolutivo. La traslación es además **de régimen**, y así se advierte: la Resolución 1113/2022 resuelve una reclamación en sectores excluidos (ADIF Alta Velocidad) al amparo del Real Decreto-ley 3/2020, no un recurso especial de la LCSP; lo que se traslada es el estándar de precisión, no el precepto aplicado. La nueva definición sustituye la apreciación por dos hechos comprobables y remite la calificación a la lista cerrada de ADM-6·v3.

**Solución equivalente.** La versión 2.0 la definía como la que «acredite niveles equivalentes» respecto de lo citado «como referencia», es decir, respecto del producto nombrado. Ese es exactamente el punto por el que una cláusula de equivalencia deja de proteger: si la equivalencia se mide contra un producto, el producto nombrado gana siempre. La nueva definición fija la referencia en las **exigencias funcionales** y traslada expresamente la carga de la prueba al licitador, que es donde la sitúa la ley y donde la sitúa también la práctica del tribunal competente: en su [Resolución 535/2025, de 18 de diciembre de 2025, recurso 526/2025](https://www.comunidad.madrid/tacp/sites/default/files/resolucion_535-2025_expediente_526-2025.pdf) —**desestimatoria**, resuelta por discrecionalidad técnica—, el Tribunal Administrativo de Contratación Pública de la Comunidad de Madrid confirmó que corresponde al licitador demostrar la equivalencia y al órgano de contratación apreciarla. Se cita por lo que resuelve. **No consta que esa resolución declare conforme a Derecho ninguna definición de equivalencia**: la definición en tres condiciones acumulativas que allí aparece es una cláusula de un pliego autonómico, aplicada y no impugnada en ese recurso, y así se cita en DT-0·v3. El régimen completo y el trámite están en DT-0·v3.

**ISBE.** No se transcribe al pliego y no genera obligación alguna. Descripción, a efectos exclusivamente informativos: Infraestructura de Servicios Blockchain de España, implementada por Alastria y alineada con la infraestructura europea EBSI. Se elimina toda la carga preferencial de la definición de la versión 2.0 —el impulso institucional, la financiación y el alineamiento estratégico— porque no describía una capacidad funcional sino un arraigo, y el arraigo territorial no es criterio admisible. Regla de cierre, aplicable a cualquier infraestructura o red gestionada por un tercero:

> **La pertenencia o adhesión a una red o infraestructura nominada no puede configurarse como prescripción técnica de obligado cumplimiento, ni como requisito de solvencia, ni como criterio de adjudicación, ni como condición especial de ejecución.** Cuando el pliego quiera asegurar una capacidad —anclaje de evidencias verificable por un tercero sin acceso privilegiado, identidad digital verificable conforme al marco europeo, interoperabilidad acreditada—, la exigirá por su función. Un requisito cuyo cumplimiento dependa de la admisión de un tercero es un obstáculo injustificado a la apertura de la contratación a la competencia en el sentido del artículo 126.1 LCSP.

---

### §6. Principios rectores

Los principios se conservan porque orientan correctamente la lectura del catálogo, y se les añade el noveno. Se antepone la regla que la versión 2.0 no tenía y que es imprescindible:

> **Los principios de este apartado tienen valor interpretativo. No constituyen por sí solos obligaciones exigibles ni fundan penalidad o resolución alguna: las obligaciones del contratista son, exclusivamente, las expresamente establecidas en las cláusulas de los pliegos.**

Sin esa regla, un pliego que transcribiera los principios estaría exigiendo el cumplimiento de documentos que no son normas jurídicas —señaladamente, las directrices éticas de la Unión sobre inteligencia artificial fiable—, y creando una obligación que ningún órgano puede verificar en un procedimiento contradictorio.

1. **Legalidad, transparencia y trazabilidad.** Actuación conforme a Derecho, documentada y auditable de extremo a extremo.
2. **Explicabilidad y supervisión humana.** Capacidad de explicar las decisiones de forma suficiente y de mantener control humano efectivo en las decisiones con impacto significativo sobre las personas.
3. **Fiabilidad de la inteligencia artificial.** Gestión del riesgo, calidad de los datos, robustez, exactitud y ciberseguridad, en los términos de las cláusulas que los concretan.
4. **Minimización, seguridad y privacidad desde el diseño y por defecto.**
5. **Neutralidad tecnológica, interoperabilidad y accesibilidad universal.**
6. **No discriminación, control de sesgos, auditabilidad y reversibilidad.**
7. **Libre concurrencia, igualdad de trato, proporcionalidad y eficiencia en el uso de los fondos públicos, con plena vinculación al objeto del contrato.**
8. **Soberanía del dato y sostenibilidad.** Control público sobre la información y eficiencia en el uso de recursos.
9. **Separación de instrumentos** *(nuevo)*. Cada exigencia se canaliza por un solo instrumento contractual y no se computa dos veces. Su desarrollo es la regla §7.3 y su instrumento de control, el Cuadro Maestro del Anexo I.

---

### §7. Las reglas de integración

Son el régimen interno del catálogo. Gobiernan cómo se leen y cómo se usan sus cláusulas. Las reglas 1 a 9 se aplican **al redactar el expediente**; la regla 10 dice cuáles de ellas hay que llevarse al pliego, y con qué texto.

#### 7.1 Regla de ubicación

La cláusula de modificación prevista y las condiciones especiales de ejecución van **siempre al PCAP**. Su reproducción en el PPT carece de efectos y genera contradicción entre pliegos. Simétricamente, las prescripciones técnicas van al PPT.

Aplicación inmediata: si en un expediente ya redactado el requerimiento de adaptación tecnológica ha quedado en el PPT, está en el pliego equivocado y debe trasladarse antes de aprobar.

#### 7.2 Regla de prevalencia funcional

En caso de contradicción entre una prescripción que cite un producto, marca, red, infraestructura, protocolo o metodología determinados y la formulación funcional de la misma exigencia, **prevalece la formulación funcional** y la admisión de equivalentes.

La mención «o equivalente» debe acompañar a **cada referencia operativa**, no figurar una sola vez en el preámbulo. Una cláusula-paraguas no cura una prescripción concreta que después obliga, penaliza y resuelve por el nombre del producto. El Tribunal de Justicia de la Unión Europea lo ha fijado con claridad: *«Salvo en los casos en que la utilización de un material resulta inevitablemente del objeto del contrato, el poder adjudicador no puede exigir la utilización de un material determinado sin añadir la mención “o equivalente”»* (sentencia de 16 de enero de 2025, [asunto C-424/23, DYKA Plastics](https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:62023CJ0424), apartado 61); y el poder adjudicador **debe exigir** que el licitador aporte la prueba de la equivalencia «ya en su oferta» (sentencia de 12 de julio de 2018, [asunto C-14/17, VAR y ATM / Iveco Orecchia](https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:62017CJ0014); el literal es el fallo). De esta segunda sentencia se advierte su encuadre, porque es la primera objeción que opondrá el letrado de un licitador: interpreta el artículo 34, apartado 8, de la Directiva 2004/17, de sectores del agua, la energía y los transportes, hoy derogada, y aquí se emplea para fundar una obligación del artículo 126.6 LCSP. De ahí que el trámite de acreditación de DT-0·v3 sea obligatorio y no facultativo.

#### 7.3 Regla de separación de instrumentos

Ninguna exigencia puede computarse dos veces. Quedan prohibidas las **tres** combinaciones siguientes:

1. **Solvencia + criterio de adjudicación.** Lo que se exige para poder licitar no se puntúa. La jurisprudencia y la doctrina son constantes en separar las características de la empresa de las de la prestación: *«los certificados exigidos verdaderamente se refieren a la actividad global de la empresa, no siendo por ello aptos como criterios de adjudicación»* (TACRC, [Resolución 1727/2021, de 2 de diciembre de 2021, recurso 1372/2021](https://www.hacienda.gob.es/TACRC/Resoluciones/A%C3%B1o%202021/Recurso%201372-2021%20VAL%20314-2021%20(Res%201727)%2002-12-2021.pdf), Ayuntamiento de Cofrentes; el Tribunal anuló el pliego en ese punto).
2. **Prescripción técnica de obligado cumplimiento + criterio de adjudicación.** No se puntúa el cumplimiento de lo que el PPT ya impone como obligación. Si lo que se quiere puntuar es algo **adicional** a lo exigido, entonces es una mejora en el sentido del artículo 145.7 LCSP y queda sujeta a los límites de ese precepto; y si no lo es, el criterio retribuye el mínimo obligatorio y es indefendible.
3. **Criterio de adjudicación + condición especial de ejecución sobre el mismo contenido.** Lo comprometido en la oferta y valorado se convierte en obligación por la vía del artículo 145.6 y del propio compromiso; volver a configurarlo como condición especial de ejecución valorable duplica el instrumento.

Instrumento de control: el **Cuadro Maestro del Anexo I**, en el que cada exigencia aparece una sola vez con un único instrumento —prescripción técnica, solvencia, adscripción de medios, condición especial de ejecución, criterio de adjudicación o documento de expediente—. Un expediente cuyo Cuadro Maestro tenga una exigencia con dos instrumentos no se aprueba.

Advertencia adicional: la falta de motivación del vínculo entre un criterio y el objeto del contrato basta por sí sola para anularlo, sin necesidad de discutir el fondo (TACRC, [Resolución 549/2020, de 17 de abril de 2020, recurso 323/2020](https://www.hacienda.gob.es/TACRC/Resoluciones/A%C3%B1o%202020/Recurso%200323-2020%20%20(Res%20549)%2017-04-2020.pdf): *«La falta de motivación del vínculo entre los citados sistemas y el objeto del contrato, por sí sola, produce la infracción de la norma, determinando la anulación del criterio de adjudicación»*). Ambas resoluciones se citan como doctrina general sobre criterios de adjudicación, trasladada por analogía.

#### 7.4 Regla de agotamiento

Fuera del Anexo V incorporado al pliego no existe obligación de evolución tecnológica exigible al amparo de este catálogo. Lo que exceda de ese anexo se tramita por la vía de los artículos 203 y 204 LCSP, si procede, o se incorpora a la licitación siguiente.

Se rechaza expresamente la convivencia de un régimen abierto de anti-obsolescencia con el anexo determinado. Una obligación de contenido indeterminado sigue siendo indeterminada aunque no se le anuden penalidades: el licitador tiene que valorarla económicamente, y un recurso contra el pliego ataca la cláusula, no la penalidad.

#### 7.5 Regla de esencialidad tasada

Ninguna obligación incorporada en virtud de este catálogo tiene carácter de obligación contractual esencial si no figura en la lista cerrada de ADM-6·v3. El resto de incumplimientos genera, en su caso, penalidad conforme a ADM-5·v3.

Precaución de redacción, de aplicación obligatoria: la cláusula de cierre **no puede escribirse** como «ninguna otra obligación de este clausulado tiene carácter esencial», porque copiada al PCAP deja de decir «de este clausulado» y arrastra consigo las obligaciones que ese PCAP declara esenciales por otro título —adscripción de medios, condiciones salariales, las que la ley califica como esenciales *ex lege*—. La redacción correcta es la del §7.10, apartado 4.

Precaución sustantiva: el bloque de esencialidades *ex lege* **está condicionado a su presupuesto de hecho**. El artículo 202.1, párrafo tercero, sólo opera en los contratos cuya ejecución implique la cesión de datos por las entidades del sector público al contratista; el artículo 122.2, sólo en aquellos cuya ejecución requiera el tratamiento por el contratista de datos personales por cuenta del responsable. En un contrato sin encargo de tratamiento, ese bloque no existe, y declararlo esencial es precisamente lo que el artículo 211.1.f).2.º prohíbe.

#### 7.6 Regla de motivación e integridad de las remisiones

1. Ninguna cláusula y ningún criterio se incorporan sin su ficha (Anexos II, III y IV). Es la regla de cierre del §1.3, con la doble vía de firma del §3.7.
2. La ficha no sustituye a la memoria justificativa del expediente (§3.8).
3. **Depuración de menciones.** Cuando una cláusula se marque NO APLICA, el redactor eliminará del pliego **todas sus menciones**, en particular las del cuadro de penalidades, la lista de obligaciones esenciales, los criterios de adjudicación, la declaración responsable y los anexos. La tabla de dependencias del Anexo VI, que es la única fuente, indica para cada cláusula qué menciones arrastra. Un pliego que penalice el incumplimiento de una cláusula que no se ha incorporado es un pliego contradictorio, y la contradicción se resuelve siempre contra el órgano de contratación.

#### 7.7 Regla de equivalencia

Toda referencia a producto, marca, red, infraestructura, protocolo o metodología determinados va acompañada de «o equivalente» y del trámite de acreditación de DT-0·v3, **con dos excepciones tasadas**:

- **Los servicios comunes de obligada utilización** —los que el Esquema Nacional de Interoperabilidad y la Ley 39/2015 imponen— no admiten equivalente. Añadirles «o servicios equivalentes» debilita la exigencia y permite al adjudicatario ofrecer un sustitutivo propio. La excepción está en DT-0·v3, apartado 7, y **la relación cerrada figura en la cláusula DT-5·v3, apartado 2**.
- **Las normas y reglamentos técnicos nacionales de obligado cumplimiento**, que se aplican por su propia fuerza.

#### 7.8 Regla de separabilidad

Se separa en dos regímenes, porque la operación no es la misma sobre una obligación que sobre un criterio de adjudicación.

**a) Cláusulas y obligaciones: separabilidad sí.** La nulidad o anulación de una cláusula o de una obligación incorporada en virtud de este catálogo no afectará a la validez de las restantes, que conservarán íntegramente su eficacia, salvo que la cláusula anulada constituya presupuesto necesario de otra, en cuyo caso decaerá también ésta. La tabla de dependencias del Anexo VI identifica esos casos.

**b) Criterios de adjudicación: no hay reescalado automático.** Está **prohibido** incluir en el PCAP una cláusula que reescale proporcionalmente las ponderaciones publicadas en caso de anulación de un criterio. El artículo 146 LCSP obliga a precisar en el pliego la ponderación relativa atribuida a cada criterio; valorar las ofertas con ponderaciones distintas de las publicadas altera las reglas conocidas por los licitadores al ofertar y, además, sugiere que los pesos publicados no respondían a ninguna justificación material. Regla:

1. Cada criterio se motiva individualmente en su ficha del Anexo IV (Ficha por criterio y hoja de comprobación del baremo), de modo que su eventual caída no contamine la motivación de los demás.
2. Si un criterio es anulado, la consecuencia la determina el órgano que lo anule; el pliego no la anticipa.
3. Si el órgano de contratación quisiera, pese a todo, incorporar alguna previsión sobre los efectos de la anulación de un criterio, **requiere informe previo, expreso y favorable del órgano al que corresponda el informe jurídico preceptivo** (Asesoría Jurídica en municipios de gran población; Secretaría en el régimen común), emitido **antes de publicar** el pliego.

#### 7.9 Regla de verificabilidad municipal *(nueva)*

> **No se incorpora a un pliego ninguna cláusula cuya verificación no tenga actor municipal designado por su puesto, periodicidad determinada y carga anual estimada.**

Desarrollo:

1. La ficha del Anexo II incluye, para cada cláusula marcada, **seis casillas obligatorias**: (a) **necesidad**; (b) **norma o acuerdo** que la origina; (c) **proporcionalidad** respecto de este contrato; (d) **quién verifica** (puesto, no persona); (e) **cuándo** (periodicidad o hito); y (f) **con qué documento** (acta, informe, certificado). Marcar una cláusula sin rellenar las seis es error que anula la ficha (V.4.4).
2. Se acompaña la **estimación de carga anual** de verificación del contrato, en horas por año y por puesto. Valor de referencia recomendado: si la suma supera **[X; se recomienda 20] horas/año** por contrato, se reduce el número de cláusulas incorporadas o se agrupa la verificación en la comisión de seguimiento; si supera **[Y; se recomienda 40] horas/año**, la incorporación requiere conformidad expresa del servicio que ha de verificar. **Los dos umbrales se comprueban sobre la carga anual en régimen ordinario y también sobre la del primer año de ejecución** (ADM-4·v3, epígrafe 5): basta que una de las dos los supere. Esa conformidad es un documento propio del expediente, firmado por el jefe del servicio verificador, y como tal figura en el circuito del apartado V.2.1 y en la lista de comprobación del apartado V.10.
3. Ninguna cláusula puede declararse obligación esencial si su verificación no está asignada. **Crear obligaciones esenciales que nadie verifica es peor que no crearlas**: produce un incumplimiento consentido que después no se puede invocar, y es un reparo previsible en fiscalización.
4. El resultado de cada verificación se documenta. Un contrato en el que la única verificación practicada sea la del gasto no acredita el cumplimiento de ninguna de estas cláusulas.

#### 7.10 Regla de transcripción obligatoria al pliego *(nueva)*

Las reglas de esta Parte I no producen efectos frente al contratista si no están en el pliego: el pliego es el que define los derechos y obligaciones de las partes. Sin esta regla, el pliego recibiría las cargas del catálogo y no sus límites.

**Se transcriben obligatoriamente al PCAP**, siempre que se incorpore cualquier cláusula de este catálogo: la identificación de la versión del catálogo, **sólo si la entidad lo ha aprobado y se cumplen las condiciones de aplicación de la Parte IV, §M11** —si no, el pliego no lo cita—; la prevalencia funcional y la equivalencia (§7.2 y §7.7), el agotamiento (§7.4), la esencialidad tasada (§7.5), la separación de instrumentos en su efecto sobre la valoración (§7.3), la separabilidad de cláusulas y obligaciones (§7.8.a) y el valor interpretativo de los principios (§6).

**Se transcribe obligatoriamente al PPT**: el bloque de referencias técnicas no normativas del §4.2; las definiciones del §5.2 que resulten aplicables a las cláusulas incorporadas; y el **extracto de vigencia normativa del Anexo XIX** que afecte a esas cláusulas, con su fecha de corte. Este último es el «anexo de vigencia normativa de este pliego» al que remite DT-1·v3: sin transcribirlo, esas remisiones apuntan a un documento que el pliego no contiene.

**Composición de los apéndices técnicos del PPT.** El criterio C1 exige el **Apéndice técnico 0 · Matriz de requisitos funcionales**; DT-4·v3 exige un apéndice propio del PPT; y DT-7·v3 y DT-9·v3 comparten uno solo, porque ambas versan sobre la misma interfaz. Su número, su rótulo y su orden se rigen por el **Anexo XXV**; el redactor no los numera a su criterio.

**No se transcriben**, por ser reglas internas del expediente: la regla de ubicación (§7.1), la regla de motivación (§7.6) y la regla de verificabilidad (§7.9), cuyo reflejo en el pliego es la designación del responsable del contrato y el régimen de seguimiento de ADM-4·v3.

Texto para el PCAP:

:::pliego
**Cláusula [N]. Reglas de interpretación e integración de las cláusulas de contenido tecnológico.**

*[Sólo si la entidad ha aprobado el catálogo y se cumplen las condiciones de aplicación de su memoria justificativa. En otro caso, se suprime este apartado y, en el apartado 4, se emplea la fórmula alternativa.]* **1. Identificación.** Las cláusulas de contenido tecnológico y de inteligencia artificial de este pliego y del Pliego de Prescripciones Técnicas proceden del Clausulado de Inteligencia Artificial y Deep Tech, versión [ ], aprobado por [órgano] con fecha [fecha]. Las referencias a códigos de cláusula (DT-n·v3, ADM-n·v3) se entienden hechas a dicha versión. La aprobación de versiones posteriores del clausulado no afecta a este contrato.

**2. Prevalencia funcional y equivalencia.** Las prescripciones técnicas de este contrato se formulan en términos de rendimiento y de exigencias funcionales. Cuando este pliego o el de prescripciones técnicas mencionen un producto, marca, red, infraestructura, protocolo o metodología determinados, la mención se entiende efectuada a título ilustrativo y acompañada de la expresión «o equivalente». En caso de contradicción entre esa mención y la formulación funcional de la misma exigencia, prevalece la formulación funcional. El licitador que oferte una solución equivalente deberá acreditarlo en su oferta, por cualquier medio adecuado, conforme a los artículos 126.8 y 128.2 de la Ley 9/2017, de 8 de noviembre; el órgano de contratación motivará por escrito, en su caso, el rechazo de la equivalencia. Se exceptúan de esta regla los servicios comunes de obligada utilización relacionados en la cláusula [DT-5·v3], apartado 2, del Pliego de Prescripciones Técnicas, que no admiten solución equivalente, y las normas y reglamentos técnicos de obligado cumplimiento.

**3. Alcance de las obligaciones de evolución tecnológica.** Las obligaciones de evolución tecnológica del contratista se agotan en las exigencias relacionadas en el Anexo [V] del Pliego de Prescripciones Técnicas, en los plazos y con los criterios de aceptación que en él se establecen, y en la puesta a disposición de las versiones sucesoras del producto contratado. Fuera de dichas exigencias no existe obligación de incorporar tecnologías, funcionalidades o prestaciones distintas al amparo de este contrato. Toda ampliación se tramitará conforme a los artículos 203 y 204 de la Ley 9/2017 o se incorporará a una licitación posterior. *[Si el pliego no incorpora la cláusula DT-9·v3, no hay Anexo de Exigencias Tecnológicas Determinadas ni versiones sucesoras exigibles por esa cláusula, y este apartado dice: «**3. Alcance de las obligaciones de evolución tecnológica.** Este contrato no incorpora Anexo de Exigencias Tecnológicas Determinadas. El contratista no está obligado a incorporar tecnologías, funcionalidades o prestaciones distintas de las descritas en el Pliego de Prescripciones Técnicas, en los plazos que en él se establecen. Toda ampliación se tramitará conforme a los artículos 203 y 204 de la Ley 9/2017 o se incorporará a una licitación posterior.»]*

**4. Obligaciones esenciales.** Únicamente tienen el carácter de obligación contractual esencial, a los efectos de la letra f) del apartado 1 del artículo 211 de la Ley 9/2017, los incumplimientos enumerados de manera expresa en la cláusula [ADM-6·v3] de este pliego. Ninguna otra de las obligaciones incorporadas en virtud del clausulado identificado en el apartado 1 *[si se ha suprimido el apartado 1: «Ninguna otra de las obligaciones de contenido tecnológico de este pliego y del de prescripciones técnicas»]* tiene carácter esencial. Lo anterior se entiende sin perjuicio de las demás obligaciones que este pliego califique expresamente como esenciales por otro título y de las que deban ser calificadas como tales por mandato legal.

**5. Separación de instrumentos.** Las prestaciones exigidas en este contrato como prescripción técnica de obligado cumplimiento, como requisito de solvencia o como medio que el adjudicatario deba adscribir a la ejecución, no son objeto de valoración como criterio de adjudicación. Los criterios de adjudicación de este pliego valoran exclusivamente prestaciones adicionales o niveles de calidad superiores al mínimo exigido, en los términos que para cada criterio se establecen.

**6. Separabilidad.** La declaración de nulidad o la anulación de alguna de las cláusulas de contenido tecnológico de este pliego o del de prescripciones técnicas no afectará a la validez y eficacia de las restantes, salvo que la cláusula afectada constituya presupuesto necesario de otra, en cuyo caso decaerá igualmente esta última. Esta previsión no altera las ponderaciones de los criterios de adjudicación publicadas en este pliego, que no serán objeto de reescalado.

**7. Valor de los principios.** Los principios enunciados en [apartado del pliego] tienen valor interpretativo. No constituyen por sí solos obligaciones exigibles al contratista ni pueden fundar la imposición de penalidades ni la resolución del contrato. Las obligaciones del contratista son, exclusivamente, las expresamente establecidas en las cláusulas de este pliego y del Pliego de Prescripciones Técnicas.
:::

Texto para el PPT, cuando se incorpore cualquier cláusula técnica del catálogo:

:::pliego
**Cláusula [N]. Interpretación de las prescripciones técnicas de contenido tecnológico.**

**1.** Las prescripciones técnicas de este pliego relativas a inteligencia artificial, automatización, interoperabilidad, seguridad, servicios de confianza y reversibilidad se formulan en términos de rendimiento y de exigencias funcionales, conforme al artículo 126.5.a) de la Ley 9/2017, de 8 de noviembre. Toda mención a un producto, marca, red, infraestructura, protocolo o metodología determinados se entiende acompañada de la expresión «o equivalente» y no constituye medio de presunción de conformidad; el cumplimiento se acredita respecto de las exigencias funcionales de la cláusula correspondiente. Se exceptúan los servicios comunes de obligada utilización relacionados en la cláusula [DT-5·v3], apartado 2, que no admiten solución equivalente.

**2.** Las definiciones aplicables a estas prescripciones son las contenidas en el apartado [ ] de este pliego. En caso de discrepancia entre una definición y el texto de una cláusula, prevalece el texto de la cláusula.

**3.** Las obligaciones de evolución tecnológica se agotan en el Anexo [V] de este pliego, que se incorpora físicamente a él con número de versión y fecha y permanece invariable durante toda la vigencia del contrato y de sus prórrogas. Las revisiones posteriores del catálogo municipal de exigencias tecnológicas no producen efectos sobre este contrato. *[Si el pliego no incorpora la cláusula DT-9·v3, este apartado se suprime: el alcance de las obligaciones de evolución tecnológica lo fija el apartado 3 de la cláusula de interpretación del pliego de cláusulas administrativas particulares, en su redacción alternativa.]*
:::

---

### §8. Parámetros de la Parte I y valores recomendados

Recogidos también en la tabla consolidada del Anexo X. Todos son decisión del órgano de contratación; el valor recomendado es el punto de partida, no una decisión ajena.

**Regla de precedencia.** Este cuadro reproduce; no decide. En caso de discrepancia entre un valor de este cuadro y el de la cláusula correspondiente, **prevalece el de la cláusula**. Si se detecta una discrepancia, se corrige el cuadro, nunca la cláusula.

| Parámetro | Dónde | Valor recomendado | Cuándo moverlo |
|---|---|---|---|
| Umbral de nivel mínimo de aplicación | §2.2 | 50.000 € de valor estimado | Subirlo en entidades con menos capacidad de seguimiento; bajarlo si el contrato soporta un servicio crítico aunque sea de poca cuantía |
| Umbral de nivel reforzado | §2.2 | Umbral de contratos sujetos a regulación armonizada vigente (216.000 € en servicios y suministros para 2026-2027, conforme al Reglamento Delegado (UE) 2025/2152, incorporado a los arts. 21.1.b) y 22.1.b) LCSP por la Orden HAC/1517/2025, de 18 de diciembre; revisar antes del 31/12/2027) | Bajarlo cuando el sistema sea de categoría ENS MEDIA o ALTA con independencia de la cuantía |
| Vigencia del acuerdo institucional y del catálogo anual | §3.5 | Un ejercicio, con revisión antes del cierre del anterior | Ampliarlo sólo si el contraste de mercado no ha variado, y haciéndolo constar |
| Licencia de uso transitoria del producto base en la reversión | §5.2.d) | 6 meses desde la extinción | Ampliarlo en sistemas cuya migración exija cierre de ejercicio o campañas periódicas |
| Carga anual de verificación por contrato | §7.9 | Si supera 20 horas/año, se reduce el número de cláusulas incorporadas o se agrupa la verificación en la comisión de seguimiento; si supera 40, conformidad expresa del servicio verificador. Se comprueba sobre la carga anual y sobre la del primer año | Ajustarlo a la plantilla real del servicio; no al tamaño del contrato |
| Sujeción de la entidad a la Ley de la Administración Digital e Inteligencia Artificial de la Comunidad de Madrid o a norma autonómica equivalente | §2.3, fila 13, y §3.3, fila 14 | **No sujeta**, mientras sea proyecto de ley | Pasa a «sujeta» cuando la ley se publique en el «Boletín Oficial de la Comunidad de Madrid» y entre en vigor, para la Administración de la Comunidad y sus organismos públicos; para una entidad local, sólo si lo establece un convenio. Se hace constar en el informe de necesidad (Anexo X, fila 50) |

---

### §9. Qué cambia respecto de la versión 2.0

| Apartado | Cambio | Motivo |
|---|---|---|
| §1 | El documento deja de ser un clausulado de incorporación transversal «con independencia del área gestora» y pasa a ser catálogo de aplicación motivada, con regla de cierre | La fórmula anterior describía el supuesto que el art. 116.4.e) LCSP no admite |
| §1.4 | Se renuncia por escrito a prometer que ningún tribunal pueda anular nada, y se declara el estado real de la doctrina con fecha de corte | Prometer inanulabilidad ante un órgano de control destruye la credibilidad del documento entero |
| §2.2 | Cuadro de intensidad con tres niveles y valores por defecto | La proporcionalidad enunciada sin umbrales no es aplicable un martes por la mañana |
| §2.3 | Regla de reutilización con trece elementos a adaptar; el decimotercero, los informes y autorizaciones previos que imponga la normativa propia de la entidad, se añade en la versión 4.0 | El documento se publica en abierto; la copia literal importa las cargas sin las defensas |
| §2.4 | Reglas para contratos menores, basados en acuerdo marco y prórrogas | No existían, y son la mayoría de los expedientes de un ayuntamiento |
| §3 | Nuevo. Tres orígenes de necesidad, con la necesidad institucional aprobada por el órgano de gobierno y modelo de acuerdo | La tabla necesidad-norma sólo cubría un tercio del catálogo; el resto quedaba sin fundamento |
| §3.3 | Columna de exigibilidad que separa lo ya exigible de lo anticipado voluntariamente | Los arts. 26 y 27 del Reglamento de IA no son exigibles hoy tras el Reglamento (UE) 2026/1744 |
| §3.3, fila 5 | El acceso de los órganos de control se reancla en el bloque de control interno; el art. 33.4.d) RD 424/2017 pasa a cita complementaria | El anclaje correcto es el bloque de control interno; la explicación completa, en ADM-12·v3 y en la memoria justificativa (M1.4), que no se reproduce aquí |
| §3.7 | Doble vía de firma de la ficha | El gestor no puede firmar necesidades que no son suyas; sin esta vía, esas cláusulas no entrarían nunca |
| §4 | Marco normativo separado en tres bloques; el MCP sale de la lista de normas y **no** se presenta como medio de presunción de conformidad | El art. 126.5.c) reserva ese efecto a las especificaciones de la letra b); el MCP no pertenece a ninguna de esas categorías |
| §5 | Reescritas reversibilidad, obsolescencia tecnológica y solución equivalente; ISBE despojada de carga preferencial; suprimidas «Loop Engineering» y «skills / harness / loops» como definiciones operativas | Eran las cuatro definiciones que un licitador usaba como munición, y tres términos sin definición normalizada |
| §6 | Los principios pasan a tener valor expresamente interpretativo; se añade el de separación de instrumentos | La versión 2.0 los declaraba «exigibles y verificables», lo que convertía en obligación contractual documentos que no son normas |
| §7.3 | La regla de separación prohíbe las tres combinaciones, no sólo solvencia + adjudicación | La combinación que más pliegos tumba es prescripción obligatoria + criterio de adjudicación |
| §7.8 | La separabilidad se parte: sí para cláusulas y obligaciones; para criterios, prohibición de reescalado automático e informe jurídico previo | Reescalar ponderaciones publicadas altera las reglas conocidas al ofertar |
| §7.9 | Nueva regla de verificabilidad municipal, con actor, periodicidad y carga anual | Crear obligaciones esenciales que nadie verifica es peor que no crearlas |
| §7.10 | Nueva regla de transcripción obligatoria, con el texto listo para copiar al PCAP y al PPT | Sin ella, las salvaguardas se quedaban en la Parte I y el pliego recibía sólo las cargas |
