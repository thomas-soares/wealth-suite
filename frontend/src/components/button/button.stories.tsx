import type { Meta, StoryObj } from '@storybook/nextjs'

import { Button } from './button'

const meta = {
  title: 'Foundation/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { children: 'Adicionar cliente' } }
export const Secondary: Story = { args: { children: 'Ver detalhes', variant: 'secondary' } }
export const Quiet: Story = { args: { children: 'Cancelar', variant: 'quiet' } }
