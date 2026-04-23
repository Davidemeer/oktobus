import type { Metadata } from 'next';
import { LayoutGrid, Code2, Target } from 'lucide-react';
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
    'Drie pijlers: snelle bouwstraat, diepe software-kennis, builders met product- en strategiegevoel.',
};

const INTAKE_HREF = 'mailto:hello@oktobus.com?subject=Intake%20Oktobus';

type PillarSectionProps = {
  number: string;
  eyebrow: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  items: Array<{ label: string; value: string }>;
};

function PillarSection({ number, eyebrow, icon, title, body, items }: PillarSectionProps) {
  return (
    <section className="border-t border-[color:var(--color-line-hair)]">
      <Container className="py-20 sm:py-28">
        <RiseIn>
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <Num className="font-mono text-[12px] tracking-[0.12em] text-ink">{number}</Num>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Hairline className="flex-1" />
          </div>
        </RiseIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <RiseIn delay={0.05}>
              <span className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-[color:var(--color-line-hair)] mb-8 text-ink">
                {icon}
              </span>
            </RiseIn>
            <RiseIn delay={0.1}>
              <Display size="md" as="h2" className="max-w-[680px]">
                {title}
              </Display>
            </RiseIn>
            <RiseIn delay={0.2}>
              <Body className="mt-8 max-w-[560px]">{body}</Body>
            </RiseIn>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <FadeIn delay={0.25}>
              <div className="bento p-7 sm:p-8">
                <Eyebrow>WAT JE KRIJGT</Eyebrow>
                <Hairline className="mt-5 mb-6" />
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.label}
                      className="flex justify-between gap-4 text-[14px] text-ink"
                    >
                      <span>{item.label}</span>
                      <Num className="shrink-0">{item.value}</Num>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
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
        title={
          <>
            Drie pijlers waarop alles rust. <span className="text-teal-ink">Geen geheim</span>, wel
            consequent.
          </>
        }
        sub="Hoe we werken bepaalt wat we kunnen leveren. Snelheid komt uit standaardisatie. Diepte komt uit ervaring. Het juiste antwoord komt uit product-denken."
        meta={{ label: 'OKTOBUS', value: 'METHODE V1' }}
      />

      <PillarSection
        number="01"
        eyebrow="PIJLER — BOUWSTRAAT"
        icon={<LayoutGrid size={22} strokeWidth={1.2} />}
        title={
          <>
            Een snelle, betrouwbare <span className="text-teal-ink">bouwstraat</span>.
          </>
        }
        body={
          <>
            We bouwen niet elke keer vanaf nul. Authenticatie, deploy-pipelines, observability, evals voor
            LLM-flows — dat staat al. Wat we voor jou ontwerpen plug je in op een fundament dat al
            bewezen werkt. Resultaat: minder bouwtijd, voorspelbare kwaliteit, en een product dat morgen al
            live kan.
          </>
        }
        items={[
          { label: 'Auth & users', value: 'STD' },
          { label: 'CI/CD', value: 'STD' },
          { label: 'Observability', value: 'STD' },
          { label: 'LLM-evals', value: 'STD' },
          { label: 'Backups & DR', value: 'STD' },
        ]}
      />

      <PillarSection
        number="02"
        eyebrow="PIJLER — KENNIS"
        icon={<Code2 size={22} strokeWidth={1.2} />}
        title={
          <>
            Diepe <span className="text-teal-ink">software-kennis</span>, niet één trucje.
          </>
        }
        body={
          <>
            We weten wat onder de motorkap zit. Welke databases, welke LLM-providers, welke architecturen
            voor welk soort werk. Geen one-size-fits-all — wel de keuze die het beste past bij wat jij
            doet. En als de markt over een jaar verandert, kunnen we mee bewegen zonder herbouw.
          </>
        }
        items={[
          { label: 'Stack-keuze', value: 'OP MAAT' },
          { label: 'LLM-providers', value: 'MULTI' },
          { label: 'Architectuur-review', value: 'BIJ START' },
          { label: 'Migratiepad', value: 'INGEBOUWD' },
        ]}
      />

      <PillarSection
        number="03"
        eyebrow="PIJLER — PRODUCT"
        icon={<Target size={22} strokeWidth={1.2} />}
        title={
          <>
            Builders met <span className="text-teal-ink">product- &amp; strategiegevoel</span>.
          </>
        }
        body={
          <>
            Techniek alleen is niet genoeg. We helpen je beslissen wat erin moet en wat niet, hoe het past
            bij je ICT-landschap, en welke volgende stap zin heeft. Strategie en bouwen zitten bij ons aan
            dezelfde tafel — we leveren niet alleen code, we leveren een keuze die je kan uitleggen.
          </>
        }
        items={[
          { label: 'Roadmap-sessie', value: '1 DG' },
          { label: 'Scope-keuzes', value: 'SAMEN' },
          { label: 'Meet- & leerplan', value: 'STD' },
          { label: 'Stakeholder-review', value: 'OP AFROEP' },
        ]}
      />

      {/* ============== CTA ============== */}
      <div className="border-t border-[color:var(--color-line-hair)]">
        <CTABlock
          eyebrow="VOLGENDE STAP"
          title={<>Wil je weten of dit voor jullie werkt?</>}
          description="Eén intake-gesprek van 30 minuten. We luisteren, schetsen een aanpak, en je weet meteen waar we staan."
          primary={{ label: 'Plan een intake', href: INTAKE_HREF }}
          secondary={{ label: 'Lees de belofte', href: '/belofte' }}
        />
      </div>
    </>
  );
}
