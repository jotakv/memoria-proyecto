# Allsetic AI Automation Studio — expediente maestro

Repositorio documental del proyecto de autoempleo y de su eventual solicitud de capitalización ante el SEPE.

## Fuente de verdad y estado documental

- **Memoria SEPE canónica, vigente y presentable:** [`MEMORIA_SEPE_PRESENTACION_FINAL.md`](MEMORIA_SEPE_PRESENTACION_FINAL.md).
- **Aplicación pública derivada:** [`docs/memoria-descriptiva-allsetic.md`](docs/memoria-descriptiva-allsetic.md); debe mantenerse coherente con la memoria SEPE, pero no la sustituye.
- **Clasificación completa:** [`docs/DOCUMENT_REGISTER.md`](docs/DOCUMENT_REGISTER.md).
- **Estado y pendientes:** [`docs/STATUS.md`](docs/STATUS.md) y [`docs/OPEN_QUESTIONS.md`](docs/OPEN_QUESTIONS.md).

La versión vigente estudia cuatro alternativas —Águilas, Castellón, Talavera de la Reina y El Ejido—, sin selección, reserva, arras ni compra. Los PDF y demás documentos de terceros son evidencia original y no se editan.

## Cifras vigentes

| Concepto | Estado | Importe |
|---|---|---:|
| Fondos propios nominalmente documentados | `[CONFIRMADO]` BBVA 12.653,67 € + ING 9.603,95 € | **22.257,62 €** |
| Pago único SEPE | `[ESTIMADO / PENDIENTE DE RESOLUCIÓN / NO CONCEDIDO / NO COBRADO]` | **29.000,00 €** |
| Fuentes previstas | `[CÁLCULO]` | **51.257,62 €** |
| Escenario estadístico de inversión | `[ESTIMADO]` | **46.370,52 €** |
| Remanente aritmético | `[CÁLCULO]`; no demuestra circulante suficiente | **4.887,10 €** |
| Prueba limitada de circulante | `[HIPÓTESIS]` | **7.200,00 €** |
| Diferencia de control | `[CÁLCULO]`; señal de riesgo, no déficit definitivo | **2.312,90 €** |

## Desarrollo y validación

```bash
npm install
npm run check
```

`npm run build` genera `index.html` y `dist/` desde `docs/memoria-descriptiva-allsetic.md`; no se edita `index.html` manualmente. No se generan ni versionan DOCX/PDF: los binarios existentes son evidencias originales preservadas.
