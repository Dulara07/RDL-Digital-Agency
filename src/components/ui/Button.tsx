import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  fullWidth?: boolean;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface ButtonProps extends BaseProps {
  to?: never;
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

type Props = LinkProps | AnchorProps | ButtonProps;

const variants: Record<Variant, string> = {
  primary:
  'btn-sheen bg-gradient-to-r from-accent via-[#7C5CFF] to-[#9B5CFF] text-white border border-white/10 shadow-[0_8px_30px_-12px_rgba(110,86,255,0.85)] hover:brightness-110 hover:shadow-[0_12px_40px_-10px_rgba(124,92,255,1)]',
  secondary:
  'bg-white/[0.04] text-mist border border-line-strong hover:bg-white/[0.08] hover:border-white/30',
  ghost: 'bg-transparent text-mist-dim border border-transparent hover:text-white'
};

const sizes: Record<Size, string> = {
  sm: 'text-[13px] px-4 py-2 gap-1.5',
  md: 'text-sm px-5 py-3 gap-2',
  lg: 'text-[15px] px-7 py-4 gap-2.5'
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  withArrow = false,
  fullWidth = false,
  ...rest
}: Props) {
  const classes = [
  'group relative inline-flex items-center justify-center rounded-full font-medium tracking-tight',
  'transition-[background-color,border-color,color,transform,box-shadow,filter] duration-200 ease-premium hover:-translate-y-px',
  'active:translate-y-px disabled:opacity-50 disabled:pointer-events-none',
  variants[variant],
  sizes[size],
  fullWidth ? 'w-full' : '',
  className].

  filter(Boolean).
  join(' ');

  const content =
  <>
      <span>{children}</span>
      {withArrow &&
    <ArrowUpRightIcon
      aria-hidden="true"
      className="h-4 w-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 ease-premium group-hover:translate-x-0 group-hover:opacity-100" />

    }
    </>;


  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes}>
        {content}
      </Link>);

  }

  if ('href' in rest && rest.href) {
    // Only web links open a new tab; mailto:/tel: hand off to the OS directly.
    const external = /^https?:\/\//.test(rest.href);
    return (
      <a
        href={rest.href}
        className={classes}
        {...external ? { target: '_blank', rel: 'noreferrer' } : {}}>
        {content}
      </a>);

  }

  const { onClick, type = 'button', disabled } = rest as ButtonProps;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>);

}