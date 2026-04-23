import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Body } from '@/components/ui/body';
import { Num } from '@/components/ui/num';
import { cn } from '@/lib/cn';

type PillarBentoCard = {
  number: string;
  title: string;
  description: ReactNode;
  /** Optional row of small mono-labels shown under the description (e.g. building blocks) */
  tags?: string[];
  href?: string;
};

type PillarBentoProps = {
  /** First card renders large (col-span-2), the next two render small (col-span-1). */
  cards: [PillarBentoCard, PillarBentoCard, PillarBentoCard];
};

/**
 * Mixed-size bento composition for the three-pillar teaser on the home page.
 * Layout (lg+):  [ ─── large ─── ]
 *                [ small ][ small ]
 *
 * Pattern adapted from Direction C HTML reference §detail-section
 * (one large tile + two small tiles below).
 */
export function PillarBento({ cards }: PillarBentoProps) {
  const [primary, secondary, tertiary] = cards;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <BentoCard card={primary} variant="large" className="lg:col-span-2" />
      <BentoCard card={secondary} variant="small" />
      <BentoCard card={tertiary} variant="small" />
    </div>
  );
}

function BentoCard({
  card,
  variant,
  className,
}: {
  card: PillarBentoCard;
  variant: 'large' | 'small';
  className?: string;
}) {
  const sizing =
    variant === 'large'
      ? 'p-8 sm:p-10 lg:p-12 min-h-[260px]'
      : 'p-7 sm:p-8 min-h-[220px]';
  const titleSize =
    variant === 'large'
      ? 'text-[clamp(32px,3.5vw,48px)] tracking-[-0.035em]'
      : 'text-[clamp(26px,2.6vw,32px)] tracking-[-0.03em]';

  const inner = (
    <div className={cn('bento h-full flex flex-col', sizing, className)}>
      <div className="flex items-start justify-between gap-6">
        <Num>{card.number}</Num>
        {card.href ? (
          <span aria-hidden className="text-ink-2 group-hover:text-ink transition-colors">
            <ArrowUpRight size={16} strokeWidth={1.4} />
          </span>
        ) : null}
      </div>
      <h3
        className={cn(
          'mt-6 font-sans font-medium leading-[1.1] text-ink max-w-[520px]',
          titleSize,
        )}
      >
        {card.title}
      </h3>
      <Body className={cn('mt-4 max-w-[520px]', variant === 'large' ? 'text-[15px]' : '')}>
        {card.description}
      </Body>
      {card.tags && card.tags.length > 0 ? (
        <div className="mt-auto pt-8 flex flex-wrap gap-x-4 gap-y-2">
          {card.tags.map((tag) => (
            <Num key={tag}>{tag}</Num>
          ))}
        </div>
      ) : null}
    </div>
  );

  if (card.href) {
    return (
      <Link href={card.href} className="group block">
        {inner}
      </Link>
    );
  }
  return inner;
}
