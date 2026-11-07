import { resolve } from 'node:path';
import { chromium, expect, test } from '@playwright/test';

test('timezoneId applies before an extension service worker starts', async () => {
  // Choose a timezone different from your system timezone.
  const timezoneId = 'Europe/Madrid';
  const context = await chromium.launchPersistentContext('', {
    channel: 'chromium',
    headless: true,
    timezoneId,
    args: ['--enable-unsafe-extension-debugging'],
    ignoreDefaultArgs: ['--disable-extensions'],
  });

  try {
    const page = context.pages()[0];
    const pageValues = await page.evaluate(() => ({
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      localDate: new Date('2030-01-01T23:00').toISOString(),
    }));
    expect(pageValues.timezone).toBe(timezoneId);

    const session = await context.browser()!.newBrowserCDPSession();
    const workerStarted = context.waitForEvent('serviceworker');
    await session.send('Extensions.loadUnpacked', { path: resolve(__dirname, '../extension') });
    const worker = await workerStarted;

    // No extension page is opened: its timezone override could affect the worker's renderer.
    expect(await worker.evaluate('globalThis.startup')).toEqual(pageValues);
  } finally {
    await context.close();
  }
});
