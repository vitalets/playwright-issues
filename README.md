## Reporter API: steps after timed-out step are incorrectly located inside after hooks (since PW 1.42)

#### Steps to reporduce:
1. install Playwright 1.42:
```
npm i @playwright/test@1.42
```
2. run tests:
```
npm t
```
3. see output with title path of `step 2`:
```
[ 'After Hooks', 'fixture: myFixture', 'step 2' ]
```
#### Expected result
`step 2` is located in top-level steps of test result.

#### In Playwright 1.41 it works correctly
1. install Playwright 1.41:
```
npm i @playwright/test@1.41
```
2. run tests:
```
npm t
```
3. check output with title path of `step 2`:
```
[ 'step 2' ]
```