import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Input } from './input'

describe('Input', () => {
  it('renders a labelled input', () => {
    render(<Input label="Buscar cliente" placeholder="Nome ou e-mail" />)

    expect(screen.getByLabelText('Buscar cliente')).toHaveAttribute('placeholder', 'Nome ou e-mail')
  })
})
