import { test  } from '@playwright/test';

test.describe('my suite', () => {
  test.describe(() => {
    test.describe.configure({ retries: 2 });
    test('my test', async ({ page }) => {
      await page.goto('https://playwright.dev');
    });
  });
});
