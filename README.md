## [BUG]: Test files with '@' in name produce unexpected tags

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

`@sample.test.ts` is added as a tag.

### Expected result

No tags added.
