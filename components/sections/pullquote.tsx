import type { ReactNode } from 'react';
import { OctopusLogo } from '@/components/marks/octopus-logo';

type PullquoteProps = {
  children: ReactNode;
  attribution: string;
  marker?: string;
};

/**
 * Display-size pullquote. 2-8-2 column grid, mono attribution beneath.
 * Used once on the home page.
 */
export function Pullquote({ children, attribution, marker = '§ 005 — CITAAT' }: PullquoteProps) {
  return (
    <section>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-2">
            <span className="num">{marker}</span>
          </div>
          <div className="lg:col-span-8">
            <p className="pullquote">
              <span className="open-q">&ldquo;</span>
              {children}
              <span className="text-teal">&rdquo;</span>
            </p>
            <div className="flex items-center gap-3 mt-10">
              <span className="logo-sq">
                <OctopusLogo size={17} />
              </span>
              <span className="num">→ {attribution}</span>
            </div>
          </div>
          <div className="lg:col-span-2" />
        </div>
      </div>
    </section>
  );
}
