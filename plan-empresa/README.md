# Plan de empresa · Allsetic AI Automation Studio

## Finalidad y audiencia

Esta carpeta contiene el plan empresarial de Allsetic para un jurado de emprendimiento y, como base adaptable, para entidades financieras, programas de apoyo, partners y trámites administrativos. Es un **borrador profesional sujeto a validación**: las previsiones son escenarios `[HIPÓTESIS]`, no ventas, contratos ni ayudas obtenidos.

## Documentos

- [`PLAN_EMPRESA_ALLSETIC.md`](PLAN_EMPRESA_ALLSETIC.md): documento principal, completo y autosuficiente.
- [`RESUMEN_EJECUTIVO_JURADO.md`](RESUMEN_EJECUTIVO_JURADO.md): lectura ejecutiva de aproximadamente dos páginas.
- [`MODELO_ECONOMICO_FINANCIERO.md`](MODELO_ECONOMICO_FINANCIERO.md): supuestos, 36 meses, estados, escenarios, ratios y fórmulas.
- [`HIPOTESIS_PENDIENTES_Y_FUENTES.md`](HIPOTESIS_PENDIENTES_Y_FUENTES.md): registro central de hipótesis, pendientes y fuentes.
- [`MATRIZ_COBERTURA_PLANTILLAS.md`](MATRIZ_COBERTURA_PLANTILLAS.md): trazabilidad respecto de las plantillas obligatorias y referencias complementarias.

## Jerarquía y relación con el expediente

En caso de contradicción se aplican, por orden: `AGENTS.md`; `docs/STATUS.md`, `docs/OPEN_QUESTIONS.md`, `docs/ASSUMPTIONS.md` y `docs/DECISION_LOG.md`; la [memoria canónica](../docs/memoria-descriptiva-allsetic.md); datos expresos del encargo; [`financial-model/`](../financial-model/); fuentes oficiales actuales; y referencias solo estructurales. La memoria canónica sigue siendo la fuente del contenido público y de `index.html`; este plan amplía el análisis para evaluación empresarial. El modelo de esta carpeta desarrolla, sin sustituir evidencia real, las plantillas de `financial-model/`.

## Estado y actualización

**Versión 1.0 · 27 de agosto de 2026 · `[HIPÓTESIS]` financiera no aprobada por el promotor.** Antes de presentar deben confirmarse cronología, fiscalidad, inversión con presupuestos, financiación, capacidad, precios y validación comercial.

Para actualizar:

1. sustituir un supuesto solo con declaración o documento trazable;
2. conservar su etiqueta de evidencia y actualizar `HIPOTESIS_PENDIENTES_Y_FUENTES.md`;
3. reconciliar cifras en el plan, el modelo y `docs/ASSUMPTIONS.md`;
4. registrar decisiones y preguntas en `docs/DECISION_LOG.md` y `docs/OPEN_QUESTIONS.md`;
5. actualizar `docs/STATUS.md` y `docs/CHANGELOG.md`;
6. ejecutar `npm run check` y los controles financieros y de enlaces.

No deben versionarse presupuestos con datos privados ni archivos binarios derivados.
