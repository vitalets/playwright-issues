import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure',
  },
  // reporter: 'html',
  reporter: process.argv.includes('--shard') ? 'blob' : './reporter.ts',
});