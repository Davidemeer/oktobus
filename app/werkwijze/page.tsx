import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { RiseIn } from '@/components/motion/rise-in';
import { ProcesDiagram } from '@/components/sections/proces-diagram';

export const metadata: Metadata = {
  title: 'Werkwijze',
  description:
    'Twee diamanten. Van vraag naar versie 1.0: eerst begrijpen, dan bouwen, met twee scherpe mijlpalen ertussen.',
};

const CONTACT_HREF = '/over-ons#contact';

export default function WerkwijzePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16 sm:mb-20">
              <Num>§ WERKWIJZE · P. 02</Num>
              <Hairline className="flex-1" />
              <Num>OKTOBUS</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-5">
              <RiseIn>
                <h1 className="display text-[clamp(56px,10vw,120px)] leading-[0.98] tracking-[-0.05em] m-0">
                  Onze<br />
                  <span className="text-teal-ink">werkwijze.</span>
                </h1>
              </RiseIn>
            </div>
            <div className="lg:col-span-7 lg:pb-4" />
          </div>
        </Container>
      </section>

      {/* ============================ DIAMOND 01 ============================ */}
      <section className="bg-bone-2">
        <Container className="pt-28 sm:pt-32 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 003 · PROTOTYPE</Num>
                <div className="display text-[clamp(120px,16vw,180px)] leading-[0.88] tracking-[-0.05em] text-ink">
                  01
                </div>
                <h2 className="display text-[clamp(40px,5vw,52px)] leading-[1.02] tracking-[-0.035em] mt-7">
                  Van strategische<br />vraag naar
                  <br />werkend prototype.
                </h2>
                <Num className="block mt-5 text-teal-ink">→ 4–6 WEKEN.</Num>
                <p className="text-[16px] leading-[1.65] mt-6 max-w-[420px]">
                  We vertalen jullie strategische vraag naar een tastbare oplossing. In een
                  paar weken staat er een klikbaar prototype, met AI als bouwsteen, waar
                  directie, gebruikers en IT hetzelfde ding voor zich zien.
                </p>
              </RiseIn>
            </div>

            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <article className="werk-phase grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">FASE 01 · PROTOTYPE</Num>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Scope
                    </h3>
                    <p className="text-[17px] leading-[1.65] mt-3.5 max-w-[620px]">
                      We starten met interviews en sessies waarin we het IT-landschap en de
                      mensen in jullie organisatie leren kennen. Met onze productervaring
                      gaan we op zoek naar de echte pijn en bouwen we samen aan een
                      oplossing.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="tag"><span className="dot" />Business &amp; IT-strategie</li>
                      <li className="tag"><span className="dot" />Stakeholder-sessie</li>
                      <li className="tag"><span className="dot" />Kansen &amp; risico&rsquo;s</li>
                      <li className="tag"><span className="dot" />Scope op één A4</li>
                    </ul>
                  </div>
                </article>

                <article className="werk-phase grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">FASE 02 · PROTOTYPE</Num>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Bouwen
                    </h3>
                    <p className="text-[17px] leading-[1.65] mt-3.5 max-w-[620px]">
                      In kleine iteraties bouwen wij op hoge snelheid een volledig werkend
                      prototype en AI-integratie op basis van een eerste export van jullie
                      data. Echte data, nog niet gekoppeld aan jullie systemen, maar wel
                      direct klikbaar en te ervaren.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="tag"><span className="dot" />Werkend prototype</li>
                      <li className="tag"><span className="dot" />AI-integratie</li>
                      <li className="tag"><span className="dot" />Eerste data-export</li>
                      <li className="tag"><span className="dot" />Korte sprints</li>
                    </ul>
                  </div>
                </article>

                <article className="werk-phase grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">MIJLPAAL · 01</Num>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0 text-ink">
                      Demo V1.0
                    </h3>
                    <p className="text-[17px] leading-[1.65] mt-3.5 max-w-[620px]">
                      Jullie krijgen toegang tot het product, gaan er al mee aan de slag en
                      krijgen gevoel voor het product en de kracht van AI. Hier beslissen
                      we samen of we doorgaan naar livegang.
                    </p>
                  </div>
                </article>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ DIAMOND 02 ============================ */}
      <section>
        <Container className="pt-28 sm:pt-32 pb-28 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 004 · LIVEGANG</Num>
                <div className="display text-[clamp(120px,16vw,180px)] leading-[0.88] tracking-[-0.05em] text-ink">
                  02
                </div>
                <h2 className="display text-[clamp(40px,5vw,52px)] leading-[1.02] tracking-[-0.035em] mt-7">
                  Van prototype<br />naar productie-rijp
                  <br />onderdeel van de organisatie.
                </h2>
                <Num className="block mt-5 text-teal-ink">→ 4–12 WEKEN.</Num>
                <p className="text-[16px] leading-[1.65] mt-6 max-w-[420px]">
                  Zodra het prototype draagvlak heeft, werken we toe naar productie. We
                  verbeteren op basis van écht gebruik en integreren in het IT-landschap,
                  zodat het systeem voldoet aan de eisen van jullie organisatie: security,
                  compliance, schaalbaarheid.
                </p>
              </RiseIn>
            </div>

            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <article className="werk-phase grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">FASE 03 · LIVEGANG</Num>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Ontwikkelen
                    </h3>
                    <p className="text-[17px] leading-[1.65] mt-3.5 max-w-[620px]">
                      Samen bepalen we aan welke voorwaarden de uiteindelijke versie van
                      het product moet voldoen. Concreet, met de gebruiker die ermee gaat
                      werken, en op basis van wat we al in actie hebben gezien.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="tag"><span className="dot" />Voorwaarden vastleggen</li>
                      <li className="tag"><span className="dot" />Gebruikers&shy;feedback</li>
                      <li className="tag"><span className="dot" />Iteraties per sprint</li>
                      <li className="tag"><span className="dot" />Functionaliteit aanscherpen</li>
                    </ul>
                  </div>
                </article>

                <article className="werk-phase grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">FASE 04 · LIVEGANG</Num>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Opleveren
                    </h3>
                    <p className="text-[17px] leading-[1.65] mt-3.5 max-w-[620px]">
                      Met de IT-afdeling zorgen we voor integratie met jullie systemen,
                      met hoge standaarden voor kwaliteit, security en onderhoud. Alles
                      staat voordat de eerste echte gebruiker erop komt.
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      <li className="tag"><span className="dot" />Integratie met IT</li>
                      <li className="tag"><span className="dot" />Security &amp; compliance</li>
                      <li className="tag"><span className="dot" />Observability</li>
                      <li className="tag"><span className="dot" />Onderhoud</li>
                    </ul>
                  </div>
                </article>

                <article className="werk-phase grid grid-cols-[120px_1fr] gap-8 border-t border-[color:var(--color-line)] py-8">
                  <div>
                    <Num className="block mb-2.5">MIJLPAAL · 02</Num>
                  </div>
                  <div>
                    <h3 className="display text-[clamp(26px,3vw,34px)] tracking-[-0.03em] leading-[1.05] m-0">
                      Product V1.0
                    </h3>
                    <p className="text-[17px] leading-[1.65] mt-3.5 max-w-[620px]">
                      In overleg bepalen we het beheer met SLA en overdracht, en de aanpak
                      voor toekomstige verbetering en doorontwikkeling.
                    </p>
                  </div>
                </article>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
