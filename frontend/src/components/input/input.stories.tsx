import type { Meta, StoryObj } from '@storybook/nextjs'

import { Input } from './input'

const meta = {
  title: 'Foundation/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { label: 'Buscar cliente', placeholder: 'Nome ou e-mail' } }
export const Error: Story = {
  args: { label: 'Campo obrigatório', error: 'Informe um valor para continuar.' },
}
