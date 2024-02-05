import { test } from '@playwright/test';

test('my test', async () => {
  await test.step('step one', async () => {
    await test.info().attach('my attachment', { body: 'foo' });
  });
  await test.step('step two', async () => {
    await test.info().attach('my attachment', { body: 'bar' });
  });
});
