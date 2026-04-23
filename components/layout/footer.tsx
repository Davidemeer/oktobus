import { Container } from './container';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-16 pb-10 mt-20 border-t border-[color:var(--color-line-hair)]">
      <Container className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between font-mono text-[11px] tracking-[0.08em] text-ink-2">
        <span>© {year} Oktobus — KvK 9xxxxxxx</span>
        <span>AMSTERDAM · EST. 2026</span>
      </Container>
    </footer>
  );
}
