import type { ElementType } from 'react';
import { cn } from '@/lib/cn';

type BodySize = 'default' | 'lead';

type BodyProps = {
  children: React.ReactNode;
  size?: BodySize;
  muted?: boolean;
  as?: ElementType;
  className?: string;
};

const sizeClass: Record<BodySize, string> = {
  default: 'text-[14px] leading-[1.65]',
  lead: 'text-[16px] leading-[1.6] sm:text-[17px]',
};

export function Body({
  children,
  size = 'default',
  muted = true,
  as: Component = 'p',
  className,
}: BodyProps) {
  return (
    <Component
      className={cn(
        'font-sans',
        sizeClass[size],
        muted ? 'text-ink-2' : 'text-ink',
        className,
      )}
    >
      {children}
    </Component>
  );
}
