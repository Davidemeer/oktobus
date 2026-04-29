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
      viewBox="580 500 1900 1900"
      role="img"
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn(animated && 'sway', className)}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M1530.7,1819.8c101.2,0,225.7,146,297.7,164.9,157,41.2,211.2-70,299.3-106.2,88.1-36.1,123.1,76.8,190.9,56.5,67.8-20.3-40.7-92.6-40.7-92.6,0,0-124.2-112.9-266.5-13.6-142.3,99.4-228.1-38.4-228.1-38.4,49.7,24.8,96.6,5.5,144.6-44,52.5-54.2,39-122,128.8-186.4,30.8-22.1,160.4-24.6,91.5-64.4-120.3-69.5-272.2,151.3-272.2,151.3-67.8,116.3-173.9-44-103.9-118.6,165.6-176.3,161.5-365.9,161.5-365.9,0-271.1-220.2-379.5-402.8-379.5-182.5,0-402.8,108.4-402.8,379.5,0,0-4.1,189.7,161.5,365.9,70,74.5-36.1,234.9-103.9,118.6,0,0-151.9-220.8-272.2-151.3-68.9,39.8,60.7,42.3,91.5,64.4,89.8,64.4,76.2,132.1,128.8,186.4,48,49.5,94.9,68.9,144.6,44,0,0-85.8,137.8-228.1,38.4-142.3-99.4-266.5,13.6-266.5,13.6,0,0-108.4,72.3-40.7,92.6,67.8,20.3,102.8-92.6,190.9-56.5,88.1,36.1,142.3,147.4,299.3,106.2,72.1-18.9,196.5-164.9,297.7-164.9Z"
        fill={bodyColor}
      />
      <ellipse cx="1427.8" cy="1314.1" rx="58.1" ry="74.3" fill={eyeColor} />
      <ellipse cx="1633.6" cy="1314.1" rx="58.1" ry="74.3" fill={eyeColor} />
    </svg>
  );
}
