# Reglas del proyecto

## Despliegue
- El frontend (main.js, index.html, style.css, etc.) se sirve desde **GitHub Pages** (rama `main` de https://github.com/aramil13/LaraEstetica).
- El backend es un worker de Cloudflare (`cloudflare/src/index.js`), desplegado con `npx wrangler deploy` (dentro de `cloudflare/`).
- La base de datos es D1 (`lara-estetica`) en Cloudflare. Los cambios de esquema se aplican con `npx wrangler d1 execute lara-estetica --remote`.

## Token de Cloudflare (wrangler)
- El token está guardado en `cloudflare/.env` (gitignored) como `CLOUDFLARE_API_TOKEN=...`.
- **Antes de cualquier comando wrangler, cargarlo así** (PowerShell, desde `cloudflare/`):
  `$env:CLOUDFLARE_API_TOKEN = (Get-Content .env | Where-Object { $_ -match '^CLOUDFLARE_API_TOKEN=' } | ForEach-Object { $_.Substring('CLOUDFLARE_API_TOKEN='.Length) })`
- Nunca commitear el token ni escribirlo en archivos trackeados por git.

## Regla obligatoria
- **Siempre que se modifique código, se debe hacer commit y push a `origin/main`** para que GitHub Pages sirva la nueva versión.
- Si se modifica el worker o la BD, además desplegar con wrangler.

## Encoding (IMPORTANTE)
- Todos los archivos (index.html, main.js, style.css, etc.) están en **UTF-8 sin BOM**.
- **NUNCA** usar PowerShell `Get-Content`/`Set-Content`/`Out-File`/redirecciones para modificar archivos del proyecto: re-encodan y corrompen tildes y ñ (mojibake).
- Los bumps de versión (p.ej. `main.js?v=...`) y cualquier edición de archivos se hacen SOLO con el editor de texto de opencode (conserva UTF-8).
- Si un archivo se corrompe, restaurarlo desde el último commit bueno con `git checkout <commit> -- <archivo>` y reaplicar el cambio con el editor.

## Convenios
- API del frontend: `main.js` usa `api.request` contra el worker (Cloudflare). Los campos se mapean de snake_case (DB) a camelCase (JS) en `loadAllData`.
- Recordatorios WhatsApp: la cita permanece en la lista mientras su hora no haya pasado; `whatsapp_sent_count` cuenta los envíos.

## Fechas: formato
- **Al mostrar una fecha al usuario** (pantalla o impresión) usar SIEMPRE `formatDateEU(value)` (en `main.js`), que devuelve el formato europeo `DD-MM-YYYY`.
- **No** usar `toLocalDateStr` ni `substring(0,10)` directamente en texto visible al usuario.
- `toLocalDateStr()` y los formatos ISO (`YYYY-MM-DD`) se usan SOLO internamente: almacenamiento en BD, valores de inputs `type=date` y comparaciones de rango/filtros.
