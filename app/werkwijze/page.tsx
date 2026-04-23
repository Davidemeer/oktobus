import type { Metadata } from 'next';
import { Key, UserCog, Plug, Sparkles, GitBranch, Activity } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Display } from '@/components/ui/display';
import { Body } from '@/components/ui/body';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { PageHero } from '@/components/sections/page-hero';
import { CTABlock } from '@/components/sections/cta-block';

export const metadata: Metadata = {
  title: 'Werkwijze',
  description:
    'Drie pijlers: een eigen bouwstraat, diepe software-kennis, builders met product- en strategiegevoel.',
};

const INTAKE_HREF = 'mailto:contact@oktobus.com?subject=Kennismaking%20Oktobus';

const BUILDING_BLOCKS = [
  { icon: Key, label: 'AUTH' },
  { icon: UserCog, label: 'RECHTEN' },
  { icon: Plug, label: 'KOPPELINGEN' },
  { icon: Sparkles, label: 'AI-INTEGRATIES' },
  { icon: GitBranch, label: 'CI/CD' },
  { icon: Activity, label: 'OBSERVABILITY' },
] as const;

const KENNIS_VRAGEN = [
  'Welke database past bij jouw datavolumes?',
  'Waar mag je een shortcut nemen en waar absoluut niet?',
  'Hoe zorg je dat je software over twee jaar nog mee kan?',
] as const;

type PillarHeaderProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: React.ReactNode;
};

function PillarHeader({ id, number, eyebrow, title }: PillarHeaderProps) {
  return (
    <div id={id} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 sm:mb-20">
      <div className="lg:col-span-5">
        <RiseIn>
          <div className="flex items-center gap-4 mb-8">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Hairline className="flex-1 max-w-[80px]" />
          </div>
        </RiseIn>
        <RiseIn delay={0.05}>
          <span className="block font-sans font-medium text-[clamp(72px,9vw,128px)] leading-none tracking-[-0.045em] text-ink">
            {number}
          </span>
        </RiseIn>
      </div>
      <div className="lg:col-span-7">
        <RiseIn delay={0.1}>
          <Display size="sm" as="h2" className="max-w-[600px]">
            {title}
          </Display>
        </RiseIn>
      </div>
    </div>
  );
}

export default function WerkwijzePage() {
  return (
    <>
      <PageHero
        eyebrow="WERKWIJZE"
        title="Zo bouwen we"
        sub="Snelheid zonder kwaliteitsverlies komt niet uit trucjes — het komt uit drie dingen die we goed hebben geregeld: onze eigen bouwstraat, diepe software-kennis, en een team dat verder denkt dan de code."
      />

      {/* ============== PIJLER 01 — BOUWSTRAAT ============== */}
      <section>
        <Container className="py-20 sm:py-28">
          <PillarHeader
            id="pijler-1"
            number="01"
            eyebrow="PIJLER — BOUWSTRAAT"
            title="Een bouwstraat die werkt voor je het weet"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <FadeIn>
                <Body className="text-[16px] leading-[1.65] max-w-[640px]">
                  Wij hebben onze eigen manier van bouwen gestandaardiseerd. Herbruikbare
                  bouwstenen voor dingen die in elk project terugkomen — inlog, rechten,
                  koppelingen, AI-integraties. Ingebouwde kwaliteitschecks die bij elke wijziging
                  automatisch draaien. En bewezen architectuurpatronen die we niet elk project
                  opnieuw hoeven uit te vinden.
                </Body>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Body muted={false} className="text-[16px] leading-[1.65] max-w-[640px]">
                  Het resultaat: wij starten niet bij nul. Waar een bureau de eerste weken nog aan
                  fundamenten bouwt, leveren wij al werkende functionaliteit op.
                </Body>
              </FadeIn>
            </div>

            {/* Bouwstenen mini-grid */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <Num className="block mb-4">→ WAT ER AL STAAT</Num>
              </FadeIn>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                {BUILDING_BLOCKS.map((block, i) => {
                  const Icon = block.icon;
                  return (
                    <RiseIn key={block.label} delay={0.05 + i * 0.04}>
                      <div className="bento p-4 sm:p-5 flex items-center gap-3 h-full min-h-[72px]">
                        <Icon size={18} strokeWidth={1.2} className="text-ink shrink-0" />
                        <Num className="text-ink">{block.label}</Num>
                      </div>
                    </RiseIn>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============== PIJLER 02 — KENNIS ============== */}
      <section>
        <Container className="py-20 sm:py-28">
          <PillarHeader
            id="pijler-2"
            number="02"
            eyebrow="PIJLER — KENNIS"
            title="We weten wat onder de motorkap zit"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <FadeIn>
                <Body className="text-[16px] leading-[1.65] max-w-[640px]">
                  AI-tools maken bouwen sneller, maar ze nemen het denken niet over. Welke database
                  past bij jouw datavolumes? Waar mag je een shortcut nemen en waar absoluut niet?
                  Hoe zorg je dat je software over twee jaar nog mee kan?
                </Body>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Body muted={false} className="text-[16px] leading-[1.65] max-w-[640px]">
                  Wij hebben jarenlang gebouwd voordat AI bestond. Die basis maakt het verschil
                  tussen software die werkt op de demo en software die jaren meegaat.
                </Body>
              </FadeIn>
            </div>

            {/* Retorische vragen als mono checklist */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <Num className="block mb-6">→ VRAGEN DIE WIJ STELLEN</Num>
              </FadeIn>
              <ul className="border-t border-[color:var(--color-line-hair)]">
                {KENNIS_VRAGEN.map((q, i) => (
                  <RiseIn key={q} delay={0.1 + i * 0.06}>
                    <li className="flex items-start gap-4 py-5 border-b border-[color:var(--color-line-hair)]">
                      <span
                        aria-hidden
                        className="font-mono text-[10.5px] tracking-[0.08em] text-teal-ink mt-1.5 shrink-0"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[15px] sm:text-[16px] text-ink leading-[1.55]">
                        {q}
                      </span>
                    </li>
                  </RiseIn>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ============== PIJLER 03 — BUILDERS ============== */}
      <section>
        <Container className="py-20 sm:py-28">
          <PillarHeader
            id="pijler-3"
            number="03"
            eyebrow="PIJLER — PRODUCT"
            title="We bouwen het juiste, niet zomaar iets"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <FadeIn>
                <Body className="text-[16px] leading-[1.65] max-w-[640px]">
                  De meeste projecten falen niet op de techniek — ze falen omdat het verkeerde
                  gebouwd is. Wij zijn geen developers die wachten op een specificatie. We denken
                  mee over wat je écht nodig hebt, welke functionaliteit eerst moet, en waar je
                  ICT-landschap over drie jaar staat.
                </Body>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Body muted={false} className="text-[16px] leading-[1.65] max-w-[640px]">
                  Product, techniek en strategie in één team.
                </Body>
              </FadeIn>
            </div>

            {/* Pull-quote payoff */}
            <div className="lg:col-span-5 lg:pt-3">
              <FadeIn delay={0.15}>
                <div className="pl-6 border-l-2 border-teal">
                  <Num className="block mb-4">→ HET SCHEELT</Num>
                  <p className="font-sans font-medium text-[clamp(28px,3.4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink max-w-[440px]">
                    Drie overleggen en één vertaalslag.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============== CTA — borderless ============== */}
      <CTABlock
        eyebrow="VOLGENDE STAP"
        title="Benieuwd hoe dit voor jouw bedrijf uitpakt?"
        description="In een kennismaking van 30 minuten kijken we samen of er iets zinnigs te bouwen valt."
        primary={{ label: 'Plan een kennismaking', href: INTAKE_HREF }}
      />
    </>
  );
}
