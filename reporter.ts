import type { Reporter, TestCase, TestResult, TestStep } from '@playwright/test/reporter';

export default class MyReporter implements Reporter {
  onTestEnd(test: TestCase, result: TestResult) {
    // console.dir(result.steps, { depth: 4});
    printSteps(result.steps);
  }
}

function printSteps(steps: TestStep[], indent = 0) {
  for (const step of steps) {
    console.log(`${' '.repeat(indent)}${step.category} ${step.title}`, `(${step.duration}ms)`);
    if (step.steps?.length) printSteps(step.steps, indent + 2);
  }
}
