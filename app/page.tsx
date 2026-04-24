import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { Button } from '@/components/ui/button';
import { OctopusLogo } from '@/components/marks/octopus-logo';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { CapacityStrip } from '@/components/sections/capacity-strip';
import { InkDrawDivider } from '@/components/sections/ink-draw-divider';
import { TeamCard } from '@/components/sections/team-card';
import { Marquee } from '@/components/sections/marquee';

const INTAKE_HREF = '/contact#intake';

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-24 sm:pb-32">
          {/* Index marker */}
          <RiseIn>
            <div className="flex items-center justify-between gap-4 mb-12 sm:mb-16">
              <Num>§ 001 — INDEX</Num>
              <Num>AMSTERDAM · EST. 2026</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-9">
              <h1 className="display text-[clamp(48px,9vw,112px)] leading-[1.02] tracking-[-0.05em] m-0">
                <RiseIn delay={0.05}>
                  <span className="block">Software die past</span>
                </RiseIn>
                <RiseIn delay={0.18}>
                  <span className="block">
                    bij hoe{' '}
                    <span
                      className="inline-block align-middle mx-1 w-[clamp(48px,6vw,76px)] h-[clamp(48px,6vw,76px)] rounded-[6px] bg-teal"
                      aria-hidden
                    >
                      <OctopusLogo size={76} className="w-full h-full" />
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
            </div>

            {/* Meta column */}
            <div className="lg:col-span-3 lg:pt-4">
              <FadeIn delay={0.45}>
                <Num>→ 001 / STUDIO</Num>
                <p className="text-[14px] leading-[1.65] mt-3 max-w-[260px]">
                  Oktobus is een klein team van drie. Product, design en engineering in één. Geen
                  tussenlagen, geen accountmanagers — je werkt direct met de mensen die bouwen.
                </p>
                <Hairline className="my-6" />
                <Num>→ 002 / BELOFTE</Num>
                <p className="text-[14px] leading-[1.65] mt-3 max-w-[260px]">
                  Wij bouwen maatwerk software — met AI als bouwsteen, niet als feature.
                  Sneller dan een traditioneel bureau. Slimmer dan de zoveelste abonnement-tool.
                </p>
                <div className="mt-8 flex flex-col gap-3 items-stretch">
                  <Button
                    href={INTAKE_HREF}
                    size="lg"
                    className="justify-between min-w-[240px]"
                    endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
                  >
                    Plan een kennismaking
                  </Button>
                  <Button
                    href="/werk"
                    variant="ghost"
                    size="lg"
                    className="justify-between min-w-[240px]"
                    endIcon={<ArrowUpRight size={14} strokeWidth={1.6} />}
                  >
                    Recent werk (3)
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Capacity strip */}
          <FadeIn delay={0.7}>
            <div className="mt-20 sm:mt-24">
              <CapacityStrip
                cells={[
                  { label: '→ Capaciteit', value: '3', sub: 'projecten / kwartaal' },
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

      {/* ============================ WIE WE ZIJN ============================ */}
      <section>
        <Container className="py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <RiseIn>
                <Num className="block mb-3.5">§ 002 — STUDIO</Num>
                <span className="font-mono text-[11px] tracking-[0.12em] text-ink-2">
                  → Amsterdam · drie
                </span>
              </RiseIn>
            </div>
            <div className="lg:col-span-9">
              <RiseIn delay={0.1}>
                <h2 className="display text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.04em] m-0 max-w-[1000px]">
                  Oktobus is een klein team van drie.
                  <br />
                  <span className="text-ink-2">
                    Product, design en engineering in één.
                  </span>{' '}
                  Geen tussenlagen, geen accountmanagers — je werkt direct met de mensen die bouwen.
                </h2>
              </RiseIn>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16">
                <RiseIn delay={0.15}>
                  <TeamCard
                    number="01"
                    role="Product"
                    name="Jochem"
                    discipline="Product & strategie"
                    imgSrc="/team/jochem.jpg"
                  />
                </RiseIn>
                <RiseIn delay={0.22}>
                  <TeamCard
                    number="02"
                    role="Design"
                    name="David"
                    discipline="Design & interface"
                    imgSrc="/team/david.jpg"
                  />
                </RiseIn>
                <RiseIn delay={0.29}>
                  <TeamCard
                    number="03"
                    role="Engineering"
                    name="Max"
                    discipline="Engineering & AI"
                    imgSrc="/team/max.jpg"
                  />
                </RiseIn>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ MARQUEE ============================ */}
      <Marquee
        items={[
          'Maatwerk boven abonnement',
          'Production-ready, geen demo',
          'AI als bouwsteen',
          'Eerlijke prijs, geen bureau-prijs',
          'Geen tussenlagen',
          'Weken, geen maanden',
        ]}
      />

      {/* ============================ BELOFTE TEASER ============================ */}
      <section>
        <Container className="py-24 sm:py-32">
          <div className="flex justify-between items-end mb-12 sm:mb-16 flex-wrap gap-6">
            <RiseIn>
              <Num className="block mb-3.5">§ 003 — BELOFTE</Num>
              <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0 max-w-[760px]">
                Wat je van ons<br />mag verwachten.
              </h2>
            </RiseIn>
            <RiseIn delay={0.1}>
              <a href="/belofte" className="navlink text-[15px] pb-1.5">
                Lees meer over onze belofte →
              </a>
            </RiseIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RiseIn delay={0.05}>
              <article className="pillar h-full">
                <div className="flex justify-between items-start">
                  <span className="pnum">01</span>
                  <span className="picon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" stroke="#0B0B0A" strokeWidth="1.2" />
                      <rect x="9" y="9" width="6" height="6" fill="#51A397" />
                    </svg>
                  </span>
                </div>
                <h3 className="ptitle">Maatwerk, geen compromissen</h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-2 mt-3.5">
                  Software die past op jouw proces, niet andersom.
                </p>
              </article>
            </RiseIn>
            <RiseIn delay={0.12}>
              <article className="pillar h-full">
                <div className="flex justify-between items-start">
                  <span className="pnum">02</span>
                  <span className="picon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 18L10 8l4 6 6-10" stroke="#0B0B0A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="14" cy="14" r="2" fill="#51A397" />
                    </svg>
                  </span>
                </div>
                <h3 className="ptitle">Eerlijke prijs, geen bureau-prijs</h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-2 mt-3.5">
                  Wat bij een traditioneel bureau €200k en zes maanden kost, leveren wij in weken
                  tegen een fractie.
                </p>
              </article>
            </RiseIn>
            <RiseIn delay={0.19}>
              <article className="pillar h-full">
                <div className="flex justify-between items-start">
                  <span className="pnum">03</span>
                  <span className="picon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#0B0B0A" strokeWidth="1.2" />
                      <path d="M8 12l3 3 5-6" stroke="#51A397" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <h3 className="ptitle">Werkende software, geen prototype met plakband</h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-2 mt-3.5">
                  Alles wat we opleveren is production-ready. Vanaf dag één.
                </p>
              </article>
            </RiseIn>
          </div>
        </Container>
      </section>

      {/* ============================ WERKWIJZE TEASER (bone-2) ============================ */}
      <section className="bg-bone-2">
        <Container className="py-24 sm:py-32">
          <div className="flex justify-between items-end mb-12 sm:mb-16 flex-wrap gap-6">
            <RiseIn>
              <Num className="block mb-3.5">§ 004 — WERKWIJZE</Num>
              <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0 max-w-[800px]">
                Hoe we bouwen.
              </h2>
            </RiseIn>
            <RiseIn delay={0.1}>
              <a href="/werkwijze" className="navlink text-[15px] pb-1.5">
                Bekijk onze werkwijze →
              </a>
            </RiseIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RiseIn delay={0.05}>
              <article className="pillar h-full">
                <div className="flex justify-between items-start">
                  <span className="pnum">01</span>
                  <span className="picon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="10" width="5" height="5" stroke="#0B0B0A" strokeWidth="1.2" />
                      <rect x="10" y="10" width="5" height="5" stroke="#0B0B0A" strokeWidth="1.2" />
                      <rect x="17" y="10" width="4" height="5" fill="#51A397" />
                      <path d="M3 6h18" stroke="#0B0B0A" strokeWidth="1.2" />
                    </svg>
                  </span>
                </div>
                <h3 className="ptitle">We starten niet bij nul</h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-2 mt-3.5">
                  Herbruikbare bouwstenen en ingebouwde checks. Dus bouwen we bovenop een fundament,
                  niet vanaf de grond.
                </p>
              </article>
            </RiseIn>
            <RiseIn delay={0.12}>
              <article className="pillar h-full">
                <div className="flex justify-between items-start">
                  <span className="pnum">02</span>
                  <span className="picon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="9" r="4" stroke="#0B0B0A" strokeWidth="1.2" />
                      <path d="M7 20c0-3 2-5 5-5s5 2 5 5" stroke="#0B0B0A" strokeWidth="1.2" />
                      <circle cx="12" cy="9" r="1.6" fill="#51A397" />
                    </svg>
                  </span>
                </div>
                <h3 className="ptitle">AI typt snel. Wij denken voor.</h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-2 mt-3.5">
                  Jaren bouwervaring vóór AI bestond. Dat maakt het verschil tussen software die werkt
                  op de demo en software die jaren meegaat.
                </p>
              </article>
            </RiseIn>
            <RiseIn delay={0.19}>
              <article className="pillar h-full">
                <div className="flex justify-between items-start">
                  <span className="pnum">03</span>
                  <span className="picon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M4 7h16M4 12h16M4 17h10" stroke="#0B0B0A" strokeWidth="1.2" />
                      <circle cx="18" cy="17" r="2" fill="#51A397" />
                    </svg>
                  </span>
                </div>
                <h3 className="ptitle">Geen tussenlagen, geen vertaalverlies</h3>
                <p className="text-[14.5px] leading-[1.65] text-ink-2 mt-3.5">
                  Product, techniek en strategie in dezelfde hoofden. We bouwen het juiste, niet zomaar
                  iets.
                </p>
              </article>
            </RiseIn>
          </div>
        </Container>
      </section>

      {/* ============================ CONTACT CTA (dark) ============================ */}
      <section className="bg-ink text-bone">
        <Container className="py-28 sm:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <RiseIn>
                <span className="font-mono text-[10.5px] tracking-[0.08em] mb-4 block" style={{ color: '#F3EFE966' }}>
                  § 006 — KENNISMAKING
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
                  Plan een kennismaking van 30 minuten. Geen verkooppraat — we kijken of het klikt en
                  of er iets zinnigs te bouwen valt.
                </p>
                <div className="mt-10 flex items-center gap-4 flex-wrap">
                  <a
                    href={INTAKE_HREF}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-medium"
                    style={{ background: 'var(--color-teal)', color: 'var(--color-ink)' }}
                  >
                    Plan een kennismaking
                    <ArrowRight size={14} strokeWidth={1.8} />
                  </a>
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
