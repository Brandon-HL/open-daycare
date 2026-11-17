# SPEC 06 — Crear publicación

> **Estado:** Implementado
> **Depende de:** SPEC 01
> **Fecha:** 2026-11-16
> **Objetivo:** Reproducir `references/pantallas/crear-publicacion.dc.html` como un formulario modal sobre el feed para crear publicaciones demostrativas sin persistencia.

## Alcance

**Incluye:**

- Crear la ruta `/posts/new` para el formulario de nueva publicación.
- Abrir el formulario como modal sobre el feed desde «Nueva publicación» y «Compartí un momento…».
- Mantener una alternativa de página completa válida cuando `/posts/new` se visita directamente o se recarga.
- Reproducir la tarjeta visual de la referencia con encabezado, destinatarios, tipos, descripción y fotos.
- Mostrar únicamente Mateo, Sofía y Benjamín como destinatarios individuales, además de «Toda la sala».
- Permitir seleccionar varios niños y hacer «Toda la sala» mutuamente excluyente con los niños individuales.
- Permitir seleccionar un único tipo de publicación.
- Validar destinatario, tipo y descripción antes de publicar.
- Mostrar un aviso explícito de demostración al enviar datos válidos y volver al feed sin guardar cambios.
- Mantener la composición responsive de la referencia, incluyendo el uso en 390 × 844 px.

**Fuera de alcance:**

- Persistencia de publicaciones, destinatarios o fotos.
- Backend, API, base de datos o autenticación adicional.
- Subida, almacenamiento o previsualización real de imágenes.
- Actualización del feed después de publicar.
- Incorporar a los cinco niños restantes de la sala en este formulario.

## Datos y estado temporal

La funcionalidad no introduce estructuras persistentes. El formulario mantiene su estado únicamente en un componente cliente:

```ts
type Destinatario = "mateo" | "sofia" | "benjamin" | "sala";
type TipoPublicacion =
  | "comida"
  | "siesta"
  | "actividad"
  | "logro"
  | "animo"
  | "foto"
  | "anuncio";

type DatosPublicacion = {
  destinatarios: Destinatario[];
  tipo: TipoPublicacion | "";
  descripcion: string;
};
```

El estado inicial debe tener destinatarios vacíos, tipo vacío y descripción vacía. Las casillas de fotos son exclusivamente visuales.

## Flujo de navegación

1. «Nueva publicación» en la barra lateral navega a `/posts/new`.
2. «Compartí un momento…» en el feed navega a `/posts/new`.
3. La navegación cliente muestra `/posts/new` en el slot `@modal`, sobre el feed existente.
4. «Cancelar» y la navegación hacia atrás cierran el modal y vuelven a `/`.
5. Una navegación directa o recarga de `/posts/new` muestra el mismo formulario como página completa, sin requerir un feed previo.

## Comportamiento del formulario

### Destinatarios

- Mostrar los chips «Mateo», «Sofía», «Benjamín» y «Toda la sala».
- El formulario comienza sin selección.
- Los tres niños individuales pueden seleccionarse simultáneamente.
- Seleccionar «Toda la sala» elimina las selecciones individuales.
- Seleccionar un niño elimina «Toda la sala».
- Debe existir al menos un destinatario para publicar.

### Tipo

- Mostrar exactamente: Comida, Siesta, Actividad, Logro, Ánimo, Foto y Anuncio.
- El formulario comienza sin tipo seleccionado.
- Solo puede seleccionarse un tipo a la vez.
- Debe existir un tipo para publicar.

### Descripción

- Mostrar un `textarea` editable con el placeholder «Contá cómo le fue hoy…».
- La descripción comienza vacía.
- Una descripción compuesta únicamente por espacios se considera vacía.
- Debe existir una descripción válida para publicar.

### Fotos

- Mostrar la casilla visual de foto de la referencia y la casilla «Agregar» con icono de suma.
- «Agregar» no abre un selector, no recibe archivos y no produce cambios persistentes.

## Publicación demostrativa

- «Publicar» valida los tres requisitos: destinatario, tipo y descripción.
- Si hay errores, permanece en el formulario y muestra mensajes asociados a las secciones correspondientes.
- Si los datos son válidos, muestra un aviso indicando que es una demostración y que no se guardó ninguna publicación.
- Después de aceptar el aviso, vuelve al feed `/`.
- El feed y sus datos estáticos permanecen sin cambios después de publicar o recargar.

## Plan de implementación

1. Crear el componente cliente del formulario con el estado de destinatarios, tipo, descripción y errores.
2. Crear la página `/posts/new` con la composición independiente para navegación directa.
3. Añadir la ruta interceptada en `app/@modal/(.)posts/new/page.tsx` y el fallback del slot necesario para navegación directa.
4. Reemplazar los controles decorativos de creación del feed y de la barra lateral por enlaces a `/posts/new`.
5. Implementar el cierre mediante `router.back()` y el envío demostrativo con validación local.
6. Verificar la composición visual en escritorio y 390 × 844 px.

## Criterios de aceptación

- [x] La referencia visual se transforma en componentes React/TypeScript consistentes con la aplicación.
- [x] «Nueva publicación» abre `/posts/new` como modal sobre `/`.
- [x] «Compartí un momento…» abre `/posts/new` como modal sobre `/`.
- [x] La visita directa o recarga de `/posts/new` muestra una alternativa de página completa válida.
- [x] «Cancelar» y el botón atrás del navegador cierran el modal y vuelven al feed.
- [x] El formulario inicia vacío: sin destinatarios, tipo ni descripción.
- [x] Solo aparecen Mateo, Sofía y Benjamín como destinatarios individuales.
- [x] Los destinatarios individuales permiten selección múltiple.
- [x] «Toda la sala» es mutuamente excluyente con los destinatarios individuales.
- [x] Las siete opciones de tipo son mutuamente excluyentes.
- [x] La descripción puede editarse y conserva el texto introducido ante errores.
- [x] Las fotos son elementos visuales y «Agregar» no inicia una subida.
- [x] Un envío sin destinatario muestra un error y permanece en el formulario.
- [x] Un envío sin tipo muestra un error y permanece en el formulario.
- [x] Un envío sin descripción, o con solo espacios, muestra un error y permanece en el formulario.
- [x] Un envío válido muestra un aviso explícito de demostración sin guardado.
- [x] Tras aceptar el aviso, el usuario vuelve a `/`.
- [x] El feed conserva sus publicaciones originales después del flujo y de una recarga.
- [x] A 390 × 844 px no existe desplazamiento horizontal y el formulario sigue siendo utilizable.
- [x] `npm run build` termina correctamente; el fallo legado de `references/pantallas/support.js` queda fuera del alcance.

## Decisiones

- **Sí:** modal sobre el feed. Conserva el contexto y coincide con la referencia.
- **No:** página completa como flujo principal. Se conserva únicamente como fallback para acceso directo o recarga.
- **Sí:** publicación demostrativa sin persistencia. Es consistente con las pantallas existentes.
- **No:** modificar el feed tras publicar. No existe backend ni almacenamiento para esta funcionalidad.
- **Sí:** selección múltiple de niños individuales. Permite comunicar una publicación a varias familias.
- **Sí:** «Toda la sala» mutuamente excluyente. Evita una combinación ambigua de destinatarios.
- **Sí:** mostrar solo Mateo, Sofía y Benjamín. Reproduce exactamente la referencia entregada.
- **No:** selector o subida real de fotos. La referencia solo requiere la composición visual.
- **Sí:** formulario vacío inicialmente. Evita presentar datos de ejemplo como si fueran una publicación real.
- **Sí:** rutas paralelas e interceptadas de App Router. Permiten modal, cierre, URL compartible y fallback directo.

## Riesgos

| Riesgo                                                                     | Mitigación                                                                                           |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Una visita directa no tiene un feed previo detrás del modal.               | Mantener una página completa válida para `/posts/new` y un fallback del slot `@modal`.               |
| El aviso de demostración podría confundirse con una publicación real.      | Indicar explícitamente que no se guardó ninguna publicación.                                         |
| La selección múltiple puede combinarse incorrectamente con «Toda la sala». | Aplicar exclusión mutua en cada cambio de selección.                                                 |
| La tarjeta puede desbordarse en móvil.                                     | Permitir ajuste de ancho, wrapping de chips y desplazamiento vertical sin desplazamiento horizontal. |

## No incluido en esta spec

- Persistencia de publicaciones.
- Backend, API, base de datos y autenticación adicional.
- Subida o almacenamiento de imágenes.
- Edición o eliminación de publicaciones.
- Notificaciones a familias.
- Inclusión de otros niños fuera de los tres mostrados en la referencia.
