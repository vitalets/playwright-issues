## [BUG] Anonymous describe is rendered in HTML report

### Steps to reproduce

1. Clone this repo and switch to the branch you are viewwing
2. Install dependencies
```
npm i
```
3. Run tests
```
npx playwright test
```
4. Open HTML report
```
npx playwright show-report
```

### Actual result
HTML report renders empty describe: `my suite › › my test`

### Expected result
HTML report does not render empty describe: `my suite › my test`