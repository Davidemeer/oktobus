import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { Button } from '@/components/ui/button';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';

export const metadata: Metadata = {
  title: 'Belofte',
  description:
    'Maatwerk, geen compromissen. MKB-budget, geen bureau-prijs. Werkende software, geen prototype met plakband.',
};

const INTAKE_HREF = '/contact';

const READY_CHECKS = [
  'Auth & rechten',
  'Evals & guardrails',
  'Observability',
  'CI & deploys',
  'Security-basis',
  'Handover & SLA',
] as const;

const HERKENNING = [
  'Je stapelt abonnementen die elk voor 80% passen.',
  'Een specifieke workflow in jouw bedrijf staat nergens goed in een standaard tool.',
  'Een bureau inhuren voelt te zwaar en te duur.',
  'Je wilt AI inzetten, maar weet niet waar te beginnen.',
] as const;

export default function BeloftePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section>
        <Container className="pt-20 sm:pt-24 pb-20">
          <RiseIn>
            <div className="flex items-center gap-4 mb-16 sm:mb-20">
              <Num>§ BELOFTE — P. 02</Num>
              <Hairline className="flex-1" />
              <Num>LEESTIJD · 3 MIN</Num>
            </div>
          </RiseIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 001 — INTRO</Num>
                <h1 className="display text-[clamp(64px,11vw,120px)] leading-[0.98] tracking-[-0.05em] m-0">
                  Onze<br />
                  <span className="text-teal-ink">belofte.</span>
                </h1>
              </RiseIn>
            </div>
            <div className="lg:col-span-7 lg:pt-7">
              <RiseIn delay={0.1}>
                <p className="text-[clamp(20px,2.5vw,28px)] leading-[1.35] tracking-[-0.02em] max-w-[640px]">
                  Het MKB betaalt zich suf aan tien abonnementen die elk voor 80% passen. Een
                  traditioneel softwarebureau inhuren kost €100k+ en duurt maanden.
                </p>
                <p className="text-[clamp(20px,2.5vw,28px)] leading-[1.35] tracking-[-0.02em] max-w-[640px] mt-6">
                  <span className="text-teal-ink">Wij zitten daartussen.</span> Maatwerk in weken,
                  tegen een budget dat past bij het MKB, op basis van hoe jouw werk écht gaat.
                </p>
              </RiseIn>

              <RiseIn delay={0.2}>
                <div className="flex flex-wrap gap-2.5 mt-12">
                  <span className="tag">
                    <span className="dot" />
                    01 · Maatwerk
                  </span>
                  <span className="tag">
                    <span className="dot" />
                    02 · MKB-budget
                  </span>
                  <span className="tag">
                    <span className="dot" />
                    03 · Production-ready
                  </span>
                </div>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ PROMISE BLOCKS ============================ */}
      <section>
        <Container className="py-16 sm:py-20">
          {/* Promise 01 */}
          <RiseIn>
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-16 border-t border-[color:var(--color-line)]">
              <div className="lg:col-span-2">
                <div className="display text-[clamp(72px,9vw,110px)] leading-[0.9] tracking-[-0.05em]">
                  01
                </div>
                <Num className="block mt-3">→ BELOFTE · 01</Num>
              </div>
              <div className="lg:col-span-5">
                <h2 className="display text-[clamp(32px,4.5vw,48px)] leading-[1.05] tracking-[-0.035em] m-0">
                  Maatwerk,<br />geen compromissen.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[17px] leading-[1.65] text-ink m-0">
                  Standaard SaaS is gebouwd voor een gemiddelde dat niet bestaat. Je mist net die ene
                  workflow die voor jóuw bedrijf belangrijk is. Wij beginnen bij jouw proces en
                  bouwen daaromheen — niet andersom.
                  <sup className="text-teal-ink font-mono text-[10px]">¹</sup>
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="border border-[color:var(--color-line)] rounded-[2px] bg-paper p-4">
                    <Num className="block mb-3">→ STANDAARD SAAS</Num>
                    <svg viewBox="0 0 120 60" className="w-full h-auto" aria-hidden>
                      <path d="M10 30 Q 60 10 110 30" stroke="#0B0B0A" strokeWidth="1" fill="none" />
                      <path d="M10 30 Q 60 50 110 30" stroke="#0B0B0A" strokeWidth="1" fill="none" strokeDasharray="2 2" />
                      <rect x="52" y="22" width="16" height="16" fill="none" stroke="#0B0B0A" strokeWidth="1" />
                      <text x="60" y="34" fontFamily="var(--font-geist-mono)" fontSize="8" textAnchor="middle" fill="#0B0B0A">80%</text>
                    </svg>
                    <div className="text-[12px] text-ink-2 mt-2.5">Past op een gemiddelde.</div>
                  </div>
                  <div className="border border-teal rounded-[2px] bg-paper p-4">
                    <Num className="block mb-3 text-teal-ink">→ OKTOBUS · MAATWERK</Num>
                    <svg viewBox="0 0 120 60" className="w-full h-auto" aria-hidden>
                      <path d="M10 45 Q 30 10 50 35 T 90 20 T 110 40" stroke="#0B0B0A" strokeWidth="1.4" fill="none" />
                      <circle cx="10" cy="45" r="2.5" fill="#51A397" />
                      <circle cx="50" cy="35" r="2.5" fill="#51A397" />
                      <circle cx="90" cy="20" r="2.5" fill="#51A397" />
                      <circle cx="110" cy="40" r="2.5" fill="#51A397" />
                    </svg>
                    <div className="text-[12px] text-ink-2 mt-2.5">Volgt jouw proces precies.</div>
                  </div>
                </div>
              </div>
            </article>
          </RiseIn>

          {/* Promise 02 */}
          <RiseIn>
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-16 border-t border-[color:var(--color-line)]">
              <div className="lg:col-span-2">
                <div className="display text-[clamp(72px,9vw,110px)] leading-[0.9] tracking-[-0.05em]">
                  02
                </div>
                <Num className="block mt-3">→ BELOFTE · 02</Num>
              </div>
              <div className="lg:col-span-5">
                <h2 className="display text-[clamp(32px,4.5vw,48px)] leading-[1.05] tracking-[-0.035em] m-0">
                  MKB-budget,<br />geen bureau-prijs.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[17px] leading-[1.65] text-ink m-0">
                  Twee jaar geleden was maatwerk voor het MKB niet rendabel. AI-kosten zijn
                  gekelderd en moderne dev-tools hebben onze bouwsnelheid vertienvoudigd. Wat zes
                  maanden en €200k kostte, bouwen wij in weken binnen een budget dat werkt.
                  <sup className="text-teal-ink font-mono text-[10px]">²</sup>
                </p>

                <div className="mt-8 border border-[color:var(--color-line)] rounded-[2px] bg-paper">
                  <div className="grid grid-cols-2">
                    <div className="p-5 border-r border-[color:var(--color-line)]">
                      <Num className="block mb-2.5">→ BUREAU</Num>
                      <div
                        className="display text-[30px] tracking-[-0.03em] text-ink-2"
                        style={{ textDecoration: 'line-through', textDecorationThickness: '1px' }}
                      >
                        €200k
                      </div>
                      <div className="text-[12px] text-ink-2 mt-1.5">
                        6 maanden · accountmanager · vertaalverlies
                      </div>
                    </div>
                    <div className="p-5 bg-bone-2">
                      <Num className="block mb-2.5 text-teal-ink">→ OKTOBUS</Num>
                      <div className="display text-[30px] tracking-[-0.03em]">Een fractie</div>
                      <div className="text-[12px] text-ink-2 mt-1.5">
                        Weken · direct met de builders · production-ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </RiseIn>

          {/* Promise 03 */}
          <RiseIn>
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-16 border-block border-[color:var(--color-line)]" style={{ borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}>
              <div className="lg:col-span-2">
                <div className="display text-[clamp(72px,9vw,110px)] leading-[0.9] tracking-[-0.05em]">
                  03
                </div>
                <Num className="block mt-3">→ BELOFTE · 03</Num>
              </div>
              <div className="lg:col-span-5">
                <h2 className="display text-[clamp(32px,4.5vw,48px)] leading-[1.05] tracking-[-0.035em] m-0">
                  Werkende software,<br />geen prototype<br />met plakband.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[17px] leading-[1.65] text-ink m-0">
                  Alles wat we opleveren draait in productie. Geen demo-code die je zelf nog moet
                  afmaken, geen knutselwerk dat bij de eerste piek omvalt. Production-ready vanaf dag
                  één.
                  <sup className="text-teal-ink font-mono text-[10px]">³</sup>
                </p>
                <ul className="mt-8 list-none p-0 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {READY_CHECKS.map((check) => (
                    <li
                      key={check}
                      className="flex items-center gap-2.5 px-3.5 py-3 border border-[color:var(--color-line)] rounded-[2px] bg-paper text-[13px]"
                    >
                      <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </RiseIn>

          {/* Footnotes */}
          <FadeIn>
            <div className="footnotes">
              <div className="footnote">
                <sup>¹</sup>
                Wat voor 80% past, past niet. De resterende 20% is meestal precies waar jouw bedrijf
                zijn geld mee verdient.
              </div>
              <div className="footnote">
                <sup>²</sup>
                Bouwsnelheid ×10 komt niet van harder typen — zie Werkwijze, pijler 01: de
                bouwstraat die klaarstaat.
              </div>
              <div className="footnote">
                <sup>³</sup>
                Production-ready = draait onder echte load, met echte gebruikers, zonder dat wij
                &rsquo;s nachts moeten bijspringen.
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ============================ VOOR WIE (bone-2) ============================ */}
      <section className="bg-bone-2">
        <Container className="py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <RiseIn>
                <Num className="block mb-3.5">§ 002 — PAST DIT</Num>
                <h2 className="display text-[clamp(40px,5.5vw,72px)] leading-[1.02] tracking-[-0.04em] m-0">
                  Voor wie dit<br />werkt.
                </h2>
                <p className="text-[16px] leading-[1.65] text-ink-2 mt-6 max-w-[400px]">
                  Oktobus is er voor MKB-bedrijven die vastlopen op standaard software. Je herkent
                  het als:
                </p>
              </RiseIn>
            </div>
            <div className="lg:col-span-7">
              <RiseIn delay={0.1}>
                <ul className="checklist">
                  {HERKENNING.map((text, i) => (
                    <li key={text}>
                      <span className="tick" aria-hidden>
                        <Check size={14} strokeWidth={2} />
                      </span>
                      <div className="flex-1">
                        <div className="display text-[clamp(20px,2.4vw,24px)] tracking-[-0.025em] leading-[1.2]">
                          {text}
                        </div>
                        <Num className="block mt-2">
                          → HERKENNING · {String.fromCharCode(65 + i)}
                        </Num>
                      </div>
                    </li>
                  ))}
                </ul>
              </RiseIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ CTA ============================ */}
      <section>
        <Container className="py-32 sm:py-36 text-center">
          <RiseIn>
            <Num className="block mb-6">§ 003 — CTA</Num>
          </RiseIn>
          <RiseIn delay={0.05}>
            <h2 className="display text-[clamp(56px,9vw,96px)] leading-[1] tracking-[-0.045em] m-0 mx-auto max-w-[1100px]">
              Klinkt het<br />
              <span className="text-teal-ink">herkenbaar?</span>
            </h2>
          </RiseIn>
          <RiseIn delay={0.15}>
            <div className="mt-14 inline-flex gap-3.5 items-center flex-wrap justify-center">
              <Button
                href={INTAKE_HREF}
                size="lg"
                endIcon={<ArrowRight size={14} strokeWidth={1.8} />}
              >
                Plan een kennismaking
              </Button>
              <Button href="/werkwijze" variant="ghost" size="lg">
                Eerst: zo bouwen we
              </Button>
            </div>
          </RiseIn>
        </Container>
      </section>
    </>
  );
}
