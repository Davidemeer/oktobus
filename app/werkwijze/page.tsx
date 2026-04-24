import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { RiseIn } from '@/components/motion/rise-in';

export const metadata: Metadata = {
  title: 'Werkwijze',
  description:
    'Twee diamanten. Van vraag naar versie 1.0 — eerst begrijpen, dan bouwen, met twee scherpe mijlpalen ertussen.',
};

const CONTACT_HREF = '/over-ons#contact';

export default function WerkwijzePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16 sm:mb-20">
              <Num>§ WERKWIJZE — P. 02</Num>
              <Hairline className="flex-1" />
              <Num>DOUBLE DIAMOND · OKTOBUS</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 001 — INTRO</Num>
                <h1 className="display text-[clamp(56px,10vw,120px)] leading-[0.98] tracking-[-0.05em] m-0">
                  Twee<br />
                  <span className="text-teal-ink">diamanten.</span>
                </h1>
              </RiseIn>
            </div>
            <div className="lg:col-span-7 lg:pb-4">
              <RiseIn delay={0.1}>
                <p className="text-[clamp(18px,2vw,24px)] leading-[1.4] tracking-[-0.018em] max-w-[640px]">
                  Elk project doorlopen we in twee bewegingen. Eerst{' '}
                  <span className="text-teal-ink">begrijpen</span> — wat speelt er echt, voor
                  wie bouwen we, wat gaan we níet maken. Daarna{' '}
                  <span className="text-teal-ink">bouwen</span> — van prototype naar versie
                  1.0 in productie.
                </p>
                <p className="text-[15px] leading-[1.65] text-ink-2 mt-5 max-w-[560px]">
                  Twee scherpe mijlpalen. Daartussen ruimte om te verkennen, fouten te maken
                  en bij te sturen.
                </p>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ BIG DIAMOND OVERZICHT ============================ */}
      <section className="bg-bone-2">
        <Container className="pt-24 sm:pt-32 pb-24 sm:pb-32">
          <RiseIn>
            <Num className="block mb-6">§ 002 — OVERZICHT</Num>
          </RiseIn>

          <RiseIn delay={0.05}>
            <div className="dd" style={{ padding: '48px 40px 32px' }}>
              <svg
                className="dd-svg"
                viewBox="0 0 1200 420"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
                style={{ maxHeight: 480 }}
              >
                <line
                  x1="0"
                  y1="210"
                  x2="1200"
                  y2="210"
                  stroke="#0b0b0a"
                  strokeOpacity="0.12"
                  strokeDasharray="2 4"
                />

                <polygon
                  points="80,210 340,60 600,210 340,360"
                  fill="#51A397"
                  fillOpacity="0.07"
                  stroke="#0b0b0a"
                  strokeWidth="1.3"
                />
                <polygon
                  points="600,210 860,60 1120,210 860,360"
                  fill="#51A397"
                  fillOpacity="0.07"
                  stroke="#0b0b0a"
                  strokeWidth="1.3"
                />

                <path d="M120 210 Q 220 130 340 60" stroke="#2F6E66" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M120 210 Q 220 290 340 360" stroke="#2F6E66" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M340 60  Q 480 130 580 210" stroke="#2F6E66" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M340 360 Q 480 290 580 210" stroke="#2F6E66" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M640 210 Q 740 130 860 60" stroke="#2F6E66" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M640 210 Q 740 290 860 360" stroke="#2F6E66" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M860 60  Q 1000 130 1100 210" stroke="#2F6E66" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                <path d="M860 360 Q 1000 290 1100 210" stroke="#2F6E66" strokeWidth="1" fill="none" strokeDasharray="3 3" />

                <circle cx="80" cy="210" r="6" fill="#0b0b0a" fillOpacity="0.4" />
                <circle cx="600" cy="210" r="10" fill="#51A397" />
                <circle cx="600" cy="210" r="18" fill="none" stroke="#51A397" strokeOpacity="0.35" />
                <circle cx="1120" cy="210" r="10" fill="#0b0b0a" />
                <circle cx="1120" cy="210" r="18" fill="none" stroke="#0b0b0a" strokeOpacity="0.3" />

                <text x="340" y="30" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="12" letterSpacing="2" fill="#63615C">
                  DIAMANT 01 · BEGRIJPEN
                </text>
                <text x="860" y="30" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="12" letterSpacing="2" fill="#63615C">
                  DIAMANT 02 · BOUWEN
                </text>

                <text x="210" y="206" textAnchor="middle" fontFamily="var(--font-geist), sans-serif" fontWeight="500" fontSize="18" fill="#0B0B0A">
                  Ontdekken
                </text>
                <text x="210" y="224" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="#63615C">
                  divergeren · vragen stellen
                </text>
                <text x="470" y="206" textAnchor="middle" fontFamily="var(--font-geist), sans-serif" fontWeight="500" fontSize="18" fill="#0B0B0A">
                  Definiëren
                </text>
                <text x="470" y="224" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="#63615C">
                  convergeren · kritisch kiezen
                </text>
                <text x="730" y="206" textAnchor="middle" fontFamily="var(--font-geist), sans-serif" fontWeight="500" fontSize="18" fill="#0B0B0A">
                  Prototypen
                </text>
                <text x="730" y="224" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="#63615C">
                  divergeren · bouwen &amp; demo
                </text>
                <text x="990" y="206" textAnchor="middle" fontFamily="var(--font-geist), sans-serif" fontWeight="500" fontSize="18" fill="#0B0B0A">
                  Uitleveren
                </text>
                <text x="990" y="224" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill="#63615C">
                  convergeren · robuust maken
                </text>

                <text x="80" y="50" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="11" letterSpacing="1.5" fill="#63615C">
                  → START · VRAAG
                </text>
                <text x="600" y="50" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="11" letterSpacing="1.5" fill="#2F6E66">
                  ◆ MIJLPAAL 01 · PROTOTYPE
                </text>
                <text x="1120" y="50" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="11" letterSpacing="1.5" fill="#0B0B0A">
                  ■ MIJLPAAL 02 · LIVE V1.0
                </text>

                <text x="340" y="400" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10.5" letterSpacing="1.5" fill="#63615C">
                  MENSELIJKE KANT · LEREN · KRITISCH ZIJN OP HET PRODUCT
                </text>
                <text x="860" y="400" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10.5" letterSpacing="1.5" fill="#63615C">
                  MAKENDE KANT · PROTOTYPES · ITERATIES · PRODUCTIE
                </text>
              </svg>
            </div>
          </RiseIn>
        </Container>
      </section>

      {/* ============================ DIAMOND 01 ============================ */}
      <section>
        <Container className="pt-28 sm:pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 003 — DIAMANT · 01</Num>
                <div className="display text-[clamp(120px,16vw,180px)] leading-[0.88] tracking-[-0.05em] text-ink">
                  01
                </div>
                <h2 className="display text-[clamp(40px,5vw,52px)] leading-[1.02] tracking-[-0.035em] mt-7">
                  Begrijpen<br />voor we bouwen.
                </h2>
                <Num className="block mt-5 text-teal-ink">→ DE MENSELIJKE KANT.</Num>
                <p className="text-[16px] leading-[1.65] mt-6 max-w-[420px]">
                  We komen langs. We gaan zitten met de mensen die straks met het product
                  werken. We vragen door tot we weten wat er écht speelt — niet wat er in de
                  offerte stond.
                </p>
              </RiseIn>
            </div>

            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <article className="grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">FASE · 01</Num>
                    <div className="display text-[clamp(32px,4vw,44px)] leading-[0.9] tracking-[-0.04em]">
                      ◇
                    </div>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Ontdekken
                    </h3>
                    <p className="text-[15.5px] leading-[1.65] mt-3.5 max-w-[620px]">
                      Divergeren. We verbreden bewust: wie gebruikt dit, waar loopt het
                      vast, wat is er al geprobeerd. We zijn kritisch op de vraag zelf —
                      soms is wat er gevraagd wordt niet wat er nodig is.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="tag"><span className="dot" />Gesprekken met gebruikers</li>
                      <li className="tag"><span className="dot" />Proces-observatie</li>
                      <li className="tag"><span className="dot" />Systeemlandschap mappen</li>
                      <li className="tag"><span className="dot" />Vraag achter de vraag</li>
                    </ul>
                  </div>
                </article>

                <article className="grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">FASE · 02</Num>
                    <div className="display text-[clamp(32px,4vw,44px)] leading-[0.9] tracking-[-0.04em]">
                      ◆
                    </div>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Definiëren
                    </h3>
                    <p className="text-[15.5px] leading-[1.65] mt-3.5 max-w-[620px]">
                      Convergeren. We smallen af naar één heldere opdracht. Wat bouwen we
                      wel, wat níet. Welke functionaliteit moet er eerst zijn, waar ligt de
                      grens van versie 1.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="tag"><span className="dot" />Scope-document</li>
                      <li className="tag"><span className="dot" />Gebruikersreis</li>
                      <li className="tag"><span className="dot" />Architectuur op A4</li>
                      <li className="tag"><span className="dot" />Wat laten we weg</li>
                    </ul>
                  </div>
                </article>

                <article
                  className="grid grid-cols-[120px_1fr] gap-8 py-8"
                  style={{
                    borderTop: '1px solid var(--color-teal)',
                    borderBottom: '1px solid var(--color-teal)',
                    background:
                      'linear-gradient(90deg, rgba(81,163,151,0.06), transparent 70%)',
                  }}
                >
                  <div>
                    <Num className="block mb-2.5 text-teal-ink">MIJLPAAL · 01</Num>
                    <div className="display text-[clamp(32px,4vw,44px)] leading-[0.9] tracking-[-0.04em] text-teal-ink">
                      ◆
                    </div>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0 text-teal-ink">
                      Prototype
                    </h3>
                    <p className="text-[15.5px] leading-[1.65] mt-3.5 max-w-[620px]">
                      Werkend, klikbaar, met echte data waar dat kan. Iets om aan te wijzen
                      en te verbeteren — geen slide, geen mockup. Hier eindigt diamant 01 en
                      begint de bouwfase.
                    </p>
                  </div>
                </article>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ DIAMOND 02 ============================ */}
      <section className="bg-bone-2">
        <Container className="pt-28 sm:pt-32 pb-28 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 004 — DIAMANT · 02</Num>
                <div className="display text-[clamp(120px,16vw,180px)] leading-[0.88] tracking-[-0.05em] text-ink">
                  02
                </div>
                <h2 className="display text-[clamp(40px,5vw,52px)] leading-[1.02] tracking-[-0.035em] mt-7">
                  Bouwen<br />tot het staat.
                </h2>
                <Num className="block mt-5 text-teal-ink">→ DE MAKENDE KANT.</Num>
                <p className="text-[16px] leading-[1.65] mt-6 max-w-[420px]">
                  Van prototype naar product. Iteraties om de twee weken, steeds robuuster,
                  steeds dichter bij productie. Geen big-bang oplevering — we bouwen in het
                  licht.
                </p>
              </RiseIn>
            </div>

            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <article className="grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">FASE · 03</Num>
                    <div className="display text-[clamp(32px,4vw,44px)] leading-[0.9] tracking-[-0.04em]">
                      ◇
                    </div>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Prototypen
                    </h3>
                    <p className="text-[15.5px] leading-[1.65] mt-3.5 max-w-[620px]">
                      Divergeren. We verkennen oplossingen in werkende code. Twee varianten
                      naast elkaar is vaak sneller dan eindeloos kiezen op papier. Demo per
                      2–3 dagen.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="tag"><span className="dot" />Werkende branches</li>
                      <li className="tag"><span className="dot" />Demo per sprint</li>
                      <li className="tag"><span className="dot" />Feedback-loops kort</li>
                      <li className="tag"><span className="dot" />Echte data in test</li>
                    </ul>
                  </div>
                </article>

                <article className="grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">FASE · 04</Num>
                    <div className="display text-[clamp(32px,4vw,44px)] leading-[0.9] tracking-[-0.04em]">
                      ◆
                    </div>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Uitleveren
                    </h3>
                    <p className="text-[15.5px] leading-[1.65] mt-3.5 max-w-[620px]">
                      Convergeren. We maken het af en robuust: evals, guardrails, security,
                      migraties, backups. Prestaties op echte load. Observability staat
                      voordat de eerste gebruiker erop komt.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="tag"><span className="dot" />Evals &amp; guardrails</li>
                      <li className="tag"><span className="dot" />Security-hardening</li>
                      <li className="tag"><span className="dot" />Database-migraties</li>
                      <li className="tag"><span className="dot" />Observability</li>
                      <li className="tag"><span className="dot" />Load-tests</li>
                    </ul>
                  </div>
                </article>

                <article
                  className="grid grid-cols-[120px_1fr] gap-8 py-8"
                  style={{
                    borderTop: '1px solid var(--color-ink)',
                    borderBottom: '1px solid var(--color-ink)',
                    background:
                      'linear-gradient(90deg, rgba(11,11,10,0.05), transparent 70%)',
                  }}
                >
                  <div>
                    <Num className="block mb-2.5 text-ink">MIJLPAAL · 02</Num>
                    <div className="display text-[clamp(32px,4vw,44px)] leading-[0.9] tracking-[-0.04em]">
                      ■
                    </div>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Live — versie 1.0
                    </h3>
                    <p className="text-[15.5px] leading-[1.65] mt-3.5 max-w-[620px]">
                      In productie, met echte gebruikers. SLA gaat lopen, overdrachts­document
                      ligt er, volgende iteratie staat al ingepland. Geen &ldquo;project-einde&rdquo; —
                      het begin van doorontwikkeling.
                    </p>
                  </div>
                </article>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ CTA ============================ */}
      <section>
        <Container className="pt-28 sm:pt-36 pb-28 sm:pb-36 text-center">
          <RiseIn>
            <Num className="block mb-6">§ 005 — KENNISMAKING</Num>
          </RiseIn>
          <RiseIn delay={0.1}>
            <h2 className="display text-[clamp(48px,7vw,88px)] leading-[1.02] tracking-[-0.045em] m-0 max-w-[1100px] mx-auto">
              Klaar voor<br />
              <span className="text-teal-ink">diamant één?</span>
            </h2>
          </RiseIn>
          <RiseIn delay={0.2}>
            <p className="text-[18px] text-ink-2 mt-7 max-w-[620px] mx-auto leading-[1.55]">
              In een kennismaking van 30 minuten kijken we of er iets zinnigs te bouwen
              valt.
            </p>
          </RiseIn>
          <RiseIn delay={0.3}>
            <div className="mt-10 inline-flex">
              <Link
                href={CONTACT_HREF}
                className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-medium"
              >
                Plan een kennismaking
                <ArrowRight size={14} strokeWidth={1.8} />
              </Link>
            </div>
          </RiseIn>
        </Container>
      </section>
    </>
  );
}
