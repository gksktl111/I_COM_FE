# AGENT CONTEXT — I_COM_FE (아이콤 FE)

Last updated: 2025-08-30

## Quick Facts

- Framework: Next.js 15 (App Router), React 19, TypeScript
- Styling: Tailwind CSS v4 (via `@tailwindcss/postcss`), `tw-animate-css`
- UI: shadcn-style primitives (`cva`, `tailwind-merge`, `lucide-react`)
- State: `zustand`
- Lint/Format: ESLint 9 (Next config), Prettier + `prettier-plugin-tailwindcss`
- Path alias: `@/*` → `./src/*` (see `tsconfig.json`)

## Scripts

- `npm run dev`: Next dev (Turbopack)
- `npm run build`: Next build (Turbopack)
- `npm start`: Start production server
- `npm run lint`: Run ESLint

## Environment

Create `.env.local` in the repo root with the following keys:

```env
# Naver Maps JS SDK (client-side)
NEXT_PUBLIC_NCP_KEY_ID=your_public_key_id

# Naver Cloud Reverse Geocoding (server-side)
NCP_API_KEY_ID=your_api_key_id
NCP_API_KEY=your_api_key_secret
```

Notes:

- `NEXT_PUBLIC_NCP_KEY_ID` is embedded in the client bundle (public).
- `NCP_API_KEY_ID` and `NCP_API_KEY` are server-only and used by the API route.

## Key Files and Flow

- Layout and Naver Maps SDK
  - `src/app/layout.tsx:1`: Injects Naver Maps SDK with callback `__initNaverMaps` and fires a custom DOM event `naver-maps-loaded`. Reads `process.env.NEXT_PUBLIC_NCP_KEY_ID`.
- Reverse Geocoding API (server)
  - `src/app/api/revgeo/route.ts:1`: GET `/api/revgeo?lat={lat}&lng={lng}`. Calls Naver Cloud Reverse Geocode API using `NCP_API_KEY_ID` and `NCP_API_KEY`. Returns `{ address, raw }`.
- Geolocation (client) and state
  - `src/shared/hooks/useGeolocation.ts:1`: Provides `fetchLocation()` and calls `/api/revgeo` to set a human-readable `address`.
  - `src/shared/store/location.store.ts:1`: `zustand` store with `{ location, address, locating, resolving }` and setters.
- Map UI
  - `src/features/map/components/NaverMap.tsx:1`: Creates a map centered at stored location after SDK is available.
  - `src/features/map/components/MapService.tsx:1`: Composes sidebar and map view; placeholder for search state.
  - `src/features/map/components/MapSidebar.tsx:1`: Hosts search UI (uses Landing `SearchBar`).
  - `src/features/map/components/MapView.tsx:1`: Wrapper around `NaverMap`.
- Shared UI and Landing
  - `src/components/common/Header.tsx:1`: Top nav.
  - `src/components/common/SearchBar.tsx:1`: Location button + keyword input. Uses `useGeolocation()`.
  - `src/features/landing/components/LandingPage.tsx:1`: Assembles hero, search, keywords, trust.
  - `src/constants/copy.ts:1`: Landing copy strings.

## SDK Readiness Pattern (Naver Maps)

- A custom event `naver-maps-loaded` is dispatched on `document` once the SDK callback runs.
- To safely use `naver` globals, either:
  - Listen once: `document.addEventListener('naver-maps-loaded', init, { once: true })`, or
  - Poll `window.__naver_maps_loaded` before accessing `window.naver`.

References:

- `src/app/layout.tsx:21`

## Styling and Components

- Tailwind v4 via PostCSS: imports in `src/app/globals.css:1`.
- Design tokens and color variables are defined in `globals.css` with light/dark variants.
- Use `cn()` from `src/shared/utils/shadcn_utils.ts:1` to merge classes.
- shadcn-like primitives live in `src/components/ui/*` using `cva` variants.

## Conventions

- Use the `@/*` path alias for imports instead of long relative paths.
- Prefer feature-first structure under `src/features/<domain>/components`.
- Keep server-only secrets out of the client; only `NEXT_PUBLIC_*` should be used on the client.
- Use `zustand` store for cross-component UI state like location.

## Known Gaps / Cleanup

- Geolocation auto option: `useGeolocation({ auto: true })` is referenced but auto-init is commented out in the hook. Consider enabling opt-in auto fetch.
  - `src/shared/hooks/useGeolocation.ts:54`
- Export mismatch (not currently used): `src/features/map/components/index.ts:1` re-exports `NaverMap` as a named export, but the component has a default export.
- `components.json` alias entries reference `@/libs/*` paths that do not exist; keep using `@/*` from `tsconfig.json`.

## TODO (Agent)

- Implement `auto` behavior in `useGeolocation` (optional, opt-in) and wire to landing.
- Add basic error UI for `/api/revgeo` failures (e.g., toast, inline message).
- Extend map: search integration and markers list; connect sidebar results to map focus.
- Harden env handling: graceful fallbacks when keys are missing; friendly setup notice.
- Fix `index.ts` re-export in `src/features/map/components` if/when it's used.

## Runbook (Local)

1. Install deps and start dev server

```bash
npm i
npm run dev
```

2. Verify env keys

- Map loads if `NEXT_PUBLIC_NCP_KEY_ID` is valid.
- Reverse geocoding works if `NCP_API_KEY_ID` and `NCP_API_KEY` are set.

## Notes for Future Changes

- When adding new UI primitives, mirror style and variant patterns in `src/components/ui/*`.
- Keep domain components minimal and composable; lift state to feature containers.
- Prefer server route handlers under `src/app/api/*` for server-only operations using secrets.
