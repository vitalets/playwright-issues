import type {
  FullConfig, FullResult, Reporter, Suite, TestCase, TestResult
} from '@playwright/test/reporter';

export default class MyReporter implements Reporter {
  onTestEnd(test: TestCase, result: TestResult) {
    console.log('annotations:', test.annotations);
  }
}