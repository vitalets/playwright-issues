import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 1000,
  reporter: './reporter.ts',
});