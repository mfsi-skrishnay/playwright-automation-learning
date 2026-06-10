const {expect,test} = require('@playwright/test')
test("MultiSelect DropDown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Select multiple options from multi select DD
    await page.selectOption('#colors',['Blue','Red','Yellow'])

   //Assertions 
   //1)Check no. of options in dd
    // const options= await page.locator('#colors option')
    // await expect(options).toHaveCount(5);
    
   //2) Check no. of options in dd 
    // const options= await page.$$('#colors option')
    // console.log(options.length)
    // await expect(options.length).toBe(7)

    


    await page.waitForTimeout(3000)
    
})