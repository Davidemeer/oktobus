# DESIGN.md — Oktobus

> Single source of truth voor visueel ontwerp. Richting C · Zuiver Lab — live.
> Wijzig dit bestand voordat je iets aan de UI wijzigt. Niet andersom.

**Scope:** dit document is afgeleid uit de vijf statische HTML-prototypes (`index`, `belofte`, `werkwijze`, `werk`, `contact`) én de aanvankelijke design-richting. Waar het prototype en de eerdere richting afwijken, wint het prototype — dat is wat live gaat.

**Merknaam:** `Oktobus` (met k, Nederlands). De eerdere `Octobus` is deprecated — consequent `Oktobus` gebruiken in copy, page titles, alt-teksten, en metadata.

**Typografie:** Geist (sans) en Geist Mono. Geen Fraunces. Niet terugkomen op die beslissing zonder de hele stack te reviewen.

---

## 1. Ontwerpprincipes (lees dit eerst)

1. **Bone draagt, ink spreekt, teal wijst.** Teal is richtingaanwijzer — bij focus-state, bij een accentwoord in een grote kop, bij de positieve kant van een vergelijking (OKTOBUS vs. BUREAU), bij een "live" indicator. Nooit voor UI-chrome, nooit voor grote vlakken behalve het logo-tile en de één tweet-size signatuur-block.
2. **Stilte is een component.** Sectie-padding is nooit onder 80px. Uitzonderingen bestaan niet.
3. **Ritme is editoriaal.** De site leest als een magazine: `§` nummers, pagina-tellers (`— P. 03`), leestijd-aanduidingen, voetnoten, marginalia. Dat is het systeem, niet decoratie.
4. **Typografische hiërarchie doet het werk van kleur.** Grootte, gewicht, tracking. Geen kleurvlakken, geen boxes met rounded-corners, geen shadows.
5. **Animaties fluisteren.** Rise-in bij load, reveal-on-scroll daarna. Hovers 350–500ms. Marquee loopt continu maar onopvallend. Als je een animatie "ziet", is het mis.
6. **Mono is voor meta.** `§ 001 — INDEX`, `— P. 02`, `7 WKN`, `#51A397`, voetnoten, labels. Body en display zijn altijd sans.
7. **Geen effecten die niet bestaan.** Geen box-shadows, geen glassmorphism, geen gradients, geen glow, geen skeuomorfisme, geen neumorphism. Eén haarlijn is genoeg.
8. **Crescendo per pagina.** De hero-H1 wordt groter naarmate je dieper in de site komt: Home 112px → Belofte/Werkwijze 120px → Werk 128px → Contact 136px. Dit is bewust en vast.
9. **Dark sections zijn punctuatie.** Eén donkere sectie per pagina, max. Ink-background met bone-tekst op varierende opacity. Gebruikt voor de slotaccenten (CTA, samenhang).

---

## 2. Design Tokens

### 2.1 Kleuren

Als Tailwind v4 `@theme` in `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Basis — backgrounds in oplopende donkerte */
  --color-bone: #F3EFE9;        /* pagina-achtergrond standaard */
  --color-bone-2: #E9E4DB;      /* afwisselende secties (striping) */
  --color-bone-3: #DFD9CE;      /* bouwstraat "klaar"-tegels, subtielste vlak */
  --color-paper: #FBF9F5;       /* cards, bento, form-wrappers, bento-panels */

  /* Tekst */
  --color-ink: #0B0B0A;         /* primair: headlines, body, iconen */
  --color-ink-2: #63615C;       /* secundair: meta, descriptions, voetnoten */

  /* Accent — teal-familie */
  --color-teal: #51A397;        /* signatuur, focus-dot, accent-fill */
  --color-teal-ink: #2F6E66;    /* tekst-accent in displays, meta-highlights */
  --color-teal-soft: #C9E1DC;   /* zachte teal-fill voor vergelijkings-"OKTOBUS"-blokken */

  /* Signaalkleur — spaarzaam */
  --color-warn: #C2623A;        /* "niet de bottleneck", "context lekt" — waarschuwing in diagrammen en meta */

  /* Lijnen */
  --color-line: rgb(11 11 10 / 0.1);       /* standaard haarlijn (10% ink) */
  --color-line-soft: rgb(11 11 10 / 0.07); /* zachter, tussen dichtere rijen */
  --color-line-hair: rgb(11 11 10 / 0.12); /* cards, bento borders */

  /* Dark-section tekst-opacities (op ink background) */
  --color-on-ink: #F3EFE9;                       /* = bone, 100% */
  --color-on-ink-soft: rgb(243 239 233 / 0.88);  /* = #F3EFE9E0, lead-tekst */
  --color-on-ink-muted: rgb(243 239 233 / 0.80); /* = #F3EFE9CC, body */
  --color-on-ink-meta: rgb(243 239 233 / 0.67);  /* = #F3EFE9AA, support */
  --color-on-ink-faint: rgb(243 239 233 / 0.40); /* = #F3EFE966, eyebrow in dark */
}
```

**Gebruik in code:** altijd via klassen (`bg-bone-2`, `text-ink-2`, `border-line`, `bg-teal-soft`). Nooit hex inline behalve in SVG `fill`/`stroke` waar tokens niet landen — houd die set ook exact op bovenstaande waardes.

**Teal-regel, bijgesteld na review van alle pagina's:**
- **Teal als tekst (`text-teal`):** alleen in dark sections (want daar heeft ink geen contrast).
- **Teal-ink als tekst (`text-teal-ink`):** één accentwoord per kop, of een kort gekleurd zinsdeel in lead-paragrafen om contrast te geven aan een keyword (`"bouw een boekingssysteem"` werd `Google-vindbaarheid`). Deze toepassing mag meerdere keren voorkomen per pagina, maar nooit meer dan 1× per paragraaf.
- **Teal als fill:** focus-dot, logo-tile, signatuur-block, SVG-accenten (teal dots in een diagram), geselecteerde tag (`tag-on`), positieve kant van een vergelijking (border `teal`, subtiele `teal-soft` fill).
- **Niet teal:** buttons (default — tenzij op ink background, dan mag teal als contrast-CTA), body-paragrafen, nav-links, cards, eyebrows, section-headers.

### 2.2 Font-stacks

```css
@theme {
  --font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace;
}
```

Preload in `app/layout.tsx` via `next/font/google`:

```ts
import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
```

OpenType-features op `body`:
```css
body { font-feature-settings: "ss01", "cv11"; }
```

### 2.3 Font-sizes & line-heights

Elke regel heeft een vaste use-case. Niet interpoleren.

| Token              | px     | rem      | line-height | tracking  | Gebruik                                                  |
|--------------------|--------|----------|-------------|-----------|----------------------------------------------------------|
| `text-hero-xl`     | 136px  | 8.5rem   | 0.94        | -0.05em   | Hero H1 Contact (grootste op de hele site)               |
| `text-hero-l`      | 128px  | 8rem     | 0.96        | -0.05em   | Hero H1 Werk                                             |
| `text-hero-m`      | 120px  | 7.5rem   | 0.98        | -0.05em   | Hero H1 Belofte / Werkwijze                              |
| `text-hero-s`      | 112px  | 7rem     | 1.02        | -0.05em   | Hero H1 Home                                             |
| `text-display-l`   | 96px   | 6rem     | 1           | -0.045em  | Dark CTA-section H2 Belofte                              |
| `text-display-m`   | 88px   | 5.5rem   | 1.02        | -0.045em  | Dark CTA H2 Home / Werkwijze / Werk                      |
| `text-display-s`   | 80px   | 5rem     | 1           | -0.045em  | Dark Samenhang-H2 Werkwijze                              |
| `text-pillar-num`  | 200px  | 12.5rem  | 0.88        | -0.05em   | Grote pijler-nummers in Werkwijze (01 / 02 / 03)         |
| `text-promise-num` | 110px  | 6.875rem | 0.9         | -0.05em   | Belofte-blok nummers (01 / 02 / 03)                      |
| `text-h2`          | 72px   | 4.5rem   | 1.02        | -0.04em   | Studio-H2 Home, Voor-wie-H2 Belofte                      |
| `text-h2-s`        | 64px   | 4rem     | 1.02        | -0.04em   | Section-H2 standaard (Belofte-teaser, Werkwijze-teaser, Dwarsdoorsnede, FAQ, Tijdlijn) |
| `text-h3-l`        | 56px   | 3.5rem   | 1.02        | -0.04em   | Direct-H2 Contact                                         |
| `text-h3`          | 52px   | 3.25rem  | 1.02        | -0.035em  | Pijler-H2 Werkwijze (na de grote 200px)                  |
| `text-h3-s`        | 48px   | 3rem     | 1.05        | -0.035em  | Promise-H2 Belofte (per blok)                            |
| `text-pillar`      | 34px   | 2.125rem | 1.1         | -0.035em  | Pillar card-titel                                        |
| `text-stat`        | 32px   | 2rem     | 1.1         | -0.03em   | Capacity-cell getallen                                   |
| `text-case-title`  | 38px   | 2.375rem | 1.05        | -0.035em  | Case-titel (Werk)                                        |
| `text-lead-xl`     | 28px   | 1.75rem  | 1.35        | -0.02em   | Belofte hero-lead                                        |
| `text-lead-l`      | 24px   | 1.5rem   | 1.4         | -0.018em  | Werkwijze hero-lead, pullquote-sub, studio-H2 body       |
| `text-lead-m`      | 22px   | 1.375rem | 1.4         | -0.015em  | Contact-lead, Werk-lead, direct-link titel                |
| `text-lead-s`      | 20px   | 1.25rem  | 1.5         | -0.01em   | Dark-section body lead                                    |
| `text-check`       | 24px   | 1.5rem   | 1.2         | -0.025em  | Checklist-items Belofte ("Voor wie dit werkt")           |
| `text-toc`         | 26px   | 1.625rem | 1.1         | -0.025em  | TOC-row titels Werkwijze                                  |
| `text-body-l`      | 18px   | 1.125rem | 1.65        | 0         | Pijler-body, promise-body                                 |
| `text-body`        | 17px   | 1.063rem | 1.65        | 0         | Belofte-blok body                                         |
| `text-body-s`      | 14.5px | 0.906rem | 1.65        | 0         | Pillar-card descriptions                                  |
| `text-body-xs`     | 14px   | 0.875rem | 1.65        | 0         | Hero-meta-column, card-footer-copy                        |
| `text-ui`          | 15px   | 0.938rem | 1.5         | 0         | Nav-inline-link, CTA-button-grote                         |
| `text-ui-s`        | 13.5px | 0.844rem | 1.5         | 0         | Nav-links, standaard button                                |
| `text-list`        | 13px   | 0.813rem | 1.5         | 0         | Pillar-list, tag, brick-name, form-tag                     |
| `text-eyebrow`     | 11px   | 0.688rem | 1.4         | 0.12em    | Eyebrows met `§`, pagina-teller, UPPERCASE meta-labels    |
| `text-num`         | 10.5px | 0.656rem | 1.4         | 0.08–0.1em | Capaciteit-labels, case-meta, voetnoten                   |
| `text-num-xs`      | 10px   | 0.625rem | 1.4         | 0.08em    | SVG-teksten, voetnoot-supers, diagram-labels              |

### 2.4 Spacing-schaal

| Rol                                      | Class/px          | px      |
|------------------------------------------|-------------------|---------|
| Intra-element (icon ↔ tekst)             | `gap-2`, `gap-3`  | 8–12    |
| Row-gap in lists                         | `space-y-2.5`     | 10      |
| Form-field-interne-gap (label→input)     | 8px               | 8       |
| Paragraph-gap binnen dezelfde blok       | `mt-5`, `mt-6`    | 20–24   |
| Hairline-afstand                         | `mt-8 mb-5`       | 32 / 20 |
| Kop → body                               | `mt-5`, `mt-6`    | 20–24   |
| Lead-paragraph stacking                  | `mt-6`            | 24      |
| Body → diagram                           | `mt-8`, `mt-12`   | 32–48   |
| Pillar/bento padding-s                   | `p-7` (28px)      | 28      |
| Pillar/bento padding                     | `p-8` (32px)      | 32      |
| Pillar/bento padding-l                   | `p-10` (40px)     | 40      |
| Grid-gutter — cards                      | `gap-6`           | 24      |
| Grid-gutter — columns                    | `gap-8`, `gap-10`, `gap-12`, `gap-16` | 32 / 40 / 48 / 64 |
| Container horizontal                     | `px-12`           | 48      |
| Vertical rhythm — compact                | `py-20`           | 80      |
| Vertical rhythm — standaard              | `py-28` / `py-30` | 112 / 120 |
| Vertical rhythm — dark CTA               | `py-36`           | 140     |
| Vertical rhythm — hero                   | `pt-24 pb-20`     | 96 / 80 |
| Hero-meta-strip offset                   | `mt-24`           | 96      |
| Section-header → content                 | `mb-16`           | 64      |
| Section-header → dense content           | `mb-14`           | 56      |

**Verticaal ritme — de absolute tabel:**

```
Hero (alle pagina's):                          pt-24 pb-20        (96 / 80)
Hero meta-strip offset:                        mt-24              (96)
Standaard content-sectie:                      py-20              (80)
Grotere content-sectie (teaser, detail):       py-30              (120)
Dark CTA / Dark samenhang sectie:              py-36              (140)
Tussen section-header en content:              mb-14 of mb-16     (56 / 64)
Tussen eyebrow en H2:                          mb-3 of mb-4       (12 / 14)
Tussen H2 en lead-paragraph:                   mt-5 of mt-6       (20 / 24)
Tussen lead-paragraphs onderling:              mt-6               (24)
Tussen paragraph en diagram:                   mt-8 of mt-12      (32 / 48)
Na hairline divider:                           mb-5               (20)
```

### 2.5 Border-radius

| Token              | Waarde | Gebruik                                          |
|--------------------|--------|--------------------------------------------------|
| `rounded-none`     | 0      | Default. Hairlines, dividers, plat               |
| `rounded-[2px]`    | 2px    | Cards, bento, pillar, tag, bouwstraat-brick, form-inputs, ph-stripe |
| `rounded-[4px]`    | 4px    | Logo-sq op 44px, signatuur-block, teal-tile accent   |
| `rounded-[6px]`    | 6px    | Logo-sq op 76px (hero-inline), grote signatuur-tile  |
| `rounded-full`     | 9999px | Buttons, focus-dot, focus-ring, tag-dot, marquee-dot |

Niets anders. Geen `rounded-lg`, `rounded-xl`, `rounded-2xl`.

---

## 3. Typografie-regels

### 3.1 Wanneer welk gewicht

| Context                                             | Font       | Weight | Tracking             |
|-----------------------------------------------------|------------|--------|----------------------|
| Hero H1, display H2/H3, pijler-num, promise-num     | Geist      | 500    | -0.03em → -0.05em    |
| Body, lead, list-items, button-labels, nav-links    | Geist      | 400    | 0                    |
| Capacity-waarde, card-nummer, stat-getal            | Geist      | 500    | -0.03em → -0.04em    |
| Inline-emphasis (`<strong>` of `font-medium`)       | Geist      | 500    | 0                    |
| Eyebrows (`§ 001`), meta, voetnoot-sup, num         | Geist Mono | 400    | 0.08em → 0.22em      |
| Footer-heads (`— Navigatie`)                        | Geist Mono | 500    | 0.12em               |
| Quote-attributie, watermark                         | Geist Mono | 400    | 0.12em               |

**Weights 300/600/700 zijn geladen** (voor flex-room) maar onze huisstijl gebruikt alleen **400 en 500**. Geen zwaarder voor emphasis — gebruik kleur-contrast (`text-teal-ink`) of grootte-contrast in plaats daarvan.

**Italics: niet in de UI.** Als iets nadruk nodig heeft: `font-medium` of `text-teal-ink`. De enkele `<em>` in werkwijze-pijler-02 is juist `font-style: normal` gezet — als je `em` gebruikt voor semantiek, overrule de browser-default consequent.

### 3.2 Page-header patronen

Elke pagina heeft dezelfde opening (zie alle 5 prototypes):

```
┌─ wrap · pt-24 ─────────────────────────────────────┐
│  § WERK — P. 04      ────────────   3 CASES · 2025–2026   │  ← page-indicator rij, mb-20
│                                                            │
│  § 001 — INTRO          [lead-tekst rechts]               │  ← eyebrow + h1 + rechter intro
│  Recent                                                    │
│  werk.                                                     │
└────────────────────────────────────────────────────────────┘
```

Vaste opbouw:
1. Page-indicator row: eyebrow links (`§ WERK — P. 04`), `flex-1` hairline, eyebrow rechts (meta: leestijd, count, slot).
2. Grid-split (5/7 of 9/3) met links een eyebrow + grote H1 (met regel-break) en rechts de lead-paragraph.
3. H1-kleurregel: de laatste regel van de H1 krijgt **altijd** `text-teal-ink` op het sluitwoord (`belofte.`, `bouwen we.`, `werk.`, `praten.`) of — alleen op Home — op een midden-woord (`werkt.`).
4. Marginalia: pagina-teller (01–05 per hoofdsectie) in de page-indicator.

### 3.3 Mono: wanneer wel, wanneer niet

**Wel mono:**
- Eyebrows met `§` of `—` prefix
- Pagina-tellers (`§ BELOFTE — P. 02`)
- Getal-badges naast list-items (`2 WKN`, `LOPEND`, `SLA`)
- Voetnoot-superscript-markers en voetnoot-body
- Meta-labels in cards (`— 01 / PRODUCT`)
- Case-meta (`— STACK`, `— DUUR`, `— ROL`)
- Capacity-labels (`— Capaciteit`, `— Tijd tot live`)
- Diagram-labels binnen SVG's
- Form-veld-labels (`— Naam`, `— Bedrijf`, `— E-mail`)
- Footer-column-heads (`— Navigatie`, `— Contact`)

**Niet mono:**
- Button-labels (sans 400)
- Nav-links (sans 400)
- Card-titels, card-beschrijvingen
- Body in cards
- Waardes in stat-meta-strips (`2 projecten / kwartaal` is sans — alleen het label erboven is mono)
- TOC-row-titels
- Direct-link-titel (`info@oktobus.nl` — sans display)

### 3.4 Tracking

| Context                           | Tracking          |
|-----------------------------------|-------------------|
| Hero H1 (112–136px)               | -0.05em           |
| Display H2 dark (80–96px)         | -0.045em          |
| H2 standaard (64–72px)            | -0.04em           |
| H3 (48–56px)                      | -0.035em          |
| Pillar-titel (34px)               | -0.035em          |
| Display text op 22–28px           | -0.015 → -0.025em |
| Lead 22–28px                      | -0.015 → -0.02em  |
| Body 14–18px                      | 0                 |
| Mono 10–13px                      | +0.08em           |
| Eyebrow uppercase 11px            | +0.12em           |
| Footer-head mono uppercase        | +0.12em           |
| Logo-text "Oktobus" (wm)          | +0.02em           |
| Dark-section signatuur caps       | +0.22em           |

Regel: hoe groter, hoe strakker negatief. Hoe kleiner, hoe luchtiger positief. Body blijft 0.

### 3.5 Kleur-accenten in tekst

- `text-teal-ink` op **sluitwoord van hero-H1** en op **één keyword per lead-paragraph** (bv. "Wij zitten daartussen", "Google-vindbaarheid", "dag 1000", "werkt", "herkenbaar", "uitpakt").
- `text-ink-2` voor een **halve zin in een H2** die als subtitel functioneert: *"Oktobus is een klein team van drie. **Product, design en engineering in één.**"* ← het tweede deel is `ink-2`.
- In dark sections: `text-teal` op accentwoorden (want `teal-ink` is te donker tegen ink-bg).
- Supra-accent (`<sup>` voor voetnoten): `color: teal-ink`, font-mono, 10px.

---

## 4. Layout-principes

### 4.1 Container & grid

- **Max-width:** `max-w-[1360px]` op de `.wrap` — de buitenste container. Altijd.
- **Horizontale padding:** `px-12` (48px). Geen uitzonderingen.
- **Viewport:** desktop-first op 1440px. Mobiel is een aparte exercitie — documenteer als je daar aan begint.

### 4.2 Column-patronen (vastgezet uit de prototypes)

| Gebruik                              | Split                    | Voorbeeld                                         |
|--------------------------------------|--------------------------|---------------------------------------------------|
| Hero — home                          | 9fr / 3fr                | Grote H1 links, meta-rechter-column (260px max)   |
| Hero — subpagina's                   | 5fr / 7fr                | Eyebrow+H1 links, lead-paragraph rechts           |
| Hero — Contact / dark-CTA            | 6fr / 6fr                | H1 links, lead + CTA-group rechts                 |
| Studio/Voor-wie-split                | 3fr / 9fr                | Eyebrow+label links, grote H2 + content rechts    |
| Promise-block (Belofte)              | 2fr / 5fr / 5fr          | Nummer, H2, body+diagram                          |
| Pillar-block (Werkwijze)             | 5fr / 7fr                | Eyebrow+200-px-nummer+H2 links, body+diagram rechts |
| Case-row (Werk)                      | 2fr / 5fr / 4fr / 2fr    | § + jaar, kicker+titel+diagram, body+meta, pijler-link |
| Pullquote                            | 2fr / 8fr / 2fr          | § links, pullquote midden, leeg rechts            |
| Studio-team-strip                    | 3 × 1fr                  | Drie bento's met portretten                       |
| Pillar-card-grid                     | 3 × 1fr                  | Discipline/belofte cards, gap-6                   |
| Capacity-strip                       | 4 × 1fr                  | Vier gelijke meta-cells                           |
| Dark-CTA                             | 5fr / 7fr of 6fr / 6fr   | H2 links, lead + CTA rechts                       |
| FAQ-split                            | 5fr / 7fr                | Eyebrow+H2+intro links, details-accordion rechts  |
| Contact-intake                       | 5fr / 7fr                | Direct-links+studio links, form rechts            |

Andere splits gebruiken? Voeg ze eerst toe aan deze tabel.

### 4.3 Verticaal ritme — wat waar

Per sectietype is de padding vast. Wijk niet af zonder reden.

```
Hero (p. 1 van elke pagina):      pt-24 pb-20   (96 / 80)
Studio-sectie (Home):              py-20         (80 / 80)
Teaser-secties (belofte-teaser):   py-30         (120 / 120)
Page-body-secties (pillars/promises): py-30     (120 / 120)
Voor-wie / Dwarsdoorsnede / FAQ:   py-30         (120 / 120)
Dark CTA / Dark samenhang:         py-36         (140 / 140)
```

Tussen secties onderling: niets extra. De `py-X` is full-padding — volgende sectie begint direct met zijn eigen padding.

### 4.4 Achtergrond-afwisseling (editorial striping)

Secties alterneren tussen bone, bone-2 en ink:

- Default: **`bg-bone`** (`#F3EFE9`).
- "Accent-sectie" (om ritme te breken): **`bg-bone-2`** (`#E9E4DB`). Gebruik 1× per pagina, midden/achter.
- "Editoriaal hoogtepunt": **`bg-ink`** (dark). 1× per pagina, aan het einde (CTA of samenhang).

Nooit twee bone-2's of twee ink-secties op dezelfde pagina. Nooit bone → bone-2 → bone → bone-2 (te kabbelend).

### 4.5 Hairlines

- Horizontaal `height: 1px; background: var(--color-line);` — scheidingen tussen rijen (cases, promise-blocks, form-field-tops, direct-link-rijen).
- Verticaal: alleen in diagram-strips (bureau vs oktobus), nooit als lay-out-separator.
- `border-block` (top+bottom) voor ingesloten rijen (zoals de laatste direct-link).
- Nooit meer dan één hairline tussen twee elementen. Nooit stapelen.

---

## 5. Animatie-principes

### 5.1 Rise-in (eerste viewport only)

```css
@keyframes riseIn { from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: none; } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.anim-rise { opacity: 0; animation: riseIn 1s cubic-bezier(.2,.7,.2,1) forwards; }
.anim-fade { opacity: 0; animation: fadeIn 1.2s ease forwards; }
```

Delay-ladder: `.d-1` → `.05s`, `.d-2` → `.2s`, `.d-3` → `.35s`, `.d-4` → `.5s`, `.d-5` → `.65s`, `.d-6` → `.8s`, `.d-7` → `.95s`, `.d-8` → `1.1s`, `.d-9` → `1.3s`.

Maximaal 9 elementen in één reeks. Alleen op content in de eerste viewport.

### 5.2 Reveal-on-scroll

Alle `.reveal`-elementen (en hun `.d-X` varianten) animeren wanneer ze in view komen, met een margin van `-15%` (dus: pas als ze echt goed in beeld zijn, niet bij eerste millimeter). Eén keer, bij entry. Nooit opnieuw bij scroll-up.

Met Motion:
```tsx
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-15%" }}
  transition={{ duration: 1, ease: [.2, .7, .2, 1] }}
/>
```

Delay-ladder uit §5.1 werkt ook hier: `transition={{ ..., delay: 0.2 }}` voor `.d-2` etc.

### 5.3 Easing — vast menu

| Use-case                              | Easing                         | Duration      |
|---------------------------------------|--------------------------------|---------------|
| Rise-in / reveal-in                   | `cubic-bezier(.2, .7, .2, 1)`  | 1000 ms       |
| Fade-in                               | `ease`                         | 1200 ms       |
| Wipe-reveal (SVG-tekst / ink-draw)    | `cubic-bezier(.7, 0, .2, 1)`   | 1100 ms       |
| Hover — button/navlink/border         | `ease`                         | 350 ms        |
| Hover-uitbreid — card lift, row slide | `cubic-bezier(.2, .7, .2, 1)`  | 400–500 ms    |
| Hover — details/faq open              | `ease`                         | 300 ms        |
| Parallax-layer (portrait stripes)     | `linear` (scroll-gedreven)     | real-time     |
| Marquee                               | `linear`                       | 40–60 s loop  |
| Magnetic hover (btn-magnet)           | `cubic-bezier(.2, .7, .2, 1)`  | 250 ms        |
| Infinite — sway, breathe              | `ease-in-out`                  | 3000–6000 ms  |

**Verboden:** `ease-in` in isolatie (UI voelt sloom), `linear` voor state-transitions (marquee/parallax uitgezonderd), bezier met overshoot.

### 5.4 Continue/infinite animaties

Hard plafond: **3 gelijktijdig lopend** per viewport (sway + breathe + marquee is het maximum).

- **`sway`** — alleen octopus-logo's. ±0.6deg, Y ±2px, 6s.
- **`breathe`** — focus-dots ("live"-indicator). Opacity 0.35 → 1, 3s.
- **`marquee`** — horizontaal schuivende band tekst (zie §6.11). Linear, 40–60s per loop.
- **`focus-ring`** (Home capacity / Contact capacity): pulserende ring om focus-dot, subtieler dan breathe.
- **`ink-draw`** — SVG-tekst outline die zichzelf tekent bij eerste load (`OKTOBUS · STUDIO · AMSTERDAM · ...`). `stroke-dasharray: 260; stroke-dashoffset: 260 → 0`. 2.2s met `.6s` delay. Slechts 1× per pagina, alleen home.

Niet toevoegen: headlines, body-tekst, cards, icons buiten logo, buttons, backgrounds.

### 5.5 Parallax-layer

Gebruikt op `.ph-stripe.parallax-layer` — de portretten in de studio-strip (Home). `data-rate="0.04"` tot `0.08`: scroll-y × rate wordt `translateY` op het element. Subtiel, nooit boven `0.1`. In prefers-reduced-motion: disable helemaal.

Niet uitbreiden naar andere elementen. Parallax is voor één patroon (team-portretten) en niets anders.

### 5.6 Magnetic hover (`btn-magnet`)

Wrapper rond CTA's. Op mouse-enter beweegt de inner `btn-primary`/`btn-ghost` licht mee met de cursor-positie (max 6–8px delta), returnt bij leave. Transition 250ms cubic-bezier(.2, .7, .2, 1). Disabled op touch en reduced-motion.

### 5.7 Hover-effecten

| Element                     | Wat gebeurt er                                                               |
|-----------------------------|------------------------------------------------------------------------------|
| Button primary              | `background: ink → teal-ink` (ease 350ms)                                    |
| Button ghost                | `border: 13% ink → 100% ink` (ease 350ms)                                    |
| Button on dark (teal-fill)  | `opacity: 1 → 0.9` (350ms) — géén kleurwijziging                              |
| Nav-link                    | Underline `scaleX(0) → scaleX(1)` from-left (500ms)                          |
| Card (`pillar`, `bento`)    | `border: 10% → 100% ink` + `translateY(-3px)` (450ms)                        |
| TOC-row                     | `bg: rgb(11 11 10 / 0.02)` + `padding-left: 16px` + arrow slide (400ms)      |
| Case-row                    | Variant van TOC-row — zelfde slide + arrow                                   |
| Direct-link (contact)       | `padding-left: 12px` + arrow slide (400ms)                                   |
| FAQ-summary                 | Plus rotates naar `×` via `rotate(90deg)` op één van de strokes (300ms)      |
| Tag (toggled `tag-on`)      | `background: teal`, `color: white`, `border: teal-ink`, `.dot: white`        |
| Logo-tile                   | `logo-sq bg: teal → ink`, ogen `fill: teal` (500ms)                          |
| Form-input focus            | `border-color: line → ink`, géén ring/shadow (200ms)                         |

**Regel:** één hover-effect per element. Geen compound (scale + bg + shadow).

### 5.8 Prefers-reduced-motion

Altijd respecteren.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .sway, .breathe, .ink-draw, .marquee-track { animation: none !important; }
  .parallax-layer { transform: none !important; }
}
```

Motion respecteert dit via `useReducedMotion()`. Lenis niet — expliciet uitschakelen in SmoothScroll-provider (zie §9.6).

### 5.9 Wat niet beweegt

- Body-tekst. Ooit.
- Kleurstalen, hairlines, borders (behalve hover).
- Backgrounds — geen scroll-gedreven kleurverschuivingen, geen gradient-parallax.
- Numerieke stats — geen count-ups.
- Eyebrows, mono-labels.
- Form-inputs behalve focus-border.

---

## 6. Component-regels

### 6.1 Buttons

Drie varianten. Meer niet.

**Primary (default — ink background):**
```tsx
<a href="/contact" className="btn-magnet">
  <span className="btn-primary">
    Plan een kennismaking
    <ArrowRight className="w-3 h-3" strokeWidth={1.8} />
  </span>
</a>
```
```css
.btn-primary {
  background: var(--color-ink);
  color: var(--color-bone);
  padding: 10px 20px;   /* standaard — zie varianten hieronder */
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  transition: background .35s ease;
}
.btn-primary:hover { background: var(--color-teal-ink); }
```

**Ghost:**
```css
.btn-ghost {
  background: transparent;
  border: 1px solid rgb(11 11 10 / 0.13);
  color: var(--color-ink);
  padding: 10px 20px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  transition: border-color .35s ease;
}
.btn-ghost:hover { border-color: var(--color-ink); }
```

**Primary-on-dark (teal fill — alleen in dark sections):**
```css
.btn-primary.on-ink {
  background: var(--color-teal);
  color: var(--color-ink);
}
.btn-primary.on-ink:hover { opacity: 0.9; }
```

**Button-formaten:**

| Gebruik                                     | Padding         | Font-size |
|---------------------------------------------|-----------------|-----------|
| Nav (compact)                               | `10px 20px`     | 13px      |
| Hero side-column / sectie-inline            | `14px 22px`     | 13.5px    |
| CTA primair (dark + mid-page)               | `18px 28px`     | 15px      |

Regels:
- Altijd `rounded-full`.
- Label in sans 400.
- Icon 12–14px, stroke-width 1.6 of 1.8.
- Nooit icon-only. Nooit label-only als het een CTA is (pijl erbij).
- Op hero side-column: `min-width: 240px`, `justify-content: space-between` voor de rij met label + pijl aan de andere kant.
- Wrap altijd in `.btn-magnet` voor magnetic hover (§5.6). Zelfs als JS niet laadt, werkt de button gewoon.

### 6.2 Links

**Nav-links** (header):
```css
.navlink {
  position: relative;
  color: var(--color-ink);
  font-size: 13.5px;
}
.navlink::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: -4px;
  height: 1px; background: var(--color-ink);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .5s cubic-bezier(.2,.7,.2,1);
}
.navlink:hover::after,
.navlink[aria-current="page"]::after { transform: scaleX(1); }
```

**Inline-"read more" style** (teaser "Lees meer →", "Bekijk onze werkwijze →"): gebruik `.navlink` met `font-size: 15px; padding-bottom: 6px;` — de onderstreping krijgt dan extra lucht.

**Direct-link rijen** (contact, zie §6.14): geen underline, wel een volledige rij-hover (padding-left shift + arrow-fade).

**Body-links:** `underline decoration-line underline-offset-4 hover:decoration-ink transition-colors duration-300`. Nooit teal.

### 6.3 Cards — varianten

Er zijn **drie** card-types, elk met een vaste toepassing:

**`bento`** — studio-strip team-portretten, signatuur, UI-widgets in een grid.
```css
.bento {
  border: 1px solid var(--color-line-soft);
  background: var(--color-paper);
  border-radius: 2px;
  padding: 28px 28px 32px;
  transition: border-color .5s ease;
}
.bento:hover { border-color: var(--color-ink); }
```

**`pillar`** — belofte-cards, werkwijze-teaser-cards, homepage-studio-uitleg.
```css
.pillar {
  background: var(--color-paper);
  border: 1px solid var(--color-line-hair);
  border-radius: 2px;
  padding: 32px;
  transition: all .45s cubic-bezier(.2, .7, .2, 1);
}
.pillar:hover {
  border-color: var(--color-ink);
  transform: translateY(-3px);
}

.pillar .pnum {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 34px;
  letter-spacing: -0.04em;
  line-height: 1;
}
.pillar .picon {
  width: 44px; height: 44px;
  border-radius: 9999px;
  border: 1px solid rgb(11 11 10 / 0.13);
  display: grid;
  place-items: center;
  transition: border-color .4s ease;
}
.pillar:hover .picon { border-color: var(--color-ink); }
.pillar .ptitle {
  font-weight: 500;
  font-size: 34px;
  letter-spacing: -0.035em;
  line-height: 1.1;
  margin-top: 40px;
}
```

**`case`** — case-rijen op de Werk-pagina (zie §6.10).

**Cards-regels:**
- Nooit een box-shadow.
- Achtergrond altijd `paper` (`#FBF9F5`) of transparent.
- `border-radius: 2px` — punt uit.
- Max één niveau genesteld. Geen cards-in-cards.
- In dark sections: geen cards, alleen inline structuren (geen tweede achtergrondlaag).

### 6.4 Eyebrows

```css
.num {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: var(--color-ink-2);
  line-height: 1.4;
}
.eyebrow, .num.uppercase {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

**Patronen:**
- `§ 001 — INDEX`, `§ 002 — STUDIO` — sectie-markers.
- `§ BELOFTE — P. 02` — pagina-tellers in hero.
- `— CAPACITEIT`, `— TIJD TOT LIVE` — capacity-labels.
- `— 001 / STUDIO` — alternatief prefix voor meta-columns.
- `— STACK`, `— DUUR`, `— ROL` — case-meta.
- `— PIJLER · 01`, `— BELOFTE · 02` — sub-markers.
- `— HERKENNING · A`, `— HERKENNING · B` — checklist-items.

**Regels:**
- Altijd mono, altijd `ink-2`, (uppercase bij `.eyebrow`-variant).
- Prefix vast per sectie-type (`§` voor hoofdsecties, `—` voor sub/meta).
- Max ~30 characters.
- In dark sections: `color: var(--color-on-ink-faint)` (40% bone), niet teal.
- Staat altijd **vóór** de H2, nooit tussen of na.

### 6.5 Page-indicator row (hero-opening, alle pagina's)

```tsx
<div className="flex items-center gap-4 mb-20" /* animated anim-rise d-2 */>
  <span className="num">§ WERK — P. 04</span>
  <span className="hairline flex-1" />
  <span className="num">3 CASES · 2025–2026</span>
</div>
```

- `gap-4` (18px), `mb-20` (80px) onder.
- Linker eyebrow: pagina-id + teller. Rechter eyebrow: context-info (datum, count, leestijd, slot).
- Hairline tussen in: `flex: 1`, 1px hoog, `line` kleur.

### 6.6 Section-header

Twee varianten.

**Standaard (side-by-side H2 + support):**
```tsx
<div className="flex items-end justify-between mb-14">
  <div>
    <div className="num mb-3">§ 004 — WERKWIJZE</div>
    <h2 className="font-sans font-medium text-[64px] leading-[1.02] tracking-[-0.04em] max-w-[800px]">
      Hoe we bouwen.
    </h2>
  </div>
  <a href="/werkwijze" className="navlink text-[15px] pb-1.5">
    Bekijk onze werkwijze →
  </a>
</div>
```

**Split (eyebrow+H2 links, lead rechts):**
Voor Voor-wie (Belofte), Studio (Home): 5/7 of 3/9 grid — zie §4.2.

### 6.7 Hero — alle pagina's

Structuur (homepage voorbeeld):

```
wrap · pt-24 pb-20
├── page-indicator row (§ 001 — INDEX  ──────  AMSTERDAM · EST. 2025)     mb-16
├── grid [9fr | 3fr]  gap-12
│   ├── H1 (112px, 3 regels, laatste woord teal-ink, inline-logo-tile in regel 2)
│   └── meta-column
│       ├── — 001 / STUDIO  (eyebrow)
│       ├── korte paragraph (14px, max-w-[260px])
│       ├── hairline                                                       my-6
│       ├── — 002 / BELOFTE
│       ├── korte paragraph
│       └── button-group (primary + ghost, min-width 240px, stacked)      mt-8
├── capacity-strip (4 × 1fr)                                              mt-24
└── ink-draw SVG-outline wordmark                                          (alleen home)
```

Per pagina verschilt:
- **Home**: 9/3, H1 met inline logo-tile (76px teal), capacity-strip + ink-draw.
- **Belofte**: 5/7, H1 + lead + tag-row (3 promise-pills).
- **Werkwijze**: 5/7, H1 + lead; hero-bottom = TOC-rijen naar pijlers.
- **Werk**: 5/7, H1 + lead (geen capacity-strip).
- **Contact**: 6/6, H1 + lead; daarna capacity-strip met response/gesprek/vorm/slot.

### 6.8 Capacity-strip

Vier gelijke cells in één rij:
```css
.capacity {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}
.capacity .cell .clabel {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: var(--color-ink-2);
  margin-bottom: 8px;
}
.capacity .cell .cval {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 32px;
  letter-spacing: -0.03em;
  line-height: 1.1;
}
.capacity .cell .cval span {     /* de kleine ondertekst */
  color: var(--color-ink-2);
  font-size: 18px;
  font-weight: 400;
}
```

Gebruik voor: Home hero (capaciteit/live/overdracht/slot), Contact hero (responstijd/gesprek/vorm/slot), Werk "Dwarsdoorsnede" (doorlooptijd/deploy/team/live). Altijd 4 cells, nooit meer, nooit minder.

### 6.9 TOC-rows (Werkwijze — naar pijlers)

```
┌─ toc-row ─────────────────────────────────────────────────────────┐
│  § 002    We starten niet bij nul.    Een bouwstraat…   PIJLER · 01  → │
└────────────────────────────────────────────────────────────────────┘
```

Grid: `auto 1fr auto auto 32px` — eyebrow, grote-titel, support-tekst, pijler-label, arrow.
Padding: 24px 0. Border-top: hairline.
Hover: `bg: 2% ink`, `padding-left: 16px`, arrow `opacity: 0 → 1` en `translateX(-8px → 0)`.

### 6.10 Case-row (Werk-pagina)

4-kolom grid `2fr 5fr 4fr 2fr`:

```
┌─ § nummer + jaar │ kicker+titel+diagram+handnote │ body+meta │ pijler-ref+arrow ─┐
```

```css
.case {
  display: grid;
  grid-template-columns: 2fr 5fr 4fr 2fr;
  gap: 48px;
  padding: 64px 0;
  border-top: 1px solid var(--color-line);
}
.case:last-child { border-bottom: 1px solid var(--color-line); }

.case .c-num {
  font-family: var(--font-mono);
  font-size: 40px;                 /* stevig "§ 001"-nummer */
  letter-spacing: 0.02em;
  color: var(--color-ink);
}
.case .c-kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-teal-ink);
}
.case .c-title {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 38px;
  letter-spacing: -0.035em;
  line-height: 1.05;
  margin-top: 12px;
}
.case .c-body {
  font-size: 17px;
  line-height: 1.65;
}
.case .c-handnote {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--color-ink-2);
  line-height: 1.6;
  margin-top: 18px;
  max-width: 380px;
}
.case .c-meta {
  font-family: var(--font-mono);
  font-size: 10.5px;
  line-height: 1.9;
  color: var(--color-ink-2);
}
.case .c-meta b {
  color: var(--color-ink);
  font-weight: 500;
}
```

### 6.11 Marquee

Horizontaal schuivende band, tussen secties. Niet in een `wrap` — full-bleed.

```css
.marquee {
  border-block: 1px solid var(--color-line);
  padding: 22px 0;
  overflow: hidden;
  white-space: nowrap;
}
.marquee-track {
  display: inline-flex;
  gap: 40px;
  animation: marquee 45s linear infinite;
}
.marquee-item {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: center;
  gap: 24px;
}
.marquee-dot {
  width: 6px; height: 6px;
  border-radius: 9999px;
  background: var(--color-teal);
  display: inline-block;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }  /* content dupliceren voor seamless loop */
}
```

Duplicate de `.marquee-item` set minstens 2× in markup voor een seamless loop. 40–60s per full cycle. Eén marquee per pagina (Home, Werk, Contact hebben er één).

### 6.12 Checklist — "Voor wie dit werkt" (Belofte)

```css
.checklist { display: flex; flex-direction: column; gap: 24px; }
.checklist li {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0;
  border-top: 1px solid var(--color-line);
}
.checklist .tick {
  flex-shrink: 0;
  width: 28px; height: 28px;
  border-radius: 9999px;
  background: var(--color-teal);
  color: #fff;
  display: grid;
  place-items: center;
}
```

Titel per item: display 24px, `letter-spacing: -0.025em`, `line-height: 1.2`. Onder: kleine mono-eyebrow (`— HERKENNING · A`).

### 6.13 Bouwstraat-brick-grid (Werkwijze pijler 01)

```css
.bs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.bs-brick {
  border-radius: 2px;
  padding: 14px 14px 16px;
  min-height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bs-brick.ready {
  background: var(--color-bone-3);
  border: 1px solid var(--color-line);
}
.bs-brick.custom {
  background: var(--color-paper);
  border: 1px solid var(--color-teal);
}
.bs-brick .bs-num {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: var(--color-ink-2);
}
.bs-brick.custom .bs-num { color: var(--color-teal-ink); }
.bs-brick .bs-name {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 13.5px;
  letter-spacing: -0.015em;
  line-height: 1.2;
}
```

4×3 grid (12 bricks), eerste 9 = `ready`, laatste 3 = `custom`. Legenda erboven met de twee stijlen in een swatch.

### 6.14 Direct-link rijen (Contact)

```css
.direct-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0;
  border-top: 1px solid var(--color-line);
  transition: padding-left .4s ease;
  text-decoration: none;
  color: var(--color-ink);
}
.direct-link:last-child { border-bottom: 1px solid var(--color-line); }
.direct-link:hover { padding-left: 12px; }
.direct-link .dl-label {                   /* mono eyebrow */
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: var(--color-ink-2);
  margin-bottom: 6px;
}
.direct-link .dl-value {                   /* display sans */
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 22px;
  letter-spacing: -0.02em;
}
```

### 6.15 Form (Contact)

```css
.form-field { margin-bottom: 28px; }
.form-field label {
  display: block;
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: var(--color-ink-2);
  margin-bottom: 10px;
}
.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-line);
  padding: 10px 0;
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 18px;
  color: var(--color-ink);
  transition: border-color .3s ease;
}
.form-field input::placeholder,
.form-field textarea::placeholder {
  color: var(--color-ink-2);
  opacity: 0.6;
}
.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: none;
  border-bottom-color: var(--color-ink);
}
```

**Form-tags** (checkbox-pills):
```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 1px solid var(--color-line);
  border-radius: 2px;
  font-family: var(--font-sans);
  font-size: 13px;
  background: var(--color-paper);
  cursor: pointer;
  transition: all .3s ease;
}
.tag .dot {
  width: 6px; height: 6px;
  border-radius: 9999px;
  background: var(--color-ink-2);
}
.tag:hover { border-color: var(--color-ink); }
.tag-on {
  background: var(--color-teal);
  color: #fff;
  border-color: var(--color-teal-ink);
}
.tag-on .dot { background: #fff; }
```

Regel: form-inputs hebben **alleen een bottom-border**, geen box. Geen rounded corners op inputs. Geen focus-ring — alleen border-color change.

### 6.16 FAQ accordion

```css
.faq-row {
  border-top: 1px solid var(--color-line);
  padding: 24px 0;
}
.faq-row:last-child { border-bottom: 1px solid var(--color-line); }
.faq-q {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  list-style: none;
}
.faq-q::-webkit-details-marker { display: none; }
.qtitle {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 22px;
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.faq-plus {
  width: 22px; height: 22px;
  position: relative;
  flex-shrink: 0;
}
.faq-plus::before, .faq-plus::after {
  content: "";
  position: absolute;
  background: var(--color-ink);
  transition: transform .3s ease;
}
.faq-plus::before { top: 10px; left: 0; width: 22px; height: 1px; }
.faq-plus::after  { top: 0; left: 10px; width: 1px; height: 22px; }
details[open] .faq-plus::after { transform: rotate(90deg); }
.faq-a {
  font-size: 15px;
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 680px;
  margin-top: 14px;
}
```

Eén open by default (de eerste). Geen chevron-icon — plus/cross is authentieker aan het systeem.

### 6.17 Timeline (Werkwijze)

6 cells op een horizontale axis:
```css
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
}
.timeline-axis {
  position: absolute;
  top: 32px; left: 0; right: 0;
  height: 1px;
  background: var(--color-ink);
}
.timeline-cell {
  padding: 0 16px 0 0;
  position: relative;
}
.timeline-cell::before {
  content: "";
  position: absolute;
  top: 28px; left: 0;
  width: 9px; height: 9px;
  border-radius: 9999px;
  background: var(--color-bone);
  border: 1px solid var(--color-ink);
}
.timeline-cell.active::before { background: var(--color-teal); border-color: var(--color-teal-ink); }
.timeline-cell .tw-num {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  color: var(--color-ink-2);
  display: block;
  padding-top: 48px;  /* ruimte voor de dot op de axis */
}
.timeline-cell .tw-title {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.02em;
  margin-top: 8px;
}
.timeline-cell .tw-body {
  font-size: 13px;
  line-height: 1.55;
  color: var(--color-ink-2);
  margin-top: 8px;
  max-width: 180px;
}
```

### 6.18 Pull-quote

```css
.pullquote {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 40px;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--color-ink);
}
.pullquote .open-q {
  color: var(--color-teal);
  margin-right: 4px;
}
```

Grid 2/8/2 — nummer-eyebrow links, quote midden, leeg rechts. Onder de quote: logo-tile + mono-attributie.

### 6.19 Footnotes

```css
.footnotes {
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid var(--color-line);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footnote {
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.65;
  color: var(--color-ink-2);
  max-width: 780px;
}
.footnote sup {
  color: var(--color-teal-ink);
  margin-right: 6px;
  font-weight: 500;
}
```

Superscript-markers (`¹ ² ³`) in body gebruiken `color: var(--color-teal-ink); font-family: var(--font-mono); font-size: 10px;`. Altijd teal — dit is een van de weinige plekken waar teal-ink op inline-tekst echt nodig is.

### 6.20 Focus-dot & focus-ring

```css
.focus-dot {
  width: 6px; height: 6px;
  border-radius: 9999px;
  background: var(--color-teal);
  display: inline-block;
}

.focus-ring {
  width: 10px; height: 10px;
  border-radius: 9999px;
  background: var(--color-teal);
  position: relative;
  animation: breathe 3s ease-in-out infinite;
}
.focus-ring::after {
  content: "";
  position: absolute;
  inset: -6px;
  border: 1px solid var(--color-teal);
  border-radius: 9999px;
  opacity: 0.4;
}
```

`.focus-dot` = klein puntje inline in tekst. `.focus-ring` = grotere variant met concentric ring voor stat-cells (Home/Contact capacity "Volgend slot").

### 6.21 Header (site)

```css
header.site {
  position: relative;
  z-index: 20;
}
header.site .nav-inner {
  max-width: 1360px;
  margin: 0 auto;
  padding: 32px 48px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

Nav-gap: 36px tussen items, daarna de taalswitch (`NL · EN` in num-style), dan de CTA-button. `NL · EN` is alleen display — geen echte switch in de prototypes, maar wel vast element.

### 6.22 Footer

```css
footer.site { padding-bottom: 40px; }
footer.site .wrap { /* zelfde max-w-1360, px-12 */ }

.footer-grid {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 2fr;
  gap: 64px;
  padding: 64px 0 48px;
  border-top: 1px solid var(--color-line);
}
.footer-head {
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 28px;
  letter-spacing: -0.03em;
}
.footer-sub {
  font-size: 14px;
  line-height: 1.65;
  color: var(--color-ink-2);
  max-width: 320px;
  margin-top: 12px;
}
.footer-col h4 {
  font-family: var(--font-mono);
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--color-ink-2);
  margin-bottom: 16px;
}
.footer-col a {
  display: block;
  padding: 4px 0;
  font-size: 14px;
  color: var(--color-ink);
  text-decoration: none;
}
.footer-col a:hover { color: var(--color-teal-ink); }

.footer-bottom {
  max-width: 1360px;
  margin: 0 auto;
  padding: 16px 48px 0;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--color-ink-2);
}
```

Footer-bottom slogan: `RICHTING C · ZUIVER LAB · LIVE`.

### 6.23 Logo-tile

```css
.logo-tile {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-ink);
}
.logo-sq {
  width: 28px; height: 28px;
  background: var(--color-teal);
  border-radius: 2px;
  display: grid;
  place-items: center;
  transition: all .5s ease;
}
.logo-tile:hover .logo-sq { background: var(--color-ink); }
.logo-tile:hover .logo-sq path { fill: var(--color-teal); }

.wm {
  font-family: var(--font-sans);
  font-weight: 500;
  letter-spacing: 0.02em;
  font-size: 15px;
}
```

Varianten: 28px (nav), 44px (hero inline klein, corner-radius 4px), 64px (signatuur, corner-radius 6px), 76px (Home hero inline, corner-radius 6px), 17px svg binnen 28px tile.

### 6.24 Dark sections

```css
.section-dark {
  background: var(--color-ink);
  color: var(--color-on-ink);
}
.section-dark .num { color: var(--color-on-ink-faint); }
.section-dark p { color: var(--color-on-ink-muted); }
.section-dark .lead { color: var(--color-on-ink-soft); }
.section-dark .support { color: var(--color-on-ink-meta); }
.section-dark em { color: var(--color-teal); font-style: normal; }
```

Patroon: één donker blok per pagina, aan het einde (CTA) of diep in het midden (werkwijze-samenhang). Inhoud is typisch een split 5/7 of 6/6: grote H2 links (80–96px), lead + CTA rechts. Alle teal-tekst mag hier teal zijn (niet teal-ink — zie §3.5).

### 6.25 Portrait placeholder (`ph-stripe`)

Voor de studio-team-portretten op Home:

```css
.ph-stripe {
  background:
    repeating-linear-gradient(135deg,
      transparent 0 8px,
      rgb(11 11 10 / 0.04) 8px 9px);
  background-color: var(--color-bone-3);
  border: 1px solid var(--color-line-soft);
  border-radius: 2px;
  position: relative;
}
.ph-stripe .ph-label {
  position: absolute;
  left: 12px; top: 12px;
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--color-ink-2);
  letter-spacing: 0.08em;
}
.ph-stripe .ph-corner {
  position: absolute;
  right: 12px; bottom: 12px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-ink-2);
  letter-spacing: 0.06em;
}
```

Vervang bij echte portretten door een `<Image>` met zelfde `aspect-ratio: 4/5; border-radius: 2px;` wrapper. De parallax-layer regels blijven zoals in §5.5.

---

## 7. Iconografie

- **Stroke-based**, niet filled.
- Standaard stroke-widths: `1.2` (kleine iconen in `picon`, checklist-tick inverse), `1.6` (ghost-button pijl), `1.8` (primary-button pijl, dark-CTA pijl), `2` (checklist-tick fill).
- 24×24 viewBox, output 12–22px.
- Kleur volgt text: `stroke="currentColor"`. Enige hard-coded kleuren zijn binnen de logo-tile (teal + white) en in diagram-svg's waar specifieke kleuren kloppen (ink, teal, teal-ink, warn).
- **`lucide-react`** als pakket.
- Ingelijste iconen-patroon: `picon` (44×44 rounded-full border) is vaste wrapper voor de svg binnen pillar-cards. `tick` (28 rond, teal-fill, wit icoon) voor checklists.
- Geen icon-only buttons.

---

## 8. Do's en don'ts — expliciet

### Do

- ✅ `Oktobus` met k. Nooit `Octobus`.
- ✅ Hero-H1 crescendeert per pagina (112 → 120 → 128 → 136) — dat is intentioneel.
- ✅ Elke pagina opent met een page-indicator row (`§ PAGINA — P. NN  ────  context-meta`).
- ✅ Laatste woord van elke hero-H1 krijgt `text-teal-ink`.
- ✅ Eén donker (`bg-ink`) sectie per pagina, altijd tegen het einde.
- ✅ Marquee één keer per pagina, full-bleed, mono-dots.
- ✅ `reveal` + delays bij scroll; `anim-rise` + delays alleen in eerste viewport.
- ✅ Form-inputs: alleen bottom-border, geen box.
- ✅ FAQ-plus (1px lijn-kruis) boven chevron-icons.
- ✅ Hairline (1px, 10% ink) voor elke visuele scheiding.
- ✅ `max-w-[1360px] mx-auto px-12` op elke `.wrap`.
- ✅ `rounded-[2px]` op cards, `rounded-full` op buttons en dots.
- ✅ Body-paragrafen begrenzen op max-width (240–680px afhankelijk van context).
- ✅ Diagram-SVG's gebruiken exact de token-kleuren (`#0B0B0A`, `#51A397`, `#2F6E66`, `#63615C`, `#C2623A`).
- ✅ `<sup>` voetnoten altijd in teal-ink.

### Don't

- ❌ **Geen box-shadows.** Ooit. Borders doen het werk.
- ❌ **Geen gradients.** Niet op text, niet op backgrounds, niet op borders. (Enige uitzondering: de `repeating-linear-gradient` in `ph-stripe` is een streep-patroon, geen gradient in de decoratieve zin.)
- ❌ **Geen italics.** Nadruk is `font-medium` of `text-teal-ink`. `<em>` wordt `font-style: normal` gerendered.
- ❌ **Geen gecentreerde body-tekst langer dan één zin.** Centered mag voor Belofte-CTA ("Klinkt het herkenbaar?") en de CTA-cta van Werkwijze — maar dat zijn 1-zin-H2's, geen lopende tekst.
- ❌ **Geen uppercase body.** Uppercase is gereserveerd voor mono-eyebrows.
- ❌ **Geen teal op reguliere buttons, nav-links of card-borders.** Alleen op de plekken in §2.1 genoemd.
- ❌ **Geen glassmorphism, blur, backdrop-filter.**
- ❌ **Geen parallax buiten team-portretten** (§5.5).
- ❌ **Geen scroll-hijacks of snap-sections.** Native scroll via Lenis, klaar.
- ❌ **Geen count-up animaties** op getallen.
- ❌ **Geen emoji** in UI-copy.
- ❌ **Geen Tailwind `prose`-klasse.**
- ❌ **Geen willekeurige kleuren** buiten de tokens (`bg-gray-*`, `text-zinc-*` etc.).
- ❌ **Geen vierde card-variant.** Bento, pillar of case — kies.
- ❌ **Geen hero-achtige 112-px+ display op een secundaire sectie.** Hero-formaat is exclusief voor hero.
- ❌ **Geen twee donkere secties op dezelfde pagina.**
- ❌ **Geen animaties "omdat het kan".** Elke animatie heeft een reden (context, status, feedback).
- ❌ **Geen Fraunces, geen Inter, geen andere font-stack.** Geist + Geist Mono, punt.

---

## 9. Tech stack & dependencies

### 9.1 Core

```bash
npm i next@15 react@19 react-dom@19
npm i -D typescript @types/react @types/react-dom @types/node
```

- **Next.js 15** — App Router, React Server Components default.
- **React 19** — `use()` hook, Actions, nieuwe ref-API.
- **TypeScript** — strict mode aan (`"strict": true`). Geen `any` zonder kommentaarregel.

### 9.2 Styling

```bash
npm i -D tailwindcss@4 @tailwindcss/postcss postcss
```

- **Tailwind v4** — configuratie in CSS via `@theme` (zie §2.1). Geen `tailwind.config.ts`.
- PostCSS-plugin voor Next.js compatibility.

### 9.3 Animatie

```bash
npm i motion lenis
```

- **`motion`** — voorheen `framer-motion`. Importeren vanaf `motion/react`:
  ```tsx
  import { motion, AnimatePresence, useReducedMotion } from "motion/react";
  ```
  Niet `framer-motion` (werkt nog, maar is niet meer actief).

- **`lenis`** — smooth scroll. Hernoemd van `@studio-freight/lenis`. React-hooks via `lenis/react`:
  ```tsx
  import { ReactLenis, useLenis } from "lenis/react";
  ```

### 9.4 Icons

```bash
npm i lucide-react
```

### 9.5 Complete install (copy-paste)

```bash
npm i next@15 react@19 react-dom@19 motion lenis lucide-react
npm i -D typescript @types/react @types/react-dom @types/node \
         tailwindcss@4 @tailwindcss/postcss postcss
```

### 9.6 Hoe dit zich verhoudt tot §5 (animatie-regels)

De regels in §5 staan bovenaan. Library is gereedschap, geen excuus om meer te animeren.

**Motion vervangt CSS-keyframes voor:**
- Rise-in en fade-in bij eerste viewport.
- Scroll-driven reveals (`whileInView` met `viewport={{ once: true, margin: "-15%" }}`).
- `AnimatePresence` voor route-transitions of conditionele DOM.
- Magnetic-button hover (`useMotionValue` + `useSpring`).

**CSS blijft voor:** `sway`, `breathe`, `focus-ring`, hover-transitions op buttons/navlinks, `ink-draw` SVG-stroke, marquee-loop. Geen reden deze naar Motion te verplaatsen — `@keyframes` is lichter voor continue loops.

**Lenis doet exact één ding:** smooth wheel-scroll op root. Niet gebruiken voor:
- Scroll-hijack / snap-sections.
- Horizontale scroll-galeries.
- Parallax-effecten (die rijden direct op window scroll-y in de prototypes — zonder Lenis-integratie prima).

Setup:

```tsx
// components/SmoothScroll.tsx
"use client";
import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
```

`lerp: 0.1`, `duration: 1.2` zijn de gekalibreerde waardes — niet veranderen zonder team-overleg.

---

## 10. File-locaties (Next.js conventie)

```
app/
  globals.css              ← @theme, keyframes, utility classes (num, eyebrow, btn-*, navlink, pillar, bento, case, toc-row, marquee, capacity, timeline, checklist, bs-grid, faq-row, form-field, direct-link, pullquote, footnotes, tag, focus-dot, focus-ring, logo-sq, wm, hairline, section-dark, ph-stripe)
  layout.tsx               ← next/font setup, <SmoothScroll>, <Header>, <Footer>
  page.tsx                 ← Home (hero + studio-strip + marquee + belofte-teaser + werkwijze-teaser + pullquote + dark-cta)
  belofte/page.tsx         ← 3 promise-blocks + footnotes + voor-wie + centered-cta
  werkwijze/page.tsx       ← hero + toc + 3 pijlers (met bs-grid, day-1-diagram, chain-diagram) + timeline + dark-samenhang + cta
  werk/page.tsx            ← 3 case-rows + marquee + dwarsdoorsnede + dark-cta
  contact/page.tsx         ← hero + capacity + direct-links/studio + form + faq + marquee
components/
  layout/
    Header.tsx             ← logo-tile + nav + lang-switch + primary-button
    Footer.tsx             ← footer-grid + footer-bottom
    SmoothScroll.tsx
  ui/
    Button.tsx             ← primary | ghost | primary.on-ink
    BtnMagnet.tsx          ← wrapper met useMotionValue magnetic hover
    Eyebrow.tsx            ← <span className="num"> {prefix} {label} </span>
    SectionHeader.tsx      ← eyebrow + H2 + optional support
    PageIndicator.tsx      ← hero-top rij
    Hairline.tsx
    FocusDot.tsx           ← + breathing prop
    FocusRing.tsx
    Marquee.tsx
    Tag.tsx                ← + interactive variant voor form
  cards/
    Bento.tsx
    Pillar.tsx             ← prop: n + title + body + icon
    CaseRow.tsx
    TocRow.tsx
  sections/
    HeroPage.tsx           ← shared hero scaffolding, size prop (s/m/l/xl)
    CapacityStrip.tsx
    DarkCta.tsx
    PullQuote.tsx
  content/
    BsGrid.tsx             ← 12-brick bouwstraat grid
    Timeline.tsx           ← 6-week axis
    Checklist.tsx          ← voor-wie
    Faq.tsx                ← details/summary accordion
    Footnotes.tsx
  logo/
    OktobusLogo.tsx        ← sway + size prop
  form/
    ContactForm.tsx
    FormField.tsx
    TagGroup.tsx
DESIGN.md                  ← dit bestand
```

Aanpassingen in aparte PR, niet gemixed met feature-werk.

---

## 11. Wanneer dit document updaten

Update DESIGN.md **vóór** de code, niet erna.

Toevoegen vereist:
1. Use-case benoemen (in welke sectie komt dit voor?).
2. Bestaande tokens/patronen eerst proberen.
3. Als het echt een nieuwe primitieve is: naam, waarde, regel, do/don't.

Verwijderen mag altijd. Minder is de richting.

---

*RICHTING C · ZUIVER LAB · LIVE*