import { test as base } from '@playwright/test';

const test = base.extend<{ myFixture: void }>({
    myFixture: [async ({}, use, testInfo) => {
        await use();
        await testInfo.attach('my attachment', {
            body: 'foo',
            contentType: 'text/plain',
        });
    }, { box: true }],
});

test('my test', ({ myFixture }) => {});
