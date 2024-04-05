import { test as base } from '@playwright/test';

const test = base.extend<{myFixture: void}>({
  myFixture: async ({}, use) => {
    await use();
  }
});

test('my test', async ({ page }) => {
  await page.goto('https://playwright.dev');
});