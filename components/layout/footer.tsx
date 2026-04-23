import Link from 'next/link';
import { Container } from './container';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/belofte', label: 'Belofte' },
  { href: '/werkwijze', label: 'Werkwijze' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-16 pb-10 mt-20 border-t border-[color:var(--color-line-hair)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <p className="font-sans text-[14px] leading-[1.6] text-ink max-w-[320px]">
            <span className="font-medium">Oktobus</span> — maatwerk software voor het MKB.
          </p>

          <nav
            aria-label="Footer-navigatie"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-center font-mono text-[12px] tracking-[0.08em] text-ink-2"
          >
            {NAV.map((link, i) => (
              <span key={link.href} className="inline-flex items-center gap-x-6">
                <Link href={link.href} className="hover:text-ink transition-colors">
                  {link.label}
                </Link>
                {i < NAV.length - 1 ? <span aria-hidden>·</span> : null}
              </span>
            ))}
          </nav>

          <a
            href="mailto:contact@oktobus.com"
            className="font-mono text-[12px] tracking-[0.08em] text-ink-2 hover:text-ink transition-colors md:justify-self-end"
          >
            contact@oktobus.com
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-[color:var(--color-line-hair)] font-mono text-[11px] tracking-[0.08em] text-ink-2">
          © {year} Oktobus
        </div>
      </Container>
    </footer>
  );
}
