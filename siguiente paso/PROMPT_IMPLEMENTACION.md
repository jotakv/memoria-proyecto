# PROMPT — CERRAR EL PAQUETE DE DESBLOQUEO DEL PROMOTOR

Usa el skill `capitalizacion-paro-sepe-proyectos` y trabaja sobre el repositorio `capitalizarParo`.

## Objetivo

Convertir los datos y documentos que aporte el promotor en un paquete probatorio mínimo que permita decidir la forma jurídica, validar el local y ejecutar el modelo financiero sin inventar información.

## Entrada mínima

Solicita o procesa, según esté disponible:

1. resolución de prestación contributiva y saldo/días reconocidos;
2. acta o resolución que cierre el procedimiento laboral cuando exista;
3. CV y certificaciones que el promotor autorice a usar;
4. decisión o preferencias justificadas sobre autónomo frente a SL;
5. local candidato: oferta, nota simple, superficie/plano, información técnica y urbanística;
6. presupuestos de compra, obra, licencias, mobiliario, tecnología, seguros y profesionales;
7. fondos propios acreditables y oferta/preestudio de financiación;
8. MVP: actividades iniciales, horario, aforo, responsables, precios y política de contratación.

## Reglas

- No inventes datos personales, importes, licencias, demanda, salarios, tasaciones, clientes, presupuestos ni resoluciones.
- Distingue `[HECHO DOCUMENTADO]`, `[DECLARACIÓN DEL PROMOTOR]`, `[HIPÓTESIS]`, `[CÁLCULO]`, `[REGLA OFICIAL VIGENTE]`, `[CRITERIO DE RIESGO]` y `[PENDIENTE]`.
- No copies DNI, cuentas, domicilios, firmas u otros datos sensibles en documentos de trabajo salvo necesidad y autorización; usa referencias controladas.
- Verifica vigencia en SEPE/BOE/Seguridad Social/AEAT y fuentes autonómicas o municipales antes de aplicar una regla variable.
- Si se aportan documentos, registra qué acreditan y qué no acreditan en `evidence/INDICE_ANEXOS_Y_TRAZABILIDAD.md`.
- Si falta evidencia, conserva `[PENDIENTE]`; no la sustituyas por una estimación silenciosa.
- Mantén `SOMA OS = 0 €` en el escenario base de deuda.
- No declares viable o elegible el inmueble sólo porque el SEPE mencione la categoría inmueble.

## Ejecución

1. Revisa `docs/STATUS.md`, `docs/OPEN_QUESTIONS.md`, `docs/ASSUMPTIONS.md` y `docs/AUDITORIA_PENDIENTES_2026-08-20.md`.
2. Inventaría cada entrada recibida y asigna ID de anexo.
3. Cierra sólo preguntas respaldadas por documento o decisión expresa.
4. Actualiza `legal/MATRIZ_ACTIVIDAD_CUMPLIMIENTO.md` y `legal/MATRIZ_ELEGIBILIDAD_INVERSION.md`.
5. Actualiza `financial-model/FUENTES_Y_USOS.md`; calcula sólo con inputs acreditados o hipótesis identificadas.
6. Cuando existan todos los drivers, completa año 1 mensual, break-even, DSCR y pruebas de estrés.
7. Sincroniza memoria, financial-model, legal, local y roadmap.
8. Actualiza `docs/OPEN_QUESTIONS.md`, `docs/ASSUMPTIONS.md`, `docs/DECISION_LOG.md` si hay decisión, `docs/STATUS.md` y `docs/CHANGELOG.md`.

## Salida

- documentos recibidos y estado probatorio;
- preguntas cerradas y evidencia usada;
- preguntas que siguen pendientes;
- contradicciones o riesgos nuevos;
- cálculos reproducibles y sus inputs;
- archivos modificados;
- siguiente decisión concreta del promotor.

No declares `READY FOR SUBMISSION` mientras falte un dato material de prestación, forma jurídica, local, licencia, inversión o financiación.

