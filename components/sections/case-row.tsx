import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type CaseRowProps = {
  marker: string;
  year: string;
  kicker: string;
  title: ReactNode;
  visual: ReactNode;
  handnote: ReactNode;
  body: ReactNode;
  meta: { label: string; value: string }[];
  pillarNumber: string;
  pillarLabel: string;
};

/**
 * Case index row used on /werk. 4-column layout (collapses on mobile):
 *   [marker]  [kicker + title + visual + handnote]  [body + meta]  [pillar tag + arrow]
 */
export function CaseRow({
  marker,
  year,
  kicker,
  title,
  visual,
  handnote,
  body,
  meta,
  pillarNumber,
  pillarLabel,
}: CaseRowProps) {
  return (
    <article className="case">
      <div>
        <div className="c-num">{marker}</div>
        <div className="num mt-3.5">→ {year}</div>
      </div>
      <div>
        <div className="c-kicker">{kicker}</div>
        <h2 className="c-title">{title}</h2>
        <div className="mt-7">{visual}</div>
        <p className="c-handnote">→ {handnote}</p>
      </div>
      <div>
        <p className="c-body">{body}</p>
        <div className="c-meta mt-4">
          {meta.map((m) => (
            <div key={m.label}>
              → <span className="font-medium text-ink">{m.label}</span> {m.value}
            </div>
          ))}
        </div>
      </div>
      <div className="text-right">
        <div className="num mb-3.5">→ PIJLER</div>
        <div className="font-sans font-medium text-[44px] leading-none tracking-[-0.04em]">
          {pillarNumber}
        </div>
        <div className="num text-teal-ink mt-1.5">{pillarLabel}</div>
        <span className="inline-flex items-center gap-1.5 mt-7 font-mono text-[11px] tracking-[0.12em] uppercase text-ink-2">
          Case openen
          <ArrowUpRight size={12} strokeWidth={1.6} />
        </span>
      </div>
    </article>
  );
}
