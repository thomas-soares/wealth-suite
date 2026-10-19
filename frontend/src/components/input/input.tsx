import type { InputHTMLAttributes } from 'react'

export function Input({
  label,
  error,
  id,
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  const inputId = id ?? label.toLowerCase().replaceAll(' ', '-')

  return (
    <label className="grid gap-2 text-sm font-semibold text-content-primary" htmlFor={inputId}>
      {label}
      <input
        {...props}
        aria-invalid={Boolean(error)}
        className={`min-h-10 rounded-md border bg-surface-panel px-3 text-sm font-normal text-content-primary outline-none transition placeholder:text-content-muted focus:border-border-focus focus:ring-2 focus:ring-border-focus/20 ${error ? 'border-state-danger' : 'border-border-default'} ${className}`}
        id={inputId}
      />
      {error ? <span className="font-normal text-state-danger">{error}</span> : null}
    </label>
  )
}
