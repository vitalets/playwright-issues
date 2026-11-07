# Chromium service worker ignores `timezoneId` at startup

The test configures `Europe/Madrid` and verifies that an ordinary page uses it.
It then loads a minimal extension whose first statement records its service
worker's timezone and parses a local date. No extension page is opened.

**Choose a timezone different from your system timezone.** Madrid is just the
example: if your system already uses Madrid, change the `timezoneId` variable in
`test/timezone.spec.ts` to another zone, such as `Asia/Tokyo`. The assertions use
the page's values, so no other changes are needed.

```sh
git clone --branch service-worker-timezone --single-branch https://github.com/vitalets/playwright-issues.git
cd playwright-issues
npm ci
npx playwright install chromium
# Adjust timezoneId in test/timezone.spec.ts if needed.
npm test
```

Expected: the service worker's startup timezone and parsed date match the page.
Actual: the page uses the configured timezone, but the worker uses the system
timezone. If both timezones are the same, the test passes and masks the bug.

For example, with a system timezone of `Europe/Madrid` and `timezoneId` changed
to `Asia/Tokyo`:

```diff
- "timezone": "Asia/Tokyo"
+ "timezone": "Europe/Madrid"
- "localDate": "2030-01-01T14:00:00.000Z"
+ "localDate": "2030-01-01T22:00:00.000Z"
```

This reproduction uses native `Date` and `Intl`, with no clock mocks,
timezone environment variables, or dependencies beyond Playwright.
