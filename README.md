# Chromium service worker ignores `timezoneId` at startup

The test configures `Europe/Madrid` and verifies that an ordinary page uses it.
It then loads a minimal extension whose first statement records its service
worker's timezone and parses a local date. No extension page is opened.

```sh
git clone --branch service-worker-timezone --single-branch https://github.com/vitalets/playwright-issues.git
cd playwright-issues
npm ci
npx playwright install chromium
npm test
```

Expected worker values:

```json
{
  "timezone": "Europe/Madrid",
  "localDate": "2030-01-01T22:00:00.000Z"
}
```

On macOS with Chromium launched using `TZ=UTC`, the worker instead records:

```json
{
  "timezone": "UTC",
  "localDate": "2030-01-01T23:00:00.000Z"
}
```

`TZ=UTC` establishes a different browser default on macOS/Linux. Chromium on
Windows uses the OS timezone instead; reproduce there with an OS timezone other
than Madrid. This reproduction uses native `Date` and `Intl`, with no clock mocks
or dependencies beyond Playwright.
