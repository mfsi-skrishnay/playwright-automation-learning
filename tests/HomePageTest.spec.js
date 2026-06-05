const{test,expect}= require('@playwright/test')
test("Home Page",async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    let pagetitle = page.title();
    console.log("page title is ", pagetitle);
    await expect(page).toHaveTitle("STORE");
    let pageUrl= page.url();
    console.log("page Url is ", pageUrl);
    await expect(page).toHaveURL(pageUrl);

})