import { test as base } from '@playwright/test';

const test = base.extend<{myFixture: void}>({
  myFixture: async ({}, use) => {
    await use();
    throw new Error('foo'); // <- throw error in fixture, after use()
  }
});

test('my test', async ({ page, myFixture }) => {
  await page.goto('https://playwright.dev');
});