## [BUG]: Worker auto-fixture is nested into the first beforeAll hook

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

Worker auto-fixture is nested within the beforeAll hook and it's duration added to the hook's duration:
```
hook Before Hooks (1139ms)
  hook beforeAll hook (1134ms)
    fixture Fixture "workerFixture" (1002ms)
hook After Hooks (4ms)
```

### Expected result

Worker auto-fixture on the same level as beforeAll fixture, durations are not added:

```
hook Before Hooks (1122ms)
  hook beforeAll hook (117ms)
  fixture Fixture "workerFixture" (1001ms)
hook After Hooks (3ms)
```