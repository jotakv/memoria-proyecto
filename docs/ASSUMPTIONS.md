# Registro de hipótesis

**Última actualización:** 2026-08-29

Toda cifra no confirmada es revisable; no equivale a venta, concesión, contrato o pago. Los importes son IVA incluido cuando proceda solo si así figura en la proforma; el tratamiento fiscal está [PENDIENTE].

| ID | Hipótesis / valor | Estado y validación |
|---|---|---|
| HYP-A01 | Auditoría: 2.500–4.000 € | [HIPÓTESIS], validar mercado/alcance |
| HYP-A02 | Sprint: 5.000–9.000 € | [HIPÓTESIS], validar mercado/costes |
| HYP-A03 | Mantenimiento: 2.000–5.000 €/mes | [HIPÓTESIS], validar SLA/capacidad |
| HYP-A08 | Cobro medio a 30 días | [HIPÓTESIS], validar contratos |
| HYP-A10 | Coste variable: 18 % conservador, 15 % base, 20 % optimista | [HIPÓTESIS], validar por proyecto |
| HYP-A12 | Ventas año 1: 44.100/63.000/85.050 € (conservador/base/optimista) | [HIPÓTESIS], sin clientes ni contratos |
| HYP-A15 | Capacidad 120 h/mes; 70 % facturable | [HIPÓTESIS], validar agenda |
| HYP-A16 | IVA 21 % solo para mecánica | [HIPÓTESIS], asesor debe validar |
| HYP-L01 | Precio ofertado del local: 40.000 € | [ESTIMADO — FICHA COMERCIAL], no precio pactado |
| HYP-L02 | Pago único aproximado: 29.000 € | [ESTIMADO — PENDIENTE DE RESOLUCIÓN], destino exclusivo al precio |
| HYP-L03 | Fondos propios: 12.000 € | [CONFIRMADO POR DECLARACIÓN], acreditación bancaria [PENDIENTE] |
| HYP-L04 | Superficie: ficha 60 m² construidos; otra referencia 41 m² | [PENDIENTE], comprobar Catastro/nota simple/plano |
| HYP-L05 | Mobiliario 477,56 €; equipo 1.317,48 €; gestoría 943,80 €; total 2.738,84 € | [ESTIMADO — PROFORMAS], no adquirido ni pagado |
| HYP-L06 | Retirada personal 800 €/mes | [CONFIRMADO COMO PREVISIÓN], salida de caja, no gasto |
| HYP-L07 | Alta fiscal, RETA e inicio: 15/10/2026 | [ESTIMADO], condicionado al expediente |
| HYP-L08 | Costes de local, obras, tributos, notaría, Registro, agencia, licencias y circulante | [PENDIENTE], no se asigna importe sin evidencia |
| HYP-L09 | Cuota RETA 80 €/mes usada solo como escenario de cálculo | [HIPÓTESIS], sustituir por dato TGSS aplicable |
| HYP-L10 | Otros costes desembolsables conocidos del antiguo escenario: 1.420 €/mes, excluido RETA y costes locales | [HIPÓTESIS], desglose: gestoría 100, licencias/cloud 400, marketing 250 y otros operativos/mantenimiento no inmobiliario 670; validar presupuestos |

## Fórmulas de control

- Precio: 29.000 € [ESTIMADO — PENDIENTE DE RESOLUCIÓN] + 11.000 € propios = 40.000 € [ESTIMADO — FICHA].
- Fondos propios remanentes: 12.000 − 11.000 = 1.000 €.
- Brecha mínima ya cuantificable: 2.738,84 − 1.000 = **1.738,84 €**, antes de impuestos, gastos de compra, obras y circulante.
- Punto de equilibrio mensual provisional base: `(1.420 + 80 + costes mensuales del local + amortización) / (1 − 15 %)`. Al faltar costes locales y amortización, no existe un punto definitivo.
