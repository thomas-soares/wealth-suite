import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '../button/button'
import { EmptyState } from './empty-state'

describe('EmptyState', () => {
  it('renders its action when provided', () => {
    render(<EmptyState title="Nenhum cliente" action={<Button>Adicionar</Button>} />)

    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument()
  })
})
