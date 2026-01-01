# React Capacitor 2026

React 19 + Vite + TypeScript starter with Capacitor for iOS and Android.

## Getting started
- Install dependencies: `npm install`
- Start web dev server: `npm run dev` (uses `src/theme.ts` for app metadata)
- Lint: `npm run lint`

## Build & mobile workflow
- Production build: `npm run build` (outputs to `dist/`)
- Sync web bundle to native: `npx cap sync`
- Open native projects: `npx cap open ios` or `npx cap open android`
- Run again after app changes: repeat `npm run build` ➜ `npx cap sync`

## Project info
- App name: React Capacitor 2026 (`capacitor.config.ts`, native strings/plists)
- Bundle ID: `com.reactcapacitor2026.app`
- Theming and labels come from `src/theme.ts`; avoid hardcoding titles elsewhere.
