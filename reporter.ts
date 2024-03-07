/**
 * Custom reporter that prints step info to stdout.
 */
import { FullProject } from '@playwright/test';
import { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';

export default class MyReporter implements Reporter {
  projects = new Set<FullProject | undefined>();

  onTestEnd(test: TestCase, result: TestResult) {
    this.projects.add(test.parent.project());
  }

  onEnd() {
    console.log('projects', this.projects);
  }

  printsToStdio() {
    return true;
  }
}

