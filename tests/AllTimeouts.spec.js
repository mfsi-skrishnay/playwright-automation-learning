const { test, expect } = require('@playwright/test');

test('Test Timeout Example', async ({ page }) => {      //TestTimeout

    test.setTimeout(10000); // 10 seconds for entire test

    await page.goto('https://www.google.com');

    await page.waitForTimeout(5000);

    console.log('Test completed within 10 seconds');
});

test('Action Timeout Example', async ({ page }) => {    //Action Timeout

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#name').fill('Krishna', {
        timeout: 5000
    });

    console.log('Fill action completed');
});

test('Navigation Timeout Example', async ({ page }) => {         //Navigation TImeout

    page.setDefaultNavigationTimeout(15000);

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    console.log('Navigation completed');
});

test('Expect Timeout Example', async ({ page }) => {      //Expect timeout

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await expect(
        page.locator('button[type="submit"]')
    ).toBeVisible({
        timeout: 7000
    });

    console.log('Assertion passed');
});

test('waitFor Timeout Example', async ({ page }) => {     //waitFor Timeout

    await page.goto('https://www.wikipedia.org/');

    await page.locator('#searchInput').waitFor({
        state: 'visible',
        timeout: 5000
    });

    console.log('Element became visible');
});