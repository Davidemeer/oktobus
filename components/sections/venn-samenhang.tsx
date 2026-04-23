/**
 * Three-circle venn-like diagram for werkwijze samenhang section.
 * Used inside the dark CTA panel — labels in bone, center dot in teal.
 */
export function VennSamenhang() {
  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-[420px] mt-12" role="img" aria-label="Bouwstraat, kennis en builders overlappen in Oktobus">
      <circle cx="120" cy="100" r="70" fill="none" stroke="#F3EFE9" strokeWidth="1" opacity=".9" />
      <circle cx="200" cy="100" r="70" fill="none" stroke="#F3EFE9" strokeWidth="1" opacity=".9" />
      <circle cx="280" cy="100" r="70" fill="none" stroke="#F3EFE9" strokeWidth="1" opacity=".9" />
      <circle cx="200" cy="100" r="8" fill="#51A397" />
      <text x="80" y="100" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#F3EFE9" textAnchor="middle">
        BOUWSTRAAT
      </text>
      <text x="200" y="195" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#51A397" textAnchor="middle">
        OKTOBUS
      </text>
      <text x="320" y="100" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#F3EFE9" textAnchor="middle">
        BUILDERS
      </text>
      <text x="200" y="30" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#F3EFE9" textAnchor="middle">
        KENNIS
      </text>
    </svg>
  );
}
