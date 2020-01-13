import { expect, element, by } from 'detox';

describe('Example', () => {
    it('should have welcome screen', async () => {
        await expect(element(by.id('welcome'))).toBeVisible();
    });

    it('should show hello screen after tap', async () => {
        await element(by.id('button')).tap();
        await expect(element(by.text('Hello World!'))).toBeVisible();
        await element(by.text('OK')).tap();
    });
});
