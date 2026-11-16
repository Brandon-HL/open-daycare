# SPEC 05 — Modal para vincular padre

> **Estado:** Implementado
> **Depende de:** SPEC 02
> **Fecha:** 2026-11-15
> **Objetivo:** Reproducir la pantalla «Vincular padre» como un modal demostrativo accesible desde cualquier perfil de niño.

## Alcance

**Incluye:**

- Crear el flujo modal de «Vincular padre» para los perfiles `/kids/[id]`.
- Mostrar el nombre del niño correspondiente al perfil desde el que se abrió el modal.
- Reproducir la composición visual de `references/pantallas/vincular-padre.dc.html`, incluyendo aviso informativo, campos de nombre y email, parentesco, código y botón de invitación.
- Ofrecer las opciones `Mamá`, `Papá` y `Tutor/a`, con `Mamá` seleccionada inicialmente.
- Mantener el perfil del niño visible detrás del modal y permitir cerrarlo mediante la acción de cierre o navegación de retorno.
- Validar nombre y email en el navegador sin abandonar el modal cuando existan errores.
- Mostrar un aviso explícito de demostración al enviar datos válidos, indicando que no se envió ninguna invitación, y volver al perfil del niño después de aceptarlo.
- Mantener el código fijo `7K4P9` y mostrar que vence en siete días.
- Adaptar el modal a escritorio y a 390 × 844 px sin desplazamiento horizontal.

**Fuera de alcance (para futuras specs):**

- Envío real de emails o generación de invitaciones.
- Persistencia de padres vinculados, códigos o formularios.
- Backend, autenticación, autorización o expiración real del código.
- Actualización de la lista de padres del perfil después del envío.
- Edición o eliminación de padres ya vinculados.

## Modelo de datos

Esta funcionalidad no introduce nuevas estructuras de datos persistentes. Reutiliza los registros de niños de `app/datos/ninos.ts` y mantiene el estado del formulario modal únicamente en el componente cliente.

El estado temporal del formulario contiene:

```ts
type DatosVinculacion = {
  nombre: string;
  email: string;
  parentesco: "Mamá" | "Papá" | "Tutor/a";
};
```

El código de invitación es el valor fijo de presentación `7K4P9`; no se almacena en `app/datos/ninos.ts`.

## Plan de implementación

1. Crear la estructura modal reutilizable y el componente cliente del formulario de invitación al padre, conservando la paleta, las fuentes y los espacios adaptables existentes.
2. Añadir la ruta `/kids/[id]/link-parent` y resolver el ID del niño usando los datos estáticos existentes; los IDs desconocidos deben devolver 404.
3. Integrar la ruta como un modal abierto desde cada perfil `/kids/[id]`, usando el patrón de modal de App Router para que el perfil permanezca visible durante la navegación cliente y la navegación directa siga siendo válida.
4. Reemplazar el control decorativo «Vincular otro padre» por un enlace real a la ruta modal del niño actual, sin cambiar los datos de padres existentes ni el contenido del perfil.
5. Añadir validación en el navegador para el nombre obligatorio, el formato válido del email y el parentesco seleccionado; al enviar datos válidos, mostrar el diálogo de demostración sin envío y volver al perfil de origen después de la confirmación.

## Criterios de aceptación

- [x] Cada perfil de `/kids/1` a `/kids/8` muestra una acción funcional «Vincular otro padre».
- [x] Abrir la acción cambia la URL a `/kids/[id]/link-parent` y muestra el formulario como modal sobre el perfil del niño correspondiente.
- [x] El modal muestra el nombre correcto del niño para cada ID y el código fijo `7K4P9` con el texto `Vence en 7 días`.
- [x] El modal contiene campos editables de nombre y email, exactamente las tres opciones de parentesco `Mamá`, `Papá` y `Tutor/a`, y selecciona `Mamá` inicialmente.
- [x] Un nombre vacío o compuesto solo por espacios impide el envío y muestra un error debajo del campo de nombre.
- [x] Un email vacío o inválido impide el envío y muestra un error debajo del campo de email.
- [x] Un envío inválido conserva los valores ingresados, el parentesco seleccionado y la URL del modal.
- [x] Un envío válido no modifica `app/datos/ninos.ts` ni la lista visible de padres.
- [x] Un envío válido muestra un diálogo que indica explícitamente que no se envió ningún email de invitación; al aceptarlo vuelve al perfil de origen `/kids/[id]`.
- [x] El control de cierre vuelve al perfil de origen sin cambiar los datos del niño.
- [x] Cargar directamente `/kids/[id]/link-parent` muestra una alternativa independiente válida para esa ruta sin requerir una navegación cliente previa.
- [x] Un ID de niño desconocido devuelve 404 tanto para el perfil como para la ruta de invitación.
- [x] A 1440 × 900 px el modal coincide con la composición de referencia y permanece centrado sobre la aplicación.
- [x] A 390 × 844 px el modal es utilizable, el formulario puede desplazarse verticalmente si es necesario y `document.documentElement.scrollWidth` no supera el ancho de la ventana.
- [x] `npm run build` termina correctamente; los archivos de la aplicación modificados pasan ESLint, excluyendo el error legado conocido en `references/pantallas/support.js`.

## Decisions

- **Sí:** modal sobre el perfil. Conserva el contexto del niño y coincide con la referencia visual.
- **No:** página completa como flujo principal. La pantalla solicitada debe abrirse como modal.
- **Sí:** disponible desde los ocho perfiles. Evita una implementación especial para Mateo y permite reutilizar el flujo.
- **No:** limitarlo a Mateo. El nombre y los datos del niño deben ser dinámicos.
- **Sí:** demostración sin persistencia. Es consistente con las pantallas existentes del proyecto.
- **No:** envío real de correo ni backend. Requieren decisiones de infraestructura y seguridad fuera de esta spec.
- **Sí:** código fijo `7K4P9` y vencimiento visual de siete días. Reproduce la referencia sin simular invitaciones reales.
- **Sí:** diálogo explícito antes de volver al perfil. Evita dar a entender que el padre fue vinculado realmente.
- **No:** agregar el padre a `app/datos/ninos.ts`. El flujo no tiene persistencia.
- **Sí:** incluir `Tutor/a` como opción temporal del formulario. No se amplía el tipo persistido `Padre` porque no se guardan datos.
- **Sí:** usar el patrón de rutas paralelas e interceptadas de App Router para el modal. Permite navegación, cierre y acceso directo coherentes.

## Riesgos

| Riesgo                                                                                       | Mitigación                                                                                                  |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Una navegación directa puede no tener un perfil previo detrás del modal.                     | Proporcionar un fallback de ruta válido y conservar el mismo formulario con el nombre resuelto desde el ID. |
| El diálogo de demostración podría confundirse con un envío real.                             | Usar un texto explícito que indique que no se envió ninguna invitación y que no se guardaron cambios.       |
| Las rutas paralelas pueden conservar contenido del modal después de navegar a otra pantalla. | Definir los fallbacks necesarios del slot y verificar cierre con navegación hacia atrás y enlace.           |

## Lo que **no** está incluido en esta spec

- Envío de emails.
- Persistencia de invitaciones o padres.
- Backend, autenticación y autorización.
- Expiración real o validación remota del código.
- Actualización de los ocho perfiles después del envío.
- Edición o eliminación de padres vinculados.
