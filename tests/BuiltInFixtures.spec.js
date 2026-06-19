const { test, expect } = require('@playwright/test');

test("Browser, Context and Page fixtures demo", async ({ browser, context, page }) => {

    await page.goto("https://google.com");
    console.log("Default Page Title:", await page.title());

    const page2 = await context.newPage();
    await page2.goto("https://bing.com");
    console.log("Page2 Title:", await page2.title());

    const newContext = await browser.newContext();

    const page3 = await newContext.newPage();
    await page3.goto("https://youtube.com");
    console.log("Page3 Title:", await page3.title());

    await newContext.close();
});