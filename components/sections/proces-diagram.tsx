import type { CSSProperties, FC } from 'react';

const tokens = {
  ink: '#0B0B0A',
} as const;

export function ProcesDiagram() {
  return (
    <div className="proc-diagram">
      <div className="proc-legend" aria-hidden>
        <LegendRow swatch="#C9E1DC" label="HUMAN-LED" />
        <LegendRow swatch="#203A35" label="AI-LED" />
      </div>

      <div className="proc-canvas">
        <svg
          viewBox="0 0 1600 610"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Oktobus proces-diagram"
          style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="pv2_gradA" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#9ECCC3" />
              <stop offset="1" stopColor="#203A35" />
            </linearGradient>
          </defs>

          {/* guides — subtle dash-flow animation */}
          <line className="proc-guide" x1="450" y1="70" x2="450" y2="380" stroke="#6FA79B" strokeWidth="1.4" strokeDasharray="5 7" />
          <line className="proc-guide" x1="1170" y1="70" x2="1170" y2="380" stroke="#6FA79B" strokeWidth="1.4" strokeDasharray="5 7" />

          {/* Prototype phase */}
          <g className="proc-phase" tabIndex={0} aria-label="Prototype fase">
            <polygon className="proc-hit" points="210,250 330,130 450,250 330,370" fill="transparent" />
            <polygon className="proc-shape" points="210,250 330,130 450,250 330,370" fill="url(#pv2_gradA)" />
            <circle className="proc-dot" cx="210" cy="250" r="6" fill="#F3EFE9" stroke="#7FB4A8" strokeWidth="1.5" />
            <PhaseLabel x={330} title="Prototype" sub="4–6 WEKEN" />
          </g>

          {/* Livegang phase */}
          <g className="proc-phase" tabIndex={0} aria-label="Livegang fase">
            <polygon className="proc-hit" points="450,250 810,30 1170,250 810,470" fill="transparent" />
            <polygon className="proc-shape" points="450,250 810,30 1170,250 810,470" fill="#C9E1DC" />
            <polygon className="proc-shape" points="810,30 1110,250 810,470 945,250" fill="#AECFC7" />
            <polygon className="proc-shape" points="810,30 1140,250 810,470 1000,250" fill="#7FB4A8" />
            <polygon className="proc-shape" points="810,30 1170,250 810,470 1055,250" fill="#203A35" />
            <circle className="proc-milestone" cx="450" cy="250" r="8" fill="#F3EFE9" stroke="#2F6E66" strokeWidth="1.5" />
            <text x="450" y="450" textAnchor="middle" fontFamily="Geist Mono" fontSize="16" letterSpacing="2" fontWeight="500" fill="#63615C">DEMO V1.0</text>
            <PhaseLabel x={810} title="Livegang" sub="4–12 WEKEN" />
          </g>

          {/* Doorontwikkeling phase */}
          <g className="proc-phase" tabIndex={0} aria-label="Doorontwikkeling fase">
            <polygon className="proc-hit" points="1170,250 1390,155 1390,345" fill="transparent" />
            <polygon className="proc-shape" points="1170,250 1390,155 1390,345" fill="#7FB4A8" />
            <circle className="proc-milestone" cx="1170" cy="250" r="8" fill="#F3EFE9" stroke="#2F6E66" strokeWidth="1.5" />
            <text x="1170" y="450" textAnchor="middle" fontFamily="Geist Mono" fontSize="16" letterSpacing="2" fontWeight="500" fill="#63615C">PRODUCT V1.0</text>
            <PhaseLabel x={1280} title="Doorontwikkeling" sub="CONTINU" />
          </g>
        </svg>
      </div>
    </div>
  );
}

const LegendRow: FC<{ swatch: string; label: string }> = ({ swatch, label }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: "'Geist Mono', monospace",
      fontSize: 11,
      letterSpacing: '0.14em',
      color: tokens.ink,
    } as CSSProperties}
  >
    <span
      style={{
        width: 34,
        height: 14,
        borderRadius: 1,
        display: 'inline-block',
        background: swatch,
      } as CSSProperties}
    />
    <span>{label}</span>
  </div>
);

const PhaseLabel: FC<{ x: number; title: string; sub: string }> = ({ x, title, sub }) => (
  <>
    <text x={x} y={555} textAnchor="middle" fontFamily="Geist" fontSize="28" fontWeight="500" letterSpacing="-1" fill="#2F6E66">
      {title}
    </text>
    <text x={x} y={595} textAnchor="middle" fontFamily="Geist Mono" fontSize="15" fontWeight="500" letterSpacing="2" fill="#2F6E66">
      {sub}
    </text>
  </>
);
