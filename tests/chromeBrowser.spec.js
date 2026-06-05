const{chromium} = require('playwright');
(async()=>{
    const browser= await chromium.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto("https://www.demoblaze.com");
    console.log(await page.title());            //STORE
    await page.close();
    await browser.close();
})();
