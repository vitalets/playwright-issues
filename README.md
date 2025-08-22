## [BUG]: Internal error: step id not found

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
There is an error in the output `Internal error: step id not found`:
```
Running 1 test using 1 worker
Internal error: step id not found: test.attach@34
  1 passed (343ms)
```
The attachment is still added to the report.

### Expected result

No errors in the output.