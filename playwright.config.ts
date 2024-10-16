import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'test',
  reporter: [['html', { open: 'never' }]],
});