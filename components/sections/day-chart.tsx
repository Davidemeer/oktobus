/**
 * Day 1 vs Day 1000 line-chart for werkwijze pijler 02.
 * Static SVG — pure markup, no JS. Compares an AI-generated demo curve
 * (rises then collapses, dashed) against an Oktobus-built curve (gradual,
 * stable, teal).
 */
export function DayChart() {
  return (
    <div className="bento p-7 sm:p-8">
      <div className="num mb-4">→ DAG 1 vs. DAG 1000</div>
      <svg viewBox="0 0 700 180" className="w-full h-auto" role="img" aria-label="Vergelijking demo-curve versus Oktobus-curve over 1000 dagen">
        {/* axes */}
        <line x1="40" y1="150" x2="680" y2="150" stroke="#0b0b0a" strokeWidth="1" />
        <line x1="40" y1="20" x2="40" y2="150" stroke="#0b0b0a" strokeWidth="1" />
        {/* demo (rises, collapses) */}
        <path
          d="M40 130 L 180 60 L 320 55 L 460 100 L 600 140 L 670 160"
          stroke="#0b0b0a"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="3 3"
        />
        <text x="200" y="45" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#0b0b0a">
          AI-gegenereerde demo
        </text>
        {/* oktobus (gradual, stable) */}
        <path
          d="M40 135 L 180 100 L 320 70 L 460 55 L 600 45 L 670 40"
          stroke="#51A397"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="670" cy="40" r="4" fill="#51A397" />
        <text x="440" y="35" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#2F6E66">
          Oktobus: bouwt door
        </text>
        {/* day labels */}
        <text x="40" y="170" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#63615C">DAG 1</text>
        <text x="340" y="170" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#63615C" textAnchor="middle">DAG 365</text>
        <text x="670" y="170" fontFamily="var(--font-geist-mono)" fontSize="10" fill="#63615C" textAnchor="end">DAG 1000</text>
        <text
          x="15"
          y="25"
          fontFamily="var(--font-geist-mono)"
          fontSize="9"
          fill="#63615C"
          transform="rotate(-90,15,25)"
        >
          SOEPEL →
        </text>
      </svg>
      <div className="num mt-3.5 leading-[1.6] max-w-[560px]">
        → Een demo die in een middag werkt, kan over twee jaar pijnlijk omvallen. Wij bouwen voor de
        lange duur.
      </div>
    </div>
  );
}
