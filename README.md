## [BUG]: testInfo.attach() and testInfo.attachments.push() produce different reporter data

### Steps to reproduce

1. Clone the repo and switch to this branch
2. Install dependencies
```
npm i
```
3. Install Playwright 1.49
```
npm i -D @playwright/test@1.49
```
4. Run tests
```
npx playwright test
```
5. Steps structure in reporter data:
- there is an extra step `attach "foo-attach"` created for `testInfo.attach()`
- there is an extra step `attach "foo-push"` created for `testInfo.attachments.push()`

```
{
  title: 'step',
  titlePath: [Function: titlePath],
  parent: undefined,
  category: 'test.step',
  startTime: 2025-01-18T09:39:07.388Z,
  duration: 1,
  steps: [
    {
      title: 'attach "foo-push"',
      titlePath: [Function: titlePath],
      parent: [Circular *1],
      category: 'attach',
      startTime: 2025-01-18T09:39:07.389Z,
      duration: 0,
      steps: [],
      location: [Object]
    },
    {
      title: 'attach "foo-attach"',
      titlePath: [Function: titlePath],
      parent: [Circular *1],
      category: 'attach',
      startTime: 2025-01-18T09:39:07.389Z,
      duration: 0,
      steps: [],
      location: [Object]
    }
  ],
```
6. Install Playwright 1.50
```
npm i -D @playwright/test@beta
```
7. Run tests
```
npx playwright test
```
8. Steps structure in reporter data:
- there is an extra step `attach "foo-attach"` created for `testInfo.attach()` (as in 1.49)
- there is NO extra step created for `testInfo.attachments.push()`, attachment is directly in `step.attachments`

```
{
  title: 'step',
  titlePath: [Function: titlePath],
  parent: undefined,
  category: 'test.step',
  startTime: 2025-01-18T09:43:11.736Z,
  duration: 1,
  steps: [
    {
      title: 'attach "foo-attach"',
      titlePath: [Function: titlePath],
      parent: [Circular *1],
      category: 'attach',
      startTime: 2025-01-18T09:43:11.736Z,
      duration: 1,
      steps: [],
      attachments: [Array],
      location: [Object]
    }
  ],
  attachments: [
    {
      name: 'foo-push',
      path: undefined,
      contentType: 'text/plain',
      body: <Buffer 66 6f 6f 2d 63 6f 6e 74 65 6e 74>
    }
  ],
}
```

### Expected result
Behavior of `testInfo.attach()` and `testInfo.attachments.push()` is consistent: both produce equal reporter data structure.

