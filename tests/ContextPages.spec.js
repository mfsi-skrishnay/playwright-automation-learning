const{expect, test, chromium}= require('@playwright/test');
test('Handle pages and contexts', async()=>{
    const browser= await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page1= await context.newPage();
    const page2= await context.newPage();

    const allPages= context.pages();
    console.log("No. of pages created: ", allPages.length);
        
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.demoblaze.com/")
    await expect(page2).toHaveTitle("STORE")

})