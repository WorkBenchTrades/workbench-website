# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project overview

Marketing/waitlist website for **WorkBench**, a construction management app being built for UK tradespeople (daily site check-ins, AI-powered quoting, job phase tracking, Making Tax Digital compliance). This repo is just the public-facing Next.js site — the product itself (the mobile app referenced throughout the copy) lives elsewhere.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint via eslint.config.mjs (flat config: eslint-config-next core-web-vitals + typescript)
```

There is no test framework configured in this repo (no test runner in `package.json`, no test files).

`node_modules` may not be present in a fresh checkout — run `npm install` before `dev`/`build`/`lint`.

## Architecture

- Next.js App Router (`app/` directory), TypeScript, React 19.
- Only two routes exist: `app/page.tsx` (the landing page) and `app/privacy/page.tsx` (privacy page — see Known issues below). `app/layout.tsx` is the root layout, sets up Geist fonts and global metadata.
- Path alias `@/*` maps to the repo root (`tsconfig.json`).
- Tailwind v4 is wired up via `@tailwindcss/postcss` in `postcss.config.mjs`, but in practice the landing page (`app/page.tsx`) is built almost entirely with inline `style={{ ... }}` objects rather than Tailwind utility classes. `app/globals.css` only holds a CSS reset, smooth scroll, and one small responsive override for the nav. Follow the existing inline-style convention when editing `app/page.tsx` unless asked to migrate it.
- `app/page.tsx` is a single long file composed of sequential `<section>` blocks (nav, launch banner, hero, proof bar, how-it-works, features, MTD, pricing, "built by", waitlist CTA, footer) — there is no component decomposition beyond `WaitlistForm`. When editing copy or a section, find it by its `WB-00N` label comment/tag rather than assuming a separate component file exists.
- `app/components/waitlistform.tsx` (`'use client'`) is the only interactive component. It posts directly from the browser to a Supabase REST endpoint (`SUPABASE_URL` / `SUPABASE_ANON_KEY` constants hardcoded in the file — this is the public anon key, safe to expose client-side) to insert into a `waitlist` table, handling the `409` (duplicate email) case specially.

## Known issues / gotchas

- **Import case mismatch**: `app/page.tsx` imports `./components/WaitlistForm`, but the actual file on disk is `app/components/waitlistform.tsx` (all lowercase). This resolves fine on case-insensitive filesystems (default macOS) but will fail to resolve on case-sensitive filesystems (Linux, most CI/deploy environments). If you touch either the import or the filename, make them match exactly.
- **`app/privacy/page.tsx` is not valid Next.js code**: it imports `expo-router`, `react-native`, and local modules (`../lib/supabase`, `../lib/toast`) that don't exist in this project and aren't dependencies (`package.json` has no `expo-router`/`react-native`). It appears to have been copied in from the separate WorkBench mobile (Expo) app by mistake and will fail `next build`. Don't try to "fix" it by installing React Native — it needs to be rewritten as an actual Next.js page (or removed) to match the rest of the site.
