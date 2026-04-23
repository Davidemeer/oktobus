import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Container({
  children,
  as: Component = 'div',
  className,
}: ContainerProps) {
  return (
    <Component
      className={cn('max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12', className)}
    >
      {children}
    </Component>
  );
}
