# AUDITORÍA DEL REPOSITORIO

Fecha: 2026-08-19

## 1. Resumen ejecutivo

El repositorio `jotakv/capitalizarParo` estaba vacío en el momento de la auditoría inicial. No existían documentos, estructura, historial útil, modelo financiero ni inventario de evidencias. Se ha inicializado `README.md` en `main` únicamente para poder crear la rama de trabajo `feat/memoria-sepe-soma-lab`; toda la construcción posterior se realiza en dicha rama.

La prioridad del expediente debe ser convertir el proyecto en una actividad empresarial real, económicamente viable y documentalmente trazable, con tres narrativas separadas:

1. **SEPE:** inversión necesaria y directamente afectada a una actividad por cuenta propia real.
2. **Banco/Avalmadrid:** el negocio físico debe poder soportar la deuda sin depender de SOMA OS.
3. **Aceleradoras/inversores:** SOMA Lab como Customer Zero / Living Lab y SOMA OS como activo escalable.

## 2. Estructura actual encontrada

Antes de esta iteración:

- Repositorio vacío.

Tras la inicialización técnica:

- `README.md` en `main`.
- rama de trabajo: `feat/memoria-sepe-soma-lab`.

## 3. Documentación externa disponible para integrar

Fuera de GitHub existe documentación que deberá incorporarse a `evidence/` mediante inventario, referencias y, cuando proceda, copia controlada:

- Carta de despido disciplinario de BRAVENT 13, S.L. de 06/08/2026.
- Transcripción de reunión de despido.
- Papeleta de conciliación presentada el 07/08/2026.
- Justificante de presentación SMAC.
- Cédula de citación para conciliación de 25/08/2026.
- Nómina de julio de 2026.
- Notas previas sobre capitalización del paro.

Estos documentos no deben mezclarse con la memoria empresarial como hechos financieros del proyecto salvo que tengan función probatoria específica: situación legal de desempleo, prestación, recursos propios o cronología.

## 4. Datos relevantes disponibles

### Promotor

- [CONFIRMADO] Situación de desempleo derivada de extinción contractual en agosto de 2026.
- [CONFIRMADO] Existe reclamación/conciliación SMAC con cita para 25/08/2026.
- [CONFIRMADO] Salario bruto anual declarado en papeleta SMAC: 44.500 €.
- [ESTIMADO] Prestación contributiva potencial total: entorno de 28.000–29.000 € de pago único efectivo, pendiente de resolución oficial.
- [HIPÓTESIS] Recursos propios/finiquito/indemnización disponibles para el proyecto: aproximadamente 12.000 €.
- [HIPÓTESIS] Capital inicial total disponible para estructurar la operación: aproximadamente 40.000 €.

### Inmueble

- [HIPÓTESIS PARA MODELIZACIÓN] Precio objetivo de adquisición: 100.000 €.
- [PENDIENTE] Inmueble definitivo.
- [PENDIENTE] Nota simple, referencia catastral, licencias, ITE/IEE, estatutos, comunidad, cargas, tasación, oferta bancaria, presupuesto de obra y proyecto técnico.

### Modelo empresarial

- [DECISIÓN DE DISEÑO] Nombre provisional: SOMA LAB.
- [DECISIÓN DE DISEÑO] Vertical tecnológica: SOMA OS.
- [DECISIÓN DE DISEÑO] El promotor actúa prioritariamente como propietario/gerente, no como instructor obligatorio de todas las actividades.
- [DECISIÓN DE DISEÑO] Las actividades reguladas o que requieran habilitación se prestarán por personal o colaboradores debidamente cualificados.
- [REGLA] El escenario bancario base tendrá 0 € de ingresos de SOMA OS.

## 5. Contradicciones o puntos a reconciliar

1. **Capital total ≠ coste total del proyecto.** 28.000 € de pago único + 12.000 € propios no cubren una compra de 100.000 € más impuestos, gastos, reforma, equipamiento y circulante. Debe modelizarse financiación adicional y necesidades de tesorería.
2. **Pago único todavía no confirmado.** Debe evitarse fijar 28.000 € como hecho hasta disponer de resolución del SEPE.
3. **Despido impugnado.** Mientras el procedimiento derivado del despido siga pendiente, debe verificarse el orden exacto de solicitud del pago único con normativa SEPE vigente.
4. **Compra del local.** El SEPE admite como inversión bienes del activo necesarios, incluido un inmueble, pero habrá que probar necesidad, afectación, proporcionalidad y trazabilidad de pagos.
5. **Actividad física demasiado amplia.** Yoga, danza, calistenia, breathwork, acroyoga, retiros, etc. no deben presentarse como lanzamiento simultáneo. Se requiere MVP físico limitado.
6. **Tecnología demasiado amplia.** SOMA OS debe comenzar con CRM/reservas/AI Receptionist/retención/recomendación; marketplace, retreats, corporate wellness y SaaS avanzado deben quedar en fases posteriores.

## 6. Información faltante crítica

- Resolución oficial de prestación contributiva: días reconocidos, cuantía diaria/mensual y fecha de inicio.
- Resultado definitivo del SMAC o procedimiento judicial, si lo hubiera.
- Importe real de indemnización y finiquito.
- Capital propio realmente disponible y justificable.
- Forma jurídica prevista: autónomo individual, SL u otra.
- Epígrafes/IAE/CNAE previsibles.
- Local concreto o criterios cerrados de selección.
- Presupuestos de compra, impuestos, notaría, registro, tasación, obra, licencias, equipamiento y tecnología.
- Capacidad máxima del espacio y distribución.
- Política de precios del MVP físico.
- Horario operativo y número de sesiones semanales.
- Coste y modalidad de contratación de profesores/facilitadores.
- Oferta indicativa bancaria/Avalmadrid.
- Hipótesis de clientes, conversión, ocupación, churn y ticket medio.
- Arquitectura tecnológica definitiva y presupuesto de desarrollo.

## 7. Documentos que conviene obtener

### SEPE

- Resolución de prestación contributiva.
- Certificado/vida laboral y bases de cotización si fueran necesarias.
- Formulario vigente de pago único.
- Plantilla oficial de memoria explicativa.
- Resolución de capitalización cuando proceda.

### Local

- Nota simple.
- Certificación catastral.
- Estatutos y últimas actas relevantes de la comunidad.
- Certificado de deudas de comunidad.
- ITE/IEE.
- Licencia o antecedentes de actividad.
- Informe urbanístico/técnico.
- Presupuesto de acondicionamiento.
- Tasación.

### Banco/Avalmadrid

- Preestudio de financiación.
- Condiciones indicativas: importe, plazo, carencia, garantías, comisiones y tipo.

### Operación

- Presupuestos de profesores/colaboradores.
- Software y TPV/reservas.
- Seguros.
- Gestoría.
- Limpieza y suministros.

## 8. Riesgos principales del expediente

### R1 — Solicitud demasiado inmobiliaria

Riesgo: que la compra parezca una inversión patrimonial pasiva.

Mitigación: demostrar que el inmueble es infraestructura productiva permanente, necesaria para clases, memberships, talleres, contenido, validación tecnológica y operación B2B.

### R2 — Falta de proporcionalidad

Riesgo: que un local de 100.000 € parezca sobredimensionado frente a ingresos previstos.

Mitigación: modelo conservador de ocupación, break-even, capacidad del espacio y comparación compra/alquiler.

### R3 — Financiación insuficiente

Riesgo: disponer de entrada pero no de fondos para impuestos, obras y circulante.

Mitigación: separar fuentes/usos y no cerrar compra sin financiación total del proyecto.

### R4 — Exceso de amplitud del proyecto

Riesgo: narrativa poco creíble para SEPE y banco.

Mitigación: MVP físico y tecnológico claramente acotados.

### R5 — Cumplimiento profesional y licencias

Riesgo: atribuir al promotor actividades que requieran cualificación o actividad no compatible con licencia.

Mitigación: modelo gerente + profesionales habilitados + validación urbanística/licencias antes de inversión irreversible.

### R6 — Trazabilidad del pago único

Riesgo: no poder justificar el 100 % del importe capitalizado.

Mitigación: pagos bancarios nominativos, facturas, contratos, escrituras y expediente de evidencias desde el primer día.

## 9. Estrategia recomendada

1. Cerrar primero la arquitectura documental del expediente.
2. Confirmar prestación y estado del despido antes de presentar el pago único.
3. Definir MVP físico y precios antes de fijar tamaño/coste máximo del local.
4. Identificar local candidato y completar due diligence técnica/legal.
5. Obtener presupuestos verificables de CAPEX.
6. Obtener preestudio bancario/Avalmadrid.
7. Construir modelo financiero físico independiente de SOMA OS.
8. Redactar memoria SEPE definitiva con inversión documentada.
9. Mantener SOMA OS como diversificación y living lab, no como soporte de deuda.
10. Preparar una segunda capa narrativa para Lanzadera/ENISA solo después de demostrar operación física y primeros usuarios.

## 10. Fuentes oficiales iniciales a incorporar

- SEPE — Persona trabajadora autónoma: capitalización hasta el 100 % de la prestación pendiente justificada como inversión.
- SEPE — Memoria explicativa: actividad, capital total, distribución, inversiones, local, previsiones y empleo.
- SEPE — Justificación: 100 % del pago único debe acreditarse documentalmente y mediante medios de pago trazables.
- SEPE — FAQ de inversión: un inmueble puede formar parte de la inversión si es necesario para la puesta en marcha.
- BOE — Real Decreto 1044/1985, texto consolidado vigente.
- Comunidad de Madrid — información de pago único y ayudas asociadas.

## 11. Conclusión

El repositorio no contenía material previo que preservar, por lo que no existe deuda de migración ni riesgo de pérdida documental en GitHub. El principal cuello de botella no es la redacción: es convertir hipótesis económicas y de local en evidencia verificable. La primera iteración debe producir una memoria completa pero claramente marcada como borrador de trabajo, acompañada de modelo financiero, inventario documental y preguntas abiertas.
