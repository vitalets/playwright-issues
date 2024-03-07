## Steps to reporduce

```
# 1. run first shard and copy blob report
npx playwright test --shard 1/2
mkdir -p all-blob-reports && cp -r blob-report/ all-blob-reports

# 2. run second shard
npx playwright test --shard 2/2
mkdir -p all-blob-reports && cp -r blob-report/ all-blob-reports

# 3. merge reports
npx playwright merge-reports --reporter=reporter.ts all-blob-reports
```
Output (2 projects):
```
projects Set(2) {
  {
    __projectId: '038c2392796d4a22',
    metadata: { reportName: undefined },
    name: '',
    outputDir: '/Users/vitalets/projects/playwright-issues/test-results',
    repeatEach: 1,
    retries: 0,
    testDir: '',
    testIgnore: [],
    testMatch: [ '**/*.@(spec|test).?(c|m)[jt]s?(x)' ],
    timeout: 30000,
    grep: [ /.*/ ],
    grepInvert: [],
    dependencies: [],
    teardown: undefined,
    snapshotDir: '',
    use: {}
  },
  {
    __projectId: '1eb99aebfb39e9e7',
    metadata: { reportName: undefined },
    name: '',
    outputDir: '/Users/vitalets/projects/playwright-issues/test-results',
    repeatEach: 1,
    retries: 0,
    testDir: '',
    testIgnore: [],
    testMatch: [ '**/*.@(spec|test).?(c|m)[jt]s?(x)' ],
    timeout: 30000,
    grep: [ /.*/ ],
    grepInvert: [],
    dependencies: [],
    teardown: undefined,
    snapshotDir: '',
    use: {}
  }
}
```
Notice attachments count in onStepEnd-s.

#### Run Playwright without merge reports
```
npx playwright test
```
Output (1 project):
```
projects Set(1) {
  {
    grep: /.*/,
    grepInvert: null,
    outputDir: '/Users/vitalets/projects/playwright-issues/test-results',
    repeatEach: 1,
    retries: 0,
    metadata: undefined,
    name: '',
    testDir: '/Users/vitalets/projects/playwright-issues',
    snapshotDir: '/Users/vitalets/projects/playwright-issues',
    testIgnore: [],
    testMatch: '**/*.@(spec|test).?(c|m)[jt]s?(x)',
    timeout: 30000,
    use: {},
    dependencies: [],
    teardown: undefined,
    __projectId: ''
  }
}
```
