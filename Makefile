# Reconstruye todos los entregables a partir del markdown.
#   make            todo
#   make documento  sólo el .md ensamblado
export NODE_PATH := $(shell npm root -g)

todo: documento resumen guia web docx pdf pptx complementarios comprobar

documento:
	node herramientas/ensamblar.js

resumen:
	node herramientas/build_resumen.js

guia:
	node herramientas/2026-09-01_build-guia-municipal-20-paginas.js

web:
	node herramientas/build_web.js

docx:
	node herramientas/build_docx.js clausulado/clausulado-ia-deeptech-v3.md docs/descargas/clausulado-ia-deeptech-v4.docx
	cp docs/descargas/clausulado-ia-deeptech-v4.docx docs/descargas/clausulado-ia-deeptech-v3.docx
	node herramientas/build_resumen_docx.js

pdf:
	node herramientas/build_pdf.js
	cp docs/descargas/clausulado-ia-deeptech-v4.pdf docs/descargas/clausulado-ia-deeptech-v3.pdf

pptx:
	node herramientas/build_pptx.js
	node herramientas/build_slides_pdf.js

complementarios:
	node herramientas/build_complementarios.js

comprobar:
	bash herramientas/comprobar_publicable.sh

.PHONY: todo documento resumen guia web docx pdf pptx complementarios comprobar
