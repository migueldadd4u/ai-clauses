# Cómo proponer un cambio

Este catálogo se publica en abierto por una razón concreta: **quien redacta pliegos todos los días
sabe cosas que este documento no sabe**. Si usted es de ésos, esta página es para usted.

Hay dos vías, y conviene entender la diferencia.

## 1 · Proponer un cambio a este documento (una *pull request*)

Usted propone una redacción distinta y quien mantiene el proyecto la acepta o no. Si se acepta, entra
en el documento que lee todo el mundo, con su autoría.

**Cómo se hace, sin saber de Git:** en GitHub, abra el fichero que quiera cambiar, pulse el lápiz
(*Edit this file*), escriba su propuesta y pulse *Propose changes*. GitHub crea la propuesta sola.

**Qué se cambia y qué no.** El texto vive en `_trabajo/v3_parte*.md` y en `clausulado/`. Los ficheros
de `docs/` y de `clausulado/clausulado-ia-deeptech-v3.md` se **generan** con `make`: si edita ahí, su
cambio se perderá en la siguiente construcción. Ante la duda, proponga sobre `_trabajo/v3_parte*.md`
y ya se regenera lo demás.

**El criterio de aceptación es uno solo:** que la redacción propuesta **resista mejor un recurso** que
la que hay. En orden de valor:

1. **Un error de derecho.** Una cita que no dice lo que se le atribuye, un precepto derogado, un
   calendario normativo que ya no es cierto, una competencia mal atribuida. Con la fuente delante,
   esto se acepta siempre.
2. **Doctrina nueva.** Una resolución de un tribunal administrativo de recursos contractuales o un
   informe de una junta consultiva que confirme o desmienta algo de lo que aquí se afirma.
3. **Un recurso real.** Si su administración aplicó una de estas cláusulas y perdió —o ganó—, eso
   vale más que cualquier otra cosa que pueda aportarse. Cuéntelo aunque no proponga redacción.
4. **Claridad.** Una redacción que diga lo mismo y se entienda mejor.

**Qué no se acepta:** convertir una exigencia funcional en la mención de un producto, una red o un
protocolo concretos; añadir requisitos sin necesidad acreditada, medio de prueba y consecuencia; y
cualquier cambio que puntúe la tenencia previa de una tecnología, que es lo que el propio catálogo
combate.

**Quién decide.** El responsable editorial de la publicación, Miguel Ángel Domínguez Castellano,
oídos los demás firmantes. No hay plazo comprometido, y una propuesta puede rechazarse sin que eso
diga nada malo de ella.

## 2 · Hacer su propia versión (un *fork*)

Se lleva el documento entero a un repositorio suyo y hace con él lo que quiera: cambiarlo, recortarlo,
adaptarlo a su comunidad autónoma, traducirlo o darle la vuelta. **No hace falta pedir permiso ni dar
explicaciones**, y no hace falta que la propuesta pase por aquí.

Esa versión es suya, y **los firmantes de este documento no responden de lo que diga**. La única
condición es la de la licencia: citar la procedencia.

## Licencia de lo que usted aporte

Al proponer un cambio acepta que su aportación se publique bajo la misma licencia del proyecto,
**[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es)**, y que su autoría se reconozca en
el historial del repositorio.

## Si prefiere no usar GitHub

Abra una *issue* describiendo el problema, o escriba al responsable editorial. Un correo con la
resolución adjunta y la frase «esto de aquí no es así» vale exactamente lo mismo que una *pull
request* bien formada.
