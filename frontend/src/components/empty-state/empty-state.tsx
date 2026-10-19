import type { ReactNode } from 'react'

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="grid justify-items-center gap-3 rounded-lg border border-dashed border-border-strong bg-surface-raised px-6 py-12 text-center">
      <div className="grid size-10 place-items-center rounded-full bg-accent-primary/10 text-accent-primary">·</div>
      <h2 className="font-display text-xl font-semibold text-content-primary">{title}</h2>
      {description ? <p className="max-w-md text-sm text-content-secondary">{description}</p> : null}
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  )
}
