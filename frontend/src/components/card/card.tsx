import type { ReactNode } from 'react'

export function Card({ className = '', children }: { className?: string; children: ReactNode }) {
  return (
    <section className={`rounded-lg border border-border-default bg-surface-panel p-6 shadow-sm ${className}`}>
      {children}
    </section>
  )
}
