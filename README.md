# Allsetic AI Automation Studio — Memoria descriptiva

Repositorio maestro de la memoria profesional de **Allsetic AI Automation Studio**, una consultoría técnica especializada en inteligencia artificial aplicada a procesos empresariales, automatización, Microsoft 365, Dynamics 365, Power Platform, Azure y CRM.

El repositorio conserva en un único lugar:

- la [memoria descriptiva canónica](docs/memoria-descriptiva-allsetic.md);
- el [plan de empresa para jurado y financiación](plan-empresa/README.md);
- una aplicación web estática, responsive e imprimible generada desde esa memoria;
- el estado, las hipótesis, las decisiones y los pendientes del expediente;
- las fuentes oficiales y controles para una eventual solicitud de pago único ante el SEPE;
- plantillas textuales para inversión, financiación y evidencia.

## Estado

La memoria descriptiva contiene las 22 secciones previstas y puede utilizarse como borrador profesional. El expediente económico y administrativo sigue **pendiente de completar** con resolución de prestación, cronología, presupuestos, financiación, costes y previsiones documentadas. No se presenta ninguna concesión, cliente o ingreso como confirmado.

## Fuente de verdad

`docs/memoria-descriptiva-allsetic.md` es la única fuente editorial del contenido mostrado por la aplicación. `scripts/build.mjs` la transforma en `index.html` y prepara `dist/` para publicación. No se debe editar manualmente la copia generada.

## Requisitos

- Node.js 20 o posterior.
- npm, utilizado únicamente para ejecutar scripts; no hay dependencias de producción.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://127.0.0.1:4173/`.

## Comprobaciones

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

`npm run check` ejecuta todas las comprobaciones en orden.

## Impresión y PDF

La interfaz incluye la acción **Imprimir / Guardar como PDF** y una hoja de estilos específica para impresión A4. No se genera ni versiona ningún PDF: la exportación se realiza desde el cuadro de impresión del navegador.

## Estructura

- `assets/`: estilos y comportamiento progresivo de la interfaz.
- `docs/`: memoria canónica, estado y trazabilidad.
- `documentos_sepe/`: copias oficiales preexistentes, conservadas sin cambios.
- `evidence/`: índice de documentos y controles probatorios.
- `financial-model/`: inversión y viabilidad pendientes de completar.
- `legal/`: reglas administrativas y controles de privacidad/contratación.
- `plan-empresa/`: plan integral, resumen ejecutivo, modelo financiero y trazabilidad de plantillas.
- `research/`: fuentes oficiales verificadas.
- `roadmap/`: secuencia de negocio y expediente.
- `scripts/`: generación, servidor local y validación.
- `technology/`: arquitectura de la aplicación documental.
- `tests/`: pruebas de contenido, coherencia y build.

## Principios

- Los precios orientativos son `[HIPÓTESIS]`, no ventas ni previsiones garantizadas.
- Las partidas sin evidencia muestran `[PENDIENTE]` o “Pendiente de presupuesto”.
- No se atribuyen al promotor credenciales o casos no aportados.
- Toda afirmación administrativa debe revalidarse con fuente oficial antes de presentar.
- No se versionan binarios generados, capturas ni exportaciones.
