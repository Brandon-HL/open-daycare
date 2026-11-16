# SPEC 04 — Formulario para agregar niño

> **Status:** Implementado
> **Depends on:** SPEC 02
> **Date:** 2026-11-13
> **Objective:** Reproducir la pantalla «Agregar niño» con validación de fecha y selección de sala, como formulario de demostración sin guardar datos.

## Alcance

**Incluye:**

- Crear `/kids/new` siguiendo `references/pantallas/agregar-nino.dc.html` y adaptar la pantalla a móvil.
- Convertir «Agregar niño» en `/kids` en un enlace al formulario. «Cancelar» vuelve a `/kids`.
- Mostrar nombre, fecha de nacimiento, sala, alergias y notas médicas. Nombre, fecha y sala son obligatorios; alergias y notas son opcionales.
- Ofrecer **Soles** y **Lunas** en el selector, con Soles preseleccionada.
- Introducir la fecha como `dd/mm/aaaa`. Rechazar fechas inexistentes —incluidos días inválidos en años bisiestos— y fechas futuras. Mostrar los errores bajo el campo correspondiente sin borrar lo ingresado.
- Al pulsar «Guardar» con datos válidos, mostrar un diálogo que indique que **no se guardó ningún niño**. Al aceptarlo, volver a `/kids`.

**Fuera de alcance:** persistencia, backend, creación de perfiles, modificación de los ocho niños existentes y etiquetas de alergias interactivas.

## Datos

El estado del formulario contiene `nombre`, `fechaNacimiento`, `sala`, `alergias` y `notasMedicas`, todos como texto; `sala` admite únicamente `"Soles"` o `"Lunas"`. Las alergias se escriben separadas por comas. Estos valores no se incorporan a `app/datos/ninos.ts` ni sobreviven al cierre del formulario.

## Plan de implementación

1. Crear `app/kids/new/page.tsx` con la composición visual de la referencia y enlazarla desde `app/kids/page.tsx`.
2. Añadir el formulario interactivo en `app/componentes/formulario-nino.tsx`, con campos etiquetados, selector de dos salas y enlace «Cancelar».
3. Incorporar la validación de campos obligatorios y de fecha real, en formato exacto `dd/mm/aaaa` y no futura; mostrar errores junto a los campos.
4. Conectar «Guardar» con el diálogo de demostración y el regreso a `/kids`, sin alterar el listado ni los perfiles.

## Criterios de aceptación

- [ ] «Agregar niño» abre `/kids/new`; «Cancelar» vuelve a `/kids`.
- [ ] El formulario muestra los cinco campos de la referencia y conserva su composición en escritorio y móvil, sin desplazamiento horizontal a 390 × 844 px.
- [ ] El selector ofrece exactamente Soles y Lunas; inicialmente muestra Soles.
- [ ] Un nombre vacío o compuesto solo por espacios impide continuar y muestra un error bajo el campo.
- [ ] Una fecha vacía, con formato distinto de `dd/mm/aaaa`, inexistente o futura impide continuar y muestra un error bajo el campo. Una fecha real pasada, incluido un 29 de febrero bisiesto, se acepta.
- [ ] Un envío inválido conserva los valores introducidos y no abandona el formulario.
- [ ] Un envío válido muestra un diálogo que aclara que no se guardó ningún niño; al aceptarlo vuelve a `/kids`.
- [ ] Tras el envío, `/kids` sigue mostrando los ocho registros originales y sus perfiles sin cambios, incluso después de recargar.
- [ ] `npm run build` termina correctamente y los archivos modificados pasan ESLint; el fallo legado de `references/pantallas/support.js` queda fuera del alcance.

## Decisiones

- **Sí:** formulario funcional para validar y recorrer el flujo. **No:** simular un alta persistente.
- **Sí:** fecha escrita en `dd/mm/aaaa`. **No:** selector de fecha nativo.
- **Sí:** Soles preseleccionada y Lunas como segunda opción. **No:** agregar más salas.
- **Sí:** alergias como texto opcional separado por comas. **No:** interfaz para crear y quitar etiquetas.
- **Sí:** diálogo explícito antes del regreso. **No:** navegar inmediatamente y dar a entender que el registro se guardó.

## Riesgos

El botón «Guardar» podría interpretarse como un alta real. El diálogo debe dejar explícito que se trata de una demostración sin almacenamiento.

## No incluido en esta spec

Gestión real de niños, nuevos perfiles, persistencia, backend y edición de los registros existentes.
