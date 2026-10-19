import type { Meta, StoryObj } from '@storybook/nextjs'

import { Button } from '../button/button'
import { EmptyState } from './empty-state'

const meta = {
  title: 'Foundation/Empty State',
  component: EmptyState,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const NoClients: Story = {
  args: { title: 'Nenhum cliente' },
  render: () => (
    <div className="w-[32rem]">
      <EmptyState
        title="Nenhum cliente encontrado"
        description="Ajuste os filtros ou adicione um novo cliente à sua carteira."
        action={<Button>Adicionar cliente</Button>}
      />
    </div>
  ),
}
