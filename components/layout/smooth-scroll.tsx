'use client';

import { ReactLenis } from 'lenis/react';
import { useSyncExternalStore, type ReactNode } from 'react';

type SmoothScrollProps = {
  children: ReactNode;
};

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Wraps the app in Lenis-driven smooth wheel scroll.
 * Bypassed entirely when the user prefers reduced motion.
 *
 * Calibrated values: lerp 0.1, duration 1.2 (DESIGN.md §9.6).
 * Higher lerp jolts; lower drags.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (reducedMotion) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
