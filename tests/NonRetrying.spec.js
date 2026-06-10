const { test, expect } = require('@playwright/test');

test('Non-Retrying Assertion Example', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const nameField = page.locator('#name');
    await nameField.fill('Krishna');
    const value = await nameField.inputValue();

    expect(value).toBe('Krishna');
});