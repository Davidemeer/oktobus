import { ArrowUpRight } from 'lucide-react';
import { Body } from '@/components/ui/body';

type TeaserRowProps = {
  number: string;
  title: string;
  description: React.ReactNode;
};

/**
 * Belofte-teaser row used on the home page.
 * Slightly fuller than IndexRow because it carries a 1-line sub.
 *
 *   [pnum]   Title                                          [↗]
 *            Sub line in muted body
 *
 * Non-clickable (the page-level CTA below the rows handles navigation).
 */
export function TeaserRow({ number, title, description }: TeaserRowProps) {
  return (
    <div className="grid grid-cols-[60px_1fr_40px] sm:grid-cols-[80px_1fr_60px] items-start gap-6 py-7 border-t border-[color:var(--color-line-hair)]">
      <span className="font-sans font-medium text-[28px] sm:text-[32px] leading-none tracking-[-0.04em] text-ink">
        {number}
      </span>
      <div>
        <h3 className="text-[20px] sm:text-[24px] font-medium tracking-[-0.025em] text-ink leading-[1.2]">
          {title}
        </h3>
        <Body className="mt-2 max-w-[520px]">{description}</Body>
      </div>
      <span aria-hidden className="justify-self-end pt-2 text-ink-2">
        <ArrowUpRight size={18} strokeWidth={1.4} />
      </span>
    </div>
  );
}
