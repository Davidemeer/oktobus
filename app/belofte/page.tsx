import type { Metadata } from 'next';
import { CreditCard, Workflow, Briefcase, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Display } from '@/components/ui/display';
import { Body } from '@/components/ui/body';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
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

type BeloftePromise = {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
};

const PROMISES: BeloftePromise[] = [
  {
    number: '01',
    eyebrow: 'BELOFTE — 01',
    title: 'Maatwerk, geen compromissen',
    body: 'Standaard SaaS is gebouwd voor een gemiddelde dat niet bestaat. Je mist net die ene workflow die voor jóuw bedrijf belangrijk is. Wij beginnen bij jouw proces en bouwen daaromheen — niet andersom.',
  },
  {
    number: '02',
    eyebrow: 'BELOFTE — 02',
    title: 'MKB-budget, geen bureau-prijs',
    body: 'Twee jaar geleden was maatwerk voor het MKB niet rendabel. AI-kosten zijn gekelderd en moderne dev-tools hebben onze bouwsnelheid vertienvoudigd. Wat zes maanden en €200k kostte, bouwen wij in weken binnen een budget dat werkt.',
  },
  {
    number: '03',
    eyebrow: 'BELOFTE — 03',
    title: 'Werkende software, geen prototype met plakband',
    body: 'Alles wat we opleveren draait in productie. Geen demo-code die je zelf nog moet afmaken, geen knutselwerk dat bij de eerste piek omvalt. Production-ready vanaf dag één.',
  },
];

const RECOGNITION = [
  {
    icon: CreditCard,
    text: 'Je stapelt abonnementen die elk voor 80% passen.',
  },
  {
    icon: Workflow,
    text: 'Een specifieke workflow in jouw bedrijf staat nergens goed in een standaard tool.',
  },
  {
    icon: Briefcase,
    text: 'Een bureau inhuren voelt te zwaar en te duur.',
  },
  {
    icon: Sparkles,
    text: 'Je wilt AI inzetten, maar weet niet waar te beginnen.',
  },
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

      {/* ============== DRIE BELOFTE-BLOKKEN ============== */}
      {PROMISES.map((promise) => (
        <section
          key={promise.number}
          className="border-t border-[color:var(--color-line-hair)]"
        >
          <Container className="py-20 sm:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <RiseIn>
                  <div className="flex items-center gap-4 mb-8">
                    <Eyebrow>{promise.eyebrow}</Eyebrow>
                    <Hairline className="flex-1 max-w-[80px]" />
                  </div>
                </RiseIn>
                <RiseIn delay={0.05}>
                  <span className="block font-sans font-medium text-[clamp(72px,9vw,128px)] leading-none tracking-[-0.045em] text-ink">
                    {promise.number}
                  </span>
                </RiseIn>
              </div>

              <div className="lg:col-span-7">
                <RiseIn delay={0.1}>
                  <Display size="sm" as="h2" className="max-w-[560px]">
                    {promise.title}
                  </Display>
                </RiseIn>
                <FadeIn delay={0.25}>
                  <Body size="lead" className="mt-6 max-w-[560px]">
                    {promise.body}
                  </Body>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* ============== VOOR WIE ============== */}
      <section className="border-t border-[color:var(--color-line-hair)]">
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-center gap-4 mb-12 sm:mb-16">
              <Eyebrow>VOOR WIE DIT WERKT</Eyebrow>
              <Hairline className="flex-1" />
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
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

      {/* ============== CTA ============== */}
      <section className="border-t border-[color:var(--color-line-hair)]">
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-center gap-4 mb-10 sm:mb-14">
              <Eyebrow>VOLGENDE STAP</Eyebrow>
              <Hairline className="flex-1" />
            </div>
          </RiseIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <RiseIn delay={0.05}>
                <Display size="md" as="h2">
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
