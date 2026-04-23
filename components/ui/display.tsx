import type { ElementType } from 'react';
import { cn } from '@/lib/cn';

type DisplaySize = 'sm' | 'md' | 'lg' | 'xl';

type DisplayProps = {
  children: React.ReactNode;
  size?: DisplaySize;
  as?: ElementType;
  className?: string;
};

const sizeClass: Record<DisplaySize, string> = {
  sm: 'text-[40px] leading-[1.05] tracking-[-0.035em]',
  md: 'text-[clamp(40px,6vw,64px)] leading-[1.02] tracking-[-0.04em]',
  lg: 'text-[clamp(56px,8vw,96px)] leading-[0.95] tracking-[-0.055em]',
  xl: 'text-[clamp(56px,10vw,112px)] leading-[1.02] tracking-[-0.05em]',
};

export function Display({
  children,
  size = 'md',
  as: Component = 'h2',
  className,
}: DisplayProps) {
  return (
    <Component
      className={cn('font-sans font-medium text-ink', sizeClass[size], className)}
    >
      {children}
    </Component>
  );
}
