type MarqueeProps = {
  items: string[];
};

/**
 * Infinite-scrolling text band. Items are rendered twice so the loop
 * is seamless. CSS animation paused under prefers-reduced-motion.
 */
export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" role="presentation" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
