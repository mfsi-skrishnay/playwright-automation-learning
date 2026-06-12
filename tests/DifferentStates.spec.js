const { test, expect } = require('@playwright/test');

test('Different States', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const searchBox = page.getByPlaceholder('Enter Name');

    await expect(searchBox).toBeAttached();
    await expect(searchBox).toBeVisible();
    await expect(searchBox).toBeEnabled();
    await expect(searchBox).toBeEditable();

    await searchBox.fill('Krishna');
});