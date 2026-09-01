# Reconstruye todos los entregables a partir del markdown del clausulado.
#   make            todo
#   make documento  sólo el .md ensamblado
export NODE_PATH := $(shell npm root -g)

todo: documento web docx pdf pptx

documento:
	node herramientas/ensamblar.js

web:
	node herramientas/build_web.js

docx:
	node herramientas/build_docx.js clausulado/clausulado-ia-deeptech-v3.md docs/descargas/clausulado-ia-deeptech-v3.docx

pdf:
	node herramientas/build_pdf.js

pptx:
	node herramientas/build_pptx.js
	@osascript -e 'set src to POSIX file "$(PWD)/docs/descargas/presentacion-ai-clauses.pptx"' \
	           -e 'set dst to POSIX file "$(PWD)/docs/descargas/presentacion-ai-clauses.pdf"' \
	           -e 'tell application "Keynote" to launch' \
	           -e 'tell application "Keynote" to set d to open src' \
	           -e 'tell application "Keynote" to export d to dst as PDF' \
	           -e 'tell application "Keynote" to close d saving no'

.PHONY: todo documento web docx pdf pptx
