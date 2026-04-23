type FAQItem = {
  q: string;
  a: string;
};

type FAQProps = {
  items: FAQItem[];
};

/**
 * Native <details>/<summary> accordion. CSS in globals.css handles
 * the plus-to-minus toggle via [open] selector.
 */
export function FAQ({ items }: FAQProps) {
  return (
    <div>
      {items.map((item, i) => (
        <details key={item.q} className="faq-row" open={i === 0}>
          <summary className="faq-q">
            <span className="qtitle">{item.q}</span>
            <span className="faq-plus" aria-hidden />
          </summary>
          <div className="faq-a">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
