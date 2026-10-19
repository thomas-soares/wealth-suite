import type { Meta, StoryObj } from '@storybook/nextjs'

import { Badge } from '../badge/badge'
import { Card } from './card'

const meta = {
  title: 'Foundation/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const ClientSummary: Story = {
  args: { children: null },
  render: () => (
    <Card className="w-96">
      <div className="grid gap-2">
        <Badge tone="success">Acompanhamento</Badge>
        <h2 className="font-display text-2xl font-semibold">Eduardo Martins</h2>
        <p className="text-sm text-content-secondary">Próxima ação: reunião hoje.</p>
      </div>
    </Card>
  ),
}
