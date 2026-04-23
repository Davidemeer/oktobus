import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionRhythm = 'dense' | 'default' | 'hero';

type SectionProps = {
  children: ReactNode;
  rhythm?: SectionRhythm;
  borderTop?: boolean;
  id?: string;
  className?: string;
};

const rhythmClass: Record<SectionRhythm, string> = {
  dense: 'py-16 sm:py-20',
  default: 'py-20 sm:py-28',
  hero: 'pt-24 pb-28 sm:pt-32 sm:pb-36',
};

export function Section({
  children,
  rhythm = 'default',
  borderTop = false,
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        rhythmClass[rhythm],
        borderTop && 'border-t border-[color:var(--color-line-hair)]',
        className,
      )}
    >
      {children}
    </section>
  );
}
