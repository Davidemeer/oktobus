'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Container } from './container';
import { LogoTile } from '@/components/marks/logo-tile';
import { Num } from '@/components/ui/num';
import { cn } from '@/lib/cn';

type NavLink = { href: string; label: string };

const NAV_LINKS: ReadonlyArray<NavLink> = [
  { href: '/', label: 'Home' },
  { href: '/belofte', label: 'Belofte' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: '/werk', label: 'Werk' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-30">
      <Container className="pt-6 sm:pt-8 flex items-center justify-between">
        <Link href="/" aria-label="Oktobus — naar home">
          <LogoTile size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9 text-[13.5px]">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="navlink">
              {link.label}
            </Link>
          ))}
          <Num className="select-none">NL · EN</Num>
          <Link
            href="/contact#intake"
            className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px]"
          >
            Plan een kennismaking
            <ArrowRight size={12} strokeWidth={1.8} />
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Sluit menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[color:var(--color-line-hair)] hover:border-ink transition-colors"
        >
          {mobileOpen ? <X size={18} strokeWidth={1.6} /> : <Menu size={18} strokeWidth={1.6} />}
        </button>
      </Container>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          'lg:hidden fixed inset-0 top-[72px] bg-bone z-20 transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <Container className="pt-10 pb-20 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[28px] font-medium tracking-[-0.02em] text-ink"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="hairline mt-2" />
          <Num className="select-none">NL · EN</Num>
          <Link
            href="/contact#intake"
            onClick={() => setMobileOpen(false)}
            className="btn-primary inline-flex items-center justify-between gap-2 px-5 py-3.5 rounded-full text-[13.5px] self-start mt-4 min-w-[240px]"
          >
            Plan een kennismaking
            <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </Container>
      </div>
    </header>
  );
}
