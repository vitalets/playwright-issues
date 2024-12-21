import { test as base, expect } from '@playwright/test';

const test = base.extend<{myFixture: void}>({
  myFixture: async ({}, use) => {
    await use();
  }
});

test('my test', async ({ page }) => {
  throw new Error('foo');
});