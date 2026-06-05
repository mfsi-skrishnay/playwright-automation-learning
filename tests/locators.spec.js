const{test, expect}= require('@playwright/test');
// import{test, expect} from '@playwright/test' ;

test("locators", async({page})=>{
     await page.goto("https://www.demoblaze.com/");
    
     //click on login button 
    await page.locator('#login2').click();
  //  await page.locator('#recipient-email').fill("pavanol");
    await page.fill('#loginusername','pavanol')
    await page.locator('#loginpassword').fill("test@123");
    await page.click('[onclick="logIn()"]');

    const logoutbtn= await page.locator('#logout2');
    await expect(logoutbtn).toBeVisible();
    await page.close();
    
    

})
