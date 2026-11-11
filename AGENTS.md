<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## MCPs

- Playwright Screenshots y cualquier cosa relacionada a Playwright tienen que estar en la carpeta .playwright-mcp
- Context7 Usaremos este MCP para traer la información actualizada del framework.

## Proyecto

- Es un único proyecto Next.js 16.4.4 con App Router; la entrada actual es `app/page.tsx` y el layout global está en `app/layout.tsx`.
- Usa npm y `package-lock.json`; no hay monorepo, backend, base de datos ni variables de entorno documentadas.
- `references/` contiene pantallas de referencia, no la aplicación. Sin embargo, ESLint incluye sus archivos JavaScript.

## Comandos

- `npm run dev` inicia el servidor de desarrollo en `http://localhost:3000`.
- `npm run lint` ejecuta ESLint sobre todo el repositorio. Actualmente falla por código legado no corregido en `references/pantallas/support.js` (`ReactDOM.render` y asignación a `module`); los avisos restantes no bloquean el comando.
- `npm run build` compila, ejecuta la comprobación de TypeScript y genera la build de producción; es la verificación disponible más completa porque no existe un script `test` ni `typecheck` separado.
- Para producción, ejecutar `npm run build` y después `npm run start`.

## Configuración que no debe pasarse por alto

- `next.config.ts` activa `cacheComponents`, `partialPrefetching` y el experimento `agentFeedback`; también configura el loader Turbopack de Tailwind 4 para archivos CSS.
- Tailwind 4 se importa desde `app/globals.css` con `@import "tailwindcss"`; no añadir una configuración Tailwind v3 por defecto.
- Las capturas y cualquier salida de Playwright deben permanecer en `.playwright-mcp/`, que está ignorado por Git.

## Spec Driven Development - Skills

- /spec Usaremos esta habilidad para crear las especificaciones.
- /spec-impl Usaremos esta skill para hacer las implementaciones.
