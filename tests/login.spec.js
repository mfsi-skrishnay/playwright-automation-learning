const { test, expect } = require('@playwright/test');

test("Verify Dashboard", async ({ page }) => {

    // loggedInPage is coming from custom fixture
    await expect(page).toHaveURL(/dashboard/);

    await expect(
        page.locator("//h6[text()='Dashboard']")
    ).toBeVisible();

});

// test("Verify PIM Menu", async ({ page }) => {

//     await page.locator("//span[text()='PIM']").click();

//     await expect(page).toHaveURL(/pim/);

// });