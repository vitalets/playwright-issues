import { test as base } from '@playwright/test';

const test = base.extend<{myFixture: void}>({
  myFixture: async ({}, use, testInfo) => {
    await use();
    await new Promise((r) => setTimeout(r, testInfo.timeout + 100));
  }
});

test('my test', async ({ page, myFixture }) => {
  await page.goto('https://playwright.dev');
});