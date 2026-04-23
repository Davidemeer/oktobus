import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { Button } from '@/components/ui/button';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { IndexTOC } from '@/components/sections/index-toc';
import { BouwstenenGrid } from '@/components/sections/bouwstenen-grid';
import { DayChart } from '@/components/sections/day-chart';
import { ChainDiagram } from '@/components/sections/chain-diagram';
import { Timeline } from '@/components/sections/timeline';
import { VennSamenhang } from '@/components/sections/venn-samenhang';

export const metadata: Metadata = {
  title: 'Werkwijze',
  description:
    'Drie pijlers: een eigen bouwstraat, diepe software-kennis, builders met product- en strategiegevoel.',
};

const INTAKE_HREF = '/contact';

export default function WerkwijzePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16 sm:mb-20">
              <Num>§ WERKWIJZE — P. 03</Num>
              <Hairline className="flex-1" />
              <Num>DRIE PIJLERS</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 001 — INTRO</Num>
                <h1 className="display text-[clamp(64px,11vw,120px)] leading-[0.98] tracking-[-0.05em] m-0">
                  Zo<br />
                  <span className="text-teal-ink">bouwen we.</span>
                </h1>
              </RiseIn>
            </div>
            <div className="lg:col-span-7 lg:pb-4">
              <RiseIn delay={0.1}>
                <p className="text-[clamp(18px,2.2vw,24px)] leading-[1.4] tracking-[-0.018em] max-w-[620px]">
                  Snelheid zonder kwaliteitsverlies komt niet uit trucjes. Het komt uit drie dingen
                  die we goed hebben geregeld: een{' '}
                  <span className="text-teal-ink">bouwstraat</span> die klaarstaat, diepe{' '}
                  <span className="text-teal-ink">software-kennis</span>, en een{' '}
                  <span className="text-teal-ink">team</span> dat verder denkt dan de code.
                </p>
                <p className="text-[15px] leading-[1.65] text-ink-2 mt-5 max-w-[560px]">
                  Hieronder wat dat concreet betekent.
                </p>
              </RiseIn>
            </div>
          </div>

          {/* TOC */}
          <RiseIn delay={0.2}>
            <div className="mt-20">
              <IndexTOC
                entries={[
                  {
                    marker: '§ 002',
                    title: 'We starten niet bij nul.',
                    sub: 'Een bouwstraat die klaarstaat voor je begint.',
                    badge: 'PIJLER · 01',
                    href: '#pijler-01',
                  },
                  {
                    marker: '§ 003',
                    title: 'AI typt snel. Wij denken voor.',
                    sub: 'Jaren bouwervaring van vóór AI bestond.',
                    badge: 'PIJLER · 02',
                    href: '#pijler-02',
                  },
                  {
                    marker: '§ 004',
                    title: 'Geen tussenlagen.',
                    sub: 'Product, techniek en strategie in dezelfde hoofden.',
                    badge: 'PIJLER · 03',
                    href: '#pijler-03',
                  },
                ]}
              />
            </div>
          </RiseIn>
        </Container>
      </section>

      {/* ============================ PIJLER 01 (bone-2) ============================ */}
      <section id="pijler-01" className="bg-bone-2 scroll-mt-24">
        <Container className="py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 002 — PIJLER · 01</Num>
                <div className="display text-[clamp(120px,18vw,200px)] leading-[0.88] tracking-[-0.05em]">
                  01
                </div>
                <h2 className="display text-[clamp(36px,5vw,52px)] leading-[1.02] tracking-[-0.035em] mt-8">
                  We starten<br />niet bij nul.
                </h2>
                <p className="num mt-4 text-teal-ink">→ EEN BOUWSTRAAT DIE KLAARSTAAT.</p>
              </RiseIn>
            </div>
            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <p className="text-[18px] leading-[1.65] text-ink m-0">
                  De dingen die in elk softwareproject terugkomen — inlog, rechten, gebruikersbeheer,
                  ERP-koppelingen, AI-integraties, security, deployment — hebben wij als
                  herbruikbare bouwstenen klaar staan. Plus automatische kwaliteitschecks die bij
                  elke wijziging draaien en bewezen architectuurpatronen die we niet elk project
                  opnieuw uitvinden.
                </p>
                <p className="text-[18px] leading-[1.65] text-ink mt-6">
                  Waar een traditioneel bureau de eerste weken nog aan fundamenten bouwt, leveren
                  wij dan al werkende functionaliteit op. Bij de nieuwsredactie die wij hielpen stond
                  het scraping- en AI-beoordelingsfundament{' '}
                  <span className="text-teal-ink">binnen een week</span> — omdat het grotendeels
                  dezelfde architectuur is die we vaker hebben neergezet. De tijd die je uitspaart op
                  het standaardwerk, steken wij in wat jouw bedrijf uniek maakt.
                </p>
              </RiseIn>

              <FadeIn delay={0.2}>
                <div className="mt-12">
                  <BouwstenenGrid />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ PIJLER 02 ============================ */}
      <section id="pijler-02" className="scroll-mt-24">
        <Container className="py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 003 — PIJLER · 02</Num>
                <div className="display text-[clamp(120px,18vw,200px)] leading-[0.88] tracking-[-0.05em]">
                  02
                </div>
                <h2 className="display text-[clamp(36px,5vw,52px)] leading-[1.02] tracking-[-0.035em] mt-8">
                  AI typt snel.<br />Wij denken voor.
                </h2>
                <p className="num mt-4 text-teal-ink">→ JAREN BOUWERVARING VÓÓR AI.</p>
              </RiseIn>
            </div>
            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <p className="text-[18px] leading-[1.65] text-ink m-0">
                  In 2026 kan iedereen met een AI-tool iets in elkaar klikken dat werkt op een demo.
                  De vraag is niet of het werkt op dag 1. De vraag is of het werkt op{' '}
                  <span className="text-teal-ink">dag 1000</span>. Welke database past bij jouw
                  datavolumes. Waar mag je een shortcut nemen en waar absoluut niet. Of je software
                  over twee jaar nog mee kan als je bedrijf groeit.
                </p>
                <p className="text-[18px] leading-[1.65] text-ink mt-6">
                  Wij hebben jarenlang gebouwd voordat AI bestond. Dat verschil merk je niet op de
                  eerste oplevering — dat merk je als je systeem drie jaar later nog net zo soepel
                  draait. Bij het aannemersbedrijf betekende dat een ERP-koppeling die meegroeit als
                  ze nieuwe vestigingen openen, niet een integratie die bij elke update omvalt.{' '}
                  <span className="text-teal-ink">AI versnelt het typen. Het denken blijft mensenwerk.</span>
                </p>
              </RiseIn>

              <FadeIn delay={0.2}>
                <div className="mt-12">
                  <DayChart />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ PIJLER 03 (bone-2) ============================ */}
      <section id="pijler-03" className="bg-bone-2 scroll-mt-24">
        <Container className="py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 004 — PIJLER · 03</Num>
                <div className="display text-[clamp(120px,18vw,200px)] leading-[0.88] tracking-[-0.05em]">
                  03
                </div>
                <h2 className="display text-[clamp(36px,5vw,52px)] leading-[1.02] tracking-[-0.035em] mt-8">
                  Geen tussenlagen,<br />geen vertaalverlies.
                </h2>
                <p className="num mt-4 text-teal-ink">→ PRODUCT · TECHNIEK · STRATEGIE.</p>
              </RiseIn>
            </div>
            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <p className="text-[18px] leading-[1.65] text-ink m-0">
                  De meeste softwareprojecten falen niet op de techniek. Ze falen omdat het verkeerde
                  gebouwd is. Bij een traditioneel bureau praat je met een accountmanager, die praat
                  met een projectmanager, die praat met een developer. Bij elke vertaalslag verdwijnt
                  context. Bij ons praat je direct met de mensen die bouwen — en die denken mee over
                  wat je écht nodig hebt, welke functionaliteit eerst moet, en hoe dit past in je
                  bredere ICT-landschap over drie jaar.
                </p>
                <p className="text-[18px] leading-[1.65] text-ink mt-6">
                  Bij de camperverhuur die we hielpen was de vraag oorspronkelijk{' '}
                  <span className="text-teal-ink">&ldquo;bouw een boekingssysteem.&rdquo;</span> Wat
                  ze nodig hadden was{' '}
                  <span className="text-teal-ink">Google-vindbaarheid</span> — het boekingssysteem
                  was niet de bottleneck. Dat soort keuzes maak je niet in een specificatiedocument.
                  Die maak je in gesprek met iemand die én de business snapt, én weet wat bouwen
                  kost, én ziet waar het over drie jaar heen moet.
                </p>
              </RiseIn>

              <FadeIn delay={0.2}>
                <div className="mt-12">
                  <ChainDiagram />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ TIMELINE ============================ */}
      <section>
        <Container className="py-24 sm:py-32">
          <div className="flex justify-between items-end mb-12 sm:mb-16 flex-wrap gap-6">
            <RiseIn>
              <Num className="block mb-3.5">§ 005 — TIJDLIJN</Num>
              <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0">
                Week 1 tot week 6.<br />
                <span className="text-ink-2">Niet zes maanden.</span>
              </h2>
            </RiseIn>
            <RiseIn delay={0.1}>
              <p className="text-[14px] leading-[1.65] text-ink-2 max-w-[380px] pb-3">
                Indicatief voor een MKB-project op onze bouwstraat. Afhankelijk van scope en
                koppelingen — maar nooit een half jaar waarin je niks te zien krijgt.
              </p>
            </RiseIn>
          </div>

          <FadeIn delay={0.15}>
            <Timeline />
          </FadeIn>
        </Container>
      </section>

      {/* ============================ SAMENHANG (dark) ============================ */}
      <section className="bg-ink text-bone">
        <Container className="py-32 sm:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <span className="font-mono text-[10.5px] tracking-[0.08em] mb-3.5 block" style={{ color: '#F3EFE966' }}>
                  § 006 — SAMENHANG
                </span>
                <h2 className="display text-[clamp(48px,6.5vw,80px)] leading-[1] tracking-[-0.045em] m-0 text-bone">
                  De drie<br />samen.
                </h2>
              </RiseIn>
            </div>
            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <p
                  className="text-[clamp(18px,2.2vw,24px)] leading-[1.45] tracking-[-0.018em] max-w-[620px]"
                  style={{ color: '#F3EFE9E0' }}
                >
                  De bouwstraat geeft <span className="text-teal">snelheid</span>. De kennis geeft{' '}
                  <span className="text-teal">kwaliteit</span>. De builders zorgen dat het{' '}
                  <span className="text-teal">juiste</span> gebouwd wordt. Eén zonder de andere twee
                  levert niet op wat wij beloven.
                </p>
                <p
                  className="text-[17px] leading-[1.65] mt-6 max-w-[580px]"
                  style={{ color: '#F3EFE9AA' }}
                >
                  Dat is waarom Oktobus werkt — en waarom maatwerk voor het MKB nu eindelijk kan.
                </p>
                <FadeIn delay={0.2}>
                  <VennSamenhang />
                </FadeIn>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ CTA ============================ */}
      <section>
        <Container className="py-32 sm:py-36 text-center">
          <RiseIn>
            <Num className="block mb-6">§ 007 — KENNISMAKING</Num>
          </RiseIn>
          <RiseIn delay={0.05}>
            <h2 className="display text-[clamp(48px,8vw,88px)] leading-[1.02] tracking-[-0.045em] m-0 mx-auto max-w-[1100px]">
              Benieuwd hoe dit<br />voor jouw bedrijf<br />
              <span className="text-teal-ink">uitpakt?</span>
            </h2>
          </RiseIn>
          <RiseIn delay={0.15}>
            <p className="text-[18px] text-ink-2 mt-7 max-w-[620px] mx-auto leading-[1.55]">
              In een kennismaking van 30 minuten kijken we samen of er iets zinnigs te bouwen valt.
            </p>
          </RiseIn>
          <RiseIn delay={0.25}>
            <div className="mt-12">
              <Button
                href={INTAKE_HREF}
                size="lg"
                endIcon={<ArrowRight size={14} strokeWidth={1.8} />}
              >
                Plan een kennismaking
              </Button>
            </div>
          </RiseIn>
        </Container>
      </section>
    </>
  );
}
