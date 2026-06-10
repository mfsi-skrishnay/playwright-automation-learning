const { test, expect } = require('@playwright/test');

test('Auto-Retrying Assertion Example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const nameField = page.locator('#name');

    // Auto-retrying assertion
    await expect(nameField).toBeVisible();

    await nameField.fill('Krishna');
    await expect(nameField).toHaveValue('Krishna');
});