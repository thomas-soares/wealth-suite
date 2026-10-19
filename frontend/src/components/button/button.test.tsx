import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from './button'

describe('Button', () => {
  it('renders a button with its accessible name', () => {
    render(<Button>Adicionar cliente</Button>)

    expect(screen.getByRole('button', { name: 'Adicionar cliente' })).toBeInTheDocument()
  })
})
