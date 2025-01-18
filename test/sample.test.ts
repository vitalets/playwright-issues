import { test} from '@playwright/test';

test('my test', async () => {
  await test.step('step', async () => {
    test.info().attachments.push({
      name: 'foo-push',
      body: Buffer.from('foo-content'),
      contentType: 'text/plain'
    });
    await test.info().attach('foo-attach', { body: 'foo-content' })
  });
});