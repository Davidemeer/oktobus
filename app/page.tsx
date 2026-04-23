import { ArrowRight, ArrowUpRight, Code2, LayoutGrid, Target, Sparkles, ShieldCheck, Users } from 'lucide-react';
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
import { PillarCard } from '@/components/sections/pillar-card';
import { CTABlock } from '@/components/sections/cta-block';

const INTAKE_HREF = 'mailto:hello@oktobus.com?subject=Intake%20Oktobus';

export default function HomePage() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative">
        <Container className="pt-20 pb-24 sm:pt-32 sm:pb-36">
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
              <h1 className="font-sans font-medium text-ink text-[clamp(48px,10vw,112px)] leading-[1.02] tracking-[-0.05em]">
                <RiseIn delay={0.05}>
                  <span className="block">AI-software</span>
                </RiseIn>
                <RiseIn delay={0.18}>
                  <span className="block">
                    op maat,{' '}
                    <span
                      className="inline-block align-middle mx-1 w-[clamp(36px,5vw,60px)] h-[clamp(36px,5vw,60px)] rounded-[4px] bg-teal"
                      aria-hidden
                    >
                      <OctopusLogo size={60} className="w-full h-full" />
                    </span>{' '}
                    zonder
                  </span>
                </RiseIn>
                <RiseIn delay={0.32}>
                  <span className="block">
                    de <span className="text-teal-ink">plakband-fase</span>.
                  </span>
                </RiseIn>
              </h1>
            </div>

            {/* Meta column */}
            <div className="lg:col-span-3 lg:pt-4">
              <FadeIn delay={0.5}>
                <Num>→ 001 / STUDIO</Num>
                <Body muted={false} className="mt-3 max-w-[260px]">
                  Oktobus is Jochem, David en Max. Drie disciplines onder één dak: Product, Design,
                  Engineering.
                </Body>
                <Hairline className="my-6" />
                <Num>→ 002 / BELOFTE</Num>
                <Body muted={false} className="mt-3 max-w-[260px]">
                  AI-software op maat voor het mkb. We leveren <span className="font-medium">production-ready</span> —
                  geen demo in een PDF.
                </Body>
                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    href={INTAKE_HREF}
                    size="lg"
                    className="justify-between w-full"
                    endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
                  >
                    Plan een intake
                  </Button>
                  <Button
                    href="/werkwijze"
                    variant="ghost"
                    size="lg"
                    className="justify-between w-full"
                    endIcon={<ArrowUpRight size={14} strokeWidth={1.6} />}
                  >
                    Recent werk (3)
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Stat strip */}
          <FadeIn delay={0.75}>
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
              <StatItem label="→ CAPACITEIT" value="2" sub="projecten / kwartaal" />
              <StatItem label="→ TIJD TOT LIVE" value="6–12" sub="weken" />
              <StatItem label="→ OVERDRACHT" value="100%" sub="eigen code" />
              <StatItem
                label="→ VOLGEND SLOT"
                value={
                  <span className="inline-flex items-center gap-2">
                    <span className="focus-dot breathe" />
                    Q3 &rsquo;26
                  </span>
                }
              />
            </div>
          </FadeIn>
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
                  Drie mensen, één tafel. Korte lijnen, geen handovers, geen lagen — wij beslissen samen
                  met jou wat erin moet en wat niet.
                </Display>
              </RiseIn>
            </div>
            <div className="lg:col-span-3 lg:pt-3">
              <FadeIn delay={0.2}>
                <Body className="max-w-[280px]">
                  Product-denken, vormgeving en engineering naast elkaar. Wat hier ontworpen wordt, kan hier
                  ook gebouwd worden — vanaf dezelfde dag.
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
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12 sm:mb-16">
              <div className="flex items-center gap-4 flex-1 min-w-[260px]">
                <Eyebrow>003 — BELOFTE</Eyebrow>
                <Hairline className="flex-1" />
              </div>
              <Button
                href="/belofte"
                variant="ghost"
                size="sm"
                endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
              >
                Lees onze belofte
              </Button>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RiseIn delay={0.05}>
              <PillarCard
                number="01"
                icon={<Sparkles size={20} strokeWidth={1.2} />}
                title="AI waar het werkt"
                description="We zetten AI alleen in waar het echt wat oplost. Geen chatbot voor de chatbot — wel een assistent die je team uren per week scheelt."
              />
            </RiseIn>
            <RiseIn delay={0.15}>
              <PillarCard
                number="02"
                icon={<ShieldCheck size={20} strokeWidth={1.2} />}
                title="Code die blijft staan"
                description="Production-ready vanaf dag één. Tests, observability, evals voor LLM-flows. Geen prototype met plakband — software die jaren mee gaat."
              />
            </RiseIn>
            <RiseIn delay={0.25}>
              <PillarCard
                number="03"
                icon={<Users size={20} strokeWidth={1.2} />}
                title="Mens aan tafel"
                description="Je werkt met de drie mensen die het bouwen. Geen accountmanager, geen tussenpersoon. Korte lijn, snelle beslissingen."
              />
            </RiseIn>
          </div>
        </Container>
      </section>

      {/* ============== WERKWIJZE TEASER ============== */}
      <section className="border-t border-[color:var(--color-line-hair)]">
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12 sm:mb-16">
              <div className="flex items-center gap-4 flex-1 min-w-[260px]">
                <Eyebrow>004 — WERKWIJZE</Eyebrow>
                <Hairline className="flex-1" />
              </div>
              <Button
                href="/werkwijze"
                variant="ghost"
                size="sm"
                endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
              >
                Bekijk werkwijze
              </Button>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RiseIn delay={0.05}>
              <PillarCard
                number="01"
                icon={<LayoutGrid size={20} strokeWidth={1.2} />}
                title="Snelle bouwstraat"
                description="Een gestandaardiseerde manier van bouwen met herbruikbare bouwstenen. Daardoor leveren we sneller én voorspelbaarder."
                items={[
                  { label: 'Discovery', value: '2 WKN' },
                  { label: 'Build', value: '4–8 WKN' },
                  { label: 'Live', value: '6–12 WKN' },
                ]}
              />
            </RiseIn>
            <RiseIn delay={0.15}>
              <PillarCard
                number="02"
                icon={<Code2 size={20} strokeWidth={1.2} />}
                title="Diepe software-kennis"
                description="We weten wat onder de motorkap zit en kiezen de juiste oplossing per situatie. Geen one-size — wel een passend gereedschap."
                items={[
                  { label: 'Architectuur', value: 'OP MAAT' },
                  { label: 'LLM-evals', value: 'CONTINU' },
                  { label: 'Onderhoud', value: 'SLA' },
                ]}
              />
            </RiseIn>
            <RiseIn delay={0.25}>
              <PillarCard
                number="03"
                icon={<Target size={20} strokeWidth={1.2} />}
                title="Product- & strategiegevoel"
                description="Builders die ook product-denken: wat moet er wel en niet in, en hoe past het in je ICT-landschap. Strategie en techniek hand-in-hand."
                items={[
                  { label: 'Roadmap', value: '1 WK' },
                  { label: 'Scope-keuzes', value: 'SAMEN' },
                  { label: 'Meet & leer', value: 'LOPEND' },
                ]}
              />
            </RiseIn>
          </div>
        </Container>
      </section>

      {/* ============== CONTACT CTA ============== */}
      <div className="border-t border-[color:var(--color-line-hair)]">
        <CTABlock
          eyebrow="005 — CONTACT"
          title={<>Klaar om iets <span className="text-teal-ink">echt</span> te bouwen?</>}
          description="Eén intake van 30 minuten is genoeg om te kijken of we passen. Geen verplichting, wel een eerlijk gesprek."
          primary={{ label: 'Plan een intake', href: INTAKE_HREF }}
          secondary={{ label: 'Bekijk werkwijze', href: '/werkwijze' }}
        />
      </div>
    </>
  );
}

function StatItem({
  label,
  value,
  sub,
}: {
  label: string;
  value: React.ReactNode;
  sub?: string;
}) {
  return (
    <div>
      <Num className="block mb-2">{label}</Num>
      <div className="font-sans font-medium text-[clamp(24px,3.5vw,32px)] leading-[1.1] tracking-[-0.03em] text-ink">
        {value}
        {sub ? (
          <span className="text-ink-2 text-[clamp(14px,1.6vw,20px)] font-normal ml-1">
            {sub}
          </span>
        ) : null}
      </div>
    </div>
  );
}
