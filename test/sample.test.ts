import { test } from '@playwright/test';

test('my test', async ({ page }) => {
  await test.step('Step 1', async () => {
    await page.goto('https://playwright.dev');
  });
});