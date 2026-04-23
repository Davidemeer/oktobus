import type { ReactNode } from 'react';

type Cell = {
  label: string;
  value: ReactNode;
  sub?: string;
  /** Render a breathing teal focus-ring before the value (for "volgend slot") */
  pulse?: boolean;
};

type CapacityStripProps = {
  cells: Cell[];
  className?: string;
};

/**
 * 4-column capacity strip — mono-labelled numbers used as trust-anchor
 * on home, werk and contact pages.
 */
export function CapacityStrip({ cells, className }: CapacityStripProps) {
  return (
    <div className={`capacity ${className ?? ''}`}>
      {cells.map((cell) => (
        <div key={cell.label} className="cell">
          <div className="clabel">{cell.label}</div>
          <div className="cval">
            {cell.pulse ? (
              <span className="inline-flex items-center gap-3">
                <span className="focus-ring" />
                {cell.value}
              </span>
            ) : (
              <>
                {cell.value}
                {cell.sub ? (
                  <span className="ml-2 text-ink-2 text-[18px] font-normal tracking-normal">
                    {cell.sub}
                  </span>
                ) : null}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
