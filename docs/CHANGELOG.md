# CHANGELOG

## 2026-08-20 — Iteración 4: acreditación previa del precio del local

### Added

- `wiki/ACREDITACION_PRECIO_LOCAL_SEPE.md` con fundamento documental, límites, paquete recomendado, proceso, matriz, guiones, plantillas, contingencias y checklist de calidad.
- SRC-012 para la plantilla oficial de memoria explicativa del SEPE y su copia local verificada.

### Changed

- Incorporada la propuesta económica no vinculante al inventario de evidencia pendiente.
- Sincronizados `docs/STATUS.md`, `docs/OPEN_QUESTIONS.md`, `docs/DECISION_LOG.md` y los capítulos 08 y 14 de la memoria.
- Registrada la decisión de no firmar arras únicamente para generar soporte documental.

### Not changed

- No se atribuye al SEPE una aceptación automática de la propuesta ni se declara la compra o el precio como confirmados.
- No se incorporaron datos de Tinamus ni documentos personales porque no constan en este repositorio.
- Los porcentajes de avance no cambian: se añadió estructura operativa, no evidencia material nueva.

## 2026-08-20 — Iteración 3: completar huecos resolubles

### Added

- `docs/AUDITORIA_PENDIENTES_2026-08-20.md` con inventario, clasificación 1–5 y lectura de administración hostil.
- `legal/MATRIZ_ELEGIBILIDAD_INVERSION.md` con categorías generales respaldadas por SEPE/BOE y controles por partida.
- `legal/MATRIZ_ACTIVIDAD_CUMPLIMIENTO.md` como estructura actividad → licencia/cualificación/seguro/responsable.
- `financial-model/FUENTES_Y_USOS.md` con vista verificable, vista hipotética y fórmula de conciliación.
- `evidence/INDICE_ANEXOS_Y_TRAZABILIDAD.md` con IDs estables y alcance probatorio.
- `siguiente paso/README.md` y `siguiente paso/PROMPT_IMPLEMENTACION.md` para el paquete de desbloqueo del promotor.

### Resolved

- Secuencia general solicitud/alta/inicio/justificación revalidada con SEPE y art. 34 de la Ley 20/2007.
- Catálogo general de inversión y prueba revalidado, sin prejuzgar partidas concretas.
- Separación de importes verificados e hipotéticos.
- Cálculo reproducible de fuentes hipotéticas: 100.000–110.000 € frente a usos de 100.000 € + costes pendientes.
- Estructura del índice de anexos y de la matriz de cumplimiento por actividad.
- Corregido el estado de privacidad: GitHub informa que el repositorio es privado.

### Changed

- Actualizados `research/FUENTES_OFICIALES.md`, `legal/REQUISITOS_SEPE.md` y `roadmap/ROADMAP_SEPE.md` con fuentes consultadas el 2026-08-20.
- Sincronizadas memoria completa, capítulos de local/financiación/justificación, CAPEX, hipótesis y costes de adquisición.
- `docs/OPEN_QUESTIONS.md` distingue estructuras resueltas de datos materiales aún pendientes.
- `docs/STATUS.md` mantiene `NO LISTO PARA PRESENTACIÓN` y prioriza el paquete de evidencia del promotor.
- `prompts/README.md` enlaza el siguiente paso operativo.

### Not changed

- No se inventaron ni completaron datos personales, resolución de prestación, licencias, demanda, salarios, tasaciones, clientes, presupuestos o financiación.
- No se añadieron hipótesis nuevas.
- No se modificaron los porcentajes de completitud porque no entró evidencia material.

## 2026-08-19 — Iteración 2: auditoría senior SEPE

### Added

- `docs/AUDITORIA_MEMORIA_SEPE.md` con auditoría integral desde perspectiva de técnico SEPE y auditor de viabilidad.
- Respuesta expresa a las 10 preguntas obligatorias sobre requerimientos, denegación, evidencia, hipótesis, local, viabilidad, autoempleo, distracciones, anexos y cambios previos a presentación.

### Changed

- Reescrita `memoria-sepe/MEMORIA_COMPLETA_SEPE.md` a versión 0.2 auditada.
- Priorizada la narrativa de autoempleo real y actividad física generadora de ingresos.
- SOMA OS pasa a papel secundario en la memoria SEPE y se mantiene en 0 € de ingresos en el escenario base de sostenibilidad.
- Reforzada la justificación del local como infraestructura productiva.
- Añadida exigencia de comparación cuantitativa compra vs alquiler.
- Añadida exigencia de due diligence técnica/urbanística del local definitivo.
- Añadida trazabilidad entre importe solicitado, partidas, presupuestos/facturas, medios de pago y destino de fondos.
- Añadidos controles de DSCR, stress test, break-even y modelo mensual físico.
- Ampliado `docs/OPEN_QUESTIONS.md` con huecos detectados por auditoría y anexos/evidencias pendientes.
- Actualizado `docs/STATUS.md` con estado `NO LISTO PARA PRESENTACIÓN`, bloqueadores y próximas acciones priorizadas.

### Audit findings

- Principal debilidad: la compra frente al alquiler aún no está cuantificada.
- La viabilidad física independiente de SOMA OS todavía no está demostrada con números.
- El proyecto parece autoempleo real por narrativa y rol del promotor, pero la compra del inmueble podría percibirse como patrimonial si no se acompaña de actividad, demanda, financiación y evidencia suficiente.
- Las cifras 100.000 €, ~28.000 €, ~12.000 € y 60.000–70.000 € continúan tratándose como hipótesis/estimaciones.
- La versión SEPE debe evitar que roadmap tecnológico, marketplace, fundraising o narrativa de aceleradora distraigan del expediente administrativo.

## 2026-08-19 — Iteración 1

### Added

- Inicialización técnica del repositorio.
- Rama de trabajo `feat/memoria-sepe-soma-lab`.
- Auditoría inicial del repositorio.
- Registro de preguntas abiertas.
- Registro de hipótesis.
- Registro de decisiones.
- Dashboard de estado.

### Notes

El repositorio estaba vacío. `README.md` se creó en `main` únicamente para permitir la creación de una rama de trabajo. El contenido sustantivo se desarrolla en la rama feature.

