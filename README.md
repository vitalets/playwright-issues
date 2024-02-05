## Steps

#### Run Playwright with custom reporter
```
npx playwright test
```
Output:
```
onStepBegin Before Hooks 0
onStepEnd Before Hooks 0
onStepBegin step 1 0
onStepBegin attach "my attachment" 0
onStepEnd attach "my attachment" 1
onStepEnd step 1 1
onStepBegin step 2 1
onStepBegin attach "my attachment" 1
onStepEnd attach "my attachment" 2
onStepEnd step 2 2
onStepBegin After Hooks 2
onStepEnd After Hooks 2
onTestEnd 2
```

#### Run Playwright with Blob reporter and then merge
```
npx playwright test --shard 1/1
```
And run merge:
```
npx playwright merge-reports --reporter ./reporter.ts ./blob-report
```
Output:
```
onStepBegin Before Hooks 0
onStepEnd Before Hooks 0
onStepBegin step 1 0
onStepBegin attach "my attachment" 0
onStepEnd attach "my attachment" 0
onStepEnd step 1 0
onStepBegin step 2 0
onStepBegin attach "my attachment" 0
onStepEnd attach "my attachment" 0
onStepEnd step 2 0
onStepBegin After Hooks 0
onStepEnd After Hooks 0
onTestEnd 2
```
Notice 0 attachments count after each step.