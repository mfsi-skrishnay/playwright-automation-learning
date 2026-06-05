const{chromium}= require('playwright');
(async ()=>{
    const browser= await chromium.launch({
        headless: false,
        devtools: false,
        slowMo: 0,
        timeout: 2000,
        args:[
            '--start-maximized',
            '--disable-infobars'
        ]
    })
    const page=await browser.newPage();
    await page.goto("https://www.demoblaze.com");
    await page.close();
    await browser.close();

})();