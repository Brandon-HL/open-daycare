# SPEC 01 — Feed visual en `/`

> **Status:** Aprobado
> **Depends on:** Ninguna
> **Date:** 2026-11-10
> **Objective:** Reproducir en la página de inicio la apariencia de `references/pantallas/feed.dc.html` con Tailwind 4, contenido fijo y adaptación móvil.

## Alcance

**Incluye:**

- Menú, encabezado y tres publicaciones con los textos, iconos y contadores de la referencia.
- Diseño de escritorio lo más fiel posible en tipografías, colores, medidas y distribución.
- Adaptación móvil sin desplazamiento horizontal.

**Fuera de alcance:**

- Autenticación, base de datos, persistencia y publicaciones reales.
- Rutas para las demás pantallas o acciones funcionales para sus controles.

## Datos

No se introduce un modelo de datos. La fecha, los nombres, las publicaciones y los contadores serán fijos, tal como aparecen en la referencia.

## Plan de implementación

1. Sustituir el contenido inicial de `app/page.tsx` por el feed estático.
2. Configurar Fredoka, Nunito, idioma español y metadatos en `app/layout.tsx`.
3. Usar las utilidades de Tailwind 4 en `app/page.tsx` para el diseño y la adaptación móvil. Preferir valores cercanos de su escala y usar valores personalizados cuando una medida o color distintivo lo requiera.
4. Ajustar `app/globals.css` para eliminar estilos iniciales que contradigan la referencia, sin añadir configuración de Tailwind v3.
5. Compilar y comparar visualmente `/` en escritorio y móvil. Guardar cualquier captura de Playwright en `.playwright-mcp/`.

## Criterios de aceptación

- [ ] `/` muestra el contenido de la referencia y no la página inicial de Next.js.
- [ ] A 1440 × 900 px se reproducen el menú lateral de 248 px, la columna de hasta 760 px, la paleta y las tipografías de la referencia.
- [ ] A 390 × 844 px todo el contenido es legible y no hay desplazamiento horizontal.
- [ ] Ningún elemento conduce a una ruta inexistente ni aparenta ejecutar una acción real.
- [ ] `npm run build` termina correctamente.
- [ ] Los archivos modificados pasan ESLint; el fallo legado de `references/pantallas/support.js` queda fuera del alcance.

## Decisiones

- **Tailwind 4:** ya está instalado; no se creará un CSS Module para esta página.
- **Contenido fijo:** preserva la apariencia de la referencia; se descarta la fecha dinámica.
- **Controles solo visuales:** se descartan rutas provisionales y enlaces a los HTML de `references/`.
- **Adaptación móvil:** se evita el desbordamiento sin alterar la disposición de escritorio.

## Riesgos

La compilación de fuentes de Google puede requerir conectividad. No se sustituirán las tipografías silenciosamente.

## No incluido en esta spec

Autenticación, datos persistentes, publicación o edición real, y construcción de las otras pantallas.
