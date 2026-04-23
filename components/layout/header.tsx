'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Container } from './container';
import { LogoTile } from '@/components/marks/logo-tile';
import { Button } from '@/components/ui/button';
import { Num } from '@/components/ui/num';
import { cn } from '@/lib/cn';

type NavLink = { href: string; label: string; external?: boolean };

const NAV_LINKS: ReadonlyArray<NavLink> = [
  { href: '/', label: 'Home' },
  { href: '/belofte', label: 'Belofte' },
  { href: '/werkwijze', label: 'Werkwijze' },
  { href: 'mailto:contact@oktobus.com', label: 'Contact', external: true },
];

const INTAKE_HREF = 'mailto:contact@oktobus.com?subject=Kennismaking%20Oktobus';

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
        <nav className="hidden lg:flex items-center gap-10 text-[13.5px]">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} className="navlink">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="navlink">
                {link.label}
              </Link>
            ),
          )}
          <span aria-hidden className="text-ink-2">·</span>
          <Num className="select-none">NL · EN</Num>
          <Button href={INTAKE_HREF} size="sm">
            Plan een kennismaking
          </Button>
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
          {NAV_LINKS.map((link) => {
            const className = 'text-[28px] font-medium tracking-[-0.02em] text-ink';
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                className={className}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={className}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="hairline mt-2" />
          <Num className="select-none">NL · EN</Num>
          <Button
            href={INTAKE_HREF}
            size="lg"
            className="self-start mt-4"
            endIcon={<ArrowRight size={14} strokeWidth={1.6} />}
          >
            Plan een kennismaking
          </Button>
        </Container>
      </div>
    </header>
  );
}
