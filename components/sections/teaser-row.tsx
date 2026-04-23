import { ArrowUpRight } from 'lucide-react';
import { Body } from '@/components/ui/body';

type TeaserRowProps = {
  number: string;
  title: string;
  description: React.ReactNode;
};

/**
 * Belofte-teaser row used on the home page. Borderless on purpose —
 * stacking creates rhythm via the parent's gap; per-row hairlines were
 * removed to reduce visual noise (DESIGN.md §4.4: don't stack hairlines).
 */
export function TeaserRow({ number, title, description }: TeaserRowProps) {
  return (
    <div className="grid grid-cols-[60px_1fr_40px] sm:grid-cols-[80px_1fr_60px] items-start gap-6 py-5">
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
