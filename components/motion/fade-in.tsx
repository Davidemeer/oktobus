'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type FadeInProps = {
  children: ReactNode;
  /** Delay in seconds. */
  delay?: number;
  margin?: `-${number}%` | `${number}%`;
  className?: string;
};

export function FadeIn({ children, delay = 0, margin = '-15%', className }: FadeInProps) {
  const prefersReduced = useReducedMotion();
  const duration = prefersReduced ? 0 : 1.2;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
