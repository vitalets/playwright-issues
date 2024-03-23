/**
 * Custom reporter that prints step info to stdout.
 */
import { Reporter, TestCase, TestResult, TestStep } from '@playwright/test/reporter';

class MyReporter implements Reporter {

  onStepEnd(test: TestCase, result: TestResult, step: TestStep) {
    if (step.title === 'step 2') console.log(step.titlePath());
  }

  onTestEnd(test: TestCase, result: TestResult) {
    // console.log('result.steps', result.steps);
  }
}

export default MyReporter;
