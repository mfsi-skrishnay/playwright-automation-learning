const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test('Download a file', async ({ page }) => {

    // Open download page
    await page.goto('https://the-internet.herokuapp.com/download');

    // Wait for download and click file simultaneously
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('a').filter({ hasText: '.txt' }).first().click()
    ]);

    // Get downloaded file name
    const fileName = download.suggestedFilename();
    console.log('File Name:', fileName);

    // Create save path
    const filePath = path.join('./downloads', fileName);

    // Save file
    await download.saveAs(filePath);

    // Verify file exists
    expect(fs.existsSync(filePath)).toBeTruthy();
    console.log('Download Successful');
});