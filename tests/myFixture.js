const base = require('@playwright/test');
exports.test = base.test.extend({

    loggedInPage: async ({ page }, use) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        await page.locator('input[name="username"]').fill("Admin");
        await page.locator('input[name="password"]').fill("admin123");
        await page.locator('button[type="submit"]').click();
        await page.waitForURL(/dashboard/);

        console.log("Login successful");
        await use(page);
        console.log("Test completed");
    }

});

exports.expect = base.expect;