type Step = {
  num: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  { num: 'Week 1', title: 'Discovery', body: 'Wat is de vraag écht. Wat bouwen we niet. Welke data, welke koppelingen.' },
  { num: 'Week 2', title: 'Fundament staat', body: 'Auth, rechten, basis-UI. Uit de bouwstraat. Eerste deploy naar staging.' },
  { num: 'Week 3', title: 'Jouw workflow', body: 'Het unieke stuk. Hier gaat de tijd naartoe. Iteratie per 2–3 dagen.' },
  { num: 'Week 4', title: 'AI-laag', body: 'LLM-integratie, evals, guardrails. Pas als de basis staat.' },
  { num: 'Week 5', title: 'Beta · echte data', body: 'Eerste gebruikers erop. Observability actief. Feedback → fixes.' },
  { num: 'Week 6', title: 'Live', body: 'Production. Handover-document. SLA gaat lopen. Volgende iteratie ingepland.' },
];

/**
 * 6-step horizontal timeline for werkwijze.
 * Collapses to single column on mobile (CSS in globals.css).
 */
export function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-axis" aria-hidden />
      <div className="timeline-row">
        {STEPS.map((step) => (
          <div key={step.num} className="timeline-cell active">
            <span className="tw-num">{step.num}</span>
            <div className="tw-title">{step.title}</div>
            <div className="tw-body">{step.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
