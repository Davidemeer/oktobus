import type { ReactNode } from 'react';
import { Body } from '@/components/ui/body';
import { Num } from '@/components/ui/num';
import { cn } from '@/lib/cn';

type PillarItem = { label: string; value: string };

type PillarCardProps = {
  number: string;
  icon: ReactNode;
  title: string;
  description: ReactNode;
  items?: PillarItem[];
  className?: string;
};

export function PillarCard({
  number,
  icon,
  title,
  description,
  items,
  className,
}: PillarCardProps) {
  return (
    <article className={cn('pillar p-8 h-full flex flex-col', className)}>
      <div className="flex items-start justify-between">
        <span className="pnum">{number}</span>
        <span className="picon" aria-hidden>
          {icon}
        </span>
      </div>
      <h3 className="ptitle">{title}</h3>
      <Body className="mt-3">{description}</Body>
      {items && items.length > 0 ? (
        <>
          <div className="hairline mt-8 mb-5" />
          <ul className="text-[13px] text-ink space-y-2.5">
            {items.map((item) => (
              <li key={item.label} className="flex justify-between gap-4">
                <span>{item.label}</span>
                <Num className="shrink-0">{item.value}</Num>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </article>
  );
}
