# ASSUMPTIONS — Registro de hipótesis

Última actualización: 2026-08-20

> Toda cifra no confirmada utilizada en el modelo debe tener un identificador HYP y marcarse como hipótesis. Las cifras se sustituyen por datos reales en cuanto exista evidencia.

## HYP-001 — Pago único SEPE

**Descripción:** importe potencial de capitalización de prestación contributiva.

**Valor:** 28.000 € como cifra de planificación.

**Tipo:** [ESTIMADO]

**Motivo:** estimación previa de planificación; el repositorio no contiene los datos administrativos necesarios para reproducirla y no existe resolución oficial de capitalización.

**Sensibilidad:** alta; reduce o aumenta directamente la financiación ajena necesaria.

**Fuente:** estimación previa no reproducible con la documentación actual; validar con resolución de prestación y cálculo administrativo.

**Validación requerida:** resolución de prestación + cálculo administrativo de pago único.

**Estado:** ABIERTA.

## HYP-002 — Recursos propios

**Descripción:** fondos propios/finiquito/indemnización aportables al proyecto.

**Valor:** 12.000 €.

**Tipo:** [HIPÓTESIS]

**Sensibilidad:** alta.

**Validación requerida:** extractos, finiquito e indemnización efectivamente percibida.

**Estado:** ABIERTA.

## HYP-003 — Precio del local

**Descripción:** precio de adquisición del local comercial.

**Valor:** 100.000 €.

**Tipo:** [HIPÓTESIS PARA MODELIZACIÓN]

**Sensibilidad:** muy alta.

**Validación requerida:** inmueble concreto + oferta/arras/escritura.

**Estado:** ABIERTA.

## HYP-004 — Financiación bancaria

**Descripción:** deuda necesaria para completar compra y parte del proyecto.

**Valor:** 60.000–70.000 € orientativos.

**Tipo:** [HIPÓTESIS]

**Sensibilidad:** muy alta.

**Validación requerida:** preestudio bancario/Avalmadrid, tasación y estructura definitiva de usos y fuentes.

**Estado:** ABIERTA.

## HYP-005 — SOMA OS en escenario bancario

**Descripción:** ingresos tecnológicos considerados para servicio de deuda.

**Valor:** 0 € en escenario bancario base.

**Tipo:** [REGLA DE MODELIZACIÓN]

**Sensibilidad:** n/a.

**Validación requerida:** ninguna; decisión prudencial.

**Estado:** APROBADA.

## HYP-006 — Costes de adquisición

**Descripción:** impuestos, notaría, registro, tasación y gastos asociados a compra.

**Valor:** [PENDIENTE].

**Tipo:** [HIPÓTESIS POR DEFINIR]

**Sensibilidad:** alta.

**Validación requerida:** régimen fiscal aplicable al inmueble concreto, valor de referencia, minutas/presupuestos y financiación.

**Estado:** ABIERTA.

## HYP-007 — CAPEX de adecuación

**Descripción:** obras, instalaciones, acústica, climatización, iluminación, mobiliario y equipamiento.

**Valor:** [PENDIENTE].

**Tipo:** [HIPÓTESIS POR DEFINIR]

**Sensibilidad:** alta.

**Validación requerida:** visita técnica + presupuesto desglosado.

**Estado:** ABIERTA.

## HYP-008 — Fondo de maniobra

**Descripción:** liquidez inicial para cubrir desfase de caja y contingencias.

**Valor:** [PENDIENTE].

**Tipo:** [HIPÓTESIS POR DEFINIR]

**Sensibilidad:** alta.

**Validación requerida:** modelo mensual de año 1.

**Estado:** ABIERTA.

## HYP-009 — Oferta física inicial

**Descripción:** lanzamiento con oferta acotada, no catálogo completo.

**Valor:** yoga/movilidad + breathwork/meditación + talleres/eventos + una línea de danza/movimiento a validar.

**Tipo:** [HIPÓTESIS DE MVP]

**Sensibilidad:** media.

**Validación requerida:** demanda local, licencias, disponibilidad de profesionales y economics por sesión.

**Estado:** ABIERTA.

## HYP-010 — Rol del promotor

**Descripción:** propietario/gerente responsable de estrategia, ventas, marketing, producto, tecnología, operaciones y partnerships; no necesariamente instructor de todas las actividades.

**Valor:** modelo gerente.

**Tipo:** [DECISIÓN DE DISEÑO]

**Sensibilidad:** media.

**Validación requerida:** forma jurídica y modelo de contratación.

**Estado:** APROBADA PROVISIONALMENTE.

## Control de la iteración 2026-08-20

No se añadió ninguna inferencia ni hipótesis nueva. El cálculo de `financial-model/FUENTES_Y_USOS.md` usa exclusivamente HYP-001 a HYP-004 y deja las partidas desconocidas como variable `U`; no supone que valgan cero.

