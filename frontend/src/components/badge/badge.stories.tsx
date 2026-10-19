import type { Meta, StoryObj } from '@storybook/nextjs'

import { Badge } from './badge'

const meta = {
  title: 'Foundation/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = { args: { children: 'Em andamento', tone: 'success' } }
export const Warning: Story = { args: { children: 'Atenção', tone: 'warning' } }
export const Info: Story = { args: { children: 'Novo', tone: 'info' } }
export const Neutral: Story = { args: { children: 'Sem status', tone: 'neutral' } }
