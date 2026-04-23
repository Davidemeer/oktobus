@AGENTS.md
@DESIGN.md

# Oktobus marketing-site

3-koppig AI-software bureau (Jochem Michiels, David, Max). Marketing-site met drie pagina's: `/`, `/belofte`, `/werkwijze`. Pitch-klaar.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript strict
- Tailwind v4 — alle tokens via `@theme` in `app/globals.css`. Géén `tailwind.config.ts`.
- `motion` (react animaties), `lenis` (smooth scroll), `clsx` + `tailwind-merge` (className-utils), `lucide-react` (generic icons)
- `zod` voor env-validatie in `lib/env.ts`
- Lokaal hosting; deploy-config klaar maar niet uitgevoerd

## Naamgeving
- Brand: **Oktobus** (met K). Altijd zo schrijven in code, metadata, page titles, copy.
- Logo-asset bestand heet `octobus_v2.svg` (met C) — alleen file-naam, geen tekst-content.

## Design system
DESIGN.md is de single source of truth. Lees vóór UI-werk:
- §2 Tokens (kleuren, type-scale)
- §5 Animatie-regels (sway/breathe = CSS loop, rest = Motion `whileInView`)
- §6 Component-regels (buttons, cards, eyebrows)

## Component-bibliotheek
- `components/ui/` — Eyebrow, Display, Body, Num, Hairline, Button
- `components/marks/` — OctopusLogo, LogoTile
- `components/motion/` — RiseIn, FadeIn (gebruiken `useReducedMotion`)
- `components/layout/` — Container, Section, Header, Footer, SmoothScroll
- `components/sections/` — PageHero, PillarCard, CTABlock

## Conventies
- Server Components default. `'use client'` alleen waar interactieve state nodig is (Header, motion-wrappers, SmoothScroll).
- Internal links → Next `<Link>`. External / mailto → `<a>`.
- ClassNames via `cn()` uit `lib/cn.ts`.
- Geen italics, geen box-shadows, geen gradients (DESIGN.md §8).

## Commands
- `pnpm dev` — local dev (hot reload)
- `pnpm build && pnpm start` — productie-build lokaal valideren
- `pnpm typecheck` — TS check
- `pnpm lint` — ESLint
