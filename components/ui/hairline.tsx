import { cn } from '@/lib/cn';

type HairlineProps = {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};

export function Hairline({ orientation = 'horizontal', className }: HairlineProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'bg-[color:var(--color-line)]',
        orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full',
        className,
      )}
    />
  );
}
