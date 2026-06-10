const { test, expect } = require('@playwright/test');

test('Soft Assertions Example', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Soft Assertions
    await expect.soft(page).toHaveTitle('Automation Testing Practice');
    await expect.soft(page.locator('h1')).toHaveText('Automation Testing Practice');
    await expect.soft(page.locator('#name')).toBeVisible();

    await expect.soft(page.locator('#email')).toBeVisible();

    console.log('Test execution continued even if any soft assertion failed.');
   
});