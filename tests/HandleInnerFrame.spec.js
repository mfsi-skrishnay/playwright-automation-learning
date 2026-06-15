const { test, expect } = require('@playwright/test');

test("Inner Frames", async ({ page }) => {
    await page.goto('https://demoqa.com/nestedframes');
    const parentFrame= await page.frameLocator('#frame1');
    await expect(parentFrame.locator('body')).toHaveText('Parent frame')

    const childFrame=await parentFrame.frameLocator('iframe')
    await expect(childFrame.locator('p')).toHaveText('Child Iframe')

    await page.waitForTimeout(3000);
});
