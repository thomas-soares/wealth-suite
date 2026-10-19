import type { ReactNode } from 'react'

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info'

const badgeTones: Record<BadgeTone, string> = {
  neutral: 'bg-surface-raised text-content-secondary',
  success: 'bg-state-success/15 text-state-success',
  warning: 'bg-state-warning/15 text-state-warning',
  danger: 'bg-state-danger/15 text-state-danger',
  info: 'bg-state-info/15 text-state-info',
}

export function Badge({
  tone = 'neutral',
  className = '',
  children,
}: {
  tone?: BadgeTone
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeTones[tone]} ${className}`}
      data-tone={tone}
    >
      {children}
    </span>
  )
}
