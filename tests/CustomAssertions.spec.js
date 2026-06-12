const { test, expect } = require('@playwright/test');

expect.extend({
  async toHaveBlogTitle(page, expectedTitle) {

    const title = await page.title();

    const pass = title.includes(expectedTitle);

    return {
      pass,
      message: () =>
        pass ? `Expected title not to contain "${expectedTitle}"`: `Expected title to contain "${expectedTitle}", but got "${title}"`,
    };
  },
});

test('Custom Title Assertion', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  await expect(page).toHaveBlogTitle('Automation');

});