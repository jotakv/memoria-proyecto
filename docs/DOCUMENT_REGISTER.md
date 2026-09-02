# Registro de clasificación documental

**Fecha de corte:** 2026-09-02. La clasificación se aplica antes de editar y distingue contenido editorial de evidencia original.

## A. Canónico / vigente y presentable

- `MEMORIA_SEPE_PRESENTACION_FINAL.md`: única fuente de verdad del expediente SEPE.
- `docupresentarsepe/00_INDICE_EXPEDIENTE_SEPE.md` a `11_ANEXO_IX_CUADRO_INVERSION_FINANCIACION.md`: dossier derivado; prevalece siempre la memoria canónica.
- `financial-model/PLAN_INVERSION.md`: cuadro vigente derivado.

## B. Vigente auxiliar

- `README.md`; `docs/STATUS.md`; `docs/OPEN_QUESTIONS.md`; `docs/ASSUMPTIONS.md`; `docs/DECISION_LOG.md`; `docs/CHANGELOG.md`.
- `docs/memoria-descriptiva-allsetic.md`, `index.html`, `assets/`, `scripts/`, `tests/`: presentación pública derivada, no sustituyen la memoria SEPE.
- `docupresentarsepe/README.md`, `docupresentarsepe/PreguntasPendientes.md`.
- `evidence/*.md`, `legal/*.md`, `research/FUENTES_OFICIALES.md`, `technology/ARCHITECTURE.md`, `roadmap/ROADMAP.md`, `prompts/*.md`.

## C. Histórico / sustituido — no presentar

- `memoria-sepe/MEMORIA_COMPLETA_SEPE.md`.
- `plan-empresa/HIPOTESIS_PENDIENTES_Y_FUENTES.md`, `MATRIZ_COBERTURA_PLANTILLAS.md`, `MODELO_ECONOMICO_FINANCIERO.md`, `PLAN_EMPRESA_ALLSETIC.md` y `RESUMEN_EJECUTIVO_JURADO.md`.
- `financial-model/MODELO_VIABILIDAD.md`.
- `internal/AUDITORIA_ADMINISTRACION_HOSTIL_LOCAL.md`.
- `referencias/*.md`: material externo o plantillas históricas, no expediente vigente.

## D. Evidencia original / no editar

- Todos los binarios versionados en `documentos_sepe/`, `fondos_propios/`, `locales/`, `proformas/` y `referencias/` (`*.pdf`, `*.doc`, `*.xlsm`).
- `locales/San Fernando ficha.pdf` se conserva como evidencia histórica, pero San Fernando no integra la muestra vigente.

## E. No relacionado con el cuadro SEPE vigente

- Configuración de la aplicación (`manifest.webmanifest`, estilos y comportamiento), salvo su función de publicación.

Las evidencias pueden contener cifras o planteamientos distintos; no se alteran para simular coherencia retrospectiva. La documentación editorial explica su alcance y la memoria canónica prevalece.
