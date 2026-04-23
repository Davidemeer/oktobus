import { cn } from '@/lib/cn';

type OctopusLogoProps = {
  /** Pixel size; the SVG is square. */
  size?: number;
  /** Toggle the continuous sway loop. */
  animated?: boolean;
  /** Body fill color (defaults to white for use on teal). */
  bodyColor?: string;
  /** Eye color (defaults to teal). */
  eyeColor?: string;
  className?: string;
  title?: string;
};

export function OctopusLogo({
  size = 24,
  animated = true,
  bodyColor = '#ffffff',
  eyeColor = '#51A397',
  className,
  title,
}: OctopusLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn(animated && 'sway', className)}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M12 3.5c-3.9 0-6.6 2.5-6.6 6 0 1.7.7 2.9 1.4 3.7.4.4.6.8.6 1.3v1.3c0 .5-.3.7-.7.5l-1.1-.5c-.5-.2-.9.2-.8.7l.3 1.5c.1.5.5.8 1 .7l1.3-.2c.4 0 .7.2.7.6v1.2c0 .6.6.9 1.1.6l1-.7c.3-.2.8-.2 1.1 0 .6.4 1.3.4 1.9 0 .3-.2.8-.2 1.1 0l1 .7c.5.3 1.1 0 1.1-.6v-1.2c0-.4.3-.6.7-.6l1.3.2c.5.1.9-.2 1-.7l.3-1.5c.1-.5-.3-.9-.8-.7l-1.1.5c-.4.2-.7 0-.7-.5v-1.3c0-.5.2-.9.6-1.3.7-.8 1.4-2 1.4-3.7 0-3.5-2.7-6-6.6-6Z"
        fill={bodyColor}
      />
      <circle cx="10" cy="9" r="1.2" fill={eyeColor} />
      <circle cx="14" cy="9" r="1.2" fill={eyeColor} />
    </svg>
  );
}
