import { cn } from '@/lib/cn';

type EyebrowProps = {
  children: React.ReactNode;
  prefix?: string | null;
  className?: string;
};

export function Eyebrow({ children, prefix = '§', className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'font-mono uppercase text-[11px] tracking-[0.12em] text-ink-2',
        className,
      )}
    >
      {prefix ? `${prefix} ` : ''}
      {children}
    </span>
  );
}
