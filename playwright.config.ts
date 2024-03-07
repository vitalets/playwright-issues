import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  reporter: process.argv.includes('--shard') ? 'blob' : './reporter.ts',
});