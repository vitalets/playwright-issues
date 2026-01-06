import { test as base } from '@playwright/test';

const test = base.extend<{}, { workerFixture: void }>({
  workerFixture: [async ({}, use) => {
    await new Promise((r) => setTimeout(r, 1000)); // delay 1000 ms
    await use();
  }, { scope: 'worker', auto: true }]
})

test.beforeAll(async () => {
  await new Promise((r) => setTimeout(r, 100)); // delay 100 ms
});

test('test 1', async ({}) => {

});
