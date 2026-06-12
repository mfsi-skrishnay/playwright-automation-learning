const { test, expect } = require('@playwright/test');

test('Understanding locator.waitFor() states', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    const startButton = page.locator('#start button');
    const loadingBar = page.locator('#loading');
    const finishText = page.locator('#finish');

    await startButton.waitFor({
        state: 'attached'
    });
    console.log('Start button is attached to DOM');

    await startButton.waitFor({
        state: 'visible'
    });
    console.log('Start button is visible');
    await startButton.click();
    await loadingBar.waitFor({
        state: 'hidden'
    });
    console.log('Loading bar became hidden');

    await finishText.waitFor({
        state: 'visible'
    });
    console.log('Hello World text is visible');

    await expect(finishText).toHaveText('Hello World!');

});