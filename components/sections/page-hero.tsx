import type { ReactNode } from 'react';
import { Container } from '@/components/layout/container';
import { Display } from '@/components/ui/display';
import { Body } from '@/components/ui/body';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
import { Num } from '@/components/ui/num';
import { RiseIn } from '@/components/motion/rise-in';
import { FadeIn } from '@/components/motion/fade-in';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  sub: ReactNode;
  meta?: { label: string; value: string };
};

/**
 * Compact hero used on sub-pages (/belofte, /werkwijze).
 * For the bespoke landing-page hero, build inline in app/page.tsx.
 */
export function PageHero({ eyebrow, title, sub, meta }: PageHeroProps) {
  return (
    <section className="pt-24 pb-20 sm:pt-32 sm:pb-24">
      <Container>
        <RiseIn>
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Hairline className="flex-1" />
            {meta ? (
              <Num>
                {meta.label} · {meta.value}
              </Num>
            ) : null}
          </div>
        </RiseIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-9">
            <RiseIn delay={0.05}>
              <Display size="lg" as="h1">
                {title}
              </Display>
            </RiseIn>
          </div>
          <div className="lg:col-span-3 lg:pt-3">
            <FadeIn delay={0.2}>
              <Body className="max-w-[420px]">{sub}</Body>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
