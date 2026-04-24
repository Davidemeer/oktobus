import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { CaseRow } from '@/components/sections/case-row';
import { CapacityStrip } from '@/components/sections/capacity-strip';
import { Marquee } from '@/components/sections/marquee';

export const metadata: Metadata = {
  title: 'Werk',
  description:
    'Drie projecten, drie verschillende vragen. Wat ze delen: maatwerk dat in productie staat.',
};

const INTAKE_HREF = '/contact#intake';

export default function WerkPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16 sm:mb-20">
              <Num>§ WERK — P. 04</Num>
              <Hairline className="flex-1" />
              <Num>3 CASES · 2025–2026</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 001 — INTRO</Num>
                <h1 className="display text-[clamp(64px,11vw,128px)] leading-[0.96] tracking-[-0.05em] m-0">
                  Recent<br />
                  <span className="text-teal-ink">werk.</span>
                </h1>
              </RiseIn>
            </div>
            <div className="lg:col-span-7 lg:pb-4">
              <RiseIn delay={0.1}>
                <p className="text-[clamp(18px,2vw,22px)] leading-[1.4] tracking-[-0.015em] max-w-[580px]">
                  Drie projecten, drie verschillende vragen. Wat ze delen: maatwerk dat past op een
                  proces dat geen standaard tool kan vangen, opgeleverd in weken, in productie.
                </p>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ CASE INDEX ============================ */}
      <section>
        <Container className="pt-10 pb-24 sm:pb-32">
          <RiseIn>
            <CaseRow
              marker="§ 001"
              year="2025 · LIVE"
              kicker="Nieuwsredactie · AI-beoordeling"
              title={
                <>
                  Van 2.000 bronnen per dag<br />naar 20 redactie-kandidaten.
                </>
              }
              visual={
                <div className="border border-[color:var(--color-line)] bg-paper rounded-[2px] p-4">
                  <svg viewBox="0 0 320 100" className="w-full h-auto" aria-hidden>
                    <g fill="#0B0B0A">
                      <circle cx="14" cy="14" r="2" /><circle cx="30" cy="22" r="2" /><circle cx="46" cy="10" r="2" />
                      <circle cx="14" cy="36" r="2" /><circle cx="30" cy="48" r="2" /><circle cx="46" cy="40" r="2" />
                      <circle cx="14" cy="62" r="2" /><circle cx="30" cy="72" r="2" /><circle cx="46" cy="60" r="2" />
                      <circle cx="14" cy="86" r="2" /><circle cx="30" cy="90" r="2" /><circle cx="46" cy="84" r="2" />
                      <circle cx="62" cy="20" r="2" /><circle cx="62" cy="44" r="2" /><circle cx="62" cy="66" r="2" /><circle cx="62" cy="88" r="2" />
                    </g>
                    <path d="M80 12 L200 42 L200 58 L80 88 Z" fill="none" stroke="#0B0B0A" strokeWidth="1" />
                    <text x="140" y="54" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#63615C">
                      SCRAPING · LLM · EVALS
                    </text>
                    <g fill="#51A397">
                      <circle cx="230" cy="46" r="3" /><circle cx="248" cy="54" r="3" /><circle cx="266" cy="44" r="3" />
                      <circle cx="284" cy="52" r="3" /><circle cx="302" cy="46" r="3" />
                    </g>
                    <text x="14" y="100" fontFamily="var(--font-geist-mono)" fontSize="9" fill="#63615C">2.000 bronnen/dag</text>
                    <text x="310" y="100" fontFamily="var(--font-geist-mono)" fontSize="9" fill="#2F6E66" textAnchor="end">~20 kandidaten</text>
                  </svg>
                </div>
              }
              handnote="Fundament (scraping, LLM-beoordeling, observability) stond binnen één week. Grotendeels dezelfde architectuur die we vaker hebben neergezet."
              body="Een landelijke redactie liep vol op handmatig bronnen-doorspitten. We bouwden een pipeline die dagelijks duizenden bronnen ophaalt, met LLM's op nieuwswaarde scoort en de redactie een korte, gemotiveerde shortlist geeft — met evals die scheef­trekkende modellen direct vangen."
              meta={[
                { label: 'STACK', value: 'Next.js · Postgres · LLM' },
                { label: 'DUUR', value: '7 weken' },
                { label: 'ROL', value: 'Product · Engineering' },
              ]}
              pillarNumber="01"
              pillarLabel="Bouwstraat"
            />
          </RiseIn>

          <RiseIn>
            <CaseRow
              marker="§ 002"
              year="2025 · LIVE"
              kicker="Aannemersbedrijf · ERP-koppeling"
              title={
                <>
                  Een koppeling die<br />meegroeit met vestigingen.
                </>
              }
              visual={
                <div className="border border-[color:var(--color-line)] bg-paper rounded-[2px] p-4">
                  <svg viewBox="0 0 320 100" className="w-full h-auto" aria-hidden>
                    <rect x="14" y="20" width="52" height="52" fill="none" stroke="#0B0B0A" strokeWidth="1" />
                    <text x="40" y="50" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#0B0B0A">VESTIGING</text>
                    <text x="40" y="62" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#51A397">A</text>
                    <rect x="82" y="20" width="52" height="52" fill="none" stroke="#0B0B0A" strokeWidth="1" />
                    <text x="108" y="50" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#0B0B0A">VESTIGING</text>
                    <text x="108" y="62" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#51A397">B</text>
                    <rect x="150" y="20" width="52" height="52" fill="none" stroke="#51A397" strokeWidth="1.4" strokeDasharray="3 3" />
                    <text x="176" y="50" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#2F6E66">NIEUW</text>
                    <text x="176" y="62" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#2F6E66">C</text>
                    <line x1="40" y1="72" x2="276" y2="88" stroke="#0B0B0A" strokeWidth="1" />
                    <line x1="108" y1="72" x2="276" y2="88" stroke="#0B0B0A" strokeWidth="1" />
                    <line x1="176" y1="72" x2="276" y2="88" stroke="#51A397" strokeWidth="1.4" strokeDasharray="3 3" />
                    <circle cx="276" cy="88" r="10" fill="#0B0B0A" />
                    <text x="276" y="91" fontFamily="var(--font-geist-mono)" fontSize="8" textAnchor="middle" fill="#F3EFE9">ERP</text>
                  </svg>
                </div>
              }
              handnote="Geen integratie die bij elke ERP-update omvalt. Architectuur gekozen op wat ze over 3 jaar nodig hebben, niet wat ze vandaag toevallig vragen."
              body="Groeiend bouwbedrijf had een ERP dat elke nieuwe vestiging op maat wilde laten rijmen — wat bij de laatste leverancier elke update een brandweerklus werd. Wij hebben de koppeling omgebouwd met schone abstracties en evals op de datastromen: nieuwe vestiging openen is nu configuratie, geen maatwerk-sprint."
              meta={[
                { label: 'STACK', value: 'Node · Postgres · Queue' },
                { label: 'DUUR', value: '9 weken' },
                { label: 'ROL', value: 'Engineering · Architecture' },
              ]}
              pillarNumber="02"
              pillarLabel="Voordenken"
            />
          </RiseIn>

          <RiseIn>
            <CaseRow
              marker="§ 003"
              year="2026 · LIVE"
              kicker="Camperverhuur · Vindbaarheid"
              title={
                <>
                  De vraag was niet<br />een boekingssysteem.
                </>
              }
              visual={
                <div className="border border-[color:var(--color-line)] bg-paper rounded-[2px] p-4">
                  <svg viewBox="0 0 320 100" className="w-full h-auto" aria-hidden>
                    <text x="10" y="24" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#63615C">OORSPRONKELIJKE VRAAG</text>
                    <rect x="10" y="32" width="140" height="22" fill="none" stroke="#0B0B0A" strokeWidth="1" />
                    <text x="80" y="47" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#0B0B0A">
                      &quot;Bouw een boekingssysteem&quot;
                    </text>
                    <text x="80" y="72" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#C2623A">
                      → niet de bottleneck
                    </text>
                    <text x="170" y="24" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#2F6E66">WÉRKELIJKE BEHOEFTE</text>
                    <rect x="170" y="32" width="140" height="22" fill="#C9E1DC" stroke="#51A397" strokeWidth="1" />
                    <text x="240" y="47" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#0B0B0A">
                      Google-vindbaarheid
                    </text>
                    <text x="240" y="72" fontFamily="var(--font-geist-mono)" fontSize="9" textAnchor="middle" fill="#2F6E66">
                      → daar ligt de groei
                    </text>
                    <path d="M150 44 L170 44" stroke="#51A397" strokeWidth="1.4" />
                    <path d="M165 40 L170 44 L165 48" stroke="#51A397" strokeWidth="1.4" fill="none" />
                  </svg>
                </div>
              }
              handnote="Dit soort keuzes maak je niet in een specificatiedocument. Die maak je in gesprek met iemand die én de business snapt, én weet wat bouwen kost."
              body="Een familiebedrijf dat campers verhuurt kwam voor een boekingssysteem. In 20 minuten gesprek werd duidelijk dat boekingen niet het probleem waren — ze werden simpelweg niet gevonden. We hebben een SEO-gestuurde content­laag gebouwd met gestructureerde data en AI-geassisteerde locatie-pagina's. Verkeer verdrievoudigd; boekings­software blijft SaaS."
              meta={[
                { label: 'STACK', value: 'Astro · SSG · Structured data' },
                { label: 'DUUR', value: '5 weken' },
                { label: 'ROL', value: 'Product · Design · Engineering' },
              ]}
              pillarNumber="03"
              pillarLabel="Directe lijn"
            />
          </RiseIn>
        </Container>
      </section>

      {/* ============================ MARQUEE ============================ */}
      <Marquee items={['Nieuwsredactie', 'Aannemersbedrijf', 'Camperverhuur', 'Volgende case?']} />

      {/* ============================ KERNGETALLEN ============================ */}
      <section>
        <Container className="py-24 sm:py-32">
          <div className="flex justify-between items-end mb-12 sm:mb-14 flex-wrap gap-6">
            <RiseIn>
              <Num className="block mb-3.5">§ 002 — DWARSDOORSNEDE</Num>
              <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0 max-w-[780px]">
                Wat drie cases<br />gemeen hebben.
              </h2>
            </RiseIn>
          </div>

          <FadeIn delay={0.1}>
            <CapacityStrip
              cells={[
                { label: '→ Gemiddelde doorlooptijd', value: '7', sub: 'weken' },
                { label: '→ Eerste deploy', value: 'Week 2', sub: '· staging' },
                { label: '→ Teamgrootte', value: '3', sub: 'van Oktobus' },
                { label: '→ Nog live', value: '100%', sub: 'in productie' },
              ]}
            />
          </FadeIn>
        </Container>
      </section>

      {/* ============================ CTA (dark) ============================ */}
      <section className="bg-ink text-bone">
        <Container className="py-32 sm:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <RiseIn>
                <span className="font-mono text-[10.5px] tracking-[0.08em] mb-4 block" style={{ color: '#F3EFE966' }}>
                  § 003 — VOLGENDE
                </span>
                <h2 className="display text-[clamp(48px,7vw,88px)] leading-[1.02] tracking-[-0.045em] m-0 text-bone">
                  Wat wordt<br />
                  <span className="text-teal">case vier?</span>
                </h2>
              </RiseIn>
            </div>
            <div className="lg:col-span-6 lg:pb-3">
              <RiseIn delay={0.1}>
                <p className="text-[20px] leading-[1.5] tracking-[-0.01em] max-w-[480px]" style={{ color: '#F3EFE9CC' }}>
                  We nemen drie nieuwe projecten per kwartaal aan. Plan een kennismaking — we kijken
                  of het klikt en of er iets zinnigs te bouwen valt.
                </p>
                <div className="mt-10">
                  <a
                    href={INTAKE_HREF}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-medium"
                    style={{ background: 'var(--color-teal)', color: 'var(--color-ink)' }}
                  >
                    Plan een kennismaking
                    <ArrowRight size={14} strokeWidth={1.8} />
                  </a>
                </div>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
