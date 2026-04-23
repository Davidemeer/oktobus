import { cn } from '@/lib/cn';
import { OctopusLogo } from './octopus-logo';

type LogoTileSize = 'sm' | 'md' | 'lg';

type LogoTileProps = {
  size?: LogoTileSize;
  /** Hide the wordmark and only show the tile. */
  iconOnly?: boolean;
  className?: string;
};

const tileClass: Record<LogoTileSize, string> = {
  sm: 'w-7 h-7 rounded-[2px]',
  md: 'w-11 h-11 rounded-[4px]',
  lg: 'w-16 h-16 rounded-[6px]',
};

const logoSize: Record<LogoTileSize, number> = {
  sm: 17,
  md: 28,
  lg: 40,
};

const wordmarkSize: Record<LogoTileSize, string> = {
  sm: 'text-[15px]',
  md: 'text-[22px]',
  lg: 'text-[34px] tracking-[-0.03em]',
};

export function LogoTile({ size = 'sm', iconOnly = false, className }: LogoTileProps) {
  return (
    <span className={cn('logo-tile', size === 'lg' && 'gap-4', className)}>
      <span className={cn('logo-sq', tileClass[size])} aria-hidden>
        <OctopusLogo size={logoSize[size]} />
      </span>
      {!iconOnly ? (
        <span className={cn('wm font-medium tracking-[0.02em]', wordmarkSize[size])}>
          Oktobus
        </span>
      ) : null}
    </span>
  );
}
