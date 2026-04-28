import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { OctopusLogo } from '@/components/marks/octopus-logo';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';
import { ProductStroom } from '@/components/sections/product-stroom';
import { ProcesDiagram } from '@/components/sections/proces-diagram';

const CONTACT_HREF = '/over-ons#contact';

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-24 sm:pb-32">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16">
              <Num>§ 001 · INDEX</Num>
              <Hairline className="flex-1" />
              <Num>DRIE BELOFTES</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Tagline left */}
            <div className="lg:col-span-7 lg:flex lg:flex-col">
              <h1 className="display text-[clamp(48px,9vw,104px)] leading-[1.02] tracking-[-0.05em] m-0">
                <RiseIn delay={0.05}>
                  <span className="block">Software</span>
                </RiseIn>
                <RiseIn delay={0.14}>
                  <span className="block">
                    op maat,{' '}
                    <span
                      className="inline-block align-middle ml-1 w-[clamp(48px,6vw,72px)] h-[clamp(48px,6vw,72px)] rounded-[6px] bg-teal"
                      aria-hidden
                    >
                      <OctopusLogo size={72} className="w-full h-full" />
                    </span>
                  </span>
                </RiseIn>
                <RiseIn delay={0.22}>
                  <span className="block">snelheid</span>
                </RiseIn>
                <RiseIn delay={0.32}>
                  <span className="block">
                    van <span className="text-teal-ink">nu</span>.
                  </span>
                </RiseIn>
              </h1>

              <FadeIn delay={0.45}>
                <p className="text-[19px] leading-[1.55] mt-10 max-w-[520px]">
                  Met Oktobus combineren wij Product, Design en Engineering. Wij helpen
                  jouw bedrijf om legacy software te vervangen voor moderne software
                  volledig geïntegreerd met AI.
                </p>
              </FadeIn>

              <FadeIn delay={0.55} className="lg:mt-auto lg:pt-12">
                <div className="mt-8 lg:mt-0 inline-flex gap-4 items-center flex-wrap">
                  <Link
                    href={CONTACT_HREF}
                    className="btn-primary inline-flex items-center gap-2 px-6 py-4 rounded-full text-[14px]"
                  >
                    Plan een kennismaking
                    <ArrowRight size={14} strokeWidth={1.6} />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* 3 promises right */}
            <div className="lg:col-span-5 lg:pt-2">
              <FadeIn delay={0.35}>
                <div className="promises-stack flex flex-col">
                  <article className="promise-card promise-card-accent">
                    <div className="promise-head">
                      <span className="promise-num">01</span>
                    </div>
                    <h3 className="promise-title">
                      Wij helpen van ontwerp<br />tot realisatie.
                    </h3>
                    <p className="promise-body">
                      Technologie en software zijn nooit op zichzelf de oplossing.
                      Wij combineren dit met ruime ervaring in digitale-, product- en
                      AI-strategie.
                    </p>
                  </article>

                  <article className="promise-card">
                    <div className="promise-head">
                      <span className="promise-num">02</span>
                    </div>
                    <h3 className="promise-title">
                      Ervaren team,<br />vanuit Product, Design en Engineering.
                    </h3>
                    <p className="promise-body">
                      Om goede producten en software te bouwen zijn deze drie disciplines
                      nog steeds nodig. Met Oktobus haal je een multidisciplinair team in
                      huis.
                    </p>
                  </article>

                  <article className="promise-card">
                    <div className="promise-head">
                      <span className="promise-num">03</span>
                    </div>
                    <h3 className="promise-title">
                      Geoptimaliseerd<br />op snelheid en kosten.
                    </h3>
                    <p className="promise-body">
                      AI geeft ons snelheid, onze ervaring zorgt voor kwaliteit richting
                      productie. Door deze aanpak ontwikkelen wij software voor een fractie
                      van de traditionele prijs.
                    </p>
                  </article>
                </div>
              </FadeIn>
            </div>
          </div>

        </Container>

      </section>

      {/* ============================ DOUBLE DIAMOND ============================ */}
      <section className="bg-bone-2 relative overflow-hidden">
        <Container className="pt-28 sm:pt-36 pb-28 sm:pb-36">
          <div className="flex flex-wrap justify-between items-start mb-14 gap-6">
            <RiseIn>
              <Num className="block mb-3.5">§ 002 · WERKWIJZE</Num>
              <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0 max-w-[900px]">
                Hoe wij werken.<br />
                <span className="text-ink-2">
                  In de eerste weken vanuit het strategische ontwerp naar een werkend
                  product.
                </span>
              </h2>
            </RiseIn>
            <RiseIn delay={0.1}>
              <div className="font-mono text-[10.5px] leading-[1.8] tracking-[0.08em] text-ink-2 text-right">
                <span className="text-ink">Oktobus · methode</span>
              </div>
            </RiseIn>
          </div>

          <RiseIn delay={0.05}>
            <div className="dd">
              <ProcesDiagram />

              <div className="dd-caps">
                <div className="dd-cap">
                  <Num>FASE 01 · PROTOTYPE</Num>
                  <div className="dd-cap-t">Scope</div>
                  <div className="dd-cap-b">
                    Wat is de huidige situatie bij jullie bedrijf, waar loopt het vast, wie
                    moet het gaan gebruiken? IT-strategie, workshops en interviews.
                  </div>
                </div>
                <div className="dd-cap">
                  <Num>FASE 02 · PROTOTYPE</Num>
                  <div className="dd-cap-t">Bouwen</div>
                  <div className="dd-cap-b">
                    In kleine iteraties bouwen wij op hoge snelheid een volledig werkend
                    prototype en AI-integratie op basis van een eerste export van jullie
                    data.
                  </div>
                </div>
                <div className="dd-cap dd-cap-nobull">
                  <Num className="text-ink">❯ MIJLPAAL · 01</Num>
                  <div className="dd-cap-t text-ink">Demo V1.0</div>
                  <div className="dd-cap-b">
                    Jullie krijgen toegang tot het product, gaan er al mee aan de slag en
                    krijgen gevoel voor het product en de kracht van AI.
                  </div>
                </div>
                <div className="dd-cap">
                  <Num>FASE 03 · LIVEGANG</Num>
                  <div className="dd-cap-t">Ontwikkelen</div>
                  <div className="dd-cap-b">
                    Samen bepalen we aan welke voorwaarden de uiteindelijke versie van het
                    product moet voldoen.
                  </div>
                </div>
                <div className="dd-cap">
                  <Num>FASE 04 · LIVEGANG</Num>
                  <div className="dd-cap-t">Opleveren</div>
                  <div className="dd-cap-b">
                    Met de IT-afdeling zorgen we voor integratie met jullie
                    systemen, met hoge standaarden voor kwaliteit, security en onderhoud.
                  </div>
                </div>
                <div className="dd-cap dd-cap-nobull">
                  <Num className="text-ink">❯ MIJLPAAL · 02</Num>
                  <div className="dd-cap-t">Product V1.0</div>
                  <div className="dd-cap-b">
                    In overleg bepalen we het beheer met SLA en overdracht, en de aanpak
                    voor toekomstige verbetering en doorontwikkeling.
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/werkwijze"
                  className="btn-ghost inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px]"
                >
                  Werkwijze uitgebreid
                  <ArrowRight size={14} strokeWidth={1.6} />
                </Link>
              </div>
            </div>
          </RiseIn>
        </Container>
      </section>

      {/* ============================ PRODUCT DIAGRAM ============================ */}
      <section className="relative overflow-hidden">
        <Container className="pt-24 sm:pt-32 pb-28 sm:pb-36">
          <div className="flex flex-wrap justify-between items-start mb-14 gap-6">
            <RiseIn>
              <Num className="block mb-3.5">§ 003 · PRODUCT</Num>
              <h2 className="display text-[clamp(40px,5.5vw,64px)] leading-[1.02] tracking-[-0.04em] m-0 max-w-[900px]">
                Wat wij leveren.<br />
                <span className="text-ink-2">
                  Een sterk team met een reeks slimme tools, voor software en AI op maat.
                </span>
              </h2>
            </RiseIn>
            <RiseIn delay={0.1}>
              <div className="font-mono text-[10.5px] leading-[1.8] tracking-[0.08em] text-ink-2 text-right">
                → OKTOBUS OVERZICHT
              </div>
            </RiseIn>
          </div>

          <RiseIn delay={0.05}>
            <ProductStroom />
          </RiseIn>
        </Container>
      </section>

      {/* ============================ CONTACT CTA (dark) ============================ */}
      <section className="bg-ink text-bone">
        <Container className="py-28 sm:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <RiseIn>
                <span
                  className="font-mono text-[10.5px] tracking-[0.08em] mb-4 block"
                  style={{ color: '#F3EFE966' }}
                >
                  § 004 · KENNISMAKING
                </span>
                <h2 className="display text-[clamp(48px,7vw,88px)] leading-[1.02] tracking-[-0.045em] m-0 text-bone">
                  Benieuwd wat wij<br />voor jouw bedrijf<br />
                  <span className="text-teal">kunnen bouwen?</span>
                </h2>
              </RiseIn>
            </div>
            <div className="lg:col-span-6 lg:pb-3">
              <RiseIn delay={0.1}>
                <p
                  className="text-[20px] leading-[1.5] tracking-[-0.01em] max-w-[460px]"
                  style={{ color: '#F3EFE9CC' }}
                >
                  Plan een kennismaking van 30 minuten. We kijken samen of het klikt en of
                  wij jullie kunnen helpen bij jullie uitdagingen.
                </p>
                <div className="mt-10 flex items-center gap-4 flex-wrap">
                  <Link
                    href={CONTACT_HREF}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-medium"
                    style={{ background: 'var(--color-teal)', color: 'var(--color-ink)' }}
                  >
                    Plan een kennismaking
                    <ArrowRight size={14} strokeWidth={1.8} />
                  </Link>
                  <span
                    className="font-mono text-[11px] tracking-[0.1em]"
                    style={{ color: '#F3EFE966' }}
                  >
                    → Volgend slot · Q3 &rsquo;26
                  </span>
                </div>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
