/**
 * Custom reporter that prints step info to stdout.
 */
import { Reporter, TestCase, TestResult, TestStep } from '@playwright/test/reporter';

class MyReporter implements Reporter {
  onStepBegin(test: TestCase, result: TestResult, step: TestStep) {
    console.log('onStepBegin', step.title, result.attachments.length)
  }

  onStepEnd(test: TestCase, result: TestResult, step: TestStep) {
    console.log('onStepEnd', step.title, result.attachments.length)
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log('onTestEnd', result.attachments.length)
  }

  printsToStdio() {
    return true;
  }
}

export default MyReporter;
