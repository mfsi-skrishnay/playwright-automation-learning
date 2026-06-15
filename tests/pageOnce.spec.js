const { test, expect } = require('@playwright/test');

// Alert with OK button
test("Alert with Ok button", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Dialog handler
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    const simpleAlert = page.getByText('Simple Alert', { exact: true });
    await simpleAlert.click();

    await page.waitForTimeout(2000);
});
