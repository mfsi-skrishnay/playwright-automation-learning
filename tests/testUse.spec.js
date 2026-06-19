const { test, expect } = require('@playwright/test');

test.use({
    viewport: {
        width: 1920,
        height: 1080
    }
});

test("Google Test", async ({ page }) => {
    await page.goto("https://google.com");
    console.log(await page.title());
});

test("Bing Test", async ({ page }) => {
    await page.goto("https://bing.com");
    console.log(await page.title());
});