import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { CapacityStrip } from '@/components/sections/capacity-strip';
import { Marquee } from '@/components/sections/marquee';
import { FAQ } from '@/components/sections/faq';
import { IntakeForm } from '@/components/sections/intake-form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Plan een kennismaking van 30 minuten. Geen verkooppraat, geen slides — een eerlijk gesprek of er iets zinnigs te bouwen valt.',
};

const FAQ_ITEMS = [
  {
    q: 'Wat kost een typisch traject?',
    a: 'Afhankelijk van scope, maar beduidend minder dan wat een bureau rekent. Na de kennismaking krijg je een vaste prijs voor een afgebakende scope — geen uurtje-factuurtje, geen scope-creep.',
  },
  {
    q: 'Hoe snel kunnen we starten?',
    a: 'We nemen drie projecten per kwartaal aan. Eerstvolgende slot is Q3 ’26. In drukke periodes kunnen we een kort vooronderzoek doen terwijl je in de wachtrij staat.',
  },
  {
    q: 'Wat als we de code zelf willen onderhouden?',
    a: 'Prima. Je krijgt 100% eigen code met documentatie en een overdrachtsessie. We kunnen ook doorbouwen op SLA of je eigen team on-the-job opleiden — wat past.',
  },
  {
    q: 'Werken jullie met bestaande systemen?',
    a: 'Ja. De meeste bedrijven hebben al een landschap — ERP, CRM, boekhouding. Wij koppelen erop aan. We vervangen niet wat al werkt.',
  },
  {
    q: 'En AI-veiligheid, privacy, juridisch?',
    a: 'Evals, guardrails en data-isolatie horen bij de bouwstraat, niet bij “later als we tijd hebben”. We werken met NL-hosting waar dat relevant is en leggen in heldere taal uit wat er met data gebeurt.',
  },
  {
    q: 'Wat als ik nog geen heldere vraag heb?',
    a: 'Dan is dat het gesprek. Een deel van ons werk begint met “we weten dat er iets moet veranderen, maar niet wát.” Dat uitpluizen is pijler drie.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16 sm:mb-20">
              <Num>§ CONTACT — P. 05</Num>
              <Hairline className="flex-1" />
              <Num>VOLGEND SLOT · Q3 &rsquo;26</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <RiseIn>
                <Num className="block mb-3.5">§ 001 — AANSPRAAK</Num>
                <h1 className="display text-[clamp(64px,12vw,136px)] leading-[0.94] tracking-[-0.05em] m-0">
                  Laten we<br />
                  <span className="text-teal-ink">praten.</span>
                </h1>
              </RiseIn>
            </div>
            <div className="lg:col-span-6 lg:pb-4">
              <RiseIn delay={0.1}>
                <p className="text-[clamp(18px,2vw,22px)] leading-[1.4] tracking-[-0.015em] max-w-[520px]">
                  Een kennismaking van 30 minuten. Geen verkooppraat, geen slides. We kijken of er
                  iets zinnigs te bouwen valt — en zo niet, weet je het binnen een halfuur.
                </p>
              </RiseIn>
            </div>
          </div>

          {/* Capacity widget */}
          <FadeIn delay={0.2}>
            <div className="mt-20 sm:mt-24">
              <CapacityStrip
                cells={[
                  { label: '→ Responstijd', value: '< 24', sub: 'uur' },
                  { label: '→ Gesprek', value: '30', sub: 'minuten' },
                  { label: '→ Vorm', value: 'Bellen', sub: 'of video' },
                  { label: '→ Volgend slot', value: 'Q3 ’26', pulse: true },
                ]}
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ============================ INTAKE / DIRECT ============================ */}
      <section id="intake">
        <Container className="pt-20 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Direct lines */}
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 002 — DIRECT</Num>
                <h2 className="display text-[clamp(40px,5.5vw,56px)] leading-[1.02] tracking-[-0.04em] m-0">
                  Liever<br />meteen?
                </h2>
              </RiseIn>

              <RiseIn delay={0.1}>
                <div className="mt-12 flex flex-col">
                  <a
                    href="mailto:contact@oktobus.com"
                    className="flex items-center justify-between py-5 border-t border-[color:var(--color-line)] transition-[padding-left] hover:pl-2"
                  >
                    <span>
                      <Num className="block mb-1.5">→ E-MAIL</Num>
                      <span className="display text-[22px] tracking-[-0.02em]">
                        contact@oktobus.com
                      </span>
                    </span>
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </a>
                  <a
                    href="tel:+31623555281"
                    className="flex items-center justify-between py-5 border-t border-[color:var(--color-line)] transition-[padding-left] hover:pl-2"
                  >
                    <span>
                      <Num className="block mb-1.5">→ BEL · DAVID</Num>
                      <span className="display text-[22px] tracking-[-0.02em]">
                        +31 6 23 55 52 81
                      </span>
                    </span>
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </a>
                  <a
                    href="#intake"
                    className="flex items-center justify-between py-5 border-block border-[color:var(--color-line)] transition-[padding-left] hover:pl-2"
                    style={{ borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}
                  >
                    <span>
                      <Num className="block mb-1.5">→ AGENDA</Num>
                      <span className="display text-[22px] tracking-[-0.02em]">
                        Prik direct een slot →
                      </span>
                    </span>
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </a>
                </div>
              </RiseIn>

              {/* Studio address */}
              <FadeIn delay={0.2}>
                <div className="mt-14 p-6 border border-[color:var(--color-line)] bg-paper rounded-[2px]">
                  <Num className="block mb-3">→ STUDIO</Num>
                  <div className="display text-[22px] tracking-[-0.02em] leading-[1.3]">
                    Oktobus<br />
                    Amsterdam, NL
                  </div>
                  <div className="num mt-3.5 leading-[1.7]" style={{ color: 'var(--color-ink-2)' }}>
                    KVK · 9xxxxxxx<br />
                    BTW · NL00000000B01
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <IntakeForm />
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ FAQ (bone-2) ============================ */}
      <section className="bg-bone-2">
        <Container className="py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 004 — VEELGESTELD</Num>
                <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0">
                  Vaker<br />gevraagd.
                </h2>
                <p className="text-[15px] leading-[1.65] text-ink-2 mt-6 max-w-[360px]">
                  Staat je vraag er niet tussen? Stuur &lsquo;m gewoon — je krijgt direct iemand van het
                  team aan de lijn, geen chatbot.
                </p>
              </RiseIn>
            </div>
            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <FAQ items={FAQ_ITEMS} />
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ MARQUEE ============================ */}
      <Marquee
        items={[
          'Plan een kennismaking',
          '30 minuten · geen verkooppraat',
          'Antwoord binnen 24u',
          'Volgend slot · Q3 ’26',
        ]}
      />
    </>
  );
}
