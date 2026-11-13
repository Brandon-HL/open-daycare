# SPEC 03 — Login y activación visual

> **Status:** Aprobado
> **Depends on:** SPEC 01, SPEC 02
> **Date:** 2026-11-12
> **Objective:** Reproducir las pantallas de inicio de sesión y activación de cuenta como interfaces de demostración, sin autenticación real.

## Alcance

**Incluye:**

- `/login`: diseño de `references/pantallas/login.dc.html`, sin selector «Personal / Familia».
- `/activate`: diseño de `references/pantallas/activar-cuenta.dc.html`, con la tarjeta de Mateo identificada como ejemplo.
- Campos editables y vacíos.
- Enlaces entre ambas pantallas.
- Los dos accesos principales navegan al feed existente en `/` como demostración.
- Adaptación a escritorio y móvil, reutilizando las fuentes y el icono del sol existentes.

**Fuera de alcance:**

- Sesiones, validación de credenciales o invitaciones.
- Recuperación de contraseña.
- Registro o persistencia del consentimiento.
- Protección de rutas.
- Cambios en el feed de `/`.

## Datos

No se introduce un modelo de datos ni persistencia. Mateo es contenido fijo de demostración; no se muestran códigos, correos ni contraseñas precargados.

## Plan de implementación

1. Crear `app/login/page.tsx` con el diseño adaptable, campos etiquetados y acceso de demostración a `/`.
2. Mantener «¿Olvidaste tu contraseña?» como texto no interactivo, porque la recuperación queda fuera del alcance.
3. Crear `app/activate/page.tsx` con los campos vacíos, la tarjeta de ejemplo y el bloque de autorización únicamente visual.
4. Conectar los enlaces entre `/login` y `/activate`; el acceso principal de activación también navegará a `/`.
5. Verificar las rutas en escritorio y móvil mediante la build y revisión visual.

## Criterios de aceptación

- [ ] `/login` reproduce la composición de dos columnas y no muestra «Personal», «Familia» ni «INGRESO COMO».
- [ ] `/activate` muestra a Mateo como ejemplo, tres campos vacíos y la autorización sin control interactivo.
- [ ] Los enlaces entre pantallas funcionan.
- [ ] Ambos accesos principales llevan a `/` sin comprobar datos ni crear una sesión.
- [ ] `/` conserva el feed actual.
- [ ] `/login` y `/activate` se visitan por URL directa, sin añadir una entrada al feed.
- [ ] A 1440 × 900 px y 390 × 844 px ambas pantallas son legibles y no tienen desplazamiento horizontal.
- [ ] Las pantallas utilizan Fredoka y Nunito, la paleta y el icono del sol de las referencias.
- [ ] `npm run build` termina correctamente.
- [ ] Los archivos nuevos pasan ESLint; el fallo legado de `references/pantallas/support.js` queda fuera del alcance.

## Decisiones

- **Sí:** `/login` y `/activate` como rutas nuevas. El feed existente permanece en `/`.
- **No:** selector de rol «Personal / Familia», porque el login solicitado no necesita esa opción.
- **Sí:** navegación de demostración hacia `/`. Permite revisar el flujo visual sin simular autenticación.
- **No:** autenticación, sesiones, backend, persistencia o protección de rutas.
- **Sí:** campos vacíos con la tarjeta de Mateo como referencia visual.
- **No:** código, correo o contraseña precargados, para evitar mostrar datos de ejemplo como credenciales válidas.
- **No:** recuperación de contraseña. El texto se conserva como elemento visual no interactivo.
- **No:** checkbox interactivo para el consentimiento. El bloque será únicamente visual.
- **No:** enlace desde el feed hacia `/login`. La pantalla se accederá por URL directa.

## Riesgos

- Los accesos principales no validan información ni crean sesiones. La interfaz debe considerarse únicamente una demostración visual.
- El bloque de autorización no registra consentimiento y no debe interpretarse como una aceptación legal real.

## Qué **no** está incluido en esta spec

- Autenticación real.
- Registro, inicio o cierre de sesión.
- Invitaciones verificables.
- Recuperación o cambio de contraseña.
- Persistencia de formularios o consentimiento.
- Protección del feed o de las nuevas rutas.
- Modificación del contenido o la navegación del feed existente.
