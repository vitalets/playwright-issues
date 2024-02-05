import { test } from '@playwright/test';

test('my test', async () => {
  await test.step('step 1', async () => {
    await test.info().attach('my attachment', { body: 'foo' });
  });
  await test.step('step 2', async () => {
    await test.info().attach('my attachment', { body: 'bar' });
  });
});
