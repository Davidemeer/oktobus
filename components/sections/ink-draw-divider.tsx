'use client';

import { motion, useReducedMotion } from 'motion/react';

const SIGNATURE_TEXT =
  'OKTOBUS · STUDIO · AMSTERDAM · PRODUCT · DESIGN · ENGINEERING ·';

/**
 * Quiet signature divider — outline-stroked text that draws itself in
 * when scrolled into view (one-shot). Uses Motion's whileInView to
 * animate the SVG strokeDashoffset attribute from 260 → 0.
 *
 * With reduced motion, the text renders fully drawn from the start.
 * Inspired by HTML reference: Direction C - Zuiver Lab v2.html lines 102-106.
 */
export function InkDrawDivider() {
  const reduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1280 60"
      className="w-full h-10 sm:h-12 text-ink overflow-visible"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <motion.text
        x="0"
        y="46"
        fontFamily="var(--font-geist), sans-serif"
        fontWeight={500}
        fontSize={64}
        letterSpacing={-3}
        fill="none"
        stroke="currentColor"
        strokeWidth={0.5}
        initial={reduced ? false : { strokeDasharray: 260, strokeDashoffset: 260 }}
        whileInView={reduced ? undefined : { strokeDashoffset: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 2.2, ease: [0.5, 0, 0.3, 1] }}
      >
        {SIGNATURE_TEXT}
      </motion.text>
    </svg>
  );
}
