import { test as base } from '@playwright/test';

const test = base.extend<{myFixture: void}>({
  myFixture: async ({ page }, use, testInfo) => {
    await use();
    await page.waitForTimeout(testInfo.timeout + 100);
  }
});

test('my test', async ({ page, myFixture }, testInfo) => {
  await test.step('step 1', () => {})
  await test.step('step with timeout', () => page.waitForTimeout(testInfo.timeout + 100))
  await test.step('step 2', () => {})
});