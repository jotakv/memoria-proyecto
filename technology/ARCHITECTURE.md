# Arquitectura de la memoria web

## Contexto

El repositorio no contenía aplicación, framework, gestor de paquetes ni lockfile. La solución se implementa como sitio estático sin dependencias de producción y respeta el carácter documental del proyecto.

## Fuente y flujo

```text
docs/memoria-descriptiva-allsetic.md
              |
              v
       scripts/build.mjs
        /            \
       v              v
 index.html         dist/
       |
       +-- assets/styles.css
       +-- assets/app.js
```

`docs/memoria-descriptiva-allsetic.md` es la única fuente editorial. El generador interpreta los elementos Markdown utilizados, crea la navegación de 22 secciones y añade metadatos y controles de impresión.

## Componentes

- **Shell editorial:** cabecera, wordmark, metadatos del expediente y acciones.
- **Navegación:** índice de secciones, menú móvil y estado activo progresivo.
- **Contenido:** secciones, subsecciones, listas, tablas, destacados y línea temporal.
- **Leyenda documental:** estados confirmado, hipótesis y pendiente.
- **Impresión:** cabecera documental, ocultación de controles, A4, contraste y control de cortes.

## Decisiones técnicas

- HTML semántico, CSS y JavaScript nativos.
- JavaScript como mejora progresiva; los enlaces internos funcionan sin él.
- Sin almacenamiento, autenticación, backend ni datos de terceros.
- Sin imágenes, iconos binarios, fuentes remotas ni telemetría.
- `manifest.webmanifest` textual y metadatos SEO/Open Graph sin imagen inventada.
- Tests Node para estructura, coherencia, referencias y build.

## Accesibilidad y responsive

- enlace para saltar al contenido;
- navegación y controles con etiquetas accesibles;
- foco visible y respeto a `prefers-reduced-motion`;
- tablas con desplazamiento horizontal en pantallas estrechas;
- menú móvil controlable por teclado;
- contraste revisable y estilos independientes de impresión.
