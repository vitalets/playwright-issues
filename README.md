## [BUG]: Playwright does not append `testDir` to error location

In the error output Playwright does not append `testDir` to error location.
Due to that, I'm unable to use cmd+click to navigate to the error line in the test.

### Steps to reproduce

1. Clone the repo and switch to this branch
2. Install dependencies
```
npm i
```
3. Run tests
```
npx playwright test
```

### Actual result
```
  1 failed
    sample.test.ts:9:1 › my test ───────────────────────────────────────────────────────────────────
```

### Expected result
```
  1 failed
    test/sample.test.ts:9:1 › my test ──────────────────────────────────────────────────────────────
```

## Additional context
If I comment `testDir` in Playwright config and it uses default `testDir`, then path to error contains `testDir`:

```ts
export default defineConfig({
  // testDir: 'test',
  reporter: [['html', { open: 'never' }]],
});
```
