import { test as base } from '@playwright/test';
import { execSync } from 'child_process';

const test = base.extend<{myFixture: void}>({
  myFixture: async ({}, use) => {
    await use();
  }
});

test('my test', async ({}) => {
  console.log('foo');
  execSync('echo bar');
  console.log('baz');
});

test('my test (inherit)', async ({}) => {
  console.log('foo');
  execSync('echo bar', { stdio: 'inherit' });
  console.log('baz');
});