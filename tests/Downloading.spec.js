const { test, expect } = require('@playwright/test');
const path = require('path');  //Node js built In module use to create file path safely
const fs = require('fs');     //File System module used for check file exist/read file/create file/delete file
test('download a file and verify', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const [download] = await Promise.all([  
    page.waitForEvent('download'),
    page.locator('a').filter({ hasText: '.txt' }).first().click(),
  ]);

  // suggestedFilename() — the filename the browser would use
  const filename = download.suggestedFilename();
  console.log('Downloaded:', filename);

  // Save to a specific path
  const savePath = path.join('test-downloads', filename);
  await download.saveAs(savePath);
  console.log(savePath)

  // Verify file was saved
  expect(fs.existsSync(savePath)).toBe(true);
  const stats = fs.statSync(savePath);
  expect(stats.size).toBeGreaterThan(0);
  console.log('File size:', stats.size, 'bytes');

  // Clean up
  fs.unlinkSync(savePath);
});