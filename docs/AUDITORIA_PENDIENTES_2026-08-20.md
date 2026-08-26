# AUDITORÍA DE MARCADORES `[PENDIENTE]`

Fecha de corte: 2026-08-20  
Rama remota revisada: `main` de `jotakv/capitalizarParo`  
Commit de partida: `afb5f475b213b9313a35780967f53f83148416c7`

## Inventario de partida

- 435 apariciones léxicas de `[PENDIENTE`.
- 270 líneas afectadas.
- 38 archivos afectados.
- 13 apariciones son metamarcadores en reglas, prompts o avisos y no representan un dato faltante.
- Las demás apariciones contienen duplicados entre memoria, capítulos, modelo y preguntas abiertas; no equivalen a 422 decisiones distintas.

## Clasificación y resolución

### 1. Resolubles con documentación existente

| Hueco | Acción | Resultado |
|---|---|---|
| Separar cifras verificadas de hipótesis | Se creó una vista doble en `financial-model/FUENTES_Y_USOS.md` | RESUELTO ESTRUCTURALMENTE |
| Crear índice de anexos y trazabilidad | Se creó `evidence/INDICE_ANEXOS_Y_TRAZABILIDAD.md` | RESUELTO ESTRUCTURALMENTE |
| Crear matriz actividad → cumplimiento | Se reutilizó HYP-009 sin elevarla a hecho y se creó `legal/MATRIZ_ACTIVIDAD_CUMPLIMIENTO.md` | RESUELTO ESTRUCTURALMENTE; contenido material pendiente |
| Estado de privacidad del repositorio | GitHub confirma que el repositorio es privado; se corrigió `evidence/README.md` | RESUELTO |

### 2. Resolubles con fuentes oficiales

| Hueco | Fuente | Resultado |
|---|---|---|
| Orden solicitud → alta/inicio → resolución/ejecución → justificación | SEPE y art. 34 Ley 20/2007 | RESUELTO como regla general; fechas personales pendientes |
| Categorías generales de inversión y prueba | SEPE, art. 34 Ley 20/2007 y página de justificación | RESUELTO en matriz; admisión concreta pendiente |

### 3. Resolubles con cálculo reproducible

| Hueco | Cálculo | Resultado |
|---|---|---|
| Conciliación preliminar de fuentes y usos | Fuentes hipotéticas = 28.000 + 12.000 + 60.000–70.000 = 100.000–110.000 €; usos = 100.000 € + `U` | RESUELTO el método y la alerta; importe final pendiente |

### 4. Inferencia razonable

No se ha utilizado ninguna inferencia nueva. La iteración no añade hipótesis ni modifica los valores HYP existentes.

### 5. Requieren decisión o dato del promotor

Se conservan como `[PENDIENTE]`, agrupados en:

1. resolución de prestación, saldo y resultado del procedimiento laboral;
2. identidad/documentación de promotor para la versión final y CV/certificaciones;
3. forma jurídica y estructura comprador-beneficiario-explotador;
4. local, precio, título, superficie, tasación, comparables y due diligence;
5. licencias, aforo, acústica, accesibilidad, cualificaciones, seguros y responsables;
6. presupuestos CAPEX/OPEX, proveedores, salarios/honorarios y financiación;
7. MVP, horarios, sesiones, pricing, demanda, clientes y mercado;
8. cash-flow, break-even, DSCR y estrés, porque sus inputs siguen sin soporte;
9. stack y métricas comerciales futuras de SOMA OS.

## Administración hostil

Una lectura adversa seguiría objetando: compra frente a alquiler no cuantificada, riesgo patrimonial, financiación no acreditada, local no validado, actividad demasiado amplia y ausencia de modelo físico completo. Ninguno de esos huecos se ha cerrado con lenguaje persuasivo; siguen ligados a evidencia externa.

## Fuentes verificadas

- SEPE — `Capitaliza tu prestación`, consultada 2026-08-20.
- SEPE — `Persona trabajadora autónoma`, consultada 2026-08-20.
- SEPE — `Socio o socia de entidad mercantil`, consultada 2026-08-20.
- SEPE — FAQ de gastos de inversión y justificación, consultadas 2026-08-20.
- BOE — Ley 20/2007, art. 34, texto consolidado consultado 2026-08-20.
- BOE — Real Decreto 1044/1985, texto consolidado consultado 2026-08-20.


