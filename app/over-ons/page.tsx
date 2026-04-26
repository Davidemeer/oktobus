import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { RiseIn } from '@/components/motion/rise-in';
import { TeamCard } from '@/components/sections/team-card';
import { IntakeForm } from '@/components/sections/intake-form';

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'Oktobus is een klein team van drie in Amsterdam. Product, design en engineering in één. Je werkt direct met de mensen die bouwen.',
};

export default function OverOnsPage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16 sm:mb-20">
              <Num>§ 001 · WIE WE ZIJN</Num>
              <Hairline className="flex-1" />
              <Num>DAVID · JOCHEM · MAX</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <RiseIn>
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
                    Geen tussenlagen, geen accountmanagers.
                  </span>{' '}
                  Je werkt direct met de mensen die bouwen.
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
            <Num className="block mb-8">§ 002 · TEAM</Num>
          </RiseIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <RiseIn delay={0.05}>
              <TeamCard
                number="01"
                role="Product"
                name="Jochem"
                discipline="Product & (AI) strategie"
                imgSrc="/team/jochem.jpg"
              />
            </RiseIn>
            <RiseIn delay={0.12}>
              <TeamCard
                number="02"
                role="Design"
                name="David"
                discipline="Design en bedrijfsvoering"
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

      {/* ============================ DIRECT + FORM (anchor: #contact) ============================ */}
      <section id="contact">
        <Container className="pt-24 sm:pt-32 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Direct lines */}
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 004 · DIRECT</Num>
                <h3 className="display text-[clamp(40px,5.5vw,52px)] leading-[1.02] tracking-[-0.04em] m-0">
                  Liever<br />meteen?
                </h3>
              </RiseIn>

              <RiseIn delay={0.1}>
                <div className="mt-10 flex flex-col">
                  <a
                    href="mailto:david@oktobus.nl"
                    className="flex items-center justify-between py-5 border-t border-[color:var(--color-line)] transition-[padding-left] hover:pl-2"
                  >
                    <span>
                      <Num className="block mb-1.5">→ E-MAIL</Num>
                      <span className="display text-[22px] tracking-[-0.02em]">
                        david@oktobus.nl
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
                        Prik direct een slot
                      </span>
                    </span>
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </a>
                </div>
              </RiseIn>

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
