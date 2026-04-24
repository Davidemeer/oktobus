import Link from 'next/link';
import { Container } from './container';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/belofte', label: 'Belofte' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/werk', label: 'Werk' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20">
      <Container>
        <div className="footer-grid">
          <div>
            <div className="footer-head">Oktobus.</div>
            <p className="footer-sub">
              Maatwerk software — met AI als bouwsteen, niet als feature.
            </p>
          </div>
          <div className="footer-col">
            <h4>→ Navigatie</h4>
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>→ Contact</h4>
            <a href="mailto:contact@oktobus.com">contact@oktobus.com</a>
            <Link href="/contact#intake">Plan kennismaking</Link>
            <span className="block font-sans text-[14px] text-ink py-1">Amsterdam, NL</span>
          </div>
          <div className="footer-col">
            <h4>→ Capaciteit</h4>
            <div className="font-mono text-[13px] leading-[1.9] text-ink">
              <div className="flex items-center gap-2">
                <span className="focus-dot breathe" /> Q3 &rsquo;26 boekbaar
              </div>
              <div className="text-ink-2">3 projecten / kwartaal</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Oktobus</span>
          <span>OKTOBUS · STUDIO · LIVE</span>
        </div>
      </Container>
    </footer>
  );
}
