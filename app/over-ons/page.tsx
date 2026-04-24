import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { CapacityStrip } from '@/components/sections/capacity-strip';
import { TeamCard } from '@/components/sections/team-card';
import { IntakeForm } from '@/components/sections/intake-form';

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'Oktobus is een klein team van drie in Amsterdam. Product, design en engineering in één — je werkt direct met de mensen die bouwen.',
};

export default function OverOnsPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16 sm:mb-20">
              <Num>§ OVER ONS — P. 03</Num>
              <Hairline className="flex-1" />
              <Num>AMSTERDAM · DRIE</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <RiseIn>
                <Num className="block mb-3.5">§ 001 — WIE WE ZIJN</Num>
                <h1 className="display text-[clamp(56px,10vw,120px)] leading-[0.98] tracking-[-0.05em] m-0">
                  Een klein<br />team van <span className="text-teal-ink">drie</span>.
                </h1>
              </RiseIn>
            </div>
            <div className="lg:col-span-6 lg:pb-4">
              <RiseIn delay={0.1}>
                <p className="text-[clamp(18px,2vw,22px)] leading-[1.4] tracking-[-0.015em] max-w-[520px]">
                  Product, design en engineering in één.{' '}
                  <span className="text-teal-ink">
                    Geen tussenlagen, geen accountmanagers
                  </span>{' '}
                  — je werkt direct met de mensen die bouwen.
                </p>
                <p className="text-[15px] leading-[1.65] text-ink-2 mt-5 max-w-[480px]">
                  We werken vanuit Amsterdam. Tweeënhalve dag per week aan jouw project,
                  maximaal twee projecten per kwartaal — zodat we diep in je vraag kunnen
                  gaan.
                </p>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ TEAM ============================ */}
      <section className="bg-bone-2">
        <Container className="pt-24 sm:pt-32 pb-24 sm:pb-32">
          <RiseIn>
            <Num className="block mb-8">§ 002 — TEAM</Num>
          </RiseIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <RiseIn delay={0.05}>
              <TeamCard
                number="01"
                role="Product"
                name="Jochem"
                discipline="Product & strategie"
                imgSrc="/team/jochem.jpg"
              />
            </RiseIn>
            <RiseIn delay={0.12}>
              <TeamCard
                number="02"
                role="Design"
                name="David"
                discipline="Design & interface"
                imgSrc="/team/david.jpg"
              />
            </RiseIn>
            <RiseIn delay={0.19}>
              <TeamCard
                number="03"
                role="Engineering"
                name="Max"
                discipline="Engineering & AI"
                imgSrc="/team/max.jpg"
              />
            </RiseIn>
          </div>
        </Container>
      </section>

      {/* ============================ CONTACT (anchor: #contact) ============================ */}
      <section id="contact">
        <Container className="pt-28 sm:pt-32 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-12">
              <Num>§ 003 — KENNISMAKING</Num>
              <Hairline className="flex-1" />
              <Num>VOLGEND SLOT · Q3 &rsquo;26</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-14">
            <div className="lg:col-span-6">
              <RiseIn>
                <h2 className="display text-[clamp(48px,8vw,96px)] leading-[0.98] tracking-[-0.05em] m-0">
                  Laten we<br />
                  <span className="text-teal-ink">praten.</span>
                </h2>
              </RiseIn>
            </div>
            <div className="lg:col-span-6 lg:pb-3">
              <RiseIn delay={0.1}>
                <p className="text-[clamp(18px,2vw,20px)] leading-[1.4] tracking-[-0.015em] max-w-[480px]">
                  Een kennismaking van 30 minuten. Geen verkooppraat, geen slides. We kijken
                  of er iets zinnigs te bouwen valt — en zo niet, weet je het binnen een
                  halfuur.
                </p>
              </RiseIn>
            </div>
          </div>

          <FadeIn delay={0.2}>
            <div className="mb-20">
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

      {/* ============================ DIRECT + FORM ============================ */}
      <section>
        <Container className="pb-28 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Direct lines */}
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 004 — DIRECT</Num>
                <h3 className="display text-[clamp(40px,5.5vw,52px)] leading-[1.02] tracking-[-0.04em] m-0">
                  Liever<br />meteen?
                </h3>
              </RiseIn>

              <RiseIn delay={0.1}>
                <div className="mt-10 flex flex-col">
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
                      <Num className="block mb-1.5">→ BEL</Num>
                      <span className="display text-[22px] tracking-[-0.02em]">
                        +31 6 23 55 52 81
                      </span>
                    </span>
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-between py-5 border-t border-b border-[color:var(--color-line)] transition-[padding-left] hover:pl-2"
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

              <FadeIn delay={0.2}>
                <div className="mt-12 p-6 border border-[color:var(--color-line)] bg-paper rounded-[2px]">
                  <Num className="block mb-3">→ STUDIO</Num>
                  <div className="display text-[22px] tracking-[-0.02em] leading-[1.3]">
                    Oktobus<br />
                    Amsterdam, NL
                  </div>
                  <div
                    className="num mt-3.5 leading-[1.7]"
                    style={{ color: 'var(--color-ink-2)' }}
                  >
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
    </>
  );
}
