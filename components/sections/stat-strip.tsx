import type { ReactNode } from 'react';
import { Container } from '@/components/layout/container';
import { Num } from '@/components/ui/num';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Hairline } from '@/components/ui/hairline';
import { FadeIn } from '@/components/motion/fade-in';
import { cn } from '@/lib/cn';

type Stat = {
  label: string;
  value: ReactNode;
  sub?: string;
  /** Renders a breathing teal focus-dot before the value */
  pulse?: boolean;
};

type StatStripProps = {
  eyebrow?: string;
  stats: Stat[];
};

/**
 * Trust-anchor strip — 4 mono-labelled numbers in a row.
 * No section borders — relies on rhythm + the eyebrow hairline.
 */
export function StatStrip({ eyebrow, stats }: StatStripProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        {eyebrow ? (
          <FadeIn>
            <div className="flex items-center gap-4 mb-10 sm:mb-12">
              <Eyebrow>{eyebrow}</Eyebrow>
              <Hairline className="flex-1" />
            </div>
          </FadeIn>
        ) : null}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.05}>
              <Num className="block mb-3">{stat.label}</Num>
              <div
                className={cn(
                  'font-sans font-medium leading-[1.05] tracking-[-0.03em] text-ink',
                  'text-[clamp(28px,3.6vw,40px)]',
                )}
              >
                <span className="inline-flex items-center gap-2">
                  {stat.pulse ? (
                    <span aria-hidden className="focus-dot breathe" />
                  ) : null}
                  {stat.value}
                </span>
                {stat.sub ? (
                  <span className="block text-ink-2 text-[clamp(13px,1.4vw,16px)] font-normal mt-1 tracking-normal">
                    {stat.sub}
                  </span>
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
