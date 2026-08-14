# Reglas del proyecto

## Despliegue
- El frontend (main.js, index.html, style.css, etc.) se sirve desde **GitHub Pages** (rama `main` de https://github.com/aramil13/LaraEstetica).
- El backend es un worker de Cloudflare (`cloudflare/src/index.js`), desplegado con `npx wrangler deploy` (dentro de `cloudflare/`).
- La base de datos es D1 (`lara-estetica`) en Cloudflare. Los cambios de esquema se aplican con `npx wrangler d1 execute lara-estetica --remote`.

## Regla obligatoria
- **Siempre que se modifique código, se debe hacer commit y push a `origin/main`** para que GitHub Pages sirva la nueva versión.
- Si se modifica el worker o la BD, además desplegar con wrangler.

## Convenios
- API del frontend: `main.js` usa `api.request` contra el worker (Cloudflare). Los campos se mapean de snake_case (DB) a camelCase (JS) en `loadAllData`.
- Recordatorios WhatsApp: la cita permanece en la lista mientras su hora no haya pasado; `whatsapp_sent_count` cuenta los envíos.
