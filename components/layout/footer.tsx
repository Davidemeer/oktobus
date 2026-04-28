import Link from 'next/link';
import { Container } from './container';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/over-ons', label: 'Over ons' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20">
      <Container>
        <div className="footer-grid">
          <div>
            <div className="footer-head">Oktobus.</div>
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
            <a href="mailto:david@oktobus.nl">david@oktobus.nl</a>
            <Link href="/over-ons#contact">Plan kennismaking</Link>
            <span className="block font-sans text-[14px] text-ink py-1">Amsterdam, NL</span>
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
