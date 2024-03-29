import { test as base } from '@playwright/test';

export const test = base.extend<{timeoutedFixture: void, anotherFixture: void}>({
  timeoutedFixture: async ({anotherFixture}, use, testInfo) => {
    await use();
    await new Promise((r) => setTimeout(r, testInfo.timeout + 100));
  },
  anotherFixture: async ({}, use) => {
    console.log('AnotherFixture: setup');
    await use();
    console.log('AnotherFixture: teardown');
  },
});