import type { Metadata } from 'next';
import { LayoutGrid, Wrench, Compass } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Display } from '@/components/ui/display';
import { Body } from '@/components/ui/body';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { PageHero } from '@/components/sections/page-hero';
import { CTABlock } from '@/components/sections/cta-block';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Werkwijze',
  description:
    'Drie pijlers: een eigen bouwstraat, diepe software-kennis, builders met product- en strategiegevoel.',
};

const INTAKE_HREF = 'mailto:contact@oktobus.com?subject=Kennismaking%20Oktobus';

type IconPosition = 'left' | 'center' | 'right';

type PillarSectionProps = {
  id: string;
  number: string;
  eyebrow: string;
  icon: React.ReactNode;
  iconPosition: IconPosition;
  title: React.ReactNode;
  paragraphs: React.ReactNode[];
};

function PillarSection({
  id,
  number,
  eyebrow,
  icon,
  iconPosition,
  title,
  paragraphs,
}: PillarSectionProps) {
  const iconAlignment: Record<IconPosition, string> = {
    left: 'self-start',
    center: 'self-center',
    right: 'self-end',
  };

  return (
    <section
      id={id}
      className="border-t border-[color:var(--color-line-hair)] scroll-mt-24"
    >
      <Container className="py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
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
            <RiseIn delay={0.05}>
              <span
                aria-hidden
                className={cn(
                  'flex w-14 h-14 items-center justify-center rounded-full border border-[color:var(--color-line-hair)] text-ink mb-8',
                  iconAlignment[iconPosition],
                )}
              >
                {icon}
              </span>
            </RiseIn>
            <RiseIn delay={0.1}>
              <Display size="sm" as="h2" className="max-w-[600px]">
                {title}
              </Display>
            </RiseIn>
            <div className="mt-8 space-y-5 max-w-[640px]">
              {paragraphs.map((p, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <Body className="text-[15px] sm:text-[16px] leading-[1.65]">{p}</Body>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
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

      <PillarSection
        id="pijler-1"
        number="01"
        eyebrow="PIJLER — BOUWSTRAAT"
        icon={<LayoutGrid size={26} strokeWidth={1.2} />}
        iconPosition="left"
        title="Een bouwstraat die werkt voor je het weet"
        paragraphs={[
          'Wij hebben onze eigen manier van bouwen gestandaardiseerd. Herbruikbare bouwstenen voor dingen die in elk project terugkomen — inlog, rechten, koppelingen, AI-integraties. Ingebouwde kwaliteitschecks die bij elke wijziging automatisch draaien. En bewezen architectuurpatronen die we niet elk project opnieuw hoeven uit te vinden.',
          'Het resultaat: wij starten niet bij nul. Waar een bureau de eerste weken nog aan fundamenten bouwt, leveren wij al werkende functionaliteit op.',
        ]}
      />

      <PillarSection
        id="pijler-2"
        number="02"
        eyebrow="PIJLER — KENNIS"
        icon={<Wrench size={26} strokeWidth={1.2} />}
        iconPosition="center"
        title="We weten wat onder de motorkap zit"
        paragraphs={[
          'AI-tools maken bouwen sneller, maar ze nemen het denken niet over. Welke database past bij jouw datavolumes? Waar mag je een shortcut nemen en waar absoluut niet? Hoe zorg je dat je software over twee jaar nog mee kan?',
          'Wij hebben jarenlang gebouwd voordat AI bestond. Die basis maakt het verschil tussen software die werkt op de demo en software die jaren meegaat.',
        ]}
      />

      <PillarSection
        id="pijler-3"
        number="03"
        eyebrow="PIJLER — PRODUCT"
        icon={<Compass size={26} strokeWidth={1.2} />}
        iconPosition="right"
        title="We bouwen het juiste, niet zomaar iets"
        paragraphs={[
          'De meeste projecten falen niet op de techniek — ze falen omdat het verkeerde gebouwd is. Wij zijn geen developers die wachten op een specificatie. We denken mee over wat je écht nodig hebt, welke functionaliteit eerst moet, en waar je ICT-landschap over drie jaar staat.',
          'Product, techniek en strategie in één team. Dat scheelt drie overleggen en één vertaalslag.',
        ]}
      />

      {/* ============== CTA ============== */}
      <div className="border-t border-[color:var(--color-line-hair)]">
        <CTABlock
          eyebrow="VOLGENDE STAP"
          title="Benieuwd hoe dit voor jouw bedrijf uitpakt?"
          description="In een kennismaking van 30 minuten kijken we samen of er iets zinnigs te bouwen valt."
          primary={{ label: 'Plan een kennismaking', href: INTAKE_HREF }}
        />
      </div>
    </>
  );
}
