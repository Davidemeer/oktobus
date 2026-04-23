type Brick = {
  number: string;
  name: string;
  variant: 'ready' | 'custom';
};

const BRICKS: Brick[] = [
  { number: '01', name: 'Auth & rechten', variant: 'ready' },
  { number: '02', name: 'Gebruikers­beheer', variant: 'ready' },
  { number: '03', name: 'ERP-koppelingen', variant: 'ready' },
  { number: '04', name: 'AI-integraties', variant: 'ready' },
  { number: '05', name: 'Evals & guardrails', variant: 'ready' },
  { number: '06', name: 'Observability', variant: 'ready' },
  { number: '07', name: 'CI & deploy', variant: 'ready' },
  { number: '08', name: 'Security-basis', variant: 'ready' },
  { number: '09', name: 'Queue & jobs', variant: 'ready' },
  { number: '10', name: 'Jouw workflow', variant: 'custom' },
  { number: '11', name: 'Jouw logica', variant: 'custom' },
  { number: '12', name: 'Jouw interface', variant: 'custom' },
];

/**
 * 12-tile grid for werkwijze pijler 01.
 * 9 ready tiles (bone-3 background) + 3 custom tiles (teal border).
 * Visualises "bouwstraat staat al, jij betaalt voor de unieke 3".
 */
export function BouwstenenGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="num">→ BOUWSTRAAT · WAT STAAT KLAAR</div>
        <div className="flex gap-5">
          <span className="inline-flex items-center gap-2 font-mono text-[10.5px] text-ink-2 tracking-[0.08em]">
            <span className="w-[10px] h-[10px] bg-bone-3 border border-[color:var(--color-line)]" />
            KLAAR
          </span>
          <span className="inline-flex items-center gap-2 font-mono text-[10.5px] text-ink-2 tracking-[0.08em]">
            <span className="w-[10px] h-[10px] bg-paper border border-teal" />
            MAATWERK
          </span>
        </div>
      </div>
      <div className="bs-grid">
        {BRICKS.map((brick) => (
          <div key={brick.number} className={`bs-brick ${brick.variant}`}>
            <span className="bs-num">{brick.number}</span>
            <span className="bs-name">{brick.name}</span>
          </div>
        ))}
      </div>
      <div className="num mt-3.5 max-w-[520px] leading-[1.6]">
        → 9 van de 12 bouwstenen staan. De drie waar het om gaat, bouwen we voor jou.
      </div>
    </div>
  );
}
