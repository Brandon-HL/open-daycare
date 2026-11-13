# SPEC 02 — Listado y perfiles visuales de niños

> **Status:** Implementado
> **Depends on:** SPEC 01
> **Date:** 2026-11-11
> **Objective:** Reproducir las interfaces de listado y perfil de niños de las referencias, con ocho perfiles estáticos, búsqueda local y navegación entre las pantallas.

## Alcance

**Incluye:**

- `/kids` reproduce `references/pantallas/ninos.dc.html` con ocho tarjetas y búsqueda por nombre en el navegador.
- `/kids/[id]` reproduce `references/pantallas/perfil-nino.dc.html` para cada niño, con IDs numéricos del 1 al 8 según el orden del listado: Mateo, Sofía, Benjamín, Valentina, Tomás, Emma, Lucas y Olivia.
- El perfil de Mateo conserva los datos visibles en la referencia. Los otros siete usan datos ficticios para fechas y padres, coherentes con la edad y el número de padres que indica cada tarjeta. Solo Mateo y Tomás muestran las alertas indicadas en el listado.
- El menú lateral se comparte entre `/`, `/kids` y los perfiles, con navegación real entre Feed y Niños y el estado activo correspondiente.
- En móvil se muestran enlaces compactos Feed/Niños; las tarjetas y los paneles del perfil se adaptan sin desplazamiento horizontal.

**Fuera de alcance:**

- Backend, base de datos, persistencia, autenticación y edición de datos.
- Pantallas de Agregar niño, Editar, Resumen del día, Vincular padre y Nueva publicación. Sus controles conservan el aspecto de la referencia sin simular acciones ni enlazar a rutas inexistentes.
- Alterar el contenido de las publicaciones del feed o los archivos de `references/`.

## Datos

`app/datos/ninos.ts` contiene los ocho registros estáticos utilizados por listado y perfiles. Cada registro tiene `id` numérico, nombre, edad mostrada, inicial y colores del avatar, fecha de nacimiento, sala, ingreso, padres vinculados y alerta opcional. Cada padre tiene nombre, vínculo y estado. Mateo conserva la fecha, los padres y sus estados de la referencia; Valentina tiene cero padres vinculados. Los datos restantes son ficticios y no se guardan entre sesiones.

## Plan de implementación

1. Extraer el icono y el menú del feed a `app/componentes/icono.tsx` y `app/componentes/barra-lateral.tsx`. Actualizar `app/page.tsx` para reutilizarlos y enlazar `/kids`, sin cambiar la composición del feed.
2. Crear `app/datos/ninos.ts` y `app/componentes/tarjeta-nino.tsx`. Crear `app/kids/page.tsx` con el listado estático y sus ocho enlaces a perfiles; la búsqueda interactiva vive en un componente cliente acotado al listado.
3. Crear `app/componentes/perfil-nino.tsx` y `app/kids/[id]/page.tsx` con un perfil por ID y el enlace de retorno a `/kids`. Los IDs que no existan presentan 404.
4. Crear `app/componentes/navegacion-movil.tsx` y usarlo en las tres vistas. Ajustar la disposición responsiva de listado y perfil mediante Tailwind 4; modificar `app/globals.css` solo si un estilo compartido lo requiere.

## Criterios de aceptación

- [x] `/kids` muestra los ocho niños en el orden de la referencia, con sus nombres, edades, recuentos de padres, avatares y etiquetas. A 1440 × 900 px presenta dos columnas y un menú lateral de 248 px.
- [x] La búsqueda filtra las tarjetas mientras se escribe por nombre, sin distinguir mayúsculas ni tildes. Actualiza el contador, muestra un estado sin resultados y vuelve a mostrar ocho niños al borrar el texto; no hace solicitudes a un backend.
- [x] Cada tarjeta abre su propio perfil en `/kids/1` a `/kids/8`; los ocho perfiles muestran el nombre correcto y un ID desconocido devuelve 404.
- [x] `/kids/1` muestra la cabecera, alerta de maní, datos generales y padres Lucía y Diego con los estados y textos presentes en `perfil-nino.dc.html`.
- [x] Los otros siete perfiles muestran sus datos de demostración sin atribuirles la información de Mateo; solo Mateo y Tomás tienen alertas destacadas, y Valentina no muestra padres vinculados.
- [x] El menú lateral enlaza Feed y Niños y resalta la sección correspondiente; en escritorio `/` permite ir a `/kids`. El enlace «Volver a Niños» desde cada perfil regresa al listado.
- [x] A 390 × 844 px hay navegación compacta entre Feed y Niños, las tarjetas forman una columna, los paneles del perfil se apilan y `document.documentElement.scrollWidth` no supera el ancho de la ventana.
- [x] Los controles de acciones fuera de alcance son únicamente decorativos: no navegan a rutas inexistentes ni aparentan ejecutar una operación.
- [x] `npm run build` termina correctamente y los archivos modificados pasan ESLint; el fallo legado de `references/pantallas/support.js` queda fuera de alcance.

## Decisiones

- **Sí:** ocho rutas de perfil con IDs numéricos y datos estáticos. **No:** integrar servicios ni persistencia; esta entrega es solo de interfaz.
- **Sí:** búsqueda local interactiva. **No:** búsqueda en servidor.
- **Sí:** compartir el menú y actualizar `/` únicamente para habilitar la navegación. **No:** duplicar el lateral ni rediseñar el feed.
- **Sí:** navegación compacta móvil. **No:** dejar `/kids` inaccesible desde el feed en pantallas pequeñas.
- **Sí:** datos ficticios para completar los perfiles. **No:** inventar alertas médicas adicionales a maní y lactosa.

## Riesgos

Los perfiles ficticios podrían confundirse con registros reales. Se mantendrán como contenido estático de demostración, sin almacenamiento ni conexión con servicios.

## No incluido en esta spec

Gestión real de niños o padres, formularios, publicaciones, autenticación y las demás pantallas enlazadas por las referencias.
