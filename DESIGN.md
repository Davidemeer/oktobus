# DESIGN.md — Octobus Studio

> Single source of truth voor visueel ontwerp. Richting C · Zuiver Lab (final).
> Wijzig dit bestand voordat je iets aan de UI wijzigt. Niet andersom.

**Noot over typografie:** De gekozen design-richting gebruikt **Geist** (sans) en **Geist Mono** — niet Fraunces. Dit document volgt de gekozen richting. Als je alsnog naar Fraunces wilt, is dat een nieuwe design-beslissing, geen implementatiedetail.

---

## 1. Ontwerpprincipes (lees dit eerst)

1. **Bone draagt, ink spreekt, teal wijst.** Eén kleur per taak. Teal is nooit decoratie — altijd focus, altijd één accent per scherm.
2. **Stilte is een component.** Witruimte is niet "leeg", het is geladen. Voeg niets toe tenzij het iets aan het verhaal toevoegt.
3. **Ritme boven flair.** Dezelfde verticale spacing-trap (`py-20`, `py-28`, `py-36`) komt overal terug. Consistentie leest als rust.
4. **Typografische hiërarchie doet het werk van kleur.** We gebruiken grootte, gewicht en tracking om dingen belangrijk te maken — geen accent-kleuren, geen boxes, geen gradients.
5. **Animaties fluisteren.** Elementen rijzen op bij laden, hovers zijn traag (350–500ms), niets stuitert. Als het opvalt, is het mis.
6. **Mono is voor meta.** Nummers, labels, eyebrows, codes. Body en display zijn altijd sans.
7. **Geen effecten die niet bestaan.** Geen box-shadows, geen glassmorphism, geen gradients, geen glow. Eén haarlijn is genoeg.

---

## 2. Design Tokens

### 2.1 Kleuren

Als Tailwind v4 `@theme` in `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Basis */
  --color-bone: #F3EFE9;        /* pagina-achtergrond */
  --color-bone-2: #E9E4DB;      /* subtiele vlakken, nooit voor tekst */
  --color-paper: #FBF9F5;       /* licht paneel, alleen voor cards/bento */

  /* Tekst */
  --color-ink: #0B0B0A;         /* primaire tekst, iconen, borders-on-hover */
  --color-ink-2: #63615C;       /* secundaire tekst, meta, descriptions */

  /* Accent — zuinig gebruiken */
  --color-teal: #51A397;        /* signatuur, focus-dot, logo-tile */
  --color-teal-ink: #2F6E66;    /* accent-kleur in tekst (hover, highlight) */

  /* Lijnen */
  --color-line: rgb(11 11 10 / 0.1);       /* standaard haarlijn (10%) */
  --color-line-soft: rgb(11 11 10 / 0.07); /* nóg stiller, tussen rijen */
  --color-line-hair: rgb(11 11 10 / 0.12); /* cards / bento border */
}
```

**Gebruik in code:** `bg-bone`, `text-ink`, `text-ink-2`, `border-line`. Nooit hex-waarden inline.

**Teal-regel:** maximaal **één** teal-element per viewport. Gebruik alleen voor:
- het logo-vierkantje (signatuur)
- één accentwoord in een grote kop (`text-teal-ink`)
- de `focus-dot` (beschikbaarheid/live-indicator)
- de "signatuur" card (grote teal vlak) in footer-achtige context

Wat is **niet** teal: buttons, links, hover-states van tekst, eyebrow-tekst, cards, bg-panelen.

### 2.2 Font-stacks

```css
--font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif;
--font-mono: 'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace;
```

Preload in `app/layout.tsx` via `next/font/google`:

```ts
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});
```

**OpenType-features altijd aan** op `body`:
```css
font-feature-settings: "ss01", "cv11";
```

### 2.3 Font-sizes & line-heights

Elke regel in de tabel heeft een vaste use-case. Niet free-style.

| Token         | px     | rem      | line-height | tracking   | Gebruik                                      |
|---------------|--------|----------|-------------|------------|----------------------------------------------|
| `text-hero`   | 112px  | 7rem     | 1.02        | -0.05em    | H1 hero, alleen op startpagina               |
| `text-display`| 96px   | 6rem     | 0.95        | -0.055em   | Eén-woord-displays (style strip, wordmark)   |
| `text-h2`     | 64px   | 4rem     | 1.02        | -0.04em    | Section-titles (`§ 002 — DISCIPLINES`)       |
| `text-h3`     | 40px   | 2.5rem   | 1.05        | -0.035em   | Sub-section-titles                           |
| `text-pnum`   | 34px   | 2.125rem | 1           | -0.04em    | Card-nummers (01, 02, 03)                    |
| `text-pillar` | 30px   | 1.875rem | 1.1         | -0.035em   | Card-titels (`Product`, `Design`)            |
| `text-stat`   | 32px   | 2rem     | 1.1         | -0.03em    | Meta-strip getallen (`2`, `6–12`, `100%`)    |
| `text-lead`   | 24px   | 1.5rem   | 1.35        | -0.025em   | Pull-quotes, grote intro-tekst               |
| `text-body`   | 14px   | 0.875rem | 1.65        | 0          | Alle lopende tekst                           |
| `text-ui`     | 13.5px | 0.844rem | 1.5         | 0          | Nav, buttons, links in flows                 |
| `text-list`   | 13px   | 0.813rem | 1.5         | 0          | Card-lists, tabellen                         |
| `text-mono`   | 11px   | 0.688rem | 1.4         | 0.12em     | Eyebrows, `§` markers, uppercase meta        |
| `text-num`    | 10.5px | 0.656rem | 1.4         | 0.08em     | Getal-labels, timing-badges (`2 WKN`)        |

Definieer in `@theme`:

```css
@theme {
  --text-hero: 7rem;
  --text-hero--line-height: 1.02;
  --text-hero--letter-spacing: -0.05em;
  /* herhaal voor de rest */
}
```

### 2.4 Spacing-schaal

Tailwind's default 4px-trap is prima. Wel: gebruik alleen deze waarden, de rest van de schaal is er voor tooling maar niet voor ons.

| Rol                          | Class            | px      |
|------------------------------|------------------|---------|
| Intra-element (icon ↔ tekst) | `gap-2`, `gap-3` | 8–12    |
| Row-gap in lists             | `space-y-2.5`    | 10      |
| Hairline-afstand             | `mt-8 mb-5`      | 32 / 20 |
| Element-padding (cards)      | `p-8`            | 32      |
| Bento-padding (large)        | `p-10`           | 40      |
| Grid-gutters                 | `gap-6`, `gap-8`, `gap-10` | 24 / 32 / 40 |
| Vertical rhythm — small     | `py-20`          | 80      |
| Vertical rhythm — medium    | `py-28`          | 112     |
| Vertical rhythm — hero      | `pt-32 pb-36`    | 128 / 144 |
| Container horizontal        | `px-12`          | 48      |

**Verticaal ritme-regel:** tussen twee secties staat **altijd** `py-20`, `py-28`, of het hero-paar `pt-32 pb-36`. Niks daartussenin. Niks kleiners.

### 2.5 Border-radius

Laag en precies. We zijn geen SaaS-landing.

| Token              | Waarde | Gebruik                                    |
|--------------------|--------|--------------------------------------------|
| `rounded-none`     | 0      | Default. Hairlines, dividers.              |
| `rounded-[2px]`    | 2px    | Cards, bento's, logo-sq (klein), kleurstalen |
| `rounded-[4px]`    | 4px    | Logo-sq (middel), signatuur-block           |
| `rounded-[6px]`    | 6px    | Logo-sq (groot, 64px+)                      |
| `rounded-full`     | 9999px | Buttons, pillen, focus-dot                  |

**Niks anders.** Geen `rounded-lg`, geen `rounded-xl`. Die bestaan niet in dit systeem.

---

## 3. Typografie-regels

### 3.1 Wanneer welk gewicht

| Context                                    | Font     | Weight | Tracking  |
|--------------------------------------------|----------|--------|-----------|
| Hero H1, display, section H2, card-titels  | Geist    | 500    | -0.03 → -0.055em |
| Body, list-items, button-labels, nav-links | Geist    | 400    | 0         |
| Card-nummers, stat-getallen                | Geist    | 500    | -0.03 → -0.04em |
| Inline-nadruk in body (`<strong>`)         | Geist    | 500    | 0         |
| Eyebrows (`§ 001 — INDEX`), meta, `num`    | Geist Mono | 400 of 500 | 0.08 → 0.22em |
| Quote-attributie, watermark                | Geist Mono | 400  | 0.12em    |

**Geist 300 en 700 bestaan in de font-file, maar we gebruiken ze niet.** Weight 500 is onze "stevige" en weight 400 is onze "lichte". Geen zwaardere weights voor emphasis — gebruik kleur-contrast of grootte-contrast.

**Italics: nooit.** Als iets nadruk nodig heeft, gebruik `font-medium` of `text-teal-ink`. Geen italics in dit systeem.

### 3.2 Headline / body / caption hiërarchie

Per sectie geldt dit vaste patroon:

```
eyebrow (mono 11px, uppercase, tracking 0.12em, color ink-2)
    ↓ gap 12–20px (mb-3 of mb-5)
section-title (display, 40–64px, weight 500, tight tracking)
    ↓ gap 20–40px (mt-3 t/m mt-5)
body (14px, line-height 1.65, max-width 280–520px)
    ↓ gap 32px (mt-8)
hairline divider (1px, color-line)
    ↓ gap 20px (mb-5)
details / list / meta
```

Zet dit niet elke keer opnieuw in elkaar — abstrahereer als `<SectionHeader>`.

### 3.3 Mono: wanneer wel, wanneer niet

**Wel mono:**
- Eyebrows met `§` of `—` prefix
- Getal-badges naast list-items (`2 WKN`, `LOPEND`, `SLA`)
- Kleurwaarden, codes (`C-2026`, `#51A397`)
- Quote-attributie onder een pull-quote
- Footer-meta
- Uppercase labels >10 characters

**Niet mono:**
- Button-labels (sans 400, 13–13.5px)
- Nav-links (sans 400, 13.5px)
- Card-titels, card-beschrijvingen
- Body in cards
- Waardes in stat-meta-strips (`2 projecten / kwartaal` is sans, `— CAPACITEIT` is mono)

### 3.4 Tracking is niet onderhandelbaar

Grote displays krijgen **negatieve tracking** (-0.03em tot -0.055em) — hoe groter, hoe strakker. Kleine mono krijgt **positieve tracking** (0.08em tot 0.22em) — hoe kleiner, hoe luchtiger. Body blijft 0. Deze regel is absoluut.

---

## 4. Layout-principes

### 4.1 Container & grid

- **Max-width:** `max-w-[1360px]` op de buitenste container, altijd.
- **Horizontale padding:** `px-12` (48px) — geen uitzonderingen binnen desktop-range.
- **Grid:** `grid grid-cols-12 gap-10` voor hero-achtige layouts. `gap-6` voor cards, `gap-8` voor interne kolommen. Niet tussenin.
- **Viewport:** dit ontwerp is **desktop-first** op 1440px. Mobiel volgt later; documenteer die regels apart als het zover is. Ga niet responsive-guessen.

### 4.2 Column-patronen

Per type sectie is er één goedgekeurde kolom-split:

| Sectie-type              | Split      | Gebruik                               |
|--------------------------|------------|---------------------------------------|
| Hero (headline + meta)   | 9 / 3      | Grote kop links, contextpaneel rechts |
| Intro + body             | 5 / 7      | Titel+intro links, grid rechts        |
| Disciplines / cards      | 3 / 3 / 3 (= gap-6) | Gelijke card-grid            |
| Stat-strip               | 3 / 3 / 3 / 3 | Vier gelijke meta-items            |
| Style-strip (tokens-ish) | 3 / 6 / 3  | Palet, typo-showcase, signatuur       |
| Section-header (title + sub) | 1fr + max-w-280 | H2 links, ondersteuning rechts |

Andere splits niet gebruiken zonder hier eerst een regel voor toe te voegen.

### 4.3 Verticaal ritme — de absolute tabel

```
Hero:                         pt-32 pb-36   (128 / 144px)
Binnen hero, tussen blocks:   mt-16, mt-24  (hero-interne sprong)
Standaard sectie:             py-28          (112px top+bottom)
Dichte sectie (strip, meta):  py-20          (80px)
Tussen section-header en content: mb-16     (64px)
Tussen pillar/card-titel en body: mt-3       (12px) — dit is tight op doel
Na hairline divider:          mb-5           (20px)
```

Niets ertussen. Als je `py-24` wilt, weet je iets wat ik niet weet — discuss eerst.

### 4.4 Hairlines

Haarlijnen doen het werk dat shadows in andere systemen doen. Regels:

- `height: 1px`, `background: var(--color-line)` (10% ink).
- Horizontaal gebruikt voor: sectie-scheidingen, card-interne splits, tabel-rijen.
- Verticaal (`width: 1px`) voor: column-separators, nooit voor decoratie.
- Nooit stapelen. Eén hairline per logische scheiding.

---

## 5. Animatie-principes

### 5.1 Wat beweegt bij paginaload

Alleen content in de eerste viewport, gestaffeld via `delay`-classes:

```css
@keyframes riseIn { from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: none; } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.anim-rise { opacity: 0; animation: riseIn 1s cubic-bezier(.2,.7,.2,1) forwards; }
.anim-fade { opacity: 0; animation: fadeIn 1.2s ease forwards; }
```

Delays: `.05s, .2s, .35s, .5s, .65s, .8s, .95s, 1.1s, 1.3s` — in die volgorde, nooit meer dan 9 elementen in één reeks.

**Regel:** Elementen in de tweede viewport en lager krijgen **scroll-driven** animaties, niet onmiddellijke. Gebruik `IntersectionObserver` of Framer Motion's `whileInView={{ opacity: 1, y: 0 }}` met `viewport={{ once: true, margin: "-15%" }}`. Eén keer, bij entry. Nooit opnieuw.

### 5.2 Easing — vast menu

| Use-case                 | Easing                           | Duration   |
|--------------------------|----------------------------------|------------|
| Rise-in / fade-in        | `cubic-bezier(.2, .7, .2, 1)`    | 1000–1200ms |
| Wipe-reveal (SVG-tekst)  | `cubic-bezier(.7, 0, .2, 1)`     | 1100ms     |
| Hover (button, border)   | `ease`                           | 350ms      |
| Hover-state uitgebreid (card lift, row slide) | `cubic-bezier(.2, .7, .2, 1)` | 450–500ms |
| Infinite-loop (sway, breathe) | `ease-in-out`               | 3000–6000ms |

**Verboden easings:** `ease-in` alleen, `linear` voor UI (mag voor progress-bars), `cubic-bezier` met overshoot (`.34, 1.56, .64, 1` en varianten).

### 5.3 Continue/infinite animaties

Maximaal **twee** lopende animaties in een viewport:

- **`sway`** — alleen op het octopus-logo. Rotatie ±0.6deg, Y ±2px, duration 6s. Nooit op andere elementen.
- **`breathe`** — alleen op de `focus-dot` (beschikbaarheid-indicator). Opacity 0.35 → 1, duration 3s. Nooit op tekst, nooit op buttons.

**Wat nóóit een infinite animatie krijgt:** headlines, body-tekst, cards, icons (behalve logo), buttons, links, backgrounds, gradients (want die bestaan niet).

### 5.4 Hover-effecten

| Element          | Wat gebeurt er                                              |
|------------------|-------------------------------------------------------------|
| Button primary   | `background: ink → teal-ink` (ease 350ms)                   |
| Button ghost     | `border-color: 13% ink → 100% ink` (ease 350ms)             |
| Nav-link         | Onderstreping groeit van left via `scaleX(0) → scaleX(1)` (500ms) |
| Card (`pillar`)  | `border: 10% → 100% ink` + `translateY(-3px)` (450ms)       |
| Row (index-row)  | `bg: 5% ink` + `padding-left: 16px` + arrow `translateX` in |
| Logo-tile        | `logo-sq background: teal → ink`, ogen `fill: teal` (500ms) |

**Regel:** één hover-effect per element. Geen compound-effects (geen scale + shadow + color tegelijk).

### 5.5 Prefers-reduced-motion

Altijd respecteren. In `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .sway, .breathe, .ink-draw { animation: none !important; }
}
```

### 5.6 Wat níét beweegt

- Body-tekst. Ooit.
- Kleurstalen, hairlines, borders (behalve op hover).
- Backgrounds (geen parallax, geen scroll-fade, geen kleurverschuivingen).
- Numerieke stats (geen count-up animaties).
- Eyebrows, mono-labels.

Als je een design-review krijgt en iemand zegt "kunnen we dit laten bewegen?" — antwoord is default nee.

---

## 6. Component-regels

### 6.1 Buttons

Twee varianten. Meer niet.

**Primary:**
```tsx
<button className="btn-primary px-5 py-3 rounded-full text-[13.5px] inline-flex items-center gap-2">
  Plan een intake
  <ArrowRight />
</button>
```
```css
.btn-primary { background: var(--color-ink); color: var(--color-bone);
               transition: all .35s ease; }
.btn-primary:hover { background: var(--color-teal-ink); }
```

**Ghost:**
```tsx
<button className="btn-ghost px-5 py-3.5 rounded-full text-[13.5px] inline-flex items-center justify-between text-ink">
  Recent werk (3)
  <ArrowUpRight />
</button>
```
```css
.btn-ghost { border: 1px solid rgb(11 11 10 / 0.13);
             transition: all .35s ease; }
.btn-ghost:hover { border-color: var(--color-ink); }
```

**Regels:**
- Padding: `px-5 py-2.5` (klein) of `px-5 py-3` of `px-5 py-3.5` (groot). Niks anders.
- Altijd `rounded-full`. Geen vierkante buttons.
- Label altijd in sans 400, 13–13.5px. Nooit uppercase, nooit mono.
- Icons zijn 12px (klein) of 14px (groot) — stroke-width 1.6 of 1.8.
- Geen iconen zonder label. Geen labels zonder icon in nav-CTAs (CTA heeft altijd een pijl).
- Geen tertiaire button-variant. Als je iets minder prominent wilt, gebruik een navlink.

### 6.2 Links

**Nav-links** (alleen in header/footer-nav):
```css
.navlink { position: relative; color: var(--color-ink); }
.navlink::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -4px;
  height: 1px; background: var(--color-ink);
  transform: scaleX(0); transform-origin: left;
  transition: transform .5s cubic-bezier(.2,.7,.2,1);
}
.navlink:hover::after { transform: scaleX(1); }
```

**Inline-links in body:** `underline decoration-line underline-offset-4 hover:decoration-ink transition-colors duration-300`. Nooit teal. Nooit gekleurd.

**Icon-links (pijl-only):** bestaan niet. Elke link heeft een label.

### 6.3 Cards — varianten

**Bento** (feature-panels, token-demo's, neutrale blokken):
```css
.bento { border: 1px solid rgb(11 11 10 / 0.07);
         background: var(--color-paper);
         border-radius: 2px;
         transition: all .5s ease; }
.bento:hover { border-color: var(--color-ink); }
```

**Pillar** (discipline-cards, feature-cards met lift):
```css
.pillar { background: var(--color-paper);
          border: 1px solid rgb(11 11 10 / 0.09);
          border-radius: 2px;
          transition: all .45s cubic-bezier(.2,.7,.2,1); }
.pillar:hover { border-color: var(--color-ink); transform: translateY(-3px); }
```

**Pillar-structuur (vast):**
```
┌─ p-8 ──────────────────────────────┐
│  01                        [icon]  │   ← pnum (Geist 500, 34px) + picon (44x44 border-circle)
│                                     │
│  Product                            │   ← ptitle (Geist 500, 30px), mt-40
│  Scherpe probleemstelling...        │   ← body (14px, line-height 1.65, color ink-2), mt-3
│  ────────────────────────────────   │   ← hairline, mt-8 mb-5
│  Discovery sprint         2 WKN     │   ← list-row (13px sans + num 10.5px mono)
│  Roadmap & afbakening     1 WK      │
│  Meet- & leerplan         LOPEND    │
└─────────────────────────────────────┘
```

**Cards-regels:**
- Nooit een box-shadow. Ooit.
- Nooit een achtergrond anders dan `paper` (`#FBF9F5`) of transparent.
- Nooit een border-radius hoger dan 4px op cards.
- Nooit een card binnen een card genest. Max één niveau diepte.
- Geen gekleurde cards (behalve de signatuur-tile in teal, die is een uitzondering en hoort één keer per pagina voor te komen).

### 6.4 Eyebrows

Vast patroon:
```tsx
<span className="num">§ 002 — DISCIPLINES</span>
```

```css
.num { font-family: var(--font-mono);
       font-size: 10.5px;
       letter-spacing: 0.08em;
       color: var(--color-ink-2); }

.eyebrow { font-family: var(--font-mono);
           font-size: 11px;
           letter-spacing: 0.12em;
           text-transform: uppercase;
           color: var(--color-ink-2); }
```

**Eyebrow-regels:**
- Altijd uppercase, altijd mono, altijd `ink-2`.
- Prefix kiezen en consistent houden: `§ 001 — INDEX`, `— CAPACITEIT`, `§ KLEURPALET`. Per sectie-type één prefix.
- Maximaal ~30 characters. Als het langer is, is het geen eyebrow.
- Nooit teal, nooit ink, nooit kleuren.
- Staat **altijd** boven de section-title, nooit eronder, nooit ernaast zonder divider.

### 6.5 Section-headers

Standaard patroon (`<SectionHeader>` component):

```tsx
<div className="flex items-end justify-between mb-16">
  <div>
    <div className="num mb-3">§ 002 — DISCIPLINES</div>
    <h2 className="font-sans font-medium text-[64px] leading-[1.02] tracking-[-0.04em] max-w-[780px]">
      Drie disciplines. Één tafel.
    </h2>
  </div>
  <div className="max-w-[280px] text-[14px] leading-[1.65] text-ink-2 pb-3">
    Support-paragraaf rechts, max ~40 woorden.
  </div>
</div>
```

- Links: eyebrow + H2 (max-w-780px, nooit full-width).
- Rechts: optioneel support-blok, max-w-280px, body-size, kleur `ink-2`, `pb-3` om onder te lijnen.
- `mb-16` tussen header en content — vast.

### 6.6 Index-rows (tabel-achtig, voor werk/cases)

```css
.row {
  display: grid;
  grid-template-columns: 80px 1.1fr 2fr 120px 80px;
  align-items: center;
  gap: 24px;
  padding: 28px 0;
  border-top: 1px solid rgb(11 11 10 / 0.09);
  transition: background .3s ease, padding-left .4s ease;
}
.row:hover { background: rgb(11 11 10 / 0.02); padding-left: 16px; }
.row:hover .row-arrow { opacity: 1; transform: translateX(0); }
```

Kolommen in volgorde: `num | titel | beschrijving | tags | arrow`. Gebruik dit patroon voor alle lijst-achtige overzichten (cases, posts, teamleden).

### 6.7 Focus-dot

```css
.focus-dot {
  width: 6px; height: 6px;
  border-radius: 9999px;
  background: var(--color-teal);
  display: inline-block;
}
```

Altijd gepaard met `.breathe` als het "live" of "beschikbaar" betekent. Gebruik hem maximaal één keer per viewport. Als je er twee nodig hebt, is je UI ergens verkeerd.

---

## 7. Iconografie

- **Stroke-based, niet filled.** Standaard stroke: `1.2` (kleine iconen binnen `picon`), `1.6` of `1.8` (button-pijlen).
- **24x24 viewBox**, output-grootte 12–20px afhankelijk van context.
- **Kleur volgt tekst** (`stroke="currentColor"`). Niet hard-coden behalve binnen het teal-logo.
- **Lucide-react** als pakket. Geen gemixte sets.
- **Geen icon-only buttons** (zie §6.1).

---

## 8. Do's en don'ts — expliciet

### Do

- ✅ Eén teal-accent per viewport, altijd op een betekenisvol element.
- ✅ `font-weight: 500` is je "heavy". Body is 400. Gebruik grootte voor hiërarchie.
- ✅ Negatieve tracking op alles >24px. Positieve tracking op mono <12px.
- ✅ Line-height 1.65 op body. Altijd. Geen 1.5, geen 1.7.
- ✅ Rise-in animatie bij eerste viewport, scroll-driven bij de rest.
- ✅ Hairlines (1px, 10% ink) voor elke visuele scheiding.
- ✅ `max-w-[1360px] mx-auto px-12` op alle section-containers.
- ✅ `rounded-[2px]` op cards, `rounded-full` op buttons. Niks anders.
- ✅ Body-paragrafen begrenzen op max-width `240–520px`. Volledige leesbreedte is geen optie.

### Don't

- ❌ **Geen box-shadows.** Ooit. Borders doen het werk.
- ❌ **Geen gradients.** Niet op text, niet op backgrounds, niet op borders.
- ❌ **Geen italics.** Nadruk is `font-medium` of een kleurwisseling naar `teal-ink`.
- ❌ **Nooit gecentreerde paragraaf-tekst langer dan één zin.** Centered mag voor eyebrows, korte quotes, CTA's. Niet voor body.
- ❌ **Geen uppercase body-tekst.** Uppercase is gereserveerd voor eyebrows (mono).
- ❌ **Geen teal op tekst behalve `text-teal-ink` voor één accentwoord.** Geen teal buttons, geen teal links, geen teal cards (behalve signatuur-tile).
- ❌ **Geen glassmorphism / blur-panels.** We zijn niet Apple.
- ❌ **Geen parallax, geen scroll-hijacks, geen smooth-scroll-libraries.** Native scroll is goed genoeg.
- ❌ **Geen count-up animaties op getallen.** Getallen staan meteen op hun eindwaarde.
- ❌ **Geen emoji in UI-copy.** Mono-labels en `§`/`—` prefixes doen dit werk.
- ❌ **Geen Tailwind `prose`-klasse.** We schrijven onze eigen typografie.
- ❌ **Geen utility-classes die kleuren uit niet-tokens halen** (`bg-gray-100`, `text-zinc-500`). Alleen tokens.
- ❌ **Geen drie card-varianten.** Er is bento of pillar. Kies.
- ❌ **Geen hero op een sub-pagina.** De 112px display is alleen voor index (`/`).
- ❌ **Geen animaties toevoegen "omdat het kan".** Elke animatie moet een reden hebben (onboarding aandacht, status-indicator, navigatie-feedback).

---

## 9. Tech stack & dependencies

Exacte versies en pakket-namen — dit is wat de repo verwacht.

### 9.1 Core

```bash
npm i next@15 react@19 react-dom@19
npm i -D typescript @types/react @types/react-dom @types/node
```

- **Next.js 15** — App Router, React Server Components by default.
- **React 19** — `use()` hook, Actions, nieuwe ref-API.
- **TypeScript** — strict mode aan in `tsconfig.json` (`"strict": true`). Geen `any` zonder kommentaarregel die uitlegt waarom.

### 9.2 Styling

```bash
npm i -D tailwindcss@4 @tailwindcss/postcss postcss
```

- **Tailwind v4** — configuratie in CSS via `@theme` (zie §2). Geen `tailwind.config.ts` meer — alles in `app/globals.css`.
- PostCSS-plugin ipv Vite/CLI voor Next.js compatibility.

### 9.3 Animatie

```bash
npm i motion lenis
```

- **`motion`** — voorheen `framer-motion`. Dezelfde maintainer (Framer → Motion is een onafhankelijk project geworden in 2025), hernoemd op npm. Importeren vanaf `motion/react`:

  ```tsx
  import { motion, AnimatePresence } from "motion/react";
  ```

  **Niet** `framer-motion`. Dat pakket werkt nog, maar is niet meer actief.

- **`lenis`** — smooth-scroll. Ook hernoemd: het oude `@studio-freight/lenis` is deprecated, en het separate `@studio-freight/react-lenis` pakket is niet meer nodig. Alles zit in `lenis`, React-hooks via `lenis/react`:

  ```tsx
  import { ReactLenis, useLenis } from "lenis/react";
  ```

### 9.4 Icons

```bash
npm i lucide-react
```

Eén icon-pakket, geen gemixte sets (zie §7). Stroke-width 1.2 / 1.6 / 1.8 naar context.

### 9.5 Complete install (copy-paste)

```bash
npm i next@15 react@19 react-dom@19 motion lenis lucide-react
npm i -D typescript @types/react @types/react-dom @types/node \
         tailwindcss@4 @tailwindcss/postcss postcss
```

### 9.6 Hoe dit zich verhoudt tot §5 (animatie-regels)

De regels in §5 staan bovenaan. De library is gereedschap, geen excuus om meer te animeren.

**Motion vervangt CSS-keyframes voor:**
- Rise-in en fade-in op eerste viewport (`<motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [.2,.7,.2,1] }}>`).
- Scroll-driven reveals in tweede+ viewport (`whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-15%" }}`).
- `AnimatePresence` voor exit-animaties bij route-wissels of conditioneel renderen.

**CSS blijft voor:** `sway`, `breathe`, hover-transitions op buttons/navlinks, `ink-draw` SVG-stroke. Geen reden deze te verplaatsen naar Motion — `@keyframes` is lichter voor iets wat continu loopt.

**Lenis doet exact één ding:** smooth wheel-scroll op root-niveau. Niet gebruiken voor:
- Scroll-hijack / snap-sections (verboden in §5.6).
- Horizontale scroll-galeries.
- Parallax-effecten.

Setup in `app/layout.tsx`:

```tsx
"use client"; // alleen deze provider is client, de rest mag server blijven
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
```

`lerp: 0.1` en `duration: 1.2` zijn de gekalibreerde waardes — niet veranderen zonder team-overleg. Hogere lerp wordt schokkerig, lagere wordt traag.

**`prefers-reduced-motion`:** Lenis respecteert dit niet automatisch. Voeg in `SmoothScroll` een `useEffect` toe die de provider uitschakelt als de user reduced motion wil:

```tsx
const prefersReduced = typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReduced) return <>{children}</>;
```

Motion respecteert `prefers-reduced-motion` wel out-of-the-box via `useReducedMotion()` — gebruik die hook op elke `motion.*` met meer dan fade/rise.

---

## 10. File-locaties (Next.js conventie)

```
app/
  globals.css              ← @theme definitie, keyframes, utility-classes (btn-primary, navlink, pillar, bento, row, eyebrow, num)
  layout.tsx               ← next/font setup, <html className={`${geist.variable} ${geistMono.variable}`}>
  page.tsx                 ← hero
components/
  ui/
    Button.tsx             ← primary | ghost
    SectionHeader.tsx      ← eyebrow + H2 + optional support
    Eyebrow.tsx
    FocusDot.tsx           ← met optional breathing prop
    Hairline.tsx
  cards/
    Pillar.tsx             ← discipline-card template
    Bento.tsx
  logo/
    OctobusLogo.tsx        ← met sway-animatie, size prop
DESIGN.md                  ← dit bestand
```

Verander dit alleen in een losse PR, niet gemixed met feature-werk.

---

## 11. Wanneer dit document updaten

Update DESIGN.md **vóór** de code, niet erna. Een token bedenken tijdens het bouwen is hoe drift ontstaat.

Toevoegen vereist:
1. Use-case benoemen (in welke sectie komt dit voor?).
2. Bestaande tokens eerst proberen.
3. Als het echt een nieuwe primitieve is: naam, waarde, regel, do/don't.

Verwijderen mag altijd. Minder is de richting.

---

*C-2026 · Zuiver Lab · Final*
