import { resolve } from 'node:path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  logLevel: 'error',
  staticDirs: ['../public'],
  typescript: { reactDocgen: false, check: false },
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  previewBody:
    '<style>:root { color-scheme: light; } html[data-theme="dark"] { color-scheme: dark; }</style>' +
    // Warning: this should be same as the one in `src/styles/globals.css`
    '<body class="bg-white text-gray-950 dark:bg-gray-950 transition-colors dark:text-gray-50"></body>',
  webpack: async config => ({
    ...config,
    // Performance Hints do not make sense on Storybook as it is bloated by design
    performance: { hints: false },
    // Removes Pesky Critical Dependency Warnings due to `next/font`
    ignoreWarnings: [e => e.message.includes('Critical dep')],
    // allows to use `@/` as a shortcut to the root directory
    resolve: {
      ...config.resolve,
      // @ts-ignore
      alias: { ...config.resolve.alias, '@': resolve(__dirname, '../') },
    },
  }),
};
export default config;
