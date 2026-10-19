import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Badge } from './badge'

describe('Badge', () => {
  it('exposes its tone for styling and inspection', () => {
    render(<Badge tone="success">Em andamento</Badge>)

    expect(screen.getByText('Em andamento')).toHaveAttribute('data-tone', 'success')
  })
})
