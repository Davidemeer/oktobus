import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Display } from '@/components/ui/display';
import { Body } from '@/components/ui/body';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { Button } from '@/components/ui/button';
import { OctopusLogo } from '@/components/marks/octopus-logo';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { TeaserRow } from '@/components/sections/teaser-row';
import { IndexRow } from '@/components/sections/index-row';
import { InkDrawDivider } from '@/components/sections/ink-draw-divider';
import { CTABlock } from '@/components/sections/cta-block';

const INTAKE_HREF = 'mailto:contact@oktobus.com?subject=Kennismaking%20Oktobus';

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative">
        <Container className="pt-20 pb-20 sm:pt-32 sm:pb-28">
          {/* Index marker */}
          <RiseIn>
            <div className="flex items-center gap-4 mb-12 sm:mb-16">
              <Eyebrow>001 — INDEX</Eyebrow>
              <Hairline className="flex-1" />
              <Num>AMSTERDAM · EST. 2026</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Headline */}
            <div className="lg:col-span-9">
              <h1 className="font-sans font-medium text-ink text-[clamp(44px,9vw,104px)] leading-[1.02] tracking-[-0.045em]">
                <RiseIn delay={0.05}>
                  <span className="block">
                    Software die past{' '}
                    <span
                      className="inline-block align-middle mx-1 w-[clamp(34px,4.5vw,56px)] h-[clamp(34px,4.5vw,56px)] rounded-[4px] bg-teal"
                      aria-hidden
                    >
                      <OctopusLogo size={56} className="w-full h-full" />
                    </span>
                  </span>
                </RiseIn>
                <RiseIn delay={0.18}>
                  <span className="block">
                    bij hoe jouw <span className="text-teal-ink">bedrijf</span> werkt.
                  </span>
                </RiseIn>
              </h1>
            </div>

            {/* Meta column */}
            <div className="lg:col-span-3 lg:pt-4">
              <FadeIn delay={0.45}>
                <Num>→ 001 / STUDIO</Num>
                <Body muted={false} className="mt-3 max-w-[260px]">
                  Oktobus is een klein team van drie. Product, design en engineering in één.
                </Body>
                <Hairline className="my-6" />
                <Num>→ 002 / BELOFTE</Num>
                <Body muted={false} className="mt-3 max-w-[260px]">
                  Geen tussenlagen, geen accountmanagers — je werkt direct met de mensen die bouwen.
                </Body>
                <div className="mt-8">
                  <Button
                    href={INTAKE_HREF}
                    size="lg"
                    className="justify-between w-full"
                    endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
                  >
                    Plan een kennismaking
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Subline — three lines, one per sentence */}
          <div className="mt-12 sm:mt-16 max-w-[820px]">
            <RiseIn delay={0.32} amount="small">
              <p className="text-[18px] sm:text-[22px] leading-[1.45] tracking-[-0.015em] text-ink">
                Wij bouwen maatwerk software voor het MKB — met AI als bouwsteen, niet als feature.
              </p>
            </RiseIn>
            <RiseIn delay={0.42} amount="small">
              <p className="text-[18px] sm:text-[22px] leading-[1.45] tracking-[-0.015em] text-ink-2 mt-2">
                Sneller dan een traditioneel bureau.
              </p>
            </RiseIn>
            <RiseIn delay={0.52} amount="small">
              <p className="text-[18px] sm:text-[22px] leading-[1.45] tracking-[-0.015em] text-ink-2">
                Slimmer dan de zoveelste abonnement-tool.
              </p>
            </RiseIn>
          </div>
        </Container>

        {/* InkDraw signatuur */}
        <Container className="pb-10 sm:pb-14">
          <InkDrawDivider />
        </Container>
      </section>

      {/* ============== WIE WE ZIJN ============== */}
      <section className="border-t border-[color:var(--color-line-hair)]">
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-center gap-4 mb-12">
              <Eyebrow>002 — WIE</Eyebrow>
              <Hairline className="flex-1" />
            </div>
          </RiseIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-9">
              <RiseIn delay={0.05}>
                <Display size="md" as="p">
                  Oktobus is een klein team van drie. Product, design en engineering in één.
                </Display>
              </RiseIn>
            </div>
            <div className="lg:col-span-3 lg:pt-3">
              <FadeIn delay={0.2}>
                <Body className="max-w-[280px]">
                  Geen tussenlagen, geen accountmanagers — je werkt direct met de mensen die bouwen.
                </Body>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============== BELOFTE TEASER ============== */}
      <section className="border-t border-[color:var(--color-line-hair)]">
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10 sm:mb-14">
              <div className="flex items-center gap-4 flex-1 min-w-[260px]">
                <Eyebrow>003 — BELOFTE</Eyebrow>
                <Hairline className="flex-1" />
              </div>
              <Display size="sm" as="h2" className="w-full mt-4">
                Wat je van ons mag verwachten
              </Display>
            </div>
          </RiseIn>

          <div className="border-b border-[color:var(--color-line-hair)]">
            <RiseIn delay={0.05}>
              <TeaserRow
                number="01"
                title="Maatwerk, geen compromissen"
                description="Software die past op jouw proces, niet andersom."
              />
            </RiseIn>
            <RiseIn delay={0.12}>
              <TeaserRow
                number="02"
                title="MKB-budget, geen bureau-prijs"
                description="Wat bij een traditioneel bureau €200k en zes maanden kost, leveren wij in weken tegen een fractie."
              />
            </RiseIn>
            <RiseIn delay={0.19}>
              <TeaserRow
                number="03"
                title="Werkende software, geen prototype met plakband"
                description="Alles wat we opleveren is production-ready. Vanaf dag één."
              />
            </RiseIn>
          </div>

          <div className="mt-10">
            <Button
              href="/belofte"
              variant="ghost"
              size="md"
              endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
            >
              Lees meer over onze belofte
            </Button>
          </div>
        </Container>
      </section>

      {/* ============== WERKWIJZE TEASER ============== */}
      <section className="border-t border-[color:var(--color-line-hair)]">
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10 sm:mb-14">
              <div className="flex items-center gap-4 flex-1 min-w-[260px]">
                <Eyebrow>004 — WERKWIJZE</Eyebrow>
                <Hairline className="flex-1" />
              </div>
              <Display size="sm" as="h2" className="w-full mt-4">
                Hoe we bouwen
              </Display>
            </div>
          </RiseIn>

          <div className="border-b border-[color:var(--color-line-hair)]">
            <RiseIn delay={0.05}>
              <IndexRow
                number="01"
                title="Snelle, betrouwbare bouwstraat"
                href="/werkwijze#pijler-1"
              />
            </RiseIn>
            <RiseIn delay={0.12}>
              <IndexRow
                number="02"
                title="Diepe software-kennis"
                href="/werkwijze#pijler-2"
              />
            </RiseIn>
            <RiseIn delay={0.19}>
              <IndexRow
                number="03"
                title="Builders met product- en strategiegevoel"
                href="/werkwijze#pijler-3"
              />
            </RiseIn>
          </div>

          <div className="mt-10">
            <Button
              href="/werkwijze"
              variant="ghost"
              size="md"
              endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
            >
              Bekijk onze werkwijze
            </Button>
          </div>
        </Container>
      </section>

      {/* ============== CONTACT CTA ============== */}
      <div className="border-t border-[color:var(--color-line-hair)]">
        <CTABlock
          eyebrow="005 — CONTACT"
          title={<>Benieuwd wat wij voor jouw bedrijf kunnen bouwen?</>}
          description="Plan een kennismaking van 30 minuten. Geen verkooppraat — we kijken of het klikt en of er iets zinnigs te bouwen valt."
          primary={{ label: 'Plan een kennismaking', href: INTAKE_HREF }}
        />
      </div>
    </>
  );
}
