## If fixture timeouts in teardown phase, no other fixtures run (1.43)
There are two fixtures:
- `timeoutedFixture` - timeouts in teardown phase
- `anotherFixture` - log setup and tardown phases

#### Steps to reproduce

Install Playwright 1.43 (beta):
```
npm i -D @playwright/test@beta
npx playwright test
```

#### Actual output
```
AnotherFixture: setup
```
`AnotherFixture: teardown` not printed

#### Expected output
```
AnotherFixture: setup
AnotherFixture: teardown
```

After downgrading to Playwright 1.42 everything works as expected:
```
npm i -D @playwright/test@1.42
npx playwright test
```
Output:
```
AnotherFixture: setup
AnotherFixture: teardown
```