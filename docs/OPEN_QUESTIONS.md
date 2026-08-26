# OPEN QUESTIONS — Decisiones y datos pendientes

Última actualización: 2026-08-20

> Regla: ninguna respuesta pendiente debe convertirse en hecho en la memoria o el modelo financiero. Cuando una pregunta se resuelva, actualizar también `DECISION_LOG.md`, `ASSUMPTIONS.md`, `STATUS.md` y los documentos afectados.

## Prioridad crítica — antes de solicitud SEPE

1. **Prestación contributiva reconocida**
   - [PENDIENTE] ¿Cuántos días de prestación ha reconocido oficialmente el SEPE?
   - [PENDIENTE] ¿Cuál es la cuantía diaria/mensual reconocida?
   - [PENDIENTE] ¿Cuál es el importe exacto pendiente cuando se solicite la capitalización? Respuesta= 28000€

2. **Despido / conciliación**
   - [PENDIENTE] Resultado del SMAC del 25/08/2026.
   - [PENDIENTE] ¿Se cierra mediante acuerdo con reconocimiento de improcedencia e indemnización?
   - [PENDIENTE] Importe final de indemnización y fecha de pago. Respuesta = 12069€

3. **Forma jurídica**
   - [DECISIÓN ABIERTA] ¿Autónomo individual en el lanzamiento o SL? Respuesta = Autónomo individual
   - Criterios: compatibilidad con pago único, financiación del inmueble, riesgo patrimonial, fiscalidad, administración, credibilidad bancaria y futura entrada de inversión.

4. **Local**
   - [PENDIENTE] ¿Se mantiene como candidato el local actualmente estudiado o se abre búsqueda alternativa? Respuesta= se abre búsqueda alternativa
   - [PENDIENTE] Precio de compra definitivo. Respuesta= entre 40000€ y 100000 €
   - [PENDIENTE] Superficie útil y distribución verificadas. Respuesta = mas de 40 metros cuadrados
   - [PENDIENTE] Compatibilidad urbanística y licencia/DRU/ECU necesaria.
   - [PENDIENTE] Presupuesto real de acondicionamiento. Respuesta= estimado de 5000€
   - [PENDIENTE] Tasación y financiación bancaria indicativa.
   - [PENDIENTE] Renta mensual comparable real de locales alternativos equivalentes en la zona.
   - [PENDIENTE] Coste total de adquisición: precio + impuestos + notaría + registro + tasación + financiación + proyecto/licencias + obras.
   - [PENDIENTE] Comparación cuantitativa compra vs alquiler y punto de indiferencia.
   - [PENDIENTE] ¿Qué características del local son imprescindibles para el MVP y cuáles son meramente deseables?

5. **MVP físico**
   - [DECISIÓN ABIERTA] ¿Cuáles son exactamente las 3–5 líneas de actividad iniciales?
   - Propuesta de trabajo: yoga/movilidad, breathwork/meditación, talleres/eventos y danza/movimiento en franjas seleccionadas.
   - [PENDIENTE] Horario semanal. Repuesta = Lunes a sábado de 8 a 14 y de 17 a 21h
   - [PENDIENTE] Capacidad máxima por sesión. 15 personas
   - [PENDIENTE] Número de profesores/colaboradores iniciales. 4
   - [PENDIENTE] Responsable/profesional asignado a cada actividad del MVP.
   - [PENDIENTE] Identificar qué actividades del MVP exigirán cualificación o habilitación específica.

6. **Pricing**
   - [PENDIENTE] Precio drop-in.
   - [PENDIENTE] Bono 5/10 sesiones.
   - [PENDIENTE] Membership mensual.
   - [PENDIENTE] Precio talleres/eventos.
   - [PENDIENTE] Alquiler puntual de sala.
   - [PENDIENTE] Benchmarks locales documentados para justificar cada precio.

7. **Financiación**
   - [PENDIENTE] Aportación propia verificable disponible en fecha de compra.
   - [PENDIENTE] Importe máximo solicitado al banco.
   - [PENDIENTE] Plazo objetivo y eventual carencia.
   - [PENDIENTE] Oferta o preestudio de Avalmadrid.
   - [PENDIENTE] Cuota mensual estimada con condiciones reales o indicativas.
   - [PENDIENTE] DSCR/cobertura de deuda en escenario conservador y base con SOMA OS = 0 €.
   - [PENDIENTE] Stress test con caída de ocupación y sobrecoste de apertura.

## Prioridad alta — modelo financiero

8. ¿Qué porcentaje de ocupación es realista en meses 1–3, 4–6 y 7–12?
9. ¿Qué ratio de conversión lead → cliente se usará inicialmente?
10. ¿Qué churn mensual se modelará para memberships?
11. ¿Cuál es el coste por hora/sesión de cada profesional externo?
12. ¿Cuándo se contrataría la primera persona asalariada, si se contrata?
13. ¿Cuál será el presupuesto mensual de marketing en lanzamiento y estabilización?
14. ¿Qué importe mínimo de fondo de maniobra se considera prudente?
15. ¿Qué ingresos se admitirán en escenario bancario base además de clases/memberships/talleres/eventos/alquiler puntual?
16. [PENDIENTE] Construir año 1 mensual a partir de variables operativas explícitas: sesiones × plazas × ocupación × ticket/precio medio.
17. [PENDIENTE] Completar cuenta de resultados del escenario base sin ingresos SOMA OS.
18. [PENDIENTE] Calcular break-even en euros/mes, memberships equivalentes, ocupación y sesiones semanales.
19. [RESUELTO — ESTRUCTURA Y CÁLCULO REPRODUCIBLE] Se creó `financial-model/FUENTES_Y_USOS.md` y se calculó el rango sobre hipótesis existentes.
    - [PENDIENTE] Sustituir cada fuente y uso por importes acreditados hasta cuadrar la operación real.
20. [RESUELTO — DOCUMENTACIÓN EXISTENTE] El modelo separa vista verificable y vista hipotética; no existe todavía ningún total verificable cerrado.

## Prioridad alta — legal y operación

21. ¿Qué epígrafes IAE y CNAE encajan con el MVP definitivo?
22. ¿Qué actividades requieren titulaciones específicas en Madrid y cuáles pueden prestarse como bienestar no sanitario/no deportivo regulado?
23. ¿Qué pólizas de RC y seguros son necesarias?
24. ¿Qué contratos se utilizarán con profesionales externos para evitar falsa autonomía?
25. ¿Qué requisitos de protección de datos se aplican al CRM, reservas, WhatsApp y agentes IA?
26. ¿Se tratarán datos de salud o sólo preferencias de bienestar? Evitar datos especiales salvo necesidad real y base jurídica sólida.
27. [RESUELTO — REGLA OFICIAL 2026-08-20] La secuencia general consta en `roadmap/ROADMAP_SEPE.md`: resolución del procedimiento impugnado cuando exista → solicitud anterior al alta/inicio → ejecución/alta posterior a la solicitud → justificación según modalidad y resolución.
    - [PENDIENTE] Fijar fechas personales cuando existan resolución laboral, prestación y modalidad elegida.
28. [RESUELTO — CATEGORÍAS GENERALES] Se creó `legal/MATRIZ_ELEGIBILIDAD_INVERSION.md` con fuentes SEPE/BOE.
    - [PENDIENTE] Confirmar la imputación exacta de cada partida cuando estén definidos modalidad, titular, local, importe, fecha y documento.
29. [RESUELTO — ESTRUCTURA] Se creó `legal/MATRIZ_ACTIVIDAD_CUMPLIMIENTO.md` usando HYP-009 sin convertirla en hecho.
    - [PENDIENTE] Completar licencia, cualificación, seguro y responsable de cada actividad tras cerrar MVP, local y profesionales.

## Prioridad alta — evidencia / anexos

30. [PENDIENTE] Resolución oficial de prestación.
31. [PENDIENTE] Acta de conciliación SMAC.
32. [PENDIENTE] Finiquito definitivo.
33. [PENDIENTE] Justificante de indemnización.
34. [PENDIENTE] CV actualizado orientado a promotor/gerente/tecnología.
35. [PENDIENTE] Certificaciones y formación relevantes.
36. [PENDIENTE] Nota simple/documentación registral del local candidato.
37. [PENDIENTE] Consulta/informe urbanístico y de actividad.
38. [PENDIENTE] Plano, distribución y aforo verificable.
39. [PENDIENTE] Presupuestos de obra, mobiliario, tecnología, licencias, proyecto técnico y seguros.
40. [PENDIENTE] Preestudio bancario/Avalmadrid.
41. [PENDIENTE] Extracto/certificación de fondos propios.
42. [PENDIENTE] Comparables de alquiler y benchmark de precios de servicios.
43. [RESUELTO — ESTRUCTURA] Se creó `evidence/INDICE_ANEXOS_Y_TRAZABILIDAD.md`.
    - [PENDIENTE] Incorporar y verificar los documentos materiales enumerados en los puntos 30–42.
44. [RESUELTO — GUÍA Y PLANTILLAS] Se creó `wiki/ACREDITACION_PRECIO_LOCAL_SEPE.md` para acreditar previamente el precio sin asumir arras obligatorias.
    - [PENDIENTE] Seleccionar inmueble principal y dos alternativas plausibles.
    - [PENDIENTE] Obtener propuesta económica no vinculante del principal y confirmaciones de precio de las alternativas.
    - [PENDIENTE] Conciliar cada oferta con Registro/Catastro, due diligence, costes totales y fuentes de financiación.

## Prioridad media — SOMA OS

45. [DECISIÓN ABIERTA] ¿Power Platform/Dataverse será el stack inicial del back-office o se busca arquitectura SaaS independiente desde el MVP?
46. ¿WhatsApp se integra desde el inicio o se deja para fase 2 por coste/complejidad?
47. ¿El motor de recomendaciones será inicialmente reglas + scoring antes de ML?
48. ¿Qué métrica define éxito de Retention AI en el MVP?
49. ¿Qué datos mínimos necesita SOMA OS para funcionar sin introducir complejidad regulatoria innecesaria?

## Prioridad media — narrativa futura de inversión

50. ¿Qué evidencia mínima de tracción se exigirá antes de presentar a Lanzadera/ENISA?
51. ¿Cuándo se separaría comercialmente SOMA OS de SOMA Lab?
52. ¿Cuál será el ICP B2B inicial: yoga/pilates boutique, wellness multidisciplinar o centros deportivos?
53. ¿Qué pricing SaaS B2B se testeará?

## Hallazgos de auditoría que no deben olvidarse

- La parte peor justificada del local es actualmente **comprar frente a alquilar**.
- La memoria **todavía no demuestra** viabilidad física sin SOMA OS; sólo establece la regla de diseño.
- La narrativa apunta a autoempleo real, pero la compra inmobiliaria puede parecer patrimonial si no se acompaña de actividad, demanda, números y evidencia.
- La versión SEPE debe reducir el protagonismo de roadmap tecnológico, marketplace, fundraising y narrativa de aceleradora.
- Las cifras 100.000 €, ~28.000 €, ~12.000 € y 60.000–70.000 € siguen siendo hipótesis/estimaciones, no hechos cerrados.

