'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type RiseInProps = {
  children: ReactNode;
  /** Delay in seconds. */
  delay?: number;
  /** Translate amount; default = 12px, small = 6px. */
  amount?: 'small' | 'default';
  /** When the element is considered "in view" (negative margin = trigger sooner). */
  margin?: `-${number}%` | `${number}%`;
  className?: string;
};

export function RiseIn({
  children,
  delay = 0,
  amount = 'default',
  margin = '-15%',
  className,
}: RiseInProps) {
  const prefersReduced = useReducedMotion();
  const y = prefersReduced ? 0 : amount === 'small' ? 6 : 12;
  const duration = prefersReduced ? 0 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
