'use client';

import { useActionState, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { submitIntake, type IntakeState } from '@/lib/actions/intake';

const TAGS = [
  'Workflow-tool',
  'ERP-koppeling',
  'AI-integratie',
  'Data-pipeline',
  'Intern portaal',
  'Nog niet zeker',
] as const;

const TIMELINE_OPTIONS = [
  'Zo snel mogelijk',
  'Binnen 3 maanden',
  'Q3 of Q4 2026',
  '2027',
  'Weet ik nog niet',
] as const;

const INITIAL: IntakeState = { status: 'idle' };

export function IntakeForm() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [state, action, pending] = useActionState(submitIntake, INITIAL);

  function toggleTag(tag: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  if (state.status === 'success') {
    return (
      <div className="bento p-8">
        <div className="num mb-3">→ VERZONDEN</div>
        <p className="font-sans font-medium text-[24px] tracking-[-0.025em] text-ink leading-[1.3]">
          Dank — we nemen binnen 24 uur contact op.
        </p>
        <p className="text-[14px] text-ink-2 mt-4 max-w-[520px]">
          Je hoort van Jochem, David of Max persoonlijk. Geen formulier-tunnel, geen sales-funnel.
        </p>
      </div>
    );
  }

  return (
    <form action={action}>
      <div className="num mb-6">§ 003 — INTAKE · 30 MIN</div>

      <div className="form-field">
        <label htmlFor="naam">→ Naam</label>
        <input id="naam" name="naam" type="text" required placeholder="Je naam" autoComplete="name" />
      </div>

      <div className="form-field">
        <label htmlFor="bedrijf">→ Bedrijf</label>
        <input
          id="bedrijf"
          name="bedrijf"
          type="text"
          placeholder="Bedrijfsnaam · branche"
          autoComplete="organization"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">→ E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jij@bedrijf.com"
          autoComplete="email"
        />
      </div>

      <div className="form-field">
        <label>→ Wat wil je bouwen?</label>
        <div className="flex flex-wrap gap-2 mt-2.5">
          {TAGS.map((tag) => {
            const on = selected.has(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`tag ${on ? 'tag-on' : ''}`}
                aria-pressed={on}
              >
                <span className="dot" />
                {tag}
              </button>
            );
          })}
        </div>
        {Array.from(selected).map((tag) => (
          <input key={tag} type="hidden" name="tags" value={tag} />
        ))}
      </div>

      <div className="form-field">
        <label htmlFor="timeline">→ Wanneer moet het live zijn?</label>
        <select id="timeline" name="timeline" defaultValue={TIMELINE_OPTIONS[0]}>
          {TIMELINE_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="bericht">→ Korte context</label>
        <textarea
          id="bericht"
          name="bericht"
          rows={4}
          placeholder="Waar loopt het vast? Wat probeer je op te lossen?"
        />
      </div>

      {/* Honeypot — bots fill it, humans can't see it. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <label htmlFor="website">Laat dit veld leeg</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === 'error' && (
        <div
          role="alert"
          className="num mt-6 px-4 py-3 border border-[color:var(--color-line)] bg-paper text-ink"
          style={{ color: 'var(--color-warn, #B0541F)' }}
        >
          → {state.message}
        </div>
      )}

      <div className="flex items-center justify-between mt-9 gap-6 flex-wrap">
        <div className="num max-w-[420px] leading-[1.65]">
          → We lezen alles zelf. Geen formulier-tunnel, geen sales-funnel. Antwoord binnen 24 uur.
        </div>
        <button
          type="submit"
          disabled={pending}
          className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? 'Versturen…' : 'Verstuur intake'}
          {!pending && <ArrowRight size={14} strokeWidth={1.8} />}
        </button>
      </div>
    </form>
  );
}
