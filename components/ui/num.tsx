import { cn } from '@/lib/cn';

type NumProps = {
  children: React.ReactNode;
  className?: string;
};

export function Num({ children, className }: NumProps) {
  return (
    <span
      className={cn(
        'font-mono text-[10.5px] tracking-[0.08em] text-ink-2',
        className,
      )}
    >
      {children}
    </span>
  );
}
