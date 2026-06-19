const { test } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });

test.beforeAll(async () => {
    console.log(">>> beforeAll");
});

test.beforeEach(async ({ page }) => {
    console.log(">>> beforeEach");
});

test.afterEach(async ({ page }) => {
    console.log(">>> afterEach");
});

test.afterAll(async () => {
    console.log(">>> afterAll");
});

test("Test 1", async ({ page }) => {

    console.log("Executing Test 1");

    await page.goto("https://google.com");

});

test("Test 2", async ({ page }) => {

    console.log("Executing Test 2");

    await page.goto("https://bing.com");

});

test("Test 3", async ({ page }) => {

    console.log("Executing Test 3");

    await page.goto("https://youtube.com");

});