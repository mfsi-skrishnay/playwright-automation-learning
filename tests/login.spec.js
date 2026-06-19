const { test, expect } = require('./fixtures');

test("Verify Dashboard", async ({ loggedInPage }) => {

    // loggedInPage is coming from custom fixture
    await expect(loggedInPage).toHaveURL(/dashboard/);

    await expect(
        loggedInPage.locator("//h6[text()='Dashboard']")
    ).toBeVisible();

});

test("Verify PIM Menu", async ({ loggedInPage }) => {

    await loggedInPage.locator("//span[text()='PIM']").click();

    await expect(loggedInPage).toHaveURL(/pim/);

});