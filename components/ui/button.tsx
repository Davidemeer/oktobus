import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  endIcon?: ReactNode;
  className?: string;
};

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type AsLink = CommonProps & {
  href: string;
  /** Open external links in new tab; ignored for internal routes */
  external?: boolean;
};

type ButtonProps = AsButton | AsLink;

const sizeClass: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[13px]',
  md: 'px-5 py-3 text-[13.5px]',
  lg: 'px-5 py-3.5 text-[13.5px]',
};

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost text-ink',
};

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full font-sans font-normal whitespace-nowrap';

function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    endIcon,
    className,
  } = props;

  const classes = cn(baseClass, sizeClass[size], variantClass[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {endIcon}
    </>
  );

  if ('href' in props && props.href) {
    if (isInternalHref(props.href)) {
      return (
        <Link href={props.href} className={classes}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={props.href}
        className={classes}
        {...(props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  const { type = 'button', ...rest } = props as AsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
