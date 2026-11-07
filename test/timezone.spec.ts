import { resolve } from 'node:path';
import { chromium, expect, test } from '@playwright/test';

test('timezoneId applies before an extension service worker starts', async () => {
  const context = await chromium.launchPersistentContext('', {
    channel: 'chromium',
    headless: true,
    timezoneId: 'Europe/Madrid',
    env: { ...process.env, TZ: 'UTC' },
    args: ['--enable-unsafe-extension-debugging'],
    ignoreDefaultArgs: ['--disable-extensions'],
  });

  try {
    const page = context.pages()[0];
    expect(await page.evaluate(() => Intl.DateTimeFormat().resolvedOptions().timeZone)).toBe(
      'Europe/Madrid',
    );

    const session = await context.browser()!.newBrowserCDPSession();
    const workerStarted = context.waitForEvent('serviceworker');
    await session.send('Extensions.loadUnpacked', { path: resolve(__dirname, '../extension') });
    const worker = await workerStarted;

    // No extension page is opened: its timezone override could affect the worker's renderer.
    expect(await worker.evaluate('globalThis.startup')).toEqual({
      timezone: 'Europe/Madrid',
      localDate: '2030-01-01T22:00:00.000Z',
    });
  } finally {
    await context.close();
  }
});
