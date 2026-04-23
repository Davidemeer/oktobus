import type { Metadata } from 'next';
import {
  CreditCard,
  Workflow,
  Briefcase,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Display } from '@/components/ui/display';
import { Body } from '@/components/ui/body';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { Button } from '@/components/ui/button';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { PageHero } from '@/components/sections/page-hero';

export const metadata: Metadata = {
  title: 'Belofte',
  description:
    'Maatwerk, geen compromissen. MKB-budget, geen bureau-prijs. Werkende software, geen prototype met plakband.',
};

const INTAKE_HREF = 'mailto:contact@oktobus.com?subject=Kennismaking%20Oktobus';

const RECOGNITION = [
  { icon: CreditCard, text: 'Je stapelt abonnementen die elk voor 80% passen.' },
  {
    icon: Workflow,
    text: 'Een specifieke workflow in jouw bedrijf staat nergens goed in een standaard tool.',
  },
  { icon: Briefcase, text: 'Een bureau inhuren voelt te zwaar en te duur.' },
  { icon: Sparkles, text: 'Je wilt AI inzetten, maar weet niet waar te beginnen.' },
] as const;

const PRODUCTION_STICKERS = [
  { icon: ShieldCheck, label: 'PROD-READY' },
  { icon: CheckCircle2, label: 'TESTS INGEBOUWD' },
  { icon: Activity, label: 'LLM-EVALS' },
  { icon: Lock, label: 'SECURITY-REVIEW' },
] as const;

export default function BeloftePage() {
  return (
    <>
      <PageHero
        eyebrow="BELOFTE"
        title="Onze belofte"
        sub="Het MKB betaalt zich suf aan tien abonnementen die elk voor 80% passen. Een traditioneel softwarebureau inhuren kost €100k+ en duurt maanden. Wij zitten daartussen. Maatwerk in weken, tegen een budget dat past bij het MKB, op basis van hoe jouw werk écht gaat."
        subSize="lead"
      />

      {/* ============== BLOK 01 — Editorial 5/7 ============== */}
      <section>
        <Container className="py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <RiseIn>
                <div className="flex items-center gap-4 mb-8">
                  <Eyebrow>BELOFTE — 01</Eyebrow>
                  <Hairline className="flex-1 max-w-[80px]" />
                </div>
              </RiseIn>
              <RiseIn delay={0.05}>
                <span className="block font-sans font-medium text-[clamp(72px,9vw,128px)] leading-none tracking-[-0.045em] text-ink">
                  01
                </span>
              </RiseIn>
            </div>
            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <Display size="sm" as="h2" className="max-w-[560px]">
                  Maatwerk, geen compromissen
                </Display>
              </RiseIn>
              <FadeIn delay={0.25}>
                <Body size="lead" className="mt-6 max-w-[560px]">
                  Standaard SaaS is gebouwd voor een gemiddelde dat niet bestaat. Je mist net die ene
                  workflow die voor jóuw bedrijf belangrijk is. Wij beginnen bij jouw proces en
                  bouwen daaromheen — niet andersom.
                </Body>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============== BLOK 02 — Big-number comparison ============== */}
      <section>
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-center gap-4 mb-12 sm:mb-14">
              <Eyebrow>BELOFTE — 02</Eyebrow>
              <Hairline className="flex-1 max-w-[80px]" />
            </div>
          </RiseIn>

          {/* Vergelijking */}
          <RiseIn delay={0.05}>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 mb-4">
              <span className="font-sans font-medium text-[clamp(48px,8vw,108px)] leading-[0.95] tracking-[-0.045em] text-ink-2">
                6 maanden
              </span>
              <ArrowRight
                size={36}
                strokeWidth={1.3}
                className="text-ink-2 self-center"
                aria-hidden
              />
              <span className="font-sans font-medium text-[clamp(56px,10vw,128px)] leading-[0.95] tracking-[-0.045em] text-ink">
                weken
              </span>
            </div>
          </RiseIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
              <span className="font-sans font-medium text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-[-0.045em] text-ink-2">
                €200k
              </span>
              <ArrowRight
                size={28}
                strokeWidth={1.3}
                className="text-ink-2 self-center"
                aria-hidden
              />
              <span className="font-sans font-medium text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-[-0.045em] text-teal-ink">
                een fractie
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16">
            <div className="lg:col-span-7">
              <RiseIn delay={0.3}>
                <Display size="sm" as="h2" className="max-w-[560px]">
                  MKB-budget, geen bureau-prijs
                </Display>
              </RiseIn>
              <FadeIn delay={0.4}>
                <Body size="lead" className="mt-6 max-w-[600px]">
                  Twee jaar geleden was maatwerk voor het MKB niet rendabel. AI-kosten zijn
                  gekelderd en moderne dev-tools hebben onze bouwsnelheid vertienvoudigd. Wat zes
                  maanden en €200k kostte, bouwen wij in weken binnen een budget dat werkt.
                </Body>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============== BLOK 03 — Mixed-size bento ============== */}
      <section>
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-center gap-4 mb-10 sm:mb-12">
              <Eyebrow>BELOFTE — 03</Eyebrow>
              <Hairline className="flex-1 max-w-[80px]" />
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Large claim tile */}
            <RiseIn delay={0.05} className="sm:col-span-2 lg:col-span-4">
              <div className="bento p-8 sm:p-10 lg:p-12 h-full">
                <span className="block font-sans font-medium text-[clamp(64px,8vw,108px)] leading-none tracking-[-0.045em] text-ink">
                  03
                </span>
                <Display size="sm" as="h2" className="mt-6 max-w-[680px]">
                  Werkende software, geen prototype met plakband
                </Display>
                <Body size="lead" className="mt-6 max-w-[680px]">
                  Alles wat we opleveren draait in productie. Geen demo-code die je zelf nog moet
                  afmaken, geen knutselwerk dat bij de eerste piek omvalt. Production-ready vanaf
                  dag één.
                </Body>
              </div>
            </RiseIn>

            {/* 4 sticker tiles */}
            {PRODUCTION_STICKERS.map((sticker, i) => {
              const Icon = sticker.icon;
              return (
                <RiseIn key={sticker.label} delay={0.12 + i * 0.04}>
                  <div className="bento p-6 h-full flex flex-col gap-5 min-h-[140px] justify-between">
                    <Icon size={20} strokeWidth={1.2} className="text-ink" />
                    <Num>{sticker.label}</Num>
                  </div>
                </RiseIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============== VOOR WIE ============== */}
      <section>
        <Container className="py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <div className="flex items-center gap-4 mb-8">
                  <Eyebrow>VOOR WIE DIT WERKT</Eyebrow>
                  <Hairline className="flex-1 max-w-[80px]" />
                </div>
              </RiseIn>
              <RiseIn delay={0.05}>
                <Display size="md" as="h2" className="max-w-[460px]">
                  Voor wie dit werkt
                </Display>
              </RiseIn>
              <FadeIn delay={0.2}>
                <Body className="mt-6 max-w-[420px]">
                  Oktobus is er voor MKB-bedrijven die vastlopen op standaard software. Je herkent
                  het als:
                </Body>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {RECOGNITION.map((item, i) => {
                const Icon = item.icon;
                return (
                  <RiseIn key={item.text} delay={0.05 * (i + 1)}>
                    <div className="bento p-7 h-full flex flex-col gap-4">
                      <Icon size={22} strokeWidth={1.2} className="text-ink" />
                      <Body muted={false} className="text-[15px] leading-[1.55]">
                        {item.text}
                      </Body>
                    </div>
                  </RiseIn>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============== CTA — borderless ============== */}
      <section>
        <Container className="py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <RiseIn>
                <Num>VOLGENDE STAP</Num>
              </RiseIn>
              <RiseIn delay={0.05}>
                <Display size="md" as="h2" className="mt-3">
                  Klinkt het herkenbaar?
                </Display>
              </RiseIn>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Button href={INTAKE_HREF} size="lg">
                Plan een kennismaking
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
