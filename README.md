## [BUG]: Playwright HTML reporter does not show code snippets

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
4. Open html report
```
npx playwright show-report
```

### Actual result
When clicking on `Step 1` reporter shows only `page.goto(https://playwright.dev)` without code snippet:

<img width="50%" src="https://github.com/user-attachments/assets/53e2fa8e-3be0-4897-a6b6-396be5ce27ac">

### Expected result
Reporter shows step code snippet:

<img width="50%" src="https://github.com/user-attachments/assets/c5244611-e3d2-4bc4-a528-b3c43e210127">

## Possible reason
If I comment `testDir: 'test'` option in Playwright config, HTML reporter shows code snippet.

