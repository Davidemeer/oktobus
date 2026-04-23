@AGENTS.md

# Oktobus marketing-site

AI-software bureau (Jochem Michiels, David, Max) marketing-site. NL+EN.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript strict
- Tailwind v4 (`@import "tailwindcss";` in `app/globals.css`)
- Built-in i18n: `app/[lang]/...` + dictionaries pattern (no next-intl)
- `proxy.ts` handles locale detection + redirect (Next 16 renamed middleware → proxy)
- `zod` for env validation in `lib/env.ts` (imported from `next.config.ts` so app fails fast)
- Hosted lokaal voor nu — deploy-klaar maar nog niet uitgevoerd (zie plan)

## Conventies
- Routes always under `[lang]` segment. Default locale = `nl`.
- Dictionaries are JSON files in `app/[lang]/dictionaries/`. Add new keys to both `nl.json` and `en.json`.
- Server Components by default. `'use client'` only when state/event handlers needed.
- Security headers in `next.config.ts` (CSP zonder nonce, HSTS, X-Frame-Options, etc.)
- Geen secrets in code. `.env.local` gitignored, `.env.example` als template.

## Commands
- `pnpm dev` — local dev (hot reload)
- `pnpm build && pnpm start` — productie-build lokaal valideren
- `pnpm typecheck` — TS check
- `pnpm lint` — ESLint

## Plan
Volledige architectuur en tijdlijn: `/Users/david/.claude/plans/ik-wil-een-bedrijf-jaunty-neumann.md`.
