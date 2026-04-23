import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Num } from '@/components/ui/num';

type IndexRowProps = {
  number: string;
  title: string;
  href: string;
};

/**
 * Compact 3-column index row, inspired by DESIGN.md §6.6 `.row` pattern.
 * Used for the werkwijze-teaser on the home page — reads like a TOC.
 *
 *   [num]  [title ────────────────────────]  [↗]
 *
 * Hover: subtle background + 16px left padding, arrow fades + slides in.
 */
export function IndexRow({ number, title, href }: IndexRowProps) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-[60px_1fr_40px] sm:grid-cols-[80px_1fr_60px] items-center gap-6 py-7 border-t border-[color:var(--color-line-hair)] transition-[background-color,padding-left] duration-300 ease-out hover:bg-[rgb(11_11_10/0.02)] hover:pl-4"
    >
      <Num className="font-mono text-[12px] tracking-[0.08em] text-ink-2">{number}</Num>
      <span className="text-[20px] sm:text-[26px] font-medium tracking-[-0.025em] text-ink leading-[1.15]">
        {title}
      </span>
      <span
        aria-hidden
        className="justify-self-end opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] text-ink"
      >
        <ArrowUpRight size={20} strokeWidth={1.4} />
      </span>
    </Link>
  );
}
