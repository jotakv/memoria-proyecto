# AGENTS.md — Reglas de agentes para este repositorio

## Misión

Mantener **Allsetic AI Automation Studio** como expediente maestro para:

1. memoria descriptiva y eventual capitalización de la prestación contributiva ante el SEPE;
2. presentación profesional ante entidades financieras, convocatorias, partners, colaboradores y clientes;
3. evolución documentada de la consultoría técnica hacia servicios recurrentes y, solo con evidencia, una microagencia o productos propios.

## Prioridad documental

1. `docs/STATUS.md`
2. `docs/OPEN_QUESTIONS.md`
3. `docs/ASSUMPTIONS.md`
4. `docs/DECISION_LOG.md`
5. `research/FUENTES_OFICIALES.md`
6. `docs/memoria-descriptiva-allsetic.md`
7. `financial-model/`
8. `legal/`
9. `technology/ARCHITECTURE.md`

## Reglas no negociables

- No inventar datos, clientes, contratos, facturación, ayudas, certificaciones, experiencia ni métricas.
- Etiquetar toda cifra o afirmación material como `[CONFIRMADO]`, `[ESTIMADO]`, `[BENCHMARK]`, `[HIPÓTESIS]` o `[PENDIENTE]` cuando su estado no sea obvio.
- No transformar estimaciones, objetivos o precios orientativos en hechos.
- Toda cifra financiera no confirmada debe apuntar a una hipótesis en `docs/ASSUMPTIONS.md`.
- Toda decisión material debe registrarse en `docs/DECISION_LOG.md`.
- Toda modificación importante debe actualizar `docs/CHANGELOG.md` y `docs/STATUS.md`.
- Priorizar fuentes oficiales para normativa, fiscalidad, procedimientos y financiación pública.
- No afirmar admisibilidad de una inversión ante el SEPE sin fuente y aplicación al caso concreto.
- La actividad inicial se describe como consultoría técnica con una importante componente remota y sede profesional propia prevista; la adquisición y afectación exclusiva del local permanecen condicionadas a verificación y financiación.
- Mantener `docs/memoria-descriptiva-allsetic.md` como fuente canónica del contenido público.
- No incorporar secretos ni documentación personal sensible a la versión pública.
- No crear, modificar ni incluir binarios en cambios, commits o Pull Requests. Los PDF oficiales ya versionados permanecen intactos.

## Forma de trabajo

- Leer antes de escribir y reutilizar la estructura existente.
- Mantener cambios semánticos, trazables y verificables.
- Si falta un dato, conservar `[PENDIENTE]` y añadirlo a `docs/OPEN_QUESTIONS.md`.
- Si cambia una fuente, actualizar todos los documentos que dependan de ella.
- Generar la aplicación desde la memoria canónica mediante `npm run build`; no editar a mano contenido duplicado en `index.html`.
- Antes de cerrar una iteración, ejecutar los comandos disponibles de validación, revisar el diff y buscar referencias incompatibles.

## Prompt operativo

Usar `prompts/00_MASTER_AGENT.md` como entrada para una iteración integral.
