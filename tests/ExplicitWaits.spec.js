const { test, expect } = require('@playwright/test');

test('Wait for Login Button', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForSelector('button[type="submit"]');
    await expect(
        page.locator('button[type="submit"]')
    ).toBeVisible();

});