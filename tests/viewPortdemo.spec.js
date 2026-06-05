const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    
    const page = await browser.newPage({
        viewport: {
            width: 1920,
            height: 1080
        }
    });

    await page.goto('https://www.demoblaze.com');
})();

