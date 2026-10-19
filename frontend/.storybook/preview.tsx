import type { Preview } from '@storybook/nextjs'

import '../src/app/globals.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    a11y: {
      test: 'error',
    },
    backgrounds: {
      options: {
        light: { name: 'Areia', value: '#f8f5f0' },
        dark: { name: 'Carvão', value: '#241d2d' },
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? 'dark' : 'light'

      return (
        <div
          className="min-h-screen min-w-80 bg-surface-page p-6 text-content-primary"
          data-theme={theme}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
