import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Num } from '@/components/ui/num';

type TOCEntry = {
  marker: string;
  title: string;
  sub: string;
  badge: string;
  href: string;
};

type IndexTOCProps = {
  entries: TOCEntry[];
};

/**
 * Werkwijze TOC — 3 toc-rows linking to pillar anchors.
 * Reveals an arrow + slides padding on hover (CSS in globals.css).
 */
export function IndexTOC({ entries }: IndexTOCProps) {
  return (
    <div className="toc">
      {entries.map((entry) => (
        <Link key={entry.href} href={entry.href} className="toc-row text-ink no-underline">
          <Num>{entry.marker}</Num>
          <span className="font-sans font-medium text-[clamp(20px,2.4vw,26px)] tracking-[-0.025em] leading-[1.15]">
            {entry.title}
          </span>
          <span className="text-[14px] text-ink-2 leading-[1.45]">{entry.sub}</span>
          <Num>{entry.badge}</Num>
          <span className="toc-arrow text-ink">
            <ArrowRight size={16} strokeWidth={1.6} />
          </span>
        </Link>
      ))}
    </div>
  );
}
