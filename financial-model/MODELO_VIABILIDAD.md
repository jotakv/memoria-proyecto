# Modelo de viabilidad con local propio

**Corte:** 2026-08-29 · Importes sin IVA salvo proformas · Todo escenario es `[HIPÓTESIS]`.

## Variables

- Ventas mes base: 0, 0, 3.000, 6.000, 0, 11.000, 5.000, 7.000, 4.000, 10.000, 9.000, 8.000 = **63.000 €**.
- Coste variable base: 15 %.
- Costes operativos conocidos de cálculo: 1.500 €/mes `[HIPÓTESIS HYP-L09/L10]` (incluye RETA 80 y otros 1.420).
- Costes locales, obras y amortización: `[PENDIENTE]`; se muestran como **L** €/mes y no se inventan.
- Retirada personal: 800 €/mes, solo caja.
- Cobro: al mes siguiente `[HIPÓTESIS HYP-A08]`.
- Caja inicial disponible tras precio y 1.000 € aplicado a proformas: **0 €**. La compra consume los 41.000 € identificados y el remanente propio.

## Tesorería base de doce meses antes de L, fiscalidad y compra de partidas pendientes

| Mes | Ventas | Cobros | Variable 15 % | Operación | Retirada | Flujo antes de L | Caja acumulada antes de L |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 0 | 0 | 0 | 1.500 | 800 | -2.300 | -2.300 |
| 2 | 0 | 0 | 0 | 1.500 | 800 | -2.300 | -4.600 |
| 3 | 3.000 | 0 | 450 | 1.500 | 800 | -2.750 | -7.350 |
| 4 | 6.000 | 3.000 | 900 | 1.500 | 800 | -200 | -7.550 |
| 5 | 0 | 6.000 | 0 | 1.500 | 800 | 3.700 | -3.850 |
| 6 | 11.000 | 0 | 1.650 | 1.500 | 800 | -3.950 | -7.800 |
| 7 | 5.000 | 11.000 | 750 | 1.500 | 800 | 7.950 | 150 |
| 8 | 7.000 | 5.000 | 1.050 | 1.500 | 800 | 1.650 | 1.800 |
| 9 | 4.000 | 7.000 | 600 | 1.500 | 800 | 4.100 | 5.900 |
| 10 | 10.000 | 4.000 | 1.500 | 1.500 | 800 | 200 | 6.100 |
| 11 | 9.000 | 10.000 | 1.350 | 1.500 | 800 | 6.350 | 12.450 |
| 12 | 8.000 | 9.000 | 1.200 | 1.500 | 800 | 5.500 | 17.950 |

La caja real será `caja mostrada − (mes × L) − impuestos − inversiones pendientes`. Ya sin L alcanza un mínimo de **−7.800 €** en mes 6. Por tanto, la actividad no puede operar con los fondos hoy identificados tras la compra: se requiere financiación adicional/circulante, anticipos o aplazar la operación.

## Escenarios anuales

| Escenario | Ventas | Variable | Operación conocida | Retirada (caja) | Flujo antes de L, amortización e impuestos |
|---|---:|---:|---:|---:|---:|
| Conservador | 44.100 | 7.938 (18 %) | 18.000 | 9.600 | 8.562 |
| Base | 63.000 | 9.450 (15 %) | 18.000 | 9.600 | 25.950 |
| Optimista | 85.050 | 17.010 (20 %) | 24.000 | 9.600 | 34.440 |

El optimista añade 6.000 € de capacidad operativa. No hay clientes ni ventas acreditados.

## Punto de equilibrio

- Operativo base antes del local/amortización: `18.000 / 0,85 = 21.176,47 €/año`.
- Incluyendo retirada para necesidad de caja, no como gasto: `(18.000 + 9.600) / 0,85 = 32.470,59 €/año`.
- Definitivo: `(18.000 + 12L + amortización anual) / 0,85`; queda `[PENDIENTE]`.

## Tres años (solo si se mantienen hipótesis)

Ventas base A1/A2/A3: 63.000/88.200/113.400 € `[HIPÓTESIS]`. No se publica resultado definitivo a tres años porque L, IBI, seguro, mantenimiento, obras, amortización, fiscalidad y reinversión carecen de base. Se recalculará al obtener documentos.
