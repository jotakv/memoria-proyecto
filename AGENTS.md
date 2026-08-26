# AGENTS.md — Reglas de agentes para este repositorio

## Misión

Mantener `capitalizarParo` como expediente maestro para:

1. capitalización de prestación contributiva ante SEPE;
2. financiación del local mediante banco/Avalmadrid;
3. evolución posterior de SOMA OS para aceleradoras e inversión.

## Prioridad documental

1. `docs/STATUS.md`
2. `docs/OPEN_QUESTIONS.md`
3. `docs/ASSUMPTIONS.md`
4. `docs/DECISION_LOG.md`
5. `research/FUENTES_OFICIALES.md`
6. `memoria-sepe/MEMORIA_COMPLETA_SEPE.md`
7. `financial-model/`
8. `local/`
9. `legal/`
10. `technology/`

## Reglas no negociables

- No inventar datos.
- Etiquetar toda cifra o afirmación material como `[CONFIRMADO]`, `[ESTIMADO]`, `[BENCHMARK]`, `[HIPÓTESIS]` o `[PENDIENTE]` cuando su estado no sea obvio.
- No transformar estimaciones en hechos.
- Toda cifra financiera no confirmada debe apuntar a una hipótesis en `docs/ASSUMPTIONS.md`.
- Toda decisión material debe registrarse en `docs/DECISION_LOG.md`.
- Toda modificación importante debe actualizar `docs/CHANGELOG.md`.
- Toda iteración debe revisar y actualizar `docs/STATUS.md`.
- Priorizar fuentes oficiales para normativa, fiscalidad, procedimientos, ayudas y financiación pública.
- El local se describe como infraestructura productiva directamente afecta a la actividad; nunca como inversión inmobiliaria pasiva ante SEPE.
- En el escenario bancario base, `SOMA OS = 0 €`.
- No asumir viabilidad urbanística, licencia o cualificación profesional sin evidencia.
- No subir documentación personal sensible al repositorio público sin revisar privacidad.

## Forma de trabajo

- Leer antes de escribir.
- Reutilizar estructura existente; no crear duplicados sin necesidad.
- Mantener cambios pequeños, semánticos y trazables.
- Si un dato falta, mantener `[PENDIENTE]` y añadirlo a `OPEN_QUESTIONS`.
- Si una fuente cambia, actualizar los documentos que dependan de ella.

## Prompts operativos

Usar `prompts/00_MASTER_AGENT.md` como entrada para iteración integral y los prompts especializados para auditorías específicas.
