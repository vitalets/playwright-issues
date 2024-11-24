## [Bug]: test.step() fails in worker fixture teardown

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
Running 1 test using 1 worker
test/sample.test.ts:11:1 › my test
worker setup
Error: test.step() can only be called from a test
```

### Expected result
```
Running 1 test using 1 worker
test/sample.test.ts:11:1 › my test
worker setup
worker teardown
```
