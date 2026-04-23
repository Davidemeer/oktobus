type TeamCardProps = {
  number: string;
  role: string;
  name: string;
  discipline: string;
};

/**
 * Team-member card with placeholder portrait stripe.
 * Used in the home "wie we zijn" section.
 */
export function TeamCard({ number, role, name, discipline }: TeamCardProps) {
  return (
    <div className="bento" style={{ padding: '28px 28px 32px' }}>
      <div className="num mb-3.5">→ {number} / {role.toUpperCase()}</div>
      <div className="ph-stripe" style={{ aspectRatio: '4/5', marginBottom: '22px' }}>
        <span className="ph-label">Portret · {name}</span>
        <span className="ph-corner">360 × 450</span>
      </div>
      <div className="font-sans font-medium text-[24px] tracking-[-0.03em] text-ink">{name}</div>
      <div className="text-[13px] text-ink-2 mt-1">{discipline}</div>
    </div>
  );
}
