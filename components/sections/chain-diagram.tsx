/**
 * Chain diagram for werkwijze pijler 03.
 * Two stacked rows: bureau (5 boxes with 4 arrows = 4 vertaalslagen)
 * vs. Oktobus (2 boxes with 1 arrow = 0 vertaalslagen).
 */
export function ChainDiagram() {
  return (
    <div className="grid gap-4">
      <div className="bento p-5 sm:p-6">
        <div className="num mb-3.5">→ BUREAU · VERTAALKETEN</div>
        <div className="flex items-center gap-3 flex-wrap text-[13px]">
          <span className="px-3.5 py-2 border border-[color:var(--color-line)] bg-bone rounded-[2px]">
            Jij
          </span>
          <span className="text-ink-2">→</span>
          <span className="px-3.5 py-2 border border-[color:var(--color-line)] bg-bone rounded-[2px]">
            Accountmanager
          </span>
          <span className="text-ink-2">→</span>
          <span className="px-3.5 py-2 border border-[color:var(--color-line)] bg-bone rounded-[2px]">
            Project&shy;manager
          </span>
          <span className="text-ink-2">→</span>
          <span className="px-3.5 py-2 border border-[color:var(--color-line)] bg-bone rounded-[2px]">
            Lead dev
          </span>
          <span className="text-ink-2">→</span>
          <span className="px-3.5 py-2 border border-[color:var(--color-line)] bg-bone rounded-[2px]">
            Developer
          </span>
        </div>
        <div className="num mt-3.5 text-[color:var(--color-warn)]">
          → 4 vertaalslagen · context lekt bij elke stap.
        </div>
      </div>

      <div
        className="bento p-5 sm:p-6"
        style={{ borderColor: 'var(--color-teal)' }}
      >
        <div className="num mb-3.5 text-teal-ink">→ OKTOBUS · DIRECT</div>
        <div className="flex items-center gap-3 flex-wrap text-[13px]">
          <span className="px-3.5 py-2 border border-[color:var(--color-line)] bg-bone rounded-[2px]">
            Jij
          </span>
          <span className="text-teal-ink">→</span>
          <span
            className="px-3.5 py-2 rounded-[2px]"
            style={{
              border: '1px solid var(--color-teal)',
              background: 'var(--color-teal-soft)',
            }}
          >
            Oktobus (de drie)
          </span>
        </div>
        <div className="num mt-3.5 text-teal-ink">
          → 0 vertaalslagen · dezelfde hoofden, van idee tot code.
        </div>
      </div>
    </div>
  );
}
