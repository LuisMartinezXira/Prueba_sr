# Prueba técnica fullstack

Monorepo con pnpm workspaces. La lógica de la prueba está marcada con `TODO`; este repositorio solo deja el esqueleto listo para programar.

## Requisitos

- Node.js 20
- pnpm 9

## Pasos

1. Copiar `apps/api/.env.example` a `apps/api/.env`.
2. Instalar dependencias:

   ```bash
   pnpm install
   ```

3. Levantar la API y la web en paralelo:

   ```bash
   pnpm dev
   ```

Si no copias el `.env`, la API usa el puerto `3000`.

## URLs

- API: http://localhost:3000
- Web: http://localhost:5173
- Salud de la API: http://localhost:3000/health

El servidor de desarrollo de Vite reenvía `/api` a http://localhost:3000. Desde el front se llama `fetch('/api/items')` y la petición no sale por CORS.

`GET /api/items` todavía no existe: el router está vacío a propósito y Express responde 404 hasta que el candidato lo implemente. `GET /health` responde `{ "ok": true }`.

## Scripts

| Script | Qué hace |
| --- | --- |
| `pnpm dev` | API y web en paralelo |
| `pnpm dev:api` | Solo la API |
| `pnpm dev:web` | Solo la web |
| `pnpm build` | Compila API y web |
| `pnpm build:api` | Compila la API |
| `pnpm build:web` | Compila la web |

## Enunciado

