const { test, expect } = require('@playwright/test');

test('Pagination Validation and Data Reading', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Pagination Locator
    const pages = page.locator('.pagination li a');

    // Verify pagination is displayed
    await expect(page.locator('.pagination')).toBeVisible();

    // Verify number of pages
    const totalPages = await pages.count();

    console.log("Total Pages:", totalPages);

    expect(totalPages).toBeGreaterThan(0);

    // Click through all pages and read data
    for (let p = 0; p < totalPages; p++) {

        await pages.nth(p).click();

   // Locate rows after page navigation
        const rows = page.locator('#productTable tbody tr');

   // Verify rows exist
        expect(await rows.count()).toBeGreaterThan(0);

        for (let i = 0; i < await rows.count(); i++) {

            const rowText = await rows.nth(i).textContent();
            console.log(rowText);
        }
    }
});