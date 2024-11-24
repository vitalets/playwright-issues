import { test as base } from '@playwright/test';

const test = base.extend<{}, {myWorkerFixture: void}>({
  myWorkerFixture: [async ({}, use) => {
    await test.step('worker setup', async () => console.log('worker setup'));
    await use();
    await test.step('worker teardown', async () => console.log('worker teardown'));
  }, { scope: 'worker' }],
});

test('my test', async ({ page, myWorkerFixture }) => {
  await page.goto('https://playwright.dev');
});