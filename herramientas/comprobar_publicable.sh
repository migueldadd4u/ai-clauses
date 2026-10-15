#!/usr/bin/env bash
# comprobar_publicable.sh — guardia final antes de publicar docs/.
#
#   bash herramientas/comprobar_publicable.sh      (lo llama `make comprobar`, al final de `make`)
#
# Nace del Gauntlet de la versión 4.0 (15/10/2026): el juez destinatario encontró en lo que iba a
# publicarse PDF con enlaces al disco de quien construyó (file:///…), un documento con marcadores
# [[V4: …]] sin rellenar porque su PDF era anterior a su fuente, y comentarios HTML con nombres
# propios. Nada de eso lo veía ningún generador. Sale con 1 si encuentra
# cualquiera de estas cosas; con 0 si no.
set -u
cd "$(dirname "$0")/.." || exit 2
fallos=0
mal() { printf '  FALLO  %s\n' "$1"; fallos=$((fallos + 1)); }

# 1 · enlaces al disco local dentro de los PDF y Word publicados
# los PDF comprimen sus objetos: se descomprimen con qpdf (si está) antes de buscar
while IFS= read -r f; do
  if command -v qpdf >/dev/null 2>&1 && [ "${f%.pdf}" != "$f" ]; then
    if qpdf --qdf --object-streams=disable "$f" - 2>/dev/null | LC_ALL=C grep -a -q 'file:///'; then mal "enlace file:/// en $f"; fi
  elif LC_ALL=C grep -a -q 'file:///' "$f"; then mal "enlace file:/// en $f"; fi
done < <(find docs/descargas -type f \( -name '*.pdf' -o -name '*.docx' \))
for f in docs/descargas/*.docx docs/descargas/complementarios/*.docx; do
  [ -f "$f" ] || continue
  if unzip -p "$f" word/_rels/document.xml.rels 2>/dev/null | grep -q 'Target="\.\./\|Target="file:'; then mal "enlace relativo o local en $f"; fi
done

# 2 · marcadores de trabajo que no pueden llegar a lo publicado (variantes incluidas), en lo
#     construido y en las fuentes publicables
# alternancia (I|Í) y no clase [IÍ]: con el locale vacío de los agentes la clase no casa la Í,
# que son dos bytes; y «${pat}» con llaves, porque en UTF-8 el bash 3.2 lee la comilla como parte del nombre
for pat in '\[\[ *[vV]4 *:' '\[HORAS-M(I|Í|í|i)NIMO\]' '\[PENDIENTE' '\{\{pliego:'; do
  donde=$(grep -rlE -i -- "${pat}" docs --include='*.html' 2>/dev/null | head -3 | tr '\n' ' ')
  [ -n "${donde}" ] && mal "marcador «${pat}» en lo construido: ${donde}"
done
for pat in '\[\[ *[vV]4 *:' '\[HORAS-M(I|Í|í|i)NIMO\]' '\[PENDIENTE'; do
  donde=$(grep -lE -i -- "${pat}" clausulado/*.md clausulado/partes/*.md clausulado/complementarios/*.md 2>/dev/null | head -3 | tr '\n' ' ')
  [ -n "${donde}" ] && mal "marcador «${pat}» en las fuentes: ${donde}"
done
for f in docs/descargas/*.pdf docs/descargas/complementarios/*.pdf; do
  [ -f "$f" ] || continue
  if pdftotext -q "$f" - 2>/dev/null | grep -q -E -i '\[\[ *v4 *:|\[HORAS-M(I|Í|í|i)NIMO\]|\{\{pliego:'; then mal "marcador de trabajo dentro de $f"; fi
done

# 2 bis · nada de docs/ fuera de git: con un commit sin esas rutas, la portada daría 404
fuera=$(git status --porcelain --untracked-files=all -- docs clausulado herramientas 2>/dev/null | grep '^??' | head -5)
[ -n "${fuera}" ] && mal "ficheros sin seguimiento en git en docs/, clausulado/ o herramientas/ (añadirlos con rutas explícitas): $(echo "${fuera}" | tr '\n' ' ')"

# 2 ter · las partes del documento tienen que existir: sin ellas no hay con qué comprobar nada
for k in 0 1 2 3a 3b 4 5 6; do
  [ -f "_trabajo/v3_parte$k.md" ] || [ -f "clausulado/partes/v3_parte$k.md" ] || mal "falta la parte $k del documento"
done

# 2 quater · frases vetadas: las que contarían un borrador o atribuirían a terceros lo que es del catálogo.
#           La lista NO va en este fichero, que se publica: vive en _trabajo/frases-vetadas.txt, fuera de git
#           (una frase por línea). Sin la lista, se avisa y no se comprueba.
if [ -f _trabajo/frases-vetadas.txt ]; then
  while IFS= read -r frase || [ -n "${frase}" ]; do
    [ -z "${frase}" ] && continue
    donde=$(grep -rl -i -F -- "${frase}" clausulado/*.md clausulado/partes/*.md clausulado/complementarios/*.md docs README.md herramientas/presentacion.js herramientas/build_pptx.js 2>/dev/null | grep -v '\.\(pdf\|docx\|pptx\)$' | head -3 | tr '\n' ' ')
    [ -n "${donde}" ] && mal "frase vetada n.º $(grep -n -F -x -- "${frase}" _trabajo/frases-vetadas.txt | cut -d: -f1) en: ${donde}"
  done < _trabajo/frases-vetadas.txt
else
  printf '  AVISO  no está _trabajo/frases-vetadas.txt: no se comprueban las frases vetadas\n'
fi

# 3 · comentarios HTML: en lo publicado sólo caben los marcadores técnicos (OCULTO-MEDIOS, ACTUALIZADO);
#     cualquier otro comentario es una nota interna que se publica sin que nadie la vea en pantalla
otros=$(grep -rn -- '<!--' docs --include='*.html' 2>/dev/null | grep -v 'OCULTO-MEDIOS\|<!--ACTUALIZADO-->\|<!--/ACTUALIZADO-->' | head -3)
[ -n "${otros}" ] && mal "comentario HTML que no es marcador técnico: $(echo "${otros}" | cut -c1-90 | tr '\n' ' ')"

# 4 · salidas más viejas que sus fuentes
for src in clausulado/complementarios/*.md; do
  n=$(basename "$src" .md); pdf="docs/descargas/complementarios/$n.pdf"
  if [ ! -f "$pdf" ] || [ "$src" -nt "$pdf" ]; then mal "$pdf no existe o es anterior a $src: falta make complementarios"; fi
done
for p in _trabajo/v3_parte*.md clausulado/partes/v3_parte*.md clausulado/creditos-y-uso.md; do
  [ -f "$p" ] || continue
  if [ "$p" -nt clausulado/clausulado-ia-deeptech-v3.md ]; then mal "$p es posterior al ensamblado: falta make documento"; fi
done
if [ clausulado/clausulado-ia-deeptech-v3.md -nt docs/descargas/clausulado-ia-deeptech-v4.pdf ]; then mal "el PDF del clausulado es anterior al ensamblado: falta make pdf"; fi
for f in docs/descargas/complementarios/*.pdf; do
  [ -f "$f" ] || continue
  if [ clausulado/clausulado-ia-deeptech-v3.md -nt "$f" ]; then mal "$f es anterior al catálogo ensamblado: sus cláusulas pueden estar viejas (make complementarios)"; fi
done

# 5 · las copias con nombre v3, idénticas a las v4 (los enlaces que ya circulan)
for ext in pdf docx; do
  cmp -s "docs/descargas/clausulado-ia-deeptech-v4.$ext" "docs/descargas/clausulado-ia-deeptech-v3.$ext" || mal "clausulado-ia-deeptech-v3.$ext no es copia de la v4"
done

if [ "$fallos" -gt 0 ]; then echo "NO PUBLICABLE · $fallos fallo(s)"; exit 1; fi
echo "OK  publicable: sin enlaces locales, sin marcadores, sin comentarios internos, salidas al día"
