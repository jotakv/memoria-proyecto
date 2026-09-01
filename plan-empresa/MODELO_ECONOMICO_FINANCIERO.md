# Modelo económico-financiero

**Versión:** 1.1 · 29 de agosto de 2026
**Unidad:** euros sin IVA, salvo indicación · redondeo al euro en tablas
**Evidencia:** todos los importes son `[HIPÓTESIS]` (HYP-A08–A17) y no ventas, presupuestos ni financiación confirmados.

## 1. Alcance, datos previos y criterio

El modelo adapta el simulador de Madrid Emprende a una persona autónoma, con sede profesional prevista, sin plantilla ni existencias. Separa ventas, cobros y caja; no incluye retribución salarial del promotor como gasto: su remuneración procede del rendimiento neto y su fiscalidad personal queda `[PENDIENTE]`. IVA e IRPF no forman parte del resultado operativo. Antes de entregar a un financiador se sustituirán supuestos por presupuestos, contratos y criterio fiscal.

### Fórmulas

- `ventas = unidades × precio medio`.
- `coste variable = ventas × porcentaje variable`.
- `margen bruto = ventas − costes variables`.
- `resultado antes de IRPF = margen bruto − costes fijos desembolsables − amortización`.
- `cobros mes t = ventas mes t−1` (HYP-A08, simplificación de 30 días).
- `caja final = caja inicial + cobros + financiación − pagos operativos − inversión − deuda − impuestos`.
- `punto de equilibrio = costes fijos totales / tasa de margen de contribución`.
- `cash flow operativo = resultado antes de IRPF + amortización`.
- `fondo de maniobra de gestión = caja + clientes − pasivo corriente operativo`.
- `liquidez = activo corriente / pasivo corriente`; si el denominador es cero, no se fuerza un ratio infinito.
- `endeudamiento = deuda financiera / activos de gestión`.
- `rentabilidad económica = resultado antes de IRPF / activos medios de gestión`.
- `capacidad de devolución = (resultado antes de IRPF + amortización) / servicio anual de deuda`; sin deuda es `[NO APLICA]`.

## 2. Inversión y financiación inicial

El escenario HYP-A09 de 12.000 € se conserva como base histórica, pero queda **sustituido para decisiones de inversión** por el plan ampliado. No debe sumarse ni financiarse en paralelo.

| Uso vigente | Importe | Estado |
|---|---:|---|
| Presupuesto de referencia del inmueble | 40.000 € | dentro de ofertas documentadas de 32.900–45.000 €; ninguno adquirido, reservado ni seleccionado contractualmente |
| Impuestos, notaría, Registro, agencia | Pendiente | `[PENDIENTE]` |
| Inspección y acondicionamiento | Pendiente | `[PENDIENTE]` |
| Mobiliario | 477,56 € | proforma; operación no ejecutada |
| Equipo informático | 1.317,48 € | documento a subsanar; operación no ejecutada |
| Gestoría | 943,80 € | proforma; operación no ejecutada |
| Licencias, suministros, seguro y puesta en marcha | Pendiente | `[PENDIENTE]` |
| Fondo de maniobra | Pendiente | `[PENDIENTE]` |
| **Total conocido del escenario de referencia** | **42.738,84 €** | presupuesto de local de 40.000 € más proformas; faltan costes materiales |

| Fuente | Importe | Aplicación / estado |
|---|---:|---|
| Pago único SEPE | ≈29.000 € | solo precio; `[ESTIMADO / PENDIENTE DE RESOLUCIÓN]` |
| Fondos propios declarados | 12.000 € | `[PENDIENTE]` acreditación; ≈11.000 € al precio |
| Préstamo / ayudas | 0 € | ninguno concedido |

Tras el precio quedaría ≈1.000 € `[ESTIMADO]`: **BRECHA DE FINANCIACIÓN PENDIENTE** mínima de 1.738,84 € frente a las proformas, más todos los costes sin cuantificar. El coste total, base amortizable, terreno/construcción y tratamiento fiscal se revisarán con escritura y asesor; no se inventa amortización.

## 3. Supuestos comerciales y capacidad

### Precios base

| Línea | Unidad base | Estado |
|---|---:|---|
| Auditoría | 3.000 | `[HIPÓTESIS HYP-A01]`, dentro de 2.500–4.000 € |
| Sprint | 6.000 | `[HIPÓTESIS HYP-A02]`, dentro de 5.000–9.000 € |
| Implantación | 8.000 | `[HIPÓTESIS HYP-A12]`, pendiente de alcance |
| Desarrollo/integración | 4.000 | `[HIPÓTESIS HYP-A12]`, pendiente de alcance |
| Mantenimiento de entrada | 1.000/mes | `[HIPÓTESIS HYP-A03]`, alcance limitado por debajo del rango Managed completo |

`[HIPÓTESIS HYP-A15]` Se limita la planificación a 120 horas disponibles/mes y 70 % facturable. Cada propuesta deberá estimar horas; no se aceptarán proyectos simultáneos que excedan capacidad. La subcontratación solo se activa con margen contratado.

### Ventas por línea y año

| Línea | Año 1 unidades / ventas | Año 2 ventas | Año 3 ventas |
|---|---:|---:|---:|
| Auditorías | 4 / 12.000 | 18.000 | 21.000 |
| Sprints | 3 / 18.000 | 24.000 | 30.000 |
| Implantaciones | 2 / 16.000 | 20.000 | 24.000 |
| Desarrollos e integraciones | 2 / 8.000 | 10.200 | 14.400 |
| Mantenimiento | 9 mensualidades / 9.000 | 16.000 | 24.000 |
| **Total** | **63.000** | **88.200** | **113.400** |

## 4. Plan comercial mensual del primer año

| Mes | Auditorías | Sprints | Implantaciones | Desarrollos | Mantenimiento | Total |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | 3.000 | 0 | 0 | 0 | 0 | 3.000 |
| 4 | 0 | 6.000 | 0 | 0 | 0 | 6.000 |
| 5 | 0 | 0 | 0 | 0 | 0 | 0 |
| 6 | 3.000 | 0 | 8.000 | 0 | 0 | 11.000 |
| 7 | 0 | 0 | 0 | 4.000 | 1.000 | 5.000 |
| 8 | 0 | 6.000 | 0 | 0 | 1.000 | 7.000 |
| 9 | 3.000 | 0 | 0 | 0 | 1.000 | 4.000 |
| 10 | 0 | 0 | 8.000 | 0 | 2.000 | 10.000 |
| 11 | 3.000 | 0 | 0 | 4.000 | 2.000 | 9.000 |
| 12 | 0 | 6.000 | 0 | 0 | 2.000 | 8.000 |
| **Año 1** | **12.000** | **18.000** | **16.000** | **8.000** | **9.000** | **63.000** |

La estacionalidad es una secuencia prudencial de arranque, no un pipeline. El modelo debe reemplazarse por oportunidades ponderadas en CRM.

## 5. Previsión de ventas a 36 meses

| Mes | Ventas | Mes | Ventas | Mes | Ventas |
|---:|---:|---:|---:|---:|---:|
| 1 | 0 | 13 | 6.000 | 25 | 8.000 |
| 2 | 0 | 14 | 6.000 | 26 | 8.000 |
| 3 | 3.000 | 15 | 7.000 | 27 | 9.000 |
| 4 | 6.000 | 16 | 7.000 | 28 | 9.000 |
| 5 | 0 | 17 | 7.000 | 29 | 9.000 |
| 6 | 11.000 | 18 | 7.000 | 30 | 9.000 |
| 7 | 5.000 | 19 | 7.000 | 31 | 9.000 |
| 8 | 7.000 | 20 | 7.000 | 32 | 10.000 |
| 9 | 4.000 | 21 | 8.000 | 33 | 10.000 |
| 10 | 10.000 | 22 | 8.000 | 34 | 10.000 |
| 11 | 9.000 | 23 | 9.000 | 35 | 11.000 |
| 12 | 8.000 | 24 | 9.200 | 36 | 11.400 |
| **Año 1** | **63.000** | **Año 2** | **88.200** | **Año 3** | **113.400** |

## 6. Costes

### Variables

`[HIPÓTESIS HYP-A10]` El 15 % base agrupa, como techo presupuestario inicial: cloud y licencias repercutibles 4 %, subcontratación 5 %, terceros/comisiones 3 %, viajes 2 % y otros directos 1 %. Cada componente puede ser cero o mayor en un proyecto; manda su presupuesto específico.

### Fijos desembolsables

| Categoría | Año 1 | Estado / comentario |
|---|---:|---|
| Cuota de autónomo | 3.600 | `[HIPÓTESIS]` 300 €/mes; cuantía real `[PENDIENTE]` |
| Gestoría | 1.200 | `[HIPÓTESIS]` |
| Seguros | 600 | `[HIPÓTESIS]` |
| Software y licencias internas | 2.400 | `[HIPÓTESIS]` |
| CRM y prospección | 2.400 | `[HIPÓTESIS]` |
| Dominio/hosting | 300 | `[HIPÓTESIS]` |
| Comunicaciones | 600 | `[HIPÓTESIS]` |
| Formación | 1.200 | `[HIPÓTESIS]` |
| Jurídico, privacidad y seguridad | 1.500 | `[HIPÓTESIS]` |
| Marketing | 2.400 | `[HIPÓTESIS]` |
| Local: electricidad, agua, internet, comunidad, IBI, seguro y mantenimiento | Pendiente | `[PENDIENTE]` contratos, recibos y tratamiento fiscal |
| Otros generales/contingencia | 1.800 | `[HIPÓTESIS]` |
| **Total desembolsable** | **18.000** | `[HIPÓTESIS HYP-A11]` |
| Amortización no desembolsable | 1.500 | `[HIPÓTESIS]` |

Años 2 y 3: `[HIPÓTESIS HYP-A17]` costes fijos desembolsables de 24.000 € y 30.000 €, respectivamente, por mayor comercialización, soporte y colaboración puntual. No se presupone plantilla.

El total histórico de 18.000 € del año 1 y los resultados derivados **no incorporan todavía los costes del local** y dejan de ser escenario completo para presentar. Deben recalcularse cuando existan importes. La compra también modifica amortización y activos; no se fuerza el cálculo sin desglose fiscal.

## 7. Cuenta de explotación a tres años

| Concepto | Año 1 | Año 2 | Año 3 |
|---|---:|---:|---:|
| Ventas | 63.000 | 88.200 | 113.400 |
| Costes variables (15 %) | (9.450) | (13.230) | (17.010) |
| **Margen bruto** | **53.550** | **74.970** | **96.390** |
| Costes fijos desembolsables | (18.000) | (24.000) | (30.000) |
| **EBITDA de gestión** | **35.550** | **50.970** | **66.390** |
| Amortización | (1.500) | (1.500) | (1.500) |
| Intereses | 0 | 0 | 0 |
| **Resultado antes de IRPF** | **34.050** | **49.470** | **64.890** |
| IRPF/pagos personales | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |

No se aplica Impuesto sobre Sociedades: `[NO APLICA]` mientras opere como persona física. El resultado no equivale a caja disponible personal.

## 8. IVA

`[HIPÓTESIS HYP-A16]` A efectos pedagógicos, si todas las operaciones interiores estuvieran sujetas al tipo general del 21 %, el IVA repercutido sería 13.230 €, 18.522 € y 23.814 €. El IVA soportado deducible, reglas de localización, clientes extranjeros, prorrata y calendarios son `[PENDIENTE]`. Por tanto, **no se integra IVA en la tesorería base**: deberá añadirse una subcuenta fiscal validada antes de presentar. La inversión se muestra sin IVA y su financiación real deberá contemplar el desfase que corresponda.

## 9. Tesorería mensual del año 1

Supone fondo disponible de 4.000 €, inversión de puesta en marcha pagada antes del mes 1, cobro al mes siguiente y costes variables pagados en el mes de venta. No incluye IVA, IRPF ni retiradas personales.

| Mes | Caja inicial | Cobros | Coste variable | Fijos | Caja final |
|---:|---:|---:|---:|---:|---:|
| 1 | 4.000 | 0 | 0 | 1.500 | 2.500 |
| 2 | 2.500 | 0 | 0 | 1.500 | 1.000 |
| 3 | 1.000 | 0 | 450 | 1.500 | **(950)** |
| 4 | (950) | 3.000 | 900 | 1.500 | (350) |
| 5 | (350) | 6.000 | 0 | 1.500 | 4.150 |
| 6 | 4.150 | 0 | 1.650 | 1.500 | 1.000 |
| 7 | 1.000 | 11.000 | 750 | 1.500 | 9.750 |
| 8 | 9.750 | 5.000 | 1.050 | 1.500 | 12.200 |
| 9 | 12.200 | 7.000 | 600 | 1.500 | 17.100 |
| 10 | 17.100 | 4.000 | 1.500 | 1.500 | 18.100 |
| 11 | 18.100 | 10.000 | 1.350 | 1.500 | 25.250 |
| 12 | 25.250 | 9.000 | 1.200 | 1.500 | **31.550** |
| **Total flujo** |  | **55.000** | **9.450** | **18.000** |  |

La necesidad máxima al cierre es 950 €, pero se fija `[HIPÓTESIS]` **1.950 €** incluyendo un colchón de 1.000 €. El fondo de 4.000 € ofrece **2,67 meses** de autonomía sobre costes fijos desembolsables de 1.500 €/mes, antes de variables e impuestos. Un descubierto no es financiación aprobada: si no se elevan fondos, deben anticiparse cobros o retrasarse costes.

Esta tabla histórica tampoco incorpora la retirada personal prevista de 800 €/mes (9.600 €/año). Es una **salida personal de tesorería del promotor**, nunca salario, gasto operativo o coste laboral. Si se aplicara sin modificar las demás hipótesis, reduciría la caja final mostrada en 9.600 €, además de los costes del local y adquisición aún pendientes. La concentración de recursos en el inmueble impide afirmar hoy que exista liquidez suficiente para gastos accesorios, acondicionamiento, equipo, actividad corriente y primeros meses.

## 10. Tesorería anual años 2 y 3

| Concepto | Año 2 | Año 3 |
|---|---:|---:|
| Caja inicial | 31.550 | 81.320 |
| Cobros (incluye diciembre anterior; excluye diciembre corriente) | 87.000 | 111.200 |
| Costes variables | (13.230) | (17.010) |
| Costes fijos desembolsables | (24.000) | (30.000) |
| Inversión/deuda/impuestos | 0 / 0 / `[PENDIENTE]` | 0 / 0 / `[PENDIENTE]` |
| **Caja final antes de fiscalidad y retiradas** | **81.320** | **145.510** |

## 11. Balance económico de gestión

Como profesional autónomo, el balance mercantil societario y capital social son `[NO APLICA]`. Para controlar solvencia se presenta una fotografía simplificada, no cuentas anuales ni patrimonio personal.

| Concepto | Cierre A1 | Cierre A2 | Cierre A3 |
|---|---:|---:|---:|
| Caja antes de fiscalidad/retiradas | 31.550 | 81.320 | 145.510 |
| Clientes (venta diciembre pendiente) | 8.000 | 9.200 | 11.400 |
| Inmovilizado neto aproximado | 3.000 | 1.500 | 0 |
| **Activos de gestión** | **42.550** | **92.020** | **156.910** |
| Deuda financiera | 0 | 0 | 0 |
| Obligaciones fiscales | `[PENDIENTE]` | `[PENDIENTE]` | `[PENDIENTE]` |
| Patrimonio/resultado acumulado de gestión | `[NO CALCULABLE]` | `[NO CALCULABLE]` | `[NO CALCULABLE]` |

No se fuerza la igualdad contable porque faltan impuestos, aportaciones/retiradas y clasificación fiscal. Un balance formal solo se elaborará si resulta exigible o se constituye sociedad.

## 12. Ratios, punto de equilibrio y devolución

| Indicador | A1 base | Lectura |
|---|---:|---|
| Margen de contribución | 85 % | `(63.000−9.450)/63.000` |
| Punto de equilibrio | 22.941 | `(18.000+1.500)/0,85` |
| Holgura sobre equilibrio | 40.059 | Ventas menos umbral |
| Cash flow operativo | 35.550 | 34.050 + 1.500 |
| Fondo de maniobra antes de fiscalidad | 39.550 | 31.550 + 8.000 − 0 |
| Endeudamiento financiero | 0 % | Sin préstamo en escenario |
| Liquidez | `[NO CALCULABLE]` | Pasivo corriente fiscal pendiente |
| Rentabilidad económica aproximada | 160,05 % | 34.050 / activo medio aproximado 21.275; elevada por modelo ligero y no comparable sin fiscalidad |
| Rentabilidad financiera | `[NO APLICA]` | No hay capital social/patrimonio empresarial separado |
| Capacidad de devolución | `[NO APLICA]` | Servicio de deuda cero |

Si se solicita deuda, se incorporará tabla mensual de principal/interés y se exigirá ratio `(resultado + amortización)/servicio de deuda > 1`, con margen fijado por el financiador. Hoy no se simula un préstamo inexistente.

## 13. Escenarios y sensibilidad

| Concepto A1 | Conservador | Base | Crecimiento |
|---|---:|---:|---:|
| Ventas | 44.100 | 63.000 | 85.050 |
| Coste variable | 7.938 (18 %) | 9.450 (15 %) | 17.010 (20 %) |
| Fijos + amortización | 19.500 | 19.500 | 25.500 |
| **Resultado antes de IRPF** | **16.662** | **34.050** | **42.540** |
| Condición | −30 % ventas | Unidades base | +35 % ventas y 6.000 € extra de capacidad |

Todos son `[HIPÓTESIS HYP-A13]`. El crecimiento exige comprobar horas y subcontratar solo con contrato/margen.

Sensibilidades del base A1:

- ventas −20 %, costes restantes iguales: ventas 50.400 €, variables 7.560 €, resultado 23.340 €;
- costes variables y fijos desembolsables +20 %, ventas iguales: variables 11.340 €, fijos 21.600 €, resultado 28.560 €;
- combinación ventas −20 % y todos esos costes +20 %: resultado 17.148 €.

## 14. Controles manuales y decisiones de uso

1. Confirmar que unidades, horas y mensualidades caben en la capacidad.
2. Sustituir porcentajes variables por presupuesto de cada proyecto.
3. Integrar IVA, IRPF, cuota real, cobros parciales y retiradas.
4. Reconciliar fuentes y usos; incorporar deuda solo con oferta.
5. Revisar mensual: pipeline ponderado, ventas, margen, caja y concentración.
6. No considerar beneficio base como garantía ni usar este borrador para acreditar solvencia.
