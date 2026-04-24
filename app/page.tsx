import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { OctopusLogo } from '@/components/marks/octopus-logo';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { CapacityStrip } from '@/components/sections/capacity-strip';
import { InkDrawDivider } from '@/components/sections/ink-draw-divider';
import { Marquee } from '@/components/sections/marquee';

const CONTACT_HREF = '/over-ons#contact';

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-24 sm:pb-32">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16">
              <Num>§ 001 — INDEX</Num>
              <Hairline className="flex-1" />
              <Num>AMSTERDAM · EST. 2025</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Tagline left */}
            <div className="lg:col-span-7">
              <h1 className="display text-[clamp(48px,9vw,104px)] leading-[1.02] tracking-[-0.05em] m-0">
                <RiseIn delay={0.05}>
                  <span className="block">Software die past</span>
                </RiseIn>
                <RiseIn delay={0.18}>
                  <span className="block">
                    bij hoe{' '}
                    <span
                      className="inline-block align-middle mx-1 w-[clamp(48px,6vw,72px)] h-[clamp(48px,6vw,72px)] rounded-[6px] bg-teal"
                      aria-hidden
                    >
                      <OctopusLogo size={72} className="w-full h-full" />
                    </span>{' '}
                    jouw
                  </span>
                </RiseIn>
                <RiseIn delay={0.32}>
                  <span className="block">
                    bedrijf <span className="text-teal-ink">werkt</span>.
                  </span>
                </RiseIn>
              </h1>

              <FadeIn delay={0.45}>
                <p className="text-[19px] leading-[1.55] mt-10 max-w-[520px]">
                  Oktobus is een klein team van drie. Product, design en engineering in één.
                  We bouwen maatwerk software voor het MKB — met AI als bouwsteen, niet als
                  feature.
                </p>
                <div className="mt-8 inline-flex gap-4 items-center flex-wrap">
                  <Link
                    href={CONTACT_HREF}
                    className="btn-primary inline-flex items-center gap-2 px-6 py-4 rounded-full text-[14px]"
                  >
                    Plan een kennismaking
                    <ArrowRight size={14} strokeWidth={1.6} />
                  </Link>
                  <Num>→ VOLGEND SLOT · Q3 &rsquo;26</Num>
                </div>
              </FadeIn>
            </div>

            {/* 3 promises right */}
            <div className="lg:col-span-5 lg:pt-2">
              <FadeIn delay={0.35}>
                <Num className="block mb-4">→ 003 / DRIE BELOFTES</Num>
                <div className="flex flex-col">
                  <article className="promise-card">
                    <div className="promise-head">
                      <span className="promise-num">01</span>
                      <Num>BELOFTE · 01</Num>
                    </div>
                    <h3 className="promise-title">
                      Maatwerk,<br />geen compromissen.
                    </h3>
                    <p className="promise-body">
                      Niet de zoveelste tool die voor 80% past. Software die jouw proces
                      volgt — niet andersom.
                    </p>
                  </article>

                  <article className="promise-card">
                    <div className="promise-head">
                      <span className="promise-num">02</span>
                      <Num>BELOFTE · 02</Num>
                    </div>
                    <h3 className="promise-title">
                      MKB-budget,<br />geen bureau-prijs.
                    </h3>
                    <p className="promise-body">
                      Wat zes maanden en €200k kostte, bouwen wij in weken binnen een budget
                      dat werkt.
                    </p>
                  </article>

                  <article className="promise-card promise-card-accent">
                    <div className="promise-head">
                      <span className="promise-num">03</span>
                      <Num>BELOFTE · 03</Num>
                    </div>
                    <h3 className="promise-title">
                      Werkende software,<br />geen prototype met plakband.
                    </h3>
                    <p className="promise-body">
                      Alles wat we opleveren draait in productie. Geen demo-code die jij nog
                      moet afmaken.
                    </p>
                  </article>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Capacity strip */}
          <FadeIn delay={0.7}>
            <div className="mt-20 sm:mt-24">
              <CapacityStrip
                cells={[
                  { label: '→ Capaciteit', value: '2', sub: 'projecten / kwartaal' },
                  { label: '→ Tijd tot live', value: '6–12', sub: 'weken' },
                  { label: '→ Overdracht', value: '100%', sub: 'eigen code' },
                  { label: '→ Volgend slot', value: 'Q3 ’26', pulse: true },
                ]}
              />
            </div>
          </FadeIn>
        </Container>

        {/* InkDraw signature */}
        <Container className="pb-3">
          <InkDrawDivider />
        </Container>
      </section>

      {/* ============================ MARQUEE ============================ */}
      <Marquee
        items={[
          'Maatwerk boven abonnement',
          'Production-ready, geen demo',
          'AI als bouwsteen',
          'MKB-budget, geen bureauprijs',
          'Geen tussenlagen',
          'Weken, geen maanden',
        ]}
      />

      {/* ============================ PRODUCT DIAGRAM ============================ */}
      <section className="bg-bone-2 relative overflow-hidden">
        <Container className="pt-24 sm:pt-32 pb-28 sm:pb-36">
          <div className="flex flex-wrap justify-between items-end mb-14 gap-6">
            <RiseIn>
              <Num className="block mb-3.5">§ 002 — PRODUCT</Num>
              <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0 max-w-[900px]">
                Wat wij bouwen.<br />
                <span className="text-ink-2">
                  Van vraag tot productie, in vijf lagen.
                </span>
              </h2>
            </RiseIn>
            <RiseIn delay={0.1}>
              <div className="font-mono text-[10.5px] leading-[1.8] tracking-[0.08em] text-ink-2 text-right">
                → SCHEMATISCH OVERZICHT<br />
                <span className="text-ink">v1 · 2026</span>
              </div>
            </RiseIn>
          </div>

          <RiseIn delay={0.05}>
            <div className="pd">
              <div className="pd-rail pd-rail-in">
                <span className="pd-rail-tag">INPUT</span>
                <span className="pd-rail-text">Vraag van de klant</span>
                <span className="pd-rail-dot" />
              </div>

              <div className="pd-stage">
                <svg
                  className="pd-wires"
                  viewBox="0 0 1200 480"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path className="pd-wire-spine" d="M60 240 H1140" />
                  <path className="pd-wire-drop" d="M620 310 V380 H860 V280" />
                  <path className="pd-wire-drop" d="M340 170 V110 H200 V200" />
                </svg>

                <article className="pd-node">
                  <header className="pd-node-h">
                    <span className="pd-n-num">01</span>
                    <span className="pd-n-label">BUILDERS</span>
                    <span className="pd-n-dot" />
                  </header>
                  <div className="pd-node-body">
                    <h3 className="pd-node-title">Mensen met context</h3>
                    <div className="pd-avatars" aria-hidden>
                      <span className="pd-av">J</span>
                      <span className="pd-av">D</span>
                      <span className="pd-av">M</span>
                    </div>
                    <ul className="pd-bullets">
                      <li>Strategisch meedenken over automatisering</li>
                      <li>Gebruikersvragen vertalen naar product</li>
                      <li>Technische diepte, zonder jargon</li>
                    </ul>
                  </div>
                </article>

                <article className="pd-node">
                  <header className="pd-node-h">
                    <span className="pd-n-num">02</span>
                    <span className="pd-n-label">TOOLS</span>
                    <span className="pd-n-dot" />
                  </header>
                  <div className="pd-node-body">
                    <h3 className="pd-node-title">AI-gereedschap</h3>
                    <div className="pd-tools" aria-hidden>
                      <span className="pd-tool">Claude</span>
                      <span className="pd-tool">Gemini</span>
                      <span className="pd-tool">GPT</span>
                      <span className="pd-tool">Hugging Face</span>
                      <span className="pd-tool">Eigen agents</span>
                    </div>
                    <p className="pd-sub">
                      We kiezen per klus het scherpste mes — geen vendor lock-in.
                    </p>
                  </div>
                </article>

                <article className="pd-node pd-node-wide">
                  <header className="pd-node-h">
                    <span className="pd-n-num">03</span>
                    <span className="pd-n-label">KENNIS</span>
                    <span className="pd-n-dot" />
                  </header>
                  <div className="pd-node-body">
                    <h3 className="pd-node-title">Twee niveaus, één contract</h3>

                    <div className="pd-layers">
                      <div className="pd-layer pd-layer-org">
                        <div className="pd-layer-h">
                          <span className="pd-layer-n">L1</span>
                          <span className="pd-layer-t">Org-kennis</span>
                          <span className="pd-layer-state">
                            <span className="focus-dot breathe" /> altijd aan
                          </span>
                        </div>
                        <div className="pd-pills">
                          <span className="pd-pill">Security</span>
                          <span className="pd-pill">Privacy</span>
                          <span className="pd-pill">Compliance</span>
                          <span className="pd-pill">Naming</span>
                          <span className="pd-pill">DB-rules</span>
                          <span className="pd-pill">CI/CD-baseline</span>
                          <span className="pd-pill">Coding standaard</span>
                          <span className="pd-pill">Secrets</span>
                        </div>
                      </div>

                      <div className="pd-layer pd-layer-proj">
                        <div className="pd-layer-h">
                          <span className="pd-layer-n">L2</span>
                          <span className="pd-layer-t">Project-kennis</span>
                          <span className="pd-layer-state pd-layer-state-dim">
                            per project
                          </span>
                        </div>
                        <div className="pd-pills">
                          <span className="pd-pill pd-pill-alt">Tech-stack</span>
                          <span className="pd-pill pd-pill-alt">Domein</span>
                          <span className="pd-pill pd-pill-alt">Design patterns</span>
                          <span className="pd-pill pd-pill-alt">Testing</span>
                          <span className="pd-pill pd-pill-alt">Integraties</span>
                          <span className="pd-pill pd-pill-alt">Data-model</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="pd-node">
                  <header className="pd-node-h">
                    <span className="pd-n-num">04</span>
                    <span className="pd-n-label">CI / CD</span>
                    <span className="pd-n-dot" />
                  </header>
                  <div className="pd-node-body">
                    <h3 className="pd-node-title">Kwaliteitspijplijn</h3>
                    <div className="pd-gates" aria-hidden>
                      <span className="pd-gate on"><span>✓</span> lint</span>
                      <span className="pd-gate on"><span>✓</span> test</span>
                      <span className="pd-gate on"><span>✓</span> sec</span>
                      <span className="pd-gate on"><span>✓</span> deps</span>
                      <span className="pd-gate"><span>○</span> NEN</span>
                    </div>
                    <ul className="pd-bullets">
                      <li>Security-checks (SAST, secrets)</li>
                      <li>Package updates — Dependabot-stijl</li>
                      <li className="pd-later">Later — NEN / BIO certificering</li>
                    </ul>
                  </div>
                </article>

                <article className="pd-node pd-node-dark">
                  <header className="pd-node-h">
                    <span className="pd-n-num">05</span>
                    <span className="pd-n-label">DEPLOY</span>
                    <span className="pd-n-dot on" />
                  </header>
                  <div className="pd-node-body">
                    <h3 className="pd-node-title">OTAP · live</h3>
                    <div className="pd-otap2" aria-hidden>
                      <span className="pd-otap-s">O<em>ntwikkel</em></span>
                      <span className="pd-otap-ar">→</span>
                      <span className="pd-otap-s">T<em>est</em></span>
                      <span className="pd-otap-ar">→</span>
                      <span className="pd-otap-s">A<em>cceptatie</em></span>
                      <span className="pd-otap-ar">→</span>
                      <span className="pd-otap-s pd-otap-live">P<em>roductie</em></span>
                    </div>
                    <ul className="pd-bullets pd-bullets-light">
                      <li>Database-migraties, versioned</li>
                      <li>Backups &amp; rollback-plan</li>
                      <li>Observability vanaf dag één</li>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="pd-rail pd-rail-out">
                <span className="pd-rail-dot on" />
                <span className="pd-rail-text">Werkende software</span>
                <span className="pd-rail-tag pd-rail-tag-ink ml-auto">OUTPUT</span>
              </div>

              <div className="pd-legend">
                <div className="pd-legend-l">
                  <Num>— LEGENDA</Num>
                  <span className="pd-legend-item">
                    <span className="pd-legend-sw pd-legend-sw-teal" /> Ingebouwd · standaard aan
                  </span>
                  <span className="pd-legend-item">
                    <span className="pd-legend-sw pd-legend-sw-ink" /> Per project te kiezen
                  </span>
                  <span className="pd-legend-item">
                    <span className="pd-legend-sw pd-legend-sw-dim" /> Op de roadmap
                  </span>
                </div>
                <Num>Hover op een stap voor detail</Num>
              </div>
            </div>
          </RiseIn>
        </Container>
      </section>

      {/* ============================ DOUBLE DIAMOND ============================ */}
      <section className="relative overflow-hidden">
        <Container className="pt-28 sm:pt-36 pb-28 sm:pb-36">
          <div className="flex flex-wrap justify-between items-end mb-14 gap-6">
            <RiseIn>
              <Num className="block mb-3.5">§ 003 — WERKWIJZE</Num>
              <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0 max-w-[900px]">
                Hoe wij werken.<br />
                <span className="text-ink-2">
                  Twee diamanten — van vraag naar versie 1.0.
                </span>
              </h2>
            </RiseIn>
            <RiseIn delay={0.1}>
              <div className="font-mono text-[10.5px] leading-[1.8] tracking-[0.08em] text-ink-2 text-right">
                → DOUBLE DIAMOND<br />
                <span className="text-ink">Oktobus · methode</span>
              </div>
            </RiseIn>
          </div>

          <RiseIn delay={0.05}>
            <div className="dd">
              <svg
                className="dd-svg"
                viewBox="0 0 1200 360"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <defs>
                  <marker
                    id="ar"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                  >
                    <path d="M0 0 L10 5 L0 10 z" fill="#63615C" />
                  </marker>
                </defs>

                <line
                  x1="0"
                  y1="180"
                  x2="1200"
                  y2="180"
                  stroke="#0b0b0a"
                  strokeOpacity="0.12"
                  strokeDasharray="2 4"
                />

                <polygon
                  points="80,180 340,60 600,180 340,300"
                  fill="#51A397"
                  fillOpacity="0.06"
                  stroke="#0b0b0a"
                  strokeWidth="1.2"
                />
                <polygon
                  points="600,180 860,60 1120,180 860,300"
                  fill="#51A397"
                  fillOpacity="0.06"
                  stroke="#0b0b0a"
                  strokeWidth="1.2"
                />

                <circle cx="600" cy="180" r="8" fill="#51A397" />
                <circle
                  cx="600"
                  cy="180"
                  r="14"
                  fill="none"
                  stroke="#51A397"
                  strokeOpacity="0.4"
                />
                <circle cx="1120" cy="180" r="8" fill="#0b0b0a" />
                <circle
                  cx="1120"
                  cy="180"
                  r="14"
                  fill="none"
                  stroke="#0b0b0a"
                  strokeOpacity="0.3"
                />
                <circle cx="80" cy="180" r="5" fill="#0b0b0a" fillOpacity="0.4" />

                <path
                  d="M160 330 H520"
                  stroke="#63615C"
                  strokeWidth="1"
                  markerEnd="url(#ar)"
                />
                <path
                  d="M680 330 H1040"
                  stroke="#63615C"
                  strokeWidth="1"
                  markerEnd="url(#ar)"
                />

                <text
                  x="340"
                  y="30"
                  textAnchor="middle"
                  fontFamily="var(--font-geist-mono), monospace"
                  fontSize="11"
                  letterSpacing="2"
                  fill="#63615C"
                >
                  DIAMANT 01 · BEGRIJPEN
                </text>
                <text
                  x="860"
                  y="30"
                  textAnchor="middle"
                  fontFamily="var(--font-geist-mono), monospace"
                  fontSize="11"
                  letterSpacing="2"
                  fill="#63615C"
                >
                  DIAMANT 02 · BOUWEN
                </text>

                <text x="200" y="180" textAnchor="middle" fontFamily="var(--font-geist), sans-serif" fontWeight="500" fontSize="15" fill="#0B0B0A">
                  Ontdekken
                </text>
                <text x="200" y="198" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="#63615C">
                  divergeren
                </text>
                <text x="480" y="180" textAnchor="middle" fontFamily="var(--font-geist), sans-serif" fontWeight="500" fontSize="15" fill="#0B0B0A">
                  Definiëren
                </text>
                <text x="480" y="198" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="#63615C">
                  convergeren
                </text>
                <text x="720" y="180" textAnchor="middle" fontFamily="var(--font-geist), sans-serif" fontWeight="500" fontSize="15" fill="#0B0B0A">
                  Prototypen
                </text>
                <text x="720" y="198" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="#63615C">
                  divergeren
                </text>
                <text x="1000" y="180" textAnchor="middle" fontFamily="var(--font-geist), sans-serif" fontWeight="500" fontSize="15" fill="#0B0B0A">
                  Uitleveren
                </text>
                <text x="1000" y="198" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="#63615C">
                  convergeren
                </text>

                <text x="600" y="50" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10.5" letterSpacing="1.5" fill="#2F6E66">
                  ◆ PROTOTYPE
                </text>
                <text x="1120" y="50" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10.5" letterSpacing="1.5" fill="#0B0B0A">
                  ■ LIVE · V1.0
                </text>
                <text x="80" y="50" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10.5" letterSpacing="1.5" fill="#63615C">
                  → START
                </text>

                <text x="340" y="346" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" letterSpacing="1" fill="#63615C">
                  MENSELIJKE KANT · VRAGEN · KRITISCH ZIJN
                </text>
                <text x="860" y="346" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" letterSpacing="1" fill="#63615C">
                  BOUWEN · DEMO&rsquo;EN · ROBUUST MAKEN
                </text>
              </svg>

              <div className="dd-caps">
                <div className="dd-cap">
                  <Num>— FASE 01</Num>
                  <div className="dd-cap-t">Ontdekken</div>
                  <div className="dd-cap-b">
                    We komen langs. Wat doet je bedrijf écht, waar loopt het vast, wie
                    gebruikt dit straks.
                  </div>
                </div>
                <div className="dd-cap">
                  <Num>— FASE 02</Num>
                  <div className="dd-cap-t">Definiëren</div>
                  <div className="dd-cap-b">
                    We worden kritisch: wat bouwen we wél, wat niet. Eén heldere opdracht,
                    geen wishlist.
                  </div>
                </div>
                <div className="dd-cap dd-cap-mark">
                  <Num className="text-teal-ink">◆ MIJLPAAL · 01</Num>
                  <div className="dd-cap-t">Prototype</div>
                  <div className="dd-cap-b">
                    Werkend, klikbaar, echte data waar nodig. Iets om aan te wijzen en te
                    verbeteren.
                  </div>
                </div>
                <div className="dd-cap">
                  <Num>— FASE 03</Num>
                  <div className="dd-cap-t">Prototypen</div>
                  <div className="dd-cap-b">
                    Iteraties. Demo&rsquo;s om de twee weken. We maken het beter, niet groter.
                  </div>
                </div>
                <div className="dd-cap">
                  <Num>— FASE 04</Num>
                  <div className="dd-cap-t">Uitleveren</div>
                  <div className="dd-cap-b">
                    Robuust maken: evals, security, observability, migraties. Klaar voor
                    echte gebruikers.
                  </div>
                </div>
                <div className="dd-cap dd-cap-mark dd-cap-mark-dark">
                  <Num className="text-ink">■ MIJLPAAL · 02</Num>
                  <div className="dd-cap-t">Live · v1.0</div>
                  <div className="dd-cap-b">
                    In productie, met SLA, documentatie, overdracht. Volgende iteratie al
                    ingepland.
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-10 gap-6 flex-wrap">
                <Num className="max-w-[560px] leading-[1.65]">
                  → Twee scherpe momenten om te beslissen. Daartussen: ruimte om te
                  verkennen, fouten te maken en bij te sturen.
                </Num>
                <Link
                  href="/werkwijze"
                  className="btn-ghost inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px]"
                >
                  Werkwijze uitgebreid
                  <ArrowRight size={14} strokeWidth={1.6} />
                </Link>
              </div>
            </div>
          </RiseIn>
        </Container>
      </section>

      {/* ============================ CONTACT CTA (dark) ============================ */}
      <section className="bg-ink text-bone">
        <Container className="py-28 sm:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <RiseIn>
                <span
                  className="font-mono text-[10.5px] tracking-[0.08em] mb-4 block"
                  style={{ color: '#F3EFE966' }}
                >
                  § 004 — KENNISMAKING
                </span>
                <h2 className="display text-[clamp(48px,7vw,88px)] leading-[1.02] tracking-[-0.045em] m-0 text-bone">
                  Benieuwd wat wij<br />voor jouw bedrijf<br />
                  <span className="text-teal">kunnen bouwen?</span>
                </h2>
              </RiseIn>
            </div>
            <div className="lg:col-span-6 lg:pb-3">
              <RiseIn delay={0.1}>
                <p
                  className="text-[20px] leading-[1.5] tracking-[-0.01em] max-w-[460px]"
                  style={{ color: '#F3EFE9CC' }}
                >
                  Plan een kennismaking van 30 minuten. Geen verkooppraat — we kijken of
                  het klikt en of er iets zinnigs te bouwen valt.
                </p>
                <div className="mt-10 flex items-center gap-4 flex-wrap">
                  <Link
                    href={CONTACT_HREF}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-medium"
                    style={{ background: 'var(--color-teal)', color: 'var(--color-ink)' }}
                  >
                    Plan een kennismaking
                    <ArrowRight size={14} strokeWidth={1.8} />
                  </Link>
                  <span
                    className="font-mono text-[11px] tracking-[0.1em]"
                    style={{ color: '#F3EFE966' }}
                  >
                    → Volgend slot · Q3 &rsquo;26
                  </span>
                </div>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
