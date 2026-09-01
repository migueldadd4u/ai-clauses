# AI Clauses · Cláusulas de IA y Deep Tech para la contratación pública

**Un contrato público de tecnología dura años. La tecnología que compra, no.**

Cuando un ayuntamiento firma hoy una plataforma a cinco años, está comprando el estado del arte
de hoy y pagándolo hasta 2031. No hay palanca contractual para exigir que incorpore lo que aparezca
después: hay que esperar a la siguiente licitación y volver a pagar. El pliego nace correcto y
envejece mal, y nadie ha hecho nada mal por el camino. Ese es el problema que resuelve este
clausulado.

Aquí está el texto completo, en abierto, para que cualquier administración lo copie, lo recorte y
lo adapte.

---

## Estado de este documento a 1 de septiembre de 2026

**Qué ha aprobado el Ayuntamiento de Pozuelo de Alarcón: nada.** Este documento no es un acto
administrativo, no ha sido aprobado por ningún órgano municipal y no vincula a la Corporación. Es un
trabajo profesional de las cinco personas que lo firman, una de las cuales ejerce un cargo público en
ese Ayuntamiento.

**Qué falta para que pueda incorporarse a un expediente de contratación**, según su propia memoria
justificativa (Parte IV, §M11):

| # | Condición | Estado |
|---|---|---|
| 1 | Acuerdo del órgano de gobierno que apruebe el plan municipal, el catálogo y el Anexo V del ejercicio | **Pendiente** |
| 2 | Consulta preliminar del mercado publicada y contraste documentado del Anexo V (art. 115 LCSP) | **Pendiente** |
| 3 | Declaraciones de conflicto de interés firmadas e incorporadas (arts. 64 y 70 LCSP) | **Pendiente** |

Son condiciones **de aplicación, no de publicación**: se publica para el debate, y no como modelo
listo para meter en un expediente. Publicar en abierto y por anticipado es, de hecho, una de las
medidas del artículo 70 LCSP que el propio documento adopta, porque pone a disposición de todo el
mercado la misma información de la que dispusieron quienes lo elaboraron.

Esta tabla se actualiza cuando alguna condición se cumpla. Responsable editorial: Miguel Ángel
Domínguez Castellano.

## Qué es esto

Un **catálogo de cláusulas tipo** para incorporar a los pliegos —de prescripciones técnicas (PPT) y
de cláusulas administrativas particulares (PCAP)— de cualquier licitación con componente
tecnológico, junto con la memoria justificativa, el circuito del expediente y los modelos que un
habilitado nacional necesita para poder fiscalizarlo.

**Y, sobre todo, qué NO es:** no es una norma de aplicación automática, ni un «copia y pega». Es un
catálogo del que cada expediente toma lo que necesita **y lo justifica**. Una cláusula incorporada
sin necesidad acreditada en la memoria no protege al ayuntamiento: le añade un motivo de recurso.

## Qué se promete, y qué no

No se promete que ningún tribunal pueda anular nada. Eso no es prometible: no existe todavía
doctrina sobre cláusulas de inteligencia artificial en contratación pública, y el primer recurso
creará el precedente.

Lo que sí está diseñado, y se puede comprobar cláusula por cláusula:

- cada exigencia tiene **una necesidad identificada** y la norma o el acuerdo que la impone;
- **un instrumento correcto** —prescripción técnica, solvencia, criterio de adjudicación o condición
  especial de ejecución— y sólo uno, para que nada se compute dos veces;
- **un medio de acreditación** y **una forma de verificación**, con actor municipal designado;
- **una consecuencia tasada** si se incumple;
- y una regla de separabilidad, para que la caída de una pieza no arrastre el pliego entero.

## Contenido

| Documento | Para quién | Formato |
|---|---|---|
| **Resumen en dos páginas** | Lo más que va a leer casi nadie, y por eso lo primero que conviene leer. El problema, la solución, qué se promete y cómo debe usarse. Sin conocimientos previos. | [PDF](docs/descargas/resumen-dos-paginas.pdf) · [Word](docs/descargas/resumen-dos-paginas.docx) |
| **Guía municipal de decisión y aplicación · 20 páginas** | Concejalías, contratación, Intervención y TI. Explica cómo decidir, motivar, seleccionar, copiar y verificar sin recorrer las 289 páginas del catálogo. | [Web](docs/2026-09-01_ai-clauses_guia-municipal-20-paginas.html) · [PDF](docs/descargas/2026-09-01_ai-clauses_guia-municipal-20-paginas.pdf) · [Word](docs/descargas/2026-09-01_ai-clauses_guia-municipal-20-paginas.docx) |
| **Clausulado completo v3.0** | El texto entero: catálogo de cláusulas, memoria justificativa para los órganos de control, circuito del expediente, ejemplo completo trabajado y anexos con todos los modelos. | [Web](https://migueldadd4u.github.io/ai-clauses/clausulado/indice.html) · [PDF](docs/descargas/clausulado-ia-deeptech-v3.pdf) · [Word](docs/descargas/clausulado-ia-deeptech-v3.docx) |
| **Resumen y guía de uso** (Parte 0 del clausulado) | Alcaldía, concejalías y cualquiera que no sea experto en contratación ni en tecnología. Se lee en veinte minutos. | Dentro del clausulado |
| **Presentación** | Para explicarlo en una sala, incluidas salas donde nadie es técnico. | [PDF](docs/descargas/presentacion-ai-clauses.pdf) · [PowerPoint](docs/descargas/presentacion-ai-clauses.pptx) |

Todo se reconstruye desde el markdown de `clausulado/` con `make`.

## De dónde sale

De un problema real de gestión municipal y de una objeción interna que se puso por escrito. El
clausulado nació en el **Ayuntamiento de Pozuelo de Alarcón** en 2026 y se sometió por escrito a la
crítica de quien tendría que aplicarlo. Esta versión 3.0 es la respuesta a esa crítica, que decía
cuatro cosas:

1. que unas cláusulas que no nacen de una necesidad demandada por ningún gestor son **artificiosas al
   contrato**;
2. que el seguimiento real de los contratos es escaso y se limita al control del gasto, y que quien
   controla no puede imponer instrumentos pero **sí necesita el dato al mismo rango que quien
   gestiona**;
3. que el nivel de **abstracción era demasiado alto** y había que probarlo en un contrato ya previsto
   y poco complejo, a modo de piloto;
4. y que en la contratación **hay actores externos** que no han visto antes estas exigencias y habría
   que ver cómo reaccionan.

Las cuatro están citadas literalmente y respondidas dentro del documento, no en una nota al pie. Y
han cambiado su arquitectura, no su prólogo: de ahí salen la doble vía de firma de la ficha, la
exigencia de acuerdo del órgano de gobierno, el subconjunto mínimo de seis cláusulas para un primer
expediente y el capítulo sobre la reacción del mercado.

## Cómo se usa

1. Empieza por la **Parte 0**. Está escrita para alguien que no sabe nada de contratación pública.
2. Si vas a redactar un pliego, ve al circuito del expediente (Parte V) y a la ficha de
   aplicabilidad de los anexos. El orden importa: **primero el informe de necesidad, después la
   ficha**.
3. Copia al pliego **sólo lo que está dentro de los recuadros** marcados «TEXTO PARA EL PLIEGO».
   Todo lo demás es comentario y no debe acabar en un expediente.
4. Los valores entre corchetes llevan un valor recomendado por defecto y el criterio para moverlo.
5. Si copias el documento en otra administración, lee la regla de reutilización: hay parámetros que
   dependen del régimen de cada entidad y que **hay que cambiar**.

## Lo que sí le da valor

Que no es un clausulado de despacho. Nace de un problema real de gestión y se ha sometido por escrito
a la crítica de quien tiene que redactar y fiscalizar pliegos de verdad; esa objeción consta
literalmente en el texto —citada sin identificar a su autor, por no ser un informe registrado— y es
la que ha dado forma a esta versión.

Y una precisión que conviene hacer expresamente: **ningún órgano de contratación, de intervención ni
de asesoría jurídica se ha pronunciado sobre este catálogo.** Este documento no les atribuye posición
alguna. El caso trabajado de la Parte VI es un **expediente simulado**, con municipio, objeto y
cifras construidos para el ejemplo: no corresponde a ninguna licitación real, en curso ni en
preparación.

## Quién lo ha hecho

Un trabajo conjunto de varios meses entre cinco personas, cada una desde su oficio, con el
Ayuntamiento de Pozuelo de Alarcón como banco de pruebas real.

- **[Delfina Lafuente Veira](https://www.pozuelodealarcon.org/tu-ayuntamiento/organizacion-municipal/trayectoria-profesional-delfina-lafuente-veira)** — Concejal de Administración Digital, Calidad e Innovación del
  Ayuntamiento de Pozuelo de Alarcón. De ella nace el proyecto y suya es la primera redacción del
  clausulado. Y suyo es el mérito menos visible: haberlo puesto delante de quienes tendrían que
  aplicarlo y haber traído sus objeciones de vuelta enteras.
- **[Dr. José Antonio Ondiviela García](https://www.ufv.es/una-nueva-definicion-para-las-ciudades-que-transformaran-el-mundo-noticias-actualidad/)** — Profesor de la Escuela Politécnica Superior e investigador
  de la Universidad Francisco de Vitoria, donde dirige el Observatorio Mundial de Ciudades Atractivas.
  Aportó la mirada del mercado: qué se le puede pedir de verdad a un fabricante de software y qué hará
  que no se presente.
- **[Miguel Ángel Domínguez Castellano](https://miguelangeldominguez.info)** — CEO de Add4u, compañía de transformación digital de la
  Administración pública, y presidente de Alastria, el mayor ecosistema blockchain de España, cargo
  para el que fue reelegido por unanimidad en junio de 2025 con mandato hasta 2027. Preside también
  el Clúster de Blockchain de la Comunidad de Madrid e impulsa, desde Alastria, la Infraestructura de
  Servicios Blockchain de España (ISBE).
  Aportó la perspectiva de quien conoce las dos orillas —la de quien redacta pliegos y la de quien se
  presenta a ellos—, de donde vienen la insistencia en la reversibilidad y en la propiedad de los
  datos como cuestión de competencia, la negativa a puntuar la tenencia previa de una tecnología
  porque premia a quien ya está dentro, y la decisión de publicarlo en abierto en lugar de
  conservarlo como activo de consultoría. Asume la responsabilidad editorial de esta publicación.
- **Enrique Jiménez** — responsable de los contratos de innovación, y **Roberto García** — jefe de
  informática, ambos del Ayuntamiento de Pozuelo de Alarcón; autores y supervisores técnicos. Han
  aportado el contraste de la práctica municipal —qué se puede exigir de verdad en un pliego y qué no
  llega a ejecutarse— y la supervisión técnica de la formulación contractual.

La objeción interna de junio de 2026, con sus cuatro reproches, es la razón de ser de esta versión y
está citada y respondida en el cuerpo del documento (Parte IV, §M1.5).

## Uso de inteligencia artificial

**En la elaboración de este documento se han utilizado sistemas de inteligencia artificial**, en
concreto el clon digital (*second brain*) de Miguel Ángel Domínguez: un sistema de agentes con
memoria persistente del contexto de sus proyectos, construido y operado por él. Su aportación ha sido
determinante en la recuperación del material disperso, la investigación jurídica, la verificación de
las fuentes, la crítica adversarial del texto y la redacción de los borradores.

Se declara de forma expresa aunque **no sea obligatorio en este caso**: el artículo 50.4 del
Reglamento (UE) 2024/1689, aplicable desde el 2 de agosto de 2026, exime de divulgarlo cuando el
contenido ha sido sometido a revisión humana y una persona asume la responsabilidad editorial, que es
lo que ocurre aquí. Se divulga igualmente porque un documento que exige transparencia de IA a los
adjudicatarios no puede ocultarla en sí mismo.

Las decisiones, el criterio jurídico y la responsabilidad de lo que aquí se afirma son de las
personas que lo firman. Toda referencia normativa o de doctrina se ha comprobado en su fuente
primaria, descargando el documento original y localizando en él la cita literal atribuida. Ese
control detectó tres errores materiales antes de publicar. Lo que no ha podido verificarse se dice
expresamente en lugar de omitirse. El detalle completo está en la primera sección del clausulado.

## Cómo debe usarse: no copie sin entender

Este material se publica **tal cual (*as is*)**, sin garantía de ningún tipo. No es asesoramiento
legal ni sustituye a los informes preceptivos de ninguna administración.

La recomendación va en serio, y no es prudencia formal: copiar sin entender produce exactamente el
daño que este documento trata de evitar.

- Una cláusula copiada **sin necesidad acreditada** no protege: añade un motivo de recurso. La
  justificación no vive en este catálogo, vive en la memoria justificativa del expediente — y no se
  puede completar después, cuando llegue el recurso.
- Una exigencia copiada **sin contrastar con el mercado** no es más ambiciosa: es más restrictiva.
- Una obligación copiada **sin nadie que la verifique** es peor que no tenerla.
- Un parámetro copiado **sin adaptar** puede ser sencillamente ilegal en su entidad: categorías de
  seguridad, órganos competentes y umbrales cambian de una administración a otra.

Quien tenga prisa, que empiece por la Parte 0: veinte minutos, sin conocimientos previos. Quien vaya
a redactar un pliego, que lea además la Parte V y rellene la ficha de aplicabilidad antes de copiar
una sola línea.

## Licencia

[Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE). Puede copiarse, adaptarse y
usarse con cualquier finalidad, incluida la comercial, citando la autoría.

## Aviso

Documento de trabajo técnico-jurídico. **No es asesoramiento legal.** Su incorporación a un
expediente concreto exige el análisis, la adaptación y los informes preceptivos de los servicios
técnicos y jurídicos de cada administración.

Las referencias normativas y de doctrina están verificadas en fuente primaria a fecha de corte
**1 de septiembre de 2026**. La normativa de inteligencia artificial está cambiando deprisa —el
calendario del Reglamento europeo se modificó en julio de 2026— y conviene comprobar la vigencia
antes de usar el material.

## Contribuir

Si detecta un error, una cita mal traída o una cláusula que su tribunal ha anulado, abra una *issue*.
Este documento mejora con los recursos que pierda.

## Reconstruir este material

Todo sale de los ficheros markdown de `clausulado/`. Para regenerar el Word, el PDF, el resumen, la
presentación y la web:

```bash
make
```

Necesita Node con los paquetes `docx`, `pptxgenjs` y `marked`, y Google Chrome (los PDF se generan
desde HTML con Chrome headless, no convirtiendo el Word: las conversiones de Word, Pages y Keynote
rompían los recuadros y el texto extraíble).

Los generadores están en `herramientas/` y cada uno explica en su cabecera qué hace y por qué está
escrito así.
