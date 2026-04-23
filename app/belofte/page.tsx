import type { Metadata } from 'next';
import { ScissorsLineDashed, ShieldCheck, Users, Building2, MapPin } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Display } from '@/components/ui/display';
import { Body } from '@/components/ui/body';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { PageHero } from '@/components/sections/page-hero';
import { PillarCard } from '@/components/sections/pillar-card';
import { CTABlock } from '@/components/sections/cta-block';

export const metadata: Metadata = {
  title: 'Belofte',
  description:
    'Maatwerk zonder maatwerkprijs. Production-ready software, geen plakband-fase. Eén team van drie, geen tussenlagen.',
};

const INTAKE_HREF = 'mailto:hello@oktobus.com?subject=Intake%20Oktobus';

export default function BeloftePage() {
  return (
    <>
      <PageHero
        eyebrow="BELOFTE"
        title={
          <>
            Wat we beloven, en waarom je ons daarop mag <span className="text-teal-ink">aanspreken</span>.
          </>
        }
        sub="Drie dingen waar we onze naam aan verbinden. Niet de mooiste woorden — wel de hardste afspraken."
        meta={{ label: 'OKTOBUS', value: 'NL · 2026' }}
      />

      {/* ============== DRIE BELOFTE-BLOKKEN ============== */}
      <section className="border-t border-[color:var(--color-line-hair)]">
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-center gap-4 mb-12 sm:mb-16">
              <Eyebrow>BELOFTE — DRIE</Eyebrow>
              <Hairline className="flex-1" />
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RiseIn delay={0.05}>
              <PillarCard
                number="01"
                icon={<ScissorsLineDashed size={20} strokeWidth={1.2} />}
                title="Maatwerk zonder maatwerkprijs"
                description="Door een herbruikbare bouwstraat hoef je niet te betalen voor het wiel dat we al uitvonden. Je krijgt een oplossing die past — voor het tarief van een goed standaard-pakket."
                items={[
                  { label: 'Vaste prijs intake', value: 'JA' },
                  { label: 'Hergebruik bouwstenen', value: '60–80%' },
                  { label: 'Offerte', value: '5 DG' },
                ]}
              />
            </RiseIn>
            <RiseIn delay={0.15}>
              <PillarCard
                number="02"
                icon={<ShieldCheck size={20} strokeWidth={1.2} />}
                title="Production-ready, niet POC"
                description="Wat we leveren mag morgen live. Tests, observability, security en evals voor LLM-flows zitten standaard in het pakket. Geen 'nu nog even afmaken'-fase achteraf."
                items={[
                  { label: 'Tests inbegrepen', value: 'JA' },
                  { label: 'Observability', value: 'STD' },
                  { label: 'Security review', value: 'BIJ LIVE' },
                ]}
              />
            </RiseIn>
            <RiseIn delay={0.25}>
              <PillarCard
                number="03"
                icon={<Users size={20} strokeWidth={1.2} />}
                title="Eén team, geen lagen"
                description="Je werkt met de drie mensen die het bouwen. Geen accountmanager, geen offshore-team. Direct contact met Product, Design en Engineering — elke week."
                items={[
                  { label: 'Wekelijkse demo', value: 'VAST' },
                  { label: 'Reactietijd', value: '< 1 DG' },
                  { label: 'Slack-kanaal', value: 'GEDEELD' },
                ]}
              />
            </RiseIn>
          </div>
        </Container>
      </section>

      {/* ============== VOOR WIE ============== */}
      <section className="border-t border-[color:var(--color-line-hair)]">
        <Container className="py-20 sm:py-28">
          <RiseIn>
            <div className="flex items-center gap-4 mb-12 sm:mb-16">
              <Eyebrow>DOELGROEP</Eyebrow>
              <Hairline className="flex-1" />
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <RiseIn delay={0.05}>
                <Display size="md" as="h2" className="max-w-[700px]">
                  Voor mkb&#39;ers die meer willen dan een SaaS-abonnement, maar geen interne software-afdeling
                  hebben.
                </Display>
              </RiseIn>
              <RiseIn delay={0.15}>
                <Body className="mt-6 max-w-[560px]">
                  We werken het beste met bedrijven die hun eigen processen kennen, ergens vastlopen op
                  standaard-tools, en bereid zijn om mee te denken over wat de juiste oplossing is. Geen
                  knip-en-plak — wel echt vakwerk.
                </Body>
              </RiseIn>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-4">
              <FadeIn delay={0.2}>
                <div className="bento p-6 h-full">
                  <Building2 size={20} strokeWidth={1.2} className="text-ink mb-4" />
                  <Body muted={false} className="font-medium">
                    20–250 medewerkers
                  </Body>
                  <Body className="mt-2">
                    Groot genoeg om software-investering te dragen. Klein genoeg om snel te beslissen.
                  </Body>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bento p-6 h-full">
                  <MapPin size={20} strokeWidth={1.2} className="text-ink mb-4" />
                  <Body muted={false} className="font-medium">
                    Operationeel volwassen
                  </Body>
                  <Body className="mt-2">
                    Processen draaien al — software moet ze versnellen, niet uitvinden.
                  </Body>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============== CTA ============== */}
      <div className="border-t border-[color:var(--color-line-hair)]">
        <CTABlock
          eyebrow="VOLGENDE STAP"
          title={<>Past dit bij jullie? Eén gesprek geeft je het antwoord.</>}
          description="In 30 minuten weten we beide of het klikt. Geen verkooppraat, wel echte vragen."
          primary={{ label: 'Plan een intake', href: INTAKE_HREF }}
          secondary={{ label: 'Bekijk werkwijze', href: '/werkwijze' }}
        />
      </div>
    </>
  );
}
