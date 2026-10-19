import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'quiet'

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-primary text-content-inverse shadow-sm hover:opacity-90 focus-visible:outline-accent-primary',
  secondary:
    'border border-border-default bg-surface-panel text-content-primary hover:border-border-strong hover:bg-surface-raised focus-visible:outline-accent-primary',
  quiet:
    'text-content-secondary hover:bg-surface-raised hover:text-content-primary focus-visible:outline-accent-primary',
}

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button
      className={`inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${buttonVariants[variant]} ${className}`}
      type={type}
      {...props}
    />
  )
}
